---
title: "Connect a Chat app with other services and tools \_|\_ Google Chat \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/workspace/chat/connect-web-services-tools
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/chat/authenticate-authorize
source_metadata:
  url: https://developers.google.com/workspace/chat/connect-web-services-tools
  title: "Connect a Chat app with other services and tools \_|\_ Google Chat \_|\_\
    \ Google for Developers"
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
Connect a Chat app with other services and tools
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Chat apps can connect with external services for enhanced functionality, such as account linking and data access.
To enable external connections, Chat apps use a configuration URL that prompts users to complete setup outside of Chat.
Upon successful configuration, the original message in Chat becomes public and is resent to the app for processing.
Google Sign-in is recommended for authenticating Chat users in external systems by using the identity token's sub claim.
Ensure the identity token's integrity is validated before using the user ID for any operations.
Note: This guide explains how to build an interactive Chat app
using Chat API interaction events . You can also build your
Chat app as a Google Workspace add-on. To learn about which framework
to use, see Build an interactive
Google Chat app .
This page describes how to connect a Google Chat app with a service
or tool that is outside of Google Chat. While Chat apps are
powerful on their own, they often work in concert with other systems and require
companion applications to connect accounts, authorize data access, display
additional data, or configure user preferences.
Prerequisites
A Google Chat app that's configured to receive and respond to interaction events . To create an
interactive Chat app, complete one of the following quickstarts based
on the app architecture that you want to use:
HTTP service with Google Cloud Functions
Google Apps Script
Google Cloud Dialogflow CX
Google Cloud Pub/Sub
Request Chat app configuration from a user
If completing a request requires additional configuration that can't be
completed directly in the Chat app, return a
configuration URL to the user as part of a normal reply, or present it privately,
in the following form:
{
"actionResponse": {
"type": "REQUEST_CONFIG",
"url": " CONFIGURATION_URL "
}
}
This tells Google Chat to present the user with a private prompt, where
CONFIGURATION_URL is a link
for the user to visit for additional authentication, authorization, or
configuration. A REQUEST_CONFIG response is mutually exclusive with a regular
response message. Any text, cards, or other attributes are ignored.
Complete the configuration request
Every
MESSAGE , ADDED_TO_SPACE , and APP_COMMAND interaction event
that your Chat app receives also includes the field
configCompleteRedirectUrl . You must encode this URL in your
configuration URL to be used on completion of the process. Redirecting to this
URL signals to Google Chat that the configuration request was fulfilled.
When your Chat app starts, the flow depends on the
specific message received. In response to a message like @app help , a
Chat app should respond with a message without
requiring additional configuration.
When a user is successfully redirected to the configCompleteRedirectUrl
provided in the original message, Google Chat performs the following steps:
Erase the prompt that was displayed to the initiating user.
Convert the original message to public, making it visible to other members of
the space.
Send the original message to the same Chat app
a second time.
Visiting a configCompleteRedirectUrl only affects a single user message.
If a user has tried to message a Chat app multiple
times and as a result received multiple prompts, clicking through a particular
prompt and completing the authentication and configuration process only affects
that particular message. Other messages aren't changed.
When a MESSAGE interaction event is resent in this way, it should be identical
to the original event; however, there are some situations where MESSAGE
interaction events can differ. For example, when a message mentions both
Chat app A and Chat app B,
the user is able to edit the message if Chat app A
responds with a regular message before authenticating with
Chat app B. In this case,
Chat app B receives the edited message text after the
user completes authentication and configuration.
Authenticate the Chat user outside of Chat
In some cases, such as requesting OAuth authorization for an API, your app needs
to link to a URL outside of Chat while maintaining the user
identity. The best way to identify the user in these cases is to guard the
destination app with Google Sign-in .
Use the
identity token
issued during sign-in to get the user ID. The sub claim contains the user's
unique ID and can be correlated with the user ID from Google Chat.
Caution: Always
validate the integrity
of the token before accepting the asserted user ID.
While the two IDs aren't exactly identical, they can be coerced. To
coerce the value of the sub claim to a Google Chat users/{user} , prepend
the value with users/ . For example, the claim value of 123 is equivalent
to the username users/123 in messages to your
Chat app.
Related topics
Receive and respond to user interaction
The MyProfile app example
uses the identity token from the Google Sign-in response to identify the
user.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["To connect a Google Chat app with external services, use a configuration URL returned in a `REQUEST_CONFIG` response, prompting users for authentication or configuration. This URL should include the `configCompleteRedirectUrl` provided by Chat, redirecting users back upon completion. Successful redirection erases the prompt, makes the original message public, and resends the original message to the Chat app. To maintain user identity outside Chat, use Google Sign-in and validate the integrity of the `sub` token.\n"]]
