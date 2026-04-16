---
title: "AllowlistSynchronizer \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/allowlistsynchronizer
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-organization
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/allowlistsynchronizer
  title: "AllowlistSynchronizer \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Reference
Send feedback
AllowlistSynchronizer
Stay organized with collections
Save and categorize content based on your preferences.
AllowlistSynchronizer is a custom resource definition (CRD) that lets you
install and synchronize allowlists for Google Kubernetes Engine (GKE)
Autopilot partner workloads. To learn how to use this custom resource,
see
Run privileged workloads from GKE Autopilot partners .
apiVersion : auto.gke.io/v1
kind : AllowlistSynchronizer
metadata :
name : example-allowlist-synchronizer
spec :
projectNumber : 1234567890 # Only required for custom allowlist installation
bucketName : example-bucket # Only required for custom allowlist installation
allowlistPaths :
- "example-partner/example-scanner/*"
- "example-partner/example-logger/example-log-allowlist-1.1.7.yaml"
status :
conditions :
- type : Ready
status : "False"
reason : "SyncError"
message : "some allowlists failed to sync: example-log-allowlist-1.1.7.yaml"
lastTransitionTime : "2024-10-12T10:00:00Z"
observedGeneration : 2
managedAllowlistStatus :
- filePath : "example-partner/example-scanner/example-scan-allowlist-1.0.0.yaml"
generation : 1
phase : Installed
lastSuccessfulSync : "2024-10-10T10:00:00Z"
- filePath : "example-partner/example-logger/example-log-allowlist-1.1.7.yaml"
phase : Failed
lastError : "Initial install failed: the contents of the allowlist are invalid"
lastSuccessfulSync : "2024-10-08T10:00:00Z"
- filePath : "example-partner/example-scanner/example-scan-allowlist-1.0.0.yaml"
phase : Stale
lastError : "Sync failed: the contents of the allowlist has been updated and is no longer valid."
lastSuccessfulSync : "2024-10-08T10:00:00Z"
lastSyncAttempt : "2024-10-12T10:00:00Z"
AllowlistSynchronizer specification
allowlistPaths : [] string
bucketName : string
projectNumber : integer
Fields
allowlistPaths
Required
string[]
A list of paths to specific files or to directories that contain
allowlist files.
File: path/to/allowlist.yaml
Directory: path/to/allowlist/*
bucketName
Optional
Requires GKE version 1.35 or later
string
The name of the Cloud Storage bucket that contains custom allowlist files.
This field is only required if using allowlists from a customer-owned Cloud Storage bucket .
projectNumber
Optional
Requires GKE version 1.35 or later
integer
The number of the Google Cloud project that hosts the Cloud Storage
bucket containing custom allowlist files.
This field is only required if using allowlists from a customer-owned Cloud Storage bucket .
AllowlistSynchronizer status
conditions :
- type : string
status : boolean
reason : string
message : string
lastTransitionTime : string
observedGeneration : int
managedAllowlistStatus :
- filePath : string
generation : int
phase : string
lastSuccessfulSync : string
lastError : string
lastSyncAttempt : string
Fields
conditions[]
object
List of status conditions for the AllowlistSynchronizer .
CI/CD tooling can use this field to wait for the allowlist to install
before deploying dependent workloads.
conditions.type
string
Condition type. The value is always Ready , which
indicates that the most recent sync attempt was successful.
conditions.status
boolean
Condition status:
True : allowlists are installed and up to date.
False : allowlists are not installed or are out of date.
conditions.reason
string
Short description of the condition's status.
conditions.message
string
Detailed description of the condition's status.
conditions.lastTransitionTime
string
Timestamp of the most recent status change.
conditions.observedGeneration
int
The current version of the AllowlistSynchronizer object.
managedAllowlistStatus[]
object
Array that tracks the status of each allowlist file that the
AllowlistSynchronizer is managing.
managedAllowlistStatus.filePath
string
The fully-qualified resource name of the allowlist file.
managedAllowlistStatus.generation
string
The current version of the allowlist file in the cluster.
managedAllowlistStatus.phase
string
The current state of the allowlist file.
Installed : the allowlist file is installed in the
cluster and is up-to-date with the remote version.
Failed : the allowlist file failed to install.
Stale : the allowlist file is installed in the
cluster, but is out of date with the remote version.
managedAllowlistStatus.lastSuccessfulSync
string
Timestamp of the most recent successful synchronization of the
allowlist file.
managedAllowlistStatus.lastError
string
The most recent error message. This field isn't displayed if no errors
occurred.
lastSyncAttempt
string
The timestamp of the last change to the conditions
field.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
