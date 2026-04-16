---
title: "Services that support tags \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services
  title: "Services that support tags \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Resource Manager
Guides
Send feedback
Services that support tags
Stay organized with collections
Save and categorize content based on your preferences.
Tags let you create annotations for resources, and in some cases
conditionally allow or deny policies based on whether a resource has a specific
tag. The resources and policies used by each service use tags in different
ways. For more information about tags, see the
Tags overview .
Some services, such as Identity and Access Management (IAM), are policy engines that
support references by tags. If you can attach a tag to a service resource, and
the policy engine service supports that resource, you can then leverage
the conditional enforcement of policies to better control your resource
hierarchy. Each policy engine service lists the resources it supports in the
Policy engine services section.
Resources not listed as explicitly supported by policy engine services can't be
targeted directly for conditional enforcement of policies. Instead, the parent
project, folder, or organization resource should be tagged to provide
conditional control.
Review the appropriate section below when attaching tags to your service
resources. For more information, see
Creating and managing tags .
Policy engine services
The following services include policies that can include tags. Referencing tags
in these policies allows you to finely tune the way they operate on supported
resources in your Google Cloud resource hierarchy.
Google Cloud service
Resource types
Identity and Access Management (IAM)
Allow and deny policies
Organization Policy Service
Organization policies
Resources that support tags
Virtual Private Cloud (VPC)
Network firewall policies
VM instances
Secure Web Proxy instances
The following sections describe how you can use tags with policy engine
services.
Identity and Access Management
You can
conditionally grant IAM roles or
conditionally deny IAM permissions
based on whether a resource has a specific tag.
Resources inherit tag values from their parent
organization, folders, and project. As a result, you can use tags to manage
access to any Google Cloud resource.
For more information about using tags with IAM to help control
access to your Google Cloud resources, see
Tags and access control .
Organization Policy Service
You can use organization policies with tags to control how your organization
policy constraints are applied on certain resources. Organization policies can
be conditionally enforced by referencing tags attached to
supported resources .
For more information, see
Setting an organization policy with tags .
Virtual Private Cloud
You can use tags to define sources and targets in network firewall policies and
regional firewall policies. You can also attach tags to Compute Engine VM
instances to represent different functions in a network. For more information,
see Resource Manager tags for firewalls .
You can attach tags to the following VPC resources for
use in IAM policies:
Networks
Subnetworks
Routes
VPC firewall rules
Network firewall policies
Regional firewall policies
For more information, see
Create and manage tags for Virtual Private Cloud resources .
Supported service resources
You can attach tags to the following types of Google Cloud resources:
Google Cloud service
Resource types
AlloyDB for PostgreSQL
Clusters
Backups
API Gateway
APIs
Gateways
API hub
APIs
API deployments
Artifact Registry
Repositories ( Preview )
BigQuery
Datasets
Tables
Views
Bigtable
Instances
Google Cloud Armor
Network Edge Security Services
Security Policies
Certificate Manager
Certificates
Certificate maps
Trust configs
Certificate issuance configurations
DNS authorizations
Certificate Authority Service
CA pools
Certificate templates
Cloud Billing
View resource-level tags in the Cloud Billing BigQuery export
Cloud Data Fusion
Instances ( Preview )
Cloud Deploy
Delivery pipelines ( Preview )
Targets ( Preview )
Cloud Domains
Registrations
Cloud Key Management Service (Cloud KMS)
Key rings
Cloud Load Balancing
Backend buckets
Backend services
Forwarding rules
Health checks
Network endpoint groups
SSL policies
SSL certificates
Target GRPC proxies
Target HTTP(S) proxies
Target instances
Target pools
Target SSL proxies
Target TCP proxies
URL maps
Zonal instance groups
Cloud Logging
Log buckets
Cloud Router
Routers
Cloud Interconnect
Interconnects
Interconnect attachments
Cloud VPN
External VPN gateways
VPN gateways
VPN tunnels
Target VPN gateways
Cloud Run
Services
Jobs ( Preview )
Cloud SQL
Instances
Cloud Storage
Buckets
Cloud Workstations
Clusters
Transcoder API
Job
JobTemplate
Compute Engine
Images
Instances
Regional persistent disks
Snapshots
Zonal persistent disks
Managed Service for Apache Spark
Clusters
Dataproc Metastore
Services
Federations
Datastore
Databases
Datastream
Private connectivity configurations
Connection profiles
Streams
Cloud DNS
Policies
Filestore
Backups
Instances
Snapshots
Firestore
Databases
Google Distributed Cloud
BareMetalCluster
BareMetalAdminCluster
VMWareCluster
VMWareAdminCluster
Google Kubernetes Engine (GKE)
Clusters
Identity and Access Management
Custom roles
Service accounts
Managed Service for Microsoft Active Directory (Managed Microsoft AD)
Domains
Memorystore for Redis
Instances
Pub/Sub
Topics
Subscriptions
Snapshots
reCAPTCHA Enterprise
Key
Resource Manager
Organizations
Folders
Projects
Secret Manager
Secrets
Spanner
Instances
Google Cloud VMware Engine
Private Cloud
Private Connection
Networks
Network Peering
Network Policy
VPC
Networks
Subnetworks
Routes
VPC firewall rules
Workflows
Workflows
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
