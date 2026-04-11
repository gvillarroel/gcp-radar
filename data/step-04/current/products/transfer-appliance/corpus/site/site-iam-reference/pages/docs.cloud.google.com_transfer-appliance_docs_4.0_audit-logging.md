---
title: "Transfer Appliance audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control
source_metadata:
  url: https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging
  title: "Transfer Appliance audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Transfer Appliance
Resources
Send feedback
Transfer Appliance audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Transfer Appliance. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Transfer Appliance audit logs use the service name transferappliance.googleapis.com .
Filter for this service:
protoPayload . serviceName = "transferappliance.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Transfer Appliance generates an audit log whose category is dependent on the
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
cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ExportApplianceUserData cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetAppliance cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetCredential cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetCredentialMetadata cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetDownloadLinks cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetSavedAddress cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListAppliances cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListOrders cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListSavedAddresses
ADMIN_WRITE
cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateAppliance cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateSavedAddress cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteAppliance cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteSavedAddress cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.SubmitOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateAppliance cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateSavedAddress
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Transfer Appliance.
cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance
The following audit logs are associated with methods belonging to
cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance .
CreateAppliance
Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateAppliance
Audit log type : Admin activity
Permissions : transferappliance.appliances.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateAppliance"
CreateOrder
Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateOrder
Audit log type : Admin activity
Permissions : transferappliance.orders.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateOrder"
CreateSavedAddress
Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateSavedAddress
Audit log type : Admin activity
Permissions : transferappliance.savedAddresses.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateSavedAddress"
DeleteAppliance
Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteAppliance
Audit log type : Admin activity
Permissions : transferappliance.appliances.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteAppliance"
DeleteOrder
Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteOrder
Audit log type : Admin activity
Permissions : transferappliance.orders.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteOrder"
DeleteSavedAddress
Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteSavedAddress
Audit log type : Admin activity
Permissions : transferappliance.savedAddresses.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteSavedAddress"
ExportApplianceUserData
Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ExportApplianceUserData
Audit log type : Data access
Permissions : transferappliance.appliances.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ExportApplianceUserData"
GetAppliance
Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetAppliance
Audit log type : Data access
Permissions : transferappliance.appliances.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetAppliance"
GetCredential
Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetCredential
Audit log type : Data access
Permissions : transferappliance.credentials.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetCredential"
GetCredentialMetadata
Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetCredentialMetadata
Audit log type : Data access
Permissions : transferappliance.credentials.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetCredentialMetadata"
GetDownloadLinks
Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetDownloadLinks
Audit log type : Data access
Permissions : transferappliance.appliances.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetDownloadLinks"
GetOrder
Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetOrder
Audit log type : Data access
Permissions : transferappliance.orders.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetOrder"
GetSavedAddress
Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetSavedAddress
Audit log type : Data access
Permissions : transferappliance.savedAddresses.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetSavedAddress"
ListAppliances
Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListAppliances
Audit log type : Data access
Permissions : transferappliance.appliances.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListAppliances"
ListOrders
Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListOrders
Audit log type : Data access
Permissions : transferappliance.orders.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListOrders"
ListSavedAddresses
Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListSavedAddresses
Audit log type : Data access
Permissions : transferappliance.savedAddresses.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListSavedAddresses"
SubmitOrder
Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.SubmitOrder
Audit log type : Admin activity
Permissions : transferappliance.appliances.update - ADMIN_WRITE
transferappliance.orders.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.SubmitOrder"
UpdateAppliance
Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateAppliance
Audit log type : Admin activity
Permissions : transferappliance.appliances.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateAppliance"
UpdateOrder
Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateOrder
Audit log type : Admin activity
Permissions : transferappliance.orders.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateOrder"
UpdateSavedAddress
Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateSavedAddress
Audit log type : Admin activity
Permissions : transferappliance.savedAddresses.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateSavedAddress"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
