

const getRandomValues=(array)=>
{
const max= array.lenght;
return Math.floor(Math.random()*max)
};

const username=[
    'proclaimretire',
    'nothingrolls',
    'preferenceblueberries',
    'resistanceyelp',
    'marvelousfanny',
];

const reactions = [
    ("Thanks for saying that, im now uncomfortable.", getRandomValues(username)),
    ("I agree.",getRandomValues(username)),
    ("I disagree.",getRandomValues(username)),
    ("I VIOLENTLY disagree.",getRandomValues(username)),
    ("Where am i?",getRandomValues(username)),
];

const thoughts=[
    ("If I see a bug, I simply leave.",username[0],[getRandomValues(reactions)]),
   ( " What if I’m underthinking?", username[1],[getRandomValues(reactions)]),
    ("You're not a beast at all. YOU'RE A HERO", username[4],[getRandomValues(reactions)]),
    ("It's called cauliflower, not ghost broccoli.",username[2],[getRandomValues(reactions)]),
    ('sometimes it’s nice being held.',username[3],[getRandomValues(reactions)]),
];

const usersdata= [
('proclaimretire', 'Bhoney808@gmail.com',[ thoughts[4]]),
('nothingrolls','Turberculosisis@hotmail.com',[thoughts[1]]),
('preferenceblueberries','Pathology@yahoo.com',[thoughts[3]]),
('resistanceyelp','X55063@pwc.gov',[thoughts[0]]),
('marvelousfanny','JohnJohnson@john.com',['Feeling adventurous',thoughts[2]]),
];





module.exports = {usersdata,thoughtsdata,reactionsdata};