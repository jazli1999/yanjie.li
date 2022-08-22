import { Image } from 'antd';

function imageRenderer(attributes) {
    return (
            <Image
                alt={attributes.alt}
                src={attributes.src}
                style={{ margin: '5px', width: 'auto', height: 'auto', maxWidth: '100%', ...attributes}}
            />
    )
}

export default imageRenderer;