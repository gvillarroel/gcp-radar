---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.682Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Backend mutual TLS and backend authenticated TLS for global external Application Load Balancers"
feature_slug: "backend-mutual-tls-and-backend-authenticated-tls-for-global-external-application-load-balancers"
latest_feature_date: "2025-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls"
  - "https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
keywords:
  - "backend"
  - "mutual"
  - "tls"
  - "authenticated"
  - "global"
  - "external"
  - "application"
  - "load"
---

# Backend mutual TLS and backend authenticated TLS for global external Application Load Balancers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Global external Application Load Balancers support backend certificate validation and mutual TLS for load balancer-to-backend connections; Global external Application Load Balancers support backend certificate validation and mutual TLS for load balancer-to-backend connections.

## Extended Definition

Global external Application Load Balancers support backend certificate validation and mutual TLS for load balancer-to-backend connections; Global external Application Load Balancers support backend certificate validation and mutual TLS for load balancer-to-backend connections.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls)
- [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)

## Supporting Pages

### "Backend authenticated TLS and backend mTLS overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls)
- Source ID: `site-docs-reference-required-3`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Backend authenticated TLS and backend mTLS can be configured on the backend service resource of the following load balancers: Global external Application Load Balancers Regional external Application Load Balancers Regional internal Application Load Balancers Cross-region internal Application Load Balancers Features mTLS uses public key infrastructure (PKI) to authenticate the identity of the entities communicating over the network.
- The maximum number of iterations is 100 (certificates examined to validate the server certificate chain). server cert validation search limit exceeded You configured mTLS without setting up a TrustConfig resource. server cert validation not performed The server did not provide the requested certificate during the handshake. server cert not provided The server certificate failed verification with the TrustConfig resource. ssl certificate verification failed Service is unable to perform certificate chain validation. server cert validation unavailable Internal error validating certificate chain. server cert validation internal error Matching TrustConfig not found. server cert trust config not found The server certificate payload (including any intermediate certificates) is too large (more than 16 KB). server cert exceeded size limit Limitations Backend authenticated TLS and backend mTLS isn't supported on classic Application Load Balancers.
- Backend authenticated TLS and backend mTLS add the following capabilities to Application Load Balancers: The load balancer can validate certificates presented by backends against your own trust anchors.
- The following diagram shows the different components, attached to the backend service of an Application Load Balancer, that enable backend authenticated TLS and backend mTLS.

### "Set up backend authenticated TLS \_|\_ Cloud Load Balancing \_|\_ Google\

