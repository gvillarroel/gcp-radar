---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:17:26.738Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy performance monitoring and rollback automation"
feature_slug: "cloud-deploy-performance-monitoring-and-rollback-automation"
latest_feature_date: "2026-03-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient"
  - "https://docs.cloud.google.com/deploy/docs/release-notes"
keywords:
  - "deploy"
  - "performance"
  - "monitoring"
  - "and"
  - "rollback"
  - "automation"
  - "now"
  - "supports"
---

# Cloud Deploy performance monitoring and rollback automation

Product: Cloud Deploy
Coverage: LOW

## Step 02 Summary

Cloud Deploy now supports monitoring deployed application performance with external platforms and automatically triggering rollback actions.

## Extended Definition

Cloud Deploy now supports monitoring deployed application performance with external platforms and automatically triggering rollback actions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)
- [https://docs.cloud.google.com/deploy/docs/release-notes](https://docs.cloud.google.com/deploy/docs/release-notes)

## Supporting Pages

### "Class CloudDeployAsyncClient (2.10.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- Source ID: `site-python-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- CreateAutomationRequest ( parent="parent value", automation id="automation id value", automation=automation, ) Make the request operation = client. create automation (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.deploy v1.types.CreateAutomationRequest , dict]] The request object.
- UpdateAutomationRequest ( automation=automation, ) Make the request operation = client. update automation (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.deploy v1.types.UpdateAutomationRequest , dict]] The request object.
- DeleteAutomationRequest ( name="name value", ) Make the request operation = client. delete automation (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.deploy v1.types.DeleteAutomationRequest , dict]] The request object.
- RollbackTargetRequest ( name="name value", target id="target id value", rollout id="rollout id value", ) Make the request response = await client. rollback target (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.deploy v1.types.RollbackTargetRequest , dict]] The request object.

### "Class CloudDeployClient (2.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)
- Source ID: `site-python-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- CreateAutomationRequest ( parent="parent value", automation id="automation id value", automation=automation, ) Make the request operation = client. create automation (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.deploy v1.types.CreateAutomationRequest , dict] The request object.
- UpdateAutomationRequest ( automation=automation, ) Make the request operation = client. update automation (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.deploy v1.types.UpdateAutomationRequest , dict] The request object.
- DeleteAutomationRequest ( name="name value", ) Make the request operation = client. delete automation (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.deploy v1.types.DeleteAutomationRequest , dict] The request object.
- RollbackTargetRequest ( name="name value", target id="target id value", rollout id="rollout id value", ) Make the request response = client. rollback target (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.deploy v1.types.RollbackTargetRequest , dict] The request object.

### Cloud Deploy release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/release-notes](https://docs.cloud.google.com/deploy/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- March 23, 2026 Feature You can now analyze the performance of your deployed applications using the monitoring platform of your choice and automatically trigger actions such as rollbacks.
- November 13, 2023 Feature Cloud Deploy now supports delivery pipeline automation , including automated release promotion and automated rollout phase advancement, in preview .
- June 07, 2022 Announcement The Google Cloud Terraform provider now supports creating Google Cloud Deploy delivery pipelines and targets .
- August 20, 2021 Feature Cloud Deploy now supports configuring custom execution environments for render and deploy activity.

