# app-atualizacoes — VALORAE

Sistema simples de atualização para publicar APK no GitHub Releases e expor um manifest JSON pelo Vercel.

## Fluxo

1. Compilar/gerar o APK final do VALORAE.
2. Publicar o APK no GitHub Releases.
3. Atualizar `update.json` no projeto Vercel.
4. Alterar somente os campos necessários para a nova versão:

```json
{
  "latestVersionCode": 51,
  "versionName": "2.0.41",
  "downloadUrl": "https://github.com/rafaelgabassi07-tech/app-atualizacoes/releases/download/v2.0.41/APK_VALORAE_v2.0.41.apk",
  "releaseDate": "2026-06-12",
  "isMandatory": false,
  "minRequiredVersionCode": 50,
  "fileSize": "45 MB"
}
```

## Campos usados pelo APK

- `latestVersionCode`: código inteiro da versão disponível.
- `versionName`: nome visível da versão.
- `downloadUrl`: link direto do APK no GitHub Releases.
- `releaseDate`: data da publicação.
- `isMandatory`: define se a atualização deve ser tratada como obrigatória.
- `minRequiredVersionCode`: menor versão aceita antes de exigir atualização.
- `fileSize`: tamanho aproximado exibido no app.

O histórico textual de alterações não faz parte deste manifest. Ele deve ser criado separadamente por IA no momento das modificações do app.

Endpoints esperados:

- `/api/update`
- `/update.json`
- `/version.json` para clientes legados.
