---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:40:06.752Z"
product_name: "App Engine flexible environment Go"
product_slug: "app-engine-flexible-environment-go"
feature_name: "App Engine Firewall"
feature_slug: "app-engine-firewall"
latest_feature_date: "2017-08-23"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/application-security"
keywords:
  - "App Engine security firewall feature"
  - "configure App Engine firewall"
  - "App Engine firewall rules"
  - "App Engine IP allowlist"
  - "AE Firewall"
  - "App Engine network firewall"
  - "App Engine Firewall beta"
  - "App Engine Firewall"
---

# App Engine Firewall

Product: App Engine flexible environment Go
Coverage: HIGH

## Step 02 Summary

App Engine Firewall was released in beta.

## Extended Definition

App Engine Firewall in the App Engine flexible environment is a set of ordered firewall rules that control access to an app by allowing or denying requests from specified IP addresses or ranges. It is intended to help block traffic from abusive sources, including potentially malicious or DoS-like activity, and firewall rules can only be created or modified by users with the required App Engine IAM privileges.

## Evidence Summary

These pages define App Engine Firewall as rule-based IP/range access control and confirm the allow/deny behavior and required IAM roles for creating or modifying firewall rules.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls)
- [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)

## Supporting Pages

### "Creating App Engine firewall rules \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: STRONG
- Re-rank rationale: This page directly defines and operationalizes App Engine Firewall behavior, including rule creation, priority semantics, actions, IP range handling, and required IAM roles.

Evidence snippets:
- Before you begin Before you can create App Engine firewall rules for your app, you must have one of the following App Engine IAM roles , which include the necessary privileges for creating or modifying firewall rules: App Engine Admin Editor Owner Creating firewall rules Use one of the following methods to create a firewall rule.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Creating App Engine firewall rules Stay organized with collections Save and categorize content based on your preferences.
- Understanding App Engine firewall rules An App Engine firewall consists of an ordered list of rules that can allow or deny access from the specified IP address or range to your app.
- Note: If you set up port forwarding , remember that all requests through that forwarded port bypass the App Engine firewall.

### "Overview of app security \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: MODERATE
- Re-rank rationale: The page provides supporting context for what App Engine Firewall is used for and where it fits in securing an app, but it does not include release-stage details such as beta.

Evidence snippets:
- Block abusive IP addresses While Google Cloud has many mechanisms in place to prevent attacks, you can use the App Engine firewall to block traffic to your app from IP addresses that present malicious intent or shield your app from denial of service attacks and similar forms of abuse.
- App Engine firewall The App Engine firewall enables you to control access to your App Engine app through a set of rules that can either allow or deny requests from the specified ranges of IP addresses.

