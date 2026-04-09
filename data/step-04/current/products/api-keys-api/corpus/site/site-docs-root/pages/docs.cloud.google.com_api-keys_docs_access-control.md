---
title: "Access control with IAM \_|\_ API Keys API Documentation \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/api-keys/docs/access-control
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/api-keys/docs
source_metadata:
  url: https://docs.cloud.google.com/api-keys/docs/access-control
  title: "Access control with IAM \_|\_ API Keys API Documentation \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
API Keys API Documentation
Guides
Send feedback
Access control with IAM
Stay organized with collections
Save and categorize content based on your preferences.
API Keys uses Identity and Access Management to manage access to the keys.
This page explains the IAM roles and permissions related to
API Keys and how to use them to control access.
IAM permissions
The following table shows the required permissions for each API Keys API
method. This information is also documented in the
API Reference .
Method
Required Permission(s)
projects.locations.keys.create
apikeys.keys.create
projects.locations.keys.delete
apikeys.keys.delete
projects.locations.keys.get
apikeys.keys.get
projects.locations.keys.getKeyString
apikeys.keys.getKeyString
projects.locations.keys.list
apikeys.keys.list
projects.locations.keys.patch
apikeys.keys.update
projects.locations.keys.undelete
apikeys.keys.undelete
operations.get
serviceusage.operations.get
keys.lookupKey
apikeys.keys.undelete
IAM roles
With Identity and Access Management, permissions are granted by binding users to roles. For more
information about roles and permissions see
Understanding Roles .
The following table lists the predefined roles that apply to API Keys.
Role
Permissions
roles/viewer
apikeys.keys.get
apikeys.keys.lookup
apikeys.keys.list
apikeys.keys.getKeyString
roles/editor and roles/owner
apikeys.keys.get
apikeys.keys.lookup
apikeys.keys.list
apikeys.keys.getKeyString
apikeys.keys.create
apikeys.keys.delete
apikeys.keys.undelete
apikeys.keys.update
serviceusage.operations.get
roles/serviceusage.apiKeysViewer
apikeys.keys.get
apikeys.keys.lookup
apikeys.keys.list
apikeys.keys.getKeyString
roles/serviceusage.apiKeysAdmin
apikeys.keys.get
apikeys.keys.lookup
apikeys.keys.list
apikeys.keys.getKeyString
apikeys.keys.create
apikeys.keys.delete
apikeys.keys.undelete
apikeys.keys.update
serviceusage.operations.get
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
