import React from 'react';
import { useState } from 'react';
import getInitialData from '../components/Api/Api';
import { Table } from 'antd';
import columns from '../components/utils/tableColumns';
import { initialData } from '../components/utils/initialData';


export const App = () => {

    const [data, setData] = useState([]);

    React.useEffect(() => {
        getInitialData()
        .then((data) => {
            setData(data);
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        });
    }, []);

    return (
        <>
        <h1>Hello</h1>
        <Table
            columns={columns}
            dataSource={data}
        />     
        </>
    )
    
}
