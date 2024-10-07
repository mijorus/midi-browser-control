export default {
    scrollTabs: (midiMessage: MIDIMessageEvent) => {
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