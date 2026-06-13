# app-atualizacoes — VALORAE

Sistema simples para o Valorae saber se existe uma nova versão do APK e onde baixá-la.

## Função deste pacote

Este pacote deve cuidar apenas do aviso de atualização:

1. Informar qual é a versão mais recente do APK.
2. Informar o link direto para download do APK publicado no GitHub Releases.
3. Informar data, tamanho aproximado e se a atualização é obrigatória.

O **Histórico de Versões/Changelog** agora fica dentro do próprio APK Valorae, em `app/src/main/assets/valorae_changelog.json`. Assim, quando o APK é atualizado, o histórico acompanha o app e não depende da API para aparecer.

## Versão atual publicada

- `versionName`: `2026.06.13`
- `latestVersionCode`: `26061301`
- `releaseDate`: `2026-06-13`

O padrão novo é usar versão por data, para agrupar todas as melhorias feitas no mesmo dia em uma única versão visível.

## Arquivos principais

- `update.json`: manifest principal usado pelo app atual.
- `version.json`: manifest legado para compatibilidade.
- `api/update.js` e `API/update.js`: endpoint Vercel `/api/update`.
- `changelog.json`: mantido apenas como referência/compatibilidade antiga. O app atual lê o changelog local embutido no APK.

## Como publicar uma nova atualização

1. Gere o APK final do Valorae.
2. Publique o APK no GitHub Releases.
3. Atualize `update.json` com:
   - `latestVersionCode`
   - `versionName`
   - `downloadUrl`
   - `releaseDate`
   - `fileSize`
4. Atualize `version.json` com os mesmos dados no formato legado.
5. Publique este projeto no Vercel.

O changelog não precisa ser buscado pela API. Ele deve ser atualizado dentro do APK a cada entrega.

## Exemplo de manifest

```json
{
  "latestVersionCode": 26061301,
  "versionName": "2026.06.13",
  "downloadUrl": "https://github.com/rafaelgabassi07-tech/app-atualizacoes/releases/download/v2026.06.13/APK_VALORAE_2026.06.13.apk",
  "releaseDate": "2026-06-13",
  "isMandatory": false,
  "minRequiredVersionCode": 52,
  "fileSize": "45 MB"
}
```

## Observação importante

Antes de publicar, confirme se o arquivo APK no GitHub Releases usa o mesmo caminho configurado em `downloadUrl`.
