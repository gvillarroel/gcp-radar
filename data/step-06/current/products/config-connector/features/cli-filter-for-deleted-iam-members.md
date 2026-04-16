---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.240Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "CLI filter for deleted IAM members"
feature_slug: "cli-filter-for-deleted-iam-members"
latest_feature_date: "2021-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/import-export/export"
  - "https://docs.cloud.google.com/config-connector/docs/troubleshooting"
keywords:
  - "deleted"
  - "members"
  - "filter"
  - "supports"
---

# CLI filter for deleted IAM members

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

The config-connector CLI supports filtering out deleted IAM members.

## Extended Definition

The config-connector CLI supports filtering out deleted IAM members.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export)
- [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/export)
- [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)

## Supporting Pages

### "Bulk importing and exporting existing Google Cloud resources \_|\_ Config\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, to output assets from the project my-project to the sample directory, run the following command: config-connector bulk-export --project my-project --on-error continue --output sample/ Command-line options The config-connector bulk-export command has the following options: config-connector bulk-export --input FILENAME \ --output FILENAME \ --storage-key gs://BUCKET NAME \ --project PROJECT ID \ --folder FOLDER NUMBER \ --organization ORGANIZATION ID \ --oauth2-token TOKEN \ --on-error [halt continue ignore] \ --iam-format [policy policymember none] \ --filter-deleted-iam-members [true false] \ --verbose --input : Cloud Asset Inventory input file. --output : An optional output file path that disables standard output.
- Before you begin Install the config-connector tool If you want to use the config-connector tool to export directly from Cloud Asset Inventory, enable the Cloud Asset Inventory API on your Google Cloud Identity's project with gcloud . gcloud services enable cloudasset.googleapis.com Bulk export example In this example, you create a PubSubTopic with the Google Cloud CLI and then import it into Config Connector.
- Create a topic named sample-topic with the Google Cloud CLI: gcloud pubsub topics create sample-topic You receive confirmation that the topic has been created.
- By default, config-connector uses the Google Cloud CLI default credentials . --on-error : Control the behavior when a recoverable error occurs.

### Troubleshoot Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Stop Config Sync from reacting to updates to the resource on the Kubernetes API Server by setting the annotation client.lifecycle.config.k8s.io/mutation to ignore .
- Find the mismatch in between the gcloud CLI output and the YAML configuration of the Config Connector resource, and update those fields in the YAML configuration.
- For example, running kubectl delete , using config management tools like Argo CD, or using a customized API client can cause resource deletion.
- Get the state of the Google Cloud resource using the REST API (for example, for ContainerCluster ) or the Google Cloud CLI.

### Export and import resources to Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/export)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After Config Connector acquires the resource, you can manage that resource by following the steps in Managing and deleting resources . config-connector CLI tool optional fields When running the config-connector export command, you can pass the following optional fields: config-connector export RESOURCE NAME \ --output FILENAME \ --oauth2-token TOKEN \ --iam-format [policy policymember none] \ --filter-deleted-iam-members [true false] \ --verbose --output : An optional output path that disables standard output.
- By default, config-connector uses the Google Cloud CLI default credentials . --iam-format : Specifies the kind of IAM resources output with your export.
- Options are policy (default), policymember , or none . --filter-deleted-iam-members : Specifies whether to filter out deleted IAM principals.
- Export a resource You can use the config-connector CLI tool to export an existing resource into a YAML file.

