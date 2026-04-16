---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:14:55.681Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "Legacy health checks"
feature_slug: "legacy-health-checks"
latest_feature_date: "2017-09-18"
deprecation_date: "2018-09-30"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/understanding-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/deprecations/shut-down"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed"
keywords:
  - "legacy"
  - "health"
  - "checks"
  - "no"
  - "longer"
  - "available"
  - "after"
  - "stated"
---

# Legacy health checks

Product: App Engine flexible environment .NET
Coverage: MEDIUM

## Step 02 Summary

Legacy health checks are no longer available after the stated deprecation date; deprecated on 2018-09-30.

## Extended Definition

Legacy health checks are no longer available after the stated deprecation date; deprecated on 2018-09-30.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/understanding-firewalls)
- [https://docs.cloud.google.com/appengine/docs/flexible/deprecations/shut-down](https://docs.cloud.google.com/appengine/docs/flexible/deprecations/shut-down)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)

## Supporting Pages

### "Understanding the App Engine firewall \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/understanding-firewalls)
- Source ID: `site-docs-reference-2`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Direction of traffic : Ingress Action on match : Allow Source IP ranges : 35.191.0.0/16 and 130.211.0.0/22 Protocols and ports : tcp : 8443 (for legacy health checks) or 10402 (for split health checks) Priority : 1000 Preventing access to cached content The App Engine firewall sits behind mechanisms that cache content, for example web proxies and browsers.
- If your App Engine flexible environment app is not configured to use Shared VPC , the App Engine flexible environment creates up to two hidden VPC firewall rules, depending on whether your app uses split health checks (default) or legacy health checks.
- These hidden firewall rules allow serving traffic and health check traffic to the flexible environment: Network name : The network specified in app.yaml , or the default network if no network is configured.
- When content is cached, that content is served publicly from the specific URL until it expires and can be accessed even after creating new firewall rules.

### "Previously deprecated and shut down features \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/deprecations/shut-down](https://docs.cloud.google.com/appengine/docs/flexible/deprecations/shut-down)
- Source ID: `site-docs-reference-2`
- Final score: 87
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Legacy health checks for the App Engine flexible environment (GA) September 18, 2017 September 30, 2018 Legacy health checks Cloud Endpoints Frameworks v1 August 2, 2017 September 13, 2018 Service shutdown complete Python SSL 2.7 November 15, 2017 April 2, 2018 Service shutdown complete Task Queue REST API (v1) August 28, 2017 February 20, 2018 Move to Cloud Tasks API Managed VMs ( vm:true ) environment (Beta) November 15, 2016 December 15, 2017 Upgrade to the latest App Engine flexible environment release Channel API (GA) October 27, 2016 October 31, 2017 Service shutdown complete XMPP API (GA) October 27, 2016 October 31, 2017 Service shutdown complete Java 6 Support (GA) July 14, 2015 Free apps: March 20, 2017 Billed apps: July 26, 2017 Service shutdown complete Python 2.5 (GA) March 8, 2013 June 20, 2017 Service shutdown complete Virtual IP (GA) May 31, 2016 June, 2017 Service shutdown complete Django packaged libraries 1.2, 1.3 (GA) July 14, 2015 July 18, 2016 Service shutdown complete ClientLogin (GA) April 20, 2012 April 12, 2016 Service shutdown complete OpenID 2.0 Support (Alpha) July 14, 2015 February 23, 2016 Service shutdown complete Datastore Admin Copy Entities (Beta) July 14, 2015 February 2, 2016 Service shutdown complete PageSpeed (Alpha) May 6, 2015 December 1, 2015 Service shutdown complete Prospective Search API (Alpha) July 14, 2015 December 1, 2015 Service shutdown complete OAuth 1.0 Support (Alpha) July 14, 2015 November 10, 2015 Service shutdown complete Datastore backups to Blobstore (Beta) June 9, 2015 October 1, 2015 Service shutdown complete Files API (Beta) June 12, 2013 September 9, 2015 Service shutdown complete Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The standalone legacy SDK and appcfg tooling July 30, 2019 August 30, 2020 Service shutdown complete; Migrate to Google Cloud CLI ( Java Go Python PHP ) Go 1.9 (GA) June 27, 2019 June 30, 2020 On June 30, 2020, applications still running on unsupported versions of Go will be shut down.

### "How instances are managed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you need to extend the default behavior of split health checks to your application, you can customize the app.yaml file to configure two types of health checks: Liveness checks detect that a VM instance and its container are running.
- App Engine continues to send health check requests and restarts the instance if an unhealthy instance continues to fail to respond to a predetermined number of consecutive health checks.
- A healthy status indicates that the instance has more than 820 MB of available disk space and should respond to a health check with an HTTP status code of 200 .
- As the instance goes through these health checks, the App Engine logs can indicate that the instance is in any of the following states: Healthy .

