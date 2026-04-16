---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:33.484Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "Legacy App Engine health checks"
feature_slug: "legacy-app-engine-health-checks"
latest_feature_date: "2017-09-18"
deprecation_date: "2018-09-30"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/deprecations/shut-down"
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/understanding-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed"
keywords:
  - "legacy"
  - "app"
  - "engine"
  - "health"
  - "checks"
  - "were"
  - "deprecated"
  - "set"
---

# Legacy App Engine health checks

Product: App Engine flexible environment Java
Coverage: MEDIUM

## Step 02 Summary

Legacy health checks were deprecated and set to be unavailable after the stated removal date; deprecated on 2018-09-30.

## Extended Definition

Legacy health checks were deprecated and set to be unavailable after the stated removal date; deprecated on 2018-09-30.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/deprecations/shut-down](https://docs.cloud.google.com/appengine/docs/flexible/deprecations/shut-down)
- [https://docs.cloud.google.com/appengine/docs/flexible/java/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/java/understanding-firewalls)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)

## Supporting Pages

### "Previously deprecated and shut down features \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/deprecations/shut-down](https://docs.cloud.google.com/appengine/docs/flexible/deprecations/shut-down)
- Source ID: `site-docs-reference-2`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Legacy health checks for the App Engine flexible environment (GA) September 18, 2017 September 30, 2018 Legacy health checks Cloud Endpoints Frameworks v1 August 2, 2017 September 13, 2018 Service shutdown complete Python SSL 2.7 November 15, 2017 April 2, 2018 Service shutdown complete Task Queue REST API (v1) August 28, 2017 February 20, 2018 Move to Cloud Tasks API Managed VMs ( vm:true ) environment (Beta) November 15, 2016 December 15, 2017 Upgrade to the latest App Engine flexible environment release Channel API (GA) October 27, 2016 October 31, 2017 Service shutdown complete XMPP API (GA) October 27, 2016 October 31, 2017 Service shutdown complete Java 6 Support (GA) July 14, 2015 Free apps: March 20, 2017 Billed apps: July 26, 2017 Service shutdown complete Python 2.5 (GA) March 8, 2013 June 20, 2017 Service shutdown complete Virtual IP (GA) May 31, 2016 June, 2017 Service shutdown complete Django packaged libraries 1.2, 1.3 (GA) July 14, 2015 July 18, 2016 Service shutdown complete ClientLogin (GA) April 20, 2012 April 12, 2016 Service shutdown complete OpenID 2.0 Support (Alpha) July 14, 2015 February 23, 2016 Service shutdown complete Datastore Admin Copy Entities (Beta) July 14, 2015 February 2, 2016 Service shutdown complete PageSpeed (Alpha) May 6, 2015 December 1, 2015 Service shutdown complete Prospective Search API (Alpha) July 14, 2015 December 1, 2015 Service shutdown complete OAuth 1.0 Support (Alpha) July 14, 2015 November 10, 2015 Service shutdown complete Datastore backups to Blobstore (Beta) June 9, 2015 October 1, 2015 Service shutdown complete Files API (Beta) June 12, 2013 September 9, 2015 Service shutdown complete Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Previously deprecated and shut down features Stay organized with collections Save and categorize content based on your preferences.
- View when previous App Engine features were shut down.
- Java Compat runtimes for App Engine flexible environment (Beta) November 15, 2016 April 20, 2020 Service shutdown complete Python Compat runtimes for App Engine flexible environment (Beta) November 15, 2016 April 20, 2020 Service shutdown complete Blobstore UI from the Google Cloud console (GA) June 1, 2018 June 1, 2019 Service shutdown complete Backend API (GA) March 13, 2014 March 13, 2019 Service shutdown complete Datastore Admin backups (GA) February 28, 2018 February 28, 2019 Service shutdown complete Admin API v1beta4/v1beta5 N/A February 1, 2019 Service shutdown complete Java 7 runtime (GA) December 13, 2017 January 16, 2019 Service shutdown complete Go 1.6 & Go 1.8 (GA) July 31, 2018 November 1, 2018 Migrate to newer runtimes .

### "Understanding the App Engine firewall \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/java/understanding-firewalls)
- Source ID: `site-docs-reference-2`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Direction of traffic : Ingress Action on match : Allow Source IP ranges : 35.191.0.0/16 and 130.211.0.0/22 Protocols and ports : tcp : 8443 (for legacy health checks) or 10402 (for split health checks) Priority : 1000 Preventing access to cached content The App Engine firewall sits behind mechanisms that cache content, for example web proxies and browsers.
- If your App Engine flexible environment app is not configured to use Shared VPC , the App Engine flexible environment creates up to two hidden VPC firewall rules, depending on whether your app uses split health checks (default) or legacy health checks.
- Service IP range for requests sent to the App Engine standard environment IP range for requests sent to the App Engine flexible environment App Engine Cron 0.1.0.1/32 or 0.1.0.2/32, bypasses the default firewall rule if set to deny 0.1.0.1/32 or 0.1.0.2/32 Compute Engine instances with external IP addresses External IP address of the instance External IP address of the instance Compute Engine instances without an external IP address 0.0.0.0/32 0.0.0.0/32 Compute Engine instances without an external IP address using Cloud NAT for outbound connections 0.0.0.0/32 0.0.0.0/32 Cloud Scheduler jobs using App Engine HTTP and App Engine tasks in Cloud Tasks (including App Engine Task Queues) 0.1.0.2/32, bypasses the default firewall rule if set to deny 0.1.0.2/32 Cloud Storage or Blobstore 0.1.0.30/32 Not applicable URL Fetch 0.1.0.40/32 0.1.0.40/32 Warming requests 0.1.0.3/32, bypasses the default firewall rule if set to deny Not applicable Depending on your use case, these additional instructions might apply when configuring App Engine firewall rules: Requests from newly created or updated App Engine Cron jobs sent to either the App Engine standard or flexible environment come from 0.1.0.2 .
- App Engine flexible example Your app running in the flexible environment has two services: frontend service and backend service , and has a firewall configured to deny traffic by default. frontend service uses Cloud Tasks with App Engine HTTP to send messages to backend service .

### "How instances are managed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- App Engine continues to send health check requests and restarts the instance if an unhealthy instance continues to fail to respond to a predetermined number of consecutive health checks.
- As the instance goes through these health checks, the App Engine logs can indicate that the instance is in any of the following states: Healthy .
- If you need to extend the default behavior of split health checks to your application, you can customize the app.yaml file to configure two types of health checks: Liveness checks detect that a VM instance and its container are running.
- Health checking App Engine sends periodic health check requests to confirm that an instance is running, and to check that an instance is fully started and ready to accept incoming requests.

