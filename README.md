# app-atualizacoes

Manifesto oficial do VALORAE para atualização in-app via Vercel.

## Fluxo correto

1. Publicar o APK final no GitHub Releases.
2. Atualizar `update.json` e `version.json` com a URL HTTPS real do APK.
3. Após o build final, preencher `fileSize`, `fileSizeBytes` e, preferencialmente, `sha256` / `sha_256`.
4. Fazer deploy no Vercel em `https://app-atualizacoes.vercel.app/`.

## Endpoints usados pelo app Android

Endpoint principal:

```text
https://app-atualizacoes.vercel.app/update.json
```

Fallback dinâmico opcional:

```text
https://app-atualizacoes.vercel.app/api/update
```

Fallback legacy/snake_case:

```text
https://app-atualizacoes.vercel.app/version.json
```

## APK esperado para v2.0.40

```text
https://github.com/rafaelgabassi07-tech/app-atualizacoes/releases/download/v2.0.40/APK_VALORAE_v2.0.40.apk
```

Se a tag ou o nome do arquivo forem diferentes no GitHub Releases, atualize `downloadUrl`, `apkUrl` e `apk_url` antes do deploy.
