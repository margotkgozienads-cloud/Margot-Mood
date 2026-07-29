// Atelier MK V7.3.6 - Hotfix gesture lock
// Optional JS helper: prevents accidental horizontal gesture drift while preserving vertical scroll.
(function () {
  let startX = 0;
  let startY = 0;
  document.addEventListener('touchstart', function (e) {
    if (!e.touches || !e.touches.length) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchmove', function (e) {
    if (!e.touches || !e.touches.length) return;
    const dx = Math.abs(e.touches[0].clientX - startX);
    const dy = Math.abs(e.touches[0].clientY - startY);
    if (dx > dy && dx > 18) {
      e.preventDefault();
    }
  }, { passive: false });
})();
