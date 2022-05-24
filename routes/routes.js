const express = require('express')
const router  = express.Router()
const formTemplateCopy =require('../models/formModels')

router.post('/form' , (request, response) => {
   const formNEwEntry = new formTemplateCopy({
       fullname:request.body.fullname,
       email:request.body.email,
       title:request.body.title,
       country:request.body.country,
       city:request.body.city,
       wallet:request.body.wallet,
       twittername:request.body.twittername,
       quote:request.body.quote
   })
   formNEwEntry.save()
   .then(data =>{
       response.json(data)
   })
   .catch(error =>{ 
       response.json(error)
   })
})
   
module.exports= router