---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.489Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Permanent release abandonment"
feature_slug: "permanent-release-abandonment"
latest_feature_date: "2022-07-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/abandon-release"
  - "https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis"
  - "https://docs.cloud.google.com/deploy/docs/automation"
  - "https://docs.cloud.google.com/deploy/docs/analysis/custom-analysis"
keywords:
  - "permanent"
  - "release"
  - "abandonment"
  - "deploy"
  - "added"
  - "the"
  - "ability"
  - "to"
---

# Permanent release abandonment

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy added the ability to permanently abandon a release.

## Extended Definition

Cloud Deploy added the ability to permanently abandon a release.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/abandon-release](https://docs.cloud.google.com/deploy/docs/abandon-release)
- [https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis](https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis)
- [https://docs.cloud.google.com/deploy/docs/automation](https://docs.cloud.google.com/deploy/docs/automation)
- [https://docs.cloud.google.com/deploy/docs/analysis/custom-analysis](https://docs.cloud.google.com/deploy/docs/analysis/custom-analysis)

## Supporting Pages

### Abandon a release \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/abandon-release](https://docs.cloud.google.com/deploy/docs/abandon-release)
- Source ID: `site-docs-root-2`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Reasons for abandoning a release include the following, for example: There's a bug in the release There's a security issue in the release A feature included in the release has been deprecated To abandon a release, run the following command: gcloud deploy releases abandon RELEASE NAME --delivery-pipeline = PIPELINE NAME --region = REGION Where: RELEASE NAME Is the name of the release to abandon.
- IAM permissions The IAM permissions required for abandoning a release are included in the following roles: roles/clouddeploy.admin roles/clouddeploy.operator roles/clouddeploy.developer Rollouts from abandoned releases When you abandon a release, any rollouts created from that release that are in progress or queued continue to completion—they are not cancelled.
- This page describes how to permanently abandon a Cloud Deploy release.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### "Define analysis jobs that use Google Cloud Observability \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis](https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis)
- Source ID: `site-docs-root-2`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As another example, you can create a similar alerting policy on your application deployed to your staging environment, and if no alert fires during the duration of the analysis job, that job can trigger a promoteReleaseRule automation to promote the release to production.
- Learn how to grant roles . gcloud services enable clouddeploy.googleapis.com compute.googleapis.com Required roles To get the permissions that you need to create and use analysis jobs, ask your administrator to grant you the following IAM roles on the account for your project: Cloud Deploy Runner ( roles/clouddeploy.jobRunner ) Monitoring Alert Viewer ( roles/monitoring.alertPolicyViewer ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Apply your delivery pipeline configuration file To create a delivery pipeline with your analysis job, apply the configuration file using the following command: gcloud deploy apply FILE \ --region = REGION \ --project = PROJECT ID Replace the following: FILE With the name of your delivery pipeline configuration file , clouddeploy.yaml or whatever name you gave it.
- The following is the syntax for configuring an analysis job when using a standard deployment strategy: strategy : standard : analysis : duration : DURATION googleCloud : alertPolicyChecks : - id : CHECK ID alertPolicies : - [ ALERT POLICY ID ] labels : [ KEY : VALUE ] Where: DURATION Is how long, in seconds, to run the analysis job.

### Automate your deployment \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/automation](https://docs.cloud.google.com/deploy/docs/automation)
- Source ID: `site-docs-root-2`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Actions you can automate In Cloud Deploy, you can automate the following release and rollout activities: Promote a release automatically You can configure Cloud Deploy to promote your release automatically, upon a successful rollout to a target.
- For example, if you have three targets, dev , staging , and prod , you can configure an automation such that the release is promoted to prod , without further human interaction, upon a successful deployment into staging .
- Learn more about the resources used for release automation in Cloud Deploy.
- Identity and Access Management roles and permissions required In addition to the permissions you need to run any Cloud Deploy delivery pipeline, and to perform the tasks to be automated (like advancing a rollout), there are several permissions that are needed in order to perform certain operations on the Automation and AutomationRun resources: clouddeploy.automations.create clouddeploy.automations.delete clouddeploy.automations.get clouddeploy.automations.list clouddeploy.automations.update clouddeploy.automationRuns.cancel clouddeploy.automationRuns.get clouddeploy.automationRuns.list In addition to these permissions, each automation rule might require further permissions to perform the automated operation.

### Define a custom analysis \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/analysis/custom-analysis](https://docs.cloud.google.com/deploy/docs/analysis/custom-analysis)
- Source ID: `site-docs-root-2`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Learn how to grant roles . gcloud services enable clouddeploy.googleapis.com compute.googleapis.com Required roles To get the permissions that you need to create and use analysis jobs, ask your administrator to grant you the following IAM roles on the account for your project: Cloud Deploy Job Runner ( roles/clouddeploy.jobRunner ) IAM Service Account User ( roles/iam.serviceAccountUser ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To ensure that the Cloud Deploy service account has the necessary permissions to create and use analysis jobs, ask your administrator to grant the following IAM roles to the Cloud Deploy service account on your project: Important: You must grant these roles to the Cloud Deploy service account, not to your user account.
- Configure a custom analysis job A custom analysis job is the same as an analysis job that uses alerts from Google Cloud Observability, but the custom job uses one or more tasks that reference custom containers and the commands to run on those containers to process data from your metrics provider.
- IAM Service Account User ( roles/iam.serviceAccountUser ) Cloud Deploy Releaser ( roles/clouddeploy.releaser ) Cloud Deploy Operator ( roles/clouddeploy.operator ) For more information about granting roles, see Manage access to projects, folders, and organizations .

