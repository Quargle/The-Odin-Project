const EventEmitter = require('events');
const { emit } = require('process');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', (start, end) => {
    console.log(`started from ${start} to ${end}`)
})

eventEmitter.emit('start', 23, 204);