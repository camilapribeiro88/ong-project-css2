// Menu hambúrguer
const btnHamb = document.querySelector('.btn-hamburger');
const mobileNav = document.getElementById('menuMobile');

if (btnHamb && mobileNav) {
  btnHamb.addEventListener('click', () => {
    const isOpen = !mobileNav.hasAttribute('hidden');
    if (isOpen) {
      mobileNav.setAttribute('hidden', '');
      btnHamb.setAttribute('aria-expanded', 'false');
    } else {
      mobileNav.removeAttribute('hidden');
      btnHamb.setAttribute('aria-expanded', 'true');
    }
  });
}

// Dropdowns no mobile
mobileNav?.addEventListener('click', (e) => {
  const trigger = e.target.closest('.dropdown-trigger');
  if (!trigger) return;
  const parent = trigger.closest('.has-dropdown');
  parent.classList.toggle('open');
  const expanded = parent.classList.contains('open');
  trigger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
});

// Modal
function openModal(sel){ document.querySelector(sel)?.removeAttribute('hidden'); }
function closeModal(el){ el.closest('.modal')?.setAttribute('hidden',''); }

document.querySelectorAll('[data-open-modal]').forEach(btn=>{
  btn.addEventListener('click', ()=> openModal(btn.getAttribute('data-open-modal')));
});
document.querySelectorAll('[data-close-modal]').forEach(btn=>{
  btn.addEventListener('click', ()=> closeModal(btn));
});
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape'){
    document.querySelectorAll('.modal').forEach(m=> m.setAttribute('hidden',''));
  }
});

// Toast
const toast = document.querySelector('.toast');
document.querySelectorAll('[data-fire-toast]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    if(!toast) return;
    toast.removeAttribute('hidden');
    requestAnimationFrame(()=> toast.classList.add('is-visible'));
    setTimeout(()=>{
      toast.classList.remove('is-visible');
      setTimeout(()=> toast.setAttribute('hidden',''), 250);
    }, 2500);
  });
});

// Formulário: feedback simples de sucesso/erro (demo)
const form = document.querySelector('.form');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const ok = form.checkValidity();
    document.getElementById('alertSucesso')?.toggleAttribute('hidden', !ok);
    document.getElementById('alertErro')?.toggleAttribute('hidden', ok);
  });
}


