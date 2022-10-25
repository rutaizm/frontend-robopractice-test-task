import React from 'react';
import getInitialData from '../components/Api/Api';
import { Table } from 'antd';
import getColumns from '../components/utils/tableColumns';
import getFilteredData from '../components/utils/convertRawData';

import 'antd/dist/antd.css';

export const App = () => {

    const [data, setData] = React.useState([]);    

    const [searchText, setSearchText] = React.useState('');
    const [searchedColumn, setSearchedColumn] = React.useState('');
    const searchInput = React.useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      setSearchText(selectedKeys[0]);
      setSearchedColumn(dataIndex); 
    }; 
    const handleReset = (clearFilters) => {
      clearFilters();
      setSearchText('');
    };

    const [columns, setColumns] = React.useState([]);

    React.useEffect(() => {
      getInitialData()
      .then((res) => {
          const f = getFilteredData(res);
          setData(f);
      })
      .catch((err) => {
          console.log(err)
      });
    }, []);

    React.useEffect(() => {
          setColumns(getColumns(searchText,setSearchText, 
            searchedColumn, setSearchedColumn,
            searchInput,handleSearch, handleReset))     
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
