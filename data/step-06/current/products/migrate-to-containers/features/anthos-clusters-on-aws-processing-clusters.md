---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.859Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Anthos clusters on AWS processing clusters"
feature_slug: "anthos-clusters-on-aws-processing-clusters"
latest_feature_date: "2021-01-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/convert-runtime"
  - "https://docs.cloud.google.com/migrate/containers/docs/anthos-migrate-benefits"
  - "https://docs.cloud.google.com/migrate/containers/docs/deploy-autopilot"
keywords:
  - "anthos"
  - "clusters"
  - "aws"
  - "processing"
  - "can"
  - "used"
  - "migrating"
  - "workloads"
---

# Anthos clusters on AWS processing clusters

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Anthos clusters on AWS can be used as processing clusters for migrating AWS workloads.

## Extended Definition

Anthos clusters on AWS can be used as processing clusters for migrating AWS workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/convert-runtime](https://docs.cloud.google.com/migrate/containers/docs/convert-runtime)
- [https://docs.cloud.google.com/migrate/containers/docs/anthos-migrate-benefits](https://docs.cloud.google.com/migrate/containers/docs/anthos-migrate-benefits)
- [https://docs.cloud.google.com/migrate/containers/docs/deploy-autopilot](https://docs.cloud.google.com/migrate/containers/docs/deploy-autopilot)

## Supporting Pages

### "Upgrade container workloads for enhanced runtime \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/convert-runtime](https://docs.cloud.google.com/migrate/containers/docs/convert-runtime)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: loading the nodes and pulling the image might take a few minutes. kubectl get pods Post conversion tasks After you convert an existing migration to use the simplified Linux service manager, you might want to modify it to: Update the services used by the migrated workload.
- Upgrade container workloads for enhanced runtime If you have existing container workloads created using Migrate to Containers versions 1.7.x and 1.8.x, you can convert them to use the simplified Linux service manager.
- About converting container workloads The procedure for converting existing workloads depends on whether you are converting a stateless workload or stateful workload.
- Set the product version to 1.15.0: FROM anthos-migrate.gcr.io/v2k-run-embedded: v1.15.0 as migrate-for-anthos-runtime ...

### "Benefits of migrating to containers \_|\_ Migrate to Containers \_|\_ Google\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/anthos-migrate-benefits](https://docs.cloud.google.com/migrate/containers/docs/anthos-migrate-benefits)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Benefits of migrating to containers Migrate to Containers is a tool to containerize existing VM-based applications to run on Google Kubernetes Engine (GKE) , GKE Autopilot clusters , GKE Enterprise , or Cloud Run .
- Containers provide greater density of workloads across your clusters, fine-grained resource allocations, and overall lower infrastructure costs.
- This method consistently preserves the same operational model used for running and managing applications on-premises, modernizing only the underlying infrastructure.
- Migrate to containers versus lift-and-shift to Compute Engine Today, you can migrate VM workloads into VM instances in Compute Engine using Migrate to VMs .

### "Migrate and deploy applications to GKE Autopilot clusters \_|\_ Migrate\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/deploy-autopilot](https://docs.cloud.google.com/migrate/containers/docs/deploy-autopilot)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The only changes that you have to make to the Quickstart process are: In Step 3 of Migrating the VM , where you review the migration plan, set v2kServiceManager to true in the migration plan and then save the plan: v2kServiceManager : true In the Deploying the migrated workload section, create and connect to a GKE Autopilot cluster before you deploy the container: Create a GKE Autopilot cluster: gcloud container clusters create-auto " CLUSTER NAME " --project " PROJECT NAME " --region " REGION " --release-channel "regular" --subnetwork "projects/ PROJECT NAME /regions/ us-central1 /subnetworks/default" Connect to the cluster: gcloud container clusters get-credentials CLUSTER NAME --zone REGION --project PROJECT NAME Deploy the container as described in the Deploying the migrated workload section.
- The following alert is provided alongside the unsupported service: Service is not supported by v2k service manager, therefore legacy runtime will be used instead of v2k service manager, and migrated workload would not fit running on Autopilot clusters of Cloudrun.
- Migrate and deploy applications to GKE Autopilot clusters To deploy your migrated container workloads to GKE Autopilot clusters, you use the same procedure to migrate your workloads as you use for the existing architecture.

