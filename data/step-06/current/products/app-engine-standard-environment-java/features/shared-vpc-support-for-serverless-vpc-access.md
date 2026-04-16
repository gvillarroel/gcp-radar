---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.875Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Shared VPC support for Serverless VPC Access"
feature_slug: "shared-vpc-support-for-serverless-vpc-access"
latest_feature_date: "2020-07-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc"
keywords:
  - "shared"
  - "vpc"
  - "serverless"
  - "access"
  - "app"
  - "engine"
  - "was"
  - "added"
---

# Shared VPC support for Serverless VPC Access

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

Serverless VPC Access support for App Engine was added for Shared VPC environments.

## Extended Definition

Serverless VPC Access support for App Engine was added for Shared VPC environments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc)

## Supporting Pages

### "Configure connectors in the Shared VPC host project \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Provide access to the connector Provide access to the connector by granting the Serverless VPC Access User IAM role on the host project to the principal that deploys your App Engine service.
- Go to Google Cloud console dashboard In the menu bar at the top of the dashboard, click the project dropdown menu and select the host project. gcloud Set the default project in the gcloud CLI to the host project by running the following in your terminal: gcloud config set project HOST PROJECT ID Replace the following: HOST PROJECT ID : the ID of the Shared VPC host project Create a Serverless VPC Access connector To send requests to your VPC network and receive the corresponding responses, you must create a Serverless VPC Access connector.
- Click Save . gcloud Run the following in your terminal: gcloud projects add-iam-policy-binding HOST PROJECT ID \ --member= PRINCIPAL \ --role=roles/vpcaccess.user Replace the following: HOST PROJECT ID : the ID of the Shared VPC host project PRINCIPAL : the principal that deploys your App Engine service.
- Click Save . gcloud Run the following in your terminal: gcloud projects add-iam-policy-binding HOST PROJECT ID \ --member= PRINCIPAL \ --role=roles/vpcaccess.viewer Replace the following: HOST PROJECT ID : the ID of the Shared VPC host project PRINCIPAL : the principal who deploys App Engine services.

### "Connecting to a Shared VPC network \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your organization uses Shared VPC , you can connect App Engine standard environment services directly to your Shared VPC network by using Serverless VPC Access .
- This allows a standard environment service to access resources in your Shared VPC network, such as Compute Engine VM instances, Memorystore instances, and any other resources with an internal IP address.
- Comparison of configuration methods For Shared VPC, Serverless VPC Access connectors can be configured in two different ways.
- A user with the Compute Engine Security Admin role or a custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled for the host project must still manage firewall rules for the connector.

### "Connecting to a Shared VPC network \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc)
- Source ID: `site-docs-reference-2`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your organization uses Shared VPC , you can connect App Engine standard environment services directly to your Shared VPC network by using Serverless VPC Access .
- This allows a standard environment service to access resources in your Shared VPC network, such as Compute Engine VM instances, Memorystore instances, and any other resources with an internal IP address.
- Comparison of configuration methods For Shared VPC, Serverless VPC Access connectors can be configured in two different ways.
- A user with the Compute Engine Security Admin role or a custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled for the host project must still manage firewall rules for the connector.

