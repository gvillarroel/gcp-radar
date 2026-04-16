---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.109Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "Configurable reconciliation interval"
feature_slug: "configurable-reconciliation-interval"
latest_feature_date: "2023-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation"
  - "https://docs.cloud.google.com/config-connector/docs/best-practices"
  - "https://docs.cloud.google.com/config-connector/docs/troubleshooting"
keywords:
  - "configurable"
  - "intervals"
  - "reconciliation"
  - "interval"
  - "supports"
---

# Configurable reconciliation interval

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector now supports configurable reconciliation intervals.

## Extended Definition

Config Connector now supports configurable reconciliation intervals.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation](https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation)
- [https://docs.cloud.google.com/config-connector/docs/best-practices](https://docs.cloud.google.com/config-connector/docs/best-practices)
- [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)

## Supporting Pages

### Reconciliation strategy \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation](https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you want Config Connector to reconcile a resource less frequently to avoid hitting underlying Google Cloud API quota issues , you can set the average reconciliation interval value to 1 hour. cnrm.cloud.google.com/reconcile-interval-in-seconds: "3600" If you want Config Connector to reconcile a resource more frequently to correct drifts sooner, you can set the annotation with a small value.
- Configuring the reconciliation interval Starting from Config Connector 1.102 , you can configure the average reconcile interval for resources managed by Config Connector with the cnrm.cloud.google.com/reconcile-interval-in-seconds annotation.
- If you want to revert the 0 reconciliation interval, you have the following options: Modify the resource spec with the reconciliation interval value to enable new reconciliations.
- Abandon the resource by setting the annotation cnrm.cloud.google.com/deletion-policy: "abandon" and recreate the resource with a reconciliation interval value other than 0.

### Best practices for Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/best-practices](https://docs.cloud.google.com/config-connector/docs/best-practices)
- Source ID: `site-docs-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Besides a quota increase, if you've confirmed that the quota error is caused by GET requests against the Google Cloud resources managed by your Config Connector resources, you might consider one of the following options: Increase the reconciliation interval for your Config Connector resources Split your resources into multiple projects Switch Config Connector to namespaced mode Increase the reconciliation interval You can increase the time between Config Connector reconciling a resource to avoid hitting API quotas.
- To increase the reconciliation interval, follow the steps in Configuring the reconciliation interval .
- The recommendation is to set the reconciliation interval to 1 hour.
- When you create a lot of resources, those resources can generate too many API requests to the same API endpoint because of the reconciliation strategy that Config Connector uses.

### Troubleshoot Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
- Source ID: `site-docs-reference`
- Final score: 49
- Re-rank relevance: N/A

Evidence snippets:
- Type of issue Common issues Reconciliation Resource keeps updating every 5-15 mins Resource has no status KNV2005: syncer excessively updating resource Resource deleted by Config Connector Controller Pod OOMKilled Deletion Deletions of namespaces stuck at Terminating Deletions of resources stuck at DeleteFailed after project was deleted Permissions Compute Engine Metadata not defined Error 403: Request had insufficient authentication scopes 403 Forbidden: The caller does not have permission Error 403: Caller is missing IAM permission Update error with IAMPolicy, IAMPartialPolicy and IAMPolicyMember Installation and upgrades Version not supported in Config Connector add-on installations failed calling webhook PodSecurityPolicy prevents upgrades Configuration Cannot make changes to immutable fields No matches for kind "Foo" Labels are not propagated to the Google Cloud resource Error due to special characters in resource name Unable to remove fields from resource spec Reconciliation The following section lists common issues related to reconciliation of resources by Config Connector.
- Update error with IAMPolicy, IAMPartialPolicy and IAMPolicyMember Symptom You see an UpdateFailed status with an error message indicating a 400 error because the service account does not exist: Update call failed: error setting policy member: error applying changes: summary: Request Create IAM Members roles/[MYROLE] serviceAccount:[NAME]@[PROJECT ID].iam.gserviceaccount.com for project \"projects/[PROJECT ID]\"` returned error: Error applying IAM policy for project \"projects/[PROJECT ID]\": Error setting IAM policy for project \"projects/[PROJECT ID]\": googleapi: Error 400: Service account [NAME]@[PROJECT ID].iam.gserviceaccount.com does not exist., badRequest Cause If you delete an IAMServiceAccount Config Connector resource before cleaning up IAMPolicy , IAMPartialPolicy , and IAMPolicyMember resources that depend on that service account, Config Connector cannot locate the service account referenced in those IAM resources during reconciliation.
- Pick a version from the list that meets the requirements . failed calling webhook Symptom You cannot uninstall Config Connector and receive an error similar to the following: error during reconciliation: error building deployment objects: error finalizing the deletion of Config Connector system components deployed by ConfigConnector controller: error waiting for CRDs to be deleted: error deleting CRD accesscontextmanageraccesslevels.accesscontextmanager.cnrm.cloud.google.com: Internal error occurred: failed calling webhook "abandon-on-uninstall.cnrm.cloud.google.com" : failed to call webhook: Post "https://abandon-on-uninstall.cnrm-system.svc:443/abandon-on-uninstall?timeout=3s" : service "abandon-on-uninstall" not found Cause This issue can occur when using the Config Connector add-on and disabling Config Connector before removing the Config Connector CRDs .
- Check Config Connector status and conditions Check the version of Config Connector Run the following command to get the installed Config Connector version, and cross-reference the release notes to verify that the running version supports the features and resources that you want to use: kubectl get ns cnrm-system -o jsonpath = '{.metadata.annotations.cnrm\.cloud\.google\.com/version}' Check the resource's status and events Usually, you can determine the issue with your Config Connector resources by inspecting the state of your resources in Kubernetes .

