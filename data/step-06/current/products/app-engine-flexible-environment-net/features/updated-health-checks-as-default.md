---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:14:55.682Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "Updated health checks as default"
feature_slug: "updated-health-checks-as-default"
latest_feature_date: "2017-09-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/understanding-firewalls"
  - "https://cloud.google.com/appengine/docs/flexible/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed"
keywords:
  - "updated"
  - "health"
  - "checks"
  - "default"
  - "became"
  - "app"
  - "engine"
  - "projects"
---

# Updated health checks as default

Product: App Engine flexible environment .NET
Coverage: MEDIUM

## Step 02 Summary

Updated health checks became the default for new App Engine projects, with upgrade supported via gcloud app update --split-health-checks.

## Extended Definition

Updated health checks became the default for new App Engine projects, with upgrade supported via gcloud app update --split-health-checks.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/understanding-firewalls)
- [https://cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)

## Supporting Pages

### "Understanding the App Engine firewall \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/understanding-firewalls)
- Source ID: `site-docs-reference-2`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If your App Engine flexible environment app is not configured to use Shared VPC , the App Engine flexible environment creates up to two hidden VPC firewall rules, depending on whether your app uses split health checks (default) or legacy health checks.
- Service IP range for requests sent to the App Engine standard environment IP range for requests sent to the App Engine flexible environment App Engine Cron 0.1.0.1/32 or 0.1.0.2/32, bypasses the default firewall rule if set to deny 0.1.0.1/32 or 0.1.0.2/32 Compute Engine instances with external IP addresses External IP address of the instance External IP address of the instance Compute Engine instances without an external IP address 0.0.0.0/32 0.0.0.0/32 Compute Engine instances without an external IP address using Cloud NAT for outbound connections 0.0.0.0/32 0.0.0.0/32 Cloud Scheduler jobs using App Engine HTTP and App Engine tasks in Cloud Tasks (including App Engine Task Queues) 0.1.0.2/32, bypasses the default firewall rule if set to deny 0.1.0.2/32 Cloud Storage or Blobstore 0.1.0.30/32 Not applicable URL Fetch 0.1.0.40/32 0.1.0.40/32 Warming requests 0.1.0.3/32, bypasses the default firewall rule if set to deny Not applicable Depending on your use case, these additional instructions might apply when configuring App Engine firewall rules: Requests from newly created or updated App Engine Cron jobs sent to either the App Engine standard or flexible environment come from 0.1.0.2 .
- Direction of traffic : Ingress Action on match : Allow Source IP ranges : 35.191.0.0/16 and 130.211.0.0/22 Protocols and ports : tcp : 8443 (for legacy health checks) or 10402 (for split health checks) Priority : 1000 Preventing access to cached content The App Engine firewall sits behind mechanisms that cache content, for example web proxies and browsers.
- App Engine flexible example Your app running in the flexible environment has two services: frontend service and backend service , and has a firewall configured to deny traffic by default. frontend service uses Cloud Tasks with App Engine HTTP to send messages to backend service .

### "How instances are managed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you need to extend the default behavior of split health checks to your application, you can customize the app.yaml file to configure two types of health checks: Liveness checks detect that a VM instance and its container are running.
- App Engine continues to send health check requests and restarts the instance if an unhealthy instance continues to fail to respond to a predetermined number of consecutive health checks.
- As the instance goes through these health checks, the App Engine logs can indicate that the instance is in any of the following states: Healthy .
- By default, these health checks are enabled and are known as split health checks .

### "How instances are managed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you need to extend the default behavior of split health checks to your application, you can customize the app.yaml file to configure two types of health checks: Liveness checks detect that a VM instance and its container are running.
- App Engine continues to send health check requests and restarts the instance if an unhealthy instance continues to fail to respond to a predetermined number of consecutive health checks.
- As the instance goes through these health checks, the App Engine logs can indicate that the instance is in any of the following states: Healthy .
- By default, these health checks are enabled and are known as split health checks .

