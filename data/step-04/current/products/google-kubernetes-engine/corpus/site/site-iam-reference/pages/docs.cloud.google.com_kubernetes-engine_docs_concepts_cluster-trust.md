---
title: "Cluster trust \_|\_ GKE security \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-trust
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/access-control
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-trust
  title: "Cluster trust \_|\_ GKE security \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE security
Send feedback
Cluster trust
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This document is about the trust model in Google Kubernetes Engine (GKE) clusters,
including communication within clusters and how requests are authenticated for
components like control planes. This document assumes that you know about the
following:
Overview of GKE security
Overview of GKE networking
This document is for Security specialists who want to understand
GKE's cluster trust model. To learn more about common roles and
example tasks that we reference in Google Cloud content, see
Common GKE user roles and tasks .
Intracluster communication
GKE applies various security mechanisms to traffic between
cluster components, as follows:
Traffic between the control plane and nodes : the control plane
communicates with a node for managing containers. When the control plane
sends a request, (for example, kubectl logs ) to nodes, the request is sent
over a Konnectivity proxy tunnel. Requests that the control plane sends are
authenticated and protected by TLS. When a node sends a request to the
control plane, for example, from the kubelet to the API server, that request
is authenticated and encrypted using mutual TLS (mTLS).
All newly created and updated clusters use TLS 1.3 for control plane to node
communication. TLS 1.2 is the minimum supported version for control plane to
node communication.
Traffic between nodes : nodes are Compute Engine VMs. Connections
between nodes inside the Google Cloud production network are
authenticated and encrypted. For details, refer to the VM-to-VM section of
the Encryption in Transit whitepaper .
Traffic between Pods : when a Pod sends a request to another Pod, that
traffic isn't authenticated by default. GKE encrypts traffic
between Pods on different nodes at the network layer. Traffic between Pods
on the
same node isn't encrypted by default. For details about the network-layer
encryption, see Google Cloud virtual network encryption and
authentication .
You can restrict Pod-to-Pod traffic with a
NetworkPolicy , and you can
encrypt all Pod-to-Pod traffic, including traffic on the same node, by using
a service mesh like Cloud Service Mesh or a different
method of application-layer encryption.
Traffic between control plane components : traffic between various
components that run on the control plane is authenticated and encrypted
using TLS. The traffic never leaves a Google-owned network that's protected
by firewalls.
Root of trust
GKE has the following configuration:
The cluster root Certificate Authority (CA) is used to
validate the API server and kubelets' client certificates. That is, control
planes and nodes have the same root of trust. Any kubelet within the cluster
node pool can request a certificate from this CA using the
certificates.k8s.io API, by submitting a certificate signing request .
The root CA has a limited lifetime as described in the Cluster root CA
lifetime section.
In clusters that run etcd database instances on the control plane VMs, a
separate per-cluster etcd peer CA is used to establish trust between etcd
instances.
In all GKE clusters, a separate etcd API CA is used to
establish trust between the Kubernetes API server and the etcd API.
API server and kubelets
The API server and the kubelets rely on the cluster root CA for trust. In
GKE, the control plane API certificate is signed by the cluster
root CA. Each cluster runs its own CA, so that if one cluster's CA is
compromised, no other cluster CA is affected.
An internal service manages root keys for this CA, which are non-exportable.
This service accepts certificate signing requests, including those from the
kubelets in each GKE cluster. Even if the API server in a cluster
were compromised, the CA would not be compromised, so no other clusters would be
affected.
Each node in the cluster is injected with a shared secret at creation, which it
can use to submit certificate signing requests to the cluster root CA and obtain
kubelet client certificates. These certificates are then used by the kubelet to
authenticate its requests to the API server. This shared secret is reachable by
Pods on the node, unless you enable
Shielded GKE Nodes or
Workload Identity Federation for GKE .
Cluster root CA lifetime
The cluster root CA has a limited lifetime, after which any certificates signed
by the expired CA are invalid. Check the approximate expiry date of your
cluster's CA by following the instructions in Check credential
lifetime .
You should manually rotate your credentials before your existing root CA
expires. If the CA expires and you don't rotate your credentials, your cluster
might enter an unrecoverable state. GKE has the following
mechanisms to try and prevent unrecoverable clusters:
Your cluster enters a DEGRADED state seven days before CA expiry
GKE attempts an automatic credential rotation 30 days before
CA expiry. This automatic rotation ignores maintenance windows and might
cause disruptions as GKE recreates nodes to use new
credentials. External clients, like kubectl in local environments, won't
work until you update them to use the new credentials.
Note: This is a last resort to prevent an unrecoverable cluster. Don't rely
on automatic rotation—instead, plan to rotate your credentials
manually during maintenance periods well in advance of CA expiry.
To learn how to perform a rotation, see Rotate your cluster
credentials .
Cluster state storage
GKE clusters store the state of Kubernetes API objects as
key-value pairs in a database. The Kubernetes API server in your control plane
interacts with this database by using the etcd
API . GKE uses one of
the following technologies to run the cluster state database:
etcd : the cluster uses etcd instances that run on the control plane VMs.
Spanner : the cluster uses a Spanner
database that runs outside of the control plane VMs.
Regardless of the database technology that a cluster uses, every
GKE cluster serves the etcd API in the control plane. To encrypt
traffic that involves the cluster state database, GKE uses one or
both of the following per-cluster CAs:
etcd API CA : used to sign certificates for traffic to and from etcd API
endpoints. An etcd API CA runs in every GKE cluster.
etcd peer CA : used to sign certificates for traffic between etcd
database instances on the control plane. An etcd peer CA runs in any cluster
that uses etcd databases. Clusters that use Spanner databases
don't use the etcd peer CA.
Root keys for the etcd API CA are distributed to the metadata of each
Compute Engine instance that the control plane runs on. The etcd API CA
isn't shared between clusters.
The validity of the etcd CA certificate depends on the cluster creation date, as
follows:
For clusters that were created before October 2021, the certificate is
valid for 5 years.
For clusters that were created after October 2021, the certificate is
valid for 30 years.
Regardless of the cluster creation date, the new etcd CA certificate that's
created during a certificate rotation is valid for 30 years. The certificate will be rotated automatically 6 months before it expires.
Certificate rotation
To rotate all your cluster's API server and kubelet certificates, perform a
credential rotation . There is no way for you to trigger a rotation of the etcd
certificates; this is managed for you in GKE.
Note: Performing a credential rotation causes GKE to upgrade all
node pools to the closest supported node version, and causes brief downtime for
the cluster API.
What's next
Read more about Managing TLS certificates in the Kubernetes
documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
