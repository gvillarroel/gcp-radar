---
title: "ApigeeInstanceAttachment \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigee/apigeeinstanceattachment
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/reference/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigee/apigeeinstanceattachment
  title: "ApigeeInstanceAttachment \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
ApigeeInstanceAttachment
Property
Value
Google Cloud Service Name
Apigee
Google Cloud Service Documentation
/apigee/docs/
Google Cloud REST Resource Name
organizations.instances.attachments
Google Cloud REST Resource Documentation
/apigee/docs/reference/apis/apigee/rest/v1/organizations.instances.attachments
Config Connector Resource Short Names
gcpapigeeinstanceattachment gcpapigeeinstanceattachments apigeeinstanceattachment
Config Connector Service Name
apigee.googleapis.com
Config Connector Resource Fully Qualified Name
apigeeinstanceattachments.apigee.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
environmentRef :
external : string
name : string
namespace : string
instanceRef :
external : string
name : string
namespace : string
resourceID : string
Fields
environmentRef
Required
object
ID of the attached environment.
environmentRef.external
Optional
string
A reference to an externally managed ApigeeEnvironment resource. Should be in the format "organizations/{{organizationID}}/environments/{{environmentID}}".
environmentRef.name
Optional
string
The name of a ApigeeEnvironment resource.
environmentRef.namespace
Optional
string
The namespace of a ApigeeEnvironment resource.
instanceRef
Required
object
Reference to parent Apigee Instance.
instanceRef.external
Optional
string
A reference to an externally managed ApigeeInstance resource. Should be in the format "organizations/{{organizationID}}/instances/{{instanceID}}".
instanceRef.name
Optional
string
The name of a ApigeeInstance resource.
instanceRef.namespace
Optional
string
The namespace of a ApigeeInstance resource.
resourceID
Optional
string
The ApigeeInstanceAttachment name. If not given, the metadata.name will be used.
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
createdAt : string
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
A unique specifier for the ApigeeInstanceAttachment resource in GCP.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in GCP.
observedState.createdAt
string
Output only. Time the attachment was created in milliseconds since epoch.
Sample YAML(s)
Typical Use Case
# Copyright 2025 Google LLC
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
apiVersion : apigee.cnrm.cloud.google.com/v1beta1
kind : ApigeeInstanceAttachment
metadata :
name : apigeeinstanceattachment-sample
spec :
instanceRef :
name : apigeeinstance-dep
environmentRef :
name : apigeeenvironment-dep
---
apiVersion : apigee.cnrm.cloud.google.com/v1beta1
kind : ApigeeEnvironment
metadata :
name : apigeeenvironment-dep
spec :
apigeeOrganizationRef :
external : organizations/${PROJECT_ID?}
---
apiVersion : apigee.cnrm.cloud.google.com/v1beta1
kind : ApigeeInstance
metadata :
name : apigeeinstance-dep
spec :
organizationRef :
external : organizations/${PROJECT_ID?}
location : us-west1
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
