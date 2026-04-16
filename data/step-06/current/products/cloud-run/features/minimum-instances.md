---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.528Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Minimum instances"
feature_slug: "minimum-instances"
latest_feature_date: "2021-03-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesAsyncClient"
keywords:
  - "specified"
  - "minimum"
  - "number"
  - "keep"
  - "instances"
---

# Minimum instances

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Minimum instances let you keep a specified number of Cloud Run container instances warm and ready to serve requests; Cloud Run services can keep a minimum number of container instances warm to reduce latency and cold starts.

## Extended Definition

Minimum instances let you keep a specified number of Cloud Run container instances warm and ready to serve requests; Cloud Run services can keep a minimum number of container instances warm to reduce latency and cold starts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesAsyncClient)

## Supporting Pages

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Shutdown For Cloud Run services, an idle instance can be shut down at any time, including instances kept warm due to a configured minimum number of instances .
- Unless an instance must be kept idle due to the minimum number of instances configuration setting, it won't be kept idle for longer than 15 minutes.
- If you have configured a number of minimum instances , you must use instance-based billing so that CPU is allocated outside of requests .
- When a revision does not receive any traffic, it is scaled in to the minimum number of instances configured (zero by default).

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Shutdown For Cloud Run services, an idle instance can be shut down at any time, including instances kept warm due to a configured minimum number of instances .
- Unless an instance must be kept idle due to the minimum number of instances configuration setting, it won't be kept idle for longer than 15 minutes.
- If you have configured a number of minimum instances , you must use instance-based billing so that CPU is allocated outside of requests .
- When a revision does not receive any traffic, it is scaled in to the minimum number of instances configured (zero by default).

### "Class InstancesAsyncClient (0.16.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesAsyncClient)
- Source ID: `site-python-reference`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,InstancesTransport,Callable[..., InstancesTransport]]] The transport to use, or a Callable that constructs and returns a new transport to use.
- Format: projects/{project}/locations/{location}/instances/{instance} , where {project} can be project id or number.
- Format: projects/{project}/locations/{location}/instances/{instance} , where {project} can be project id or number.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 async def sample list instances(): Create a client client = run v2 .

