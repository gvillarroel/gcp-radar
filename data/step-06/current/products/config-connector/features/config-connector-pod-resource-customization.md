---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.091Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "Config Connector pod resource customization"
feature_slug: "config-connector-pod-resource-customization"
latest_feature_date: "2023-07-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources"
  - "https://docs.cloud.google.com/config-connector/docs/overview"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts"
keywords:
  - "customization"
  - "customizing"
  - "requests"
  - "resource"
  - "supports"
---

# Config Connector pod resource customization

Product: Config Connector
Coverage: LOW

## Step 02 Summary

Config Connector supports customizing resource requests and limits for cnrm-webhook-manager, cnrm-controller-manager, cnrm-resource-stats-recorder, and cnrm-deletiondefender pods.

## Extended Definition

Config Connector supports customizing resource requests and limits for cnrm-webhook-manager, cnrm-controller-manager, cnrm-resource-stats-recorder, and cnrm-deletiondefender pods.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview)
- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts)

## Supporting Pages

### Config Connector overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Customizing Config Connector's behavior Config Connector provides additional features beyond creating resources.
- For Config Connector CRDs to function correctly, Config Connector deploys Pods to your nodes that have elevated RBAC permissions, such as the ability to create, delete, get, and list CustomResourceDefinitions (CRDs).
- Home Documentation Access and resource management Config Connector Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Config Connector overview Standard Config Connector is an open source Kubernetes add-on that lets you manage Google Cloud resources through Kubernetes.

### "Configure container resources and replicas \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Create a file named configure-webhook-manager.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : replicas : 3 containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use kubectl apply to apply the modified configuration to your cluster: kubectl apply -f configure-webhook-manager.yaml Verify the successful configuration by running the following command. kubectl get controllerresource cnrm-webhook-manager -o jsonpath='{.status.healthy}' It should display status.healthy field set to true .
- For example, to configure the memory request and limit of the webhook container of the cnrm-webhook-manager controller, create and apply the following YAML file: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use NamespacedControllerResource for the namespaced controller manager Use the NamespacedControllerResource custom resource only to configure resources for the cnrm-controller-manager when Config Connector is running in namespaced mode.
- The following YAML file shows an example configuration: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : NamespacedControllerResource metadata : name : cnrm-controller-manager # name should not contain the namespace ID suffix namespace : NAMESPACE spec : containers : - name : manager resources : limits : cpu : 200m memory : 512Mi requests : cpu : 100m memory : 256Mi Replace NAMESPACE with the name of your namespace.
- After deletion, the Config Connector operator recreates the controllers with the default container resources and replicas. kubectl delete -f configure-webhook-manager.yaml Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Configure webhook timeout \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Configure timeout for validating webhooks You can configure the following validating webhooks: deny-immutable-field-updates.cnrm.cloud.google.com deny-unknown-fields.cnrm.cloud.google.com iam-validation.cnrm.cloud.google.com resource-validation.cnrm.cloud.google.com abandon-on-uninstall.cnrm.cloud.google.com For example, you can configure the timeout of validating webhooks deny-immutable-field-updates.cnrm.cloud.google.com and deny-unknown-fields.cnrm.cloud.google.com by creating and applying the following example YAML file.
- Create a file named configure-validating-webhook-timeout.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ValidatingWebhookConfigurationCustomization metadata : name : validating-webhook spec : webhooks : - name : deny-immutable-field-updates timeoutSeconds : 12 - name : deny-unknown-fields timeoutSeconds : 15 Note: when specifying the name of webhook configuration and the names of webhooks in the YAML file, don't include the .cnrm.cloud.google.com suffix.
- Verify that the new custom timeout has been applied to the target webhooks: kubectl get validatingwebhookconfigurations validating-webhook.cnrm.cloud.google.com -o jsonpath='{.webhooks[?(@.name=="deny-immutable-field-updates.cnrm.cloud.google.com")].timeoutSeconds}{"\n"}' kubectl get validatingwebhookconfigurations validating-webhook.cnrm.cloud.google.com -o jsonpath='{.webhooks[?(@.name=="deny-unknown-fields.cnrm.cloud.google.com")].timeoutSeconds}{"\n"}' Applying the customization could take a few minutes.
- Create a file named configure-mutating-webhook-timeout.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : MutatingWebhookConfigurationCustomization metadata : name : mutating-webhook spec : webhooks : - name : container-annotation-handler timeoutSeconds : 20 Note: when specifying the name of webhook configuration and the names of webhooks in the YAML file, don't include the .cnrm.cloud.google.com suffix.

