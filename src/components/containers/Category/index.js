import { Divider, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import Articles from "../../Articles";
import Query from "../../Query";
import CATEGORY_ARTICLES_QUERY from "../../queries/category/articles";

const { CheckableTag } = Tag;

function Category() {
  const { slug } = useParams();
  const [selectedTags, setSelectedTags] = useState({});

  useEffect(() => {
    let title = slug.replaceAll("-", " ");
    document.title = title.charAt(0).toUpperCase() + title.slice(1);
    if (Object.keys(selectedTags).includes(slug)) return;
    setSelectedTags((prev) => ({
      ...prev,
      [slug]: [],
    }));
  }, [slug, selectedTags]);

  const handleTagChanged = (tag, checked) => {
    const nextSelectedTags = checked
      ? {
          ...selectedTags,
          [slug]: [...selectedTags[slug], tag],
        }
      : {
          ...selectedTags,
          [slug]: selectedTags[slug].filter((t) => t !== tag),
        };
    setSelectedTags(nextSelectedTags);
  };

  return (
    <div>
      {selectedTags[slug] !== undefined && (
        <Query query={CATEGORY_ARTICLES_QUERY} slug={slug}>
          {({ data: { categories } }) => {
            const rawTags = [];
            categories.data[0].attributes.articles.data.forEach((article) => {
              const articleTags = article.attributes.tags.data.map(
                (tag) => tag.attributes.name
              );
              rawTags.push(...articleTags);
            });
            const tagSet = Array.from(new Set(rawTags));
            return (
              <div>
                <div className="category-title">
                  {categories.data[0].attributes.name}
                </div>
                <Divider orientation="left" orientationMargin="0">
                  <span className="category-description">
                    {" "}
                    {categories.data[0].attributes.description}{" "}
                  </span>
                </Divider>
                <span style={{ marginLeft: "11px" }}>Tag filter: </span>
                {tagSet.map((tag) => (
                  <CheckableTag
                    key={tag}
                    checked={selectedTags[slug].indexOf(tag) > -1}
                    onChange={(checked) => handleTagChanged(tag, checked)}
                  >
                    {tag}
                  </CheckableTag>
                ))}
                {categories.data.length > 0 && (
                  <Articles
                    articles={categories.data[0].attributes.articles.data}
                    tagFilter={selectedTags[slug]}
                  />
                )}
              </div>
            );
          }}
        </Query>
      )}
    </div>
  );
}

export default Category;
