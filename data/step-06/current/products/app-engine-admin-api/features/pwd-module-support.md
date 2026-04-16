---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:36:38.556Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "PWD module support"
feature_slug: "pwd-module-support"
latest_feature_date: "2017-06-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1"
keywords:
  - "pwd"
  - "module"
  - "unix"
  - "now"
  - "available"
  - "use"
---

# PWD module support

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

The Unix PWD module is now available for use.

## Extended Definition

The Unix PWD module is now available for use.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api](https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Configure your service to use a connector After you have created a Serverless VPC Access connector, you must configure each service in your App Engine app that you want to connect to your VPC network.
- After you have created the YAML file for a new custom constraint, you must set it up to make it available for organization policies in your organization.
- After this operation is complete, your custom constraints are available as organization policies in your list of Google Cloud organization policies.
- To learn about available machine types, see the documentation on Throughput and scaling . gcloud In the Google Cloud console, activate Cloud Shell.

### Accessing the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api](https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api)
- Source ID: `site-api-reference`
- Final score: 38
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### "Package google.appengine.v1 \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- Source ID: `site-docs-reference-4`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- Any value specified here in a request is ignored. flexible environment available bool App Engine flexible environment is available in the given location.
- Only returned in GET requests if view=FULL is set. build env variables map<string, string> Environment variables available to the build environment.
- Only returned in GET requests if view=FULL is set. env variables map<string, string> Environment variables available to the application.
- Fields standard environment available bool App Engine standard environment is available in the given location.

