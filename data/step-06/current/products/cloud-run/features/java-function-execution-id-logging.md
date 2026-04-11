---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.900Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Java function execution ID logging"
feature_slug: "java-function-execution-id-logging"
latest_feature_date: "2025-05-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-gcloud"
  - "https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-console"
  - "https://docs.cloud.google.com/run/docs/deploy-functions"
keywords:
  - "java"
  - "function"
  - "execution"
  - "id"
  - "logging"
  - "run"
  - "functions"
  - "can"
---

# Java function execution ID logging

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Java Cloud Run functions can add a unique execution ID to logs when using java.util.logging.Logger with Functions Framework 1.4.0 or later.

## Extended Definition

Java Cloud Run functions can add a unique execution ID to logs when using java.util.logging.Logger with Functions Framework 1.4.0 or later.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-gcloud](https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-gcloud)
- [https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-console](https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-console)
- [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)

## Supporting Pages

### "Quickstart: Deploy a Cloud Run function using the gcloud CLI \_|\_ Google\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-gcloud](https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-gcloud)
- Source ID: `site-docs-root-2`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License . -- > < project xmlns = "http://maven.apache.org/POM/4.0.0" xmlns : xsi = "http://www.w3.org/2001/XMLSchema-instance" xsi : schemaLocation = "http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" > < modelVersion>4 .0.0 < / modelVersion > < groupId>com . example . functions < / groupId > < artifactId>functions - hello - world < / artifactId > < version>1 .0.0 - SNAPSHOT < / version > < parent > < groupId>com . google . cloud . samples < / groupId > < artifactId>shared - configuration < / artifactId > < version>1 .2.0 < / version > < / parent > < dependencyManagement > < dependencies > < dependency > < artifactId>libraries - bom < / artifactId > < groupId>com . google . cloud < / groupId > < scope>import < / scope > < type>pom < / type > < version>26 .32.0 < / version > < / dependency > < / dependencies > < / dependencyManagement > < properties > < maven . compiler . target>11 < / maven . compiler . target > < maven . compiler . source>11 < / maven . compiler . source > < / properties > < dependencies > < !-- Required for Function primitives -- > < dependency > < groupId>com . google . cloud . functions < / groupId > < artifactId>functions - framework - api < / artifactId > < version>1 .1.0 < / version > < scope>provided < / scope > < / dependency > < !-- The following dependencies are only required for testing -- > < dependency > < groupId>com . google . truth < / groupId > < artifactId>truth < / artifactId > < version>1 .4.0 < / version > < scope>test < / scope > < / dependency > < dependency > < groupId>com . google . guava < / groupId > < artifactId>guava - testlib < / artifactId > < scope>test < / scope > < / dependency > < dependency > < groupId>org . mockito < / groupId > < artifactId>mockito - core < / artifactId > < version>5 .10.0 < / version > < scope>test < / scope > < / dependency > < / dependencies > < build > < plugins > < plugin > < !-- Google Cloud Functions Framework Maven plugin This plugin allows you to run Cloud Functions Java code locally .
- Fprint ( w , "Hello, World!" ) } Java Create a new directory named helloworld and change directory into it: mkdir helloworld cd helloworld Create the following project structure to contain the source directory and source file: mkdir -p /helloworld/src/main/java/functions touch /helloworld/src/main/java/functions/HelloWorld.java Update the HelloWorld.java file with the following Java code sample: package functions ; import com.google.cloud.functions.HttpFunction ; import com.google.cloud.functions.HttpRequest ; import com.google.cloud.functions.HttpResponse ; import java.io.BufferedWriter ; import java.io.IOException ; public class HelloWorld implements HttpFunction { // Simple function to return "Hello World" @Override public void service ( HttpRequest request , HttpResponse response ) throws IOException { BufferedWriter writer = response . getWriter (); writer . write ( "Hello World!" ); } } Create a pom.xml file in the helloworld directory, and add the following Java dependencies: < ? xml version = "1.0" encoding = "UTF-8" ? > < !-- Copyright 2020 Google LLC Licensed under the Apache License , Version 2.0 ( the "License" ); you may not use this file except in compliance with the License .
- HelloWorld < / functionTarget > < / configuration > < / plugin > < plugin > < groupId>org . apache . maven . plugins < / groupId > < artifactId>maven - surefire - plugin < / artifactId > < !-- version 3.0.0 - M4 does not load JUnit5 correctly -- > < !-- see https : //issues.apache.org/jira/browse/SUREFIRE-1750 -- > < version>3 .2.5 < / version > < configuration > < includes > < include > / Test . java < / include > < / includes > < skipTests>$ { skipTests } < / skipTests > < reportNameSuffix>sponge log < / reportNameSuffix > < trimStackTrace>false < / trimStackTrace > < / configuration > < / plugin > < / plugins > < / build > < / project > Ruby Create a new directory named helloworld and change directory into it: mkdir helloworld cd helloworld Create a file named app.rb and paste the following code into it: require "functions framework" FunctionsFramework . http "hello get" do request The request parameter is a Rack::Request object.
- Use the following terminal command to run a given function locally : mvn function : run - Drun . functionTarget = your . package . yourFunction -- > < groupId>com . google . cloud . functions < / groupId > < artifactId>function - maven - plugin < / artifactId > < version>0 .11.0 < / version > < configuration > < functionTarget>functions .

### "Quickstart: Deploy a Cloud Run function using the Google Cloud console \_\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-console](https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-console)
- Source ID: `site-docs-root-2`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Run is available in the following regions: Subject to Tier 1 pricing asia-east1 (Taiwan) asia-northeast1 (Tokyo) asia-northeast2 (Osaka) asia-south1 (Mumbai, India) asia-southeast3 (Bangkok) europe-north1 (Finland) Low CO 2 europe-north2 (Stockholm) Low CO 2 europe-southwest1 (Madrid) Low CO 2 europe-west1 (Belgium) Low CO 2 europe-west4 (Netherlands) Low CO 2 europe-west8 (Milan) europe-west9 (Paris) Low CO 2 me-west1 (Tel Aviv) northamerica-south1 (Mexico) us-central1 (Iowa) Low CO 2 us-east1 (South Carolina) us-east4 (Northern Virginia) us-east5 (Columbus) us-south1 (Dallas) Low CO 2 us-west1 (Oregon) Low CO 2 Subject to Tier 2 pricing africa-south1 (Johannesburg) asia-east2 (Hong Kong) asia-northeast3 (Seoul, South Korea) asia-southeast1 (Singapore) asia-southeast2 (Jakarta) asia-south2 (Delhi, India) australia-southeast1 (Sydney) australia-southeast2 (Melbourne) europe-central2 (Warsaw, Poland) europe-west10 (Berlin) europe-west12 (Turin) europe-west2 (London, UK) Low CO 2 europe-west3 (Frankfurt, Germany) europe-west6 (Zurich, Switzerland) Low CO 2 me-central1 (Doha) me-central2 (Dammam) northamerica-northeast1 (Montreal) Low CO 2 northamerica-northeast2 (Toronto) Low CO 2 southamerica-east1 (Sao Paulo, Brazil) Low CO 2 southamerica-west1 (Santiago, Chile) Low CO 2 us-west2 (Los Angeles) us-west3 (Salt Lake City) us-west4 (Las Vegas) If you already created a Cloud Run service, you can view the region in the Cloud Run dashboard in the Google Cloud console .
- Required roles To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles: Cloud Run Admin ( roles/run.admin ) on the project Cloud Run Source Developer ( roles/run.sourceDeveloper ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the service identity Logs Viewer ( roles/logging.viewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- You can generally select the region nearest to your users but you should consider the location of the other Google Cloud products that are used by your Cloud Run service.
- To build function containers in your own toolchain and deploy it to Cloud Run, see Build functions .

### Deploy a Cloud Run function \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required roles To deploy Cloud Run functions, you or your administrator must grant the following IAM roles to the deployer account and the service account: Click to view required roles for the deployer account To get the permissions that you need to build and deploy from source, ask your administrator to grant you the following IAM roles: Cloud Run Source Developer ( roles/run.sourceDeveloper ) on your project Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) on your project Service Account User ( roles/iam.serviceAccountUser ) on the Cloud Run service identity Click to view required roles for the Cloud Build service account Cloud Build automatically uses the Compute Engine default service account as the default Cloud Build service account to build your source code and Cloud Run resource, unless you override this behavior.
- What's next After you deploy a new Cloud Run function, you can do the following: View or delete functions Manage services View logs Build function containers in your own toolchain and deploy it to Cloud Run Trigger with events Trigger functions from Cloud Storage using Eventarc Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Terraform To manage functions using Terraform , you must build your function code into a container image, then define your Cloud Run service in a Terraform configuration using the google cloud run v2 service resource from the Google Cloud Platform Provider .
- Cloud Run is available in the following regions: Subject to Tier 1 pricing asia-east1 (Taiwan) asia-northeast1 (Tokyo) asia-northeast2 (Osaka) asia-south1 (Mumbai, India) asia-southeast3 (Bangkok) europe-north1 (Finland) Low CO 2 europe-north2 (Stockholm) Low CO 2 europe-southwest1 (Madrid) Low CO 2 europe-west1 (Belgium) Low CO 2 europe-west4 (Netherlands) Low CO 2 europe-west8 (Milan) europe-west9 (Paris) Low CO 2 me-west1 (Tel Aviv) northamerica-south1 (Mexico) us-central1 (Iowa) Low CO 2 us-east1 (South Carolina) us-east4 (Northern Virginia) us-east5 (Columbus) us-south1 (Dallas) Low CO 2 us-west1 (Oregon) Low CO 2 Subject to Tier 2 pricing africa-south1 (Johannesburg) asia-east2 (Hong Kong) asia-northeast3 (Seoul, South Korea) asia-southeast1 (Singapore) asia-southeast2 (Jakarta) asia-south2 (Delhi, India) australia-southeast1 (Sydney) australia-southeast2 (Melbourne) europe-central2 (Warsaw, Poland) europe-west10 (Berlin) europe-west12 (Turin) europe-west2 (London, UK) Low CO 2 europe-west3 (Frankfurt, Germany) europe-west6 (Zurich, Switzerland) Low CO 2 me-central1 (Doha) me-central2 (Dammam) northamerica-northeast1 (Montreal) Low CO 2 northamerica-northeast2 (Toronto) Low CO 2 southamerica-east1 (Sao Paulo, Brazil) Low CO 2 southamerica-west1 (Santiago, Chile) Low CO 2 us-west2 (Los Angeles) us-west3 (Salt Lake City) us-west4 (Las Vegas) If you already created a Cloud Run service, you can view the region in the Cloud Run dashboard in the Google Cloud console .

