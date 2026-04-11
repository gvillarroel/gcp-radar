---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:27.528Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "Default auto scaling max instances for new App Engine standard projects"
feature_slug: "default-auto-scaling-max-instances-for-new-app-engine-standard-projects"
latest_feature_date: "2025-03-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "default max_instances 20"
  - "auto-scaling default max"
  - "override max_instances"
  - "automatic scaling max instances"
  - "default automatic-scaling instances"
  - "max_instances setting"
  - "new App Engine standard projects"
  - "max_instances"
---

# Default auto scaling max instances for new App Engine standard projects

Product: App Engine standard environment PHP
Coverage: LOW

## Step 02 Summary

New App Engine standard projects now default to a maximum of 20 automatic-scaling instances unless max_instances is overridden.

## Extended Definition

New App Engine standard projects now default to a maximum of 20 automatic-scaling instances unless max_instances is overridden.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Configure your service to use a connector After you have created a Serverless VPC Access connector, you must configure each service in your App Engine app that you want to connect to your VPC network.
- To increase the minimum or maximum number of instances for the connector, run the following command in your terminal: gcloud beta compute networks vpc-access connectors update CONNECTOR NAME --region = REGION --min-instances = MIN INSTANCES --max-instances = MAX INSTANCES Replace the following: CONNECTOR NAME : the name of your connector REGION : the name of your connector's region MIN INSTANCES : your preferred minimum number of instances.
- Largest possible value for this field is the current max instances value minus 1, because min instances must be less than max instances .
- MAX INSTANCES : Smallest possible value for this field is the current value of max instances .

