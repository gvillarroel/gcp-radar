---
title: "BigQueryConnectionConnection \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigqueryconnection/bigqueryconnectionconnection
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigqueryconnection/bigqueryconnectionconnection
  title: "BigQueryConnectionConnection \_|\_ Config Connector \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Config Connector
API and reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
BigQueryConnectionConnection
Property
Value
Google Cloud Service Name
BigQuery Connection
Google Cloud Service Documentation
/bigquery/docs/
Google Cloud REST Resource Name
v1beta1.projects.locations.connections
Google Cloud REST Resource Documentation
bigqueryconnection/rest/v1/projects.locations.connections
Config Connector Resource Short Names
gcpbigqueryconnectionconnection gcpbigqueryconnectionconnections bigqueryconnectionconnection
Config Connector Service Name
bigqueryconnection.googleapis.com
Config Connector Resource Fully Qualified Name
bigqueryconnectionconnections.bigqueryconnection.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
aws :
accessRole :
iamRoleID : string
azure :
customerTenantID : string
federatedApplicationClientID : string
cloudResource : {}
cloudSQL :
credential :
secretRef :
name : string
namespace : string
databaseRef :
external : string
name : string
namespace : string
instanceRef :
external : string
name : string
namespace : string
type : string
cloudSpanner :
databaseRef :
external : string
name : string
namespace : string
databaseRole : string
maxParallelism : integer
useDataBoost : boolean
useParallelism : boolean
useServerlessAnalytics : boolean
description : string
friendlyName : string
location : string
projectRef :
external : string
kind : string
name : string
namespace : string
resourceID : string
spark :
metastoreService :
metastoreServiceRef :
external : string
name : string
namespace : string
sparkHistoryServer :
dataprocClusterRef :
external : string
name : string
namespace : string
Fields
aws
Optional
object
Amazon Web Services (AWS) properties.
aws.accessRole
Required*
object
Authentication using Google owned service account to assume into customer's AWS IAM Role.
aws.accessRole.iamRoleID
Required*
string
The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection.
azure
Optional
object
Azure properties.
azure.customerTenantID
Required*
string
The id of customer's directory that host the data.
azure.federatedApplicationClientID
Optional
string
The client ID of the user's Azure Active Directory Application used for a federated connection.
cloudResource
Optional
object
Use Cloud Resource properties.
cloudSQL
Optional
object
Cloud SQL properties.
cloudSQL.credential
Required*
object
Cloud SQL credential.
cloudSQL.credential.secretRef
Optional
object
The Kubernetes Secret object that stores the "username" and "password" information. The Secret type has to be `kubernetes.io/basic-auth`.
cloudSQL.credential.secretRef.name
Required*
string
The `metadata.name` field of a Kubernetes `Secret`
cloudSQL.credential.secretRef.namespace
Optional
string
The `metadata.namespace` field of a Kubernetes `Secret`.
cloudSQL.databaseRef
Required*
object
Reference to the SQL Database.
cloudSQL.databaseRef.external
Optional
string
The SQL Database name, when not managed by Config Connector.
cloudSQL.databaseRef.name
Optional
string
The `name` field of a `SQLDatabase` resource.
cloudSQL.databaseRef.namespace
Optional
string
The `namespace` field of a `SQLDatabase` resource.
cloudSQL.instanceRef
Required*
object
Reference to the Cloud SQL instance ID.
cloudSQL.instanceRef.external
Optional
string
The SQLInstance selfLink, when not managed by Config Connector.
cloudSQL.instanceRef.name
Optional
string
The `name` field of a `SQLInstance` resource.
cloudSQL.instanceRef.namespace
Optional
string
The `namespace` field of a `SQLInstance` resource.
cloudSQL.type
Required*
string
Type of the Cloud SQL database.
cloudSpanner
Optional
object
Cloud Spanner properties.
cloudSpanner.databaseRef
Required*
object
Reference to a spanner database ID.
cloudSpanner.databaseRef.external
Optional
string
A reference to an externally managed SpannerDatabase resource. Should be in the format "projects/{{projectID}}/instances/{{instanceID}}/databases/{{databaseID}}".
cloudSpanner.databaseRef.name
Optional
string
The name of a SpannerDatabase resource.
cloudSpanner.databaseRef.namespace
Optional
string
The namespace of a SpannerDatabase resource.
cloudSpanner.databaseRole
Optional
string
Optional. Cloud Spanner database role for fine-grained access control.
The Cloud Spanner admin should have provisioned the database role with
appropriate permissions, such as `SELECT` and `INSERT`. Other users should
only use roles provided by their Cloud Spanner admins.
For more details, see [About fine-grained access control]
(https://cloud.google.com/spanner/docs/fgac-about).
REQUIRES: The database role name must start with a letter, and can only
contain letters, numbers, and underscores.
cloudSpanner.maxParallelism
Optional
integer
Allows setting max parallelism per query when executing on Spanner
independent compute resources. If unspecified, default values of
parallelism are chosen that are dependent on the Cloud Spanner instance
configuration.
REQUIRES: `use_parallelism` must be set.
REQUIRES: Either `use_data_boost` or `use_serverless_analytics` must be
set.
cloudSpanner.useDataBoost
Optional
boolean
If set, the request will be executed via Spanner independent compute
resources.
REQUIRES: `use_parallelism` must be set.
NOTE: `use_serverless_analytics` will be deprecated. Prefer
`use_data_boost` over `use_serverless_analytics`.
cloudSpanner.useParallelism
Optional
boolean
If parallelism should be used when reading from Cloud Spanner
cloudSpanner.useServerlessAnalytics
Optional
boolean
If the serverless analytics service should be used to read data from Cloud Spanner. Note: `use_parallelism` must be set when using serverless analytics.
description
Optional
string
User provided description.
friendlyName
Optional
string
User provided display name for the connection.
location
Required*
string
Immutable.
projectRef
Required*
object
The Project that this resource belongs to.
projectRef.external
Optional
string
The `projectID` field of a project, when not managed by Config Connector.
projectRef.kind
Optional
string
The kind of the Project resource; optional but must be `Project` if provided.
projectRef.name
Optional
string
The `name` field of a `Project` resource.
projectRef.namespace
Optional
string
The `namespace` field of a `Project` resource.
resourceID
Optional
string
Immutable. Optional. The BigQuery Connection ID used for resource creation or acquisition. For creation: If specified, this value is used as the connection ID. If not provided, a UUID will be generated and assigned as the connection ID. For acquisition: This field must be provided to identify the connection resource to acquire.
spark
Optional
object
Spark properties.
spark.metastoreService
Optional
object
Optional. Dataproc Metastore Service configuration for the connection.
spark.metastoreService.metastoreServiceRef
Optional
object
Optional. Resource name of an existing Dataproc Metastore service.
Example:
* `projects/[project_id]/locations/[region]/services/[service_id]`
spark.metastoreService.metastoreServiceRef.external
Optional
string
A reference to an externally managed MetastoreService resource. Should be in the format "projects/{{projectID}}/locations/{{location}}/services/{{serviceID}}".
spark.metastoreService.metastoreServiceRef.name
Optional
string
The name of a MetastoreService resource.
spark.metastoreService.metastoreServiceRef.namespace
Optional
string
The namespace of a MetastoreService resource.
spark.sparkHistoryServer
Optional
object
Optional. Spark History Server configuration for the connection.
spark.sparkHistoryServer.dataprocClusterRef
Optional
object
Optional. Resource name of an existing Dataproc Cluster to act as a Spark
History Server for the connection.
Example:
* `projects/[project_id]/regions/[region]/clusters/[cluster_name]`
spark.sparkHistoryServer.dataprocClusterRef.external
Optional
string
A reference to an externally managed DataprocCluster resource. Should be in the format "projects/{{projectID}}/regions/{{region}}/clusters/{{clusterName}}".
spark.sparkHistoryServer.dataprocClusterRef.name
Optional
string
The name of a DataprocCluster resource.
spark.sparkHistoryServer.dataprocClusterRef.namespace
Optional
string
The namespace of a DataprocCluster resource.
* Field is required when parent field is specified
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
externalRef : string
observedGeneration : integer
observedState :
aws :
accessRole :
identity : string
azure :
application : string
clientID : string
identity : string
objectID : string
redirectUri : string
cloudResource :
serviceAccountID : string
cloudSQL :
serviceAccountID : string
description : string
friendlyName : string
hasCredential : boolean
spark :
serviceAccountID : string
Fields
conditions
list (object)
Conditions represent the latest available observations of the object's current state.
conditions[]
object
conditions[].lastTransitionTime
string
Last time the condition transitioned from one status to another.
conditions[].message
string
Human-readable message indicating details about last transition.
conditions[].reason
string
Unique, one-word, CamelCase reason for the condition's last transition.
conditions[].status
string
Status is the status of the condition. Can be True, False, Unknown.
conditions[].type
string
Type is the type of the condition.
externalRef
string
A unique specifier for the BigQueryConnectionConnection resource in GCP.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in GCP.
observedState.aws
object
observedState.aws.accessRole
object
observedState.aws.accessRole.identity
string
A unique Google-owned and Google-generated identity for the Connection. This identity will be used to access the user's AWS IAM Role.
observedState.azure
object
observedState.azure.application
string
The name of the Azure Active Directory Application.
observedState.azure.clientID
string
The client id of the Azure Active Directory Application.
observedState.azure.identity
string
A unique Google-owned and Google-generated identity for the Connection. This identity will be used to access the user's Azure Active Directory Application.
observedState.azure.objectID
string
The object id of the Azure Active Directory Application.
observedState.azure.redirectUri
string
The URL user will be redirected to after granting consent during connection setup.
observedState.cloudResource
object
observedState.cloudResource.serviceAccountID
string
The account ID of the service created for the purpose of this
connection.
The service account does not have any permissions associated with it
when it is created. After creation, customers delegate permissions
to the service account. When the connection is used in the context of an
operation in BigQuery, the service account will be used to connect to the
desired resources in GCP.
The account ID is in the form of:
@gcp-sa-bigquery-cloudresource.iam.gserviceaccount.com
observedState.cloudSQL
object
observedState.cloudSQL.serviceAccountID
string
The account ID of the service used for the purpose of this connection.
When the connection is used in the context of an operation in
BigQuery, this service account will serve as the identity being used for
connecting to the CloudSQL instance specified in this connection.
observedState.description
string
The description for the connection.
observedState.friendlyName
string
The display name for the connection.
observedState.hasCredential
boolean
Output only. True, if credential is configured for this connection.
observedState.spark
object
observedState.spark.serviceAccountID
string
The account ID of the service created for the purpose of this
connection.
The service account does not have any permissions associated with it when
it is created. After creation, customers delegate permissions to the
service account. When the connection is used in the context of a stored
procedure for Apache Spark in BigQuery, the service account is used to
connect to the desired resources in Google Cloud.
The account ID is in the form of:
bqcx- - @gcp-sa-bigquery-consp.iam.gserviceaccount.com
Sample YAML(s)
Aws Connection
# Copyright 2024 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : bigqueryconnection.cnrm.cloud.google.com/v1beta1
kind : BigQueryConnectionConnection
metadata :
name : bigqueryconnectionconnection-sample
spec :
location : aws-us-east-1
projectRef :
# Replace ${PROJECT_ID?} with your project ID
external : ${PROJECT_ID?}
aws :
accessRole :
iamRoleID : "arn:aws:iam::999999999999:role/omnirole"
Azure Connection
# Copyright 2024 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : bigqueryconnection.cnrm.cloud.google.com/v1beta1
kind : BigQueryConnectionConnection
metadata :
name : bigqueryconnectionconnection-sample
spec :
location : "azure-eastus2"
projectRef :
# Replace ${PROJECT_ID?} with your project ID
external : ${PROJECT_ID?}
azure :
customerTenantID : "customer-tenant-id-1111111"
federatedApplicationClientID : "b43eeeee-eeee-eeee-eeee-a480155501ce"
Cloudresource Connection
# Copyright 2024 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : bigqueryconnection.cnrm.cloud.google.com/v1alpha1
kind : BigQueryConnectionConnection
metadata :
name : bigqueryconnectionconnection-sample
spec :
location : us-central1
projectRef :
# Replace ${PROJECT_ID?} with your project ID
external : ${PROJECT_ID?}
cloudResource : {}
Cloudspanner Connection
# Copyright 2024 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : bigqueryconnection.cnrm.cloud.google.com/v1beta1
kind : BigQueryConnectionConnection
metadata :
name : bigqueryconnectionconnection-sample
spec :
location : us-central1
projectRef :
# Replace ${PROJECT_ID?} with your project ID
external : ${PROJECT_ID?}
cloudSpanner :
databaseRef :
name : bigqueryconnection-dep
maxParallelism : 100
useDataBoost : True
useParallelism : True
databaseRole : "admin"
---
apiVersion : spanner.cnrm.cloud.google.com/v1beta1
kind : SpannerDatabase
metadata :
name : bigqueryconnection-dep
spec :
instanceRef :
name : bigqueryconnection-dep
ddl :
- "CREATE TABLE t1 (t1 INT64 NOT NULL,) PRIMARY KEY(t1)"
---
apiVersion : spanner.cnrm.cloud.google.com/v1beta1
kind : SpannerInstance
metadata :
name : bigqueryconnection-dep
annotations :
alpha.cnrm.cloud.google.com/reconciler : "direct"
spec :
config : regional-us-west1
displayName : BigQueryConnection Dependency
Cloudsql Connection
# Copyright 2024 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : bigqueryconnection.cnrm.cloud.google.com/v1beta1
kind : BigQueryConnectionConnection
metadata :
name : bigqueryconnectionconnection-sample
spec :
location : us-central1
projectRef :
# Replace ${PROJECT_ID?} with your project ID
external : ${PROJECT_ID?}
cloudSQL :
instanceRef :
name : bigqueryconnection-dep
databaseRef :
name : bigqueryconnection-dep
type : "MYSQL"
credential :
secretRef :
name : bigqueryconnection-dep
---
apiVersion : v1
kind : Secret
metadata :
name : bigqueryconnection-dep
type : kubernetes.io/basic-auth
stringData :
username : sqluser-${uniqueId}
password : cGFzc3dvcmQ=
---
apiVersion : sql.cnrm.cloud.google.com/v1beta1
kind : SQLDatabase
metadata :
name : bigqueryconnection-dep
spec :
charset : utf8
instanceRef :
name : bigqueryconnection-dep
---
apiVersion : sql.cnrm.cloud.google.com/v1beta1
kind : SQLInstance
metadata :
name : bigqueryconnection-dep
spec :
region : us-central1
databaseVersion : MYSQL_5_7
settings :
locationPreference :
zone : us-central1-a
tier : db-custom-1-3840
---
apiVersion : sql.cnrm.cloud.google.com/v1beta1
kind : SQLUser
metadata :
labels :
label-one : "value-one"
name : bigqueryconnection-dep
spec :
instanceRef :
name : bigqueryconnection-dep
host : foo
password :
valueFrom :
secretKeyRef :
name : bigqueryconnection-dep
key : password
Spark Connection
# Copyright 2024 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : bigqueryconnection.cnrm.cloud.google.com/v1beta1
kind : BigQueryConnectionConnection
metadata :
name : bigqueryconnectionconnection-sample
spec :
location : us-central1
projectRef :
# Replace ${PROJECT_ID?} with your project ID
external : ${PROJECT_ID?}
spark : {}
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
