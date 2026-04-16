---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.885Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build Secret Manager environment variables"
feature_slug: "cloud-build-secret-manager-environment-variables"
latest_feature_date: "2021-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automate-builds-webhook-events"
  - "https://docs.cloud.google.com/docs/buildpacks/set-environment-variables"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/config/appref"
keywords:
  - "manager"
  - "secret"
  - "environment"
  - "configured"
  - "access"
  - "variables"
---

# Cloud Build Secret Manager environment variables

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build can be configured to access secrets stored in Secret Manager through environment variables.

## Extended Definition

Cloud Build can be configured to access secrets stored in Secret Manager through environment variables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)
- [https://docs.cloud.google.com/docs/buildpacks/set-environment-variables](https://docs.cloud.google.com/docs/buildpacks/set-environment-variables)
- [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)

## Supporting Pages

### "Automate builds in response to webhook events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the following command to invoke a webhook event: curl -X POST -H "Content-type: application/json" "https://cloudbuild.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ REGION } /triggers/ ${ TRIGGER NAME } :webhook?key= ${ API KEY } & secret= ${ SECRET VALUE } & trigger= ${ TRIGGER NAME } & projectId= ${ PROJECT ID } " -d "{}" After completing these steps, the Secret Manager Secret Accessor role will automatically be granted to your Cloud Build service agent, service-${PROJECT NUMBER}@gcp-sa-cloudbuild.iam.gserviceaccount.com .
- To learn how to restrict your key, see Applying API key restrictions . (Optional) Grant Secret Manager role to your service account Cloud Build automatically grants the Secret Manager Secret Accessor role to service accounts that require the role during secret configuration.
- If you use an existing secret, you may need to manually grant the Secret Manager Secret Accessor role to your Cloud Build service account, service-${PROJECT NUMBER}@gcp-sa-cloudbuild.iam.gserviceaccount.com .
- In the Assign roles section, select Secret Manager > Secret Manager Secret Accessor .

### "Set environment variables to configure builds \_|\_ Buildpacks \_|\_ Google\

- URL: [https://docs.cloud.google.com/docs/buildpacks/set-environment-variables](https://docs.cloud.google.com/docs/buildpacks/set-environment-variables)
- Source ID: `site-docs-reference`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optional: Download a sample application Clone the sample repository to your local machine: git clone https://github.com/GoogleCloudPlatform/buildpack-samples.git Change to the directory that contains the application sample code: Go cd buildpack-samples/sample-go Java cd buildpack-samples/sample-java-gradle Node.js cd buildpack-samples/sample-node PHP cd buildpack-samples/sample-php Python cd buildpack-samples/sample-python Ruby cd buildpack-samples/sample-ruby .NET cd buildpack-samples/sample-dotnet Build the application with environment variables In the root directory of your service, create or update your project.toml project descriptor to include the [[build.env]] section and any of the supported environment variable : [[ build.env ]] name = " ENVIRONMENT VARIABLE NAME " value = " ENVIRONMENT VARIABLE VALUE " Replace: ENVIRONMENT VARIABLE NAME with the name of a supported environment variable .
- Example To set the GOOGLE ENTRYPOINT="gunicorn -p :8080 main:app" environment variable in your container image, you run the following command: pack build my-app \ --builder gcr.io/buildpacks/builder:v1 \ --env GOOGLE ENTRYPOINT = "gunicorn -p :8080 main:app" --env MY-LOCAL-ENV-VARIABLE Remote builds To set environment variables for remote builds, you use the project.toml project descriptor .
- You can use one or more of the environment variables that are supported by your runtime . pack build SERVICE NAME \ --env ENVIRONMENT VARIABLE Replace: SERVICE NAME with the name of the service for your application or function.
- Home Documentation Application hosting Buildpacks Guides Send feedback Set environment variables to configure builds Stay organized with collections Save and categorize content based on your preferences.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- Source ID: `site-docs-reference-2`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you are using a runtime that supports buildpacks , you can define build environment variables in your app.yaml file.
- Environment variables that are prefixed with GAE are reserved for system use and not allowed in the app.yaml file.
- See the list of runtime environment variables that cannot be overwritten. error handlers Optional.
- You can define environment variables in your app.yaml file to make them available to your app.

