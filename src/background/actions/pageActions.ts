export default {
    zoomGmaps: async (midiMessage: MIDIMessageEvent, sender: chrome.runtime.MessageSender) => {
        console.log('scrolltab', midiMessage, sender);
        if (!midiMessage.data) {
            return
        }

        const activeTab = await chrome.tabs.query({ active: true, currentWindow: true })
        const tabId = activeTab.length ? activeTab[0].id : null

        if (!tabId) {
            return
        }

        // // const direction = midiMessage.data[2] > 64 ? 1 : -1
        // chrome.debugger.attach({ tabId }, '1.3', function () {
        //     chrome.debugger.sendCommand({ tabId }, "Input.dispatchMouseEvent", { 
        //         type: 'mouseWheel',
        //         x: 0,
        //         y: 150
        //     });
        // })

        // document.dispatchEvent(new WheelEvent('wheel', {
        //     deltaY: 50,
        //     deltaX: 40,
        // }));

        chrome.scripting.executeScript({
            target: { tabId },
            args: [midiMessage],
            func: (midiMessage) => {
                window.scrollY

                window.scroll({
                    top: midiMessage.data![2] * 3,
                    left: 0,
                    behavior: "smooth",
                });

            }
        })



        // chrome.tabs.query({ currentWindow: true }, function (tabs) {
        //     if (tabs.length <= 1) return;

        //     chrome.tabs.query({ currentWindow: true, active: true }, function (currentTab) {
        //         var index = currentTab[0].index;
        //         var newIndex = (index + direction + tabs.length) % tabs.length;
        //         chrome.tabs.update(tabs[newIndex].id, { active: true });
        //     });
        // });
    }
};