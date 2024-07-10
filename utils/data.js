

function getRandomValues(objectarray)
{
const max= objectarray.length;
const num =Math.floor(Math.random()*max);
return num;
};

const username=[
    'proclaimretire',
    'nothingrolls',
    'preferenceblueberries',
    'resistanceyelp',
    'marvelousfanny',
];

const reactionsdata = [
    {reactionBody: "Thanks for saying that, im now uncomfortable.", username: username[getRandomValues(username)]},
    {reactionBody: "I agree.",username: username[getRandomValues(username)]},
    {reactionBody: "I disagree.",username: username[getRandomValues(username)]},
    {reactionBody: "I VIOLENTLY disagree.",username: username[getRandomValues(username)]},
    {reactionBody: "Where am i?",username: username[getRandomValues(username)]},
];

const thoughtsdata=[
    {thoughtText:"If I see a bug, I simply leave.",username: username[0]},
   { thoughtText:" What if I’m underthinking?", username: username[1]},
    {thoughtText:"You're not a beast at all. YOU'RE A HERO", username: username[4]},
    {thoughtText:"It's called cauliflower, not ghost broccoli.",username: username[2]},
    {thoughtText:'sometimes it’s nice being held.',username: username[3]},
];


const usersdata= [
{username: 'proclaimretire', email:'Bhoney808@gmail.com'},
{username: 'nothingrolls',email: 'Turberculosisis@hotmail.com' },
{username:'preferenceblueberries',email:'Pathology@yahoo.com'},
{username:'resistanceyelp',email:'X55063@pwc.gov'},
{username:'marvelousfanny',email:'JohnJohnson@john.com'},
];





module.exports = {usersdata,thoughtsdata,reactionsdata};