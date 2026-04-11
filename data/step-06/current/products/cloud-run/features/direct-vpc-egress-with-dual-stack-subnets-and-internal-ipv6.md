---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.906Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Direct VPC egress with dual-stack subnets and internal IPv6"
feature_slug: "direct-vpc-egress-with-dual-stack-subnets-and-internal-ipv6"
latest_feature_date: "2025-01-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/cpp"
  - "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-c-plus-plus-service"
keywords:
  - "direct"
  - "vpc"
  - "egress"
  - "with"
  - "dual"
  - "stack"
  - "subnets"
  - "and"
---

# Direct VPC egress with dual-stack subnets and internal IPv6

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run services and jobs can use dual-stack subnets with internal IPv6 to send IPv4 and internal IPv6 traffic through Direct VPC egress.

## Extended Definition

Cloud Run services and jobs can use dual-stack subnets with internal IPv6 to send IPv4 and internal IPv6 traffic through Direct VPC egress.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/cpp](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/cpp)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-c-plus-plus-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-c-plus-plus-service)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- November 11, 2025 Feature You can set a task timeout up to 168 hours (7 days) for Cloud Run jobs. (GA) November 06, 2025 Feature Use dual-stack subnets with IPv6 to let your Cloud Run resources send IPv4 and internal IPv6 traffic to a VPC network with Direct VPC egress, and send external IPv6 traffic to the public internet. (GA) October 31, 2025 Feature Support for Java 25 runtime is in Preview .
- January 24, 2025 Feature You can now use dual-stack subnets with internal IPv6 to let your Cloud Run services and jobs send IPv4 and internal IPv6 traffic to a VPC network with Direct VPC egress. (Preview) January 22, 2025 Feature The Cloud Run Builder ( roles/run.builder ) IAM role is now available in preview.
- March 19, 2024 Feature You can now mount an NFS file share as a volume for Cloud Run services and jobs . (In Preview) March 14, 2024 Feature Direct VPC egress now supports Cloud NAT with Public NAT IP addresses (in Preview).
- March 26, 2025 Change Cloud Run services configured with Direct VPC egress now use only 2 times (2X) as many IP addresses as the number of instances for the duration of the instance plus up to 20 minutes, reduced from 4X as many IP addresses.

### "Quickstart: Build and deploy a C++ web app to Google Cloud with Cloud Run\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/cpp](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/cpp)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Write the sample application To write an application in C++: Create a new directory named helloworld and change directory into it: mkdir helloworld cd helloworld Create a new file named CMakeLists.txt and paste the following code into it: cmake minimum required ( VERSION 3.20 ) Define the project name and where to report bugs. set ( PACKAGE BUGREPORT "https://github.com/GoogleCloudPlatform/cpp-samples/issues" ) project ( cpp - samples - cloud - run - hello - world CXX ) find package ( functions framework cpp REQUIRED ) find package ( Threads ) add executable ( cloud run hello cloud run hello . cc ) target compile features ( cloud run hello PRIVATE cxx std 17 ) target link libraries ( cloud run hello functions - framework - cpp :: framework ) include ( GNUInstallDirs ) install ( TARGETS cloud run hello RUNTIME DESTINATION $ { CMAKE INSTALL BINDIR }) Create a new file named vcpkg.json and paste the following code into it: { "name" : "cpp-samples-cloud-run-hello-world" , "version-string" : "unversioned" , "homepage" : "https://github.com/GoogleCloudPlatform/cpp-samples/" , "description" : [ "Shows how to deploy a C++ application to Cloud Run." ], "dependencies" : [ "functions-framework-cpp" ] } Create a new file named cloud run hello.cc and paste the following code into it: #include <google/cloud/functions/framework.h> #include <cstdlib> namespace gcf = :: google :: cloud :: functions ; auto hello world http () { return gcf :: MakeFunction ([]( gcf :: HttpRequest const & / request / ) { std :: string greeting = "Hello " ; auto const target = std :: getenv ( "TARGET" ); greeting += target == nullptr ? "World" : target ; greeting += " \n " ; return gcf :: HttpResponse {} . set header ( "Content-Type" , "text/plain" ) . set payload ( greeting ); }); } int main ( int argc , char argv []) { return gcf :: Run ( argc , argv , hello world http ()); } This code creates a basic web server that listens on the port defined by the PORT environment variable .
- For Cloud Build to build your sources, grant the Cloud Build service account the Cloud Run Builder ( roles/run.builder ) role on your project: gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: SERVICE ACCOUNT EMAIL ADDRESS \ --role = roles/run.builder Replace PROJECT ID with your Google Cloud project ID and SERVICE ACCOUNT EMAIL ADDRESS with the email address of the Cloud Build service account.
- Cloud Run locations Cloud Run is regional, which means the infrastructure that runs your Cloud Run services is located in a specific region and is managed by Google to be redundantly available across all the zones within that region .
- Home Documentation Application hosting Cloud Run Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Quickstart: Build and deploy a C++ web app to Google Cloud with Cloud Run\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-c-plus-plus-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-c-plus-plus-service)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Write the sample application To write an application in C++: Create a new directory named helloworld and change directory into it: mkdir helloworld cd helloworld Create a new file named CMakeLists.txt and paste the following code into it: cmake minimum required ( VERSION 3.20 ) Define the project name and where to report bugs. set ( PACKAGE BUGREPORT "https://github.com/GoogleCloudPlatform/cpp-samples/issues" ) project ( cpp - samples - cloud - run - hello - world CXX ) find package ( functions framework cpp REQUIRED ) find package ( Threads ) add executable ( cloud run hello cloud run hello . cc ) target compile features ( cloud run hello PRIVATE cxx std 17 ) target link libraries ( cloud run hello functions - framework - cpp :: framework ) include ( GNUInstallDirs ) install ( TARGETS cloud run hello RUNTIME DESTINATION $ { CMAKE INSTALL BINDIR }) Create a new file named vcpkg.json and paste the following code into it: { "name" : "cpp-samples-cloud-run-hello-world" , "version-string" : "unversioned" , "homepage" : "https://github.com/GoogleCloudPlatform/cpp-samples/" , "description" : [ "Shows how to deploy a C++ application to Cloud Run." ], "dependencies" : [ "functions-framework-cpp" ] } Create a new file named cloud run hello.cc and paste the following code into it: #include <google/cloud/functions/framework.h> #include <cstdlib> namespace gcf = :: google :: cloud :: functions ; auto hello world http () { return gcf :: MakeFunction ([]( gcf :: HttpRequest const & / request / ) { std :: string greeting = "Hello " ; auto const target = std :: getenv ( "TARGET" ); greeting += target == nullptr ? "World" : target ; greeting += " \n " ; return gcf :: HttpResponse {} . set header ( "Content-Type" , "text/plain" ) . set payload ( greeting ); }); } int main ( int argc , char argv []) { return gcf :: Run ( argc , argv , hello world http ()); } This code creates a basic web server that listens on the port defined by the PORT environment variable .
- For Cloud Build to build your sources, grant the Cloud Build service account the Cloud Run Builder ( roles/run.builder ) role on your project: gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: SERVICE ACCOUNT EMAIL ADDRESS \ --role = roles/run.builder Replace PROJECT ID with your Google Cloud project ID and SERVICE ACCOUNT EMAIL ADDRESS with the email address of the Cloud Build service account.
- Cloud Run locations Cloud Run is regional, which means the infrastructure that runs your Cloud Run services is located in a specific region and is managed by Google to be redundantly available across all the zones within that region .
- Home Documentation Application hosting Cloud Run Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

