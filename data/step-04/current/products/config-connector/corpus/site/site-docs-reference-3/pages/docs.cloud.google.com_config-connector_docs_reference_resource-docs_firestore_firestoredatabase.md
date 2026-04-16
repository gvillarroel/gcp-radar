---
title: "FirestoreDatabase \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/firestore/firestoredatabase
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/firestore/firestoredatabase
  title: "FirestoreDatabase \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
FirestoreDatabase
Property
Value
Google Cloud Service Name
Firestore
Google Cloud Service Documentation
/firestore/docs/
Google Cloud REST Resource Name
v1.projects.databases
Google Cloud REST Resource Documentation
/firestore/docs/reference/rest/v1/projects.databases
Config Connector Resource Short Names
gcpfirestoredatabase gcpfirestoredatabases firestoredatabase
Config Connector Service Name
firestore.googleapis.com
Config Connector Resource Fully Qualified Name
firestoredatabases.firestore.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
concurrencyMode : string
deleteProtectionState : string
locationID : string
pointInTimeRecoveryEnablement : string
projectRef :
external : string
kind : string
name : string
namespace : string
resourceID : string
Fields
concurrencyMode
Optional
string
The concurrency control mode to use for this database. See https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases#concurrencymode for more info.
deleteProtectionState
Optional
string
State of delete protection for the database.
locationID
Optional
string
The location of the database. Available locations are listed at https://cloud.google.com/firestore/docs/locations.
pointInTimeRecoveryEnablement
Optional
string
Whether to enable the PITR feature on this database. See https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases#pointintimerecoveryenablement for more info.
projectRef
Required*
object
Immutable. The Project that this resource belongs to.
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
The FirestoreDatabase name. If not given, the metadata.name will be used.
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
createTime : string
earliestVersionTime : string
etag : string
keyPrefix : string
uid : string
updateTime : string
versionRetentionPeriod : string
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
A unique specifier for the FirestoreDatabase resource in Google Cloud.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in Google Cloud.
observedState.createTime
string
Output only. The timestamp at which this database was created. Databases created before 2016 do not populate create_time.
observedState.earliestVersionTime
string
Output only. The earliest timestamp at which older versions of the data can
be read from the database. See [version_retention_period] above; this field
is populated with `now - version_retention_period`.
This value is continuously updated, and becomes stale the moment it is
queried. If you are using this value to recover data, make sure to account
for the time from the moment when the value is queried to the moment when
you initiate the recovery.
observedState.etag
string
This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
observedState.keyPrefix
string
Output only. The key_prefix for this database. This key_prefix is used, in
combination with the project id (" ~ ") to construct
the application id that is returned from the Cloud Datastore APIs in Google
App Engine first generation runtimes.
This value may be empty in which case the appid to use for URL-encoded keys
is the project_id (eg: foo instead of v~foo).
observedState.uid
string
Output only. The system-generated UUID4 for this Database.
observedState.updateTime
string
Output only. The timestamp at which this database was most recently updated. Note this only includes updates to the database resource and not data contained by the database.
observedState.versionRetentionPeriod
string
Output only. The period during which past versions of data are retained in
the database.
Any [read][google.firestore.v1.GetDocumentRequest.read_time]
or [query][google.firestore.v1.ListDocumentsRequest.read_time] can specify
a `read_time` within this window, and will read the state of the database
at that time.
If the PITR feature is enabled, the retention period is 7 days. Otherwise,
the retention period is 1 hour.
Sample YAML(s)
Basic FirestoreDatabase
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
apiVersion : firestore.cnrm.cloud.google.com/v1beta1
kind : FirestoreDatabase
metadata :
name : firestoredatabase-sample
spec :
projectRef :
external : ${PROJECT_NUMBER1}
locationID : us-west2
concurrencyMode : OPTIMISTIC
pointInTimeRecoveryEnablement : POINT_IN_TIME_RECOVERY_ENABLED
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
