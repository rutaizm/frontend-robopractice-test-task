function formatTotal(num) {
    const hours = Math.floor(num / 60);     
    const minutes = Math.floor(num %60);
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`
  } 

  export default formatTotal;