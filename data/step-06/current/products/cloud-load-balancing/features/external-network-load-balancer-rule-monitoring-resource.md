---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.787Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "External Network Load Balancer rule monitoring resource"
feature_slug: "external-network-load-balancer-rule-monitoring-resource"
latest_feature_date: "2022-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring"
  - "https://docs.cloud.google.com/load-balancing/docs/network/udp-with-network-load-balancing"
  - "https://docs.cloud.google.com/load-balancing/docs/network"
keywords:
  - "external"
  - "network"
  - "load"
  - "balancer"
  - "rule"
  - "monitoring"
  - "resource"
  - "dedicated"
---

# External Network Load Balancer rule monitoring resource

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

A dedicated Cloud Monitoring resource type lets you monitor External Network Load Balancer rules across supported protocols including TCP, UDP, ESP, and ICMP.

## Extended Definition

A dedicated Cloud Monitoring resource type lets you monitor External Network Load Balancer rules across supported protocols including TCP, UDP, ESP, and ICMP.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring](https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring)
- [https://docs.cloud.google.com/load-balancing/docs/network/udp-with-network-load-balancing](https://docs.cloud.google.com/load-balancing/docs/network/udp-with-network-load-balancing)
- [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)

## Supporting Pages

### "Regional external passthrough Network Load Balancer logging and monitoring\

- URL: [https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring](https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring)
- Source ID: `site-docs-reference-required-3`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example API requests Get all bytes sent from all regional external passthrough Network Load Balancers in the project during 12:00-12:02 PM UTC on 2019-07-01 with 1m aggregates. timeSeries.list parameters: name: projects/ PROJECT ID Filter: resource.type = "tcp lb rule" AND metric.name="loadbalancing.googleapis.com/l3/external/egress bytes count" interval.start time: 2019-07-01T12:00:00Z interval.end time: 2019-07-01T12:02:00Z aggregation.alignmentPeriod: 60s aggregation.crossSeriesReducer: REDUCE SUM aggregation.perSeriesAligner: ALIGN SUM Get median RTT measurement over all regional external passthrough Network Load Balancers in the project during 12:19-12:20 PM UTC on 2019-07-01, broken down by client country. timeSeries.list parameters: name: projects/ PROJECT ID Filter: resource.type = "tcp lb rule" AND metric.name="loadbalancing.googleapis.com/l3/external/rtt latencies" interval.start time: 2019-07-01T12:19:00Z interval.end time: 2019-07-01T12:20:00Z aggregation.alignmentPeriod: 60s aggregation.crossSeriesReducer: REDUCE SUM aggregation.groupByFields: metric.label.client country aggregation.perSeriesAligner: ALIGN PERCENTILE 50 Get total bytes from a specific regional external passthrough Network Load Balancer during 12:19-12:20 PM UTC on 2019-07-01, broken down by endpoint zone and client continent. timeSeries.list parameters: name: projects/ PROJECT ID Filter: resource.type = "tcp lb rule" AND resource.label.load balancer name = "netlb-bs-1" AND metric.name="loadbalancing.googleapis.com/l3/external/ingress bytes count" interval.start time: 2019-07-01T12:19:00Z interval.end time: 2017-07-01T12:20:00Z aggregation.alignmentPeriod: 60s aggregation.crossSeriesReducer: REDUCE SUM aggregation.groupByFields: metric.label.client continent aggregation.groupByFields: resource.label.endpoint zone aggregation.perSeriesAligner: ALIGN SUM What's next Read conceptual information about regional external passthrough Network Load Balancers Set up a regional external passthrough Network Load Balancer Read about Monitoring Metrics, time series, and resources Read about forwarding rules Read about troubleshoot logging issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can also group results by these values. metric.label.<var>LABEL KEY</var>: label key Type Description client country string The country of the client that initiated the connection to the regional external passthrough Network Load Balancer. client continent string The continent of the client that initiated the connection to the regional external passthrough Network Load Balancer. protocol string The protocol in the connection for the loadbalancing.googleapis.com/ExternalNetworkLoadBalancerRule resource.
- Replace PROJECT ID with your project ID and BACKEND SERVICE NAME with the name of your backend service. resource.type="loadbalancing.googleapis.com/ExternalNetworkLoadBalancerRule" logName="projects/ PROJECT ID /logs/loadbalancing.googleapis.com%2Fflows" resource.labels.backend service name=" BACKEND SERVICE NAME " Click Run query .
- Replace PROJECT ID with your project ID and BACKEND GROUP NAME with the name of the instance group. resource.type="loadbalancing.googleapis.com/ExternalNetworkLoadBalancerRule" logName="projects/ PROJECT ID /logs/loadbalancing.googleapis.com%2Fflows" resource.labels.backend group name=" BACKEND GROUP NAME " Click Run query .

### "Use UDP with regional external passthrough Network Load Balancers \_|\_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/network/udp-with-network-load-balancing](https://docs.cloud.google.com/load-balancing/docs/network/udp-with-network-load-balancing)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- However, as the following example shows, the VM does not actually have an interface that owns the load balancer's IP address: root@backend-server: # ip ad ls 1 : lo: <LOOPBACK,UP,LOWER UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1 link/loopback 00 :00:00:00:00:00 brd 00 :00:00:00:00:00 inet 127 .0.0.1/8 scope host lo valid lft forever preferred lft forever inet6 ::1/128 scope host valid lft forever preferred lft forever 2 : eth0: <BROADCAST,MULTICAST,UP,LOWER UP> mtu 1460 qdisc mq state UP group default qlen 1000 link/ether 42 :01:0a:80:00:02 brd ff:ff:ff:ff:ff:ff inet 10 .128.0.2/32 brd 10 .128.0.2 scope global eth0 valid lft forever preferred lft forever inet6 fe80::4001:aff:fe80:2/64 scope link valid lft forever preferred lft forever The regional external passthrough Network Load Balancer transmits the incoming packets, with the destination address untouched, to the backend server.
- On each Linux virtual machine (VM) running on Compute Engine that is a backend of a Google Cloud regional external passthrough Network Load Balancer, an entry in the local routing table routes traffic that's destined for the load balancer's IP address to the network interface controller (NIC).
- Regional external passthrough Network Load Balancer Regional external passthrough Network Load Balancers are passthrough load balancers; they process incoming packets and deliver them to backend servers with the packets intact.
- Home Documentation Networking Load Balancing Guides Send feedback Use UDP with regional external passthrough Network Load Balancers Stay organized with collections Save and categorize content based on your preferences.

### "Backend service-based regional external passthrough Network Load Balancer\

- URL: [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: N/A

Evidence snippets:
- Location of load balancing resources 1 Required location of IP address resource Host project Host project Service project Service project or host project 1 Includes the forwarding rule, backend service, health check, and backends (NEGs and managed or unmanaged instance groups) Traffic distribution Regional external passthrough Network Load Balancers support a variety of traffic distribution customization options, including session affinity, connection tracking, weighted load balancing, and failover.
- Shared VPC architecture Note the following points in relation to a Shared VPC architecture for a regional external passthrough Network Load Balancer: Except for the IP address resource, all other resources associated with a regional external passthrough Network Load Balancer—forwarding rule, backend service, health check, and backends (NEGs and managed or unmanaged instance groups)—must exist in the same project, and this project can be a host project or a service project.
- Traffic to be load balanced Forwarding rule protocol Backend service protocol TCP TCP TCP or UNSPECIFIED L3 DEFAULT UNSPECIFIED UDP UDP UDP or UNSPECIFIED L3 DEFAULT UNSPECIFIED ESP, GRE, ICMP/ICMPv6 (echo request only) L3 DEFAULT UNSPECIFIED Multiple forwarding rules You can configure multiple regional external forwarding rules for the same regional external passthrough Network Load Balancer.
- You use the forwarding rule IP address to initiate connections from backend endpoints only in special scenarios such as when you need VM instances to originate and receive connections at the same external IP address, and you also need the backend redundancy provided by the regional external passthrough Network Load Balancer for inbound connections.

