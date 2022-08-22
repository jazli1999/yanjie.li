import { Image } from 'antd';

function imageRenderer(attributes) {
    return (
            <Image
                alt={attributes.alt}
                src={attributes.src}
                width="auto"
                height="auto"
                style={{ margin: '5px' }}
                {...attributes}
            />
    )
}

export default imageRenderer;