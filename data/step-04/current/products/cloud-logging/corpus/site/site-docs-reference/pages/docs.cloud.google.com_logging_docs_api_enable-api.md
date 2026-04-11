---
title: "Enable the Logging API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/api/enable-api
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/api/enable-api
  title: "Enable the Logging API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Logging
Reference
Send feedback
Enable the Logging API
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to enable and authorize use of the
Logging API v2.
Enable the API
The Logging API must be enabled before it can be used. You can
check the status of the API and, if necessary, enable the API if necessary by
using either the Google Cloud console or Google Cloud CLI.
Google Cloud console
In the Google Cloud console, select the Google Cloud project for
which you want to enable the API, and then go to the APIs & Services
page:
Go to APIs & Services
Click the Enable APIs and Services button.
Search for "Logging".
In the search results, click Cloud Logging API .
If "API enabled" is displayed, then the API is already enabled. If
not, then click Enable .
gcloud CLI
If you haven't already installed the Google Cloud CLI on your
workstation, see
Installing the gcloud CLI .
To see if the Logging API is enabled, run the following
command on your workstation, after replacing PROJECT_ID with the
ID of the project for which you want to enable the API:
gcloud services list --project= PROJECT_ID
If logging.googleapis.com appears in the output, the API is
enabled.
If the API isn't enabled, then run the following command to enable it:
gcloud services enable logging --project= PROJECT_ID
For more information about listing, enabling, and disabling APIs, see
gcloud services .
Authorize use of the API
Before you can use the Cloud Logging API, you must authorize users to access it.
Access to the API is controlled by Identity and Access Management (IAM) roles and
permissions. There is a permission associated with each method, and
permissions for related methods are clustered into roles, which can then
be granted to users. For more information, see
Access control with IAM .
After access to the API is authorized, the API can be used from anywhere.
For example, you can use the entries.list
method from your local workstation to read log data from your Google Cloud
resources.
The recommended Logging client libraries use
Application Default Credentials to automatically
find credentials. For more information, see
Authenticate for using client libraries .
You can find out more about authentication for Cloud
APIs in the Cloud authentication documentation .
Use client libraries
After you've enabled and authorized the use of the API, you're ready
to start writing code. To get started using the Logging client
libraries, see Logging client libraries .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
