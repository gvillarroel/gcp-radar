---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.711Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Editable Serverless VPC Access connector configuration in App Engine"
feature_slug: "editable-serverless-vpc-access-connector-configuration-in-app-engine"
latest_feature_date: "2024-01-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/connecting-shared-vpc"
keywords:
  - "editable"
  - "serverless"
  - "vpc"
  - "access"
  - "connector"
  - "configuration"
  - "app"
  - "engine"
---

# Editable Serverless VPC Access connector configuration in App Engine

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

Updating Serverless VPC Access connectors at GA is now supported, including changing machine type and minimum/maximum instance counts.

## Extended Definition

Updating Serverless VPC Access connectors at GA is now supported, including changing machine type and minimum/maximum instance counts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/go/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/go/connecting-shared-vpc)

## Supporting Pages

### "Configure connectors in the Shared VPC host project \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project)
- Source ID: `site-docs-reference-2`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Provide access to the connector Provide access to the connector by granting the Serverless VPC Access User IAM role on the host project to the principal that deploys your App Engine service.
- A green check mark will appear next to the connector's name when it is ready to use. gcloud Update gcloud components to the latest version: gcloud components update Enable the Serverless VPC Access API for your project: gcloud services enable vpcaccess.googleapis.com Create a Serverless VPC Access connector: gcloud compute networks vpc-access connectors create CONNECTOR NAME \ --region = REGION \ --subnet = SUBNET \ --subnet-project = HOST PROJECT ID \ Optional: specify minimum and maximum instance values between 2 and 10, default is 2 min, 10 max. --min-instances = MIN \ --max-instances = MAX \ Optional: specify machine type, default is e2-micro --machine-type = MACHINE TYPE Replace the following: CONNECTOR NAME : a name for your connector.
- Go to Google Cloud console dashboard In the menu bar at the top of the dashboard, click the project dropdown menu and select the host project. gcloud Set the default project in the gcloud CLI to the host project by running the following in your terminal: gcloud config set project HOST PROJECT ID Replace the following: HOST PROJECT ID : the ID of the Shared VPC host project Create a Serverless VPC Access connector To send requests to your VPC network and receive the corresponding responses, you must create a Serverless VPC Access connector.
- Grant IAM roles on the host project On the host project, grant principals who deploy App Engine services the Serverless VPC Access Viewer ( vpcaccess.viewer ) role.

### "Connecting to a Shared VPC network \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Comparison of configuration methods For Shared VPC, Serverless VPC Access connectors can be configured in two different ways.
- A user with the Compute Engine Security Admin role or a custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled for the host project must still manage firewall rules for the connector.
- If your organization uses Shared VPC , you can connect App Engine standard environment services directly to your Shared VPC network by using Serverless VPC Access .
- Serverless VPC Access connectors incur a monthly charge.

### "Connecting to a Shared VPC network \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/go/connecting-shared-vpc)
- Source ID: `site-docs-reference-2`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Comparison of configuration methods For Shared VPC, Serverless VPC Access connectors can be configured in two different ways.
- A user with the Compute Engine Security Admin role or a custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled for the host project must still manage firewall rules for the connector.
- If your organization uses Shared VPC , you can connect App Engine standard environment services directly to your Shared VPC network by using Serverless VPC Access .
- Serverless VPC Access connectors incur a monthly charge.

