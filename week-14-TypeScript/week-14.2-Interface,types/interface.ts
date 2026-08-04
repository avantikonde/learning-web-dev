interface User {
    name: string,
    age: number,
    address: {
        city: string,
        country: string,
        pincode?: number    //pincode is now optional
    }
}

let user = {
    name:"Avanti",
    age: 19,
    address:{
        city:"Pune",
        country:"India",
        pincode:411046
    }
}

console.log(user.name.address)
