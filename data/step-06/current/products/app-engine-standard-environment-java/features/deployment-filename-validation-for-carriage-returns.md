---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.884Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Deployment filename validation for carriage returns"
feature_slug: "deployment-filename-validation-for-carriage-returns"
latest_feature_date: "2018-05-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime"
keywords:
  - "deployment"
  - "filename"
  - "validation"
  - "carriage"
  - "returns"
  - "now"
  - "blocks"
  - "attempts"
---

# Deployment filename validation for carriage returns

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

Deployment now blocks deployment attempts when filenames contain carriage return characters.

## Extended Definition

Deployment now blocks deployment attempts when filenames contain carriage return characters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime)

## Supporting Pages

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- However, if mygame attempts to make a JavaScript XMLHttpRequest to myassets , it will not succeed unless the handler for myassets returns an Access-Control-Allow-Origin: response header containing the value http://mygame.uc.r.appspot.com .
- Each file in the static directory is served using the MIME type that corresponds with its filename extension unless overridden by the directory's mime type setting.
- Note: For new projects you create after March 2025, App Engine sets the maximum instances default for standard environment deployments to 20.
- Each service in your app has its own app.yaml file, which acts as a descriptor for its deployment.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- However, if mygame attempts to make a JavaScript XMLHttpRequest to myassets , it will not succeed unless the handler for myassets returns an Access-Control-Allow-Origin: response header containing the value http://mygame.uc.r.appspot.com .
- Each file in the static directory is served using the MIME type that corresponds with its filename extension unless overridden by the directory's mime type setting.
- Note: For new projects you create after March 2025, App Engine sets the maximum instances default for standard environment deployments to 20.
- Each service in your app has its own app.yaml file, which acts as a descriptor for its deployment.

### "Java runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists the endpoints where you can make HTTP requests for specific metadata: Metadata endpoint Description /computeMetadata/v1/project/numeric-project-id The project number assigned to your project. /computeMetadata/v1/project/project-id The project ID assigned to your project. /computeMetadata/v1/instance/region The region the instance is running in. /computeMetadata/v1/instance/service-accounts/default/aliases /computeMetadata/v1/instance/service-accounts/default/email The default service account email assigned to your project. /computeMetadata/v1/instance/service-accounts/default/ Lists all the default service accounts for your project. /computeMetadata/v1/instance/service-accounts/default/scopes Lists all the supported scopes for the default service accounts. /computeMetadata/v1/instance/service-accounts/default/token Returns the auth token that can be used to authenticate your application to other Google Cloud APIs.
- For example, an executable with the filename myexecutable could have the following app.yaml configuration file: runtime : 25 # or another supported runtime version. entrypoint : ./myexecutable Google Cloud client libraries can be used to compile applications as a GraalVM native image.
- For example, your application might be deployed at Java 21.0.4 and automatically updated to version Java 21.0.5 at a later deployment of the managed platform, but it won't be automatically updated to Java 22.
- GAE DEPLOYMENT ID The ID of the current deployment.

