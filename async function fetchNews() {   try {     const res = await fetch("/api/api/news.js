import Parser from "rss-parser";

export default async function handler(req, res) {
  const parser = new Parser();
  const rssURL = "https://www.onrec.com/news-rss-feed";

  try {
    const feed = await parser.parseURL(rssURL);
    const items = feed.items.map(item => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      summary: item.contentSnippet || ""
    }));

    res.status(200).json(items);
  } catch (error) {
    console.error("Failed to fetch news:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
