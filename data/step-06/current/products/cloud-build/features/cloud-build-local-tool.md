---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.927Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "cloud-build-local tool"
feature_slug: "cloud-build-local-tool"
latest_feature_date: "2017-07-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/docs/buildpacks/build-function"
  - "https://docs.cloud.google.com/docs/buildpacks/build-application"
  - "https://docs.cloud.google.com/build/docs/build-config"
keywords:
  - "locally"
  - "local"
  - "tool"
  - "running"
  - "introduced"
  - "builds"
---

# cloud-build-local tool

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build introduced `cloud-build-local` for running builds locally.

## Extended Definition

Cloud Build introduced `cloud-build-local` for running builds locally.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/docs/buildpacks/build-function](https://docs.cloud.google.com/docs/buildpacks/build-function)
- [https://docs.cloud.google.com/docs/buildpacks/build-application](https://docs.cloud.google.com/docs/buildpacks/build-application)
- [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)

## Supporting Pages

### Build a function with buildpacks \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/build-function](https://docs.cloud.google.com/docs/buildpacks/build-function)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Local builds Pack is a CLI tool maintained by the CNB project to support the use of buildpacks.
- Clone the sample repository to your local machine: git clone https://github.com/GoogleCloudPlatform/buildpack-samples.git Change to the directory that contains the application sample code: Go cd buildpack-samples/sample-functions-framework-go Java cd buildpack-samples/sample-functions-framework-java-mvn Node.js cd buildpack-samples/sample-functions-framework-node Python cd buildpack-samples/sample-functions-framework-python Ruby cd buildpack-samples/sample-functions-framework-ruby Use pack to build the sample function: Go pack build --builder=gcr.io/buildpacks/builder sample-functions-framework-go Java pack build --builder gcr.io/buildpacks/builder:v1 sample-functions-java-mvn Node.js pack build --builder=gcr.io/buildpacks/builder sample-functions-framework-node Python pack build --builder=gcr.io/buildpacks/builder sample-functions-framework-python Ruby pack build --builder=gcr.io/buildpacks/builder sample-functions-framework-ruby Run the image using docker : Go docker run -p8080:8080 sample-functions-framework-go Java docker run -it -ePORT=8080 -p8080:8080 sample-functions-java-mvn Node.js docker run -it -ePORT=8080 -p8080:8080 sample-functions-framework-node Python docker run -it -ePORT=8080 -p8080:8080 sample-functions-framework-python Ruby docker run -it -ePORT=8080 -p8080:8080 sample-functions-framework-ruby Visit the running function by browsing to localhost:8080 .
- Clone the sample repository to your local machine: git clone https://github.com/GoogleCloudPlatform/buildpack-samples.git Change to the directory that contains the application sample code: Go cd buildpack-samples/sample-functions-framework-go Java cd buildpack-samples/sample-functions-framework-java-mvn Node.js cd buildpack-samples/sample-functions-framework-node Python cd buildpack-samples/sample-functions-framework-python Ruby cd buildpack-samples/sample-functions-framework-ruby Use gcloud to submit the application source code to Cloud Build: Go gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-functions-framework-go Java gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-functions-framework-gradle Node.js gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-functions-framework-node Python gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-functions-framework-python Ruby gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-functions-framework-ruby Replace: LOCATION with the region name of your container repository.
- Build a function locally You use the pack build command and specify the default builder --builder=gcr.io/buildpacks/builder to build your container images locally. pack build --builder = gcr.io/buildpacks/builder IMAGE NAME Replace IMAGE NAME with the name of your container image.

### "Build an application with buildpacks \_|\_ Buildpacks \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/docs/buildpacks/build-application](https://docs.cloud.google.com/docs/buildpacks/build-application)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Local builds You use the pack CLI to locally build your application into a container image.
- Clone the sample repository to your local machine: git clone https://github.com/GoogleCloudPlatform/buildpack-samples.git Change to the directory that contains the application sample code: Go cd buildpack-samples/sample-go Java cd buildpack-samples/sample-java-gradle Node.js cd buildpack-samples/sample-node PHP cd buildpack-samples/sample-php Python cd buildpack-samples/sample-python Ruby cd buildpack-samples/sample-ruby .NET cd buildpack-samples/sample-dotnet Use gcloud to submit the application source code to Cloud Build: Go gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-go Java gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-java-gradle Node.js gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-node PHP gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-php Python gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-python Ruby gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-ruby .NET gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-dotnet Verify that the sample application was successfully published to REPO NAME : gcloud artifacts docker images list LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME Replace: LOCATION with the region name of your container repository.
- Clone the sample repository to your local machine: git clone https://github.com/GoogleCloudPlatform/buildpack-samples.git Change to the directory that contains the application sample code: Go cd buildpack-samples/sample-go Java cd buildpack-samples/sample-java-gradle Node.js cd buildpack-samples/sample-node PHP cd buildpack-samples/sample-php Python cd buildpack-samples/sample-python Ruby cd buildpack-samples/sample-ruby .NET cd buildpack-samples/sample-dotnet Use pack to build the sample application image: Go pack build --builder=gcr.io/buildpacks/builder sample-go Java pack build --builder=gcr.io/buildpacks/builder sample-java-gradle Node.js pack build --builder=gcr.io/buildpacks/builder sample-node PHP pack build --builder=gcr.io/buildpacks/builder sample-php Python pack build --builder=gcr.io/buildpacks/builder sample-python Ruby pack build --builder=gcr.io/buildpacks/builder sample-ruby .NET pack build --builder=gcr.io/buildpacks/builder sample-dotnet Run the image using docker : Go docker run -p8080:8080 sample-go Java docker run -it -ePORT=8080 -p8080:8080 sample-java-gradle Node.js docker run -it -ePORT=8080 -p8080:8080 sample-node PHP docker run -it --rm -p 8080:8080 sample-php Python docker run -it -ePORT=8080 -p8080:8080 sample-python Ruby docker run -it -ePORT=8080 -p8080:8080 sample-ruby .NET docker run -it -ePORT=8080 -p8080:8080 sample-dotnet Visit the running application by browsing to localhost:8080 .
- Build an application locally You use the pack build command and specify the default builder --builder=gcr.io/buildpacks/builder to build your container images locally. pack build --builder = gcr.io/buildpacks/builder IMAGE NAME Replace IMAGE NAME with the name of your service's container image.

### Build configuration file schema \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)
- Source ID: `site-docs-root-2`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Here's a snippet of the kind of configuration you might set in the steps field: YAML steps : - name : 'gcr.io/cloud-builders/kubectl' args : [ 'set' , 'image' , 'deployment/mydepl' , 'my-image=gcr.io/my-project/myimage' ] env : - 'CLOUDSDK COMPUTE ZONE=us-east4-b' - 'CLOUDSDK CONTAINER CLUSTER=my-cluster' - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , 'gcr.io/my-project-id/myimage' , '.' ] JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/kubectl" , "args" : [ "set" , "image" "deployment/mydepl" "my-image=gcr.io/my-project/myimage" ], "env" : [ "CLOUDSDK COMPUTE ZONE=us-east4-b" , "CLOUDSDK CONTAINER CLUSTER=my-cluster" ] }, { "name" : "gcr.io/cloud-builders/docker" , "args" : [ "build" , "-t" , "gcr.io/my-project-id/myimage" , "." ] } ] } name Use the name field of a build step to specify a cloud builder , which is a container image running common tools.
- If you're running nested Docker containers and want to expose ADC to an underlying container or using gcloud in a docker step, use the --network flag in your docker build step: YAML steps : - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '--network=cloudbuild' , '.' ] JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/docker" , "args" : [ "build" , "--network=cloudbuild" , "." ] } ] } What's next Learn how to create a basic build config file to configure builds for Cloud Build.
- For instructions on running a build on a private pool, see Running builds in a private pool . requestedVerifyOption : Set the value of requestedVerifyOption to VERIFIED to enable and verify the generation of attestations and provenance metadata for your build.
- Arguments passed to the builder are passed to the tool that's running in the builder, which lets you invoke any command supported by the tool.

