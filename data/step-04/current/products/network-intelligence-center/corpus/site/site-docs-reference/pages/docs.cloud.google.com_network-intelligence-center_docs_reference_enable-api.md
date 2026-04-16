---
title: "Enable the Network Management API \_|\_ Network Intelligence Center \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/reference/enable-api
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/reference/enable-api
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/reference/enable-api
  title: "Enable the Network Management API \_|\_ Network Intelligence Center \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Intelligence Center
Reference
Send feedback
Enable the Network Management API
Stay organized with collections
Save and categorize content based on your preferences.
Before you can run Connectivity Tests or configure VPC Flow Logs, you
must enable the Network Management API.
Enabling the API is required in order to use the API
itself, the Google Cloud CLI, or the Google Cloud console.
You can check API status or enable the API by using a gcloud command or by
using the Google Cloud console. You can also authorize users
to access the API.
Enable the API
Use one of the following methods to enable the API.
Console
When you load Connectivity Tests or VPC Flow Logs
in the Google Cloud console for the first time for a specific project. To enable
the API click Enable Network Management API .
gcloud
If you have not already installed the Google Cloud CLI on your workstation,
see the gcloud CLI documentation to do so.
To check if the Network Management API is enabled, run the following
command on your workstation:
gcloud services list
If networkmanagement.googleapis.com appears in the command output,
the API is enabled.
If the API is not enabled, run the following command to enable it.
For more information, see gcloud services .
gcloud services enable networkmanagement.googleapis.com
Authorize use of the API
Access to the Network Management API is controlled by Identity and Access Management
roles and permissions. Permissions for related methods are clustered into roles,
which you can then grant to users.
For more information, see the following documents:
Roles and permissions
Managing access control for Connectivity Tests
Use the API Explorer
You can test Network Management API commands by using the
API Explorer. In the Network Management API reference document,
use the Try this API column to explore API fields and
run a test .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
