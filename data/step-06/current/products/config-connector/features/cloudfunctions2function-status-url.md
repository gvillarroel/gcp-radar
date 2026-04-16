---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.064Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "CloudFunctions2Function status URL"
feature_slug: "cloudfunctions2function-status-url"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources"
keywords:
  - "cloudfunctions2function"
  - "resources"
  - "exposes"
  - "status"
---

# CloudFunctions2Function status URL

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector exposes the function URL in status for CloudFunctions2Function resources.

## Extended Definition

Config Connector exposes the function URL in status for CloudFunctions2Function resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events](https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events)
- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)

## Supporting Pages

### Monitoring your resources \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Listing all resources You can list the resources that Config Connector manages with, by running the following command: kubectl get gcp Determining a resource's status You can determine if your resource is ready by looking at its status.condition .
- Viewing events for a single resource You can view the events for a single resource by examining the Events field in the output of the following command: kubectl describe KIND NAME Replace the following: KIND : your resource's kind NAME : your resource's name For example, if you had a Config Connector SQLInstance resource named sqlinstance-sample , use the following command to view its events: kubectl describe sqlinstance sqlinstance-sample Viewing events for a namespace To see the events for all Kubernetes resources in a given namespace, including your Config Connector resources, run the following command: kubectl --namespace CC NAMESPACE get events Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- Config Connector updates the status to reflect the current state of your resource. kubectl wait --for=condition=READY KIND NAME Replace the following: KIND : your resource's kind.
- NAME : your resource's name Viewing events Config Connector creates Kubernetes events with information and errors about managing resources.

### Monitoring your resources \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events](https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Listing all resources You can list the resources that Config Connector manages with, by running the following command: kubectl get gcp Determining a resource's status You can determine if your resource is ready by looking at its status.condition .
- Viewing events for a single resource You can view the events for a single resource by examining the Events field in the output of the following command: kubectl describe KIND NAME Replace the following: KIND : your resource's kind NAME : your resource's name For example, if you had a Config Connector SQLInstance resource named sqlinstance-sample , use the following command to view its events: kubectl describe sqlinstance sqlinstance-sample Viewing events for a namespace To see the events for all Kubernetes resources in a given namespace, including your Config Connector resources, run the following command: kubectl --namespace CC NAMESPACE get events Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- Config Connector updates the status to reflect the current state of your resource. kubectl wait --for=condition=READY KIND NAME Replace the following: KIND : your resource's kind.
- NAME : your resource's name Viewing events Config Connector creates Kubernetes events with information and errors about managing resources.

### "Configure container resources and replicas \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Create a file named configure-webhook-manager.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : replicas : 3 containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use kubectl apply to apply the modified configuration to your cluster: kubectl apply -f configure-webhook-manager.yaml Verify the successful configuration by running the following command. kubectl get controllerresource cnrm-webhook-manager -o jsonpath='{.status.healthy}' It should display status.healthy field set to true .
- For example, to configure the memory request and limit of the webhook container of the cnrm-webhook-manager controller, create and apply the following YAML file: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use NamespacedControllerResource for the namespaced controller manager Use the NamespacedControllerResource custom resource only to configure resources for the cnrm-controller-manager when Config Connector is running in namespaced mode.
- The following YAML file shows an example configuration: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : NamespacedControllerResource metadata : name : cnrm-controller-manager # name should not contain the namespace ID suffix namespace : NAMESPACE spec : containers : - name : manager resources : limits : cpu : 200m memory : 512Mi requests : cpu : 100m memory : 256Mi Replace NAMESPACE with the name of your namespace.
- After deletion, the Config Connector operator recreates the controllers with the default container resources and replicas. kubectl delete -f configure-webhook-manager.yaml Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

