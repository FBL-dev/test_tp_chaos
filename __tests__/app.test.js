const request = require("supertest"); 
const app = require("../index"); 
 
describe("API Tests", () => { 
 
  test("L’endpoint /health doit retourner un statut UP.", async () => { 
    const res = await request(app).get("/health"); 
    expect(res.statusCode).toBe(200); 
    expect(res.body.status).toBe("UP"); 
  }); 
 
  test("L’endpoint /add doit retourner un résultat correct.", async () => { 
    const res = await request(app).get("/add?a=2&b=3"); 
    expect(res.body.result).toBe(5); 
  }); 
}); 
