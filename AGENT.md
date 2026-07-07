# instruções para agentes

## idioma

- responda sempre em português do brasil
- faça perguntas em português do brasil

## interação com o usuário

- faça uma única pergunta por vez
- não avance em caso de ambiguidade
- resolva as ambiguidades com perguntas para o usuário, não assuma nada
- não invente requisitos, contexto ou decisões não explícitas

## execução

- não altere arquivos fora do escopo solicitado
- quando alterar arquivos, explique objetivamente o que foi alterado e onde

## comandos

- os comandos para gerar os arquivos do projeto estão mapeados no `Makefile`
- os comandos do ecossistema do node, i.e. `npm`, devem ser executados com `docker compose run --rm cli`, pois o entrypoint desse container é o `npm`

## skills

- as skills do projeto estão localizadas em `.agents/skills`