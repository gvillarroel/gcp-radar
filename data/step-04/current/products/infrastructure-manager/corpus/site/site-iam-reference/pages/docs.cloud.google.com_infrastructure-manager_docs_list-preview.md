---
title: "View and list previews \_|\_ Infrastructure Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/infrastructure-manager/docs/list-preview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/infrastructure-manager/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/infrastructure-manager/docs/list-preview
  title: "View and list previews \_|\_ Infrastructure Manager \_|\_ Google Cloud Documentation"
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
View and list previews
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to list existing previews, and view the status
of a preview.
If you have not created a preview, see
Preview a deployment .
Before you begin
Ensure that you have the IAM permissions needed to view previews: roles/config.admin .
List previews
To list the previews in a specific location:
gcloud infra-manager previews list --location= LOCATION
Replace LOCATION with the location that contains the previews
you want to list. See
Infrastructure Manager locations for the
list of valid locations.
View details of a preview
After you create a preview, you might want to view details about the
deployment, including the following:
The state of the preview. View the state to verify if the preview
was successful, failed, or had any issues.
The version of Terraform that Infra Manager used to create the
preview.
To view details of a preview, use the following command:
gcloud infra-manager previews describe \
projects/ PROJECT_ID /locations/ LOCATION /previews/ PREVIEW_ID
Replace:
PROJECT_ID is the project ID where Infrastructure Manager runs.
LOCATION is the location where Infra Manager
runs. See Infrastructure Manager locations
for the list of valid locations.
PREVIEW_ID is the preview identifier of the preview.
What's next
Create a new preview .
Use Infra Manager to deploy resources .
Delete a preview .
Learn more about Terraform with Infra Manager .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