- URL: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup)
- Source ID: `site-docs-reference-required-3`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Verify that the backend authentication config resource is displayed. gcloud Create a YAML file that declaratively specifies the different attributes of the backend authentication config resource. global For global external Application Load Balancers and cross-region internal Application Load Balancers, create a global backend authentication config resource. cat BACKEND AUTHENTICATION CONFIG RESOURCE FILENAME .yaml name: projects/ PROJECT ID /locations/global/backendAuthenticationConfigs/ BACKEND AUTH CONFIG NAME trustConfig: projects/ PROJECT ID /locations/global/trustConfigs/ TRUST CONFIG NAME wellKnownRoots: PUBLIC ROOTS EOF Replace the following: BACKEND AUTHENTICATION CONFIG RESOURCE FILENAME : the name of the YAML file where the backend authentication config resource is defined PROJECT ID : the ID of your Google Cloud project BACKEND AUTH CONFIG NAME : the name of the backend authentication config resource TRUST CONFIG NAME : the name of the trust config resource that you created earlier regional For regional external Application Load Balancers and regional internal Application Load Balancers, create a regional backend authentication config resource. cat BACKEND AUTHENTICATION CONFIG RESOURCE FILENAME .yaml name: projects/ PROJECT ID /locations/ REGION /backendAuthenticationConfigs/ BACKEND AUTH CONFIG NAME trustConfig: projects/ PROJECT ID /locations/ REGION /trustConfigs/ TRUST CONFIG NAME wellKnownRoots: PUBLIC ROOTS EOF Replace the following: BACKEND AUTHENTICATION CONFIG RESOURCE FILENAME : the name of the YAML file where the backend authentication config resource is defined PROJECT ID : the ID of your Google Cloud project REGION : the name of the region BACKEND AUTH CONFIG NAME : the name of the backend authentication config resource TRUST CONFIG NAME : the name of the trust config resource that you created earlier To import the backend authentication config, use the gcloud network-security backend-authentication-configs import command . global For global external Application Load Balancers and cross-region internal Application Load Balancers, set the --location flag to global . gcloud network-security backend-authentication-configs import BACKEND AUTH CONFIG NAME \ --source= BACKEND AUTHENTICATION CONFIG RESOURCE FILENAME .yaml \ --location=global Replace the following: BACKEND AUTH CONFIG NAME : the name of the backend authentication config resource BACKEND AUTHENTICATION CONFIG RESOURCE FILENAME : the name of the YAML file where the backend authentication config resource is defined regional For regional external Application Load Balancers and regional internal Application Load Balancers, set the --location flag to the region where the load balancer is configured. gcloud network-security backend-authentication-configs import BACKEND AUTH CONFIG NAME \ --source= BACKEND AUTHENTICATION CONFIG RESOURCE FILENAME .yaml \ --location= REGION Replace the following: BACKEND AUTH CONFIG NAME : the name of the backend authentication config resource BACKEND AUTHENTICATION CONFIG RESOURCE FILENAME : the name of the YAML file where the backend authentication config resource is defined REGION : the region where the load balancer is configured Attach the backend authentication config resource to the backend service of the load balancer To attach the backend authentication config ( BackendAuthenticationConfig resource ) to the backend service of the load balancer, complete the following steps.
- You can substitute them with real-world values that are relevant to your setup. cat << EOF >> BACKEND SERVICE FILENAME .yaml tlsSettings: authenticationConfig: //networksecurity.googleapis.com/projects/ PROJECT ID /locations/ REGION /backendAuthenticationConfigs/ BACKEND AUTH CONFIG NAME sni: examplepetstore.com subjectAltNames: - dnsName: examplepetstore.com - dnsName: api.examplepetstore.com EOF Replace the following: BACKEND SERVICE FILENAME : the name of the YAML file where the backend service configuration is exported PROJECT ID : the ID of your Google Cloud project REGION : the name of the Google Cloud region where the backend authentication config is created BACKEND AUTH CONFIG NAME : the name of the backend authentication config resource To import the updated backend service configuration from a file, use the gcloud compute backend-services import command . global For global external Application Load Balancers and cross-region internal Application Load Balancers, use the --global flag. gcloud compute backend-services import BACKEND SERVICE NAME \ --source= BACKEND SERVICE FILENAME .yaml \ --global Replace the following: BACKEND SERVICE NAME : the name of the backend service BACKEND SERVICE FILENAME : the name of the backend service configuration YAML file regional For regional external Application Load Balancers and regional internal Application Load Balancers, set the --region flag to the region where the load balancer is located. gcloud compute backend-services import BACKEND SERVICE NAME \ --source= BACKEND SERVICE FILENAME .yaml \ --region= REGION Replace the following: BACKEND SERVICE NAME : the name of the backend service BACKEND SERVICE FILENAME : the name of the backend service configuration YAML file REGION : the name of the Google Cloud region where the backend service is located Create a backend server certificate This section provides an additional configuration option to create a server (leaf) certificate that is signed by the intermediate certificate, which is a part of the trust config.
- To export the backend service configuration to a file, use the gcloud compute backend-services export command . global For global external Application Load Balancers and cross-region internal Application Load Balancers, set the --location flag to global . gcloud compute backend-services export BACKEND SERVICE NAME \ --destination= BACKEND SERVICE FILENAME .yaml \ --global Replace the following: BACKEND SERVICE NAME : the name of the backend service BACKEND SERVICE FILENAME : the name and path to a YAML file where the backend service configuration is exported regional For regional external Application Load Balancers and regional internal Application Load Balancers, set the --location flag to the region where the load balancer is configured. gcloud compute backend-services export BACKEND SERVICE NAME \ --destination= BACKEND SERVICE FILENAME .yaml \ --region= REGION Replace the following: BACKEND SERVICE NAME : the name of the backend service BACKEND SERVICE FILENAME : the name and path to a YAML file where the backend service configuration is exported REGION : the name of the Google Cloud region where the backend service is located Update the tlsSettings attribute of the backend service, pointing it to the backend authentication config resource.
- To import the trust config YAML file, use the gcloud certificate-manager trust-configs import command . global For global external Application Load Balancers and cross-region internal Application Load Balancers, specify global as the location where the trust config resource is stored. gcloud certificate-manager trust-configs import TRUST CONFIG NAME \ --source=trust config.yaml \ --location=global Replace TRUST CONFIG NAME with the name of the trust config. regional For regional external Application Load Balancers and regional internal Application Load Balancers, specify the region where the trust config resource is stored. gcloud certificate-manager trust-configs import TRUST CONFIG NAME \ --source=trust config.yaml \ --location= REGION Replace the following: TRUST CONFIG NAME : the name of the trust config resource REGION : the region where the trust config resource is stored Create a backend authentication config resource To create a backend authentication config ( BackendAuthenticationConfig ) resource, complete the following steps.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- The following table summarizes the required source IP address ranges for the firewall rules: Load balancer mode Health check source ranges Request source ranges Global external Application Load Balancer 35.191.0.0/16 130.211.0.0/22 For IPv6 traffic to the backends: 2600:2d00:1:b029::/64 The source of GFE traffic depends on the backend type: Instance groups and zonal NEGs ( GCE VM IP PORT ): 130.211.0.0/22 35.191.0.0/16 For IPv6 traffic to the backends: 2600:2d00:1:1::/64 Hybrid connectivity NEGs ( NON GCP PRIVATE IP PORT ): 130.211.0.0/22 35.191.0.0/16 Internet NEGs ( INTERNET FQDN PORT and INTERNET IP PORT ): 34.96.0.0/20 34.127.192.0/18 SERVERLESS NEGs and backend buckets: Google's production network handles packet routing Classic Application Load Balancer 35.191.0.0/16 130.211.0.0/22 The source of GFE traffic depends on the backend type: Instance groups, zonal NEGs ( GCE VM IP PORT ), and hybrid connectivity NEGs ( NON GCP PRIVATE IP PORT ): 35.191.0.0/16 130.211.0.0/22 Internet NEGs ( INTERNET FQDN PORT and INTERNET IP PORT ): 34.96.0.0/20 34.127.192.0/18 SERVERLESS NEGs and backend buckets: Google's production network handles packet routing.
- Backend service scope The following table indicates which backend service resource and scope is used by external Application Load Balancers: Load balancer mode Backend service resource Global external Application Load Balancer backendServices (global) Classic Application Load Balancer backendServices (global) Regional external Application Load Balancer regionBackendServices (regional) Protocol to the backends Backend services for Application Load Balancers must use one of the following protocols to send requests to backends: HTTP, which uses HTTP/1.1 and no TLS HTTPS, which uses HTTP/1.1 and TLS HTTP/2, which uses HTTP/2 and TLS (HTTP/2 without encryption isn't supported.) H2C, which uses HTTP/2 over TCP.
- Load balancer mode Supported backends on a backend service 1 Supports backend buckets Supports Cloud Armor Supports Cloud CDN 2 Supports IAP 2 Supports Service Extensions Instance groups 3 Zonal NEGs 4 Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs Global external Application Load Balancer Classic Application Load Balancer Premium Tier Regional external Application Load Balancer 1 Backends on a backend service must be the same type: all instance groups or all the same type of NEG.
- Load balancer mode Health check type Global external Application Load Balancer Global Classic Application Load Balancer Global Regional external Application Load Balancer Regional For more information about health checks, see the following: Health checks overview Creating health checks Firewall rules The load balancer requires the following firewall rules: For the global external Application Load Balancers, an ingress allow rule to permit traffic from Google Front Ends (GFEs) to reach your backends.

