---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:48:27.797Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "App Engine Firewall"
feature_slug: "app-engine-firewall"
latest_feature_date: "2017-10-11"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/application-security"
keywords:
  - "application-level firewall"
  - "App Engine firewall feature"
  - "firewall feature"
  - "Firewall GA"
  - "Firewall beta"
  - "App Engine Firewall"
  - "App Engine firewall"
---

# App Engine Firewall

Product: App Engine flexible environment Ruby
Coverage: HIGH

## Step 02 Summary

The App Engine Firewall feature reached general availability; App Engine Firewall entered beta availability.

## Extended Definition

The App Engine Firewall feature for App Engine Flexible is an application-level access-control mechanism composed of an ordered list of rules that can allow or deny requests from specified IP addresses or ranges. It is used to control traffic to an app and can help block abusive or malicious traffic, while requests forwarded through port forwarding bypass the firewall, so those forwarded requests are not enforced by the App Engine firewall. Creating or modifying firewall rules requires appropriate App Engine IAM privileges (such as App Engine Admin, Editor, or Owner roles).

## Evidence Summary

These pages document how App Engine Firewall rules are defined and applied in the flexible environment, including ordered allow/deny IP-based rules, their security purpose, IAM requirements for rule changes, and the exception for port-forwarded traffic.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls)
- [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)

## Supporting Pages

### "Creating App Engine firewall rules \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Before you can create App Engine firewall rules for your app, you must have one of the following App Engine IAM roles , which include the necessary privileges for creating or modifying firewall rules: App Engine Admin Editor Owner Creating firewall rules Use one of the following methods to create a firewall rule.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Creating App Engine firewall rules Stay organized with collections Save and categorize content based on your preferences.
- Understanding App Engine firewall rules An App Engine firewall consists of an ordered list of rules that can allow or deny access from the specified IP address or range to your app.
- Note: If you set up port forwarding , remember that all requests through that forwarded port bypass the App Engine firewall.

### "Overview of app security \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: WEAK
- Re-rank rationale: The page mentions the App Engine Firewall in a security feature list but does not provide meaningful implementation or availability details needed to define the feature.

Evidence snippets:
- Block abusive IP addresses While Google Cloud has many mechanisms in place to prevent attacks, you can use the App Engine firewall to block traffic to your app from IP addresses that present malicious intent or shield your app from denial of service attacks and similar forms of abuse.
- App Engine firewall The App Engine firewall enables you to control access to your App Engine app through a set of rules that can either allow or deny requests from the specified ranges of IP addresses.

