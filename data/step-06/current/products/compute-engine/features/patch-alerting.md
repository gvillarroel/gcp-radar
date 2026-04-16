---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.221Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "Patch alerting"
feature_slug: "patch-alerting"
latest_feature_date: "2021-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/autoscaler/scaling-schedules"
  - "https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.autoscalers.AutoscalersClient"
  - "https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.backend_services.BackendServicesClient"
keywords:
  - "patch"
  - "alerting"
  - "monitors"
  - "jobs"
  - "running"
  - "your"
  - "environment"
---

# Patch alerting

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Patch alerting monitors patch jobs running in your environment; Patch alerting monitors patch jobs running in your environment.

## Extended Definition

Patch alerting monitors patch jobs running in your environment; Patch alerting monitors patch jobs running in your environment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/compute/docs/autoscaler/scaling-schedules](https://docs.cloud.google.com/compute/docs/autoscaler/scaling-schedules)
- [https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.autoscalers.AutoscalersClient](https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.autoscalers.AutoscalersClient)
- [https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.backend_services.BackendServicesClient](https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.backend_services.BackendServicesClient)

## Supporting Pages

### "Class AutoscalersClient (1.41.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.autoscalers.AutoscalersClient](https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.autoscalers.AutoscalersClient)
- Source ID: `site-python-reference`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.api core.extended operation.ExtendedOperation An object representing a extended long-running operation. patch unary patch unary ( request : typing .
- Only if this property is not set and transport was not explicitly provided, the endpoint is determined by the GOOGLE API USE MTLS ENDPOINT environment variable, which have one of the following values: "always" (always use the default mTLS endpoint), "never" (always use the default regular endpoint) and "auto" (auto-switch to the default mTLS endpoint if client certificate is present; this is the default value).
- The API endpoint is determined in the following order: (1) if client options.api endpoint if provided, use the provided one. (2) if GOOGLE API USE CLIENT CERTIFICATE environment variable is "always", use the default mTLS endpoint; if the environment variable is "never", use the default API endpoint; otherwise if client cert source exists, use the default mTLS endpoint, otherwise use the default API endpoint.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import compute v1 def sample patch(): Create a client client = compute v1 .

### "Class BackendServicesClient (1.41.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.backend_services.BackendServicesClient](https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.backend_services.BackendServicesClient)
- Source ID: `site-python-reference`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.api core.extended operation.ExtendedOperation An object representing a extended long-running operation. patch unary patch unary ( request : typing .
- Only if this property is not set and transport was not explicitly provided, the endpoint is determined by the GOOGLE API USE MTLS ENDPOINT environment variable, which have one of the following values: "always" (always use the default mTLS endpoint), "never" (always use the default regular endpoint) and "auto" (auto-switch to the default mTLS endpoint if client certificate is present; this is the default value).
- The API endpoint is determined in the following order: (1) if client options.api endpoint if provided, use the provided one. (2) if GOOGLE API USE CLIENT CERTIFICATE environment variable is "always", use the default mTLS endpoint; if the environment variable is "never", use the default API endpoint; otherwise if client cert source exists, use the default mTLS endpoint, otherwise use the default API endpoint.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import compute v1 def sample patch(): Create a client client = compute v1 .

### Scaling based on schedules \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/autoscaler/scaling-schedules](https://docs.cloud.google.com/compute/docs/autoscaler/scaling-schedules)
- Source ID: `site-docs-root-2`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, make the following call to create a schedule for a zonal MIG that has an existing autoscaling policy: PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT /zones/ ZONE /autoscalers?autoscaler= AUTOSCALER NAME { "autoscalingPolicy": { "minNumReplicas": MIN NUM REPLICAS , "maxNumReplicas": MAX NUM REPLICAS , "scalingSchedules": { " SCHEDULE NAME ": { "minRequiredReplicas": MIN REQ REPLICAS , "schedule": " CRON EXPRESSION ", "timeZone": " TIME ZONE ", "durationSec": DURATION , "description": " DESCRIPTION " }, ... } } } Replace the following: PROJECT : your project id .
- For example, make the following call to edit a schedule for a zonal MIG that has an existing autoscaling policy: PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT /zones/ ZONE /autoscalers?autoscaler= AUTOSCALER NAME { "autoscalingPolicy": { "scalingSchedules": { " SCHEDULE NAME ": { "minRequiredReplicas": MIN REQ REPLICAS , "schedule": " CRON EXPRESSION ", "timeZone": " TIME ZONE ", "durationSec": DURATION , "description": " DESCRIPTION " }, ... } } } Replace the following: PROJECT : your project id .
- For each scaling schedule that you want to delete, set the schedule configuration to null For example, make the following call to delete a schedule for a zonal MIG that has an existing autoscaling policy: PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT /zones/ ZONE /autoscalers?autoscaler= AUTOSCALER NAME { "autoscalingPolicy": { "scalingSchedules": { " SCHEDULE NAME ": null ... } } } Replace the following: PROJECT : your project id .
- For example, make the following call to re-enable a schedule for a zonal MIG that has an existing autoscaling policy: PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT /zones/ ZONE /autoscalers?autoscaler= AUTOSCALER NAME { "autoscalingPolicy": { "scalingSchedules": { " SCHEDULE NAME ": { "disabled": false }, ... } } } Replace the following: PROJECT : your project id .

