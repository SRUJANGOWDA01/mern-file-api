const { StatusCodes } = require('http-status-codes')
const File = require('../model/file')

// upload file - post
const uploadFile = async (req,res) => {
    try {
        // to readfile data -> req.file
        let data = req.file

        let extFile = await File.findOne({ originalname:data.originalname})
        if(extFile)
            return res.status(StatusCodes.CONFLICT).json({ msg: `file already exists.`})

            // file data uploadto db
            let newFile = await File.create(data)

        res.status(StatusCodes.CREATED).json({ status: true, msg: "file uploaded", file: newFile })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false, msg: err})
    }
}

// read all files - get
const readAllFiles = async (req,res) =>{
    try {
        let data = await File.find({})
        res.status(StatusCodes.ACCEPTED).json({ status: true, length: data.length,files: data })
    } catch (err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false,  msg: err})
    }
}

// readsingle file ->get(id)
const readSingleFile = async (req,res) =>{
    try {
      let id = req.params.id
      let extFile = await File.findById(id)
          if(!extFile)
             return res.status(StatusCodes.NOT_FOUND).json({ status: false, msg: `requested id not found`})


        res.status(StatusCodes.ACCEPTED).json({ msg: 'read single files'})
    } catch (err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false, msg: err})
    }
}

// delete file - delete(id)
const deleteFile = async(req,res) => {
    try {
      let id = req.params.id
      let extFile = await File.findById(id)
          if(!extFile)
             return res.status(StatusCodes.NOT_FOUND).json({ status: false, msg: `requested id not found`})

             await File.findByIdAndDelete(id)
             
        res.status(StatusCodes.ACCEPTED).json({ msg: "delete file"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false, msg: err})
    }
}

module.exports = { uploadFile, readAllFiles, readSingleFile, deleteFile }