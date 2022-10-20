import React from 'react';
import getInitialData from '../components/Api/Api';
import { Table } from 'antd';
import getColumns from '../components/utils/tableColumns';

import 'antd/dist/antd.css';

export const App = () => {

    const [data, setData] = React.useState([]);
    const [columns, setColumns] = React.useState([]);

    // function getTime(start, end){
    //   return end - start
    // }

    // function getDay(arr) {
    //   arr.forEach(element => {
    //     console.log(element.Days)
    //   });
    // }

    
    React.useEffect(() => {
        getInitialData()
        .then((data) => {
            setData(data);
            setColumns(getColumns(data))
        })
        .catch((err) => {
            console.log(err)
        });
    }, []);

    return (
        <>
        <h1>Hello, world!</h1>
        <Table
            columns={columns}
            dataSource={data}
        />     
        </>
    )
    
}
