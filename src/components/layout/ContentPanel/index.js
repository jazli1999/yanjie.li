function ContentPanel(props) {
    return (
        <div className="white-shadowed" style={{ margin: '5px 10px 10px 5px', paddingBottom: 2 }}>
            { props.content }
        </div>
    )
}

export default ContentPanel;