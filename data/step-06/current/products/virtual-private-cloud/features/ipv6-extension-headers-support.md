---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.457Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "IPv6 extension headers support"
feature_slug: "ipv6-extension-headers-support"
latest_feature_date: "2024-02-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services"
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid"
keywords:
  - "ipv6"
  - "extension"
  - "headers"
  - "virtual"
  - "private"
  - "now"
  - "supports"
  - "in"
---

# IPv6 extension headers support

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Virtual Private Cloud now supports IPv6 extension headers in General Availability; Adds preview support for IPv6 extension headers in Virtual Private Cloud.

## Extended Definition

Virtual Private Cloud now supports IPv6 extension headers in General Availability; Adds preview support for IPv6 extension headers in Virtual Private Cloud.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)
- [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid](https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid)

## Supporting Pages

### "About published services \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)
- Source ID: `site-docs-root-2`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Target producer Consumer configuration (endpoint) Consumer global access Hybrid access Automatic DNS configuration (IPv4-only) VPC Network Peering access NCC connection propagation (IPv4 only) Supported target services for IPv4 endpoints Supported target services for IPv6 endpoints Cross-region internal Application Load Balancer IPv4 services IPv4 services Internal passthrough Network Load Balancer Only if global access is enabled on the load balancer ( known issue ) IPv4 services IPv4 services IPv6 services Internal protocol forwarding (target instance) Only if global access is enabled on the producer forwarding rule ( known issue ) IPv4 services IPv4 services IPv6 services Port mapping services Only if global access is enabled on the producer forwarding rule IPv4 services IPv4 services IPv6 services Regional internal Application Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Regional internal proxy Network Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Secure Web Proxy IPv4 services IPv4 services Producer configuration This table summarizes the supported configuration options and capabilities of published services that are accessed by endpoints.
- Producer type Producer configuration (published service) Supported producer backends PROXY protocol (TCP traffic only) IP version Cross-region internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups IPv4 Internal passthrough Network Load Balancer GCE VM IP zonal NEGs Instance groups IPv4 IPv6 Internal protocol forwarding (target instance) Not applicable IPv4 IPv6 Port mapping services Port mapping NEG IPv4 IPv6 Regional internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups Regional internet NEGs IPv4 Regional internal proxy Network Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Private Service Connect NEGs Instance groups IPv4 Secure Web Proxy Not applicable IPv4 Different load balancers support different port configurations; some load balancers support a single port, some support a range of ports, and some support all ports.
- Producer type Producer configuration (published service) Supported producer backends Forwarding rule protocols Forwarding rule ports PROXY protocol IP version Private Service Connect health support Cross-region internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups TCP HTTP HTTPS HTTP/2 gRPC Supports one, multiple, or all ports IPv4 Internal passthrough Network Load Balancer GCE VM IP zonal NEGs Instance groups TCP See Producer port configuration IPv4 Regional internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups HTTP HTTPS HTTP/2 Supports a single port IPv4 Regional internal proxy Network Load Balancer Note: Connections from consumer global external Application Load Balancers aren't supported.
- GCE VM IP PORT zonal NEGs Hybrid NEGs Private Service Connect NEGs Instance groups TCP Supports a single port IPv4 Secure Web Proxy Not applicable Not applicable Not applicable IPv4 Note: To support access by a Private Service Connect backend in a global or cross-regional load balancer, the producer load balancer must have global access turned on before the service attachment is created.

### "About accessing published services through endpoints \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Target producer Consumer configuration (endpoint) Consumer global access Hybrid access Automatic DNS configuration (IPv4-only) VPC Network Peering access NCC connection propagation (IPv4 only) Supported target services for IPv4 endpoints Supported target services for IPv6 endpoints Cross-region internal Application Load Balancer IPv4 services IPv4 services Internal passthrough Network Load Balancer Only if global access is enabled on the load balancer ( known issue ) IPv4 services IPv4 services IPv6 services Internal protocol forwarding (target instance) Only if global access is enabled on the producer forwarding rule ( known issue ) IPv4 services IPv4 services IPv6 services Port mapping services Only if global access is enabled on the producer forwarding rule IPv4 services IPv4 services IPv6 services Regional internal Application Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Regional internal proxy Network Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Secure Web Proxy IPv4 services IPv4 services Producer configuration This table summarizes the supported configuration options and capabilities of published services that are accessed by endpoints .
- Producer type Producer configuration (published service) Supported producer backends PROXY protocol (TCP traffic only) IP version Cross-region internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups IPv4 Internal passthrough Network Load Balancer GCE VM IP zonal NEGs Instance groups IPv4 IPv6 Internal protocol forwarding (target instance) Not applicable IPv4 IPv6 Port mapping services Port mapping NEG IPv4 IPv6 Regional internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups Regional internet NEGs IPv4 Regional internal proxy Network Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Private Service Connect NEGs Instance groups IPv4 Secure Web Proxy Not applicable IPv4 Different load balancers support different port configurations; some load balancers support a single port, some support a range of ports, and some support all ports.
- The following combinations are possible for supported configurations : IPv4 endpoint to IPv4 service attachment IPv6 endpoint to IPv6 service attachment IPv6 endpoint to IPv4 service attachment In this configuration, Private Service Connect automatically translates between the two IP versions.
- In this case, the endpoint creation fails with the following error message: Private Service Connect forwarding rule with an IPv4 address cannot target an IPv6 service attachment.

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- To create an IPv4-only Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " SUBNET RANGE ", "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT" } To create a dual-stack Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " SUBNET RANGE ", "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT", "stackType": "IPV4 IPV6", "ipv6AccessType": "INTERNAL" } To create an IPv6-only Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT", "stackType": "IPV6 ONLY", "ipv6AccessType": "INTERNAL" } Replace the following: PROJECT ID : the project for the subnet.
- To create an IPv4-only Private Service Connect subnet, do the following: gcloud compute networks subnets create SUBNET NAME \ --network= NETWORK NAME \ --region= REGION \ --range= SUBNET RANGE \ --purpose=PRIVATE SERVICE CONNECT To create a dual-stack Private Service Connect subnet, do the following: gcloud compute networks subnets create SUBNET NAME \ --network= NETWORK NAME \ --region= REGION \ --stack-type=IPV4 IPV6 \ --ipv6-access-type=INTERNAL \ --range= SUBNET RANGE \ --purpose=PRIVATE SERVICE CONNECT To create an IPv6-only Private Service Connect subnet, do the following: gcloud compute networks subnets create SUBNET NAME \ --network= NETWORK NAME \ --region= REGION \ --stack-type=IPV6 ONLY \ --ipv6-access-type=INTERNAL \ --purpose=PRIVATE SERVICE CONNECT Replace the following: SUBNET NAME : the name to assign to the subnet.
- Home Documentation Networking Virtual Private Cloud Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- When you configure ingress firewall rules for backend services, the source of traffic depends on the type of load balancer that your service uses: Category Source of traffic to backends Passthrough load balancers: Internal passthrough Network Load Balancer Internal protocol forwarding Port mapping service The IP address ranges of the Private Service Connect (NAT) subnets associated with the service Proxy load balancers: Cross-region internal Application Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Secure Web Proxy The IP address ranges of the associated proxy-only subnets Services with health checks The probe IP address ranges of your load balancer type Publish a service To publish a service, you create a service attachment.

