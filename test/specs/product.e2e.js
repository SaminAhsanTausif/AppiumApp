import products from "../../pages/catalog.js"
import addToCart from "../../pages/addToCart.js";
import catalog from "../../pages/catalog.js";

describe("Test navigation to catalog", () => {

    it("should navigate to catalog", async () => {
        
        const productsUISelector = await $(products.productText);
        await expect(productsUISelector).toHaveText("Products");

        await $(products.getCatalogItem(1)).click();
    
    });

    it("navigate to add to cart", async() => {

        const productPrice = await $(addToCart.itemPrice).getText();

        await $(addToCart.redCircle).click();

        await $(addToCart.plusBtn).click();
    
        //const count = await $(addToCart.countamount).getText();
       // await expect(count).toHaveText("2");

        await $(addToCart.addCartBtn).click();

        await $(addToCart.cartBadge).click();

        //const totalItems = await $(addToCart.totalItems).getText();
       // console.log('Test total Items', totalItems);
      //  await expect(totalItems).toHaveText("2 items");

        //const totalPriceExpected = productPrice * count;
        const totalPriceActual = await $(addToCart.totalPrice).getText();

        await expect(totalPriceActual).toHaveText("$59.98");

    });

});