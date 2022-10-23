import { daysInMonth } from "./constant";


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
    }))
    daysColumns.shift();

  const monthlyTotal = {
      key:'monthlyTotal',  
      title: 'Monthly Total',
      dataIndex: 'total',
  }

  return [userColumns, ...daysColumns, monthlyTotal]

}

export default getColumns;