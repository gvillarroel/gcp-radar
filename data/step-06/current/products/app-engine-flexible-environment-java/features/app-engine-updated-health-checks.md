---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:33.492Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "App Engine updated health checks"
feature_slug: "app-engine-updated-health-checks"
latest_feature_date: "2017-07-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/understanding-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity"
keywords:
  - "app"
  - "engine"
  - "updated"
  - "health"
  - "checks"
  - "allow"
  - "separate"
  - "instance"
---

# App Engine updated health checks

Product: App Engine flexible environment Java
Coverage: MEDIUM

## Step 02 Summary

Updated App Engine health checks allow separate checks for instance running state and readiness to serve traffic, and this option is available in Beta.

## Extended Definition

Updated App Engine health checks allow separate checks for instance running state and readiness to serve traffic, and this option is available in Beta.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/flexible/java/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/java/understanding-firewalls)
- [https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity](https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity)

## Supporting Pages

### "How instances are managed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- App Engine continues to send health check requests and restarts the instance if an unhealthy instance continues to fail to respond to a predetermined number of consecutive health checks.
- As the instance goes through these health checks, the App Engine logs can indicate that the instance is in any of the following states: Healthy .
- If you need to extend the default behavior of split health checks to your application, you can customize the app.yaml file to configure two types of health checks: Liveness checks detect that a VM instance and its container are running.
- Health checking App Engine sends periodic health check requests to confirm that an instance is running, and to check that an instance is fully started and ready to accept incoming requests.

### "Understanding the App Engine firewall \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/java/understanding-firewalls)
- Source ID: `site-docs-reference-2`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Direction of traffic : Ingress Action on match : Allow Source IP ranges : 35.191.0.0/16 and 130.211.0.0/22 Protocols and ports : tcp : 8443 (for legacy health checks) or 10402 (for split health checks) Priority : 1000 Preventing access to cached content The App Engine firewall sits behind mechanisms that cache content, for example web proxies and browsers.
- Service IP range for requests sent to the App Engine standard environment IP range for requests sent to the App Engine flexible environment App Engine Cron 0.1.0.1/32 or 0.1.0.2/32, bypasses the default firewall rule if set to deny 0.1.0.1/32 or 0.1.0.2/32 Compute Engine instances with external IP addresses External IP address of the instance External IP address of the instance Compute Engine instances without an external IP address 0.0.0.0/32 0.0.0.0/32 Compute Engine instances without an external IP address using Cloud NAT for outbound connections 0.0.0.0/32 0.0.0.0/32 Cloud Scheduler jobs using App Engine HTTP and App Engine tasks in Cloud Tasks (including App Engine Task Queues) 0.1.0.2/32, bypasses the default firewall rule if set to deny 0.1.0.2/32 Cloud Storage or Blobstore 0.1.0.30/32 Not applicable URL Fetch 0.1.0.40/32 0.1.0.40/32 Warming requests 0.1.0.3/32, bypasses the default firewall rule if set to deny Not applicable Depending on your use case, these additional instructions might apply when configuring App Engine firewall rules: Requests from newly created or updated App Engine Cron jobs sent to either the App Engine standard or flexible environment come from 0.1.0.2 .
- If your App Engine flexible environment app is not configured to use Shared VPC , the App Engine flexible environment creates up to two hidden VPC firewall rules, depending on whether your app uses split health checks (default) or legacy health checks.
- If there are VPC-based firewall rules (such as VPC firewall rules or hierarchical firewall policies ) configured in your network environment, both VPC-level firewalls and App Engine firewalls need to allow an incoming request's IP range for your App Engine app to receive it.

### "Creating persistent connections with WebSockets \_|\_ App Engine flexible\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity](https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity)
- Source ID: `site-docs-reference-2`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the target instance fails health checks, App Engine moves the session to a healthy instance.
- To enable session affinity for your App Engine version, add the following entry to your app.yaml file: network: session affinity: true Once the version is deployed with the updated app.yaml, new requests will start serving from the same instance as long as that instance is available.
- To allow App Engine to send requests by the same user to the same instance, you can enable session affinity.
- Go Java Node.js PHP Python Ruby .NET Custom You can use WebSockets to create a persistent connection from a client (such as a mobile device or a computer) to an App Engine instance.

