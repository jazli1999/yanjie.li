import { Avatar, Image, Card } from 'antd';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import Query from '../../Query';
import iconRenderer from '../../../utils/renderers/iconRenderer';
import ABOUT_QUERY from '../../queries/about';

function Personal() {
    return (
        <Query query={ABOUT_QUERY}>
            {({ data: { abouts } }) => {
                const imageUrl = process.env.REACT_APP_BACKEND_URL 
                                + abouts.data[0].attributes.avatar.data.attributes.url;
                const SIZE = 155;

                return (
                    <div style={{ margin: '20px' }}>
                        <Card style={{ width: 165, 
                                        borderRadius: 90, 
                                        boxShadow: '0px 0px 8px rgba(208, 216, 243, 0.8)',
                                        margin: 20}}>
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
                        </Card>
                        <div style={{ width: 'fit-content', margin: 'auto'}}>
                            <ReactMarkdown
                                children={abouts.data[0].attributes.bio}
                                rehypePlugins={[rehypeRaw]}
                                components={{
                                    'h1': (node) => <div 
                                                        style={{
                                                            textAlign: 'center',
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
                                    'p': (node) => <p style={{textAlign: 'center', lineHeight: 1}}>
                                                        {node.children}
                                                    </p>
                                }} />
                        </div>
                    </div>
                )
            }}
        </Query>
    );
}

export default Personal;