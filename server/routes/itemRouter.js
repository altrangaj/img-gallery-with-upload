const router = require('express').Router()
const multer  = require('multer')
const items = require('../controllers/items')

const upload = multer({
  limits: { fileSize: 5000000 },
  fileFilter(_req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) { //allowed file extensions
      return cb(new Error('please upload png,jpeg or jpg'))
    }
    cb(undefined, true)
  }
})

router.get('/getall', items.getAll)

router.post('/update/:id', items.update)

router.get('/get/:id', items.getItem)

router.post('/delete/:id', items.delete)

router.post('/add', upload.single('uploaded_file'), items.add)

module.exports = router