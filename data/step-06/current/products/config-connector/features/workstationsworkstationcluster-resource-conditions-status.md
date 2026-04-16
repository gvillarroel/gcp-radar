---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.100Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "WorkstationsWorkstationCluster resource conditions status"
feature_slug: "workstationsworkstationcluster-resource-conditions-status"
latest_feature_date: "2023-05-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesspolicy"
keywords:
  - "workstationsworkstationcluster"
  - "conditions"
  - "resource"
  - "supports"
  - "status"
---

# WorkstationsWorkstationCluster resource conditions status

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector now supports resourceConditions status and standardized conditions structure for the WorkstationsWorkstationCluster resource.

## Extended Definition

Config Connector now supports resourceConditions status and standardized conditions structure for the WorkstationsWorkstationCluster resource.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesspolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesspolicy)

## Supporting Pages

### Folder \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder)
- Source ID: `site-docs-root-2`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Property Value Google Cloud Service Name Cloud Resource Manager Google Cloud Service Documentation /resource-manager/docs/ Google Cloud REST Resource Name v2.folders Google Cloud REST Resource Documentation /resource-manager/reference/rest/v2/folders Config Connector Resource Short Names gcpfolder gcpfolders folder Config Connector Service Name cloudresourcemanager.googleapis.com Config Connector Resource Fully Qualified Name folders.resourcemanager.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember Yes Supports IAM Conditions Yes Supports IAM Audit Configs Yes IAM External Reference Format folders/{{folder id}} Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Spec Schema displayName : string folderRef : external : string name : string namespace : string organizationRef : external : string name : string namespace : string resourceID : string Fields displayName Required string The folder's display name.
- Status Schema conditions : - lastTransitionTime : string message : string reason : string status : string type : string createTime : string folderId : string lifecycleState : string name : string observedGeneration : integer Fields conditions list (object) Conditions represent the latest available observation of the resource's current state. conditions[] object conditions[].lastTransitionTime string Last time the condition transitioned from one status to another. conditions[].message string Human-readable message indicating details about last transition. conditions[].reason string Unique, one-word, CamelCase reason for the condition's last transition. conditions[].status string Status is the status of the condition.
- If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1 kind : Folder metadata : labels : label-one : "value-one" name : folder-sample-in-folder spec : displayName : Config Connector Sample folderRef : Replace "${FOLDER ID?}" with the numeric ID of the parent folder external : "${FOLDER ID?}" Folder In Org Copyright 2020 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

### "AccessContextManagerServicePerimeterResource \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ Status Schema conditions : - lastTransitionTime : string message : string reason : string status : string type : string observedGeneration : integer Fields conditions list (object) Conditions represent the latest available observation of the resource's current state. conditions[] object conditions[].lastTransitionTime string Last time the condition transitioned from one status to another. conditions[].message string Human-readable message indicating details about last transition. conditions[].reason string Unique, one-word, CamelCase reason for the condition's last transition. conditions[].status string Status is the status of the condition.
- Can be True, False, Unknown. conditions[].type string Type is the type of the condition. observedGeneration integer ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller.
- If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
- AccessContextManagerServicePerimeterResource Property Value Google Cloud Service Name AccessContextManager Google Cloud Service Documentation /vpc-service-controls/docs/ Google Cloud REST Resource Name accesscontextmanager.v1.accessPolicies.servicePerimeters Google Cloud REST Resource Documentation /access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters Config Connector Resource Short Names gcpaccesscontextmanagerserviceperimeterresource gcpaccesscontextmanagerserviceperimeterresources accesscontextmanagerserviceperimeterresource Config Connector Service Name accesscontextmanager.googleapis.com Config Connector Resource Fully Qualified Name accesscontextmanagerserviceperimeterresources.accesscontextmanager.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Spec Schema perimeterNameRef : external : string name : string namespace : string resourceRef : external : string name : string namespace : string Fields perimeterNameRef Required object Only the external field is supported to configure the reference.

### "AccessContextManagerAccessPolicy \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesspolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesspolicy)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AccessContextManagerAccessPolicy Property Value Google Cloud Service Name AccessContextManager Google Cloud Service Documentation /access-context-manager/docs/ Google Cloud REST Resource Name accesscontextmanager/v1/accessPolicies Google Cloud REST Resource Documentation /access-context-manager/docs/reference/rest/v1/accessPolicies Config Connector Resource Short Names gcpaccesscontextmanageraccesspolicy gcpaccesscontextmanageraccesspolicies accesscontextmanageraccesspolicy Config Connector Service Name accesscontextmanager.googleapis.com Config Connector Resource Fully Qualified Name accesscontextmanageraccesspolicies.accesscontextmanager.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember Yes Supports IAM Conditions No Supports IAM Audit Configs No IAM External Reference Format {{name}} Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Annotations Fields cnrm.cloud.google.com/organization-id Spec Schema resourceID : string title : string Fields resourceID Optional string Immutable.
- Status Schema conditions : - lastTransitionTime : string message : string reason : string status : string type : string createTime : string name : string observedGeneration : integer updateTime : string Fields conditions list (object) Conditions represent the latest available observations of the object's current state. conditions[] object conditions[].lastTransitionTime string Last time the condition transitioned from one status to another. conditions[].message string Human-readable message indicating details about last transition. conditions[].reason string Unique, one-word, CamelCase reason for the condition's last transition. conditions[].status string Status is the status of the condition.
- If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. updateTime string Output only.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : accesscontextmanager.cnrm.cloud.google.com/v1beta1 kind : AccessContextManagerAccessPolicy metadata : annotations : Replace "${ORG ID?}" with the numeric ID for your organization cnrm.cloud.google.com/organization-id : "${ORG ID}" name : accesspolicysample spec : title : Config Connector Sample Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .

