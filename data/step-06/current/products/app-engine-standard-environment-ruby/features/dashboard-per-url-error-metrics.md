---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:18:25.421Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Dashboard per-URL error metrics"
feature_slug: "dashboard-per-url-error-metrics"
latest_feature_date: "2016-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
keywords:
  - "dashboard"
  - "server"
  - "errors"
  - "client"
  - "metrics"
  - "error"
---

# Dashboard per-URL error metrics

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Server Errors and Client Errors in the App Engine dashboard more accurately reflect per-URL status errors.

## Extended Definition

Server Errors and Client Errors in the App Engine dashboard more accurately reflect per-URL status errors.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Errors Service account needs Service Agent role error If you use the Restrict Resource Service Usage organization policy constraint to block Cloud Deployment Manager ( deploymentmanager.googleapis.com ), you might see the following error message: Serverless VPC Access service account (service-<PROJECT NUMBER>@gcp-sa-vpcaccess.iam.gserviceaccount.com) needs Serverless VPC Access Service Agent role in the project.
- Connection refused error If you receive connection refused or connection timeout errors that degrade network performance, your connections could be growing without limit across invocations of your serverless application.
- To display charts for the connector's throughput, number of instances, and CPU utilization metrics over time by using the Google Cloud console: Go to the Serverless VPC Access overview page.
- Once applied, requests that violate a policy that enforces a custom constraint show an error message in the gcloud CLI and in Serverless VPC Access logs.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc)
- Source ID: `site-docs-reference-4`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Errors Service account needs Service Agent role error If you use the Restrict Resource Service Usage organization policy constraint to block Cloud Deployment Manager ( deploymentmanager.googleapis.com ), you might see the following error message: Serverless VPC Access service account (service-<PROJECT NUMBER>@gcp-sa-vpcaccess.iam.gserviceaccount.com) needs Serverless VPC Access Service Agent role in the project.
- Connection refused error If you receive connection refused or connection timeout errors that degrade network performance, your connections could be growing without limit across invocations of your serverless application.
- To display charts for the connector's throughput, number of instances, and CPU utilization metrics over time by using the Google Cloud console: Go to the Serverless VPC Access overview page.
- Once applied, requests that violate a policy that enforces a custom constraint show an error message in the gcloud CLI and in Serverless VPC Access logs.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Response headers that exceed this limit will return HTTP 502 errors, with logs showing upstream sent too big header while reading response header from upstream .
- If a script handler generates a response larger than this limit, the server sends back an empty response with a 500 Internal Server Error status code.
- Requests to these runtimes with header fields exceeding 8 kilobytes will return HTTP 400 errors.
- Depending on a variety of factors, such as which type of response data is cached first, which Vary headers you have specified in the response, and which headers are included in the request, a client could request compressed data but receive uncompressed data, and the other way around.

