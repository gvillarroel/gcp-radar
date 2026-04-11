---
title: "Build a Google Chat app with Google Apps Script \_|\_ Google Workspace add-ons\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/workspace/add-ons/chat/quickstart-apps-script
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/add-ons/overview
source_metadata:
  url: https://developers.google.com/workspace/add-ons/chat/quickstart-apps-script
  title: "Build a Google Chat app with Google Apps Script \_|\_ Google Workspace add-ons\
    \ \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Add-ons
Send feedback
Build a Google Chat app with Google Apps Script
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide explains how to build a Google Workspace add-on that functions as a Google Chat app using Google Apps Script, enabling direct messaging and message echoing.
The architecture involves user interaction triggering Apps Script logic in Google Cloud, potentially integrating with other Google services, before sending a response back to the user via Chat.
Prerequisites include a Google Workspace Business or Enterprise account with Chat access and a Google Cloud project with the Chat API enabled.
Setup involves configuring the OAuth consent screen, copying and setting up the provided Apps Script project, and creating a test deployment.
To test, open a direct message with the deployed Chat app in Google Chat and send a message to observe the response.
This page explains how to build a Google Workspace add-on that works in
Google Chat using Google Apps Script.
Note: In Google Chat, add-ons appear to users as
Google Chat apps. You can also build your Chat app using
Google Chat API interaction events . To learn more, see the
Extend Google Chat overview .
The Chat app lets you directly message and responds
by echoing your messages.
The following diagram shows the architecture and messaging pattern:
In the preceding diagram, a user interacting with an Apps Script
Chat app has the following flow of information:
A user sends a message to a Chat app, either in a
direct message or in a Chat space.
The Chat app logic that's implemented in
Apps Script, which resides in Google Cloud, receives
and processes the message.
Optionally, the Chat app logic can integrate with
Google Workspace services, such as Calendar or
Sheets, or other Google services, such as Google Maps
or YouTube.
The Chat app logic sends a response back to the
Chat app service in Chat.
The response is delivered to the user.
Objectives
Set up your environment.
Set up the script.
Configure the Chat app.
Test the Chat app.
Prerequisites
A Business or Enterprise
Google Workspace account with access to
Google Chat .
A Google Cloud project. To create one, see
Create a Google Cloud project .
Set up your environment
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
All apps using OAuth 2.0 require a consent screen configuration. Configuring
your app's OAuth consent screen defines what is displayed to users and app
reviewers, and registers your app so you can publish it later.
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
Set up the script
To set up the script, you use the Chat app template
from the Apps Script Getting Started page.
Create the Apps Script project
From Apps Script's
Getting Started page, go to
Google Workspace add-on starters and click the Chat app template:
Open the Chat app template
In the new Apps Script project that opens, name the project:
Click Untitled project .
In Project title , type Add-on
Chat app .
Click Rename .
In the future, if you want to use certain Google APIs or publish your app, you must associate your Cloud project with your Apps Script project. For this guide, you don't need to do so. To learn more, see the Google Cloud projects guide .
Create a test deployment
You need a deployment ID for this Apps Script project, so that
you can use it in the next step.
To get the head deployment ID, do the following:
In the Chat app Apps Script project,
click Deploy
> Test deployments .
Copy the Head deployment ID for use in a later step and click Done .
Configure the Chat app
Take the following steps to configure the Google Chat app:
In the
API Console , search for Google Chat API ,
and click Google Chat API .
Click Manage .
Click Configuration and set up the Chat app:
In the App name field, enter Add-on
Chat app .
In the Avatar URL field, enter
https://developers.google.com/workspace/add-ons/images/quickstart-app-avatar.png .
In the Description field, enter Add-on
Chat app .
Under Functionality , select Join spaces and group conversations .
Under Connection settings, select Apps Script project .
In the Deployment ID field, paste the Head deployment ID that you
previously copied.
Under Visibility, select Specific people and groups in your
domain , and enter your email.
Click Save .
The Chat app is ready to respond to messages.
Test the Chat app
To test your Chat app, open a direct message space with
the Chat app and send a message:
Open Google Chat using the Google Workspace account that you
provided when you added yourself as a trusted tester.
Go to Google Chat
Click add New chat .
In the Add 1 or more people field, type the name of your
Chat app.
Select your Chat app from the results. A direct
message opens.
Note: If you don't see your Chat app in the list of
results, ensure that you've included your Google Workspace account in the
Visibility settings of the Chat API Configuration
page in the Google API Console.
In the new direct message with the app, type Hello and
press enter .
The Chat app thanks you for adding it and echoes
your message.
To add trusted testers and learn more about testing interactive features, see
Test interactive features for
Google Chat apps .
Troubleshoot
When a Google Chat app or
card returns an error, the
Chat interface surfaces a message saying "Something went wrong."
or "Unable to process your request." Sometimes the Chat UI
doesn't display any error message, but the Chat app or
card produces an unexpected result; for example, a card message might not
appear.
Although an error message might not display in the Chat UI,
descriptive error messages and log data are available to help you fix errors
when error logging for Chat apps is turned on. For help viewing,
debugging, and fixing errors, see
Troubleshoot and fix Google Chat errors .
Clean up
To avoid incurring charges to your Google Cloud account for the
resources used in this tutorial, we recommend that you delete the
Cloud project.
Caution: Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for this tutorial, when you delete it, you also delete any other work you've done in the project.
Custom project IDs are lost. When you created this project, you might have created a custom project ID that you want to use in the future. To preserve the URLs that use the project ID, such as a URL on appspot.com, delete the selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple tutorials and quickstarts, reusing projects can help you avoid exceeding project quota limits.
In the Google API Console, go to the Manage resources page. Click
Menu menu
> IAM & Admin
> Manage Resources .
Go to Resource Manager
In the project list, select the project you want to delete and then click
Delete delete .
In the dialog, type the project ID and then click Shut down to delete
the project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],["This content guides you through creating a Google Chat app using Google Apps Script. Key actions include setting up a Google Cloud project, enabling the Chat API, and configuring the OAuth consent screen. You'll copy a quickstart project in Apps Script, link it to your Cloud project, and create a test deployment. Finally, you'll configure the Chat add-on in the Google Chat API, defining its name, functionality, and visibility, and then test it by sending messages in Google Chat, and cleaning up resources.\n"]]
