const axios = require('axios');
console.log("hello sap btp");

async function main() {
    let options = { method: 'GET', url: 'https://services.odata.org/northwind/northwind.svc/Orders?$format=json&$top=10'};
    try {
        let res = await axios(options);
        let myData = res.data.value;
        for(i=0;i<myData.length;i++) {
            var order = myData[i];
            console.log(JSON.stringify(order));
        }
    } catch(err) {
        console.log('my btp is broken!');
    }
}

main()
  .then(() => process.exit(0))
  .catch(console.error)



