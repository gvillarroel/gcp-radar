---
title: "Download Go packages using direct repository access \_|\_ Security Command\
  \ Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/aoss-download-go-packages
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/aoss-download-go-packages
  title: "Download Go packages using direct repository access \_|\_ Security Command\
    \ Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Guides
Send feedback
Download Go packages using direct repository access
Stay organized with collections
Save and categorize content based on your preferences.
Enterprise service tier
After you integrate Assured OSS with
Security Command Center , Assured Open Source Software packages are hosted in an Artifact Registry
repository that is created in a project that you control.
This document explains how you can connect to the Artifact Registry repository for
Assured OSS to directly access and download the Go packages.
This document applies to the Assured OSS premium tier only. For
the free tier, see Download Go packages using direct repository access for
the free tier .
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
Integrate Assured OSS with
Security Command Center .
Validate
connectivity to Security Command Center for the requested service accounts.
Install the latest version of the Google Cloud CLI .
If you've installed the Google Cloud CLI previously, check that you have
the latest version by running this command:
gcloud components update
Set up authentication
To set up authentication, see Set up authentication for
Go .
Download Go packages
In gcloud CLI, install Go 1.15 or
later.
Install the gcloud CLI add-on for Go:
gcloud components install package-go-module
Instruct Go to download modules from the Assured OSS
repository:
export GOPROXY=https://us-go.pkg.dev/ PROJECT_ID /assuredoss-go
Replace PROJECT_ID with the ID of the project that you
selected when you set up Assured OSS.
Exclude the module that you're developing from being checked using the public
checksum database:
export GONOSUMDB=MODULE_PATH_REGEX
Add your Artifact Registry credentials to your netrc file with the Go
credential helper:
GOPROXY=proxy.golang.org \
go run github.com/GoogleCloudPlatform/artifact-registry-go-tools/cmd/auth@v0.1.0 \
add-locations --locations=us \
--json_key= KEY_FILENAME .json
What's next
Access security metadata and verify packages in the premium tier .
Review the list of supported Go packages .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
