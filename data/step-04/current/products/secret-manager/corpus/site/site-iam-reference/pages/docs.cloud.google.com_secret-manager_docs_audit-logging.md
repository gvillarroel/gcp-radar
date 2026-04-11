---
title: "Secret Manager Audit Logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secret-manager/docs/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secret-manager/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/secret-manager/docs/audit-logging
  title: "Secret Manager Audit Logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Secret Manager
Guides
Send feedback
Secret Manager Audit Logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Secret Manager. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Secret Manager audit logs use the service name secretmanager.googleapis.com .
Filter for this service:
protoPayload . serviceName = "secretmanager.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Secret Manager generates an audit log whose category is dependent on the
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
google.cloud.location.Locations.GetLocation google.cloud.location.Locations.ListLocations google.cloud.secretmanager.v1.SecretManagerService.GetIamPolicy google.cloud.secretmanager.v1.SecretManagerService.GetSecret google.cloud.secretmanager.v1.SecretManagerService.GetSecretVersion google.cloud.secretmanager.v1.SecretManagerService.ListSecretVersions google.cloud.secretmanager.v1.SecretManagerService.ListSecrets
ADMIN_WRITE
google.cloud.secretmanager.v1.SecretManagerService.AddSecretVersion google.cloud.secretmanager.v1.SecretManagerService.CreateSecret google.cloud.secretmanager.v1.SecretManagerService.DeleteSecret google.cloud.secretmanager.v1.SecretManagerService.DestroySecretVersion google.cloud.secretmanager.v1.SecretManagerService.DisableSecretVersion google.cloud.secretmanager.v1.SecretManagerService.EnableSecretVersion google.cloud.secretmanager.v1.SecretManagerService.SetIamPolicy google.cloud.secretmanager.v1.SecretManagerService.UpdateSecret
DATA_READ
google.cloud.secretmanager.v1.SecretManagerService.AccessSecretVersion
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Secret Manager.
google.cloud.location.Locations
The following audit logs are associated with methods belonging to
google.cloud.location.Locations .
GetLocation
Method : google.cloud.location.Locations.GetLocation
Audit log type : Data access
Permissions : secretmanager.locations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.location.Locations.GetLocation"
ListLocations
Method : google.cloud.location.Locations.ListLocations
Audit log type : Data access
Permissions : secretmanager.locations.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.location.Locations.ListLocations"
google.cloud.secretmanager.v1.SecretManagerService
The following audit logs are associated with methods belonging to
google.cloud.secretmanager.v1.SecretManagerService .
AccessSecretVersion
Method : google.cloud.secretmanager.v1.SecretManagerService.AccessSecretVersion
Audit log type : Data access
Permissions : secretmanager.versions.access - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.secretmanager.v1.SecretManagerService.AccessSecretVersion"
AddSecretVersion
Method : google.cloud.secretmanager.v1.SecretManagerService.AddSecretVersion
Audit log type : Admin activity
Permissions : secretmanager.versions.add - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.secretmanager.v1.SecretManagerService.AddSecretVersion"
CreateSecret
Method : google.cloud.secretmanager.v1.SecretManagerService.CreateSecret
Audit log type : Admin activity
Permissions : secretmanager.secrets.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.secretmanager.v1.SecretManagerService.CreateSecret"
DeleteSecret
Method : google.cloud.secretmanager.v1.SecretManagerService.DeleteSecret
Audit log type : Admin activity
Permissions : secretmanager.secrets.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.secretmanager.v1.SecretManagerService.DeleteSecret"
DestroySecretVersion
Method : google.cloud.secretmanager.v1.SecretManagerService.DestroySecretVersion
Audit log type : Admin activity
Permissions : secretmanager.versions.destroy - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.secretmanager.v1.SecretManagerService.DestroySecretVersion"
DisableSecretVersion
Method : google.cloud.secretmanager.v1.SecretManagerService.DisableSecretVersion
Audit log type : Admin activity
Permissions : secretmanager.versions.disable - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.secretmanager.v1.SecretManagerService.DisableSecretVersion"
EnableSecretVersion
Method : google.cloud.secretmanager.v1.SecretManagerService.EnableSecretVersion
Audit log type : Admin activity
Permissions : secretmanager.versions.enable - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.secretmanager.v1.SecretManagerService.EnableSecretVersion"
GetIamPolicy
Method : google.cloud.secretmanager.v1.SecretManagerService.GetIamPolicy
Audit log type : Data access
Permissions : secretmanager.secrets.getIamPolicy - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.secretmanager.v1.SecretManagerService.GetIamPolicy"
GetSecret
Method : google.cloud.secretmanager.v1.SecretManagerService.GetSecret
Audit log type : Data access
Permissions : secretmanager.secrets.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.secretmanager.v1.SecretManagerService.GetSecret"
GetSecretVersion
Method : google.cloud.secretmanager.v1.SecretManagerService.GetSecretVersion
Audit log type : Data access
Permissions : secretmanager.versions.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.secretmanager.v1.SecretManagerService.GetSecretVersion"
ListSecretVersions
Method : google.cloud.secretmanager.v1.SecretManagerService.ListSecretVersions
Audit log type : Data access
Permissions : secretmanager.versions.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.secretmanager.v1.SecretManagerService.ListSecretVersions"
ListSecrets
Method : google.cloud.secretmanager.v1.SecretManagerService.ListSecrets
Audit log type : Data access
Permissions : secretmanager.secrets.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.secretmanager.v1.SecretManagerService.ListSecrets"
SetIamPolicy
Method : google.cloud.secretmanager.v1.SecretManagerService.SetIamPolicy
Audit log type : Admin activity
Permissions : secretmanager.secrets.setIamPolicy - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.secretmanager.v1.SecretManagerService.SetIamPolicy"
UpdateSecret
Method : google.cloud.secretmanager.v1.SecretManagerService.UpdateSecret
Audit log type : Admin activity
Permissions : secretmanager.secrets.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.secretmanager.v1.SecretManagerService.UpdateSecret"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.cloud.secretmanager.v1.SecretManagerService.TestIamPermissions
What's next
Learn more about detecting threats in Secret Manager by watching a short
YouTube video on audit logging .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
