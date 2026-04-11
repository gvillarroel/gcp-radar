---
title: "Access Approval audit logging information \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging
  title: "Access Approval audit logging information \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud provider access management
Access Approval
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Access Approval audit logging information
This document describes audit logging for Access Approval. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Access Approval audit logs use the service name accessapproval.googleapis.com .
Filter for this service:
protoPayload . serviceName = "accessapproval.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Access Approval generates an audit log whose category is dependent on the
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
ADMIN_WRITE
google.cloud.accessapproval.v1.AccessApproval.ApproveApprovalRequest google.cloud.accessapproval.v1.AccessApproval.DeleteAccessApprovalSettings google.cloud.accessapproval.v1.AccessApproval.DismissApprovalRequest google.cloud.accessapproval.v1.AccessApproval.InvalidateApprovalRequest google.cloud.accessapproval.v1.AccessApproval.UpdateAccessApprovalSettings
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Access Approval.
google.cloud.accessapproval.v1.AccessApproval
The following audit logs are associated with methods belonging to
google.cloud.accessapproval.v1.AccessApproval .
ApproveApprovalRequest
Method : google.cloud.accessapproval.v1.AccessApproval.ApproveApprovalRequest
Audit log type : Admin activity
Permissions : accessapproval.requests.approve - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.accessapproval.v1.AccessApproval.ApproveApprovalRequest"
DeleteAccessApprovalSettings
Method : google.cloud.accessapproval.v1.AccessApproval.DeleteAccessApprovalSettings
Audit log type : Admin activity
Permissions : accessapproval.settings.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.accessapproval.v1.AccessApproval.DeleteAccessApprovalSettings"
DismissApprovalRequest
Method : google.cloud.accessapproval.v1.AccessApproval.DismissApprovalRequest
Audit log type : Admin activity
Permissions : accessapproval.requests.dismiss - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.accessapproval.v1.AccessApproval.DismissApprovalRequest"
InvalidateApprovalRequest
Method : google.cloud.accessapproval.v1.AccessApproval.InvalidateApprovalRequest
Audit log type : Admin activity
Permissions : accessapproval.requests.invalidate - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.accessapproval.v1.AccessApproval.InvalidateApprovalRequest"
UpdateAccessApprovalSettings
Method : google.cloud.accessapproval.v1.AccessApproval.UpdateAccessApprovalSettings
Audit log type : Admin activity
Permissions : accessapproval.settings.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.accessapproval.v1.AccessApproval.UpdateAccessApprovalSettings"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
