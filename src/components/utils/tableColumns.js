import { daysInMonth } from "./constant";
import formatTotal from "./formatTotal";
import getColumnSearchProps from "./search";


function getColumns(searchText,setSearchText, searchedColumn, setSearchedColumn,
  searchInput, handleSearch, handleReset) {

  const userColumns = 
    {
      key:'id',  
      title: 'User',
      dataIndex: 'fullname',
      width: 150,
      fixed: 'left',
      ...getColumnSearchProps('fullname', searchText,setSearchText, searchedColumn, setSearchedColumn,
      searchInput, handleSearch, handleReset),
    };

  const daysColumns = [...Array(daysInMonth).keys()]
    .map((eachDay, i) => ({
      key:'day',  
      title: `${i}`,
      dataIndex: `${i}`,
      render:formatTotal,
      sorter: (a, b) => a[`${i}`] - b[`${i}`],
      width: 70,
      align: 'right',
      sortDirections: ['ascend', 'descend'],
    }))
    daysColumns.shift();

  const monthlyTotal = {
      key:'monthlyTotal',  
      title: 'Monthly Total',
      dataIndex: 'total',
      render:formatTotal,
      sorter: (a, b) => a.total - b.total,
      width: 100,
      align: 'center',
      sortDirections: ['ascend', 'descend'],
      fixed:'right'
  }

  return [userColumns, ...daysColumns, monthlyTotal]

}

export default getColumns;