const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

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

try {

    // const username = core.getInput('username');
    // const password = core.getInput('password');
    const username = core.getInput('admin');
    const password = core.getInput('admin');
    const buff = new Buffer(`${username}:${password}`, 'utf8');
    const auth64 = buff.toString('base64');

    axios({
        method: 'post',
        url: 'http://localhost/api/v2/job_templates/9/launch/',
        headers:{
            Authorization: `Basic ${auth64}`
        }
    })
        .then(res => {
            console.log(response.data);
            // console.log(response.data.explanation)
        })
        .catch(err => {
            console.log(err)
        })

} catch (error) {
    core.setFailed(error.message);
    
}

// axios({
//     method: 'post',
//     url: 'http://localhost/api/v2/job_templates/9/launch/',
//     headers:{
//         Authorization: "Basic ZGV2ZWxvcGVyOk40dDRuM2c0cjQ=" 
//     }
// })
//     .then(response => {
//         console.log(response.data.url);
//         console.log(response.data.explanation)
//     })
//     .catch(err => {
//         console.log(err)
//     })


