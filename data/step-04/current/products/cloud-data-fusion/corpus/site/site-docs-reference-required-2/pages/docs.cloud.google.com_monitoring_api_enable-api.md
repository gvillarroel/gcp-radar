---
title: "Enable the Monitoring API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/monitoring/api/enable-api
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/monitoring/api/resources
source_metadata:
  url: https://docs.cloud.google.com/monitoring/api/enable-api
  title: "Enable the Monitoring API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Monitoring
Reference
Send feedback
Enable the Monitoring API
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to enable and authorize use of the
Monitoring API v3. You must enable this API before you can use it.
Enable the Monitoring API
To determine whether the Monitoring API is enabled or to enable the
API, use either the Google Cloud console or the Google Cloud CLI.
Google Cloud console
In the Google Cloud console, select the Google Cloud project for
which you want to enable the API,
and then go to the APIs & Services page:
Go to APIs & Services
Click the Enable APIs and Service button.
Search for "Monitoring".
In the search results, click through to "Stackdriver Monitoring API".
If "API enabled" is displayed, then the API is already enabled. If
not, then click Enable .
gcloud CLI
If you have not already installed the Google Cloud CLI on your
workstation, see
Installing the gcloud CLI .
To see if the Monitoring API is enabled, run the following
command on your workstation, after replacing PROJECT_ID with the
ID of the project for which you want to enable the API:
gcloud services list --project= PROJECT_ID
If monitoring.googleapis.com appears in the output, the API is
enabled.
If the API is not enabled, then run the following command to enable it:
gcloud services enable monitoring --project= PROJECT_ID
For more information, see
gcloud services .
Authorize use of the Monitoring API
Access to the Monitoring API is controlled by
Identity and Access Management (IAM) roles and permissions.
There is a permission associated with each method, and
permissions for related methods are clustered into roles, which can then
be granted to users. For more information, see
Control access with IAM .
After access to an API is authorized, the API can be used from anywhere.
For example, you can call the timeSeries.list
method from your local workstation. You can also use the API to send
metrics against any entity that can be represented as a monitored resource.
See Monitored-resource types for user-defined metrics
for the list of available types.
If you are writing an application that uses the
recommended client libraries , these libraries
authorize your application by using
Application Default Credentials .
You might also be able to use API keys in some situations, but service accounts
are generally recommended. API keys are useful in clients like
browsers and mobile applications that don't have a backend server.
For more information, see Using API Keys .
You can find out more about authentication and authorization
in our Authentication guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
