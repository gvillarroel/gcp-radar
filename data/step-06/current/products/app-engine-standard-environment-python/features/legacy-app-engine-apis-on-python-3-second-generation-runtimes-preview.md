---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:15:56.120Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Legacy App Engine APIs on Python 3 second-generation runtimes (preview)"
feature_slug: "legacy-app-engine-apis-on-python-3-second-generation-runtimes-preview"
latest_feature_date: "2021-09-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/runtime"
keywords:
  - "apis"
  - "generation"
  - "second"
  - "legacy"
  - "python"
  - "engine"
  - "on"
  - "app"
---

# Legacy App Engine APIs on Python 3 second-generation runtimes (preview)

Product: App Engine standard environment Python
Coverage: LOW

## Step 02 Summary

Makes many legacy App Engine APIs available to selected second-generation runtimes for Python 3 in preview.

## Extended Definition

Makes many legacy App Engine APIs available to selected second-generation runtimes for Python 3 in preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis](https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/python3/runtime](https://docs.cloud.google.com/appengine/docs/standard/python3/runtime)

## Supporting Pages

### "APIs & Reference \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis](https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis)
- Source ID: `site-docs-reference`
- Final score: 258
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- App Engine legacy bundled services APIs for Python Use the App Engine legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.
- App Engine legacy bundled services APIs App Engine legacy bundled services APIs for Go Use the legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.
- App Engine legacy bundled services APIs for PHP Use the App Engine legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.
- App Engine legacy bundled services APIs for Java Use the legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- If you want to use the App Engine legacy bundled services for second-generation runtimes , set this field to true . <entrypoint> Optional and only for second-generation runtimes.
- Specify the timeout in seconds: < system - properties > < property name = "appengine.api.urlfetch.defaultDeadline" value = "10" / > < / system - properties > Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To determine how long a connection remains inactive without any data transmission before the client closes it, configure an idle timeout using the following syntax: <env-variables> <env-var name="APPENGINE API CALLS IDLE TIMEOUT MS" value="TIMEOUT IN MS" /> </env-variables> Replace TIMEOUT IN MS with the required timeout in milliseconds.
- You will need to test your application and expected traffic volume to determine the ideal number of instances to keep in reserve. <min-pending-latency> The minimum amount of time in seconds that App Engine should allow a request to wait in the pending queue before starting a new instance to handle it.

### "Python 3 Runtime Environment \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3/runtime](https://docs.cloud.google.com/appengine/docs/standard/python3/runtime)
- Source ID: `site-docs-root-2`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows how to use uwsgi with App Engine: runtime : python313 entrypoint : uwsgi --http-socket :$PORT --wsgi-file main.py --callable app --master --processes 1 --threads 2 uwsgi==2.0.22 Flask==3.0.0 Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Python 3 Runtime Environment Stay organized with collections Save and categorize content based on your preferences.
- Dependencies During deployment, App Engine uses the Python package manager pip to install dependencies defined in the requirements.txt metadata file located in your project's root directory.
- The Python runtime for App Engine in the standard environment is declared in the app.yaml file: runtime : python VERSION Where VERSION is the Python MAJOR and MINOR version numbers.

