---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.132Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "ComputeBackendBucket compression mode support"
feature_slug: "computebackendbucket-compression-mode-support"
latest_feature_date: "2022-11-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/resources"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customize-controller-manager-rate-limit"
keywords:
  - "compressionmode"
  - "compression"
  - "computebackendbucket"
  - "supports"
  - "mode"
  - "spec"
---

# ComputeBackendBucket compression mode support

Product: Config Connector
Coverage: LOW

## Step 02 Summary

Config Connector supports the spec.compressionMode field for ComputeBackendBucket resources.

## Extended Definition

Config Connector supports the spec.compressionMode field for ComputeBackendBucket resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/customize-controller-manager-rate-limit](https://docs.cloud.google.com/config-connector/docs/how-to/customize-controller-manager-rate-limit)

## Supporting Pages

### Resources \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

### "Configure container resources and replicas \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- Source ID: `site-docs-reference`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- For example, to configure the memory request and limit of the webhook container of the cnrm-webhook-manager controller, create and apply the following YAML file: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use NamespacedControllerResource for the namespaced controller manager Use the NamespacedControllerResource custom resource only to configure resources for the cnrm-controller-manager when Config Connector is running in namespaced mode.
- Create a file named configure-webhook-manager.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : replicas : 3 containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use kubectl apply to apply the modified configuration to your cluster: kubectl apply -f configure-webhook-manager.yaml Verify the successful configuration by running the following command. kubectl get controllerresource cnrm-webhook-manager -o jsonpath='{.status.healthy}' It should display status.healthy field set to true .
- The following YAML file shows an example configuration: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : NamespacedControllerResource metadata : name : cnrm-controller-manager # name should not contain the namespace ID suffix namespace : NAMESPACE spec : containers : - name : manager resources : limits : cpu : 200m memory : 512Mi requests : cpu : 100m memory : 256Mi Replace NAMESPACE with the name of your namespace.
- The following components are always cluster-scoped, even when Config Connector is installed in namespaced mode: cnrm-webhook-manager cnrm-deletiondefender cnrm-resource-stats-recorder cnrm-unmanaged-detector The cnrm-controller-manager is also cluster-scoped when Config Connector is installed in cluster mode.

### "Configure the controller manager rate limit \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customize-controller-manager-rate-limit](https://docs.cloud.google.com/config-connector/docs/how-to/customize-controller-manager-rate-limit)
- Source ID: `site-docs-reference`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- The usage is similar to the namespaced mode, but in this case, you should use the ControllerReconciler CR instead of NamespacedControllerReconciler , as in the following example: apiVersion : customize.core.cnrm.cloud.google.com/v1alpha1 kind : ControllerReconciler metadata : name : cnrm-controller-manager spec : rateLimit : qps : 80 # the default value is 20 burst : 40 # the default value is 30 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Verify that the --qps and --burst flags are added to the cnrm-controller-manager controller's manager container by running the following command: kubectl describe statefulsets -n cnrm-system -l "cnrm.cloud.google.com/scoped-namespace= NAMESPACE " The output should contain the following: Containers : manager : Image : gcr.io/gke-release/cnrm/controller:fd4c42c Port : 23232/TCP Host Port : 0/TCP Command : /configconnector/manager Args : --qps=80 --burst=40 --scoped-namespace=config-control --prometheus-scrape-endpoint=:8888 Configure the rate limit in cluster mode Starting in version 1.125, if Config Connector is configured to run in cluster mode, you can configure the rate limit of the cnrm-controller-manager controller's Kubernetes client using the ControllerReconciler custom resource.
- Create a file named configure-rate-limit.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : NamespacedControllerReconciler metadata : name : cnrm-controller-manager # name must not contain the namespace ID suffix namespace : NAMESPACE spec : rateLimit : qps : 80 # the default value is 20 burst : 40 # the default value is 30 Replace NAMESPACE with the name of your namespace.
- Configure the rate limit for namespaced controller manager If Config Connector is configured to run in namespaced mode , you can use the NamespacedControllerReconciler custom resource to configure the rate limit of the cnrm-controller-manager controller's Kubernetes client in your designated namespace.

