import { ProductComponent } from "../../front-end/scripts/components/component";


describe("ProductComponent", () => {
    it("should be render where i would like", () => {
        //given
        const data = {
            id: "fake-id",
            name: "fake-name",
            description: "fake-description",
            imageUrl: "fake-image-url"
        }

        const $target = document.createElement("div");

        const p = new ProductComponent();
        p.setData(data);
        //when
        p.render($target);
        //then
        expect($target.querySelectorAll(".product").length).toEqual(1);
    })
});