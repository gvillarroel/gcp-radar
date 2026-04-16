---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.147Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "faster reconciliation for IAM dependency resources"
feature_slug: "faster-reconciliation-for-iam-dependency-resources"
latest_feature_date: "2022-10-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events"
keywords:
  - "faster"
  - "reconciliation"
  - "dependency"
  - "extends"
  - "resources"
---

# faster reconciliation for IAM dependency resources

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector extends faster reconciliation of dependent resources to IAMAuditConfig and IAMPolicy.

## Extended Definition

Config Connector extends faster reconciliation of dependent resources to IAMAuditConfig and IAMPolicy.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation](https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation)
- [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events](https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events)

## Supporting Pages

### Reconciliation strategy \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation](https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configuring the reconciliation interval Starting from Config Connector 1.102 , you can configure the average reconcile interval for resources managed by Config Connector with the cnrm.cloud.google.com/reconcile-interval-in-seconds annotation.
- With Config Connector, you can create and update resources in any order, regardless of dependency relationships.
- For example, if you want Config Connector to reconcile a resource less frequently to avoid hitting underlying Google Cloud API quota issues , you can set the average reconciliation interval value to 1 hour. cnrm.cloud.google.com/reconcile-interval-in-seconds: "3600" If you want Config Connector to reconcile a resource more frequently to correct drifts sooner, you can set the annotation with a small value.
- You can annotate all resources of a particular type that shares the same Group Version Kind (GVK) with the following script: Note: If you are using a GitOps-style workflow, for example with Config Sync , the following script may not be applicable.

### Monitoring your resources \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Viewing events for a single resource You can view the events for a single resource by examining the Events field in the output of the following command: kubectl describe KIND NAME Replace the following: KIND : your resource's kind NAME : your resource's name For example, if you had a Config Connector SQLInstance resource named sqlinstance-sample , use the following command to view its events: kubectl describe sqlinstance sqlinstance-sample Viewing events for a namespace To see the events for all Kubernetes resources in a given namespace, including your Config Connector resources, run the following command: kubectl --namespace CC NAMESPACE get events Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- Listing all resources You can list the resources that Config Connector manages with, by running the following command: kubectl get gcp Determining a resource's status You can determine if your resource is ready by looking at its status.condition .
- NAME : your resource's name Viewing events Config Connector creates Kubernetes events with information and errors about managing resources.
- DependencyNotFound Occurs when a referenced Config Connector resource or Kubernetes Secret is not found.

### Monitoring your resources \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events](https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Viewing events for a single resource You can view the events for a single resource by examining the Events field in the output of the following command: kubectl describe KIND NAME Replace the following: KIND : your resource's kind NAME : your resource's name For example, if you had a Config Connector SQLInstance resource named sqlinstance-sample , use the following command to view its events: kubectl describe sqlinstance sqlinstance-sample Viewing events for a namespace To see the events for all Kubernetes resources in a given namespace, including your Config Connector resources, run the following command: kubectl --namespace CC NAMESPACE get events Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- Listing all resources You can list the resources that Config Connector manages with, by running the following command: kubectl get gcp Determining a resource's status You can determine if your resource is ready by looking at its status.condition .
- NAME : your resource's name Viewing events Config Connector creates Kubernetes events with information and errors about managing resources.
- DependencyNotFound Occurs when a referenced Config Connector resource or Kubernetes Secret is not found.

