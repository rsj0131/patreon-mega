export default function handler(req, res) {
  const referer = req.headers.referer || '';
  const userAgent = req.headers['user-agent'] || '';
  const megaLink = process.env.VIDEO_LINK;

  const isFromPatreonWeb = referer.includes("patreon.com");
  const isFromPatreonApp = userAgent.includes("Patreon");

  console.log("Referer:", referer);
  console.log("User-Agent:", userAgent);

  if (isFromPatreonWeb || isFromPatreonApp) {
    res.writeHead(302, { Location: megaLink });
    res.end();
  } else {
    res.status(403).send("⛔ Access denied.");
  }
}
