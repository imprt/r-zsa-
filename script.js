(function() {
    function disableDevTools() {
        window.oncontextmenu = function () { return false; };
        document.onkeydown = function (e) {
            if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) return false; 
            if (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I')) return false; 
            if (e.ctrlKey && e.shiftKey && (e.key === 'c' || e.key === 'C')) return false; 
            if (e.ctrlKey && e.shiftKey && (e.key === 'j' || e.key === 'J')) return false; 
            if (e.ctrlKey && e.key === 's') return false; 
            if (e.key === 'F12') return false; 
        };
    }
    disableDevTools();
})();