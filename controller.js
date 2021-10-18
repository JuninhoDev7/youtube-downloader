const express = require("express")
const router = express.Router()

const ytd = require("ytdl-core")

router.get("/download", (req, res) => {
    const url = req.query.url
    const date = Date.now()
    res.header(`Content-Disposition", "attachment; filename="video_${String(date)}.mp4"`)
    return ytd(url).pipe(res);
})

router.get("/h", (req, res)=> {
    res.send("j")
})

module.exports = router;