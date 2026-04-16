---
title: "AccessContextManagerServicePerimeterResource \_|\_ Config Connector \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/reference/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource
  title: "AccessContextManagerServicePerimeterResource \_|\_ Config Connector \_|\_\
    \ Google Cloud Documentation"
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
AccessContextManagerServicePerimeterResource
Property
Value
Google Cloud Service Name
AccessContextManager
Google Cloud Service Documentation
/vpc-service-controls/docs/
Google Cloud REST Resource Name
accesscontextmanager.v1.accessPolicies.servicePerimeters
Google Cloud REST Resource Documentation
/access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters
Config Connector Resource Short Names
gcpaccesscontextmanagerserviceperimeterresource gcpaccesscontextmanagerserviceperimeterresources accesscontextmanagerserviceperimeterresource
Config Connector Service Name
accesscontextmanager.googleapis.com
Config Connector Resource Fully Qualified Name
accesscontextmanagerserviceperimeterresources.accesscontextmanager.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
perimeterNameRef :
external : string
name : string
namespace : string
resourceRef :
external : string
name : string
namespace : string
Fields
perimeterNameRef
Required
object
Only the `external` field is supported to configure the reference.
The name of the Service Perimeter to add this resource to.
Referencing a resource name leads to recursive reference and Config Connector does not support the feature for now.
perimeterNameRef.external
Optional
string
Allowed value: The `name` field of an `AccessContextManagerServicePerimeter` resource.
perimeterNameRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
perimeterNameRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
resourceRef
Required
object
A GCP resource that is inside of the service perimeter.
resourceRef.external
Optional
string
Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource.
resourceRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
resourceRef.namespace
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
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
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
apiVersion : accesscontextmanager.cnrm.cloud.google.com/v1beta1
kind : AccessContextManagerServicePerimeterResource
metadata :
name : accesscontextmanagerserviceperimeterresource-sample
spec :
perimeterNameRef :
# Referencing a resource name leads to recursive reference and KCC does not support the feature for now.
# Please use external reference instead.
# Replace "${ACCESS_POLICY_NUMBER}" with the numeric ID for your Access Policy
# Replace "${PERIMETER_SHORT_NAME}" with the name for the Service Perimeter to add this resource to
external : "accessPolicies/${ACCESS_POLICY_NUMBER}/servicePerimeters/${PERIMETER_SHORT_NAME}"
resourceRef :
# Replace "${PROJECT_NUMBER}" with the `number` for the project to be protected by the perimeter
external : "projects/${PROJECT_NUMBER}"
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
