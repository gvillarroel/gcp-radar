---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:52:30.750Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Custom organization policies for Serverless VPC Access connectors"
feature_slug: "custom-organization-policies-for-serverless-vpc-access-connectors"
latest_feature_date: "2024-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "project folder organization scope"
  - "custom org policies for VPC Access"
  - "Serverless VPC Access org policy"
  - "organization policies for connectors"
  - "custom organization policies"
  - "connector org policy"
  - "Serverless VPC Access connector policies"
  - "Serverless VPC Access connectors"
---

# Custom organization policies for Serverless VPC Access connectors

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

Serverless VPC Access connectors now support custom organization policies that can be applied at project, folder, or organization scope.

## Extended Definition

App Engine standard environment’s Serverless VPC Access connectors can be controlled through custom organization policies via Cloud Organization Policy custom constraints, including constraints that restrict connector configuration such as allowed network or subnet values. The feature is documented as custom constraints for resource type `vpcaccess.googleapis.com/Connector` on connector creation (`CREATE`) with examples of ALLOW-style constraints like `custom.allowlistNetworks` and `custom.restrictSubnetForProject`. The referenced page explicitly covers project-level custom constraints and shows org-style custom constraint identifiers (`organizations/<ID>/customConstraints/...`), so organization-level application is implied but not fully detailed across all scopes in the provided excerpt.

## Evidence Summary

The cited App Engine VPC connectivity docs provide concrete examples of custom constraints and commands showing Serverless VPC Access connectors being constrained at deployment time by org-policy-style custom constraints, including network/subnet rules and project-level management guidance.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Test the custom constraint To test the example that restricts ingress settings, deploy a connector in the project with network set to default : gcloud compute networks vpc-access connectors create org-policy-test \ --project = PROJECT ID \ --region = REGION ID \ --network = default The output is the following: Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."] Example custom organization policies for common use cases The following table provides examples of custom constraints that you might find useful with Serverless VPC Access connectors: Description Constraint syntax Require that Serverless VPC Access connectors can only use a specific network. name : organizations/ ORGANIZATION ID /customConstraints/custom.allowlistNetworks resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.network == 'allowlisted-network'" actionType : ALLOW displayName : allowlistNetworks description : Require connectors to use a specific network.
- Description Constraint syntax Require that Serverless VPC Access connectors have access to only a specific subnet. name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictSubnetForProject resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.subnet.name == 'allocated-subnet'" actionType : ALLOW displayName : restrictSubnetForProject description : This project is only allowed to use the subnet "allocated-subnet".
- Use the following gcloud command to delete a connector: gcloud compute networks vpc-access connectors delete CONNECTOR NAME --region= REGION Replace the following: CONNECTOR NAME with the name of the connector you want to delete REGION with the region where the connector is located Manage custom constraints for projects This section describes how to create custom constraints for Serverless VPC Access connectors and enforce them at the project level.
- However, if you want more granular, customizable control over the specific fields that are restricted in your organization policies, you can also create custom organization policies.

