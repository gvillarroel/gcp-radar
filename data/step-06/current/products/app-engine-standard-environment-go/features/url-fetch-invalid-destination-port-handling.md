---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.755Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "URL Fetch invalid destination port handling"
feature_slug: "url-fetch-invalid-destination-port-handling"
latest_feature_date: "2016-05-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "url"
  - "fetch"
  - "invalid"
  - "destination"
  - "port"
  - "handling"
  - "app"
  - "engine"
---

# URL Fetch invalid destination port handling

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

App Engine URL Fetch now always returns INVALID_URL for requests targeting disallowed destination ports.

## Extended Definition

App Engine URL Fetch now always returns INVALID_URL for requests targeting disallowed destination ports.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses](https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "Outbound IP addresses for App Engine services \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses](https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses)
- Source ID: `site-docs-reference-2`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For information about running this script, see How to run . from future import print function import json try : from urllib import urlopen except ImportError : from urllib.request import urlopen from urllib.error import HTTPError import netaddr IPRANGE URLS = { "goog" : "https://www.gstatic.com/ipranges/goog.json" , "cloud" : "https://www.gstatic.com/ipranges/cloud.json" , } def read url ( url ): try : return json . loads ( urlopen ( url ) . read ()) except ( IOError , HTTPError ): print ( "ERROR: Invalid HTTP response from %s " % url ) except json . decoder .
- The outbound services in the App Engine standard environment, such as the URL Fetch, Sockets, and Mail APIs, make use of a large pool of IP addresses.
- If you need to know the IP addresses associated with outbound traffic from your service, you can either find the current IP address ranges that include the App Engine IP addresses, or set up a static IP address for your service.
- IP addresses for App Engine services You can find the current IP address ranges for App Engine services by using two json files that are published by Google: Google publishes a list of Google-owned IP addresses in goog.json .

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. from flask import Flask If entrypoint is not defined in app.yaml, App Engine will look for an app called app in main.py. app = Flask ( name ) @app . route ( "/" ) def hello (): """Return a friendly HTTP greeting.
- You can configure startup instructions by adding entrypoint to app.yaml. app . run ( host = "127.0.0.1" , port = 8080 , debug = True ) Quotas and limits App Engine automatically allocates resources to your application as traffic increases.
- Streaming Responses App Engine doesn't support streaming responses where data is sent in incremental chunks to the client while a request is being processed.
- Handling request timeouts App Engine is optimized for applications with short-lived requests, typically those that take a few hundred milliseconds.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Don't change the specified ports. gcloud compute firewall-rules create serverless-to-vpc-connector \ --allow tcp:667,udp:665-666,icmp \ --source-ranges = 35 .199.224.0/19 \ --direction = INGRESS \ --target-tags vpc-connector \ --network = VPC NETWORK gcloud compute firewall-rules create vpc-connector-to-serverless \ --allow tcp:667,udp:665-666,icmp \ --destination-ranges = 35 .199.224.0/19 \ --direction = EGRESS \ --target-tags vpc-connector \ --network = VPC NETWORK gcloud compute firewall-rules create vpc-connector-health-checks \ --allow tcp:667 \ --source-ranges = 35 .191.0.0/16,35.191.192.0/18,130.211.0.0/22 \ --direction = INGRESS \ --target-tags vpc-connector \ --network = VPC NETWORK Replace VPC NETWORK with the name of the VPC network to attach your connector to.
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Configure your service to use a connector After you have created a Serverless VPC Access connector, you must configure each service in your App Engine app that you want to connect to your VPC network.
- Create a connector using an existing subnet : gcloud compute networks vpc-access connectors create CONNECTOR NAME \ --region REGION \ --subnet SUBNET NAME \ --subnet-project HOST PROJECT ID \ --min-instances MIN \ --max-instances MAX \ --machine-type MACHINE TYPE Replace the following: CONNECTOR NAME : a name for your connector, matching Compute Engine naming conventions , with the additional requirements that the name must be less than 21 characters long, and that hyphens (-) count as two characters.
- To configure the egress behavior of your App Engine service: Add the egress setting attribute to the vpc access connector field of your service's app.yaml file: vpc access connector : name : projects/ PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME egress setting : EGRESS SETTING Replace: PROJECT ID with your Google Cloud project ID REGION with the region your connector is in CONNECTOR NAME with the name of your connector EGRESS SETTING with one of the following: private-ranges-only Default.

