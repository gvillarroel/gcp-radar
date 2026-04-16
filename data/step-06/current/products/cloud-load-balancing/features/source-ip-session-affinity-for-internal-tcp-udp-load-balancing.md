---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.785Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Source-IP session affinity for Internal TCP/UDP Load Balancing"
feature_slug: "source-ip-session-affinity-for-internal-tcp-udp-load-balancing"
latest_feature_date: "2022-02-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/features"
keywords:
  - "source"
  - "ip"
  - "session"
  - "affinity"
  - "internal"
  - "tcp"
  - "udp"
  - "load"
---

# Source-IP session affinity for Internal TCP/UDP Load Balancing

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Internal TCP/UDP Load Balancing supports source-IP address session affinity using CLIENT_IP_NO_DESTINATION.

## Extended Definition

Internal TCP/UDP Load Balancing supports source-IP address session affinity using CLIENT_IP_NO_DESTINATION.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/features](https://docs.cloud.google.com/load-balancing/docs/features)

## Supporting Pages

### Load balancer feature comparison | Cloud Load Balancing | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/features](https://docs.cloud.google.com/load-balancing/docs/features)
- Source ID: `feature-recovery-direct-http`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Feature Application Load Balancer Proxy Network Load Balancer Passthrough Network Load Balancer Internal External Internal External Internal External Headers (Only global and regional mode) HTTP cookie (Only global and regional) Generated cookie Stateful cookie (Only global and regional) Client IP, no destination (1-tuple) CLIENT_IP_NO_DESTINATION info Client IP, Destination IP (2-tuple) CLIENT_IP 1 1 Client IP, Destination IP, Protocol (3-tuple) CLIENT_IP_PROTO 1 1 Client IP, Client Port, Destination IP, Destination Port, Protocol (5-tuple) CLIENT_IP_PORT_PROTO 1,2 1,2 None (5-tuple) NONE 3 3 1 Setting session affinity is only meaningful if the protocol uses sessions&mdash;for example, TCP.
- Monitoring Filter this table: Feature Application Load Balancer Proxy Network Load Balancer Passthrough Network Load Balancer Internal External Internal External Internal External Byte count metrics info info info info info info Packet count metrics info info Round trip time (RTT) metrics info info Request latency metrics info info info Connection count metrics info info HTTP request count metrics info info Logging Feature Application Load Balancer Proxy Network Load Balancer Passthrough Network Load Balancer Internal External Internal External Internal External Log type HTTP request and response attribute logs info info Connection attribute logs info info info info Log fields HTTP request info global, classic regional String that explains the proxy response proxyStatus statusDetails proxyStatus TLS metadata between client and load balancer info (Only regional mode) Connection attributes: 5-tuple, bytes/packets sent and received info info info VM instance details and GKE details info (Only regional mode) info info Client VPC or location details info info Network tier details info Labels describing the load balancer resource info global, classic regional info info info info Session affinity For detailed information, see Session affinity .
- Load balancer feature comparison | Cloud Load Balancing | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil עברית 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Load Balancing Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Discover Cloud Load Balancing overview Choose a load balancer Cloud Load Balancing resource model Load balancer feature comparison Get started Roles and permissions IAM Conditions for forwarding rules Organization policy constraints Overview Use custom constraints Application Load Balancer (HTTP/HTTPS) Overview External load balancer Architecture overview Request distribution overview Set up global load balancer Managed VM instance group backend Cloud Storage (backend buckets) External backend (internet NEG) Cloud Run, App Engine, or Cloud Run functions backends (serverless NEG) On-premises or other cloud backends (zonal and hybrid NEG) Add capabilities Traffic management overview Set up traffic management Set up HTTP-to-HTTPS redirect Set up a load balancer with Shared VPC Set up load balancer with cross-project backend service and backend bucket Create custom headers in backend services Custom error response Overview Configure custom error responses Set up global load balancer (classic) Terraform examples Managed VM instance group backend Cloud Storage (backend buckets) External backend (internet NEG) Cloud Run, App Engine, or Cloud Functions backends (serverless NEG) On-premises or other cloud backends (zonal and hybrid NEG) Migrate resources Overview Migrate to global external Application Load Balancer Roll back to classic Application Load Balancer Add capabilities Traffic management overview Create custom headers in backend services Set up custom header and query parameter-based routing Set up URL redirect Set up HTTP-to-HTTPS redirect Set up URL rewrite Set up regional load balancer Managed VM instance group backend Cloud Storage (backend buckets) Cloud Run backends (serverless NEG) On-premises or other cloud backends (zonal and hybrid NEG) External backend (internet NEG) Add capabilities Traffic management overview Set up traffic management Set up high availability Set up HTTP-to-HTTPS redirect Set up a load balancer with backend service using Shared VPC Set up a load balancer with backend buckets using Shared VPC Create custom headers in URL maps Fail over to regional load balancers Monitor and troubleshoot Overview Global load balancers Regional load balancers Troubleshooting Best practices Explore tutorials Request routing to a multi-region external HTTPS load balancer Faster web performance and improved web protection for load balancing Deliver HTTP and HTTPS content over the same published domain Optimize application latency with load balancing Application capacity optimizations with global load balancing Capacity management with load balancing Internal load balancer Architecture overview Set up cross-region load balancer Managed VM instance group backend Cloud Storage (backend buckets) On-premises or other cloud backends (zonal and hybrid NEG) Cloud Run backends (serverless NEG) Set up regional load balancer Terraform examples VM instance group backends Cloud Run backends (serverless NEG) Cloud Storage (backend buckets) On-premises or other cloud backends (zonal and hybrid NEG) External backend (internet NEG) Add capabilities Traffic management Overview Set up traffic management Set up HTTP-to-HTTPS redirect Create custom headers in URL maps Set up regional internal load balancer with backend service using Shared VPC Set up cross-region load balancer with backend buckets using Shared VPC Set up a regional internal Application Load Balancer with backend buckets using Shared VPC Service Directory registration Load balancing and connected networks Monitor and troubleshoot View logs and metrics Troubleshooting Convert load balancer to IPv6 Use custom metrics Load testing backends Proxy Network Load Balancer (TCP/SSL proxy) Overview External load balancer Architecture overview Set up global load balancer Global SSL proxy with VM instance group backends Global TCP proxy with VM instance group backends Set up global load balancer (classic) Terraform examples Global SSL proxy with VM instance group backends Global TCP proxy with VM instance group backends Set up regional load balancer VM instance group backends Zonal NEG backends Hybrid connectivity (hybrid NEGs) External backend (internet NEG) Internal load balancer Architecture overview Set up cross-region load balancer Managed VM instance group backends On-premises or other cloud backends (zonal and hybrid NEG) Set up regional load balancer Managed VM instance group backends Zonal NEG backends Hybrid connectivity (hybrid NEGs) External backend (internet NEG) Add capabilities Load balancing and connected networks Monitor and troubleshoot View logs and metrics Convert load balancer to IPv6 Passthrough Network Load Balancer (TCP/UDP) Overview External load balancer Backend service-based architecture Traffic distribution concepts Target pool-based architecture Set up load balancer VM instance group backends (TCP/UDP only) VM instance group backends (multiple protocols) Zonal NEG backends Target pool-based load balancer Add capabilities Configure failover Configure weighted load balancing Migrate from target pools to backend services Service Directory registration Explore tutorials Use UDP with network load balancers Monitor and troubleshoot View logs and metrics Troubleshooting Internal load balancer Architecture overview Traffic distribution concepts Set up load balancer Terraform examples VM instance group backends VM instance group backend for multiple protocols Zonal NEG backends Add capabilities Configure failover Zonal affinity Load balancers as next hops Overview Set up load balancing for third-party appliances Forwarding rules that use a common IP address Service Directory registration Load balancing and connected networks Explore tutorials Set up load balancer as next hop (with tags) Deploy a hub-and-spoke network Set up a load balancer with internal IPv6-only backends Monitor and troubleshoot View logs and metrics Troubleshooting Protocol forwarding Overview Set up protocol forwarding Switch between a target instance and a backend service Secure SSL certificates Overview Use self-managed SSL certificates Use Google-managed SSL certificates Encryption to the backends Troubleshooting SSL policies Overview Use SSL policies Mutual TLS Frontend mTLS Overview Set up frontend mTLS with user-provided certificates Set up frontend mTLS with a private CA Backend mTLS Overview Set up backend authenticated TLS Set up backend mTLS Backend mTLS with managed workload identity Overview Set up backend mTLS using managed workload identity Authorization policies Overview Set up policies for Application Load Balancers Customize load balancer Advanced load balancing optimizations Backend buckets Backend services Connection draining Firewall rules Forwarding rules Health checks Overview Use health checks Internal DNS names IPv6 Network endpoint groups Overview Hybrid connectivity NEGs Internet NEGs Serverless NEGs Zonal NEGs Overview Set up zonal NEGs Proxy-only subnets Tags Target pools Target proxies URL maps Overview Use URL maps Operate and maintain Audit logging information Health check logging information Clean up a load balancer setup AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Networking Load Balancing Guides Send feedback Load balancer feature comparison Stay organized with collections Save and categorize content based on your preferences.
- Routing and traffic management Filter this table: Feature Application Load Balancer Proxy Network Load Balancer Passthrough Network Load Balancer Internal External Internal External Internal External HTTP or Layer 7 request routing info info Fault injection info (Only global and regional modes) Configurable timeouts info info info info Retries info info Redirects info global classic regional URL rewrites info global classic regional Request and response header transformations (configured on the URL map) info (Only global and regional modes) Traffic splitting info (Only global and regional modes) Traffic mirroring info 1 (Only global and regional modes) (Only regional mode) Outlier detection info (Only global and regional modes) Retry failed requests info (Only global and regional modes) Custom request and response headers (configured on the backend service) (Only global and regional modes) Custom error responses (Only global mode) Service load balancing policy (Only cross-region mode) (Only global mode) (Only cross-region mode) (Only global mode) Connection tracking policy info info 1 Source IP-based traffic steering info 2 1 This feature is not supported with load balancers that use serverless NEG backends.

### "Internal passthrough Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- Source ID: `site-docs-reference-required-4`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Traffic distribution Internal passthrough Network Load Balancers support a variety of traffic distribution customization options, including session affinity, connection tracking, and failover.
- The following table summarizes sources and destinations for response packets: Traffic type Source Destination TCP The IP address of the load balancer's forwarding rule The requesting packet's source UDP For most use cases, the IP address of the load balancer's forwarding rule 1 The requesting packet's source 1 It is possible to set the response packet's source to the VM NIC's primary internal IPv4 address or an alias IP address range.
- IP addresses for request and return packets When a backend VM receives a load-balanced packet from a client, the packet's source and destination are as follows: Source: the client's internal IPv4, IPv6, or the IPv4 address from one of the client's alias IPv4 ranges.
- Firewall configuration Internal passthrough Network Load Balancers require the following configuration for hierarchical firewall policies and VPC firewall rules: Allow ingress from IPv4 or IPv6 health check source ranges .

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Table: Supported session affinity settings Product Session affinity options Cross-region internal Application Load Balancer Regional internal Application Load Balancer None ( NONE ) Client IP ( CLIENT IP ) Generated cookie ( GENERATED COOKIE ) Header field ( HEADER FIELD ) HTTP cookie ( HTTP COOKIE ) Stateful cookie-based affinity ( STRONG COOKIE AFFINITY ) Also note: The effective default value of the load balancing locality policy ( localityLbPolicy ) changes according to your session affinity settings.
- Types of session affinity The session affinity for internal Application Load Balancers can be classified into one of the following categories: Hash-based session affinity ( NONE , CLIENT IP ) HTTP header-based session affinity ( HEADER FIELD ) Cookie-based session affinity ( GENERATED COOKIE , HTTP COOKIE , STRONG COOKIE AFFINITY ) Hash-based session affinity For hash-based session affinity, the load balancer uses the consistent hashing algorithm to select an eligible backend.
- For the internal Application Load Balancer, don't configure session affinity if you're using weighted traffic splitting.
- Backend service scope The following table indicates which backend service resource and scope is used by internal Application Load Balancers: Load balancer mode Backend service resource Cross-region internal Application Load Balancer backendServices Regional internal Application Load Balancer regionBackendServices Protocol to the backends Backend services for Application Load Balancers must use one of the following protocols to send requests to backends: HTTP, which uses HTTP/1.1 and no TLS HTTPS, which uses HTTP/1.1 and TLS HTTP/2, which uses HTTP/2 and TLS (HTTP/2 without encryption isn't supported.) H2C, which uses HTTP/2 over TCP.

