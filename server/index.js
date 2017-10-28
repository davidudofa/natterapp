// express router to condition actions
var express = require('express')
var router = express.Router()
var path = require('path')
var funcs = require('./funcs')
//var encodeName = funcs().encodeName



/* GET api listing. */
router.get('/action/:username?/:userhash?', (req, res, next) => {
  //grab params from request query
  var session = {
    username: req.query.username,
    lastMessageHash: req.query.userhash
  }
  if (!session.username || !session.lastMessageHash) {
    var result = {
      status: 'failed',
      errormsg: 'Empty username or hash'
    }
    res.json(result)
    //res.json('Usage: node index.js <username> <hash>')
  }else{
      // 1. load the database
      var dbFile = path.join(__dirname, 'db', 'index.json')
      funcs.loadDb(dbFile, function (err, db) {

        var encoded = funcs.encodeName(session.username)
        var inbox = funcs.findInbox(db, encoded)
        //check if username is right
        if (inbox.messages.length === 0){
          var result = {
            status: 'failed',
            errormsg: 'Incorrect username'
          }
          res.json(result)
        }else{
          var nextMessage = funcs.findNextMessage(inbox, session.lastMessageHash)
          res.json(nextMessage)
        }

      })
  }

 });

router.get('/test', (req, res) =>{
  res.json('NatterBase, Udofa N Michael');
})


module.exports=router;
