---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.622Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Custom revision names"
feature_slug: "custom-revision-names"
latest_feature_date: "2020-01-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-console"
  - "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-c-plus-plus-service"
  - "https://docs.cloud.google.com/run/docs/authenticating/overview"
keywords:
  - "suffix"
  - "names"
  - "flag"
  - "revision"
  - "custom"
  - "through"
  - "supports"
---

# Custom revision names

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports custom revision names through the revision suffix flag.

## Extended Definition

Cloud Run supports custom revision names through the revision suffix flag.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-console](https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-console)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-c-plus-plus-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-c-plus-plus-service)
- [https://docs.cloud.google.com/run/docs/authenticating/overview](https://docs.cloud.google.com/run/docs/authenticating/overview)

## Supporting Pages

### "Quickstart: Deploy a Cloud Run function using the Google Cloud console \_\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-console](https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-console)
- Source ID: `site-docs-reference-2`
- Final score: 39
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You might also be able to get the required permissions through custom roles or other predefined roles .
- This deletes all revisions of the service. gcloud To delete a service, run the following command: gcloud run services delete SERVICE --region REGION Replace the following: SERVICE : name of your service.
- Service names must only begin with a letter, and contain up to 49 characters or less, including letters, numbers, or hyphens.
- When you created this project, you might have created a custom project ID that you want to use in the future.

### Authentication overview \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/authenticating/overview](https://docs.cloud.google.com/run/docs/authenticating/overview)
- Source ID: `site-docs-reference-required-6`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Quickstart: Build and deploy a C++ web app to Google Cloud with Cloud Run\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-c-plus-plus-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-c-plus-plus-service)
- Source ID: `site-docs-reference-2`
- Final score: 37
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You might also be able to get the required permissions through custom roles or other predefined roles .
- Write the sample application To write an application in C++: Create a new directory named helloworld and change directory into it: mkdir helloworld cd helloworld Create a new file named CMakeLists.txt and paste the following code into it: cmake minimum required ( VERSION 3.20 ) Define the project name and where to report bugs. set ( PACKAGE BUGREPORT "https://github.com/GoogleCloudPlatform/cpp-samples/issues" ) project ( cpp - samples - cloud - run - hello - world CXX ) find package ( functions framework cpp REQUIRED ) find package ( Threads ) add executable ( cloud run hello cloud run hello . cc ) target compile features ( cloud run hello PRIVATE cxx std 17 ) target link libraries ( cloud run hello functions - framework - cpp :: framework ) include ( GNUInstallDirs ) install ( TARGETS cloud run hello RUNTIME DESTINATION $ { CMAKE INSTALL BINDIR }) Create a new file named vcpkg.json and paste the following code into it: { "name" : "cpp-samples-cloud-run-hello-world" , "version-string" : "unversioned" , "homepage" : "https://github.com/GoogleCloudPlatform/cpp-samples/" , "description" : [ "Shows how to deploy a C++ application to Cloud Run." ], "dependencies" : [ "functions-framework-cpp" ] } Create a new file named cloud run hello.cc and paste the following code into it: #include <google/cloud/functions/framework.h> #include <cstdlib> namespace gcf = :: google :: cloud :: functions ; auto hello world http () { return gcf :: MakeFunction ([]( gcf :: HttpRequest const & / request / ) { std :: string greeting = "Hello " ; auto const target = std :: getenv ( "TARGET" ); greeting += target == nullptr ? "World" : target ; greeting += " \n " ; return gcf :: HttpResponse {} . set header ( "Content-Type" , "text/plain" ) . set payload ( greeting ); }); } int main ( int argc , char argv []) { return gcf :: Run ( argc , argv , hello world http ()); } This code creates a basic web server that listens on the port defined by the PORT environment variable .
- This deletes all revisions of the service. gcloud To delete a service, run the following command: gcloud run services delete SERVICE --region REGION Replace the following: SERVICE : name of your service.
- When you created this project, you might have created a custom project ID that you want to use in the future.

