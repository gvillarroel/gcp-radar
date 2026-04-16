---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.680Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Custom execution environments"
feature_slug: "custom-execution-environments"
latest_feature_date: "2021-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/execution-environment"
  - "https://docs.cloud.google.com/deploy/docs/config-files"
  - "https://docs.cloud.google.com/deploy/docs/parallel"
keywords:
  - "custom"
  - "execution"
  - "environments"
  - "let"
  - "deploy"
  - "configure"
  - "pools"
  - "accounts"
---

# Custom execution environments

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Custom execution environments let Cloud Deploy configure pools, service accounts, and Cloud Storage buckets for render and deploy activity.

## Extended Definition

Custom execution environments let Cloud Deploy configure pools, service accounts, and Cloud Storage buckets for render and deploy activity.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/execution-environment](https://docs.cloud.google.com/deploy/docs/execution-environment)
- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- [https://docs.cloud.google.com/deploy/docs/parallel](https://docs.cloud.google.com/deploy/docs/parallel)

## Supporting Pages

### Using Cloud Deploy execution environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/execution-environment](https://docs.cloud.google.com/deploy/docs/execution-environment)
- Source ID: `site-docs-reference-2`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The execution environment consists of the following components: The Cloud Build worker pool (default or private) in which Cloud Deploy executes render, predeploy, deploy, verify, and postdeploy operations The service account (default or alternate) that calls Cloud Deploy to perform these actions The storage location (default or alternate) for rendered manifests in Cloud Storage The Cloud Build timeout for operations (default or custom) This document describes the default execution environment, service accounts, and storage for Cloud Deploy, as well as why and how you can change these defaults.
- The following is a sample target configuration that specifies a private worker pool for DEPLOY , and the default worker pool for RENDER , PREDEPLOY , POSTDEPLOY and VERIFY : executionConfigs : - usages : - DEPLOY privatePool : workerPool : "projects/p123/locations/us-central1/workerPools/wp123" - usages : - RENDER - PREDEPLOY - VERIFY - POSTDEPLOY Note: if Cloud Deploy is running in a different project from the worker pool's project, make sure the service agent has permission on the worker pool in that project.
- Changing from the default pool to a private pool You configure worker pools per target , so that the pool is used for RENDER , DEPLOY , PREDEPLOY , POSTDEPLOY , or VERIFY (or a combination of the five) for that target only .
- About Cloud Build worker pools The Cloud Deploy execution environment can use one of the following: The Cloud Build default pool The default worker pool is a secure, hosted environment with access to the public internet.

### Deploy to multiple targets at the same time \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/parallel](https://docs.cloud.google.com/deploy/docs/parallel)
- Source ID: `site-docs-reference-2`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execution environments and parallel deployment Each target can be configured to use a non-default execution environment.
- These rules make it easier to propagate execution environments to child targets from a multi-target, so you don't have to define or change the execution environment for each child target, while still allowing you to customize the execution environment for one or more child targets if you need to do so.
- See Using Cloud Deploy execution environments for more information about execution environments in Cloud Deploy.
- See Execution environments and parallel deployment for more details.

### Configuration schema reference \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- See also: Custom target type definitions For GKE targets The following YAML shows how to configure a target that deploys to a GKE cluster : apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : annotations : labels : description : deployParameters : multiTarget : targetIds : [] requireApproval : gke : cluster : projects /[ project name ]/ locations /[ location ]/ clusters /[ cluster name ] dnsEndpoint : internalIp : proxyUrl : associatedEntities : [ KEY ] : gkeClusters : - cluster : projects /[ project name ]/ locations /[ location ]/ clusters /[ cluster name ] dnsEndpoint : [ true false ] internalIp : [ true false ] proxyUrl : executionConfigs : - usages : - [ RENDER PREDEPLOY DEPLOY VERIFY POSTDEPLOY ANALYSIS ] workerPool : serviceAccount : artifactStorage : executionTimeout : verbose : metadata.name The name of this target.
- To indicate that a custom execution environment is to be used for predeploy hook, render, deploy, postdeploy hook, and verification, you would configure it as follows: usages : - RENDER - PREDEPLOY - DEPLOY - VERIFY - POSTDEPLOY - ANALYSIS If verification is enabled on the pipeline stage , and you don't specify VERIFY in a usages stanza, Cloud Deploy uses the default execution environment for verification.
- You can't specify usages.VERIFY , usages.PREDEPLOY , usages.POSTDEPLOY , or usages.ANALYSIS unless RENDER and DEPLOY are specified in the same or separate custom execution environments. workerPool Configuration for the worker pool to use.
- However, if there is a custom execution environment for RENDER and DEPLOY , you must specify one for VERIFY , PREDEPLOY , POSTDEPLOY , or ANALYSIS if they're configured on the delivery pipeline.

