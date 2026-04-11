---
title: "Live Stream API audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/livestream/docs/how-to/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/livestream/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/livestream/docs/how-to/audit-logging
  title: "Live Stream API audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Live Stream API
Guides
Send feedback
Live Stream API audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Live Stream API. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Live Stream API audit logs use the service name livestream.googleapis.com .
Filter for this service:
protoPayload . serviceName = "livestream.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Live Stream API generates an audit log whose category is dependent on the
type property of the permission required to perform the method.
Methods that require an IAM permission with the type property value
of DATA_READ , DATA_WRITE , or ADMIN_READ generate
Data Access audit logs.
Methods that require an IAM permission with the type property value
of ADMIN_WRITE generate
Admin Activity audit logs.
API methods in the following list that are marked with (LRO) are long-running operations (LROs).
These methods usually generate two audit log entries: one when the operation starts and
another when it ends. For more information see Audit logs for long-running operations .
Permission type
Methods
ADMIN_READ
google.cloud.video.livestream.v1.LivestreamService.GetAsset google.cloud.video.livestream.v1.LivestreamService.GetChannel google.cloud.video.livestream.v1.LivestreamService.GetClip google.cloud.video.livestream.v1.LivestreamService.GetDvrSession google.cloud.video.livestream.v1.LivestreamService.GetEvent google.cloud.video.livestream.v1.LivestreamService.GetInput google.cloud.video.livestream.v1.LivestreamService.GetPool google.cloud.video.livestream.v1.LivestreamService.ListAssets google.cloud.video.livestream.v1.LivestreamService.ListChannels google.cloud.video.livestream.v1.LivestreamService.ListClips google.cloud.video.livestream.v1.LivestreamService.ListDvrSessions google.cloud.video.livestream.v1.LivestreamService.ListEvents google.cloud.video.livestream.v1.LivestreamService.ListInputs google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations
ADMIN_WRITE
google.cloud.video.livestream.v1.LivestreamService.CreateAsset (LRO) google.cloud.video.livestream.v1.LivestreamService.CreateChannel (LRO) google.cloud.video.livestream.v1.LivestreamService.CreateClip (LRO) google.cloud.video.livestream.v1.LivestreamService.CreateDvrSession (LRO) google.cloud.video.livestream.v1.LivestreamService.CreateEvent google.cloud.video.livestream.v1.LivestreamService.CreateInput (LRO) google.cloud.video.livestream.v1.LivestreamService.DeleteAsset (LRO) google.cloud.video.livestream.v1.LivestreamService.DeleteChannel (LRO) google.cloud.video.livestream.v1.LivestreamService.DeleteClip (LRO) google.cloud.video.livestream.v1.LivestreamService.DeleteDvrSession (LRO) google.cloud.video.livestream.v1.LivestreamService.DeleteEvent google.cloud.video.livestream.v1.LivestreamService.DeleteInput (LRO) google.cloud.video.livestream.v1.LivestreamService.StartChannel (LRO) google.cloud.video.livestream.v1.LivestreamService.StopChannel (LRO) google.cloud.video.livestream.v1.LivestreamService.UpdateChannel (LRO) google.cloud.video.livestream.v1.LivestreamService.UpdateDvrSession (LRO) google.cloud.video.livestream.v1.LivestreamService.UpdateInput (LRO) google.cloud.video.livestream.v1.LivestreamService.UpdatePool (LRO) google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Live Stream API.
google.cloud.video.livestream.v1.LivestreamService
The following audit logs are associated with methods belonging to
google.cloud.video.livestream.v1.LivestreamService .
CreateAsset
Method : google.cloud.video.livestream.v1.LivestreamService.CreateAsset
Audit log type : Admin activity
Permissions : livestream.assets.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.CreateAsset"
CreateChannel
Method : google.cloud.video.livestream.v1.LivestreamService.CreateChannel
Audit log type : Admin activity
Permissions : livestream.channels.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.CreateChannel"
CreateClip
Method : google.cloud.video.livestream.v1.LivestreamService.CreateClip
Audit log type : Admin activity
Permissions : livestream.clips.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.CreateClip"
CreateDvrSession
Method : google.cloud.video.livestream.v1.LivestreamService.CreateDvrSession
Audit log type : Admin activity
Permissions : livestream.dvrSessions.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.CreateDvrSession"
CreateEvent
Method : google.cloud.video.livestream.v1.LivestreamService.CreateEvent
Audit log type : Admin activity
Permissions : livestream.events.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.CreateEvent"
CreateInput
Method : google.cloud.video.livestream.v1.LivestreamService.CreateInput
Audit log type : Admin activity
Permissions : livestream.inputs.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.CreateInput"
DeleteAsset
Method : google.cloud.video.livestream.v1.LivestreamService.DeleteAsset
Audit log type : Admin activity
Permissions : livestream.assets.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.DeleteAsset"
DeleteChannel
Method : google.cloud.video.livestream.v1.LivestreamService.DeleteChannel
Audit log type : Admin activity
Permissions : livestream.channels.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.DeleteChannel"
DeleteClip
Method : google.cloud.video.livestream.v1.LivestreamService.DeleteClip
Audit log type : Admin activity
Permissions : livestream.clips.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.DeleteClip"
DeleteDvrSession
Method : google.cloud.video.livestream.v1.LivestreamService.DeleteDvrSession
Audit log type : Admin activity
Permissions : livestream.dvrSessions.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.DeleteDvrSession"
DeleteEvent
Method : google.cloud.video.livestream.v1.LivestreamService.DeleteEvent
Audit log type : Admin activity
Permissions : livestream.events.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.DeleteEvent"
DeleteInput
Method : google.cloud.video.livestream.v1.LivestreamService.DeleteInput
Audit log type : Admin activity
Permissions : livestream.inputs.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.DeleteInput"
GetAsset
Method : google.cloud.video.livestream.v1.LivestreamService.GetAsset
Audit log type : Data access
Permissions : livestream.assets.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.GetAsset"
GetChannel
Method : google.cloud.video.livestream.v1.LivestreamService.GetChannel
Audit log type : Data access
Permissions : livestream.channels.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.GetChannel"
GetClip
Method : google.cloud.video.livestream.v1.LivestreamService.GetClip
Audit log type : Data access
Permissions : livestream.clips.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.GetClip"
GetDvrSession
Method : google.cloud.video.livestream.v1.LivestreamService.GetDvrSession
Audit log type : Data access
Permissions : livestream.dvrSessions.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.GetDvrSession"
GetEvent
Method : google.cloud.video.livestream.v1.LivestreamService.GetEvent
Audit log type : Data access
Permissions : livestream.events.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.GetEvent"
GetInput
Method : google.cloud.video.livestream.v1.LivestreamService.GetInput
Audit log type : Data access
Permissions : livestream.inputs.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.GetInput"
GetPool
Method : google.cloud.video.livestream.v1.LivestreamService.GetPool
Audit log type : Data access
Permissions : livestream.pools.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.GetPool"
ListAssets
Method : google.cloud.video.livestream.v1.LivestreamService.ListAssets
Audit log type : Data access
Permissions : livestream.assets.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.ListAssets"
ListChannels
Method : google.cloud.video.livestream.v1.LivestreamService.ListChannels
Audit log type : Data access
Permissions : livestream.channels.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.ListChannels"
ListClips
Method : google.cloud.video.livestream.v1.LivestreamService.ListClips
Audit log type : Data access
Permissions : livestream.clips.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.ListClips"
ListDvrSessions
Method : google.cloud.video.livestream.v1.LivestreamService.ListDvrSessions
Audit log type : Data access
Permissions : livestream.dvrSessions.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.ListDvrSessions"
ListEvents
Method : google.cloud.video.livestream.v1.LivestreamService.ListEvents
Audit log type : Data access
Permissions : livestream.events.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.ListEvents"
ListInputs
Method : google.cloud.video.livestream.v1.LivestreamService.ListInputs
Audit log type : Data access
Permissions : livestream.inputs.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.ListInputs"
StartChannel
Method : google.cloud.video.livestream.v1.LivestreamService.StartChannel
Audit log type : Admin activity
Permissions : livestream.channels.start - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.StartChannel"
StopChannel
Method : google.cloud.video.livestream.v1.LivestreamService.StopChannel
Audit log type : Admin activity
Permissions : livestream.channels.stop - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.StopChannel"
UpdateChannel
Method : google.cloud.video.livestream.v1.LivestreamService.UpdateChannel
Audit log type : Admin activity
Permissions : livestream.channels.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.UpdateChannel"
UpdateDvrSession
Method : google.cloud.video.livestream.v1.LivestreamService.UpdateDvrSession
Audit log type : Admin activity
Permissions : livestream.dvrSessions.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.UpdateDvrSession"
UpdateInput
Method : google.cloud.video.livestream.v1.LivestreamService.UpdateInput
Audit log type : Admin activity
Permissions : livestream.inputs.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.UpdateInput"
UpdatePool
Method : google.cloud.video.livestream.v1.LivestreamService.UpdatePool
Audit log type : Admin activity
Permissions : livestream.pools.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.video.livestream.v1.LivestreamService.UpdatePool"
google.longrunning.Operations
The following audit logs are associated with methods belonging to
google.longrunning.Operations .
CancelOperation
Method : google.longrunning.Operations.CancelOperation
Audit log type : Admin activity
Permissions : livestream.operations.cancel - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.CancelOperation"
DeleteOperation
Method : google.longrunning.Operations.DeleteOperation
Audit log type : Admin activity
Permissions : livestream.operations.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.DeleteOperation"
GetOperation
Method : google.longrunning.Operations.GetOperation
Audit log type : Data access
Permissions : livestream.operations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.GetOperation"
ListOperations
Method : google.longrunning.Operations.ListOperations
Audit log type : Data access
Permissions : livestream.operations.list - ADMIN_READ
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
google.cloud.location.Locations.GetLocation
google.cloud.location.Locations.ListLocations
google.longrunning.Operations.WaitOperation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
