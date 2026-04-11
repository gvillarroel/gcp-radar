---
title: "Confidential Computing audit logging \_|\_ Confidential VM \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/audit-logging
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-a-confidential-vm-instance
source_metadata:
  url: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/audit-logging
  title: "Confidential Computing audit logging \_|\_ Confidential VM \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Confidential VM
Guides
Send feedback
Confidential Computing audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Confidential Computing. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Confidential Computing audit logs use the service name confidentialcomputing.googleapis.com .
Filter for this service:
protoPayload . serviceName = "confidentialcomputing.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Confidential Computing generates an audit log whose category is dependent on the
type property of the permission required to perform the method.
Methods that require an IAM permission with the type property value
of DATA_READ , DATA_WRITE , or ADMIN_READ generate
Data Access audit logs.
Methods that require an IAM permission with the type property value
of ADMIN_WRITE generate
Admin Activity audit logs.
Permission type
Methods
ADMIN_WRITE
google.cloud.confidentialcomputing.v1.ConfidentialComputing.CreateChallenge google.cloud.confidentialcomputing.v1.ConfidentialComputing.VerifyAttestation google.cloud.confidentialcomputing.v1alpha1.ConfidentialComputing.CreateChallenge google.cloud.confidentialcomputing.v1alpha1.ConfidentialComputing.VerifyAttestation
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Confidential Computing.
google.cloud.confidentialcomputing.v1.ConfidentialComputing
The following audit logs are associated with methods belonging to
google.cloud.confidentialcomputing.v1.ConfidentialComputing .
CreateChallenge
Method : google.cloud.confidentialcomputing.v1.ConfidentialComputing.CreateChallenge
Audit log type : Admin activity
Permissions : confidentialcomputing.challenges.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.confidentialcomputing.v1.ConfidentialComputing.CreateChallenge"
VerifyAttestation
Method : google.cloud.confidentialcomputing.v1.ConfidentialComputing.VerifyAttestation
Audit log type : Admin activity
Permissions : confidentialcomputing.challenges.verify - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.confidentialcomputing.v1.ConfidentialComputing.VerifyAttestation"
google.cloud.confidentialcomputing.v1alpha1.ConfidentialComputing
The following audit logs are associated with methods belonging to
google.cloud.confidentialcomputing.v1alpha1.ConfidentialComputing .
CreateChallenge
Method : google.cloud.confidentialcomputing.v1alpha1.ConfidentialComputing.CreateChallenge
Audit log type : Admin activity
Permissions : confidentialcomputing.challenges.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.confidentialcomputing.v1alpha1.ConfidentialComputing.CreateChallenge"
VerifyAttestation
Method : google.cloud.confidentialcomputing.v1alpha1.ConfidentialComputing.VerifyAttestation
Audit log type : Admin activity
Permissions : confidentialcomputing.challenges.verify - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.confidentialcomputing.v1alpha1.ConfidentialComputing.VerifyAttestation"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
