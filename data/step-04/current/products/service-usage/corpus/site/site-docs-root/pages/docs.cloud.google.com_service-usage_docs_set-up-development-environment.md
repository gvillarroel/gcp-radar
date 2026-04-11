---
title: "Quickstart: Set up Service Usage for a development environment \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/service-usage/docs/set-up-development-environment
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-usage/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-usage/docs/set-up-development-environment
  title: "Quickstart: Set up Service Usage for a development environment \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Service Usage
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Set up Service Usage for a development environment
This page describes how to set up your development environment to use the
Service Usage API.
For most operational use cases, the simplest way to
enable and disable services is to use Google Cloud console.
If you need to create
scripts, you can use the Google Cloud CLI.
If you need to
program against the Service Usage API, use one of
the client libraries .
To experiment with the API, you can follow the alternative setup instructions in this guide
and use the curl command to test the API without setting up a full application
development environment.
Set up to call the API directly
This section describes the basic steps necessary to set up your local
environment to experiment with the Service Usage API using the
curl command. It is aimed at developers who need to program against the
Service Usage API.
Note: You don't need to complete the instructions in this section if you want to
list, enable, or disable services using Google Cloud console or the gcloud command
line interface.
Enable the Service Usage API
To use the Service Usage API, you must first enable it in the
Google Cloud project you want to use it for:
Go to the Google Cloud console API Library page.
Go to the API Library page
Select the Google Cloud project that you want to use to
access the service.
On the API Library page, click Enable .
Ensure that your user account has the Service Usage Admin role.
Test with curl
Define a convenient shell alias for calling Google REST APIs:
alias gcurl='curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
Set an environment variable PROJECT_ID with the identifier of your
project. This can be the project id or number:
PROJECT_ID="my-project-id"
Ensure that you are logged into 'gcloud':
gcloud auth login
List the enabled APIs and services in this project:
gcurl "https://serviceusage.googleapis.com/v1/projects/ ${ PROJECT_ID } /services?filter=state:ENABLED&fields=services.config.title,services.config.name"
If you see output like this, then your setup is successful:
{
"services": [
{
"config": {
"name": "bigquery.googleapis.com",
"title": "BigQuery API"
}
},
{
"config": {
"name": "bigquerystorage.googleapis.com",
"title": "BigQuery Storage API"
}
},
...
Next steps
Follow Listing Services to list the APIs
and services that are enabled or available in your Google Cloud projects.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
