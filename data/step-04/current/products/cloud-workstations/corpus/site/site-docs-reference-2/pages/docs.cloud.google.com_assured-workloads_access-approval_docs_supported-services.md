---
title: "Supported services \_|\_ Access Approval \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services
  title: "Supported services \_|\_ Access Approval \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud provider access management
Access Approval
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Supported services
The page lists the Google Cloud services that support Access Approval.
GA indicates that approval requests are generally available for a service.
Preview indicates that approval requests are supported, but might be changed
in backward-incompatible ways and are not subject to any SLA or deprecation
policy.
Supported Google Cloud services
Access Approval supports the following Google Cloud services:
Supported service
Launch stage
Notes
Access Context Manager
GA
None
Access Transparency
GA
None
AlloyDB for PostgreSQL
GA
None
Apigee
GA
The following Apigee features are not supported by Access Approval:
Apigee portal
Features in the Preview launch stage
Additionally, Apigee Hybrid customers must
upgrade to the latest version
to get full Access Approval support.
App Engine
GA
Cloud Storage and Cloud SQL are the only
compatible storage backends for App Engine
supported by Access Approval.
App Hub
GA
None
Application Integration
GA
None
Artifact Analysis
GA
None
Artifact Registry
GA
None
Automotive AI Agent
GA
None
Backup for GKE
GA
None
Backup and DR Service
GA
Workloads that depend on a management console and backup/recovery appliances are not supported by Access Approval.
BigQuery
GA
Some information about your queries, tables, and datasets might not generate an
Access Approval request when accessed by Cloud Customer Care. Viewing query text, table
names, dataset names, and dataset access control lists might not generate
Access Approval requests; this access pathway gives read-only access. Viewing query
results and table or dataset data still generates Access Transparency logs.
Bigtable
GA
None
Certificate Authority Service
GA
None
Certificate Manager
GA
None
Chrome Enterprise Premium
GA
Access Approval supports
Chrome Enterprise Premium secure gateway .
Cloud Asset Inventory
GA
None
Cloud Billing
Preview
None
Cloud Build
GA
None
Cloud Composer
GA
None
Cloud Data Fusion
GA
None
Cloud Deploy
GA
None
Cloud DNS
GA
None
Cloud Domains
GA
None
Cloud External Key Manager (Cloud EKM)
GA
None
Cloud Run functions
GA
None
Cloud Healthcare API
GA
None
Cloud Interconnect
GA
None
Cloud Key Management Service (Cloud KMS)
GA
None
Cloud Logging
GA
None
Cloud NAT
GA
None
Cloud OS Login API
GA
None
Cloud Run
GA
None
Cloud Scheduler
GA
None
Cloud SQL
GA
None
Cloud Service Mesh
GA
None
Cloud Storage
GA
None
Cloud Tasks
GA
None
Cloud TPU
GA
None
Cloud Trace
GA
None
Cloud VPN
GA
None
Cloud Workstations
GA
None
Compute Engine
GA
None
Connect Agent
GA
None
Dialogflow CX
GA
None
Database Center
GA
None
Dataflow
GA
None
Dataform
GA
None
Knowledge Catalog
GA
None
Managed Service for Apache Spark
GA
None
Google Distributed Cloud
GA
None
Document AI
GA
None
Eventarc
GA
None
External passthrough Network Load Balancer
GA
None
Filestore
GA
None
Firebase Data Connect
GA
None
Firebase Security Rules
GA
None
Firestore
GA
None
Flow Analyzer
GA
None
Gemini Enterprise
GA
None
GKE Connect
GA
None
GKE Hub
GA
None
GKE Hub API
GA
None
GKE Identity Service
GA
None
Google Cloud Armor
GA
Access Approval is available for regional Google Cloud Armor security policies. Global
Google Cloud Armor security policies won't generate Access Approval requests.
Google Cloud Managed Lustre
GA
None
Google Cloud Managed Service for Apache Kafka
GA
None
Google Cloud NetApp Volumes
GA
None
Google Security Operations SIEM
GA
Access Approval is available by request. To request this feature, contact
Cloud Customer Care with the name of the product to enable and request that
Access Approval be enabled for that product. To confirm if enabled, open
Access Approval settings, and check the list of products shown.
Google Security Operations SOAR
GA
Access Approval is available by request. To request this feature, contact
Cloud Customer Care with the name of the product to enable and request that
Access Approval be enabled for that product. To confirm if enabled, open
Access Approval settings, and check the list of products shown.
Cloud HSM
GA
None
Identity and Access Management (IAM)
GA
Access Approval supports System for Cross-domain Identity Management (SCIM) through Workforce Identity Federation.
Identity-Aware Proxy
GA
None
Image streaming
GA
None
Infrastructure Manager
GA
None
Integration Connectors
GA
None
Internal passthrough Network Load Balancer
GA
None
Google Kubernetes Engine
GA
None
Looker (Google Cloud core)
GA
None
Looker Studio
GA
None
Memorystore for Redis
GA
None
Memorystore for Redis Cluster
GA
None
Memorystore for Valkey
GA
None
Model Armor
GA
None
Cloud Monitoring
GA
None
NCC Gateway
GA
None
Network Connectivity Center
GA
None
Org Lifecycle API
GA
None
Organization Policy Service
GA
None
Parameter Manager
GA
None
Persistent Disk
GA
None
Pub/Sub
GA
None
regional external Application Load Balancer
GA
None
regional external proxy Network Load Balancer
GA
None
regional internal Application Load Balancer
GA
None
regional internal proxy Network Load Balancer
GA
None
Resource Manager
GA
None
Secret Manager
GA
None
Secure Source Manager
GA
None
Secure Web Proxy
GA
None
Security Command Center
GA
Access Approval supports the Security Command Center Premium tier.
Sensitive Data Protection
GA
None
Serverless VPC Access
GA
None
Spanner
GA
None
Speaker ID
GA
None
Speech-to-Text
GA
None
Storage Intelligence
GA
None
Storage Transfer Service
GA
None
Text-to-Speech
GA
None
Cloud Service Mesh
GA
None
Unified Maintenance
GA
None
Vertex AI
GA
For more information, see the Limitations of Access Transparency in Vertex AI .
Currently supported:
Online prediction
Batch prediction
Vertex AI Model Registry
AI Platform Training
AI Platform Pipelines
Vertex AI Model Monitoring
Vector Search
Vertex AI model tuning
Vertex AI Agent Engine
GA
None
Vertex AI Search
GA
None
Virtual Private Cloud (VPC)
GA
None
VM Manager
GA
None
Web Risk
GA
None
Workflows
GA
None
Workforce Identity Federation
GA
None
Workload Identity Federation
GA
None
What's next
Release notes
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
