---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.759Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Connection draining for UDP and non-TCP traffic"
feature_slug: "connection-draining-for-udp-and-non-tcp-traffic"
latest_feature_date: "2025-02-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/enabling-connection-draining"
  - "https://docs.cloud.google.com/load-balancing/docs/network"
  - "https://docs.cloud.google.com/load-balancing/docs/internal"
keywords:
  - "connection"
  - "draining"
  - "udp"
  - "non"
  - "tcp"
  - "traffic"
  - "internal"
  - "external"
---

# Connection draining for UDP and non-TCP traffic

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Internal and external passthrough Network Load Balancers support connection draining for UDP and other non-TCP protocol traffic; Internal and external passthrough Network Load Balancers support connection draining for UDP and other non-TCP protocol traffic.

## Extended Definition

Internal and external passthrough Network Load Balancers support connection draining for UDP and other non-TCP protocol traffic; Internal and external passthrough Network Load Balancers support connection draining for UDP and other non-TCP protocol traffic.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/enabling-connection-draining](https://docs.cloud.google.com/load-balancing/docs/enabling-connection-draining)
- [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)
- [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)

## Supporting Pages

### "Enable connection draining \_|\_ Cloud Load Balancing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/enabling-connection-draining](https://docs.cloud.google.com/load-balancing/docs/enabling-connection-draining)
- Source ID: `site-docs-reference-required-3`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following is a list of specifications about connection draining: Connection draining is available for backend services that are part of the following load balancers: External Application Load Balancer Internal Application Load Balancer External proxy Network Load Balancer Internal proxy Network Load Balancer Internal passthrough Network Load Balancer Backend service-based Regional external passthrough Network Load Balancer Both internal passthrough Network Load Balancers and regional external passthrough Network Load Balancers support connection draining for TCP, UDP, and other non-TCP protocols.
- The internal and regional external passthrough Network Load Balancers themselves don't send a TCP-RST or TCP-FIN to end existing connections after the connection draining timeout expires.
- The following examples demonstrate how to change the connection draining timeout: For an existing global or cross-region load balancer : gcloud compute backend-services update BACKEND SERVICE \ --global \ --connection-draining-timeout= CONNECTION TIMEOUT SECS For an existing regional load balancer : gcloud compute backend-services update BACKEND SERVICE \ --region= REGION \ --connection-draining-timeout= CONNECTION TIMEOUT SECS Replace the placeholders with valid values: BACKEND SERVICE : the backend service that you're updating REGION : if applicable, the region of the backend service that you're updating CONNECTION TIMEOUT SECS : the number of seconds to wait before existing connections to instances or endpoints are terminated, between 0 - 3600 seconds, inclusive.
- For an existing regional load balancer : PATCH https://www.googleapis.com/compute/v1/projects/ PROJECT ID /region/ REGION /backendServices { "name": " BACKEND SERVICE ", "connectionDraining": { "drainingTimeoutSec": CONNECTION TIMEOUT SECS } } Replace the following: PROJECT ID : the project ID that contains your load balancer or Cloud Service Mesh deployment BACKEND SERVICE : the backend service used by your load balancer or Cloud Service Mesh deployment CONNECTION TIMEOUT SECS : the number of seconds to wait before instances or endpoints are removed from the instance group or NEG, between 0 to 3600 seconds, inclusive.

### "Backend service-based regional external passthrough Network Load Balancer\

- URL: [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Location of load balancing resources 1 Required location of IP address resource Host project Host project Service project Service project or host project 1 Includes the forwarding rule, backend service, health check, and backends (NEGs and managed or unmanaged instance groups) Traffic distribution Regional external passthrough Network Load Balancers support a variety of traffic distribution customization options, including session affinity, connection tracking, weighted load balancing, and failover.
- Because all supported health check protocols rely on TCP, when you use a regional external passthrough Network Load Balancer to balance connections and traffic for other protocols, backend VMs must run a TCP-based server to answer health check probers.
- The two backend services can be configured with different health checks, different session affinities, or different traffic distribution control policies (connection tracking, connection draining, and failover).
- A single load balancer can have the following: One or more regional external IP addresses One or more regional external forwarding rules One regional external backend service One or more backends: either all instance groups or all zonal NEG backends ( GCE VM IP endpoints) Health check associated with the backend service Additionally, you must create firewall rules that allow your load balancing traffic and health check probes to reach the backend VMs.

### "Internal passthrough Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- Source ID: `site-docs-reference-required-4`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- An internal passthrough Network Load Balancer doesn't support the following: Backend VMs in multiple regions Balancing traffic that originates from the internet, unless you're using it with an external load balancer IPv6 packets with fragmented headers Internal IP address Internal passthrough Network Load Balancers support IPv4-only, dual-stack, and IPv6-only subnets.
- Because all supported health check protocols rely on TCP, when you use an internal passthrough Network Load Balancer to balance connections and traffic for other protocols, backend VMs must run a TCP-based server to answer health check probers.
- Traffic distribution Internal passthrough Network Load Balancers support a variety of traffic distribution customization options, including session affinity, connection tracking, and failover.
- The following table summarizes how to use these settings for different protocols: Traffic to be load-balanced Forwarding rule protocol Backend service protocol TCP (IPv4 or IPv6) TCP TCP or UNSPECIFIED UDP (IPv4 or IPv6) UDP UDP or UNSPECIFIED TCP, UDP, ICMP, ICMPv6, SCTP, ESP, AH, and GRE L3 DEFAULT UNSPECIFIED Forwarding rules and global access An internal passthrough Network Load Balancer's forwarding rules are regional, even when global access is enabled.

