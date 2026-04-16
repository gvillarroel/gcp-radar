---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:56:05.594Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "URL Fetch invalid port error handling"
feature_slug: "url-fetch-invalid-port-error-handling"
latest_feature_date: "2016-05-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
keywords:
  - "url"
  - "fetch"
  - "invalid"
  - "port"
  - "error"
  - "handling"
  - "now"
  - "consistently"
---

# URL Fetch invalid port error handling

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

URL Fetch now consistently returns INVALID_URL for requests to disallowed ports outside documented ranges.

## Extended Definition

URL Fetch now consistently returns INVALID_URL for requests to disallowed ports outside documented ranges.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)

## Supporting Pages

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. from flask import Flask If entrypoint is not defined in app.yaml, App Engine will look for an app called app in main.py. app = Flask ( name ) @app . route ( "/" ) def hello (): """Return a friendly HTTP greeting.
- You can configure startup instructions by adding entrypoint to app.yaml. app . run ( host = "127.0.0.1" , port = 8080 , debug = True ) Quotas and limits App Engine automatically allocates resources to your application as traffic increases.
- When a service receives standard HTTP traffic at high volume while also serving Task queue or Cloud Tasks traffic at much lower volume, there is a disproportionate impact on the latency of the Task queue or the Cloud Tasks traffic.
- All subsequent requests for this URL that contain the Accept-Encoding: gzip header will receive the gzipped data from the cache until the cache becomes invalidated (due to the content changing after the cache expires).

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Don't change the specified ports. gcloud compute firewall-rules create serverless-to-vpc-connector \ --allow tcp:667,udp:665-666,icmp \ --source-ranges = 35 .199.224.0/19 \ --direction = INGRESS \ --target-tags vpc-connector \ --network = VPC NETWORK gcloud compute firewall-rules create vpc-connector-to-serverless \ --allow tcp:667,udp:665-666,icmp \ --destination-ranges = 35 .199.224.0/19 \ --direction = EGRESS \ --target-tags vpc-connector \ --network = VPC NETWORK gcloud compute firewall-rules create vpc-connector-health-checks \ --allow tcp:667 \ --source-ranges = 35 .191.0.0/16,35.191.192.0/18,130.211.0.0/22 \ --direction = INGRESS \ --target-tags vpc-connector \ --network = VPC NETWORK Replace VPC NETWORK with the name of the VPC network to attach your connector to.
- Errors Service account needs Service Agent role error If you use the Restrict Resource Service Usage organization policy constraint to block Cloud Deployment Manager ( deploymentmanager.googleapis.com ), you might see the following error message: Serverless VPC Access service account (service-<PROJECT NUMBER>@gcp-sa-vpcaccess.iam.gserviceaccount.com) needs Serverless VPC Access Service Agent role in the project.
- DESCRIPTION : a human-friendly description of the constraint to display as an error message when the policy is violated, for example, "Require network to not be set to default." This field has a maximum length of 2000 characters.
- Connection refused error If you receive connection refused or connection timeout errors that degrade network performance, your connections could be growing without limit across invocations of your serverless application.

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Some instance shutdown log messages you might see include: [ start ] Quitting on terminated signal [ INFO ] Handling signal : term [ INFO ] Worker exiting ( pid : 21 ) [ INFO ] Worker exiting ( pid : 24 ) [ INFO ] Shutting down : Master [ start ] Start program failed : termination triggered by nginx exit These log messages do not indicate any error condition but are indications of the normal instance shut down process.
- Scaling types App Engine supports the following scaling types , which controls how and when instances are created: Automatic (default) Basic Manual You specify the scaling type in your app's app.yaml .
- If your app doesn't return a request within this time limit, App Engine interrupts the request handler and emits an error for your code to handle.
- If your app doesn't return a request within this time limit, App Engine interrupts the request handler and emits an error for your code to handle.

