---
title: "BigQueryDataset \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquery/bigquerydataset
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/reference/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquery/bigquerydataset
  title: "BigQueryDataset \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
BigQueryDataset
Note: Resource-level IAM permissions for BigQueryDataset must be set through
the resource's spec.access field. You cannot reference BigQueryDataset
resources using IAMPolicy , IAMPartialPolicy , and IAMPolicyMember since
BigQueryDataset does not support IAM. Warning: You must specify the spec.access[].role field using the (legacy)
basic role format (e.g. OWNER ) instead of the (newer) predefined role format
( e.g. roles/bigquery.dataOwner ). The API accepts both formats, but it will
always return the basic format which results in Config Connector
repeatedly detecting drift and updating the BigQueryDataset resource. See a complete
list of basic roles with equivalent predefined roles at
Basic roles for datasets .
Property
Value
Google Cloud Service Name
BigQuery
Google Cloud Service Documentation
/bigquery/docs/
Google Cloud REST Resource Name
bigquery/v2/datasets
Google Cloud REST Resource Documentation
/bigquery/docs/reference/rest/v2/datasets
Config Connector Resource Short Names
gcpbigquerydataset gcpbigquerydatasets bigquerydataset
Config Connector Service Name
bigquery.googleapis.com
Config Connector Resource Fully Qualified Name
bigquerydatasets.bigquery.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Annotations
Fields
cnrm.cloud.google.com/delete-contents-on-destroy
Spec
Schema
access :
- dataset :
dataset :
datasetId : string
projectId : string
targetTypes :
- string
domain : string
groupByEmail : string
iamMember : string
role : string
routine :
datasetId : string
projectId : string
routineId : string
specialGroup : string
userByEmail : string
view :
datasetId : string
projectId : string
tableId : string
defaultCollation : string
defaultEncryptionConfiguration :
kmsKeyRef :
external : string
name : string
namespace : string
defaultPartitionExpirationMs : integer
defaultTableExpirationMs : integer
description : string
friendlyName : string
isCaseInsensitive : boolean
location : string
maxTimeTravelHours : string
projectRef :
external : string
kind : string
name : string
namespace : string
resourceID : string
storageBillingModel : string
Fields
access
Optional
list (object)
An array of objects that define dataset access for one or more entities.
access[]
Optional
object
access[].dataset
Optional
object
[Pick one] A grant authorizing all resources of a particular type in a particular dataset access to this dataset. Only views are supported for now. The role field is not required when this field is set. If that dataset is deleted and re-created, its access needs to be granted again via an update operation.
access[].dataset.dataset
Required*
object
The dataset this entry applies to.
access[].dataset.dataset.datasetId
Required*
string
A unique Id for this dataset, without the project name. The Id must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.
access[].dataset.dataset.projectId
Required*
string
The ID of the project containing this dataset.
access[].dataset.targetTypes
Required*
list (string)
Which resources in the dataset this entry applies to. Currently, only views are supported, but additional target types may be added in the future.
access[].dataset.targetTypes[]
Required*
string
access[].domain
Optional
string
[Pick one] A domain to grant access to. Any users signed in with the domain specified will be granted the specified access. Example: "example.com". Maps to IAM policy member "domain:DOMAIN".
access[].groupByEmail
Optional
string
[Pick one] An email address of a Google Group to grant access to. Maps to IAM policy member "group:GROUP".
access[].iamMember
Optional
string
[Pick one] Some other type of member that appears in the IAM Policy but isn't a user, group, domain, or special group.
access[].role
Optional
string
An IAM role ID that should be granted to the user, group,
or domain specified in this access entry.
The following legacy mappings will be applied:
* `OWNER`: `roles/bigquery.dataOwner`
* `WRITER`: `roles/bigquery.dataEditor`
* `READER`: `roles/bigquery.dataViewer`
This field will accept any of the above formats, but will return only
the legacy format. For example, if you set this field to
"roles/bigquery.dataOwner", it will be returned back as "OWNER".
access[].routine
Optional
object
[Pick one] A routine from a different dataset to grant access to. Queries executed against that routine will have read access to views/tables/routines in this dataset. Only UDF is supported for now. The role field is not required when this field is set. If that routine is updated by any user, access to the routine needs to be granted again via an update operation.
access[].routine.datasetId
Required*
string
The ID of the dataset containing this routine.
access[].routine.projectId
Required*
string
The ID of the project containing this routine.
access[].routine.routineId
Required*
string
The Id of the routine. The Id must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.
access[].specialGroup
Optional
string
[Pick one] A special group to grant access to. Possible values include:
* projectOwners: Owners of the enclosing project.
* projectReaders: Readers of the enclosing project.
* projectWriters: Writers of the enclosing project.
* allAuthenticatedUsers: All authenticated BigQuery users.
Maps to similarly-named IAM members.
access[].userByEmail
Optional
string
[Pick one] An email address of a user to grant access to. For example: fred@example.com. Maps to IAM policy member "user:EMAIL" or "serviceAccount:EMAIL".
access[].view
Optional
object
[Pick one] A view from a different dataset to grant access to. Queries executed against that view will have read access to views/tables/routines in this dataset. The role field is not required when this field is set. If that view is updated by any user, access to the view needs to be granted again via an update operation.
access[].view.datasetId
Required*
string
The ID of the dataset containing this table.
access[].view.projectId
Required*
string
The ID of the project containing this table.
access[].view.tableId
Required*
string
The Id of the table. The Id can contain Unicode characters in category L (letter), M (mark), N (number), Pc (connector, including underscore), Pd (dash), and Zs (space). For more information, see [General Category](https://wikipedia.org/wiki/Unicode_character_property#General_Category). The maximum length is 1,024 characters. Certain operations allow suffixing of the table Id with a partition decorator, such as `sample_table$20190123`.
defaultCollation
Optional
string
Optional. Defines the default collation specification of future tables
created in the dataset. If a table is created in this dataset without
table-level default collation, then the table inherits the dataset default
collation, which is applied to the string fields that do not have explicit
collation specified. A change to this field affects only tables created
afterwards, and does not alter the existing tables.
The following values are supported:
* 'und:ci': undetermined locale, case-insensitive.
* '': empty string. Default to case-sensitive behavior.
defaultEncryptionConfiguration
Optional
object
The default encryption key for all tables in the dataset. After this property is set, the encryption key of all newly-created tables in the dataset is set to this value unless the table creation request or query explicitly overrides the key.
defaultEncryptionConfiguration.kmsKeyRef
Optional
object
Optional. Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key.
defaultEncryptionConfiguration.kmsKeyRef.external
Optional
string
A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`.
defaultEncryptionConfiguration.kmsKeyRef.name
Optional
string
The `name` of a `KMSCryptoKey` resource.
defaultEncryptionConfiguration.kmsKeyRef.namespace
Optional
string
The `namespace` of a `KMSCryptoKey` resource.
defaultPartitionExpirationMs
Optional
integer
This default partition expiration, expressed in milliseconds.
When new time-partitioned tables are created in a dataset where this
property is set, the table will inherit this value, propagated as the
`TimePartitioning.expirationMs` property on the new table. If you set
`TimePartitioning.expirationMs` explicitly when creating a table,
the `defaultPartitionExpirationMs` of the containing dataset is ignored.
When creating a partitioned table, if `defaultPartitionExpirationMs`
is set, the `defaultTableExpirationMs` value is ignored and the table
will not be inherit a table expiration deadline.
defaultTableExpirationMs
Optional
integer
Optional. The default lifetime of all tables in the dataset, in milliseconds. The minimum lifetime value is 3600000 milliseconds (one hour). To clear an existing default expiration with a PATCH request, set to 0. Once this property is set, all newly-created tables in the dataset will have an expirationTime property set to the creation time plus the value in this property, and changing the value will only affect new tables, not existing ones. When the expirationTime for a given table is reached, that table will be deleted automatically. If a table's expirationTime is modified or removed before the table expires, or if you provide an explicit expirationTime when creating a table, that value takes precedence over the default expiration time indicated by this property.
description
Optional
string
Optional. A user-friendly description of the dataset.
friendlyName
Optional
string
Optional. A descriptive name for the dataset.
isCaseInsensitive
Optional
boolean
Optional. TRUE if the dataset and its table names are case-insensitive, otherwise FALSE. By default, this is FALSE, which means the dataset and its table names are case-sensitive. This field does not affect routine references.
location
Optional
string
Optional. The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations.
maxTimeTravelHours
Optional
string
Optional. Defines the time travel window in hours. The value can be from 48 to 168 hours (2 to 7 days). The default value is 168 hours if this is not set.
projectRef
Optional
object
Optional. The project that this resource belongs to.
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
The BigQueryDataset name. If not given, the metadata.name will be used.
storageBillingModel
Optional
string
Optional. Updates storage_billing_model for the dataset.
* Field is required when parent field is specified
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
creationTime : integer
etag : string
externalRef : string
lastModifiedTime : integer
observedGeneration : integer
observedState :
location : string
selfLink : string
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
creationTime
integer
Output only. The time when this dataset was created, in milliseconds since the epoch.
etag
string
Output only. A hash of the resource.
externalRef
string
A unique specifier for the BigQueryAnalyticsHubDataExchangeListing resource in GCP.
lastModifiedTime
integer
Output only. The date when this dataset was last modified, in milliseconds since the epoch.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in GCP.
observedState.location
string
Optional. If the location is not specified in the spec, the GCP server defaults to a location and will be captured here.
selfLink
string
Output only. A URL that can be used to access the resource again. You can use this URL in Get or Update requests to the resource.
Sample YAML(s)
Typical Use Case
# Copyright 2020 Google LLC
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
apiVersion : bigquery.cnrm.cloud.google.com/v1beta1
kind : BigQueryDataset
metadata :
annotations :
cnrm.cloud.google.com/delete-contents-on-destroy : "false"
name : bigquerydatasetsample
spec :
defaultTableExpirationMs : 3600000
description : "BigQuery Dataset Sample"
friendlyName : bigquerydataset-sample
location : US
access :
- role : OWNER
# Replace ${PROJECT_ID?} with the ID of the project where your service
# account lives.
userByEmail : bigquerydataset-dep@${PROJECT_ID?}.iam.gserviceaccount.com
- role : WRITER
specialGroup : projectWriters
- role : READER
domain : google.com
---
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMServiceAccount
metadata :
annotations :
# Replace ${PROJECT_ID?} with your project ID.
cnrm.cloud.google.com/project-id : "${PROJECT_ID?}"
name : bigquerydataset-dep
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
