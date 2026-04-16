---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.801Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "PyAMF 0.7.2 beta library support"
feature_slug: "pyamf-0-7-2-beta-library-support"
latest_feature_date: "2015-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/connecting-vpc"
keywords:
  - "pyamf"
  - "library"
  - "beta"
  - "adds"
  - "version"
---

# PyAMF 0.7.2 beta library support

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine adds beta support for the PyAMF library version 0.7.2.

## Extended Definition

App Engine adds beta support for the PyAMF library version 0.7.2.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/standard/connecting-vpc](https://cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/python3/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/python3/connecting-vpc)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Configure your service to use a connector After you have created a Serverless VPC Access connector, you must configure each service in your App Engine app that you want to connect to your VPC network.
- To increase the minimum or maximum number of instances for the connector, run the following command in your terminal: gcloud beta compute networks vpc-access connectors update CONNECTOR NAME --region = REGION --min-instances = MIN INSTANCES --max-instances = MAX INSTANCES Replace the following: CONNECTOR NAME : the name of your connector REGION : the name of your connector's region MIN INSTANCES : your preferred minimum number of instances.
- To update the connector machine type, run the following command in your terminal: gcloud beta compute networks vpc-access connectors update CONNECTOR NAME --region = REGION --machine-type = MACHINE TYPE Replace the following: CONNECTOR NAME : the name of your connector REGION : the name of your connector's region MACHINE TYPE : your preferred machine type.
- Update gcloud components to the latest version: gcloud components update Ensure that the Serverless VPC Access API is enabled for your project: gcloud services enable vpcaccess.googleapis.com Create the connector using one of the following options: For more details and optional arguments, see the gcloud reference .

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://cloud.google.com/appengine/docs/standard/connecting-vpc](https://cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference-3`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Configure your service to use a connector After you have created a Serverless VPC Access connector, you must configure each service in your App Engine app that you want to connect to your VPC network.
- To increase the minimum or maximum number of instances for the connector, run the following command in your terminal: gcloud beta compute networks vpc-access connectors update CONNECTOR NAME --region = REGION --min-instances = MIN INSTANCES --max-instances = MAX INSTANCES Replace the following: CONNECTOR NAME : the name of your connector REGION : the name of your connector's region MIN INSTANCES : your preferred minimum number of instances.
- To update the connector machine type, run the following command in your terminal: gcloud beta compute networks vpc-access connectors update CONNECTOR NAME --region = REGION --machine-type = MACHINE TYPE Replace the following: CONNECTOR NAME : the name of your connector REGION : the name of your connector's region MACHINE TYPE : your preferred machine type.
- Update gcloud components to the latest version: gcloud components update Ensure that the Serverless VPC Access API is enabled for your project: gcloud services enable vpcaccess.googleapis.com Create the connector using one of the following options: For more details and optional arguments, see the gcloud reference .

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/python3/connecting-vpc)
- Source ID: `site-docs-reference-4`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Configure your service to use a connector After you have created a Serverless VPC Access connector, you must configure each service in your App Engine app that you want to connect to your VPC network.
- To increase the minimum or maximum number of instances for the connector, run the following command in your terminal: gcloud beta compute networks vpc-access connectors update CONNECTOR NAME --region = REGION --min-instances = MIN INSTANCES --max-instances = MAX INSTANCES Replace the following: CONNECTOR NAME : the name of your connector REGION : the name of your connector's region MIN INSTANCES : your preferred minimum number of instances.
- To update the connector machine type, run the following command in your terminal: gcloud beta compute networks vpc-access connectors update CONNECTOR NAME --region = REGION --machine-type = MACHINE TYPE Replace the following: CONNECTOR NAME : the name of your connector REGION : the name of your connector's region MACHINE TYPE : your preferred machine type.
- Update gcloud components to the latest version: gcloud components update Ensure that the Serverless VPC Access API is enabled for your project: gcloud services enable vpcaccess.googleapis.com Create the connector using one of the following options: For more details and optional arguments, see the gcloud reference .

