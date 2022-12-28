import { useEffect } from "react";
import { useParams } from "react-router";
import Query from "../../Query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { useMediaQuery } from "react-responsive";

import ARTICLE_QUERY from "../../queries/article/article";
import { imageRenderer, iframeRenderer } from "../../../utils/renderers";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

function Article() {
  let { slug } = useParams();
  const isBigScreen = useMediaQuery({ query: "(min-width: 576px)" });

  useEffect(() => {
    let title = slug.replaceAll("-", " ");
    document.title = title.charAt(0).toUpperCase() + title.slice(1);
  });

  return (
    <Query query={ARTICLE_QUERY} slug={slug}>
      {({ data: { articles } }) => {
        if (articles.data.length) {
          const imageUrl =
            articles.data[0].attributes.image.data.attributes.url;

          const bannerBgStyle = {
            background: `linear-gradient(rgba(0, 0, 0, 0.3), 
                                                     rgba(0, 0, 0, 0.3)
                                    ),
                                    url(${imageUrl})`,
            position: "relative",
            filter: `blur(5px)`,
            WebkitFilter: `blur(5px)`,
            height: "210px",
            margin: "-5px",
            backgroundSize: "cover",
          };

          return (
            <div style={{ background: "#ffffff" }}>
              {isBigScreen ? (
                <div>
                  <div
                    style={{
                      overflow: "hidden",
                      borderRadius: "5px 5px 0px 0px",
                      margin: "-5px",
                    }}
                  >
                    <div style={bannerBgStyle} />
                  </div>
                  <div
                    style={{
                      height: "200px",
                      display: "flex",
                      alignItems: "center",
                      position: "absolute",
                      top: "80px",
                      zIndex: 20,
                    }}
                  >
                    <span className="article-title">
                      {articles.data[0].attributes.title}
                    </span>
                  </div>
                  <img className="banner-cover" src={imageUrl} alt="banner" />
                </div>
              ) : (
                <div>
                  <img className="banner-cover" src={imageUrl} alt="banner" />
                  <div className="article-title">
                    {articles.data[0].attributes.title}
                  </div>
                </div>
              )}
              <div style={{ margin: 15, marginTop: 30, textAlign: "justify" }}>
                <ReactMarkdown
                  children={articles.data[0].attributes.content}
                  components={{
                    img: imageRenderer,
                    iframe: (node, ...props) =>
                      iframeRenderer(node, isBigScreen, ...props),
                    code: ({ node, inline, className, children, ...props }) => {
                      const match = /language-(\w+)/.exec(className || "");
                      return !inline && match ? (
                        <SyntaxHighlighter
                          children={String(children).replace(/\n$/, "")}
                          style={oneLight}
                          language={match[1].toLowerCase()}
                          PreTag="div"
                          {...props}
                        />
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                  }}
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                />
                <p>
                  <Moment format="MMM Do YYYY">
                    {articles.data[0].attributes.published_date}
                  </Moment>
                </p>
              </div>
            </div>
          );
        }
      }}
    </Query>
  );
}

export default Article;
