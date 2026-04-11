---
title: "Delete previews \_|\_ Infrastructure Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/infrastructure-manager/docs/delete-preview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/infrastructure-manager/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/infrastructure-manager/docs/delete-preview
  title: "Delete previews \_|\_ Infrastructure Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Infrastructure as code
Infrastructure Manager
Guides
Send feedback
Delete previews
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to delete existing previews. When you delete a
preview, you delete the
preview's metadata .
Previews are automatically deleted if they target a deployment and that
deployment is updated or deleted.
If you have not created a preview, see
Preview a deployment .
If you want to delete a deployment, see
Delete a deployment .
Before you begin
Ensure that you have the IAM permissions needed to delete previews: roles/config.admin .
Delete a preview
To delete a preview:
gcloud infra-manager previews delete projects/ PROJECT_ID /locations/ LOCATION /previews/ PREVIEW_ID
Replace:
PROJECT_ID is the project ID where Infrastructure Manager runs.
LOCATION is the location where Infra Manager
runs. See Infrastructure Manager locations
for the list of valid locations.
PREVIEW_ID is the preview identifier of the preview.
What's next
Create a new preview .
View and list previews .
Use Infra Manager to deploy resources .
Learn more about Terraform with Infra Manager .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
