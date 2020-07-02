# Electron Demo - minimum steps to get something to start quickly

## Initial setup
```.
npm run install
```
## Launch
```.
npm run start
```
## Pacagke
```.
npm run build
```
## Add reading from a serial port 
```.
npm install serail --save
```

## MVP (Minimum viable product) Setup app 
```.
How I created this in the beginning:

mkdir e_demo && cd e_demo
npm init
npm install electron --save-dev
npm install electron-builder --save-dev
npm install electron-is-dev --save-dev
npm install electron-devtools-installer --save-dev
touch main.js index.html
```

# Create main
```.
- main controls the app lifecycle
- open, close, menu bar, etc. os level stuff
- In default package.json,  main looks for index.js, so this must be changed

cat > main.js<<'EOF'
const { app, BrowserWindow} = require('electron')
let win
app.on('ready', ()=> {
  win = new BrowserWindow()
  win.loadURL('file://${__dirname}index.html')
})
EOF
``` 

## Create initial html
```.
cat > index.html <<'EOF'
<html>
 <scirpt>
   const fs = require('fs')
   const os = require('os')
   const files = fs.readdirSync(os.homedir())
   document.innerHTML = files.join('<br>')
 </script>
 <script src="this/works/too.js"></script>
</html>
EOF
```

## Edit package.json
### Change main to our js file
```.
From:
  "main": "index.js",
To:
  "main": "main.js",
```

### Add script targets
```.
  "scripts": {
    "postinstall": "install-app-deps",
    "start": "npm install && electron ./app",
    "pack": "build --dir",
    "dist": "build"
  },
```

### Add the build target for making the standalone app
## Initial setup
```.
  "build": {
    "appId": "e_demo",
    "dmg": {
      "contents": [
        {
          "x": 110,
          "y": 150
        },
        {
          "x": 240,
          "y": 150,
          "type": "link",
          "path": "/Applications"
        }
      ]
    },
    "linux": {
      "target": [
        "AppImage",
        "deb"
      ]
    },
    "win": {
      "target": "NSIS",
      "icon": "build/icon.ico"
    }
  }
```

## Add react 
```.
organize things
create directories public and dist
mv index.html into public
add this to index.html
  <div id="root"></div>
```

