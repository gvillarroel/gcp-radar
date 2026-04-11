---
title: "Method: projects.locations.instances.snapshots.create \_|\_ Filestore \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances.snapshots/create
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/filestore/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances.snapshots/create
  title: "Method: projects.locations.instances.snapshots.create \_|\_ Filestore \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Filestore
Reference
Send feedback
Method: projects.locations.instances.snapshots.create
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it!
Creates a snapshot.
HTTP request
POST https://file.googleapis.com/v1/{parent=projects/*/locations/*/instances/*}/snapshots
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The Filestore Instance to create the snapshots of, in the format projects/{projectId}/locations/{location}/instances/{instanceId}
Query parameters
Parameters
snapshotId
string
Required. The ID to use for the snapshot. The ID must be unique within the specified instance.
This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.
Request body
The request body contains an instance of Snapshot .
Response body
If successful, the response body contains a newly created instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-11 UTC."],[],[]]
