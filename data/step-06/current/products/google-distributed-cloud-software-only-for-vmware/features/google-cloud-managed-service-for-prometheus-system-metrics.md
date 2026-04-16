---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.082Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Google Cloud Managed Service for Prometheus system metrics"
feature_slug: "google-cloud-managed-service-for-prometheus-system-metrics"
latest_feature_date: "2023-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters"
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/application-logging-monitoring"
keywords:
  - "managed"
  - "prometheus"
  - "system"
  - "metrics"
  - "supports"
---

# Google Cloud Managed Service for Prometheus system metrics

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Google Cloud Managed Service for Prometheus supports system metrics.

## Extended Definition

Google Cloud Managed Service for Prometheus system metrics refers to the managed Prometheus-based metric collection capability for Google Distributed Cloud (software only) for VMware advanced clusters, specifically for collecting system-level metrics, and it is listed as generally available. The official Kubernetes Engine documentation for VMware also shows GMP components running in the `gmp-system` namespace and being used to scrape Prometheus-formatted endpoints, indicating the operational model for metric collection.

## Evidence Summary

The cited pages confirm GMP system metrics support status (GA) in advanced clusters and provide implementation context via GMP pods, `gmp-system`, and Prometheus scraping mechanics.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/application-logging-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/application-logging-monitoring)

## Supporting Pages

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud Managed Service for Prometheus system metrics collection GA GA GA GA No differences.
- Summary API metrics GA GA GA GA No differences. gkectl update credentials support for updating component access service account key Partial support GA Partial support Partial support Changes apply.
- This page is for Admins and architects who define IT solutions and system architecture in accordance with company strategy, and create and manage policies related to user permissions.
- If you upgrade existing non-advanced clusters to version 1.33, by default, the system automatically converts them to advanced clusters.

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-3`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud Managed Service for Prometheus system metrics collection GA GA GA GA No differences.
- Summary API metrics GA GA GA GA No differences. gkectl update credentials support for updating component access service account key Partial support GA Partial support Partial support Changes apply.
- This page is for Admins and architects who define IT solutions and system architecture in accordance with company strategy, and create and manage policies related to user permissions.
- If you upgrade existing non-advanced clusters to version 1.33, by default, the system automatically converts them to advanced clusters.

### "Enable application logging and monitoring \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/application-logging-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/application-logging-monitoring)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: WEAK
- Re-rank rationale: It demonstrates enabling and running GMP components for application metrics, yet does not explicitly discuss system metrics support.

Evidence snippets:
- Check the components: kubectl --kubeconfig = USER CLUSTER KUBECONFIG --namespace gmp-system get pods The output of this command is similar to the following: NAME READY STATUS RESTARTS AGE collector-abcde 2/2 Running 1 (5d18h ago) 5d18h collector-fghij 2/2 Running 1 (5d18h ago) 5d18h collector-klmno 2/2 Running 1 (5d18h ago) 5d18h gmp-operator-68d49656fc-abcde 1/1 Running 0 5d18h rule-evaluator-7c686485fc-fghij 2/2 Running 1 (5d18h ago) 5d18h Google Cloud Managed Service for Prometheus supports rule evaluation and alerting.
- The matching Pods are scraped on a port named metrics , every 30 seconds, on the /metrics HTTP path. apiVersion : monitoring.googleapis.com/v1 kind : PodMonitoring metadata : name : prom-example spec : selector : matchLabels : app : prom-example endpoints : - port : metrics interval : 30s To apply this resource, run the following command: kubectl --kubeconfig USER CLUSTER KUBECONFIG -n gmp-test apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/prometheus-engine/v0.4.1/examples/pod-monitoring.yaml Google Cloud Managed Service for Prometheus is now scraping the matching Pods.
- To deploy the example application, run the following command: kubectl --kubeconfig USER CLUSTER KUBECONFIG -n gmp-test apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/prometheus-engine/v0.4.1/examples/example-app.yaml Configure a PodMonitoring resource Configure a PodMonitoring custom resource to capture metrics data emitted by the example application and send it to Google Cloud Managed Service for Prometheus.
- Deploy the example application To deploy the application: Create the gmp-test namespace for resources you create as part of the example application: kubectl --kubeconfig = USER CLUSTER KUBECONFIG create ns gmp-test The managed service provides a manifest for an example application that emits Prometheus metrics on its metrics port.

