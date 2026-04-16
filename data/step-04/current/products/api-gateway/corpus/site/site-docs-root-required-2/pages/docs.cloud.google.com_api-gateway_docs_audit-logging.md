---
title: "API Gateway audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/api-gateway/docs/audit-logging
knowledge_key: corpus
source_id: site-docs-root-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/api-gateway/docs/about-api-gateway
source_metadata:
  url: https://docs.cloud.google.com/api-gateway/docs/audit-logging
  title: "API Gateway audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
API Gateway
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
API Gateway audit logging
This document describes audit logging for API Gateway. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
API Gateway audit logs use the service name apigateway.googleapis.com .
Filter for this service:
protoPayload . serviceName = "apigateway.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
API Gateway generates an audit log whose category is dependent on the
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
google.cloud.apigateway.v1.ApiGatewayService.GetApi google.cloud.apigateway.v1.ApiGatewayService.GetApiConfig google.cloud.apigateway.v1.ApiGatewayService.GetGateway google.cloud.apigateway.v1.ApiGatewayService.ListApiConfigs google.cloud.apigateway.v1.ApiGatewayService.ListApis google.cloud.apigateway.v1.ApiGatewayService.ListGateways google.cloud.apigateway.v1beta.ApiGatewayService.GetApi google.cloud.apigateway.v1beta.ApiGatewayService.GetApiConfig google.cloud.apigateway.v1beta.ApiGatewayService.GetGateway google.cloud.apigateway.v1beta.ApiGatewayService.ListApis GetIamPolicy google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations
ADMIN_WRITE
google.cloud.apigateway.v1.ApiGatewayService.CreateApi (LRO) google.cloud.apigateway.v1.ApiGatewayService.CreateApiConfig (LRO) google.cloud.apigateway.v1.ApiGatewayService.CreateGateway (LRO) google.cloud.apigateway.v1.ApiGatewayService.DeleteApi (LRO) google.cloud.apigateway.v1.ApiGatewayService.DeleteApiConfig (LRO) google.cloud.apigateway.v1.ApiGatewayService.DeleteGateway (LRO) google.cloud.apigateway.v1.ApiGatewayService.UpdateApi (LRO) google.cloud.apigateway.v1.ApiGatewayService.UpdateApiConfig (LRO) google.cloud.apigateway.v1.ApiGatewayService.UpdateGateway (LRO) google.cloud.apigateway.v1beta.ApiGatewayService.CreateApi (LRO) google.cloud.apigateway.v1beta.ApiGatewayService.CreateApiConfig (LRO) google.cloud.apigateway.v1beta.ApiGatewayService.CreateGateway (LRO) google.cloud.apigateway.v1beta.ApiGatewayService.DeleteApi (LRO) google.cloud.apigateway.v1beta.ApiGatewayService.DeleteApiConfig (LRO) google.cloud.apigateway.v1beta.ApiGatewayService.DeleteGateway (LRO) google.cloud.apigateway.v1beta.ApiGatewayService.UpdateApi (LRO) google.cloud.apigateway.v1beta.ApiGatewayService.UpdateApiConfig (LRO) google.cloud.apigateway.v1beta.ApiGatewayService.UpdateGateway (LRO) SetIamPolicy google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for API Gateway.
google.cloud.apigateway.v1.ApiGatewayService
The following audit logs are associated with methods belonging to
google.cloud.apigateway.v1.ApiGatewayService .
CreateApi
Method : google.cloud.apigateway.v1.ApiGatewayService.CreateApi
Audit log type : Admin activity
Permissions : apigateway.apis.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1.ApiGatewayService.CreateApi"
CreateApiConfig
Method : google.cloud.apigateway.v1.ApiGatewayService.CreateApiConfig
Audit log type : Admin activity
Permissions : apigateway.apiconfigs.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1.ApiGatewayService.CreateApiConfig"
CreateGateway
Method : google.cloud.apigateway.v1.ApiGatewayService.CreateGateway
Audit log type : Admin activity
Permissions : apigateway.gateways.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1.ApiGatewayService.CreateGateway"
DeleteApi
Method : google.cloud.apigateway.v1.ApiGatewayService.DeleteApi
Audit log type : Admin activity
Permissions : apigateway.apis.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1.ApiGatewayService.DeleteApi"
DeleteApiConfig
Method : google.cloud.apigateway.v1.ApiGatewayService.DeleteApiConfig
Audit log type : Admin activity
Permissions : apigateway.apiconfigs.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1.ApiGatewayService.DeleteApiConfig"
DeleteGateway
Method : google.cloud.apigateway.v1.ApiGatewayService.DeleteGateway
Audit log type : Admin activity
Permissions : apigateway.gateways.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1.ApiGatewayService.DeleteGateway"
GetApi
Method : google.cloud.apigateway.v1.ApiGatewayService.GetApi
Audit log type : Data access
Permissions : apigateway.apis.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1.ApiGatewayService.GetApi"
GetApiConfig
Method : google.cloud.apigateway.v1.ApiGatewayService.GetApiConfig
Audit log type : Data access
Permissions : apigateway.apiconfigs.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1.ApiGatewayService.GetApiConfig"
GetGateway
Method : google.cloud.apigateway.v1.ApiGatewayService.GetGateway
Audit log type : Data access
Permissions : apigateway.gateways.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1.ApiGatewayService.GetGateway"
ListApiConfigs
Method : google.cloud.apigateway.v1.ApiGatewayService.ListApiConfigs
Audit log type : Data access
Permissions : apigateway.apiconfigs.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1.ApiGatewayService.ListApiConfigs"
ListApis
Method : google.cloud.apigateway.v1.ApiGatewayService.ListApis
Audit log type : Data access
Permissions : apigateway.apis.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1.ApiGatewayService.ListApis"
ListGateways
Method : google.cloud.apigateway.v1.ApiGatewayService.ListGateways
Audit log type : Data access
Permissions : apigateway.gateways.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1.ApiGatewayService.ListGateways"
UpdateApi
Method : google.cloud.apigateway.v1.ApiGatewayService.UpdateApi
Audit log type : Admin activity
Permissions : apigateway.apis.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1.ApiGatewayService.UpdateApi"
UpdateApiConfig
Method : google.cloud.apigateway.v1.ApiGatewayService.UpdateApiConfig
Audit log type : Admin activity
Permissions : apigateway.apiconfigs.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1.ApiGatewayService.UpdateApiConfig"
UpdateGateway
Method : google.cloud.apigateway.v1.ApiGatewayService.UpdateGateway
Audit log type : Admin activity
Permissions : apigateway.gateways.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1.ApiGatewayService.UpdateGateway"
google.cloud.apigateway.v1beta.ApiGatewayService
The following audit logs are associated with methods belonging to
google.cloud.apigateway.v1beta.ApiGatewayService .
CreateApi
Method : google.cloud.apigateway.v1beta.ApiGatewayService.CreateApi
Audit log type : Admin activity
Permissions : apigateway.apis.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1beta.ApiGatewayService.CreateApi"
CreateApiConfig
Method : google.cloud.apigateway.v1beta.ApiGatewayService.CreateApiConfig
Audit log type : Admin activity
Permissions : apigateway.apiconfigs.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1beta.ApiGatewayService.CreateApiConfig"
CreateGateway
Method : google.cloud.apigateway.v1beta.ApiGatewayService.CreateGateway
Audit log type : Admin activity
Permissions : apigateway.gateways.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1beta.ApiGatewayService.CreateGateway"
DeleteApi
Method : google.cloud.apigateway.v1beta.ApiGatewayService.DeleteApi
Audit log type : Admin activity
Permissions : apigateway.apis.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1beta.ApiGatewayService.DeleteApi"
DeleteApiConfig
Method : google.cloud.apigateway.v1beta.ApiGatewayService.DeleteApiConfig
Audit log type : Admin activity
Permissions : apigateway.apiconfigs.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1beta.ApiGatewayService.DeleteApiConfig"
DeleteGateway
Method : google.cloud.apigateway.v1beta.ApiGatewayService.DeleteGateway
Audit log type : Admin activity
Permissions : apigateway.gateways.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1beta.ApiGatewayService.DeleteGateway"
GetApi
Method : google.cloud.apigateway.v1beta.ApiGatewayService.GetApi
Audit log type : Data access
Permissions : apigateway.apis.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1beta.ApiGatewayService.GetApi"
GetApiConfig
Method : google.cloud.apigateway.v1beta.ApiGatewayService.GetApiConfig
Audit log type : Data access
Permissions : apigateway.apiconfigs.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1beta.ApiGatewayService.GetApiConfig"
GetGateway
Method : google.cloud.apigateway.v1beta.ApiGatewayService.GetGateway
Audit log type : Data access
Permissions : apigateway.gateways.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1beta.ApiGatewayService.GetGateway"
ListApis
Method : google.cloud.apigateway.v1beta.ApiGatewayService.ListApis
Audit log type : Data access
Permissions : apigateway.apis.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1beta.ApiGatewayService.ListApis"
UpdateApi
Method : google.cloud.apigateway.v1beta.ApiGatewayService.UpdateApi
Audit log type : Admin activity
Permissions : apigateway.apis.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1beta.ApiGatewayService.UpdateApi"
UpdateApiConfig
Method : google.cloud.apigateway.v1beta.ApiGatewayService.UpdateApiConfig
Audit log type : Admin activity
Permissions : apigateway.apiconfigs.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1beta.ApiGatewayService.UpdateApiConfig"
UpdateGateway
Method : google.cloud.apigateway.v1beta.ApiGatewayService.UpdateGateway
Audit log type : Admin activity
Permissions : apigateway.gateways.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.apigateway.v1beta.ApiGatewayService.UpdateGateway"
google.iam.v1.IAMPolicy
The following audit logs are associated with methods belonging to
google.iam.v1.IAMPolicy .
GetIamPolicy
Method : GetIamPolicy
Audit log type : Data access
Permissions : apigateway.apis.getIamPolicy - ADMIN_READ
apigateway.gateways.getIamPolicy - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="GetIamPolicy"
SetIamPolicy
Method : SetIamPolicy
Audit log type : Admin activity
Permissions : apigateway.apiconfigs.setIamPolicy - ADMIN_WRITE
apigateway.apis.setIamPolicy - ADMIN_WRITE
apigateway.gateways.setIamPolicy - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="SetIamPolicy"
google.longrunning.Operations
The following audit logs are associated with methods belonging to
google.longrunning.Operations .
CancelOperation
Method : google.longrunning.Operations.CancelOperation
Audit log type : Admin activity
Permissions : apigateway.operations.cancel - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.CancelOperation"
DeleteOperation
Method : google.longrunning.Operations.DeleteOperation
Audit log type : Admin activity
Permissions : apigateway.operations.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.DeleteOperation"
GetOperation
Method : google.longrunning.Operations.GetOperation
Audit log type : Data access
Permissions : apigateway.operations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.GetOperation"
ListOperations
Method : google.longrunning.Operations.ListOperations
Audit log type : Data access
Permissions : apigateway.operations.list - ADMIN_READ
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
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
