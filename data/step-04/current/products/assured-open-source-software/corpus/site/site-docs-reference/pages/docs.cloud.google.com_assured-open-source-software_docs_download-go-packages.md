---
title: "Download Go packages using direct repository access for the free tier \_|\_\
  \ Assured Open Source Software \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-open-source-software/docs/download-go-packages
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-open-source-software/docs/download-go-packages
source_metadata:
  url: https://docs.cloud.google.com/assured-open-source-software/docs/download-go-packages
  title: "Download Go packages using direct repository access for the free tier \_\
    |\_ Assured Open Source Software \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Assured Open Source Software
Guides
Send feedback
Download Go packages using direct repository access for the free tier
Stay organized with collections
Save and categorize content based on your preferences.
In the free tier, Assured Open Source Software packages are hosted in a Google-managed
Artifact Registry repository.
This document explains how you can connect to the Artifact Registry repository for
Assured OSS to directly access and download the Go packages.
This document applies to the free tier only. For the premium tier, see Download
Go packages using direct repository access .
Before you begin
To get the permissions that
you need to get the base64-encoded string of the service account key,
ask your administrator to grant you the
Service Account Key Admin ( roles/iam.serviceAccountKeyAdmin )
IAM role on your organization.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Enable the Assured OSS free tier .
Validate
connectivity to Assured OSS for the requested service accounts.
Enable the Artifact Registry
API for the parent Google Cloud project of the service accounts used to
access Assured OSS.
Install the latest version of the Google Cloud CLI .
If you've installed the Google Cloud CLI previously, check that you have
the latest version by running this command:
gcloud components update
Set up authentication
To set up authentication, see Set up authentication for
Go .
Install Go packages
To install packages, see Use a module as a
dependency .
Access packages that aren't available in Assured OSS
You can configure access to packages that aren't available in the
Artifact Registry repository for
Assured OSS.
To configure access, when you set up authentication, configure the GOPROXY
environment variable to include https://proxy.golang.org . Add
https://proxy.golang.org directly to the comma-separated list after the
Artifact Registry repository URL.
For example:
export GOPROXY=https://us-go.pkg.dev/cloud-aoss/assuredoss-go-free,https://proxy.golang.org,direct
List all Go packages available in Assured OSS
To use an
API
to get a list of all the Go packages in the Artifact Registry repository, see
List all Go packages available in Assured OSS .
What's next
Download Go packages using direct repository access
Set up virtual repository access
Supported Go packages
Access security metadata using Cloud Storage
Access security metadata using Artifact Analysis API
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
