---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:34:18.674Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Serverless VPC Access egress settings"
feature_slug: "serverless-vpc-access-egress-settings"
latest_feature_date: "2021-11-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/ingress-settings"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/application-security"
keywords:
  - "serverless"
  - "vpc"
  - "access"
  - "egress"
  - "settings"
  - "let"
  - "you"
  - "control"
---

# Serverless VPC Access egress settings

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

Serverless VPC Access egress settings let you control whether traffic to external destinations goes through the connector; Serverless VPC Access egress settings let you control whether traffic to external destinations goes through the connector.

## Extended Definition

Serverless VPC Access egress settings let you control whether traffic to external destinations goes through the connector; Serverless VPC Access egress settings let you control whether traffic to external destinations goes through the connector.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)

## Supporting Pages

### "Ingress settings \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using the urlfetch library ignores egress settings, and requests will not route through a Serverless VPC Access connector.
- Note that routing all outbound requests to your VPC network increases the amount of egress handled by the Serverless VPC Access connector and can incur charges .
- If you use Serverless VPC Access , you can specify the egress setting for your App Engine service.
- For example: To update the default service of an App Engine app to accept traffic only from Cloud Load Balancing and VPC networks that are in the same project: gcloud app services update default --ingress = internal-and-cloud-load-balancing To update a service named "internal-requests" to accept traffic only from VPC networks that are in the same project: gcloud app services update internal-requests --ingress = internal-only Egress settings Note: Egress settings are not available for the PHP runtimes.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Manage your connector Controlling egress traffic from a service By default, only requests to internal IP addresses and internal DNS names are routed through a Serverless VPC Access connector.
- Using the urlfetch library ignores egress settings, and requests will not route through a Serverless VPC Access connector.
- Test the custom constraint To test the example that restricts ingress settings, deploy a connector in the project with network set to default : gcloud compute networks vpc-access connectors create org-policy-test \ --project = PROJECT ID \ --region = REGION ID \ --network = default The output is the following: Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."] Example custom organization policies for common use cases The following table provides examples of custom constraints that you might find useful with Serverless VPC Access connectors: Description Constraint syntax Require that Serverless VPC Access connectors can only use a specific network. name : organizations/ ORGANIZATION ID /customConstraints/custom.allowlistNetworks resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.network == 'allowlisted-network'" actionType : ALLOW displayName : allowlistNetworks description : Require connectors to use a specific network.
- Create an egress firewall rule on your Serverless VPC Access connector to prevent it from sending outgoing traffic, with the exception of established responses, to any destination. gcloud compute firewall-rules create RULE NAME \ --action = DENY \ --rules = PROTOCOL \ --direction = EGRESS \ --target-tags = VPC CONNECTOR NETWORK TAG \ --network = VPC NETWORK \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With Egress control settings, you can require all traffic from your App Engine services to be routed through the attached VPC Connector.
- Egress controls Egress controls determine what traffic is sent over Serverless VPC connectors .
- You can then create and modify your firewall rules to control the scope of access throughout your release process, allowing only certain organizations, either within your company or externally, to access your app as it makes its way to public availability.
- App Engine firewall The App Engine firewall enables you to control access to your App Engine app through a set of rules that can either allow or deny requests from the specified ranges of IP addresses.

