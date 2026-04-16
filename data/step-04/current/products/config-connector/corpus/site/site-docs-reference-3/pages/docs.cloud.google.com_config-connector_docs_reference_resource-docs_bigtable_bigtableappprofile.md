---
title: "BigtableAppProfile \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigtable/bigtableappprofile
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigtable/bigtableappprofile
  title: "BigtableAppProfile \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
BigtableAppProfile
Property
Value
Google Cloud Service Name
Cloud Bigtable
Google Cloud Service Documentation
/bigtable/docs/
Google Cloud REST Resource Name
bigtableadmin/v2/projects.instances.appProfiles
Google Cloud REST Resource Documentation
/bigtable/docs/reference/admin/rest/v2/projects.instances.appProfiles
Config Connector Resource Short Names
gcpbigtableappprofile gcpbigtableappprofiles bigtableappprofile
Config Connector Service Name
bigtableadmin.googleapis.com
Config Connector Resource Fully Qualified Name
bigtableappprofiles.bigtable.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Annotations
Fields
cnrm.cloud.google.com/ignore-warnings
cnrm.cloud.google.com/project-id
Spec
Schema
dataBoostIsolationReadOnly :
computeBillingOwner : string
description : string
instanceRef :
external : string
name : string
namespace : string
multiClusterRoutingClusterIds :
- string
multiClusterRoutingUseAny : boolean
resourceID : string
singleClusterRouting :
allowTransactionalWrites : boolean
clusterId : string
standardIsolation :
priority : string
Fields
dataBoostIsolationReadOnly
Optional
object
Specifies that this app profile is intended for read-only usage via the Data Boost feature. Please opt-in to this feature by setting the `alpha.cnrm.cloud.google.com/reconciler: direct` annotation.
dataBoostIsolationReadOnly.computeBillingOwner
Optional
string
The Compute Billing Owner for this Data Boost App Profile.
description
Optional
string
Long form description of the use case for this AppProfile.
instanceRef
Required
object
InstanceRef defines the resource reference to BigtableInstance, which "External" field holds the GCP identifier for the KRM object.
instanceRef.external
Optional
string
A reference to an externally managed BigtableInstance resource.
instanceRef.name
Optional
string
The name of a BigtableInstance resource.
instanceRef.namespace
Optional
string
The namespace of a BigtableInstance resource.
multiClusterRoutingClusterIds
Optional
list (string)
The set of clusters to route to, if using multi cluster routing. The order is ignored; clusters will be tried in order of distance. If left empty, all clusters are eligible.
multiClusterRoutingClusterIds[]
Optional
string
multiClusterRoutingUseAny
Optional
boolean
Use a multi-cluster routing policy.
resourceID
Optional
string
The BigtableAppProfile name. If not given, the metadata.name will be used.
singleClusterRouting
Optional
object
Use a single-cluster routing policy.
singleClusterRouting.allowTransactionalWrites
Optional
boolean
Whether or not `CheckAndMutateRow` and `ReadModifyWriteRow` requests are allowed by this app profile. It is unsafe to send these requests to the same table/row/column in multiple clusters.
singleClusterRouting.clusterId
Optional
string
The cluster to which read/write requests should be routed.
standardIsolation
Optional
object
The standard options used for isolating this app profile's traffic from other use cases.
standardIsolation.priority
Optional
string
The priority of requests sent using this app profile.
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
externalRef : string
name : string
observedGeneration : integer
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
A unique specifier for the BigtableAppProfile resource in GCP.
name
string
The unique name of the app profile. Values are of the form `projects/{project}/instances/{instance}/appProfiles/[_a-zA-Z0-9][-_.a-zA-Z0-9]*`.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
Sample YAML(s)
Multicluster Bigtable App Profile
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
apiVersion : bigtable.cnrm.cloud.google.com/v1beta1
kind : BigtableAppProfile
metadata :
name : bigtableappprofile-sample-multicluster
annotations :
cnrm.cloud.google.com/ignore-warnings : "true"
spec :
description : Automatically routes requests to the nearest available cluster in an instance.
instanceRef :
name : bigtableappprofile-dep-multi
multiClusterRoutingUseAny : true
multiClusterRoutingClusterIds :
- bigtableappprofile-dep1-multi
- bigtableappprofile-dep2-multi
---
apiVersion : bigtable.cnrm.cloud.google.com/v1beta1
kind : BigtableInstance
metadata :
name : bigtableappprofile-dep-multi
spec :
displayName : BigtableSample
cluster :
- clusterId : bigtableappprofile-dep1-multi
zone : us-central1-a
numNodes : 3
- clusterId : bigtableappprofile-dep2-multi
zone : us-west1-a
numNodes : 3
Priority Bigtable App Profile
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
apiVersion : bigtable.cnrm.cloud.google.com/v1beta1
kind : BigtableAppProfile
metadata :
name : bigtableappprofile-sample-priority
spec :
description : Sends all requests with LOW priority.
instanceRef :
name : bigtableappprofile-dep-priority
singleClusterRouting :
allowTransactionalWrites : true
clusterId : bigtableappprofile-dep1-pty
standardIsolation :
priority : PRIORITY_LOW
---
apiVersion : bigtable.cnrm.cloud.google.com/v1beta1
kind : BigtableInstance
metadata :
name : bigtableappprofile-dep-priority
spec :
displayName : BigtableSample
cluster :
- clusterId : bigtableappprofile-dep1-pty
zone : us-central1-a
numNodes : 3
- clusterId : bigtableappprofile-dep2-pty
zone : us-west1-a
numNodes : 3
Single Cluster Bigtable App Profile
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
apiVersion : bigtable.cnrm.cloud.google.com/v1beta1
kind : BigtableAppProfile
metadata :
name : bigtableappprofile-sample-singlecluster
spec :
description : Routes all requests to a single cluster. If that cluster becomes unavailable, you must manually fail over to another cluster.
instanceRef :
name : bigtableappprofile-dep-single
singleClusterRouting :
allowTransactionalWrites : true
clusterId : bigtableappprofile-dep1-single
---
apiVersion : bigtable.cnrm.cloud.google.com/v1beta1
kind : BigtableInstance
metadata :
name : bigtableappprofile-dep-single
spec :
displayName : BigtableSample
instanceType : PRODUCTION
cluster :
- clusterId : bigtableappprofile-dep1-single
zone : us-central1-a
numNodes : 3
- clusterId : bigtableappprofile-dep2-single
zone : us-west1-a
numNodes : 3
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
