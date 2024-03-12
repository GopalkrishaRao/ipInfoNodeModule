* Fetch city, region, country etc details by IP.
* Provide the ip as input to fucntion in string form.
* For example
```
const fetchIP=require('ipinfomodule');


async function fetchData() {
    try {
        const response = await fetchIP("***.**.***.**");
        console.log(response);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchData();

// Output:
{
    "ip": "***.**.***.**",
    "city": "XXXXX",
    "region": "XXXX  XXXXX",
    "country": "XX",
    "loc": "xx.xxxx,xx.xxxx",
    "org": "XXXXXXXXXXXXXXXXXXX",
    "postal": "xxxxx",
    "timezone": "xxxxx",
    "ut": xxxxxxx
}
```                 
