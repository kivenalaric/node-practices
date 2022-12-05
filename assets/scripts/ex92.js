function dateAndTime(){
    const date = new Date();
    const d = date.toDateString();
    const time = date.toLocaleTimeString();

    console.log('Date: ' + d)
    console.log('Time: ' + time)
}

dateAndTime();
