---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.266Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "config-connector CLI export subcommand"
feature_slug: "config-connector-cli-export-subcommand"
latest_feature_date: "2020-10-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/import-export/export"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/import-export/overview"
keywords:
  - "subcommand"
  - "exporting"
  - "export"
  - "includes"
  - "resources"
---

# config-connector CLI export subcommand

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

The config-connector CLI includes an export subcommand for exporting resources.

## Extended Definition

The config-connector CLI includes an export subcommand for exporting resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export)
- [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/export)
- [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/overview](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/overview)

## Supporting Pages

### "Bulk importing and exporting existing Google Cloud resources \_|\_ Config\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Bulk importing and exporting existing Google Cloud resources This page describes the config-connector bulk-export command and how to use it to export Google Cloud resources into Config Connector YAML files which you can subsequently import into Config Connector. config-connector bulk-export uses Cloud Asset Inventory 's Export functionality to discover existing Google Cloud resources.
- For example, if you want to only import PubSubTopic assets from the file EXPORT FILE , run the following command: cat EXPORT FILE jq '. select( .asset type == "pubsub.googleapis.com/Topic" )' config-connector bulk-export Exporting an inventory with config-connector The config-connector bulk-export tool can export resources from a Google Cloud Resource hierarchy .
- Exporting your organization To export all resources from your organization, use the --organization parameter. config-connector bulk-export --organization ORGANIZATION ID Replace ORGANIZATION ID with your Google Cloud organization ID.
- Exporting your folder To export all resources from a folder, use the --folder parameter. config-connector bulk-export --folder FOLDER NUMBER Replace FOLDER NUMBER with your Google Cloud folder number.

### Export and import resources to Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/export)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The output should resemble the following example: apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : annotations : cnrm.cloud.google.com/project-id : my-example-project name : sample-topic Import a resource into Config Connector After you have the YAML file for the resource that you want Config Connector to acquire, complete the following steps: Pass your resource into Config Connector by running the following command: config-connector export RESOURCE ID kubectl apply -f - --namespace NAMESPACE Replace NAMESPACE with the namespace that Config Connector manages resources from.
- After Config Connector acquires the resource, you can manage that resource by following the steps in Managing and deleting resources . config-connector CLI tool optional fields When running the config-connector export command, you can pass the following optional fields: config-connector export RESOURCE NAME \ --output FILENAME \ --oauth2-token TOKEN \ --iam-format [policy policymember none] \ --filter-deleted-iam-members [true false] \ --verbose --output : An optional output path that disables standard output.
- Export and import resources to Config Connector This page describes the config-connector export command and how to use it to export Google Cloud resources into YAML files, which you can subsequently import into Config Connector.
- By default, config-connector uses the Google Cloud CLI default credentials . --iam-format : Specifies the kind of IAM resources output with your export.

### "Install the config-connector CLI tool \_|\_ Config Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/overview](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/overview)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With the config-connector CLI tool, you can export existing Google Cloud resources into YAML files, which are required for Config Connector to acquire those resources.
- Perform a bulk export for all resources in your project, folder, or organization .
- What's next Perform an export on individual resources .
- For example, on Linux and macOS, you might use mv to place it into /usr/local/bin . mv linux/amd64/config-connector /usr/local/bin If you want to use the config-connector CLI tool to export directly from Cloud Asset Inventory, enable the Cloud Asset Inventory API on your Google Cloud Identity's project with gcloud . gcloud services enable cloudasset.googleapis.com Upgrade config-connector To upgrade the config-connector CLI tool to the latest version, repeat the installation steps and overwrite the executable.

