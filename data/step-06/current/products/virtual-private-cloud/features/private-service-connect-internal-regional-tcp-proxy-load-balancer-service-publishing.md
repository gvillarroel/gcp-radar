---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.477Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect internal regional TCP proxy load balancer service publishing"
feature_slug: "private-service-connect-internal-regional-tcp-proxy-load-balancer-service-publishing"
latest_feature_date: "2022-06-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-controls"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-load-balancers"
keywords:
  - "private"
  - "connect"
  - "internal"
  - "regional"
  - "tcp"
  - "proxy"
  - "load"
  - "balancer"
---

# Private Service Connect internal regional TCP proxy load balancer service publishing

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect now supports publishing services from a service producer VPC network via an internal regional TCP proxy load balancer, including backends hosted in Google Cloud, other clouds, and on-premises environments.

## Extended Definition

Private Service Connect now supports publishing services from a service producer VPC network via an internal regional TCP proxy load balancer, including backends hosted in Google Cloud, other clouds, and on-premises environments.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-controls](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-controls)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-load-balancers](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-load-balancers)

## Supporting Pages

### "Create a Private Service Connect backend \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)
- Source ID: `site-docs-root-2`
- Final score: 278
- Re-rank relevance: N/A

Evidence snippets:
- Add a backend to a regional internal proxy Network Load Balancer You can add a Private Service Connect NEG backend to a regional internal proxy Network Load Balancer if the NEG is pointing to a published service.
- Add a backend to a regional external proxy Network Load Balancer You can add a Private Service Connect NEG backend to a regional external proxy Network Load Balancer if the NEG is pointing to a published service.
- For instructions that include creating a load balancer with a Private Service Connect backend, see the following: Create an internal Application Load Balancer to access Google APIs Create a global external Application Load Balancer to access a published service Roles The Compute Load Balancer Admin role ( roles/compute.loadBalancerAdmin ) contains the permission required to perform the tasks described in this guide.
- To configure the regional internal proxy Network Load Balancer, follow the instructions to set up a regional internal proxy Network Load Balancer with zonal backends , but don't complete the "Create the zonal NEGs" steps or configure health checks.

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 274
- Re-rank relevance: N/A

Evidence snippets:
- When you configure ingress firewall rules for backend services, the source of traffic depends on the type of load balancer that your service uses: Category Source of traffic to backends Passthrough load balancers: Internal passthrough Network Load Balancer Internal protocol forwarding Port mapping service The IP address ranges of the Private Service Connect (NAT) subnets associated with the service Proxy load balancers: Cross-region internal Application Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Secure Web Proxy The IP address ranges of the associated proxy-only subnets Services with health checks The probe IP address ranges of your load balancer type Publish a service To publish a service, you create a service attachment.
- Create a target service To host the service, create one of the following target services in a service producer VPC network: Internal passthrough Network Load Balancer Regional internal Application Load Balancer Cross-region internal Application Load Balancer Internal protocol forwarding Regional internal proxy Network Load Balancer Secure Web Proxy instance For information about supported configurations for each target service, see Features and compatibility .
- This configuration, including load balancer and service attachment configuration, is described in Create an internal passthrough Network Load Balancer with Private Service Connect in the GKE documentation.
- For regional internal proxy Network Load Balancers, the backends can be located in Google Cloud, in other clouds, in an on-premises environment, or any combination of these locations.

### "Access regional Google APIs through backends \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-controls](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-controls)
- Source ID: `site-docs-root-2`
- Final score: 248
- Re-rank relevance: N/A

Evidence snippets:
- Access regional Google APIs through backends This guide describes how to configure an internal Application Load Balancer with a Private Service Connect backend to access a regional Google API .
- An internal Application Load Balancer used for Private Service Connect can be reached from Shared VPC networks and from connected networks .
- An internal Application Load Balancer that uses that Private Service Connect NEG as a backend.
- Google-managed certificates aren't supported with internal Application Load Balancers. gcloud compute ssl-certificates create CERTIFICATE \ --certificate= LB CERT \ --private-key= LB PRIVATE KEY \ --region= REGION Replace the following: CERTIFICATE : a name for the certificate.

### "Test connectivity to Google Cloud load balancers \_|\_ Network Intelligence\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-load-balancers](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-load-balancers)
- Source ID: `site-iam-reference`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The TCP connection from the external host terminates at the proxy for the external Application Load Balancer.
- The following successful test result validates that all of the following Google Cloud resources for the external Application Load Balancer are configured correctly: The forwarding rule The load balancer backends, including the ability for the load balancer to successfully send health checks to those backends The proxy connection VPC firewall rules This result shows that a simulated packet from an external IP address could successfully reach the backend VM instances.
- Packet trace to an external Application Load Balancer Number of traces in a test to a load balancer Connectivity Tests configuration analysis considers all configured backends of proxy Network Load Balancer and passthrough Network Load Balancer and all backend services mentioned in the URL map of Application Load Balancer.
- Traffic can't reach an internal passthrough Network Load Balancer that has a mismatched region because the internal passthrough Network Load Balancer is a regional service.

