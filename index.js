const clock = document.getElementById('clock')


setInterval(() => {
    let date = new Date();
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString();
}, 1000) 
// sets a particular function with a time interval; invokes the function again and again after each given time interval
// takes two args; a callback function and the time interval(in ms)