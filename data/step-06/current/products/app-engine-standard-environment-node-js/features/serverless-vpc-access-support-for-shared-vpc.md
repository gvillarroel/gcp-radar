---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:34:18.674Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Serverless VPC Access support for Shared VPC"
feature_slug: "serverless-vpc-access-support-for-shared-vpc"
latest_feature_date: "2021-04-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/ingress-settings"
keywords:
  - "serverless"
  - "vpc"
  - "access"
  - "shared"
  - "lets"
  - "app"
  - "engine"
  - "connect"
---

# Serverless VPC Access support for Shared VPC

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

Serverless VPC Access support for Shared VPC lets App Engine connect through connectors in Shared VPC networks; Serverless VPC Access support for Shared VPC lets App Engine connect through connectors in Shared VPC networks.

## Extended Definition

Serverless VPC Access support for Shared VPC lets App Engine connect through connectors in Shared VPC networks; Serverless VPC Access support for Shared VPC lets App Engine connect through connectors in Shared VPC networks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)

## Supporting Pages

### "Connecting to a Shared VPC network \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc)
- Source ID: `site-docs-reference`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your organization uses Shared VPC , you can connect App Engine standard environment services directly to your Shared VPC network by using Serverless VPC Access .
- Comparison of configuration methods For Shared VPC, Serverless VPC Access connectors can be configured in two different ways.
- A user with the Compute Engine Security Admin role or a custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled for the host project must still manage firewall rules for the connector.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Connecting to a Shared VPC network Stay organized with collections Save and categorize content based on your preferences.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Configure your service to use a connector After you have created a Serverless VPC Access connector, you must configure each service in your App Engine app that you want to connect to your VPC network.
- However, if you create a connector in a service project and the connector targets a Shared VPC network in the host project, you must add firewall rules to allow necessary traffic for the connector's operation from the following ranges: Serverless infrastructure IP range : 35.199.224.0/19 Health check probe IP ranges : 35.191.0.0/16 , 35.191.192.0/18 , and 130.211.0.0/22 These ranges are used by the Google infrastructure underlying Cloud Run, Cloud Run functions, and App Engine standard environment.
- To perform these steps, you must have one of the following roles on the host project: Owner role ( roles/owner ) Compute Security Admin role ( roles/compute.securityAdmin ) Custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled For a basic configuration, apply the rules to allow serverless resources in any service project connected to the Shared VPC network to send requests to any resource in the network.
- This page shows how to use Serverless VPC Access to connect your App Engine services in the standard environment directly to your VPC network, allowing access to Compute Engine VM instances, Memorystore instances, and any other resources with an internal IP address.

### "Ingress settings \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To configure the egress behavior of your App Engine service: Add the egress setting attribute to the vpc access connector field of your service's app.yaml file: vpc access connector : name : projects/ PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME egress setting : EGRESS SETTING Replace: PROJECT ID with your Google Cloud project ID REGION with the region your connector is in CONNECTOR NAME with the name of your connector EGRESS SETTING with one of the following: private-ranges-only Default.
- For requests from other App Engine services or from Cloud Run or Cloud Run functions in the same project, connect the service or function to a VPC network and route all egress through the connector, as described in Connecting to a Shared VPC network .
- Accessing internal services The following considerations apply: For requests from a Shared VPC, traffic is only considered internal if the App Engine app is deployed in the Shared VPC host project.
- Note that routing all outbound requests to your VPC network increases the amount of egress handled by the Serverless VPC Access connector and can incur charges .

