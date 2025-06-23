const telaBloqueio = document.getElementById('tela-bloqueio');
const telaSenha = document.getElementById('tela-senha');
const telaPrincipal = document.getElementById('tela-principal');
const senhaInput = document.getElementById('senha');


telaBloqueio.addEventListener('click', () => {
  telaBloqueio.classList.add('subindo');
  setTimeout(() => {
    telaBloqueio.classList.add('escondido');
    telaSenha.classList.remove('escondido');
    senhaInput.focus(); // já posiciona o cursor no campo
  }, 800);
});

// Pressionar Enter no campo de senha
senhaInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const senha = senhaInput.value;
    if (senha === 'admin123') {
      telaSenha.classList.add('escondido');
      telaPrincipal.classList.remove('escondido');
    } else {
      alert('Senha incorreta');
      senhaInput.value = '';
    }
  }
});

document.getElementById('fechar-app').addEventListener('click', () => {
  alert('Fechar app — implementar ação real no ambiente do sistema.');
  // Exemplo em Electron: window.close();
});
