import browserActions from "./actions/browserActions";
import pageActions from "./actions/pageActions";


console.log('ciao da est');


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "midiMessage") {
        // Handle MIDI message here
        console.log("MIDI message received:", request);
        // browserActions.scrollTabs(request)
        pageActions.zoomGmaps(request, sender)
    }
});