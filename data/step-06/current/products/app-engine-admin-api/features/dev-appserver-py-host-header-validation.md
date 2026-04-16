---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:36:38.550Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "dev_appserver.py host header validation"
feature_slug: "dev-appserver-py-host-header-validation"
latest_feature_date: "2017-12-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server"
keywords:
  - "dev"
  - "appserver"
  - "py"
  - "host"
  - "header"
  - "validation"
  - "app"
  - "engine"
---

# dev_appserver.py host header validation

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

App Engine dev_appserver.py now enforces Host header validation for incoming HTTP requests, with optional disabling via --enable_host_checking=false.

## Extended Definition

App Engine dev_appserver.py now enforces Host header validation for incoming HTTP requests, with optional disabling via --enable_host_checking=false.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server)

## Supporting Pages

### Using the local development server | App Engine standard environment | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server)
- Source ID: `feature-recovery-http`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Verify that you have installed the Google Cloud CLI component that includes the App Engine extension for Python 3 ( app-engine-python ): gcloud components list If the app-engine-python component is not installed, run the following command: gcloud components install app-engine-python Locate the installation path of Google Cloud SDK by running the following command: gcloud info The command returns the root directory where you installed Google Cloud SDK, for example: Installation Root: [/Users/myname/google-cloud-sdk] Locate the dev_appserver.py tool under the /bin/ folder where you installed Google Cloud CLI, for example: CLOUD_SDK_ROOT /bin/dev_appserver.py Note the path to the dev_appserver.py for later.
- To start the local development server: In the directory that contains your app.yaml configuration file, run the dev_appserver.py command. dev_appserver.py Specify the directory path to your app, for example: python3 CLOUD_SDK_ROOT / bin / dev_appserver . py PATH_TO_YOUR_APP Alternatively, you can specify the configuration file of a specific service, for example: python3 CLOUD_SDK_ROOT / bin / dev_appserver . py app . yaml To change the port, you include the --port option: python3 CLOUD_SDK_ROOT / bin / dev_appserver . py -- port = 9999 PATH_TO_YOUR_APP goapp serve The goapp serve command is included with the original App Engine SDK for Go and wraps the underlying dev_appserver.py Python tool.
- Clear the local Datastore To clear the local Datastore for an application, invoke the local development server as follows: python3 CLOUD_SDK_ROOT /bin/dev_appserver.py --clear_datastore=yes app.yaml Change the local Datastore location To change the location used for the Datastore file, use the --datastore_path option: python3 CLOUD_SDK_ROOT /bin/dev_appserver.py --datastore_path=/tmp/myapp_datastore app.yaml Use the Mail service The local development server can send email for calls to the App Engine mail service using either an SMTP server or a local installation of Sendmail .
- Using SMTP To enable mail support with an SMTP server, invoke dev_appserver.py as follows:: python3 [ CLOUD_SDK_ROOT ]/ bin / dev_appserver . py --smtp_host=smtp.example.com --smtp_port=25 \ --smtp_user=ajohnson --smtp_password=k1tt3ns [PATH_TO_YOUR_APP] where you set the --smtp_host , --smtp_port , --smtp_user and --smtp_password options with your own values.

### "Package google.appengine.v1 \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- Source ID: `site-docs-reference-4`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- Any value specified here in a request is ignored. disk usage bytes int64 Total size in bytes of all the files that are included in this version and currently hosted on the App Engine disk.
- Fields disable health check bool Whether to explicitly disable health checks for this instance. host string Host header to send when performing an HTTP health check.
- Fields path string The request path. host string Host header to send when performing a HTTP Readiness check.
- Fields path string The request path. host string Host header to send when performing a HTTP Liveness check.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Configure your service to use a connector After you have created a Serverless VPC Access connector, you must configure each service in your App Engine app that you want to connect to your VPC network.
- Create a connector using an existing subnet : gcloud compute networks vpc-access connectors create CONNECTOR NAME \ --region REGION \ --subnet SUBNET NAME \ --subnet-project HOST PROJECT ID \ --min-instances MIN \ --max-instances MAX \ --machine-type MACHINE TYPE Replace the following: CONNECTOR NAME : a name for your connector, matching Compute Engine naming conventions , with the additional requirements that the name must be less than 21 characters long, and that hyphens (-) count as two characters.
- However, if you create a connector in a service project and the connector targets a Shared VPC network in the host project, you must add firewall rules to allow necessary traffic for the connector's operation from the following ranges: Serverless infrastructure IP range : 35.199.224.0/19 Health check probe IP ranges : 35.191.0.0/16 , 35.191.192.0/18 , and 130.211.0.0/22 These ranges are used by the Google infrastructure underlying Cloud Run, Cloud Run functions, and App Engine standard environment.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Connecting to a VPC network Stay organized with collections Save and categorize content based on your preferences.

