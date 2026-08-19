let responseData: any = "This is a string from an API fetch";

let stringLength1 = (responseData as string).length;
let stringLength2 = (<string>responseData).length;
