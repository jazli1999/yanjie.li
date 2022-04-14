import React from 'react';
import { useParams } from 'react-router';
import Articles from '../../Articles';
import Query from '../../Query';
import CATEGORY_ARTICLES_QUERY from '../../queries/category/articles';

function Category() {
    let { slug } = useParams();

    return (
        <div>
            <Query query={CATEGORY_ARTICLES_QUERY} slug={slug}>
                {({ data: { categories } }) => {
                    console.log(categories.data[0].attributes.articles.data);
                    return (
                        <div>
                            <h1>{categories.data[0].attributes.name}</h1>
                            {categories.data.length > 0 &&
                                <Articles articles={categories.data[0].attributes.articles.data} />
                            }
                        </div>
                    );
                }}
            </Query>
        </div>
    );
};

export default Category;