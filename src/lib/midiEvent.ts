import type { MbcMidiDescription, MbcMidiMessageAction } from "./midiMessages";
import messages from './midiMessages'

/**
 * Read MIDI specifications:
 * https://midi.org/expanded-midi-1-0-messages-list
 * https://midi.org/midi-1-0-control-change-messages
 */
export class MbcMidiEvent {
    function: string;
    action: MbcMidiMessageAction;
    channel: number | null;
    status: number;
    data: number;
    velocity: number;
    isSwitch: boolean;
    isOn: boolean;

    constructor(event: MIDIMessageEvent) {
        const [status, data, velocity] = event.data!;

        if (messages[status] === undefined) {
            throw new Error("Unknown MIDI status");
        }

        const message = messages[status]

        this.function = message.function;
        this.channel = message.channel;
        this.status = status;
        this.action = message.action;
        this.data = data;
        this.velocity = velocity;
        this.isSwitch = false;
        this.isOn = false;
        
        if (this.status >= 176 && this.status <= 191 
            && (this.data >= 40 && this.data <= 45)) {
            this.isSwitch = true;
            this.isOn = this.velocity >= 64
        }
    }

    get pitch() {
        return MbcMidiEvent.midiToPitchClass(this.data)
    }

    get octave() {
        return Math.floor(this.data / 12) - 1
    }

    static midiToPitchClass(midi: number): string {
        const scaleIndexToNote = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
        const note = midi % 12;
        return scaleIndexToNote[note];
    }
}