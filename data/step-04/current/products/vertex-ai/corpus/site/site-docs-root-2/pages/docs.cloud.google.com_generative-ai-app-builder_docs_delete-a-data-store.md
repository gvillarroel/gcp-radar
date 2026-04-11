---
title: "Delete a data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-a-data-store
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-a-data-store
  title: "Delete a data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
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
Delete a data store
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to delete a data store.
Deletion is an asynchronous process that can take days. You can't reuse a data store ID
until the original data store is completely deleted. To prevent this from blocking your
workflow, we strongly recommend that you use a unique ID for every data store.
Before you begin
Before deleting a structured or unstructured data store, if your
data store is connected to an app, you must do one of the following:
To keep the app and delete only the data store, unlink the data store from its connected app.
To delete both the app and the data store, first Delete the app that the data store is connected to.
Structured and unstructured data stores
Before attempting to delete a structured or unstructured data store, if your
data store is connected to an app, you must delete the app that
it is connected to.
Website data stores
Before attempting to delete a website data store, be aware of the following:
You can't delete a data store that is connected to an app. If your data
store is connected to an app, you must delete the app that it
is connected to.
You can't delete a data store that is in the process of upgrading to
advanced website indexing or downgrading to
standard indexing. You must wait for the upgrade or downgrade to complete
before deleting the data store.
Procedure
Console
To delete a data store, follow these steps:
In the Google Cloud console, go to the AI Applications page, and
then click Data Stores .
Go to the Data Stores page
For the data store that you want to delete, click more_vert , and then click Delete .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
