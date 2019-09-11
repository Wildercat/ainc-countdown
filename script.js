var headingOne = document.querySelector('h1');

// Get the current time and apend it to the DOM
function getTime() {
    // Get the current hour, minute, and second
    var today = new Date();
    // get hour, make 2 digits if not
    let hrs = addZero(today.getHours());
    // get minute, make 2 digits if not
    let min = addZero(today.getMinutes());
    // get second, make 2 digits if not
    let sec = addZero(today.getSeconds());
    
    //concatenate hour minute and second with colons in between
    var resultTime = hrs + ':' + min + ':' + sec;
    //console.log(resultTime);

    //append to the h1 tag
    headingOne.textContent = resultTime;

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