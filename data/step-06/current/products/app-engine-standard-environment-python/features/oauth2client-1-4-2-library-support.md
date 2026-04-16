---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.799Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "oauth2client 1.4.2 library support"
feature_slug: "oauth2client-1-4-2-library-support"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/standard/python3/services/access"
  - "https://cloud.google.com/appengine/docs/standard/apis"
  - "https://docs.cloud.google.com/appengine/docs/standard/apis"
keywords:
  - "oauth2client"
  - "upgrades"
  - "library"
  - "version"
  - "bundled"
---

# oauth2client 1.4.2 library support

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine upgrades the bundled oauth2client library to version 1.4.2.

## Extended Definition

App Engine upgrades the bundled oauth2client library to version 1.4.2.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/standard/python3/services/access](https://cloud.google.com/appengine/docs/standard/python3/services/access)
- [https://cloud.google.com/appengine/docs/standard/apis](https://cloud.google.com/appengine/docs/standard/apis)
- [https://docs.cloud.google.com/appengine/docs/standard/apis](https://docs.cloud.google.com/appengine/docs/standard/apis)

## Supporting Pages

### "Access legacy bundled services for Python 3 \_|\_ App Engine standard environment\

- URL: [https://cloud.google.com/appengine/docs/standard/python3/services/access](https://cloud.google.com/appengine/docs/standard/python3/services/access)
- Source ID: `site-docs-reference-3`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Note: To continue using legacy bundled services with the latest supported version of Python , ensure you upgrade to the latest version of the App Engine services SDK by adding appengine-python-standard>=1.0.0 in your requirements.txt file.
- Python 2 runtime : python27 api version : 1 threadsafe : true handlers : - url : / script : home.app - url : /index\.html script : home.app - url : /stylesheets static dir : stylesheets - url : /(. \.(gif png jpg))$ static files : static/\1 upload : static/. \.(gif png jpg)$ - url : /admin/. script : admin.app login : admin - url : /. script : not found.app Python 3 runtime : python314 app engine apis : true handlers : - url : /stylesheets static dir : stylesheets - url : /(. \.(gif png jpg))$ static files : static/\1 upload : static/. \.(gif png jpg)$ - url : /admin/. script : auto login : admin Your Python 3 app must handle URL routing (for example, with Flask decorators).
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Access legacy bundled services for Python 3 Stay organized with collections Save and categorize content based on your preferences.
- If your App Engine environment uses both Python 2 and Python 3, which is common during a migration, you must ensure that shared serialized objects written by one version of Python can be reconstitued by the other.

### "APIs & Reference \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/apis](https://docs.cloud.google.com/appengine/docs/standard/apis)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configuration Files app.yaml Details about the configuration file that is used to configure App Engine deployed versions. cron.yaml Details about the configuration file that is used to configure regularly scheduled tasks on App Engine. dispatch.yaml Details about the configuration file that is used to route incoming requests to a specific service based on the path or hostname in the URL. index.yaml Details about the configuration file used to define the Datastore indexes of the data in your app.
- App Engine legacy bundled services APIs App Engine legacy bundled services APIs for Go Use the legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.
- Cloud Client Libraries Cloud Client Libraries for Go A client library that embraces idioms of Go and provides high-level API abstractions so that you can easily access Google Cloud services.
- App Engine legacy bundled services APIs for Python Use the App Engine legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.

### "APIs & Reference \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://cloud.google.com/appengine/docs/standard/apis](https://cloud.google.com/appengine/docs/standard/apis)
- Source ID: `site-docs-reference-3`
- Final score: 61
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configuration Files app.yaml Details about the configuration file that is used to configure App Engine deployed versions. cron.yaml Details about the configuration file that is used to configure regularly scheduled tasks on App Engine. dispatch.yaml Details about the configuration file that is used to route incoming requests to a specific service based on the path or hostname in the URL. index.yaml Details about the configuration file used to define the Datastore indexes of the data in your app.
- App Engine legacy bundled services APIs App Engine legacy bundled services APIs for Go Use the legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.
- Cloud Client Libraries Cloud Client Libraries for Go A client library that embraces idioms of Go and provides high-level API abstractions so that you can easily access Google Cloud services.
- App Engine legacy bundled services APIs for Python Use the App Engine legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.

