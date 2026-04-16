---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.467Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect external regional TCP proxy backend support"
feature_slug: "private-service-connect-external-regional-tcp-proxy-backend-support"
latest_feature_date: "2023-05-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests"
  - "https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services"
keywords:
  - "private"
  - "connect"
  - "external"
  - "regional"
  - "tcp"
  - "proxy"
  - "backend"
  - "allows"
---

# Private Service Connect external regional TCP proxy backend support

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Allows Private Service Connect backends to use an external regional TCP proxy load balancer when accessing published services.

## Extended Definition

Allows Private Service Connect backends to use an external regional TCP proxy load balancer when accessing published services.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests)
- [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)

## Supporting Pages

### "Create a Private Service Connect backend \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)
- Source ID: `site-docs-root-2`
- Final score: 278
- Re-rank relevance: N/A

Evidence snippets:
- Add a backend to a regional external proxy Network Load Balancer You can add a Private Service Connect NEG backend to a regional external proxy Network Load Balancer if the NEG is pointing to a published service.
- Add a backend to a regional internal proxy Network Load Balancer You can add a Private Service Connect NEG backend to a regional internal proxy Network Load Balancer if the NEG is pointing to a published service.
- For instructions that include creating a load balancer with a Private Service Connect backend, see the following: Create an internal Application Load Balancer to access Google APIs Create a global external Application Load Balancer to access a published service Roles The Compute Load Balancer Admin role ( roles/compute.loadBalancerAdmin ) contains the permission required to perform the tasks described in this guide.
- If you are configuring a global external Application Load Balancer to connect to a published service in multiple regions, and you have created more than one Private Service Connect NEG, click Add backend to select another NEG.

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- When you configure ingress firewall rules for backend services, the source of traffic depends on the type of load balancer that your service uses: Category Source of traffic to backends Passthrough load balancers: Internal passthrough Network Load Balancer Internal protocol forwarding Port mapping service The IP address ranges of the Private Service Connect (NAT) subnets associated with the service Proxy load balancers: Cross-region internal Application Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Secure Web Proxy The IP address ranges of the associated proxy-only subnets Services with health checks The probe IP address ranges of your load balancer type Publish a service To publish a service, you create a service attachment.
- To do this, the consumer must remove their Private Service Connect NEG from the global backend service and then attach the NEG to a regional backend service .
- Dropped packets to consumers The private service connect/producer/dropped sent packets count metric tracks packets sent from a published service to an endpoint or backend that are dropped because Private Service Connect can't find a matching connection for response packets.
- Dropped packets from consumers The private service connect/producer/dropped received packets count metric tracks packets from an endpoint or backend to a published service that are dropped because the endpoint or backend exceeded its maximum connections to the service.

### "Create and run Connectivity Tests \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests)
- Source ID: `site-iam-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Terraform You can use a Terraform resource to create a test between two VM instances in a VPC network. resource "google network management connectivity test" "instance test" { name = "conn-test-instances" source { instance = google compute instance.source.id } destination { instance = google compute instance.destination.id port = "80" } protocol = "TCP" } resource "google compute instance" "source" { name = "source-vm" machine type = "e2-medium" boot disk { initialize params { image = data.google compute image.debian 9.id } } network interface { network = "default" access config { } } } resource "google compute instance" "destination" { name = "dest-vm" machine type = "e2-medium" boot disk { initialize params { image = data.google compute image.debian 9.id } } network interface { network = "default" access config { } } } data "google compute image" "debian 9" { family = "debian-11" project = "debian-cloud" } API The following sample test determines if the existing network configuration allows VM instance1 to ping VM instance2 .
- You can test connectivity to the following: External Application Load Balancer Internal Application Load Balancer External passthrough Network Load Balancer Internal passthrough Network Load Balancer External proxy Network Load Balancer Test from a VM to a load balancer This section analyzes connectivity from the source VM to a load balancer .
- API The following sample test determines whether the existing network configuration allows VM instance1 to ping the IP address of the Private Service Connect endpoint.
- When you specify a source IP address that is an external IP address outside of Google Cloud, you must set the networkType parameter to INTERNET . test input = { "source": { "ipAddress": " SOURCE IP ADDRESS ", "networkType": "INTERNET" }, "destination": { "forwardingRule": " DESTINATION FORWARDING RULE ", "port": " DESTINATION PORT ", "projectId": " DESTINATION IP PROJECT ID " }, "protocol": " PROTOCOL ", } request = api.projects().locations().global ().connectivityTests().create( parent="projects/ PROJECT ID /locations/global", testId=" TEST ID ", body=test input) print(json.dumps(request.execute(), indent=4)) Replace the following: SOURCE IP ADDRESS : the source IP address that you are testing from.

### "About published services \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)
- Source ID: `site-docs-root-2`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Producer type Producer configuration (published service) Supported producer backends Forwarding rule protocols Forwarding rule ports PROXY protocol IP version Private Service Connect health support Cross-region internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups TCP HTTP HTTPS HTTP/2 gRPC Supports one, multiple, or all ports IPv4 Internal passthrough Network Load Balancer GCE VM IP zonal NEGs Instance groups TCP See Producer port configuration IPv4 Regional internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups HTTP HTTPS HTTP/2 Supports a single port IPv4 Regional internal proxy Network Load Balancer Note: Connections from consumer global external Application Load Balancers aren't supported.
- TCP/SSL IPv4 Regional external Application Load Balancer HTTP HTTPS HTTP2 IPv4 Regional external proxy Network Load Balancer TCP IPv4 Regional internal Application Load Balancer HTTP HTTPS HTTP2 IPv4 Regional internal proxy Network Load Balancer TCP IPv4 Producer configuration This table describes the configuration for producer load balancers that are supported by Private Service Connect backends for published services.
- Producer type Producer configuration (published service) Supported producer backends PROXY protocol (TCP traffic only) IP version Cross-region internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups IPv4 Internal passthrough Network Load Balancer GCE VM IP zonal NEGs Instance groups IPv4 IPv6 Internal protocol forwarding (target instance) Not applicable IPv4 IPv6 Port mapping services Port mapping NEG IPv4 IPv6 Regional internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups Regional internet NEGs IPv4 Regional internal proxy Network Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Private Service Connect NEGs Instance groups IPv4 Secure Web Proxy Not applicable IPv4 Different load balancers support different port configurations; some load balancers support a single port, some support a range of ports, and some support all ports.
- GCE VM IP PORT zonal NEGs Hybrid NEGs Private Service Connect NEGs Instance groups TCP Supports a single port IPv4 Secure Web Proxy Not applicable Not applicable Not applicable IPv4 Note: To support access by a Private Service Connect backend in a global or cross-regional load balancer, the producer load balancer must have global access turned on before the service attachment is created.

