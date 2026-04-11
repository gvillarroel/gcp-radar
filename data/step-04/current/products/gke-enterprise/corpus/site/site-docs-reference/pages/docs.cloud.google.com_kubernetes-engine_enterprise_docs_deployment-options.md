---
title: "GKE deployment options \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/deployment-options
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/version-and-upgrade-support
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/deployment-options
  title: "GKE deployment options \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Send feedback
GKE deployment options
Stay organized with collections
Save and categorize content based on your preferences.
This page shows the Google Cloud features that
are available on each of the following environments:
Google Kubernetes Engine (GKE) on Google Cloud
Google Distributed Cloud (GKE on-premises):
On VMware
On bare metal
Google Distributed Cloud connected deployments
GKE Multi-Cloud:
GKE on AWS
GKE on Azure
GKE attached clusters ,
which are third-party Kubernetes clusters registered to your
fleet .
This page is for Operators who define IT solutions and system
architecture in accordance with company strategy in coordination with key
stakeholders. To learn more about common roles and example tasks that we
reference in Google Cloud content, see Common GKE
user roles and tasks .
Enable GKE and related features
This section describes how to enable the features that are described on
this page.
Enable GKE
To enable GKE, enable the GKE API.
Enable GKE API
Enabling this API gives you access to the GKE, which includes
the following features:
Config Sync
Policy Controller
Config Controller
Migrate to Containers
GKE Identity Service
Cloud Logging and Cloud Monitoring for GKE system components
Security posture dashboard
Node to node encryption
FQDN network policies
Enable related products and features
To use the following products and features with GKE, you must
enable each of these features individually. For more information, see the
following links.
Cloud Service Mesh
Binary Authorization
Multi Cluster Ingress
See the following pricing guides for detailed information about how these
products and features are billed.
Cloud Service Mesh
Binary Authorization
Multi Cluster Ingress
Features available on GKE clusters on Google Cloud
To use some features, you must register the cluster to a fleet .
You can see which features require fleets in the following table.
A small number of features aren't supported on
Autopilot
clusters . These are also
shown in the table.
Feature
Available on GKE standard clusters
Available on Autopilot clusters
Available without fleet membership
Config Sync
Policy Controller
Config Controller
Cloud Service Mesh in-cluster
Managed Cloud Service Mesh
Knative serving
Migrate to Containers
GKE Identity Service
Binary Authorization
Multi Cluster Ingress
Cloud Logging and Cloud Monitoring for
GKE system components
Advanced security posture and compliance monitoring
Node to node encryption
FQDN network policies
Features available on clusters outside of Google Cloud
The following tables show which key Google Cloud and
GKE features are available on clusters outside of
Google Cloud.
For more information about which versions of the features
are supported on each environment, see the version support
matrix .
Plugins and load balancers
GKE clusters outside of Google Cloud use a
combination of built-in GKE capabilities along with
platform-native capabilities.
Feature
GDC (VMware)
GDC (bare metal)
GKE on AWS
GKE on Azure
Attached clusters
GDC (connected)
Network plugin
Container storage interface (CSI) & hybrid storage
Bundled L4 load balancer
Platform-native load balancers
N/A
N/A
N/A
Operations and management
Feature
GDC (VMware)
GDC (bare metal)
GKE on AWS
GKE on Azure
Attached clusters
GDC (connected)
GKE dashboard in the Google Cloud console
Connect
Gateway
Cloud Logging and
Cloud Monitoring
Prometheus/Grafana
Security and Identity
Feature
GDC (VMware)
GDC (bare metal)
GKE on AWS
GKE on Azure
Attached clusters
GDC (connected)
GKE Identity Service
Fleet workload identity
Cloud Audit Logs
Binary Authorization
Service management
Feature
GDC (VMware)
GDC (bare metal)
GKE on AWS
GKE on Azure
Attached clusters
GDC (connected)
Cloud Service Mesh in-cluster
*
Managed
Cloud Service Mesh
Service
dashboards in the Google Cloud console
*
Cloud Service Mesh certificate authority
Cloud Service Mesh integration with Certificate Authority Service
* For the list of attached clusters that
Cloud Service Mesh supports, see
Supported platforms .
Configuration management
Feature
GDC (VMware)
GDC (bare metal)
GKE on AWS
GKE on Azure
Attached clusters
GDC (connected)
Policy Controller
*
Config Sync
Config Controller
* To install Policy Controller, AKS clusters must not
have the Azure Policy add-on.
Application deployment
Feature
GDC (VMware)
GDC (bare metal)
GKE on AWS
GKE on Azure
Attached clusters
GDC (connected)
Knative serving
Google Cloud Marketplace
Application migration
Feature
GDC (VMware)
GDC (bare metal)
GKE on AWS
GKE on Azure
Attached clusters
GDC (connected)
Migrate to Containers
VM management
Feature
GDC (VMware)
GDC (bare metal)
GKE on AWS
GKE on Azure
Attached clusters
GDC (connected)
VM Runtime on Google Distributed Cloud
What's next
Version and upgrade support
Managed Cloud Service Mesh supported features
In-cluster Cloud Service Mesh supported features
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
