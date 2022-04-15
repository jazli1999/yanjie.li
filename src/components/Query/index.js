import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useQuery } from '@apollo/react-hooks';

const Query = ({ children, query, slug }) => {
    const { data, loading, error } = useQuery(query, {
        variables: { slug: slug }
    });

    if (loading) return (
        <div style={{textAlign: 'center', margin: '15px'}}>
            <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        </div>
    );
    if (error) return <p>Error: {JSON.stringify(error)}</p>;
    return children({ data });
};

export default Query;