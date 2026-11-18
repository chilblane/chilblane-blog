// Image lightbox for case studies.
//
// Every link with data-lightbox-src (img and gallery shortcodes) opens in one
// native <dialog>. Left/right step through all images on the page in order.
// Without JS, or with a modifier key / middle click, the link opens the
// original image as usual.

const LINKS = 'main a[data-lightbox-src]';

let dialog, img, count, caption, prevBtn, nextBtn;
let links = [];
let index = 0;
let opener = null;

function build() {
  dialog = document.createElement('dialog');
  dialog.className = 'c-lightbox';
  dialog.setAttribute('aria-label', 'Image viewer');
  dialog.innerHTML = `
    <div class="c-lightbox__bar">
      <p class="c-lightbox__title"><span class="c-lightbox__count" aria-live="polite"></span></p>
      <button type="button" class="c-lightbox__close" aria-label="Close">&times;</button>
    </div>
    <figure class="c-lightbox__figure">
      <img class="c-lightbox__img" alt="" />
      <figcaption class="c-lightbox__caption"></figcaption>
    </figure>
    <button type="button" class="c-lightbox__nav c-lightbox__nav--prev" aria-label="Previous image"></button>
    <button type="button" class="c-lightbox__nav c-lightbox__nav--next" aria-label="Next image"></button>`;
  document.body.append(dialog);

  img = dialog.querySelector('.c-lightbox__img');
  count = dialog.querySelector('.c-lightbox__count');
  caption = dialog.querySelector('.c-lightbox__caption');
  prevBtn = dialog.querySelector('.c-lightbox__nav--prev');
  nextBtn = dialog.querySelector('.c-lightbox__nav--next');

  dialog
    .querySelector('.c-lightbox__close')
    .addEventListener('click', () => dialog.close());
  prevBtn.addEventListener('click', () => show(index - 1));
  nextBtn.addEventListener('click', () => show(index + 1));

  // Click on the dimmed area around the image closes the viewer.
  dialog.addEventListener('click', (e) => {
    if (
      e.target === dialog ||
      e.target.classList.contains('c-lightbox__figure')
    )
      dialog.close();
  });

  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(index - 1);
    else if (e.key === 'ArrowRight') show(index + 1);
  });

  // Swipe left/right on touch screens. The dialog's touch-action (pan-y
  // pinch-zoom, components/_lightbox.scss) keeps horizontal drags from being
  // claimed as a pan, which would end in pointercancel instead of pointerup.
  // While pinch-zoomed in, a drag pans the image instead of changing it.
  const zoomed = () => (window.visualViewport?.scale ?? 1) > 1.01;
  let startX = null;
  dialog.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' && !zoomed()) startX = e.clientX;
  });
  dialog.addEventListener('pointercancel', () => {
    startX = null;
  });
  dialog.addEventListener('pointerup', (e) => {
    if (startX === null) return;
    const dx = e.clientX - startX;
    startX = null;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
  });
  window.visualViewport?.addEventListener('resize', () => {
    dialog.style.touchAction = zoomed() ? 'auto' : '';
  });

  // Esc (native) or the close button: hand focus back to the clicked image.
  dialog.addEventListener('close', () => {
    img.removeAttribute('src');
    opener?.focus();
  });
}

function show(i) {
  index = (i + links.length) % links.length;
  const link = links[index];
  const thumb = link.querySelector('img');
  const full = link.dataset.lightboxSrc;

  // Show the thumbnail right away, then swap in the full image once loaded.
  img.src = thumb?.currentSrc || full;
  img.alt = thumb?.alt || '';
  const loader = new Image();
  loader.onload = () => {
    if (links[index] === link) img.src = full;
  };
  loader.src = full;

  const text = link
    .closest('figure')
    ?.querySelector('figcaption')
    ?.textContent.trim();
  caption.textContent = text || '';
  caption.hidden = !text;
  count.textContent = `image ${index + 1} / ${links.length}`;

  // Warm the cache for the neighbours.
  for (const n of [index - 1, index + 1]) {
    const next = links[(n + links.length) % links.length];
    if (next) new Image().src = next.dataset.lightboxSrc;
  }
}

