---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.451Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "IPv6-only instances"
feature_slug: "ipv6-only-instances"
latest_feature_date: "2024-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints"
  - "https://docs.cloud.google.com/vpc/docs/shared-vpc"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets"
keywords:
  - "ipv6"
  - "only"
  - "instances"
  - "are"
  - "now"
  - "available"
  - "in"
  - "preview"
---

# IPv6-only instances

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

IPv6-only instances are now available in preview.

## Extended Definition

IPv6-only instances are now available in preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets)

## Supporting Pages

### "About accessing published services through endpoints \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Target producer Consumer configuration (endpoint) Consumer global access Hybrid access Automatic DNS configuration (IPv4-only) VPC Network Peering access NCC connection propagation (IPv4 only) Supported target services for IPv4 endpoints Supported target services for IPv6 endpoints Cross-region internal Application Load Balancer IPv4 services IPv4 services Internal passthrough Network Load Balancer Only if global access is enabled on the load balancer ( known issue ) IPv4 services IPv4 services IPv6 services Internal protocol forwarding (target instance) Only if global access is enabled on the producer forwarding rule ( known issue ) IPv4 services IPv4 services IPv6 services Port mapping services Only if global access is enabled on the producer forwarding rule IPv4 services IPv4 services IPv6 services Regional internal Application Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Regional internal proxy Network Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Secure Web Proxy IPv4 services IPv4 services Producer configuration This table summarizes the supported configuration options and capabilities of published services that are accessed by endpoints .
- Producer type Producer configuration (published service) Supported producer backends PROXY protocol (TCP traffic only) IP version Cross-region internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups IPv4 Internal passthrough Network Load Balancer GCE VM IP zonal NEGs Instance groups IPv4 IPv6 Internal protocol forwarding (target instance) Not applicable IPv4 IPv6 Port mapping services Port mapping NEG IPv4 IPv6 Regional internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups Regional internet NEGs IPv4 Regional internal proxy Network Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Private Service Connect NEGs Instance groups IPv4 Secure Web Proxy Not applicable IPv4 Different load balancers support different port configurations; some load balancers support a single port, some support a range of ports, and some support all ports.
- The following combinations are possible for supported configurations : IPv4 endpoint to IPv4 service attachment IPv6 endpoint to IPv6 service attachment IPv6 endpoint to IPv4 service attachment In this configuration, Private Service Connect automatically translates between the two IP versions.
- By default, the endpoint can be accessed only by clients that are in the same region and the same VPC network (or Shared VPC network) as the endpoint.

### Shared VPC \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- For instances with IPv6 addresses, the IPv6 address comes from the range of available IP addresses in the selected shared subnet's IPv6 subnet range.
- Instances in service projects attached to a host project that uses the same Shared VPC network can communicate internally with one another by using either their internal IPv4 addresses or their internal or external IPv6 addresses, subject to applicable firewall rules .
- The internal IPv4 or IPv6 address object must be created in the same service project as the resource that uses it, even though the value of the IP address comes from the available IP addresses of the selected shared subnet in a Shared VPC network.
- The external IPv6 address object must be created in the same service project as the resource that uses it, even though the value of the IP address comes from the available IPv6 addresses of the selected shared subnet in a Shared VPC network.

### "Create and run Connectivity Tests \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests)
- Source ID: `site-iam-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see create in the Google API Client Library for Python. test input = { "source": { "instance": " SOURCE INSTANCE ", "ipAddress": " SOURCE IP ADDRESS ", "projectId": " SOURCE INSTANCE PROJECT ID " }, "destination": { "instance": " DESTINATION INSTANCE ", "ipAddress": " DESTINATION IP ADDRESS ", "projectId": " DESTINATION INSTANCE PROJECT ID " }, "protocol": " PROTOCOL ", } request = api.projects().locations().global ().connectivityTests().create( parent="projects/ PROJECT ID /locations/global", testId=" TEST ID ", body=test input) print(json.dumps(request.execute(), indent=4)) Replace the following: SOURCE INSTANCE : the URI for the source VM—for example, projects/myproject/zones/us-east1-b/instances/instance-1 .
- For more information, see create in the Google API Client Library for Python. test input = { "source": { "instance": " SOURCE INSTANCE ", "ipAddress": " SOURCE IP ADDRESS ", "projectId": " SOURCE INSTANCE PROJECT ID " }, "destination": { " DESTINATION RESOURCE FIELD ": " DESTINATION ENDPOINT ", "port": " DESTINATION PORT " }, "protocol": " PROTOCOL ", } request = api.projects().locations().global ().connectivityTests().create( parent="projects/ PROJECT ID /locations/global", testId=" TEST ID ", body=test input) print(json.dumps(request.execute(), indent=4)) Replace the following: SOURCE INSTANCE : the URI for the source VM—for example, projects/myproject/zones/us-east1-b/instances/instance-1 .
- For more information, see create in the Google API Client Library for Python. test input = { "source": { "instance": " SOURCE INSTANCE ", "ipAddress": " SOURCE IP ADDRESS ", "projectId": " SOURCE INSTANCE PROJECT ID " }, "destination": { "forwardingRule": " DESTINATION FORWARDING RULE ", "port": " DESTINATION PORT ", }, "protocol": " PROTOCOL ", } request = api.projects().locations().global ().connectivityTests().create( parent="projects/ PROJECT ID /locations/global", testId=" TEST ID ", body=test input) print(json.dumps(request.execute(), indent=4)) Replace the following: SOURCE INSTANCE : the URI for the source VM—for example, projects/myproject/zones/us-east1-b/instances/instance-1 .
- For more information, see create in the Google API Client Library for Python. test input = { "source": { "instance": " SOURCE INSTANCE ", "ipAddress": " SOURCE IP ADDRESS ", "projectId": " SOURCE INSTANCE PROJECT ID " }, "destination": { "forwardingRule": " DESTINATION FORWARDING RULE ", "port": " DESTINATION PORT ", }, "protocol": " PROTOCOL ", } request = api.projects().locations().global ().connectivityTests().create( parent="projects/ PROJECT ID /locations/global", testId=" TEST ID ", body=test input) print(json.dumps(request.execute(), indent=4)) Replace the following: SOURCE INSTANCE : the URI for the source VM—for example, projects/myproject/zones/us-east1-b/instances/instance-1 .

### "Reasons for dropped test packets \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets)
- Source ID: `site-iam-reference`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- For DHCP protocol, including UDP IPv4 packets to destination port 68 (DHCPv4 responses) and UDP IPv6 packets to destination port 546 (DHCPv6 responses), DHCP traffic is only allowed from the metadata server (169.254.169.254).
- No external address available A VM instance with only an internal IP address tried to access external hosts through a route whose next hop is the default internet gateway.
- Probable cause The packet was dropped because all the Serverless VPC Access connector instances are stopped.
- If you try to access the destination endpoint by using its internal IP address, make sure that the source and destination networks are connected (for example, using the VPC Network Peering , Network Connectivity Center , or a hybrid connectivity solution such as Cloud VPN).

