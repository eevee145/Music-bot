module.exports = {
    app: {
        px: '/',
        token: 'ODkwOTMxMzg3MjI4NjM1MTc2.YU2-gw.mBYfqgaxG2-Mo07beJ8J-WzMVMo',
        playing: 'by Zerio ❤'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'VOID',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {  
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
