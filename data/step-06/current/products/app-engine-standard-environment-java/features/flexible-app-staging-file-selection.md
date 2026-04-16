---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.255Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Flexible app staging file selection"
feature_slug: "flexible-app-staging-file-selection"
latest_feature_date: "2017-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml"
keywords:
  - "selection"
  - "staging"
  - "flexible"
  - "file"
  - "gradle"
  - "maven"
  - "apps"
---

# Flexible app staging file selection

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

Maven and Gradle staging for flexible apps now copies only app.yaml into the build or target directory and expects other configuration files under src/main/appengine.

## Extended Definition

Maven and Gradle staging for flexible apps now copies only app.yaml into the build or target directory and expects other configuration files under src/main/appengine.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml)

## Supporting Pages

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 237
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example The following is an example of an app.yaml file: runtime : java25 instance class : F2 env variables : BUCKET NAME : "example-gcs-bucket" handlers : - url : /stylesheets static dir : stylesheets - url : /. secure : always redirect http response code : 301 script : auto The following table provides YAML examples of available fields in an app.yaml file: Runtime and app elements Element Description build env variables Optional.
- You must first create the app.yaml file for the default service before you can create and deploy app.yaml files for additional services within your app.
- You can enable the service for an app by including an inbound services section in the app.yaml file. warmup Enables warmup requests.
- Note: This setting applies only if the version of the app defined by this app.yaml file is configured to receive traffic.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 237
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example The following is an example of an app.yaml file: runtime : python314 instance class : F2 env variables : BUCKET NAME : "example-gcs-bucket" handlers : Matches requests to /images/... to files in static/images/... - url : /images static dir : static/images - url : /. secure : always redirect http response code : 301 script : auto The following table provides YAML examples of available fields in an app.yaml file: Runtime and app elements Element Description app engine apis Optional.
- You must first create the app.yaml file for the default service before you can create and deploy app.yaml files for additional services within your app.
- You can enable the service for an app by including an inbound services section in the app.yaml file. warmup Enables warmup requests.
- Note: This setting applies only if the version of the app defined by this app.yaml file is configured to receive traffic.

### "Defining runtime settings \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The App Engine Maven plugin will create a correct target/appengine-staging directory containing your JAR artifacts and this app.yaml file, ready for deployment.
- The following is a sample Maven project structure: MyDir/ pom.xml [index.yaml] [cron.yaml] [dispatch.yaml] src/main/ appengine/ app.yaml java/com.example.mycode/ MyCode.java If you have more than one JAR file in your project directory or want to specify a custom entrypoint, you must specify it in the entrypoint element of your app.yaml file.
- For a Maven project, the standard location for app.yaml file is under the src/main/appengine directory.
- Generally, your app.yaml file requires only the runtime element for a simple Java app in the standard environment, for example: runtime: java25 App Engine provides default values for all other settings, including the F1 instance class , which determines the memory and CPU resources that are available to your app, and automatic scaling , which controls how and when new instances of your app are created.

