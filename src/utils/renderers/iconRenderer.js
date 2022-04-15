function iconRenderer(node) {
    const { src, ...props } = node;
    return (
            <img
                src={`${process.env.REACT_APP_BACKEND_URL}${src}`} style={{marginRight: 5}} {...props}/>
    );
}

export default iconRenderer;