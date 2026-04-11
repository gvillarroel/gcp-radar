---
title: "Cloud Bigtable API audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/audit-logging
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/audit-logging
  title: "Cloud Bigtable API audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Bigtable API audit logging
This document describes audit logging for Cloud Bigtable API. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Notes
When a log entry exceeds the size limit , Cloud Logging splits that entry and distributes the data across several entries. To learn how to identify and reassemble split audit logs, see Split audit log entries .
Service name
Cloud Bigtable API audit logs use the service name bigtable.googleapis.com .
Filter for this service:
protoPayload . serviceName = "bigtable.googleapis.com"
Methods by permission type
For details about which fields are logged for Data Access audit logging, see Audit log fields . Before you enable Data Access audit logging, read Managing Costs .
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Cloud Bigtable API generates an audit log whose category is dependent on the
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
google.bigtable.v2.Bigtable.PingAndWarm
DATA_READ
google.bigtable.v2.Bigtable.ExecuteQuery google.bigtable.v2.Bigtable.GenerateInitialChangeStreamPartitions google.bigtable.v2.Bigtable.PrepareQuery google.bigtable.v2.Bigtable.ReadChangeStream google.bigtable.v2.Bigtable.ReadModifyWriteRow google.bigtable.v2.Bigtable.ReadRows google.bigtable.v2.Bigtable.SampleRowKeys
DATA_WRITE
google.bigtable.v2.Bigtable.CheckAndMutateRow google.bigtable.v2.Bigtable.MutateRow google.bigtable.v2.Bigtable.MutateRows google.bigtable.v2.Bigtable.ReadModifyWriteRow
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Cloud Bigtable API.
google.bigtable.v2.Bigtable
The following audit logs are associated with methods belonging to
google.bigtable.v2.Bigtable .
CheckAndMutateRow
Method : google.bigtable.v2.Bigtable.CheckAndMutateRow
Audit log type : Data access
Permissions : bigtable.tables.mutateRows - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.bigtable.v2.Bigtable.CheckAndMutateRow"
ExecuteQuery
Method : google.bigtable.v2.Bigtable.ExecuteQuery
Audit log type : Data access
Permissions : bigtable.instances.executeQuery - DATA_READ
bigtable.tables.readRows - DATA_READ
Method is a long-running or streaming operation :
Streaming RPC
Filter for this method :
protoPayload.methodName="google.bigtable.v2.Bigtable.ExecuteQuery"
GenerateInitialChangeStreamPartitions
Method : google.bigtable.v2.Bigtable.GenerateInitialChangeStreamPartitions
Audit log type : Data access
Permissions : bigtable.tables.readRows - DATA_READ
Method is a long-running or streaming operation :
Streaming RPC
Filter for this method :
protoPayload.methodName="google.bigtable.v2.Bigtable.GenerateInitialChangeStreamPartitions"
MutateRow
Method : google.bigtable.v2.Bigtable.MutateRow
Audit log type : Data access
Permissions : bigtable.tables.mutateRows - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.bigtable.v2.Bigtable.MutateRow"
MutateRows
Method : google.bigtable.v2.Bigtable.MutateRows
Audit log type : Data access
Permissions : bigtable.tables.mutateRows - DATA_WRITE
Method is a long-running or streaming operation :
Streaming RPC
Filter for this method :
protoPayload.methodName="google.bigtable.v2.Bigtable.MutateRows"
PingAndWarm
Method : google.bigtable.v2.Bigtable.PingAndWarm
Audit log type : Data access
Permissions : bigtable.instances.ping - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.bigtable.v2.Bigtable.PingAndWarm"
PrepareQuery
Method : google.bigtable.v2.Bigtable.PrepareQuery
Audit log type : Data access
Permissions : bigtable.instances.executeQuery - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.bigtable.v2.Bigtable.PrepareQuery"
ReadChangeStream
Method : google.bigtable.v2.Bigtable.ReadChangeStream
Audit log type : Data access
Permissions : bigtable.tables.readRows - DATA_READ
Method is a long-running or streaming operation :
Streaming RPC
Filter for this method :
protoPayload.methodName="google.bigtable.v2.Bigtable.ReadChangeStream"
ReadModifyWriteRow
Method : google.bigtable.v2.Bigtable.ReadModifyWriteRow
Audit log type : Data access
Permissions : bigtable.tables.mutateRows - DATA_WRITE
bigtable.tables.readRows - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.bigtable.v2.Bigtable.ReadModifyWriteRow"
ReadRows
Method : google.bigtable.v2.Bigtable.ReadRows
Audit log type : Data access
Permissions : bigtable.tables.readRows - DATA_READ
Method is a long-running or streaming operation :
Streaming RPC
Filter for this method :
protoPayload.methodName="google.bigtable.v2.Bigtable.ReadRows"
SampleRowKeys
Method : google.bigtable.v2.Bigtable.SampleRowKeys
Audit log type : Data access
Permissions : bigtable.tables.sampleRowKeys - DATA_READ
Method is a long-running or streaming operation :
Streaming RPC
Filter for this method :
protoPayload.methodName="google.bigtable.v2.Bigtable.SampleRowKeys"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
grpc.lookup.v1.RouteLookupService.RouteLookup
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
