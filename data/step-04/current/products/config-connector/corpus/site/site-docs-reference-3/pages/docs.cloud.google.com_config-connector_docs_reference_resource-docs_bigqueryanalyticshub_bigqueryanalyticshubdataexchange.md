---
title: "BigQueryAnalyticsHubDataExchange \_|\_ Config Connector \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigqueryanalyticshub/bigqueryanalyticshubdataexchange
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigqueryanalyticshub/bigqueryanalyticshubdataexchange
  title: "BigQueryAnalyticsHubDataExchange \_|\_ Config Connector \_|\_ Google Cloud\
    \ Documentation"
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
BigQueryAnalyticsHubDataExchange
Property
Value
Google Cloud Service Name
Analytics Hub
Google Cloud Service Documentation
/bigquery/docs/query-overview
Google Cloud REST Resource Name
v1.projects.locations.dataExchange
Google Cloud REST Resource Documentation
/bigquery/docs/reference/analytics-hub/rest/v1/projects.locations.dataExchangess
Config Connector Resource Short Names
gcpbigqueryanalyticshubdataexchange gcpbigqueryanalyticshubdataexchanges bigqueryanalyticshubdataexchange
Config Connector Service Name
analyticshub.googleapis.com
Config Connector Resource Fully Qualified Name
bigqueryanalyticshubdataexchanges.bigqueryanalyticshub.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
description : string
discoveryType : string
displayName : string
documentation : string
location : string
primaryContact : string
projectRef :
external : string
kind : string
name : string
namespace : string
resourceID : string
Fields
description
Optional
string
Optional. Description of the data exchange. The description must not contain Unicode non-characters as well as C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). Default value is an empty string. Max length: 2000 bytes.
discoveryType
Optional
string
Optional. Type of discovery on the discovery page for all the listings under this exchange. Updating this field also updates (overwrites) the discovery_type field for all the listings under this exchange.
displayName
Optional
string
Required. Human-readable display name of the data exchange. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and must not start or end with spaces. Default value is an empty string. Max length: 63 bytes.
documentation
Optional
string
Optional. Documentation describing the data exchange.
location
Required
string
Immutable. The name of the location this data exchange.
primaryContact
Optional
string
Optional. Email or URL of the primary point of contact of the data exchange. Max Length: 1000 bytes.
projectRef
Required
object
The project that this resource belongs to.
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
Immutable. The BigQueryAnalyticsHubDataExchange name. If not given, the metadata.name will be used.
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
listingCount : integer
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
A unique specifier for the BigQueryAnalyticsHubDataExchange resource in GCP.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in GCP.
observedState.listingCount
integer
Number of listings contained in the data exchange.
Sample YAML(s)
Typical Use Case
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
apiVersion : bigqueryanalyticshub.cnrm.cloud.google.com/v1beta1
kind : BigQueryAnalyticsHubDataExchange
metadata :
name : bigqueryanalyticshubdataexchangesample
spec :
displayName : my_data_exchange
description : example data exchange
primaryContact : a@contact.com
documentation : a documentation
discoveryType : DISCOVERY_TYPE_PRIVATE
location : US
projectRef :
external : ${PROJECT_ID?}
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
