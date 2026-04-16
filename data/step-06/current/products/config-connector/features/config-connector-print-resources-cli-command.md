---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.250Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "config-connector print-resources CLI command"
feature_slug: "config-connector-print-resources-cli-command"
latest_feature_date: "2021-01-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/import-export/export"
  - "https://docs.cloud.google.com/config-connector/docs/troubleshooting"
keywords:
  - "shows"
  - "command"
  - "print"
  - "includes"
  - "resources"
---

# config-connector print-resources CLI command

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

The Config Connector CLI includes a print-resources command that shows resource export and bulk-export support levels.

## Extended Definition

The Config Connector CLI includes a print-resources command that shows resource export and bulk-export support levels.

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
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Bulk importing and exporting existing Google Cloud resources This page describes the config-connector bulk-export command and how to use it to export Google Cloud resources into Config Connector YAML files which you can subsequently import into Config Connector. config-connector bulk-export uses Cloud Asset Inventory 's Export functionality to discover existing Google Cloud resources.
- For example, if you want to only import PubSubTopic assets from the file EXPORT FILE , run the following command: cat EXPORT FILE jq '. select( .asset type == "pubsub.googleapis.com/Topic" )' config-connector bulk-export Exporting an inventory with config-connector The config-connector bulk-export tool can export resources from a Google Cloud Resource hierarchy .
- Options are 'continue', 'halt', or 'ignore'. halt : stop execution on any error (default) continue : continue processing resources, print the error to STDERR ignore : continue processing resources and don't print the error --iam-format : Specifies the kind of IAM resources output with your export.
- If the URI is a full path to a storage object, then the full path is used. config-connector bulk-export --storage-key gs:// BUCKET NAME Output The output from the config-connector bulk-export command is Config Connector resources in YAML format.

### Export and import resources to Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/export)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The output should resemble the following example: apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : annotations : cnrm.cloud.google.com/project-id : my-example-project name : sample-topic Import a resource into Config Connector After you have the YAML file for the resource that you want Config Connector to acquire, complete the following steps: Pass your resource into Config Connector by running the following command: config-connector export RESOURCE ID kubectl apply -f - --namespace NAMESPACE Replace NAMESPACE with the namespace that Config Connector manages resources from.
- After Config Connector acquires the resource, you can manage that resource by following the steps in Managing and deleting resources . config-connector CLI tool optional fields When running the config-connector export command, you can pass the following optional fields: config-connector export RESOURCE NAME \ --output FILENAME \ --oauth2-token TOKEN \ --iam-format [policy policymember none] \ --filter-deleted-iam-members [true false] \ --verbose --output : An optional output path that disables standard output.
- Export and import resources to Config Connector This page describes the config-connector export command and how to use it to export Google Cloud resources into YAML files, which you can subsequently import into Config Connector.
- To get a list of supported resources, run config-connector print-resources .

### Troubleshoot Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Check Config Connector status and conditions Check the version of Config Connector Run the following command to get the installed Config Connector version, and cross-reference the release notes to verify that the running version supports the features and resources that you want to use: kubectl get ns cnrm-system -o jsonpath = '{.metadata.annotations.cnrm\.cloud\.google\.com/version}' Check the resource's status and events Usually, you can determine the issue with your Config Connector resources by inspecting the state of your resources in Kubernetes .
- You can check the controller Pod's logs by running: kubectl logs -n cnrm-system \ -l cnrm.cloud.google.com/component = cnrm-controller-manager \ -c manager If you have Config Connector installed in namespaced-mode , then the previous command shows the logs of all controller Pods combined.
- Type of issue Common issues Reconciliation Resource keeps updating every 5-15 mins Resource has no status KNV2005: syncer excessively updating resource Resource deleted by Config Connector Controller Pod OOMKilled Deletion Deletions of namespaces stuck at Terminating Deletions of resources stuck at DeleteFailed after project was deleted Permissions Compute Engine Metadata not defined Error 403: Request had insufficient authentication scopes 403 Forbidden: The caller does not have permission Error 403: Caller is missing IAM permission Update error with IAMPolicy, IAMPartialPolicy and IAMPolicyMember Installation and upgrades Version not supported in Config Connector add-on installations failed calling webhook PodSecurityPolicy prevents upgrades Configuration Cannot make changes to immutable fields No matches for kind "Foo" Labels are not propagated to the Google Cloud resource Error due to special characters in resource name Unable to remove fields from resource spec Reconciliation The following section lists common issues related to reconciliation of resources by Config Connector.
- Update error with IAMPolicy, IAMPartialPolicy and IAMPolicyMember Symptom You see an UpdateFailed status with an error message indicating a 400 error because the service account does not exist: Update call failed: error setting policy member: error applying changes: summary: Request Create IAM Members roles/[MYROLE] serviceAccount:[NAME]@[PROJECT ID].iam.gserviceaccount.com for project \"projects/[PROJECT ID]\"` returned error: Error applying IAM policy for project \"projects/[PROJECT ID]\": Error setting IAM policy for project \"projects/[PROJECT ID]\": googleapi: Error 400: Service account [NAME]@[PROJECT ID].iam.gserviceaccount.com does not exist., badRequest Cause If you delete an IAMServiceAccount Config Connector resource before cleaning up IAMPolicy , IAMPartialPolicy , and IAMPolicyMember resources that depend on that service account, Config Connector cannot locate the service account referenced in those IAM resources during reconciliation.

