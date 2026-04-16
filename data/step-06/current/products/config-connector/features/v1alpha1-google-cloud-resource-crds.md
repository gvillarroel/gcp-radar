---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.106Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "v1alpha1 Google Cloud resource CRDs"
feature_slug: "v1alpha1-google-cloud-resource-crds"
latest_feature_date: "2023-04-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/install-alpha-crds"
  - "https://docs.cloud.google.com/config-connector/docs/concepts/resources"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids"
keywords:
  - "v1alpha1"
  - "includes"
  - "crds"
  - "resource"
---

# v1alpha1 Google Cloud resource CRDs

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector now includes 136 v1alpha1 Google Cloud resource CRDs.

## Extended Definition

Config Connector now includes 136 v1alpha1 Google Cloud resource CRDs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/install-alpha-crds](https://docs.cloud.google.com/config-connector/docs/how-to/install-alpha-crds)
- [https://docs.cloud.google.com/config-connector/docs/concepts/resources](https://docs.cloud.google.com/config-connector/docs/concepts/resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)

## Supporting Pages

### Installing Config Connector v1alpha1 CRDs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/install-alpha-crds](https://docs.cloud.google.com/config-connector/docs/how-to/install-alpha-crds)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Installing Config Connector v1alpha1 CRDs This topic explains how to install v1alpha1 Google Cloud resource Custom Resource Definitions (CRDs) in Config Connector.
- Uninstalling the v1alpha1 CRDs Delete the CRs for v1alpha1 CRDs if you no longer need the underlying Google Cloud resources.
- Warning: Config Connector v1alpha1 Google Cloud resource CRDs should not be used in production.
- You can check the Config Connector version by connecting to the cluster where Config Connector is installed and running the following command: kubectl get ns cnrm-system -o jsonpath = '{.metadata.annotations.cnrm\.cloud\.google\.com/version}' Installing the v1alpha1 CRDs Clone the GitHub repository : git clone https://github.com/GoogleCloudPlatform/k8s-config-connector git checkout to your Config Connector version: cd k8s-config-connector echo 'v' $( kubectl get ns cnrm-system -o jsonpath = '{.metadata.annotations.cnrm\.cloud\.google\.com/version}' ) xargs git checkout Install the v1alpha1 CRDs: cd crds If you want to install a specific v1alpha1 CRD, run the following command: kubectl apply -f CRD FILENAME Replace CRD FILENAME with the filename of the v1alpha1 CRD you want to install.

### About Config Connector CRDs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/resources](https://docs.cloud.google.com/config-connector/docs/concepts/resources)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- About Config Connector CRDs Config Connector includes a collection of Custom Resource Definitions (CRDs).
- Object metadata Each Config Connector resource includes a metadata field.
- If the resourceID field is supported in the Config Connector resource, you can specify a different name, which follows the naming convention of the Google Cloud resource, for the corresponding Google Cloud resource in the spec.resourceID field.
- Folders and hierarchical resources In addition to managing resources in Google Cloud products, Config Connector supports creating and managing resources within Google Cloud Folders and Organizations .

### "Managing resources with the resourceID field \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Acquiring a folder To acquire a folder using Config Connector with the resourceID field, complete the following steps: Copy the following contents into a file named folder.yaml . apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1 kind : Folder metadata : annotations : cnrm.cloud.google.com/organization-id : ORG ID Remove the deletion-policy annotation if it is safe to delete the folder when the resource is deleted from your cluster. cnrm.cloud.google.com/deletion-policy : "abandon" name : folder-sample-for-acquisition spec : resourceID : ACQUIRED FOLDER ID displayName : ACQUIRED FOLDER DISPLAY NAME Replace the following: ORG ID with the numeric ID for your organization.
- Copy the following contents into a file named bigquery-dataset.yaml . apiVersion : bigquery.cnrm.cloud.google.com/v1beta1 kind : BigQueryDataset metadata : name : bigquerydataset-sample-for-creation spec : resourceID : bigquerydataset sample with resourceid defaultTableExpirationMs : 3600000 description : "BigQuery Dataset Sample with the ResourceID Field" friendlyName : bigquerydataset-sample-with-resourceid location : US Apply the YAML file to your cluster. kubectl apply --namespace CC NAMESPACE -f bigquery-dataset.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- The name of the Config Connector resource is pubsub-topic-sample and the name of the Pub/Sub topic is pubsub-topic-id . apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : name : pubsub-topic-sample spec : resourceID : pubsub-topic-id Creating a resource with the resourceID field Note: When you manage a Google Cloud resource with the resourceID field, if the resource has a service-generated resource ID, Config Connector assumes the resource already exists and tries to acquire the resource.
- Config Connector lets you explicitly specify the resource ID of a Google Cloud resource using the immutable but optional resourceID field to create or acquire the resource. "Immutable, but optional" means that you can choose to specify or not specify the resourceID field, but you can't make any changes to the value of the resourceID field after applying the manifest to your cluster.

