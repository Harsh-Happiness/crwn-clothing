import React from "react";
import { withRouter } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";
import "./preview-collections.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItems }) => (
            <CollectionItem key={id} {...otherItems} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
