---
title: "Connect to Google Cloud services \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/guides/services/cloud-run
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://developers.google.com/apps-script/guides/libraries
source_metadata:
  url: https://developers.google.com/apps-script/guides/services/cloud-run
  title: "Connect to Google Cloud services \_|\_ Apps Script \_|\_ Google for Developers"
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
Connect to Google Cloud services
Stay organized with collections
Save and categorize content based on your preferences.
You can use the ScriptApp.getIdentityToken()
method to get an
OpenID Connect
identity token (a JSON Web Token
or JWT) for the effective user. You can use this token to authenticate
with Google Cloud services, such as Cloud Run, that are configured to
accept it.
Enable the openid scope
The openid scope is required to generate an OpenID Connect ID token. You must
also list any other scopes your script uses, such as
https://www.googleapis.com/auth/script.external_request for the
UrlFetch service. The
https://www.googleapis.com/auth/userinfo.email scope is included in this
example to add the user's email address to the identity token.
In your script project's manifest file ( appsscript.json ),
add the openid scope and any other required scopes to the oauthScopes array:
{
"timeZone" : "America/New_York" ,
"dependencies" : {
},
"exceptionLogging" : "STACKDRIVER" ,
"runtimeVersion" : "V8" ,
"oauthScopes" : [
"openid" ,
"https://www.googleapis.com/auth/script.external_request" ,
"https://www.googleapis.com/auth/userinfo.email"
]
}
Configure the Google Cloud service
You must configure the Google Cloud service to accept the identity token
issued to your script. This typically involves adding the script's client ID as
an allowed audience.
To find your script's client ID, you can decode an identity token:
function logClientId () {
const idToken = ScriptApp . getIdentityToken ();
const body = idToken . split ( '.' )[ 1 ];
const decoded = Utilities . newBlob ( Utilities . base64Decode ( body )). getDataAsString ();
const payload = JSON . parse ( decoded );
Logger . log ( 'Client ID: ' + payload . aud );
}
For Cloud Run, you can
configure custom audiences
to allow this client ID.
Make an authenticated request
Once configured, you can include the identity token in the Authorization
header of your requests:
function callCloudRunService () {
const idToken = ScriptApp . getIdentityToken ();
const url = 'https://your-service-url.a.run.app' ;
const response = UrlFetchApp . fetch ( url , {
headers : {
'Authorization' : 'Bearer ' + idToken
}
});
Logger . log ( response . getContentText ());
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
