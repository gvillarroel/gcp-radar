---
title: "Build a Google Chat add-on with Dialogflow ES \_|\_ Google Workspace add-ons\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/workspace/add-ons/chat/quickstart-dialogflow-es
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/add-ons/overview
source_metadata:
  url: https://developers.google.com/workspace/add-ons/chat/quickstart-dialogflow-es
  title: "Build a Google Chat add-on with Dialogflow ES \_|\_ Google Workspace add-ons\
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
Build a Google Chat add-on with Dialogflow ES
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to build a Google Chat app as a Google Workspace Add-on that uses Dialogflow ES to understand and respond to natural language. You can also use
Dialogflow CX , which has a direct integration with Google Chat, to build a
Dialogflow CX Google Chat app by following
the Dialogflow CX Google Chat
guide.
Objectives
Set up your environment.
Create and deploy a Dialogflow ES agent.
Create and deploy a Chat app powered by the
Dialogflow ES agent.
Test the Chat app.
Prerequisites
A Business or Enterprise
Google Workspace account with access to
Google Chat .
A Google Cloud project with billing enabled. To check that an existing project has billing enabled,
see Verify the
billing status of your projects . To create a project and set up billing, see
Create a Google Cloud project .
Architecture
The following diagram shows the architecture of a
Chat app built with Dialogflow:
In the preceding diagram, a user interacting with a Dialogflow
Chat app has the following flow of information:
A user sends a message in Chat to a
Chat app, either in a direct message or in a
Chat space.
A Dialogflow virtual agent, which resides in , receives
and processes the message to produce a response.
Optionally, using a
Dialogflow webhook ,
the Dialogflow agent can interact with external third-party services, such
as a project management system or a ticketing tool.
The Dialogflow agent sends a response back to the
Chat app service in Chat.
The response is delivered to the Chat space.
Set up the environment
Before using Google APIs, you need to turn them on in a Google Cloud project.
You can turn on one or more APIs in a single Google Cloud project.
In the Google API Console, enable the Google Chat API and the Dialogflow API.
Enable the APIs
Confirm that you're enabling the APIs in the correct
Cloud project, then click Next .
Confirm that you're enabling the correct APIs, then click Enable .
Create a Dialogflow ES agent
If you don't have an existing Dialogflow ES agent:
Go to the Dialogflow ES Console .
Click Create Agent .
Give it a name, select a default language, and time zone.
Associate it with your Cloud project.
Click Create .
Build your intents and entities as needed for your Chat app conversational flow. You can start with a greeting intent.
Take note of your Project ID .
For a detailed guide, see Build an Agent .
Create a Chat app and connect it with the Dialogflow agent
After creating a Dialogflow ES agent, follow these steps to turn it into a
Chat app:
In the Google API Console, go to Google Chat API. Search for "Google Chat API" and
click Google Chat API , then click Manage .
Go to Chat API
Click Configuration and set up the Chat app:
In App name , enter Dialogflow App .
In Avatar URL , enter
https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png .
In Description , enter Responds to real human conversation .
Under Functionality , select Join spaces and group conversations .
Under Connection settings , select Dialogflow .
Under Dialogflow settings , select Dialogflow ES .
Make this Chat app available to specific people and groups
in your domain and enter your email address.
Under Logs , select Log errors to Logging .
Click Save .
The Chat app is ready to receive and respond to
messages on Chat.
Test the Chat app
Test the Dialogflow ES Chat app by messaging it in
Google Chat.
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
The Dialogflow Chat app responds by a greeting message.
Text Responses
Text responses
are sent to Google Chat as
Text messages .
With this formatting you can make text bold or italics by wrapping the text in
certain (markdown light) symbols.
The text message response, visually looks the same as the Default Text Response
in the Dialogflow Console. However, the raw API response will look a bit different.
It also sets the platform config to GOOGLE_HANGOUTS , which could be interesting
when building agents for multiple integrations.
"fulfillmentMessages": [
{
"text": {
"text": [
"This is a test."
]
},
"platform": "GOOGLE_HANGOUTS"
},
Cards
Card responses
are sent to Google Chat as
Card messages .
Images
Image responses
are sent to Google Chat as
Google Chat Image Widgets .
Custom Payload
To send other types of Google Chat messages, you can use a custom payload .
Google Chat Custom Payload lets you create more advanced cards. One card can have one or many sections. Each section could have a header.
You can have a look into the Google Workspace Add-on extend Chat cards reference guide , to see some of the combinations you can create with this. However, using custom payloads means that you will have to provide the JSON format.
Note: When you copy and paste the examples from the reference guide to the custom payload box in Dialogflow, make sure the editor doesn't contain any linting errors. You can't test the results in the Dialogflow Simulator but can test it directly in Google Chat.
Here is an example of a custom payload for creating a message with a card:
{ "hangouts" : { "hostAppDataAction" : { "chatDataAction" : {
"createMessageAction" : { "message" : { "cardsV2" : [{
"cardId" : "pizza" ,
"card" : {
"header" : {
"title" : "Pizza Delivery Customer Support" ,
"subtitle" : "pizzadelivery@example.com" ,
"imageUrl" : "https://goo.gl/aeDtrS"
},
"sections" : [{ "widgets" : [{ "textParagraph" : {
"text" : " Your pizza is here!"
}}]}]
}
}]}}
}}}}
Limits and considerations
When using Google Workspace add-ons with Dialogflow, Chat event objects
have the following limitations and considerations:
App Home Events: Support for APP_HOME events is not yet available.
Dialogflow Query Input: The text sent as query input to the
Dialogflow agent depends on the event type:
MESSAGE : The value of the argumentText field from the
Chat message.
APP_COMMAND : The string "APP_COMMAND_PAYLOAD" .
ADDED_TO_SPACE : A default welcome event is sent.
REMOVED_FROM_SPACE : The string "REMOVED_FROM_SPACE_PAYLOAD" .
CARD_CLICKED : The string "BUTTON_CLICKED_PAYLOAD" .
WIDGET_UPDATED : The string "WIDGET_UPDATED_PAYLOAD" (used for
autocomplete).
Full Event Payload: The full JSON payload of the
Chat interaction event is sent to Dialogflow within the
WebhookRequest.payload field. You can access this in your
Dialogflow webhook. For more information, see the
Dialogflow ES webhook request documentation .
Considerations for responding to
commands and
receiving data from cards or dialogs :
If the Dialogflow agent needs to process the
Chat interaction event JSON payload ,
it can do so by using a
Dialogflow webhook
to inspect the custom payload in the query parameter.
To display a dialog from the
Dialogflow Agent, respond with a single custom JSON payload that
contains a
RenderActions object with the navigation pushCard .
To process data entered from cards, you can use a
Dialogflow webhook and respond with a single custom JSON payload containing the appropriate action .
Link previews aren't supported.
If the Dialogflow agent responds with just one message, then the message
is sent to Google Chat synchronously. If the Dialogflow agent responds
with multiple messages, then all messages are sent to Chat
asynchronously by calling the
create
method on the spaces.messages resource in Chat API once for each
message.
When using the Dialogflow ES integration with Chat,
the Dialogflow agent and the Chat app must be set
up in the same Google Cloud project.
Troubleshoot
To debug your Chat app, start by reviewing the error logs. Since this app uses Dialogflow, you have several logging and troubleshooting resources available:
Google Workspace add-on Logs: Query logs for detailed information about the
add-on's behavior, including its interactions with Chat. See Query logs for Google Workspace Add-ons .
Google Google Chat app Errors: For general Chat app error messages and fixes, refer to Troubleshoot and fix Chat app errors .
Dialogflow ES Conversation History: History | Dialogflow ES
Dialogflow General Troubleshooting: Troubleshooting | Dialogflow
Clean up
To avoid incurring charges to your account for the
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
Related topics
Dialogflow CX
is another way to use Dialogflow with a Chat app.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
