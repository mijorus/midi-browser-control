export type MbcMidiMessageAction = 'noteon' | 'noteoff' | ''
export type MbcMidiDescription =  { [key: string]: {
    function: string,
    action: MbcMidiMessageAction,
    channel: number | null
} }

const data: MbcMidiDescription = {
    "128": {
        "function": "Chan 1 Note off",
        "action": "noteoff",
        "channel": 1
    },
    "129": {
        "function": "Chan 2 Note off",
        "action": "noteoff",
        "channel": 2
    },
    "130": {
        "function": "Chan 3 Note off",
        "action": "noteoff",
        "channel": 3
    },
    "131": {
        "function": "Chan 4 Note off",
        "action": "noteoff",
        "channel": 4
    },
    "132": {
        "function": "Chan 5 Note off",
        "action": "noteoff",
        "channel": 5
    },
    "133": {
        "function": "Chan 6 Note off",
        "action": "noteoff",
        "channel": 6
    },
    "134": {
        "function": "Chan 7 Note off",
        "action": "noteoff",
        "channel": 7
    },
    "135": {
        "function": "Chan 8 Note off",
        "action": "noteoff",
        "channel": 8
    },
    "136": {
        "function": "Chan 9 Note off",
        "action": "noteoff",
        "channel": 9
    },
    "137": {
        "function": "Chan 10 Note off",
        "action": "noteoff",
        "channel": 10
    },
    "138": {
        "function": "Chan 11 Note off",
        "action": "noteoff",
        "channel": 11
    },
    "139": {
        "function": "Chan 12 Note off",
        "action": "noteoff",
        "channel": 12
    },
    "140": {
        "function": "Chan 13 Note off",
        "action": "noteoff",
        "channel": 13
    },
    "141": {
        "function": "Chan 14 Note off",
        "action": "noteoff",
        "channel": 14
    },
    "142": {
        "function": "Chan 15 Note off",
        "action": "noteoff",
        "channel": 15
    },
    "143": {
        "function": "Chan 16 Note off",
        "action": "noteoff",
        "channel": 16
    },
    "144": {
        "function": "Chan 1 Note on",
        "action": "noteon",
        "channel": 1
    },
    "145": {
        "function": "Chan 2 Note on",
        "action": "noteon",
        "channel": 2
    },
    "146": {
        "function": "Chan 3 Note on",
        "action": "noteon",
        "channel": 3
    },
    "147": {
        "function": "Chan 4 Note on",
        "action": "noteon",
        "channel": 4
    },
    "148": {
        "function": "Chan 5 Note on",
        "action": "noteon",
        "channel": 5
    },
    "149": {
        "function": "Chan 6 Note on",
        "action": "noteon",
        "channel": 6
    },
    "150": {
        "function": "Chan 7 Note on",
        "action": "noteon",
        "channel": 7
    },
    "151": {
        "function": "Chan 8 Note on",
        "action": "noteon",
        "channel": 8
    },
    "152": {
        "function": "Chan 9 Note on",
        "action": "noteon",
        "channel": 9
    },
    "153": {
        "function": "Chan 10 Note on",
        "action": "noteon",
        "channel": 10
    },
    "154": {
        "function": "Chan 11 Note on",
        "action": "noteon",
        "channel": 11
    },
    "155": {
        "function": "Chan 12 Note on",
        "action": "noteon",
        "channel": 12
    },
    "156": {
        "function": "Chan 13 Note on",
        "action": "noteon",
        "channel": 13
    },
    "157": {
        "function": "Chan 14 Note on",
        "action": "noteon",
        "channel": 14
    },
    "158": {
        "function": "Chan 15 Note on",
        "action": "noteon",
        "channel": 15
    },
    "159": {
        "function": "Chan 16 Note on",
        "action": "noteon",
        "channel": 16
    },
    "160": {
        "function": "Chan 1 Polyphonic Aftertouch",
        "action": "",
        "channel": 1
    },
    "161": {
        "function": "Chan 2 Polyphonic Aftertouch",
        "action": "",
        "channel": 2
    },
    "162": {
        "function": "Chan 3 Polyphonic Aftertouch",
        "action": "",
        "channel": 3
    },
    "163": {
        "function": "Chan 4 Polyphonic Aftertouch",
        "action": "",
        "channel": 4
    },
    "164": {
        "function": "Chan 5 Polyphonic Aftertouch",
        "action": "",
        "channel": 5
    },
    "165": {
        "function": "Chan 6 Polyphonic Aftertouch",
        "action": "",
        "channel": 6
    },
    "166": {
        "function": "Chan 7 Polyphonic Aftertouch",
        "action": "",
        "channel": 7
    },
    "167": {
        "function": "Chan 8 Polyphonic Aftertouch",
        "action": "",
        "channel": 8
    },
    "168": {
        "function": "Chan 9 Polyphonic Aftertouch",
        "action": "",
        "channel": 9
    },
    "169": {
        "function": "Chan 10 Polyphonic Aftertouch",
        "action": "",
        "channel": 10
    },
    "170": {
        "function": "Chan 11 Polyphonic Aftertouch",
        "action": "",
        "channel": 11
    },
    "171": {
        "function": "Chan 12 Polyphonic Aftertouch",
        "action": "",
        "channel": 12
    },
    "172": {
        "function": "Chan 13 Polyphonic Aftertouch",
        "action": "",
        "channel": 13
    },
    "173": {
        "function": "Chan 14 Polyphonic Aftertouch",
        "action": "",
        "channel": 14
    },
    "174": {
        "function": "Chan 15 Polyphonic Aftertouch",
        "action": "",
        "channel": 15
    },
    "175": {
        "function": "Chan 16 Polyphonic Aftertouch",
        "action": "",
        "channel": 16
    },
    "176": {
        "function": "Chan 1 Control/Mode Change",
        "action": "",
        "channel": 1
    },
    "177": {
        "function": "Chan 2 Control/Mode Change",
        "action": "",
        "channel": 2
    },
    "178": {
        "function": "Chan 3 Control/Mode Change",
        "action": "",
        "channel": 3
    },
    "179": {
        "function": "Chan 4 Control/Mode Change",
        "action": "",
        "channel": 4
    },
    "180": {
        "function": "Chan 5 Control/Mode Change",
        "action": "",
        "channel": 5
    },
    "181": {
        "function": "Chan 6 Control/Mode Change",
        "action": "",
        "channel": 6
    },
    "182": {
        "function": "Chan 7 Control/Mode Change",
        "action": "",
        "channel": 7
    },
    "183": {
        "function": "Chan 8 Control/Mode Change",
        "action": "",
        "channel": 8
    },
    "184": {
        "function": "Chan 9 Control/Mode Change",
        "action": "",
        "channel": 9
    },
    "185": {
        "function": "Chan 10 Control/Mode Change",
        "action": "",
        "channel": 10
    },
    "186": {
        "function": "Chan 11 Control/Mode Change",
        "action": "",
        "channel": 11
    },
    "187": {
        "function": "Chan 12 Control/Mode Change",
        "action": "",
        "channel": 12
    },
    "188": {
        "function": "Chan 13 Control/Mode Change",
        "action": "",
        "channel": 13
    },
    "189": {
        "function": "Chan 14 Control/Mode Change",
        "action": "",
        "channel": 14
    },
    "190": {
        "function": "Chan 15 Control/Mode Change",
        "action": "",
        "channel": 15
    },
    "191": {
        "function": "Chan 16 Control/Mode Change",
        "action": "",
        "channel": 16
    },
    "192": {
        "function": "Chan 1 Program Change",
        "action": "",
        "channel": 1
    },
    "193": {
        "function": "Chan 2 Program Change",
        "action": "",
        "channel": 2
    },
    "194": {
        "function": "Chan 3 Program Change",
        "action": "",
        "channel": 3
    },
    "195": {
        "function": "Chan 4 Program Change",
        "action": "",
        "channel": 4
    },
    "196": {
        "function": "Chan 5 Program Change",
        "action": "",
        "channel": 5
    },
    "197": {
        "function": "Chan 6 Program Change",
        "action": "",
        "channel": 6
    },
    "198": {
        "function": "Chan 7 Program Change",
        "action": "",
        "channel": 7
    },
    "199": {
        "function": "Chan 8 Program Change",
        "action": "",
        "channel": 8
    },
    "200": {
        "function": "Chan 9 Program Change",
        "action": "",
        "channel": 9
    },
    "201": {
        "function": "Chan 10 Program Change",
        "action": "",
        "channel": 10
    },
    "202": {
        "function": "Chan 11 Program Change",
        "action": "",
        "channel": 11
    },
    "203": {
        "function": "Chan 12 Program Change",
        "action": "",
        "channel": 12
    },
    "204": {
        "function": "Chan 13 Program Change",
        "action": "",
        "channel": 13
    },
    "205": {
        "function": "Chan 14 Program Change",
        "action": "",
        "channel": 14
    },
    "206": {
        "function": "Chan 15 Program Change",
        "action": "",
        "channel": 15
    },
    "207": {
        "function": "Chan 16 Program Change",
        "action": "",
        "channel": 16
    },
    "208": {
        "function": "Chan 1 Channel Aftertouch",
        "action": "",
        "channel": 1
    },
    "209": {
        "function": "Chan 2 Channel Aftertouch",
        "action": "",
        "channel": 2
    },
    "210": {
        "function": "Chan 3 Channel Aftertouch",
        "action": "",
        "channel": 3
    },
    "211": {
        "function": "Chan 4 Channel Aftertouch",
        "action": "",
        "channel": 4
    },
    "212": {
        "function": "Chan 5 Channel Aftertouch",
        "action": "",
        "channel": 5
    },
    "213": {
        "function": "Chan 6 Channel Aftertouch",
        "action": "",
        "channel": 6
    },
    "214": {
        "function": "Chan 7 Channel Aftertouch",
        "action": "",
        "channel": 7
    },
    "215": {
        "function": "Chan 8 Channel Aftertouch",
        "action": "",
        "channel": 8
    },
    "216": {
        "function": "Chan 9 Channel Aftertouch",
        "action": "",
        "channel": 9
    },
    "217": {
        "function": "Chan 10 Channel Aftertouch",
        "action": "",
        "channel": 10
    },
    "218": {
        "function": "Chan 11 Channel Aftertouch",
        "action": "",
        "channel": 11
    },
    "219": {
        "function": "Chan 12 Channel Aftertouch",
        "action": "",
        "channel": 12
    },
    "220": {
        "function": "Chan 13 Channel Aftertouch",
        "action": "",
        "channel": 13
    },
    "221": {
        "function": "Chan 14 Channel Aftertouch",
        "action": "",
        "channel": 14
    },
    "222": {
        "function": "Chan 15 Channel Aftertouch",
        "action": "",
        "channel": 15
    },
    "223": {
        "function": "Chan 16 Channel Aftertouch",
        "action": "",
        "channel": 16
    },
    "224": {
        "function": "Chan 1 Pitch Bend Change",
        "action": "",
        "channel": 1
    },
    "225": {
        "function": "Chan 2 Pitch Bend Change",
        "action": "",
        "channel": 2
    },
    "226": {
        "function": "Chan 3 Pitch Bend Change",
        "action": "",
        "channel": 3
    },
    "227": {
        "function": "Chan 4 Pitch Bend Change",
        "action": "",
        "channel": 4
    },
    "228": {
        "function": "Chan 5 Pitch Bend Change",
        "action": "",
        "channel": 5
    },
    "229": {
        "function": "Chan 6 Pitch Bend Change",
        "action": "",
        "channel": 6
    },
    "230": {
        "function": "Chan 7 Pitch Bend Change",
        "action": "",
        "channel": 7
    },
    "231": {
        "function": "Chan 8 Pitch Bend Change",
        "action": "",
        "channel": 8
    },
    "232": {
        "function": "Chan 9 Pitch Bend Change",
        "action": "",
        "channel": 9
    },
    "233": {
        "function": "Chan 10 Pitch Bend Change",
        "action": "",
        "channel": 10
    },
    "234": {
        "function": "Chan 11 Pitch Bend Change",
        "action": "",
        "channel": 11
    },
    "235": {
        "function": "Chan 12 Pitch Bend Change",
        "action": "",
        "channel": 12
    },
    "236": {
        "function": "Chan 13 Pitch Bend Change",
        "action": "",
        "channel": 13
    },
    "237": {
        "function": "Chan 14 Pitch Bend Change",
        "action": "",
        "channel": 14
    },
    "238": {
        "function": "Chan 15 Pitch Bend Change",
        "action": "",
        "channel": 15
    },
    "239": {
        "function": "Chan 16 Pitch Bend Change",
        "action": "",
        "channel": 16
    },
    "240": {
        "function": "System Exclusive",
        "action": "",
        "channel": null
    },
    "241": {
        "function": "MIDI Time Code Qtr. Frame",
        "action": "",
        "channel": null
    },
    "242": {
        "function": "Song Position Pointer",
        "action": "",
        "channel": null
    },
    "243": {
        "function": "Song Select (Song #)",
        "action": "",
        "channel": null
    },
    "244": {
        "function": "Undefined (Reserved)",
        "action": "",
        "channel": null
    },
    "245": {
        "function": "Undefined (Reserved)",
        "action": "",
        "channel": null
    },
    "246": {
        "function": "Tune request",
        "action": "",
        "channel": null
    },
    "247": {
        "function": "End of SysEx (EOX)",
        "action": "",
        "channel": null
    },
    "248": {
        "function": "Timing clock",
        "action": "",
        "channel": null
    },
    "249": {
        "function": "Undefined (Reserved)",
        "action": "",
        "channel": null
    },
    "250": {
        "function": "Start",
        "action": "",
        "channel": null
    },
    "251": {
        "function": "Continue",
        "action": "",
        "channel": null
    },
    "252": {
        "function": "Stop",
        "action": "",
        "channel": null
    },
    "253": {
        "function": "Undefined (Reserved)",
        "action": "",
        "channel": null
    },
    "254": {
        "function": "Active Sensing",
        "action": "",
        "channel": null
    },
    "255": {
        "function": "System Reset",
        "action": "",
        "channel": null
    }
}

export default data;