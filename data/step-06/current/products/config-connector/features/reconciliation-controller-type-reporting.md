---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.017Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "reconciliation controller type reporting"
feature_slug: "reconciliation-controller-type-reporting"
latest_feature_date: "2025-11-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation"
  - "https://docs.cloud.google.com/config-connector/docs/troubleshooting"
  - "https://docs.cloud.google.com/config-connector/docs/concepts/installation-types"
keywords:
  - "reports"
  - "reconciliation"
  - "reporting"
  - "controller"
  - "type"
---

# reconciliation controller type reporting

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector now reports the controller type at the start and end of reconciliation.

## Extended Definition

Config Connector now reports the controller type at the start and end of reconciliation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation](https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation)
- [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
- [https://docs.cloud.google.com/config-connector/docs/concepts/installation-types](https://docs.cloud.google.com/config-connector/docs/concepts/installation-types)

## Supporting Pages

### Reconciliation strategy \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation](https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation)
- Source ID: `site-docs-reference`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example event: Warning UpdateFailed 37m (x643 over 15d) computeinstance-controller Update call failed: the desired mutation for the following field(s) is invalid: [bootDisk.0.InitializeParams.0.Image networkInterface.0.NetworkIp] Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For example, if you want Config Connector to reconcile a resource less frequently to avoid hitting underlying Google Cloud API quota issues , you can set the average reconciliation interval value to 1 hour. cnrm.cloud.google.com/reconcile-interval-in-seconds: "3600" If you want Config Connector to reconcile a resource more frequently to correct drifts sooner, you can set the annotation with a small value.
- You can annotate all resources of a particular type that shares the same Group Version Kind (GVK) with the following script: Note: If you are using a GitOps-style workflow, for example with Config Sync , the following script may not be applicable.
- Configuring the reconciliation interval Starting from Config Connector 1.102 , you can configure the average reconcile interval for resources managed by Config Connector with the cnrm.cloud.google.com/reconcile-interval-in-seconds annotation.

### Troubleshoot Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Type of issue Common issues Reconciliation Resource keeps updating every 5-15 mins Resource has no status KNV2005: syncer excessively updating resource Resource deleted by Config Connector Controller Pod OOMKilled Deletion Deletions of namespaces stuck at Terminating Deletions of resources stuck at DeleteFailed after project was deleted Permissions Compute Engine Metadata not defined Error 403: Request had insufficient authentication scopes 403 Forbidden: The caller does not have permission Error 403: Caller is missing IAM permission Update error with IAMPolicy, IAMPartialPolicy and IAMPolicyMember Installation and upgrades Version not supported in Config Connector add-on installations failed calling webhook PodSecurityPolicy prevents upgrades Configuration Cannot make changes to immutable fields No matches for kind "Foo" Labels are not propagated to the Google Cloud resource Error due to special characters in resource name Unable to remove fields from resource spec Reconciliation The following section lists common issues related to reconciliation of resources by Config Connector.
- Pick a version from the list that meets the requirements . failed calling webhook Symptom You cannot uninstall Config Connector and receive an error similar to the following: error during reconciliation: error building deployment objects: error finalizing the deletion of Config Connector system components deployed by ConfigConnector controller: error waiting for CRDs to be deleted: error deleting CRD accesscontextmanageraccesslevels.accesscontextmanager.cnrm.cloud.google.com: Internal error occurred: failed calling webhook "abandon-on-uninstall.cnrm.cloud.google.com" : failed to call webhook: Post "https://abandon-on-uninstall.cnrm-system.svc:443/abandon-on-uninstall?timeout=3s" : service "abandon-on-uninstall" not found Cause This issue can occur when using the Config Connector add-on and disabling Config Connector before removing the Config Connector CRDs .
- Filter to include only logs coming from the controller Pods resource . type = "k8s container" resource . labels . container name = "manager" resource . labels . namespace name = "cnrm-system" labels . k8s - pod / cnrm cloud google com / component = "cnrm-controller-manager" Filter to include only logs coming from a particular GKE cluster resource . labels . cluster name = " GKE CLUSTER NAME " resource . labels . location = " GKE CLUSTER LOCATION " Filter to include only logs for a particular Config Connector resource jsonPayload . logger = " RESOURCE KIND -controller" jsonPayload . resource . namespace = " RESOURCE NAMESPACE " jsonPayload . resource . name = " RESOURCE NAME " Replace the following: GKE CLUSTER NAME with the name of the GKE cluster running Config Connector GKE CLUSTER LOCATION with the location of the GKE cluster running Config Connector.
- Resolution To resolve this issue, ensure that Config Connector components are scheduled on nodes with x86 architecture: Add an x86 node pool : If your cluster only contains Arm nodes, add at least one node pool using an x86 machine type (such as e2-standard-2 ) to host the Config Connector controller Pods.

### "Choosing an installation type \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/installation-types](https://docs.cloud.google.com/config-connector/docs/concepts/installation-types)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table outlines some high-level considerations: Installation methods Advantages Disadvantages Config Controller • No installation required. • Automatic version upgrades. • Includes Config Sync . • Managed and supported by Google Cloud. • Restriction on custom workloads.
- Choosing an installation type The page provides you with an overview of the different installations options you can use when installing Config Connector.
- You can install Config Connector in one of three ways: Config Controller : Config Controller is a hosted service that includes Config Connector.
- Config Controller is a centralized and designated control plane which provides a more secure way to manage Google Cloud resources.

