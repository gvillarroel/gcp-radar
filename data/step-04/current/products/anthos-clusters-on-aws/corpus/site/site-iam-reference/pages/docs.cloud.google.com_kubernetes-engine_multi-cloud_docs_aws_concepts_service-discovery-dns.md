---
title: "Service discovery and DNS overview \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/service-discovery-dns
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/aws-iam-roles
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/service-discovery-dns
  title: "Service discovery and DNS overview \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The product described by this documentation, GKE on AWS, is now in maintenance mode and will be shut down on March 17, 2027.
Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE Multi-Cloud
GKE on AWS
Guides
Send feedback
Service discovery and DNS overview
Stay organized with collections
Save and categorize content based on your preferences.
This topic describes how GKE on AWS interacts with Domain
Name Services (DNS) on both your AWS Virtual Private Cloud (VPC) and clusters.
AWS VPC DNS
This section describes how you can configure a VPC for GKE on AWS.
Configuring VPC DNS
GKE on AWS supports a variety of DNS configurations in your AWS VPC.
You configure your VPC's DNS settings when you
Create a DHCP options set .
For more information, see
DNS support for your VPC .
You can configure the following options:
DNS Hostnames
This sets whether EC2 instances with public IP addresses get corresponding
public DNS hostnames. You set this value using the enableDNSHostnames
field in your VPC's DHCP option set. For more information, see
VPC DNS Hostnames
and
DHCP options sets for your VPC .
EC2 DNS Hostnames
This sets whether EC2 instances receive a default DNS hostname or a custom
DNS hostname.
DNS server
Whether your VPC's DHCP options set uses either the AWS Route53 DNS server
(with the AmazonProvidedDNS option), or a hosted DNS server.
Using hosted DNS
To use a hosted DNS, your
control plane
and node pool
security groups must allow outbound traffic on TCP and UDP port 53.
Supported VPC DNS configurations
The following table includes DNS configurations supported by
GKE on AWS:
Enable DNS hostnames
EC2 DNS hostnames
DNS server
Supported?
true
Default
AWS Route53
Yes
false
Default
AWS Route53
Yes
true
Custom
AWS Route53
Yes
false
Custom
AWS Route53
Yes
true
Custom
Hosted
Yes
false
Custom
Hosted
Yes
true
Default
Hosted
No
false
Default
Hosted
No
Service discovery
Service discovery is the process where workloads discover services without
knowing the service's IP address. This section describes how
GKE on AWS implements service discovery and managed DNS.
Kubernetes automatically generates service names that use the following
specification :
service . namespace .svc.cluster.local
Where:
service : your service's name
namespace : your service's Namespace
Workloads also access external services— for example example.net —
using DNS names. For more information on the behavior of DNS in Kubernetes, see
DNS for Services and Pods .
CoreDNS
GKE on AWS uses
CoreDNS
to resolve DNS names within clusters. CoreDNS runs as a redundant, scaled
Deployment
in the kube-system
namespace. The CoreDNS deployment has a
Service that groups the CoreDNS Pods
and gives them a single IP address. The CoreDNS Deployment scales with the
cluster's size and usage.
NodeLocal DNSCache
GKE on AWS uses
NodeLocal DNSCache
to improve DNS lookup performance. NodeLocal DNSCache runs as a
DaemonSet
on each node in your cluster. When a Pod makes a DNS request, the request first
goes to the DNS cache on the same node. If the cache can't resolve the DNS
request, the cache forwards the request to either:
CoreDNS for an internal name— for example foo.bar.svc.cluster.local
The
Amazon DNS server ,
for an external name— for example example.net
What's next
Read about AWS
DNS support for your VPC .
For an overview of how DNS is used in Kubernetes clusters, see
DNS for Services and Pods .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
