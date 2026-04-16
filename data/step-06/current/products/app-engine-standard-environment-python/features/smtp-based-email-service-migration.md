---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.764Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "SMTP-based email service migration"
feature_slug: "smtp-based-email-service-migration"
latest_feature_date: "2026-03-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://cloud.google.com/appengine/docs/standard/python3/services/access"
  - "https://cloud.google.com/appengine/docs/standard/bundled-services-overview"
  - "https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview"
keywords:
  - "email"
  - "smtp"
  - "migration"
  - "based"
---

# SMTP-based email service migration

Product: App Engine standard environment Python
Coverage: LOW

## Step 02 Summary

App Engine standard environment Python supports migrating from the legacy Mail API to an SMTP-based email service such as SendGrid, Mailgun, or Mailjet; App Engine standard environment Python supports migrating from the legacy Mail API to an SMTP-based email service such as SendGrid, Mailgun, or Mailjet.

## Extended Definition

App Engine standard environment Python supports migrating from the legacy Mail API to an SMTP-based email service such as SendGrid, Mailgun, or Mailjet; App Engine standard environment Python supports migrating from the legacy Mail API to an SMTP-based email service such as SendGrid, Mailgun, or Mailjet.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/standard/python3/services/access](https://cloud.google.com/appengine/docs/standard/python3/services/access)
- [https://cloud.google.com/appengine/docs/standard/bundled-services-overview](https://cloud.google.com/appengine/docs/standard/bundled-services-overview)
- [https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview)

## Supporting Pages

### "Overview of legacy bundled services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview)
- Source ID: `site-docs-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- To reduce runtime migration complexity, Google Cloud now supports a set of App Engine legacy bundled services and their associated APIs on second-generation runtimes, which include Python 3 , Java 11+ , Go 1.12+ , and PHP 7+ .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Overview of legacy bundled services Stay organized with collections Save and categorize content based on your preferences.
- How apps access the App Engine legacy bundled services In runtime migration scenarios, you often also have the option to use Google Cloud products that offer similar functionality as the legacy bundled services.
- Recognizing this challenge, Google Cloud is committed to providing you with a more incremental migration path to newer runtimes.

### "Overview of legacy bundled services \_|\_ App Engine standard environment\

- URL: [https://cloud.google.com/appengine/docs/standard/bundled-services-overview](https://cloud.google.com/appengine/docs/standard/bundled-services-overview)
- Source ID: `site-docs-reference-3`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- To reduce runtime migration complexity, Google Cloud now supports a set of App Engine legacy bundled services and their associated APIs on second-generation runtimes, which include Python 3 , Java 11+ , Go 1.12+ , and PHP 7+ .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Overview of legacy bundled services Stay organized with collections Save and categorize content based on your preferences.
- How apps access the App Engine legacy bundled services In runtime migration scenarios, you often also have the option to use Google Cloud products that offer similar functionality as the legacy bundled services.
- Recognizing this challenge, Google Cloud is committed to providing you with a more incremental migration path to newer runtimes.

### "Access legacy bundled services for Python 3 \_|\_ App Engine standard environment\

- URL: [https://cloud.google.com/appengine/docs/standard/python3/services/access](https://cloud.google.com/appengine/docs/standard/python3/services/access)
- Source ID: `site-docs-reference-3`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- DateTimeProperty ( auto now add = True ) def store visit ( remote addr , user agent ): 'create new Visit entity in Datastore' Visit ( visitor = ' {} : {} ' . format ( remote addr , user agent )) . put () def fetch visits ( limit ): 'get most recent visits' return Visit . query () . order ( - Visit . timestamp ) . fetch ( limit ) @app . route ( '/' ) def root (): 'main application (GET) handler' store visit ( request . remote addr , request . user agent ) visits = fetch visits ( 10 ) return render template ( 'index.html' , visits = visits ) Both of these apps can be found in the open source repo for the Python App Engine migration content (code samples, videos , codelabs ), specifically in the mod0 and mod1b folders, respectively.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Access legacy bundled services for Python 3 Stay organized with collections Save and categorize content based on your preferences.
- A recommended migration strategy is to first replace the use of webapp2 in your Python 2.7 app with Flask (or an alternative web framework such as Django , Pyramid , Bottle , or web.py ), while remaining on Python 2.7.
- If your App Engine environment uses both Python 2 and Python 3, which is common during a migration, you must ensure that shared serialized objects written by one version of Python can be reconstitued by the other.

