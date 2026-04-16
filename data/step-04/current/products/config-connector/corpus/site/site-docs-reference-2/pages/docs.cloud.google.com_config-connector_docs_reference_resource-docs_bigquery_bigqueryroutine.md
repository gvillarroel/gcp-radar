---
title: "BigQueryRoutine \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquery/bigqueryroutine
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/reference/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquery/bigqueryroutine
  title: "BigQueryRoutine \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
BigQueryRoutine
Property
Value
Google Cloud Service Name
BigQuery
Google Cloud Service Documentation
/bigquery/docs/
Google Cloud REST Resource Name
bigquery/v2/routines
Google Cloud REST Resource Documentation
/bigquery/docs/reference/rest/v2/routines
Config Connector Resource Short Names
gcpbigqueryroutine gcpbigqueryroutines bigqueryroutine
Config Connector Service Name
bigquery.googleapis.com
Config Connector Resource Fully Qualified Name
bigqueryroutines.bigquery.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Annotations
Fields
cnrm.cloud.google.com/project-id
Spec
Schema
arguments :
- argumentKind : string
dataType : string
mode : string
name : string
datasetRef :
external : string
name : string
namespace : string
definitionBody : string
description : string
determinismLevel : string
importedLibraries :
- string
language : string
projectRef :
external : string
name : string
namespace : string
resourceID : string
returnTableType : string
returnType : string
routineType : string
Fields
arguments
Optional
list (object)
Input/output argument of a function or a stored procedure.
arguments[]
Optional
object
arguments[].argumentKind
Optional
string
Defaults to FIXED_TYPE. Default value: "FIXED_TYPE" Possible values: ["FIXED_TYPE", "ANY_TYPE"].
arguments[].dataType
Optional
string
A JSON schema for the data type. Required unless argumentKind = ANY_TYPE.
NOTE: Because this field expects a JSON string, any changes to the string
will create a diff, even if the JSON itself hasn't changed. If the API returns
a different value for the same schema, for example, the API returns a value that switched the order of values
or replaced STRUCT field type with RECORD field type, we cannot
suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.
arguments[].mode
Optional
string
Specifies whether the argument is input or output. Can be set for procedures only. Possible values: ["IN", "OUT", "INOUT"].
arguments[].name
Optional
string
The name of this argument. Can be absent for function return argument.
datasetRef
Required
object
The ID of the dataset containing this routine.
datasetRef.external
Optional
string
Allowed value: The `name` field of a `BigQueryDataset` resource.
datasetRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
datasetRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
definitionBody
Required
string
The body of the routine. For functions, this is the expression in the AS clause.
If language=SQL, it is the substring inside (but excluding) the parentheses.
description
Optional
string
The description of the routine if defined.
determinismLevel
Optional
string
The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"].
importedLibraries
Optional
list (string)
Optional. If language = "JAVASCRIPT", this field stores the path of the
imported JAVASCRIPT libraries.
importedLibraries[]
Optional
string
language
Optional
string
The language of the routine. Possible values: ["SQL", "JAVASCRIPT"].
projectRef
Required
object
The project that this resource belongs to.
projectRef.external
Optional
string
Allowed value: The `name` field of a `Project` resource.
projectRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
projectRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
resourceID
Optional
string
Immutable. Optional. The routineId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
returnTableType
Optional
string
Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION".
If absent, the return table type is inferred from definitionBody at query time in each query
that references this routine. If present, the columns in the evaluated table result will
be cast to match the column types specified in return table type, at query time.
returnType
Optional
string
A JSON schema for the return type. Optional if language = "SQL"; required otherwise.
If absent, the return type is inferred from definitionBody at query time in each query
that references this routine. If present, then the evaluated result will be cast to
the specified returned type at query time.
NOTE: Because this field expects a JSON
string, any changes to the string will create a diff, even if the JSON itself hasn't
changed. If the API returns a different value for the same schema, for example, the value that the API returns switche
d the order of values or replaced STRUCT field type with RECORD field type, we currently
cannot suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.
routineType
Optional
string
Immutable. The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"].
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
creationTime : integer
lastModifiedTime : integer
observedGeneration : integer
Fields
conditions
list (object)
Conditions represent the latest available observation of the resource's current state.
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
The time when this routine was created, in milliseconds since the
epoch.
lastModifiedTime
integer
The time when this routine was modified, in milliseconds since the
epoch.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
Sample YAML(s)
Typical Use Case
# Copyright 2023 Google LLC
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
kind : BigQueryRoutine
metadata :
name : bigqueryroutine-${uniqueId}
spec :
datasetRef :
name : bigquerydataset${uniqueId}
definitionBody : CREATE FUNCTION Add(x FLOAT64, y FLOAT64) RETURNS FLOAT64 AS (x
+ y);
projectRef :
external : ${projectId}
resourceID : bigqueryroutine${uniqueId}
routineType : PROCEDURE
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
