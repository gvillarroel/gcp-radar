---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:18:25.394Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Serverless VPC Access connector custom organization policies"
feature_slug: "serverless-vpc-access-connector-custom-organization-policies"
latest_feature_date: "2024-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc"
keywords:
  - "organization"
  - "policies"
  - "connectors"
  - "connector"
  - "custom"
  - "serverless"
  - "access"
---

# Serverless VPC Access connector custom organization policies

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Custom organization policies for Serverless VPC Access connectors let administrators enforce connector policy settings at project, folder, or organization scope.

## Extended Definition

Custom organization policies for Serverless VPC Access connectors let administrators enforce connector policy settings at project, folder, or organization scope.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Test the custom constraint To test the example that restricts ingress settings, deploy a connector in the project with network set to default : gcloud compute networks vpc-access connectors create org-policy-test \ --project = PROJECT ID \ --region = REGION ID \ --network = default The output is the following: Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."] Example custom organization policies for common use cases The following table provides examples of custom constraints that you might find useful with Serverless VPC Access connectors: Description Constraint syntax Require that Serverless VPC Access connectors can only use a specific network. name : organizations/ ORGANIZATION ID /customConstraints/custom.allowlistNetworks resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.network == 'allowlisted-network'" actionType : ALLOW displayName : allowlistNetworks description : Require connectors to use a specific network.
- Description Constraint syntax Require that Serverless VPC Access connectors have access to only a specific subnet. name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictSubnetForProject resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.subnet.name == 'allocated-subnet'" actionType : ALLOW displayName : restrictSubnetForProject description : This project is only allowed to use the subnet "allocated-subnet".
- Use the following gcloud command to delete a connector: gcloud compute networks vpc-access connectors delete CONNECTOR NAME --region= REGION Replace the following: CONNECTOR NAME with the name of the connector you want to delete REGION with the region where the connector is located Manage custom constraints for projects This section describes how to create custom constraints for Serverless VPC Access connectors and enforce them at the project level.
- To create a YAML file for a Serverless VPC Access custom constraint, refer to the following example: name : organizations/ ORGANIZATION ID /customConstraints/ CONSTRAINT NAME resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : " CONDITION " actionType : ACTION displayName : DISPLAY NAME description : DESCRIPTION Replace the following: ORGANIZATION ID : your organization ID, such as 123456789 .

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc)
- Source ID: `site-docs-reference-4`
- Final score: 191
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Test the custom constraint To test the example that restricts ingress settings, deploy a connector in the project with network set to default : gcloud compute networks vpc-access connectors create org-policy-test \ --project = PROJECT ID \ --region = REGION ID \ --network = default The output is the following: Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."] Example custom organization policies for common use cases The following table provides examples of custom constraints that you might find useful with Serverless VPC Access connectors: Description Constraint syntax Require that Serverless VPC Access connectors can only use a specific network. name : organizations/ ORGANIZATION ID /customConstraints/custom.allowlistNetworks resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.network == 'allowlisted-network'" actionType : ALLOW displayName : allowlistNetworks description : Require connectors to use a specific network.
- Description Constraint syntax Require that Serverless VPC Access connectors have access to only a specific subnet. name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictSubnetForProject resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.subnet.name == 'allocated-subnet'" actionType : ALLOW displayName : restrictSubnetForProject description : This project is only allowed to use the subnet "allocated-subnet".
- Use the following gcloud command to delete a connector: gcloud compute networks vpc-access connectors delete CONNECTOR NAME --region= REGION Replace the following: CONNECTOR NAME with the name of the connector you want to delete REGION with the region where the connector is located Manage custom constraints for projects This section describes how to create custom constraints for Serverless VPC Access connectors and enforce them at the project level.
- To create a YAML file for a Serverless VPC Access custom constraint, refer to the following example: name : organizations/ ORGANIZATION ID /customConstraints/ CONSTRAINT NAME resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : " CONDITION " actionType : ACTION displayName : DISPLAY NAME description : DESCRIPTION Replace the following: ORGANIZATION ID : your organization ID, such as 123456789 .

### "Connecting to a Shared VPC network \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Comparison of configuration methods For Shared VPC, Serverless VPC Access connectors can be configured in two different ways.
- Serverless VPC Access connectors incur a monthly charge.
- A user with the Compute Engine Security Admin role or a custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled for the host project must still manage firewall rules for the connector.
- You can either set up connectors in each service project that has standard environment resources that need access to your network, or you can set up shared connectors in the host project.

