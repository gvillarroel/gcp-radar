---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:08.286Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "App Engine dashboard per-URL error reporting"
feature_slug: "app-engine-dashboard-per-url-error-reporting"
latest_feature_date: "2016-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
keywords:
  - "app"
  - "engine"
  - "dashboard"
  - "per"
  - "url"
  - "error"
  - "reporting"
  - "server"
---

# App Engine dashboard per-URL error reporting

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

Server and Client Error metrics in the App Engine dashboard now report status errors at a per-URL level.

## Extended Definition

Server and Client Error metrics in the App Engine dashboard now report status errors at a per-URL level.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference-required-2`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Configure your service to use a connector After you have created a Serverless VPC Access connector, you must configure each service in your App Engine app that you want to connect to your VPC network.
- However, if you create a connector in a service project and the connector targets a Shared VPC network in the host project, you must add firewall rules to allow necessary traffic for the connector's operation from the following ranges: Serverless infrastructure IP range : 35.199.224.0/19 Health check probe IP ranges : 35.191.0.0/16 , 35.191.192.0/18 , and 130.211.0.0/22 These ranges are used by the Google infrastructure underlying Cloud Run, Cloud Run functions, and App Engine standard environment.
- Errors Service account needs Service Agent role error If you use the Restrict Resource Service Usage organization policy constraint to block Cloud Deployment Manager ( deploymentmanager.googleapis.com ), you might see the following error message: Serverless VPC Access service account (service-<PROJECT NUMBER>@gcp-sa-vpcaccess.iam.gserviceaccount.com) needs Serverless VPC Access Service Agent role in the project.
- This page shows how to use Serverless VPC Access to connect your App Engine services in the standard environment directly to your VPC network, allowing access to Compute Engine VM instances, Memorystore instances, and any other resources with an internal IP address.

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-reference-required-2`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Authenticating users Stay organized with collections Save and categorize content based on your preferences.
- Identity-Aware Proxy (IAP) Provides authentication by adding an Identity and Access Management (IAM) verification layer above your App Engine app.
- The Users API allows an App Engine app to perform the following tasks: Detect whether the current user is signed in using a Google Account.
- IAP doesn't protect against activity within a project, such as one App Engine service accessing another service in the same project.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference-required-2`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- If a script handler generates a response larger than this limit, the server sends back an empty response with a 500 Internal Server Error status code.
- App Engine runs multiple instances of your application, and each instance has its own web server for handling requests.
- When deploying to Google App Engine, a webserver process such as Gunicorn will serve the app.
- See the License for the specific language governing permissions and limitations under the License. from flask import Flask If entrypoint is not defined in app.yaml, App Engine will look for an app called app in main.py. app = Flask ( name ) @app . route ( "/" ) def hello (): """Return a friendly HTTP greeting.

