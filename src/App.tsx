import React from "react";
import {useState, useEffect} from 'react';
import {Table} from "./compinents/Table/Table";

export type OrderType = {
    id: number
    key: string
    is_ready: boolean
}

function App() {
    const [orders, setOrders] = useState<OrderType[]>([]);

    const [loading, setLoading] = useState<boolean>(false);


    useEffect(() => {
        setLoading(true)
        fetch('https://online-kezek-test-production-5624.up.railway.app/api/restaurants/1/orders/')
            .then(res => res.json())
            .then((data: any) => {
                setLoading(false)
            setOrders(data.orders)
    })
    }, []);


    const gettingReadyOrders = orders.filter(order => order.is_ready);
    const readyOrders = orders.filter(order => !order.is_ready);

    return (
        <div className="App">
            <Table orders={[]} title={"Getting ready"} status={"not_ready"} isLoading={loading}/>
            <Table orders={readyOrders} title={"Ready"} status={"ready"} isLoading={loading}/>
        </div>
    )
}

export default App
