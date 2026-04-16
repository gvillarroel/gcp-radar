---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.670Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Commitments for node types"
feature_slug: "commitments-for-node-types"
latest_feature_date: "2024-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/cud"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/cud"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types"
keywords:
  - "commitments"
  - "node"
  - "types"
  - "allows"
  - "purchase"
  - "tied"
  - "specific"
---

# Commitments for node types

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Allows purchase of commitments tied to specific node types.

## Extended Definition

Allows purchase of commitments tied to specific node types.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/cud](https://docs.cloud.google.com/vmware-engine/docs/cud)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/cud](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/cud)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types](https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types)

## Supporting Pages

### "Committed use discounts \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/cud](https://docs.cloud.google.com/vmware-engine/docs/cud)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Purchasing commitments for node types You can purchase commitments for node types by using the Google Cloud console.
- VMware Engine CUDs apply to all VMware Engine nodes for the region for which you have purchased commitments.
- VMware Engine CUDs are spend-based commitments and not tied to a specific project or resource.
- Alternatively, you can make a purchase with a custom role with the following permissions: enterprisepurchasing.gcveCuds.list enterprisepurchasing.gcveNodePricingInfo.list enterprisepurchasing.gcveCuds.create billing.accounts.get billing.subscriptions.create vmwareengine.projectState.get consumerprocurement.orders.place resourcemanager.projects.get See VMware Engine IAM roles and permissions for more information.

### "VMware Engine node types \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types](https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Node commitments You can purchase VMware Engine nodes with a one- or three-year committed use discount (CUD) where you make a fixed monthly payment, or you can pay for nodes as you use them.
- Google Cloud VMware Engine allows creation of a cluster with a mix of hyperconverged infrastructure (HCI) and storage only node types from the same node family.
- Region Zones Private cloud types Node types asia-northeast1 (Tokyo) asia-northeast1-a Standard, Single-Node ve1, ve2 asia-northeast2 (Osaka) asia-northeast2-a Standard, Single-Node ve2 asia-south1 (Mumbai) asia-south1-a , asia-south1-b Standard, Stretched, Single-Node ve1 asia-south2 (Delhi) asia-south2-a Standard, Single-Node ve1 asia-southeast1 (Singapore) asia-southeast1-a , asia-southeast1-b Standard, Single-Node ve1 australia-southeast1 (Sydney) australia-southeast1-a , australia-southeast1-b Standard, Stretched, Single-Node ve1, ve2 ‡ australia-southeast2 (Melbourne) australia-southeast2-a , australia-southeast2-b Standard, Stretched, Single-Node ve1, ve2 europe-west2 (London) europe-west2-a , europe-west2-b Standard, Stretched, Single-Node ve1, ve2 ‡ europe-west3 (Frankfurt) europe-west3-a , europe-west3-b Standard, Stretched, Single-Node ve1, ve2 ‡ europe-west4 (Netherlands) europe-west4-a Standard, Single-Node ve1 europe-west6 (Zurich) europe-west6-a Standard, Single-Node ve1 europe-west8 (Milan) europe-west8-a , europe-west8-b Standard, Stretched, Single-Node ve1, ve2 europe-west9 (Paris) europe-west9-b Standard, Single-Node ve1, v2 europe-west12 (Turin) europe-west12-a Standard, Single-Node ve1 europe-southwest1 (Madrid) europe-southwest1-a Standard, Single-Node ve2 me-central1 (Doha) me-central1-a Standard, Single-Node ve2 me-central2 (Dammam) me-central2-c Standard, Single-Node ve2 me-west1 (Tel Aviv) me-west1-a , me-west1-b Standard, Single-Node ve1 northamerica-northeast1 (Montréal) northamerica-northeast1-a Standard, Single-Node ve1, ve2 ‡ northamerica-northeast2 (Toronto) northamerica-northeast2-a Standard, Single-Node ve1, ve2 southamerica-east1 (São Paulo) southamerica-east1-a , southamerica-east1-c Standard, Stretched, Single-Node ve1, ve2 ‡ southamerica-west1 (Santiago) southamerica-west1-a , southamerica-west1-b Standard, Stretched, Single-Node ve1, ve2 ‡ us-central1 (Iowa) us-central1-a Standard, Single-Node ve1, ve2 ‡ us-east4 (North Virginia) us-east4-a , us-east4-b Standard, Single-Node ve1, ve2 ‡ us-south1 (Dallas) us-south1-b Standard, Single-Node ve1, ve2 ‡ us-west2 (Los Angeles) us-west2-a , us-west2-b Standard, Single-Node ve1, ve2 ‡ Supports private clouds with mixed ve1 and ve2 node types.
- Node type vCPUs/Node § Memory/Node (GiB) Storage/Node (TB) ve1-standard-72 72 768 19.2 ve2-mega-128 † 128 2048 51.2 ve2-mega-112 † 112 2048 51.2 ve2-mega-96 † 96 2048 51.2 ve2-mega-80 † 80 2048 51.2 ve2-mega-64 † 64 2048 51.2 ve2-large-128 † 128 2048 38.4 ve2-large-112 † 112 2048 38.4 ve2-large-96 † 96 2048 38.4 ve2-large-80 † 80 2048 38.4 ve2-large-64 † 64 2048 38.4 ve2-standard-128 † 128 2048 25.5 ve2-standard-112 † 112 2048 25.5 ve2-standard-96 † 96 2048 25.5 ve2-standard-80 † 80 2048 25.5 ve2-standard-64 † 64 2048 25.5 ve2-small-128 † 128 2048 12.8 ve2-small-112 † 112 2048 12.8 ve2-small-96 † 96 2048 12.8 ve2-small-80 † 80 2048 12.8 ve2-small-64 † 64 2048 12.8 Storage-only node types The following table lists storage-only node types that are available when creating a VMware Engine private cloud or cluster.

### "Committed use discounts for Backup and DR for Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/cud](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/cud)
- Source ID: `site-docs-reference-2`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Purchasing commitments for node types You can purchase commitments for node types by using the Google Cloud console.
- To purchase a commitment for Backup and DR for VMware Engine in your project for a specific node type, do the following: Note: Upfront or prepaid CUD is an allowlist GA feature.
- For example, you want to purchase a commitment for three protected nodes at $0.46 per hour, and you additionally have a contract that includes a promotional discount of 12%, then the hourly on-demand commitment = 3 nodes $0.46 per hour (1 - 0.12) = $1.2144 per hour.
- Purchase commitments To learn more about purchasing spend-based commitments, see the Google Cloud Committed use discounts page.

