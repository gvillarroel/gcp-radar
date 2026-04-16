---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.793Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Cross-group transaction version consistency"
feature_slug: "cross-group-transaction-version-consistency"
latest_feature_date: "2016-05-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://cloud.google.com/appengine/docs/standard/python3/services/access"
keywords:
  - "transactions"
  - "transaction"
  - "consistency"
  - "return"
  - "cross"
  - "same"
  - "group"
  - "version"
---

# Cross-group transaction version consistency

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

Cross-group transactions return the same version number for all newly created or updated entities in a commit.

## Extended Definition

Cross-group transactions return the same version number for all newly created or updated entities in a commit.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref](https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://cloud.google.com/appengine/docs/standard/python3/services/access](https://cloud.google.com/appengine/docs/standard/python3/services/access)

## Supporting Pages

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref](https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the possible MIME media types, see the IANA MIME Media Types website . redirect http response code Optional. redirect http response code is used with the secure setting to set the HTTP response code returned when performing a redirect required by how the secure setting is configured. redirect http response code element has the following possible values: 301 Moved Permanently response code.
- Python example handlers : - url : /youraccount/. secure : always script : auto To target a specific version of your app using the REGION ID .r.appspot.com domain, you replace the periods that would usually separate the subdomain components of the URL with the string " -dot- ", for example: https:// VERSION ID -dot-default-dot- PROJECT ID .
- This prevents a user from accidentally submitting query data over a non-secure connection that was intended for a secure connection. always Requests for a URL that match this handler that do not use HTTPS are automatically redirected to the HTTPS URL with the same path.
- The combined length of VERSION-dot-SERVICE-dot-PROJECT ID , where VERSION is the name of your version, SERVICE is the name of your service, and PROJECT ID is your project ID, cannot be longer than 63 characters and cannot start or end with a hyphen.

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Limit Free app Paid app Maximum services per app 5 210 Maximum versions per app 15 210 There is also a limit to the number of instances for each service with basic or manual scaling: Maximum instances per manual/basic scaling version Free app Paid app US Paid app EU 20 25 (200 for us-central ) 25 There is also a limit to the number of instances across standard versions that can be running per project and region.
- For example, if you have standard versions and flexible versions in the same app, those versions count towards the same limit.
- Both the flexible environment and the standard environment share the same limits for services and versions.
- The following limits apply to task queues according to their type: Push Queue Limits Maximum task size 100KB Queue execution rate 500 task invocations per second per queue Maximum countdown/ETA for a task 30 days from the current date and time Maximum number of tasks that can be added in a batch 100 tasks Maximum number of tasks that can be added in a transaction 5 tasks Default maximum number of task queues 100 queues.

### "Access legacy bundled services for Python 3 \_|\_ App Engine standard environment\

- URL: [https://cloud.google.com/appengine/docs/standard/python3/services/access](https://cloud.google.com/appengine/docs/standard/python3/services/access)
- Source ID: `site-docs-reference-3`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- You can find guidance on implementing cross version pickle compatibility in the guide .
- DateTimeProperty ( auto now add = True ) def store visit ( remote addr , user agent ): 'create new Visit entity in Datastore' Visit ( visitor = ' {} : {} ' . format ( remote addr , user agent )) . put () def fetch visits ( limit ): 'get most recent visits' return Visit . query () . order ( - Visit . timestamp ) . fetch ( limit ) @app . route ( '/' ) def root (): 'main application (GET) handler' store visit ( request . remote addr , request . user agent ) visits = fetch visits ( 10 ) return render template ( 'index.html' , visits = visits ) Both of these apps can be found in the open source repo for the Python App Engine migration content (code samples, videos , codelabs ), specifically in the mod0 and mod1b folders, respectively.
- Python 2 runtime : python27 api version : 1 threadsafe : true handlers : - url : / script : home.app - url : /index\.html script : home.app - url : /stylesheets static dir : stylesheets - url : /(. \.(gif png jpg))$ static files : static/\1 upload : static/. \.(gif png jpg)$ - url : /admin/. script : admin.app login : admin - url : /. script : not found.app Python 3 runtime : python314 app engine apis : true handlers : - url : /stylesheets static dir : stylesheets - url : /(. \.(gif png jpg))$ static files : static/\1 upload : static/. \.(gif png jpg)$ - url : /admin/. script : auto login : admin Your Python 3 app must handle URL routing (for example, with Flask decorators).
- For example: python3 CLOUD SDK ROOT / bin / dev appserver . py -- runtime python path = "python27=/user/bin/python2.7,python3=/usr/bin/python3" Important: When using the local development server to test Python 3 apps that use the Deferred API , you must set the following environment variable in your app.yaml : DEFERRED USE CROSS COMPATIBLE PICKLE PROTOCOL: 'True' Pickle Compatibility Shared services including Memcache, Cloud NDB and deferred use the pickle module to serialize and share Python objects.

