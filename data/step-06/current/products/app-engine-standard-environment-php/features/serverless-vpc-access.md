---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.307Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "Serverless VPC Access"
feature_slug: "serverless-vpc-access"
latest_feature_date: "2019-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "serverless"
  - "vpc"
  - "access"
  - "has"
  - "reached"
  - "availability"
---

# Serverless VPC Access

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

Serverless VPC Access has reached general availability.

## Extended Definition

Serverless VPC Access has reached general availability.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref](https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services](https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref](https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Specify the fully-qualified name of your Serverless VPC Access connector in quotes: "projects/ PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME " egress setting Optional.
- Requests to external IP addresses are sent to the public internet. all-traffic All requests are sent through the Serverless VPC Access connector into the connected VPC network.
- Configures your application to use a Serverless VPC Access connector, enabling the application to send requests to internal resources in your VPC network.
- Requests to internal IP addresses are sent through the Serverless VPC Access connector into the connected VPC network.

### "Communicating between your services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services](https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Route the traffic over a Serverless VPC Access connector : For each App Engine version sending private traffic to other app endpoints, attach the version to a Serverless VPC Access connector belonging to one of the Google Cloud project's own networks, not a Shared VPC network.
- Configure the client app to send all-traffic through the Serverless VPC Access connector, instead of configuring requests to use the private.googleapis.com IP range.
- In the standard environment, attach each client version to a Serverless VPC Access connector on the Shared VPC network.
- Ensure Private Google Access is enabled for the subnet used by the Serverless VPC Access connector.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Configure your service to use a connector After you have created a Serverless VPC Access connector, you must configure each service in your App Engine app that you want to connect to your VPC network.
- Test the custom constraint To test the example that restricts ingress settings, deploy a connector in the project with network set to default : gcloud compute networks vpc-access connectors create org-policy-test \ --project = PROJECT ID \ --region = REGION ID \ --network = default The output is the following: Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."] Example custom organization policies for common use cases The following table provides examples of custom constraints that you might find useful with Serverless VPC Access connectors: Description Constraint syntax Require that Serverless VPC Access connectors can only use a specific network. name : organizations/ ORGANIZATION ID /customConstraints/custom.allowlistNetworks resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.network == 'allowlisted-network'" actionType : ALLOW displayName : allowlistNetworks description : Require connectors to use a specific network.
- Description Constraint syntax Require that Serverless VPC Access connectors have access to only a specific subnet. name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictSubnetForProject resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.subnet.name == 'allocated-subnet'" actionType : ALLOW displayName : restrictSubnetForProject description : This project is only allowed to use the subnet "allocated-subnet".
- To perform these steps, you must have one of the following roles on the host project: Owner role ( roles/owner ) Compute Security Admin role ( roles/compute.securityAdmin ) Custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled For a basic configuration, apply the rules to allow serverless resources in any service project connected to the Shared VPC network to send requests to any resource in the network.

