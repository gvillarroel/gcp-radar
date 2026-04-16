---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.034Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "ControllerReconciler customization"
feature_slug: "controllerreconciler-customization"
latest_feature_date: "2024-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customize-controller-manager-rate-limit"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus"
  - "https://docs.cloud.google.com/config-connector/docs/best-practices"
keywords:
  - "controllerreconciler"
  - "customize"
  - "customization"
  - "client"
  - "added"
---

# ControllerReconciler customization

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector added the ControllerReconciler CRD to customize client-side Kubernetes API server request rate limits for reconciliation.

## Extended Definition

Config Connector added the ControllerReconciler CRD to customize client-side Kubernetes API server request rate limits for reconciliation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/customize-controller-manager-rate-limit](https://docs.cloud.google.com/config-connector/docs/how-to/customize-controller-manager-rate-limit)
- [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus)
- [https://docs.cloud.google.com/config-connector/docs/best-practices](https://docs.cloud.google.com/config-connector/docs/best-practices)

## Supporting Pages

### "Configure the controller manager rate limit \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customize-controller-manager-rate-limit](https://docs.cloud.google.com/config-connector/docs/how-to/customize-controller-manager-rate-limit)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Verify that the --qps and --burst flags are added to the cnrm-controller-manager controller's manager container by running the following command: kubectl describe statefulsets -n cnrm-system -l "cnrm.cloud.google.com/scoped-namespace= NAMESPACE " The output should contain the following: Containers : manager : Image : gcr.io/gke-release/cnrm/controller:fd4c42c Port : 23232/TCP Host Port : 0/TCP Command : /configconnector/manager Args : --qps=80 --burst=40 --scoped-namespace=config-control --prometheus-scrape-endpoint=:8888 Configure the rate limit in cluster mode Starting in version 1.125, if Config Connector is configured to run in cluster mode, you can configure the rate limit of the cnrm-controller-manager controller's Kubernetes client using the ControllerReconciler custom resource.
- The usage is similar to the namespaced mode, but in this case, you should use the ControllerReconciler CR instead of NamespacedControllerReconciler , as in the following example: apiVersion : customize.core.cnrm.cloud.google.com/v1alpha1 kind : ControllerReconciler metadata : name : cnrm-controller-manager spec : rateLimit : qps : 80 # the default value is 20 burst : 40 # the default value is 30 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Create a file named configure-rate-limit.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : NamespacedControllerReconciler metadata : name : cnrm-controller-manager # name must not contain the namespace ID suffix namespace : NAMESPACE spec : rateLimit : qps : 80 # the default value is 20 burst : 40 # the default value is 30 Replace NAMESPACE with the name of your namespace.
- Configure the rate limit for namespaced controller manager If Config Connector is configured to run in namespaced mode , you can use the NamespacedControllerReconciler custom resource to configure the rate limit of the cnrm-controller-manager controller's Kubernetes client in your designated namespace.

### Monitoring Config Connector with Prometheus \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### Best practices for Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/best-practices](https://docs.cloud.google.com/config-connector/docs/best-practices)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: N/A

