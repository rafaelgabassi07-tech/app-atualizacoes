# app-atualizacoes — VALORAE v2.0.40 simples

Este projeto Vercel foi simplificado para uso manual.

Fluxo:

1. Compilar/gerar o APK final.
2. Publicar o APK no GitHub Releases.
3. Abrir `update.json` no projeto Vercel.
4. Alterar somente estes campos quando houver nova versão:

```json
{
  "latestVersionCode": 51,
  "versionName": "2.0.41",
  "downloadUrl": "https://github.com/rafaelgabassi07-tech/app-atualizacoes/releases/download/v2.0.41/APK_VALORAE_v2.0.41.apk"
}
```

Campos opcionais como `fileSize`, `releaseDate` e `changelog` podem ser editados se quiser, mas não são obrigatórios.

Não precisa preencher SHA-256, fileSizeBytes ou hash manual.
