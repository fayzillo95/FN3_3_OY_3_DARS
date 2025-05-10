export default (error, req, res, next) => {
    res.status(error.status || 500).json({
        message:error.message || "internal server error !",
        success:false,
        data:[]
    })
}