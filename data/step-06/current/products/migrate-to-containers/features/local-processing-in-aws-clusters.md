---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.802Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Local processing in AWS clusters"
feature_slug: "local-processing-in-aws-clusters"
latest_feature_date: "2022-12-06"
deprecation_date: "2022-12-06"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/getting-started"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/clean-up"
  - "https://docs.cloud.google.com/migrate/containers/docs/deploy-autopilot"
keywords:
  - "local"
  - "processing"
  - "aws"
  - "clusters"
  - "deprecated"
  - "2022"
  - "12"
  - "06"
---

# Local processing in AWS clusters

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Local processing in AWS clusters is deprecated; deprecated on 2022-12-06.

## Extended Definition

Local processing in AWS clusters is deprecated; deprecated on 2022-12-06.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/getting-started](https://docs.cloud.google.com/migrate/containers/docs/getting-started)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/clean-up](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/clean-up)
- [https://docs.cloud.google.com/migrate/containers/docs/deploy-autopilot](https://docs.cloud.google.com/migrate/containers/docs/deploy-autopilot)

## Supporting Pages

### "Clean up your local machine \_|\_ Migrate to Containers \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/clean-up](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/clean-up)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Clean up a Linux machine To remove the directory that contains the copy of the source machine file system from your local machine, run the following command: ./m2c cleanup --source PATH TO COPIED FILESYSTEM Replace PATH TO COPIED FILESYSTEM with the path to the copied file system directory.
- Clean up your local machine After you've completed the migration, to clean up your local machine, you can remove the directory that contains the copy of the source machine file system.
- Clean up a Windows machine To clean up a Windows machine, you need to manually remove all the disk images that you have on your local machine.
- This page describes how you can clean up your local machine.

### Migrate to Containers overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/getting-started](https://docs.cloud.google.com/migrate/containers/docs/getting-started)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- You can migrate applications from supported source platforms to the following: Google Kubernetes Engine (GKE) and Autopilot clusters Cloud Run About Migrate to Containers integration with Cloud Code The Migrate to Containers integration with the Cloud Code gives you the ability to migrate applications from VMs to containers running on GKE, directly in Visual Studio, using a Linux machine.
- GKE Enterprise includes a set of core components, including the following: GKE clusters : container orchestration and management service for running Kubernetes clusters in both cloud and on-premises environments.
- Autopilot clusters : this mode of operation in GKE provisions and manages the cluster's underlying infrastructure, including nodes and node pools, giving you an optimized cluster experience.
- GKE Enterprise relies on GKE clusters on Google Cloud or Google Distributed Cloud to manage Kubernetes installations in the environments where you intend to deploy your applications.

### "Migrate and deploy applications to GKE Autopilot clusters \_|\_ Migrate\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/deploy-autopilot](https://docs.cloud.google.com/migrate/containers/docs/deploy-autopilot)
- Source ID: `site-docs-reference`
- Final score: 49
- Re-rank relevance: N/A

Evidence snippets:
- The only changes that you have to make to the Quickstart process are: In Step 3 of Migrating the VM , where you review the migration plan, set v2kServiceManager to true in the migration plan and then save the plan: v2kServiceManager : true In the Deploying the migrated workload section, create and connect to a GKE Autopilot cluster before you deploy the container: Create a GKE Autopilot cluster: gcloud container clusters create-auto " CLUSTER NAME " --project " PROJECT NAME " --region " REGION " --release-channel "regular" --subnetwork "projects/ PROJECT NAME /regions/ us-central1 /subnetworks/default" Connect to the cluster: gcloud container clusters get-credentials CLUSTER NAME --zone REGION --project PROJECT NAME Deploy the container as described in the Deploying the migrated workload section.
- The following alert is provided alongside the unsupported service: Service is not supported by v2k service manager, therefore legacy runtime will be used instead of v2k service manager, and migrated workload would not fit running on Autopilot clusters of Cloudrun.
- Migrate and deploy applications to GKE Autopilot clusters To deploy your migrated container workloads to GKE Autopilot clusters, you use the same procedure to migrate your workloads as you use for the existing architecture.

