# VALORAE Atualizações - pacote corrigido

Este pacote deve ficar na RAIZ do repositório/projeto Vercel.

Arquivos necessários:

- `api/update.js` - endpoint consultado pelo APK.
- `update.json` - manifesto oficial da versão disponível.
- `index.html` - página simples para a raiz do domínio não retornar 404.
- `vercel.json` - headers sem cache.
- `package.json` - validação local.

## Endpoint usado pelo APK

```text
https://app-atualizacoes.vercel.app/api/update
```

## Regra de atualização

O APK só mostra atualização quando:

```text
latestVersionCode > versionCode instalado
```

APK atual inspecionado:

```text
versionCode = 26061310
versionName = 2026.06.13
```

Este pacote anuncia:

```text
latestVersionCode = 26061311
versionName = 2026.06.13.1
```

## Atenção obrigatória

Antes de publicar, confirme que `downloadUrl` aponta para um APK real e público no GitHub Releases.
O APK baixado precisa ter `versionCode = 26061311` ou maior. Se o arquivo baixado tiver `versionCode = 26061310`, o Android pode recusar a instalação por ser a mesma versão.
