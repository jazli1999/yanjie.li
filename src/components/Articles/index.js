import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const sortByDate = (a, b) =>
  new Date(b.attributes.published_date) - new Date(a.attributes.published_date);

function Articles(props) {
  const [showArticles, setShowArticles] = useState(
    props.articles.sort(sortByDate)
  );

  useEffect(() => {
    if (!props.tagFilter) return;
    if (props.tagFilter.length === 0) {
      setShowArticles(props.articles.sort(sortByDate));
    } else {
      const filtered = props.articles.filter((article) => {
        let included = false;
        article.attributes.tags.data.forEach((tag) => {
          if (props.tagFilter.includes(tag.attributes.name)) included = true;
        });
        return included;
      });
      setShowArticles(filtered.sort(sortByDate));
    }
  }, [props.tagFilter, props.articles]);

  return (
    <div className="flex-holder">
      {showArticles.map((article) => {
        const imageUrl = article.attributes.image.data.attributes.url;
        return (
          <Link
            className="article-card"
            to={`/article/${article.attributes.slug}`}
            key={`/article/${article.attributes.slug}`}
          >
            <Card
              cover={
                <img
                  style={{ height: 150, objectFit: "cover" }}
                  alt={`/article/${article.attributes.slug}`}
                  src={imageUrl}
                />
              }
            >
              <Meta
                title={article.attributes.title}
                description={article.attributes.tags.data.map((tag) => (
                  <span
                    key={tag.attributes.name}
                    className="card-tag"
                  >{`#${tag.attributes.name}`}</span>
                ))}
              />
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

export default Articles;
