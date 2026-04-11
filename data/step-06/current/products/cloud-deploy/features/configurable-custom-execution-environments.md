---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:17:26.801Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Configurable custom execution environments"
feature_slug: "configurable-custom-execution-environments"
latest_feature_date: "2021-08-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/release-notes"
  - "https://docs.cloud.google.com/deploy/docs/config-files"
  - "https://docs.cloud.google.com/deploy/docs/custom-targets"
keywords:
  - "configurable"
  - "custom"
  - "execution"
  - "environments"
  - "deploy"
  - "now"
  - "supports"
  - "configuring"
---

# Configurable custom execution environments

Product: Cloud Deploy
Coverage: LOW

## Step 02 Summary

Cloud Deploy now supports configuring custom execution environments for render and deploy activity, including custom pools, service accounts, and Cloud Storage buckets.

## Extended Definition

Cloud Deploy now supports configuring custom execution environments for render and deploy activity, including custom pools, service accounts, and Cloud Storage buckets.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/release-notes](https://docs.cloud.google.com/deploy/docs/release-notes)
- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- [https://docs.cloud.google.com/deploy/docs/custom-targets](https://docs.cloud.google.com/deploy/docs/custom-targets)

## Supporting Pages

### Cloud Deploy release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/release-notes](https://docs.cloud.google.com/deploy/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- August 20, 2021 Feature Cloud Deploy now supports configuring custom execution environments for render and deploy activity.
- Feature You can now access sample custom targets , including the following: Terraform Infrastructure Manager GitOps Vertex AI Helm December 05, 2023 Change Google Cloud Deploy is now available in the following regions: europe-southwest1 (Madrid) europe-west8 (Milan) europe-west9 (Paris) me-west1 (Israel) us-east5 (Columbus) us-south1 (Dallas) November 16, 2023 Feature You can now configure alerts for Cloud Deploy release render failures.
- January 31, 2023 Announcement As of November 30, 2022, Google Cloud Deploy has achieved the following compliance certifications: ISO/IEC 27001 ISO/IEC 27017 ISO/IEC 27018 ISO/IEC 27701 Announcement As of December 15, 2022, Google Cloud Deploy has achieved the following compliance certifications: SOC-1 SOC-2 SOC-3 January 20, 2023 Change Google Cloud Deploy now supports Skaffold version 2.0.
- August 19, 2024 Change Cloud Deploy is now available in the following region: africa-south1 (Johannesburg) June 28, 2024 Feature You can now set the logging level to debug , or the equivalent, for Skaffold, gcloud, and kubectl, using the verbose flag in each target's execution environment.

### Configuration schema reference \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- You can't specify usages.VERIFY , usages.PREDEPLOY , usages.POSTDEPLOY , or usages.ANALYSIS unless RENDER and DEPLOY are specified in the same or separate custom execution environments. workerPool Configuration for the worker pool to use.
- See also: Custom target type definitions For GKE targets The following YAML shows how to configure a target that deploys to a GKE cluster : apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : annotations : labels : description : deployParameters : multiTarget : targetIds : [] requireApproval : gke : cluster : projects /[ project name ]/ locations /[ location ]/ clusters /[ cluster name ] dnsEndpoint : internalIp : proxyUrl : associatedEntities : [ KEY ] : gkeClusters : - cluster : projects /[ project name ]/ locations /[ location ]/ clusters /[ cluster name ] dnsEndpoint : [ true false ] internalIp : [ true false ] proxyUrl : executionConfigs : - usages : - [ RENDER PREDEPLOY DEPLOY VERIFY POSTDEPLOY ANALYSIS ] workerPool : serviceAccount : artifactStorage : executionTimeout : verbose : metadata.name The name of this target.
- See documentation in this article for more details.) executionConfigs : - usages : - [ RENDER PREDEPLOY DEPLOY VERIFY POSTDEPLOY ANALYSIS ] workerPool : serviceAccount : artifactStorage : executionTimeout : verbose : --- Custom target type config apiVersion : deploy.cloud.google.com/v1 kind : CustomTargetType metadata : name : annotations : labels : description : tasks : render : deploy : --- Automation config apiVersion : deploy.cloud.google.com/v1 kind : Automation metadata : name : labels : annotations : description : suspended : serviceAccount : selector : targets : - id : [ TARGET ID ] labels : [ LABEL KEY ] :[LABEL VALUE] rules : - [ RULE TYPE ]: id : [ RULE-SPECIFIC CONFIG ] This YAML has three main components: The main delivery pipeline and progression The configuration file can include any number of pipeline definitions.
- To indicate that a custom execution environment is to be used for predeploy hook, render, deploy, postdeploy hook, and verification, you would configure it as follows: usages : - RENDER - PREDEPLOY - DEPLOY - VERIFY - POSTDEPLOY - ANALYSIS If verification is enabled on the pipeline stage , and you don't specify VERIFY in a usages stanza, Cloud Deploy uses the default execution environment for verification.

### About custom targets \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/custom-targets](https://docs.cloud.google.com/deploy/docs/custom-targets)
- Source ID: `site-docs-root-2`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A custom target is a target that represents an arbitrary output environment other than a runtime that Cloud Deploy supports.
- Cloud Deploy supports canary deployments as long as the custom renderer and deployer support the canary feature.
- Executing the tasks Your custom render and deploy tasks run in the Cloud Deploy execution environment .
- Learn about Cloud Deploy execution environments .

