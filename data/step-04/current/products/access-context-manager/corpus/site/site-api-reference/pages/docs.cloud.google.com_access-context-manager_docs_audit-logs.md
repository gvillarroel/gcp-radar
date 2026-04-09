---
title: "Audit logging \_|\_ Access Context Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/audit-logs
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/audit-logs
  title: "Audit logging \_|\_ Access Context Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Access Context Manager
Reference
Send feedback
Audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how audit logging works when securing the
Google Cloud console and the Google Cloud APIs with Access Context Manager.
Access Context Manager by default logs all access requests to the
Google Cloud console and the Google Cloud APIs that are denied because of
security policy violations to Cloud Logging. The audit log records are
securely stored in Google infrastructure and available for future analysis. The
content of the audit log is available on a per-organization basis in the
Google Cloud console. The Access Context Manager audit log is written into the "Audited
Resource" logging stream and is available in Cloud Logging.
Audit log record content
Each audit log record contains information which can be divided into two major
categories: the information about the original call, and information about
security policy violations. It is filled as follows:
Audit Log Field
Meaning
logName
The organization identification and audit log type.
serviceName
The name of the service handling the call,
contextawareaccess.googleapis.com , that resulted in the
creation of this audit record.
authenticationInfo.principal_email
Email address of the user issuing the original call.
timestamp
The time of the targeted operation.
resource
The target of the audited operation.
resourceName
The organization intended to receive this audit record.
requestMetadata.callerIp
The IP address from which the call originated.
requestMetadata.requestAttributes.auth.accessLevels
The active access levels satisfied by the request.
status
The overall status of handling an operation described in this record.
metadata
An instance of
google.cloud.audit.ContextAwareAccessAuditMetadata
protobuf type, serialized as a JSON Struct. Its 'unsatisfiedAccessLevels'
field contains a list of the access levels that the request failed
to satisfy.
Accessing the audit log
The content of the audit log is available on a per-organization basis in the
Google Cloud console. The Access Context Manager audit log is written into the
"Audited Resource" logging stream and is available in Cloud Logging.
What's next
Learn more about Cloud Audit Logs .
Learn more about Enabling Cloud Audit Logs in
Identity-Aware Proxy.
Learn more about Audit Logging in
VPC Service Controls.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
