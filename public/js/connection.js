var particle = new Particle();
var token;
var socket = io()

socket.on('hello', function(data) {
  console.log("got connection")
  socket.emit('world', {num: 5})
})

socket.on('update', function(data) {
  console.log(data)
})

socket.on('yuh', function(data) {
  console.log('calling yuh')
  particle.login({username: "andrew@andrewhennessy.net", password: "willmiller"}).then(
      function(data){
        console.log('API call completed on promise resolve: ', data.body.access_token);
        token = data.body.access_token;
      var fnPr = particle.callFunction({ deviceId: "3a0035000b47373130373633", name: 'signal', argument: '', auth: token });

      fnPr.then(
        function(data) {
          console.log('Function called succesfully:', data);
        }, function(err) {
          console.log('An error occurred:', err);
      });
     },
      function(err) {
        console.log('API call completed on promise fail: ', err);
     }
  );
});

socket.on('glock', function(data) {
  console.log('calling glock')
  particle.login({username: "andrew@andrewhennessy.net", password: "willmiller"}).then(
      function(data){
        console.log('API call completed on promise resolve: ', data.body.access_token);
        token = data.body.access_token;
      var fnPr = particle.callFunction({ deviceId: "3a0035000b47373130373633", name: 'open', argument: '', auth: token });

      fnPr.then(
        function(data) {
          console.log('Function called succesfully:', data);
        }, function(err) {
          console.log('An error occurred:', err);
      });
     },
      function(err) {
        console.log('API call completed on promise fail: ', err);
     }
  );
});



socket.on('bleed it', function(data) {
  console.log('calling bleed it')
  particle.login({username: "andrew@andrewhennessy.net", password: "willmiller"}).then(
      function(data){
        console.log('API call completed on promise resolve: ', data.body.access_token);
        token = data.body.access_token;
      var fnPr = particle.callFunction({ deviceId: "3a0035000b47373130373633", name: 'close', argument: '', auth: token });

      fnPr.then(
        function(data) {
          console.log('Function called succesfully:', data);
        }, function(err) {
          console.log('An error occurred:', err);
      });
     },
      function(err) {
        console.log('API call completed on promise fail: ', err);
     }
  );
});


const button = document.getElementById('myButton');
const requestArea = document.getElementById('requestArea');
const paymentInstruction = document.getElementById('paymentInstruction');
button.addEventListener('click', function(e) {
  console.log('button was clicked');

  fetch('/api/unlock', {method: 'GET'})
    .then(function(response) {
      if(response.ok) {
        requestArea.innerHTML = "Opening"
        button.innerHTML = "close"
        paymentInstruction.innerHTML = "Items taken until closed will be charged to your account"
        button.id = "close"
        console.log('click was recorded');
        return;
      }
      requestArea.innerHTML = "Open Failed"
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});

close.addEventListener('click', function(e) {
  console.log('button was clicked');

  fetch('/api/lock', {method: 'GET'})
    .then(function(response) {
      if(response.ok) {
        requestArea.innerHTML = "Closing"
        button.innerHTML = "open"
        paymentInstruction.innerHTML = "Thank you for doing business with the mobile vending machine"
        //button.id = "myButton"
        console.log('click was recorded');
        return;
      }
      requestArea.innerHTML = "Open Failed"
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});
