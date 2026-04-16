---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:34:18.717Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "PyAMF 0.7.2 beta"
feature_slug: "pyamf-0-7-2-beta"
latest_feature_date: "2015-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configuration-files"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/getting-started"
  - "https://docs.cloud.google.com/appengine/docs/standard/an-overview-of-app-engine"
keywords:
  - "pyamf"
  - "beta"
  - "app"
  - "engine"
  - "added"
  - "version"
---

# PyAMF 0.7.2 beta

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

App Engine added PyAMF version 0.7.2 in beta.

## Extended Definition

App Engine added PyAMF version 0.7.2 in beta.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files)
- [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- [https://docs.cloud.google.com/appengine/docs/standard/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/standard/an-overview-of-app-engine)

## Supporting Pages

### "Structuring web services in App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Directory structure Each version of your App Engine service is defined in an app.yaml configuration file.
- Similarly, both service2 and service3 are in separate directories, which contain each service's files, although service3 includes two versions of the YAML configuration file: In the following example, a single service has the optional dispatch.yaml file and two configuration files that represent different versions of that service, service1.yaml and service2.yaml : Design considerations for instance uptime Hardware or software failures that cause early termination or frequent instance restarts can occur without warning and can take considerable time to resolve.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Structuring web services in App Engine Stay organized with collections Save and categorize content based on your preferences.
- If you host your app out of a version control system (VCS), for example GitHub, you can also structure your app to use separate directories in a repository, or use separate repositories for each service.

### "An Overview of the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Technology areas App Engine Admin API Overview Send feedback An Overview of the Admin API Stay organized with collections Save and categorize content based on your preferences.
- Tighter control around deploying new versions, including the ability to automate traffic migration between two versions or traffic splitting across one or more versions.
- After configuring authentication, you can begin managing your apps, including deploying versions of applications and managing the amount of traffic to those versions.
- The Admin API provides programmatic access to several of the App Engine administrative operations that are found in the Google Cloud console .

### An overview of App Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/standard/an-overview-of-app-engine)
- Source ID: `site-docs-reference-required-5`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this diagram, the app has two services that contain multiple versions, and two of those versions are actively running on multiple instances: Other Google Cloud services, for example Datastore, are shared across your App Engine app.
- Each App Engine application includes at least one service, the default service, which can hold many versions, depending on your app's billing status.
- The App Engine application is a top-level container that includes the service, version, and instance resources that make up your app.
- For example, an app that handles your customer requests might include separate services that each handle different tasks, such as: API requests from mobile devices Internal, administration-type requests Backend processing such as billing pipelines and data analysis Each service in App Engine consists of the source code from your app and the corresponding App Engine configuration files.

