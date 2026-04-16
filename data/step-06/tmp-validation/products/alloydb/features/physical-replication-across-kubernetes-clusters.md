---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.154Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Physical replication across Kubernetes clusters"
feature_slug: "physical-replication-across-kubernetes-clusters"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
keywords:
  - "physical"
  - "replication"
  - "kubernetes"
  - "across"
  - "clusters"
  - "supports"
  - "omni"
---

# Physical replication across Kubernetes clusters

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Omni supports physical replication between primary and secondary clusters on separate Kubernetes clusters.

## Extended Definition

AlloyDB Omni supports physical replication between primary and secondary clusters on separate Kubernetes clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)

## Supporting Pages

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- It is designed to run mission-critical stateful applications, like AlloyDB Omni, on any Kubernetes cluster, in any cloud or on-premises environment, with enterprise-grade performance and reliability.
- Partner references Scaling Postgres AI Workloads with AlloyDB Omni on Silk Platform AlloyDB Omni and Silk Partner Advantage page Direct link Business intelligence and advanced analytics BoostKpi Solution BoostKPI Category Business intelligence and advanced analytics Description Use BoostKPI to identify and receive alerts about granular anomalies in your business data stored in BigQuery, as well as the root causes of these anomalies.
- Partner references Configuring AlloyDB Omni Cloud SQL for PostgreSQL and AlloyDB for PostgreSQL Integration Partner Advantage page Direct link Hitachi Solution Hitachi Virtual Storage Platform One Block 20 Category Application ISV Description Hitachi Virtual Storage Platform One Block 20 offers three models with the same capacity, featuring 72 NVMe flash drives and support for Fibre Channel, iSCSI, and NVMe TCP connectivity.
- Partner references Configuring AlloyDB Accounts in SnapLogic AlloyDB Inserts using SnapLogic AlloyDB Select using SnapLogic Partner Advantage page Direct link Striim Solution Striim cloud Category Data integration and migration Description Striim Cloud enables zero downtime data migration and real time replication to Google BigQuery, Spanner, Cloud SQL, AlloyDB, Pub/Sub, and Google Cloud Storage.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- As a further method of disaster recovery, you can achieve cross-region replication by creating secondary clusters in separate Google Cloud regions.
- Storage: a cloud-native, distributed storage engine that persists your data across multiple availability zones and scales automatically as your data grows.
- Clusters operating in non-production environments that don't require HA can optionally use basic, single-zone primary instances instead.
- A self-hosted alternative: AlloyDB Omni As an alternative to running AlloyDB within Google Cloud, Google offers AlloyDB Omni.

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- The gcloud CLI provides the primary command-line interface for Google Cloud. kubectl provides the primary command-line interface for running commands against Kubernetes clusters.
- Console In the Google Cloud console, go to the Kubernetes Clusters page.
- Go to Kubernetes Clusters Click Create .
- Create a Kubernetes service account for your sample application: kubectl apply -f service-account.yaml Grant permissions for your Kubernetes service account to impersonate the Google service account by creating an IAM policy binding between the two service accounts: gcloud iam service-accounts add-iam-policy-binding \ --role = "roles/iam.workloadIdentityUser" \ --member = "serviceAccount: PROJECT ID .svc.id.goog[default/ KSA NAME ]" \ GSA NAME @ PROJECT ID .iam.gserviceaccount.com Add the iam.gke.io/gcp-service-account= GSA NAME @ PROJECT ID annotation to the Kubernetes service account, using the email address of the Google service account: kubectl annotate serviceaccount \ KSA NAME \ iam.gke.io/gcp-service-account = GSA NAME @ PROJECT ID .iam.gserviceaccount.com Populate the Artifact Registry with an image of the sample application To build a container image of the sample application and push it to a repository, complete the following steps.

