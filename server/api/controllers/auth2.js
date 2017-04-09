'use strict';
const express = require('express');
const Users = require('../../database').users;
const bcrypt = require('bcrypt');
const moment= require('moment');
const jwt    = require('jsonwebtoken');
const config = require('../../config.js'); // get our config file
const app = express();

app.set('superSecret', config.secret);

  const auth2 = {

      findOne(req,res){
        Users.findOne({mail:req.body.mail})
        .then(user =>{
          if (user) {
            console.log(user);
            if (user.password != req.body.password) {
              res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } 
            else {
              const token = jwt.sign(user, app.get('superSecret'), {
               //exp: 1440 // expires in 24 hours
               //expiration token n'est pas accepté
              });
              res.json({success: true, message: 'Enjoy your token!', token: token});
              res.redirect('/logged');

            }   
          }
          if (!user) {
                res.json({ success: false, message: 'Authentication failed. User not found.' });
              }
       })
        .catch(err =>{
          if (err) throw err;  
        })
      }, //ok fonctionne sur postman

     // authentifier le token
      verify(req,res,next){
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        //const token =req.cookies;
        if (token) {

      // verifies secret and checks exp
      jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });    
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded; 
          console.log(decoded);
          next();
        }
      });

    } else {
      return res.status(403).send({ 
          success: false, 
          message: 'No token provided.' 
      });
      
      }

    }
  }
 

module.exports = auth2;