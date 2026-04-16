---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:36:38.544Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "Local development server startup process ID logging"
feature_slug: "local-development-server-startup-process-id-logging"
latest_feature_date: "2018-07-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/audit-logging"
keywords:
  - "local"
  - "development"
  - "server"
  - "startup"
  - "process"
  - "id"
  - "logging"
  - "now"
---

# Local development server startup process ID logging

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

The local development server now prints its process ID at startup for debugging support.

## Extended Definition

The local development server now prints its process ID at startup for debugging support.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/audit-logging](https://docs.cloud.google.com/appengine/docs/standard/audit-logging)

## Supporting Pages

### "App Engine audit logging information \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/audit-logging](https://docs.cloud.google.com/appengine/docs/standard/audit-logging)
- Source ID: `site-docs-reference`
- Final score: 55
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To read your Google Cloud project-level audit log entries, run the following command: gcloud logging read "logName : projects/ PROJECT ID /logs/cloudaudit.googleapis.com" \ --project= PROJECT ID To read your folder-level audit log entries, run the following command: gcloud logging read "logName : folders/ FOLDER ID /logs/cloudaudit.googleapis.com" \ --folder= FOLDER ID To read your organization-level audit log entries, run the following command: gcloud logging read "logName : organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com" \ --organization= ORGANIZATION ID To read your Cloud Billing account-level audit log entries, run the following command: gcloud logging read "logName : billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com" \ --billing-account= BILLING ACCOUNT ID Add the --freshness flag to your command to read logs that are more than 1 day old.
- Log name Cloud Audit Logs log names include resource identifiers indicating the Google Cloud project or other Google Cloud entity that owns the audit logs, and whether the log contains Admin Activity, Data Access, Policy Denied, or System Event audit logging data.
- When deciding which Logging-specific permissions and roles apply to your use case, consider the following: The Logs Viewer role ( roles/logging.viewer ) gives you read-only access to Admin Activity, Policy Denied, and System Event audit logs.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback App Engine audit logging information Stay organized with collections Save and categorize content based on your preferences.

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-reference`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- Set up your development environment You can either use your local machine, and use tools you're already familiar with, or Cloud Shell .
- Local Machine Install Go and set up the gcloud CLI as described in Setting up your development environment .
- When your app is running on App Engine, the PORT environment variable is set for you, but when testing your app locally, you can set PORT to any preferred value.
- Fprint ( w , "Hello, World!" ) } The http.ResponseWriter object assembles the HTTP server response; by writing to it, you send data to the browser.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- Next steps Monitor admin activity with Serverless VPC Access audit logging .
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Configure your service to use a connector After you have created a Serverless VPC Access connector, you must configure each service in your App Engine app that you want to connect to your VPC network.
- Test the custom constraint To test the example that restricts ingress settings, deploy a connector in the project with network set to default : gcloud compute networks vpc-access connectors create org-policy-test \ --project = PROJECT ID \ --region = REGION ID \ --network = default The output is the following: Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."] Example custom organization policies for common use cases The following table provides examples of custom constraints that you might find useful with Serverless VPC Access connectors: Description Constraint syntax Require that Serverless VPC Access connectors can only use a specific network. name : organizations/ ORGANIZATION ID /customConstraints/custom.allowlistNetworks resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.network == 'allowlisted-network'" actionType : ALLOW displayName : allowlistNetworks description : Require connectors to use a specific network.
- Don't change the specified ports. gcloud compute firewall-rules create serverless-to-vpc-connector \ --allow tcp:667,udp:665-666,icmp \ --source-ranges = 35 .199.224.0/19 \ --direction = INGRESS \ --target-tags vpc-connector \ --network = VPC NETWORK gcloud compute firewall-rules create vpc-connector-to-serverless \ --allow tcp:667,udp:665-666,icmp \ --destination-ranges = 35 .199.224.0/19 \ --direction = EGRESS \ --target-tags vpc-connector \ --network = VPC NETWORK gcloud compute firewall-rules create vpc-connector-health-checks \ --allow tcp:667 \ --source-ranges = 35 .191.0.0/16,35.191.192.0/18,130.211.0.0/22 \ --direction = INGRESS \ --target-tags vpc-connector \ --network = VPC NETWORK Replace VPC NETWORK with the name of the VPC network to attach your connector to.

