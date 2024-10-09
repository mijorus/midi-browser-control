let midiAccess: MIDIAccess;

export async function startService() {
    if (!midiAccess) {
        // @ts-ignore
        await navigator.permissions.query({ name: 'midi' });
        midiAccess = await navigator.requestMIDIAccess();
    }

    midiAccess.inputs.forEach(input => {
        input.addEventListener('midimessage', onMidiMessage)
    });
}

export async function stopService() {
    midiAccess.inputs.forEach(input => {
        input.removeEventListener('midimessage', onMidiMessage)
    })
} 

function onMidiMessage(event: MIDIMessageEvent) {
    chrome.runtime.sendMessage({ action: "midiMessage", data: event.data });
}