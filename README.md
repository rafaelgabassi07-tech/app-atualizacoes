# app-atualizacoes

Manifesto oficial do VALORAE para atualização in-app via Vercel.

Fluxo correto:

1. Publicar o APK final no GitHub Releases.
2. Atualizar `update.json` e `version.json` com a URL HTTPS real do APK.
3. Fazer deploy no Vercel em `https://app-atualizacoes.vercel.app/`.

Endpoint usado pelo app Android:

```text
https://app-atualizacoes.vercel.app/update.json
```
