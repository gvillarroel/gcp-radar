---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:03.302Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "env:flex app.yaml configuration"
feature_slug: "env-flex-app-yaml-configuration"
latest_feature_date: "2016-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/configuring-your-app-with-app-yaml"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml"
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-your-app-with-app-yaml"
keywords:
  - "env"
  - "flex"
  - "app"
  - "yaml"
  - "configuration"
  - "engine"
  - "flexible"
  - "environment"
---

# env:flex app.yaml configuration

Product: App Engine flexible environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible environment can be selected in app.yaml using env:flex instead of vm:true.

## Extended Definition

App Engine flexible environment can be selected in app.yaml using env:flex instead of vm:true.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-your-app-with-app-yaml)

## Supporting Pages

### "Configuring your app with app.yaml \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference`
- Final score: 332
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configuring your app with app.yaml Stay organized with collections Save and categorize content based on your preferences.
- If you want to collect these JVM metrics for your app: appengine.googleapis.com/flex/instance/jvm/gc/count appengine.googleapis.com/flex/instance/jvm/gc/time you'll need to set the following JMX system properties in the environment variables in your app.yaml and deploy your app.
- The following example demonstrates what a simple Java app might require in the flexible environment: You can specify a unique name for your app.yaml files, but then you must specify the file name with the deployment command as well.
- For example, if you name your app.yaml file service-name-app.yaml or app.flexible.yaml , then you must deploy your app using either: gcloud app deploy service - name - app . yaml gcloud app deploy app . flexible . yaml To learn more about structuring multiple services and app.yaml files in your app, see Structuring web services .

### "Configuring your app with app.yaml \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference`
- Final score: 332
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configuring your app with app.yaml Stay organized with collections Save and categorize content based on your preferences.
- For example, if you name your app.yaml file service-name-app.yaml or app.flexible.yaml , then you must deploy your app using either: gcloud app deploy service-name-app.yaml gcloud app deploy app.flexible.yaml All configuration elements For a complete list of all the supported elements in this configuration file, see the app.yaml reference .
- The following example demonstrates what a simple Custom Runtime app might require in the flexible environment: You can specify a unique name for your app.yaml files, but then you must specify the file name with the deployment command as well.
- An App Engine app is configured using an app.yaml file, that contains CPU, memory, network and disk resources, scaling, and other general settings including environment variables.

### "Configuring your app with app.yaml \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference`
- Final score: 332
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configuring your app with app.yaml Stay organized with collections Save and categorize content based on your preferences.
- The following example demonstrates what a simple .NET app might require in the flexible environment: You can specify a unique name for your app.yaml files, but then you must specify the file name with the deployment command as well.
- For example, if you name your app.yaml file service-name-app.yaml or app.flexible.yaml , then you must deploy your app using either: gcloud app deploy service-name-app.yaml gcloud app deploy app.flexible.yaml To learn more about structuring multiple services and app.yaml files in your app, see Structuring web services .
- An App Engine app is configured using an app.yaml file, that contains CPU, memory, network and disk resources, scaling, and other general settings including environment variables.

