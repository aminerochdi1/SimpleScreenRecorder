const {app,BrowserWindow} = require("electron")

// is App Ready and initialised ?
app.whenReady().then(() => {
    const window = new BrowserWindow(
        {
            frame:false,
            transparent:true
        }
    )
    window.loadFile("index.html")
})

