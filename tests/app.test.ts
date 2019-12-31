import app from "../src/app";
import request from "supertest";

describe("Test the root path", () => {
  test("GET Request to the root path '/'", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("message", "Alhamdhulillah");
        done();
      });
  });

  test("POST should return 404", done => {
    request(app)
      .post("/")
      .then(response => {
        expect(response.status).toBe(404);
        done();
      });
  });
});
