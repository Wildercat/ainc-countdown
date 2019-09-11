var headingOne = document.querySelector('h1');
var standup = new Date;
standup.setHours(17,30,0);
console.log(standup);


// Get the current time and apend it to the DOM
function getTime() {
    // Get the current hour, minute, and second
    var currentDate = new Date();
    var timeRem = standup.getTime() - currentDate.getTime();
    //console.log(timeRem);
    // 45 mins of math
    let mls = timeRem % 1000;
    timeRem = (timeRem - mls) / 1000;
    let sec = timeRem % 60;
    timeRem = (timeRem - sec) / 60;
    let min = timeRem % 60;
    hrs = (timeRem - min) / 60;

    //concatenate hour minute and second with colons in between
    var resultTime = addZero(Math.abs(hrs)) + ':' + addZero(Math.abs(min)) + ':' + addZero(Math.abs(sec));
    //console.log(resultTime);

    //append to the h1 tag, add '-' if negative
    if (Math.sign(standup.getTime() - currentDate.getTime()) == -1) {
        headingOne.textContent = '-' + resultTime;
    } else {
        headingOne.textContent = resultTime;
    }
}

// if given integer < 10, add '0' in front of it, return result
function addZero(i) {
    let result;
    if (i < 10) {
        result = '0' + i;
    } else {
        result = i;
    }
    return result;
}

//Run the getTime function every 100 ms
window.setInterval(getTime, 100);