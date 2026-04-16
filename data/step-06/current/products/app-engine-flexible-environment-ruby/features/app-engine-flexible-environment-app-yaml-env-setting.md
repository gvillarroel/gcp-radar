---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:31.512Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "App Engine flexible environment app.yaml env setting"
feature_slug: "app-engine-flexible-environment-app-yaml-env-setting"
latest_feature_date: "2016-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/configuring-your-app-with-app-yaml"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/configuring-your-app-with-app-yaml"
keywords:
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "yaml"
  - "env"
  - "setting"
  - "applications"
---

# App Engine flexible environment app.yaml env setting

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

New flexible-environment applications were required to use the env configuration in app.yaml instead of vm:true.

## Extended Definition

New flexible-environment applications were required to use the env configuration in app.yaml instead of vm:true.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/ruby/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/configuring-your-app-with-app-yaml)

## Supporting Pages

### "Configuring your app with app.yaml \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configuring your app with app.yaml Stay organized with collections Save and categorize content based on your preferences.
- An App Engine app is configured using an app.yaml file, that contains CPU, memory, network and disk resources, scaling, and other general settings including environment variables.
- For more information, see: https://cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml manual scaling : instances : 1 resources : cpu : 1 memory gb : 0.5 disk size gb : 10 env variables : The in My Greeting will be translated to a : by ASP.NET.
- The following example demonstrates what a simple .NET app might require in the flexible environment: You can specify a unique name for your app.yaml files, but then you must specify the file name with the deployment command as well.

### "Configuring your app with app.yaml \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/ruby/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference-2`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configuring your app with app.yaml Stay organized with collections Save and categorize content based on your preferences.
- An App Engine app is configured using an app.yaml file, that contains CPU, memory, network and disk resources, scaling, and other general settings including environment variables.
- For more information, see: https://cloud.google.com/appengine/docs/flexible/ruby/configuring-your-app-with-app-yaml manual scaling : instances : 1 resources : cpu : 1 memory gb : 0.5 disk size gb : 10 Depending on the complexity of your app's service, you might only need to define a few elements in the corresponding app.yaml file.
- The following example demonstrates what a simple Ruby app might require in the flexible environment: You can specify a unique name for your app.yaml files, but then you must specify the file name with the deployment command as well.

### "Configuring your app with app.yaml \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configuring your app with app.yaml Stay organized with collections Save and categorize content based on your preferences.
- An App Engine app is configured using an app.yaml file, that contains CPU, memory, network and disk resources, scaling, and other general settings including environment variables.
- The following example demonstrates what a simple Custom Runtime app might require in the flexible environment: You can specify a unique name for your app.yaml files, but then you must specify the file name with the deployment command as well.
- For example, if you name your app.yaml file service-name-app.yaml or app.flexible.yaml , then you must deploy your app using either: gcloud app deploy service-name-app.yaml gcloud app deploy app.flexible.yaml All configuration elements For a complete list of all the supported elements in this configuration file, see the app.yaml reference .

