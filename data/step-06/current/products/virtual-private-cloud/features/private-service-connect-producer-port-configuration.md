---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.448Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect producer port configuration"
feature_slug: "private-service-connect-producer-port-configuration"
latest_feature_date: "2025-01-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends"
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health"
keywords:
  - "private"
  - "connect"
  - "producer"
  - "port"
  - "configuration"
  - "now"
  - "supports"
  - "specifying"
---

# Private Service Connect producer port configuration

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect now supports specifying the producer port in backend configuration when connecting to a published service.

## Extended Definition

Private Service Connect now supports specifying the producer port in backend configuration when connecting to a published service.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)
- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health)

## Supporting Pages

### "About Private Service Connect port mapping \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping)
- Source ID: `site-docs-root-2`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specifications Private Service Connect port mapping has the following specifications: A Private Service Connect port mapping connection requires a Private Service Connect endpoint in a consumer VPC network that connects to a service attachment in a producer VPC network.
- Deployment Deploying a Private Service Connect port mapping connection differs from deploying a regular Private Service Connect endpoint connection for published services in the following ways: The service producer creates a port mapping service.
- Private Service Connect port mapping lets consumer VMs communicate with specific producer VMs through the following process: The consumer VM sends packets to the endpoint's IP address, using a designated client destination port.
- Service producers use the network endpoints of the port mapping NEG to define unique mappings from client destination ports of the Private Service Connect endpoint to a combination of service port and producer VM.

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 256
- Re-rank relevance: N/A

Evidence snippets:
- Private Service Connect provides two methods to connect to published services: Endpoints (based on a forwarding rule) Backends (based on a load balancer) These endpoint types require slightly different producer configurations.
- Update any automation so that new producer load balancers that support global access Private Service Connect endpoints are configured for global access.
- Update any automation so that new producer load balancers that support global access Private Service Connect NEGs are configured for global access.
- When you configure ingress firewall rules for backend services, the source of traffic depends on the type of load balancer that your service uses: Category Source of traffic to backends Passthrough load balancers: Internal passthrough Network Load Balancer Internal protocol forwarding Port mapping service The IP address ranges of the Private Service Connect (NAT) subnets associated with the service Proxy load balancers: Cross-region internal Application Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Secure Web Proxy The IP address ranges of the associated proxy-only subnets Services with health checks The probe IP address ranges of your load balancer type Publish a service To publish a service, you create a service attachment.

### "Create a Private Service Connect backend \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)
- Source ID: `site-docs-root-2`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- Click Create . gcloud Use the gcloud compute network-endpoint-groups create command: gcloud compute network-endpoint-groups create NEG NAME \ --network-endpoint-type=private-service-connect \ --psc-target-service= TARGET SERVICE \ --region= REGION \ --network= NETWORK \ --subnet= SUBNET If you know which port is being used by the producer , you can specify the port with --producer-port= PORT .
- If you know which port is used, you can specify it as part of the Private Service Connect NEG configuration.
- For more information about supported services and configurations, see About Private Service Connect backends .
- Create a Private Service Connect backend You can use Private Service Connect backends to connect to supported services by using a load balancer for policy enforcement.

### "About Private Service Connect health for automatic cross-region failover\

- URL: [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health)
- Source ID: `site-docs-root-2`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- The backend must be based on a load balancer that supports cross-region failover and includes the following configuration: A Private Service Connect NEG in each region that points to that region's service attachment A global backend service that contains the NEG backends The following diagram shows a multi-region deployment: This example shows a consumer global external Application Load Balancer that connects to a service that is published in multiple regions.
- Published service instances must have one of the following backend types: Network endpoint group of type GCE VM IP PORT Network endpoint group of type GCE VM IP Managed or unmanaged instance group The published service instances must be accessed by Private Service Connect backends that are based on load balancers that supports Private Service Connect health .
- Private Service Connect health lets service producers define health states that support automatic cross-region failover for service consumers that use Private Service Connect backends.
- Private Service Connect health only supports Private Service Connect backends that access published services.

