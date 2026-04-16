---
title: "GKE Dataplane V2 \_|\_ GKE networking \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2
  title: "GKE Dataplane V2 \_|\_ GKE networking \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE networking
Guides
Send feedback
GKE Dataplane V2
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This page provides an overview of what GKE Dataplane V2 does and how it works.
This page assumes that you know about
networking inside GKE clusters .
Overview of GKE Dataplane V2
GKE Dataplane V2 is a dataplane that is optimized for Kubernetes networking.
GKE Dataplane V2 provides the following:
A consistent user experience for networking.
Real-time visibility of network activity.
Simpler architecture that makes it easier to manage and troubleshoot clusters.
GKE Dataplane V2 is enabled by default for all new Autopilot clusters.
How GKE Dataplane V2 works
GKE Dataplane V2 is implemented using
eBPF .
As packets arrive at a GKE node, eBPF programs installed in the
kernel decide how to route and process the packets. Unlike packet processing
with iptables , eBPF
programs can use Kubernetes-specific metadata in the packet. This lets
GKE Dataplane V2 process network packets in the kernel more efficiently and
report annotated actions back to user space for logging.
The following diagram shows the path of a packet through a node using
GKE Dataplane V2:
GKE deploys the GKE Dataplane V2 controller as a
DaemonSet
named anetd to each node in the cluster. anetd interprets Kubernetes objects
and programs network topologies in eBPF. The anetd Pods run in the
kube-system namespace.
GKE Dataplane V2 and NetworkPolicy
GKE Dataplane V2 is implemented using
Cilium . The legacy
dataplane for GKE is implemented using
Calico .
Both of these technologies manage Kubernetes
NetworkPolicy .
Cilium uses eBPF and the Calico Container Network Interface (CNI) uses
iptables in the Linux kernel.
Advantages of GKE Dataplane V2
GKE Dataplane V2 offers the following benefits:
Scalability
GKE Dataplane V2 has different scalability characteristics than legacy data
plane.
For GKE versions where the GKE Dataplane V2
does not use kube-proxy
and does not rely on iptables for service routing, GKE removes
some iptables related bottlenecks, such as the number of Services.
GKE Dataplane V2 relies on eBPF maps that are limited to 260,000 endpoints
across all services.
Security
Kubernetes NetworkPolicy is always on in clusters with GKE Dataplane V2. You
don't have to install and manage third-party software add-ons such as Calico to
enforce network policy.
Operations
When you create a cluster with GKE Dataplane V2, network policy logging is
built-in. Configure the
logging CRD
on your cluster to see when connections are allowed and denied by your Pods.
Consistency
GKE Dataplane V2 provides a consistent networking experience.
For more
information, see
Availability of GKE Dataplane V2 .
GKE Dataplane V2 technical specifications
GKE Dataplane V2 supports clusters with the following specifications:
Specification
GKE
Google Distributed Cloud Edge
Google Distributed Cloud Hosted
Number of nodes per cluster
7,500
500
500
Number of Pods per cluster
200,000
15,000
27,500
Number of Pods behind one Service
10,000
1,000
1,000
Number of Cluster IP Services
10,000
1,000
1,000
Number of LoadBalancer Services per cluster
750
500
1,000
GKE Dataplane V2 maintains a Service map to keep track of which Services refer to
which Pods as their backends. The number of Pod backends for each Service summed
across all Services must all fit into the Service map, which can contain up to
260,000 entries. If this limit is exceeded your cluster may not work as intended.
Node limits
The maximum number of nodes per cluster depends on your GKE Dataplane V2 cluster's
Kubernetes version and location:
Regional clusters :
Kubernetes version 1.31 or later: Up to 7,500 nodes.
Kubernetes version 1.23 or later: Up to 5,000 nodes.
Zonal clusters : Up to 1,000 nodes.
All other clusters : Up to 500 nodes.
To achieve the higher node limits (5,000 or 7,500), your Regional cluster must
also meet the following conditions:
Your cluster must have Private Service Connect enabled. To
check if your cluster uses Private Service Connect, see
Clusters with Private Service Connect .
Only clusters that were created with GKE version 1.23 or
later have a raised 5,000 node limit. Clusters that were created with
earlier GKE versions might require lifting a cluster size
quota. Contact
support for assistance.
Clusters that use CiliumNetworkPolicy CRD ( Cilium )
can't scale to 5,000 nodes. CiliumClusterwideNetworkPolicy CRD supports up to
5,000 nodes.
LoadBalancer Services in Google Distributed Cloud
The number of LoadBalancer Services supported in Google Distributed Cloud depends on
the
load balancer mode
being used. Google Distributed Cloud supports 500 LoadBalancer Services when using
bundled load balancing mode (Seesaw) and 250 when using integrated load
balancing mode with F5. For more information, see
Scalability .
Deploy workloads with SCTP
You can deploy workloads that use the Stream Control Transmission Protocol
(SCTP) on clusters that are enabled with GKE Dataplane V2. SCTP is a transport
layer protocol that provides reliable, message-oriented transmission. For more
information, see Deploy workloads with
SCTP .
Limitations
GKE Dataplane V2 has the following limitations:
GKE Dataplane V2 can only be enabled when creating a new cluster. Existing
clusters cannot be upgraded to use GKE Dataplane V2.
Manually created internal passthrough Network Load Balancers associated with a Service of type
NodePort are not supported.
GKE Dataplane V2 uses cilium instead of kube-proxy to implement Kubernetes
Services. kube-proxy is maintained and developed by the Kubernetes
community, so new features for Services are more likely to be implemented in
kube-proxy before they are implemented in cilium for GKE Dataplane V2.
In certain cases, GKE Dataplane V2 agent Pods ( anetd ) can consume a
significant amount of CPU resources, up to two or three vCPUs per instance.
This occurs when there's a high volume of TCP connections being opened and
closed rapidly on the node. To mitigate this problem, we recommend
implementing keep-alives for HTTP calls and connection pooling for the
relevant workloads.
The reported memory usage of GKE Dataplane V2 agent Pods ( anetd )
depends on the total memory available on the node. Nodes that have higher
total memory report higher memory usage for the anetd Pods. The anetd Pods
don't actually use more memory; the reported usage increases because this
metric includes the memory reservation of the
eBPF map .
In GKE, the memory reservation for the largest eBPF maps is
0.25% of the total node memory. Additional memory might be reserved for other
GKE-specific features.
GKE Dataplane V2 uses eBPF to manage your cluster's network traffic. If you
install a third-party application that also uses eBPF, it might interfere with
GKE Dataplane V2. For example, using Retina with GKE Dataplane V2 can prevent
your Pods from connecting to Services. This happens because Retina's eBPF
programs can disrupt how GKE Dataplane V2 routes traffic. If you see error
messages indicating that traffic is being dropped because it's trying to reach
the Service's IP address directly, you might be encountering this issue. This
is because Pods aren't allowed to directly access the Service's IP address and
traffic must go through Dataplane V2's routing mechanisms. For more
information, see Retina incompatibility issues .
Network policy enforcement without GKE Dataplane V2
See
Using network policy enforcement
for instructions to enable network policy enforcement in clusters that don't use
GKE Dataplane V2.
What's next
Read Using GKE Dataplane V2 .
Learn about GKE Dataplane V2 observability .
Learn how to
Use network policy logging .
See which
GKE Enterprise cluster environments GKE Dataplane V2 is available on .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
