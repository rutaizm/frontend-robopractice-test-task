import { daysInMonth } from "./constant";
import formatTotal from "./formatTotal";


function getColumns() {

  const userColumns = 
    {
      key:'id',  
      title: 'User',
      dataIndex: 'fullname',
    };

  const daysColumns = [...Array(daysInMonth).keys()]
    .map((eachDay, i) => ({
      key:'day',  
      title: `${i}`,
      dataIndex: `${i}`,
      render:formatTotal,
      sorter: (a, b) => a[`${i}`] - b[`${i}`],
      width: 60,
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
      align: 'right',
      sortDirections: ['ascend', 'descend'],
  }

  return [userColumns, ...daysColumns, monthlyTotal]

}

export default getColumns;