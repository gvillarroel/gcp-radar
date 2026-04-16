---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.469Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy deployment analysis"
feature_slug: "cloud-deploy-deployment-analysis"
latest_feature_date: "2026-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/analysis"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient"
  - "https://docs.cloud.google.com/deploy/docs/config-files"
  - "https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis"
keywords:
  - "deploy"
  - "deployment"
  - "analysis"
  - "now"
  - "supports"
  - "actions"
  - "as"
  - "part"
---

# Cloud Deploy deployment analysis

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy now supports deployment analysis actions as part of custom task workflows.

## Extended Definition

Cloud Deploy now supports deployment analysis actions as part of custom task workflows.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/analysis](https://docs.cloud.google.com/deploy/docs/analysis)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- [https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis](https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis)

## Supporting Pages

### Run analysis jobs in Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/analysis](https://docs.cloud.google.com/deploy/docs/analysis)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported metrics providers Cloud Deploy supports analysis using metrics provided in either of the following ways: Direct integration with Google Cloud Observability alerting policies , based on telemetry and logs in Google Cloud Observability Integration with non-Google metrics system (for example, Prometheus or Datadog) This type of custom analysis requires that your organization provide a container with functionality to support the specific metrics system.
- If you use a custom or custom-automated canary deployment, you configure analysis jobs inside the configuration for each phase you want to analyse.
- You can use the results of these analyses to take actions, such as automatically roll back the deployment .
- Although Cloud Deploy offers deployment verification , which you can use to run arbitrary containers to validate a deployment, analysis lets you use telemetry data from Google Cloud Observability or the monitoring service of your choice to evaluate the performance of your applications over time.

### "Class CloudDeployAsyncClient (2.10.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- Source ID: `site-python-reference`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- A DeployPolicy inhibits manual or automation-driven actions within a Delivery Pipeline or Target. create release create release ( request : typing .

### Configuration schema reference \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- Source ID: `site-docs-reference`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Delivery pipeline config apiVersion : deploy.cloud.google.com/v1 kind : DeliveryPipeline metadata : name : annotations : labels : description : suspended : serialPipeline : stages : - targetId : profiles : [] Deployment strategies One of: standard: canary: See the strategy section in this document for details. strategy : standard : predeploy : tasks : [] verify : tasks : [] analysis : postdeploy : tasks : [] deployParameters : - values : matchTargetLabels : - targetId : profiles : [] strategy : deployParameters : --- Target config apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : annotations : labels : description : multiTarget : targetIds : [] deployParameters : requireApproval : Runtimes one of the following runtimes: gke : cluster : dnsEndpoint : internalIp : proxyUrl : or: anthosCluster : membership : or: run : location : or: customTarget : customTargetType : (End runtimes.
- Custom Canary configuration strategy : canary : Runtime configs are configured as shown in the Canary Deployment Strategy section of this document. runtimeConfig : Manual configuration for each canary phase customCanaryDeployment : - name : " PHASE1 NAME " percent : PERCENTAGE1 profiles : [ " PROFILE1 NAME " ] verify : tasks : [] - … - name : "stable" percent : 100 profiles : [ " LAST PROFILE NAME " ] analysis : [ ANALYSIS CONFIGS ] verify : tasks : [] verify The verify stanza can be included under strategy.standard , strategy.canary.canaryDeployment , or under each phase in strategy.canary.customCanaryDeployment .
- The analysis stanza differs based on whether you're configuring it for Google Cloud Observability or for a different provider using custom analysis . analysis for Google Cloud Observability The analysis stanza can be used directly inside a deployment strategy config ( strategy.standard.analysis , for a standard strategy).
- For Cloud Run targets strategy : canary : runtimeConfig : cloudRun : automaticTrafficControl : true false canaryDeployment : percentages : [ PERCENTAGES ] verify : tasks : [] analysis : For Cloud Run targets, AutomaticTrafficControl must be true unless you're configuring a custom canary .

### "Define analysis jobs that use Google Cloud Observability \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis](https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis)
- Source ID: `site-docs-root-2`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You now have a delivery pipeline in your project, and an analysis job, which will be part of the pipeline when you create a release.
- Learn how to grant roles . gcloud services enable clouddeploy.googleapis.com compute.googleapis.com Required roles To get the permissions that you need to create and use analysis jobs, ask your administrator to grant you the following IAM roles on the account for your project: Cloud Deploy Runner ( roles/clouddeploy.jobRunner ) Monitoring Alert Viewer ( roles/monitoring.alertPolicyViewer ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- The following is the syntax for configuring an analysis job when using a standard deployment strategy: strategy : standard : analysis : duration : DURATION googleCloud : alertPolicyChecks : - id : CHECK ID alertPolicies : - [ ALERT POLICY ID ] labels : [ KEY : VALUE ] Where: DURATION Is how long, in seconds, to run the analysis job.
- As another example, you can create a similar alerting policy on your application deployed to your staging environment, and if no alert fires during the duration of the analysis job, that job can trigger a promoteReleaseRule automation to promote the release to production.

