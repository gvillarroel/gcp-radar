---
title: "Create media apps \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-media
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-media
  title: "Create media apps \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Search
Send feedback
Create media apps
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create media recommendation apps and media search
apps.
The processes for creating media recommendations apps and creating
media search apps are similar. Both apps can use the same media data
stores—although when you create a media recommendations app, you must choose a
recommendations type and a business objective for your app.
Before you begin
Make sure that you have created your media data store.
For information about
creating a media data store, see Create a media data
store .
Create a media recommendations app
To use the Google Cloud console to create a media recommendations app, follow these
steps:
Console
In the Google Cloud console, go to the AI Applications page.
AI Applications
On the Apps page, click Create app .
On the Create app page, under Media recommendations , click
Create .
In the App name field, enter a name for your app. Your app ID,
also called the engine ID, appears under the field.
Optional: Click Edit to edit your app ID.
Select a recommendations type. For more information, see
Recommendations types .
Select a business objective. For more information, see
Optimization for business objectives .
(Only for Recommended for you) Select a context event type. For more
information, see Recommended for you .
(Only for Most popular) Enter a time window in the Days field if you
selected the Most popular recommendations type.
Click Continue .
Select a media data store that you previously created.
Only media data stores are displayed for selection.
Optional: To see a list of unavailable data stores, click Learn why .
A table is displayed with a list of data stores and the reason why they are
unavailable.
On the Data Stores page, click Create . Your new app is created and
connected to the data store that you selected. The information page for your
data store appears.
Check the quality of the data in your data store:
Click Data quality . If you see the message Data requirements not met ,
you have to import more data, usually in the form of more recent user events.
For information about importing user events, see About media user
events and Import historical user events ,
and Record real-time user events . After importing
data, it can take some time for the Requirements tab to update its
status.
To review additional quality metrics about your data, click
Optimization . For more information, see Check data quality
for media recommendations .
Note: It can take two to five days for your app to train and be ready for queries.
Create a media search app
To use the Google Cloud console to create a media search app, follow these
steps:
Console
In the Google Cloud console, go to the AI Applications page.
AI Applications
On the Apps page, click Create app .
On the Create App page, under Media search , click
Create .
In the App name field, enter a name for your app. Your app ID,
also called the engine ID, appears under the field.
Optional: Click Edit to edit your app ID.
Click Continue .
Select a media data store that you previously created.
Only media data stores are displayed for selection.
Optional: To see a list of unavailable data stores, click Learn why .
A table is displayed with a list of data stores and the reason why they are
unavailable.
On the Data Stores page, click Create . Your new app is created and
connected to the data store that you selected. The information page for your
data store appears.
What's next
For search apps: Configure search results for structured
data
For recommendations apps: Get media recommendations
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
