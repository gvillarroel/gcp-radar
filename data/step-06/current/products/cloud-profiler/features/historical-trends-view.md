---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:24:06.817Z"
product_name: "Cloud Profiler"
product_slug: "cloud-profiler"
feature_name: "Historical trends view"
feature_slug: "historical-trends-view"
latest_feature_date: "2020-09-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/profiler/docs/history-view"
  - "https://docs.cloud.google.com/profiler/docs/about-profiler"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-profiler/latest/overview"
keywords:
  - "historical"
  - "trends"
  - "view"
  - "the"
  - "lets"
  - "users"
  - "review"
  - "profiler"
---

# Historical trends view

Product: Cloud Profiler
Coverage: LOW

## Step 02 Summary

The historical trends view lets users review Cloud Profiler profiling data over time.

## Extended Definition

The historical trends view lets users review Cloud Profiler profiling data over time.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view)
- [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-profiler/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-profiler/latest/overview)

## Supporting Pages

### Viewing historical trends \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Viewing historical trends Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- To view detailed information about a data point, hold the pointer over the data point to activate the tooltip: As illustrated in the previous screenshot, the tooltip displays the following: Function name Function filename Date Absolute usage and percentage usage Number of profiles used to generate the data point Filtering the charts To show or hide functions, you use filters.
- You can configure this view to display, or to hide, specific functions: Viewing the history of a specific function To view the average usage for a specific function, do one of the following: In the flame graph, place your pointer on a frame that contains the function of interest, and then click Show History in the frame's tooltip.
- Viewing the history of multiple functions To display the average usage for multiple functions, click History show chart : By default, this view displays the history for the 5 functions that have the highest average usage.

### Cloud Profiler overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Components Cloud Profiler consists of the profiling agent, which collects the data, and a console interface on Google Cloud, which lets you view and analyze the data collected by the agent.
- Analyzing data After Profiler has collected data, you can view and analyze this data using the Profiler interface.
- Cloud Profiler overview Understanding the performance of production systems is notoriously difficult.
- The following table summarizes the supported environments: Environments Go Java Node.js Python Compute Engine Y Y Y Y Google Kubernetes Engine Y Y Y Y App Engine flexible environment Y Y Y Y App Engine standard environment Y Y Y Y Managed Service for Apache Spark Y Dataflow Y Y Outside of Google Cloud Y Y Y Y The following table summarizes the supported operating systems: Operating systems Go Java Node.js Python Linux glibc implementation of the standard C library Y Y Y Y Linux musl implementation of the standard C library Y Y (Alpha) Y Y (Alpha) Performance impact Cloud Profiler creates a single profile by collecting profiling data, usually for 10 seconds, every 1 minute for a single instance of the configured service in a single Compute Engine zone.

### "google-cloud-profiler overview (2.88.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-profiler/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-profiler/latest/overview)
- Source ID: `site-java-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- 2.88.0 (latest) 2.87.0 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.5 2.2.0 2.1.10 Key Reference Links Cloud Profiler Description: Is a statistical, low-overhead profiler that continuously gathers CPU usage and memory-allocation information from your production applications.
- The example below demonstrates how you would import the BOM and include the google-cloud-profiler artifact. <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.79.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-profiler</artifactId> </dependency> </dependencies> Gradle BOMs are supported by default in Gradle 5.x or later.
- Cloud Profiler Product Reference GitHub Repository Maven artifact Getting Started In order to use this library, you first need to go through the following steps: Install a JDK (Java Development Kit) Select or create a Cloud Platform project Enable billing for your project Enable the API Set up authentication Use the Cloud Profiler for Java To ensure that your project uses compatible versions of the libraries and their component artifacts, import com.google.cloud:libraries-bom and use the BOM to specify dependency versions.
- The example below demonstrates how you would import the BOM and include the google-cloud-profiler artifact. implementation ( platform ( "com.google.cloud:libraries-bom:26.79.0" )) implementation ( "com.google.cloud:google-cloud-profiler" ) The platform and enforcedPlatform keywords supply dependency versions declared in a BOM.

