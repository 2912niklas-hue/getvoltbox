
document.querySelector('#menuBtn')?.addEventListener('click', () => {
  const m = document.querySelector('#mobileMenu');
  if(!m) return;
  m.style.display = (m.style.display === 'block') ? 'none' : 'block';
});

// smooth anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href').slice(1);
    const el=document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
  })
});

// Year in footer
document.querySelectorAll('[data-year]').forEach(n=>n.textContent = new Date().getFullYear());
