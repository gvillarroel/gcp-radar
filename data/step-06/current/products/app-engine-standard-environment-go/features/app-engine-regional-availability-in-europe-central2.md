---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.719Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "App Engine regional availability in europe-central2"
feature_slug: "app-engine-regional-availability-in-europe-central2"
latest_feature_date: "2021-04-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/developers-console"
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project"
keywords:
  - "app"
  - "engine"
  - "regional"
  - "availability"
  - "europe"
  - "central2"
  - "standard"
  - "environment"
---

# App Engine regional availability in europe-central2

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

App Engine standard environment is added as available in the europe-central2 (Warsaw) region.

## Extended Definition

App Engine standard environment is added as available in the europe-central2 (Warsaw) region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project)

## Supporting Pages

### "Setting up your Google Cloud project for App Engine \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- Source ID: `site-docs-reference-2`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you can deploy your apps to the App Engine standard environment, you typically need to create or set up the following: A Google Cloud project An App Engine application A billing account Creating a project and application You can select or create a new Google Cloud project and App Engine application to create and manage a collection of settings, credentials, and your app's metadata.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Setting up your Google Cloud project for App Engine Stay organized with collections Save and categorize content based on your preferences.
- App Engine Locations App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- Note: Two locations, which are called europe-west and us-central in App Engine commands and in the Google Cloud console, are called europe-west1 and us-central1 , respectively, elsewhere in Google documentation.

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.
- Only the App Engine standard environment provides free quotas.
- Both the flexible environment and the standard environment share the same limits for services and versions.
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Configure connectors in the Shared VPC host project \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project)
- Source ID: `site-docs-reference-2`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Configure connectors in the Shared VPC host project Stay organized with collections Save and categorize content based on your preferences.
- Learn how to connect to Memorystore from the App Engine standard environment.
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Provide access to the connector Provide access to the connector by granting the Serverless VPC Access User IAM role on the host project to the principal that deploys your App Engine service.
- The active account must have the following roles on the host project: Compute Network Viewer ( compute.networkViewer ) Project IAM Admin ( resourcemanager.projectIamAdmin ) Service Usage Admin ( serviceuseage.serviceUsageAdmin ) Serverless VPC Access Admin ( vpcaccess.admin ) Select the host project in your preferred environment.

