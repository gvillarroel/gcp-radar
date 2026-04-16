---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.773Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Mail handler for Python 3 bundled services"
feature_slug: "mail-handler-for-python-3-bundled-services"
latest_feature_date: "2022-01-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/standard/python3/services/access"
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview"
keywords:
  - "mail"
  - "handlers"
  - "handler"
  - "provide"
  - "bundled"
---

# Mail handler for Python 3 bundled services

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine bundled services for Python 3 provide Mail handlers through language-idiomatic libraries.

## Extended Definition

App Engine bundled services for Python 3 provide Mail handlers through language-idiomatic libraries.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/standard/python3/services/access](https://cloud.google.com/appengine/docs/standard/python3/services/access)
- [https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref](https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview)

## Supporting Pages

### "Access legacy bundled services for Python 3 \_|\_ App Engine standard environment\

- URL: [https://cloud.google.com/appengine/docs/standard/python3/services/access](https://cloud.google.com/appengine/docs/standard/python3/services/access)
- Source ID: `site-docs-reference-3`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See the Blobstore , Deferred , and Mail overviews for more information on how to use specific handlers.
- Python 2 runtime : python27 api version : 1 threadsafe : true handlers : - url : / script : home.app - url : /index\.html script : home.app - url : /stylesheets static dir : stylesheets - url : /(. \.(gif png jpg))$ static files : static/\1 upload : static/. \.(gif png jpg)$ - url : /admin/. script : admin.app login : admin - url : /. script : not found.app Python 3 runtime : python314 app engine apis : true handlers : - url : /stylesheets static dir : stylesheets - url : /(. \.(gif png jpg))$ static files : static/\1 upload : static/. \.(gif png jpg)$ - url : /admin/. script : auto login : admin Your Python 3 app must handle URL routing (for example, with Flask decorators).
- Using handlers A Python 3 app can only have one script associated with it, so if your app.yaml has multiple script handlers mapping URLs to different scripts, you will need to combine those scripts into one which handles the URL routing.
- If you want to use multiple script handlers with different URL patterns, or if you want to use other attributes in your handlers, each handler must specify script: auto .

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref](https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Example The following is an example of an app.yaml file: runtime : python314 instance class : F2 env variables : BUCKET NAME : "example-gcs-bucket" handlers : Matches requests to /images/... to files in static/images/... - url : /images static dir : static/images - url : /. secure : always redirect http response code : 301 script : auto The following table provides YAML examples of available fields in an app.yaml file: Runtime and app elements Element Description app engine apis Optional.
- Example vpc access connector : name : "projects/ PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME " egress setting : all-traffic Handlers element The handlers element provides a list of URL patterns and descriptions of how they should be handled.
- Python example handlers : - url : /youraccount/. secure : always script : auto To target a specific version of your app using the REGION ID .r.appspot.com domain, you replace the periods that would usually separate the subdomain components of the URL with the string " -dot- ", for example: https:// VERSION ID -dot-default-dot- PROJECT ID .
- For Python, these variables are available in the os.environ dictionary: env variables : DJANGO SETTINGS MODULE : "myapp.settings" Also see the list of runtime environment variables that cannot be overwritten. error handlers Optional.

### "Overview of legacy bundled services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For the legacy bundled services that are not available as separate products in Google Cloud, such as image processing, search, and messaging, you can use third-party providers or other workarounds as suggested in the Runtimes guide.
- To reduce runtime migration complexity, Google Cloud now supports a set of App Engine legacy bundled services and their associated APIs on second-generation runtimes, which include Python 3 , Java 11+ , Go 1.12+ , and PHP 7+ .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Overview of legacy bundled services Stay organized with collections Save and categorize content based on your preferences.
- How apps access the App Engine legacy bundled services In runtime migration scenarios, you often also have the option to use Google Cloud products that offer similar functionality as the legacy bundled services.

