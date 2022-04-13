import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Link } from "react-router-dom";

function Articles(props) {
    return (
        <div className="flex-holder" style={{ paddingTop: 15 }}>
            { props.articles.map((article) => {
                const imageUrl = process.env.REACT_APP_BACKEND_URL +
                                    article.attributes.image.data.attributes.url;
                return (
                    <Link 
                        to={`/article/${article.attributes.slug}`} 
                        key={`/article/${article.attributes.slug}`}>
                        <Card
                            style={{ width: 256, margin: 10 }} 
                            cover={ <img 
                                        style={{ height: 150, objectFit: 'cover'}}
                                        alt={`/article/${article.attributes.slug}`}
                            src={imageUrl} />}>
                            <Meta 
                                title={article.attributes.title}
                                description={article.attributes.category.data.attributes.name} 
                            />
                        </Card>
                    </Link>
                )
            })}
        </div>
    );
}

export default Articles;