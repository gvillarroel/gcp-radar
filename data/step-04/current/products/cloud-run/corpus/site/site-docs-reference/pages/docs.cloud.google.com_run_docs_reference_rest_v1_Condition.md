---
title: "Condition \_|\_ Cloud Run \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/reference/rest/v1/Condition
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/run/docs/reference/rest/v1/Condition
  title: "Condition \_|\_ Cloud Run \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Cloud Run
Reference
Send feedback
Condition
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Conditions show the status of reconciliation progress on a given resource.
Most resource use a top-level condition type "Ready" or "Completed" to show overall status with other conditions to checkpoint each stage of reconciliation. Note that if metadata.Generation does not equal status.ObservedGeneration, the conditions shown may not be relevant for the current spec.
JSON representation
{
"type" : string ,
"status" : string ,
"reason" : string ,
"message" : string ,
"lastTransitionTime" : string ,
"severity" : string
}
Fields
type
string
type is used to communicate the status of the reconciliation process. Types common to all resources include: * "Ready" or "Completed": True when the Resource is ready.
status
string
Status of the condition, one of True, False, Unknown.
reason
string
Optional. One-word CamelCase reason for the condition's last transition.
These are intended to be stable, unique values which the client may use to trigger error handling logic, whereas messages which may be changed later by the server.
message
string
Optional. Human readable message indicating details about the current status.
lastTransitionTime
string ( Timestamp format)
Optional. Last time the condition transitioned from one status to another.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
severity
string
Optional. How to interpret this condition. One of Error, Warning, or Info.
Conditions of severity Info do not contribute to resource readiness.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-24 UTC."],[],[]]
