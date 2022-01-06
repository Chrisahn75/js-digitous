// 3

const prompt = require("prompt");

prompt.start ();

const id = {
    properties: {
      username: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      password: {
        pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        hidden: true,
        required: true

      },
      email: {
        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        required: true
      }
    }
  };


function checkProfil(){
    prompt.get(id,function (_, result) {
        console.log('Command-line input received:');
        console.log('  username: ' + result.username);
        console.log('  password: ' + result.password);
        console.log('  email: ' + result.email);
    })
} 
    
checkProfil();