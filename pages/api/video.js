export default function handler(req, res) {
  const referer = req.headers.referer || "";
  const megaLink = process.env.VIDEO_LINK;

  if (referer.includes("patreon.com")) {
    res.writeHead(302, { Location: megaLink });
    res.end();
  } else {
    res.status(403).send(" Access denied");
  }
}
