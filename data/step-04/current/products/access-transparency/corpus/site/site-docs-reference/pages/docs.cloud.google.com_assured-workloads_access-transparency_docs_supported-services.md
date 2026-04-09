---
title: "Supported services \_|\_ Access Transparency \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-transparency/docs/supported-services
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-transparency/docs/reading-logs
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-transparency/docs/supported-services
  title: "Supported services \_|\_ Access Transparency \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The names for some Assured Workload control packages are changing. For information about the name change, see Control package renaming notice .
Home
Documentation
Security
Cloud provider access management
Access Transparency
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Supported services
This page lists all the Google Cloud services that write Access Transparency logs.
GA indicates that a log type is generally available for a
service. Preview indicates that a log type is available, but might be changed in
backward-incompatible ways and is not subject to any SLA or deprecation policy.
If you want to enable Access Transparency logs, see
Enabling Access Transparency .
Supported Google Cloud services
Access Transparency supports the following Google Cloud services:
Supported service
Launch stage
Notes
Access Context Manager
GA
None
Access Transparency
GA
None
Agent Assist
GA
None
AlloyDB for PostgreSQL
GA
None
Anti Money Laundering AI
GA
None
Apigee
GA
The following Apigee features are not supported by Access Transparency:
Apigee portal
Features in the Preview launch stage
Additionally, Apigee Hybrid customers must
upgrade to the latest version
to get full Access Transparency support.
App Engine
GA
Cloud Storage and Cloud SQL are the only
compatible storage backends for App Engine
supported by Access Transparency.
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
Workloads that depend on a management console and backup/recovery appliances are not supported by Access Transparency.
BigQuery
GA
Some information about your queries, tables, and datasets might not generate an
Access Transparency log entry if viewed by Cloud Customer Care. Viewing query text, table names,
dataset names, and dataset access control lists might not generate Access Transparency log
entries; this access pathway gives read-only access. Viewing query results and table or dataset
data generates Access Transparency log entries.
Data in queries residing in
non-Google regions for BigQuery Omni does
not generate an Access Transparency log entry.
Gemini in BigQuery is not supported in Assured Workloads.
Access Transparency supports
BigQuery data preparation .
Bigtable
GA
None
BigQuery Data Transfer Service
GA
None
Binary Authorization
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
Access Transparency supports
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
Features within Cloud Healthcare API that are not yet generally available might not
generate Access Transparency logs. For more information, see the
Cloud Healthcare API documentation .
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
Cloud Router
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
Cloud Vision API
GA
None
Cloud Workstations
GA
None
Colab Enterprise
GA
None
Compute Engine
GA
None
Container Registry
Preview
None
Customer Experience Insights
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
Dataplex Universal Catalog
GA
None
Managed Service for Apache Spark
GA
None
Dialogflow CX
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
GKE Connect
GA
None
GKE Hub
GA
None
GKE Identity Service
GA
None
Google Cloud Armor
GA
Access Transparency logs are generated for regional Google Cloud Armor security policies. Global
Google Cloud Armor security policies won't generate logs.
Google Cloud Managed Lustre
GA
None
Google Cloud Managed Service for Apache Kafka
GA
None
Google Cloud NetApp Volumes
GA
None
Google Distributed Cloud
GA
None
Google Kubernetes Engine
GA
Access Transparency supports
Image streaming .
Google Security Operations SIEM
GA
None
Google Security Operations SOAR
GA
None
Cloud HSM
GA
None
Identity and Access Management (IAM)
GA
Access Transparency supports System for Cross-domain Identity Management (SCIM) through Workforce Identity Federation.
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
Jurisdictional Google Cloud console
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
Access Transparency supports the Security Command Center Premium tier.
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
Unified Maintenance
GA
None
Vertex AI
GA
Access to your data in Vertex AI by Google personnel isn't always logged. See
Limitations of Access Transparency in Vertex AI
for more information.
Vertex AI Agent Engine
GA
Vector Search
GA
(except for Vector Search 2.0) Access to your data in Vertex AI by Google personnel isn't always logged. See
Limitations of Access Transparency in Vertex AI
for more information.
Vertex AI Feature Store
GA
None
Vertex AI Search
GA
Access to your data in Vertex AI by Google personnel isn't always logged. See
Limitations of Access Transparency in Vertex AI
for more information.
Vertex AI Workbench instances
GA
None
Vertex AI Workbench managed notebooks
GA
None
Vertex AI Workbench user-managed notebooks
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
Support for Google Workspace
Several Google Workspace services such as Gmail, Google Docs, Google Calendar,
and Google Drive record the actions that Google personnel take when accessing
Customer Data.
Access Transparency logs help ensure that Google personnel access Customer Data with a
valid business justification. Access Transparency logs can also help security information
and event management (SIEM) tools identify data exfiltration and exposure to
external malicious actors targeting your Google Workspace resources. You
can use the Google Cloud console to access the Access Transparency logs that
Google Workspace services generate.
For more information about Access Transparency logs for Google Workspace,
including the list of Google Workspace services that support Access Transparency,
see Access Transparency: View logs on Google access to user content .
For information about viewing and understanding the Access Transparency logs
that Google Workspace services generate, see
Viewing Access Transparency logs for Google Workspace .
For information about the audit logs that Google Workspace services generate,
see Cloud Audit Logs for Google Workspace .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
