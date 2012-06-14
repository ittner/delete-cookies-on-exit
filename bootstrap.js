
function install(data, reason) {
}

function uninstall(data, reason) {
}

function startup(data, reason) {
}

function shutdown(data, reason) {
    if (reason == APP_SHUTDOWN)
        Components.classes["@mozilla.org/cookiemanager;1"]
            .getService(Components.interfaces.nsICookieManager).removeAll(); 
}
