---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:17.309Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "Disabling external ephemeral IP addresses for App Engine Flex"
feature_slug: "disabling-external-ephemeral-ip-addresses-for-app-engine-flex"
latest_feature_date: "2022-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip"
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/disable-external-ip"
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/understanding-firewalls"
keywords:
  - "disabling"
  - "external"
  - "ephemeral"
  - "ip"
  - "addresses"
  - "app"
  - "engine"
  - "flex"
---

# Disabling external ephemeral IP addresses for App Engine Flex

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine Flex now supports disabling external ephemeral IP addresses for services.

## Extended Definition

App Engine Flex now supports disabling external ephemeral IP addresses for services.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/python/disable-external-ip)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/python/understanding-firewalls)

## Supporting Pages

### "Configure private internal-only services \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limitations Disabling ephemeral external IP addresses has the following limitations: Services with custom domains: To send requests to App Engine services with custom domains you must configure Cloud NAT .
- Before you begin To deploy flexible environment apps without external IP addresses, you must enable Private Google Access on the target subnetwork.
- The ephemeral external IP address allows your service to send requests to App Engine services with custom domains, and resources on the internet.
- By default, flexible environment services receive both an internal IP address and an ephemeral external IP address when they are first deployed.

### "Configure private internal-only services \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/python/disable-external-ip)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limitations Disabling ephemeral external IP addresses has the following limitations: Services with custom domains: To send requests to App Engine services with custom domains you must configure Cloud NAT .
- Before you begin To deploy flexible environment apps without external IP addresses, you must enable Private Google Access on the target subnetwork.
- The ephemeral external IP address allows your service to send requests to App Engine services with custom domains, and resources on the internet.
- By default, flexible environment services receive both an internal IP address and an ephemeral external IP address when they are first deployed.

### "Understanding the App Engine firewall \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/python/understanding-firewalls)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service IP range for requests sent to the App Engine standard environment IP range for requests sent to the App Engine flexible environment App Engine Cron 0.1.0.1/32 or 0.1.0.2/32, bypasses the default firewall rule if set to deny 0.1.0.1/32 or 0.1.0.2/32 Compute Engine instances with external IP addresses External IP address of the instance External IP address of the instance Compute Engine instances without an external IP address 0.0.0.0/32 0.0.0.0/32 Compute Engine instances without an external IP address using Cloud NAT for outbound connections 0.0.0.0/32 0.0.0.0/32 Cloud Scheduler jobs using App Engine HTTP and App Engine tasks in Cloud Tasks (including App Engine Task Queues) 0.1.0.2/32, bypasses the default firewall rule if set to deny 0.1.0.2/32 Cloud Storage or Blobstore 0.1.0.30/32 Not applicable URL Fetch 0.1.0.40/32 0.1.0.40/32 Warming requests 0.1.0.3/32, bypasses the default firewall rule if set to deny Not applicable Depending on your use case, these additional instructions might apply when configuring App Engine firewall rules: Requests from newly created or updated App Engine Cron jobs sent to either the App Engine standard or flexible environment come from 0.1.0.2 .
- App Engine flexible example Your app running in the flexible environment has two services: frontend service and backend service , and has a firewall configured to deny traffic by default. frontend service uses Cloud Tasks with App Engine HTTP to send messages to backend service .
- If your App Engine flexible app uses Shared VPC , the App Engine flexible environment does not automatically create firewall rules. if you need to control access and allow traffic on the VPC network, you can create firewall rules on the Shared VPC network.
- If your App Engine flexible environment app is not configured to use Shared VPC , the App Engine flexible environment creates up to two hidden VPC firewall rules, depending on whether your app uses split health checks (default) or legacy health checks.

