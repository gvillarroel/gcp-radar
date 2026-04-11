---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:24:06.821Z"
product_name: "Cloud Profiler"
product_slug: "cloud-profiler"
feature_name: "Python support"
feature_slug: "python-support"
latest_feature_date: "2019-03-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/profiler/docs/profiling-python"
  - "https://docs.cloud.google.com/profiler/docs/profiling-external"
  - "https://docs.cloud.google.com/profiler/docs/profiling-java"
keywords:
  - "python"
  - "profiler"
  - "supports"
  - "profiling"
  - "applications"
---

# Python support

Product: Cloud Profiler
Coverage: LOW

## Step 02 Summary

Cloud Profiler supports profiling Python applications.

## Extended Definition

Cloud Profiler supports profiling Python applications.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/profiler/docs/profiling-python](https://docs.cloud.google.com/profiler/docs/profiling-python)
- [https://docs.cloud.google.com/profiler/docs/profiling-external](https://docs.cloud.google.com/profiler/docs/profiling-external)
- [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java)

## Supporting Pages

### Profiling Python applications \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/profiling-python](https://docs.cloud.google.com/profiler/docs/profiling-python)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Supported environments: Compute Engine Google Kubernetes Engine (GKE) App Engine flexible environment App Engine standard environment (requires Python 3 runtime environment ) Outside of Google Cloud (For information on the additional configuration requirements, see Profiling applications running outside of Google Cloud .) Enabling the Profiler API Before you use the profiling agent, ensure that the underlying Profiler API is enabled.
- To log all messages, set verbose to 3 when starting the agent: googlecloudprofiler . start ( service = 'service name' , verbose = 3 ) Troubleshooting This section lists limitations, exceptions, and known issues that are specific to profiling Python applications.
- Profiling Python applications This page describes how to modify your Python application to capture profiling data and have that data sent to your Google Cloud project.
- RUN pip3 wheel --wheel-dir=/tmp/wheels google-cloud-profiler FROM python:3.7-alpine Copy over the directory containing wheels for the profiling agent.

### "Profiling applications running outside Google Cloud \_|\_ Cloud Profiler\

- URL: [https://docs.cloud.google.com/profiler/docs/profiling-external](https://docs.cloud.google.com/profiler/docs/profiling-external)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Node.js Specify an additional parameter, projectID , in the serviceContext object described in Profiling Node.js applications : projectId : ' GCP PROJECT ID ' , serviceContext : { ... } Python Specify an additional parameter, project id , in the start method call described in Profiling Python applications : googlecloudprofiler . start ( ... , project id = ' GCP PROJECT ID ' ) What's next Select the profiles to analyze Interact with the flame graph Filter the flame graph Focus the flame graph Compare profiles Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Go Specify an additional parameter, ProjectID , in the profiler.Config object described in Profiling Go applications : profiler .
- In this scenario, your application and the Cloud Profiler agent run outside Google Cloud, but you use the Cloud Profiler interface to analyze the profiling data.
- Profiling applications running outside Google Cloud This page describes how to profile applications running outside Google Cloud.

### Profiling Java applications \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Supported environments: Compute Engine Google Kubernetes Engine (GKE) App Engine flexible environment App Engine standard environment (requires App Engine SDK version 1.9.64 or later) Managed Service for Apache Spark (For information, see Configuring Cloud Profiler for Managed Service for Apache Spark Spark and Hadoop jobs .) Outside of Google Cloud (For information on the additional configuration requirements, see Profiling applications running outside of Google Cloud .) Enabling the Profiler API Before you use the profiling agent, ensure that the underlying Profiler API is enabled.
- For example, to enable logging of error and fatal messages to standard error, append -logtostderr and ‑minloglevel=2 to the -agentpath configuration: java - agentpath : / opt / cprof / profiler java agent . so =- cprof service = myapp , - logtostderr , - minloglevel = 2 \ - jar myApp . jar Troubleshooting This section lists issues that are specific to profiling Java applications.
- If the profiling agent can't communicate with the metadata service, then you need to use this option. -cprof gce metadata server retry count -cprof gce metadata server retry sleep sec Together, these two options define the retry policy that the profiler agent uses when it communicates with the Compute Engine metadata service . to gather your Google Cloud project ID and zone information.
- Agent configuration To configure the profiling agent, include the -agentpath flag when starting your application: - agentpath : INSTALL DIR / profiler java agent . so = OPTION1 , OPTION2 , OPTION3 In this expression, INSTALL DIR is the path to the profiling agent, while OPTION1 , OPTION2 , and OPTION3 are agent configuration options.

