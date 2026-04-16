---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:53.475Z"
product_name: "Cloud Profiler"
product_slug: "cloud-profiler"
feature_name: "Java 11 support"
feature_slug: "java-11-support"
latest_feature_date: "2019-05-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/profiler/docs/profiling-java"
  - "https://docs.cloud.google.com/profiler/docs/profiling-python"
  - "https://docs.cloud.google.com/profiler/docs/profiling-go"
  - "https://docs.cloud.google.com/profiler/docs/profiling-external"
keywords:
  - "java"
  - "11"
  - "profiler"
  - "supports"
  - "profiling"
  - "applications"
  - "that"
  - "run"
---

# Java 11 support

Product: Cloud Profiler
Coverage: MEDIUM

## Step 02 Summary

Cloud Profiler supports profiling applications that run on Java 11.

## Extended Definition

Cloud Profiler supports profiling applications that run on Java 11.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java)
- [https://docs.cloud.google.com/profiler/docs/profiling-python](https://docs.cloud.google.com/profiler/docs/profiling-python)
- [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go)
- [https://docs.cloud.google.com/profiler/docs/profiling-external](https://docs.cloud.google.com/profiler/docs/profiling-external)

## Supporting Pages

### Profiling Java applications \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java)
- Source ID: `site-docs-root`
- Final score: 295
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported environments: Compute Engine Google Kubernetes Engine (GKE) App Engine flexible environment App Engine standard environment (requires App Engine SDK version 1.9.64 or later) Managed Service for Apache Spark (For information, see Configuring Cloud Profiler for Managed Service for Apache Spark Spark and Hadoop jobs .) Outside of Google Cloud (For information on the additional configuration requirements, see Profiling applications running outside of Google Cloud .) Enabling the Profiler API Before you use the profiling agent, ensure that the underlying Profiler API is enabled.
- For example, to enable logging of error and fatal messages to standard error, append -logtostderr and ‑minloglevel=2 to the -agentpath configuration: java - agentpath : / opt / cprof / profiler java agent . so =- cprof service = myapp , - logtostderr , - minloglevel = 2 \ - jar myApp . jar Troubleshooting This section lists issues that are specific to profiling Java applications.
- Standard Environment Java 21 runtime environment If you don't use legacy bundled services, enable the profiler collection by modifying the app.yaml file to specify the agentpath flag using either of the following methods: Set the JAVA TOOL OPTIONS environment variable: runtime: java21 env variables: JAVA TOOL OPTIONS: "-agentpath:/opt/cprof/profiler java agent.so=-logtostderr,-cprof enable heap sampling=true" Specify the agentpath using the entrypoint element: runtime: java21 entrypoint: java \ -agentpath:/opt/cprof/profiler java agent.so = -logtostderr,-cprof enable heap sampling = true \ Main.java If you use legacy bundled services, enable the profiler collection by modifying the appengine-web.xml file to specify the agentpath flag using either of the following methods: Set the JAVA USER OPTS environment variable: <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <env-variables> <env-var name="JAVA USER OPTS" value="-agentpath:/opt/cprof/profiler java agent.so=-logtostderr,-cprof enable heap sampling=true" /> </env-variables> </appengine-web-app> Set the CPROF ENABLE environment variable: <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <env-variables> <env-var name="CPROF ENABLE" value="-agentpath:/opt/cprof/profiler java agent.so=-logtostderr,-cprof enable heap sampling=true" /> </env-variables> </appengine-web-app> Specify the agentpath using the entrypoint element: <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <entrypoint> java -agentpath:/opt/cprof/profiler java agent.so=-logtostderr,-cprof enable heap sampling=true </entrypoint> </appengine-web-app> If a new profile type is configured for collection, ensure that you specify a new service version when you deploy your application.
- Use the following installation command: wget -q -O- https://storage.googleapis.com/cloud-profiler/java/latest/profiler java agent alpine.tar.gz \ tar xzv -C /opt/cprof Flexible Environment When you use the Google Java 8 runtime base image or the Java 9 / Jetty 9 runtime base image, the Profiler agent is pre-installed, so there are no additional steps that you need to take to install the agent.

### Profiling Python applications \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/profiling-python](https://docs.cloud.google.com/profiler/docs/profiling-python)
- Source ID: `site-docs-root`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported environments: Compute Engine Google Kubernetes Engine (GKE) App Engine flexible environment App Engine standard environment (requires Python 3 runtime environment ) Outside of Google Cloud (For information on the additional configuration requirements, see Profiling applications running outside of Google Cloud .) Enabling the Profiler API Before you use the profiling agent, ensure that the underlying Profiler API is enabled.
- To log all messages, set verbose to 3 when starting the agent: googlecloudprofiler . start ( service = 'service name' , verbose = 3 ) Troubleshooting This section lists limitations, exceptions, and known issues that are specific to profiling Python applications.
- Standard Environment For App Engine standard environment, which requires that you use the Python 3 runtime environment, do the following: Add google-cloud-profiler to your requirements.txt file.
- Note: If you plan to profile applications that are running outside of Google Cloud, then you need to perform some configuration steps that aren't discussed in this document.

### Profiling Go applications \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go)
- Source ID: `site-docs-root`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported environments: Compute Engine Google Kubernetes Engine (GKE) App Engine flexible environment App Engine standard environment (requires Go 1.11 or higher) Outside of Google Cloud (For information on the additional configuration requirements, see Profiling applications running outside of Google Cloud .) Enabling the Profiler API Before you use the profiling agent, ensure that the underlying Profiler API is enabled.
- To enable agent logging, set the DebugLogging option to true when starting the agent: profiler.Start(profiler.Config{..., DebugLogging: true}); Troubleshooting This section lists issues that are specific to profiling Go applications.
- Note: If you plan to profile applications that are running outside of Google Cloud, then you need to perform some configuration steps that aren't discussed in this document.
- For example, if you have a service with two versions running across replicas in three zones, the profiler will create an average of 6 profiles per minute for that service.

### "Profiling applications running outside Google Cloud \_|\_ Cloud Profiler\

- URL: [https://docs.cloud.google.com/profiler/docs/profiling-external](https://docs.cloud.google.com/profiler/docs/profiling-external)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Node.js Specify an additional parameter, projectID , in the serviceContext object described in Profiling Node.js applications : projectId : ' GCP PROJECT ID ' , serviceContext : { ... } Python Specify an additional parameter, project id , in the start method call described in Profiling Python applications : googlecloudprofiler . start ( ... , project id = ' GCP PROJECT ID ' ) What's next Select the profiles to analyze Interact with the flame graph Filter the flame graph Focus the flame graph Compare profiles Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- In this scenario, your application and the Cloud Profiler agent run outside Google Cloud, but you use the Cloud Profiler interface to analyze the profiling data.
- Profiling applications running outside Google Cloud This page describes how to profile applications running outside Google Cloud.
- Go Specify an additional parameter, ProjectID , in the profiler.Config object described in Profiling Go applications : profiler .

