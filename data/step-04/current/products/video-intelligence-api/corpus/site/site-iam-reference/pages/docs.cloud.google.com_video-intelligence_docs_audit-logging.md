---
title: "Video Intelligence API audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/video-intelligence/docs/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/video-intelligence/docs/streaming/docker-kubernetes
source_metadata:
  url: https://docs.cloud.google.com/video-intelligence/docs/audit-logging
  title: "Video Intelligence API audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Video Intelligence API
Guides
Send feedback
Video Intelligence API audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Video Intelligence API. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Video Intelligence API audit logs use the service name videointelligence.googleapis.com .
Filter for this service:
protoPayload . serviceName = "videointelligence.googleapis.com"
Audit logs for each API interface
google.cloud.videointelligence.v1.VideoIntelligenceService
The following audit logs are associated with methods belonging to
google.cloud.videointelligence.v1.VideoIntelligenceService .
AnnotateVideo
Method : google.cloud.videointelligence.v1.VideoIntelligenceService.AnnotateVideo
Audit log type : Data access
Permissions :
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.videointelligence.v1.VideoIntelligenceService.AnnotateVideo"
google.cloud.videointelligence.v1beta2.VideoIntelligenceService
The following audit logs are associated with methods belonging to
google.cloud.videointelligence.v1beta2.VideoIntelligenceService .
AnnotateVideo
Method : google.cloud.videointelligence.v1beta2.VideoIntelligenceService.AnnotateVideo
Audit log type : Data access
Permissions :
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.videointelligence.v1beta2.VideoIntelligenceService.AnnotateVideo"
google.cloud.videointelligence.v1p1beta1.VideoIntelligenceService
The following audit logs are associated with methods belonging to
google.cloud.videointelligence.v1p1beta1.VideoIntelligenceService .
AnnotateVideo
Method : google.cloud.videointelligence.v1p1beta1.VideoIntelligenceService.AnnotateVideo
Audit log type : Data access
Permissions :
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.videointelligence.v1p1beta1.VideoIntelligenceService.AnnotateVideo"
google.cloud.videointelligence.v1p2beta1.VideoIntelligenceService
The following audit logs are associated with methods belonging to
google.cloud.videointelligence.v1p2beta1.VideoIntelligenceService .
AnnotateVideo
Method : google.cloud.videointelligence.v1p2beta1.VideoIntelligenceService.AnnotateVideo
Audit log type : Data access
Permissions :
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.videointelligence.v1p2beta1.VideoIntelligenceService.AnnotateVideo"
google.cloud.videointelligence.v1p3beta1.VideoIntelligenceService
The following audit logs are associated with methods belonging to
google.cloud.videointelligence.v1p3beta1.VideoIntelligenceService .
AnnotateVideo
Method : google.cloud.videointelligence.v1p3beta1.AnnotateVideo
Audit log type : Data access
Permissions :
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.videointelligence.v1p3beta1.AnnotateVideo"
google.longrunning.Operations
The following audit logs are associated with methods belonging to
google.longrunning.Operations .
CancelOperation
Method : google.longrunning.Operations.CancelOperation
Audit log type : Data access
Permissions :
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.CancelOperation"
DeleteOperation
Method : google.longrunning.Operations.DeleteOperation
Audit log type : Data access
Permissions :
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.DeleteOperation"
GetOperation
Method : google.longrunning.Operations.GetOperation
Audit log type : Data access
Permissions :
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.GetOperation"
ListOperations
Method : google.longrunning.Operations.ListOperations
Audit log type : Data access
Permissions :
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.ListOperations"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.cloud.videointelligence.v1p3beta1.StreamingVideoIntelligenceService.StreamingAnnotateVideo
google.longrunning.Operations.WaitOperation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
