---
title: "Configure DNS for a cluster \_|\_ Google Distributed Cloud (software only)\
  \ for VMware \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-dns
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-workstation-configuration-file
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-dns
  title: "Configure DNS for a cluster \_|\_ Google Distributed Cloud (software only)\
    \ for VMware \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
Documentation
GDC for VMware
Guides
Send feedback
Configure DNS for a cluster
Stay organized with collections
Save and categorize content based on your preferences.
This document shows how to configure Domain Name System (DNS) provider options
for Google Distributed Cloud. The DNS configuration for a cluster is held in a ClusterDNS
custom resource named default . This resource is cluster-wide, which means that
it isn't namespaced. The ClusterDNS custom resource applies to all cluster
types.
Create the ClusterDNS resource
Create a manifest for a ClusterDNS resource named default . Fill in the spec
to configure the resource settings that you want. For example:
apiVersion : networking.gke.io/v1alpha1
kind : ClusterDNS
metadata :
name : default
spec :
upstreamNameservers :
- serverIP : 8.8.8.8
- serverIP : 8.8.4.4
domains :
- name : altostrat.com
nameservers :
- serverIP : 198.51.100.1
- name : my-own-personal-domain.com
nameservers :
- serverIP : 203.0.113.1
- serverIP : 203.0.113.2
serverPort : 54
googleAccess : default
To save the manifest to a file named my-dns.yaml and apply the resource to the
cluster, run the following command:
kubectl --kubeconfig KUBECONFIG apply -f my-dns.yaml
Replace KUBECONFIG with the path to the cluster kubeconfig
file.
View the ClusterDNS resource
To view the ClusterDNS resource, run the following command:
kubectl --kubeconfig KUBECONFIG get clusterdns default --output yaml
Replace KUBECONFIG with the path to the cluster kubeconfig
file.
The ClusterDNS spec
The following sections describe the parts of the ClusterDNS custom resource
definition you use to configure DNS for your clusters. You can update the
ClusterDNS resource for a cluster at any time.
spec.upstreamNameservers
Use the spec.upstreamNameservers field to specify your default upstream name
servers with an array of objects. Each object has a server IP address and
optionally a server port. The default value for the server port is 53.
Requests for non-cluster domains are forwarded to this set of servers by
default.
Here's an example upstreamNameservers configuration:
spec :
upstreamNameservers :
- serverIP : 8.8.8.8
- serverIP : 1.2.3.4
serverPort : 54
If you don't specify any values for upstreamNameservers , then the DNS provider
uses the /etc/resolv.conf file on the node to find the list of upstream name
servers.
spec.domains
Use the spec.domains field to configure different upstream name servers for
particular domains. These domain-specific name server settings override the
configuration in upstreamNameservers .
You can also turn on query logging for a domain. You can turn on query logging
for any specified domain or the cluster domain, cluster.local .
Here's an example spec.domains configuration:
spec:
domains:
- name: altostrat.com
nameservers:
- serverIP: 198.51.100.1
- name: my-own-personal-domain.com
nameservers:
- serverIP: 203.0.113.1
- serverIP: 203.0.113.2
serverPort: 50000
- name: cluster.local
queryLogging: true
spec.googleAccess
The spec.googleAccess field is a string that specifies how to treat
Google domains. googleAccess values specify the following behavior:
default : no special treatment for Google domains. Removing the
googleAccess field has the same effect.
private : resolves Google domains to private-access IP addresses only.
restricted : resolves Google domains to restricted-access IP addresses only.
The following setting example resolves Google domains to private-access IP
addresses only:
spec :
googleAccess : private
For more information, see Configure Private Google Access for on-premises
hosts .
spec.orderPolicy
The spec.orderPolicy field is a string. Use this field to specify the ordering
policy by which upstream servers are selected.
The default value is random .
Supported types are random , round_robin , and sequential .
This ordering policy applies to defined domains as well.
For more information about policy and what each configuration does,
See the coredns documentation.
Here's an example spec.orderPolicy configuration:
spec:
orderPolicy: sequential
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
