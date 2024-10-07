function scrollTabs(direction) {
    chrome.tabs.query({ currentWindow: true }, function (tabs) {
        if (tabs.length <= 1) return;

        chrome.tabs.query({ currentWindow: true, active: true }, function (currentTab) {
            var index = currentTab[0].index;
            var newIndex = (index + direction + tabs.length) % tabs.length;
            chrome.tabs.update(tabs[newIndex].id, { active: true });
        });
    });
}


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "midiMessage") {
        // Handle MIDI message here
        console.log("MIDI message received:", request.data);
        // // Example: Change tab if MIDI note is 60 (middle C)
        // if (request.data[0] === 144 && request.data[1] === 60) {
        //     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        //         chrome.tabs.update(tabs[0].id, { url: "https://www.example.com" });
        //     });
        // }
    }
});