---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.668Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Automated rollout phase advancement"
feature_slug: "automated-rollout-phase-advancement"
latest_feature_date: "2023-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deployment-strategies/manage-rollout"
  - "https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary"
  - "https://docs.cloud.google.com/deploy/docs/architecture"
keywords:
  - "automated"
  - "rollout"
  - "phase"
  - "advancement"
  - "moves"
  - "rollouts"
  - "through"
  - "phases"
---

# Automated rollout phase advancement

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Automated rollout phase advancement moves rollouts through their phases automatically.

## Extended Definition

Automated rollout phase advancement moves rollouts through their phases automatically.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deployment-strategies/manage-rollout](https://docs.cloud.google.com/deploy/docs/deployment-strategies/manage-rollout)
- [https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary](https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary)
- [https://docs.cloud.google.com/deploy/docs/architecture](https://docs.cloud.google.com/deploy/docs/architecture)

## Supporting Pages

### Manage rollouts \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/deployment-strategies/manage-rollout](https://docs.cloud.google.com/deploy/docs/deployment-strategies/manage-rollout)
- Source ID: `site-docs-reference-required-3`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you have a target configured to perform a simple canary deploy with 50% and stable (100%) phases only, you would need to advance the rollout once, from the canary-50 phase to the stable (100%) phase. gcloud gcloud deploy rollouts advance ROLLOUT NAME \ -- release = RELEASE NAME \ -- delivery - pipeline = PIPELINE NAME \ -- region = REGION Where: ROLLOUT NAME is the name of the current rollout which you're advancing to the next phase.
- HALTED In a parallel deployment , if one or more child rollouts fail, but at least one child rollout succeeds, the controller rollout is HALTED if there are more phases after the current one.
- See the Cloud Deploy service architecture documentation for more information about how rollouts, phases, jobs, and job runs fit in with the rest of Cloud Deploy.
- States within a rollout Rollouts, phases, jobs, and job runs all have states.

### Cloud Deploy service architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/architecture](https://docs.cloud.google.com/deploy/docs/architecture)
- Source ID: `site-docs-reference-required-3`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As shown in this diagram, a rollout includes the following: Phases A phase contains one or more jobs (for example deploy, or deploy and verify).
- Further, a rollout has one or more phases, and phases have one or more jobs and one or more job runs.
- Each rollout has one or more phases.
- Each rollout includes at least one phase, representing a collection of operations (jobs) in a rollout that are logically grouped together, for example, a deploy or a deploy and verify.

### Use a canary deployment strategy \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary](https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary)
- Source ID: `site-docs-reference-2`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If one or more child rollouts fail, but at least one child rollout succeeds, the controller rollout is HALTED if there are more phases after the current one.
- You can read more about rollout phases, jobs, and job runs in Manage rollouts .
- Use deploy analysis with a canary deployment strategy In a canary deployment strategy, you can use deploy analysis with some or all phases (except stable ) to help determine when to advance a rollout to the next phase.
- For example, if you configure a canary for 25%, 50%, and 75% increments, the rollout will have the following phases: canary-25 canary-50 canary-75 stable Note: For a GKE, Gateway API configuration , 100% is allowed.

