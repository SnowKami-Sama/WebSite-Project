
import * as React from "react";
import axios from "axios";

interface Props {
  category: string;
  pageSize: number;
}

interface Article {
  id: string;
  title: string;
}

interface NewsData {
  articles: Article[];
}

const NewsWidget: React.FC<Props> = ({ category, pageSize }) => {
  const [newsData, setNewsData] = React.useState<NewsData | null>(null);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything",
        {
          params: {
            q: "tesla",
            from: "2022-11-30",
            sortBy: "publishedAt",
            apiKey: "f795c45641734d62b0abb97db008a71c",
            pageSize,
          },
        }
      );
      setNewsData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchNews();
  }, [pageSize]);

  return (
    <div>
      {newsData ? (
        <ArticleList articles={newsData.articles} />
      ) : (
        <LoadingIndicator />
      )}
    </div>
  );
};

const ArticleList: React.FC<{ articles: Article[] }> = ({ articles }) => {
  return (
  <div>
    {articles.map((article: Article) => (
        <p key={article.id}><br/>{article.title}<br/></p>
      ))}
  </div>
  );
};


const LoadingIndicator: React.FC = () => {
  return <p>Loading news data...</p>;
};

export default NewsWidget;


