const { browser, element } = require("protractor");

let formpage=function()
{
    let name = element(by.model("FC.contact.firstName"));
    let surname= element(by.model("FC.contact.lastName"));
    let email=element(by.model("FC.contact.email"));
    let gendar=element(by.element("FC.contact.gender"));
    let age=element(by.model("FC.contact.age"));
    let note=element(by.model("FC.contact.info"));

    this.get=function(url)
    {
        browser.get(url);
    }
    this.firstname=function(fname)
    {
        name.sendKeys(fname);
    }
};
module.exports=new formpage();  