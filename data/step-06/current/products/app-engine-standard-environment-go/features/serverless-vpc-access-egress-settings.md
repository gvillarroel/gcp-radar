---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.291Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Serverless VPC Access egress settings"
feature_slug: "serverless-vpc-access-egress-settings"
latest_feature_date: "2021-11-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/ingress-settings"
keywords:
  - "settings"
  - "whether"
  - "egress"
  - "control"
  - "traffic"
  - "serverless"
  - "access"
---

# Serverless VPC Access egress settings

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

Serverless VPC Access egress settings control whether traffic to external destinations is routed through the connector; Serverless VPC Access egress settings control whether traffic to external destinations is routed through the connector.

## Extended Definition

Serverless VPC Access egress settings control whether traffic to external destinations is routed through the connector; Serverless VPC Access egress settings control whether traffic to external destinations is routed through the connector.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/go/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/go/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 183
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Manage your connector Controlling egress traffic from a service By default, only requests to internal IP addresses and internal DNS names are routed through a Serverless VPC Access connector.
- Create an egress firewall rule on your Serverless VPC Access connector to prevent it from sending outgoing traffic, with the exception of established responses, to any destination. gcloud compute firewall-rules create RULE NAME \ --action = DENY \ --rules = PROTOCOL \ --direction = EGRESS \ --target-tags = VPC CONNECTOR NETWORK TAG \ --network = VPC NETWORK \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.
- Using the urlfetch library ignores egress settings, and requests will not route through a Serverless VPC Access connector.
- Test the custom constraint To test the example that restricts ingress settings, deploy a connector in the project with network set to default : gcloud compute networks vpc-access connectors create org-policy-test \ --project = PROJECT ID \ --region = REGION ID \ --network = default The output is the following: Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."] Example custom organization policies for common use cases The following table provides examples of custom constraints that you might find useful with Serverless VPC Access connectors: Description Constraint syntax Require that Serverless VPC Access connectors can only use a specific network. name : organizations/ ORGANIZATION ID /customConstraints/custom.allowlistNetworks resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.network == 'allowlisted-network'" actionType : ALLOW displayName : allowlistNetworks description : Require connectors to use a specific network.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/go/connecting-vpc)
- Source ID: `site-docs-reference-4`
- Final score: 183
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Manage your connector Controlling egress traffic from a service By default, only requests to internal IP addresses and internal DNS names are routed through a Serverless VPC Access connector.
- Create an egress firewall rule on your Serverless VPC Access connector to prevent it from sending outgoing traffic, with the exception of established responses, to any destination. gcloud compute firewall-rules create RULE NAME \ --action = DENY \ --rules = PROTOCOL \ --direction = EGRESS \ --target-tags = VPC CONNECTOR NETWORK TAG \ --network = VPC NETWORK \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.
- Using the urlfetch library ignores egress settings, and requests will not route through a Serverless VPC Access connector.
- Test the custom constraint To test the example that restricts ingress settings, deploy a connector in the project with network set to default : gcloud compute networks vpc-access connectors create org-policy-test \ --project = PROJECT ID \ --region = REGION ID \ --network = default The output is the following: Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."] Example custom organization policies for common use cases The following table provides examples of custom constraints that you might find useful with Serverless VPC Access connectors: Description Constraint syntax Require that Serverless VPC Access connectors can only use a specific network. name : organizations/ ORGANIZATION ID /customConstraints/custom.allowlistNetworks resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.network == 'allowlisted-network'" actionType : ALLOW displayName : allowlistNetworks description : Require connectors to use a specific network.

### "Ingress settings \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Using the urlfetch library ignores egress settings, and requests will not route through a Serverless VPC Access connector.
- For example: To update the default service of an App Engine app to accept traffic only from Cloud Load Balancing and VPC networks that are in the same project: gcloud app services update default --ingress = internal-and-cloud-load-balancing To update a service named "internal-requests" to accept traffic only from VPC networks that are in the same project: gcloud app services update internal-requests --ingress = internal-only Egress settings Note: Egress settings are not available for the PHP runtimes.
- Note that routing all outbound requests to your VPC network increases the amount of egress handled by the Serverless VPC Access connector and can incur charges .
- If you use Serverless VPC Access , you can specify the egress setting for your App Engine service.

