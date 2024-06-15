document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    const placeholders = document.querySelectorAll('.cards-placeholder__item');
    let currentIndex = 0;
    const bodyEl = document.querySelector('body');
    const BODY_BACKGROUNDS = ['#8850FF', '#FFBA00', '#4054FF'];
  
    function setActivePlaceholder() {
      placeholders.forEach((placeholder, index) => {
        placeholder.classList.toggle('cards-placeholder__item--active', index === currentIndex);
      });
      bodyEl.style.backgroundColor = BODY_BACKGROUNDS[currentIndex];
    }
  
    function showCard(index) {
      cards.forEach((card, idx) => {
        card.style.transform = `translateX(${(idx - index) * 100}%)`;
      });
      setActivePlaceholder();
    }
  
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
  
    function handleTouchStart(evt) {
      startX = evt.touches[0].pageX;
      isDragging = true;
    }
  
    function handleTouchMove(evt) {
      if (!isDragging) return;
      currentX = evt.touches[0].pageX;
    }
  
    function handleTouchEnd() {
      isDragging = false;
      handleSwipe();
    }
  
    function handleMouseDown(evt) {
      startX = evt.pageX;
      isDragging = true;
    }
  
    function handleMouseMove(evt) {
      if (!isDragging) return;
      currentX = evt.pageX;
    }
  
    function handleMouseUp() {
      isDragging = false;
      handleSwipe();
    }
  
    function handleSwipe() {
      const diff = startX - currentX;
      if (Math.abs(diff) > window.innerWidth / 4) {
        if (diff > 0 && currentIndex < cards.length - 1) {
          currentIndex++;
        } else if (diff < 0 && currentIndex > 0) {
          currentIndex--;
        }
      }
      showCard(currentIndex);
      startX = 0;
      currentX = 0;
    }
  
    showCard(currentIndex);
  });
  