---
name: update-home
description: update home page with last posts
metadata:
    author: aironou
    version: 1.0.0
---

o objetivo dessa skill é atualizar as homes do blog, adicionando o link dos últimos posts na sua respectiva home.

# estrutura do projeto

## 1. home

o blog possui três homes, cada uma com um idioma:

- `src/posts/en/index.md` é a home em inglês
- `src/posts/la/index.md` é a home em latim
- `src/posts/pt-BR/index.md` é a home em português

cada uma dessas homes agrupa os textos do blog pelo idioma do texto.

## 2. textos

os textos estão no diretório `src/posts/{title}/{lang}/*.{md,html}`, em que:

- `{title}` é o título do texto que estará presente na URL para o texto
- `{lang}` é o idioma do texto, podendo ser `en`, `la` e `pt-BR`

dessa forma, quando o texto for convertido para HTML, a URL será `{title}/{lang}/`.

# fluxo

# 1. localizar textos

deverá obter a lista de textos, organizados por data de criação do arquivo e agrupados pelo idioma do texto.

é possível que algum idioma não tenha textos criados, isso não é um problema, mas **não avance sem ter uma lista de texto, pois pelo menos um texto deve existir**.

# 2. atualizar home

cada home deverá ser atualizada para listar os textos encontrados no idioma da home.

a lista de textos deve funcionar de forma decrescente, sendo o primeiro item da lista o texto mais novo e o último o mais antigo.

cada texto deve respeitar o formato abaixo:

```
- [{title}](../{url})
```

desse formato, assuma que:

- `{title}` é o campo `title` que se encontra no arquivo de texto
- `{url}` é a URL que o texto terá após ser convertido para HTML

a lista deverá ser inserida abaixo do título da página que serve a home.