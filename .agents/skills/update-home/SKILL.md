---
name: update-home
description: update home page with last posts
metadata:
    author: aironou
    version: 1.0.1
---

o objetivo dessa skill é atualizar as homes do blog, adicionando o link dos últimos posts na sua respectiva home.

# estrutura do projeto

## 1. home

o blog possui três homes, cada uma com um idioma:

- `src/posts/en/data.11tydata.js` é a home em inglês
- `src/posts/la/data.11tydata.js` é a home em latim
- `src/posts/pt-BR/data.11tydata.js` é a home em português

cada uma dessas homes agrupa os textos do blog pelo idioma do texto.

## 2. textos

os textos estão no diretório `src/posts/**/{lang}/*.{md,html}`, em que:

- `{lang}` é o idioma do texto, podendo ser `en`, `la` e `pt-BR`

dentro de cada arquivo de texto, é possível obter o `title` e `subtitle` do texto.

no arquivo `src/posts/{url}/data.11tydata.js` é possível obter o `slug` e `banner` do texto, em que `banner` pode ser nulo.

**Não avance caso não tenha o slug, idioma, título e subtítulo do texto**.

# fluxo

# 1. localizar textos

deverá obter a lista de textos, organizados por data de criação do arquivo e agrupados pelo idioma do texto.

é possível que algum idioma não tenha textos criados, isso não é um problema, mas **não avance sem ter uma lista de texto, pois pelo menos um texto deve existir**.

# 2. atualizar home

cada home deverá ser atualizada para listar os textos encontrados no idioma da home, adicionando o texto na lista `posts`.

a lista de textos deve funcionar de forma decrescente, pelo campo `published_at`. **se o texto não tiver esse campo preenchido, ele não deverá aparecer na lista**.

cada texto deve respeitar o formato abaixo:

```
{
    url: '{url}',
    title: '{title}',
    subtitle: '{subtitle}',
    banner: '{banner}',
    published_at: '{published_at}'
}
```

desse formato, assuma que:

- `{url}` é o campo `slug` que se encontra no arquivo `data.11tydata.js`
- `{title}` é o campo `title` que se encontra no arquivo de texto
- `{subtitle}` é o campo `subtitle` que se encontra no arquivo de texto
- `{banner}` é o campo `banner` que se encontra no arquivo `data.11tydata.js`, mas sem o `../` do início
- `{published_at` é o campo `published_at` que se encontra no arquivo de texto