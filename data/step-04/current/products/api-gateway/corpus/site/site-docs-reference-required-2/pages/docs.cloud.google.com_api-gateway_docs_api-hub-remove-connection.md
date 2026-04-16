---
title: "Remove an API Gateway connection from API hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/api-gateway/docs/api-hub-remove-connection
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/api-gateway/docs/creating-api-config
source_metadata:
  url: https://docs.cloud.google.com/api-gateway/docs/api-hub-remove-connection
  title: "Remove an API Gateway connection from API hub \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
API Gateway
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Remove an API Gateway connection from API hub
This page describes how to remove an API Gateway connection from API hub.
Overview
To remove an API Gateway connection from API hub, do one of the following:
Remove API Gateway assets from API hub without detaching the runtime project
Detach the runtime project from API hub
Important : When you remove an API Gateway connection from API hub, the API Gateway plugin instance and all ingested data will be deleted from API hub.
Remove API Gateway assets from API hub without detaching the runtime project
Remove API Gateway assets from API hub without detaching the runtime project as described below.
Google Cloud console
To remove API Gateway assets from the runtime project association settings, do the following:
In the Google Cloud console, select your host project.
Go to the API hub page.
Go to API hub
Click settings Settings from the left navigation menu to open the Settings page.
Go to the Project associations tab.
Click Edit settings associated with the API Gateway project.
In the Project association settings pane, deselect API Gateway Plugin and any other API assets you want to automatically import.
Click Save .
REST
To remove API Gateway assets from the runtime project, use the delete plugin instance API.
For example:
curl "https://apihub.googleapis.com/v1/projects/ HUB_PROJECT_ID /locations/ HUB_LOCATION /plugins/ PLUGIN_TYPE /instances/ PLUGIN_INSTANCE_ID " \
-X DELETE \
-H "Authorization: Bearer $(gcloud auth print-access-token)"
Replace the following:
HUB_PROJECT_ID : The name of your API hub host project. The host project was selected
when API hub was provisioned.
HUB_LOCATION : The location of the host project. The location was chosen when API
hub was provisioned.
PLUGIN_TYPE : Type of plugin. Set to system-api-gateway .
PLUGIN_INSTANCE_ID : ID of the API Gateway plugin instance. Use the list plugin instances API to get the plugin instance ID.
If successful, an Operation JSON object is returned.
Detach the API Gateway project from API hub
Detach the runtime project from API hub as described below.
Google Cloud console
To detach the API Gateway project from API hub, do the following:
In the Google Cloud console, select your host project.
Go to the API hub page.
Go to API hub
Click settings Settings from the left navigation menu to open the Settings page.
Go to the Project associations tab.
Click Detach runtime project associated with the API Gateway project.
Click Confirm .
REST
To detach the runtime project from API hub, use the delete runtime project attachments API.
For example:
curl 'https://apihub.googleapis.com/v1/projects/ HUB_PROJECT_ID /locations/ HUB_LOCATION /runtimeProjectAttachments/ RUNTIME_PROJECT_ID ' \
-X DELETE \
-H "Authorization: Bearer $(gcloud auth print-access-token)"
Replace the following:
HUB_PROJECT : The name of your API hub host project. The host project was selected
when API hub was provisioned.
HUB_LOCATION : The location of the host project. The location was chosen when API
hub was provisioned.
RUNTIME_PROJECT_ID : ID of the runtime project. Use the list runtime project attachments API to get the runtime project ID.
If successful, an empty JSON object is returned.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
