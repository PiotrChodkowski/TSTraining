import {Products} from "../../front-end/scripts/services/products.service"
import nock from "nock";
import 'isomorphic-fetch';
import { jsxExpressionContainer } from "@babel/types";

describe("getProducts", () => {
    it("is a function", () => {
        //given
        //when
        //then
        expect(typeof Products.getProducts).toEqual('function');
        //teardown
    });

    it("should return list of products", async () =>  {
        const old = self.fetch;
        self.fetch = jest.fn().mockImplementation(() => {
            return {json: () => [] }
        })
        const result = await Products.getProducts();
        expect(result).toEqual(expect.any(Array));
        self.fetch=old;
    })

    it("should make request", async () => {
        //given
        const response = ["a", "b"]
        nock("https://my-json-server.typicode.com/")
        .get('/piecioshka/fakes/products')
        .reply(200, response)
        //when
        const result = await Products.getProducts();
        //then
        expect(result).toEqual(response);
        //teardown
    })

    it.skip("handle error", async () => {
        //given
        const response = '<h1>error</h1>'
        nock("https://my-json-server.typicode.com/")
        .get('/piecioshka/fakes/products')
        .reply(500, response)
        //when
        try {
            await Products.getProducts();
        } catch (err) {
            //then
            expect(err.message).toEqual(response);
        }
        //teardown
    })
})

