---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.669Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Operations Suite alert configuration in console"
feature_slug: "operations-suite-alert-configuration-in-console"
latest_feature_date: "2023-11-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/config-files"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-analysis"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-custom-target"
keywords:
  - "operations"
  - "suite"
  - "alert"
  - "configuration"
  - "console"
  - "deploy"
  - "supports"
  - "configuring"
---

# Operations Suite alert configuration in console

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

The Cloud Deploy console supports configuring Google Cloud Operations Suite alerts.

## Extended Definition

The Cloud Deploy console supports configuring Google Cloud Operations Suite alerts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-analysis](https://docs.cloud.google.com/deploy/docs/deploy-app-analysis)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-custom-target](https://docs.cloud.google.com/deploy/docs/deploy-app-custom-target)

## Supporting Pages

### Configuration schema reference \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For GKE attached clusters targets Target configuration for deploying to GKE attached clusters is similar to configuring a target for a GKE target , except that the property is anthosCluster.membership , instead of gke.cluster , the resource path is different, and specific connection methods ( dnsEndpoint or internalIp ) are not applicable. anthosCluster : membership : projects/[project name]/locations/global/memberships/[membership name] project name The Google Cloud project in which the cluster lives. /location/global/ The location where the cluster is registered. global , in all cases. membership name The name of the cluster membership.
- This name must be unique per region. metadata.annotations and metadata.labels Target configuration supports Kubernetes annotations and labels , but Cloud Deploy does not require them.
- This name must be unique per region. metadata.annotations and metadata.labels Target configuration supports annotations and labels , but Cloud Deploy does not require them.
- Canary deployment strategy The following sections describe configuration for a canary deployment strategy, for each runtime that Cloud Deploy supports.

### "Quickstart: Run analysis on your application after deploying it \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-analysis](https://docs.cloud.google.com/deploy/docs/deploy-app-analysis)
- Source ID: `site-docs-reference-required-3`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the deploy-analysis-run-quickstart directory, create a new file, clouddeploy.yaml , with the following contents: apiVersion : deploy.cloud.google.com/v1 kind : DeliveryPipeline metadata : name : deploy-analysis-demo-app-run description : main application pipeline serialPipeline : stages : - targetId : analysis-staging profiles : [] strategy : standard : analysis : duration : 300s googleCloud : alertPolicyChecks : - id : check-1 alertPolicies : - ALERT POLICY ID --- apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : analysis-staging description : staging Run service run : location : projects/ PROJECT ID /locations/us-central1 In this YAML, replace ALERT POLICY ID with the output from the gcloud monitoring policies list command you ran previously , and replace PROJECT ID with the ID of the project you're using.
- Delete the Cloud Run service: gcloud run services delete my-analysis-run-service \ --region = us-central1 \ --project = PROJECT ID To delete the delivery pipeline, target, release, and rollout, run the following command from the directory containing your delivery pipeline definition: gcloud deploy delete --file = clouddeploy.yaml \ --force \ --region = us-central1 \ --project = PROJECT ID Delete the Google Cloud Observability alert policy: gcloud monitoring policies delete ALERT POLICY ID Delete the Cloud Storage buckets that Cloud Deploy created.
- Cloud Run Developer ( roles/run.developer ) Cloud Deploy Runner ( roles/clouddeploy.jobRunner ) IAM Service Account User ( roles/iam.serviceAccountUser ) Monitoring Alert Viewer ( roles/monitoring.alertViewer ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Create a new directory and navigate into it. mkdir deploy-analysis-run-quickstart cd deploy-analysis-run-quickstart Create a file named skaffold.yaml with the following contents: apiVersion : skaffold/v4beta7 kind : Config manifests : rawYaml : - service.yaml deploy : cloudrun : {} See the skaffold.yaml reference for more information about this configuration file.

### "Quickstart: Define and use custom target type \_|\_ Cloud Deploy \_|\_ Google\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-custom-target](https://docs.cloud.google.com/deploy/docs/deploy-app-custom-target)
- Source ID: `site-docs-root-2`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This configuration references container images plus shell commands to run on those images, which are the actions for render and deploy operations.
- As part of this release and rollout, the render and deploy operations defined in your custom target type configuration are both run.
- However, you can view the file and the strings in that file: In the Google Cloud console, navigate to the Cloud Deploy Delivery pipelines page to view your delivery pipeline ( custom-targets-pipeline ).
- Confirm your pipeline and targets: In the Google Cloud console, navigate to the Cloud Deploy Delivery pipelines page to view of list of your available delivery pipelines.

