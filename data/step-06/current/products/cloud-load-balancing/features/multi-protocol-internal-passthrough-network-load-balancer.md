---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.772Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Multi-protocol internal passthrough Network Load Balancer"
feature_slug: "multi-protocol-internal-passthrough-network-load-balancer"
latest_feature_date: "2024-04-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/internal"
  - "https://docs.cloud.google.com/load-balancing/docs/network/udp-with-network-load-balancing"
  - "https://docs.cloud.google.com/load-balancing/docs/network"
keywords:
  - "multi"
  - "protocol"
  - "internal"
  - "passthrough"
  - "network"
  - "load"
  - "balancer"
  - "balancers"
---

# Multi-protocol internal passthrough Network Load Balancer

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Internal passthrough Network Load Balancers can load balance multiple Layer 3 and Layer 4 protocols including TCP, UDP, ICMP, ICMPv6, SCTP, ESP, AH, and GRE; Internal passthrough Network Load Balancers can load balance multiple Layer 3 and Layer 4 protocols including TCP, UDP, ICMP, ICMPv6, SCTP, ESP, AH, and GRE.

## Extended Definition

Internal passthrough Network Load Balancers can load balance multiple Layer 3 and Layer 4 protocols including TCP, UDP, ICMP, ICMPv6, SCTP, ESP, AH, and GRE; Internal passthrough Network Load Balancers can load balance multiple Layer 3 and Layer 4 protocols including TCP, UDP, ICMP, ICMPv6, SCTP, ESP, AH, and GRE.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- [https://docs.cloud.google.com/load-balancing/docs/network/udp-with-network-load-balancing](https://docs.cloud.google.com/load-balancing/docs/network/udp-with-network-load-balancing)
- [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)

## Supporting Pages

### "Internal passthrough Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- Source ID: `site-docs-reference-required-4`
- Final score: 278
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An internal passthrough Network Load Balancer doesn't support the following: Backend VMs in multiple regions Balancing traffic that originates from the internet, unless you're using it with an external load balancer IPv6 packets with fragmented headers Internal IP address Internal passthrough Network Load Balancers support IPv4-only, dual-stack, and IPv6-only subnets.
- Forwarding rule protocols Internal passthrough Network Load Balancers support the following IPv4 protocol options for each forwarding rule: TCP , UDP , or L3 DEFAULT .
- Because internal passthrough Network Load Balancers aren't proxies, they pass traffic to backends on the same protocol and port.
- Internal passthrough Network Load Balancers support the following IPv6 protocol options for each forwarding rule: TCP or UDP .

### "Use UDP with regional external passthrough Network Load Balancers \_|\_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/network/udp-with-network-load-balancing](https://docs.cloud.google.com/load-balancing/docs/network/udp-with-network-load-balancing)
- Source ID: `site-docs-root`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This document discusses how to work with regional external passthrough Network Load Balancers by using the User Datagram Protocol (UDP).
- However, as the following example shows, the VM does not actually have an interface that owns the load balancer's IP address: root@backend-server: # ip ad ls 1 : lo: <LOOPBACK,UP,LOWER UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1 link/loopback 00 :00:00:00:00:00 brd 00 :00:00:00:00:00 inet 127 .0.0.1/8 scope host lo valid lft forever preferred lft forever inet6 ::1/128 scope host valid lft forever preferred lft forever 2 : eth0: <BROADCAST,MULTICAST,UP,LOWER UP> mtu 1460 qdisc mq state UP group default qlen 1000 link/ether 42 :01:0a:80:00:02 brd ff:ff:ff:ff:ff:ff inet 10 .128.0.2/32 brd 10 .128.0.2 scope global eth0 valid lft forever preferred lft forever inet6 fe80::4001:aff:fe80:2/64 scope link valid lft forever preferred lft forever The regional external passthrough Network Load Balancer transmits the incoming packets, with the destination address untouched, to the backend server.
- Regional external passthrough Network Load Balancer Regional external passthrough Network Load Balancers are passthrough load balancers; they process incoming packets and deliver them to backend servers with the packets intact.
- Home Documentation Networking Load Balancing Guides Send feedback Use UDP with regional external passthrough Network Load Balancers Stay organized with collections Save and categorize content based on your preferences.

### "Backend service-based regional external passthrough Network Load Balancer\

- URL: [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Traffic to be load balanced Forwarding rule protocol Backend service protocol TCP TCP TCP or UNSPECIFIED L3 DEFAULT UNSPECIFIED UDP UDP UDP or UNSPECIFIED L3 DEFAULT UNSPECIFIED ESP, GRE, ICMP/ICMPv6 (echo request only) L3 DEFAULT UNSPECIFIED Multiple forwarding rules You can configure multiple regional external forwarding rules for the same regional external passthrough Network Load Balancer.
- For Dynamic NICs, you must manually add local routes for forwarding rule IP addresses as described in the following known issue: Dropped packets when using Dynamic NICs with alias IP ranges, protocol forwarding, or Passthrough Network Load Balancers .
- To configure a regional external passthrough Network Load Balancer for multiple IP protocols (supporting IPv4 and IPv6 traffic), see Set up a regional external passthrough Network Load Balancer for multiple IP protocols .
- Because regional external passthrough Network Load Balancers are not proxies, they pass traffic to backends on the same protocol and ports, if the packet carries port information.

