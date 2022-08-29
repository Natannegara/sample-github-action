const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

// const username = core.getInput('username');
// const password = core.getInput('password');
const username = 'admin';
const password = 'admin';

const url_launch = 'http://localhost/api/v2/job_templates/9/launch/'
const headers = {
  'Authorization': `Basic ZGV2ZWxvcGVyOk40dDRuM2c0cjQ=`,
  'Content-Type': 'application/json'
}

axios({
    method: 'post',
    url: url_launch,
    headers: headers
}).then(async res => {
        let id_job = res.data.id;
        let resultStatus = ''
        while (resultStatus != 'successful') {
          // keep calling AWX to get status update
          await axios({
            method: 'get',
            url: `http://localhost/api/v2/jobs/${id_job}`,
            headers: headers
          }).then(resJob => {
            console.log('still looping, status:', resultStatus)
            resultStatus = resJob.data.status
            return resultStatus
          }).catch(errJob=>{
            console.log(errJob)
          })
        }
        console.log('Job Template Status: ', resultStatus)

    }).catch(err => {
        console.log(err)
    })

// try {
//     // `who-to-greet` input defined in action metadata file
//     const nameToGreet = core.getInput('who-to-greet');
//     console.log(`Hello ${nameToGreet}!`);

//     // create output
//     const time = (new Date()).toTimeString();
//     core.setOutput("time", time);

//     // Get the JSON webhook payload for the event that triggered the workflow
//     const payload = JSON.stringify(github.context.payload, undefined, 2)
//     console.log(`The event payload: ${payload}`);
// } 
// catch (error) {
//     core.setFailed(error.message);
// }


