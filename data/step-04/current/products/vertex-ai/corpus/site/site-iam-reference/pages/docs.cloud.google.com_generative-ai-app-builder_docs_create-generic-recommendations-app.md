---
title: "Create a custom recommendations app \_|\_ Vertex AI Search \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/create-generic-recommendations-app
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/create-generic-recommendations-app
  title: "Create a custom recommendations app \_|\_ Vertex AI Search \_|\_ Google\
    \ Cloud Documentation"
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
Create a custom recommendations app
Stay organized with collections
Save and categorize content based on your preferences.
Note:
This feature is a Preview offering, subject to the "Pre-GA Offerings Terms"
of the GCP Service Specific Terms .
Pre-GA products and features may have limited support, and
changes to pre-GA products and features may not be compatible with other pre-GA
versions. For more information, see the
launch stage descriptions .
Further, by using this feature, you agree to the
Generative AI Preview terms and conditions
("Preview Terms"). For this feature, you can process personal data as outlined in the
Cloud Data Processing Addendum ,
subject to applicable restrictions and obligations in the Agreement (as defined in the Preview Terms).
This page describes how to create a custom recommendations app.
Console
To use the Google Cloud console to create a custom recommendations app, follow
these steps:
In the Google Cloud console, go to the AI Applications page.
AI Applications
On the Apps page, click Create app .
On the Create App page, under Recommendations engine , click
Create .
In the Your app name field, enter a name for your app. Your app ID
appears under the engine name.
Optional: Click Edit to edit your app ID.
Click Continue .
To connect to a data store, on the Data Stores page, select a data store
that contains structured data or choose to create a data store.
Do one of the following:
Select an existing data store, if one is available. A data store can be
attached to only one app, and it can't be removed from the app later.
Create a new structured data store and ingest data into it. Do this by
clicking Create data store and following the steps in the Create a
new data store pane that opens. Then select your new data store. For
more information about creating a data store, see Create a
custom recommendations data store .
Optional: To see a list of unavailable data stores, click Learn why .
A table is displayed with a list of data stores and the reason why they are
unavailable. Here are some of the reasons why a data store might be
unavailable:
Your data store type allows connection to only one app and the data
store is already connected.
Your data store and your app are in different regions.
Your data store and your app are of different types. For example, you
cannot connect a media data store to a custom recommendations app.
Your data store has basic website search, whereas a
custom recommendations app requires a data store with advanced website indexing.
Click Create .
REST
Before you use the command line to create an app, you must have an existing data
store. If you don't have a data store, create one following the steps in
Create a custom recommendations data store .
Note: This feature is experimental.
To use the command line to create a recommendations app, follow these steps:
Find your data store ID. If you already have your data store
ID, skip to the next step.
In the Google Cloud console, go to the AI Applications page and
in the navigation menu, click Data Stores .
Go to the Data Stores page
Click the name of your data store.
On the Data page for your data store, get the data store ID.
Create an app and connect it to a structured data store. A data store
can be attached to only one app and can't be removed from the app later.
Key Term: In Vertex AI Search, the term app can be used
interchangeably with the term engine in the context of APIs.
curl -X POST \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
-H "X-Goog-User-Project: PROJECT_ID " \
"https://discoveryengine.googleapis.com/v1alpha/projects/ PROJECT_ID /locations/global/collections/default_collection/engines?engineId= APP_ID " \
-d '{
"displayName": " APP_DISPLAY_NAME ",
"dataStoreIds": [" DATA_STORE_ID "],
"solutionType": ["SOLUTION_TYPE_RECOMMENDATION"],
"similarDocumentsConfig": {}
}'
Replace the following:
PROJECT_ID : the ID of your Google Cloud project.
APP_ID : the ID of the recommendations app that you want to create.
APP_DISPLAY_NAME : the display name of the recommendations app that you want to create.
DATA_STORE_ID : the ID of an existing recommendations data store
that you want to add to the recommendations app.
What's next
To preview how your recommendations appear, see
Get recommendations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
