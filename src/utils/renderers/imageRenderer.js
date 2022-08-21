function imageRenderer(attributes) {
    console.log(attributes);
    return (
            <img
                style={{maxWidth: '45%', maxHeight: attributes.height ?? '300px', margin: '5px' }}
                alt={attributes.alt}
                {...attributes} 
            />
    )
}

export default imageRenderer;