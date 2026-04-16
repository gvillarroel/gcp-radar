---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.772Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Blobstore handler for Python 3 bundled services"
feature_slug: "blobstore-handler-for-python-3-bundled-services"
latest_feature_date: "2022-01-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/standard/python3/services/access"
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
keywords:
  - "blobstore"
  - "handlers"
  - "handler"
  - "provide"
  - "bundled"
---

# Blobstore handler for Python 3 bundled services

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine bundled services for Python 3 provide Blobstore handlers through language-idiomatic libraries.

## Extended Definition

App Engine bundled services for Python 3 provide Blobstore handlers through language-idiomatic libraries.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/standard/python3/services/access](https://cloud.google.com/appengine/docs/standard/python3/services/access)
- [https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref](https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)

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

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- The following limits apply specifically to the use of request handlers: Limit Amount Request size 32 megabytes Response size 32 megabytes Request timeout Depends on the type of scaling your app uses Maximum total number of files (app files and static files) 10,000 total 1,000 per directory Maximum size of an application file 32 megabytes Maximum size of a static file 32 megabytes Maximum total size of all application and static files First 1 gigabyte is free $ 0.026 per gigabyte per month after first 1 gigabyte Pending request timeout 10 seconds Maximum size of a single request header field 8 kilobytes for second-generation runtimes in the standard environment.
- Cache expiration By default, the caching headers that App Engine static file and directory handlers add to responses instruct clients and web proxies such as the Google Front End to expire the cache after 10 minutes.
- For example: Strict-Transport-Security : max-age = 31536000 ; includeSubDomains To set this header for any static content that is served by your app, add the header to your app's static file and directory handlers .
- You can specify these response headers either through your framework, directly in your code, or through App Engine static file and directory handlers .

