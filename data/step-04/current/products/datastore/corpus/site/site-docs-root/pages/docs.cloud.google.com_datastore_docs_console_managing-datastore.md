---
title: "Managing Firestore in Datastore mode from the Console \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastore/docs/console/managing-datastore
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/datastore/docs
source_metadata:
  url: https://docs.cloud.google.com/datastore/docs/console/managing-datastore
  title: "Managing Firestore in Datastore mode from the Console \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Datastore
Guides
Send feedback
Managing Firestore in Datastore mode from the Console
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to view and manage the entities, indexes, and statistics
for the data your application stores in your database.
Viewing Datastore statistics
In the Google Cloud console, go to the Databases page.
Go to Databases
Select the required database from the list of databases.
In the navigation menu, click Datastore Studio to view data for the entities in
your application, as well as statistics for the built-in and composite indexes.
The dashboard should look like:
For more information about the statistics on this page, see
Viewing Statistics in the Console .
Viewing indexes
In the Google Cloud console, go to the Databases page.
Go to Databases
Select the required database from the list of databases.
In the navigation menu, click Indexes to view a table of your application's indexes.
For each index, you should see its status, such as whether it is ready to serve your
application. You should also see the amount of storage space used by the index and
the number of entries in each index.
Viewing entities
In the Google Cloud console, go to the Databases page.
Go to Databases
Select the required database from the list of databases.
In the navigation menu, click Datastore Studio to view the entities that your application stored in
your database.
You should see:
You can also create, update, delete, and query entities on this page. Learn how
in the Quickstart .
Note: While individual entities are removed almost immediately, a namespace
container may remain visible for several days to a week after the final entity
within it is removed.
What's next?
Get details about Statistics in the Console .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
