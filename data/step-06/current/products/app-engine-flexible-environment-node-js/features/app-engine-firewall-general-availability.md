---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:05:36.402Z"
product_name: "App Engine flexible environment Node.js"
product_slug: "app-engine-flexible-environment-node-js"
feature_name: "App Engine Firewall general availability"
feature_slug: "app-engine-firewall-general-availability"
latest_feature_date: "2017-10-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/nodejs/creating-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/nodejs/understanding-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/application-security"
keywords:
  - "firewall ingress rules"
  - "App Engine firewall feature"
  - "app engine firewall rules"
  - "security for App Engine"
  - "GA App Engine Firewall"
  - "general availability firewall"
  - "Firewall GA"
  - "App Engine Firewall"
---

# App Engine Firewall general availability

Product: App Engine flexible environment Node.js
Coverage: LOW

## Step 02 Summary

App Engine Firewall was announced as generally available.

## Extended Definition

App Engine Firewall was announced as generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls)
- [https://docs.cloud.google.com/appengine/docs/flexible/nodejs/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/nodejs/creating-firewalls)
- [https://docs.cloud.google.com/appengine/docs/flexible/nodejs/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/nodejs/understanding-firewalls)
- [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)

## Supporting Pages

### "Creating App Engine firewall rules \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Before you can create App Engine firewall rules for your app, you must have one of the following App Engine IAM roles , which include the necessary privileges for creating or modifying firewall rules: App Engine Admin Editor Owner Creating firewall rules Use one of the following methods to create a firewall rule.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Creating App Engine firewall rules Stay organized with collections Save and categorize content based on your preferences.
- Understanding App Engine firewall rules An App Engine firewall consists of an ordered list of rules that can allow or deny access from the specified IP address or range to your app.
- Note: If you set up port forwarding , remember that all requests through that forwarded port bypass the App Engine firewall.

### "Creating App Engine firewall rules \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/nodejs/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/nodejs/creating-firewalls)
- Source ID: `site-docs-reference-2`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Before you can create App Engine firewall rules for your app, you must have one of the following App Engine IAM roles , which include the necessary privileges for creating or modifying firewall rules: App Engine Admin Editor Owner Creating firewall rules Use one of the following methods to create a firewall rule.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Creating App Engine firewall rules Stay organized with collections Save and categorize content based on your preferences.
- Understanding App Engine firewall rules An App Engine firewall consists of an ordered list of rules that can allow or deny access from the specified IP address or range to your app.
- Note: If you set up port forwarding , remember that all requests through that forwarded port bypass the App Engine firewall.

### "Understanding the App Engine firewall \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/nodejs/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/nodejs/understanding-firewalls)
- Source ID: `site-docs-reference-2`
- Final score: 60
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Service IP range for requests sent to the App Engine standard environment IP range for requests sent to the App Engine flexible environment App Engine Cron 0.1.0.1/32 or 0.1.0.2/32, bypasses the default firewall rule if set to deny 0.1.0.1/32 or 0.1.0.2/32 Compute Engine instances with external IP addresses External IP address of the instance External IP address of the instance Compute Engine instances without an external IP address 0.0.0.0/32 0.0.0.0/32 Compute Engine instances without an external IP address using Cloud NAT for outbound connections 0.0.0.0/32 0.0.0.0/32 Cloud Scheduler jobs using App Engine HTTP and App Engine tasks in Cloud Tasks (including App Engine Task Queues) 0.1.0.2/32, bypasses the default firewall rule if set to deny 0.1.0.2/32 Cloud Storage or Blobstore 0.1.0.30/32 Not applicable URL Fetch 0.1.0.40/32 0.1.0.40/32 Warming requests 0.1.0.3/32, bypasses the default firewall rule if set to deny Not applicable Depending on your use case, these additional instructions might apply when configuring App Engine firewall rules: Requests from newly created or updated App Engine Cron jobs sent to either the App Engine standard or flexible environment come from 0.1.0.2 .
- Interaction with other products or services Cloud Load Balancing If you use Cloud Load Balancing and serverless NEGs , note the following: The load balancer does not interfere or interact with App Engine firewall rules.
- App Engine firewall rules You can configure App Engine firewall rules using the Google Cloud console, the Google Cloud CLI, or the Admin API by specifying rules that allow or block specified IP ranges.
- VPC firewall rules apply to resources running in the VPC network, such as Compute Engine virtual machines, whereas App Engine firewall rules apply to incoming requests to your app or service.

### "Overview of app security \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: The page describes App Engine security controls and explicitly references the App Engine firewall, which supports the feature concept but does not provide its GA announcement details.

Evidence snippets:
- Block abusive IP addresses While Google Cloud has many mechanisms in place to prevent attacks, you can use the App Engine firewall to block traffic to your app from IP addresses that present malicious intent or shield your app from denial of service attacks and similar forms of abuse.
- App Engine firewall The App Engine firewall enables you to control access to your App Engine app through a set of rules that can either allow or deny requests from the specified ranges of IP addresses.

