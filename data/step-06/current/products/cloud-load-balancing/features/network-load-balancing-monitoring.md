---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.794Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Network Load Balancing monitoring"
feature_slug: "network-load-balancing-monitoring"
latest_feature_date: "2020-01-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring"
  - "https://docs.cloud.google.com/load-balancing/docs/network"
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
keywords:
  - "network"
  - "load"
  - "balancing"
  - "monitoring"
  - "integrates"
  - "provide"
  - "balancer"
  - "resources"
---

# Network Load Balancing monitoring

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Network Load Balancing integrates with Cloud Monitoring to provide monitoring for load balancer resources and traffic behavior.

## Extended Definition

Network Load Balancing integrates with Cloud Monitoring to provide monitoring for load balancer resources and traffic behavior.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring](https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring)
- [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)
- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)

## Supporting Pages

### "Regional external passthrough Network Load Balancer logging and monitoring\

- URL: [https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring](https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring)
- Source ID: `site-docs-reference-required-3`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example API requests Get all bytes sent from all regional external passthrough Network Load Balancers in the project during 12:00-12:02 PM UTC on 2019-07-01 with 1m aggregates. timeSeries.list parameters: name: projects/ PROJECT ID Filter: resource.type = "tcp lb rule" AND metric.name="loadbalancing.googleapis.com/l3/external/egress bytes count" interval.start time: 2019-07-01T12:00:00Z interval.end time: 2019-07-01T12:02:00Z aggregation.alignmentPeriod: 60s aggregation.crossSeriesReducer: REDUCE SUM aggregation.perSeriesAligner: ALIGN SUM Get median RTT measurement over all regional external passthrough Network Load Balancers in the project during 12:19-12:20 PM UTC on 2019-07-01, broken down by client country. timeSeries.list parameters: name: projects/ PROJECT ID Filter: resource.type = "tcp lb rule" AND metric.name="loadbalancing.googleapis.com/l3/external/rtt latencies" interval.start time: 2019-07-01T12:19:00Z interval.end time: 2019-07-01T12:20:00Z aggregation.alignmentPeriod: 60s aggregation.crossSeriesReducer: REDUCE SUM aggregation.groupByFields: metric.label.client country aggregation.perSeriesAligner: ALIGN PERCENTILE 50 Get total bytes from a specific regional external passthrough Network Load Balancer during 12:19-12:20 PM UTC on 2019-07-01, broken down by endpoint zone and client continent. timeSeries.list parameters: name: projects/ PROJECT ID Filter: resource.type = "tcp lb rule" AND resource.label.load balancer name = "netlb-bs-1" AND metric.name="loadbalancing.googleapis.com/l3/external/ingress bytes count" interval.start time: 2019-07-01T12:19:00Z interval.end time: 2017-07-01T12:20:00Z aggregation.alignmentPeriod: 60s aggregation.crossSeriesReducer: REDUCE SUM aggregation.groupByFields: metric.label.client continent aggregation.groupByFields: resource.label.endpoint zone aggregation.perSeriesAligner: ALIGN SUM What's next Read conceptual information about regional external passthrough Network Load Balancers Set up a regional external passthrough Network Load Balancer Read about Monitoring Metrics, time series, and resources Read about forwarding rules Read about troubleshoot logging issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Networking Load Balancing Guides Send feedback Regional external passthrough Network Load Balancer logging and monitoring Stay organized with collections Save and categorize content based on your preferences.
- Logging Logs provide useful information for troubleshooting and monitoring your backend service-based regional external passthrough Network Load Balancer.
- Logging provides the following benefits: Regional external passthrough Network Load Balancer traffic monitoring.

### "Backend service-based regional external passthrough Network Load Balancer\

- URL: [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Location of load balancing resources 1 Required location of IP address resource Host project Host project Service project Service project or host project 1 Includes the forwarding rule, backend service, health check, and backends (NEGs and managed or unmanaged instance groups) Traffic distribution Regional external passthrough Network Load Balancers support a variety of traffic distribution customization options, including session affinity, connection tracking, weighted load balancing, and failover.
- Shared VPC architecture Note the following points in relation to a Shared VPC architecture for a regional external passthrough Network Load Balancer: Except for the IP address resource, all other resources associated with a regional external passthrough Network Load Balancer—forwarding rule, backend service, health check, and backends (NEGs and managed or unmanaged instance groups)—must exist in the same project, and this project can be a host project or a service project.
- You use the forwarding rule IP address to initiate connections from backend endpoints only in special scenarios such as when you need VM instances to originate and receive connections at the same external IP address, and you also need the backend redundancy provided by the regional external passthrough Network Load Balancer for inbound connections.
- Home Documentation Networking Load Balancing Guides Send feedback Backend service-based regional external passthrough Network Load Balancer overview Stay organized with collections Save and categorize content based on your preferences.

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- The following table specifies the type of URL map required by internal Application Load Balancers in each mode: Load balancer mode URL map type Cross-region internal Application Load Balancer urlMaps Regional internal Application Load Balancer regionUrlMaps Backend service A backend service provides configuration information to the load balancer so that it can direct requests to its backends—for example, Compute Engine instance groups or network endpoint groups (NEGs).
- Load balancer mode Load balancer type Access type Region Cross-region internal Application Load Balancer Application Internal Regional internal Application Load Balancer Application Internal Specifies a region gcloud To determine the mode of a load balancer, run the following command: gcloud compute forwarding-rules describe FORWARDING RULE NAME In the command output, check the load balancing scheme, region, and network tier.
- Architecture and resources The following diagram shows the Google Cloud resources required for internal Application Load Balancers: Cross-region internal Application Load Balancer This diagram shows the components of a cross-region internal Application Load Balancer deployment in Premium Tier within the same VPC network.
- The following resources are required for an internal Application Load Balancer deployment: Proxy-only subnet In the previous diagram, the proxy-only subnet provides a set of IP addresses that Google uses to run Envoy proxies on your behalf.

