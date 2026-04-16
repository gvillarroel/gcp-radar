---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:29.628Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "Go App Engine package compatibility"
feature_slug: "go-app-engine-package-compatibility"
latest_feature_date: "2016-11-15"
deprecation_date: "2016-11-15"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/deprecations/shut-down"
  - "https://docs.cloud.google.com/appengine/docs/flexible/access-control"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/access-control"
keywords:
  - "go"
  - "app"
  - "engine"
  - "package"
  - "compatibility"
  - "legacy"
  - "was"
  - "deprecated"
---

# Go App Engine package compatibility

Product: App Engine flexible environment custom runtimes
Coverage: MEDIUM

## Step 02 Summary

The legacy Go App Engine package was deprecated for use with App Engine flexible environments in favor of cloud.google.com/go packages; deprecated on 2016-11-15.

## Extended Definition

The legacy Go App Engine package was deprecated for use with App Engine flexible environments in favor of cloud.google.com/go packages; deprecated on 2016-11-15.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/deprecations/shut-down](https://docs.cloud.google.com/appengine/docs/flexible/deprecations/shut-down)
- [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/access-control](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/access-control)

## Supporting Pages

### "Previously deprecated and shut down features \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/deprecations/shut-down](https://docs.cloud.google.com/appengine/docs/flexible/deprecations/shut-down)
- Source ID: `site-docs-reference-2`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Legacy health checks for the App Engine flexible environment (GA) September 18, 2017 September 30, 2018 Legacy health checks Cloud Endpoints Frameworks v1 August 2, 2017 September 13, 2018 Service shutdown complete Python SSL 2.7 November 15, 2017 April 2, 2018 Service shutdown complete Task Queue REST API (v1) August 28, 2017 February 20, 2018 Move to Cloud Tasks API Managed VMs ( vm:true ) environment (Beta) November 15, 2016 December 15, 2017 Upgrade to the latest App Engine flexible environment release Channel API (GA) October 27, 2016 October 31, 2017 Service shutdown complete XMPP API (GA) October 27, 2016 October 31, 2017 Service shutdown complete Java 6 Support (GA) July 14, 2015 Free apps: March 20, 2017 Billed apps: July 26, 2017 Service shutdown complete Python 2.5 (GA) March 8, 2013 June 20, 2017 Service shutdown complete Virtual IP (GA) May 31, 2016 June, 2017 Service shutdown complete Django packaged libraries 1.2, 1.3 (GA) July 14, 2015 July 18, 2016 Service shutdown complete ClientLogin (GA) April 20, 2012 April 12, 2016 Service shutdown complete OpenID 2.0 Support (Alpha) July 14, 2015 February 23, 2016 Service shutdown complete Datastore Admin Copy Entities (Beta) July 14, 2015 February 2, 2016 Service shutdown complete PageSpeed (Alpha) May 6, 2015 December 1, 2015 Service shutdown complete Prospective Search API (Alpha) July 14, 2015 December 1, 2015 Service shutdown complete OAuth 1.0 Support (Alpha) July 14, 2015 November 10, 2015 Service shutdown complete Datastore backups to Blobstore (Beta) June 9, 2015 October 1, 2015 Service shutdown complete Files API (Beta) June 12, 2013 September 9, 2015 Service shutdown complete Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Previously deprecated and shut down features Stay organized with collections Save and categorize content based on your preferences.
- Java Compat runtimes for App Engine flexible environment (Beta) November 15, 2016 April 20, 2020 Service shutdown complete Python Compat runtimes for App Engine flexible environment (Beta) November 15, 2016 April 20, 2020 Service shutdown complete Blobstore UI from the Google Cloud console (GA) June 1, 2018 June 1, 2019 Service shutdown complete Backend API (GA) March 13, 2014 March 13, 2019 Service shutdown complete Datastore Admin backups (GA) February 28, 2018 February 28, 2019 Service shutdown complete Admin API v1beta4/v1beta5 N/A February 1, 2019 Service shutdown complete Java 7 runtime (GA) December 13, 2017 January 16, 2019 Service shutdown complete Go 1.6 & Go 1.8 (GA) July 31, 2018 November 1, 2018 Migrate to newer runtimes .
- The standalone legacy SDK and appcfg tooling July 30, 2019 August 30, 2020 Service shutdown complete; Migrate to Google Cloud CLI ( Java Go Python PHP ) Go 1.9 (GA) June 27, 2019 June 30, 2020 On June 30, 2020, applications still running on unsupported versions of Go will be shut down.

### "Setting up access control \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Background () // For API packages whose import path is starting with "cloud.google.com/go", // such as cloud.google.com/go/storage in this case, if there are no credentials // provided, the client library will look for credentials in the environment. storageClient , err := storage .
- A user account can be used to authenticate from the following tools: Google Cloud console Google Cloud CLI IDEs and build tools that use the gcloud CLI to test and deploy App Engine apps A service account , which is intended to represent an application or a process instead of a person.
- A service account can be used to authenticate from the following tools: gcloud CLI IDEs and build tools that use gcloud CLI tools to test and deploy App Engine apps Creating a user account Open the IAM page in the Google Cloud console.
- Specifying a service account App Engine lets you use two types of service accounts: Per-version service account : A service account configured as the identity for a specific version of your deployed service.

### "Setting up access control \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/access-control](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/access-control)
- Source ID: `site-docs-reference-2`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Background () // For API packages whose import path is starting with "cloud.google.com/go", // such as cloud.google.com/go/storage in this case, if there are no credentials // provided, the client library will look for credentials in the environment. storageClient , err := storage .
- A user account can be used to authenticate from the following tools: Google Cloud console Google Cloud CLI IDEs and build tools that use the gcloud CLI to test and deploy App Engine apps A service account , which is intended to represent an application or a process instead of a person.
- A service account can be used to authenticate from the following tools: gcloud CLI IDEs and build tools that use gcloud CLI tools to test and deploy App Engine apps Creating a user account Open the IAM page in the Google Cloud console.
- Specifying a service account App Engine lets you use two types of service accounts: Per-version service account : A service account configured as the identity for a specific version of your deployed service.

