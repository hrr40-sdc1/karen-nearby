
const Listing = (_node) => {
  Object.assign(this, _node.properties);

  if (this.listingId) {
    this.listingId = this.listingId.toNumber();
  }
  if (this.cityId) {
    this.cityId = this.cityId.toNumber();
  }
};

module.exports = Listing;
