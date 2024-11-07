const drone = new Scaledrone('7G3CyZnreV7uwCKN');

const room = drone.subscribe('observable_room');

room.on('open', error => {
  if (error) {
    return console.error(error);
  }
  // Connected to room
});

room.on('message', message => {
  alert('Recieved message: ', message)
});

const message = {
    text: prompt('Enter message to send....')
};
  
drone.publish({
    room: 'room_name',
    message: message
});
