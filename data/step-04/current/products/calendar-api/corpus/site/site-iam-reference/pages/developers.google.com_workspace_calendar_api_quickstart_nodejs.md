---
title: "Node.js quickstart \_|\_ Google Calendar \_|\_ Google for Developers"
url: https://developers.google.com/workspace/calendar/api/quickstart/nodejs
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/calendar/api/auth
source_metadata:
  url: https://developers.google.com/workspace/calendar/api/quickstart/nodejs
  title: "Node.js quickstart \_|\_ Google Calendar \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Calendar
Guides
Send feedback
Node.js quickstart
Stay organized with collections
Save and categorize content based on your preferences.
Create a Node.js command-line application that makes requests to the
Google Calendar API.
Quickstarts explain how to set up and run an app that calls a
Google Workspace API. This quickstart uses a
simplified authentication approach that is appropriate for a testing
environment. For a production environment, we recommend learning about
authentication and authorization
before
choosing the access credentials
that are appropriate for your app.
This quickstart uses Google Workspace's recommended API client libraries
to handle some details of the authentication and authorization flow.
Objectives
Set up your environment.
Install the client library.
Set up the sample.
Run the sample.
Prerequisites
To run this quickstart, you need the following prerequisites:
Node.js & npm installed.
A Google Cloud project .
A Google account with Google Calendar enabled.
Set up your environment
To complete this quickstart, set up your environment.
Enable the API
Before using Google APIs, you need to turn them on in a Google Cloud project.
You can turn on one or more APIs in a single Google Cloud project.
In the Google Cloud console, enable the Google Calendar API.
Enable the API
Configure the OAuth consent screen
If you're using a new Google Cloud project to complete this quickstart, configure
the OAuth consent screen. If you've already
completed this step for your Cloud project, skip to the next section.
In the Google API Console, go to Menu menu
> Google Auth platform
> Branding .
Go to Branding
If you have already configured the Google Auth platform, you can configure the following OAuth Consent Screen settings in Branding , Audience , and Data Access . If you see a message that says Google Auth platform not configured yet , click Get Started :
Under App Information , in App name , enter a name for the app.
In User support email , choose a support email address where users can contact you if they have questions about their consent.
Click Next .
Under Audience , select Internal .
Click Next .
Under Contact Information , enter an Email address where you can be notified about any changes to your project.
Click Next .
Under Finish , review the Google API Services User Data Policy and if you agree, select I agree to the Google API Services: User Data Policy .
Click Continue .
Click Create .
For now, you can skip adding scopes.
In the future, when you create an app for use outside of your
Google Workspace organization, you must change the User type to External . Then
add the authorization scopes that your app requires. To learn more, see the full
Configure OAuth consent guide.
Authorize credentials for a desktop application
To authenticate end users and access user data in your app, you need to
create one or more OAuth 2.0 Client IDs. A client ID is used to identify a
single app to Google's OAuth servers. If your app runs on multiple platforms,
you must create a separate client ID for each platform.
Caution: This quickstart must be run locally and with access to a browser. It
doesn't work if run on a remote terminal such as Cloud Shell or over SSH.
In the Google API Console, go to Menu menu
> Google Auth platform
> Clients .
Go to Clients
Click Create Client .
Click Application type > Desktop app .
In the Name field, type a name for the credential. This name is only shown in the Google API Console.
Click Create .
The newly created credential appears under "OAuth 2.0 Client IDs."
Save the downloaded JSON file as credentials.json , and move the
file to your working directory.
Install the client library
Install the libraries using npm:
npm install googleapis@105 @google-cloud/local-auth@2.1.0 --save
Set up the sample
In your working directory, create a file named index.js .
In the file, paste the following code:
calendar/quickstart/index.js
View on GitHub
import path from 'node:path' ;
import process from 'node:process' ;
import { authenticate } from '@google-cloud/local-auth' ;
import { google } from 'googleapis' ;
// The scope for reading calendar events.
const SCOPES = [ 'https://www.googleapis.com/auth/calendar.readonly' ];
// The path to the credentials file.
const CREDENTIALS_PATH = path . join ( process . cwd (), 'credentials.json' );
/**
* Lists the next 10 events on the user's primary calendar.
*/
async function listEvents () {
// Authenticate with Google and get an authorized client.
const auth = await authenticate ({
scopes : SCOPES ,
keyfilePath : CREDENTIALS_PATH ,
});
// Create a new Calendar API client.
const calendar = google . calendar ({ version : 'v3' , auth });
// Get the list of events.
const result = await calendar . events . list ({
calendarId : 'primary' ,
timeMin : new Date (). toISOString (),
maxResults : 10 ,
singleEvents : true ,
orderBy : 'startTime' ,
});
const events = result . data . items ;
if ( ! events || events . length === 0 ) {
console . log ( 'No upcoming events found.' );
return ;
}
console . log ( 'Upcoming 10 events:' );
// Print the start time and summary of each event.
for ( const event of events ) {
const start = event . start ? . dateTime ?? event . start ? . date ;
console . log ( ` ${ start } - ${ event . summary } ` );
}
}
await listEvents ();
Run the sample
In your working directory, run the sample:
node .
The first time you run the sample, it prompts you to authorize access:
If you're not already signed in to your Google Account, sign in when prompted. If
you're signed in to multiple accounts, select one account to use for authorization.
Click Accept .
Your Nodejs application runs and calls the Google Calendar API.
Authorization information is stored in the file system, so the next time you run the sample
code, you aren't prompted for authorization.
Next steps
Try the Google Workspace APIs in the APIs explorer
Create events
Troubleshoot authentication and authorization issues
Calendar API reference documentation
google-api-nodejs-client section of GitHub
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
