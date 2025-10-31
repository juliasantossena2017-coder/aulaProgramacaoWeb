/ script.js - interações simples (defer no script tag recomendado)

document.addEventListener('DOMContentLoaded', () => {
  // exemplo: alternar menu mobile (se houver)
  const btn = document.querySelector('.btn-menu');
  const nav = document.querySelector('.nav');
  if(btn && nav){
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      nav.style.display = expanded ? '' : 'flex';
    });
  }

  // exemplo: pequenas validações de formulário
  const form = document.querySelector('form.needs-validation');
  if(form){
    form.addEventListener('submit', (e) => {
      const required = form.querySelectorAll('[required]');
      let ok = true;
      required.forEach(inp => {
        if(!inp.value.trim()){
          ok = false;
          inp.classList.add('invalid');
          inp.setAttribute('aria-invalid', 'true');
        } else {
          inp.classList.remove('invalid');
          inp.setAttribute('aria-invalid', 'false');
        }
      });
      if(!ok){
        e.preventDefault();
        alert('Por favor preencha os campos obrigatórios.');
      }
    });
  }
});