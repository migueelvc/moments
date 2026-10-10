// Botão de modo claro/escuro, partilhado pelas duas páginas.
// A escolha fica guardada neste navegador.
(function () {
  const raiz = document.documentElement;
  const svg = d => `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const SOL = svg('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>');
  const LUA = svg('<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>');

  try {
    const guardado = localStorage.getItem('tema');
    if (guardado) raiz.dataset.theme = guardado;
  } catch {}

  function temaAtual() {
    if (raiz.dataset.theme) return raiz.dataset.theme;
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function atualizarBotao(botao) {
    const escuro = temaAtual() === 'dark';
    botao.innerHTML = escuro ? SOL : LUA;
    botao.setAttribute('aria-label', escuro ? 'Mudar para modo claro' : 'Mudar para modo escuro');
    botao.title = escuro ? 'Mudar para modo claro' : 'Mudar para modo escuro';
  }

  document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('btnTema');
    if (!botao) return;
    atualizarBotao(botao);
    botao.addEventListener('click', () => {
      raiz.dataset.theme = temaAtual() === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('tema', raiz.dataset.theme); } catch {}
      atualizarBotao(botao);
    });
  });
})();
