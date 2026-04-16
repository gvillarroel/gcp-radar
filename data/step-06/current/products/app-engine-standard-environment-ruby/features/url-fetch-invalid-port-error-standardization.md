---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:41.409Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "URL Fetch invalid port error standardization"
feature_slug: "url-fetch-invalid-port-error-standardization"
latest_feature_date: "2016-05-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled"
keywords:
  - "url"
  - "fetch"
  - "invalid"
  - "port"
  - "error"
  - "standardization"
  - "requests"
  - "disallowed"
---

# URL Fetch invalid port error standardization

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

URL Fetch requests to disallowed ports now consistently return an INVALID_URL error.

## Extended Definition

URL Fetch requests to disallowed ports now consistently return an INVALID_URL error.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)

## Supporting Pages

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-root-2`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- All subsequent requests for this URL that contain the Accept-Encoding: gzip header will receive the gzipped data from the cache until the cache becomes invalidated (due to the content changing after the cache expires).
- The Google Cloud console Quota Details page also reports Secure Requests , Secure Incoming Bandwidth , and Secure Outgoing Bandwidth as separate values for informational purposes.
- All subsequent requests for this URL that don't contain the Accept-Encoding header receive uncompressed data from the cache until the cache becomes invalidated.
- Requests to these runtimes with header fields exceeding 8 kilobytes will return HTTP 400 errors.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-root-2`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Once applied, requests that violate a policy that enforces a custom constraint show an error message in the gcloud CLI and in Serverless VPC Access logs.
- Using the urlfetch library ignores egress settings, and requests will not route through a Serverless VPC Access connector.
- Don't change the specified ports. gcloud compute firewall-rules create serverless-to-vpc-connector \ --allow tcp:667,udp:665-666,icmp \ --source-ranges = 35 .199.224.0/19 \ --direction = INGRESS \ --target-tags vpc-connector \ --network = VPC NETWORK gcloud compute firewall-rules create vpc-connector-to-serverless \ --allow tcp:667,udp:665-666,icmp \ --destination-ranges = 35 .199.224.0/19 \ --direction = EGRESS \ --target-tags vpc-connector \ --network = VPC NETWORK gcloud compute firewall-rules create vpc-connector-health-checks \ --allow tcp:667 \ --source-ranges = 35 .191.0.0/16,35.191.192.0/18,130.211.0.0/22 \ --direction = INGRESS \ --target-tags vpc-connector \ --network = VPC NETWORK Replace VPC NETWORK with the name of the VPC network to attach your connector to.
- To perform these steps, you must have one of the following roles on the host project: Owner role ( roles/owner ) Compute Security Admin role ( roles/compute.securityAdmin ) Custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled For a basic configuration, apply the rules to allow serverless resources in any service project connected to the Shared VPC network to send requests to any resource in the network.

### "How requests are handled \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Google Cloud console Quota Details page also reports Secure Requests , Secure Incoming Bandwidth , and Secure Outgoing Bandwidth as separate values for informational purposes.
- Unsupported HTTP requests The following features are not supported by App Engine flexible environment: HTTP/2 traffic to the backend service.
- When deploying to Google App Engine, a webserver process such as Gunicorn will serve the app. app . run ( host = "127.0.0.1" , port = 8080 , debug = True ) Quotas and limits App Engine automatically allocates resources to your application as traffic increases.
- See Python runtime for more information about using the new versions. v3.8 and later from flask import Flask app = Flask ( name ) @app . route ( "/" ) def hello () - > str : """Return a friendly HTTP greeting.

