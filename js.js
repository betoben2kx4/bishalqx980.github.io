function load() {
    showdate();
}
function showdate() {
    var dt = new Date();
    Hour = dt.getHours();
    Minute = dt.getMinutes();
    Day = dt.getDate();
    Month = dt.getMonth()+1;
    Year = dt.getFullYear();
    if (Minute < 10){
        Minute = "0" + Minute
    }
    if (Hour < 10){
        Hour = "0" + Hour
    }
    document.getElementById("date").innerHTML = (Day+"/"+Month+"/"+Year);
    document.getElementById("clock").innerHTML = (Hour+":"+Minute);
    setInterval(showdate,10000);
}
function restore() {
    document.getElementById("log").innerHTML = "∆❍X❑"
}
function ps3() {
    document.getElementById("log").innerHTML = "PS3 Exploit/Jailbreak - Firmware 4.84 To 4.89"
}
function ps4() {
    document.getElementById("log").innerHTML = "PS4 Exploit/Jailbreak - Firmware 9.00"
}
function ps5() {
    document.getElementById("log").innerHTML = "PS5 Debug Setting Enabler - Firmware 4.03 (Not full Jailbreak yet)"
}
function ps() {
    document.getElementById("log").innerHTML = "PlayStation Usefull Site's/DNS link & Many More..."
}
function tg() {
    document.getElementById("log").innerHTML = "Telegram Message Sender by Telegram BOT - Based on Telegram API"
}
function PSNStore() {
    document.getElementById("log").innerHTML = "Buy PlayStation Account @Low_Price!!"
}