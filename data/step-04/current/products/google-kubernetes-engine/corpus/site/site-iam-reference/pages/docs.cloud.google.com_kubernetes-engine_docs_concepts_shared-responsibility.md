---
title: "GKE shared responsibility \_|\_ GKE security \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/shared-responsibility
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/access-control
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/shared-responsibility
  title: "GKE shared responsibility \_|\_ GKE security \_|\_ Google Cloud Documentation"
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
GKE shared responsibility
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This document explains the shared security responsibilities for both Google and
Google Cloud customers. Running a business-critical application on Google Kubernetes Engine (GKE) requires
multiple parties to have different responsibilities. Although this document is not an exhaustive
list, this document can help you understand your responsibilities.
This document is for Security specialists
who define, govern and implement policies and procedures
to protect an organization's data from unauthorized access. To learn more about
common roles and example tasks that we reference in Google Cloud content, see
Common GKE user roles and tasks .
Google's responsibilities
Protecting the underlying infrastructure, including hardware, firmware,
kernel, OS, storage, network, and more. This includes
encrypting data at rest by default ,
providing
additional customer-managed disk encryption ,
encrypting data in transit ,
using
custom-designed hardware ,
laying
private network cables ,
protecting data centers from physical access, protecting the bootloader and
kernel against modification using
Shielded Nodes ,
and following secure software development practices.
Hardening
and
patching
the nodes' operating system, such as Container-Optimized OS or
Ubuntu. GKE promptly makes any patches to these images
available. If you have auto-upgrade enabled, or are using a
release channel ,
these updates are automatically deployed. This is the OS layer underneath
your container—it's not the same as the operating system running in your
containers.
Building and operating threat detection for container-specific threats
into the kernel with
Container Threat Detection
(priced separately with Security Command Center).
Hardening and
patching
Kubernetes node components. All GKE managed components are upgraded
automatically when you upgrade GKE node versions. This includes:
vTPM-backed trusted bootstrap mechanism for issuing kubelet TLS certificates
and auto-rotation of the certificates
Hardened kubelet configuration
following CIS benchmarks
GKE metadata server for
Workload identity
GKE's native
Container Network Interface plugin and Calico for NetworkPolicy
GKE Kubernetes storage integrations such as the
CSI driver
GKE
logging and monitoring agents
Hardening and
patching
the control plane. The control plane includes the control plane VM, API
server, scheduler, controller manager,
cluster CA, TLS certificate issuance and rotation, root-of-trust key material ,
IAM authenticator and authorizer, audit logging
configuration, etcd, and various other controllers. All of your control
plane components run on Google-operated Compute Engine instances. These
instances are single tenant, meaning each instance runs the control plane
and its components for only one customer.
Provide Google Cloud integrations for Connect,
Identity and Access Management, Cloud Audit Logs, Google Cloud Observability,
Cloud Key Management Service, Security Command Center, and others.
Restrict and log Google administrative access to customer clusters for
contractual support purposes with
Access Transparency .
Customer's responsibilities
Maintain your workloads, including your application code, build files,
container images, data, Role-based access control (RBAC)/IAM
policy, and containers and pods that you are running.
Rotate your clusters credentials .
Keep Standard node pools enrolled in
automatic upgrades .
In the following situations, manually upgrade your clusters and node pools
to remediate vulnerabilities within your organization's patching timelines:
Auto-upgrades are postponed because of factors like maintenance
policies.
You need to apply a patch before it becomes available in your selected
release channel. For more information, see
Run patch versions from a newer channel .
Monitor the cluster and applications and respond to any alerts and
incidents using technologies such as the security posture dashboard and Google Cloud Observability .
Provide Google with environmental details when requested for troubleshooting
purposes.
Ensure Logging and Monitoring are
enabled on clusters. If you don't enable Logging and
Monitoring, and if support personnel can't access those logs,
support is available on a best-effort basis .
What's next
Read the GKE
Security overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
