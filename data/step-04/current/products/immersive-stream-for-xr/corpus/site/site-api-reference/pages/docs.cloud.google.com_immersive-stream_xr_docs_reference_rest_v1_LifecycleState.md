---
title: "LifecycleState \_|\_ Immersive Stream for XR \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/immersive-stream/xr/docs/reference/rest/v1/LifecycleState
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/immersive-stream/xr/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/immersive-stream/xr/docs/reference/rest/v1/LifecycleState
  title: "LifecycleState \_|\_ Immersive Stream for XR \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Immersive Stream for XR
Reference
Send feedback
LifecycleState
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
State
Describes the lifecycle state of an Immersive Stream for XR resource.
JSON representation
{
"state" : enum ( State ) ,
"description" : string
}
Fields
state
enum ( State )
Current lifecycle state of the resource.
description
string
Human readable message describing details about the current state.
State
Enums
STATE_UNSPECIFIED
Unspecified state.
READY
Resource is ready and available for use.
IN_USE
Resource is in use (referenced by other resources). In order to delete the resource, it must go through deprecation process to ensure it's no longer in use by other resources.
CREATING
Resource is being created.
UPDATING
Resource is being updated.
DELETING
Resource is being deleted.
ERROR
Resource encountered an error and is in unknown state.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
