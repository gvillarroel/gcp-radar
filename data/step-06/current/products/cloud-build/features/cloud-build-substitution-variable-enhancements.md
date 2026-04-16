---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.892Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build substitution variable enhancements"
feature_slug: "cloud-build-substitution-variable-enhancements"
latest_feature_date: "2020-06-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/docs/buildpacks/set-environment-variables"
  - "https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events"
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
keywords:
  - "enhancements"
  - "referencing"
  - "substitution"
  - "variable"
  - "other"
  - "variables"
---

# Cloud Build substitution variable enhancements

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build substitution variables now support referencing other variables, bash-style string operations, and trigger event payload bindings.

## Extended Definition

Cloud Build substitution variables now support referencing other variables, bash-style string operations, and trigger event payload bindings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/docs/buildpacks/set-environment-variables](https://docs.cloud.google.com/docs/buildpacks/set-environment-variables)
- [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)

## Supporting Pages

### "Set environment variables to configure builds \_|\_ Buildpacks \_|\_ Google\

- URL: [https://docs.cloud.google.com/docs/buildpacks/set-environment-variables](https://docs.cloud.google.com/docs/buildpacks/set-environment-variables)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optional: Download a sample application Clone the sample repository to your local machine: git clone https://github.com/GoogleCloudPlatform/buildpack-samples.git Change to the directory that contains the application sample code: Go cd buildpack-samples/sample-go Java cd buildpack-samples/sample-java-gradle Node.js cd buildpack-samples/sample-node PHP cd buildpack-samples/sample-php Python cd buildpack-samples/sample-python Ruby cd buildpack-samples/sample-ruby .NET cd buildpack-samples/sample-dotnet Build the application with environment variables In the root directory of your service, create or update your project.toml project descriptor to include the [[build.env]] section and any of the supported environment variable : [[ build.env ]] name = " ENVIRONMENT VARIABLE NAME " value = " ENVIRONMENT VARIABLE VALUE " Replace: ENVIRONMENT VARIABLE NAME with the name of a supported environment variable .
- Example To set the GOOGLE ENTRYPOINT="gunicorn -p :8080 main:app" environment variable in your container image, you run the following command: pack build my-app \ --builder gcr.io/buildpacks/builder:v1 \ --env GOOGLE ENTRYPOINT = "gunicorn -p :8080 main:app" --env MY-LOCAL-ENV-VARIABLE Remote builds To set environment variables for remote builds, you use the project.toml project descriptor .
- You can use one or more of the environment variables that are supported by your runtime . pack build SERVICE NAME \ --env ENVIRONMENT VARIABLE Replace: SERVICE NAME with the name of the service for your application or function.
- Home Documentation Application hosting Buildpacks Guides Send feedback Set environment variables to configure builds Stay organized with collections Save and categorize content based on your preferences.

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- You can specify that your app is deployed to an environment in your build config file and then use this field to define substitution variables specifying which environment this trigger should deploy to.
- Substitution variables (optional): If you selected the Cloud Build config file as your build config option, you can choose to define trigger-specific substitution variables using this field.
- Note: Glob strings don't allow for substitution variables in included files and ignored files.
- Buildpack environment variables (optional): If you selected buildpacks as your configuration type, click Add pack environment variable to specify your buildpack environment variables and values.

### "Automate builds in response to Pub/Sub events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- Source ID: `site-docs-root-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Filters (optional): You can create filters within a trigger that determine whether or not your trigger will execute a build in response to the incoming payload by specifying filters on substitution variables.
- Filters (optional): You can create filters within a trigger that determine whether or not your trigger will execute a build in response to the incoming payload by specifying filters on substitution variables.
- Substitutions (optional): If you selected the build config file as your build config option, you can choose to define trigger-specific substitution variables using this field.
- Note: While defining substitution variables is optional, they are required if you want to set up custom filtering on Pub/Sub messages (see Filters below for more information).

