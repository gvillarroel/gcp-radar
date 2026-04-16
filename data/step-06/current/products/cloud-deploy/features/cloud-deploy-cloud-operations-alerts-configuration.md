---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.481Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy Cloud Operations alerts configuration"
feature_slug: "cloud-deploy-cloud-operations-alerts-configuration"
latest_feature_date: "2023-11-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/config-files"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient"
  - "https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis"
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
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy now supports configuring Google Cloud Operations Suite alerts in the Cloud Deploy console.

## Extended Definition

Cloud Deploy now supports configuring Google Cloud Operations Suite alerts in the Cloud Deploy console.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)
- [https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis](https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis)

## Supporting Pages

### Configuration schema reference \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For GKE attached clusters targets Target configuration for deploying to GKE attached clusters is similar to configuring a target for a GKE target , except that the property is anthosCluster.membership , instead of gke.cluster , the resource path is different, and specific connection methods ( dnsEndpoint or internalIp ) are not applicable. anthosCluster : membership : projects/[project name]/locations/global/memberships/[membership name] project name The Google Cloud project in which the cluster lives. /location/global/ The location where the cluster is registered. global , in all cases. membership name The name of the cluster membership.
- This name must be unique per region. metadata.annotations and metadata.labels Target configuration supports Kubernetes annotations and labels , but Cloud Deploy does not require them.
- This name must be unique per region. metadata.annotations and metadata.labels Target configuration supports annotations and labels , but Cloud Deploy does not require them.
- Canary deployment strategy The following sections describe configuration for a canary deployment strategy, for each runtime that Cloud Deploy supports.

### "Class CloudDeployAsyncClient (2.10.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- Source ID: `site-python-reference`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- A Target defines a location to which a Skaffold configuration can be deployed. custom target type path custom target type path ( project : str , location : str , custom target type : str ) - > str Returns a fully-qualified custom target type string. delete automation delete automation ( request : typing .
- A Target defines a location to which a Skaffold configuration can be deployed. worker pool path worker pool path ( project : str , location : str , worker pool : str ) - > str Returns a fully-qualified worker pool string.
- Returns Type Description google.cloud.deploy v1.types.Config Service-wide configuration. get custom target type get custom target type ( request : typing .
- A DeliveryPipeline defines a pipeline through which a Skaffold configuration can progress. create deploy policy create deploy policy ( request : typing .

### "Class CloudDeployClient (2.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)
- Source ID: `site-python-reference`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- A Target defines a location to which a Skaffold configuration can be deployed. custom target type path custom target type path ( project : str , location : str , custom target type : str ) - > str Returns a fully-qualified custom target type string. delete automation delete automation ( request : typing .
- A Target defines a location to which a Skaffold configuration can be deployed. worker pool path worker pool path ( project : str , location : str , worker pool : str ) - > str Returns a fully-qualified worker pool string.
- Returns Type Description google.cloud.deploy v1.types.Config Service-wide configuration. get custom target type get custom target type ( request : typing .
- A DeliveryPipeline defines a pipeline through which a Skaffold configuration can progress. create deploy policy create deploy policy ( request : typing .

### "Define analysis jobs that use Google Cloud Observability \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis](https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis)
- Source ID: `site-docs-root-2`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Apply your delivery pipeline configuration file To create a delivery pipeline with your analysis job, apply the configuration file using the following command: gcloud deploy apply FILE \ --region = REGION \ --project = PROJECT ID Replace the following: FILE With the name of your delivery pipeline configuration file , clouddeploy.yaml or whatever name you gave it.
- The following is the syntax for configuring an analysis job when using a standard deployment strategy: strategy : standard : analysis : duration : DURATION googleCloud : alertPolicyChecks : - id : CHECK ID alertPolicies : - [ ALERT POLICY ID ] labels : [ KEY : VALUE ] Where: DURATION Is how long, in seconds, to run the analysis job.
- Set up analysis in Cloud Deploy Configuring deploy analysis consists of the following steps: Define one or more alerting policies .
- Cloud Deploy analysis uses these alerts to take action based on the circumstances that the alerts indicate.

