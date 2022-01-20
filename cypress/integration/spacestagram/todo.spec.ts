import { SpacestagramPage } from "../../pages/spacestagram.po";
import * as stubRequestsHelper from "../../utils/stub-requests-helper";

describe("spacestagram app", () => {
  let spacestagramPage: SpacestagramPage;
  beforeEach(() => {
    spacestagramPage = new SpacestagramPage();
    spacestagramPage.visit();
  });
  afterEach(() => {
    spacestagramPage = null;
  });
  describe("on server success", () => {
    beforeEach(() => {
      stubRequestsHelper.createMockResponses(
        stubRequestsHelper.getApodImagesSuccess
      );
      cy.wait(["@getApodImagesSuccess"]);
    });

    it("should display the logo", () => {
      cy.get(spacestagramPage.elems.logo).should("be.visible");
    });
    it("should refresh page and return to main tab on logo click", () => {
      cy.window().then((w) => (w.beforeReload = true));
      // initially the beforeReload property is there
      cy.window().should("have.prop", "beforeReload", true);
      cy.get(spacestagramPage.elems.logo).should("be.visible").click();
      // after reload the property should be gone
      cy.window().should("not.have.prop", "beforeReload");
    });
    describe("post buttons", () => {
      it("should add it to your favourites tab when liking", () => {
        cy.get(spacestagramPage.elems.apodImages)
          .eq(0)
          .find("img")
          .invoke("attr", "src")
          .as("apod_src");
        cy.get(spacestagramPage.elems.likeButton).first().click();
        cy.get(spacestagramPage.elems.favouritesTab).click();
        cy.get(spacestagramPage.elems.likedImages)
          .eq(0)
          .find("img")
          .invoke("attr", "src")
          .as("liked_src");
        cy.get("@apod_src").then((apod_src) => {
          cy.get("@liked_src").then((liked_src) => {
            expect(apod_src).to.equal(liked_src);
          });
        });
      });
      it("should remove post from your favourites tab when unliking", () => {
        cy.get(spacestagramPage.elems.likeButton).first().click();
        cy.get(spacestagramPage.elems.favouritesTab).click();

        cy.get(spacestagramPage.elems.unlikeButton).first().click();
        cy.get(spacestagramPage.elems.emptyStatePage).should("exist");
      });

      it("should copy url to clipboard when sharing", () => {
        cy.get(spacestagramPage.elems.apodImages)
          .eq(0)
          .find("img")
          .invoke("attr", "src")
          .as("src_url");
        cy.get(spacestagramPage.elems.shareButton).first().click();
        cy.window().then((win) => {
          win.navigator.clipboard.readText().then((text) => {
            cy.get("@src_url").then((src) => {
              expect(src).to.equal(text);
            });
          });
        });
      });
    });
  });

  describe("on server error", () => {
    beforeEach(() => {
      stubRequestsHelper.createMockResponses(
        stubRequestsHelper.getApodImagesFailure
      );
      cy.wait(["@getApodImagesFailure"]);
    });
    it("should display error page", () => {
      cy.get(spacestagramPage.elems.errorStatePage).should("be.visible");
    });
  });
});
