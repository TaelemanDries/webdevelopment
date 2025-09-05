window.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    if (!gallery) {
        console.warn('[Lightbox] .gallery niet gevonden');
        return;
    }

    const images = Array.from(gallery.querySelectorAll('img'));
    if (!images.length) {
        console.warn('[Lightbox] geen <img> in .gallery');
        return;
    }

    const lightbox   = document.getElementById('lightbox');
    const lbImg      = document.getElementById('lightboxImg');
    const btnPrev    = document.getElementById('lightboxPrev');
    const btnNext    = document.getElementById('lightboxNext');
    const btnClose   = document.getElementById('lightboxClose');
    const backdrop   = document.getElementById('lightboxBackdrop');

    if (!lightbox || !lbImg || !btnPrev || !btnNext || !btnClose || !backdrop) {
        console.error('[Lightbox] HTML container elementen ontbreken');
        return;
    }

    let idx = -1;
    let lastFocused = null;

    function setPageInert(isInert){
        // Alle body children behalve de lightbox zelf inert maken
        Array.from(document.body.children).forEach(el => {
            if (el === lightbox) return;
            if (isInert) el.setAttribute('inert','');
            else el.removeAttribute('inert');
        });
    }

    function openAt(i){
        lastFocused = document.activeElement;
        idx = i;
        updateImage();
        lightbox.classList.add('is-open');
        document.body.classList.add('lb-no-scroll');
        setPageInert(true);
        btnNext.focus({preventScroll:true});
    }

    function closeLb(){
        // Focus verwijderen uit modal
        [btnNext, btnPrev, btnClose, lbImg].forEach(el => el.blur());
        lightbox.classList.remove('is-open');
        document.body.classList.remove('lb-no-scroll');
        setPageInert(false);
        if (lastFocused && typeof lastFocused.focus === 'function') {
            lastFocused.focus({preventScroll:true});
        }
        idx = -1;
    }

    function updateImage(){
        const el = images[idx];
        lbImg.src = el.src;
        lbImg.alt = el.alt || '';
        btnPrev.disabled = (idx <= 0);
        btnNext.disabled = (idx >= images.length - 1);
        // preload buren
        [idx-1, idx+1].forEach(j => {
            if (j>=0 && j<images.length) {
                const pre = new Image();
                pre.src = images[j].src;
            }
        });
    }

    function next(){ if(idx < images.length-1){ idx++; updateImage(); } }
    function prev(){ if(idx > 0){ idx--; updateImage(); } }

    // events
    images.forEach((imgEl, i) => {
        imgEl.addEventListener('click', () => openAt(i));
        imgEl.style.cursor = 'pointer';
    });

    btnNext.addEventListener('click', next);
    btnPrev.addEventListener('click', prev);
    btnClose.addEventListener('click', closeLb);
    backdrop.addEventListener('click', closeLb);

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('is-open')) return;
        if (e.key === 'ArrowRight' && !btnNext.disabled) next();
        if (e.key === 'ArrowLeft'  && !btnPrev.disabled) prev();
        if (e.key === 'Escape') closeLb();
    });
});
