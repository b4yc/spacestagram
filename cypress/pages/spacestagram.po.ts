import cypress from "cypress";

export class SpacestagramPage {
  public elems: { [key: string]: string } = {
    logo: '[data-testid="logo"]',
    errorStatePage: '[data-testid="error-state-page"]',
    emptyStatePage: '[data-testid="empty-state-page"]',

    likeButton: '[aria-label="Like post"]',
    unlikeButton: '[aria-label="Unlike post"]',
    shareButton: '[aria-label="Copy url to clipboard"]',
    exploreTab: '[aria-label="Explore Recents Page"]',
    favouritesTab: '[aria-label="Your Favourites Page"]',
    apodImages: '[data-testid="apod-images"] > div',
    likedImages: '[data-testid="liked-images"] > div',
  };
  visit() {
    cy.visit("http://localhost:3000");
  }
}
