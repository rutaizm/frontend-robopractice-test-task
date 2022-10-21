
function getColumns() {

  const userColumns = 
    {
      key:'id',  
      title: 'User',
      dataIndex: 'Fullname',
    };

  const daysColumns = [...Array(31).keys()]
    // .map((i) => i + 1)
    .map((eachDay) => ({
      key:'day',  
      title: 'day',
      dataIndex: 'day',
    }))

  const monthlyTotal = {
      key:'monthlyTotal',  
      title: 'monthlyTotal',
      dataIndex: 'monthlyTotal',
  }

  return [userColumns, ...daysColumns, monthlyTotal]

}

export default getColumns;