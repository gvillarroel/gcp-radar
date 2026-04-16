---
title: "Online serving types \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/online-serving-types
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/core-release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/online-serving-types
  title: "Online serving types \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Send feedback
Online serving types
Stay organized with collections
Save and categorize content based on your preferences.
Vertex AI Feature Store offers the following types of online serving that
you can use to serve features for online predictions:
Bigtable online serving
Optimized online serving
( Deprecated ), where you can choose one of the
following configurations:
Optimized online serving with public endpoint
Optimized online serving with Private Service Connect endpoint
Bigtable online serving
Bigtable online serving is suitable for large data volumes (in the
order of terabytes of data) with high data durability.
Bigtable online serving supports both
scheduled and continuous data sync
for its feature views.
Note that Bigtable online serving doesn't support embeddings management. If
you want to manage and serve embeddings, use
Vector Search .
To use Bigtable online serving, you need to perform the following steps:
Create an online store for Bigtable online serving.
Create a feature view instance.
Fetch feature values using Bigtable online serving.
Optimized online serving
Vertex AI Feature Store Optimized online serving is
deprecated . Beginning on
May 17, 2026, no new features will be added and
only critical patches will be provided. On February 17, 2027, the capability will be fully
sunset and APIs will no longer be available.
To improve latency and cost optimizations, migrate to
Bigtable online serving .
To efficiently store and serve embeddings, use the purpose-built
Vector Search .
With Optimized online serving, you can serve feature values from either
a public endpoint or a Private Service Connect endpoint.
All online store instances created for Optimized online serving support
embeddings management.
Optimized online serving supports scheduled data sync, but doesn't support
continuous data sync for feature views. If you want to use continuous data sync
to sync data from the BigQuery data source to your feature views
in near real-time, use Bigtable online serving.
Optimized online serving with public endpoint
By default, an online store created for Optimized online serving lets you
serve features with a public endpoint. To use Optimized online serving
with a public endpoint, you need to perform the following steps:
Create an online store for Optimized online serving with a public endpoint.
Create a feature view instance.
Fetch feature values using Optimized online serving from a public endpoint.
Optimized online serving with Private Service Connect endpoint
A Private Service Connect endpoint is a dedicated serving
endpoint. To use Optimized online serving with a
Private Service Connect endpoint, you need to perform the
following steps:
Create an online store for Optimized online serving with a Private Service Connect endpoint.
Create a feature view instance.
Fetch feature values using Optimized online serving from the Private Service Connect endpoint.
Set up online serving to serve null feature values or only non-null feature values
During online serving, if you want to serve only the latest feature values,
including null values, you must use the following setup:
Register your feature data source by creating a feature group
with the dense parameter set to true .
Choose Bigtable online serving when you create the online store instance .
Use the cron parameter to set up scheduled data sync when you
create your feature views .
If you use any other configuration while setting up your feature data source
and online serving, Vertex AI Feature Store serves only the
latest non-null feature values. If the latest value of a feature is null, then
Vertex AI Feature Store serves the most recent non-null historical
value for the feature. If a non-null historical value isn't available, then
Vertex AI Feature Store serves null as the feature value.
What's next
Learn how to create an online store instance .
Learn how to create a feature view .
Learn how to serve feature values .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
