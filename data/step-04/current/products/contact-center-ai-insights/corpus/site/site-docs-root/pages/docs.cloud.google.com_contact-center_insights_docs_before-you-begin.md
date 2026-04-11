---
title: "Before you begin \_|\_ Customer Experience Insights \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/insights/docs/before-you-begin
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/insights/docs
source_metadata:
  url: https://docs.cloud.google.com/contact-center/insights/docs/before-you-begin
  title: "Before you begin \_|\_ Customer Experience Insights \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Customer Experience Insights
Guides
Send feedback
Before you begin
Stay organized with collections
Save and categorize content based on your preferences.
You must enable the following APIs for conversation data processing in Customer Experience Insights:
CX Insights API to use CX Insights.
Cloud Storage API to ingest conversations into CX Insights.
Speech-to-Text API to upload audio files.
Cloud Data Loss Prevention API to perform redaction on audio or transcript files.
Dialogflow API, which is required for Dialogflow runtime integration and Topic modeling V1.
This quickstart walks you through the following actions:
Enable the Cloud Storage API, Cloud Data Loss Prevention API, Speech-to-Text, and Dialogflow APIs.
Enable the CX Insights API.
Successfully send a request to the CX Insights API and receive a response.
Enable the Cloud Storage API, Cloud Data Loss Prevention API, Speech-to-Text, and Dialogflow APIs.
You must enable the Cloud Storage API before you can use Cloud Storage. To enable APIs:
Navigate to the Google Cloud console .
Click Go to APIs overview :
On the APIs & Services page that appears, click Cloud Storage .
If you haven't already enabled this API, click Enable .
Repeat the preceding steps for the Speech-to-Text API , Cloud Data Loss Prevention API , and the Dialogflow API .
Set up Insights API access
Navigate to the Google Cloud console .
Click the project selector menu:
Select a pre-existing project or create a new project.
Enter Customer Experience Insights API into the Google Cloud console search bar.
Click the option that pops up and select Enable .
Install and set up the Google Cloud SDK.
Create local authentication credentials for your user account:
gcloud auth application-default login
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Verify your setup by entering the following CURL command, which lists all of your
Insights conversations. It should return an empty dictionary:
curl - H "Authorization: Bearer $(gcloud auth application-default print-access-token)" "https://contactcenterinsights.googleapis.com/v1/projects/<var>project-id</var>/locations/us-central1/conversations"
Optional: Use CX Insights with VPCSC
To use CX Insights with VPC Service Controls (VPC Service Controls), add
CX Insights to your security perimeter. See the
VPCSC documentation for more information.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
