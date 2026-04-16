---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:08.277Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Python 3 runtime version 3.7.3"
feature_slug: "python-3-runtime-version-3-7-3"
latest_feature_date: "2019-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/configuration-files"
keywords:
  - "python"
  - "runtime"
  - "version"
  - "app"
  - "engine"
  - "was"
  - "updated"
---

# Python 3 runtime version 3.7.3

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

The App Engine Python runtime was updated to Python 3.7.3.

## Extended Definition

The App Engine Python runtime was updated to Python 3.7.3.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/python3/runtime](https://docs.cloud.google.com/appengine/docs/standard/python3/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files)

## Supporting Pages

### "Python 3 Runtime Environment \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3/runtime](https://docs.cloud.google.com/appengine/docs/standard/python3/runtime)
- Source ID: `site-docs-root-2`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Python runtime for App Engine in the standard environment is declared in the app.yaml file: runtime : python VERSION Where VERSION is the Python MAJOR and MINOR version numbers.
- The following example shows how to use uwsgi with App Engine: runtime : python313 entrypoint : uwsgi --http-socket :$PORT --wsgi-file main.py --callable app --master --processes 1 --threads 2 uwsgi==2.0.22 Flask==3.0.0 Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Python 3 Runtime Environment Stay organized with collections Save and categorize content based on your preferences.
- For example, your application might be deployed at Python 3.7.0 and later automatically updated to Python 3.7.1, but it will not be automatically updated to the next minor version Python 3.8.0.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference-required-2`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- The following example is a Python script that responds to any HTTP request with the message 'Hello World!' Copyright 2018 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- Caching static content To ensure that clients always receive updated static content as soon as it is published, we recommend that you serve static content from versioned directories, such as css/v1/styles.css .
- App Engine returns an uncompressed response and Google Frontend caches the uncompressed version of the response data.
- App Engine returns a compressed response and the Google Front End caches the gzipped version of the response data.

### "Structuring web services in App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files)
- Source ID: `site-docs-reference-required-2`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The app.yaml file acts as a deployment descriptor and defines the scaling type and the runtime, handlers, and other resource settings for a specific version of a service.
- Directory structure Each version of your App Engine service is defined in an app.yaml configuration file.
- Similarly, both service2 and service3 are in separate directories, which contain each service's files, although service3 includes two versions of the YAML configuration file: In the following example, a single service has the optional dispatch.yaml file and two configuration files that represent different versions of that service, service1.yaml and service2.yaml : Design considerations for instance uptime Hardware or software failures that cause early termination or frequent instance restarts can occur without warning and can take considerable time to resolve.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

