export default async function handler(req, res) {
  const rssURL = "https://www.onrec.com/news-rss-feed";
  const apiURL = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(rssURL);

  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    res.status(200).json(data.items || []);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
