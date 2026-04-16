---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.780Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "BSD network sockets"
feature_slug: "bsd-network-sockets"
latest_feature_date: "2018-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/connecting-vpc"
keywords:
  - "implementation"
  - "sockets"
  - "socket"
  - "network"
  - "provide"
  - "default"
---

# BSD network sockets

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

BSD network sockets provide the default socket implementation for App Engine applications.

## Extended Definition

BSD network sockets provide the default socket implementation for App Engine applications.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/standard/connecting-vpc](https://cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/python3/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/python3/connecting-vpc)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Test the custom constraint To test the example that restricts ingress settings, deploy a connector in the project with network set to default : gcloud compute networks vpc-access connectors create org-policy-test \ --project = PROJECT ID \ --region = REGION ID \ --network = default The output is the following: Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."] Example custom organization policies for common use cases The following table provides examples of custom constraints that you might find useful with Serverless VPC Access connectors: Description Constraint syntax Require that Serverless VPC Access connectors can only use a specific network. name : organizations/ ORGANIZATION ID /customConstraints/custom.allowlistNetworks resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.network == 'allowlisted-network'" actionType : ALLOW displayName : allowlistNetworks description : Require connectors to use a specific network.
- This overrides the implicit firewall rule that Serverless VPC Access creates on your VPC network by default. gcloud compute firewall-rules create RULE NAME \ --action = DENY \ --rules = PROTOCOL \ --source-ranges = VPC CONNECTOR CIDR RANGE \ --direction = INGRESS \ --network = VPC NETWORK \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.
- This overrides the implicit firewall rule that Serverless VPC Access creates on your VPC network by default. gcloud compute firewall-rules create RULE NAME \ --action = DENY \ --rules = PROTOCOL \ --source-tags = VPC CONNECTOR NETWORK TAG \ --direction = INGRESS \ --network = VPC NETWORK \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.
- DESCRIPTION : a human-friendly description of the constraint to display as an error message when the policy is violated, for example, "Require network to not be set to default." This field has a maximum length of 2000 characters.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://cloud.google.com/appengine/docs/standard/connecting-vpc](https://cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference-3`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Test the custom constraint To test the example that restricts ingress settings, deploy a connector in the project with network set to default : gcloud compute networks vpc-access connectors create org-policy-test \ --project = PROJECT ID \ --region = REGION ID \ --network = default The output is the following: Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."] Example custom organization policies for common use cases The following table provides examples of custom constraints that you might find useful with Serverless VPC Access connectors: Description Constraint syntax Require that Serverless VPC Access connectors can only use a specific network. name : organizations/ ORGANIZATION ID /customConstraints/custom.allowlistNetworks resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.network == 'allowlisted-network'" actionType : ALLOW displayName : allowlistNetworks description : Require connectors to use a specific network.
- This overrides the implicit firewall rule that Serverless VPC Access creates on your VPC network by default. gcloud compute firewall-rules create RULE NAME \ --action = DENY \ --rules = PROTOCOL \ --source-ranges = VPC CONNECTOR CIDR RANGE \ --direction = INGRESS \ --network = VPC NETWORK \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.
- This overrides the implicit firewall rule that Serverless VPC Access creates on your VPC network by default. gcloud compute firewall-rules create RULE NAME \ --action = DENY \ --rules = PROTOCOL \ --source-tags = VPC CONNECTOR NETWORK TAG \ --direction = INGRESS \ --network = VPC NETWORK \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.
- DESCRIPTION : a human-friendly description of the constraint to display as an error message when the policy is violated, for example, "Require network to not be set to default." This field has a maximum length of 2000 characters.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/python3/connecting-vpc)
- Source ID: `site-docs-reference-4`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Test the custom constraint To test the example that restricts ingress settings, deploy a connector in the project with network set to default : gcloud compute networks vpc-access connectors create org-policy-test \ --project = PROJECT ID \ --region = REGION ID \ --network = default The output is the following: Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."] Example custom organization policies for common use cases The following table provides examples of custom constraints that you might find useful with Serverless VPC Access connectors: Description Constraint syntax Require that Serverless VPC Access connectors can only use a specific network. name : organizations/ ORGANIZATION ID /customConstraints/custom.allowlistNetworks resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.network == 'allowlisted-network'" actionType : ALLOW displayName : allowlistNetworks description : Require connectors to use a specific network.
- This overrides the implicit firewall rule that Serverless VPC Access creates on your VPC network by default. gcloud compute firewall-rules create RULE NAME \ --action = DENY \ --rules = PROTOCOL \ --source-ranges = VPC CONNECTOR CIDR RANGE \ --direction = INGRESS \ --network = VPC NETWORK \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.
- This overrides the implicit firewall rule that Serverless VPC Access creates on your VPC network by default. gcloud compute firewall-rules create RULE NAME \ --action = DENY \ --rules = PROTOCOL \ --source-tags = VPC CONNECTOR NETWORK TAG \ --direction = INGRESS \ --network = VPC NETWORK \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.
- DESCRIPTION : a human-friendly description of the constraint to display as an error message when the policy is violated, for example, "Require network to not be set to default." This field has a maximum length of 2000 characters.

