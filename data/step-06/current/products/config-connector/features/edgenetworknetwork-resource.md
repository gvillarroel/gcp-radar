---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.038Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "EdgeNetworkNetwork resource"
feature_slug: "edgenetworknetwork-resource"
latest_feature_date: "2023-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources"
  - "https://docs.cloud.google.com/config-connector/docs/concepts/managing-conflicts"
keywords:
  - "edgenetworknetwork"
  - "v1beta1"
  - "managing"
  - "resource"
  - "added"
---

# EdgeNetworkNetwork resource

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector added support for managing the EdgeNetworkNetwork resource in v1beta1.

## Extended Definition

Config Connector added support for managing the EdgeNetworkNetwork resource in v1beta1.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)
- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)
- [https://docs.cloud.google.com/config-connector/docs/concepts/managing-conflicts](https://docs.cloud.google.com/config-connector/docs/concepts/managing-conflicts)

## Supporting Pages

### "Managing resources with the resourceID field \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Acquiring a folder To acquire a folder using Config Connector with the resourceID field, complete the following steps: Copy the following contents into a file named folder.yaml . apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1 kind : Folder metadata : annotations : cnrm.cloud.google.com/organization-id : ORG ID Remove the deletion-policy annotation if it is safe to delete the folder when the resource is deleted from your cluster. cnrm.cloud.google.com/deletion-policy : "abandon" name : folder-sample-for-acquisition spec : resourceID : ACQUIRED FOLDER ID displayName : ACQUIRED FOLDER DISPLAY NAME Replace the following: ORG ID with the numeric ID for your organization.
- Copy the following contents into a file named bigquery-dataset.yaml . apiVersion : bigquery.cnrm.cloud.google.com/v1beta1 kind : BigQueryDataset metadata : name : bigquerydataset-sample-for-creation spec : resourceID : bigquerydataset sample with resourceid defaultTableExpirationMs : 3600000 description : "BigQuery Dataset Sample with the ResourceID Field" friendlyName : bigquerydataset-sample-with-resourceid location : US Apply the YAML file to your cluster. kubectl apply --namespace CC NAMESPACE -f bigquery-dataset.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- The name of the Config Connector resource is pubsub-topic-sample and the name of the Pub/Sub topic is pubsub-topic-id . apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : name : pubsub-topic-sample spec : resourceID : pubsub-topic-id Creating a resource with the resourceID field Note: When you manage a Google Cloud resource with the resourceID field, if the resource has a service-generated resource ID, Config Connector assumes the resource already exists and tries to acquire the resource.
- Managing resources with the resourceID field This page explains how to manage resources with the resourceID field.

### "Managing and deleting resources \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Create a BigQuery dataset named bigquerydatasetsample with bq . bq --location=US mk \ --dataset \ --default table expiration 3600 \ --description description \ PROJECT ID :bigquerydatasetsample Copy the following contents into a file named bq-sample.yaml . apiVersion : bigquery.cnrm.cloud.google.com/v1beta1 kind : BigQueryDataset metadata : name : bigquerydatasetsample spec : defaultTableExpirationMs : 3600000 description : "BigQuery Dataset Sample" friendlyName : bigquerydataset-sample location : US Apply the yaml to your cluster. kubectl apply --namespace CC NAMESPACE -f bq-sample.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- For example, the YAML for the BigQuery dataset described earlier including the abandon deletion policy is below: apiVersion : bigquery.cnrm.cloud.google.com/v1beta1 kind : BigQueryDataset metadata : name : bigquerydatasetsample annotations : cnrm.cloud.google.com/deletion-policy : abandon spec : defaultTableExpirationMs : 3600000 description : "BigQuery Dataset Sample" friendlyName : bigquerydataset-sample location : US Resources with restrictions around acquisition Some resources can't be acquired following the instructions in the preceding section.
- Managing and deleting resources This page explains how Config Connector manages an existing resource and handles deleting resources .
- If a resource with the same name already exists, Config Connector acquires that resource and starts managing it.

### "Managing conflicts with multiple Config Connector resources \_|\_ Google\

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/managing-conflicts](https://docs.cloud.google.com/config-connector/docs/concepts/managing-conflicts)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the following example, a manifest for the default ComputeNetwork uses a management policy of none , which means that conflicts are not prevented: apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeNetwork metadata : annotations : cnrm.cloud.google.com/management-conflict-prevention-policy : "none" cnrm.cloud.google.com/project-id : " PROJECT-ID " cnrm.cloud.google.com/deletion-policy : "abandon" name : default spec : description : Default network for the project Limitations Conflict prevention has the following limitations: Conflict prevention does not work for resources that don't support labels.
- If you are Managing resources with the resourceID field you can create multiple resources with the same Google Cloud resource name, created under the same namespace.
- Managing conflicts with multiple Config Connector resources This page describes how Config Connector handles conflicts.
- Modifying conflict prevention You can control conflict prevention by adding the cnrm.cloud.google.com/management-conflict-prevention-policy annotation to the resource with one of the following values: resource : management conflicts are prevented at the resource level by saving the appropriate lease labels into the resource as described in the preceding section. none : management conflicts are not prevented.

