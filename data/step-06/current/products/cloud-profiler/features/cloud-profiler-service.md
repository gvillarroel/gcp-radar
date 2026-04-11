---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:24:06.821Z"
product_name: "Cloud Profiler"
product_slug: "cloud-profiler"
feature_name: "Cloud Profiler service"
feature_slug: "cloud-profiler-service"
latest_feature_date: "2019-03-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/profiler/docs/profiling-python"
  - "https://docs.cloud.google.com/profiler/docs/concepts-profiling"
  - "https://docs.cloud.google.com/profiler/docs/profiling-go"
keywords:
  - "profiler"
  - "analyzes"
  - "application"
  - "performance"
  - "using"
  - "continuous"
  - "profiling"
---

# Cloud Profiler service

Product: Cloud Profiler
Coverage: LOW

## Step 02 Summary

Cloud Profiler analyzes application performance using continuous profiling; Cloud Profiler analyzes application performance using continuous profiling.

## Extended Definition

Cloud Profiler analyzes application performance using continuous profiling; Cloud Profiler analyzes application performance using continuous profiling.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/profiler/docs/profiling-python](https://docs.cloud.google.com/profiler/docs/profiling-python)
- [https://docs.cloud.google.com/profiler/docs/concepts-profiling](https://docs.cloud.google.com/profiler/docs/concepts-profiling)
- [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go)

## Supporting Pages

### Profiling Python applications \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/profiling-python](https://docs.cloud.google.com/profiler/docs/profiling-python)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Supported environments: Compute Engine Google Kubernetes Engine (GKE) App Engine flexible environment App Engine standard environment (requires Python 3 runtime environment ) Outside of Google Cloud (For information on the additional configuration requirements, see Profiling applications running outside of Google Cloud .) Enabling the Profiler API Before you use the profiling agent, ensure that the underlying Profiler API is enabled.
- To log all messages, set verbose to 3 when starting the agent: googlecloudprofiler . start ( service = 'service name' , verbose = 3 ) Troubleshooting This section lists limitations, exceptions, and known issues that are specific to profiling Python applications.
- If your application can't safely run when signals are lost, then we recommend that you stop using Cloud Profiler.
- After enabling the profiler, the error log contains new entries: BlockingIOError: [Errno 11] Resource temporarily unavailable Exception ignored when trying to write to the signal wakeup fd GitHub issue Your application registered with the signal wakeup file descriptor, signal.set wakeup fd .

### Profiling concepts \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/concepts-profiling](https://docs.cloud.google.com/profiler/docs/concepts-profiling)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Profiler is a continuous profiling tool that is designed for applications running on Google Cloud: It's a statistical, or sampling, profiler that has low overhead and is suitable for production environments.
- Profile collection The role of the profiler agent is to capture profile data from your application and to transmit this data to the Profiler backend using the Profiler API.
- After your application is deployed, the profiling agent runs periodically to gather performance data and then sends that data to your Google Cloud project.
- After you have collected profile data for your application, you can analyze the data by using the Profiler interface.

### Profiling Go applications \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Supported environments: Compute Engine Google Kubernetes Engine (GKE) App Engine flexible environment App Engine standard environment (requires Go 1.11 or higher) Outside of Google Cloud (For information on the additional configuration requirements, see Profiling applications running outside of Google Cloud .) Enabling the Profiler API Before you use the profiling agent, ensure that the underlying Profiler API is enabled.
- To enable agent logging, set the DebugLogging option to true when starting the agent: profiler.Start(profiler.Config{..., DebugLogging: true}); Troubleshooting This section lists issues that are specific to profiling Go applications.
- Using Cloud Profiler In all of the supported environments, you use the Profiler by importing the package in your application and then initializing the Profiler as early as possible in your application.
- Config { // Service and ServiceVersion can be automatically inferred when running // on App Engine. // ProjectID must be set if not running on GCP. // ProjectID: "my-project", }); err != nil { // TODO: Handle error. } } When you run the application locally, set the ProjectID (the ID of your Google Cloud project) and Service parameters in profiler.Config , since they cannot be derived from a local environment.

