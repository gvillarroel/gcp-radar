---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.604Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Automatic Cloud Trace capture"
feature_slug: "automatic-cloud-trace-capture"
latest_feature_date: "2020-10-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesClient"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.executions.ExecutionsClient"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.RevisionsClient"
keywords:
  - "capture"
  - "traces"
  - "trace"
  - "captures"
  - "automatically"
  - "automatic"
  - "request"
---

# Automatic Cloud Trace capture

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run automatically captures request traces in Cloud Trace.

## Extended Definition

Cloud Run automatically captures request traces in Cloud Trace.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesClient)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.executions.ExecutionsClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.executions.ExecutionsClient)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.RevisionsClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.RevisionsClient)

## Supporting Pages

### "Class InstancesClient (0.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesClient)
- Source ID: `site-python-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Iterating over this object will yield results and resolve additional pages automatically. list operations list operations ( request : typing .
- If set to None, a transport is chosen automatically. client options Optional[Union[google.api core.client options.ClientOptions, dict]] Custom options for the client.
- Operation Deletes a Instance This snippet has been automatically generated and should be regarded as a code template only.
- Instance Gets a Instance This snippet has been automatically generated and should be regarded as a code template only.

### "Class ExecutionsClient (0.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.executions.ExecutionsClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.executions.ExecutionsClient)
- Source ID: `site-python-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Iterating over this object will yield results and resolve additional pages automatically. list operations list operations ( request : typing .
- If set to None, a transport is chosen automatically. client options Optional[Union[google.api core.client options.ClientOptions, dict]] Custom options for the client.
- This snippet has been automatically generated and should be regarded as a code template only.
- This snippet has been automatically generated and should be regarded as a code template only.

### "Class RevisionsClient (0.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.RevisionsClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.RevisionsClient)
- Source ID: `site-python-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Iterating over this object will yield results and resolve additional pages automatically. mesh path mesh path ( project : str , location : str , mesh : str ) - > str Returns a fully-qualified mesh string. parse common billing account path parse common billing account path ( path : str ) - > typing .
- If set to None, a transport is chosen automatically. client options Optional[Union[google.api core.client options.ClientOptions, dict]] Custom options for the client.
- This snippet has been automatically generated and should be regarded as a code template only.
- This snippet has been automatically generated and should be regarded as a code template only.

