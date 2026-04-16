---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:40:42.101Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "Updated health checks"
feature_slug: "updated-health-checks"
latest_feature_date: "2017-09-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/understanding-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/using-websockets-and-session-affinity"
keywords:
  - "updated"
  - "health"
  - "checks"
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "provides"
---

# Updated health checks

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible environment provides updated health checks for monitoring and traffic management; Updated health checks use separate liveness and readiness checks to verify that an instance is running and ready to serve traffic.

## Extended Definition

App Engine flexible environment provides updated health checks for monitoring and traffic management; Updated health checks use separate liveness and readiness checks to verify that an instance is running and ready to serve traffic.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/python/understanding-firewalls)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/using-websockets-and-session-affinity](https://docs.cloud.google.com/appengine/docs/flexible/python/using-websockets-and-session-affinity)

## Supporting Pages

### "How instances are managed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- App Engine continues to send health check requests and restarts the instance if an unhealthy instance continues to fail to respond to a predetermined number of consecutive health checks.
- NTP with App Engine flexible environment The App Engine flexible environment has network time protocol (NTP) services which use Google NTP servers.
- As the instance goes through these health checks, the App Engine logs can indicate that the instance is in any of the following states: Healthy .

### "Creating persistent connections with WebSockets \_|\_ App Engine flexible\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/using-websockets-and-session-affinity](https://docs.cloud.google.com/appengine/docs/flexible/python/using-websockets-and-session-affinity)
- Source ID: `site-docs-reference-2`
- Final score: 79
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Clone the sample app Copy the sample apps to your local machine, and navigate to the websockets directory: git clone https://github.com/GoogleCloudPlatform/python-docs-samples cd python-docs-samples/appengine/flexible/websockets/ Run the sample locally To run locally, you need to use Gunicorn with the flask socket worker: $ gunicorn -b 127 .0.0.1:8080 -k flask sockets.worker main:app Deploy and run the sample on App Engine To deploy your application to the App Engine flexible environment, run the following command from the directory where your app.yaml is located: gcloud app deploy You can then direct your browser to https:// PROJECT ID .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Creating persistent connections with WebSockets Stay organized with collections Save and categorize content based on your preferences.
- If the target instance fails health checks, App Engine moves the session to a healthy instance.
- App Engine flexible environment VM instances are restarted on a weekly basis.

### "Understanding the App Engine firewall \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/python/understanding-firewalls)
- Source ID: `site-docs-reference-2`
- Final score: 79
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If your App Engine flexible environment app is not configured to use Shared VPC , the App Engine flexible environment creates up to two hidden VPC firewall rules, depending on whether your app uses split health checks (default) or legacy health checks.
- Service IP range for requests sent to the App Engine standard environment IP range for requests sent to the App Engine flexible environment App Engine Cron 0.1.0.1/32 or 0.1.0.2/32, bypasses the default firewall rule if set to deny 0.1.0.1/32 or 0.1.0.2/32 Compute Engine instances with external IP addresses External IP address of the instance External IP address of the instance Compute Engine instances without an external IP address 0.0.0.0/32 0.0.0.0/32 Compute Engine instances without an external IP address using Cloud NAT for outbound connections 0.0.0.0/32 0.0.0.0/32 Cloud Scheduler jobs using App Engine HTTP and App Engine tasks in Cloud Tasks (including App Engine Task Queues) 0.1.0.2/32, bypasses the default firewall rule if set to deny 0.1.0.2/32 Cloud Storage or Blobstore 0.1.0.30/32 Not applicable URL Fetch 0.1.0.40/32 0.1.0.40/32 Warming requests 0.1.0.3/32, bypasses the default firewall rule if set to deny Not applicable Depending on your use case, these additional instructions might apply when configuring App Engine firewall rules: Requests from newly created or updated App Engine Cron jobs sent to either the App Engine standard or flexible environment come from 0.1.0.2 .
- Direction of traffic : Ingress Action on match : Allow Source IP ranges : 35.191.0.0/16 and 130.211.0.0/22 Protocols and ports : tcp : 8443 (for legacy health checks) or 10402 (for split health checks) Priority : 1000 Preventing access to cached content The App Engine firewall sits behind mechanisms that cache content, for example web proxies and browsers.
- App Engine flexible example Your app running in the flexible environment has two services: frontend service and backend service , and has a firewall configured to deny traffic by default. frontend service uses Cloud Tasks with App Engine HTTP to send messages to backend service .

