---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.897Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Custom domains and SSL certificate management via Admin API and gcloud"
feature_slug: "custom-domains-and-ssl-certificate-management-via-admin-api-and-gcloud"
latest_feature_date: "2017-06-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/getting-started"
keywords:
  - "custom"
  - "domains"
  - "ssl"
  - "certificate"
  - "management"
  - "via"
  - "admin"
  - "gcloud"
---

# Custom domains and SSL certificate management via Admin API and gcloud

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

Beta-level features were enabled in the Admin API and gcloud CLI to create and manage custom domains and SSL certificates.

## Extended Definition

Beta-level features were enabled in the Admin API and gcloud CLI to create and manage custom domains and SSL certificates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)

## Supporting Pages

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Soft routing does not apply to custom domains; requests to them will return a HTTP 404 status code if the hostname is invalid.
- You can use the simple " . " URL notation with your own custom domains and with HTTP requests.
- For example, you can create a dispatch file to route mobile requests like https://simple-sample.uc.r.appspot.com/mobile/ to a mobile frontend, and route worker requests like https://simple-sample.uc.r.appspot.com/work/ to a static backend: dispatch: Send all mobile traffic to the mobile frontend. - url: " /mobile/ " service: mobile-frontend Send all work to the one static backend. - url: " /work/ " service: static-backend Deploying the dispatch file To deploy the dispatch file using gcloud, run the following command: gcloud app deploy dispatch.yaml Routing with Cloud Load Balancing Cloud Load Balancing is a separate product that enables advanced network configurations for all of your applications running on Google Cloud.
- To retrieve the IDs of your app's services and versions, you can use any of the following tools: Console In the Google Cloud console, you can view the corresponding Instances , Services , and Versions pages. gcloud Run the gcloud app instances list command to list the resource IDs within a specific Google Cloud project.

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

### "An Overview of the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- Source ID: `site-docs-reference-2`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Technology areas App Engine Admin API Overview Send feedback An Overview of the Admin API Stay organized with collections Save and categorize content based on your preferences.
- The Admin API provides programmatic access to several of the App Engine administrative operations that are found in the Google Cloud console .
- The App Engine Admin API is a RESTful API for managing your App Engine applications regardless of programming language.
- With the Admin API, you can manage your App Engine applications in manners that best suit your environment or process.

