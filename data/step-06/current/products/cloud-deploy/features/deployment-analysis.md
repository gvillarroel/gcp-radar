---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.658Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Deployment analysis"
feature_slug: "deployment-analysis"
latest_feature_date: "2026-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/analysis"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-analysis"
  - "https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary"
keywords:
  - "deployment"
  - "analysis"
  - "monitors"
  - "deployed"
  - "application"
  - "performance"
  - "can"
  - "automatically"
---

# Deployment analysis

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Deployment analysis monitors deployed application performance and can automatically trigger actions such as rollbacks.

## Extended Definition

Deployment analysis monitors deployed application performance and can automatically trigger actions such as rollbacks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/analysis](https://docs.cloud.google.com/deploy/docs/analysis)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-analysis](https://docs.cloud.google.com/deploy/docs/deploy-app-analysis)
- [https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary](https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary)

## Supporting Pages

### Run analysis jobs in Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/analysis](https://docs.cloud.google.com/deploy/docs/analysis)
- Source ID: `site-docs-reference-2`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Although Cloud Deploy offers deployment verification , which you can use to run arbitrary containers to validate a deployment, analysis lets you use telemetry data from Google Cloud Observability or the monitoring service of your choice to evaluate the performance of your applications over time.
- For example, if you want to run an analysis on your application after it's deployed to staging , then automatically promote the release to prod if the analysis completes with no alerts, you can use a promoteReleaseRule automation .
- The analysis job consists of one or more analysis checks, each of which evaluates the behavior of your deployed application based on logs or metrics from Google Cloud Observability or from your metrics provider.
- The analysis job runs After your application is deployed (and after any verify job completes, if there is one), your metrics provider collects telemetry on your running application.

### "Quickstart: Run analysis on your application after deploying it \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-analysis](https://docs.cloud.google.com/deploy/docs/deploy-app-analysis)
- Source ID: `site-docs-reference-required-3`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A failed analysis The analysis job we specified in our delivery pipeline config runs as part of this rollout, after the application is deployed.
- The application is automatically deployed into the one target configured for this delivery pipeline.
- After the application is deployed, the analysis runs as a job in the rollout.
- In the deploy-analysis-run-quickstart directory, create a new file, clouddeploy.yaml , with the following contents: apiVersion : deploy.cloud.google.com/v1 kind : DeliveryPipeline metadata : name : deploy-analysis-demo-app-run description : main application pipeline serialPipeline : stages : - targetId : analysis-staging profiles : [] strategy : standard : analysis : duration : 300s googleCloud : alertPolicyChecks : - id : check-1 alertPolicies : - ALERT POLICY ID --- apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : analysis-staging description : staging Run service run : location : projects/ PROJECT ID /locations/us-central1 In this YAML, replace ALERT POLICY ID with the output from the gcloud monitoring policies list command you ran previously , and replace PROJECT ID with the ID of the project you're using.

### Use a canary deployment strategy \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary](https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary)
- Source ID: `site-docs-reference-2`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A canary deployment is a progressive rollout of an application that splits traffic between an already-deployed version and a new version, rolling it out to a subset of users before rolling out fully.
- Use deploy analysis with a canary deployment strategy In a canary deployment strategy, you can use deploy analysis with some or all phases (except stable ) to help determine when to advance a rollout to the next phase.
- Home Documentation Application development Cloud Deploy Guides Send feedback Use a canary deployment strategy Stay organized with collections Save and categorize content based on your preferences.
- And you can combine the analysis with an advanceRolloutRule automation so that the rollout advances automatically.

