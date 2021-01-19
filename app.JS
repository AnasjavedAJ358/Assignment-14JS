// CHAPTER 31 TO 34

// var a= new Date();
// document.write(a)



// var month_name = function(dt){
//     mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//       return mlist[dt.getMonth()];
//     };
// alert("Current month: "+month_name(new Date()));


// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var c = b.slice(0,3);
// if (c === "Sat"){
//     document.write("It's Fun Day")
// }else if(c === "Sun"){
//     document.write("It's Fun Day")
// }else if(c === "Mon"){
//     document.write()
// }else if(c === "Tue"){
//     document.write()
// }else if(c === "Wed"){
//     document.write()
// }else if(c === "Thr"){
//     document.write()
// }else if(c === "Fri"){
//     document.write()
// }



// var a = new Date();
// var c = a.getDate();
// if(a.getDate()<16){
//     document.write("First fifteen days of the month")

// }
// else
// {
//     document.write("Last fifteen days of the month")
// }



// var a = new Date();
// var b = a.toString();
// var c = b.slice(16,19);
// if (c === "12:"){
//     document.write("It's PM")
// }else if(c === "13:"){
//     document.write("It's PM")
// }else if(c === "14:"){
//     document.write("It's PM")
// }else if(c === "15:"){
//     document.write("It's PM")
// }else if(c === "16:"){
//     document.write("It's PM")
// }else if(c === "17:"){
//     document.write("It's PM")
// }else if(c === "18:"){
//     document.write("It's PM")
// }else if(c === "19:"){
//     document.write("It's PM")
// }else if(c === "20:"){
//     document.write("It's PM")
// }else if(c === "21:"){
//     document.write("It's PM")
// }else if(c === "22:"){
//     document.write("It's PM")
// }else if(c === "23:"){
//     document.write("It's PM")
// }else if(c === "24:"){
//     document.write("It's AM")
// }else if(c === "01:"){
//     document.write("It's AM")
// }else if(c === "02:"){
//     document.write("It's AM")
// }else if(c === "03:"){
//     document.write("It's AM")
// }else if(c === "04:"){
//     document.write("It's AM")
// }else if(c === "05:"){
//     document.write("It's AM")
// }else if(c === "06:"){
//     document.write("It's AM")
// }else if(c === "07:"){
//     document.write("It's AM")
// }else if(c === "08:"){
//     document.write("It's AM")
// }else if(c === "09:"){
//     document.write("It's AM")
// }else if(c === "10:"){
//     document.write("It's AM")
// }else if(c === "11:"){
//     document.write("It's AM")
// }














// CHAPTER 35 TO 38

// function time(){
// var rightNow = new Date();
// document.write(rightNow)
// }
// time();

// function greet(a,b){
//  var c= a+b
//  alert("Hello: "+c)
// }
// greet("Anas"," Javed")



// function add(a,b){
//   var c= a + b;
//   return c
//     }

// var c=add(10,5)
// alert (c)


// function calculator(a,b,c){
//     if(c==='+'){
//         var ans = a + b;
//         return ans
//     }
//     else if(c==='-'){
//         var ans = a - b;
//         return ans
//     }
//     else if(c==='/'){
//         var ans = a / b;
//         return ans
//     }
//     else if(c==='*'){
//         var ans = a * b;
//         return ans
//     }
//     else {
//         alert("Wrong input")
//     }
// }
// var ans= calculator(prompt("Enter 1st value"),prompt("Enter 2nd value"),prompt("Enter Operator","+ - / *"))
// document.write(ans);

// function square(a){
//     var c= a*a;
//     return c;
// }

// var c= square(3);
// alert(c)


// function factorial(n){
//    var answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//  var n = 3;
//   answer = factorial(n)
//   document.write("The factorial of " + n + " is " + answer);


// function count(a,b){
//     var a,b;
//     for(var i=a; i<=b;i++){
//         document.write(i+"<br>")
//     }

// }
// count (prompt("enter 1st value"),prompt("enter last value"))

// function area(a,b){
//     var c= a*b;
//     return c;
// }
// var c= area(4,5)
// document.write(c);



// function check_Palindrome(str_entry){
//        var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;
//         if(cstr==="") {
//          alert("Nothing found!");
//             return false;
//         }
//         if ((cstr.length) % 2 === 0) {
//             ccount = (cstr.length) / 2;
//         } else {
//             if (cstr.length === 1) {
//                 alert("Entry is a palindrome.");
//                 return true;
//             } else {
//                 ccount = (cstr.length - 1) / 2;
//             }
//         }
//         for (var x = 0; x < ccount; x++) {
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//               alert("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         alert("The entry is a palindrome.");
//         return true;
//     }
//     check_Palindrome('maham');


// function myFunction(str) {
//     var str ;
//     var res = str.toUpperCase();
//     alert(res)
//   }
//   myFunction("the quick brown fox") 


// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));



// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// alert(char_count('JSResourceS.com','o'));



// function circum(radius){
//     var radius;
//     var cir= (2*3.14*radius)
//     alert("Circumference of circle is: "+cir)
// }

// function area(radius){
//     var radius;
//     var cir= 3.14*(radius*radius)
//     alert("The area of circle is: "+cir)
// }
// circum(4)
// area(4)




// CHAPTER 38 TO 42

// function myFunction(a,b) {
//     var a,b;
//     document.write(Math.pow(a, b)) ;
//   }
//   myFunction(2,3) 



// function check_leapyear(year){
//     var year;
//     if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
//     {
//         alert(year+" is a leap year");  
//     }
//     else
//     {
//         alert(year+" is not a leap year");  
//     }
// }
// check_leapyear(2017)


// function triangle(a,b,c){
//     var a,b,c;
//     alert(area)
//     var area=S(S - a)(S - b)(S - c);
//     var S=(a+b+c)/2;
//     alert(area)

// }
// triangle(2,2,2)


// var strings = ["bongo drums", "guitar", 
//   "flute", "double bass", "xylophone","piano"];                          

//    string = strings.map(x=>x.replace( /[aeiou]/g, '' ));              

//   console.log(string); 



// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
//   }
//   console.log(findOccurrences());


// function Distance(km) 
// {
//     var  km, m, feet, inch, cm,yard;
// 	m = km * 1000;  // 1km = 1000m
// 	feet = km*3280.84;  // 1km=3280.84feet
// 	inch = km*39370.1;  //1 km=39370.1inches
// 	cm = km * 100000;  //1km = 100000cm
// 	yard = km * 1093.61;  // 1km=1093.61yard

//    document.write("Distance between two cities  in Kilometres is: "+km+"<br>")
//    document.write("Distance in Metres = is: "+m+"<br>")
//    document.write("Distance in Feet is: "+feet+"<br>")
//    document.write("Distance in Inches  is: "+inch+"<br>")
//    document.write("Distance in Centimetres is: "+cm+"<br>")
//    document.write("Distance in Yards is: "+yard+"<br>")
// }
// Distance(prompt("Enter Distance between two cities  in Kilometres"))


// function amount(a){
//     var a;
// alert("You have "+  Math.floor(a/100 )+" Hundred notes "+Math.floor((a%100)/50)+" fifty notes "+Math.floor((((a%100)%50)/10))+" ten notes "+Math.floor((((a%100)%50)%10))+" rupees")
// }

// amount(prompt("Enter amount to withdraw"))









