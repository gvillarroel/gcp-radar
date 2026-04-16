---
title: "Zendesk CRM installation guide \_|\_ Google Cloud Contact Center as a Service\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-installation-guide
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-installation-guide
  title: "Zendesk CRM installation guide \_|\_ Google Cloud Contact Center as a Service\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Google Cloud CCaaS
User Guides
Send feedback
Zendesk CRM installation guide
Stay organized with collections
Save and categorize content based on your preferences.
Contact Center AI Platform (CCAI Platform) supports integration with Zendesk CRM. This
guide covers the steps needed to perform this integration. The following Zendesk
applications are supported:
Call : Latest version: v1.4.0
Chat : Latest version: v1.3.0
Before you start
The following are prerequisites for the Zendesk CRM integration:
Sign in to CCAI Platform portal as an administrator.
Zendesk account on the Professional or Enterprise plan.
Download Zendesk app files.
Read through instructions before installing.
Installation
Zendesk apps are private. They are not listed on the public Zendesk App
Marketplace. You can contact your Zendesk representative to obtain and install
them to your Zendesk account.
The Zendesk apps can be installed either by following these instructions or by
clicking on the link in the Zendesk apps. To upload and install a private app in
Zendesk support:
Sign in to Zendesk and click the Admin icon settings in the sidebar.
Select Apps > Manage .
Click Upload App .
Enter a name for the app. It is recommended that you use Call for the
call app and Chat for the chat app.
Click Choose file and select the zip file for your private app.
For call app, the filename is zendesk-call-v1.4.zip .
For chat app, the filename is zendesk-chat-v1.3.zip .
Click Upload .
In the window that appears, click Agree and upload this App .
Enter your account subdomain.
Enable role or group restrictions, enter role or group if needed.
When prompted, click Install .
When the process is complete, your private app appears in the list of
installed apps on the Manage Apps page.
Repeat steps if both the call and chat apps need to be installed.
For the app configuration, specify the following field values:
Subdomain : Enter the subdomain of your Zendesk account, which you should
already know. (customer ie. customer .example.com)
-- Domain Name : Leave it as the default value example.com .
Managing apps
Once the chat and call applications have been installed they can be managed
through Zendesk.
Changing app settings
The application settings can be changed by following these instructions. You can
change the settings for an app, including the title.
Sign in to Zendesk and click the Admin icon settings in the sidebar.
Select Apps > Manage .
On the My Apps page, find the app you want to change.
Click the app icon to open that app's settings page.
Make the changes you want and click Save Settings at the bottom of the
page. Your changes are saved.
Updating apps
Periodically it might be necessary to update the installed apps. To update an app,
follow these instructions:
You can find instructions to update a private app or click the
following link from Zendesk, Private Apps.
Sign in to Zendesk and click the Admin icon settings in the sidebar.
Select Apps > Manage .
On the My Apps page, find the app you want to update.
On the app icon, click the settings icon
to open the app settings menu.
Click Update to open the screen where you can upload an updated zip
file.
Setting up an OAuth client
Zendesk apps use OAuth2 to authenticate API requests to Zendesk. You
should set up an OAuth Client for Zendesk Apps.
The following instructions guide you through the OAuth setup process including
registering your application with Zendesk.
Application registration
In Zendesk Support, click Manage settings .
Select API in the Channels category.
Click the OAuth Clients tab on the Channels / API page.
Click the add icon on the right side of
the client list.
Complete the following fields to create a client:
Client Name : Enter a name for your app. This is the name that users
will see when asked to grant access to your application, and when they check
the list of third-party apps that have access to their Zendesk.
Description : (Optional) This is a short description of your app that
users will see when asked to grant access to it.
Company : (Optional) This is the company name that users will see when
asked to grant access to your application. The information can help them
understand who they're granting access to.
Logo : (Optional) This is the logo that users will see when asked to
grant access to your application. The image can be a JPG, GIF, or PNG. For
best results, upload a square image. It will be resized for the
authorization page.
Unique Identifier : The field is auto-populated with a reformatted
version of the name you entered for your app. You can change it if you want.
Redirect URLs : Enter the URL or URLs that Zendesk should use to send the
user's decision to grant access to your application. The URLs must be
absolute and not relative, https (unless localhost or 127.0.0.1), and
newline-separated.
Click Save .
After the page refreshes, a new pre-populated Secret field appears on the
lower side. This is the client_secret value specified in the OAuth2
spec.
Copy the Secret value to your clipboard and save it somewhere
safe.
Note: The characters may extend past the width of the field, so make sure to
select everything before copying.
Set the OAuth redirect URL.
https://YOUR_SUBDOMAIN.example.com/v1/zendesk/oauth_callback
You should replace YOUR_SUBDOMAIN with the actual subdomain of your Zendesk
account.
Set the Unique Identifier and Secret fields which are are
auto-populated while adding a new OAuth client. You can edit the Unique
Identifier if you want, but not the Secret . The Secret is
displayed fully only once while adding a new client. Ensure this is kept
safe. These are the client_id and client_secret values in the OAuth2
specifications.
Configure OAuth application settings
Sign in to the CCAI Platform portal.
Go to Settings > Developer Settings .
Select Agent Platform Zendesk in CRM section.
Set Zendesk Subdomain to the subdomain of your Zendesk account.
Set OAuth Client ID to the Unique Identifier of your Zendesk OAuth
client.
Set OAuth Client Secret to the Secret of your Zendesk OAuth client.
Click Save .
Generate an API token
The Zendesk API leverages tokens for security. To generate an API token in
Zendesk, follow these steps:
In Zendesk, click the Admin settings
icon in the sidebar.
Select Channels > API .
Click the Settings tab, and make sure Token Access is enabled .
Click the add icon to the right of
Active API Tokens .
Optionally, enter a description under API Token Description .
The token is generated and displayed for you:
Copy the token, and paste it somewhere secure. Once you close this window,
the full token will never be displayed again.
Click Save to return to the API page.
A truncated version of the token is displayed:
Configure API token
To assign the API token to the Zendesk CRM settings, follow these steps:
Sign in to the CCAI Platform portal with an administrator account.
Go to Settings > Developer Settings .
Set API Token to the API token copied from your Zendesk client.
Create customer and ticket fields
Optionally, the customer and ticket fields can be created. Follow these steps:
Create a Zendesk account which has both administrator and agent role.
In Zendesk, go to Settings > Agent & Manager Team .
Select Add an admin .
Check This admin is also an agent .
Activate the account from invitation email.
Sign out of the current administrator account and sign in with the new
account.
Sign in to Zendesk with administration role not agent.
In Zendesk, sign in using the widget with credential which is an
administrator with agent role.
Click Authorize .
Open the CCAI Platform portal, go to Settings > Developer Settings .
Click the Create button from CRM > Customer fields for Contact and
Ticket section.
Check if the custom ticket fields were created from Zendesk Admin >
Manage > User Fields and Admin > Manage > Ticket Fields .
These should include the fields:
User fields :
Identifier
Ticket fields :
Verification (Checkbox)
Customer Text Feedback (Multi-line text)
Customer Satisfaction Rating (Numeric): 1 to 5
Shared Customer Rating (Text): Twitter or Facebook
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
