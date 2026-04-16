---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.275Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "config-connector resource export"
feature_slug: "config-connector-resource-export"
latest_feature_date: "2020-06-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/import-export/export"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/organization-scoped-resources"
keywords:
  - "tool"
  - "export"
  - "into"
  - "resources"
  - "resource"
---

# config-connector resource export

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

The config-connector tool can export Google Cloud resources into Config Connector manifests.

## Extended Definition

The config-connector tool can export Google Cloud resources into Config Connector manifests.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export)
- [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/export)
- [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/organization-scoped-resources](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/organization-scoped-resources)

## Supporting Pages

### "Bulk importing and exporting existing Google Cloud resources \_|\_ Config\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Bulk importing and exporting existing Google Cloud resources This page describes the config-connector bulk-export command and how to use it to export Google Cloud resources into Config Connector YAML files which you can subsequently import into Config Connector. config-connector bulk-export uses Cloud Asset Inventory 's Export functionality to discover existing Google Cloud resources.
- For example, if you want to only import PubSubTopic assets from the file EXPORT FILE , run the following command: cat EXPORT FILE jq '. select( .asset type == "pubsub.googleapis.com/Topic" )' config-connector bulk-export Exporting an inventory with config-connector The config-connector bulk-export tool can export resources from a Google Cloud Resource hierarchy .
- Save the topic asset's JSON structure into an environment variable: TOPIC ASSET = '{"name":"//pubsub.googleapis.com/' " ${ TOPIC RESOURCE NAME } " '","asset type":"pubsub.googleapis.com/Topic"}' Pass the asset into config-connector bulk-export by running the following command: echo ${ TOPIC ASSET } config-connector bulk-export The output is a Config Connector resource in YAML format. --- apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : annotations : cnrm.cloud.google.com/project-id : PROJECT ID name : sample-topic ...
- Before you begin Install the config-connector tool If you want to use the config-connector tool to export directly from Cloud Asset Inventory, enable the Cloud Asset Inventory API on your Google Cloud Identity's project with gcloud . gcloud services enable cloudasset.googleapis.com Bulk export example In this example, you create a PubSubTopic with the Google Cloud CLI and then import it into Config Connector.

### Export and import resources to Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/export)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The output should resemble the following example: apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : annotations : cnrm.cloud.google.com/project-id : my-example-project name : sample-topic Import a resource into Config Connector After you have the YAML file for the resource that you want Config Connector to acquire, complete the following steps: Pass your resource into Config Connector by running the following command: config-connector export RESOURCE ID kubectl apply -f - --namespace NAMESPACE Replace NAMESPACE with the namespace that Config Connector manages resources from.
- After Config Connector acquires the resource, you can manage that resource by following the steps in Managing and deleting resources . config-connector CLI tool optional fields When running the config-connector export command, you can pass the following optional fields: config-connector export RESOURCE NAME \ --output FILENAME \ --oauth2-token TOKEN \ --iam-format [policy policymember none] \ --filter-deleted-iam-members [true false] \ --verbose --output : An optional output path that disables standard output.
- Export and import resources to Config Connector This page describes the config-connector export command and how to use it to export Google Cloud resources into YAML files, which you can subsequently import into Config Connector.
- Export a resource You can use the config-connector CLI tool to export an existing resource into a YAML file.

### "Organization-scoped resources \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/organization-scoped-resources](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/organization-scoped-resources)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: You must create the namespace and annotation before applying any resources into the namespace.
- Here is an example of what a resource's YAML will look like with this annotation in it: apiVersion : foo.cnrm.cloud.google.com/v1beta1 kind : FooBar metadata : annotations : cnrm.cloud.google.com/organization-id : ORGANIZATION ID name : foobarname Annotate namespace configuration You can set a default organization ID for newly-created resources by annotating your Kubernetes namespace.
- In order for Config Connector to determine where to create your resources, it first checks for a scope-defining field in your resource spec, if not found, then checks for a scope-defining annotation .
- If any of the resources in the namespace have this annotation explicitly set in its own configuration, the resource level annotation overwrites the namespace-level annotation.

