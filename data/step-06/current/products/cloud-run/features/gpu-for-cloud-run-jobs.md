---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.899Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "GPU for Cloud Run jobs"
feature_slug: "gpu-for-cloud-run-jobs"
latest_feature_date: "2025-06-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsClient"
  - "https://docs.cloud.google.com/run/docs/container-contract"
keywords:
  - "gpu"
  - "for"
  - "run"
  - "jobs"
  - "configuration"
  - "job"
  - "execution"
---

# GPU for Cloud Run jobs

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run jobs support GPU configuration for job execution.

## Extended Definition

Cloud Run jobs support GPU configuration for job execution.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsClient)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)

## Supporting Pages

### "Class JobsAsyncClient (0.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 async def sample list jobs(): Create a client client = run v2 .
- The result type for the operation will be Job Job represents the configuration of a single job, which references a container image that is run to completion. crypto key path crypto key path ( project : str , location : str , key ring : str , crypto key : str ) - > str Returns a fully-qualified crypto key string. delete job delete job ( request : typing .
- ListJobsRequest ( parent="parent value", ) Make the request page result = client. list jobs (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.run v2.types.ListJobsRequest , dict]] The request object.
- The result type for the operation will be Job Job represents the configuration of a single job, which references a container image that is run to completion. delete operation delete operation ( request : typing .

### "Class JobsClient (0.16.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsClient)
- Source ID: `site-python-reference`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 def sample list jobs(): Create a client client = run v2 .
- The result type for the operation will be Job Job represents the configuration of a single job, which references a container image that is run to completion. crypto key path crypto key path ( project : str , location : str , key ring : str , crypto key : str ) - > str Returns a fully-qualified crypto key string. delete job delete job ( request : typing .
- ListJobsRequest ( parent="parent value", ) Make the request page result = client. list jobs (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.run v2.types.ListJobsRequest , dict] The request object.
- The result type for the operation will be Job Job represents the configuration of a single job, which references a container image that is run to completion. delete operation delete operation ( request : typing .

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- 8080 K SERVICE The name of the Cloud Run service being run. hello-world K REVISION The name of the Cloud Run revision being run. hello-world.1 K CONFIGURATION The name of the Cloud Run configuration that created the revision. hello-world Environment variables for jobs For Cloud Run jobs, the following environment variables are set: Name Description Example CLOUD RUN JOB The name of the Cloud Run job being run. hello-world CLOUD RUN EXECUTION The name of the Cloud Run execution being run. hello-world-abc CLOUD RUN TASK INDEX The index of this task.
- Container running in a job execution must exit upon completion For Cloud Run jobs, the container must exit with exit code 0 when the job has successfully completed, and exit with a non-zero exit code when the job has failed.
- For jobs For Cloud Run jobs, container instances run until the container instance exits, or until the task timeout is reached or until the container crashes.
- Outbound request timeouts For Cloud Run services and jobs, there is a timeout after 10 minutes of idle time for requests from your container to VPC .

