---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:36:38.551Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "App Engine Firewall"
feature_slug: "app-engine-firewall"
latest_feature_date: "2017-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/creating-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/standard/application-security"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "app"
  - "engine"
  - "firewall"
  - "was"
  - "made"
  - "generally"
  - "available"
---

# App Engine Firewall

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

App Engine Firewall was made generally available.

## Extended Definition

App Engine Firewall was made generally available.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/creating-firewalls](https://docs.cloud.google.com/appengine/docs/standard/creating-firewalls)
- [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "Creating App Engine firewall rules \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/creating-firewalls](https://docs.cloud.google.com/appengine/docs/standard/creating-firewalls)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Examples: Use the following examples to help you create your firewall: Add a rule that allows an IPv6 address and subnet mask, and then test that rule to ensure it gets evaluated prior to your other rules: gcloud app firewall-rules create 123 --source-range fe80::3636:3bff:fecc:8778/128 --action allow gcloud app firewall-rules test-ip fe80::3636:3bff:fecc:8778 Add a rule to deny an IPv4 address and subnet mask, and then test that rule to ensure that it gets appropriately evaluated: gcloud app firewall-rules create 123456 --source-range "74.125.0.0/16" --action deny gcloud app firewall-rules test-ip 74 .125.0.8 Update and then test the default rule to ensure that it restricts all IP addresses that don't match any other rules: gcloud app firewall-rules update default --action deny gcloud app firewall-rules test-ip 123 .456.7.89 API To programmatically create firewall rules for your App Engine app, you can use the apps.firewall.ingressRules methods in the Admin API.
- Before you begin Before you can create App Engine firewall rules for your app, you must have one of the following App Engine IAM roles , which include the necessary privileges for creating or modifying firewall rules: App Engine Admin Editor Owner Creating firewall rules Use one of the following methods to create a firewall rule.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Creating App Engine firewall rules Stay organized with collections Save and categorize content based on your preferences.
- Understanding App Engine firewall rules An App Engine firewall consists of an ordered list of rules that can allow or deny access from the specified IP address or range to your app.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- However, if you create a connector in a service project and the connector targets a Shared VPC network in the host project, you must add firewall rules to allow necessary traffic for the connector's operation from the following ranges: Serverless infrastructure IP range : 35.199.224.0/19 Health check probe IP ranges : 35.191.0.0/16 , 35.191.192.0/18 , and 130.211.0.0/22 These ranges are used by the Google infrastructure underlying Cloud Run, Cloud Run functions, and App Engine standard environment.
- Set the priority for this rule to be a lower value than the priority of the rule you made in the previous step. gcloud compute firewall-rules create RULE NAME \ --allow = PROTOCOL \ --destination-ranges = RESOURCE CIDR RANGE \ --direction = EGRESS \ --network = VPC NETWORK \ --target-tags = VPC CONNECTOR NETWORK TAG \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.
- Set the priority for this rule to be a lower value than the priority of the rule you made in the previous step. gcloud compute firewall-rules create RULE NAME \ --allow = PROTOCOL \ --source-ranges = VPC CONNECTOR CIDR RANGE \ --direction = INGRESS \ --network = VPC NETWORK \ --target-tags = RESOURCE TAG \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.
- Set the priority for this rule to be a lower value than the priority of the rule you made in the previous step. gcloud compute firewall-rules create RULE NAME \ --allow = PROTOCOL \ --source-tags = VPC CONNECTOR NETWORK TAG \ --direction = INGRESS \ --network = VPC NETWORK \ --target-tags = RESOURCE TAG \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Block abusive IP addresses While Google Cloud has many mechanisms in place to prevent attacks, you can use the App Engine firewall to block traffic to your app from IP addresses that present malicious intent or shield your app from denial of service attacks and similar forms of abuse.
- App Engine firewall The App Engine firewall enables you to control access to your App Engine app through a set of rules that can either allow or deny requests from the specified ranges of IP addresses.
- Security scanner The Google Cloud Web Security Scanner discovers vulnerabilities by crawling your App Engine app, following all that links within the scope of your starting URLs, and attempting to exercise as many user inputs and event handlers as possible.
- You can then create and modify your firewall rules to control the scope of access throughout your release process, allowing only certain organizations, either within your company or externally, to access your app as it makes its way to public availability.

