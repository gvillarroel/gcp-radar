---
title: "Enabling an API in your Google Cloud project \_|\_ Cloud Endpoints with OpenAPI\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/endpoints/docs/openapi/enable-api
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/endpoints/docs/openapi
source_metadata:
  url: https://docs.cloud.google.com/endpoints/docs/openapi/enable-api
  title: "Enabling an API in your Google Cloud project \_|\_ Cloud Endpoints with\
    \ OpenAPI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Endpoints
OpenAPI
Send feedback
Enabling an API in your Google Cloud project
Stay organized with collections
Save and categorize content based on your preferences.
OpenAPI
| gRPC
When an API requires an API key and the API is associated with a
Google Cloud project that you don't have access to, you have the
following options to obtain an API key:
Option 1 : Ask a security admin to create an API key for you.
Option 2 : Ask a security admin to
grant you access to the project
so that you can create an API key in the same project that the API is
associated with.
Option 3 : Ask a security admin to
grant you access to enable the API
in your own Google Cloud project so that you can create an API key.
Before you begin
Make sure that billing is enabled for your Google Cloud project .
Enabling an API
If you used option 3 and asked someone to grant you access to enable the
API, follow the steps below to enable the API in your own Google Cloud
project.
To enable an API:
Console
In the Google Cloud console, go to APIs & services for your
project.
Go to APIs & Services
On the Library page, click Private APIs .
If you don't see the API listed, that means you haven't been granted
access to enable the API.
Click the API you want to enable. If you need help finding the API, use
the search field.
In the page that displays information about the API, click
Enable .
gcloud
Enter the following to display the project IDs for your
Google Cloud projects:
gcloud projects list
Using the applicable project ID from the previous step, set the default
project to the one in which you want to enable the API:
gcloud config set project YOUR_PROJECT_ID
Get a list of services that you can enable in your project:
gcloud services list --available
If you don't see the API listed, that means you haven't been granted
access to enable the API.
Using the applicable service name from the previous step, enable the
service:
gcloud services enable SERVICE_NAME
For more information on the preceding commands, see the
gcloud reference .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
