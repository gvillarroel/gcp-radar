---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.786Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "ESP and ICMP support for Network Load Balancing"
feature_slug: "esp-and-icmp-support-for-network-load-balancing"
latest_feature_date: "2022-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/internal"
  - "https://docs.cloud.google.com/load-balancing/docs/internal/setting-up-ilb-multiple-protocols"
  - "https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts"
keywords:
  - "esp"
  - "icmp"
  - "network"
  - "load"
  - "balancing"
  - "supports"
  - "traffic"
  - "l3"
---

# ESP and ICMP support for Network Load Balancing

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Network Load Balancing supports load balancing ESP and ICMP traffic using the L3_DEFAULT forwarding rule protocol.

## Extended Definition

Network Load Balancing supports load balancing ESP and ICMP traffic using the L3_DEFAULT forwarding rule protocol.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- [https://docs.cloud.google.com/load-balancing/docs/internal/setting-up-ilb-multiple-protocols](https://docs.cloud.google.com/load-balancing/docs/internal/setting-up-ilb-multiple-protocols)
- [https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts](https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts)

## Supporting Pages

### Internal passthrough Network Load Balancer overview | Cloud Load Balancing | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- Source ID: `feature-recovery-http`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table summarizes how to use these settings for different protocols: Traffic to be load-balanced Forwarding rule protocol Backend service protocol TCP (IPv4 or IPv6) TCP TCP or UNSPECIFIED UDP (IPv4 or IPv6) UDP UDP or UNSPECIFIED TCP, UDP, ICMP, ICMPv6, SCTP, ESP, AH, and GRE L3_DEFAULT UNSPECIFIED Forwarding rules and global access An internal passthrough Network Load Balancer's forwarding rules are regional, even when global access is enabled.
- Forwarding rule protocols Internal passthrough Network Load Balancers support the following IPv4 protocol options for each forwarding rule: TCP , UDP , or L3_DEFAULT .
- The L3_DEFAULT option enables you to load balance TCP, UDP, ICMP, ICMPv6, SCTP, ESP, AH, and GRE protocols.
- In addition to supporting protocols other than TCP and UDP, the L3_DEFAULT option makes it possible for a single forwarding rule to simultaneously forward traffic for multiple protocols.

### Set up an internal passthrough Network Load Balancer with VM instance group backends for multiple protocols | Cloud Load Balancing | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/internal/setting-up-ilb-multiple-protocols](https://docs.cloud.google.com/load-balancing/docs/internal/setting-up-ilb-multiple-protocols)
- Source ID: `feature-recovery-http`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/us-west1/backendServices { "name": "be-ilb-udp", "backends": [ { "group": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/us-west1-a/instanceGroups/ig-a", "balancingMode": "CONNECTION" } ], "healthChecks": [ "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/us-west1/healthChecks/hc-http-80" ], "loadBalancingScheme": "INTERNAL", "protocol": "UDP", "connectionDraining": { "drainingTimeoutSec": 0 } } Create the forwarding rule by making a POST request to the forwardingRules.insert method : POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/us-west1/forwardingRules { "name": "fr-ilb-udp", "IPAddress": "internal-lb-ipv4", "IPProtocol": "UDP", "ports": [ "53" ], "loadBalancingScheme": "INTERNAL", "subnetwork": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/us-west1/subnetworks/lb-subnet", "network": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /global/networks/lb-network", "backendService": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/us-west1/backendServices/be-ilb-udp", "networkTier": "PREMIUM" } Create the third load balancer Create the forwarding rule of the third load balancer to use the static reserved internal IP address. gcloud Create the forwarding rule with the protocol set to L3_DEFAULT to handle all other supported IPv4 protocol traffic.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/us-west1/forwardingRules { "name": "fr-ilb-ipv6", "IPProtocol": "L3_DEFAULT", "allPorts": true, "loadBalancingScheme": "INTERNAL", "subnetwork": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/us-west1/subnetworks/lb-subnet", "backendService": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/us-west1/backendServices/be-ilb-l3-default", "ipVersion": "IPV6", "networkTier": "PREMIUM" } For IPv4 traffic : Create the forwarding rule by making a POST request to the forwardingRules.insert method : POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/us-west1/forwardingRules { "name": "fr-ilb-l3-default", "IPAddress": "10.1.2.99", "IPProtocol": "L3_DEFAULT", "allPorts": true, "loadBalancingScheme": "INTERNAL", "subnetwork": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/us-west1/subnetworks/lb-subnet", "network": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /global/networks/lb-network", "backendService": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/us-west1/backendServices/be-ilb-l3-default", "networkTier": "PREMIUM" } Test your load balancer The following tests show how to validate your load balancer configuration and learn about its expected behavior.
- This health check is used to verify the health of backends in the ig-a instance group. gcloud compute health-checks create http hc-http-80 \ --region=us-west1 \ --port=80 Create the backend service with the protocol set to UNSPECIFIED : gcloud compute backend-services create be-ilb-l3-default \ --load-balancing-scheme=internal \ --protocol=UNSPECIFIED \ --region=us-west1 \ --health-checks=hc-http-80 \ --health-checks-region=us-west1 Add the instance group to the backend service: gcloud compute backend-services add-backend be-ilb-l3-default \ --region=us-west1 \ --instance-group=ig-a \ --instance-group-zone=us-west1-a For IPv6 traffic : Create a forwarding rule with the protocol set to L3_DEFAULT to handle all supported IPv6 protocol traffic.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/us-west1/forwardingRules { "name": "fr-ilb-l3-default", "IPAddress": "internal-lb-ipv4", "IPProtocol": "L3_DEFAULT", "ports": [ "ALL" ], "loadBalancingScheme": "INTERNAL", "subnetwork": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/us-west1/subnetworks/lb-subnet", "network": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /global/networks/lb-network", "backendService": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/us-west1/backendServices/be-ilb-l3-default", "networkTier": "PREMIUM" } Test your load balancer To test your load balancer, follow the steps in the previous section .

### "Forwarding rules overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts](https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts)
- Source ID: `site-docs-reference-required-3`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Internal forwarding rules are used by the following Google Cloud load balancers: Internal Application Load Balancer Internal proxy Network Load Balancer Internal passthrough Network Load Balancer Internal Application Load Balancer The internal Application Load Balancer supports IPv4 traffic using either the HTTP, HTTPS, or HTTP/2 protocols.
- For internal passthrough Network Load Balancer forwarding rules that use IPv4 or IPv6 addresses, the L3 DEFAULT forwarding rule protocol can be used to load balance the TCP, UDP, ICMP, ICMPv6, SCTP, ESP, AH, and GRE traffic.
- Note: For regional external passthrough Network Load Balancers, the L3 DEFAULT forwarding rule protocol can be used to load balance TCP, UDP, ESP, GRE, ICMP, and ICMPv6 traffic.
- Backend service-based regional external passthrough Network Load Balancers support TCP, UDP, ESP, GRE, ICMP, and ICMPv6 traffic.

