# VALORAE - Atualizacoes do APK

Pacote ultra limpo e compativel com o APK VALORAE atual.

## Endpoint usado pelo APK

O APK consulta:

```text
https://app-atualizacoes.vercel.app/api/update
```

O endpoint `/api/update` le somente:

```text
update.json
```

## Versao atual configurada

```text
versionCode: 26061310
versionName: 2026.06.13
releaseDate: 2026-06-13
```

Como `latestVersionCode` esta igual ao `versionCode` do APK atual, o app nao deve mostrar atualizacao nova para quem ja esta nessa versao.

## Arquivos mantidos

```text
api/update.js   endpoint principal usado pelo APK atual
update.json     unico manifesto oficial
vercel.json     headers sem cache
package.json    validacao simples
README.md       instrucoes
```

## Arquivos removidos de proposito

```text
api/version.js
version.json
docs/
API/
relatorios antigos
manifests antigos divergentes
```

## Como publicar uma nova versao no futuro

Quando gerar um APK novo, altere apenas:

```text
update.json
```

O campo `latestVersionCode` precisa ser maior que o `versionCode` do APK instalado anteriormente.