### "Configure Private Google Access for on-premises hosts \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid](https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid)
- Source ID: `site-docs-root-2`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- For private.googleapis.com : For IPv4 connectivity: 199.36.153.8/30 For both IPv4 and IPv6 connectivity: 199.36.153.8/30,2600:2d00:0002:2000::/56 For restricted.googleapis.com : For IPv4 connectivity: 199.36.153.4/30 For both IPv4 and IPv6 connectivity: 199.36.153.4/30,2600:2d00:0002:1000::/56 Firewall considerations Google Cloud firewall rules in the VPC network to which your on-premises network connects have no effect upon: Packets sent through a Cloud VPN tunnel connected to the VPC network Packets sent through a VLAN attachment connected to the VPC network Incoming packets to Cloud DNS inbound forwarder IP addresses in the VPC network You should ensure that the firewall configuration of on-premises systems allows outbound traffic to and established responses from the appropriate IP addresses: If you use private.googleapis.com : For IPv4 connectivity: 199.36.153.8/30 For IPv6 connectivity: 2600:2d00:0002:2000::/56 If you use restricted.googleapis.com : For IPv4 connectivity: 199.36.153.4/30 For IPv6 connectivity: 2600:2d00:0002:1000::/56 Any Cloud DNS inbound forwarder IP addresses, if you're using Cloud DNS for the DNS configuration What's next If you need VMs in your Google Cloud VPC network to access Google APIs and services, see Configure Private Google Access for VPC .
- Domain names that match: accounts.google.com (only supports paths needed for OAuth authentication of service accounts; user account authentication is interactive and not supported) .aiplatform-notebook.cloud.google.com .aiplatform-notebook.googleusercontent.com appengine.google.com .appspot.com .backupdr.cloud.google.com backupdr.cloud.google.com .backupdr.googleusercontent.com backupdr.googleusercontent.com .cloudfunctions.net .cloudproxy.app .composer.cloud.google.com .composer.googleusercontent.com .datafusion.cloud.google.com .datafusion.googleusercontent.com .dataproc.cloud.google.com dataproc.cloud.google.com .dataproc.googleusercontent.com dataproc.googleusercontent.com .developerconnect.dev dl.google.com gcr.io or .gcr.io .googleapis.com .gke.goog gstatic.com or .gstatic.com .kernels.googleusercontent.com .ltsapis.goog .notebooks.byoid.googleusercontent.com .notebooks.cloud.google.com notebooks.cloud.google.com .notebooks.googleusercontent.com packages.cloud.google.com pkg.dev or .pkg.dev pki.goog or .pki.goog .run.app source.developers.google.com storage.cloud.google.com Use private.googleapis.com to access Google APIs and services using a set of IP addresses only routable from within Google Cloud.
- IPv6 support for private.googleapis.com and restricted.googleapis.com The following IPv6 address ranges can be used to direct traffic from IPv6 clients to Google APIs and services: private.googleapis.com : 2600:2d00:0002:2000::/56 restricted.googleapis.com : 2600:2d00:0002:1000::/56 Consider configuring the IPv6 addresses if you want to use the private.googleapis.com or restricted.googleapis.com domain, and you have clients that use IPv6 addresses.
- If you want to send requests to a Cloud Storage custom domain name, you must also explicitly set the HTTP request's Host header and TLS SNI to storage.googleapis.com The IP addresses for private.googleapis.com and restricted.googleapis.com do not support custom Cloud Storage hostnames in HTTP request Host headers and TLS SNIs.

