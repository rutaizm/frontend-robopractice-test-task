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
          
          for (let i=1; i<32; i++) {
            user[i] = 0;          
          
            item.Days.forEach((day) => {  
              return user[getMonth(day.Date)] = getTime(day.Start, day.End); 
            });
          }
          user.total = formatTotal(getTotal(user)) 
          return console.log(user) 
      })
      return filteredData
    }

    function timeConverter(rawData) {
      const data = rawData.split(/(?:-|:)+/);
      const timeFormat = new Date(0, 0, 0, data[0], data[1], 0);
      const time = timeFormat.getTime();
      return time
    }

    function formatTime(times) {
      const num = times.split(':').map(Number);
      let t = 60 * num[0] + num[1]
      return t 
    }
     

    function getTime(start, end) {
      const startingTime = timeConverter(start)
      const endingTime = timeConverter(end)
      let diff = endingTime - startingTime;
      const hours = Math.floor(diff / 1000 / 60 / 60);
      diff -= hours * 1000 * 60 * 60;
      const minutes = Math.floor(diff / 1000 / 60);
    
      return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`       
    }

    function formatTotal(num) {
      const hours = Math.floor(num / 60);     
      const minutes = Math.floor(num %60);
      return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`
    }
   
    function getMonth(month) {
        const newMonth = new Date(month);
        return newMonth.getDate();
    }

    function getTotal(user) {
      let total = 0;
      for (let i=1;i <= 31; i++) {
        if (user[i] === 0) continue
        total += formatTime(user[i]) 
      }      
      return total;
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
