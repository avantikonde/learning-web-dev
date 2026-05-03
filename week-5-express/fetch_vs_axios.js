//Using fetch 

async function main(){
    const response = await fetch("https://httpdump.app/dumps/2713620a-701d-4248-b627-4a10337579dc",{
        method: "GET",
        username: "Avanti",
        headers: {
            "Authorization": "123"
        }
    },
    );

    const textData = await response.text();
    console.log(textData);
}

main();

//Using axios

const axios = require("axios");

async function main(){
    const response = await axios.post("https://httpdump.app/dumps/2713620a-701d-4248-b627-4a10337579dc",
        {
            username:"Avanti Konde"
        },
        {
            headers: {
                "Authorization": "1234"
            },
        },
    );
    console.log(response.data);
}

main();
