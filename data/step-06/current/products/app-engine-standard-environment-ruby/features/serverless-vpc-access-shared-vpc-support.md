---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:18:25.404Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Serverless VPC Access Shared VPC support"
feature_slug: "serverless-vpc-access-shared-vpc-support"
latest_feature_date: "2021-04-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-shared-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "shared"
  - "serverless"
  - "access"
  - "lets"
---

# Serverless VPC Access Shared VPC support

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Serverless VPC Access Shared VPC support lets App Engine services use connectors with Shared VPC networks; Serverless VPC Access Shared VPC support lets App Engine services use connectors with Shared VPC networks.

## Extended Definition

Serverless VPC Access Shared VPC support lets App Engine services use connectors with Shared VPC networks; Serverless VPC Access Shared VPC support lets App Engine services use connectors with Shared VPC networks.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-shared-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "Connecting to a Shared VPC network \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If your organization uses Shared VPC , you can connect App Engine standard environment services directly to your Shared VPC network by using Serverless VPC Access .
- Comparison of configuration methods For Shared VPC, Serverless VPC Access connectors can be configured in two different ways.
- This allows a standard environment service to access resources in your Shared VPC network, such as Compute Engine VM instances, Memorystore instances, and any other resources with an internal IP address.
- You can either set up connectors in each service project that has standard environment resources that need access to your network, or you can set up shared connectors in the host project.

### "Connecting to a Shared VPC network \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-shared-vpc)
- Source ID: `site-docs-reference-4`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If your organization uses Shared VPC , you can connect App Engine standard environment services directly to your Shared VPC network by using Serverless VPC Access .
- Comparison of configuration methods For Shared VPC, Serverless VPC Access connectors can be configured in two different ways.
- This allows a standard environment service to access resources in your Shared VPC network, such as Compute Engine VM instances, Memorystore instances, and any other resources with an internal IP address.
- You can either set up connectors in each service project that has standard environment resources that need access to your network, or you can set up shared connectors in the host project.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Configure your service to use a connector After you have created a Serverless VPC Access connector, you must configure each service in your App Engine app that you want to connect to your VPC network.
- To perform these steps, you must have one of the following roles on the host project: Owner role ( roles/owner ) Compute Security Admin role ( roles/compute.securityAdmin ) Custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled For a basic configuration, apply the rules to allow serverless resources in any service project connected to the Shared VPC network to send requests to any resource in the network.
- For Shared VPC users who set up connectors in the Shared VPC host project, you can use the command gcloud compute networks vpc-access connectors describe to list the projects in which there are serverless resources that use a given connector.
- Benefits Serverless VPC Access lets you write any number of custom constraints using most user-configured fields in the Serverless VPC Access API.

