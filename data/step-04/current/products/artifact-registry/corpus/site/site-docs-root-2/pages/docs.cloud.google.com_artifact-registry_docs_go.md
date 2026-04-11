---
title: "Work with Go modules \_|\_ Artifact Registry \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/go
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/go
  title: "Work with Go modules \_|\_ Artifact Registry \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Artifact Registry
Guides
Send feedback
Work with Go modules
Stay organized with collections
Save and categorize content based on your preferences.
Artifact Registry supports Go modules and semantic versioning independent of your
version control system. Go modules stored in Artifact Registry can be used
alongside other public or private modules in your Go projects.
Overview
To get familiar with storing Go modules in Artifact Registry, you can try
the quickstart .
When you're ready to learn more, read the following information:
Create a Go module repository for your packages.
Grant permissions to the account that
will connect with the repository. Service accounts for common integrations
with Artifact Registry have default permissions for
repositories in the same project.
Set up authentication to Artifact Registry for Go .
Manage your Go modules .
Learn about semantic versioning in Go .
Learn how to create remote and
virtual repositories .
Read about how remote and virtual repositories can be used in this
repository usage example .
Audit logging
To view Go log entries in Cloud Logging, you must enable
DATA_WRITE logging.
When you upload a Go module to a repository, the operation is logged as
UploadGoModule . Artifact Registry logs the following specific methods for
Go repositories:
List versions in a module
Go-ListVersions
View module information
Go-ViewModInfo
Download the go.mod File
Go-DownloadModFile
Download the zip File
Go-DownloadZipFile
For information about other Artifact Registry log entries, see
View audit logs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
