---
title: "AlloyDBUser \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser
  title: "AlloyDBUser \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
AlloyDBUser
Property
Value
Google Cloud Service Name
AlloyDB for PostgreSQL
Google Cloud Service Documentation
/alloydb/docs/
Google Cloud REST Resource Name
v1.projects.locations.clusters.users
Google Cloud REST Resource Documentation
/alloydb/docs/reference/rest/v1/projects.locations.clusters.users
Config Connector Resource Short Names
gcpalloydbuser gcpalloydbusers alloydbuser
Config Connector Service Name
alloydb.googleapis.com
Config Connector Resource Fully Qualified Name
alloydbusers.alloydb.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
clusterRef :
external : string
name : string
namespace : string
databaseRoles :
- string
password :
value : string
valueFrom :
secretKeyRef :
key : string
name : string
resourceID : string
userType : string
Fields
clusterRef
Required
object
clusterRef.external
Optional
string
Allowed value: The `name` field of an `AlloyDBCluster` resource.
clusterRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
clusterRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
databaseRoles
Optional
list (string)
List of database roles this database user has.
databaseRoles[]
Optional
string
password
Optional
object
Password for this database user.
password.value
Optional
string
Value of the field. Cannot be used if 'valueFrom' is specified.
password.valueFrom
Optional
object
Source for the field's value. Cannot be used if 'value' is specified.
password.valueFrom.secretKeyRef
Optional
object
Reference to a value with the given key in the given Secret in the resource's namespace.
password.valueFrom.secretKeyRef.key
Required*
string
Key that identifies the value to be extracted.
password.valueFrom.secretKeyRef.name
Required*
string
Name of the Secret to extract a value from.
resourceID
Optional
string
Immutable. Optional. The userId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
userType
Required
string
Immutable. The type of this user. Possible values: ["ALLOYDB_BUILT_IN", "ALLOYDB_IAM_USER"].
* Field is required when parent field is specified
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
name : string
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
name
string
Name of the resource in the form of projects/{project}/locations/{location}/clusters/{cluster}/users/{user}.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
Sample YAML(s)
Database User
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
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBUser
metadata :
name : alloydbuser-sample-database
spec :
clusterRef :
name : alloydbuser-dep-database
databaseRoles :
- pg_monitor
- pg_signal_backend
userType : ALLOYDB_BUILT_IN
password :
value : pg-built-in
---
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBCluster
metadata :
name : alloydbuser-dep-database
spec :
location : me-central1
networkConfig :
networkRef :
name : alloydbuser-dep-database
projectRef :
external : ${PROJECT_ID?}
---
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBInstance
metadata :
name : alloydbuser-dep-database
spec :
clusterRef :
name : alloydbuser-dep-database
instanceTypeRef :
name : alloydbuser-dep-database
databaseFlags :
enable_google_adaptive_autovacuum : "off"
machineConfig :
cpuCount : 2
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeAddress
metadata :
name : alloydbuser-dep-database
spec :
location : global
addressType : INTERNAL
networkRef :
name : alloydbuser-dep-database
prefixLength : 16
purpose : VPC_PEERING
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeNetwork
metadata :
name : alloydbuser-dep-database
---
apiVersion : servicenetworking.cnrm.cloud.google.com/v1beta1
kind : ServiceNetworkingConnection
metadata :
name : alloydbuser-dep-database
spec :
networkRef :
name : alloydbuser-dep-database
reservedPeeringRanges :
- external : alloydbuser-dep-database
service : servicenetworking.googleapis.com
IAM User
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
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBUser
metadata :
name : alloydbuser-sample-iam
spec :
clusterRef :
name : alloydbuser-dep-iam
databaseRoles :
- pg_monitor
- pg_signal_backend
- alloydbiamuser
userType : ALLOYDB_IAM_USER
---
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBCluster
metadata :
name : alloydbuser-dep-iam
spec :
location : me-west1
networkConfig :
networkRef :
name : alloydbuser-dep-iam
projectRef :
external : ${PROJECT_ID?}
---
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBInstance
metadata :
name : alloydbuser-dep-iam
spec :
clusterRef :
name : alloydbuser-dep-iam
instanceTypeRef :
name : alloydbuser-dep-iam
databaseFlags :
enable_google_adaptive_autovacuum : "off"
machineConfig :
cpuCount : 2
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeAddress
metadata :
name : alloydbuser-dep-iam
spec :
location : global
addressType : INTERNAL
networkRef :
name : alloydbuser-dep-iam
prefixLength : 16
purpose : VPC_PEERING
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeNetwork
metadata :
name : alloydbuser-dep-iam
---
apiVersion : servicenetworking.cnrm.cloud.google.com/v1beta1
kind : ServiceNetworkingConnection
metadata :
name : alloydbuser-dep-iam
spec :
networkRef :
name : alloydbuser-dep-iam
reservedPeeringRanges :
- external : alloydbuser-dep-iam
service : servicenetworking.googleapis.com
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
