---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.867Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Serverless VPC Access connector update configuration"
feature_slug: "serverless-vpc-access-connector-update-configuration"
latest_feature_date: "2024-01-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc"
keywords:
  - "serverless"
  - "vpc"
  - "access"
  - "connector"
  - "update"
  - "configuration"
  - "updating"
  - "connectors"
---

# Serverless VPC Access connector update configuration

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

Updating Serverless VPC Access connectors is now generally available, including editing connector machine type and instance scaling bounds; The capability to update Serverless VPC Access connectors became available in preview, including machine type and instance count configuration.

## Extended Definition

Updating Serverless VPC Access connectors is now generally available, including editing connector machine type and instance scaling bounds; The capability to update Serverless VPC Access connectors became available in preview, including machine type and instance count configuration.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc)

## Supporting Pages

### "Configure connectors in the Shared VPC host project \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project)
- Source ID: `site-docs-reference`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A green check mark will appear next to the connector's name when it is ready to use. gcloud Update gcloud components to the latest version: gcloud components update Enable the Serverless VPC Access API for your project: gcloud services enable vpcaccess.googleapis.com Create a Serverless VPC Access connector: gcloud compute networks vpc-access connectors create CONNECTOR NAME \ --region = REGION \ --subnet = SUBNET \ --subnet-project = HOST PROJECT ID \ Optional: specify minimum and maximum instance values between 2 and 10, default is 2 min, 10 max. --min-instances = MIN \ --max-instances = MAX \ Optional: specify machine type, default is e2-micro --machine-type = MACHINE TYPE Replace the following: CONNECTOR NAME : a name for your connector.
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Provide access to the connector Provide access to the connector by granting the Serverless VPC Access User IAM role on the host project to the principal that deploys your App Engine service.
- Go to Google Cloud console dashboard In the menu bar at the top of the dashboard, click the project dropdown menu and select the host project. gcloud Set the default project in the gcloud CLI to the host project by running the following in your terminal: gcloud config set project HOST PROJECT ID Replace the following: HOST PROJECT ID : the ID of the Shared VPC host project Create a Serverless VPC Access connector To send requests to your VPC network and receive the corresponding responses, you must create a Serverless VPC Access connector.
- Add the vpc access connector to your service's app.yaml file: vpc access connector: name: projects/ HOST PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME Replace the following: HOST PROJECT ID : the ID of the Shared VPC host project REGION : the region of your connector CONNECTOR NAME : the name of your connector Deploy the service: gcloud app deploy After deploying, your service is able to send requests to your Shared VPC network and receive the corresponding responses.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Configure your service to use a connector After you have created a Serverless VPC Access connector, you must configure each service in your App Engine app that you want to connect to your VPC network.
- Test the custom constraint To test the example that restricts ingress settings, deploy a connector in the project with network set to default : gcloud compute networks vpc-access connectors create org-policy-test \ --project = PROJECT ID \ --region = REGION ID \ --network = default The output is the following: Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."] Example custom organization policies for common use cases The following table provides examples of custom constraints that you might find useful with Serverless VPC Access connectors: Description Constraint syntax Require that Serverless VPC Access connectors can only use a specific network. name : organizations/ ORGANIZATION ID /customConstraints/custom.allowlistNetworks resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.network == 'allowlisted-network'" actionType : ALLOW displayName : allowlistNetworks description : Require connectors to use a specific network.
- Description Constraint syntax Require that Serverless VPC Access connectors have access to only a specific subnet. name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictSubnetForProject resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.subnet.name == 'allocated-subnet'" actionType : ALLOW displayName : restrictSubnetForProject description : This project is only allowed to use the subnet "allocated-subnet".
- Use the following gcloud command to delete a connector: gcloud compute networks vpc-access connectors delete CONNECTOR NAME --region= REGION Replace the following: CONNECTOR NAME with the name of the connector you want to delete REGION with the region where the connector is located Manage custom constraints for projects This section describes how to create custom constraints for Serverless VPC Access connectors and enforce them at the project level.

### "Connecting to a Shared VPC network \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Comparison of configuration methods For Shared VPC, Serverless VPC Access connectors can be configured in two different ways.
- Serverless VPC Access connectors incur a monthly charge.
- Host project Advantages of creating connectors in the host project: Centralized network management: Aligns with the Shared VPC model of centralizing network configuration resources in the host project.
- You can either set up connectors in each service project that has standard environment resources that need access to your network, or you can set up shared connectors in the host project.

