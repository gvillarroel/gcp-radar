---
title: "Overview: Connect app output to a data destination \_|\_ Vertex AI Vision\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision-ai/docs/connect-data-destination
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision-ai/docs/build-app
source_metadata:
  url: https://docs.cloud.google.com/vision-ai/docs/connect-data-destination
  title: "Overview: Connect app output to a data destination \_|\_ Vertex AI Vision\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Vision
Guides
Send feedback
Overview: Connect app output to a data destination
Stay organized with collections
Save and categorize content based on your preferences.
After you
create the
data ingestion stream and
add the
processing nodes to your app, you
must choose where to send the processed data. This data destination
("data sink") is the end point of your app
graph that accepts stream data without producing any stream data. The
destination you choose depends on how you use the app output data.
In the Google Cloud console, data destinations are available in the
Connectors section of the app graph page.
You can connect app output data to the following data destinations:
Vision Warehouse : Store original or analyzed video data that you
can view and query. Using a Vision Warehouse
allows you to specify annotations on whole or partial video clips.
For more information about sending app output data to a
Vision Warehouse, see
Connect and store data to a warehouse .
BigQuery : Store data in BigQuery to use its offline
analytics capabilities. Using BigQuery
allows you to query streaming data, access and share analytical insights,
create reports and dashboards, and export BigQuery ML models for
online prediction.
For more information about sending app output data to BigQuery, see
Connect and store data to BigQuery .
Live stream data : If you want more granular control to act on real-time
analytics, you can receive the live output from your app.
For example, you can write code that uses live occupancy
count data to programmatically change staffing allocation.
For more information about directly streaming app output data, see
Enable live stream output .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
