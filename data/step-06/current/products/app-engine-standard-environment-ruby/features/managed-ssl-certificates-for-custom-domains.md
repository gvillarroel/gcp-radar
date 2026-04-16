---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:18:25.417Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Managed SSL certificates for custom domains"
feature_slug: "managed-ssl-certificates-for-custom-domains"
latest_feature_date: "2017-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/application-security"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
keywords:
  - "automatically"
  - "provision"
  - "renew"
  - "certificates"
  - "managed"
  - "domains"
  - "custom"
---

# Managed SSL certificates for custom domains

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Managed certificates automatically provision, renew, and revoke SSL certificates for mapped custom domains.

## Extended Definition

Managed certificates automatically provision, renew, and revoke SSL certificates for mapped custom domains.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)

## Supporting Pages

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- If you have set up a wildcard subdomain mapping for a custom domain, you can also address a service or any of its instances via a URL of the form https://s.domain.com or https://i.s.domain.com .
- Before the queues become long enough to have a noticeable effect on your app's latency, App Engine automatically creates one or more new instances to handle the increasing load.
- App Engine can automatically create and shut down instances as traffic fluctuates, or you can specify a number of instances to run regardless of the amount of traffic.

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Soft routing does not apply to custom domains; requests to them will return a HTTP 404 status code if the hostname is invalid.
- You can use the simple " . " URL notation with your own custom domains and with HTTP requests.
- Example URLs Here are some examples of URLs for App Engine, showing both the appspot.com domain that App Engine assigns to your app and a custom domain, which you can set up for your app .
- Otherwise, users can use your app's App Engine URL to bypass the load balancer, Cloud Armor security policies, SSL certificates, and private keys that are passed through the load balancer.

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Custom domains To send HTTPS requests with your custom domain, you can use the managed SSL certificates that are provisioned by App Engine.
- For more information, see Securing Custom Domains with SSL .
- Depending on how your app is configured, you have the following options: appspot.com domains Use the https URL prefix to send HTTPS request to the default service of your Google Cloud project, for example: https:// PROJECT ID .

