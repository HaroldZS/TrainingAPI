export type Csvtype = {
    "Zone": string,
    "Store": string,
    "Salesman name": string,
    "Date": string
}

export type Shoptype = {
    param: string,
    sales: number
}

export type Salerestype = {
    group:Array<Shoptype>,
    totalsales: number
}

export type Saletype = {
    zone: string, 
    strore: string, 
    salesman: string, 
    salesdate: string
}

export type Avgtype = {
    param: string,
    sales: number,
    avg: string
}