---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:44:58.726Z"
product_name: "App Engine flexible environment PHP"
product_slug: "app-engine-flexible-environment-php"
feature_name: "App Engine Firewall"
feature_slug: "app-engine-firewall"
latest_feature_date: "2017-10-11"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/application-security"
keywords:
  - "manage firewall settings"
  - "source IP restrictions App Engine"
  - "App Engine application firewall"
  - "firewall rules for App Engine"
  - "App Engine firewall rules"
  - "AE Firewall"
  - "App Engine Firewall"
  - "App Engine firewall"
---

# App Engine Firewall

Product: App Engine flexible environment PHP
Coverage: HIGH

## Step 02 Summary

App Engine Firewall reached general availability; App Engine Firewall entered beta.

## Extended Definition

App Engine Firewall for the App Engine flexible environment is a traffic-control feature that lets you define an ordered list of firewall rules to allow or deny requests from specific IP addresses or ranges. It is used to restrict access to your app and block abusive traffic sources, including malicious or denial-of-service-related patterns. To create or change firewall rules, you need one of these IAM roles: App Engine Admin, Editor, or Owner.

## Evidence Summary

These official App Engine flexible documentation pages define the firewall as ordered allow/deny IP-based rules, explain its security purpose, and specify IAM prerequisites for creating or modifying firewall rules.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls)
- [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)

## Supporting Pages

### "Creating App Engine firewall rules \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Before you can create App Engine firewall rules for your app, you must have one of the following App Engine IAM roles , which include the necessary privileges for creating or modifying firewall rules: App Engine Admin Editor Owner Creating firewall rules Use one of the following methods to create a firewall rule.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Creating App Engine firewall rules Stay organized with collections Save and categorize content based on your preferences.
- Understanding App Engine firewall rules An App Engine firewall consists of an ordered list of rules that can allow or deny access from the specified IP address or range to your app.
- Note: If you set up port forwarding , remember that all requests through that forwarded port bypass the App Engine firewall.

### "Overview of app security \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Block abusive IP addresses While Google Cloud has many mechanisms in place to prevent attacks, you can use the App Engine firewall to block traffic to your app from IP addresses that present malicious intent or shield your app from denial of service attacks and similar forms of abuse.
- App Engine firewall The App Engine firewall enables you to control access to your App Engine app through a set of rules that can either allow or deny requests from the specified ranges of IP addresses.

