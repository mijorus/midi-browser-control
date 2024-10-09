export default {
    scrollTabs: (midiMessage: MIDIMessageEvent) => {
        console.log('scrolltab', midiMessage);
        
        if (!midiMessage.data) {
            return
        }

        const direction = midiMessage.data[2] > 64 ? 1 : -1

        chrome.tabs.query({ currentWindow: true }, function (tabs) {
            if (tabs.length <= 1) return;

            chrome.tabs.query({ currentWindow: true, active: true }, function (currentTab) {
                var index = currentTab[0].index;
                var newIndex = (index + direction + tabs.length) % tabs.length;
                chrome.tabs.update(tabs[newIndex].id, { active: true });
            });
        });
    }
};