---
title: "AlloyDBBackup \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbbackup
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/reference/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbbackup
  title: "AlloyDBBackup \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
AlloyDBBackup
Property
Value
Google Cloud Service Name
AlloyDB for PostgreSQL
Google Cloud Service Documentation
/alloydb/docs/
Google Cloud REST Resource Name
v1.projects.locations.backups
Google Cloud REST Resource Documentation
/alloydb/docs/reference/rest/v1/projects.locations.clusters
Config Connector Resource Short Names
gcpalloydbbackup gcpalloydbbackups alloydbbackup
Config Connector Service Name
alloydb.googleapis.com
Config Connector Resource Fully Qualified Name
alloydbbackups.alloydb.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
clusterNameRef :
external : string
name : string
namespace : string
description : string
encryptionConfig :
kmsKeyName : string
location : string
projectRef :
external : string
name : string
namespace : string
resourceID : string
Fields
clusterNameRef
Required
object
The full resource name of the backup source cluster (e.g., projects/{project}/locations/{location}/clusters/{clusterId}).
clusterNameRef.external
Optional
string
Allowed value: The `name` field of an `AlloyDBCluster` resource.
clusterNameRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
clusterNameRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
description
Optional
string
Immutable. User-provided description of the backup.
encryptionConfig
Optional
object
EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).
encryptionConfig.kmsKeyName
Optional
string
Immutable. The fully-qualified resource name of the KMS key. Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].
location
Required
string
Immutable. The location where the alloydb backup should reside.
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
Immutable. Optional. The backupId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
createTime : string
encryptionInfo :
- encryptionType : string
kmsKeyVersions :
- string
etag : string
name : string
observedGeneration : integer
reconciling : boolean
state : string
uid : string
updateTime : string
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
createTime
string
Time the Backup was created in UTC.
encryptionInfo
list (object)
EncryptionInfo describes the encryption information of a cluster or a backup.
encryptionInfo[]
object
encryptionInfo[].encryptionType
string
Output only. Type of encryption.
encryptionInfo[].kmsKeyVersions
list (string)
Output only. Cloud KMS key versions that are being used to protect the database or the backup.
encryptionInfo[].kmsKeyVersions[]
string
etag
string
A hash of the resource.
name
string
Output only. The name of the backup resource with the format: * projects/{project}/locations/{region}/backups/{backupId}.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
reconciling
boolean
If true, indicates that the service is actively updating the resource. This can happen due to user-triggered updates or system actions like failover or maintenance.
state
string
The current state of the backup.
uid
string
Output only. The system-generated UID of the resource. The UID is assigned when the resource is created, and it is retained until it is deleted.
updateTime
string
Time the Backup was updated in UTC.
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
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBBackup
metadata :
name : alloydbbackup-sample
spec :
clusterNameRef :
external : "projects/${PROJECT_ID?}/locations/us-central1/clusters/alloydbbackup-dep"
location : us-central1
encryptionConfig :
kmsKeyNameRef :
external : "projects/${PROJECT_ID?}/locations/us-central1/keyRings/alloydbbackup-dep/cryptoKeys/alloydbbackup-dep"
projectRef :
external : ${PROJECT_ID?}
---
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBCluster
metadata :
name : alloydbbackup-dep
spec :
location : us-central1
networkConfig :
networkRef :
name : alloydbbackup-dep
projectRef :
external : ${PROJECT_ID?}
---
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBInstance
metadata :
name : alloydbbackup-dep
spec :
clusterRef :
name : alloydbbackup-dep
instanceTypeRef :
name : alloydbbackup-dep
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeAddress
metadata :
name : alloydbbackup-dep
spec :
location : global
addressType : INTERNAL
networkRef :
name : alloydbbackup-dep
prefixLength : 16
purpose : VPC_PEERING
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeNetwork
metadata :
name : alloydbbackup-dep
---
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMPartialPolicy
metadata :
name : alloydbbackup-dep
spec :
resourceRef :
apiVersion : kms.cnrm.cloud.google.com/v1beta1
kind : KMSCryptoKey
name : alloydbbackup-dep
bindings :
- role : roles/cloudkms.cryptoKeyEncrypterDecrypter
members :
- member : serviceAccount:service-${PROJECT_NUMBER?}@gcp-sa-alloydb.iam.gserviceaccount.com
---
apiVersion : kms.cnrm.cloud.google.com/v1beta1
kind : KMSCryptoKey
metadata :
labels :
source : kcc-alloydbbackup-sample
name : alloydbbackup-dep
spec :
keyRingRef :
name : alloydbbackup-dep
---
apiVersion : kms.cnrm.cloud.google.com/v1beta1
kind : KMSKeyRing
metadata :
name : alloydbbackup-dep
spec :
location : us-central1
---
apiVersion : servicenetworking.cnrm.cloud.google.com/v1beta1
kind : ServiceNetworkingConnection
metadata :
name : alloydbbackup-dep
spec :
networkRef :
name : alloydbbackup-dep
reservedPeeringRanges :
- external : alloydbbackup-dep
service : servicenetworking.googleapis.com
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
