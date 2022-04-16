import { Avatar, Image, Card, Row, Col, Space } from 'antd';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { useMediaQuery } from 'react-responsive';

import Query from '../../Query';
import iconRenderer from '../../../utils/renderers/iconRenderer';
import ABOUT_QUERY from '../../queries/about';

function Personal() {
    const isBigScreen = useMediaQuery({ query: '(min-width: 850px)' });

    return (
        <Query query={ABOUT_QUERY}>
            {({ data: { abouts } }) => {
                const imageUrl = process.env.REACT_APP_BACKEND_URL
                    + abouts.data[0].attributes.avatar.data.attributes.url;
                const SIZE = 155;

                const avatar = <Card style={{
                    width: 165,
                    borderRadius: 90,
                    boxShadow: '0px 0px 8px rgba(208, 216, 243, 0.8)',
                    margin: 'auto',
                    marginTop: 15,
                    marginBottom: 20,
                }}>
                    <Avatar
                        size={SIZE}
                        style={{ margin: -11 }}
                        src={
                            <Image
                                src={imageUrl}
                                style={{ width: SIZE, margin: 0 }}
                            />
                        }
                    />
                </Card>;
                const bio = <div style={{ width: 'fit-content', margin: 'auto' }}>
                    <ReactMarkdown
                        children={abouts.data[0].attributes.bio}
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            'h1': (node) => <div
                                style={{
                                    textAlign: isBigScreen ? 'start': 'center',
                                    fontWeight: 700,
                                    fontSize: '18pt',
                                    lineHeight: 1,
                                    width: '100%',
                                    marginBottom: '15px',
                                    marginTop: '-5px',
                                }}>
                                {node.children[0]}
                            </div>,
                            'img': iconRenderer,
                            'p': (node) => <p style={{ textAlign: isBigScreen ? 'start': 'center', lineHeight: 1 }}>
                                {node.children}
                            </p>
                        }} />
                </div>;

                return isBigScreen ? (
                    <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                        <Col>
                            {avatar}
                        </Col>
                            <div style={{ width: 20 }} />
                        <Col>
                        </Col>
                        <Col>
                            {bio}
                        </Col>
                    </Row>
                ) : (
                    <div>
                        {avatar}
                        {bio}
                    </div>
                );
            }}
        </Query>
    );
}

export default Personal;