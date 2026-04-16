---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.307Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "App Engine legacy SDK tooling (AppCfg and standalone SDK)"
feature_slug: "app-engine-legacy-sdk-tooling-appcfg-and-standalone-sdk"
latest_feature_date: "2019-07-30"
deprecation_date: "2020-07-30"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/deprecations/shut-down"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler"
keywords:
  - "app"
  - "engine"
  - "legacy"
  - "sdk"
  - "tooling"
  - "appcfg"
  - "standalone"
  - "artifacts"
---

# App Engine legacy SDK tooling (AppCfg and standalone SDK)

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

The AppCfg tooling and legacy standalone App Engine SDK artifacts are deprecated, with support removal scheduled for July 30, 2020; deprecated on 2020-07-30.

## Extended Definition

The AppCfg tooling and legacy standalone App Engine SDK artifacts are deprecated, with support removal scheduled for July 30, 2020; deprecated on 2020-07-30.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/deprecations/shut-down](https://docs.cloud.google.com/appengine/docs/standard/deprecations/shut-down)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler](https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler)

## Supporting Pages

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Click the tab for instructions on using the tool of your choice: Console To stop or disable a version for your service: Go to the App Engine Versions page in the Google Cloud console: Go to Versions Select a version from the table, and click Stop . gcloud Run the following: gcloud app versions stop --service= SERVICE VERSION Replace: SERVICE with the name of your service.
- Click the tab for instructions on using the tool of your choice: Console To delete a service: Go to the App Engine Services page in the Google Cloud console: Go to Services Select a service from the table, and click Delete . gcloud Run the following: gcloud app services delete SERVICE Replace: SERVICE with the name of your service.
- One of the benefits App Engine standard environment's "pay for only what you need" platform as described earlier in Scaling Down is that the system autoscales the number of instances down to zero when there is no traffic.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.

### "Previously deprecated and shut down features \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/deprecations/shut-down](https://docs.cloud.google.com/appengine/docs/standard/deprecations/shut-down)
- Source ID: `site-docs-reference-4`
- Final score: 64
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The standalone legacy SDK and appcfg tooling July 30, 2019 August 30, 2020 Service shutdown complete; Migrate to Google Cloud CLI ( Java Go Python PHP ) Go 1.9 (GA) June 27, 2019 June 30, 2020 On June 30, 2020, applications still running on unsupported versions of Go will be shut down.
- Legacy health checks for the App Engine flexible environment (GA) September 18, 2017 September 30, 2018 Legacy health checks Cloud Endpoints Frameworks v1 August 2, 2017 September 13, 2018 Service shutdown complete Python SSL 2.7 November 15, 2017 April 2, 2018 Service shutdown complete Task Queue REST API (v1) August 28, 2017 February 20, 2018 Move to Cloud Tasks API Managed VMs ( vm:true ) environment (Beta) November 15, 2016 December 15, 2017 Upgrade to the latest App Engine flexible environment release Channel API (GA) October 27, 2016 October 31, 2017 Service shutdown complete XMPP API (GA) October 27, 2016 October 31, 2017 Service shutdown complete Java 6 Support (GA) July 14, 2015 Free apps: March 20, 2017 Billed apps: July 26, 2017 Service shutdown complete Python 2.5 (GA) March 8, 2013 June 20, 2017 Service shutdown complete Virtual IP (GA) May 31, 2016 June, 2017 Service shutdown complete Django packaged libraries 1.2, 1.3 (GA) July 14, 2015 July 18, 2016 Service shutdown complete ClientLogin (GA) April 20, 2012 April 12, 2016 Service shutdown complete OpenID 2.0 Support (Alpha) July 14, 2015 February 23, 2016 Service shutdown complete Datastore Admin Copy Entities (Beta) July 14, 2015 February 2, 2016 Service shutdown complete PageSpeed (Alpha) May 6, 2015 December 1, 2015 Service shutdown complete Prospective Search API (Alpha) July 14, 2015 December 1, 2015 Service shutdown complete OAuth 1.0 Support (Alpha) July 14, 2015 November 10, 2015 Service shutdown complete Datastore backups to Blobstore (Beta) June 9, 2015 October 1, 2015 Service shutdown complete Files API (Beta) June 12, 2013 September 9, 2015 Service shutdown complete Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Java Compat runtimes for App Engine flexible environment (Beta) November 15, 2016 April 20, 2020 Service shutdown complete Python Compat runtimes for App Engine flexible environment (Beta) November 15, 2016 April 20, 2020 Service shutdown complete Blobstore UI from the Google Cloud console (GA) June 1, 2018 June 1, 2019 Service shutdown complete Backend API (GA) March 13, 2014 March 13, 2019 Service shutdown complete Datastore Admin backups (GA) February 28, 2018 February 28, 2019 Service shutdown complete Admin API v1beta4/v1beta5 N/A February 1, 2019 Service shutdown complete Java 7 runtime (GA) December 13, 2017 January 16, 2019 Service shutdown complete Go 1.6 & Go 1.8 (GA) July 31, 2018 November 1, 2018 Migrate to newer runtimes .
- Home Documentation Application hosting App Engine Standard environment Resources Send feedback Previously deprecated and shut down features Stay organized with collections Save and categorize content based on your preferences.

### "Understand performance with Cloud Profiler \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler](https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Understand performance with Cloud Profiler Stay organized with collections Save and categorize content based on your preferences.

