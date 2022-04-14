function iframeRenderer(node, isBigScreen) {
    const { src } = node;

    const outerStyle = {
        width: isBigScreen ? '50%' : '100%',
        margin: 'auto',
    }
    const containerStyle = {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        paddingTop: '56.25%',
    };

    const iframeStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
    }

    return (
        <div style={outerStyle}>
            <div style={containerStyle}>
                <iframe
                    style={iframeStyle}
                    title={src}
                    frameBorder={0}
                    src={src}
                    allowFullScreen="" />
            </div>
        </div>
    );

}

export default iframeRenderer;