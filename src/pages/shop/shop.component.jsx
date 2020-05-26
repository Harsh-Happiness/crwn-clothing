import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/preview-collections/preview-collections.component";
class Shop extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherCollectionItem }) => (
          <CollectionPreview key={id} {...otherCollectionItem} />
        ))}
      </div>
    );
  }
}

export default Shop;
