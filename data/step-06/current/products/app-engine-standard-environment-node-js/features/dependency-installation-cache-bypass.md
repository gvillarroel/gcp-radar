---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:34:18.688Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Dependency installation cache bypass"
feature_slug: "dependency-installation-cache-bypass"
latest_feature_date: "2018-09-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app"
keywords:
  - "dependency"
  - "installation"
  - "cache"
  - "bypass"
  - "deployment"
  - "flag"
  - "can"
  - "force"
---

# Dependency installation cache bypass

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

A deployment flag can force Node.js dependencies to be reinstalled instead of using the build cache.

## Extended Definition

A deployment flag can force Node.js dependencies to be reinstalled instead of using the build cache.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app](https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- To enforce the organization policy in dry-run mode , run the following command with the dryRunSpec flag: gcloud org-policies set-policy POLICY PATH --update-mask = dryRunSpec Replace POLICY PATH with the full path to your organization policy YAML file.
- After you verify that the organization policy in dry-run mode works as intended, set the live policy by clicking Set policy . gcloud To create an organization policy with boolean rules, create a policy YAML file that references the constraint: name : projects/ PROJECT ID /policies/ CONSTRAINT NAME spec : rules : - enforce : true dryRunSpec : rules : - enforce : true Replace the following: PROJECT ID : the project that you want to enforce your constraint on.
- Use the following gcloud command to delete a connector: gcloud compute networks vpc-access connectors delete CONNECTOR NAME --region= REGION Replace the following: CONNECTOR NAME with the name of the connector you want to delete REGION with the region where the connector is located Manage custom constraints for projects This section describes how to create custom constraints for Serverless VPC Access connectors and enforce them at the project level.
- Errors Service account needs Service Agent role error If you use the Restrict Resource Service Usage organization policy constraint to block Cloud Deployment Manager ( deploymentmanager.googleapis.com ), you might see the following error message: Serverless VPC Access service account (service-<PROJECT NUMBER>@gcp-sa-vpcaccess.iam.gserviceaccount.com) needs Serverless VPC Access Service Agent role in the project.

### "Build a Node.js app on App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app](https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app)
- Source ID: `site-docs-reference-2`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Specifying dependencies \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies)
- Source ID: `site-docs-reference-3`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- To install an uncached version of the dependency, use the command: gcloud app deploy -- no - cache Support and limitations for the package.json file in the standard environment: You can use any Linux-compatible Node.js package with App Engine, including packages that require native (C) extensions.
- For example, if you want to specify Lodash as a dependency, your package.json file might look as follows: { "dependencies" : { "lodash" : "^4.0.1" } } During deployment, the Node.js runtime automatically installs all dependencies declared in your package.json file.
- By default, App Engine caches fetched dependencies to reduce build times.

