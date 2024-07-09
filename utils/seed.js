const connection = require ('../config/connection'); 
const {Users,Thoughts} = require('../models');
const {usersdata,thoughtsdata,reactionsdata} =require('./data');

connection.on('error',(err)=> err);

connection.once('open',async () => {
    console.log('connected');

    let userCheck = await connection.db.listCollections({ name: 'user' }).toArray();
    if (userCheck.length) {
    await connection.dropCollection('users');
    }

    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
    }

    await Users.insertMany(usersdata);
    await Thoughts.insertMany(thoughtsdata);

    console.table(usersdata);
    console.table(thoughtsdata);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});

