export type Csvtype = {
    "Zone": string,
    "Store": string,
    "Salesman name": string,
    "Date": string
}

export type Salerestype = {
    param: string,
    sales: number
}

export type Saletype = {
    zone: string, 
    strore: string, 
    salesman: string, 
    salesdate: string
}

export type ParamKey = { 
    key: "zone" | "store" | "salesman" | "salesdate"
}