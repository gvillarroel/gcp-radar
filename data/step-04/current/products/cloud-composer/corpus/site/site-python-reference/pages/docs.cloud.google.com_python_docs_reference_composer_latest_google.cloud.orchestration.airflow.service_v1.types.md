---
title: "Package service_v1.types (1.19.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/composer/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types
  title: "Package service_v1.types (1.19.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Package service_v1.types (1.19.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.19.0 (latest)
1.18.0
1.17.5
1.16.1
1.15.1
1.14.0
1.13.1
1.12.2
1.11.1
1.10.0
1.9.1
1.8.0
1.7.1
1.6.1
1.5.0
1.4.4
1.3.2
1.2.1
1.1.0
1.0.0
0.1.3
API documentation for service_v1.types package.
Classes
AirflowMetadataRetentionPolicyConfig
The policy for airflow metadata database retention.
CheckUpgradeRequest
Request to check whether image upgrade will succeed.
CheckUpgradeResponse
Message containing information about the result of an upgrade
check operation.
CloudDataLineageIntegration
Configuration for Cloud Data Lineage integration.
CreateEnvironmentRequest
Create a new environment.
CreateUserWorkloadsConfigMapRequest
Create user workloads ConfigMap request.
CreateUserWorkloadsSecretRequest
Create user workloads Secret request.
DataRetentionConfig
The configuration setting for Airflow database data retention
mechanism.
DatabaseConfig
The configuration of Cloud SQL instance that is used by the
Apache Airflow software.
DatabaseFailoverRequest
Request to trigger database failover (only for highly
resilient environments).
DatabaseFailoverResponse
Response for DatabaseFailoverRequest.
DeleteEnvironmentRequest
Delete an environment.
DeleteUserWorkloadsConfigMapRequest
Delete user workloads ConfigMap request.
DeleteUserWorkloadsSecretRequest
Delete user workloads Secret request.
EncryptionConfig
The encryption options for the Cloud Composer environment and its
dependencies.Supported for Cloud Composer environments in versions
composer-1.\ . -airflow- . .*.
Environment
An environment for running orchestration tasks.
EnvironmentConfig
Configuration information for an environment.
ExecuteAirflowCommandRequest
Execute Airflow Command request.
ExecuteAirflowCommandResponse
Response to ExecuteAirflowCommandRequest.
FetchDatabasePropertiesRequest
Request to fetch properties of environment's database.
FetchDatabasePropertiesResponse
Response for FetchDatabasePropertiesRequest.
GetEnvironmentRequest
Get an environment.
GetUserWorkloadsConfigMapRequest
Get user workloads ConfigMap request.
GetUserWorkloadsSecretRequest
Get user workloads Secret request.
IPAllocationPolicy
Configuration for controlling how IPs are allocated in the
GKE cluster running the Apache Airflow software.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
ImageVersion
ImageVersion information
ListEnvironmentsRequest
List environments in a project and location.
ListEnvironmentsResponse
The environments in a project and location.
ListImageVersionsRequest
List ImageVersions in a project and location.
ListImageVersionsResponse
The ImageVersions in a project and location.
ListUserWorkloadsConfigMapsRequest
List user workloads ConfigMaps request.
ListUserWorkloadsConfigMapsResponse
The user workloads ConfigMaps for a given environment.
ListUserWorkloadsSecretsRequest
List user workloads Secrets request.
ListUserWorkloadsSecretsResponse
The user workloads Secrets for a given environment.
ListWorkloadsRequest
Request for listing workloads in a Cloud Composer
environment.
ListWorkloadsResponse
Response to ListWorkloadsRequest.
LoadSnapshotRequest
Request to load a snapshot into a Cloud Composer environment.
LoadSnapshotResponse
Response to LoadSnapshotRequest.
MaintenanceWindow
The configuration settings for Cloud Composer maintenance window.
The following example:
::
{
"startTime":"2019-08-01T01:00:00Z"
"endTime":"2019-08-01T07:00:00Z"
"recurrence":"FREQ=WEEKLY;BYDAY=TU,WE"
}
would define a maintenance window between 01 and 07 hours UTC during
each Tuesday and Wednesday.
MasterAuthorizedNetworksConfig
Configuration options for the master authorized networks
feature. Enabled master authorized networks will disallow all
external traffic to access Kubernetes master through HTTPS
except traffic from the given CIDR blocks, Google Compute Engine
Public IPs and Google Prod IPs.
NetworkingConfig
Configuration options for networking connections in the
Composer 2 environment.
NodeConfig
The configuration information for the Kubernetes Engine nodes
running the Apache Airflow software.
OperationMetadata
Metadata describing an operation.
PollAirflowCommandRequest
Poll Airflow Command request.
PollAirflowCommandResponse
Response to PollAirflowCommandRequest.
PrivateClusterConfig
Configuration options for the private GKE cluster in a Cloud
Composer environment.
PrivateEnvironmentConfig
The configuration information for configuring a Private IP
Cloud Composer environment.
RecoveryConfig
The Recovery settings of an environment.
SaveSnapshotRequest
Request to create a snapshot of a Cloud Composer environment.
SaveSnapshotResponse
Response to SaveSnapshotRequest.
ScheduledSnapshotsConfig
The configuration for scheduled snapshot creation mechanism.
SoftwareConfig
Specifies the selection and configuration of software inside
the environment.
StopAirflowCommandRequest
Stop Airflow Command request.
StopAirflowCommandResponse
Response to StopAirflowCommandRequest.
StorageConfig
The configuration for data storage in the environment.
TaskLogsRetentionConfig
The configuration setting for Task Logs.
UpdateEnvironmentRequest
Update an environment.
UpdateUserWorkloadsConfigMapRequest
Update user workloads ConfigMap request.
UpdateUserWorkloadsSecretRequest
Update user workloads Secret request.
UserWorkloadsConfigMap
User workloads ConfigMap used by Airflow tasks that run with
Kubernetes executor or KubernetesPodOperator.
UserWorkloadsSecret
User workloads Secret used by Airflow tasks that run with
Kubernetes executor or KubernetesPodOperator.
WebServerConfig
The configuration settings for the Airflow web server App Engine
instance. Supported for Cloud Composer environments in versions
composer-1.\ . -airflow- . .*
WebServerNetworkAccessControl
Network-level access control policy for the Airflow web
server.
WorkloadsConfig
The Kubernetes workloads configuration for GKE cluster associated
with the Cloud Composer environment. Supported for Cloud Composer
environments in versions composer-2.\ . -airflow- . .* and newer.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-10 UTC."],[],[]]
