---
title: "KMSAutokeyConfig \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/kms/kmsautokeyconfig
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/kms/kmsautokeyconfig
  title: "KMSAutokeyConfig \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
KMSAutokeyConfig
Property
Value
Google Cloud Service Name
Cloud Key Management Service
Google Cloud Service Documentation
/kms/docs/
Google Cloud REST Resource Name
v1.folders
Google Cloud REST Resource Documentation
/kms/docs/reference/rest/v1/folders
Config Connector Resource Short Names
gcpkmsautokeyconfig gcpkmsautokeyconfigs kmsautokeyconfig
Config Connector Service Name
cloudkms.googleapis.com
Config Connector Resource Fully Qualified Name
kmsautokeyconfigs.kms.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
folderRef :
external : string
name : string
namespace : string
keyProject :
external : string
kind : string
name : string
namespace : string
Fields
folderRef
Required*
object
Immutable. The folder that this resource belongs to.
folderRef.external
Optional
string
The 'name' field of a folder, when not managed by Config Connector. This field must be set when 'name' field is not set.
folderRef.name
Optional
string
The 'name' field of a 'Folder' resource. This field must be set when 'external' field is not set.
folderRef.namespace
Optional
string
The 'namespace' field of a 'Folder' resource. If unset, the namespace is defaulted to the namespace of the referencer resource.
keyProject
Optional
object
The Project that this resource belongs to.
keyProject.external
Optional
string
The `projectID` field of a project, when not managed by Config Connector.
keyProject.kind
Optional
string
The kind of the Project resource; optional but must be `Project` if provided.
keyProject.name
Optional
string
The `name` field of a `Project` resource.
keyProject.namespace
Optional
string
The `namespace` field of a `Project` resource.
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
state : string
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
A unique specifier for the KMSAutokeyConfig resource in Google Cloud.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in Google Cloud.
observedState.state
string
Output only. Current state of this AutokeyConfig.
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
# This sample demonstrates how to configure KMS Autokey for a folder.
# It sets up automatic key creation for resources in the specified folder,
# using the specified project for key storage.
# Note: AutokeyConfig is a singleton per folder; only one can exist.
apiVersion : kms.cnrm.cloud.google.com/v1beta1
kind : KMSAutokeyConfig
metadata :
name : kmsautokeyconfig-sample
spec :
folderRef :
# Replace "${FOLDER_ID?}" with the numeric ID for your folder on which you want to configure autokey.
external : folders/${FOLDER_ID?}
keyProject :
# Replace ${PROJECT_ID?} with your kms project ID where kms keys will be automatically created.
external : projects/${PROJECT_ID?}
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
