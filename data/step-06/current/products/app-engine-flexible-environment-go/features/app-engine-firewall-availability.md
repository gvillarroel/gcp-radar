---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:40:06.747Z"
product_name: "App Engine flexible environment Go"
product_slug: "app-engine-flexible-environment-go"
feature_name: "App Engine firewall availability"
feature_slug: "app-engine-firewall-availability"
latest_feature_date: "2017-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/application-security"
keywords:
  - "ingress filtering"
  - "request filtering"
  - "firewall configuration"
  - "firewall management"
  - "firewall rules"
  - "GAE firewall"
  - "App Engine firewall"
  - "App Engine Firewall"
---

# App Engine firewall availability

Product: App Engine flexible environment Go
Coverage: MEDIUM

## Step 02 Summary

App Engine firewall was announced as generally available.

## Extended Definition

App Engine firewall for the Flexible environment is a request-filtering feature that uses an ordered list of firewall rules to allow or deny traffic to an app based on source IP addresses or ranges. The firewall can be used to block abusive IPs (for example, malicious traffic patterns), and users can create and modify rules to control access scope (including allowing only selected traffic sources) through standard App Engine IAM permissions. The provided excerpts do not include a direct statement of the feature’s launch status (e.g., GA announcement wording), so availability/announcement claims are not fully evidenced here.

## Evidence Summary

These pages document that App Engine firewall rules can be managed in the Flexible environment, define their allow/deny IP-based behavior, and describe their security purpose for controlling and blocking access.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls)
- [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)

## Supporting Pages

### "Creating App Engine firewall rules \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: WEAK
- Re-rank rationale: The page documents how to configure firewall rules but does not state launch status, GA/Beta classification, or availability announcements for the feature.

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
- Re-rank rationale: The page includes the App Engine firewall as a security feature in the flexible environment and explains that it is available as part of app security configuration, but it does not state any GA/beta availability level.

Evidence snippets:
- Block abusive IP addresses While Google Cloud has many mechanisms in place to prevent attacks, you can use the App Engine firewall to block traffic to your app from IP addresses that present malicious intent or shield your app from denial of service attacks and similar forms of abuse.
- App Engine firewall The App Engine firewall enables you to control access to your App Engine app through a set of rules that can either allow or deny requests from the specified ranges of IP addresses.
- You can then create and modify your firewall rules to control the scope of access throughout your release process, allowing only certain organizations, either within your company or externally, to access your app as it makes its way to public availability.
- For example, if you use a third-party Web Application Firewall (WAF) to proxy requests directed at your app, you can create firewall rules to deny all requests except those that are forwarded from your WAF.

