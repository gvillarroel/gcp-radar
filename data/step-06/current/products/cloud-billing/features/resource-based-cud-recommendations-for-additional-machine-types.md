---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.539Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Resource-based CUD recommendations for additional machine types"
feature_slug: "resource-based-cud-recommendations-for-additional-machine-types"
latest_feature_date: "2026-01-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/finops-hub"
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/iam/docs/resource-types-with-policies"
keywords:
  - "resource"
  - "based"
  - "cud"
  - "recommendations"
  - "additional"
  - "machine"
  - "types"
  - "now"
---

# Resource-based CUD recommendations for additional machine types

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Resource-based CUD recommendations now support additional machine series for cores and RAM, with access via FinOps hub, Recommender API, and BigQuery exports.

## Extended Definition

Resource-based CUD recommendations now support additional machine series for cores and RAM, with access via FinOps hub, Recommender API, and BigQuery exports.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies)

## Supporting Pages

### Optimize costs with FinOps hub \_|\_ Cloud Billing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Name Recommender ID Short Description Committed Use Discounts (CUDs) recommenders Committed use discount recommender google.compute.commitment.UsageCommitmentRecommender Reduce costs through purchasing resource-based commitments Committed use discount recommender google.cloudbilling.commitment.SpendBasedCommitmentRecommender Reduce costs through purchasing spend-based and Compute flexible commitments Compute Engine recommenders Idle custom image recommender google.compute.image.IdleResourceRecommender Remove unused images Idle IP address recommender google.compute.address.IdleResourceRecommender Remove unused IPs Idle persistent disk recommender google.compute.disk.IdleResourceRecommender Backup and remove unused disks Idle VM recommender google.compute.instance.IdleResourceRecommender Remove unused VMs Idle reservations recommender google.compute.IdleResourceRecommender Remove unused reservations Managed instance group machine type recommender google.compute.instanceGroupManager.MachineTypeRecommender Right-size MIG machine types Underutilized reservations recommender google.compute.RightSizeResourceRecommender Right-size underutilized reservations VM machine type recommender google.compute.instance.MachineTypeRecommender Note: Recommendations of this type indicating an underutilized VM (those with a negative costs savings or cost increase) are shown on the Utilization insights dashboard but not on the FinOps Recommendations dashboard.
- Right-size VM machine types Google Kubernetes Engine (GKE) recommenders GKE idle cluster recommender google.container.DiagnosisRecommender subtype: CLUSTER IDLE Remove unused GKE clusters GKE overprovisioned cluster recommender google.container.DiagnosisRecommender subtype: CLUSTER OVERPROVISIONED Right-size overprovisioned GKE clusters GKE underprovisioned cluster recommender google.container.DiagnosisRecommender subtype: CLUSTER UNDERPROVISIONED Note: Underprovisionsed cluster recommendations are shown on the Utilization insights dashboard but aren't included on the FinOps Recommendations dashboard.
- How potential savings are determined The FinOps hub considers four optimization practices to create cost-saving recommendations: Turning off idle resources Right-sizing instances Other configuration changes for certain resources Purchasing committed use discounts (CUDs) Metrics throughout the hub reflect how well you're using those optimizations and identify additional optimization opportunities to reduce costs and improve FinOps practices.
- Optimize underprovisioned SQL instances Cloud Run recommenders Cloud Run CPU allocation recommender google.run.service.CostRecommender Switch to CPU always-allocated Project recommender - all services Unattended project recommender google.resourcemanager.projectUtilization.Recommender Reclaim or remove unused projects Resources Google Cloud Well-Architected Framework: Cost optimization Optimize costs with committed use discounts Purchasing spend-based committed use discounts Purchasing resource-based committed use discounts Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Resource-based CUD credits : Resource-based committed use discounts (CUDs) provide credits on Compute Engine virtual machines (VMs) when you commit to using eligible resources during a specified term.
- If applicable to your Cloud Billing account, there are various types of other savings you might earn, such as the following: Free tier credits : Some services offer free resource usage up to specified limits .
- Analyze Resource-based CUD credits and Legacy spend-based CUD credits When analyzing your Google Cloud costs, it's useful to understand how your purchased commitments are impacting your costs.
- Group by setting Rows in report Additional columns included in CSV download Date-based Group by (for example, Date > Service ) One row for each dimension, broken down by date.

