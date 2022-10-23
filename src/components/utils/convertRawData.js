import { daysInMonth } from "./constant";

function getFilteredData(rawData) {
    const filteredData = rawData.map((item) => {
        const user = {}
        user.key = item.id
        user.id = item.id;
        user.fullname = item.Fullname;         
        
        for (let i=1; i<daysInMonth; i++) {
          user[i] = 0;          
          
          item.Days.forEach((day) => {  
            return user[getMonth(day.Date)] = getTimeDifference(day.Start, day.End); 
          });
        }
        user.total = getTotal(user) 
        return user
    })
    return filteredData
  }

  function formatTime(times) {
    const num = times.split(/(?:-|:)+/).map(Number);
    let t = 60 * num[0] + num[1]
    return t 
  }   

  function getTimeDifference(start, end) {
    const startingTime = formatTime(start)
    const endingTime = formatTime(end)
    let diff = endingTime - startingTime;

    return diff      
  }
 
  function getMonth(month) {
    const newMonth = new Date(month);
    return newMonth.getDate();
  }

  function getTotal(user) {
    let total = 0;
    for (let i=1;i <= 31; i++) {
      if (user[i] === 0) continue
      total += user[i] 
    }      
    return total;
  }

export default getFilteredData;