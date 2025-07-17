document.addEventListener('DOMContentLoaded', () => {
  // Create cursor elements
  const cursor = document.createElement('div');
  const cursorDot = document.createElement('div');
  
  cursor.className = 'cursor';
  cursorDot.className = 'cursor-dot';
  
  document.body.appendChild(cursor);
  document.body.appendChild(cursorDot);
  
  // Add cursor styles
  const style = document.createElement('style');
  style.textContent = `
    .cursor {
      position: fixed;
      width: 20px;
      height: 20px;
      border: 2px solid #10B981;
      border-radius: 50%;
      pointer-events: none;
      z-index: 10000;
      transform: translate(-50%, -50%);
      transition: all 0.1s ease;
    }
    
    .cursor-dot {
      position: fixed;
      width: 4px;
      height: 4px;
      background: #10B981;
      border-radius: 50%;
      pointer-events: none;
      z-index: 10001;
      transform: translate(-50%, -50%);
      transition: all 0.1s ease;
    }
  `;
  document.head.appendChild(style);
  
  // Update cursor position
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
  });
});