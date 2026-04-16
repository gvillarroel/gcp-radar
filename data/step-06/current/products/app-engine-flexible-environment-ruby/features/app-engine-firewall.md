---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:04.007Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "App Engine firewall"
feature_slug: "app-engine-firewall"
latest_feature_date: "2017-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/understanding-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/creating-firewalls"
keywords:
  - "app"
  - "engine"
  - "firewall"
  - "provides"
  - "network"
  - "level"
  - "access"
  - "controls"
---

# App Engine firewall

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

App Engine firewall provides network-level access controls for App Engine applications; App Engine firewall provides network-level access controls for App Engine applications.

## Extended Definition

App Engine firewall provides network-level access controls for App Engine applications; App Engine firewall provides network-level access controls for App Engine applications.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/ruby/understanding-firewalls)
- [https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/ruby/creating-firewalls)

## Supporting Pages

### "Understanding the App Engine firewall \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/ruby/understanding-firewalls)
- Source ID: `site-docs-reference-2`
- Final score: 193
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If there are VPC-based firewall rules (such as VPC firewall rules or hierarchical firewall policies ) configured in your network environment, both VPC-level firewalls and App Engine firewalls need to allow an incoming request's IP range for your App Engine app to receive it.
- If your App Engine flexible app uses Shared VPC , the App Engine flexible environment does not automatically create firewall rules. if you need to control access and allow traffic on the VPC network, you can create firewall rules on the Shared VPC network.
- Direction of traffic : Ingress Action on match : Allow Source IP ranges : 35.191.0.0/16 and 130.211.0.0/22 Protocols and ports : tcp : 8443 (for legacy health checks) or 10402 (for split health checks) Priority : 1000 Preventing access to cached content The App Engine firewall sits behind mechanisms that cache content, for example web proxies and browsers.
- In certain circumstances , it's possible for the App Engine flexible environment to automatically configure firewall rules at the Virtual Private Cloud (VPC) level, but note that the VPC firewall does not interact with the App Engine firewall.

### "Creating App Engine firewall rules \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example firewall In this example, a company has set up a firewall to grant access to the engineering team and internal corporate network to their in-development app.
- Understanding App Engine firewall rules An App Engine firewall consists of an ordered list of rules that can allow or deny access from the specified IP address or range to your app.
- Examples: Use the following examples to help you create your firewall: Add a rule that allows an IPv6 address and subnet mask, and then test that rule to ensure it gets evaluated prior to your other rules: gcloud app firewall-rules create 123 --source-range fe80::3636:3bff:fecc:8778/128 --action allow gcloud app firewall-rules test-ip fe80::3636:3bff:fecc:8778 Add a rule to deny an IPv4 address and subnet mask, and then test that rule to ensure that it gets appropriately evaluated: gcloud app firewall-rules create 123456 --source-range "74.125.0.0/16" --action deny gcloud app firewall-rules test-ip 74 .125.0.8 Update and then test the default rule to ensure that it restricts all IP addresses that don't match any other rules: gcloud app firewall-rules update default --action deny gcloud app firewall-rules test-ip 123 .456.7.89 API To programmatically create firewall rules for your App Engine app, you can use the apps.firewall.ingressRules methods in the Admin API.
- Before you begin Before you can create App Engine firewall rules for your app, you must have one of the following App Engine IAM roles , which include the necessary privileges for creating or modifying firewall rules: App Engine Admin Editor Owner Creating firewall rules Use one of the following methods to create a firewall rule.

### "Creating App Engine firewall rules \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/ruby/creating-firewalls)
- Source ID: `site-docs-reference-2`
- Final score: 161
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example firewall In this example, a company has set up a firewall to grant access to the engineering team and internal corporate network to their in-development app.
- Understanding App Engine firewall rules An App Engine firewall consists of an ordered list of rules that can allow or deny access from the specified IP address or range to your app.
- Examples: Use the following examples to help you create your firewall: Add a rule that allows an IPv6 address and subnet mask, and then test that rule to ensure it gets evaluated prior to your other rules: gcloud app firewall-rules create 123 --source-range fe80::3636:3bff:fecc:8778/128 --action allow gcloud app firewall-rules test-ip fe80::3636:3bff:fecc:8778 Add a rule to deny an IPv4 address and subnet mask, and then test that rule to ensure that it gets appropriately evaluated: gcloud app firewall-rules create 123456 --source-range "74.125.0.0/16" --action deny gcloud app firewall-rules test-ip 74 .125.0.8 Update and then test the default rule to ensure that it restricts all IP addresses that don't match any other rules: gcloud app firewall-rules update default --action deny gcloud app firewall-rules test-ip 123 .456.7.89 API To programmatically create firewall rules for your App Engine app, you can use the apps.firewall.ingressRules methods in the Admin API.
- Before you begin Before you can create App Engine firewall rules for your app, you must have one of the following App Engine IAM roles , which include the necessary privileges for creating or modifying firewall rules: App Engine Admin Editor Owner Creating firewall rules Use one of the following methods to create a firewall rule.

