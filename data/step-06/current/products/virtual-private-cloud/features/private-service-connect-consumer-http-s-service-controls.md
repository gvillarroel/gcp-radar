---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:13.157Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect consumer HTTP(S) service controls"
feature_slug: "private-service-connect-consumer-http-s-service-controls"
latest_feature_date: "2021-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/release-notes"
  - "https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls"
  - "https://docs.cloud.google.com/vpc/docs/private-service-connect"
keywords:
  - "private"
  - "connect"
  - "consumer"
  - "http"
  - "controls"
  - "now"
  - "supports"
  - "using"
---

# Private Service Connect consumer HTTP(S) service controls

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect now supports using consumer HTTP(S) service controls to access supported regional service endpoints in Preview.

## Extended Definition

Private Service Connect now supports using consumer HTTP(S) service controls to access supported regional service endpoints in Preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/release-notes](https://docs.cloud.google.com/vpc/docs/release-notes)
- [https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls](https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls)
- [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)

## Supporting Pages

### VPC release notes \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/release-notes](https://docs.cloud.google.com/vpc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- November 17, 2022 Feature Preview : Connectivity to Private Service Connect endpoints used to access a managed service is supported over VLAN attachments for Cloud Interconnect November 16, 2022 Feature Preview: Private Service Connect endpoints with consumer HTTP(S) controls now support accessing regional Google APIs and managed services using the following load balancers: Regional internal HTTP(S) load balancer Regional external HTTP(S) load balancer November 08, 2022 Feature Preview : You use the private.googleapis.com and restricted.googleapis.com VIPs to access Google APIs and services using IPv6 addresses.
- August 23, 2021 Feature Using Private Service Connect with consumer HTTP(S) service controls to access supported regional service endpoints is now available in Preview .
- About accessing published services through endpoints About accessing Google APIs through endpoints About published services DNS configuration for published services April 05, 2023 Feature General Availability: Private Service Connect endpoints with consumer HTTP(S) controls support accessing regional Google APIs and published services using the following load balancers : Regional internal HTTP(S) load balancer Regional external HTTP(S) load balancer March 30, 2023 Feature For auto mode VPC networks, added a new subnet 10.212.0.0/20 for the Doha me-central1 region.
- October 04, 2022 Feature Accessing managed services using Private Service Connect with consumer HTTP(S) controls is available in General Availability for the global external HTTP(S) load balancer.

### "Set up a service perimeter using VPC Service Controls \_|\_ Eventarc Standard\

- URL: [https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls](https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Eventarc Standard Start free Overview Eventarc Standard Site selector Eventarc Advanced documentation Understanding and using Eventarc Advanced Eventarc Standard documentation Understanding and using Eventarc Standard Guides Reference Samples Resources More Technology areas More Overview Eventarc Standard More Guides Reference Samples Resources Cross-product tools More Console Discover Product overview Choose Eventarc Advanced or Eventarc Standard Event-driven architectures Event providers and destinations Google event types supported Event format Event routes Get started Quickstart: Receive events from Cloud Storage in Cloud Run Target: Cloud Run Receive events using Cloud Audit Logs (gcloud CLI) Receive events using Pub/Sub messages (gcloud CLI) Receive events using Pub/Sub messages (Terraform) Receive direct events from Cloud Storage (gcloud CLI) Receive direct events from Cloud Storage (console) Target: GKE Receive events using Cloud Audit Logs (gcloud CLI) Receive events using Pub/Sub messages (gcloud CLI) Target: Workflows Trigger Workflows using Cloud Audit Logs (gcloud CLI) Trigger Workflows using Pub/Sub messages (gcloud CLI) Trigger Workflows with direct events from Cloud Storage (gcloud CLI) Create a trigger Target: Cloud Run functions Target: Cloud Run Direct events AlloyDB for PostgreSQL events API Gateway events Apigee API hub events Apigee Registry events Backup for GKE events Batch events BeyondCorp events Certificate Manager events Cloud Data Fusion events Cloud Deploy events Cloud Firestore events Cloud Memorystore for Memcached events Cloud Pub/Sub events Cloud Run functions events Cloud Speech-to-Text events Cloud Storage events Database Migration events Dataflow events Dataplex Universal Catalog events Dataproc Metastore events Datastream events Eventarc events Firebase Alerts events Firebase Realtime Database events Firebase Remote Config events Firebase Test Lab events GKE Hub events Google Cloud Memorystore for Redis events Network Connectivity events Network Management events Network Services events Transcoder events User-managed notebooks events Vision AI events VM Migration events Workflows events Route audit log events Target: GKE Direct events AlloyDB for PostgreSQL events API Gateway events Apigee API hub events Apigee Registry events Backup for GKE events Batch events BeyondCorp events Certificate Manager events Cloud Data Fusion events Cloud Deploy events Cloud Firestore events Cloud Memorystore for Memcached events Cloud Pub/Sub events Cloud Run functions events Cloud Speech-to-Text events Cloud Storage events Database Migration events Dataflow events Dataplex Universal Catalog events Dataproc Metastore events Datastream events Eventarc events Firebase Alerts events Firebase Realtime Database events Firebase Remote Config events Firebase Test Lab events GKE Hub events Google Cloud Memorystore for Redis events Network Connectivity events Network Management events Network Services events Transcoder events User-managed notebooks events Vision AI events VM Migration events Workflows events Route audit log events Target: Internal HTTP endpoint Route events to an internal HTTP endpoint in a VPC network Target: Workflows Direct events AlloyDB for PostgreSQL events API Gateway events Apigee API hub events Apigee Registry events Backup for GKE events Batch events BeyondCorp events Certificate Manager events Cloud Data Fusion events Cloud Deploy events Cloud Firestore events Cloud Memorystore for Memcached events Cloud Pub/Sub events Cloud Run functions events Cloud Speech-to-Text events Cloud Storage events Database Migration events Dataflow events Dataplex Universal Catalog events Dataproc Metastore events Datastream events Eventarc events Firebase Alerts events Firebase Realtime Database events Firebase Remote Config events Firebase Test Lab events GKE Hub events Google Cloud Memorystore for Redis events Network Connectivity events Network Management events Network Services events Transcoder events User-managed notebooks events Vision AI events VM Migration events Workflows events Route audit log events Create a trigger using Terraform Configure and manage Manage triggers Understand Eventarc locations Determine event filters for audit logs Understand path patterns List event providers Retry events Control access Access control with IAM Set roles and permissions All roles and permissions Target: Cloud Run Target: GKE Target: Workflows Target: Internal HTTP endpoint in a VPC network Support a cross-project service account Set up a service perimeter Use customer-managed encryption keys (CMEK) Use custom organization policies Disable Eventarc Advanced resources Develop Develop event receivers Route events Receive Cloud Audit Logs events using an authenticated Cloud Run service Receive Pub/Sub events using an authenticated Cloud Run service Route events across Google Cloud projects Receive Pub/Sub events at an internal HTTP endpoint in a VPC network Receive Pub/Sub events at a private HTTP endpoint in a private GKE cluster Build a Big Query processing pipeline for Cloud Run Migrate Pub/ Sub triggers from Events for Cloud Run for Anthos to Eventarc Build a Big Query processing pipeline for Knative serving Deploy third-party events About third-party events Third-party providers Subscribe to events From Check Point CloudGuard From Datadog From ForgeRock Create a channel Create a trigger Offer an Eventarc source Overview Register as a provider Configure your source Test the configuration Troubleshoot event publishing Monitor Observability in Eventarc Eventarc audit logging Eventarc Publishing audit logging Troubleshoot View audit logs Troubleshoot issues All targets Target: Cloud Run Target: GKE Target: Workflows Customer-managed encryption key (CMEK) errors Debug routing events to Cloud Run Known issues AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Site selector Eventarc Advanced documentation Eventarc Standard documentation On this page Eventarc Advanced Eventarc Standard What's next Home Documentation Application development Eventarc Standard Guides Was this helpful?
- Set up a service perimeter using VPC Service Controls Eventarc Standard Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools More / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
- Send feedback Set up a service perimeter using VPC Service Controls Stay organized with collections Save and categorize content based on your preferences.
- VPC Service Controls blocks the creation of Eventarc triggers for internal HTTP endpoints .

### Private Service Connect \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Virtual Private Cloud Start free Overview Guides Reference Resources More Technology areas More Overview Guides Reference Resources Cross-product tools More Console Discover Virtual Private Cloud overview Get started VPC networks Subnets IPv6 support Create and manage VPC networks Add networking features Add IP addresses Overview Reserve internal IP addresses Reserve external IP addresses Move an external IPv4 address to a different project Add alias IP ranges Overview Configure alias IP ranges Bring your own IP addresses (BYOIP) Overview Planning and architecture Create a public advertised prefix Create public delegated prefixes Create IPv4 sub-prefixes and IP addresses Create and use IPv6 sub-prefixes Manage BGP announcement Deprovision BYOIP Add routes Routes overview Static routes overview Use routes Add policy-based routes Overview Use policy-based-routes Change MTU Overview Change MTU of a VPC network Create and verify a jumbo frame MTU network Access IPv4 destinations from IPv6-only instances Overview Configure IPv6-only subnets and instances with DNS64 and NAT64 Configure VMs Add network tags Add VMs with multiple network interfaces Overview Create VMs with multiple network interfaces Configure Dynamic NICs Add Dynamic NICs Delete Dynamic NICs Configure routing for an additional network interface Troubleshoot Add capabilities Network Connectivity Center VPC Network Peering Overview About peering connections Set up and manage VPC Network Peering Peer two VPC networks Shared VPC Overview Provision Shared VPC Deprovision Shared VPC Hybrid Subnets About migrating to Google Cloud with Hybrid Subnets Prepare for Hybrid Subnets connectivity Migrate to Google Cloud with Hybrid Subnets Disable hybrid subnet routing Internal ranges Overview Create and use internal ranges Network profiles for specific use cases Overview RDMA network profiles Create a VPC network for RDMA NICs View network profiles Access APIs and services Choose a private access option Private Service Connect Overview Compatibility Deployment patterns Architecture Security Create and access your own service Overview Create a load-balanced service Make the service accessible to other VPC networks Access the service from another VPC network Service consumers Endpoints Published services About accessing published services Access published services Manage endpoints that access published services Global Google APIs About accessing global Google APIs Access global Google APIs Regional Google APIs About accessing regional Google APIs Access regional Google APIs About propagated connections Backends About backends Create a backend Access published services Access regional Google APIs Access global Google APIs Network attachments About network attachments Create network attachments Configure security Service connection policies About service connectivity automation About service connection policies Configure connectivity to services Configure service connection policies Deploy service instances Manage consumer security Service producers Published services About published services About controlling access to published services Publish services Manage published services DNS configuration for services Private Service Connect health About Private Service Connect health Configure Private Service Connect health for failover View, update, and delete Private Service Connect health configurations Port mapping About port mapping Create port mapping services Update port mapping services Migrate peering services to Private Service Connect About migrating peering services Migrate peering services Interfaces About interfaces Create interfaces Configure routing Configure security Manage destination overlap Manage producer security Monitor connections Private Google Access Overview Configure Private Google Access Private Google Access for on-premises hosts Overview Configure Private Google Access for on-premises hosts Access APIs from VMs with external IP addresses Private services access Overview Configure private services access Send serverless traffic to a VPC network Overview Configure serverless traffic Monitor VPC Flow Logs Overview About VPC Flow Logs records About traffic flows Configure VPC Flow Logs Configure organization policy constraints Access flow logs Audit logging VPC audit logging Private services access audit logging Serverless VPC Access audit logging Packet Mirroring Overview Use Packet Mirroring Monitor Packet Mirroring Packet Mirroring partner providers Control access Manage resources by using custom constraints Create and manage tags for VPC resources Troubleshoot Troubleshoot internal connectivity between VMs Troubleshoot policy and access problems Advanced topics Advanced VPC concepts Legacy networks Overview Manage legacy networks AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Choosing a Private Service Connect feature Private Service Connect types Endpoints Backends Interfaces Private Service Connect managed services Published services Google APIs Private Service Connect characteristics What's next Home Documentation Networking Virtual Private Cloud Guides Was this helpful?
- Private Service Connect supports access to the following types of managed services: Published VPC-hosted services Google APIs Published services Published services are VPC-hosted services that are deployed in the producer's VPC network and are accessed from the consumer's VPC network.
- Backends are deployed by using network endpoint groups (NEGs) that let consumers direct traffic to their load balancer before reaching a Private Service Connect service.
- Endpoints are deployed by using forwarding rules that provide the consumer an IP address that is mapped to the Private Service Connect service.

