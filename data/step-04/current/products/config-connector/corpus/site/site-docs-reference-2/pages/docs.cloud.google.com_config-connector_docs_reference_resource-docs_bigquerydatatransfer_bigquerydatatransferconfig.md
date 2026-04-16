---
title: "BigQueryDataTransferConfig \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquerydatatransfer/bigquerydatatransferconfig
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/reference/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquerydatatransfer/bigquerydatatransferconfig
  title: "BigQueryDataTransferConfig \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
BigQueryDataTransferConfig
Property
Value
Google Cloud Service Name
BigQuery Data Transfer
Google Cloud Service Documentation
/bigquery/docs/
Google Cloud REST Resource Name
v1beta1.projects.locations.transferConfigs
Google Cloud REST Resource Documentation
/bigquery/docs/reference/datatransfer/rest/v1/projects.locations.transferConfigs
Config Connector Resource Short Names
gcpbigquerydatatransferconfig gcpbigquerydatatransferconfigs bigquerydatatransferconfig
Config Connector Service Name
bigquerydatatransfer.googleapis.com
Config Connector Resource Fully Qualified Name
bigquerydatatransferconfigs.bigquerydatatransfer.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
dataRefreshWindowDays : integer
dataSourceID : string
datasetRef :
external : string
name : string
namespace : string
disabled : boolean
displayName : string
emailPreferences :
enableFailureEmail : boolean
encryptionConfiguration :
kmsKeyRef :
external : string
name : string
namespace : string
location : string
params :
string : string
projectRef :
external : string
kind : string
name : string
namespace : string
pubSubTopicRef :
external : string
name : string
namespace : string
resourceID : string
schedule : string
scheduleOptions :
disableAutoScheduling : boolean
endTime : string
startTime : string
scheduleOptionsV2 :
eventDrivenSchedule :
pubSubSubscriptionRef :
external : string
name : string
namespace : string
manualSchedule : {}
timeBasedSchedule :
endTime : string
schedule : string
startTime : string
serviceAccountRef :
external : string
name : string
namespace : string
Fields
dataRefreshWindowDays
Optional
integer
The number of days to look back to automatically refresh the data. For example, if `data_refresh_window_days = 10`, then every day BigQuery reingests data for [today-10, today-1], rather than ingesting data for just [today-1]. Only valid if the data source supports the feature. Set the value to 0 to use the default value.
dataSourceID
Required
string
Immutable. Data source ID. This cannot be changed once data transfer is created. The full list of available data source IDs can be returned through an API call: https://cloud.google.com/bigquery-transfer/docs/reference/datatransfer/rest/v1/projects.locations.dataSources/list
datasetRef
Optional
object
The BigQuery target dataset id.
datasetRef.external
Optional
string
A reference to an externally-managed BigQueryDataset resource. Should be in the format "projects/{{projectID}}/datasets/{{datasetID}}".
datasetRef.name
Optional
string
The name of a BigQueryDataset resource.
datasetRef.namespace
Optional
string
The namespace of a BigQueryDataset resource.
disabled
Optional
boolean
Is this config disabled. When set to true, no runs will be scheduled for this transfer config.
displayName
Optional
string
User specified display name for the data transfer.
emailPreferences
Optional
object
Email notifications will be sent according to these preferences to the email address of the user who owns this transfer config.
emailPreferences.enableFailureEmail
Optional
boolean
If true, email notifications will be sent on transfer run failures.
encryptionConfiguration
Optional
object
The encryption configuration part. Currently, it is only used for the optional KMS key name. The BigQuery service account of your project must be granted permissions to use the key. Read methods will return the key name applied in effect. Write methods will apply the key if it is present, or otherwise try to apply project default keys if it is absent.
encryptionConfiguration.kmsKeyRef
Optional
object
The KMS key used for encrypting BigQuery data.
encryptionConfiguration.kmsKeyRef.external
Optional
string
A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`.
encryptionConfiguration.kmsKeyRef.name
Optional
string
The `name` of a `KMSCryptoKey` resource.
encryptionConfiguration.kmsKeyRef.namespace
Optional
string
The `namespace` of a `KMSCryptoKey` resource.
location
Required
string
Immutable.
params
Required
map (key: string, value: string)
Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer' section for each data source. For example the parameters for Cloud Storage transfers are listed here: https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq
projectRef
Required
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
pubSubTopicRef
Optional
object
Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish.
pubSubTopicRef.external
Optional
string
A reference to an externally managed PubSubTopic resource. Should be in the format "projects/{{projectID}}/topics/{{topicID}}".
pubSubTopicRef.name
Optional
string
The name of a PubSubTopic resource.
pubSubTopicRef.namespace
Optional
string
The namespace of a PubSubTopic resource.
resourceID
Optional
string
The BigQueryDataTransferConfig name. If not given, the metadata.name will be used.
schedule
Optional
string
Data transfer schedule.
If the data source does not support a custom schedule, this should be
empty. If it is empty, the default value for the data source will be used.
The specified times are in UTC.
Examples of valid format:
`1st,3rd monday of month 15:30`,
`every wed,fri of jan,jun 13:15`, and
`first sunday of quarter 00:00`.
See more explanation about the format here:
https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format
NOTE: The minimum interval time between recurring transfers depends on the
data source; refer to the documentation for your data source.
scheduleOptions
Optional
object
Options customizing the data transfer schedule.
scheduleOptions.disableAutoScheduling
Optional
boolean
If true, automatic scheduling of data transfer runs for this configuration will be disabled. The runs can be started on ad-hoc basis using StartManualTransferRuns API. When automatic scheduling is disabled, the TransferConfig.schedule field will be ignored.
scheduleOptions.endTime
Optional
string
Defines time to stop scheduling transfer runs. A transfer run cannot be scheduled at or after the end time. The end time can be changed at any moment. The time when a data transfer can be triggered manually is not limited by this option.
scheduleOptions.startTime
Optional
string
Specifies time to start scheduling transfer runs. The first run will be scheduled at or after the start time according to a recurrence pattern defined in the schedule string. The start time can be changed at any moment. The time when a data transfer can be triggered manually is not limited by this option.
scheduleOptionsV2
Optional
object
Options customizing different types of data transfer schedule. This field replaces "schedule" and "schedule_options" fields. ScheduleOptionsV2 cannot be used together with ScheduleOptions/Schedule.
scheduleOptionsV2.eventDrivenSchedule
Optional
object
Event driven transfer schedule options. If set, the transfer will be scheduled upon events arrival.
scheduleOptionsV2.eventDrivenSchedule.pubSubSubscriptionRef
Optional
object
Pub/Sub subscription used to receive events. Only Google Cloud Storage data source support this option.
scheduleOptionsV2.eventDrivenSchedule.pubSubSubscriptionRef.external
Optional
string
A reference to an externally managed PubSubSubscription resource. Should be in the format "projects/{{projectID}}/subscriptions/{{subscriptionID}}".
scheduleOptionsV2.eventDrivenSchedule.pubSubSubscriptionRef.name
Optional
string
The name of a PubSubSubscription resource.
scheduleOptionsV2.eventDrivenSchedule.pubSubSubscriptionRef.namespace
Optional
string
The namespace of a PubSubSubscription resource.
scheduleOptionsV2.manualSchedule
Optional
object
Manual transfer schedule. If set, the transfer run will not be auto-scheduled by the system, unless the client invokes StartManualTransferRuns. This is equivalent to disable_auto_scheduling = true.
scheduleOptionsV2.timeBasedSchedule
Optional
object
Time based transfer schedule options. This is the default schedule option.
scheduleOptionsV2.timeBasedSchedule.endTime
Optional
string
Defines time to stop scheduling transfer runs. A transfer run cannot be scheduled at or after the end time. The end time can be changed at any moment.
scheduleOptionsV2.timeBasedSchedule.schedule
Optional
string
Data transfer schedule.
If the data source does not support a custom schedule, this should be
empty. If it is empty, the default value for the data source will be used.
The specified times are in UTC.
Examples of valid format:
`1st,3rd monday of month 15:30`,
`every wed,fri of jan,jun 13:15`, and
`first sunday of quarter 00:00`.
See more explanation about the format here:
https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format
NOTE: The minimum interval time between recurring transfers depends on the
data source; refer to the documentation for your data source.
scheduleOptionsV2.timeBasedSchedule.startTime
Optional
string
Specifies time to start scheduling transfer runs. The first run will be scheduled at or after the start time according to a recurrence pattern defined in the schedule string. The start time can be changed at any moment.
serviceAccountRef
Optional
object
Service account email. If this field is set, the transfer config will be created with this service account's credentials. It requires that the requesting user calling this API has permissions to act as this service account. Note that not all data sources support service account credentials when creating a transfer config. For the latest list of data sources, please refer to https://cloud.google.com/bigquery/docs/use-service-accounts.
serviceAccountRef.external
Optional
string
The `email` field of an `IAMServiceAccount` resource.
serviceAccountRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
serviceAccountRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
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
datasetRegion : string
error :
code : integer
message : string
name : string
nextRunTime : string
ownerInfo :
email : string
state : string
updateTime : string
userID : integer
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
A unique specifier for the BigQueryDataTransferConfig resource in Google Cloud.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in Google Cloud.
observedState.datasetRegion
string
Output only. Region in which BigQuery dataset is located.
observedState.error
object
Output only. Error code with detailed information about reason of the latest config failure.
observedState.error.code
integer
The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].
observedState.error.message
string
A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.
observedState.name
string
Identifier. The resource name of the transfer config. Transfer config names have the form either `projects/{project_id}/locations/{region}/transferConfigs/{config_id}` or `projects/{project_id}/transferConfigs/{config_id}`, where `config_id` is usually a UUID, even though it is not guaranteed or required. The name is ignored when creating a transfer config.
observedState.nextRunTime
string
Output only. Next time when data transfer will run.
observedState.ownerInfo
object
Output only. Information about the user whose credentials are used to transfer data. Populated only for `transferConfigs.get` requests. In case the user information is not available, this field will not be populated.
observedState.ownerInfo.email
string
E-mail address of the user.
observedState.state
string
Output only. State of the most recently updated transfer run.
observedState.updateTime
string
Output only. Data transfer modification time. Ignored by server on input.
observedState.userID
integer
Deprecated. Unique ID of the user on whose behalf transfer is done.
Sample YAML(s)
BigQueryDataTransferConfig Scheduledquery
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
apiVersion : bigquerydatatransfer.cnrm.cloud.google.com/v1beta1
kind : BigQueryDataTransferConfig
metadata :
name : bigquerydatatransferconfig-sample-scheduledquery
spec :
projectRef :
# Replace ${PROJECT_ID?} with your project ID.
external : ${PROJECT_ID?}
location : us-central1
displayName : "example of scheduled query"
dataSourceID : "scheduled_query"
datasetRef :
name : bigquerydatatransferconfigdepscheduledquery
params :
destination_table_name_template : "my_table"
write_disposition : "WRITE_APPEND"
query : "SELECT name FROM tabl WHERE x = 'y'"
schedule : "first sunday of quarter 00:00"
serviceAccountRef :
name : gsa-dep-scheduledquery
---
apiVersion : bigquery.cnrm.cloud.google.com/v1beta1
kind : BigQueryDataset
metadata :
name : bigquerydatatransferconfigdepscheduledquery
spec :
friendlyName : bigquerydatatransferconfig-dep-scheduledquery
location : us-central1
---
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMServiceAccount
metadata :
annotations :
# Replace ${PROJECT_ID?} with your project ID.
cnrm.cloud.google.com/project-id : "${PROJECT_ID?}"
name : gsa-dep-scheduledquery
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