### "Resource types that accept allow policies \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies)
- Source ID: `site-iam-reference`
- Final score: 141
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Select a service to see which of its resource types support allow policies: All services BigQuery Identity-Aware Proxy Access Context Manager Vertex AI BigQuery sharing API Gateway Apigee Apigee Registry App Hub Artifact Registry AutoML Backup and Disaster Recovery Chrome Enterprise Premium BigLake BigQuery Connection API BigQuery Data Policy BigQuery Reservation API Cloud Bigtable Admin API Binary Authorization Cloud Billing Cloud Build Cloud Deploy Cloud Run functions Cloud Key Management Service Resource Manager Cloud Tasks Compute Engine Cloud Config Manager API Customer Experience Insights Artifact Analysis Data Catalog Dataform Cloud Data Fusion Database Migration Service Dataplex Universal Catalog Managed Service for Apache Spark Cloud Deployment Manager Discovery Engine Cloud DNS Cloud Domains Eventarc Backup for GKE GKE Hub Google Distributed Cloud Cloud Healthcare API Identity and Access Management Cloud Logging Managed Service for Microsoft Active Directory Dataproc Metastore AI Platform Network Connectivity Center Network Management API Network Security Network Services Notebooks Certificate Authority Service Pub/Sub Cloud Run Secret Manager Secure Source Manager Security Command Center Service Directory Service Management Spanner Cloud Storage Google Cloud VMware Engine Cloud Workstations Service Resources that accept allow policies BigQuery Datasets Routines Tables Identity-Aware Proxy All web services Individual web services Tunnel Tunnel instances Tunnel zones Web service types Web service versions Access Context Manager Access policies Vertex AI Datasets Entity types Feature groups Feature online stores Feature views Featurestores Models Notebook runtime templates Reasoning engines BigQuery sharing Data exchanges Listings Subscriptions API Gateway APIs Configs Gateways Apigee Deployments Environments Spaces Apigee Registry APIs Artifacts Deployments Documents Instances Runtime Specs Versions App Hub Applications Artifact Registry Repositories AutoML Datasets Locations Models Backup and Disaster Recovery Management servers Chrome Enterprise Premium App connections App connectors App gateways Applications Security gateways BigLake Catalogs Namespaces Tables BigQuery Connection API Connections BigQuery Data Policy Data policies BigQuery Reservation API Assignments Reservations Cloud Bigtable Admin API Authorized views Backups Instances Logical views Materialized views Schema bundles Tables Binary Authorization Attestors Policy Cloud Billing Billing accounts Cloud Build Connections Cloud Deploy Custom target types Delivery pipelines Deploy policies Targets Cloud Run functions Functions Cloud Key Management Service Crypto keys EKM config EKM connections Import jobs Key rings Resource Manager Folders Organizations Projects Tag keys Tag values Cloud Tasks Queues Compute Engine Backend buckets Backend services Disks Firewall policies Images Instance templates Instances Instant snapshot groups Instant snapshots Interconnect attachment groups Interconnect groups Licenses Machine images Network attachments Network firewall policies Node groups Node templates Region backend buckets Region backend services Region disks Region instant snapshot groups Region instant snapshots Region network firewall policies Region snapshots Reservation blocks Reservation sub-blocks Reservations Resource policies Service attachments Snapshots Storage pools Subnetworks Cloud Config Manager API Deployments Customer Experience Insights Authorized views Artifact Analysis Notes Occurrences Data Catalog Entry groups Policy tags Tag templates Taxonomies Dataform Folders Repositories Team folders Workspaces Cloud Data Fusion Instances Database Migration Service Connection profiles Conversion workspaces Migration jobs Objects Private connections Dataplex Universal Catalog Aspect types Assets Attributes Categories Change requests Data attribute bindings Data domains Data products Data scans Data taxonomies Encryption configs Entry groups Entry link types Entry types Glossaries Governance rules Lakes Policy intents Tasks Terms Zones Managed Service for Apache Spark Autoscaling policies Clusters Jobs Operations Workflow templates Cloud Deployment Manager Deployments Discovery Engine Engines Cloud DNS Managed zones Cloud Domains Registrations Eventarc Channel connections Channels Enrollments Google API sources Message buses Pipelines Triggers Backup for GKE Backup plans Backups Restore plans Restores Volume backups Volume restores GKE Hub Features Memberships Scopes Google Distributed Cloud Bare metal admin clusters Bare metal clusters Bare metal node pools VMware admin clusters VMware clusters VMware node pools Cloud Healthcare API Consent stores Data mapper workspaces Datasets DICOM stores FHIR stores HL7v2 stores Identity and Access Management Service accounts Workforce identity pools Workload identity pools Cloud Logging Views Managed Service for Microsoft Active Directory Backups Domains Peerings Dataproc Metastore Backups Databases Federations Services Tables AI Platform Jobs Models Network Connectivity Center Groups Hubs Internal ranges Policy-based routes Spokes Network Management API Connectivity tests Network Security Address groups Authorization policies Authz policies Client TLS policies Server TLS policies Network Services Edge cache keysets Edge cache origins Edge cache services Notebooks Instances Runtimes Certificate Authority Service CA pools Certificate revocation lists Certificate templates Pub/Sub Schemas Snapshots Subscriptions Topics Cloud Run Jobs Services Worker pools Secret Manager Secrets Secure Source Manager Instances Repositories Security Command Center Sources Service Directory Namespaces Services Service Management Consumers Services Spanner Backup schedules Backups Databases Instances Cloud Storage Buckets Managed folders Google Cloud VMware Engine Clusters HCX activation keys Private clouds Cloud Workstations Workstation configs Workstations Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Security IAM Reference Send feedback Resource types that accept allow policies Stay organized with collections Save and categorize content based on your preferences.
- This page lists the resource types on which you can set allow policies .
- For example, if the allow policy for a project grants a user the ability to administer Compute Engine virtual machine (VM) instances, then the user can administer any Compute Engine VM in that project, regardless of the allow policy you set on each VM.

