---
title: "Overview of APIs and Client Libraries \_|\_ Data Catalog \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/data-catalog/docs/api-libraries-overview
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/data-catalog/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/data-catalog/docs/api-libraries-overview
  title: "Overview of APIs and Client Libraries \_|\_ Data Catalog \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Data Catalog is deprecated and will be discontinued on January 30, 2026. For steps to transition your Data Catalog users, workloads, and content to Dataplex Universal Catalog, see Transition from Data Catalog to Dataplex Universal Catalog .
Home
Documentation
Data analytics
Data Catalog
Reference
Send feedback
Overview of APIs and Client Libraries
Stay organized with collections
Save and categorize content based on your preferences.
Data Catalog offers several programmatic interfaces for
interaction, and we recommend using them in the following order:
Google Cloud Client Libraries :
Data Catalog client libraries are available in multiple
languages and are built on gRPC . These client libraries
provide a layer of abstraction on top of gRPC and handle the details of
operation polling and retries. For more information, see
Data Catalog client libraries .
Note: While the Cloud Client Libraries are the preferred library choice, you
can also use the
Google API Client Libraries
for Data Catalog. The "legacy" Google API Client Libraries
provide access to the REST interface, but not the gRPC APIs.
gRPC : If your preferred programming
language lacks a dedicated client library, you can still generate gRPC client
libraries for Data Catalog using any gRPC-supported language.
This requires the
protocol buffers
service definition, which is available in the
GitHub repository .
To generate and use your client, refer to the instructions on
grpc.io for your chosen language.
REST API : if you're unable
to use Data Catalog's client libraries or the gRPC API, use the
REST API.
For more information, see the following:
Google Cloud APIs
Client libraries explained
API errors
HTTP response status codes
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
