---
title: "Apps Script Quickstart \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/markup/apps-script-tutorial
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/markup/getting-started
source_metadata:
  url: https://developers.google.com/workspace/gmail/markup/apps-script-tutorial
  title: "Apps Script Quickstart \_|\_ Gmail \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Gmail
Guides
Send feedback
Apps Script Quickstart
Stay organized with collections
Save and categorize content based on your preferences.
This article shows you how to use Apps Script to send yourself an email with schemas in order to test email markup.
Creating the project
Visit script.google.com . If this is the first time you've been to script.google.com , you'll be redirected to an information page. Click Start Scripting to proceed to the script editor. In the script editor, create a script for a Blank Project .
Replace the code in Code.gs with the following:
gmail/markup/Code.gs
View on GitHub
/**
* Send an email with schemas in order to test email markup.
*/
function testSchemas () {
try {
const htmlBody =
HtmlService . createHtmlOutputFromFile ( "mail_template" ). getContent ();
MailApp . sendEmail ({
to : Session . getActiveUser (). getEmail (),
subject : `Test Email markup - ${ new Date () } ` ,
htmlBody : htmlBody ,
});
} catch ( err ) {
console . log ( err . message );
}
}
Select File > New > Html file to create a new HTML file. Name the file mail_template to match the parameter in the JavaScript above. Replace the content of the HTML file with the following:
gmail/markup/mail_template.html
View on GitHub
<!--
Copyright 2022 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->
<html>
<head>
<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "EmailMessage",
"description": "Check this out",
"potentialAction": {
"@type": "ViewAction",
"target": "https://www.youtube.com/watch?v=eH8KwfdkSqU"
}
}
</script>
</head>
<body>
<p>
This a test for a Go-To action in Gmail.
</p>
</body>
</html>
Testing the script
To test the script:
Save the project.
Select the tab for Code.gs .
Make sure the function testSchemas is selected in the Select function dropdown menu.
Click Run in the Apps Script development environment.
The first time you run the script you'll be asked to grant authorization, after which you should re-run it. After the script runs, check your inbox for an email sent from yourself with a Go-To Action button, as in the following screenshot:
How does the script work?
The testSchemas function reads the HTML content from the file named mail_template.html and sends that content as an email to the currently authenticated user. As explained in Registering with Google , all schemas you send to yourself will be displayed in Gmail, so the email sent by the script can be used to ignore the registration requirements for testing purposes.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
