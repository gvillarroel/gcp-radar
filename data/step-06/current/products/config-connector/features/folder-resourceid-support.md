---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.261Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "Folder resourceID support"
feature_slug: "folder-resourceid-support"
latest_feature_date: "2020-12-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids"
keywords:
  - "folder"
  - "resourceid"
  - "supports"
  - "field"
---

# Folder resourceID support

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Folder supports the resourceID field.

## Extended Definition

Folder supports the resourceID field.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder)
- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)

## Supporting Pages

### Folder \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder)
- Source ID: `site-docs-root-2`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Property Value Google Cloud Service Name Cloud Resource Manager Google Cloud Service Documentation /resource-manager/docs/ Google Cloud REST Resource Name v2.folders Google Cloud REST Resource Documentation /resource-manager/reference/rest/v2/folders Config Connector Resource Short Names gcpfolder gcpfolders folder Config Connector Service Name cloudresourcemanager.googleapis.com Config Connector Resource Fully Qualified Name folders.resourcemanager.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember Yes Supports IAM Conditions Yes Supports IAM Audit Configs Yes IAM External Reference Format folders/{{folder id}} Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Spec Schema displayName : string folderRef : external : string name : string namespace : string organizationRef : external : string name : string namespace : string resourceID : string Fields displayName Required string The folder's display name.
- Status Schema conditions : - lastTransitionTime : string message : string reason : string status : string type : string createTime : string folderId : string lifecycleState : string name : string observedGeneration : integer Fields conditions list (object) Conditions represent the latest available observation of the resource's current state. conditions[] object conditions[].lastTransitionTime string Last time the condition transitioned from one status to another. conditions[].message string Human-readable message indicating details about last transition. conditions[].reason string Unique, one-word, CamelCase reason for the condition's last transition. conditions[].status string Status is the status of the condition.
- Only one of folderRef or organizationRef may be specified. organizationRef.external Optional string Allowed value: The name field of an Organization resource. organizationRef.name Optional string Name of the referent.
- Only one of folderRef or organizationRef may be specified. folderRef.external Optional string Allowed value: The folderId field of a Folder resource. folderRef.name Optional string Name of the referent.

### Folder | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder)
- Source ID: `feature-recovery-http`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Property Value Google Cloud Service Name Cloud Resource Manager Google Cloud Service Documentation /resource-manager/docs/ Google Cloud REST Resource Name v2.folders Google Cloud REST Resource Documentation /resource-manager/reference/rest/v2/folders Config Connector Resource Short Names gcpfolder gcpfolders folder Config Connector Service Name cloudresourcemanager.googleapis.com Config Connector Resource Fully Qualified Name folders.resourcemanager.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember Yes Supports IAM Conditions Yes Supports IAM Audit Configs Yes IAM External Reference Format folders/{{folder_id}} Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Spec Schema displayName : string folderRef : external : string name : string namespace : string organizationRef : external : string name : string namespace : string resourceID : string Fields displayName Required string The folder's display name.
- Status Schema conditions : - lastTransitionTime : string message : string reason : string status : string type : string createTime : string folderId : string lifecycleState : string name : string observedGeneration : integer Fields conditions list (object) Conditions represent the latest available observation of the resource's current state. conditions[] object conditions[].lastTransitionTime string Last time the condition transitioned from one status to another. conditions[].message string Human-readable message indicating details about last transition. conditions[].reason string Unique, one-word, CamelCase reason for the condition's last transition. conditions[].status string Status is the status of the condition.
- Only one of folderRef or organizationRef may be specified. organizationRef.external Optional string Allowed value: The `name` field of an `Organization` resource. organizationRef.name Optional string Name of the referent.
- Only one of folderRef or organizationRef may be specified. folderRef.external Optional string Allowed value: The `folderId` field of a `Folder` resource. folderRef.name Optional string Name of the referent.

### "Managing resources with the resourceID field \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Acquiring a folder To acquire a folder using Config Connector with the resourceID field, complete the following steps: Copy the following contents into a file named folder.yaml . apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1 kind : Folder metadata : annotations : cnrm.cloud.google.com/organization-id : ORG ID Remove the deletion-policy annotation if it is safe to delete the folder when the resource is deleted from your cluster. cnrm.cloud.google.com/deletion-policy : "abandon" name : folder-sample-for-acquisition spec : resourceID : ACQUIRED FOLDER ID displayName : ACQUIRED FOLDER DISPLAY NAME Replace the following: ORG ID with the numeric ID for your organization.
- Using the resourceID field in your Config Connector resources, you can define multiple Config Connector resources of the same kind with the same Google Cloud resource name under different projects, folders, organizations or parent resources within the same namespace.
- Use kubectl describe to see details on the folder. kubectl describe --namespace CC NAMESPACE folder folder-sample-for-acquisition Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- Apply the YAML file to your cluster. kubectl apply --namespace CC NAMESPACE -f folder.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.

