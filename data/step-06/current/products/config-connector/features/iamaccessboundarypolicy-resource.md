---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.110Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "IAMAccessBoundaryPolicy resource"
feature_slug: "iamaccessboundarypolicy-resource"
latest_feature_date: "2023-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/folder-scoped-resources"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/organization-scoped-resources"
keywords:
  - "iamaccessboundarypolicy"
  - "resource"
  - "supports"
---

# IAMAccessBoundaryPolicy resource

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector now supports the IAMAccessBoundaryPolicy resource.

## Extended Definition

Config Connector now supports the IAMAccessBoundaryPolicy resource.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)
- [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/folder-scoped-resources](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/folder-scoped-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/organization-scoped-resources](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/organization-scoped-resources)

## Supporting Pages

### "Managing resources with the resourceID field \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- What's next Review the Resource reference to learn about the resources Config Connector supports.
- Acquiring a folder To acquire a folder using Config Connector with the resourceID field, complete the following steps: Copy the following contents into a file named folder.yaml . apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1 kind : Folder metadata : annotations : cnrm.cloud.google.com/organization-id : ORG ID Remove the deletion-policy annotation if it is safe to delete the folder when the resource is deleted from your cluster. cnrm.cloud.google.com/deletion-policy : "abandon" name : folder-sample-for-acquisition spec : resourceID : ACQUIRED FOLDER ID displayName : ACQUIRED FOLDER DISPLAY NAME Replace the following: ORG ID with the numeric ID for your organization.
- Copy the following contents into a file named bigquery-dataset.yaml . apiVersion : bigquery.cnrm.cloud.google.com/v1beta1 kind : BigQueryDataset metadata : name : bigquerydataset-sample-for-creation spec : resourceID : bigquerydataset sample with resourceid defaultTableExpirationMs : 3600000 description : "BigQuery Dataset Sample with the ResourceID Field" friendlyName : bigquerydataset-sample-with-resourceid location : US Apply the YAML file to your cluster. kubectl apply --namespace CC NAMESPACE -f bigquery-dataset.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- The name of the Config Connector resource is pubsub-topic-sample and the name of the Pub/Sub topic is pubsub-topic-id . apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : name : pubsub-topic-sample spec : resourceID : pubsub-topic-id Creating a resource with the resourceID field Note: When you manage a Google Cloud resource with the resourceID field, if the resource has a service-generated resource ID, Config Connector assumes the resource already exists and tries to acquire the resource.

### "Organization-scoped resources \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/organization-scoped-resources](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/organization-scoped-resources)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- You can check the resource reference page to see if a resource supports the spec.organizationRef field or cnrm.cloud.google.com/organization-id annotation.
- Here is an example of what a resource's YAML will look like with this annotation in it: apiVersion : foo.cnrm.cloud.google.com/v1beta1 kind : FooBar metadata : annotations : cnrm.cloud.google.com/organization-id : ORGANIZATION ID name : foobarname Annotate namespace configuration You can set a default organization ID for newly-created resources by annotating your Kubernetes namespace.
- Annotate resource configuration If the Config Connector resource is organization-scoped but does not support organizationRef field, you can set the organization ID to the resource configuration using the organization-id annotation: ... metadata : annotations : cnrm.cloud.google.com/organization-id : ORGANIZATION ID ...
- In order for Config Connector to determine where to create your resources, it first checks for a scope-defining field in your resource spec, if not found, then checks for a scope-defining annotation .

### Folder-scoped resources \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/folder-scoped-resources](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/folder-scoped-resources)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- You can check the resource reference page to see if a resource supports the spec.folderRef field or cnrm.cloud.google.com/folder-id annotation.
- Here is an example of what a resource's YAML will look like with this annotation in it: apiVersion : foo.cnrm.cloud.google.com/v1beta1 kind : FooBar metadata : annotations : cnrm.cloud.google.com/folder-id : FOLDER ID name : foobarname Annotate namespace configuration You can set a default folder ID for newly-created resources by annotating your Kubernetes namespace.
- Annotate resource configuration If the Config Connector resource is folder-scoped but does not support the folderRef field, you can set the folder ID to the resource configuration using the folder-id annotation: ... metadata : annotations : cnrm.cloud.google.com/folder-id : FOLDER ID ...
- If the Google Cloud folder is also being managed in the same cluster via the Folder CRD, you can specify the folder as a Kubernetes resource reference: ... spec : folderRef : name : FOLDER RESOURCE NAME namespace : FOLDER RESOURCE NAMESPACE ...

