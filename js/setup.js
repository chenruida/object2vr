// create the object player with the container
obj = new object2vrPlayer('container')
obj.readConfigUrl('./xml/box.xml')
// hide the URL bar on the iPhone
setTimeout(function() {
    hideUrlBar()
}, 10)