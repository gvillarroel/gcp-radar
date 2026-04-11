---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:44:02.757Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "App Engine firewall"
feature_slug: "app-engine-firewall"
latest_feature_date: "2017-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/application-security"
keywords:
  - "App Engine network ingress restrictions"
  - "firewall feature for App Engine"
  - "App Engine firewall settings"
  - "App Engine firewall rules"
  - "ingress firewall"
  - "AE Firewall"
  - "App Engine Firewall beta"
  - "App Engine Firewall"
---

# App Engine firewall

Product: App Engine flexible environment .NET
Coverage: MEDIUM

## Step 02 Summary

App Engine Firewall was announced as generally available; The App Engine firewall entered beta release.

## Extended Definition

In App Engine flexible environment, the App Engine firewall is an ingress filtering feature that uses an ordered list of rules to allow or deny requests to an app from specific IP addresses or ranges. It is used to restrict traffic, including blocking abusive or malicious sources, and therefore helps protect applications from undesirable or abusive requests. Creating or modifying firewall rules requires an App Engine IAM role with those privileges (examples shown in the docs include App Engine Admin, Editor, or Owner), and forwarded-port traffic is a documented exception because it bypasses the App Engine firewall.

## Evidence Summary

The cited pages describe firewall rule creation and operation (ordered allow/deny IP-based rules, protective purpose, and IAM requirements) and note the documented port-forwarding bypass behavior.

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
- Final score: 42
- Re-rank relevance: STRONG
- Re-rank rationale: The page is an official App Engine security overview that explicitly introduces the App Engine firewall as a core security control, making it directly relevant for defining and documenting this feature.

Evidence snippets:
- Block abusive IP addresses While Google Cloud has many mechanisms in place to prevent attacks, you can use the App Engine firewall to block traffic to your app from IP addresses that present malicious intent or shield your app from denial of service attacks and similar forms of abuse.
- App Engine firewall The App Engine firewall enables you to control access to your App Engine app through a set of rules that can either allow or deny requests from the specified ranges of IP addresses.

