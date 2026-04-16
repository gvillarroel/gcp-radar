---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.069Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "ComputeTargetHTTPProxy HTTP keep-alive timeout"
feature_slug: "computetargethttpproxy-http-keep-alive-timeout"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/troubleshooting"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts"
  - "https://docs.cloud.google.com/config-connector/docs/overview"
keywords:
  - "computetargethttpproxy"
  - "alive"
  - "keep"
  - "http"
  - "timeout"
  - "supports"
---

# ComputeTargetHTTPProxy HTTP keep-alive timeout

Product: Config Connector
Coverage: LOW

## Step 02 Summary

Config Connector supports configuring HTTP keep-alive timeout on ComputeTargetHTTPProxy resources.

## Extended Definition

Config Connector supports configuring HTTP keep-alive timeout on ComputeTargetHTTPProxy resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts)
- [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview)

## Supporting Pages

### Troubleshoot Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
- Source ID: `site-docs-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- Pick a version from the list that meets the requirements . failed calling webhook Symptom You cannot uninstall Config Connector and receive an error similar to the following: error during reconciliation: error building deployment objects: error finalizing the deletion of Config Connector system components deployed by ConfigConnector controller: error waiting for CRDs to be deleted: error deleting CRD accesscontextmanageraccesslevels.accesscontextmanager.cnrm.cloud.google.com: Internal error occurred: failed calling webhook "abandon-on-uninstall.cnrm.cloud.google.com" : failed to call webhook: Post "https://abandon-on-uninstall.cnrm-system.svc:443/abandon-on-uninstall?timeout=3s" : service "abandon-on-uninstall" not found Cause This issue can occur when using the Config Connector add-on and disabling Config Connector before removing the Config Connector CRDs .
- Compute Engine metadata not defined Symptom Your Config Connector resource has an UpdateFailed status with a message stating that the Compute Engine metadata is not defined, similar to the following error: Update call failed: error fetching live state: error reading underlying resource: summary: Error when reading or editing SpannerInstance "my-project/my-spanner- instance": Get "https://spanner.googleapis.com/v1/projects/my-project/instances/my-spanner-instance?alt=json": metadata: Compute Engine metadata "instance/service-accounts/default/token? scopes=https%!A(MISSING)%!F(MISSING)%!F(MISSING)www.googleapis.com%!F(MISSING)auth%!F(MISSING)compute%!C(MISSING)https%!A(MISSING)%!F(MISSING)%!F(MISSING)www.googleapis.com%!F(MISSIN G)auth%!F(MISSING)cloud-platform%!C(MISSING)https%!A(MISSING)%!F(MISSING)%!F(MISSING)www.googleapis.com%!F(MISSING)auth%!F(MISSING)cloud-identity%!C(MISSING)https%!A(MISSING)%!F(MISS ING)%!F(MISSING)www.googleapis.com%!F(MISSING)auth%!F(MISSING)ndev.clouddns.readwrite%!C(MISSING)https%!A(MISSING)%!F(MISSING)%!F(MISSING)www.googleapis.com%!F(MISSING)auth%!F(MISSIN G)devstorage.full control%!C(MISSING)https%!A(MISSING)%!F(MISSING)%!F(MISSING)www.googleapis.com%!F(MISSING)auth%!F(MISSING)userinfo.email%!C(MISSING)https%!A(MISSING)%!F(MISSING)%!F (MISSING)www.googleapis.com%!F(MISSING)auth%!F(MISSING)drive.readonly" not defined, detail: Cause It is likely that the IAM service account used by Config Connector does not exist.
- Type of issue Common issues Reconciliation Resource keeps updating every 5-15 mins Resource has no status KNV2005: syncer excessively updating resource Resource deleted by Config Connector Controller Pod OOMKilled Deletion Deletions of namespaces stuck at Terminating Deletions of resources stuck at DeleteFailed after project was deleted Permissions Compute Engine Metadata not defined Error 403: Request had insufficient authentication scopes 403 Forbidden: The caller does not have permission Error 403: Caller is missing IAM permission Update error with IAMPolicy, IAMPartialPolicy and IAMPolicyMember Installation and upgrades Version not supported in Config Connector add-on installations failed calling webhook PodSecurityPolicy prevents upgrades Configuration Cannot make changes to immutable fields No matches for kind "Foo" Labels are not propagated to the Google Cloud resource Error due to special characters in resource name Unable to remove fields from resource spec Reconciliation The following section lists common issues related to reconciliation of resources by Config Connector.
- 403 Forbidden: The caller does not have permission Symptom Your Config Connector resource has an UpdateFailed status with a message indicating a 403 error due to Workload Identity Federation for GKE, similar to the following error: Update call failed: error fetching live state: error reading underlying resource: summary: Error when reading or editing SpannerInstance "my-project/my-spanner- instance": Get "https://spanner.googleapis.com/v1/projects/my-project/instances/my-spanner-instance?alt=json": compute: Received 403 Unable to generate access token; IAM returned 403 Forbidden: The caller does not have permission This error could be caused by a missing IAM policy binding on the target IAM service account.

### Configure webhook timeout \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts)
- Source ID: `site-docs-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- Configure timeout for validating webhooks You can configure the following validating webhooks: deny-immutable-field-updates.cnrm.cloud.google.com deny-unknown-fields.cnrm.cloud.google.com iam-validation.cnrm.cloud.google.com resource-validation.cnrm.cloud.google.com abandon-on-uninstall.cnrm.cloud.google.com For example, you can configure the timeout of validating webhooks deny-immutable-field-updates.cnrm.cloud.google.com and deny-unknown-fields.cnrm.cloud.google.com by creating and applying the following example YAML file.
- Create a file named configure-validating-webhook-timeout.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ValidatingWebhookConfigurationCustomization metadata : name : validating-webhook spec : webhooks : - name : deny-immutable-field-updates timeoutSeconds : 12 - name : deny-unknown-fields timeoutSeconds : 15 Note: when specifying the name of webhook configuration and the names of webhooks in the YAML file, don't include the .cnrm.cloud.google.com suffix.
- Verify that the new custom timeout has been applied to the target webhooks: kubectl get validatingwebhookconfigurations validating-webhook.cnrm.cloud.google.com -o jsonpath='{.webhooks[?(@.name=="deny-immutable-field-updates.cnrm.cloud.google.com")].timeoutSeconds}{"\n"}' kubectl get validatingwebhookconfigurations validating-webhook.cnrm.cloud.google.com -o jsonpath='{.webhooks[?(@.name=="deny-unknown-fields.cnrm.cloud.google.com")].timeoutSeconds}{"\n"}' Applying the customization could take a few minutes.
- Create a file named configure-mutating-webhook-timeout.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : MutatingWebhookConfigurationCustomization metadata : name : mutating-webhook spec : webhooks : - name : container-annotation-handler timeoutSeconds : 20 Note: when specifying the name of webhook configuration and the names of webhooks in the YAML file, don't include the .cnrm.cloud.google.com suffix.

### Config Connector overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

