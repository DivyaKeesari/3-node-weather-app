const express = require("express");
const request = require("request");
// const customer_details = require("../routes/Customer_Details");
// const Jade = require("../routes/jade");
const app = express();

const notes = require('./notes.js')

// const fs = require('fs');
// const name = require('./utils.js');
// console.log(name)

// const getNotes = require('./notes.js')
// const notes = getNotes()
// console.log(notes);

// const validator = require('validator');
// console.log(validator.isURL('https://prdpcrawest01.w3-969.ibm.com/tools/in/en/transport/Welcome.action'))

// const chalk =  require('chalk')
// const Msg = chalk.bold.bgRed.green('Success!');
// console.log(Msg)

//console.log(process.argv)

//const command = process.argv[2]
    // if(command === 'add') {
    //        console.log('Adding Note!')
    // }else if(command === 'remove') {
    //     console.log('remove Note!')
    // }

//fs.writeFileSync('notes.txt','My File Sync')
//fs.appendFileSync('notes.txt',' My Place is bangalore')
const yargs = require('yargs')
console.log(yargs.argv)
yargs.version('1.1.0')

yargs.command({
    command : 'Add',
    describe : 'Add a note',     //add for args
    builder: {
        title: {
            describe : 'Add a note',
            demandOption : true,
            type : 'string'
        },
        body: {
            describe: 'Note body',
            demandOption : true,
            type : 'string'

        }
    },
    handler : function (argv) {
    notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command : 'remove',
    describe : 'Remove a note',  // remove for args
    handler : function () {
        console.log('Removing a note')
    }
})

yargs.command({
    command : 'list',      //list for yargs
    describe : 'list of notes',
    handler : function () {
        console.log('list of Notes')
    }
})

yargs.command({
    command : 'read',       // read for yargs
    describe : 'read a note',
    handler : function () {
        console.log('reading of Notes')
    }
})

yargs.parse()
// function add(){
// let a = 4, b =3
// return a+b;
// }
// app.get('/validate', function(req, res)
// {
// let sum = add()
// res.status(200).json({"sum":sum});
// })
// app.get('/list/:username/:id', function(req,res)
// {
//  let name = req.params.username;
//  let userId = req.params.id
//  res.json({"name":name, "id":userId})
// })
// app.get('/name', function(req,res)
// {
//     let queryParameter = req.query.firstName;
//     res.json(queryParameter)
// })
// app.get('/Addition',Jade.AddNumber)
// // var Addition = require('/Addition.js',Jade.AddNumber);
// // console.log(Addition.AddNumber(3,4))
// app.get('/getCustomerDetails', customer_details.getIds)
// const port = 9000;
// app.listen(port, function(){
// //console.log('nodejs app listening on http://localhost:${port}');
// });

