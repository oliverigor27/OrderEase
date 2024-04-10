export class KitchenService
{
    private _arr: Object[];

    constructor() {
        this._arr = [];
    }

    async KitchenConsumer(data: Object)
    {
        
        this._arr.push(data);

        console.log(this._arr);

    }

    async GetOrders()
    {
        return this._arr;
    }
}