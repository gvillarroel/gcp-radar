---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:40:42.100Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "App Engine firewall"
feature_slug: "app-engine-firewall"
latest_feature_date: "2017-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/understanding-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/creating-firewalls"
keywords:
  - "app"
  - "engine"
  - "firewall"
  - "provides"
  - "rules"
  - "control"
  - "incoming"
  - "traffic"
---

# App Engine firewall

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine provides firewall rules to control incoming traffic to applications; App Engine firewall lets you control network access to App Engine services.

## Extended Definition

App Engine provides firewall rules to control incoming traffic to applications; App Engine firewall lets you control network access to App Engine services.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/python/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/python/understanding-firewalls)
- [https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/python/creating-firewalls)

## Supporting Pages

### "Understanding the App Engine firewall \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/python/understanding-firewalls)
- Source ID: `site-docs-reference-2`
- Final score: 209
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In cases where your app is configured to use other networking services or products, you might need to create rules for controlling incoming traffic in both the App Engine firewall and the firewall or security settings of other products.
- If your App Engine flexible app uses Shared VPC , the App Engine flexible environment does not automatically create firewall rules. if you need to control access and allow traffic on the VPC network, you can create firewall rules on the Shared VPC network.
- If your ingress controls are set to receive internal-and-cloud-load-balancing traffic, leave the default App Engine firewall rule as is ( allow ), and use Google Cloud Armor web application firewall (WAF) rules .
- If there are VPC-based firewall rules (such as VPC firewall rules or hierarchical firewall policies ) configured in your network environment, both VPC-level firewalls and App Engine firewalls need to allow an incoming request's IP range for your App Engine app to receive it.

### "Creating App Engine firewall rules \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls)
- Source ID: `site-docs-reference`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- Examples: Use the following examples to help you create your firewall: Add a rule that allows an IPv6 address and subnet mask, and then test that rule to ensure it gets evaluated prior to your other rules: gcloud app firewall-rules create 123 --source-range fe80::3636:3bff:fecc:8778/128 --action allow gcloud app firewall-rules test-ip fe80::3636:3bff:fecc:8778 Add a rule to deny an IPv4 address and subnet mask, and then test that rule to ensure that it gets appropriately evaluated: gcloud app firewall-rules create 123456 --source-range "74.125.0.0/16" --action deny gcloud app firewall-rules test-ip 74 .125.0.8 Update and then test the default rule to ensure that it restricts all IP addresses that don't match any other rules: gcloud app firewall-rules update default --action deny gcloud app firewall-rules test-ip 123 .456.7.89 API To programmatically create firewall rules for your App Engine app, you can use the apps.firewall.ingressRules methods in the Admin API.
- Before you begin Before you can create App Engine firewall rules for your app, you must have one of the following App Engine IAM roles , which include the necessary privileges for creating or modifying firewall rules: App Engine Admin Editor Owner Creating firewall rules Use one of the following methods to create a firewall rule.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Creating App Engine firewall rules Stay organized with collections Save and categorize content based on your preferences.
- Understanding App Engine firewall rules An App Engine firewall consists of an ordered list of rules that can allow or deny access from the specified IP address or range to your app.

### "Creating App Engine firewall rules \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/python/creating-firewalls)
- Source ID: `site-docs-reference-2`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- Examples: Use the following examples to help you create your firewall: Add a rule that allows an IPv6 address and subnet mask, and then test that rule to ensure it gets evaluated prior to your other rules: gcloud app firewall-rules create 123 --source-range fe80::3636:3bff:fecc:8778/128 --action allow gcloud app firewall-rules test-ip fe80::3636:3bff:fecc:8778 Add a rule to deny an IPv4 address and subnet mask, and then test that rule to ensure that it gets appropriately evaluated: gcloud app firewall-rules create 123456 --source-range "74.125.0.0/16" --action deny gcloud app firewall-rules test-ip 74 .125.0.8 Update and then test the default rule to ensure that it restricts all IP addresses that don't match any other rules: gcloud app firewall-rules update default --action deny gcloud app firewall-rules test-ip 123 .456.7.89 API To programmatically create firewall rules for your App Engine app, you can use the apps.firewall.ingressRules methods in the Admin API.
- Before you begin Before you can create App Engine firewall rules for your app, you must have one of the following App Engine IAM roles , which include the necessary privileges for creating or modifying firewall rules: App Engine Admin Editor Owner Creating firewall rules Use one of the following methods to create a firewall rule.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Creating App Engine firewall rules Stay organized with collections Save and categorize content based on your preferences.
- Understanding App Engine firewall rules An App Engine firewall consists of an ordered list of rules that can allow or deny access from the specified IP address or range to your app.

