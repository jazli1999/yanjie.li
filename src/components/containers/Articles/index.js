import React from 'react';
import Articles from '../../Articles';
import Query from '../../Query';
import ARTICLES_QUERY from '../../queries/article/articles';

function HOME() {
    return (
        <div>
            <Query query={ARTICLES_QUERY}>
                {({ data: { articles } }) => {
                    return <Articles articles={articles.data} />;
                }}
            </Query>
            <p style={{ textAlign: 'center', color: '#BBBBBB', marginTop: 30}}>@Yanjie :)</p>
        </div>
    );
}

export default HOME;