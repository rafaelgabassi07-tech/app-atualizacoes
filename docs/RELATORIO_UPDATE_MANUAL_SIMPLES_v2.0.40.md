# VALORAE v2.0.40 — Atualização simplificada para preenchimento manual

Base usada:
- APK_VALORAE_IN_APP_UPDATE_CACHE_INSTALLER_FIX_v2.0.38.zip
- app-atualizacoes-main.zip

Decisão final:
- Manter o instalador nativo com PackageInstaller.Session.
- Manter fallback seguro com FileProvider.
- Manter correção da página Insights.
- Simplificar o manifesto para preenchimento manual.

Campos obrigatórios no Vercel:

```json
{
  "latestVersionCode": 50,
  "versionName": "2.0.40",
  "downloadUrl": "https://github.com/rafaelgabassi07-tech/app-atualizacoes/releases/download/v2.0.40/APK_VALORAE_v2.0.40.apk"
}
```

Campos opcionais:
- `releaseDate`
- `fileSize`
- `changelog`
- `isMandatory`
- `minRequiredVersionCode`

Campos removidos da rotina manual:
- `sha256`
- `sha_256`
- `fileSizeBytes`
- `file_size_bytes`

O app continua aceitando esses campos se forem adicionados no futuro, mas eles não são necessários para publicar atualizações agora.
