---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:17:26.763Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy Cloud Operations alerts configuration"
feature_slug: "cloud-deploy-cloud-operations-alerts-configuration"
latest_feature_date: "2023-11-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/config-files"
  - "https://docs.cloud.google.com/deploy/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient"
keywords:
  - "deploy"
  - "operations"
  - "alerts"
  - "configuration"
  - "now"
  - "supports"
  - "configuring"
  - "suite"
---

# Cloud Deploy Cloud Operations alerts configuration

Product: Cloud Deploy
Coverage: LOW

## Step 02 Summary

Cloud Deploy now supports configuring Google Cloud Operations Suite alerts in the Cloud Deploy console.

## Extended Definition

Cloud Deploy now supports configuring Google Cloud Operations Suite alerts in the Cloud Deploy console.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- [https://docs.cloud.google.com/deploy/docs/release-notes](https://docs.cloud.google.com/deploy/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)

## Supporting Pages

### Configuration schema reference \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For GKE attached clusters targets Target configuration for deploying to GKE attached clusters is similar to configuring a target for a GKE target , except that the property is anthosCluster.membership , instead of gke.cluster , the resource path is different, and specific connection methods ( dnsEndpoint or internalIp ) are not applicable. anthosCluster : membership : projects/[project name]/locations/global/memberships/[membership name] project name The Google Cloud project in which the cluster lives. /location/global/ The location where the cluster is registered. global , in all cases. membership name The name of the cluster membership.
- This name must be unique per region. metadata.annotations and metadata.labels Target configuration supports Kubernetes annotations and labels , but Cloud Deploy does not require them.
- This name must be unique per region. metadata.annotations and metadata.labels Target configuration supports annotations and labels , but Cloud Deploy does not require them.
- Canary deployment strategy The following sections describe configuration for a canary deployment strategy, for each runtime that Cloud Deploy supports.

### Cloud Deploy release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/release-notes](https://docs.cloud.google.com/deploy/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- November 08, 2023 Feature Configuring Google Cloud operations suite alerts is now supported in the Cloud Deploy console.
- August 20, 2021 Feature Cloud Deploy now supports configuring custom execution environments for render and deploy activity.
- Feature You can now access sample custom targets , including the following: Terraform Infrastructure Manager GitOps Vertex AI Helm December 05, 2023 Change Google Cloud Deploy is now available in the following regions: europe-southwest1 (Madrid) europe-west8 (Milan) europe-west9 (Paris) me-west1 (Israel) us-east5 (Columbus) us-south1 (Dallas) November 16, 2023 Feature You can now configure alerts for Cloud Deploy release render failures.
- January 31, 2023 Announcement As of November 30, 2022, Google Cloud Deploy has achieved the following compliance certifications: ISO/IEC 27001 ISO/IEC 27017 ISO/IEC 27018 ISO/IEC 27701 Announcement As of December 15, 2022, Google Cloud Deploy has achieved the following compliance certifications: SOC-1 SOC-2 SOC-3 January 20, 2023 Change Google Cloud Deploy now supports Skaffold version 2.0.

### "Class CloudDeployAsyncClient (2.10.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- Source ID: `site-python-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- A Target defines a location to which a Skaffold configuration can be deployed. custom target type path custom target type path ( project : str , location : str , custom target type : str ) - > str Returns a fully-qualified custom target type string. delete automation delete automation ( request : typing .
- A Target defines a location to which a Skaffold configuration can be deployed. worker pool path worker pool path ( project : str , location : str , worker pool : str ) - > str Returns a fully-qualified worker pool string.
- Returns Type Description google.cloud.deploy v1.types.Config Service-wide configuration. get custom target type get custom target type ( request : typing .
- A DeliveryPipeline defines a pipeline through which a Skaffold configuration can progress. create deploy policy create deploy policy ( request : typing .

