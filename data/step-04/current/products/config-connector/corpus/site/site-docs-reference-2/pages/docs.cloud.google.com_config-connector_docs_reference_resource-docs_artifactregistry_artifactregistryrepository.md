---
title: "ArtifactRegistryRepository \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/artifactregistry/artifactregistryrepository
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/reference/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/artifactregistry/artifactregistryrepository
  title: "ArtifactRegistryRepository \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
ArtifactRegistryRepository
Property
Value
Google Cloud Service Name
ArtifactRegistry
Google Cloud Service Documentation
/artifact-registry/docs/
Google Cloud REST Resource Name
v1beta1.projects.locations.repositories
Google Cloud REST Resource Documentation
/artifact-registry/docs/reference/rest/v1beta1/projects.locations.repositories
Config Connector Resource Short Names
gcpartifactregistryrepository gcpartifactregistryrepositories artifactregistryrepository
Config Connector Service Name
artifactregistry.googleapis.com
Config Connector Resource Fully Qualified Name
artifactregistryrepositories.artifactregistry.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
Yes
Supports IAM Conditions
No
Supports IAM Audit Configs
No
IAM External Reference Format
projects/{{project}}/locations/{{location}}/repositories/{{repository_id}}
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Annotations
Fields
cnrm.cloud.google.com/project-id
Spec
Schema
cleanupPolicies :
- action : string
condition :
newerThan : string
olderThan : string
packageNamePrefixes :
- string
tagPrefixes :
- string
tagState : string
versionNamePrefixes :
- string
id : string
mostRecentVersions :
keepCount : integer
packageNamePrefixes :
- string
cleanupPolicyDryRun : boolean
description : string
dockerConfig :
immutableTags : boolean
format : string
kmsKeyRef :
external : string
name : string
namespace : string
location : string
mavenConfig :
allowSnapshotOverwrites : boolean
versionPolicy : string
mode : string
remoteRepositoryConfig :
description : string
dockerRepository :
publicRepository : string
mavenRepository :
publicRepository : string
npmRepository :
publicRepository : string
pythonRepository :
publicRepository : string
resourceID : string
virtualRepositoryConfig :
upstreamPolicies :
- id : string
priority : integer
repositoryRef :
external : string
name : string
namespace : string
Fields
cleanupPolicies
Optional
list (object)
Cleanup policies for this repository. Cleanup policies indicate when certain package versions can be automatically deleted. Map keys are policy IDs supplied by users during policy creation. They must unique within a repository and be under 128 characters in length.
cleanupPolicies[]
Optional
object
cleanupPolicies[].action
Optional
string
Policy action.
cleanupPolicies[].condition
Optional
object
Policy condition for matching versions.
cleanupPolicies[].condition.newerThan
Optional
string
Match versions newer than a duration.
cleanupPolicies[].condition.olderThan
Optional
string
Match versions older than a duration.
cleanupPolicies[].condition.packageNamePrefixes
Optional
list (string)
Match versions by package prefix. Applied on any prefix match.
cleanupPolicies[].condition.packageNamePrefixes[]
Optional
string
cleanupPolicies[].condition.tagPrefixes
Optional
list (string)
Match versions by tag prefix. Applied on any prefix match.
cleanupPolicies[].condition.tagPrefixes[]
Optional
string
cleanupPolicies[].condition.tagState
Optional
string
Match versions by tag status.
cleanupPolicies[].condition.versionNamePrefixes
Optional
list (string)
Match versions by version name prefix. Applied on any prefix match.
cleanupPolicies[].condition.versionNamePrefixes[]
Optional
string
cleanupPolicies[].id
Optional
string
The user-provided ID of the cleanup policy.
cleanupPolicies[].mostRecentVersions
Optional
object
Policy condition for retaining a minimum number of versions. May only be specified with a Keep action.
cleanupPolicies[].mostRecentVersions.keepCount
Optional
integer
Minimum number of versions to keep.
cleanupPolicies[].mostRecentVersions.packageNamePrefixes
Optional
list (string)
List of package name prefixes that will apply this rule.
cleanupPolicies[].mostRecentVersions.packageNamePrefixes[]
Optional
string
cleanupPolicyDryRun
Optional
boolean
Optional. If true, the cleanup pipeline is prevented from deleting versions in this repository.
description
Optional
string
The user-provided description of the repository.
dockerConfig
Optional
object
Docker repository config contains repository level configuration for the repositories of docker type.
dockerConfig.immutableTags
Optional
boolean
The repository which enabled this flag prevents all tags from being modified, moved or deleted. This does not prevent tags from being created.
format
Optional
string
Optional. The format of packages that are stored in the repository.
kmsKeyRef
Optional
object
The Cloud KMS resource name of the customer managed encryption key that's used to encrypt the contents of the Repository. Has the form: `projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key`. This value may not be changed after the Repository has been created.
kmsKeyRef.external
Optional
string
A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`.
kmsKeyRef.name
Optional
string
The name of a KMSCryptoKey resource.
kmsKeyRef.namespace
Optional
string
The `namespace` of a `KMSCryptoKey` resource.
location
Required
string
Immutable. The name of the location this repository is located in.
mavenConfig
Optional
object
Maven repository config contains repository level configuration for the repositories of maven type.
mavenConfig.allowSnapshotOverwrites
Optional
boolean
The repository with this flag will allow publishing the same snapshot versions.
mavenConfig.versionPolicy
Optional
string
Version policy defines the versions that the registry will accept.
mode
Optional
string
Optional. The mode of the repository.
remoteRepositoryConfig
Optional
object
Configuration specific for a Remote Repository.
remoteRepositoryConfig.description
Optional
string
The description of the remote source.
remoteRepositoryConfig.dockerRepository
Optional
object
Specific settings for a Docker remote repository.
remoteRepositoryConfig.dockerRepository.publicRepository
Optional
string
One of the publicly available Docker repositories supported by Artifact Registry.
remoteRepositoryConfig.mavenRepository
Optional
object
Specific settings for a Maven remote repository.
remoteRepositoryConfig.mavenRepository.publicRepository
Optional
string
One of the publicly available Maven repositories supported by Artifact Registry.
remoteRepositoryConfig.npmRepository
Optional
object
Specific settings for an npm remote repository.
remoteRepositoryConfig.npmRepository.publicRepository
Optional
string
One of the publicly available Npm repositories supported by Artifact Registry.
remoteRepositoryConfig.pythonRepository
Optional
object
Specific settings for a Python remote repository.
remoteRepositoryConfig.pythonRepository.publicRepository
Optional
string
One of the publicly available Python repositories supported by Artifact Registry.
resourceID
Optional
string
The ArtifactRegistryRepository name. If not given, the metadata.name will be used.
virtualRepositoryConfig
Optional
object
Configuration specific for a Virtual Repository.
virtualRepositoryConfig.upstreamPolicies
Optional
list (object)
Policies that configure the upstream artifacts distributed by the Virtual Repository. Upstream policies cannot be set on a standard repository.
virtualRepositoryConfig.upstreamPolicies[]
Optional
object
virtualRepositoryConfig.upstreamPolicies[].id
Optional
string
The user-provided ID of the upstream policy.
virtualRepositoryConfig.upstreamPolicies[].priority
Optional
integer
Entries with a greater priority value take precedence in the pull order.
virtualRepositoryConfig.upstreamPolicies[].repositoryRef
Optional
object
A reference to the repository resource, for example: `projects/p1/locations/us-central1/repositories/repo1`.
virtualRepositoryConfig.upstreamPolicies[].repositoryRef.external
Optional
string
A reference to an externally managed ArtifactRegistryRepository resource. Should be in the format "projects/{{projectID}}/locations/{{location}}/repositories/{{repositoryID}}".
virtualRepositoryConfig.upstreamPolicies[].repositoryRef.name
Optional
string
The name of a ArtifactRegistryRepository resource.
virtualRepositoryConfig.upstreamPolicies[].repositoryRef.namespace
Optional
string
The namespace of a ArtifactRegistryRepository resource.
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
createTime : string
name : string
observedGeneration : integer
updateTime : string
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
createTime
string
Output only. The time when the repository was created.
name
string
The name of the repository, for example: "repo1".
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
updateTime
string
Output only. The time when the repository was last updated.
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
apiVersion : artifactregistry.cnrm.cloud.google.com/v1beta1
kind : ArtifactRegistryRepository
metadata :
name : artifactregistryrepository-sample
labels :
label-one : "value-one"
spec :
format : DOCKER
location : us-west1
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
