interface StubRequest<T = any> {
  method: string;
  url: string;
  statusCode: number;
  alias: string;
  fixture?: T;
  body?: any;
}

export const createMockResponses = (...stubRequests: StubRequest[]) => {
  stubRequests.forEach(({ alias, ...request }) => {
    const { method, url, fixture, body, ...rest } = request;
    const data = body ? { body } : { fixture };
    cy.intercept("GET", url, { ...data, ...rest }).as(alias);
  });
};

export const getApodImagesSuccess: StubRequest = {
  method: "GET",
  url: "https://api.nasa.gov/planetary/apod*",
  statusCode: 200,
  fixture: "apod.json",
  alias: "getApodImagesSuccess",
};

export const getApodImagesFailure: StubRequest = {
  method: "GET",
  url: "https://api.nasa.gov/planetary/apod*",
  statusCode: 500,
  alias: "getApodImagesFailure",
};
