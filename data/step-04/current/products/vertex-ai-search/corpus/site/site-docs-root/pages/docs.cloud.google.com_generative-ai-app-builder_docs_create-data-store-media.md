---
title: "Create a media data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media
  title: "Create a media data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
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
Create a media data store
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to create a data store for media and import data into it.
Before you begin
Make sure that you do the following:
Review the concepts related to media data and schema:
About media documents and data stores
Provide or auto-detect a schema
Decide whether you are using the predefined Google schema for your media
data or your own schema .
If you're using your own schema, make sure your schema has fields that map
well to the media properties for the custom schema: title ,
url , category , and so on.
Put your media documents into the JSON schema and upload the data to
BigQuery or Cloud Storage.
Note: It's also possible to create a data store and upload the data directly
from a local file. If you want to take that approach, see Import documents
using the API . The disadvantage of this
approach is that you can't edit the schema until all the data is uploaded
and if you then make changes to the schema you have to wait until it is
reindexed before you can use the data store.
Review About media user events and prepare your user events
for import. User events are required for all media apps.
Choose the procedure according to your data source
To create a media data store and import documents, go to the section for the source that you
plan to use:
BigQuery
Cloud Storage
Import documents using the API
Import from BigQuery
Console
To use the Google Cloud console to create a media data store and import documents and user events from
BigQuery, follow these steps:
In the Google Cloud console, go to the AI Applications page.
AI Applications
Go to the Data Stores page.
Click Create data store .
On the Source page, select BigQuery .
Select Media - BigQuery table with structured media data as the kind
of data that you are importing.
In the BigQuery path field, click Browse , select the
BigQuery data that you
have prepared for ingesting, and then click Select .
Alternatively, enter the location directly in the BigQuery path
field.
If your data is in the predefined Google schema, choose Google predefined
schema , click Continue , and skip to step 11.
If your data is in your own schema, choose Custom schema and click
Continue .
Review the detected schema and use the Key properties menu to assign
properties to your schema fields.
Note: If fields are missing, click Add new fields and use those controls
to add missing fields.
Click Continue .
You can't continue until the required key properties are mapped, indicated by
green checkmarks check_circle instead of orange warning marks warning .
Enter a name for your data store and click Create .
Import from Cloud Storage
Console
To use the Google Cloud console to create a media data store and import documents
from Cloud Storage, follow these steps:
In the Google Cloud console, go to the AI Applications page.
AI Applications
Go to the Data Stores page.
Click Create data store .
On the Source page, select Cloud Storage .
Select Structured media data (JSONL containing media files) as the kind
of data that you are importing.
In the Select a folder or file you want to import section, select
Folder or File .
Click Browse and choose the data that you have
prepared for ingesting, and then click Select .
Alternatively, enter the location directly in the gs:// field.
If your data is in the predefined Google schema, choose Google predefined
schema , click Continue , and skip to step 11.
If your data is in your own schema, choose Custom schema and click
Continue .
Review the detected schema and use the Key properties menu to assign
properties to your schema fields.
Note: If fields are missing, click Add new fields and use those controls
to add missing fields.
Click Continue .
You can't continue until the required key properties are mapped, indicated by
green checkmarks check_circle instead of orange warning marks warning .
Enter a name for your data store and click Create .
Import documents using the API
If you are using the Google predefined schema, you can import your documents
by making a POST request to the
Documents:import REST method, using the
InlineSource object to specify your data.
For an example of the JSON document format, see
JSON document format .
Import requirements
Here are the requirements for importing media documents using the API:
Each document must be on its own line.
The maximum number of documents in a single import is 100.
Procedure
To import media documents using the API, do the following:
Create a data store.
curl -X POST \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
-H "X-Goog-User-Project: PROJECT_ID " \
"https://discoveryengine.googleapis.com/v1/projects/ PROJECT_ID /locations/global/collections/default_collection/dataStores?dataStoreId= DATA_STORE_ID " \
-d '{
"displayName": " DATA_STORE_DISPLAY_NAME ",
"industryVertical": "MEDIA"
}'
Replace the following:
PROJECT_ID : the ID of your Google Cloud project.
DATA_STORE_ID : the ID of the Vertex AI Search data store that you want to create. This ID can contain only lowercase
letters, digits, underscores, and hyphens.
DATA_STORE_DISPLAY_NAME : the display name of the Vertex AI
Search data store that you want to create.
Create the JSON file for your document and call it ./data.json :
{
"inlineSource": {
"documents": [
{ DOCUMENT_1 },
{ DOCUMENT_2 }
]
}
}
Call the POST method:
curl -X POST \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json; charset=utf-8" \
--data @./data.json \
"https://discoveryengine.googleapis.com/v1/projects/ PROJECT_ID /locations/global/dataStores/ DATA_STORE_ID /branches/0/documents:import"
Replace the following:
PROJECT_ID : the ID of your project.
DATA_STORE_ID : the ID of your data store.
JSON document format
The following examples show Document entries in JSON format.
Provide an entire document on a single line. Each document should be on its own
line.
Minimum required fields:
{
"id" : "sample-01" ,
"schemaId" : "default_schema" ,
"jsonData" : "{\"title\":\"Test document title\",\"categories\":[\"sports > clip\",\"sports > highlight\"],\"uri\":\"http://www.example.com\",\"media_type\":\"sports-game\",\"available_time\":\"2022-08-26T23:00:17Z\"}"
}
Complete object:
{
"id" : "child-sample-0" ,
"schemaId" : "default_schema" ,
"jsonData" : "{\"title\":\"Test document title\",\"description\":\"Test document description\",\"language_code\":\"en-US\",\"categories\":[\"sports > clip\",\"sports > highlight\"],\"uri\":\"http://www.example.com\",\"images\":[{\"uri\":\"http://example.com/img1\",\"name\":\"image_1\"}],\"media_type\":\"sports-game\",\"in_languages\":[\"en-US\"],\"country_of_origin\":\"US\",\"content_index\":0,\"persons\":[{\"name\":\"sports person\",\"role\":\"player\",\"rank\":0,\"uri\":\"http://example.com/person\"},],\"organizations \":[{\"name\":\"sports team\",\"role\":\"team\",\"rank\":0,\"uri\":\"http://example.com/team\"},],\"hash_tags\":[\"tag1\"],\"filter_tags\":[\"filter_tag\"],\"production_year\":1900,\"duration\":\"100s\",\"content_rating\":[\"PG-13\"],\"aggregate_ratings\":[{\"rating_source\":\"imdb\",\"rating_score\":4.5,\"rating_count\":1250}],\"available_time\":\"2022-08-26T23:00:17Z\"}"
}
Monitor import and view data
To check the status of your ingestion, go to the Data Stores page
and click your data store name to see details about it on its Data page.
Click the Activity tab.
When the status column on the Activity tab changes from In progress
to Import completed , the ingestion is complete.
Depending on the size of your data, ingestion can take several
minutes or several hours.
Important: Wait until your document import is complete before importing
user events to avoid unjoined user events.
Click Documents to view the data you imported.
Import user events
To import user events to your media data store:
Follow the instructions in Import historical user
events .
What's next
Create a media recommendations app or a media search app .
Keep your document data fresh.
Ideally, you should update your data store daily, by importing fresh data.
Scheduling periodic imports prevents model quality from degrading over time.
You can use Google Cloud Scheduler to automate
imports.
You can update only new or changed documents, or you can import the entire
data store. If you import documents that are already in your data store, they
are not added again. Any document that has changed is updated.
Keep your user-event data fresh.
It is particularly important that you keep your user events fresh. The
recommendations app stops working if there aren't enough fresh user events to
meet the data requirements.
For information about importing user event data in real time, see Record
real-time user events .
For information about monitoring user-event requirements, see Check data quality for media recommendations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
