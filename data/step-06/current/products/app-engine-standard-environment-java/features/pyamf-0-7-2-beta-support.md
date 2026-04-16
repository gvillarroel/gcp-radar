---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.926Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "PyAMF 0.7.2 (Beta) support"
feature_slug: "pyamf-0-7-2-beta-support"
latest_feature_date: "2015-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configuration-files"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/jrewhitelist"
  - "https://docs.cloud.google.com/appengine/docs/quotas"
keywords:
  - "pyamf"
  - "beta"
  - "version"
  - "was"
  - "added"
---

# PyAMF 0.7.2 (Beta) support

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

PyAMF version 0.7.2 (Beta) was added.

## Extended Definition

PyAMF version 0.7.2 (Beta) was added.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files)
- [https://docs.cloud.google.com/appengine/docs/standard/java/jrewhitelist](https://docs.cloud.google.com/appengine/docs/standard/java/jrewhitelist)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)

## Supporting Pages

### "Structuring web services in App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files)
- Source ID: `site-docs-reference-2`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Similarly, both service2 and service3 are in separate directories, which contain each service's files, although service3 includes two versions of the YAML configuration file: In the following example, a single service has the optional dispatch.yaml file and two configuration files that represent different versions of that service, service1.yaml and service2.yaml : Design considerations for instance uptime Hardware or software failures that cause early termination or frequent instance restarts can occur without warning and can take considerable time to resolve.
- If you host your app out of a version control system (VCS), for example GitHub, you can also structure your app to use separate directories in a repository, or use separate repositories for each service.
- For example, you can name a configuration file after your service, or use unique names to represent each version of that particular service, like service1.yaml or app.standard.yaml .
- The app.yaml file acts as a deployment descriptor and defines the scaling type and the runtime, handlers, and other resource settings for a specific version of a service.

### "Previously deprecated and shut down features \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/jrewhitelist](https://docs.cloud.google.com/appengine/docs/standard/java/jrewhitelist)
- Source ID: `site-docs-reference`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Legacy health checks for the App Engine flexible environment (GA) September 18, 2017 September 30, 2018 Legacy health checks Cloud Endpoints Frameworks v1 August 2, 2017 September 13, 2018 Service shutdown complete Python SSL 2.7 November 15, 2017 April 2, 2018 Service shutdown complete Task Queue REST API (v1) August 28, 2017 February 20, 2018 Move to Cloud Tasks API Managed VMs ( vm:true ) environment (Beta) November 15, 2016 December 15, 2017 Upgrade to the latest App Engine flexible environment release Channel API (GA) October 27, 2016 October 31, 2017 Service shutdown complete XMPP API (GA) October 27, 2016 October 31, 2017 Service shutdown complete Java 6 Support (GA) July 14, 2015 Free apps: March 20, 2017 Billed apps: July 26, 2017 Service shutdown complete Python 2.5 (GA) March 8, 2013 June 20, 2017 Service shutdown complete Virtual IP (GA) May 31, 2016 June, 2017 Service shutdown complete Django packaged libraries 1.2, 1.3 (GA) July 14, 2015 July 18, 2016 Service shutdown complete ClientLogin (GA) April 20, 2012 April 12, 2016 Service shutdown complete OpenID 2.0 Support (Alpha) July 14, 2015 February 23, 2016 Service shutdown complete Datastore Admin Copy Entities (Beta) July 14, 2015 February 2, 2016 Service shutdown complete PageSpeed (Alpha) May 6, 2015 December 1, 2015 Service shutdown complete Prospective Search API (Alpha) July 14, 2015 December 1, 2015 Service shutdown complete OAuth 1.0 Support (Alpha) July 14, 2015 November 10, 2015 Service shutdown complete Datastore backups to Blobstore (Beta) June 9, 2015 October 1, 2015 Service shutdown complete Files API (Beta) June 12, 2013 September 9, 2015 Service shutdown complete Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Java Compat runtimes for App Engine flexible environment (Beta) November 15, 2016 April 20, 2020 Service shutdown complete Python Compat runtimes for App Engine flexible environment (Beta) November 15, 2016 April 20, 2020 Service shutdown complete Blobstore UI from the Google Cloud console (GA) June 1, 2018 June 1, 2019 Service shutdown complete Backend API (GA) March 13, 2014 March 13, 2019 Service shutdown complete Datastore Admin backups (GA) February 28, 2018 February 28, 2019 Service shutdown complete Admin API v1beta4/v1beta5 N/A February 1, 2019 Service shutdown complete Java 7 runtime (GA) December 13, 2017 January 16, 2019 Service shutdown complete Go 1.6 & Go 1.8 (GA) July 31, 2018 November 1, 2018 Migrate to newer runtimes .
- The standalone legacy SDK and appcfg tooling July 30, 2019 August 30, 2020 Service shutdown complete; Migrate to Google Cloud CLI ( Java Go Python PHP ) Go 1.9 (GA) June 27, 2019 June 30, 2020 On June 30, 2020, applications still running on unsupported versions of Go will be shut down.

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- The following limits apply to task queues according to their type: Push Queue Limits Maximum task size 100KB Queue execution rate 500 task invocations per second per queue Maximum countdown/ETA for a task 30 days from the current date and time Maximum number of tasks that can be added in a batch 100 tasks Maximum number of tasks that can be added in a transaction 5 tasks Default maximum number of task queues 100 queues.
- Limit Free app Paid app Maximum services per app 5 210 Maximum versions per app 15 210 There is also a limit to the number of instances for each service with basic or manual scaling: Maximum instances per manual/basic scaling version Free app Paid app US Paid app EU 20 25 (200 for us-central ) 25 There is also a limit to the number of instances across standard versions that can be running per project and region.
- Description Limit Maximum characters in Project URL for VERSION -dot- SERVICE -dot- PROJECT ID URL 63 Default Cloud Storage bucket The Default Cloud Storage bucket has a free quota for daily usage as shown below.
- Services, versions, and instances The maximum number of services and versions that you can deploy depends on your app's pricing.

