const { StatusCodes } = require('http-status-codes')

// upload file
const uploadFile = async (req,res) => {
    try {
        res.Status(StatusCodes.CREATED).json({ mg:'upload file'})
    } catch (err) {
        res.Status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false ,msg: err})
    }
}

// read all files -> get
const readAllFiles = async (req,res) => {
    try {
        res.Status(StatusCodes.ACCEPTED).json({ mg:'read all files'})
    } catch (err) {
        res.Status(StatusCodes.INTERNAL_SERVER_ERROR).json({  status: false ,msg: err})
    }
}
// read single file - get(id)
const readSingleFile = async (req,res) => {
    try {
        res.Status(StatusCodes.ACCEPTED).json({ mg:'read single file'})
    } catch (err) {
        res.Status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false , msg: err})
    }
}
// delete file - delete(id)
const deleteFile = async (req,res) => {
    try {
        res.Status(StatusCodes.ACCEPTED).json({ mg:'delete file'})
    } catch (err) {
        res.Status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false , msg: err})
    }
}

module.exports = { uploadFile,readAllFiles,readSingleFile,deleteFile}