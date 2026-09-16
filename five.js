//উপরের অব্জেক্ট এর Structure টি লক্ষ্য করো।  ph university তে  পড়া student এর Data   student  নামের একটা ভ্যারিয়েবলে সেইভ করা আছে  ।  তোমাকে এমন একটা প্রোগ্রাম লিখতে হবে যেটা   student  অব্জেক্ট এর ডাটা এর উপর ভিত্তি করে  একটা ইমেইল  জেনারেট করে দেবে। 

var student= { 
    name: "jhankar" , 
    roll: 1014 ,
    department: "cse" ,
    
};
var mail = student.name + student.roll + ('.') + ('@ph.ac.bd');
console.log(mail);




