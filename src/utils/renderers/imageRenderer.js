function imageRenderer(attributes) {
    const { alt, src } = attributes;
    return (
        <span style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <br />
            <img
                src={`${process.env.REACT_APP_BACKEND_URL}${src}`}
                alt={alt}
                style={{ maxHeight: '200px'}} />
        </span>
        
    )
}

export default imageRenderer;