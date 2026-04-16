---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.291Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Shared VPC host project support for Serverless VPC Access connectors"
feature_slug: "shared-vpc-host-project-support-for-serverless-vpc-access-connectors"
latest_feature_date: "2022-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/connecting-shared-vpc"
keywords:
  - "shared"
  - "host"
  - "connectors"
  - "project"
  - "serverless"
  - "access"
---

# Shared VPC host project support for Serverless VPC Access connectors

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

Serverless VPC Access connectors can be configured in Shared VPC host projects for App Engine workloads; Serverless VPC Access connectors can be configured in Shared VPC host projects for App Engine workloads.

## Extended Definition

Serverless VPC Access connectors can be configured in Shared VPC host projects for App Engine workloads; Serverless VPC Access connectors can be configured in Shared VPC host projects for App Engine workloads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/go/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/go/connecting-shared-vpc)

## Supporting Pages

### "Configure connectors in the Shared VPC host project \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project)
- Source ID: `site-docs-reference-4`
- Final score: 262
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Provide access to the connector Provide access to the connector by granting the Serverless VPC Access User IAM role on the host project to the principal that deploys your App Engine service.
- A green check mark will appear next to the connector's name when it is ready to use. gcloud Update gcloud components to the latest version: gcloud components update Enable the Serverless VPC Access API for your project: gcloud services enable vpcaccess.googleapis.com Create a Serverless VPC Access connector: gcloud compute networks vpc-access connectors create CONNECTOR NAME \ --region = REGION \ --subnet = SUBNET \ --subnet-project = HOST PROJECT ID \ Optional: specify minimum and maximum instance values between 2 and 10, default is 2 min, 10 max. --min-instances = MIN \ --max-instances = MAX \ Optional: specify machine type, default is e2-micro --machine-type = MACHINE TYPE Replace the following: CONNECTOR NAME : a name for your connector.
- Go to Google Cloud console dashboard In the menu bar at the top of the dashboard, click the project dropdown menu and select the host project. gcloud Set the default project in the gcloud CLI to the host project by running the following in your terminal: gcloud config set project HOST PROJECT ID Replace the following: HOST PROJECT ID : the ID of the Shared VPC host project Create a Serverless VPC Access connector To send requests to your VPC network and receive the corresponding responses, you must create a Serverless VPC Access connector.
- Add the vpc access connector to your service's app.yaml file: vpc access connector: name: projects/ HOST PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME Replace the following: HOST PROJECT ID : the ID of the Shared VPC host project REGION : the region of your connector CONNECTOR NAME : the name of your connector Deploy the service: gcloud app deploy After deploying, your service is able to send requests to your Shared VPC network and receive the corresponding responses.

### "Connecting to a Shared VPC network \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can either set up connectors in each service project that has standard environment resources that need access to your network, or you can set up shared connectors in the host project.
- Host project Advantages of creating connectors in the host project: Centralized network management: Aligns with the Shared VPC model of centralizing network configuration resources in the host project.
- Comparison of configuration methods For Shared VPC, Serverless VPC Access connectors can be configured in two different ways.
- A user with the Compute Engine Security Admin role or a custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled for the host project must still manage firewall rules for the connector.

### "Connecting to a Shared VPC network \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/go/connecting-shared-vpc)
- Source ID: `site-docs-reference-4`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can either set up connectors in each service project that has standard environment resources that need access to your network, or you can set up shared connectors in the host project.
- Host project Advantages of creating connectors in the host project: Centralized network management: Aligns with the Shared VPC model of centralizing network configuration resources in the host project.
- Comparison of configuration methods For Shared VPC, Serverless VPC Access connectors can be configured in two different ways.
- A user with the Compute Engine Security Admin role or a custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled for the host project must still manage firewall rules for the connector.

