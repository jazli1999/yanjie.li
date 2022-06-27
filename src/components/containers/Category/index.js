import React from 'react';
import { useParams } from 'react-router';
import { Divider } from 'antd';
import Articles from '../../Articles';
import Query from '../../Query';
import CATEGORY_ARTICLES_QUERY from '../../queries/category/articles';

function Category() {
    let { slug } = useParams();

    return (
        <div>
            <Query query={CATEGORY_ARTICLES_QUERY} slug={slug}>
                {({ data: { categories } }) => {
                    return (
                        <div>
                            <div className="category-title">{categories.data[0].attributes.name}</div>
                            <Divider orientation="left" orientationMargin="0">
                                <span className="category-description"> {categories.data[0].attributes.description} </span>
                            </Divider>
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