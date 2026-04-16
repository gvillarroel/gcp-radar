---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.437Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Service-level maximum instances"
feature_slug: "service-level-maximum-instances"
latest_feature_date: "2025-06-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/configuring"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
keywords:
  - "applying"
  - "configuration"
  - "maximum"
  - "level"
  - "instances"
  - "instance"
  - "supports"
---

# Service-level maximum instances

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports applying maximum instance configuration at the service level.

## Extended Definition

Cloud Run supports applying maximum instance configuration at the service level.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)

## Supporting Pages

### Configure Cloud Run services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- Source ID: `site-docs-reference-2`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- If you need to change the default number of container instances that are kept warm, ready to receive requests, you can set revision-level maximum instances and minimum instances .
- Setting a maximum number of instances can help to curb costs and guard against abnormally high request levels .
- You can control how many instances your Cloud Run service creates to serve requests by setting maximum instances and minimum instances .
- By default, Cloud Run automatically scales out to a specified or default maximum number of instances.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Startup Cloud Run worker pools instances start the container with the entrypoint you specify in the container image or in the worker pool configuration.
- Unless an instance must be kept idle due to the minimum number of instances configuration setting, it won't be kept idle for longer than 15 minutes.
- Container requirements When deploying containers to Cloud Run, the following requirements must be met: Container deployed to services must listen for requests on the correct port A Cloud Run service starts Cloud Run instances to handle incoming requests.
- A request waiting for an instance will be kept pending in a queue as follows: Requests will pend for up to 3.5 times average startup time of container instances of this service, or 10 seconds, whichever is greater.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Startup Cloud Run worker pools instances start the container with the entrypoint you specify in the container image or in the worker pool configuration.
- Unless an instance must be kept idle due to the minimum number of instances configuration setting, it won't be kept idle for longer than 15 minutes.
- Container requirements When deploying containers to Cloud Run, the following requirements must be met: Container deployed to services must listen for requests on the correct port A Cloud Run service starts Cloud Run instances to handle incoming requests.
- A request waiting for an instance will be kept pending in a queue as follows: Requests will pend for up to 3.5 times average startup time of container instances of this service, or 10 seconds, whichever is greater.

