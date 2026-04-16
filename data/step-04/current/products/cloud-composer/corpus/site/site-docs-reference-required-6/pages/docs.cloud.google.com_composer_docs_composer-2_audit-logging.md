---
title: "Cloud Composer audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-2/audit-logging
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-2/override-airflow-configurations
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-2/audit-logging
  title: "Cloud Composer audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Composer 2 Guides
Send feedback
Cloud Composer audit logging
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This document describes audit logging for Cloud Composer. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Cloud Composer audit logs use the service name composer.googleapis.com .
Filter for this service:
protoPayload . serviceName = "composer.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Cloud Composer generates an audit log whose category is dependent on the
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
google.cloud.orchestration.airflow.service.v1.Environments.FetchDatabaseProperties google.cloud.orchestration.airflow.service.v1.Environments.GetEnvironment google.cloud.orchestration.airflow.service.v1.Environments.GetUserWorkloadsConfigMap google.cloud.orchestration.airflow.service.v1.Environments.GetUserWorkloadsSecret google.cloud.orchestration.airflow.service.v1.Environments.ListEnvironments google.cloud.orchestration.airflow.service.v1.Environments.ListUserWorkloadsConfigMaps google.cloud.orchestration.airflow.service.v1.Environments.ListUserWorkloadsSecrets google.cloud.orchestration.airflow.service.v1.Environments.ListWorkloads google.cloud.orchestration.airflow.service.v1.ImageVersions.ListImageVersions google.cloud.orchestration.airflow.service.v1beta1.Environments.FetchDatabaseProperties google.cloud.orchestration.airflow.service.v1beta1.Environments.GetEnvironment google.cloud.orchestration.airflow.service.v1beta1.Environments.GetUserWorkloadsConfigMap google.cloud.orchestration.airflow.service.v1beta1.Environments.GetUserWorkloadsSecret google.cloud.orchestration.airflow.service.v1beta1.Environments.ListEnvironments google.cloud.orchestration.airflow.service.v1beta1.Environments.ListUserWorkloadsConfigMaps google.cloud.orchestration.airflow.service.v1beta1.Environments.ListUserWorkloadsSecrets google.cloud.orchestration.airflow.service.v1beta1.Environments.ListWorkloads google.cloud.orchestration.airflow.service.v1beta1.ImageVersions.ListImageVersions
ADMIN_WRITE
google.cloud.orchestration.airflow.service.v1.Environments.CheckUpgrade (LRO) google.cloud.orchestration.airflow.service.v1.Environments.CreateEnvironment (LRO) google.cloud.orchestration.airflow.service.v1.Environments.CreateUserWorkloadsConfigMap google.cloud.orchestration.airflow.service.v1.Environments.CreateUserWorkloadsSecret google.cloud.orchestration.airflow.service.v1.Environments.DatabaseFailover (LRO) google.cloud.orchestration.airflow.service.v1.Environments.DeleteEnvironment (LRO) google.cloud.orchestration.airflow.service.v1.Environments.DeleteUserWorkloadsConfigMap google.cloud.orchestration.airflow.service.v1.Environments.DeleteUserWorkloadsSecret google.cloud.orchestration.airflow.service.v1.Environments.ExecuteAirflowCommand google.cloud.orchestration.airflow.service.v1.Environments.LoadSnapshot (LRO) google.cloud.orchestration.airflow.service.v1.Environments.PollAirflowCommand google.cloud.orchestration.airflow.service.v1.Environments.SaveSnapshot (LRO) google.cloud.orchestration.airflow.service.v1.Environments.StopAirflowCommand google.cloud.orchestration.airflow.service.v1.Environments.UpdateEnvironment (LRO) google.cloud.orchestration.airflow.service.v1.Environments.UpdateUserWorkloadsConfigMap google.cloud.orchestration.airflow.service.v1.Environments.UpdateUserWorkloadsSecret google.cloud.orchestration.airflow.service.v1beta1.Environments.CheckUpgrade (LRO) google.cloud.orchestration.airflow.service.v1beta1.Environments.CreateEnvironment (LRO) google.cloud.orchestration.airflow.service.v1beta1.Environments.CreateUserWorkloadsConfigMap google.cloud.orchestration.airflow.service.v1beta1.Environments.CreateUserWorkloadsSecret google.cloud.orchestration.airflow.service.v1beta1.Environments.DatabaseFailover (LRO) google.cloud.orchestration.airflow.service.v1beta1.Environments.DeleteEnvironment (LRO) google.cloud.orchestration.airflow.service.v1beta1.Environments.DeleteUserWorkloadsConfigMap google.cloud.orchestration.airflow.service.v1beta1.Environments.DeleteUserWorkloadsSecret google.cloud.orchestration.airflow.service.v1beta1.Environments.ExecuteAirflowCommand google.cloud.orchestration.airflow.service.v1beta1.Environments.LoadSnapshot (LRO) google.cloud.orchestration.airflow.service.v1beta1.Environments.PollAirflowCommand google.cloud.orchestration.airflow.service.v1beta1.Environments.RestartWebServer (LRO) google.cloud.orchestration.airflow.service.v1beta1.Environments.SaveSnapshot (LRO) google.cloud.orchestration.airflow.service.v1beta1.Environments.StopAirflowCommand google.cloud.orchestration.airflow.service.v1beta1.Environments.UpdateEnvironment (LRO) google.cloud.orchestration.airflow.service.v1beta1.Environments.UpdateUserWorkloadsConfigMap google.cloud.orchestration.airflow.service.v1beta1.Environments.UpdateUserWorkloadsSecret google.longrunning.Operations.DeleteOperation
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Cloud Composer.
google.cloud.orchestration.airflow.service.v1.Environments
The following audit logs are associated with methods belonging to
google.cloud.orchestration.airflow.service.v1.Environments .
CheckUpgrade
Method : google.cloud.orchestration.airflow.service.v1.Environments.CheckUpgrade
Audit log type : Admin activity
Permissions : composer.environments.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.Environments.CheckUpgrade"
CreateEnvironment
Method : google.cloud.orchestration.airflow.service.v1.Environments.CreateEnvironment
Audit log type : Admin activity
Permissions : composer.environments.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.Environments.CreateEnvironment"
CreateUserWorkloadsConfigMap
Method : google.cloud.orchestration.airflow.service.v1.Environments.CreateUserWorkloadsConfigMap
Audit log type : Admin activity
Permissions : composer.userworkloadsconfigmaps.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.Environments.CreateUserWorkloadsConfigMap"
CreateUserWorkloadsSecret
Method : google.cloud.orchestration.airflow.service.v1.Environments.CreateUserWorkloadsSecret
Audit log type : Admin activity
Permissions : composer.userworkloadssecrets.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.Environments.CreateUserWorkloadsSecret"
DatabaseFailover
Method : google.cloud.orchestration.airflow.service.v1.Environments.DatabaseFailover
Audit log type : Admin activity
Permissions : composer.environments.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.Environments.DatabaseFailover"
DeleteEnvironment
Method : google.cloud.orchestration.airflow.service.v1.Environments.DeleteEnvironment
Audit log type : Admin activity
Permissions : composer.environments.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.Environments.DeleteEnvironment"
DeleteUserWorkloadsConfigMap
Method : google.cloud.orchestration.airflow.service.v1.Environments.DeleteUserWorkloadsConfigMap
Audit log type : Admin activity
Permissions : composer.userworkloadsconfigmaps.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.Environments.DeleteUserWorkloadsConfigMap"
DeleteUserWorkloadsSecret
Method : google.cloud.orchestration.airflow.service.v1.Environments.DeleteUserWorkloadsSecret
Audit log type : Admin activity
Permissions : composer.userworkloadssecrets.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.Environments.DeleteUserWorkloadsSecret"
ExecuteAirflowCommand
Method : google.cloud.orchestration.airflow.service.v1.Environments.ExecuteAirflowCommand
Audit log type : Admin activity
Permissions : composer.environments.executeAirflowCommand - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.Environments.ExecuteAirflowCommand"
FetchDatabaseProperties
Method : google.cloud.orchestration.airflow.service.v1.Environments.FetchDatabaseProperties
Audit log type : Data access
Permissions : composer.environments.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.Environments.FetchDatabaseProperties"
GetEnvironment
Method : google.cloud.orchestration.airflow.service.v1.Environments.GetEnvironment
Audit log type : Data access
Permissions : composer.environments.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.Environments.GetEnvironment"
GetUserWorkloadsConfigMap
Method : google.cloud.orchestration.airflow.service.v1.Environments.GetUserWorkloadsConfigMap
Audit log type : Data access
Permissions : composer.userworkloadsconfigmaps.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.Environments.GetUserWorkloadsConfigMap"
GetUserWorkloadsSecret
Method : google.cloud.orchestration.airflow.service.v1.Environments.GetUserWorkloadsSecret
Audit log type : Data access
Permissions : composer.userworkloadssecrets.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.Environments.GetUserWorkloadsSecret"
ListEnvironments
Method : google.cloud.orchestration.airflow.service.v1.Environments.ListEnvironments
Audit log type : Data access
Permissions : composer.environments.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.Environments.ListEnvironments"
ListUserWorkloadsConfigMaps
Method : google.cloud.orchestration.airflow.service.v1.Environments.ListUserWorkloadsConfigMaps
Audit log type : Data access
Permissions : composer.userworkloadsconfigmaps.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.Environments.ListUserWorkloadsConfigMaps"
ListUserWorkloadsSecrets
Method : google.cloud.orchestration.airflow.service.v1.Environments.ListUserWorkloadsSecrets
Audit log type : Data access
Permissions : composer.userworkloadssecrets.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.Environments.ListUserWorkloadsSecrets"
ListWorkloads
Method : google.cloud.orchestration.airflow.service.v1.Environments.ListWorkloads
Audit log type : Data access
Permissions : composer.environments.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.Environments.ListWorkloads"
LoadSnapshot
Method : google.cloud.orchestration.airflow.service.v1.Environments.LoadSnapshot
Audit log type : Admin activity
Permissions : composer.environments.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.Environments.LoadSnapshot"
PollAirflowCommand
Method : google.cloud.orchestration.airflow.service.v1.Environments.PollAirflowCommand
Audit log type : Admin activity
Permissions : composer.environments.executeAirflowCommand - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.Environments.PollAirflowCommand"
SaveSnapshot
Method : google.cloud.orchestration.airflow.service.v1.Environments.SaveSnapshot
Audit log type : Admin activity
Permissions : composer.environments.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.Environments.SaveSnapshot"
StopAirflowCommand
Method : google.cloud.orchestration.airflow.service.v1.Environments.StopAirflowCommand
Audit log type : Admin activity
Permissions : composer.environments.executeAirflowCommand - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.Environments.StopAirflowCommand"
UpdateEnvironment
Method : google.cloud.orchestration.airflow.service.v1.Environments.UpdateEnvironment
Audit log type : Admin activity
Permissions : composer.environments.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.Environments.UpdateEnvironment"
UpdateUserWorkloadsConfigMap
Method : google.cloud.orchestration.airflow.service.v1.Environments.UpdateUserWorkloadsConfigMap
Audit log type : Admin activity
Permissions : composer.userworkloadsconfigmaps.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.Environments.UpdateUserWorkloadsConfigMap"
UpdateUserWorkloadsSecret
Method : google.cloud.orchestration.airflow.service.v1.Environments.UpdateUserWorkloadsSecret
Audit log type : Admin activity
Permissions : composer.userworkloadssecrets.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.Environments.UpdateUserWorkloadsSecret"
google.cloud.orchestration.airflow.service.v1.ImageVersions
The following audit logs are associated with methods belonging to
google.cloud.orchestration.airflow.service.v1.ImageVersions .
ListImageVersions
Method : google.cloud.orchestration.airflow.service.v1.ImageVersions.ListImageVersions
Audit log type : Data access
Permissions : composer.imageversions.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.ImageVersions.ListImageVersions"
google.cloud.orchestration.airflow.service.v1beta1.Environments
The following audit logs are associated with methods belonging to
google.cloud.orchestration.airflow.service.v1beta1.Environments .
CheckUpgrade
Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.CheckUpgrade
Audit log type : Admin activity
Permissions : composer.environments.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.CheckUpgrade"
CreateEnvironment
Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.CreateEnvironment
Audit log type : Admin activity
Permissions : composer.environments.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.CreateEnvironment"
CreateUserWorkloadsConfigMap
Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.CreateUserWorkloadsConfigMap
Audit log type : Admin activity
Permissions : composer.userworkloadsconfigmaps.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.CreateUserWorkloadsConfigMap"
CreateUserWorkloadsSecret
Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.CreateUserWorkloadsSecret
Audit log type : Admin activity
Permissions : composer.userworkloadssecrets.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.CreateUserWorkloadsSecret"
DatabaseFailover
Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.DatabaseFailover
Audit log type : Admin activity
Permissions : composer.environments.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.DatabaseFailover"
DeleteEnvironment
Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.DeleteEnvironment
Audit log type : Admin activity
Permissions : composer.environments.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.DeleteEnvironment"
DeleteUserWorkloadsConfigMap
Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.DeleteUserWorkloadsConfigMap
Audit log type : Admin activity
Permissions : composer.userworkloadsconfigmaps.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.DeleteUserWorkloadsConfigMap"
DeleteUserWorkloadsSecret
Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.DeleteUserWorkloadsSecret
Audit log type : Admin activity
Permissions : composer.userworkloadssecrets.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.DeleteUserWorkloadsSecret"
ExecuteAirflowCommand
Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.ExecuteAirflowCommand
Audit log type : Admin activity
Permissions : composer.environments.executeAirflowCommand - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.ExecuteAirflowCommand"
FetchDatabaseProperties
Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.FetchDatabaseProperties
Audit log type : Data access
Permissions : composer.environments.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.FetchDatabaseProperties"
GetEnvironment
Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.GetEnvironment
Audit log type : Data access
Permissions : composer.environments.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.GetEnvironment"
GetUserWorkloadsConfigMap
Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.GetUserWorkloadsConfigMap
Audit log type : Data access
Permissions : composer.userworkloadsconfigmaps.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.GetUserWorkloadsConfigMap"
GetUserWorkloadsSecret
Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.GetUserWorkloadsSecret
Audit log type : Data access
Permissions : composer.userworkloadssecrets.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.GetUserWorkloadsSecret"
ListEnvironments
Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.ListEnvironments
Audit log type : Data access
Permissions : composer.environments.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.ListEnvironments"
ListUserWorkloadsConfigMaps
Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.ListUserWorkloadsConfigMaps
Audit log type : Data access
Permissions : composer.userworkloadsconfigmaps.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.ListUserWorkloadsConfigMaps"
ListUserWorkloadsSecrets
Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.ListUserWorkloadsSecrets
Audit log type : Data access
Permissions : composer.userworkloadssecrets.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.ListUserWorkloadsSecrets"
ListWorkloads
Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.ListWorkloads
Audit log type : Data access
Permissions : composer.environments.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.ListWorkloads"
LoadSnapshot
Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.LoadSnapshot
Audit log type : Admin activity
Permissions : composer.environments.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.LoadSnapshot"
PollAirflowCommand
Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.PollAirflowCommand
Audit log type : Admin activity
Permissions : composer.environments.executeAirflowCommand - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.PollAirflowCommand"
RestartWebServer
Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.RestartWebServer
Audit log type : Admin activity
Permissions : composer.environments.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.RestartWebServer"
SaveSnapshot
Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.SaveSnapshot
Audit log type : Admin activity
Permissions : composer.environments.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.SaveSnapshot"
StopAirflowCommand
Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.StopAirflowCommand
Audit log type : Admin activity
Permissions : composer.environments.executeAirflowCommand - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.StopAirflowCommand"
UpdateEnvironment
Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.UpdateEnvironment
Audit log type : Admin activity
Permissions : composer.environments.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.UpdateEnvironment"
UpdateUserWorkloadsConfigMap
Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.UpdateUserWorkloadsConfigMap
Audit log type : Admin activity
Permissions : composer.userworkloadsconfigmaps.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.UpdateUserWorkloadsConfigMap"
UpdateUserWorkloadsSecret
Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.UpdateUserWorkloadsSecret
Audit log type : Admin activity
Permissions : composer.userworkloadssecrets.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.UpdateUserWorkloadsSecret"
google.cloud.orchestration.airflow.service.v1beta1.ImageVersions
The following audit logs are associated with methods belonging to
google.cloud.orchestration.airflow.service.v1beta1.ImageVersions .
ListImageVersions
Method : google.cloud.orchestration.airflow.service.v1beta1.ImageVersions.ListImageVersions
Audit log type : Data access
Permissions : composer.imageversions.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.ImageVersions.ListImageVersions"
google.longrunning.Operations
The following audit logs are associated with methods belonging to
google.longrunning.Operations .
DeleteOperation
Method : google.longrunning.Operations.DeleteOperation
Audit log type : Admin activity
Permissions : composer.operations.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.DeleteOperation"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.longrunning.Operations.GetOperation
google.longrunning.Operations.ListOperations
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
