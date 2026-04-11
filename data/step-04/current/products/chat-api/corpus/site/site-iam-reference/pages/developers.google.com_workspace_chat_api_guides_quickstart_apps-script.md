---
title: "Google Apps Script quickstart \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/chat/authenticate-authorize
source_metadata:
  url: https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script
  title: "Google Apps Script quickstart \_|\_ Google Chat \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Chat
Guides
Send feedback
Google Apps Script quickstart
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This quickstart demonstrates how to set up and run a Google Apps Script that interacts with the Google Chat API to list spaces.
Before running the script, you need to configure your Google Cloud project, enable the Chat API, and set up OAuth consent.
The script utilizes the Google Chat API client libraries for authentication and authorization and provides a simplified approach suitable for testing environments.
You need a Google Workspace account and a Google Cloud project to complete the steps outlined in the guide.
To run the script, you will need to copy your Cloud project number, link it to the Apps Script project, enable the Google Chat API, and authorize access.
Create a
Google Apps Script
that makes requests to the Google Chat API.
Quickstarts explain how to set up and run an app that calls a
Google Workspace API. This quickstart uses a
simplified authentication approach that is appropriate for a testing
environment. For a production environment, we recommend learning about
authentication and authorization
before
choosing the access credentials
that are appropriate for your app.
In Apps Script, Google Workspace
quickstarts use
Advanced Google services to call
Google Workspace APIs and handle some details of the authentication
and authorization flow.
Objectives
Configure the environment.
Create and configure the script.
Run the script.
Prerequisites
A Google Cloud project .
A Business or Enterprise Google Workspace account with access to Google Chat .
Configure your Cloud project
If you're using a new Google Cloud project to complete this quickstart, you need to
configure it and add yourself as a test user. If you've already
completed these steps for your Cloud project, skip to the next section.
Open your Cloud project in the Google Cloud console
If it's not open already, open the Cloud project that you intend to use
for this sample:
In the Google Cloud console, go to the Select a project page.
Select a Cloud project
Select the Google Cloud project you want to use. Or, click Create project and follow the on-screen instructions. If you create a Google Cloud project, you might need to turn on billing for the project .
Turn on the Chat API
Before using Google APIs, you need to turn them on in a Google Cloud project.
You can turn on one or more APIs in a single Google Cloud project.
In the Google Cloud console, enable the Google Chat API.
Enable the API
Configure the OAuth consent screen
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
Configure the Google Chat app
To call the Google Chat API, you must configure a
Google Chat app. For any write requests, Google Chat
attributes the Google Chat app in the UI using
the following information.
In the Google API Console, go to the Chat API Configuration page:
Go to Chat API Configuration page
Under Application info , enter the following information:
In the App name field, enter Chat API quickstart app .
In the Avatar URL field, enter
https://developers.google.com/chat/images/quickstart-app-avatar.png .
In the Description field, enter Quickstart for calling the Chat API .
Under Interactive features , click the Enable interactive features
toggle to the off position to disable interactive features for the
Chat app.
Click Save .
Create the script
Create a new script in the Apps Script editor by going to script.google.com/create .
Replace the contents of the script editor with the following code:
chat/quickstart/Code.gs
View on GitHub
/**
* This quickstart sample shows how to list spaces with user credential
*
* It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.spaces.readonly'
* referenced in the manifest file (appsscript.json).
*/
function listSpaces () {
// Initialize request argument(s)
// Filter spaces by space type (SPACE or GROUP_CHAT or DIRECT_MESSAGE)
const filter = 'space_type = "SPACE"' ;
// Iterate through the response pages using page tokens
let responsePage ;
let pageToken = null ;
do {
// Request response pages
responsePage = Chat . Spaces . list ({
filter : filter ,
pageToken : pageToken ,
});
// Handle response pages
if ( responsePage . spaces ) {
for ( const space of responsePage . spaces ) {
console . log ( space );
}
}
// Update the page token to the next one
pageToken = responsePage . nextPageToken ;
} while ( pageToken );
}
Click Save .
Click Untitled project , type
Quickstart , and click Rename .
Configure the script
Copy the Cloud project number
In the Google API Console, go to Menu menu
> IAM & Admin
> Settings .
Go to IAM & Admin Settings
In the Project number field, copy the value.
Link your Google Cloud project
Open the Apps Script project.
Click Project Settings settings .
Under Google Cloud Platform (GCP) Project , click Change project .
In GCP project number , paste the Google Cloud project number.
Click Set project .
Enable the Google Chat API
Open the Apps Script project.
Click Project Settings settings .
Under General settings , enable Show "appsscript.json" manifest file
in editor .
Click Editor code , select the
file appscript.json , and replace the contents with the following code:
chat/quickstart/appsscript.json
View on GitHub
{
"timeZone" : "America/New_York" ,
"exceptionLogging" : "STACKDRIVER" ,
"runtimeVersion" : "V8" ,
"oauthScopes" : [ "https://www.googleapis.com/auth/chat.spaces.readonly" ],
"chat" : {},
"dependencies" : {
"enabledAdvancedServices" : [
{
"userSymbol" : "Chat" ,
"version" : "v1" ,
"serviceId" : "chat"
}
]
}
}
Run the sample
In the Apps Script editor, click Run .
The first time you run the sample, it prompts you to authorize access:
Click Review permissions .
Choose an account.
Click Allow .
The script's execution log appears at the bottom of the window.
done
It worked!
Great!
Check out the further reading section below to learn more.
warning
There was a problem
Bummer ,
let us know what went wrong .
Check out our
troubleshooting section below for some common errors and solutions.
If you have found a bug in the code,
report the issue on GitHub or submit a pull request.
Next steps
Google Apps Script Advanced Services documentation
Try the Google Workspace APIs in the APIs explorer
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["This document outlines how to create and run a Google Apps Script to interact with the Google Chat API. Key actions include: configuring a Google Cloud project (enabling the Chat API, setting up OAuth consent, and configuring a Chat app), creating a new script, linking the script to the Cloud project, configuring the script by enabling the Chat API in its manifest file, and running the script. This allows the listing of spaces and other API interaction.\n"]]
