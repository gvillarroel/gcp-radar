---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.441Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "GPU for Cloud Run jobs"
feature_slug: "gpu-for-cloud-run-jobs"
latest_feature_date: "2025-06-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsClient"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.executions.ExecutionsClient"
keywords:
  - "execution"
  - "configuration"
  - "jobs"
---

# GPU for Cloud Run jobs

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run jobs support GPU configuration for job execution.

## Extended Definition

Cloud Run jobs support GPU configuration for job execution.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsClient)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.executions.ExecutionsClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.executions.ExecutionsClient)

## Supporting Pages

### "Class JobsAsyncClient (0.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The result type for the operation will be Execution Execution represents the configuration of a single execution.
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . execution path execution path ( project : str , location : str , job : str , execution : str ) - > str Returns a fully-qualified execution string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- JobsAsyncClient () Initialize request argument(s) request = iam policy pb2.TestIamPermissionsRequest( resource="resource value", permissions=['permissions value1', 'permissions value2'], ) Make the request response = await client. test iam permissions (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.iam.v1.iam policy pb2.TestIamPermissionsRequest , dict]] The request object.
- A execution an immutable resource that references a container image which is run to completion. secret path secret path ( project : str , secret : str ) - > str Returns a fully-qualified secret string. secret version path secret version path ( project : str , secret : str , version : str ) - > str Returns a fully-qualified secret version string. set iam policy set iam policy ( request : typing .

### "Class JobsClient (0.16.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsClient)
- Source ID: `site-python-reference`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The result type for the operation will be Execution Execution represents the configuration of a single execution.
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . execution path execution path ( project : str , location : str , job : str , execution : str ) - > str Returns a fully-qualified execution string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- JobsClient () Initialize request argument(s) request = iam policy pb2.TestIamPermissionsRequest( resource="resource value", permissions=['permissions value1', 'permissions value2'], ) Make the request response = client. test iam permissions (request=request) Handle the response print(response) Parameters Name Description request Union[ google.iam.v1.iam policy pb2.TestIamPermissionsRequest , dict] The request object.
- A execution an immutable resource that references a container image which is run to completion. secret path secret path ( project : str , secret : str ) - > str Returns a fully-qualified secret string. secret version path secret version path ( project : str , secret : str , version : str ) - > str Returns a fully-qualified secret version string. set iam policy set iam policy ( request : typing .

### "Class ExecutionsClient (0.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.executions.ExecutionsClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.executions.ExecutionsClient)
- Source ID: `site-python-reference`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Format: projects/{project}/locations/{location}/jobs/{job}/executions/{execution} , where {project} can be project id or number.
- Format: projects/{project}/locations/{location}/jobs/{job}/executions/{execution} , where {project} can be project id or number.
- Format: projects/{project}/locations/{location}/jobs/{job}/executions/{execution} , where {project} can be project id or number.
- Returns Type Description google.cloud.run v2.types.Execution Execution represents the configuration of a single execution.

