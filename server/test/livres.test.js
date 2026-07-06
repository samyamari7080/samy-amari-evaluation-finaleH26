const request = require("supertest");
const app = require("../server");

describe("API Livres", () => {
  it("GET /api/livres/ doit retourner un statut 200 et une liste", async () => {
    const res = await request(app).get("/api/livres/");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("GET /api/livres/emprunts avec un email valide doit retourner 200", async () => {
    const res = await request(app).get("/api/livres/emprunts?email=jean.dupont@biblio.com");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});