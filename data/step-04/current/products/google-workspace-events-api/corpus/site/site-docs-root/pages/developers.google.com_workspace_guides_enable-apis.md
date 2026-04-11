---
title: "Enable Google Workspace APIs \_|\_ Google for Developers"
url: https://developers.google.com/workspace/guides/enable-apis
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/events
source_metadata:
  url: https://developers.google.com/workspace/guides/enable-apis
  title: "Enable Google Workspace APIs \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Guides
Send feedback
Enable Google Workspace APIs
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Before using Google APIs, you must enable them within a Google Cloud project, which can be created if you don't have one.
You can enable Google APIs through the Google Cloud console by navigating to the Product Library, selecting the desired API, and clicking "Enable".
Alternatively, use the Google Cloud CLI by running the gcloud services enable API_SERVICE_ID command, replacing API_SERVICE_ID with the specific API's identifier.
A comprehensive table lists various Google Workspace APIs along with their corresponding console links and CLI commands for enabling them within your project.
After enabling the necessary APIs, you should understand the authentication and authorization processes for using Google Workspace APIs.
Before using Google APIs, you need to turn them on in a Google Cloud project.
You can turn on one or more APIs in a single Google Cloud project.
If you don't already have a Google Cloud project, see
Create a Cloud project .
To enable an API in your Cloud project:
Google Cloud console
In the Google Cloud console, go to Menu menu
> APIs & Services
> Library
> Google Workspace .
Go to API Library
Click the API that you want to turn on.
Click Enable .
To enable more APIs, repeat these steps.
Google Cloud CLI
Install or open the Google Cloud Command Line Interface (CLI) .
Run the services enable command, specifying which API service to enable.
gcloud services enable API_SERVICE_ID
(Optional) Try Google Workspace APIs in experimental apps
If you're experimenting with Google Workspace, use the following
shortcut, which enables popular Google Workspace APIs, and creates
OAuth credentials that you can use.
If you're developing an app that accesses user information, you must
configure the OAuth consent screen
before releasing your app.
Click this button to select or create a Google Cloud project, and automatically
enable the Workspace APIs:
Enable the Workspace APIs
In resulting dialog, click Download client configuration and save
credentials.json to your working directory.
See the Google Workspace APIs explorer for a
comprehensive list of all the available APIs, and to try specific methods from
your browser.
Enabled APIs (click to expand)
The button enables the following APIs:
Admin SDK API
Apps Script API
Calendar API
Chat API
Classroom API
Docs API
Drive API
Forms API
Gmail API
Google Workspace add-ons API
Google Keep API
Meet REST API
Sheets API
Slides API
Google Workspace APIs
Use the following Google Cloud console links or the
Google Cloud Command Line Interface (CLI)
to enable specific Google Workspace APIs in your Cloud project.
Admin SDK API
Enable Admin SDK API
gcloud services enable admin.googleapis.com
Alert Center API
Enable Alert Center API
gcloud services enable alertcenter.googleapis.com
Apps Script API
Enable Apps Script API
gcloud services enable script.googleapis.com
CalDAV API
Enable CalDAV API
gcloud services enable caldav.googleapis.com
Calendar API
Enable Calendar API
gcloud services enable calendar-json.googleapis.com
Chat API
Enable Chat API
gcloud services enable chat.googleapis.com
Classroom API
Enable Classroom API
gcloud services enable classroom.googleapis.com
Cloud Identity API
Enable Cloud Identity API
gcloud services enable cloudidentity.googleapis.com
Cloud Search API
Enable Cloud Search API
gcloud services enable cloudsearch.googleapis.com
Docs API
Enable Docs API
gcloud services enable docs.googleapis.com
Drive API
Enable Drive API
gcloud services enable drive.googleapis.com
Drive Activity API
Enable Drive Activity API
gcloud services enable driveactivity.googleapis.com
Drive Labels API
Enable Drive Labels API
gcloud services enable drivelabels.googleapis.com
Forms API
Enable Forms API
gcloud services enable forms.googleapis.com
Gmail API
Enable Gmail API
gcloud services enable gmail.googleapis.com
Groups Migration API
Enable Groups Migration API
gcloud services enable groupsmigration.googleapis.com
Groups Settings API
Enable Groups Settings API
gcloud services enable groupssettings.googleapis.com
Google Workspace add-ons API
Enable Google Workspace add-ons API
gcloud services enable gsuiteaddons.googleapis.com
Google Keep API
Enable Google Keep API
gcloud services enable keep.googleapis.com
Enterprise License Manager API
Enable Enterprise License Manager API
gcloud services enable licensing.googleapis.com
Marketplace API
Enable Marketplace API
gcloud services enable appsmarket.googleapis.com
Marketplace SDK
Enable Marketplace SDK
gcloud services enable appsmarket-component.googleapis.com
Meet REST API
Enable Meet REST API
gcloud services enable meet.googleapis.com
People API
Enable People API
gcloud services enable people.googleapis.com
Postmaster Tools API
Enable Postmaster Tools API
gcloud services enable gmailpostmastertools.googleapis.com
Reseller API
Enable Reseller API
gcloud services enable reseller.googleapis.com
Sheets API
Enable Sheets API
gcloud services enable sheets.googleapis.com
Slides API
Enable Slides API
gcloud services enable slides.googleapis.com
Tasks API
Enable Tasks API
gcloud services enable tasks.googleapis.com
Vault API
Enable Vault API
gcloud services enable vault.googleapis.com
Next step
Learn how authentication and authorization works
for Google Workspace APIs.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["To use Google APIs, they must be enabled in a Google Cloud project. This can be done via the Google Cloud console by navigating to the Product Library, selecting the API, and clicking \"Enable,\" repeating for multiple APIs. Alternatively, using the Google Cloud CLI, run `gcloud services enable API_SERVICE_ID` to enable specific API. A list of google workspace APIs is provided along with their corresponding links and `gcloud` commands.\n"]]
