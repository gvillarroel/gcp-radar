---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.401Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Java 25 runtime"
feature_slug: "java-25-runtime"
latest_feature_date: "2025-12-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview"
  - "https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-java"
  - "https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus"
keywords:
  - "java"
  - "runtime"
  - "supports"
---

# Java 25 runtime

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports the Java 25 runtime for services; Cloud Run supports the Java 25 runtime for services.

## Extended Definition

Cloud Run supports the Java 25 runtime for services; Cloud Run supports the Java 25 runtime for services.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview)
- [https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-java](https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-java)
- [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus)

## Supporting Pages

### "google-cloud-run overview (0.88.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview)
- Source ID: `site-java-reference`
- Final score: 33
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Run Product Reference GitHub Repository Maven artifact Getting Started In order to use this library, you first need to go through the following steps: Install a JDK (Java Development Kit) Select or create a Cloud Platform project Enable billing for your project Enable the API Set up authentication Use the Cloud Run for Java To ensure that your project uses compatible versions of the libraries and their component artifacts, import com.google.cloud:libraries-bom and use the BOM to specify dependency versions.
- Managing Library Versions We recommend using the com.google.cloud:libraries-bom installation method detailed above to streamline dependency management across multiple Cloud Java client libraries.
- Home Documentation Developer tools Java Client libraries Send feedback google-cloud-run overview (0.88.0) Stay organized with collections Save and categorize content based on your preferences.
- Choosing the Right Version ID Each Cloud Java client library may contain packages tied to specific Version IDs (e.g., v1 , v2alpha ).

### "Quickstart: build and create a Java job in Cloud Run \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-java](https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-java)
- Source ID: `site-docs-reference-2`
- Final score: 32
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JobsExample < / mainClass > < / manifest > < / archive > < / configuration > < / plugin > < / plugins > < / build > < / project > Create a project.toml file with the following contents, to build with the Java version supported by Buildpack: Default version is Java 11 - See https : //cloud.google.com/docs/buildpacks/java#specify a java version Match the version required in pom . xml by setting it here - See https : //cloud.google.com/docs/buildpacks/set-environment-variables#build the application with environment variables [[ build . env ]] name = "GOOGLE RUNTIME VERSION" value = "17" Your code is complete and ready to be packaged in a container.
- Success: You created and executed a job using the Java runtime in Cloud Run.
- Copy the following sample lines into it: package com.example ; abstract class JobsExample { // These values are provided automatically by the Cloud Run Jobs runtime. private static String CLOUD RUN TASK INDEX = System . getenv (). getOrDefault ( "CLOUD RUN TASK INDEX" , "0" ); private static String CLOUD RUN TASK ATTEMPT = System . getenv (). getOrDefault ( "CLOUD RUN TASK ATTEMPT" , "0" ); // User-provided environment variables private static int SLEEP MS = Integer . parseInt ( System . getenv (). getOrDefault ( "SLEEP MS" , "0" )); private static float FAIL RATE = Float . parseFloat ( System . getenv (). getOrDefault ( "FAIL RATE" , "0.0" )); // Start script public static void main ( String [] args ) { System . out . println ( String . format ( "Starting Task #%s, Attempt #%s..." , CLOUD RUN TASK INDEX , CLOUD RUN TASK ATTEMPT )); try { runTask ( SLEEP MS , FAIL RATE ); } catch ( RuntimeException InterruptedException e ) { System . err . println ( String . format ( "Task #%s, Attempt #%s failed." , CLOUD RUN TASK INDEX , CLOUD RUN TASK ATTEMPT )); // Catch error and denote process-level failure to retry Task System . exit ( 1 ); } } static void runTask ( int sleepTime , float failureRate ) throws InterruptedException { // Simulate work if ( sleepTime > 0 ) { Thread . sleep ( sleepTime ); } // Simulate errors if ( failureRate < 0 failureRate > 1 ) { System . err . println ( String . format ( "Invalid FAIL RATE value: %s.
- Must be a float between 0 and 1 inclusive." , failureRate )); return ; } if ( Math . random () < failureRate ) { throw new RuntimeException ( "Task Failed." ); } System . out . println ( String . format ( "Completed Task #%s" , CLOUD RUN TASK INDEX )); } } Cloud Run jobs allows users to specify the number of tasks the job is to execute.

### "Autoscale worker pools based on Prometheus metrics \_|\_ Cloud Run \_|\_\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deploy the service to scale your workloads To deploy the service to scale your worker pool, run the following command with a prebuilt container image: CREMA CONFIG PARAM VERSION = projects/ $PROJECT ID /locations/ $PARAMETER REGION /parameters/ $PARAMETER ID /versions/ $PARAMETER VERSION IMAGE = us-central1-docker.pkg.dev/cloud-run-oss-images/crema-v1/autoscaler:1.0 gcloud beta run deploy $CREMA SERVICE NAME \ --image = ${ IMAGE } \ --region = ${ REGION } \ --service-account = " ${ CREMA SA NAME } " \ --no-allow-unauthenticated \ --no-cpu-throttling \ --base-image = us-central1-docker.pkg.dev/serverless-runtimes/google-24/runtimes/java25 \ --labels = created-by = crema \ --set-env-vars = "CREMA CONFIG= ${ CREMA CONFIG PARAM VERSION } ,OUTPUT SCALER METRICS=True" Test your autoscaling service To verify your autoscaling service is working correctly, check the Logs tab of the Cloud Run service .
- Java is a registered trademark of Oracle and/or its affiliates.

