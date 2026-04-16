---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.275Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "Streaming DataflowJob updates"
feature_slug: "streaming-dataflowjob-updates"
latest_feature_date: "2020-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/troubleshooting"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/folder-scoped-resources"
keywords:
  - "streaming"
  - "changing"
  - "updates"
  - "updated"
  - "dataflowjob"
  - "resources"
  - "spec"
---

# Streaming DataflowJob updates

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Streaming DataflowJob resources can be updated by changing supported spec fields.

## Extended Definition

Streaming DataflowJob resources can be updated by changing supported spec fields.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
- [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/folder-scoped-resources](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/folder-scoped-resources)

## Supporting Pages

### Monitoring your resources \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Config Connector-specific events Config Connector can create the following event types: Updating Occurs when a Config Connector resource's underlying Google Cloud resource is being updated.
- Viewing events for a single resource You can view the events for a single resource by examining the Events field in the output of the following command: kubectl describe KIND NAME Replace the following: KIND : your resource's kind NAME : your resource's name For example, if you had a Config Connector SQLInstance resource named sqlinstance-sample , use the following command to view its events: kubectl describe sqlinstance sqlinstance-sample Viewing events for a namespace To see the events for all Kubernetes resources in a given namespace, including your Config Connector resources, run the following command: kubectl --namespace CC NAMESPACE get events Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Listing all resources You can list the resources that Config Connector manages with, by running the following command: kubectl get gcp Determining a resource's status You can determine if your resource is ready by looking at its status.condition .

### Troubleshoot Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Type of issue Common issues Reconciliation Resource keeps updating every 5-15 mins Resource has no status KNV2005: syncer excessively updating resource Resource deleted by Config Connector Controller Pod OOMKilled Deletion Deletions of namespaces stuck at Terminating Deletions of resources stuck at DeleteFailed after project was deleted Permissions Compute Engine Metadata not defined Error 403: Request had insufficient authentication scopes 403 Forbidden: The caller does not have permission Error 403: Caller is missing IAM permission Update error with IAMPolicy, IAMPartialPolicy and IAMPolicyMember Installation and upgrades Version not supported in Config Connector add-on installations failed calling webhook PodSecurityPolicy prevents upgrades Configuration Cannot make changes to immutable fields No matches for kind "Foo" Labels are not propagated to the Google Cloud resource Error due to special characters in resource name Unable to remove fields from resource spec Reconciliation The following section lists common issues related to reconciliation of resources by Config Connector.
- Check Config Connector status and conditions Check the version of Config Connector Run the following command to get the installed Config Connector version, and cross-reference the release notes to verify that the running version supports the features and resources that you want to use: kubectl get ns cnrm-system -o jsonpath = '{.metadata.annotations.cnrm\.cloud\.google\.com/version}' Check the resource's status and events Usually, you can determine the issue with your Config Connector resources by inspecting the state of your resources in Kubernetes .
- KNV2005: syncer excessively updating resource Symptom You use Config Sync and are seeing KNV2005 errors for Config Connector resources, similar to the following: KNV2005: detected excessive object updates, approximately 6 times per minute.
- You can query for logs for specific resources by filtering for the following fields in the log messages: logger : contains the resource's kind in lower-case .

### Folder-scoped resources \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/folder-scoped-resources](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/folder-scoped-resources)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In order for Config Connector to determine where to create your resources, it first checks for a scope-defining field in your resource spec, if not found, then checks for a scope-defining annotation .
- Specify folderRef field Most folder-scoped Config Connector resources support a field named folderRef in its CRD spec.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Here is an example of what a resource's YAML will look like with this annotation in it: apiVersion : foo.cnrm.cloud.google.com/v1beta1 kind : FooBar metadata : annotations : cnrm.cloud.google.com/folder-id : FOLDER ID name : foobarname Annotate namespace configuration You can set a default folder ID for newly-created resources by annotating your Kubernetes namespace.

