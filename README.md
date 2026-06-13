# VALORAE - Atualizações do APK

Pacote limpo e compatível com o APK VALORAE.

## Regra importante

O `update.json` NÃO carrega changelog. O changelog oficial fica direto no APK em:

```text
app/src/main/assets/valorae_changelog.json
```

## Endpoint usado pelo APK

```text
https://app-atualizacoes.vercel.app/api/update
```

## Arquivos mantidos

```text
api/update.js
update.json
vercel.json
package.json
README.md
```

## Versão anunciada

```text
latestVersionCode: 26061311
versionName: 2026.06.13.1
minRequiredVersionCode: 26061310
```

## Atenção ao downloadUrl

O campo `downloadUrl` precisa ser exatamente o link público do APK anexado em GitHub Releases.
Se o link abrir 404 fora do login do GitHub, o APK também vai falhar ao baixar.
