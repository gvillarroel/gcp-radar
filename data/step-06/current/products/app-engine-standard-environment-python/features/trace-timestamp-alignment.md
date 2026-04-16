---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.795Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Trace timestamp alignment"
feature_slug: "trace-timestamp-alignment"
latest_feature_date: "2016-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/standard/python3/services/access"
  - "https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml"
keywords:
  - "timestamps"
  - "timestamp"
  - "alignment"
  - "aligns"
  - "trace"
---

# Trace timestamp alignment

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine now aligns trace timestamps with log timestamps.

## Extended Definition

App Engine now aligns trace timestamps with log timestamps.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/standard/python3/services/access](https://cloud.google.com/appengine/docs/standard/python3/services/access)
- [https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)

## Supporting Pages

### "Scheduling jobs with cron.yaml \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml)
- Source ID: `site-docs-reference-required-9`
- Final score: 38
- Re-rank relevance: N/A

### "Access legacy bundled services for Python 3 \_|\_ App Engine standard environment\

- URL: [https://cloud.google.com/appengine/docs/standard/python3/services/access](https://cloud.google.com/appengine/docs/standard/python3/services/access)
- Source ID: `site-docs-reference-3`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- DateTimeProperty ( auto now add = True ) def store visit ( remote addr , user agent ): 'create new Visit entity in Datastore' Visit ( visitor = ' {} : {} ' . format ( remote addr , user agent )) . put () def fetch visits ( limit ): 'get most recent visits' return Visit . query () . order ( - Visit . timestamp ) . fetch ( limit ) @app . route ( '/' ) def root (): 'main application (GET) handler' store visit ( request . remote addr , request . user agent ) visits = fetch visits ( 10 ) return render template ( 'index.html' , visits = visits ) Both of these apps can be found in the open source repo for the Python App Engine migration content (code samples, videos , codelabs ), specifically in the mod0 and mod1b folders, respectively.
- DateTimeProperty ( auto now add = True ) def store visit ( remote addr , user agent ): 'create new Visit entity in Datastore' Visit ( visitor = ' {} : {} ' . format ( remote addr , user agent )) . put () def fetch visits ( limit ): 'get most recent visits' return Visit . query () . order ( - Visit . timestamp ) . fetch ( limit ) class MainHandler ( webapp2 .
- Model ): 'Visit entity registers visitor IP address & timestamp' visitor = ndb .
- Model ): 'Visit entity registers visitor IP address & timestamp' visitor = ndb .

### "Configure Datastore indexes with index.yaml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

