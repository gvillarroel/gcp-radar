---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:53.478Z"
product_name: "Cloud Profiler"
product_slug: "cloud-profiler"
feature_name: "Go 1.11 App Engine standard environment support"
feature_slug: "go-1-11-app-engine-standard-environment-support"
latest_feature_date: "2018-12-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/profiler/docs/profiling-go"
  - "https://docs.cloud.google.com/profiler/docs/profiling-java"
  - "https://docs.cloud.google.com/profiler/docs/profiling-python"
  - "https://docs.cloud.google.com/profiler/docs/about-profiler"
keywords:
  - "go"
  - "11"
  - "app"
  - "engine"
  - "standard"
  - "environment"
  - "profiler"
  - "supports"
---

# Go 1.11 App Engine standard environment support

Product: Cloud Profiler
Coverage: MEDIUM

## Step 02 Summary

Cloud Profiler supports profiling Go 1.11 applications in the App Engine standard environment.

## Extended Definition

Cloud Profiler supports profiling Go 1.11 applications in the App Engine standard environment.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go)
- [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java)
- [https://docs.cloud.google.com/profiler/docs/profiling-python](https://docs.cloud.google.com/profiler/docs/profiling-python)
- [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler)

## Supporting Pages

### Profiling Go applications \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go)
- Source ID: `site-docs-root`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported environments: Compute Engine Google Kubernetes Engine (GKE) App Engine flexible environment App Engine standard environment (requires Go 1.11 or higher) Outside of Google Cloud (For information on the additional configuration requirements, see Profiling applications running outside of Google Cloud .) Enabling the Profiler API Before you use the profiling agent, ensure that the underlying Profiler API is enabled.
- Start ( cfg ); err != nil { // TODO: Handle error. } } If you have dependencies in your source code that are fetched manually, then you might need to add the following to your build script or Dockerfile: go get cloud.google.com/go/profiler App Engine For the App Engine flexible environment and the App Engine standard environment, the code additions are nearly identical to those for Compute Engine and GKE.
- To update the Google Cloud CLI, run the following command: gcloud components update To run your application: Update the dependencies: go get cloud.google.com/go/profiler Deploy the application to your App Engine flexible environment or to your App Engine standard environment: gcloud app deploy [ DEPLOYMENT ] where DEPLOYMENT is the path to your configuration file.
- If you are using App Engine standard environment, see Migrating your app to Go 1.11 for detailed information on changes you might need to make to your application.

### Profiling Java applications \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java)
- Source ID: `site-docs-root`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Standard Environment Java 21 runtime environment If you don't use legacy bundled services, enable the profiler collection by modifying the app.yaml file to specify the agentpath flag using either of the following methods: Set the JAVA TOOL OPTIONS environment variable: runtime: java21 env variables: JAVA TOOL OPTIONS: "-agentpath:/opt/cprof/profiler java agent.so=-logtostderr,-cprof enable heap sampling=true" Specify the agentpath using the entrypoint element: runtime: java21 entrypoint: java \ -agentpath:/opt/cprof/profiler java agent.so = -logtostderr,-cprof enable heap sampling = true \ Main.java If you use legacy bundled services, enable the profiler collection by modifying the appengine-web.xml file to specify the agentpath flag using either of the following methods: Set the JAVA USER OPTS environment variable: <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <env-variables> <env-var name="JAVA USER OPTS" value="-agentpath:/opt/cprof/profiler java agent.so=-logtostderr,-cprof enable heap sampling=true" /> </env-variables> </appengine-web-app> Set the CPROF ENABLE environment variable: <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <env-variables> <env-var name="CPROF ENABLE" value="-agentpath:/opt/cprof/profiler java agent.so=-logtostderr,-cprof enable heap sampling=true" /> </env-variables> </appengine-web-app> Specify the agentpath using the entrypoint element: <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <entrypoint> java -agentpath:/opt/cprof/profiler java agent.so=-logtostderr,-cprof enable heap sampling=true </entrypoint> </appengine-web-app> If a new profile type is configured for collection, ensure that you specify a new service version when you deploy your application.
- Supported environments: Compute Engine Google Kubernetes Engine (GKE) App Engine flexible environment App Engine standard environment (requires App Engine SDK version 1.9.64 or later) Managed Service for Apache Spark (For information, see Configuring Cloud Profiler for Managed Service for Apache Spark Spark and Hadoop jobs .) Outside of Google Cloud (For information on the additional configuration requirements, see Profiling applications running outside of Google Cloud .) Enabling the Profiler API Before you use the profiling agent, ensure that the underlying Profiler API is enabled.
- RUN apt-get update \ && apt-get install wget \ && rm -rf /var/lib/apt/lists/ RUN mkdir -p /opt/cprof && \ wget -q -O- https://storage.googleapis.com/cloud-profiler/java/latest/profiler java agent.tar.gz \ tar xzv -C /opt/cprof CMD [ "java" , "-agentpath:/opt/cprof/profiler java agent.so= OPTION1 , OPTION2 " , "-jar" , " PATH TO YOUR JAR FILE " ] To use this Dockerfile with App Engine flexible environment, you need to do the following: Replace OPTION1 and OPTION2 with the agent configuration values needed for your application, and replace PATH TO YOUR JAR FILE with the path to your jar file.
- Profile types for Java: CPU time Heap (requires Java 11 or App Engine standard environment, disabled by default) Wall time (not available for Java 8 App Engine standard environment) Supported Java language versions: HotSpot-based JVMs (including Oracle JDK and some OpenJDK builds) for Java 8, 11 or later.

### Profiling Python applications \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/profiling-python](https://docs.cloud.google.com/profiler/docs/profiling-python)
- Source ID: `site-docs-root`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported environments: Compute Engine Google Kubernetes Engine (GKE) App Engine flexible environment App Engine standard environment (requires Python 3 runtime environment ) Outside of Google Cloud (For information on the additional configuration requirements, see Profiling applications running outside of Google Cloud .) Enabling the Profiler API Before you use the profiling agent, ensure that the underlying Profiler API is enabled.
- Standard Environment For App Engine standard environment, which requires that you use the Python 3 runtime environment, do the following: Add google-cloud-profiler to your requirements.txt file.
- Flexible Environment For App Engine flexible environment, do the following: Add google-cloud-profiler to your requirements.txt file.
- Compute Engine For Compute Engine, do the following: Install the C/C++ compiler and development tools: sudo apt - get install - y build - essential Install pip: sudo apt - get install - y python3 - pip Install the Profiler package: pip3 install google - cloud - profiler Import the googlecloudprofiler module and call the googlecloudprofiler.start function as early as possible in your initialization code: import googlecloudprofiler def main (): Profiler initialization.

### Cloud Profiler overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table summarizes the supported environments: Environments Go Java Node.js Python Compute Engine Y Y Y Y Google Kubernetes Engine Y Y Y Y App Engine flexible environment Y Y Y Y App Engine standard environment Y Y Y Y Managed Service for Apache Spark Y Dataflow Y Y Outside of Google Cloud Y Y Y Y The following table summarizes the supported operating systems: Operating systems Go Java Node.js Python Linux glibc implementation of the standard C library Y Y Y Y Linux musl implementation of the standard C library Y Y (Alpha) Y Y (Alpha) Performance impact Cloud Profiler creates a single profile by collecting profiling data, usually for 10 seconds, every 1 minute for a single instance of the configured service in a single Compute Engine zone.
- For information on running the Cloud Profiler agent, see: Profiling Go applications Profiling Java applications Profiling Node.js applications Profiling Python applications Profiling applications running outside Google Cloud Profiler interface After the agent has collected some profiling data, you can use the Profiler interface to see how the statistics for CPU and memory usage correlate with areas of your application.
- Components Cloud Profiler consists of the profiling agent, which collects the data, and a console interface on Google Cloud, which lets you view and analyze the data collected by the agent.
- Cloud Profiler is a statistical, low-overhead profiler that continuously gathers CPU usage and memory-allocation information from your production applications.

