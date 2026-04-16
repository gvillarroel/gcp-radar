---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.832Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Skaffold build and deploy support for containers"
feature_slug: "skaffold-build-and-deploy-support-for-containers"
latest_feature_date: "2022-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/deploying-to-target-cluster"
  - "https://docs.cloud.google.com/migrate/containers/docs/deploy-linux-application-container"
  - "https://docs.cloud.google.com/migrate/containers/docs/review-deployment-files"
keywords:
  - "skaffold"
  - "build"
  - "deploy"
  - "containers"
  - "generated"
  - "yaml"
  - "files"
  - "help"
---

# Skaffold build and deploy support for containers

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Generated Skaffold YAML files help accelerate container image builds and deployments to GKE and Anthos clusters for multiple migration flows.

## Extended Definition

Generated Skaffold YAML files help accelerate container image builds and deployments to GKE and Anthos clusters for multiple migration flows.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/deploying-to-target-cluster](https://docs.cloud.google.com/migrate/containers/docs/deploying-to-target-cluster)
- [https://docs.cloud.google.com/migrate/containers/docs/deploy-linux-application-container](https://docs.cloud.google.com/migrate/containers/docs/deploy-linux-application-container)
- [https://docs.cloud.google.com/migrate/containers/docs/review-deployment-files](https://docs.cloud.google.com/migrate/containers/docs/review-deployment-files)

## Supporting Pages

### "Deploy a Linux system container to a target cluster \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/deploying-to-target-cluster](https://docs.cloud.google.com/migrate/containers/docs/deploying-to-target-cluster)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To build and deploy your container, from the root folder of the generated artifacts, run the following command: skaffold run -d REPOSITORY PATH Replace REPOSITORY PATH with the path to your artifact repository.
- Deploy your container with Skaffold The skaffold.yaml file is at the root folder of the generated artifacts.
- Skaffold can handle the workflow for building, pushing, and deploying your application.
- To run Skaffold while building using Cloud Build, use the following command: skaffold run -d REPOSITORY PATH -p cloudbuild What's next Learn how to complete post-migration image updates .

### "Deploy a Linux application container \_|\_ Migrate to Containers \_|\_ Google\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/deploy-linux-application-container](https://docs.cloud.google.com/migrate/containers/docs/deploy-linux-application-container)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To build and deploy your container, from the root folder of the generated artifacts, run the following command: skaffold run -d REPOSITORY PATH Replace REPOSITORY PATH with the path to your artifact repository.
- Deploy a Linux application container This page describes how to prepare your cluster for deployment, and how to deploy your Linux application containers using Skaffold.
- Use Skaffold with Linux-based workloads The skaffold.yaml file is at the root folder of the generated artifacts.
- Skaffold handles the workflow for building, pushing, and deploying your application.

### "Review the migration artifacts \_|\_ Migrate to Containers \_|\_ Google\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/review-deployment-files](https://docs.cloud.google.com/migrate/containers/docs/review-deployment-files)
- Source ID: `site-docs-root-2`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- About the generated artifact files The artifact files generated during the migration include the following: deployment spec.yaml : The YAML file that configures your workload.
- Additionally, when you run the migration to a Linux system container, Migrate to Containers CLI also generates the following files: migration.yaml : A copy of the migration plan.
- Rebuilding the image can also be useful when the Migrate to Containers CLI is upgraded, for example to implement a bug fix, and you want to rebuild the image with the new Migrate to Containers CLI runtime.
- Some plugins might generate more than one Dockerfile and deployment spec.yaml file, for example if you have a VM running multiple Tomcat servers at the same time.

