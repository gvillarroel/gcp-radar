---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.719Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "asia-southeast1"
feature_slug: "asia-southeast1"
latest_feature_date: "2021-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project"
  - "https://docs.cloud.google.com/appengine/docs/deprecations"
  - "https://docs.cloud.google.com/appengine/docs/standard/deprecations"
keywords:
  - "asia"
  - "southeast1"
  - "feature"
  - "adds"
  - "app"
  - "engine"
  - "standard"
  - "environment"
---

# asia-southeast1

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

This feature adds App Engine standard environment availability in the us-west1 (Oregon), asia-southeast1 (Singapore), and asia-east1 (Taiwan) regions.

## Extended Definition

This feature adds App Engine standard environment availability in the us-west1 (Oregon), asia-southeast1 (Singapore), and asia-east1 (Taiwan) regions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project)
- [https://docs.cloud.google.com/appengine/docs/deprecations](https://docs.cloud.google.com/appengine/docs/deprecations)
- [https://docs.cloud.google.com/appengine/docs/standard/deprecations](https://docs.cloud.google.com/appengine/docs/standard/deprecations)

## Supporting Pages

### "Configure connectors in the Shared VPC host project \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project)
- Source ID: `site-docs-reference-2`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Configure connectors in the Shared VPC host project Stay organized with collections Save and categorize content based on your preferences.
- Learn how to connect to Memorystore from the App Engine standard environment.
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Provide access to the connector Provide access to the connector by granting the Serverless VPC Access User IAM role on the host project to the principal that deploys your App Engine service.
- The active account must have the following roles on the host project: Compute Network Viewer ( compute.networkViewer ) Project IAM Admin ( resourcemanager.projectIamAdmin ) Service Usage Admin ( serviceuseage.serviceUsageAdmin ) Serverless VPC Access Admin ( vpcaccess.admin ) Select the host project in your preferred environment.

### "Feature deprecations \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/deprecations](https://docs.cloud.google.com/appengine/docs/deprecations)
- Source ID: `site-docs-reference-2`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Resources Send feedback Feature deprecations Stay organized with collections Save and categorize content based on your preferences.
- After a service, feature, or product is officially deprecated, it continues to be available for at least the period of time defined in the Terms of Service.
- The Google Cloud Platform Terms of Service (section "Discontinuation of Services") defines the deprecation policy that applies to App Engine.
- The deprecation policy only applies to the services, features, or products listed therein.

### "Feature deprecations \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/deprecations](https://docs.cloud.google.com/appengine/docs/standard/deprecations)
- Source ID: `site-docs-reference-2`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Resources Send feedback Feature deprecations Stay organized with collections Save and categorize content based on your preferences.
- After a service, feature, or product is officially deprecated, it continues to be available for at least the period of time defined in the Terms of Service.
- The Google Cloud Platform Terms of Service (section "Discontinuation of Services") defines the deprecation policy that applies to App Engine.
- The deprecation policy only applies to the services, features, or products listed therein.

