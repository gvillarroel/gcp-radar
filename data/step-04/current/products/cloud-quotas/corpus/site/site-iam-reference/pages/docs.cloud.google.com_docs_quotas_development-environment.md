---
title: "Set up the Cloud Quotas API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/docs/quotas/development-environment
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/docs/quotas/permissions
source_metadata:
  url: https://docs.cloud.google.com/docs/quotas/development-environment
  title: "Set up the Cloud Quotas API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Cloud Quotas
Guides
Send feedback
Set up the Cloud Quotas API
Stay organized with collections
Save and categorize content based on your preferences.
To use the Cloud Quotas API, you must first enable it for your
Google Cloud project. This document describes how to enable the Cloud Quotas API.
Enable the API
You can enable the Cloud Quotas API by using the Google Cloud console or the
Google Cloud CLI .
Console
Go to the Google Cloud console API Library page.
Go to API Library
Select the Google Cloud project that you want to access the API.
On the API Library page, enable Cloud Quotas API .
Make sure that your user account has the required IAM
roles .
gcloud
Before you begin
Authenticate to the gcloud CLI before you use it to enable
APIs. For more information about the authentication process, see
Authorize the gcloud CLI .
Enable the API
Run the gcloud services enable
command and specify the Cloud Quotas API:
gcloud services enable cloudquotas.googleapis.com --project= PROJECT_ID
Replace PROJECT_ID with the ID of the project
that needs access to the Cloud Quotas API. You can find your project ID on the
Welcome page of the Google Cloud console.
To confirm that the Cloud Quotas API is enabled in your project, run the
gcloud services list command
and filter for cloudquotas.googleapis.com by passing the output to a
command such as grep or using a gcloud CLI
filter :
gcloud services list --filter="cloudquotas.googleapis.com"
What's next
About the Cloud Quotas API
Cloud Quotas API reference
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
