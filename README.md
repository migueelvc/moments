# Arquivo de Excertos & Momentos

Repositório de momentos marcantes em filmes, séries, TV ao vivo e podcasts, com pesquisa e filtros por tipo e ano.

## Como abrir

Não é preciso instalar nada: basta abrir o ficheiro `index.html` no navegador.

## Estrutura

- `index.html` — página, estilos e lógica de pesquisa/filtros.
- `dados.js` — lista `momentosMedia` com os momentos apresentados.
- `adicionar.html` — formulário para adicionar momentos sem mexer no código.

## Adicionar um momento

A forma mais fácil é abrir `adicionar.html` (no Chrome ou Edge), escolher o ficheiro `dados.js` da pasta do site e preencher o formulário. O momento é gravado diretamente no `dados.js`.

Também é possível editar à mão: acrescente um objeto à lista em `dados.js`:

```js
{
  id: 5,
  titulo: "Título do momento",
  fonte: "Nome do filme, série ou podcast",
  tipo: "Filme", // Filme, Série, TV ao vivo, Podcast...
  ano: 2024,
  youtubeId: "ID_DO_VIDEO", // parte depois de "v=" no link do YouTube
  timestamp: 90, // segundo em que o vídeo começa
  descricao: "Breve descrição do momento.",
  tags: ["Comédia", "Bastidores"]
}
```

Os filtros de tipo e ano são preenchidos automaticamente a partir destes dados.
