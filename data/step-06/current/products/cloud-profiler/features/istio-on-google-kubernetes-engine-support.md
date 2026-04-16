---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:53.472Z"
product_name: "Cloud Profiler"
product_slug: "cloud-profiler"
feature_name: "Istio on Google Kubernetes Engine support"
feature_slug: "istio-on-google-kubernetes-engine-support"
latest_feature_date: "2019-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/profiler/docs/profiling-python"
  - "https://docs.cloud.google.com/profiler/docs/profiling-java"
  - "https://docs.cloud.google.com/profiler/docs/profiling-go"
  - "https://docs.cloud.google.com/profiler/docs/profiling-nodejs"
keywords:
  - "istio"
  - "on"
  - "kubernetes"
  - "engine"
  - "profiler"
  - "supports"
  - "profiling"
  - "services"
---

# Istio on Google Kubernetes Engine support

Product: Cloud Profiler
Coverage: MEDIUM

## Step 02 Summary

Cloud Profiler supports profiling Istio services on Google Kubernetes Engine for Go, Java, Python, and Node.js workloads.

## Extended Definition

Cloud Profiler supports profiling Istio services on Google Kubernetes Engine for Go, Java, Python, and Node.js workloads.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/profiler/docs/profiling-python](https://docs.cloud.google.com/profiler/docs/profiling-python)
- [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java)
- [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go)
- [https://docs.cloud.google.com/profiler/docs/profiling-nodejs](https://docs.cloud.google.com/profiler/docs/profiling-nodejs)

## Supporting Pages

### Profiling Python applications \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/profiling-python](https://docs.cloud.google.com/profiler/docs/profiling-python)
- Source ID: `site-docs-root`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported environments: Compute Engine Google Kubernetes Engine (GKE) App Engine flexible environment App Engine standard environment (requires Python 3 runtime environment ) Outside of Google Cloud (For information on the additional configuration requirements, see Profiling applications running outside of Google Cloud .) Enabling the Profiler API Before you use the profiling agent, ensure that the underlying Profiler API is enabled.
- The Python profiling agent for Linux Alpine is supported only for Google Kubernetes Engine configurations.
- Compute Engine For Compute Engine, do the following: Install the C/C++ compiler and development tools: sudo apt - get install - y build - essential Install pip: sudo apt - get install - y python3 - pip Install the Profiler package: pip3 install google - cloud - profiler Import the googlecloudprofiler module and call the googlecloudprofiler.start function as early as possible in your initialization code: import googlecloudprofiler def main (): Profiler initialization.
- To log all messages, set verbose to 3 when starting the agent: googlecloudprofiler . start ( service = 'service name' , verbose = 3 ) Troubleshooting This section lists limitations, exceptions, and known issues that are specific to profiling Python applications.

### Profiling Java applications \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java)
- Source ID: `site-docs-root`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported environments: Compute Engine Google Kubernetes Engine (GKE) App Engine flexible environment App Engine standard environment (requires App Engine SDK version 1.9.64 or later) Managed Service for Apache Spark (For information, see Configuring Cloud Profiler for Managed Service for Apache Spark Spark and Hadoop jobs .) Outside of Google Cloud (For information on the additional configuration requirements, see Profiling applications running outside of Google Cloud .) Enabling the Profiler API Before you use the profiling agent, ensure that the underlying Profiler API is enabled.
- Standard Environment Java 21 runtime environment If you don't use legacy bundled services, enable the profiler collection by modifying the app.yaml file to specify the agentpath flag using either of the following methods: Set the JAVA TOOL OPTIONS environment variable: runtime: java21 env variables: JAVA TOOL OPTIONS: "-agentpath:/opt/cprof/profiler java agent.so=-logtostderr,-cprof enable heap sampling=true" Specify the agentpath using the entrypoint element: runtime: java21 entrypoint: java \ -agentpath:/opt/cprof/profiler java agent.so = -logtostderr,-cprof enable heap sampling = true \ Main.java If you use legacy bundled services, enable the profiler collection by modifying the appengine-web.xml file to specify the agentpath flag using either of the following methods: Set the JAVA USER OPTS environment variable: <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <env-variables> <env-var name="JAVA USER OPTS" value="-agentpath:/opt/cprof/profiler java agent.so=-logtostderr,-cprof enable heap sampling=true" /> </env-variables> </appengine-web-app> Set the CPROF ENABLE environment variable: <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <env-variables> <env-var name="CPROF ENABLE" value="-agentpath:/opt/cprof/profiler java agent.so=-logtostderr,-cprof enable heap sampling=true" /> </env-variables> </appengine-web-app> Specify the agentpath using the entrypoint element: <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <entrypoint> java -agentpath:/opt/cprof/profiler java agent.so=-logtostderr,-cprof enable heap sampling=true </entrypoint> </appengine-web-app> If a new profile type is configured for collection, ensure that you specify a new service version when you deploy your application.
- If the profiling agent can't communicate with the metadata service, then you need to use this option. -cprof gce metadata server retry count -cprof gce metadata server retry sleep sec Together, these two options define the retry policy that the profiler agent uses when it communicates with the Compute Engine metadata service . to gather your Google Cloud project ID and zone information.
- The Java profiling agent for Linux Alpine is supported only for Google Kubernetes Engine configurations.

### Profiling Go applications \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go)
- Source ID: `site-docs-root`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported environments: Compute Engine Google Kubernetes Engine (GKE) App Engine flexible environment App Engine standard environment (requires Go 1.11 or higher) Outside of Google Cloud (For information on the additional configuration requirements, see Profiling applications running outside of Google Cloud .) Enabling the Profiler API Before you use the profiling agent, ensure that the underlying Profiler API is enabled.
- Running with Linux Alpine The Go profiling agent for Linux Alpine is supported only for Google Kubernetes Engine configurations.
- Config { // Service and ServiceVersion can be automatically inferred when running // on App Engine. // ProjectID must be set if not running on GCP. // ProjectID: "my-project", }); err != nil { // TODO: Handle error. } } When you run the application locally, set the ProjectID (the ID of your Google Cloud project) and Service parameters in profiler.Config , since they cannot be derived from a local environment.
- Start ( cfg ); err != nil { // TODO: Handle error. } } If you have dependencies in your source code that are fetched manually, then you might need to add the following to your build script or Dockerfile: go get cloud.google.com/go/profiler App Engine For the App Engine flexible environment and the App Engine standard environment, the code additions are nearly identical to those for Compute Engine and GKE.

### Profiling Node.js applications \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/profiling-nodejs](https://docs.cloud.google.com/profiler/docs/profiling-nodejs)
- Source ID: `site-docs-root`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported environments: Compute Engine Google Kubernetes Engine (GKE) App Engine flexible environment App Engine standard environment Outside of Google Cloud (For information on the additional configuration requirements, see Profiling applications running outside of Google Cloud .) Enabling the Profiler API Before you use the profiling agent, ensure that the underlying Profiler API is enabled.
- Set the logLevel value in the same object that provides the service context: require ( '@google-cloud/profiler' ). start ( { serviceContext : { ... } logLevel : 3 } ); Running with Linux Alpine The Node.js profiling agent for Linux Alpine is supported only for Google Kubernetes Engine configurations.
- See Service name and version arguments for more information on these configuration options: require ( ' @google-cloud/profiler ' ). start ({ serviceContext : { service : 'your-service' , version : '1.0.0' , }, }); App Engine For App Engine flexible environment and for App Engine standard environment, the require code is similar to the following: require ( ' @google-cloud/profiler ' ). start (); In App Engine, the service and version parameters are derived from the environment, so you don't have to specify them.
- Compute Engine For Compute Engine, do the following: Install the latest version of Cloud Profiler: npm install @google-cloud/profiler Modify your application require code to create a serviceContext object that assigns to service the name of the service being profiled.

