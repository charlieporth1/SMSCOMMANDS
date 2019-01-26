const app = require("express")();
app.set("view engine", "pug");

var StatsD = require('node-dogstatsd').StatsD;
var dogstatsd = new StatsD();
var dd_options = {
  'response_code':true,
  'tags': ['app:my_app']
    }

var connect_datadog = require('connect-datadog')(dd_options);

// Add your other middlewares
//app.use(...);

// Add the datadog-middleware before your router
app.use(connect_datadog);
app.use(router);


//Increment a counter.
dogstatsd.increment('page.views')

//Body parser setup
const bodyParser = require('body-parser');
var sanitizeHtml = require('sanitize-html');
var html = '<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"><title></title></head><body><form action="getData(this.form)">\n' +
    '  Auth Code: <br> ' +
    '<input type="text" name="aCode"><br>\n' +
    '  <input type="submit" value="Submit">\n' +
    '</form></body></html>';
let authCode;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
console.log('hello welcome to server defcon');
// const moment = require('moment');
let date = new Date();
const moment = require('moment');
function wait(ms) {
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}
app.get('/hello', (req, res) => {
    // var html = '<html lang="en"><head> <meta charset="UTF-8"><title>Enter AuthCode</title><script src="textbox.js" type="text/javascript"></script></head><body><form action="showData(form)p">\n' +
    //     '  Auth Code: <input type="text" name="aCode"><br>\n'
    //     '  <input type="submit" value="Submit">\n' +
    //     '</form>/body></html>';

    // console.log(sanitizeHtml(html));
    res.status(200).send(sanitizeHtml(html)).end();
});
app.get('/IT-WAS-ME/WAS-ME-LOGIN-YES', (req, res) => {
    var exec = require('child-process-promise').exec;
    res.status(200).send('Ok DEFCON 5, all is clear').end();
});
app.get('/IT-WAS-ME/WAS-ME-LOGIN-NO', (req, res) => {
     let now = moment.now()
    authCode = generateUUID().substr(0, 14);
    var exec = require('child-process-promise').exec;
    exec(' ssh grandmaroot \'if [ ! -z "$( last -w | awk "\'"{print $1}"\'"  | sed -n "\'"1p"\'")" ]; then source /usr/bin/cred.sh && sendemail -f $USER@otih-oith.us.to  -t $phonee  -m "Auth Code:  '+ authCode + '; Date: '+ now + '; Host: ' + '$HOSTNAME;  USER: $( last -w | awk "\'"{print $1}"\'"  | sed -n "\'"1p"\'") " -s smtp.gmail.com:587 -o tls=yes -xu $usr -xp  $passwd &&  export userschanged=$( last -w | awk "\'"{print $1}"\'"  | sed -n "\'"1p"\'"); echo $userschanged '+ authCode +' |  chpasswd; fi\' ')
        .then(function (result) {
            var stdout = result.stdout;
            var stderr = result.stderr;
            console.log('stdout: ', stdout);
            console.log('stderr: ', stderr);
            // | passwd $userschanged --stdin
            //w | awk '{print $1}'  | grep -v 'USER'  |  tail -n +2
            // exec(" export userschanged=$(w | awk '{print $1}'  | grep -v 'USER'  | sed -n '2p'); echo $userschanged"+ authCode +" |  chpasswd")
            //     .then(function (result) {
            //         var stdout = result.stdout;
            //         var stderr = result.stderr;
            //         console.log('stdout: ', stdout);
            //         console.log('stderr: ', stderr);
            //     })
            //     .catch(function (err) {
            //         console.error('ERROR: ', err);
            //         wait(1000);
            //         res.status(200).send('Correct code but error: '+ err).end()
            //         wait(1000);
            //         res.status(200).send('Correct code but error: AT: '+ date).end();
            //     });

        })
        .catch(function (err) {
            console.error('ERROR: ', err);
            wait(1000);
            res.status(200).send('Correct code but error: '+ err).end()
            wait(1000);
            res.status(200).send('Correct code but error: AT: '+ date).end();
        });
    exec(' ssh ubuntuserverroot \'if [ ! -z "$( last -w | awk "\'"{print $1}"\'"  | sed -n "\'"1p"\'")" ]; then source /usr/bin/cred.sh && sendemail -f $USER@otih-oith.us.to  -t $phonee  -m "Auth Code:  '+ authCode + '; Date: '+ now + '; Host: ' + '$HOSTNAME; USER: $( last -w | awk "\'"{print $1}"\'"  | sed -n "\'"1p"\'") " -s smtp.gmail.com:587 -o tls=yes -xu $usr -xp  $passwd &&  export userschanged=$( last -w | awk "\'"{print $1}"\'"  | sed -n "\'"1p"\'"); echo $userschanged' + authCode +' |  chpasswd; fi\' ')
        .then(function (result) {
            var stdout = result.stdout;
            var stderr = result.stderr;
            console.log('stdout: ', stdout);
            console.log('stderr: ', stderr);
            })
        .catch(function (err) {
            console.error('ERROR: ', err);
            wait(1000);
            res.status(200).send('Correct code but error: '+ err).end()
            wait(1000);
            res.status(200).send('Correct code but error: AT: '+ date).end();
        });
    exec('. /usr/bin/cred.sh && sendemail -f $USER@otih-oith.us.to  -t $phonee  -m "Auth Code:  '+ authCode + 'Date: '+ now + ' USER: $( last -w | awk \'{print $1}\'  | sed -n \'1p\') " -s smtp.gmail.com:587 -o tls=yes -xu $usr -xp  $passwd ')
        .then(function (result) {
            var stdout = result.stdout;
            var stderr = result.stderr;
            console.log('stdout: ', stdout);
            console.log('stderr: ', stderr);
            wait(5000);
            DEFCON1()
            // | passwd $userschanged --stdin
            //w | awk '{print $1}'  | grep -v 'USER'  |  tail -n +2
        })

        .catch(function (err) {
            console.error('ERROR: ', err);
            wait(1000);
            res.status(200).send('Correct code but error: '+ err).end()
            wait(1000);
            res.status(200).send('Correct code but error: AT: '+ date).end();
        });


    // console.log('authCode', authCode);
    // var createtextbox =  document.createElement("INPUT");
    // var submit = document.createElement("BUTTON");
    // createtextbox.setAttribute("type", "text");
    // submit.setAttribute("type", "button");
    res.status(200).send('DEFCON 1').end();

});
function getData(form) {

    const dataRcv = form.aCode.value;
    DEFCON1(dataRcv)
}


function DEFCON1() {

    // if (authCode === AuthCodes) {
        wait(10000);
        var exec = require('child-process-promise').exec;

        exec('sudo defcon1')
            .then(function (result) {
                var stdout = result.stdout;
                var stderr = result.stderr;
                console.log('stdout: ', stdout);
                console.log('stderr: ', stderr);
                res.status(200).send('OK, DEFCON 1 rebooting all nodes!: AT: ' + date).end();
                wait(5000);
                res.status(200).send('OK, DEFCON 1 rebooting all nodes!: ' + stderr).end();
                wait(5000);
                res.status(200).send('OK, DEFCON 1 rebooting all nodes!: ' + stdout).end()
                wait(5000);
            })
            .catch(function (err) {
                console.error('ERROR: ', err);
                wait(1000);
                res.status(200).send('Correct code but error: ' + err).end()
                wait(1000);
                res.status(200).send('Correct code but error: AT: ' + date).end();
            });
    // } else {
    //     res.status(500).send('Error wrong auth code').end()
    //     wait(1000);
    // }
}
function generateUUID() { // Public Domain/MIT
    let d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

app.listen(process.env.PORT || 3000);


