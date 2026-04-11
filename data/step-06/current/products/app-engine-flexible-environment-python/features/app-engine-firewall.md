---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:45:54.293Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "App Engine firewall"
feature_slug: "app-engine-firewall"
latest_feature_date: "2017-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/application-security"
keywords:
  - "deny/allow traffic rules"
  - "ingress IP allow list"
  - "App Engine firewall configuration"
  - "firewall settings"
  - "firewall rules"
  - "GAE firewall"
  - "firewall GA"
  - "App Engine firewall"
---

# App Engine firewall

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine firewall was announced as generally available; The App Engine firewall was introduced as a beta feature.

## Extended Definition

The App Engine firewall is a feature that controls ingress access to an App Engine app by using an ordered list of rules that allow or deny requests from specified IP address ranges. It can be configured so traffic from certain IPv4 or IPv6 ranges is explicitly allowed or denied, and operators can update a default rule to restrict traffic that does not match any other rule. Firewall rules can be created and modified via gcloud commands or the Admin API (`apps.firewall.ingressRules`), but the provided excerpts do not explicitly state whether the feature is GA or beta.

## Evidence Summary

The cited docs explain firewall semantics (ordered allow/deny IP-range rules), administration methods, and security use cases, but they do not provide explicit lifecycle status language (GA vs beta) in the provided excerpts.

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
- Examples: Use the following examples to help you create your firewall: Add a rule that allows an IPv6 address and subnet mask, and then test that rule to ensure it gets evaluated prior to your other rules: gcloud app firewall-rules create 123 --source-range fe80::3636:3bff:fecc:8778/128 --action allow gcloud app firewall-rules test-ip fe80::3636:3bff:fecc:8778 Add a rule to deny an IPv4 address and subnet mask, and then test that rule to ensure that it gets appropriately evaluated: gcloud app firewall-rules create 123456 --source-range "74.125.0.0/16" --action deny gcloud app firewall-rules test-ip 74 .125.0.8 Update and then test the default rule to ensure that it restricts all IP addresses that don't match any other rules: gcloud app firewall-rules update default --action deny gcloud app firewall-rules test-ip 123 .456.7.89 API To programmatically create firewall rules for your App Engine app, you can use the apps.firewall.ingressRules methods in the Admin API.

### "Overview of app security \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly documents App Engine security practices and directly introduces the App Engine firewall as a key feature for controlling access to the service.

Evidence snippets:
- Block abusive IP addresses While Google Cloud has many mechanisms in place to prevent attacks, you can use the App Engine firewall to block traffic to your app from IP addresses that present malicious intent or shield your app from denial of service attacks and similar forms of abuse.
- You can then create and modify your firewall rules to control the scope of access throughout your release process, allowing only certain organizations, either within your company or externally, to access your app as it makes its way to public availability.
- For example, if you use a third-party Web Application Firewall (WAF) to proxy requests directed at your app, you can create firewall rules to deny all requests except those that are forwarded from your WAF.
- App Engine firewall The App Engine firewall enables you to control access to your App Engine app through a set of rules that can either allow or deny requests from the specified ranges of IP addresses.

