
let navLinks =document.getElementById("navLinks");
function showMenu(){
    navLinks.style.left ="0";}

    function hideMenu(){
    navLinks.style.left ="-200px";
}




let loveButton = document.getElementById('textBtn');
let person = document.getElementById('person');
let mainText = document.getElementById('textQuote');
let quotes = [
{ quote:'I used there services its really good',
people:'chioma'},

{quote:'I Enjoyed every bit of my vacation',
people: 'Bona'},

{quote:'Touristng is simply the best',
people: 'Ngozi'}, 

{ quote: 'I used there services its really good',
people: 'Aisha'},

{quote:'I used there services its really good',
people: 'Ruth'},
];

loveButton.addEventListener('click', function(){
let random = Math.floor(Math.random()* quotes.length);

mainText.innerText = quotes[random].quote;

person.innerText= quotes[random].people;
}
)

