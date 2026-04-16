---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.909Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build global environment variables"
feature_slug: "cloud-build-global-environment-variables"
latest_feature_date: "2019-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/build-config"
  - "https://docs.cloud.google.com/build/docs/build-config-file-schema"
  - "https://docs.cloud.google.com/docs/buildpacks/set-environment-variables"
keywords:
  - "globally"
  - "defined"
  - "global"
  - "allows"
  - "environment"
  - "variables"
---

# Cloud Build global environment variables

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build allows environment variables to be defined globally for all build steps in a build.

## Extended Definition

Cloud Build allows environment variables to be defined globally for all build steps in a build.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)
- [https://docs.cloud.google.com/build/docs/build-config-file-schema](https://docs.cloud.google.com/build/docs/build-config-file-schema)
- [https://docs.cloud.google.com/docs/buildpacks/set-environment-variables](https://docs.cloud.google.com/docs/buildpacks/set-environment-variables)

## Supporting Pages

### Build configuration file schema \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)
- Source ID: `site-docs-root-2`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The elements are of the form KEY=VALUE for the environment variable KEY being given the value VALUE . secretEnv : A list of global environment variables, encrypted using a Cloud Key Management Service crypto key, that will be available to all build steps in this build.
- If a variable is defined in both globally and in a build step, the variable will use the build step value.
- The following snippet invokes the docker build command and installs Maven dependencies: YAML steps : - name : 'gcr.io/cloud-builders/mvn' args : [ 'install' ] - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , 'gcr.io/my-project-id/myimage' , '.' ] JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/mvn" , "args" : [ "install" ] }, { "name" : "gcr.io/cloud-builders/docker" , "args" : [ "build" , "-t" , "gcr.io/my-project-id/myimage" , "." ] } ] } env The env field of a build step takes a list of environment variables to be used when running the step.
- The following snippet sets the entrypoints for the npm build step: YAML steps : - name : 'gcr.io/cloud-builders/npm' entrypoint : 'node' args : [ '--version' ] JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/npm" , "entrypoint" : "node" , "args" : [ "--version" ] } ] } secretEnv A list of environment variables which are encrypted using a Cloud KMS crypto key.

### Build configuration file schema \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/build-config-file-schema](https://docs.cloud.google.com/build/docs/build-config-file-schema)
- Source ID: `site-docs-root-2`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The elements are of the form KEY=VALUE for the environment variable KEY being given the value VALUE . secretEnv : A list of global environment variables, encrypted using a Cloud Key Management Service crypto key, that will be available to all build steps in this build.
- If a variable is defined in both globally and in a build step, the variable will use the build step value.
- The following snippet invokes the docker build command and installs Maven dependencies: YAML steps : - name : 'gcr.io/cloud-builders/mvn' args : [ 'install' ] - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , 'gcr.io/my-project-id/myimage' , '.' ] JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/mvn" , "args" : [ "install" ] }, { "name" : "gcr.io/cloud-builders/docker" , "args" : [ "build" , "-t" , "gcr.io/my-project-id/myimage" , "." ] } ] } env The env field of a build step takes a list of environment variables to be used when running the step.
- The following snippet sets the entrypoints for the npm build step: YAML steps : - name : 'gcr.io/cloud-builders/npm' entrypoint : 'node' args : [ '--version' ] JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/npm" , "entrypoint" : "node" , "args" : [ "--version" ] } ] } secretEnv A list of environment variables which are encrypted using a Cloud KMS crypto key.

### "Set environment variables to configure builds \_|\_ Buildpacks \_|\_ Google\

- URL: [https://docs.cloud.google.com/docs/buildpacks/set-environment-variables](https://docs.cloud.google.com/docs/buildpacks/set-environment-variables)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optional: Download a sample application Clone the sample repository to your local machine: git clone https://github.com/GoogleCloudPlatform/buildpack-samples.git Change to the directory that contains the application sample code: Go cd buildpack-samples/sample-go Java cd buildpack-samples/sample-java-gradle Node.js cd buildpack-samples/sample-node PHP cd buildpack-samples/sample-php Python cd buildpack-samples/sample-python Ruby cd buildpack-samples/sample-ruby .NET cd buildpack-samples/sample-dotnet Build the application with environment variables In the root directory of your service, create or update your project.toml project descriptor to include the [[build.env]] section and any of the supported environment variable : [[ build.env ]] name = " ENVIRONMENT VARIABLE NAME " value = " ENVIRONMENT VARIABLE VALUE " Replace: ENVIRONMENT VARIABLE NAME with the name of a supported environment variable .
- Example To set the GOOGLE ENTRYPOINT="gunicorn -p :8080 main:app" environment variable in your container image, you run the following command: pack build my-app \ --builder gcr.io/buildpacks/builder:v1 \ --env GOOGLE ENTRYPOINT = "gunicorn -p :8080 main:app" --env MY-LOCAL-ENV-VARIABLE Remote builds To set environment variables for remote builds, you use the project.toml project descriptor .
- You can use one or more of the environment variables that are supported by your runtime . pack build SERVICE NAME \ --env ENVIRONMENT VARIABLE Replace: SERVICE NAME with the name of the service for your application or function.
- Home Documentation Application hosting Buildpacks Guides Send feedback Set environment variables to configure builds Stay organized with collections Save and categorize content based on your preferences.

