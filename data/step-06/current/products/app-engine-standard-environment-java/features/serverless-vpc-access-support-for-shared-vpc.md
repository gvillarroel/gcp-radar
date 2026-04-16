---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.221Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Serverless VPC Access support for Shared VPC"
feature_slug: "serverless-vpc-access-support-for-shared-vpc"
latest_feature_date: "2021-04-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/application-security"
keywords:
  - "shared"
  - "serverless"
  - "access"
---

# Serverless VPC Access support for Shared VPC

Product: App Engine standard environment Java
Coverage: LOW

## Step 02 Summary

App Engine standard environment Java supports using Serverless VPC Access with Shared VPC; App Engine standard environment Java supports using Serverless VPC Access with Shared VPC.

## Extended Definition

App Engine standard environment Java supports using Serverless VPC Access with Shared VPC; App Engine standard environment Java supports using Serverless VPC Access with Shared VPC.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)

## Supporting Pages

### "Configure connectors in the Shared VPC host project \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project)
- Source ID: `site-docs-reference-4`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Provide access to the connector Provide access to the connector by granting the Serverless VPC Access User IAM role on the host project to the principal that deploys your App Engine service.
- Go to Google Cloud console dashboard In the menu bar at the top of the dashboard, click the project dropdown menu and select the host project. gcloud Set the default project in the gcloud CLI to the host project by running the following in your terminal: gcloud config set project HOST PROJECT ID Replace the following: HOST PROJECT ID : the ID of the Shared VPC host project Create a Serverless VPC Access connector To send requests to your VPC network and receive the corresponding responses, you must create a Serverless VPC Access connector.
- If your organization uses Shared VPC, you can set up a Serverless VPC Access connector in either the service project or the host project.
- A green check mark will appear next to the connector's name when it is ready to use. gcloud Update gcloud components to the latest version: gcloud components update Enable the Serverless VPC Access API for your project: gcloud services enable vpcaccess.googleapis.com Create a Serverless VPC Access connector: gcloud compute networks vpc-access connectors create CONNECTOR NAME \ --region = REGION \ --subnet = SUBNET \ --subnet-project = HOST PROJECT ID \ Optional: specify minimum and maximum instance values between 2 and 10, default is 2 min, 10 max. --min-instances = MIN \ --max-instances = MAX \ Optional: specify machine type, default is e2-micro --machine-type = MACHINE TYPE Replace the following: CONNECTOR NAME : a name for your connector.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Configure your service to use a connector After you have created a Serverless VPC Access connector, you must configure each service in your App Engine app that you want to connect to your VPC network.
- To perform these steps, you must have one of the following roles on the host project: Owner role ( roles/owner ) Compute Security Admin role ( roles/compute.securityAdmin ) Custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled For a basic configuration, apply the rules to allow serverless resources in any service project connected to the Shared VPC network to send requests to any resource in the network.
- For Shared VPC users who set up connectors in the Shared VPC host project, you can use the command gcloud compute networks vpc-access connectors describe to list the projects in which there are serverless resources that use a given connector.
- Test the custom constraint To test the example that restricts ingress settings, deploy a connector in the project with network set to default : gcloud compute networks vpc-access connectors create org-policy-test \ --project = PROJECT ID \ --region = REGION ID \ --network = default The output is the following: Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."] Example custom organization policies for common use cases The following table provides examples of custom constraints that you might find useful with Serverless VPC Access connectors: Description Constraint syntax Require that Serverless VPC Access connectors can only use a specific network. name : organizations/ ORGANIZATION ID /customConstraints/custom.allowlistNetworks resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.network == 'allowlisted-network'" actionType : ALLOW displayName : allowlistNetworks description : Require connectors to use a specific network.

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- You can then create and modify your firewall rules to control the scope of access throughout your release process, allowing only certain organizations, either within your company or externally, to access your app as it makes its way to public availability.
- App Engine firewall The App Engine firewall enables you to control access to your App Engine app through a set of rules that can either allow or deny requests from the specified ranges of IP addresses.
- Create a firewall to: Allow only traffic from within a specific network Ensure that only a certain range of IP addresses from specific networks can access your app.
- Access control In each Google Cloud project, set up access control to determine who can access the services within the project, including App Engine.

