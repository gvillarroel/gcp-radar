---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.786Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Connection tracking policy for external TCP/UDP Network Load Balancing"
feature_slug: "connection-tracking-policy-for-external-tcp-udp-network-load-balancing"
latest_feature_date: "2022-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/network"
  - "https://docs.cloud.google.com/load-balancing/docs/network/udp-with-network-load-balancing"
  - "https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring"
keywords:
  - "connection"
  - "tracking"
  - "policy"
  - "external"
  - "tcp"
  - "udp"
  - "network"
  - "load"
---

# Connection tracking policy for external TCP/UDP Network Load Balancing

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

External TCP/UDP Network Load Balancing supports configurable connection tracking policies including tracking mode and persistence on unhealthy backends.

## Extended Definition

External TCP/UDP Network Load Balancing supports configurable connection tracking policies including tracking mode and persistence on unhealthy backends.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)
- [https://docs.cloud.google.com/load-balancing/docs/network/udp-with-network-load-balancing](https://docs.cloud.google.com/load-balancing/docs/network/udp-with-network-load-balancing)
- [https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring](https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring)

## Supporting Pages

### "Backend service-based regional external passthrough Network Load Balancer\

- URL: [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Create or modify a regional external passthrough Network Load Balancer that configures a connection tracking policy.
- Location of load balancing resources 1 Required location of IP address resource Host project Host project Service project Service project or host project 1 Includes the forwarding rule, backend service, health check, and backends (NEGs and managed or unmanaged instance groups) Traffic distribution Regional external passthrough Network Load Balancers support a variety of traffic distribution customization options, including session affinity, connection tracking, weighted load balancing, and failover.
- You use the forwarding rule IP address to initiate connections from backend endpoints only in special scenarios such as when you need VM instances to originate and receive connections at the same external IP address, and you also need the backend redundancy provided by the regional external passthrough Network Load Balancer for inbound connections.
- Outbound internet connectivity from backends VM instances configured as a regional external passthrough Network Load Balancer's backend endpoints can initiate connections to the internet using the load balancer's forwarding rule IP address as the source IP address of the outbound connection.

### "Use UDP with regional external passthrough Network Load Balancers \_|\_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/network/udp-with-network-load-balancing](https://docs.cloud.google.com/load-balancing/docs/network/udp-with-network-load-balancing)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- However, as the following example shows, the VM does not actually have an interface that owns the load balancer's IP address: root@backend-server: # ip ad ls 1 : lo: <LOOPBACK,UP,LOWER UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1 link/loopback 00 :00:00:00:00:00 brd 00 :00:00:00:00:00 inet 127 .0.0.1/8 scope host lo valid lft forever preferred lft forever inet6 ::1/128 scope host valid lft forever preferred lft forever 2 : eth0: <BROADCAST,MULTICAST,UP,LOWER UP> mtu 1460 qdisc mq state UP group default qlen 1000 link/ether 42 :01:0a:80:00:02 brd ff:ff:ff:ff:ff:ff inet 10 .128.0.2/32 brd 10 .128.0.2 scope global eth0 valid lft forever preferred lft forever inet6 fe80::4001:aff:fe80:2/64 scope link valid lft forever preferred lft forever The regional external passthrough Network Load Balancer transmits the incoming packets, with the destination address untouched, to the backend server.
- On each Linux virtual machine (VM) running on Compute Engine that is a backend of a Google Cloud regional external passthrough Network Load Balancer, an entry in the local routing table routes traffic that's destined for the load balancer's IP address to the network interface controller (NIC).
- Regional external passthrough Network Load Balancer Regional external passthrough Network Load Balancers are passthrough load balancers; they process incoming packets and deliver them to backend servers with the packets intact.
- Home Documentation Networking Load Balancing Guides Send feedback Use UDP with regional external passthrough Network Load Balancers Stay organized with collections Save and categorize content based on your preferences.

### "Regional external passthrough Network Load Balancer logging and monitoring\

- URL: [https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring](https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring)
- Source ID: `site-docs-reference-required-3`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- You can also group results by these values. metric.label.<var>LABEL KEY</var>: label key Type Description client country string The country of the client that initiated the connection to the regional external passthrough Network Load Balancer. client continent string The continent of the client that initiated the connection to the regional external passthrough Network Load Balancer. protocol string The protocol in the connection for the loadbalancing.googleapis.com/ExternalNetworkLoadBalancerRule resource.
- For TCP flows, only bytes in the application stream are counted. loadbalancing.googleapis.com/l3/external/egress packets count counter The number of packets sent from a regional external passthrough Network Load Balancer backend to a client. loadbalancing.googleapis.com/l3/external/rtt latencies distribution A distribution of rtt measured over TCP connections for regional external passthrough Network Load Balancer flows.
- Regional external passthrough Network Load Balancer logs for connections from the client to the backend instance are formatted as follows: connection.clientIp : 203.0.113.7 connection.serverIp : 198.51.100.99 bytesSent : 1256 bytesReceived : 4521 Logs sampling and collection Google Cloud samples the packets that leave and enter load balancer backend VMs.
- For backend service-based regional external passthrough Network Load Balancers, the name of the backend service. forwarding rule name string The name of the forwarding rule. forwarding rule network tier string The network tier of the forwarding rule. backend name string The name of the backend that handled the connection.

