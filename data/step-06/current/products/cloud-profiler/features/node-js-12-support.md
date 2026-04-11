---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:24:06.818Z"
product_name: "Cloud Profiler"
product_slug: "cloud-profiler"
feature_name: "Node.js 12 support"
feature_slug: "node-js-12-support"
latest_feature_date: "2020-04-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/profiler/docs/profiling-nodejs"
  - "https://docs.cloud.google.com/profiler/docs/profiling-external"
  - "https://docs.cloud.google.com/profiler/docs/about-profiler"
keywords:
  - "node"
  - "js"
  - "12"
  - "profiler"
  - "supports"
  - "profiling"
  - "applications"
  - "that"
---

# Node.js 12 support

Product: Cloud Profiler
Coverage: LOW

## Step 02 Summary

Cloud Profiler supports profiling applications that run on Node.js 12.

## Extended Definition

Cloud Profiler supports profiling applications that run on Node.js 12.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/profiler/docs/profiling-nodejs](https://docs.cloud.google.com/profiler/docs/profiling-nodejs)
- [https://docs.cloud.google.com/profiler/docs/profiling-external](https://docs.cloud.google.com/profiler/docs/profiling-external)
- [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler)

## Supporting Pages

### Profiling Node.js applications \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/profiling-nodejs](https://docs.cloud.google.com/profiler/docs/profiling-nodejs)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Set the logLevel value in the same object that provides the service context: require ( '@google-cloud/profiler' ). start ( { serviceContext : { ... } logLevel : 3 } ); Running with Linux Alpine The Node.js profiling agent for Linux Alpine is supported only for Google Kubernetes Engine configurations.
- Profiling Node.js applications This page describes how to modify your Node.js application to capture profiling data and have that data sent to your Google Cloud project.
- Supported environments: Compute Engine Google Kubernetes Engine (GKE) App Engine flexible environment App Engine standard environment Outside of Google Cloud (For information on the additional configuration requirements, see Profiling applications running outside of Google Cloud .) Enabling the Profiler API Before you use the profiling agent, ensure that the underlying Profiler API is enabled.
- Profiling Node.js applications is supported for Linux kernels whose standard C library is implemented with glibc or with musl .

### "Profiling applications running outside Google Cloud \_|\_ Cloud Profiler\

- URL: [https://docs.cloud.google.com/profiler/docs/profiling-external](https://docs.cloud.google.com/profiler/docs/profiling-external)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Node.js Specify an additional parameter, projectID , in the serviceContext object described in Profiling Node.js applications : projectId : ' GCP PROJECT ID ' , serviceContext : { ... } Python Specify an additional parameter, project id , in the start method call described in Profiling Python applications : googlecloudprofiler . start ( ... , project id = ' GCP PROJECT ID ' ) What's next Select the profiles to analyze Interact with the flame graph Filter the flame graph Focus the flame graph Compare profiles Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Go Specify an additional parameter, ProjectID , in the profiler.Config object described in Profiling Go applications : profiler .
- Grant the service account the roles/cloudprofiler.agent role , so that it can write profiling data.
- In this scenario, your application and the Cloud Profiler agent run outside Google Cloud, but you use the Cloud Profiler interface to analyze the profiling data.

### Cloud Profiler overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For information on running the Cloud Profiler agent, see: Profiling Go applications Profiling Java applications Profiling Node.js applications Profiling Python applications Profiling applications running outside Google Cloud Profiler interface After the agent has collected some profiling data, you can use the Profiler interface to see how the statistics for CPU and memory usage correlate with areas of your application.
- The following table summarizes the supported environments: Environments Go Java Node.js Python Compute Engine Y Y Y Y Google Kubernetes Engine Y Y Y Y App Engine flexible environment Y Y Y Y App Engine standard environment Y Y Y Y Managed Service for Apache Spark Y Dataflow Y Y Outside of Google Cloud Y Y Y Y The following table summarizes the supported operating systems: Operating systems Go Java Node.js Python Linux glibc implementation of the standard C library Y Y Y Y Linux musl implementation of the standard C library Y Y (Alpha) Y Y (Alpha) Performance impact Cloud Profiler creates a single profile by collecting profiling data, usually for 10 seconds, every 1 minute for a single instance of the configured service in a single Compute Engine zone.
- Cloud Profiler is a statistical, low-overhead profiler that continuously gathers CPU usage and memory-allocation information from your production applications.
- Types of profiling available Cloud Profiler supports different types of profiling based on the language in which a program is written.

