---
title: "Getting started using the Apigee API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/get-started/api-get-started
knowledge_key: corpus
source_id: site-docs-reference-required-14
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/get-started/api-get-started
  title: "Getting started using the Apigee API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
Getting started using the Apigee API
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
The Apigee API can be used to programmatically develop and manage APIs with a set of RESTful operations.
You can use the Apigee API to integrate API proxy management into your organization's software development lifecycle (SDLC).
A common usage of the Apigee API is to write scripts
or code that deploy API proxies or that migrate API proxies from one environment to another, as part of a larger automated process that also
deploys or migrates other applications.
For more information, see Apigee API .
Enabling the Apigee API
Ensure that you have enabled the Apigee API. The simplest way to enable an API
for your project is to use the Apigee UI. For complete details, see
Step 1: Enable
required APIs .
Obtaining an OAuth 2.0 access token
The Apigee API supports OAuth 2.0 for user authentication. With OAuth 2.0, you exchange your Google Cloud
credentials for an access token that you can then use to make secure calls to the Apigee API. Once
you obtain a token, you do not need to exchange your credentials again until the token expires.
Note: Short-lived service account credentials are useful
for scenarios where you need to grant limited access to resources for trusted service accounts,
and they reduce the risk compared to using long-lived credentials like service account keys. For
more information,
see Generating an OAuth 2.0 access token .
Get a token using Google Cloud credentials
To get a token using your Google Cloud credentials:
Authorize gcloud to access the Cloud Platform with your Google user credentials:
gcloud auth login
Get a token for the currently active account:
export TOKEN=$(gcloud auth print-access-token)
When you call an Apigee API, pass the access token in the Authorization header.
For example:
curl "https://apigee.googleapis.com/v1/organizations" -H "Authorization: Bearer $TOKEN"
Get a token using a Google Cloud service account key
To get a token using a service account key for authorization:
Generate a key for your service account using the Google Cloud console,
as described in Creating and managing service account keys .
A JSON file that contains your service account credentials is downloaded to your computer.
Set the GOOGLE_APPLICATION_CREDENTIALS environment variable to the path where the
service account key is located:
export GOOGLE_APPLICATION_CREDENTIALS= your_sa_credentials_file .json
When you call an Apigee API, use the Google Cloud CLI to add an access token to the
Authorization header. For example:
curl "https://apigee.googleapis.com/v1/organizations" -H "Authorization: Bearer $(gcloud auth application-default print-access-token)"
Setting environment variables for Apigee API requests
The Apigee API and gcloud CLI examples provided throughout the documentation use one or more of the environment variables defined
in the following table.
By setting the environment variables upfront to meaningful values in your environment, you can copy and paste the example requests
to execute them in your own environment with minimal or no modifications.
Environment variable
Description
$API
Name of your API proxy.
$APIPRODUCT
Name of the API product.
$APP
ID of an app.
$DEVELOPER_EMAIL
Email address of the developer.
$ENV
Name of your environment, such as test or prod .
$ID
Resource ID.
$KEY
Consumer key.
$NAME
Name of your resource.
$ORG
Your Apigee organization.
$REV
Revision number of your API proxy.
$SHAREDFLOW
Name of your shared flow.
$TYPE
Resource type .
Using curl
The examples within this section use curl to demonstrate how to develop applications
using the Apigee API. curl is an open source, command-line tool for transferring data
with URL syntax, supporting common protocols such as HTTP and HTTPS.
The following table summarizes the curl command-line options used in the examples.
Option
Description
-d '{}' --data @ filename --data-binary @ filename
Defines the request body, which you can pass directly or by specifying a filename.
-F file=@ filename --form file=@ filename
Defines form-based data that you can pass by specifying a filename.
-H --header
Defines a request header.
You must pass the following information in the request header:
Authorization header: OAuth 2.0 token for user authentication, as described
in Obtaining an OAuth 2.0 access token .
Content-Type header: Content type of the request body being sent when
creating or updating a resource (POST, PATCH, PUT) using the API.
-X
Specifies the type of request (GET, POST, and so on).
For example:
curl "https://apigee.googleapis.com/v1/organizations/$ORG/apis" \
-X GET \
-H "Authorization: Bearer $TOKEN"
Where $TOKEN is set to your OAuth 2.0 access token, as described in
Obtaining an OAuth 2.0 access token .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
