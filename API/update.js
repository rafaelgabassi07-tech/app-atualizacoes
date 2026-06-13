const manifest = require('../update.json');

function setJsonHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Cache-Control, X-Valorae-Client, X-Valorae-Version-Code');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
}

module.exports = function handler(req, res) {
  setJsonHeaders(res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  return res.status(200).json({
    ok: true,
    source: '/api/update',
    generatedAt: new Date().toISOString(),
    latestVersionCode: manifest.latestVersionCode,
    versionName: manifest.versionName,
    downloadUrl: manifest.downloadUrl,
    releaseDate: manifest.releaseDate,
    isMandatory: Boolean(manifest.isMandatory),
    minRequiredVersionCode: manifest.minRequiredVersionCode,
    fileSize: manifest.fileSize,
    latest_version: manifest.versionName,
    version_code: manifest.latestVersionCode,
    apk_url: manifest.downloadUrl,
    release_date: manifest.releaseDate,
    mandatory: Boolean(manifest.isMandatory),
    min_required_version_code: manifest.minRequiredVersionCode,
    file_size: manifest.fileSize
  });
};
