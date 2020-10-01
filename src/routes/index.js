const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
var upload = multer({ storage: storage })


router.get('/', (req, res) => res.json("OK"))
router.post('/upload', upload.any(), (req, res) => {
    return res.send({
      error: false,
      codigo: 200,
      uploadLink: req.files[0].filename
    })
})

module.exports = router;