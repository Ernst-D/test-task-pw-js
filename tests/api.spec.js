// @ts-check
const { test, expect} = require('@playwright/test');
const chance = require("chance").Chance;

const apiUrl = "https://reqres.in/api";

test.use({
    baseURL:apiUrl
})

test('Create user', async ({ request }) => {
    let name = chance().name();
    let job = chance().word();
    let response = await request.post('/users',{
        data:{
            "name": name,
            "job": job
        }
    });
    console.log((await response.json()));
    console.log(response.status())
    expect(response.ok()).toBeTruthy();
});