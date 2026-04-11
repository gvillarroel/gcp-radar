---
title: "Cloud Commerce Consumer Procurement API audit logging \_|\_ Google Cloud Marketplace\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/marketplace/docs/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/audit-logging
  title: "Cloud Commerce Consumer Procurement API audit logging \_|\_ Google Cloud\
    \ Marketplace \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Google Cloud Marketplace
Guides
Send feedback
Cloud Commerce Consumer Procurement API audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Cloud Commerce Consumer Procurement API. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Cloud Commerce Consumer Procurement API audit logs use the service name cloudcommerceconsumerprocurement.googleapis.com .
Filter for this service:
protoPayload . serviceName = "cloudcommerceconsumerprocurement.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Cloud Commerce Consumer Procurement API generates an audit log whose category is dependent on the
type property of the permission required to perform the method.
Methods that require an IAM permission with the type property value
of DATA_READ , DATA_WRITE , or ADMIN_READ generate
Data Access audit logs.
Methods that require an IAM permission with the type property value
of ADMIN_WRITE generate
Admin Activity audit logs.
Permission type
Methods
ADMIN_READ
google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService.GetOrder google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService.ListOrders google.cloud.commerce.consumer.procurement.v1.LicenseManagementService.EnumerateLicensedUsers google.cloud.commerce.consumer.procurement.v1.LicenseManagementService.GetLicensePool google.cloud.commerce.consumer.procurement.v1alpha1.ConsumerProcurementService.GetOrder google.cloud.commerce.consumer.procurement.v1alpha1.ConsumerProcurementService.ListOrders
ADMIN_WRITE
google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService.CancelOrder google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService.ModifyOrder google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService.PlaceOrder google.cloud.commerce.consumer.procurement.v1.LicenseManagementService.Assign google.cloud.commerce.consumer.procurement.v1.LicenseManagementService.Unassign google.cloud.commerce.consumer.procurement.v1alpha1.ConsumerProcurementService.PlaceOrder
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Cloud Commerce Consumer Procurement API.
google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService
The following audit logs are associated with methods belonging to
google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService .
CancelOrder
Method : google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService.CancelOrder
Audit log type : Admin activity
Permissions : consumerprocurement.orders.cancel - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService.CancelOrder"
GetOrder
Method : google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService.GetOrder
Audit log type : Data access
Permissions : consumerprocurement.orders.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService.GetOrder"
ListOrders
Method : google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService.ListOrders
Audit log type : Data access
Permissions : consumerprocurement.orders.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService.ListOrders"
ModifyOrder
Method : google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService.ModifyOrder
Audit log type : Admin activity
Permissions : consumerprocurement.orders.modify - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService.ModifyOrder"
PlaceOrder
Method : google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService.PlaceOrder
Audit log type : Admin activity
Permissions : consumerprocurement.orders.place - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService.PlaceOrder"
google.cloud.commerce.consumer.procurement.v1.LicenseManagementService
The following audit logs are associated with methods belonging to
google.cloud.commerce.consumer.procurement.v1.LicenseManagementService .
Assign
Method : google.cloud.commerce.consumer.procurement.v1.LicenseManagementService.Assign
Audit log type : Admin activity
Permissions : consumerprocurement.licensePools.assign - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.commerce.consumer.procurement.v1.LicenseManagementService.Assign"
EnumerateLicensedUsers
Method : google.cloud.commerce.consumer.procurement.v1.LicenseManagementService.EnumerateLicensedUsers
Audit log type : Data access
Permissions : consumerprocurement.licensePools.enumerateLicensedUsers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.commerce.consumer.procurement.v1.LicenseManagementService.EnumerateLicensedUsers"
GetLicensePool
Method : google.cloud.commerce.consumer.procurement.v1.LicenseManagementService.GetLicensePool
Audit log type : Data access
Permissions : consumerprocurement.licensePools.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.commerce.consumer.procurement.v1.LicenseManagementService.GetLicensePool"
Unassign
Method : google.cloud.commerce.consumer.procurement.v1.LicenseManagementService.Unassign
Audit log type : Admin activity
Permissions : consumerprocurement.licensePools.unassign - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.commerce.consumer.procurement.v1.LicenseManagementService.Unassign"
google.cloud.commerce.consumer.procurement.v1alpha1.ConsumerProcurementService
The following audit logs are associated with methods belonging to
google.cloud.commerce.consumer.procurement.v1alpha1.ConsumerProcurementService .
GetOrder
Method : google.cloud.commerce.consumer.procurement.v1alpha1.ConsumerProcurementService.GetOrder
Audit log type : Data access
Permissions : consumerprocurement.orders.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.commerce.consumer.procurement.v1alpha1.ConsumerProcurementService.GetOrder"
ListOrders
Method : google.cloud.commerce.consumer.procurement.v1alpha1.ConsumerProcurementService.ListOrders
Audit log type : Data access
Permissions : consumerprocurement.orders.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.commerce.consumer.procurement.v1alpha1.ConsumerProcurementService.ListOrders"
PlaceOrder
Method : google.cloud.commerce.consumer.procurement.v1alpha1.ConsumerProcurementService.PlaceOrder
Audit log type : Admin activity
Permissions : consumerprocurement.orders.place - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.commerce.consumer.procurement.v1alpha1.ConsumerProcurementService.PlaceOrder"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
