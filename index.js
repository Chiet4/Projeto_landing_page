document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.captura form');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Evita envio real por enquanto
  
      // Feedback ao usuário
      const mensagem = document.createElement('p');
      mensagem.textContent = '🌿 Obrigada! Em breve você receberá o guia gratuito no seu e-mail.';
      mensagem.style.marginTop = '1rem';
      mensagem.style.color = '#fff';
      mensagem.style.background = '#b36b4e';
      mensagem.style.padding = '1rem';
      mensagem.style.borderRadius = '0.5rem';
  
      // Evita múltiplas mensagens
      const anterior = form.querySelector('p');
      if (anterior) anterior.remove();
  
      form.appendChild(mensagem);
  
      // Aqui você pode futuramente integrar com MailerLite, LeadLovers etc.
      // form.submit(); // descomente quando integrar com backend
    });
  });
  