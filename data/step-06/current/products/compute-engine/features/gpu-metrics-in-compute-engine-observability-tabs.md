---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.163Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "GPU metrics in Compute Engine Observability tabs"
feature_slug: "gpu-metrics-in-compute-engine-observability-tabs"
latest_feature_date: "2024-08-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/viewing-logs-metrics"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/how-to/viewing-logs-metrics"
  - "https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions"
keywords:
  - "gpu"
  - "metrics"
  - "compute"
  - "engine"
  - "observability"
  - "tabs"
  - "display"
  - "charts"
---

# GPU metrics in Compute Engine Observability tabs

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Compute Engine Observability tabs display GPU charts based on NVIDIA Management Library metrics for GPU-enabled VM instances.

## Extended Definition

Compute Engine Observability tabs display GPU charts based on NVIDIA Management Library metrics for GPU-enabled VM instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/viewing-logs-metrics](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/viewing-logs-metrics)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/how-to/viewing-logs-metrics](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/how-to/viewing-logs-metrics)
- [https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions](https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions)

## Supporting Pages

### View logs and metrics \_|\_ Cloud VPN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/viewing-logs-metrics](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/viewing-logs-metrics)
- Source ID: `site-docs-reference-3`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View metrics in Metrics Explorer Note: For overall project health or specific tunnel monitoring, use the Observability dashboard or the Cloud VPN tunnel Monitoring tab.
- For quota and other metrics that report one sample per day, do the following: In the Display pane, set the Widget type to Stacked bar chart .
- The Observability tab includes various metrics that help you monitor your Cloud VPN project's health and performance in a single view.
- The dashboard displays key project-level metrics, including packets sent, packets received, and dropped packets.

### "Viewing logs and metrics \_|\_ Network Connectivity Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/how-to/viewing-logs-metrics](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/how-to/viewing-logs-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The local resource type label can take one of the following values: A Compute Engine virtual machine (VM) value called GCE VM An HA VPN gateway value called VPN An Cloud Interconnect VLAN attachment called ICA A value for traffic to all other resources called OTHER A value for the router appliance instance called ROUTER APPLIANCE If the local resource type is VPN , ICA , or ROUTER APPLIANCE , the metric reports data transfer information.
- For quota and other metrics that report one sample per day, do the following: In the Display pane, set the Widget type to Stacked bar chart .
- Console To view the metrics for a monitored resource by using the Metrics Explorer, do the following: In the Google Cloud console, go to the leaderboard Metrics explorer page: Go to Metrics explorer If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- Home Documentation Networking Network Connectivity Network Connectivity Center Guides Send feedback Viewing logs and metrics Stay organized with collections Save and categorize content based on your preferences.

### "Understand autoscaler decisions \_|\_ Compute Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions](https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions)
- Source ID: `site-docs-root-2`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- The Monitoring tab shows charts and logs as follows: The charts display the evolution of the following metrics: Group size Autoscaler utilization CPU utilization Disk I/O (bytes) Disk I/O (operations) Network bytes Network packets For additional contextual details about the metric displayed in a chart, hold the pointer over the help icon next to the title of that chart.
- Monitor autoscaling charts and logs Compute Engine provides several charts and logs that let you monitor your managed instance group's behavior at any point in time.
- You are autoscaling using a Cloud Monitoring metric but the metric you provided does not exist, lacks the necessary labels, or is not accessible to the Compute Engine Service Agent .
- Home Documentation Compute Compute Engine Guides Send feedback Understand autoscaler decisions Stay organized with collections Save and categorize content based on your preferences.