// ---------------------------------------------------------------------------
// Justified gallery rows. CSS alone (components/_gallery.scss) can't fill the
// last row, so galleries end with empty space. This spreads the images over
// rows as evenly as the image shapes allow (7 images become 4 + 3, not
// 5 + 2) and scales each row to the exact width.

function justify(gallery) {
  const items = [...gallery.querySelectorAll('.c-gallery__item')];
  if (!items.length) return;
  const cs = getComputedStyle(gallery);
  const width =
    gallery.clientWidth -
    parseFloat(cs.paddingLeft) -
    parseFloat(cs.paddingRight);
  const gap = parseFloat(cs.columnGap) || 0;
  const probe = document.createElement('div');
  probe.style.height = 'var(--row)';
  gallery.append(probe);
  const rowHeight = probe.offsetHeight || 160;
  probe.remove();

  const ars = items.map(
    (a) => parseFloat(a.style.getPropertyValue('--ar')) || 1,
  );
  // Optimal row breaks: dp[i] is the best layout of the first i images, where
  // a row costs (images in it) x log(row height / target)^2. Every split is
  // considered, so rows come out as even as the image shapes allow, leaning a
  // little toward bigger images over cramped rows.
  const target = rowHeight * 1.15;
  // Height at which a row exactly fills the width. Scoring uses this raw
  // value; only the final layout caps it, so a lone image that would need to
  // be huge to fill its row is scored as the bad layout it is.
  const fillH = (start, end) => {
    const sum = ars.slice(start, end).reduce((s, a) => s + a, 0);
    return (width - gap * (end - start - 1)) / sum;
  };
  const rowH = (start, end) => Math.min(fillH(start, end), rowHeight * 2.5);
  const n = ars.length;
  const dp = [0];
  const from = [0];
  for (let i = 1; i <= n; i++) {
    dp[i] = Infinity;
    for (let j = 0; j < i; j++) {
      const h = fillH(j, i);
      // Squared log miss, so one far-off row costs more than several near
      // ones; a row that would need capping (and so leave a gap, letting the
      // next image wrap up into it) is only chosen when nothing else fits.
      const c =
        dp[j] +
        (i - j) * Math.log(h / target) ** 2 +
        (h > rowHeight * 2.5 ? 100 : 0);
      if (c < dp[i]) {
        dp[i] = c;
        from[i] = j;
      }
    }
  }
  const rows = [];
  for (let i = n; i > 0; i = from[i]) rows.unshift([from[i], i]);

  for (const [start, end] of rows) {
    const h = rowH(start, end);
    for (let i = start; i < end; i++) {
      items[i].style.flex = 'none';
      items[i].style.width = `${Math.floor(ars[i] * h * 100) / 100}px`;
    }
  }
  gallery.classList.add('is-justified');
}

function initGalleries() {
  const galleries = document.querySelectorAll('.c-gallery');
  if (!galleries.length) return;
  const widths = new WeakMap();
  const ro = new ResizeObserver((entries) => {
    for (const { target, contentRect } of entries) {
      if (widths.get(target) === contentRect.width) continue;
      widths.set(target, contentRect.width);
      justify(target);
    }
  });
  galleries.forEach((g) => ro.observe(g));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGalleries);
} else {
  initGalleries();
}

// ---------------------------------------------------------------------------

document.addEventListener('click', (e) => {
  const link = e.target.closest?.(LINKS);
  if (!link || e.defaultPrevented || e.button !== 0) return;
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // new tab/window
  if (typeof HTMLDialogElement !== 'function') return; // very old browser: follow the link

  e.preventDefault();
  if (!dialog) build();
  links = [...document.querySelectorAll(LINKS)];
  opener = link;
  const single = links.length < 2;
  prevBtn.hidden = single;
  nextBtn.hidden = single;
  show(links.indexOf(link));
  dialog.showModal();
});
