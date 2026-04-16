---
title: "Control plane security \_|\_ GKE security \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/access-control
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security
  title: "Control plane security \_|\_ GKE security \_|\_ Google Cloud Documentation"
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
Control plane security
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This document describes how Google Kubernetes Engine (GKE) helps secure your cluster
control plane components. This document assumes that you know about the
following:
GKE cluster architecture
This document is for
security specialists
who want to understand how Google manages GKE
control plane components and the security measures in place to effectively
assess risk and ensure the security of your GKE deployments.
GKE includes built-in security features, such as a
security-hardened OS, robust architecture and isolation, secure control plane
access, security for the etcd- or Spanner-based cluster state
database, certificate authority and cluster trust, and vulnerability and patch
management.
Under the
Shared Responsibility Model ,
Google manages the GKE control plane components for you. The
control plane includes the Kubernetes API server, Kubernetes API object storage,
and other controllers. Google is responsible for securing the control plane,
though you might be able to configure certain options based on your
requirements. You are responsible for securing your nodes, containers, and Pods.
Hardened operating system
GKE control plane components run on
Container-Optimized OS ,
which is a security-hardened operating system designed by Google. For a detailed
description of the security features built into Container-Optimized OS,
see the Container-Optimized OS security overview .
Architecture and isolation
In a GKE cluster, the control plane components run on
Compute Engine instances owned by Google, in a Google-managed project. Each
instance runs these components for only one cluster.
For details about how cluster components authenticate to each other, see
Cluster trust .
Control plane access to your project
GKE uses a
service agent
named the Kubernetes Engine Service Agent to actuate cluster resources on your
behalf such as nodes, disks, and load balancers. The service account is
automatically granted the
Kubernetes Engine Service Agent role
( roles/container.serviceAgent ) on your project.
The Kubernetes Engine Service Agent has the following email address:
service- PROJECT_NUMBER @container-engine-robot.iam.gserviceaccount.com
In this email address, PROJECT_NUMBER is your
project number .
Administrative access to the cluster
SSH sessions by Google Site Reliability Engineers are audit logged through
Google's internal audit infrastructure, which is available for forensics and
security response. For more information,
see Administrative access
in the Google Security Whitepaper.
Cluster state database security
In Google Cloud, customer content is
encrypted at the file system layer by default .
This encryption includes the infrastructure that hosts the etcd- or
Spanner-based database that stores the state of Kubernetes API
objects in your cluster. For more information about the cluster state
database, see
GKE cluster architecture .
The cluster state database stores the configuration of every Kubernetes API
object in your cluster as key-value pairs. GKE uses specific
TCP ports on control plane VMs for the following types of communication with the
cluster state database:
etcd API clients : GKE serves the etcd API on every control
plane VM. etcd API clients in the control plane, like the Kubernetes API
server, use one of the following ports:
Port 2379 : this port is used when GKE stores the cluster
state in etcd database instances that run in each control plane VM.
Port 3379 : this port is used when GKE stores the cluster
state in a Spanner database that's separate from the control
plane.
The port that etcd API clients use is bound to the local loopback network
interface and is only accessible from the control plane VM that is
running the Kubernetes API server.
etcd database instances : if the control plane VMs run etcd database
instances, the etcd API servers on each VM use port 2380 to communicate
with each other. Traffic on port 2380 between etcd database instances on
multiple control plane VMs (such as in regional clusters) is encrypted by
mutual TLS . With
mutual TLS, each server must prove its identity to the other.
Port 2380 isn't used in clusters that store the cluster state in a
Spanner database because the database doesn't run in the
control plane VMs.
Certificate authority and cluster trust
Each cluster has its own
root certificate authority (CA) .
An internal Google service manages root keys for this CA. Root keys for this CA
are distributed to the metadata of the VMs that run the Kubernetes API server.
Communication between nodes and the Kubernetes API server is protected by TLS.
Each cluster also has its own CA for the etcd API and, if the cluster runs
etcd database instances, for traffic between etcd instances. For more
information, see Cluster trust .
Vulnerability and patch management
GKE adheres to Google standards for testing, qualifying, and
gradually rolling out changes to the control plane. This minimizes the risk of a
control plane component becoming unavailable. GKE adheres to
a service level agreement
that defines many aspects of availability.
GKE control plane components are managed by a team of Google
site reliability engineers, and are kept up to date with the latest security
patches. This includes patches to the host operating system, Kubernetes
components, and containers running on the control plane VMs.
GKE applies new kernel, OS, and Kubernetes-level fixes
promptly to control plane VMs. When these contain fixes for known
vulnerabilities, additional information is available in the
GKE security bulletins .
GKE scans all Kubernetes system and
GKE-specific containers for vulnerabilities using
Artifact Analysis ,
and keeps the containers patched, benefitting the whole Kubernetes ecosystem.
Google engineers participate in finding, fixing, and disclosing Kubernetes
security bugs. Google also pays external security researchers, through the
Google-wide vulnerability reward program ,
to look for security bugs. In some cases, such as the
dnsmasq vulnerability
in October 2017, GKE was able to patch all running
clusters before the vulnerability became public.
What you can see
The security features discussed in the previous sections are managed by Google.
This section and the What you can configure section
describe security features that you can monitor and configure.
Audit logs : audit logging
is enabled by default. This provides a detailed record, available in
Google Cloud Observability, of calls made to the Kubernetes API server. You can view the log
entries in the Logs Explorer in the
Google Cloud console. You can also use BigQuery to view and analyze these
logs.
Control plane VM image integrity : GKE adds detailed logs
for node VM creation and boot events to Cloud Logging. Additionally, we
publish SLSA VSAs on GitHub that correspond to control plane and worker node
machine images. You can verify that your VMs use OS images that have
corresponding VSAs and verify the boot integrity of each control plane VM.
To perform VM integrity verification, see
Verify GKE control plane VM integrity .
What you can configure
While GKE manages most of the control plane for you, you can
control the following:
Access to the control plane : the control plane has two kinds of endpoints for cluster access:
DNS-based endpoint
IP-based endpoints
By default, the Kubernetes API server uses an external IP address. You can protect
the Kubernetes API server by enabling a DNS-based endpoint for access to the
control plane. You can control who can access the DNS endpoint with
VPC Service Controls which lets you define one security parameter for all Google
APIs in your project. If using IP-based endpoints for control plane access, then
we recommend you use authorized networks and disable access on the control plane
external endpoint. For more information on network isolation, see About
customizing network
isolation .
Authentication : you can handle cluster authentication in
GKE by using IAM as the identity provider. For
enhanced authentication security, basic authentication and client certificate
issuance are disabled by default.
Credential rotation : rotate your cluster certificate authority (CA) and
TLS certificates on a regular basis by performing a credential rotation .
GKE also rotates the IP address of your Kubernetes API server
during this process. For more information, see
credential rotation .
Additionally, if your organization has strict compliance or policy requirements
related to the control plane, GKE control plane authority is a set of
features that provides you with enhanced visibility and control over specific
aspects of the control plane, including the following:
Run your own CAs and keys for identity issuance using Cloud KMS and
CA Service.
Encrypt etcd and control plane boot disks using your own keys in
Cloud KMS.
For details about why you'd use these features and for all of the capabilities
that are available, see
About GKE control plane authority .
What's next
Security overview
Container-Optimized OS security overview
Hardening your cluster's security
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
