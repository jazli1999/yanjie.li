import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Link } from "react-router-dom";

function Articles(props) {
    props.articles.sort((a, b) => new Date(b.attributes.published_date) - new Date(a.attributes.published_date));
    return (
        <div className="flex-holder">
            { props.articles.map((article) => {
                const imageUrl = process.env.REACT_APP_BACKEND_URL +
                                    article.attributes.image.data.attributes.url;
                return (
                    <Link 
                        className="article-card"
                        to={`/article/${article.attributes.slug}`} 
                        key={`/article/${article.attributes.slug}`}>
                        <Card
                            cover={ <img 
                                        style={{ height: 150, objectFit: 'cover'}}
                                        alt={`/article/${article.attributes.slug}`}
                            src={imageUrl} />}>
                            <Meta 
                                title={article.attributes.title}
                                description={<span className="card-tag">{`#${article.attributes.category.data.attributes.name}`}</span>} 
                            />
                        </Card>
                    </Link>
                )
            })}
        </div>
    );
}

export default Articles;