---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:34:18.705Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Cloud Console guided walkthrough"
feature_slug: "cloud-console-guided-walkthrough"
latest_feature_date: "2016-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/getting-started"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/audit-logging"
keywords:
  - "console"
  - "guided"
  - "walkthrough"
  - "provides"
  - "interactive"
  - "app"
  - "engine"
  - "language"
---

# Cloud Console guided walkthrough

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

The Cloud Console provides an interactive App Engine guided walkthrough by language.

## Extended Definition

The Cloud Console provides an interactive App Engine guided walkthrough by language.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/audit-logging](https://docs.cloud.google.com/appengine/docs/standard/audit-logging)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Configure your service to use a connector After you have created a Serverless VPC Access connector, you must configure each service in your App Engine app that you want to connect to your VPC network.
- Test the custom constraint To test the example that restricts ingress settings, deploy a connector in the project with network set to default : gcloud compute networks vpc-access connectors create org-policy-test \ --project = PROJECT ID \ --region = REGION ID \ --network = default The output is the following: Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."] Example custom organization policies for common use cases The following table provides examples of custom constraints that you might find useful with Serverless VPC Access connectors: Description Constraint syntax Require that Serverless VPC Access connectors can only use a specific network. name : organizations/ ORGANIZATION ID /customConstraints/custom.allowlistNetworks resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.network == 'allowlisted-network'" actionType : ALLOW displayName : allowlistNetworks description : Require connectors to use a specific network.
- Create a connector using an existing subnet : gcloud compute networks vpc-access connectors create CONNECTOR NAME \ --region REGION \ --subnet SUBNET NAME \ --subnet-project HOST PROJECT ID \ --min-instances MIN \ --max-instances MAX \ --machine-type MACHINE TYPE Replace the following: CONNECTOR NAME : a name for your connector, matching Compute Engine naming conventions , with the additional requirements that the name must be less than 21 characters long, and that hyphens (-) count as two characters.
- To configure the egress behavior of your App Engine service: Add the egress setting attribute to the vpc access connector field of your service's app.yaml file: vpc access connector : name : projects/ PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME egress setting : EGRESS SETTING Replace: PROJECT ID with your Google Cloud project ID REGION with the region your connector is in CONNECTOR NAME with the name of your connector EGRESS SETTING with one of the following: private-ranges-only Default.

### "An Overview of the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- Source ID: `site-docs-reference`
- Final score: 53
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Admin API provides programmatic access to several of the App Engine administrative operations that are found in the Google Cloud console .
- The App Engine Admin API is a RESTful API for managing your App Engine applications regardless of programming language.
- Home Technology areas App Engine Admin API Overview Send feedback An Overview of the Admin API Stay organized with collections Save and categorize content based on your preferences.
- With the Admin API, you can manage your App Engine applications in manners that best suit your environment or process.

### "App Engine audit logging information \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/audit-logging](https://docs.cloud.google.com/appengine/docs/standard/audit-logging)
- Source ID: `site-docs-reference`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- Audited operations The following table summarizes which API operations correspond to each audit log type in App Engine: Audit logs category App Engine operations Admin Activity audit logs apps.create apps.patch apps.repair apps.authorizedCertificates.create apps.authorizedCertificates.delete apps.authorizedCertificates.patch apps.domainMappings.create apps.domainMappings.delete apps.domainMappings.patch apps.firewall.ingressRules.batchUpdate apps.firewall.ingressRules.create apps.firewall.ingressRules.delete apps.firewall.ingressRules.patch apps.services.delete apps.services.patch apps.services.versions.create apps.services.versions.delete apps.services.versions.patch apps.services.versions.instances.debug apps.services.versions.instances.delete Data Access audit logs GetMemcacheItem SetMemcacheItem DeleteMemcacheItem FlushAllMemcacheItems Memcache audit logs only apply to operations made through Cloud Console.
- Console In the Google Cloud console, you can use the Logs Explorer to retrieve your audit log entries for your Google Cloud project, folder, or organization: Note: You can't view audit logs for Cloud Billing accounts in the Google Cloud console.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback App Engine audit logging information Stay organized with collections Save and categorize content based on your preferences.
- Available audit logs The following types of audit logs are available for App Engine: Admin Activity audit logs Includes "admin write" operations that write metadata or configuration information.

