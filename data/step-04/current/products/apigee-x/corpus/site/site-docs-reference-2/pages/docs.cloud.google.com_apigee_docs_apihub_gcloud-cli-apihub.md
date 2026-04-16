---
title: "gcloud CLI for API hub \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/apihub/gcloud-cli-apihub
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/apihub/release-notes
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/apihub/gcloud-cli-apihub
  title: "gcloud CLI for API hub \_|\_ Apigee \_|\_ Google Cloud Documentation"
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
gcloud CLI for API hub
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
This page describes how to install, authorize, and use the gcloud CLI for API hub.
The gcloud CLI apihub component lets you to manage your API resources within API hub directly from the command line. This includes registering APIs, creating versions and specifications, managing deployments, and configuring attributes or plugins
Before you begin
Install Google Cloud SDK . Alternatively, you can use the Google Cloud Shell , which comes with the SDK pre-installed.
Authorize access to gcloud CLI
Authorize access to the gloud CLI by following the steps described in
Authorizing Cloud SDK tools .
For example, to authorizes access using your user account and perform other common Cloud SDK setup steps, use the following
command:
gcloud CLI init
Follow the prompts to authenticate the account, grant access permissions, and initialize your Cloud SDK installation, as described in Initializing Cloud SDK .
Alternatively, to authorize access without performing any additional set up, use the following command:
gcloud CLI auth login
Follow the browser-based authorization flow to authenticate the account and grant access permissions. For more information about authorizing and revoking access to the gcloud CLI, see
Credentials .
Set up environment variables for gcloud CLI commands
Using environment variables can simplify your CLI commands. The following variables are commonly used in API hub operations:
Environment variable
Description
$PROJECT
Your Google Cloud project ID.
$LOCATION
The location of your API hub resources (for example, us-central1 ).
$API
The ID of your API resource.
$VERSION
The ID of a specific API version.
$SPEC
The ID of an API specification.
$DEPLOYMENT
The ID of an API deployment.
Use the gcloud CLI
The basic structure for API hub commands is as follows:
gcloud CLI apihub GROUP [ gcloud CLI_WIDE_FLAG …]
Common command groups
The following table lists some common command groups for the gcloud CLI apihub CLI.
Command group
Description
apis
Manage top-level API resources.
apis versions
Manage versions associated with an API.
apis versions specs
Manage API specifications.
deployments
Manage API deployments.
attributes
Manage user-defined and system attributes.
runtime-project-attachments
Manage attachments for runtime projects.
For more information about the available command groups and flags, see gcloud CLI apihub .
Command examples
The following examples show how to use common gcloud CLI apihub
Registering an API
gcloud CLI apihub apis create --api="my-api" --display-name="My New API" --project=$PROJECT --location=$LOCATION
Note: To create a new API, you must specify a display name and an ID using the --api flag.
Listing APIs
gcloud CLI apihub apis list --project=$PROJECT --location=$LOCATION
Adding a version to an API
gcloud CLI apihub apis versions create "v1" --api="my-api" --display-name="Version 1.0" --project=$PROJECT --location=$LOCATION
You can specify the version as a positional argument or using the --version flag.
Uploading a specification
gcloud CLI apihub apis versions specs create "openapi-spec" --api="my-api" --version="v1" --display-name="OpenAPI 3.0 Spec" --contents='{"openapi": "3.0.0", ...}' --contents-mime-type="application/json" --project=$PROJECT --location=$LOCATION
Considerations
Creating resources without specifying an ID is not supported in the CLI.
The --filter flag performs client-side filtering. gcloud CLI fetches all resources from the backend and then filters them locally, which may impact performance for large collections.
For the apis create and update commands, you must use the --api flag to specify the resource ID. Positional arguments for IDs are not supported for the top-level API resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
