---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:01.656Z"
product_name: "Cloud Scheduler"
product_slug: "cloud-scheduler"
feature_name: "Retry configuration in Cloud Scheduler Console"
feature_slug: "retry-configuration-in-cloud-scheduler-console"
latest_feature_date: "2021-04-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/scheduler/docs/creating"
  - "https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.CloudSchedulerGrpc.CloudSchedulerBlockingStub"
keywords:
  - "retry"
  - "configuration"
  - "in"
  - "scheduler"
  - "console"
  - "the"
  - "supports"
  - "configuring"
---

# Retry configuration in Cloud Scheduler Console

Product: Cloud Scheduler
Coverage: MEDIUM

## Step 02 Summary

The Cloud Scheduler Console supports configuring retry settings for all target types.

## Extended Definition

The Cloud Scheduler Console supports configuring retry settings for all target types.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/scheduler/docs/creating](https://docs.cloud.google.com/scheduler/docs/creating)
- [https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerClient](https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.CloudSchedulerGrpc.CloudSchedulerBlockingStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.CloudSchedulerGrpc.CloudSchedulerBlockingStub)

## Supporting Pages

### Manage cron jobs \_|\_ Cloud Scheduler \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/scheduler/docs/creating](https://docs.cloud.google.com/scheduler/docs/creating)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Console In the Google Cloud console, go to the Cloud Scheduler page.
- Console In the Google Cloud console, go to the Cloud Scheduler page.
- Cloud Scheduler retries the job according to the retry config.
- Console In the Google Cloud console, go to Cloud Scheduler .

### "Class CloudSchedulerAsyncClient (2.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import scheduler v1 async def sample create job(): Create a client client = scheduler v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import scheduler v1 async def sample delete job(): Create a client client = scheduler v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import scheduler v1 async def sample resume job(): Create a client client = scheduler v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import scheduler v1 async def sample update job(): Create a client client = scheduler v1 .

### "Class CloudSchedulerClient (2.19.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerClient](https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerClient)
- Source ID: `site-python-reference`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import scheduler v1 def sample create job(): Create a client client = scheduler v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import scheduler v1 def sample delete job(): Create a client client = scheduler v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import scheduler v1 def sample resume job(): Create a client client = scheduler v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import scheduler v1 def sample update job(): Create a client client = scheduler v1 .

### "Class CloudSchedulerGrpc.CloudSchedulerBlockingStub (2.88.0) \_|\_ Java\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.CloudSchedulerGrpc.CloudSchedulerBlockingStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.CloudSchedulerGrpc.CloudSchedulerBlockingStub)
- Source ID: `site-java-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Inheritance java.lang.Object > io.grpc.stub.AbstractStub > io.grpc.stub.AbstractBlockingStub > CloudSchedulerGrpc.CloudSchedulerBlockingStub Inherited Members io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel) io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T) io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.getCallOptions() io.grpc.stub.AbstractStub.getChannel() io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials) io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel) io.grpc.stub.AbstractStub.withCompression(java.lang.String) io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline) io.grpc.stub.AbstractStub.withDeadlineAfter(java.time.Duration) io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit) io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor) io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...) io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int) io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int) io.grpc.stub.AbstractStub.withOnReadyThreshold(int) io.grpc.stub.AbstractStub.withWaitForReady() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods build(Channel channel, CallOptions callOptions) protected CloudSchedulerGrpc .
- When this method is called, Cloud Scheduler will dispatch the job, even if the job is already running.
- 2.88.0 (latest) 2.87.0 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.13 2.2.0 2.1.23 public static final class CloudSchedulerGrpc .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]

