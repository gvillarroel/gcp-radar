---
title: "Security \_|\_ Google Distributed Cloud (software only) for VMware \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/security
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/security
  title: "Security \_|\_ Google Distributed Cloud (software only) for VMware \_|\_\
    \ Google Cloud Documentation"
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
Security
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the security features included in Google Distributed Cloud
(software only) for VMware, including each layer of its infrastructure, and how
you can configure these security features to suit your needs.
Overview
Google Distributed Cloud (software only) for VMware offers several features to help
secure your workloads , including the contents of your container image, the
container runtime, the cluster network, and access to the cluster API server.
It's best to take a layered approach to protecting your clusters and workloads.
You can apply the principle of least privilege to the level of
access you provide to your users and workloads. You might need to make tradeoffs
to allow the right level of flexibility and security.
Authentication and Authorization
You authenticate to your clusters using OpenID Connect
(OIDC) or a Kubernetes Service Account token via the
Cloud console .
To configure more granular access to Kubernetes resources at the cluster level
or within Kubernetes namespaces, you use Kubernetes
Role-Based Access Control (RBAC) . RBAC allows you to create detailed policies
that define which operations and resources you want to allow users and service
accounts to access. With RBAC, you can control access for any validated identity
provided.
To further simplify and streamline your authentication and
authorization strategy for Kubernetes Engine, Google Distributed Cloud disables
legacy Attribute Based Access Control (ABAC) .
Control plane security
The control plane components include the Kubernetes API server, scheduler,
controllers and the etcd database where your Kubernetes
configuration is persisted. Whereas in GKE, the
Kubernetes control plane components are managed and maintained by
Google, local administrators manage the control plane components in
Google Distributed Cloud.
In Google Distributed Cloud, the control plane components run within your
corporate network. You can protect the Kubernetes API server by using
your existing corporate network policies and firewalls. You can also assign a
internal IP address to the API server and limit access to the address.
All communication in Google Distributed Cloud is over TLS channels, which are
governed by three certificate authorities (CAs): etcd, cluster, and org:
The etcd CA secures communication from the API server to the etcd replicas
and also traffic between etcd replicas. This CA is self-signed.
The cluster CA secures communication between the API server and all internal
Kubernetes API clients (kubelets, controllers, schedulers). This CA is
self-signed.
The org CA is an external CA used to serve the Kubernetes API to external
users. You manage this CA.
For admin control planes, keys are stored on the control plane
node . For user clusters, the keys are stored as Kubernetes
Secrets in the admin control plane. The API server is configured with a
user-provided certificate signed by the org CA. The API server uses Server Name
Indication (SNI) to determine whether to use the key signed by the cluster CA or
the key signed by the org CA.
Cluster authentication is handled by certificates and service account bearer
tokens. As the administrator, you authenticate to the control plane using OIDC,
or with the administrative certificate (which you use for initial role binding
creation, or for emergency purposes).
Certificate rotation is handled in the following ways:
For the API server, control planes, and nodes, certificates are created or
rotated at each upgrade.
CAs can be rotated rarely or on demand.
Node security
Google Distributed Cloud deploys your workloads in VMware instances, which are
attached to your clusters as nodes. The following sections show you how to
use the node-level security features available to you.
Ubuntu
Google Distributed Cloud uses an optimized version of Ubuntu as the
operating system on which to run the Kubernetes control plane and nodes. Ubuntu
includes a rich set of modern security features , and
Google Distributed Cloud implements several security-enhancing features for
clusters, including:
Images are preconfigured to meet PCI DSS, NIST Baseline High, and DoD
Cloud Computing SRG Impact Level 2 standards.
Optimized
package set.
Google Cloud-tailored
Linux kernel .
Optional
automatic OS security updates .
Limited user accounts and disabled root login.
Additional security guides are available for Ubuntu, such as:
CIS Benchmark
DISA STIG
FIPS 140-2
Node upgrades
You should upgrade your nodes on a regular basis. From time to time, security
issues in the container runtime, Kubernetes itself, or the node operating system
might require you to upgrade your nodes more urgently. When you upgrade your
cluster, each node's software is upgraded to their latest versions.
Securing your workloads
Kubernetes allows users to quickly provision, scale, and update container-based
workloads. This section describes tactics that administrators and users can use
to limit the ability of the running containers to affect other containers in the
cluster, the hosts on which they run, and the Google Cloud services
enabled in their project.
Limiting Pod container process privileges
Limiting the privileges of containerized processes is important for the overall
security of your cluster. Kubernetes Engine allows you to set security-related
options via the Security Context on both Pods and containers.
These settings allow you to change the security settings of your processes such
as:
User and group to run as.
Available Linux capabilities.
Privilege escalation.
The default node operating system, Ubuntu, applies the default Docker AppArmor
security policies to all containers started by Kubernetes. You can view the
profile's template on GitHub . Among other things, the profile denies the
following abilities to containers:
Writing to files directly in a process ID directory (/proc/).
Writing to files that are not in /proc/.
Writing to files in /proc/sys other than /proc/sys/kernel/shm*.
Mounting filesystems.
Audit logging
Kubernetes Audit logging provides a way for administrators to retain, query, process, and
alert on events that occur in your Google Distributed Cloud environments.
Administrators can use the logged information to do forensic analysis, real-time
alerting, or for cataloging how a fleet of Kubernetes Engine clusters are being
used and by whom.
By default, Google Distributed Cloud logs admin activity. You can optionally
also log data access events, depending on the types of operations you are
interested in inspecting.
The Connect agent only talks to the local API server running
on-premises, and each cluster should have its own set of audit logs. All actions
that users perform from the UI through Connect are logged by that
cluster.
Encryption
If your clusters and workloads securely connect to
Google Cloud services through Cloud VPN , you can use Cloud Key Management Service
(Cloud KMS) for key management. Cloud KMS is a cloud-hosted
key management service that lets you manage
cryptographic keys for your services. You can generate, use, rotate, and destroy
AES256, RSA 2048, RSA 3072, RSA 4096, EC P256, and EC P384 cryptographic keys.
Cloud KMS is integrated with Identity and Access Management (IAM) and Cloud Audit
Logging so that you can manage permissions on individual keys and monitor how
these are used. Use Cloud KMS to protect Secrets and other sensitive data that
you need to store. Otherwise, you can choose to use one of the following
alternatives:
Kubernetes Secrets
Hashicorp Vault
Thales Luna network HSM
Google Cloud Hardware Security Module (HSM)
Kubernetes Secrets
Kubernetes Secrets resources store sensitive data, such as passwords, OAuth
tokens, and SSH keys, in your clusters. Storing sensitive data in Secrets is
more secure than storing them in plaintext ConfigMaps or in Pod
specifications. Using Secrets gives you control over how sensitive data is used,
and reduces the risk of exposing the data to unauthorized users.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
