import React from 'react';
import s from "./Table.module.css"
import {OrderType} from "../../App";
import Lottie from "lottie-react";
import loading from "../../assets/animation/loating.json"
import notFound from "../../assets/animation/not-found.json"

type TableOrdersType = {
    orders: OrderType[];
    title: string;
    status: "ready" | "not_ready";
    isLoading: boolean
}

const tableStyles = {
    ready: {
        border: "1px solid green"
    },
    not_ready: {
        border: "1px solid orange"
    }
}
export const Table = (props: TableOrdersType) => {
    console.log()
    const orders = props.orders.length ? (
        props.orders.map(o => {
                return <div key={s.id} className={s.item}>
                    <button style={tableStyles[props.status]}>
                        {o.key}
                    </button>
                </div>
            })
    ) :  <Lottie animationData={notFound}/>

    return (
        <div className={s.table}>
            <div>
                <h1>{props.title}</h1>
            </div>
            <div className={props.isLoading || !props.orders.length ? s.flex : s.grid} style={tableStyles[props.status]}>
                {props.isLoading ?  <Lottie animationData={loading}/> : orders}
            </div>
        </div>
    );
};

