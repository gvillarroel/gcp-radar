---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:24:06.822Z"
product_name: "Cloud Profiler"
product_slug: "cloud-profiler"
feature_name: "Go 1.11 App Engine standard environment support"
feature_slug: "go-1-11-app-engine-standard-environment-support"
latest_feature_date: "2018-12-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/profiler/docs/profiling-go"
  - "https://docs.cloud.google.com/profiler/docs/profiling-java"
  - "https://docs.cloud.google.com/profiler/docs/profiling-python"
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
Coverage: LOW

## Step 02 Summary

Cloud Profiler supports profiling Go 1.11 applications in the App Engine standard environment.

## Extended Definition

Cloud Profiler supports profiling Go 1.11 applications in the App Engine standard environment.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go)
- [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java)
- [https://docs.cloud.google.com/profiler/docs/profiling-python](https://docs.cloud.google.com/profiler/docs/profiling-python)

## Supporting Pages

### Profiling Go applications \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Supported environments: Compute Engine Google Kubernetes Engine (GKE) App Engine flexible environment App Engine standard environment (requires Go 1.11 or higher) Outside of Google Cloud (For information on the additional configuration requirements, see Profiling applications running outside of Google Cloud .) Enabling the Profiler API Before you use the profiling agent, ensure that the underlying Profiler API is enabled.
- Start ( cfg ); err != nil { // TODO: Handle error. } } If you have dependencies in your source code that are fetched manually, then you might need to add the following to your build script or Dockerfile: go get cloud.google.com/go/profiler App Engine For the App Engine flexible environment and the App Engine standard environment, the code additions are nearly identical to those for Compute Engine and GKE.
- To update the Google Cloud CLI, run the following command: gcloud components update To run your application: Update the dependencies: go get cloud.google.com/go/profiler Deploy the application to your App Engine flexible environment or to your App Engine standard environment: gcloud app deploy [ DEPLOYMENT ] where DEPLOYMENT is the path to your configuration file.
- If you are using App Engine standard environment, see Migrating your app to Go 1.11 for detailed information on changes you might need to make to your application.

### Profiling Java applications \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Standard Environment Java 21 runtime environment If you don't use legacy bundled services, enable the profiler collection by modifying the app.yaml file to specify the agentpath flag using either of the following methods: Set the JAVA TOOL OPTIONS environment variable: runtime: java21 env variables: JAVA TOOL OPTIONS: "-agentpath:/opt/cprof/profiler java agent.so=-logtostderr,-cprof enable heap sampling=true" Specify the agentpath using the entrypoint element: runtime: java21 entrypoint: java \ -agentpath:/opt/cprof/profiler java agent.so = -logtostderr,-cprof enable heap sampling = true \ Main.java If you use legacy bundled services, enable the profiler collection by modifying the appengine-web.xml file to specify the agentpath flag using either of the following methods: Set the JAVA USER OPTS environment variable: <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <env-variables> <env-var name="JAVA USER OPTS" value="-agentpath:/opt/cprof/profiler java agent.so=-logtostderr,-cprof enable heap sampling=true" /> </env-variables> </appengine-web-app> Set the CPROF ENABLE environment variable: <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <env-variables> <env-var name="CPROF ENABLE" value="-agentpath:/opt/cprof/profiler java agent.so=-logtostderr,-cprof enable heap sampling=true" /> </env-variables> </appengine-web-app> Specify the agentpath using the entrypoint element: <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <entrypoint> java -agentpath:/opt/cprof/profiler java agent.so=-logtostderr,-cprof enable heap sampling=true </entrypoint> </appengine-web-app> If a new profile type is configured for collection, ensure that you specify a new service version when you deploy your application.
- Supported environments: Compute Engine Google Kubernetes Engine (GKE) App Engine flexible environment App Engine standard environment (requires App Engine SDK version 1.9.64 or later) Managed Service for Apache Spark (For information, see Configuring Cloud Profiler for Managed Service for Apache Spark Spark and Hadoop jobs .) Outside of Google Cloud (For information on the additional configuration requirements, see Profiling applications running outside of Google Cloud .) Enabling the Profiler API Before you use the profiling agent, ensure that the underlying Profiler API is enabled.
- RUN apt-get update \ && apt-get install wget \ && rm -rf /var/lib/apt/lists/ RUN mkdir -p /opt/cprof && \ wget -q -O- https://storage.googleapis.com/cloud-profiler/java/latest/profiler java agent.tar.gz \ tar xzv -C /opt/cprof CMD [ "java" , "-agentpath:/opt/cprof/profiler java agent.so= OPTION1 , OPTION2 " , "-jar" , " PATH TO YOUR JAR FILE " ] To use this Dockerfile with App Engine flexible environment, you need to do the following: Replace OPTION1 and OPTION2 with the agent configuration values needed for your application, and replace PATH TO YOUR JAR FILE with the path to your jar file.
- Profile types for Java: CPU time Heap (requires Java 11 or App Engine standard environment, disabled by default) Wall time (not available for Java 8 App Engine standard environment) Supported Java language versions: HotSpot-based JVMs (including Oracle JDK and some OpenJDK builds) for Java 8, 11 or later.

### Profiling Python applications \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/profiling-python](https://docs.cloud.google.com/profiler/docs/profiling-python)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Supported environments: Compute Engine Google Kubernetes Engine (GKE) App Engine flexible environment App Engine standard environment (requires Python 3 runtime environment ) Outside of Google Cloud (For information on the additional configuration requirements, see Profiling applications running outside of Google Cloud .) Enabling the Profiler API Before you use the profiling agent, ensure that the underlying Profiler API is enabled.
- Standard Environment For App Engine standard environment, which requires that you use the Python 3 runtime environment, do the following: Add google-cloud-profiler to your requirements.txt file.
- Flexible Environment For App Engine flexible environment, do the following: Add google-cloud-profiler to your requirements.txt file.
- Compute Engine For Compute Engine, do the following: Install the C/C++ compiler and development tools: sudo apt - get install - y build - essential Install pip: sudo apt - get install - y python3 - pip Install the Profiler package: pip3 install google - cloud - profiler Import the googlecloudprofiler module and call the googlecloudprofiler.start function as early as possible in your initialization code: import googlecloudprofiler def main (): Profiler initialization.

