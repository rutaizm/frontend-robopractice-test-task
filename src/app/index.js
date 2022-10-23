import React from 'react';
import getInitialData from '../components/Api/Api';
import { Table } from 'antd';
import getColumns from '../components/utils/tableColumns';
import getFilteredData from '../components/utils/convertRawData';

import 'antd/dist/antd.css';

export const App = () => {

    const [data, setData] = React.useState([]);
    const [columns, setColumns] = React.useState([]);


    React.useEffect(() => {
        getInitialData()
        .then((data) => {
            const f = getFilteredData(data);
            setData(f);
            const n = getColumns(data)
            setColumns(n)
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
