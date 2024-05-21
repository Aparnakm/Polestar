import { test, expect } from "@playwright/test";
import { request } from "http";
var userid;

//GET

test("Get User", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users?page=2");

  console.log(await response.json());
  expect(response.status()).toBe(200);
  
});

//POST

test("Create User", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    data: { name: "Anna", job: "engineer" },
    headers: { Accept: "application/json" },
  });

  console.log(await response.json());
  expect(response.status()).toBe(201);
  const text = await response.text();
  expect(text).toContain("Anna");
  var res = await response.json();
  userid = res.id;
});

//PUT

test("Update User", async ({ request }) => {
  const response = await request.put("https://reqres.in/api/users/" + userid, {
    data: { name: "Anna", job: "teacher" },
    headers: { Accept: "application/json" },
  });

  console.log(await response.json());
  expect(response.status()).toBe(200);
});

//DELETE

test("Delete User", async ({ request }) => {
  const response = await request.delete(
    "https://reqres.in/api/users/" + userid
  );
  expect(response.status()).toBe(204);
});
