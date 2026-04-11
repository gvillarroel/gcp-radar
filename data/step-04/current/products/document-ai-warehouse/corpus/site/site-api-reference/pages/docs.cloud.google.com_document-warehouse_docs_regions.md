---
title: "Regional and multi-regional support \_|\_ Document AI Warehouse \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/document-warehouse/docs/regions
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/document-warehouse/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/document-warehouse/docs/regions
  title: "Regional and multi-regional support \_|\_ Document AI Warehouse \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI Warehouse
Reference
Send feedback
Regional and multi-regional support
Stay organized with collections
Save and categorize content based on your preferences.
Caution : Document AI Warehouse is deprecated and will no longer be available on Google Cloud
after January 16, 2025. To safeguard your data, migrate any documents currently saved in Document AI Warehouse to an alternative like Cloud Storage.
Verify that your data migration is completed before the discontinuation date to prevent any data loss. See Deprecations for details.
You must specify either a regional or multi-regional location for data storage and document processing.
Document AI Warehouse supports the following multi-region locations:
us (United States)
eu (Europe)
Locations
Document AI Warehouse offers you some control over where the resources for your
project are stored and processed. In particular, when you
provision and initialize the resources ,
you must choose a location to store and process your data.
By default Document AI Warehouse stores and processes resources in a US
location.
If you choose the European Union location, Google will store your
data and process it only in the European Union. You and your users can access
the data from any location.
Setting the location using the API
You must specify your processor's location whenever you send a processing
request via the API.
For example, if your processor is configured to store and process your data in
the European Union, then use the URI eu-contentwarehouse.googleapis.com :
Method / endpoint format
Create document
https:// eu-contentwarehouse .googleapis.com/v1/projects/$PROJECT_ID/locations/ eu /documents
Search document
https:// eu-contentwarehouse .googleapis.com/v1/projects/$PROJECT_ID/locations/ eu /documents:search
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
