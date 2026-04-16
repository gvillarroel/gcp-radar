---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.766Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Console support for Premium Tier regional load balancers"
feature_slug: "console-support-for-premium-tier-regional-load-balancers"
latest_feature_date: "2024-10-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/network"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
  - "https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring"
keywords:
  - "console"
  - "premium"
  - "tier"
  - "regional"
  - "load"
  - "balancers"
  - "can"
  - "create"
---

# Console support for Premium Tier regional load balancers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Google Cloud Console can create Premium Tier regional external Application Load Balancers and regional external proxy Network Load Balancers.

## Extended Definition

Google Cloud Console can create Premium Tier regional external Application Load Balancers and regional external proxy Network Load Balancers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring](https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring)

## Supporting Pages

### "Backend service-based regional external passthrough Network Load Balancer\

- URL: [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Regional external passthrough Network Load Balancers support both Standard Tier and Premium Tier for regional external IPv4 addresses.
- Limitations You cannot use the Google Cloud console to do the following tasks: Create or modify a regional external passthrough Network Load Balancer whose forwarding rule uses the L3 DEFAULT protocol.
- Location of load balancing resources 1 Required location of IP address resource Host project Host project Service project Service project or host project 1 Includes the forwarding rule, backend service, health check, and backends (NEGs and managed or unmanaged instance groups) Traffic distribution Regional external passthrough Network Load Balancers support a variety of traffic distribution customization options, including session affinity, connection tracking, weighted load balancing, and failover.
- A single load balancer can have the following: One or more regional external IP addresses One or more regional external forwarding rules One regional external backend service One or more backends: either all instance groups or all zonal NEG backends ( GCE VM IP endpoints) Health check associated with the backend service Additionally, you must create firewall rules that allow your load balancing traffic and health check probes to reach the backend VMs.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- When you create a regional external Application Load Balancer in Premium Tier using the Google Cloud console, only regions supporting Standard Tier are available in the Google Cloud console.
- Load balancer mode Load balancing scheme Forwarding rule Network tier Global external Application Load Balancer EXTERNAL MANAGED Global Premium Classic Application Load Balancer EXTERNAL Global Standard or Premium Regional external Application Load Balancer EXTERNAL MANAGED Specifies a region Standard or Premium Important: After you create a load balancer, you can't edit its mode.
- Load balancer mode Supported backends on a backend service 1 Supports backend buckets Supports Cloud Armor Supports Cloud CDN 2 Supports IAP 2 Supports Service Extensions Instance groups 3 Zonal NEGs 4 Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs Global external Application Load Balancer Classic Application Load Balancer Premium Tier Regional external Application Load Balancer 1 Backends on a backend service must be the same type: all instance groups or all the same type of NEG.
- Load balancer mode HTTP/3 support Global external Application Load Balancer (always Premium Tier) Classic Application Load Balancer in Premium Tier Classic Application Load Balancer in Standard Tier Regional external Application Load Balancer (Premium or Standard Tier) How HTTP/3 is negotiated When HTTP/3 is enabled, the load balancer advertises this support to clients, allowing clients that support HTTP/3 to attempt to establish HTTP/3 connections with the HTTPS load balancer.

### "Regional external passthrough Network Load Balancer logging and monitoring\

- URL: [https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring](https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring)
- Source ID: `site-docs-reference-required-3`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- For backend service-based regional external passthrough Network Load Balancers, the name of the backend service. forwarding rule name string The name of the forwarding rule. forwarding rule network tier string The network tier of the forwarding rule. backend name string The name of the backend that handled the connection.
- Example API requests Get all bytes sent from all regional external passthrough Network Load Balancers in the project during 12:00-12:02 PM UTC on 2019-07-01 with 1m aggregates. timeSeries.list parameters: name: projects/ PROJECT ID Filter: resource.type = "tcp lb rule" AND metric.name="loadbalancing.googleapis.com/l3/external/egress bytes count" interval.start time: 2019-07-01T12:00:00Z interval.end time: 2019-07-01T12:02:00Z aggregation.alignmentPeriod: 60s aggregation.crossSeriesReducer: REDUCE SUM aggregation.perSeriesAligner: ALIGN SUM Get median RTT measurement over all regional external passthrough Network Load Balancers in the project during 12:19-12:20 PM UTC on 2019-07-01, broken down by client country. timeSeries.list parameters: name: projects/ PROJECT ID Filter: resource.type = "tcp lb rule" AND metric.name="loadbalancing.googleapis.com/l3/external/rtt latencies" interval.start time: 2019-07-01T12:19:00Z interval.end time: 2019-07-01T12:20:00Z aggregation.alignmentPeriod: 60s aggregation.crossSeriesReducer: REDUCE SUM aggregation.groupByFields: metric.label.client country aggregation.perSeriesAligner: ALIGN PERCENTILE 50 Get total bytes from a specific regional external passthrough Network Load Balancer during 12:19-12:20 PM UTC on 2019-07-01, broken down by endpoint zone and client continent. timeSeries.list parameters: name: projects/ PROJECT ID Filter: resource.type = "tcp lb rule" AND resource.label.load balancer name = "netlb-bs-1" AND metric.name="loadbalancing.googleapis.com/l3/external/ingress bytes count" interval.start time: 2019-07-01T12:19:00Z interval.end time: 2017-07-01T12:20:00Z aggregation.alignmentPeriod: 60s aggregation.crossSeriesReducer: REDUCE SUM aggregation.groupByFields: metric.label.client continent aggregation.groupByFields: resource.label.endpoint zone aggregation.perSeriesAligner: ALIGN SUM What's next Read conceptual information about regional external passthrough Network Load Balancers Set up a regional external passthrough Network Load Balancer Read about Monitoring Metrics, time series, and resources Read about forwarding rules Read about troubleshoot logging issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Resource types Regional external passthrough Network Load Balancers use the following resource types: tcp lb rule udp lb rule loadbalancing.googleapis.com/ExternalNetworkLoadBalancerRule A regional external passthrough Network Load Balancer can support TCP, UDP, ESP, GRE, ICMP, and ICMPv6 traffic.
- View logs for a backend instance group To view the regional external passthrough Network Load Balancer logs for a specific backend instance group: Console query In the Google Cloud console, go to the Logs Explorer page.

