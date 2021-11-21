// Heading Date and Day
const today = new Date();
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

document.getElementById("heading").innerHTML = today.toLocaleDateString(
  "en-US",
  options
);

/* date */

// for making birth date to current date to show content
// you can change birth dates to current dates to see person in results
var d = new Date();
var currentMonthAndDate =
  (d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1) +
  "/" +
  d.getDate();

/*   Data   */
// JSON Array
const data = [
  {
    id: 1,
    name: "Rishbh Pandit",
    date: "01/25/2000",
    image:
      "https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Simaran Dhillon",
    date: currentMonthAndDate + "/1999", // changing date and month to current date to show initial content
    image:
      "https://images.unsplash.com/photo-1624610805301-820c1a61655d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 3,
    name: "Sunny Biswas",
    date: currentMonthAndDate + "/1996", // changing date and month to current date to show initial content
    image:
      "http://images.newindianexpress.com/uploads/user/ckeditor_images/article/2017/8/3/Cinem.jpg",
  },
  {
    id: 4,
    name: "Vilash Kagar",
    date: "09/11/1996",
    image: "https://miro.medium.com/max/477/1*Xy5bPZi-PxXnLFP5UAH7xQ.png",
  },
  {
    id: 5,
    name: "Naim Ahmed",
    date: "05/25/1996",
    image:
      "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwbWFsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    name: "Dhani Sharma",
    date: "11/19/2000",
    image:
      "https://media.istockphoto.com/photos/portrait-of-pretty-indian-high-school-student-in-classroom-picture-id511353109?b=1&k=20&m=511353109&s=170667a&w=0&h=_8I1JZWss2no7cy1TMReR5nRk-2K-7GQqcNOzux6GDQ=",
  },
  {
    id: 7,
    name: "Amir Basheer",
    date: "12/19/1993",
    image:
      "https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhbiUyMG1hbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 8,
    name: "Arohi Savkare",
    date: "05/22/1996",
    image:
      "https://images.unsplash.com/photo-1622782045716-a05bcc4f5ae8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 9,
    name: "Dollar Gill",
    date: "11/20/2000",
    image:
      "https://images.unsplash.com/photo-1620730389901-ba3d6070c45c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGluZGlhbiUyMG1hbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 10,
    name: "Shruti Deshmukh",
    date: "11/19/1998",
    image:
      "https://images.unsplash.com/photo-1626193081943-7edeae05ef83?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 11,
    name: "Devashish Sharma",
    date: "05/25/1998",
    image:
      "https://s01.sgp1.cdn.digitaloceanspaces.com/article/151107-rhdoxmlzvu-1606308672.jpg",
  },
];

/*   Birthday Filter for today   */

var todayData = [];

const currentDate = new Date().getDate();
const currentMonth = new Date().getMonth();

todayData = data.filter((person, index) => {
  const { date } = person;
  return (
    parseInt(date.substring(3, 5)) === currentDate &&
    parseInt(date.substring(0, 2)) === currentMonth + 1
  );
});

/*    DISPLAY    */
// to show no of birdays on the current date
var noOfBirthdays = document.getElementById("noOfBirthdays");
noOfBirthdays.innerHTML = todayData.length + " birthdays today";

var people = document.getElementById("people");

todayData.forEach((person) => {
  const { id, name, date, image } = person;

  var article = document.createElement("article");
  article.setAttribute("class", "person");

  var img = new Image();
  img.src = image;
  img.setAttribute("alt", name);

  var info = document.createElement("div");

  var h4 = document.createElement("h4");
  h4.setAttribute("id", "name");
  h4.innerHTML = name;

  var p = document.createElement("p");
  var dob = new Date(date);

  // calculate month difference from current date in time
  var month_diff = Date.now() - dob.getTime();

  // convert the calculated difference in date format
  var age_dt = new Date(month_diff);

  // extract year from date
  var year = age_dt.getUTCFullYear();

  //  now calculate the age of the user
  var age = Math.abs(year - 1970);
  p.innerHTML = age + " years";

  info.appendChild(h4);
  info.appendChild(p);

  article.appendChild(img);
  article.appendChild(info);

  people.appendChild(article);
});

// To clear All the bithdays

function clearAll() {
  people.innerHTML = "";
  noOfBirthdays.innerHTML = "0 birthdays today";
}

/*  Toast Notification after wishing HBD  */
const button = document.getElementById('wish-btn')  
 const toasts = document.getElementById('toasts')  
 const messages = [  
   'Happy Birthday'  
 ]  
 const types = ['info', 'success', 'error']  
 button.addEventListener('click', () => createNotification())  
 function createNotification(message = null, type = null) {  
   const notif = document.createElement('div')  
   notif.classList.add('toast')  
   notif.classList.add(type ? type : getRandomType())  
   notif.innerText = message ? message : getRandomMessage()  
   toasts.appendChild(notif)  
   setTimeout(() => {  
     notif.remove()  
   }, 3000)  
 }  
 function getRandomMessage() {  
   return messages[Math.floor(Math.random() * messages.length)]  
 }  
 function getRandomType() {  
   return types[Math.floor(Math.random() * types.length)]  
 } 
