---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:17:26.746Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy scheduled release promotion"
feature_slug: "cloud-deploy-scheduled-release-promotion"
latest_feature_date: "2024-11-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient"
keywords:
  - "deploy"
  - "scheduled"
  - "release"
  - "promotion"
  - "now"
  - "supports"
  - "automatically"
  - "promoting"
---

# Cloud Deploy scheduled release promotion

Product: Cloud Deploy
Coverage: LOW

## Step 02 Summary

Cloud Deploy now supports automatically promoting releases across targets at scheduled times.

## Extended Definition

Cloud Deploy now supports automatically promoting releases across targets at scheduled times.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/release-notes](https://docs.cloud.google.com/deploy/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)

## Supporting Pages

### Cloud Deploy release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/release-notes](https://docs.cloud.google.com/deploy/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- November 13, 2023 Feature Cloud Deploy now supports delivery pipeline automation , including automated release promotion and automated rollout phase advancement, in preview .
- November 20, 2024 Feature You can now automatically promote releases across targets at scheduled times, in preview .
- Feature You can now access sample custom targets , including the following: Terraform Infrastructure Manager GitOps Vertex AI Helm December 05, 2023 Change Google Cloud Deploy is now available in the following regions: europe-southwest1 (Madrid) europe-west8 (Milan) europe-west9 (Paris) me-west1 (Israel) us-east5 (Columbus) us-south1 (Dallas) November 16, 2023 Feature You can now configure alerts for Cloud Deploy release render failures.
- January 31, 2023 Announcement As of November 30, 2022, Google Cloud Deploy has achieved the following compliance certifications: ISO/IEC 27001 ISO/IEC 27017 ISO/IEC 27018 ISO/IEC 27701 Announcement As of December 15, 2022, Google Cloud Deploy has achieved the following compliance certifications: SOC-1 SOC-2 SOC-3 January 20, 2023 Change Google Cloud Deploy now supports Skaffold version 2.0.

### "Class CloudDeployAsyncClient (2.10.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- Source ID: `site-python-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- Returns Type Description google.cloud.deploy v1.types.IgnoreJobResponse The response object from IgnoreJob. job path job path ( project : str , location : str , job : str ) - > str Returns a fully-qualified job string. job run path job run path ( project : str , location : str , delivery pipeline : str , release : str , rollout : str , job run : str , ) - > str Returns a fully-qualified job run string. list automation runs list automation runs ( request : typing .

### "Class CloudDeployClient (2.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)
- Source ID: `site-python-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- Returns Type Description google.cloud.deploy v1.types.IgnoreJobResponse The response object from IgnoreJob. job path job path ( project : str , location : str , job : str ) - > str Returns a fully-qualified job string. job run path job run path ( project : str , location : str , delivery pipeline : str , release : str , rollout : str , job run : str , ) - > str Returns a fully-qualified job run string. list automation runs list automation runs ( request : typing .

