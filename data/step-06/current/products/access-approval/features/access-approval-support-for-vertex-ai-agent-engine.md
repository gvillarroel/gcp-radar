---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:42:38.034Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Access Approval support for Vertex AI Agent Engine"
feature_slug: "access-approval-support-for-vertex-ai-agent-engine"
latest_feature_date: "2026-02-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/overview"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services"
keywords:
  - "access"
  - "approval"
  - "vertex"
  - "ai"
  - "agent"
  - "engine"
---

# Access Approval support for Vertex AI Agent Engine

Product: Access Approval
Coverage: LOW

## Step 02 Summary

Vertex AI Agent Engine is supported by Access Approval.

## Extended Definition

Vertex AI Agent Engine is supported by Access Approval.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services)

## Supporting Pages

### Supported services \_|\_ Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Asset Inventory GA None Cloud Billing Preview None Cloud Build GA None Cloud Composer GA None Cloud Data Fusion GA None Cloud Deploy GA None Cloud DNS GA None Cloud Domains GA None Cloud External Key Manager (Cloud EKM) GA None Cloud Run functions GA None Cloud Healthcare API GA None Cloud Interconnect GA None Cloud Key Management Service (Cloud KMS) GA None Cloud Logging GA None Cloud NAT GA None Cloud OS Login API GA None Cloud Run GA None Cloud Scheduler GA None Cloud SQL GA None Cloud Service Mesh GA None Cloud Storage GA None Cloud Tasks GA None Cloud TPU GA None Cloud Trace GA None Cloud VPN GA None Cloud Workstations GA None Compute Engine GA None Connect Agent GA None Dialogflow CX GA None Database Center GA None Dataflow GA None Dataform GA None Knowledge Catalog GA None Managed Service for Apache Spark GA None Google Distributed Cloud GA None Document AI GA None Eventarc GA None External passthrough Network Load Balancer GA None Filestore GA None Firebase Data Connect GA None Firebase Security Rules GA None Firestore GA None Flow Analyzer GA None Gemini Enterprise GA None GKE Connect GA None GKE Hub GA None GKE Hub API GA None GKE Identity Service GA None Google Cloud Armor GA Access Approval is available for regional Google Cloud Armor security policies.
- Identity-Aware Proxy GA None Image streaming GA None Infrastructure Manager GA None Integration Connectors GA None Internal passthrough Network Load Balancer GA None Google Kubernetes Engine GA None Looker (Google Cloud core) GA None Looker Studio GA None Memorystore for Redis GA None Memorystore for Redis Cluster GA None Memorystore for Valkey GA None Model Armor GA None Cloud Monitoring GA None NCC Gateway GA None Network Connectivity Center GA None Org Lifecycle API GA None Organization Policy Service GA None Parameter Manager GA None Persistent Disk GA None Pub/Sub GA None regional external Application Load Balancer GA None regional external proxy Network Load Balancer GA None regional internal Application Load Balancer GA None regional internal proxy Network Load Balancer GA None Resource Manager GA None Secret Manager GA None Secure Source Manager GA None Secure Web Proxy GA None Security Command Center GA Access Approval supports the Security Command Center Premium tier.
- Currently supported: Online prediction Batch prediction Vertex AI Model Registry AI Platform Training AI Platform Pipelines Vertex AI Model Monitoring Vector Search Vertex AI model tuning Vertex AI Agent Engine GA None Vertex AI Search GA None Virtual Private Cloud (VPC) GA None VM Manager GA None Web Risk GA None Workflows GA None Workforce Identity Federation GA None Workload Identity Federation GA None What's next Release notes Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- App Hub GA None Application Integration GA None Artifact Analysis GA None Artifact Registry GA None Automotive AI Agent GA None Backup for GKE GA None Backup and DR Service GA Workloads that depend on a management console and backup/recovery appliances are not supported by Access Approval.

### App Hub overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview)
- Source ID: `site-docs-reference-2`
- Final score: 38
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, when an AI agent is deployed through a managed platform like Vertex AI Agent Engine , App Hub automatically classifies the resource with the AGENT functional type value to indicate that the workload runs an AI agent. ( Preview ) Extended metadata : an schema-driven property that provides rich, structured information about the service or workload.
- For example, a workload can be a GKE deployment or a Compute Engine managed instance group (MIG) running the code of an AI agent.
- For example, workloads with a functional type value of AGENT can include apphub.googleapis.com/AgentProperties metadata, which contains information about an agent that is compatible with the Agent2Agent (A2A) Agent Card .

### Enabling Access Approval using Terraform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Copy the following resource, and paste it in your main.tf file. main.tf variable "parent value" { type = string } variable "email 1" { type = string } variable "email 2" { type = string } resource "google folder" "my folder" { display name = "my-folder" parent = var.parent value parent = "organizations/123456789" } resource "google folder access approval settings" "folder access approval" { folder id = google folder.my folder.folder id notification emails = [ var.email 1 , var.email 2 ] enrolled services { cloud product = "all" } } Enter values for the following variables: email 1 and email 2 : provide the email addresses of users who you want to set as reviewers for the access requests for this project.
- What's next Using Terraform with Google Cloud Using Terraform with Access Approval Getting started with Terraform on Google Cloud Kickstart Terraform on Google Cloud with Cloud Shell Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To enable a user or service account to approve access requests for a project, grant them the Access Approval Approver ( roles/accessapproval.approver ) IAM role. parent value : name of the folder in which you want to create the my folder folder.
- Home Documentation Security Cloud provider access management Access Approval Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

