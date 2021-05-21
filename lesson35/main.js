let x = prompt("какое число")
if (x == 10){
    alert("верно")
}
else{
    alert("неверно")
}
let h = prompt("введите число от 0 до 60")
if(h<15){
    alert("1 четверть часа")
} 
else if (h<30){
    alert("2 четверть")
}
else if (h<45){
    alert("3 четверть")
}
else if (h<60){
    alert("4 четверть")
}
let lang = prompt("введите язык")
if (lang == "ru"){
    alert("понедельник, вторник, среда, четверг, пятница, суббота, воскресенье")
}
else if (lang == "en"){
    alert("sunday, monday, tuesday, wednesday, thurstday,friday,saturday")
}
else{
    alert("вы ввели некорректный язык")
}
// let lang = array = ["понедельник", "вторник","среда", "четверг", "пятница", "суббота", "воскресенье"]
// alert(lang[3])
// alert(lang[4])
// alert(lang[5])
let f = prompt("введите язык")
    x = Arr = ["понедельник", "вторник","среда", "четверг", "пятница", "суббота", "воскресенье"]
    y = Arr = ["sunday", "monday", "tuesday", "wednesday", "thurstday","friday","saturday"]
    if( f == "ru"){
    alert(x)
}
else if (f =="en"){
    alert(y)
}
else{
    alert("вы ввели некорректный язык")
}

let a = Number (prompt("введите число а"))
    b = Number (prompt("введите число b"))
if (a<2 && b<4){
    alert(a + b)
}
else{
    alert(a - b)
}