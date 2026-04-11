---
title: "Committed use discounts audit logging \_|\_ Google Cloud VMware Engine \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vmware-engine/docs/cud-audit-logging
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/vmware-engine/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/vmware-engine/docs/cud-audit-logging
  title: "Committed use discounts audit logging \_|\_ Google Cloud VMware Engine \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
VMware Engine
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Committed use discounts audit logging
This document describes audit logging for Enterprise Purchasing API. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Notes
These APIs are only callable inside the Google Cloud Console, and cannot be called directly.
Service name
Enterprise Purchasing API audit logs use the service name enterprisepurchasing.googleapis.com .
Filter for this service:
protoPayload . serviceName = "enterprisepurchasing.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Enterprise Purchasing API generates an audit log whose category is dependent on the
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
google.cloud.enterprisepurchasing.v1alpha.EnterprisePurchasing.ListGcveCuds google.cloud.enterprisepurchasing.v1alpha.EnterprisePurchasing.ListGcveNodePricingInfo
ADMIN_WRITE
google.cloud.enterprisepurchasing.v1alpha.EnterprisePurchasing.CreateGcveCud
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Enterprise Purchasing API.
google.cloud.enterprisepurchasing.v1alpha.EnterprisePurchasing
The following audit logs are associated with methods belonging to
google.cloud.enterprisepurchasing.v1alpha.EnterprisePurchasing .
CreateGcveCud
Method : google.cloud.enterprisepurchasing.v1alpha.EnterprisePurchasing.CreateGcveCud
Audit log type : Admin activity
Permissions : enterprisepurchasing.gcveCuds.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.enterprisepurchasing.v1alpha.EnterprisePurchasing.CreateGcveCud"
ListGcveCuds
Method : google.cloud.enterprisepurchasing.v1alpha.EnterprisePurchasing.ListGcveCuds
Audit log type : Data access
Permissions : enterprisepurchasing.gcveCuds.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.enterprisepurchasing.v1alpha.EnterprisePurchasing.ListGcveCuds"
ListGcveNodePricingInfo
Method : google.cloud.enterprisepurchasing.v1alpha.EnterprisePurchasing.ListGcveNodePricingInfo
Audit log type : Data access
Permissions : enterprisepurchasing.gcveNodePricingInfo.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.enterprisepurchasing.v1alpha.EnterprisePurchasing.ListGcveNodePricingInfo"
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
