import {Products} from "../../front-end/scripts/services/products.service"

describe("getProducts", () => {
    it("is a function", () => {
        //given
        //when
        //then
        expect(typeof Products.getProducts).toEqual('function');
        //teardown
    });

    it("should return list of products", async () =>  {
        self.fetch = jest.fn().mockImplementation(() => {
            return {json: () => [] }
        })
        const result = await Products.getProducts();
        expect(result).toEqual(expect.any(Array));
    })
})

