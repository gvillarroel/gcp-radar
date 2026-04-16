---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.680Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Deployment metrics in console"
feature_slug: "deployment-metrics-in-console"
latest_feature_date: "2022-01-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/metrics"
  - "https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary"
  - "https://docs.cloud.google.com/deploy/docs/deployment-strategies/manage-rollout"
keywords:
  - "deployment"
  - "metrics"
  - "console"
  - "displays"
  - "deploy"
---

# Deployment metrics in console

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console displays deployment metrics for Cloud Deploy.

## Extended Definition

The Google Cloud console displays deployment metrics for Cloud Deploy.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/metrics](https://docs.cloud.google.com/deploy/docs/metrics)
- [https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary](https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary)
- [https://docs.cloud.google.com/deploy/docs/deployment-strategies/manage-rollout](https://docs.cloud.google.com/deploy/docs/deployment-strategies/manage-rollout)

## Supporting Pages

### Viewing metrics in Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/metrics](https://docs.cloud.google.com/deploy/docs/metrics)
- Source ID: `site-docs-reference-2`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Deploy makes the following deployment metrics available in Google Cloud console: Deployments Deployment frequency Deployment failure rate The Deployments metric The Deployments metric shows the number of successful and failed deployments from the selected delivery pipeline to your production cluster.
- About Cloud Deploy metrics All deployment metrics in Cloud Deploy have the following characteristics: All metrics are measured per delivery pipeline.
- Cloud Deploy shows metrics for how many deployments occur for a given delivery pipeline, over time, and how many of those deployments succeed.
- Metrics consider successful deployments, and some also report failed deployments.

### Use a canary deployment strategy \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary](https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary)
- Source ID: `site-docs-reference-2`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Proceed to the guide relevant to your specific target environment: Canary Deployments to Cloud Run Canary Deployments to GKE/GKE Enterprise using Service Networking Canary Deployments to GKE/GKE Enterprise using Gateway API Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Supported target types Canary deployment in Cloud Deploy supports all target types, including the following: Google Kubernetes Engine and GKE attached clusters Using service networking Using Gateway API Cloud Run (services and worker pools—not jobs) Canary also works with multi-targets .
- Types of canary Cloud Deploy lets you configure the following types of canary deployment: Automated With an automated canary deployment (for service networking , gateway api or Cloud Run ), you configure Cloud Deploy with a series of percentages that express a progressive deployment.
- How is a parallel canary different from single-target canaries As with single-target canary deployment, if you're deploying to GKE targets, you need a Kubernetes Deployment configuration and a Kubernetes Service configuration in your manifest.

### Manage rollouts \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/deployment-strategies/manage-rollout](https://docs.cloud.google.com/deploy/docs/deployment-strategies/manage-rollout)
- Source ID: `site-docs-reference-required-3`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SUCCEEDED When a job run finishes successfully, without failing or being terminated by a user, it's put into a SUCCEEDED state, which Manage your rollout Using the Google Cloud console or the Google Cloud SDK, you can do the following with a Cloud Deploy rollout: Advance the rollout Cancel the rollout Terminate a job run Ignore a job Retry a failed job If you're using parallel deployment with a canary deployment strategy, see how to manage parallel canary rollouts .
- After you terminate a job run, the job is considered failed and you can do any of the following: Leave it that way and disregard the failed rollout Retry the job Ignore the job and continue with the next job or phase in the rollout Note: When you're using a parallel deployment , you can terminate job runs on child rollouts only—not controller rollouts.
- SKIPPED When you're running a deployment strategy, such as a canary , Cloud Deploy skips to the stable phase in cases where there isn't yet a running version of the application with which to split traffic.
- SKIPPED When you're running a deployment strategy, such as a canary , Cloud Deploy skips to the stable phase in cases where there isn't yet a running version of the application with which to split traffic.

