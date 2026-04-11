---
title: "Function Identity \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/functions/docs/securing/function-identity
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/functions/docs/concepts/iam
source_metadata:
  url: https://docs.cloud.google.com/functions/docs/securing/function-identity
  title: "Function Identity \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

If you are creating a new function, see the Console Quickstart on Cloud Run.
Home
Documentation
Application hosting
Cloud Run
Cloud Run functions
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Function Identity
This page provides supplemental information for configuring function identity for
functions created using the
gcloud functions commands or the
Cloud Functions v2 API .
If you've created or deployed functions using Cloud Run, see
Introduction to service identity and
Configure service identity for services
for a detailed description of configuring service identity. Cloud Run
refers to the function identity as the service identity .
For an introduction to the function identity concept, see the Cloud Run
Introduction to service identity guide.
Add a user-managed service account at deployment
When deploying a function using gcloud functions deploy , add the
--service-account flag. For example:
gcloud functions deploy FUNCTION_NAME --service-account SERVICE_ACCOUNT_EMAIL
Replace FUNCTION_NAME with your function name, and
SERVICE_ACCOUNT_EMAIL with the service account
email.
Update the service account of an existing function
You can update the runtime service account of an existing function.
When deploying a function using gcloud functions deploy , add the
--service-account flag:
gcloud functions deploy FUNCTION_NAME --service-account SERVICE_ACCOUNT_EMAIL
Replace FUNCTION_NAME with your function name, and
SERVICE_ACCOUNT_EMAIL with the service account.
The redeployed function now uses the new runtime service account.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
