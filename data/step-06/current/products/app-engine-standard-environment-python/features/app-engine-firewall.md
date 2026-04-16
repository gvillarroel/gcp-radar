---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.787Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "App Engine firewall"
feature_slug: "app-engine-firewall"
latest_feature_date: "2017-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/standard/creating-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/creating-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/standard/creating-firewalls"
keywords:
  - "firewall"
  - "inbound"
  - "control"
  - "lets"
  - "access"
---

# App Engine firewall

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine firewall lets you control inbound access to App Engine applications.

## Extended Definition

App Engine firewall lets you control inbound access to App Engine applications.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/standard/creating-firewalls](https://cloud.google.com/appengine/docs/standard/creating-firewalls)
- [https://docs.cloud.google.com/appengine/docs/standard/python3/creating-firewalls](https://docs.cloud.google.com/appengine/docs/standard/python3/creating-firewalls)
- [https://docs.cloud.google.com/appengine/docs/standard/creating-firewalls](https://docs.cloud.google.com/appengine/docs/standard/creating-firewalls)

## Supporting Pages

### "Creating App Engine firewall rules \_|\_ App Engine standard environment\

- URL: [https://cloud.google.com/appengine/docs/standard/creating-firewalls](https://cloud.google.com/appengine/docs/standard/creating-firewalls)
- Source ID: `site-docs-reference-3`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Understanding App Engine firewall rules An App Engine firewall consists of an ordered list of rules that can allow or deny access from the specified IP address or range to your app.
- Example firewall In this example, a company has set up a firewall to grant access to the engineering team and internal corporate network to their in-development app.
- What's next To ensure that you've securely configured your app and set the appropriate levels of access, review Application Security as well as Access Control .
- Examples: Use the following examples to help you create your firewall: Add a rule that allows an IPv6 address and subnet mask, and then test that rule to ensure it gets evaluated prior to your other rules: gcloud app firewall-rules create 123 --source-range fe80::3636:3bff:fecc:8778/128 --action allow gcloud app firewall-rules test-ip fe80::3636:3bff:fecc:8778 Add a rule to deny an IPv4 address and subnet mask, and then test that rule to ensure that it gets appropriately evaluated: gcloud app firewall-rules create 123456 --source-range "74.125.0.0/16" --action deny gcloud app firewall-rules test-ip 74 .125.0.8 Update and then test the default rule to ensure that it restricts all IP addresses that don't match any other rules: gcloud app firewall-rules update default --action deny gcloud app firewall-rules test-ip 123 .456.7.89 API To programmatically create firewall rules for your App Engine app, you can use the apps.firewall.ingressRules methods in the Admin API.

### "Creating App Engine firewall rules \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3/creating-firewalls](https://docs.cloud.google.com/appengine/docs/standard/python3/creating-firewalls)
- Source ID: `site-docs-reference-4`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Understanding App Engine firewall rules An App Engine firewall consists of an ordered list of rules that can allow or deny access from the specified IP address or range to your app.
- Example firewall In this example, a company has set up a firewall to grant access to the engineering team and internal corporate network to their in-development app.
- What's next To ensure that you've securely configured your app and set the appropriate levels of access, review Application Security as well as Access Control .
- Examples: Use the following examples to help you create your firewall: Add a rule that allows an IPv6 address and subnet mask, and then test that rule to ensure it gets evaluated prior to your other rules: gcloud app firewall-rules create 123 --source-range fe80::3636:3bff:fecc:8778/128 --action allow gcloud app firewall-rules test-ip fe80::3636:3bff:fecc:8778 Add a rule to deny an IPv4 address and subnet mask, and then test that rule to ensure that it gets appropriately evaluated: gcloud app firewall-rules create 123456 --source-range "74.125.0.0/16" --action deny gcloud app firewall-rules test-ip 74 .125.0.8 Update and then test the default rule to ensure that it restricts all IP addresses that don't match any other rules: gcloud app firewall-rules update default --action deny gcloud app firewall-rules test-ip 123 .456.7.89 API To programmatically create firewall rules for your App Engine app, you can use the apps.firewall.ingressRules methods in the Admin API.

### "Creating App Engine firewall rules \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/creating-firewalls](https://docs.cloud.google.com/appengine/docs/standard/creating-firewalls)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Understanding App Engine firewall rules An App Engine firewall consists of an ordered list of rules that can allow or deny access from the specified IP address or range to your app.
- Example firewall In this example, a company has set up a firewall to grant access to the engineering team and internal corporate network to their in-development app.
- What's next To ensure that you've securely configured your app and set the appropriate levels of access, review Application Security as well as Access Control .
- Examples: Use the following examples to help you create your firewall: Add a rule that allows an IPv6 address and subnet mask, and then test that rule to ensure it gets evaluated prior to your other rules: gcloud app firewall-rules create 123 --source-range fe80::3636:3bff:fecc:8778/128 --action allow gcloud app firewall-rules test-ip fe80::3636:3bff:fecc:8778 Add a rule to deny an IPv4 address and subnet mask, and then test that rule to ensure that it gets appropriately evaluated: gcloud app firewall-rules create 123456 --source-range "74.125.0.0/16" --action deny gcloud app firewall-rules test-ip 74 .125.0.8 Update and then test the default rule to ensure that it restricts all IP addresses that don't match any other rules: gcloud app firewall-rules update default --action deny gcloud app firewall-rules test-ip 123 .456.7.89 API To programmatically create firewall rules for your App Engine app, you can use the apps.firewall.ingressRules methods in the Admin API.

