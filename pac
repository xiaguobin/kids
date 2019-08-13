var list = [
"*.starfall.com",
"*.sciencea-z.com",
"*.kidsa-z.com",
"kidsa-z.com",
"*.raz-plus.com",
"raz-plus.com",
"*.raz-kids.com",
"raz-kids.com",
"*.learninga-z.com",
"learninga-z.com",
"*.headsprout.com",
"headsprout.com",
"readinga-z.com",
"*.readinga-z.com"，
"vocabularya-z.com",
"*.vocabularya-z.com"，
"ipip.net",
"*.ipip.net"];

var proxy = "PROXY 172.96.229.122:3128";

function FindProxyForURL(url, host) {
    for (var i = 0, l = list.length; i < l; i++) {
        if (shExpMatch(host, list[i])) {
            return proxy;
        }
    }
    return "DIRECT";
}
