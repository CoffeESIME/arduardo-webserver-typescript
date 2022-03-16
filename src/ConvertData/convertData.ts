interface datos{
    address:string;
    value: number;
    timestamp: string;
}
export const getByAddress= (data:Array<datos>, element:string)=>{
    return data.filter((data) => data.address === element)
}