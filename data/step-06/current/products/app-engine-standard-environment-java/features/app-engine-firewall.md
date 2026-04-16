---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.242Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "App Engine firewall"
feature_slug: "app-engine-firewall"
latest_feature_date: "2017-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/application-security"
  - "https://docs.cloud.google.com/appengine/docs/standard/java11/application-security"
  - "https://docs.cloud.google.com/appengine/docs/standard/creating-firewalls"
keywords:
  - "firewall"
  - "inbound"
  - "control"
  - "traffic"
  - "lets"
---

# App Engine firewall

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine firewall lets you control inbound traffic to applications with network-level access rules.

## Extended Definition

App Engine firewall lets you control inbound traffic to applications with network-level access rules.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- [https://docs.cloud.google.com/appengine/docs/standard/java11/application-security](https://docs.cloud.google.com/appengine/docs/standard/java11/application-security)
- [https://docs.cloud.google.com/appengine/docs/standard/creating-firewalls](https://docs.cloud.google.com/appengine/docs/standard/creating-firewalls)

## Supporting Pages

### "Creating App Engine firewall rules \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/creating-firewalls](https://docs.cloud.google.com/appengine/docs/standard/creating-firewalls)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Examples: Use the following examples to help you create your firewall: Add a rule that allows an IPv6 address and subnet mask, and then test that rule to ensure it gets evaluated prior to your other rules: gcloud app firewall-rules create 123 --source-range fe80::3636:3bff:fecc:8778/128 --action allow gcloud app firewall-rules test-ip fe80::3636:3bff:fecc:8778 Add a rule to deny an IPv4 address and subnet mask, and then test that rule to ensure that it gets appropriately evaluated: gcloud app firewall-rules create 123456 --source-range "74.125.0.0/16" --action deny gcloud app firewall-rules test-ip 74 .125.0.8 Update and then test the default rule to ensure that it restricts all IP addresses that don't match any other rules: gcloud app firewall-rules update default --action deny gcloud app firewall-rules test-ip 123 .456.7.89 API To programmatically create firewall rules for your App Engine app, you can use the apps.firewall.ingressRules methods in the Admin API.
- Enter the IP address that you want to validate and then click Test to ensure that the corresponding rule gets correctly evaluated. gcloud Run the following gcloud app firewall-rules commands to create a firewall rule: Run the following command to create a firewall rule: gcloud app firewall-rules create PRIORITY --action ALLOW OR DENY --source-range IP RANGE --description DESCRIPTION where: PRIORITY is an integer between 1 and 2147483646 that defines the rule's importance and order for which the rule is evaluated.
- Repeat these steps for each additional rule: Console Use the Firewall rules page in Google Cloud console to create a firewall rule: Go to the Create a firewall rule page in Google Cloud console: Go to the Create a firewall rule page Specify the details of the firewall rule: In Priority , enter an integer to specify the relative importance of the rule and define the order of when the rule is evaluated.
- Before you begin Before you can create App Engine firewall rules for your app, you must have one of the following App Engine IAM roles , which include the necessary privileges for creating or modifying firewall rules: App Engine Admin Editor Owner Creating firewall rules Use one of the following methods to create a firewall rule.

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Ingress controls You can use Ingress controls to restrict inbound traffic to your App Engine app.
- Block abusive IP addresses While Google Cloud has many mechanisms in place to prevent attacks, you can use the App Engine firewall to block traffic to your app from IP addresses that present malicious intent or shield your app from denial of service attacks and similar forms of abuse.
- You can then create and modify your firewall rules to control the scope of access throughout your release process, allowing only certain organizations, either within your company or externally, to access your app as it makes its way to public availability.
- App Engine firewall The App Engine firewall enables you to control access to your App Engine app through a set of rules that can either allow or deny requests from the specified ranges of IP addresses.

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java11/application-security](https://docs.cloud.google.com/appengine/docs/standard/java11/application-security)
- Source ID: `site-docs-reference-4`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Ingress controls You can use Ingress controls to restrict inbound traffic to your App Engine app.
- Block abusive IP addresses While Google Cloud has many mechanisms in place to prevent attacks, you can use the App Engine firewall to block traffic to your app from IP addresses that present malicious intent or shield your app from denial of service attacks and similar forms of abuse.
- You can then create and modify your firewall rules to control the scope of access throughout your release process, allowing only certain organizations, either within your company or externally, to access your app as it makes its way to public availability.
- App Engine firewall The App Engine firewall enables you to control access to your App Engine app through a set of rules that can either allow or deny requests from the specified ranges of IP addresses.

