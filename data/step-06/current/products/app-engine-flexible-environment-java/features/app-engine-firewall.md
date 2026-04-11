---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:43:43.857Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "App Engine Firewall"
feature_slug: "app-engine-firewall"
latest_feature_date: "2017-10-11"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/application-security"
keywords:
  - "IP range rules"
  - "configure firewall"
  - "firewall rules"
  - "AE Firewall"
  - "App Engine ingress control"
  - "App Engine Firewall"
  - "App Engine firewall"
---

# App Engine Firewall

Product: App Engine flexible environment Java
Coverage: HIGH

## Step 02 Summary

App Engine Firewall was announced as generally available; App Engine Firewall entered beta release.

## Extended Definition

App Engine Firewall in the App Engine flexible environment is an ingress control feature that uses an ordered list of rules to allow or deny access to an app from specified IP addresses or ranges. It lets operators create and modify firewall rules to shape who can reach the app (for example, limiting access to a subset of addresses or allowing only traffic forwarded from a WAF), and requires App Engine Admin, Editor, or Owner IAM roles to create or modify those rules.

## Evidence Summary

The cited pages jointly define App Engine Firewall as ordered allow/deny IP-range rules, describe its role in controlling app access, and specify required IAM roles and operational caveats.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls)
- [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)

## Supporting Pages

### "Creating App Engine firewall rules \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Before you can create App Engine firewall rules for your app, you must have one of the following App Engine IAM roles , which include the necessary privileges for creating or modifying firewall rules: App Engine Admin Editor Owner Creating firewall rules Use one of the following methods to create a firewall rule.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Creating App Engine firewall rules Stay organized with collections Save and categorize content based on your preferences.
- Understanding App Engine firewall rules An App Engine firewall consists of an ordered list of rules that can allow or deny access from the specified IP address or range to your app.
- Note: If you set up port forwarding , remember that all requests through that forwarded port bypass the App Engine firewall.

### "Overview of app security \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: STRONG
- Re-rank rationale: The page is an App Engine security overview and explicitly includes an "App Engine firewall" feature section, making it directly relevant to understanding and defining this security capability.

Evidence snippets:
- Block abusive IP addresses While Google Cloud has many mechanisms in place to prevent attacks, you can use the App Engine firewall to block traffic to your app from IP addresses that present malicious intent or shield your app from denial of service attacks and similar forms of abuse.
- App Engine firewall The App Engine firewall enables you to control access to your App Engine app through a set of rules that can either allow or deny requests from the specified ranges of IP addresses.
- You can then create and modify your firewall rules to control the scope of access throughout your release process, allowing only certain organizations, either within your company or externally, to access your app as it makes its way to public availability.
- For example, if you use a third-party Web Application Firewall (WAF) to proxy requests directed at your app, you can create firewall rules to deny all requests except those that are forwarded from your WAF.

