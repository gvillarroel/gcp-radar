---
title: "Compatible services \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kms/docs/compatible-services
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/compatible-services
  title: "Compatible services \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Compatible services | Cloud Key Management Service | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Cloud KMS
Start free
Overview
Guides
Reference
Samples
Resources
More
Technology areas
More
Overview
Guides
Reference
Samples
Resources
Cross-product tools
More
Console
Discover
Product overview
Protection levels
Overview
Cloud HSM overview
Single-tenant Cloud HSM overview
Cloud EKM overview
Reference architectures for Cloud EKM
CMEK overview
Cloud KMS with Autokey
Compatible services
Cloud HSM for Google Workspace
Locations
Get started
Cloud KMS resources
Key purposes and algorithms
Separation of duties
Create and use encryption keys
CMEK best practices
Create and manage Single-tenant Cloud HSM instances
Create keys
Automate key creation
Autokey overview
Enable Autokey
Create a resource with Autokey
Create a key ring
Create a key
Import keys
About key import
Key wrapping
Format a key for import
Manually wrap a key for import
Configure OpenSSL for manual key wrapping
Wrap a key using OpenSSL
Set up automatic key wrapping
Import a key version
Verify an imported key version
Create external keys
Set up Cloud EKM over the internet
Create an EKM connection
Create an external Key
Control access
Manage IAM roles
Use Organization Policy Contraints
Create custom organization policy constraints for Cloud KMS
CMEK organization policies
Control key destruction
Secure data using keys
Key APIs
Use gRPC
Access the API
Sort and filter API list results
Generate random bytes
Use Cloud KMS keys in Google Cloud
Encrypt and decrypt data
Envelope encryption
Additional authenticated data
Asymmetric encryption
Encrypt and decrypt data with a symmetric key
Encrypt and decrypt data with a raw symmetric key
Encrypt and decrypt data with an asymmetric key
Verify end-to-end data integrity
Encrypt application data
Set up client-side encryption with Tink
Onboard to Cloud HSM for Google Workspace
Sign and validate data
Digital signatures
Create and validate signatures
MAC signatures
Create and validate MAC signatures
Share secrets using key encapsulation mechanisms
Key encapsulation mechanisms
Encapsulate and decapsulate using KEMs
Manage keys
Resource consistency
Key version states
View keys and key details
View keys by project
View encryption metrics
View key usage
Get a Cloud KMS resource ID
Retrieve a public key
Attest a Cloud HSM key
Label a key
Create and manage tags
Enable and disable a key version
Destroy and restore a key version
Delete Cloud KMS resources
Rotate keys
About key rotation
Rotate a key
Re-encrypt data
Update external key reference
Monitor
Using Cloud Audit Logging
Cloud KMS Inventory Service audit logging
Monitor state changes
Monitor and adjust quotas
Use Cloud Monitoring
Monitor EKM usage
Troubleshoot
Troubleshoot failed imports
Troubleshoot EKM via VPC errors
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
CMEK integrations
CMEK-compliant services
Other integrations with Cloud KMS
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Compatible services
Stay organized with collections
Save and categorize content based on your preferences.
On this page
CMEK integrations
CMEK-compliant services
Other integrations with Cloud KMS
This page provides a list of Google Cloud services that offer integrations with
Cloud KMS. These services generally fall under one of the following
categories:
A Customer-managed encryption key (CMEK) integration
allows you to encrypt the data at rest in that service using a
Cloud KMS key that you own and manage. Data protected with a
CMEK key cannot be decrypted without access to that key.
A CMEK-compliant service either does not store data, or
only stores data for a short period of time, such as during batch processing.
Such data is encrypted using an ephemeral key that only exists in memory and
is never written to disk. When the data is no longer needed, the ephemeral key
is flushed from memory, and the data can't ever be accessed again. The output
of a CMEK-compliant service might be stored in a service that is integrated
with CMEK, such as Cloud Storage.
Your applications can use Cloud KMS in other ways . For
example, you can directly encrypt application data before transmitting or
storing it.
To learn more about how data in Google Cloud is protected at rest and
how customer-managed encryption keys (CMEK) work, see
Customer-managed encryption keys (CMEK) .
CMEK integrations
The following table lists services that integrate with Cloud KMS.
All services in this list support software and hardware (HSM) keys.
Products that integrate with Cloud KMS when using external
Cloud EKM keys are indicated under EKM supported .
Show only EKM compatible services
Service
Protected with CMEK
EKM supported
Topic
Agent Assist
Data at rest
Yes
Customer-managed encryption keys (CMEK)
AlloyDB for PostgreSQL
Data written to databases
Yes
Using customer-managed encryption keys
Anti Money Laundering AI
Data in AML AI instance resources
No
Encrypt data using customer-managed encryption keys (CMEK)
Apigee
Data at rest
No
Introduction to CMEK
Apigee API hub
Data at rest
Yes
Encryption
Application Integration
Data at rest
Yes
Using customer-managed encryption keys
Artifact Registry
Data in repositories
Yes
Enabling customer-managed encryption keys
Backup and DR Service
Backup Vault Container
Yes
Managing Backup Vault encryption
Backup and DR Service
Backups at rest
Yes
Managing backup encryption
Backup for GKE
Data in Backup for GKE
Yes
About Backup for GKE CMEK encryption
BigQuery
Data in BigQuery
Yes
Protecting data with Cloud KMS keys
Bigtable
Data at rest
Yes
Customer-managed encryption keys (CMEK)
Cloud Composer
Environment data
Yes
Using customer-managed encryption keys
Cloud Data Fusion
Environment data
Yes
Using customer-managed encryption keys
Cloud Healthcare API
Cloud Healthcare API datasets
Yes
Use customer-managed encryption keys (CMEK)
Cloud Logging
Data in the Log Router
Yes
Manage the keys that protect Log Router data
Cloud Logging
Data in Logging storage
Yes
Manage the keys that protect Logging storage data
Cloud Run
Container image
Yes
Using customer-managed encryption keys with Cloud Run
Cloud Run functions
Data in Cloud Run functions
Yes
Using customer-managed encryption keys
Cloud SQL
Data written to databases
Yes
Using customer-managed encryption keys
Cloud Storage
Data in storage buckets
Yes
Using customer-managed encryption keys
Cloud Tasks
Task body and header at rest
Yes
Use customer-managed encryption keys
Cloud TPU
Persistent disks
No
Encrypt a TPU VM boot disk with a customer-managed encryption key (CMEK)
Cloud Workstations
Data on VM disks
Yes
Encrypt workstation resources
Colab Enterprise
Runtimes and notebook files
No
Use customer-managed encryption keys
Compute Engine
Persistent disks
Yes
Protecting resources with Cloud KMS keys
Compute Engine
Snapshots
Yes
Protecting resources with Cloud KMS keys
Compute Engine
Custom images
Yes
Protecting resources with Cloud KMS keys
Compute Engine
Machine images
Yes
Protecting resources with Cloud KMS keys
Conversational Analytics API ( Preview )
DataAgent resources (context, instructions, examples)
No
Protect a DataAgent resource with CMEK
Conversational Analytics API ( Preview )
Conversation resources (messages, state history)
No
Protect a Conversation resource with CMEK
Customer Experience Insights
Data at rest
Yes
Customer-managed encryption keys (CMEK)
Database Migration Service Heterogeneous Migrations
Oracle to PostgreSQL data at rest
Yes
Use customer-managed encryption keys (CMEK) for continuous migrations
Database Migration Service Homogeneous Migrations
MySQL migrations - data written to databases
Yes
Using customer-managed encryption keys (CMEK)
Database Migration Service Homogeneous Migrations
PostgreSQL migrations - Data written to databases
Yes
Using customer-managed encryption keys (CMEK)
Database Migration Service Homogeneous Migrations
PostgreSQL to AlloyDB migrations - Data written to databases
Yes
About CMEK
Database Migration Service Homogeneous Migrations
SQL Server migrations - Data written to databases
Yes
About CMEK
Dataflow
Pipeline state data
Yes
Using customer-managed encryption keys
Dataform
Data in repositories
Yes
Use customer-managed encryption keys
Dataplex Universal Catalog
Data at rest
Yes
Customer-managed encryption keys
Dataproc
Dataproc clusters data on VM disks
Yes
Customer-managed encryption keys
Dataproc
Dataproc serverless data on VM disks
Yes
Customer-managed encryption keys
Dataproc Metastore
Data at rest
Yes
Using customer-managed encryption keys
Datastream
Data in transit
Yes
Using customer-managed encryption keys (CMEK)
Dialogflow CX
Data at rest
Yes
Customer-managed encryption keys (CMEK)
Document AI
Data at rest and data in use
Yes
Customer-managed encryption keys (CMEK)
Eventarc Advanced ( Preview )
Data at rest
Yes
Use customer-managed encryption keys (CMEK)
Eventarc Standard
Data at rest
Yes
Use customer-managed encryption keys (CMEK)
Filestore
Data at rest
Yes
Encrypt data with customer-managed encryption keys
Firestore
Data at rest
Yes
Use customer-managed encryption keys (CMEK)
Gemini Code Assist
Data at rest
No
Encrypt data with customer-managed encryption keys
Gemini Enterprise - NotebookLM Enterprise
Data at rest
No
Customer-managed encryption keys
Gemini Enterprise Enterprise
Data at rest
No
Customer-managed encryption keys
Google Cloud Managed Lustre
Data at rest
Yes
Use customer-managed encryption keys (CMEK)
Google Cloud Managed Service for Apache Kafka
Data associated with topics
Yes
Configure message encryption
Google Cloud NetApp Volumes
Data at rest
Yes
Create a CMEK policy
Google Distributed Cloud
Data on Edge nodes
Yes
Local storage security
Google Kubernetes Engine
Data on VM disks
Yes
Using customer-managed encryption keys (CMEK)
Google Kubernetes Engine
Application-layer secrets
Yes
Application-layer Secrets encryption
Integration Connectors
Data at rest
Yes
Encryption methods
Looker (Google Cloud core)
Data at rest
Yes
Enable CMEK for Looker (Google Cloud core)
Memorystore for Redis
Data at rest
Yes
Customer-managed encryption keys (CMEK)
Memorystore for Redis Cluster
Data at rest
Yes
Use customer-managed encryption keys (CMEK)
Memorystore for Valkey
Data at rest
Yes
Use customer-managed encryption keys (CMEK)
Migrate to Virtual Machines
Data migrated from VMware, AWS, and Azure VM sources
Yes
Use CMEK to encrypt data stored during a migration
Migrate to Virtual Machines
Data migrated from disk and machine image sources
Yes
Use CMEK to encrypt data on target disks and machine images
Parameter Manager
Parameter version payloads
Yes
Enable customer-managed encryption keys for Parameter Manager
Pub/Sub
Data associated with topics
Yes
Configuring message encryption
Secret Manager
Secret payloads
Yes
Enable Customer-Managed Encryption Keys for Secret Manager
Secure Source Manager
Instances
Yes
Encrypt data with customer-managed encryption keys
Security Command Center
Data at rest
Yes
Enable CMEK for Security Command Center
Spanner
Data at rest
Yes
Customer-managed encryption keys (CMEK)
Speech-to-Text
Data at rest
Yes
Using customer-managed encryption keys
Vertex AI
Data associated with resources
Yes
Using customer-managed encryption keys
Vertex AI Search
Data at rest
No
Customer-managed encryption keys
Vertex AI Workbench instances
Data on VM disks
Yes
Customer-managed encryption keys
Vertex AI Workbench managed notebooks ( Deprecated )
User data at rest
No
Customer-managed encryption keys
Vertex AI Workbench user-managed notebooks ( Deprecated )
Data on VM disks
No
Customer-managed encryption keys
Workflows
Data at rest
Yes
Use customer-managed encryption keys (CMEK)
Workload Manager
Custom rule type evaluation data
Yes
Enable customer-managed encryption keys for evaluations
CMEK-compliant services
The following table lists services that do not use customer-managed encryption
keys (CMEKs) because they do not store data long term. For more information on
why these services are considered CMEK compliant, see
CMEK compliance .
Service
Topic
API Gateway
CMEK compliance in API Gateway
Cloud Build
CMEK compliance in Cloud Build
Cloud Trace
CMEK compliance in Cloud Trace
Cloud Vision
CMEK compliance in Vision API
Container Registry
Using a storage bucket protected with CMEK
Storage Transfer Service
Customer-managed encryption keys
Other integrations with Cloud KMS
These pages discuss other ways to use Cloud KMS with other
Google Cloud services.
Product
Topic
Any service
Encrypt application data before transmitting or storing it
Cloud Build
Encrypt resources before adding them to a build
Sensitive Data Protection
Create a wrapped key
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-07 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
