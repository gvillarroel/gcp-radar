---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:18:25.419Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Custom domain and SSL certificate management via Admin API and gcloud"
feature_slug: "custom-domain-and-ssl-certificate-management-via-admin-api-and-gcloud"
latest_feature_date: "2017-06-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
keywords:
  - "certificate"
  - "management"
  - "domain"
  - "gcloud"
  - "custom"
  - "admin"
---

# Custom domain and SSL certificate management via Admin API and gcloud

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Beta Admin API and gcloud features let you create and manage custom domains and SSL certificates.

## Extended Definition

Beta Admin API and gcloud features let you create and manage custom domains and SSL certificates.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)

## Supporting Pages

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, to describe version 20191023t101741 for the default service, enter gcloud app versions describe 20191023t101741 --service=default Domain name is included in the request data The domain name used for the request is included in the request data that is passed to your app.
- Example URLs Here are some examples of URLs for App Engine, showing both the appspot.com domain that App Engine assigns to your app and a custom domain, which you can set up for your app .
- REGION ID .r.appspot.com https:// CUSTOM DOMAIN Requests are received by any version that is configured for traffic in the default service.
- CUSTOM DOMAIN If you are using manually-scaled services , you can target and send a request to a instance by including the instance ID.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- To perform these steps, you must have one of the following roles on the host project: Owner role ( roles/owner ) Compute Security Admin role ( roles/compute.securityAdmin ) Custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled For a basic configuration, apply the rules to allow serverless resources in any service project connected to the Shared VPC network to send requests to any resource in the network.
- You must have one of the following Identity and Access Management (IAM) roles: Compute Security Admin role Custom IAM role with the compute.firewalls.create permission enabled Deny connector traffic across your VPC network.
- You must have one of the following Identity and Access Management (IAM) roles: Compute Security Admin role Custom IAM role with the compute.firewalls.create permission enabled Deny connector traffic across your VPC network.
- You must have one of the following Identity and Access Management (IAM) roles: Compute Security Admin role Custom IAM role with the compute.firewalls.create permission enabled Deny egress traffic from your connector.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc)
- Source ID: `site-docs-reference-4`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- To perform these steps, you must have one of the following roles on the host project: Owner role ( roles/owner ) Compute Security Admin role ( roles/compute.securityAdmin ) Custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled For a basic configuration, apply the rules to allow serverless resources in any service project connected to the Shared VPC network to send requests to any resource in the network.
- You must have one of the following Identity and Access Management (IAM) roles: Compute Security Admin role Custom IAM role with the compute.firewalls.create permission enabled Deny connector traffic across your VPC network.
- You must have one of the following Identity and Access Management (IAM) roles: Compute Security Admin role Custom IAM role with the compute.firewalls.create permission enabled Deny connector traffic across your VPC network.
- You must have one of the following Identity and Access Management (IAM) roles: Compute Security Admin role Custom IAM role with the compute.firewalls.create permission enabled Deny egress traffic from your connector.

