// 3

const prompt = require("prompt");

prompt.start ();

prompt.get([{
    name: 'username',
    required: true
  }, {
    name: 'password',
    hidden: true,
    conform: function (value) {
      return true;
    },
    name: 'email',
    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    hidden: true,
    conform: function (value) {
        return true;
    },
  }]
);

function checkProfil(){
    prompt.get(['username','password', 'email'], function (err, result) {
    
        console.log('Command-line input received:');
        console.log('  username: ' + result.username);
        console.log('  password: ' + result.password);
        console.log('  email: ' + result.email);
    })
} 
    
checkProfil();