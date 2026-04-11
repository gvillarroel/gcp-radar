---
title: "Eventarc Publishing audit logging \_|\_ Eventarc Standard \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/eventarc/standard/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing
  title: "Eventarc Publishing audit logging \_|\_ Eventarc Standard \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Eventarc
Standard
Guides
Send feedback
Eventarc Publishing audit logging
Stay organized with collections
Save and categorize content based on your preferences.
Advanced
Standard
This document describes audit logging for Eventarc Publishing. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Eventarc Publishing audit logs use the service name eventarcpublishing.googleapis.com .
Filter for this service:
protoPayload . serviceName = "eventarcpublishing.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Eventarc Publishing generates an audit log whose category is dependent on the
type property of the permission required to perform the method.
Methods that require an IAM permission with the type property value
of DATA_READ , DATA_WRITE , or ADMIN_READ generate
Data Access audit logs.
Methods that require an IAM permission with the type property value
of ADMIN_WRITE generate
Admin Activity audit logs.
Permission type
Methods
DATA_WRITE
google.cloud.eventarc.publishing.v1.Publisher.Publish
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Eventarc Publishing.
google.cloud.eventarc.publishing.v1.Publisher
The following audit logs are associated with methods belonging to
google.cloud.eventarc.publishing.v1.Publisher .
Publish
Method : google.cloud.eventarc.publishing.v1.Publisher.Publish
Audit log type : Data access
Permissions : eventarc.messageBuses.publish - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.eventarc.publishing.v1.Publisher.Publish"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.cloud.eventarc.publishing.v1.Publisher.PublishChannelConnectionEvents
google.cloud.eventarc.publishing.v1.Publisher.PublishEvents
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
