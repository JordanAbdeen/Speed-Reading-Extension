function setup(){

}

document.querySelector('#bionic').addEventListener('click', () => {
    chrome.tabs.query({currentWindow: true, active: true}, sendToContent);

    function sendToContent(tabs){
        let ratioOfLetters = document.getElementById("myRange").value;

        let msg = {
            activate: true,
            characters: ratioOfLetters
        }
        console.log(msg);
        chrome.tabs.sendMessage(tabs[0].id, msg);
    }
})