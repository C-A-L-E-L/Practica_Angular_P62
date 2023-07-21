export interface Usuario {
    "id": number,
    "name": string,
    "email": string,
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": number,
        "geo": {
            "lat": Float32Array,
            "lng": Float32Array
        }
    },
    "phone": string,
    "website": string,
    "company": {
      "name": string,
      "catchPhrase": string,
      "bs": string
    }
}