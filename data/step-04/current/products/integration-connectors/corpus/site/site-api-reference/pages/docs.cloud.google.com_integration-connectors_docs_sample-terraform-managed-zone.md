---
title: "Sample terraform template for managed zone creation \_|\_ Integration Connectors\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-managed-zone
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/integration-connectors/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-managed-zone
  title: "Sample terraform template for managed zone creation \_|\_ Integration Connectors\
    \ \_|\_ Google Cloud Documentation"
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
Sample terraform template for managed zone creation
The following is a sample terraform template for managed zone creation.
Note: This sample is not specific to any connector. It just shows how a managed zone creation terraform
template looks like. You must repurpose this sample based on your requirements.
resource "google_integration_connectors_managed_zone" "test_managed_zone" {
name = "test-managed-zone"
description = "tf created resource"
labels = {
intent = "example"
}
target_project = data.google_project.target_project.project_id
target_vpc = "test"
dns = google_dns_managed_zone.default.dns_name
depends_on = [google_project_iam_member.default]
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
