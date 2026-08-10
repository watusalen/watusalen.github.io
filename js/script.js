function show(id, tabElement) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  
  const targetSection = document.getElementById(id);
  if (targetSection) {
    targetSection.classList.add('active');
  }
  
  if (tabElement) {
    tabElement.classList.add('active');
    tabElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  const statusFile = document.getElementById('status-file');
  if (statusFile) {
    statusFile.textContent = id;
  }
}

window.show = show;

document.addEventListener('keydown', e => {
  const tabs = document.querySelectorAll('.tab');
  const active = document.querySelector('.tab.active');
  if (!active || tabs.length === 0) return;
  
  const idx = Array.from(tabs).indexOf(active);
  
  if (e.key === 'ArrowRight' && idx < tabs.length - 1) {
    tabs[idx + 1].click();
  } else if (e.key === 'ArrowLeft' && idx > 0) {
    tabs[idx - 1].click();
  }
});