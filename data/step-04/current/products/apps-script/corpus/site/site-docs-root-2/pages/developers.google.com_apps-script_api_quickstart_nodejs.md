---
title: "Node.js quickstart \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/quickstart/nodejs
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/apps-script/overview
source_metadata:
  url: https://developers.google.com/apps-script/api/quickstart/nodejs
  title: "Node.js quickstart \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Guides
Send feedback
Node.js quickstart
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide explains how to create a Node.js command-line application that interacts with the Google Apps Script API using a simplified authentication method suitable for testing.
The quickstart requires Node.js & npm, a Google Cloud project, and a Google account with Google Drive enabled.
Setting up the environment involves enabling the Google Apps Script API in the Google Cloud console and configuring the OAuth consent screen and credentials for a desktop application.
The steps include installing necessary client libraries using npm, setting up a sample index.js file with provided code, and running the sample to create and update a Google Apps Script project.
Running the sample for the first time will prompt for authorization, which is then stored locally for subsequent runs.
Create a Node.js command-line application that makes requests to the
Google Apps Script API.
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
A Google account with Google Drive enabled.
Set up your environment
To complete this quickstart, set up your environment.
Enable the API
Before using Google APIs, you need to turn them on in a Google Cloud project.
You can turn on one or more APIs in a single Google Cloud project.
In the Google Cloud console, enable the Google Apps Script API.
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
apps-script/quickstart/index.js
View on GitHub
import path from 'node:path' ;
import process from 'node:process' ;
import { authenticate } from '@google-cloud/local-auth' ;
import { google } from 'googleapis' ;
const SCOPES = [ 'https://www.googleapis.com/auth/script.projects' ];
const CREDENTIALS_PATH = path . join ( process . cwd (), 'credentials.json' );
/**
* Creates a new script project, upload a file, and log the script's URL.
*/
async function callAppsScript () {
const auth = await authenticate ({
scopes : SCOPES ,
keyfilePath : CREDENTIALS_PATH ,
});
const script = google . script ({ version : 'v1' , auth });
const project = await script . projects . create ({
requestBody : {
title : 'My Script' ,
},
});
if ( ! project . data . scriptId ) {
throw new Error ( 'Failed to create project' );
}
await script . projects . updateContent ({
scriptId : project . data . scriptId ,
auth ,
requestBody : {
files : [
{
name : 'hello' ,
type : 'SERVER_JS' ,
source : 'function helloWorld() {\n console.log("Hello, world!");\n}' ,
},
{
name : 'appsscript' ,
type : 'JSON' ,
source :
'{"timeZone":"America/New_York","exceptionLogging":' + '"CLOUD"}' ,
},
],
},
});
console . log ( `https://script.google.com/d/ ${ project . data . scriptId } /edit` );
}
await callAppsScript ();
Run the sample
In your working directory, run the sample:
node .
The first time you run the sample, it prompts you to authorize access:
If you're not already signed in to your Google Account, sign in when prompted. If
you're signed in to multiple accounts, select one account to use for authorization.
Click Accept .
Your Nodejs application runs and calls the Google Apps Script API.
Authorization information is stored in the file system, so the next time you run the sample
code, you aren't prompted for authorization.
Next steps
Try the Google Workspace APIs in the APIs explorer
Apps Script API reference documentation
google-api-nodejs-client section of GitHub
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
