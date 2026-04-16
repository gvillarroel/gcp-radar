---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.050Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "Webhook customization timeouts"
feature_slug: "webhook-customization-timeouts"
latest_feature_date: "2023-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts"
  - "https://docs.cloud.google.com/config-connector/docs/known-issues"
  - "https://docs.cloud.google.com/config-connector/docs/troubleshooting"
keywords:
  - "timeouts"
  - "customization"
  - "timeout"
  - "webhook"
  - "through"
  - "added"
---

# Webhook customization timeouts

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector added webhook timeout customization support through MutatingWebhookConfigurationCustomization and ValidatingWebhookConfigurationCustomization.

## Extended Definition

Config Connector added webhook timeout customization support through MutatingWebhookConfigurationCustomization and ValidatingWebhookConfigurationCustomization.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts)
- [https://docs.cloud.google.com/config-connector/docs/known-issues](https://docs.cloud.google.com/config-connector/docs/known-issues)
- [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)

## Supporting Pages

### Configure webhook timeout \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts)
- Source ID: `site-docs-reference`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a file named configure-validating-webhook-timeout.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ValidatingWebhookConfigurationCustomization metadata : name : validating-webhook spec : webhooks : - name : deny-immutable-field-updates timeoutSeconds : 12 - name : deny-unknown-fields timeoutSeconds : 15 Note: when specifying the name of webhook configuration and the names of webhooks in the YAML file, don't include the .cnrm.cloud.google.com suffix.
- Verify that the new custom timeout has been applied to the target webhooks: kubectl get validatingwebhookconfigurations validating-webhook.cnrm.cloud.google.com -o jsonpath='{.webhooks[?(@.name=="deny-immutable-field-updates.cnrm.cloud.google.com")].timeoutSeconds}{"\n"}' kubectl get validatingwebhookconfigurations validating-webhook.cnrm.cloud.google.com -o jsonpath='{.webhooks[?(@.name=="deny-unknown-fields.cnrm.cloud.google.com")].timeoutSeconds}{"\n"}' Applying the customization could take a few minutes.
- Create a file named configure-mutating-webhook-timeout.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : MutatingWebhookConfigurationCustomization metadata : name : mutating-webhook spec : webhooks : - name : container-annotation-handler timeoutSeconds : 20 Note: when specifying the name of webhook configuration and the names of webhooks in the YAML file, don't include the .cnrm.cloud.google.com suffix.
- Verify that the new custom timeout has been applied to the target webhooks: kubectl get mutatingwebhookconfigurations mutating-webhook.cnrm.cloud.google.com -o jsonpath='{.webhooks[?(@.name=="container-annotation-handler.cnrm.cloud.google.com")].timeoutSeconds}{"\n"}' Applying the customization could take a few minutes.

### Known issues \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/known-issues](https://docs.cloud.google.com/config-connector/docs/known-issues)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Installation, Networking Kubernetes 1.19 1.43 Fixed: Failed calling webhook x509: certificate relies on legacy Common Name field error If you see an error similar to the following example, you might be experiencing an issue with certificates: Error from server (InternalError): error when creating "/mnt/set-weaver-dns-record.yml": Internal error occurred: failed calling webhook "annotation-defaulter.cnrm.cloud.google.com": Post "https://cnrm-validating-webhook.cnrm-system.svc:443/annotation-defaulter?timeout=30s": x509: certificate relies on legacy Common Name field, use SANs or temporarily enable Common Name matching with GODEBUG=x509ignoreCN=0 This issue occurs with Kubernetes versions 1.19 and later.
- Workaround: To immediately unblock resource creation, you can force the webhook manager Pods to synchronize and pull the correct certificate data by restarting the deployment with the following command: kubectl rollout restart deployment cnrm-webhook-manager -n cnrm-system Resources 1.134 1.134.2 Fixed: SQLInstance stuck in Updating state with "merge" annotation error Affected SQLInstance resources might become stuck in an Updating state with an error message regarding the state-into-spec annotation. invalid value "merge" for "cnrm.cloud.google.com/state-into-spec" annotation This issue occurs because a stricter validation introduced in version 1.134.0 incorrectly rejected the "merge" strategy for SQLInstance resources, even when applied as a default.
- Select your Config Connector version: 1.134.1 1.134 1.131 Kubernetes 1.19 Select your problem category: Installation Networking Resources Direct Reconciler Or, filter the known issues: Category Earliest identified version Fixed version Issue and workaround Resources 1.126.0 1.134.1 Fixed: Resource creation blocked by webhook TLS error: "x509: certificate signed by unknown authority" When attempting to create or apply new Config Connector resources, the Kubernetes API server rejects the request and blocks resource creation.
- You might see an error similar to the following in your deployment outputs or API server logs: failed calling webhook "container-annotation-handler.cnrm.cloud.google.com": failed to call webhook: Post "https://cnrm-validating-webhook.cnrm-system.svc:443/...": tls: failed to verify certificate: x509: certificate signed by unknown authority Additionally, the cnrm-webhook-manager Pod logs might display the following: http: TLS handshake error ... remote error: tls: bad certificate.

### Troubleshoot Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
- Source ID: `site-docs-reference`
- Final score: 49
- Re-rank relevance: N/A

Evidence snippets:
- Pick a version from the list that meets the requirements . failed calling webhook Symptom You cannot uninstall Config Connector and receive an error similar to the following: error during reconciliation: error building deployment objects: error finalizing the deletion of Config Connector system components deployed by ConfigConnector controller: error waiting for CRDs to be deleted: error deleting CRD accesscontextmanageraccesslevels.accesscontextmanager.cnrm.cloud.google.com: Internal error occurred: failed calling webhook "abandon-on-uninstall.cnrm.cloud.google.com" : failed to call webhook: Post "https://abandon-on-uninstall.cnrm-system.svc:443/abandon-on-uninstall?timeout=3s" : service "abandon-on-uninstall" not found Cause This issue can occur when using the Config Connector add-on and disabling Config Connector before removing the Config Connector CRDs .
- Type of issue Common issues Reconciliation Resource keeps updating every 5-15 mins Resource has no status KNV2005: syncer excessively updating resource Resource deleted by Config Connector Controller Pod OOMKilled Deletion Deletions of namespaces stuck at Terminating Deletions of resources stuck at DeleteFailed after project was deleted Permissions Compute Engine Metadata not defined Error 403: Request had insufficient authentication scopes 403 Forbidden: The caller does not have permission Error 403: Caller is missing IAM permission Update error with IAMPolicy, IAMPartialPolicy and IAMPolicyMember Installation and upgrades Version not supported in Config Connector add-on installations failed calling webhook PodSecurityPolicy prevents upgrades Configuration Cannot make changes to immutable fields No matches for kind "Foo" Labels are not propagated to the Google Cloud resource Error due to special characters in resource name Unable to remove fields from resource spec Reconciliation The following section lists common issues related to reconciliation of resources by Config Connector.
- Check that Config Connector is running To check that Config Connector is running, verify that all of its Pods are READY : kubectl get pod -n cnrm-system Example output: NAME READY STATUS RESTARTS AGE cnrm-controller-manager-0 1/1 Running 0 1h cnrm-deletiondefender-0 1/1 Running 0 1h cnrm-resource-stats-recorder-77dc8cc4b6-mgpgp 1/1 Running 0 1h cnrm-webhook-manager-58496b66f9-pqwhz 1/1 Running 0 1h cnrm-webhook-manager-58496b66f9-wdcn4 1/1 Running 0 1h If you have Config Connector installed in namespaced-mode , then you will have one controller ( cnrm-controller-manager ) Pod for each namespace that is responsible for managing the Config Connector resources in that namespace.
- Resolution To resolve this error, you must first manually delete the webhooks: kubectl delete validatingwebhookconfiguration abandon-on-uninstall.cnrm.cloud.google.com --ignore-not-found --wait = true kubectl delete validatingwebhookconfiguration validating-webhook.cnrm.cloud.google.com --ignore-not-found --wait = true kubectl delete mutatingwebhookconfiguration mutating-webhook.cnrm.cloud.google.com --ignore-not-found --wait = true You can then proceed to uninstall Config Connector.

