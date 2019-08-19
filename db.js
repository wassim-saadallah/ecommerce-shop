const flatten = list => list.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
);
const fs = require('fs');
const db = require('./database.json')
const categories = Array.from(new Set(flatten(db.map(item => item.categories.split(',')))))
const brands = Array.from(new Set(db.map(item => item.brand)))
const carts = [];

const saveDB = () => {
    fs.writeFileSync('carts.json', JSON.stringify(carts))
    fs.writeFileSync('brands.json', JSON.stringify(brands))
    fs.writeFileSync('categories.json', JSON.stringify(categories))
    console.log('Items saved to files')
}
setInterval(saveDB, 1000 * 60)

module.exports = { db, categories, brands, carts };

var testItem = {
    "id": "AVpf3txeLJeJML43FN82",
    "asins": "B0168YIWSI",
    "brand": "Microsoft",
    "categories": "Electronics,Computers,Computer Accessories,Keyboards, Mice & Joysticks,Keyboards,All Keyboards,Computers & Accessories,Computer Accessories & Peripherals,Keyboards, Mice & Accessories,Computers & Tablets,iPad & Tablet Accessories,Tablet Cases, Covers & Keyboard Folios,Computer Peripherals,Keyboards Accessories,Computers Features,Cases, Covers & Keyboard Folios,Name Brands,Microsoft,Microsoft Surface,Microsoft Surface Accessories,Microsoft Surface Cases & Covers,Microsoft Surface Tablets,Frys,Tablets,Cases",
    "colors": "Black",
    "dateAdded": "2015-11-13T12:28:09Z",
    "dateUpdated": "2018-01-29T02:15:13Z",
    "dimension": "11.6 in x 8.5 in x 0.19 in",
    "ean": "8.90E+11",
    "keys": "microsoftsurfacepro4typecoverwithfingerprintid/4562009,microsoftsurfacepro4typecoverwithfingerprintid/554687153,889842011050,0889842011050,microsoftsurfacepro4typecoverwithfingerprintid/mirh700001,microsoftsurfacepro4typecoverwithfingerprintid/n82e16834735100,microsoftsurfacepro4typecoverwithfingerprintid/b0168yiwsi,microsoft/rh700001",
    "manufacturer": "Microsoft",
    "manufacturerNumber": "RH7-00001",
    "name": "Microsoft Surface Pro 4 Type Cover with Fingerprint ID",
    "primaryCategories": "Electronics",
    "upc": "8.90E+11",
    "weight": "1.1 pounds"
}