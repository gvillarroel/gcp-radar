---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:34:18.663Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Custom organization policies for Serverless VPC Access connectors"
feature_slug: "custom-organization-policies-for-serverless-vpc-access-connectors"
latest_feature_date: "2024-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/ingress-settings"
keywords:
  - "custom"
  - "organization"
  - "policies"
  - "serverless"
  - "vpc"
  - "access"
  - "connectors"
  - "let"
---

# Custom organization policies for Serverless VPC Access connectors

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

Custom organization policies for Serverless VPC Access connectors let administrators apply policy controls at the project, folder, or organization level.

## Extended Definition

Custom organization policies for Serverless VPC Access connectors let administrators apply policy controls at the project, folder, or organization level.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Test the custom constraint To test the example that restricts ingress settings, deploy a connector in the project with network set to default : gcloud compute networks vpc-access connectors create org-policy-test \ --project = PROJECT ID \ --region = REGION ID \ --network = default The output is the following: Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."] Example custom organization policies for common use cases The following table provides examples of custom constraints that you might find useful with Serverless VPC Access connectors: Description Constraint syntax Require that Serverless VPC Access connectors can only use a specific network. name : organizations/ ORGANIZATION ID /customConstraints/custom.allowlistNetworks resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.network == 'allowlisted-network'" actionType : ALLOW displayName : allowlistNetworks description : Require connectors to use a specific network.
- Description Constraint syntax Require that Serverless VPC Access connectors have access to only a specific subnet. name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictSubnetForProject resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.subnet.name == 'allocated-subnet'" actionType : ALLOW displayName : restrictSubnetForProject description : This project is only allowed to use the subnet "allocated-subnet".
- Use the following gcloud command to delete a connector: gcloud compute networks vpc-access connectors delete CONNECTOR NAME --region= REGION Replace the following: CONNECTOR NAME with the name of the connector you want to delete REGION with the region where the connector is located Manage custom constraints for projects This section describes how to create custom constraints for Serverless VPC Access connectors and enforce them at the project level.
- To create a YAML file for a Serverless VPC Access custom constraint, refer to the following example: name : organizations/ ORGANIZATION ID /customConstraints/ CONSTRAINT NAME resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : " CONDITION " actionType : ACTION displayName : DISPLAY NAME description : DESCRIPTION Replace the following: ORGANIZATION ID : your organization ID, such as 123456789 .

### "Connecting to a Shared VPC network \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your organization uses Shared VPC , you can connect App Engine standard environment services directly to your Shared VPC network by using Serverless VPC Access .
- Comparison of configuration methods For Shared VPC, Serverless VPC Access connectors can be configured in two different ways.
- Serverless VPC Access connectors incur a monthly charge.
- A user with the Compute Engine Security Admin role or a custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled for the host project must still manage firewall rules for the connector.

### "Ingress settings \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Serverless VPC access connectors .
- To configure the egress behavior of your App Engine service: Add the egress setting attribute to the vpc access connector field of your service's app.yaml file: vpc access connector : name : projects/ PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME egress setting : EGRESS SETTING Replace: PROJECT ID with your Google Cloud project ID REGION with the region your connector is in CONNECTOR NAME with the name of your connector EGRESS SETTING with one of the following: private-ranges-only Default.
- When accessing internal services, call them as you would normally do by using their public URLs, either the default appspot.com URL or a custom domain set up in App Engine.
- Note that routing all outbound requests to your VPC network increases the amount of egress handled by the Serverless VPC Access connector and can incur charges .

