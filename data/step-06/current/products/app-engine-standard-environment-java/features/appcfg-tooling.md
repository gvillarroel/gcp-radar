---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.226Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "AppCfg tooling"
feature_slug: "appcfg-tooling"
latest_feature_date: "2019-07-30"
deprecation_date: "2020-07-30"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/deprecations/shut-down"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/jrewhitelist"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
keywords:
  - "tool"
  - "management"
  - "appcfg"
  - "deployment"
  - "tooling"
  - "legacy"
---

# AppCfg tooling

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

AppCfg tooling is the legacy App Engine deployment and management tool for Java applications; deprecated on 2020-07-30.

## Extended Definition

AppCfg tooling is the legacy App Engine deployment and management tool for Java applications; deprecated on 2020-07-30.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/deprecations/shut-down](https://docs.cloud.google.com/appengine/docs/standard/deprecations/shut-down)
- [https://docs.cloud.google.com/appengine/docs/standard/java/jrewhitelist](https://docs.cloud.google.com/appengine/docs/standard/java/jrewhitelist)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)

## Supporting Pages

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference-4`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- For example: <staging> <delete-jsps>false</delete-jsps> </staging> Staging option defaults The defaults for staging options are different depending on whether you use Google Cloud SDK-based tooling, such as the gcloud CLI, or the Google Cloud SDK-based Maven , Gradle , or IntelliJ plugins.
- Element Description <application> Not required if you deploy your app using Google Cloud SDK-based tooling, such as the gcloud app deploy command, IntelliJ plugins, Maven or Gradle plugins.
- The Google Cloud SDK-based tooling ignore this element and get the project ID from the gcloud config project property.
- Example <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <application>simple-app</application> <module>default</module> <version>uno</version> <instance-class>B8</instance-class> <manual-scaling> <instances>5</instances> </manual-scaling> </appengine-web-app> Staging elements Much of the work done during a deployment occurs locally in a preparation step called staging , where JAR files are assembled, JSPs are compiled, and so forth.

### "Previously deprecated and shut down features \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/deprecations/shut-down](https://docs.cloud.google.com/appengine/docs/standard/deprecations/shut-down)
- Source ID: `site-docs-reference-4`
- Final score: 72
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The standalone legacy SDK and appcfg tooling July 30, 2019 August 30, 2020 Service shutdown complete; Migrate to Google Cloud CLI ( Java Go Python PHP ) Go 1.9 (GA) June 27, 2019 June 30, 2020 On June 30, 2020, applications still running on unsupported versions of Go will be shut down.
- Legacy health checks for the App Engine flexible environment (GA) September 18, 2017 September 30, 2018 Legacy health checks Cloud Endpoints Frameworks v1 August 2, 2017 September 13, 2018 Service shutdown complete Python SSL 2.7 November 15, 2017 April 2, 2018 Service shutdown complete Task Queue REST API (v1) August 28, 2017 February 20, 2018 Move to Cloud Tasks API Managed VMs ( vm:true ) environment (Beta) November 15, 2016 December 15, 2017 Upgrade to the latest App Engine flexible environment release Channel API (GA) October 27, 2016 October 31, 2017 Service shutdown complete XMPP API (GA) October 27, 2016 October 31, 2017 Service shutdown complete Java 6 Support (GA) July 14, 2015 Free apps: March 20, 2017 Billed apps: July 26, 2017 Service shutdown complete Python 2.5 (GA) March 8, 2013 June 20, 2017 Service shutdown complete Virtual IP (GA) May 31, 2016 June, 2017 Service shutdown complete Django packaged libraries 1.2, 1.3 (GA) July 14, 2015 July 18, 2016 Service shutdown complete ClientLogin (GA) April 20, 2012 April 12, 2016 Service shutdown complete OpenID 2.0 Support (Alpha) July 14, 2015 February 23, 2016 Service shutdown complete Datastore Admin Copy Entities (Beta) July 14, 2015 February 2, 2016 Service shutdown complete PageSpeed (Alpha) May 6, 2015 December 1, 2015 Service shutdown complete Prospective Search API (Alpha) July 14, 2015 December 1, 2015 Service shutdown complete OAuth 1.0 Support (Alpha) July 14, 2015 November 10, 2015 Service shutdown complete Datastore backups to Blobstore (Beta) June 9, 2015 October 1, 2015 Service shutdown complete Files API (Beta) June 12, 2013 September 9, 2015 Service shutdown complete Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Previously deprecated and shut down features \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/jrewhitelist](https://docs.cloud.google.com/appengine/docs/standard/java/jrewhitelist)
- Source ID: `site-docs-reference-4`
- Final score: 72
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The standalone legacy SDK and appcfg tooling July 30, 2019 August 30, 2020 Service shutdown complete; Migrate to Google Cloud CLI ( Java Go Python PHP ) Go 1.9 (GA) June 27, 2019 June 30, 2020 On June 30, 2020, applications still running on unsupported versions of Go will be shut down.
- Legacy health checks for the App Engine flexible environment (GA) September 18, 2017 September 30, 2018 Legacy health checks Cloud Endpoints Frameworks v1 August 2, 2017 September 13, 2018 Service shutdown complete Python SSL 2.7 November 15, 2017 April 2, 2018 Service shutdown complete Task Queue REST API (v1) August 28, 2017 February 20, 2018 Move to Cloud Tasks API Managed VMs ( vm:true ) environment (Beta) November 15, 2016 December 15, 2017 Upgrade to the latest App Engine flexible environment release Channel API (GA) October 27, 2016 October 31, 2017 Service shutdown complete XMPP API (GA) October 27, 2016 October 31, 2017 Service shutdown complete Java 6 Support (GA) July 14, 2015 Free apps: March 20, 2017 Billed apps: July 26, 2017 Service shutdown complete Python 2.5 (GA) March 8, 2013 June 20, 2017 Service shutdown complete Virtual IP (GA) May 31, 2016 June, 2017 Service shutdown complete Django packaged libraries 1.2, 1.3 (GA) July 14, 2015 July 18, 2016 Service shutdown complete ClientLogin (GA) April 20, 2012 April 12, 2016 Service shutdown complete OpenID 2.0 Support (Alpha) July 14, 2015 February 23, 2016 Service shutdown complete Datastore Admin Copy Entities (Beta) July 14, 2015 February 2, 2016 Service shutdown complete PageSpeed (Alpha) May 6, 2015 December 1, 2015 Service shutdown complete Prospective Search API (Alpha) July 14, 2015 December 1, 2015 Service shutdown complete OAuth 1.0 Support (Alpha) July 14, 2015 November 10, 2015 Service shutdown complete Datastore backups to Blobstore (Beta) June 9, 2015 October 1, 2015 Service shutdown complete Files API (Beta) June 12, 2013 September 9, 2015 Service shutdown complete Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

