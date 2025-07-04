export default function handler(req, res) {
  const referer = req.headers.referer || '';
  const userAgent = req.headers['user-agent'] || '';
  const megaLink = process.env.VIDEO_LINK;
  const homeLink = process.env.HOME_LINK;

  const isFromPatreonWeb = referer.includes("patreon.com");
  const isFromKemWeb = referer.includes("kemono");
  const isFromPatreonApp = userAgent.includes("iPhone") || userAgent.includes("Android");

  console.log("Referer:", referer);
  console.log("User-Agent:", userAgent);

  if (isFromPatreonWeb || (isFromPatreonApp && !isFromKemWeb)) {
    res.writeHead(302, { Location: megaLink });
    res.end();
  } else {
    res.writeHead(302, { Location: homeLink });
    res.end();
  }
}
