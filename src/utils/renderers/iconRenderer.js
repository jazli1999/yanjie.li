function iconRenderer(node) {
  const { src, ...props } = node;
  return (
    <img alt="icon" src={`${src}`} style={{ marginRight: 5 }} {...props} />
  );
}

export default iconRenderer;
