setInterval(() => {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hrotation = 30 * hours + minutes / 2;  // Each hour is 30 degrees, plus half a degree per minute
    const mrotation = 6 * minutes;               // Each minute is 6 degrees
    const srotation = 6 * seconds;               // Each second is 6 degrees

    document.getElementById('hour').style.transform = `translate(-50%, -100%) rotate(${hrotation}deg)`;
    document.getElementById('minute').style.transform = `translate(-50%, -100%) rotate(${mrotation}deg)`;
    document.getElementById('second').style.transform = `translate(-50%, -100%) rotate(${srotation}deg)`;

}, 1000);
