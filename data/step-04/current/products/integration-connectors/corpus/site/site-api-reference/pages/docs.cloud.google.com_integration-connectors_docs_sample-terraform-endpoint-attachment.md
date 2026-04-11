---
title: "Sample terraform template for endpoint attachment creation \_|\_ Integration\
  \ Connectors \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-endpoint-attachment
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/integration-connectors/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-endpoint-attachment
  title: "Sample terraform template for endpoint attachment creation \_|\_ Integration\
    \ Connectors \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Integration Connectors
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Sample terraform template for endpoint attachment creation
The following is a sample terraform template for endpoint attachment creation.
Note: This sample is not specific to any connector. It just shows how an endpoint attachment creation terraform
template looks like. You must repurpose this sample based on your requirements.
resource "google_integration_connectors_endpoint_attachment" "default" {
name = "test-endpoint-attachment"
location = "us-central1"
description = "tf created description"
service_attachment = "projects/connectors-example/regions/us-central1/serviceAttachments/test"
labels = {
foo = "bar"
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
