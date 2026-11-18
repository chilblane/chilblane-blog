// Image lightbox for case studies.
//
// Every link with data-lightbox-src (img and gallery shortcodes) opens in one
// native <dialog>. Left/right step through all images on the page in order.
// Without JS, or with a modifier key / middle click, the link opens the
// original image as usual.

const LINKS = "main a[data-lightbox-src]";

let dialog, img, count, caption, prevBtn, nextBtn;
let links = [];
let index = 0;
let opener = null;

function build() {
  dialog = document.createElement("dialog");
  dialog.className = "c-lightbox";
  dialog.setAttribute("aria-label", "Image viewer");
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

  img = dialog.querySelector(".c-lightbox__img");
  count = dialog.querySelector(".c-lightbox__count");
  caption = dialog.querySelector(".c-lightbox__caption");
  prevBtn = dialog.querySelector(".c-lightbox__nav--prev");
  nextBtn = dialog.querySelector(".c-lightbox__nav--next");

  dialog.querySelector(".c-lightbox__close").addEventListener("click", () => dialog.close());
  prevBtn.addEventListener("click", () => show(index - 1));
  nextBtn.addEventListener("click", () => show(index + 1));

  // Click on the dimmed area around the image closes the viewer.
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog || e.target.classList.contains("c-lightbox__figure")) dialog.close();
  });

  dialog.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") show(index - 1);
    else if (e.key === "ArrowRight") show(index + 1);
  });

  // Swipe left/right on touch screens.
  let startX = null;
  dialog.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse") startX = e.clientX;
  });
  dialog.addEventListener("pointerup", (e) => {
    if (startX === null) return;
    const dx = e.clientX - startX;
    startX = null;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
  });

  // Esc (native) or the close button: hand focus back to the clicked image.
  dialog.addEventListener("close", () => {
    img.removeAttribute("src");
    opener?.focus();
  });
}

function show(i) {
  index = (i + links.length) % links.length;
  const link = links[index];
  const thumb = link.querySelector("img");
  const full = link.dataset.lightboxSrc;

  // Show the thumbnail right away, then swap in the full image once loaded.
  img.src = thumb?.currentSrc || full;
  img.alt = thumb?.alt || "";
  const loader = new Image();
  loader.onload = () => {
    if (links[index] === link) img.src = full;
  };
  loader.src = full;

  const text = link.closest("figure")?.querySelector("figcaption")?.textContent.trim();
  caption.textContent = text || "";
  caption.hidden = !text;
  count.textContent = `image ${index + 1} / ${links.length}`;

  // Warm the cache for the neighbours.
  for (const n of [index - 1, index + 1]) {
    const next = links[(n + links.length) % links.length];
    if (next) new Image().src = next.dataset.lightboxSrc;
  }
}

document.addEventListener("click", (e) => {
  const link = e.target.closest?.(LINKS);
  if (!link || e.defaultPrevented || e.button !== 0) return;
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // new tab/window
  if (typeof HTMLDialogElement !== "function") return; // very old browser: follow the link

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
