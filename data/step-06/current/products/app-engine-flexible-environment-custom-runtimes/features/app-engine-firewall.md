---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:39:03.559Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "App Engine Firewall"
feature_slug: "app-engine-firewall"
latest_feature_date: "2017-08-23"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/application-security"
keywords:
  - "create firewall rules"
  - "App Engine firewall feature"
  - "App Engine firewall rules"
  - "Application Firewall"
  - "beta App Engine Firewall"
  - "App Engine Firewall"
  - "App Engine firewall"
---

# App Engine Firewall

Product: App Engine flexible environment custom runtimes
Coverage: HIGH

## Step 02 Summary

The App Engine Firewall feature entered beta release.

## Extended Definition

App Engine Firewall is a feature in App Engine flexible environment that controls access to an app through an ordered list of firewall rules that allow or deny requests based on specified IP addresses or ranges. It is used to block abusive or malicious traffic (including DoS-like abuse) and can be configured with rules such as allowing only traffic forwarded from an external WAF.

## Evidence Summary

The cited pages define App Engine Firewall’s behavior (allow/deny IP-based rules and ordered rule evaluation) and provide operational context for security use cases and required IAM roles to create or modify rules.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls)
- [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)

## Supporting Pages

### "Creating App Engine firewall rules \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: STRONG
- Re-rank rationale: The page provides detailed instructions, constraints, and IAM requirements for creating and managing App Engine firewall rules, which directly defines the feature’s operation.

Evidence snippets:
- Before you begin Before you can create App Engine firewall rules for your app, you must have one of the following App Engine IAM roles , which include the necessary privileges for creating or modifying firewall rules: App Engine Admin Editor Owner Creating firewall rules Use one of the following methods to create a firewall rule.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Creating App Engine firewall rules Stay organized with collections Save and categorize content based on your preferences.
- Understanding App Engine firewall rules An App Engine firewall consists of an ordered list of rules that can allow or deny access from the specified IP address or range to your app.
- Note: If you set up port forwarding , remember that all requests through that forwarded port bypass the App Engine firewall.

### "Overview of app security \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: The page provides security guidance for App Engine, including mentions of App Engine Firewall, HTTPS, and access control, which helps describe how the feature is used.

Evidence snippets:
- Block abusive IP addresses While Google Cloud has many mechanisms in place to prevent attacks, you can use the App Engine firewall to block traffic to your app from IP addresses that present malicious intent or shield your app from denial of service attacks and similar forms of abuse.
- For example, if you use a third-party Web Application Firewall (WAF) to proxy requests directed at your app, you can create firewall rules to deny all requests except those that are forwarded from your WAF.
- App Engine firewall The App Engine firewall enables you to control access to your App Engine app through a set of rules that can either allow or deny requests from the specified ranges of IP addresses.

