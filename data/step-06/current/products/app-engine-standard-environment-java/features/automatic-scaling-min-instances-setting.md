---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:44:03.369Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Automatic scaling min instances setting"
feature_slug: "automatic-scaling-min-instances-setting"
latest_feature_date: "2018-05-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "instance warmup floor"
  - "app.yaml automatic_scaling min_instances"
  - "keep minimum instances running"
  - "automatic scaling min instances"
  - "minimum instances setting"
  - "min_instances setting"
  - "minimum instances"
  - "min_instances"
---

# Automatic scaling min instances setting

Product: App Engine standard environment Java
Coverage: LOW

## Step 02 Summary

Automatic scaling now supports a min instances setting to keep a minimum number of instances running.

## Extended Definition

The provided official excerpt confirms a **minimum instances setting** for Serverless VPC Access connectors, where a `min instances` value can be specified in Terraform, configured for a connector, and updated via `gcloud beta compute networks vpc-access connectors update ... --min-instances=...`. It also states that this minimum is bounded by the maximum instance value (the minimum must be less than max, e.g., max 8 means minimum can be at most 7). The excerpt does not provide direct evidence for App Engine Standard Environment automatic-scaling’s `min_instances` behavior.

## Evidence Summary

The page documents connector-level minimum/maximum instance controls (`min instances`) and their constraint, but it does not substantiate the App Engine Standard automatic scaling `min_instances` feature specifically.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Configure your service to use a connector After you have created a Serverless VPC Access connector, you must configure each service in your App Engine app that you want to connect to your VPC network.
- To increase the minimum or maximum number of instances for the connector, run the following command in your terminal: gcloud beta compute networks vpc-access connectors update CONNECTOR NAME --region = REGION --min-instances = MIN INSTANCES --max-instances = MAX INSTANCES Replace the following: CONNECTOR NAME : the name of your connector REGION : the name of your connector's region MIN INSTANCES : your preferred minimum number of instances.
- Largest possible value for this field is the current max instances value minus 1, because min instances must be less than max instances .
- For example, if the value in the Maximum instances field is 8, then the largest possible value for the Minimum instances field is 7.

