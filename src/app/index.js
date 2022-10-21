import React from 'react';
import getInitialData from '../components/Api/Api';
import { Table } from 'antd';
import getColumns from '../components/utils/tableColumns';

import 'antd/dist/antd.css';

export const App = () => {

    const [data, setData] = React.useState([]);
    const [columns, setColumns] = React.useState([]);

    function getFilteredData(rawData) {
      const filteredData = rawData.map((item) => {
          const user = {}
          user.id = item.id;
          user.fullname=item.Fullname;         
          
          // for (let i=1; i<32; i++) {
          //   user[i] = 0;
          // }
          
          item.Days.forEach((day) => {  
           user[getMonth(day.Date)] = getTime(day);            
          });
          return console.log(user) 
      })
      return filteredData
    }

    function getTime(oneDay) {
        const start = oneDay.Start.split("-");
        const end = oneDay.End.split("-");
        const startingTime = new Date(0, 0, 0, start[0], start[1], 0);
        const endingTime = new Date(0, 0, 0, end[0], end[1], 0);
        let diff = endingTime.getTime() - startingTime.getTime();
        const hours = Math.floor(diff / 1000 / 60 / 60);
        diff -= hours * 1000 * 60 * 60;
        const minutes = Math.floor(diff / 1000 / 60);

        return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`
    }

    function getMonth(month) {
        const newMonth = new Date(month);
        return newMonth.getDate();
    }



    React.useEffect(() => {
      getInitialData()
      .then((data) => {
          const f =getFilteredData(data);
          // console.log(f)
      })
      .catch((err) => {
          console.log(err)
      });
  }, []);

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
