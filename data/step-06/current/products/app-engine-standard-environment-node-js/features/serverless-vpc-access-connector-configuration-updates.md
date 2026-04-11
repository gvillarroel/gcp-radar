---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T22:04:50.064Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Serverless VPC Access connector configuration updates"
feature_slug: "serverless-vpc-access-connector-configuration-updates"
latest_feature_date: "2022-12-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/config/appref"
keywords:
  - "min instance count"
  - "max instance count"
  - "connector configuration updates"
  - "App Engine standard connector settings"
  - "machine type update"
  - "SVPC connector"
  - "Serverless VPC Access connector"
  - "Serverless VPC connector"
---

# Serverless VPC Access connector configuration updates

Product: App Engine standard environment Node.js
Coverage: LOW

## Step 02 Summary

App Engine standard now allows preview updates to Serverless VPC Access connectors, including changing machine type and min/max instance counts.

## Extended Definition

App Engine standard now allows preview updates to Serverless VPC Access connectors, including changing machine type and min/max instance counts.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes](https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/nodejs/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/config/appref](https://docs.cloud.google.com/appengine/docs/standard/nodejs/config/appref)

## Supporting Pages

### "App Engine standard environment for Node.js release notes \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes](https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Egress settings allow you to specify whether or not to send traffic with external destinations through your Serverless VPC Access connector, which is necessary if you want to set up a static outbound IP address for your App Engine service.
- Egress settings allow you to specify whether or not to send traffic with external destinations through your Serverless VPC Access connector, which is necessary if you want to set up a static outbound IP address for your App Engine service.
- December 09, 2024 Feature Custom organization policies for Serverless VPC Access connectors are now generally available , and can be applied to projects, folders, or organizations.
- March 24, 2022 Feature Support for Serverless VPC Access connectors in Shared VPC host projects is now at general availability (GA).

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Configure your service to use a connector After you have created a Serverless VPC Access connector, you must configure each service in your App Engine app that you want to connect to your VPC network.
- Test the custom constraint To test the example that restricts ingress settings, deploy a connector in the project with network set to default : gcloud compute networks vpc-access connectors create org-policy-test \ --project = PROJECT ID \ --region = REGION ID \ --network = default The output is the following: Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."] Example custom organization policies for common use cases The following table provides examples of custom constraints that you might find useful with Serverless VPC Access connectors: Description Constraint syntax Require that Serverless VPC Access connectors can only use a specific network. name : organizations/ ORGANIZATION ID /customConstraints/custom.allowlistNetworks resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.network == 'allowlisted-network'" actionType : ALLOW displayName : allowlistNetworks description : Require connectors to use a specific network.
- Description Constraint syntax Require that Serverless VPC Access connectors have access to only a specific subnet. name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictSubnetForProject resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.subnet.name == 'allocated-subnet'" actionType : ALLOW displayName : restrictSubnetForProject description : This project is only allowed to use the subnet "allocated-subnet".
- Create an egress firewall rule on your Serverless VPC Access connector to prevent it from sending outgoing traffic, with the exception of established responses, to any destination. gcloud compute firewall-rules create RULE NAME \ --action = DENY \ --rules = PROTOCOL \ --direction = EGRESS \ --target-tags = VPC CONNECTOR NETWORK TAG \ --network = VPC NETWORK \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/nodejs/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Configure your service to use a connector After you have created a Serverless VPC Access connector, you must configure each service in your App Engine app that you want to connect to your VPC network.
- Test the custom constraint To test the example that restricts ingress settings, deploy a connector in the project with network set to default : gcloud compute networks vpc-access connectors create org-policy-test \ --project = PROJECT ID \ --region = REGION ID \ --network = default The output is the following: Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."] Example custom organization policies for common use cases The following table provides examples of custom constraints that you might find useful with Serverless VPC Access connectors: Description Constraint syntax Require that Serverless VPC Access connectors can only use a specific network. name : organizations/ ORGANIZATION ID /customConstraints/custom.allowlistNetworks resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.network == 'allowlisted-network'" actionType : ALLOW displayName : allowlistNetworks description : Require connectors to use a specific network.
- Description Constraint syntax Require that Serverless VPC Access connectors have access to only a specific subnet. name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictSubnetForProject resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.subnet.name == 'allocated-subnet'" actionType : ALLOW displayName : restrictSubnetForProject description : This project is only allowed to use the subnet "allocated-subnet".
- Create an egress firewall rule on your Serverless VPC Access connector to prevent it from sending outgoing traffic, with the exception of established responses, to any destination. gcloud compute firewall-rules create RULE NAME \ --action = DENY \ --rules = PROTOCOL \ --direction = EGRESS \ --target-tags = VPC CONNECTOR NETWORK TAG \ --network = VPC NETWORK \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/config/appref](https://docs.cloud.google.com/appengine/docs/standard/nodejs/config/appref)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Specify the fully-qualified name of your Serverless VPC Access connector in quotes: "projects/ PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME " egress setting Optional.
- Requests to external IP addresses are sent to the public internet. all-traffic All requests are sent through the Serverless VPC Access connector into the connected VPC network.
- Configures your application to use a Serverless VPC Access connector, enabling the application to send requests to internal resources in your VPC network.
- Requests to internal IP addresses are sent through the Serverless VPC Access connector into the connected VPC network.

