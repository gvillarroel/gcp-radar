---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.296Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Serverless VPC Access"
feature_slug: "serverless-vpc-access"
latest_feature_date: "2019-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/connecting-shared-vpc"
keywords:
  - "connect"
  - "resources"
  - "enables"
  - "serverless"
  - "access"
---

# Serverless VPC Access

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

Serverless VPC Access enables App Engine services to connect to resources in a VPC network.

## Extended Definition

Serverless VPC Access enables App Engine services to connect to resources in a VPC network.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/go/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/go/connecting-shared-vpc)

## Supporting Pages

### "Connecting to a Shared VPC network \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc)
- Source ID: `site-docs-reference`
- Final score: 183
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can either set up connectors in each service project that has standard environment resources that need access to your network, or you can set up shared connectors in the host project.
- Security: Allows you to follow the "principle of least privilege." Connectors must be granted access to the resources in your Shared VPC network that they need to reach.
- If your organization uses Shared VPC , you can connect App Engine standard environment services directly to your Shared VPC network by using Serverless VPC Access .
- Comparison of configuration methods For Shared VPC, Serverless VPC Access connectors can be configured in two different ways.

### "Connecting to a Shared VPC network \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/go/connecting-shared-vpc)
- Source ID: `site-docs-reference-4`
- Final score: 183
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can either set up connectors in each service project that has standard environment resources that need access to your network, or you can set up shared connectors in the host project.
- Security: Allows you to follow the "principle of least privilege." Connectors must be granted access to the resources in your Shared VPC network that they need to reach.
- If your organization uses Shared VPC , you can connect App Engine standard environment services directly to your Shared VPC network by using Serverless VPC Access .
- Comparison of configuration methods For Shared VPC, Serverless VPC Access connectors can be configured in two different ways.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 183
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To perform these steps, you must have one of the following roles on the host project: Owner role ( roles/owner ) Compute Security Admin role ( roles/compute.securityAdmin ) Custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled For a basic configuration, apply the rules to allow serverless resources in any service project connected to the Shared VPC network to send requests to any resource in the network.
- This page shows how to use Serverless VPC Access to connect your App Engine services in the standard environment directly to your VPC network, allowing access to Compute Engine VM instances, Memorystore instances, and any other resources with an internal IP address.
- For Shared VPC users who set up connectors in the Shared VPC host project, you can use the command gcloud compute networks vpc-access connectors describe to list the projects in which there are serverless resources that use a given connector.
- To limit the resources that your serverless environment can reach by using Serverless VPC Access, see Restrict connector VM access to VPC network resources .

