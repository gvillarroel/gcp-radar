---
title: "Firewall rules \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/firewall-rules
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/firewall-rules
  title: "Firewall rules \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Load Balancing
Guides
Send feedback
Firewall rules
Stay organized with collections
Save and categorize content based on your preferences.
Google Cloud load balancers typically require one or more firewall rules
to ensure that traffic from clients reaches the backends.
Most load balancers are required to specify a health check for backend
instances. For the health check probes to reach your backends, you must create
an ingress allow firewall rule that allows
health check probes to reach your backend instances.
Load balancers based on Google Front Ends (GFEs) require an ingress allow
firewall rule that permits traffic from the GFE proxy to reach the backend
instances. In most cases, GFE proxies use the same source IP ranges as the
health check probes and therefore don't require a separate firewall rule.
Exceptions are noted in the following table.
Load balancers based on the open source Envoy proxy require an ingress allow
firewall rule that permits traffic from the proxy-only subnet to reach the
backend instances. These load balancers terminate incoming connections and
traffic from the load balancer to the backends is then sent from IP addresses
in the proxy-only subnet.
The following table summarizes the minimum required firewall rules for each
type of load balancer.
Load balancer type
Minimum required ingress allow firewall rules
Overview
Example
Global external Application Load Balancer
Health check ranges:
35.191.0.0/16
130.211.0.0/22
For IPv6 traffic to the backends:
2600:2d00:1:b029::/64
2600:2d00:1:1::/64
GFE proxy ranges:
Same as health check ranges if the backends are instance
groups, zonal NEGs
( GCE_VM_IP_PORT ), or hybrid connectivity NEGs
( NON_GCP_PRIVATE_IP_PORT )
IP address ranges listed in the _cloud-eoips.googleusercontent.com
DNS TXT record. You can extract the source IP addresses for global
internet NEG backends using the following example command on a
Linux system:
dig TXT _cloud-eoips.googleusercontent.com | grep -Eo 'ip4:[^ ]+' | cut -d':' -f2
Overview
Example
Classic Application Load Balancer
Health check ranges:
35.191.0.0/16
130.211.0.0/22
GFE proxy ranges:
Same as health check ranges if the backends are instance
groups, zonal NEGs
( GCE_VM_IP_PORT ), or hybrid connectivity NEGs
( NON_GCP_PRIVATE_IP_PORT )
IP address ranges listed in the _cloud-eoips.googleusercontent.com
DNS TXT record. You can extract the source IP addresses for global
internet NEG backends using the following example command on a
Linux system:
dig TXT _cloud-eoips.googleusercontent.com | grep -Eo 'ip4:[^ ]+' | cut -d':' -f2
Overview
Example
Regional external Application Load Balancer
Health check ranges 1, 2 :
35.191.0.0/16
130.211.0.0/22
Proxy-only subnet 2
Overview
Example
Cross-region internal Application Load Balancer
Health check ranges 1, 2 :
35.191.0.0/16
130.211.0.0/22
Proxy-only subnet 2
Overview
Example
Regional internal Application Load Balancer
Health check ranges 1, 2 :
35.191.0.0/16
130.211.0.0/22
Proxy-only subnet 2
Overview
Example
Global external proxy Network Load Balancer
Health check ranges:
35.191.0.0/16
130.211.0.0/22
For IPv6 traffic to the backends:
2600:2d00:1:b029::/64
2600:2d00:1:1::/64
GFE proxy ranges: Same as health check ranges
Overview
Example
Classic proxy Network Load Balancer
Health check ranges:
35.191.0.0/16
130.211.0.0/22
GFE proxy ranges: Same as health check ranges
Overview
Example
Regional external proxy Network Load Balancer
Health check ranges 1, 2 :
35.191.0.0/16
130.211.0.0/22
Proxy-only subnet 2
Overview
Example
Regional internal proxy Network Load Balancer
Health check ranges 1, 2 :
35.191.0.0/16
130.211.0.0/22
Proxy-only subnet 2
Overview
Example
Cross-region internal proxy Network Load Balancer
Health check ranges 1, 2 :
35.191.0.0/16
130.211.0.0/22
Proxy-only subnet 2
Overview
Example
Regional external passthrough Network Load Balancer
Health check ranges
For IPv4 traffic to the backends:
35.191.0.0/16
209.85.152.0/22
209.85.204.0/22
For IPv6 traffic to the backends:
2600:1901:8001::/48
External source IP addresses of clients on the internet.
For example, 0.0.0.0/0 (all IPv4 clients) or
::/0 (all IPv6 clients) or a
specific set of IP address ranges.
Target pool-based load balancers might proxy health checks
through the metadata server. In this case, health check probes
sources match the IP address of the metadata server:
169.254.169.254 . However, traffic from the metadata
server is always allowed to reach VMs. No firewall rule is
required.
Overview
Backend service-based
Target pool-based
Examples
Backend service-based
Target pool-based
Internal passthrough Network Load Balancer
Health check ranges:
For IPv4 traffic to the backends:
35.191.0.0/16
130.211.0.0/22
For IPv6 traffic to the backends:
2600:2d00:1:b029::/64
Internal source IP addresses of clients
Overview
single-stack
dual-stack
1
Allowing traffic from Google's health check probe ranges isn't required for hybrid
NEGs. However, if you're using a combination of hybrid and zonal NEGs in
a single backend service, you need to allow traffic from the Google
health check probe ranges for the zonal NEGs.
2
For regional internet NEGs, health checks are optional. Traffic from load
balancers using regional internet NEGs originates from the proxy-only subnet and is then
NAT-translated (by using Cloud NAT) to either manually or automatically allocated
NAT IP addresses. This traffic includes both health check probes and user
requests from the load balancer to the backends. For details, see Regional NEGs:
Use a Cloud NAT gateway .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
