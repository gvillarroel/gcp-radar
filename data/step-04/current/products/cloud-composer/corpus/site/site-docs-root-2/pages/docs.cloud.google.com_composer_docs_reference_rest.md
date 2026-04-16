---
title: "Cloud Composer API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-versions
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/reference/rest
  title: "Cloud Composer API \_|\_ Google Cloud Documentation"
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
Reference
Send feedback
Cloud Composer API
Stay organized with collections
Save and categorize content based on your preferences.
Manages Apache Airflow environments on Google Cloud Platform.
REST Resource: v1beta1.projects.locations.environments
REST Resource:
v1beta1.projects.locations.environments.userWorkloadsConfigMaps
REST Resource: v1beta1.projects.locations.environments.userWorkloadsSecrets
REST Resource: v1beta1.projects.locations.environments.workloads
REST Resource: v1beta1.projects.locations.imageVersions
REST Resource: v1beta1.projects.locations.operations
REST Resource: v1.projects.locations.environments
REST Resource: v1.projects.locations.environments.userWorkloadsConfigMaps
REST Resource: v1.projects.locations.environments.userWorkloadsSecrets
REST Resource: v1.projects.locations.environments.workloads
REST Resource: v1.projects.locations.imageVersions
REST Resource: v1.projects.locations.operations
Service: composer.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://composer.googleapis.com/$discovery/rest?version=v1
https://composer.googleapis.com/$discovery/rest?version=v1beta1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://composer.googleapis.com
REST Resource: v1beta1.projects.locations.environments
Methods
checkUpgrade
POST /v1beta1/{environment=projects/*/locations/*/environments/*}:checkUpgrade
Check if an upgrade operation on the environment will succeed.
create
POST /v1beta1/{parent=projects/*/locations/*}/environments
Create a new environment.
databaseFailover
POST /v1beta1/{environment=projects/*/locations/*/environments/*}:databaseFailover
Triggers database failover (only for highly resilient environments).
delete
DELETE /v1beta1/{name=projects/*/locations/*/environments/*}
Delete an environment.
executeAirflowCommand
POST /v1beta1/{environment=projects/*/locations/*/environments/*}:executeAirflowCommand
Executes Airflow CLI command.
fetchDatabaseProperties
GET /v1beta1/{environment=projects/*/locations/*/environments/*}:fetchDatabaseProperties
Fetches database properties.
get
GET /v1beta1/{name=projects/*/locations/*/environments/*}
Get an existing environment.
list
GET /v1beta1/{parent=projects/*/locations/*}/environments
List environments.
loadSnapshot
POST /v1beta1/{environment=projects/*/locations/*/environments/*}:loadSnapshot
Loads a snapshot of a Cloud Composer environment.
patch
PATCH /v1beta1/{name=projects/*/locations/*/environments/*}
Update an environment.
pollAirflowCommand
POST /v1beta1/{environment=projects/*/locations/*/environments/*}:pollAirflowCommand
Polls Airflow CLI command execution and fetches logs.
restartWebServer
POST /v1beta1/{name=projects/*/locations/*/environments/*}:restartWebServer
Restart Airflow web server.
saveSnapshot
POST /v1beta1/{environment=projects/*/locations/*/environments/*}:saveSnapshot
Creates a snapshots of a Cloud Composer environment.
stopAirflowCommand
POST /v1beta1/{environment=projects/*/locations/*/environments/*}:stopAirflowCommand
Stops Airflow CLI command execution.
REST Resource: v1beta1.projects.locations.environments.userWorkloadsConfigMaps
Methods
create
POST /v1beta1/{parent=projects/*/locations/*/environments/*}/userWorkloadsConfigMaps
Creates a user workloads ConfigMap.
delete
DELETE /v1beta1/{name=projects/*/locations/*/environments/*/userWorkloadsConfigMaps/*}
Deletes a user workloads ConfigMap.
get
GET /v1beta1/{name=projects/*/locations/*/environments/*/userWorkloadsConfigMaps/*}
Gets an existing user workloads ConfigMap.
list
GET /v1beta1/{parent=projects/*/locations/*/environments/*}/userWorkloadsConfigMaps
Lists user workloads ConfigMaps.
update
PUT /v1beta1/{userWorkloadsConfigMap.name=projects/*/locations/*/environments/*/userWorkloadsConfigMaps/*}
Updates a user workloads ConfigMap.
REST Resource: v1beta1.projects.locations.environments.userWorkloadsSecrets
Methods
create
POST /v1beta1/{parent=projects/*/locations/*/environments/*}/userWorkloadsSecrets
Creates a user workloads Secret.
delete
DELETE /v1beta1/{name=projects/*/locations/*/environments/*/userWorkloadsSecrets/*}
Deletes a user workloads Secret.
get
GET /v1beta1/{name=projects/*/locations/*/environments/*/userWorkloadsSecrets/*}
Gets an existing user workloads Secret.
list
GET /v1beta1/{parent=projects/*/locations/*/environments/*}/userWorkloadsSecrets
Lists user workloads Secrets.
update
PUT /v1beta1/{userWorkloadsSecret.name=projects/*/locations/*/environments/*/userWorkloadsSecrets/*}
Updates a user workloads Secret.
REST Resource: v1beta1.projects.locations.environments.workloads
Methods
list
GET /v1beta1/{parent=projects/*/locations/*/environments/*}/workloads
Lists workloads in a Cloud Composer environment.
REST Resource: v1beta1.projects.locations.imageVersions
Methods
list
GET /v1beta1/{parent=projects/*/locations/*}/imageVersions
List ImageVersions for provided location.
REST Resource: v1beta1.projects.locations.operations
Methods
delete
DELETE /v1beta1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1beta1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1beta1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations.environments
Methods
checkUpgrade
POST /v1/{environment=projects/*/locations/*/environments/*}:checkUpgrade
Check if an upgrade operation on the environment will succeed.
create
POST /v1/{parent=projects/*/locations/*}/environments
Create a new environment.
databaseFailover
POST /v1/{environment=projects/*/locations/*/environments/*}:databaseFailover
Triggers database failover (only for highly resilient environments).
delete
DELETE /v1/{name=projects/*/locations/*/environments/*}
Delete an environment.
executeAirflowCommand
POST /v1/{environment=projects/*/locations/*/environments/*}:executeAirflowCommand
Executes Airflow CLI command.
fetchDatabaseProperties
GET /v1/{environment=projects/*/locations/*/environments/*}:fetchDatabaseProperties
Fetches database properties.
get
GET /v1/{name=projects/*/locations/*/environments/*}
Get an existing environment.
list
GET /v1/{parent=projects/*/locations/*}/environments
List environments.
loadSnapshot
POST /v1/{environment=projects/*/locations/*/environments/*}:loadSnapshot
Loads a snapshot of a Cloud Composer environment.
patch
PATCH /v1/{name=projects/*/locations/*/environments/*}
Update an environment.
pollAirflowCommand
POST /v1/{environment=projects/*/locations/*/environments/*}:pollAirflowCommand
Polls Airflow CLI command execution and fetches logs.
restartWebServer
POST /v1/{name=projects/*/locations/*/environments/*}:restartWebServer
Restart Airflow web server.
saveSnapshot
POST /v1/{environment=projects/*/locations/*/environments/*}:saveSnapshot
Creates a snapshots of a Cloud Composer environment.
stopAirflowCommand
POST /v1/{environment=projects/*/locations/*/environments/*}:stopAirflowCommand
Stops Airflow CLI command execution.
REST Resource: v1.projects.locations.environments.userWorkloadsConfigMaps
Methods
create
POST /v1/{parent=projects/*/locations/*/environments/*}/userWorkloadsConfigMaps
Creates a user workloads ConfigMap.
delete
DELETE /v1/{name=projects/*/locations/*/environments/*/userWorkloadsConfigMaps/*}
Deletes a user workloads ConfigMap.
get
GET /v1/{name=projects/*/locations/*/environments/*/userWorkloadsConfigMaps/*}
Gets an existing user workloads ConfigMap.
list
GET /v1/{parent=projects/*/locations/*/environments/*}/userWorkloadsConfigMaps
Lists user workloads ConfigMaps.
update
PUT /v1/{userWorkloadsConfigMap.name=projects/*/locations/*/environments/*/userWorkloadsConfigMaps/*}
Updates a user workloads ConfigMap.
REST Resource: v1.projects.locations.environments.userWorkloadsSecrets
Methods
create
POST /v1/{parent=projects/*/locations/*/environments/*}/userWorkloadsSecrets
Creates a user workloads Secret.
delete
DELETE /v1/{name=projects/*/locations/*/environments/*/userWorkloadsSecrets/*}
Deletes a user workloads Secret.
get
GET /v1/{name=projects/*/locations/*/environments/*/userWorkloadsSecrets/*}
Gets an existing user workloads Secret.
list
GET /v1/{parent=projects/*/locations/*/environments/*}/userWorkloadsSecrets
Lists user workloads Secrets.
update
PUT /v1/{userWorkloadsSecret.name=projects/*/locations/*/environments/*/userWorkloadsSecrets/*}
Updates a user workloads Secret.
REST Resource: v1.projects.locations.environments.workloads
Methods
list
GET /v1/{parent=projects/*/locations/*/environments/*}/workloads
Lists workloads in a Cloud Composer environment.
REST Resource: v1.projects.locations.imageVersions
Methods
list
GET /v1/{parent=projects/*/locations/*}/imageVersions
List ImageVersions for provided location.
REST Resource: v1.projects.locations.operations
Methods
delete
DELETE /v1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-30 UTC."],[],[]]
