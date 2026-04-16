---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.312Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "App Engine Admin API"
feature_slug: "app-engine-admin-api"
latest_feature_date: "2016-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/getting-started"
  - "https://docs.cloud.google.com/appengine/docs/developers-console"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "programmatic"
  - "management"
  - "resources"
  - "applications"
  - "provides"
  - "admin"
---

# App Engine Admin API

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

The App Engine Admin API provides programmatic management of App Engine applications and resources.

## Extended Definition

The App Engine Admin API provides programmatic management of App Engine applications and resources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "An Overview of the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Admin API provides programmatic access to several of the App Engine administrative operations that are found in the Google Cloud console .
- The App Engine Admin API is a RESTful API for managing your App Engine applications regardless of programming language.
- With the Admin API, you can manage your App Engine applications in manners that best suit your environment or process.
- For example, the Admin API provides you with: An integration point for your development and build tools.

### "Setting up your Google Cloud project for App Engine \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- Source ID: `site-docs-reference-4`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Managing billing Use the Billing page to manage your billing accounts: Go to the Billing page in the Google Cloud console: Go to Billing Select the account that you want to manage and then navigate to the corresponding page to perform the following management tasks: See an overview of your billing account, make payments, and add billing account administrators from the Overview page.
- API To programmatically create a Google Cloud project and App Engine application, you use both the Cloud Resource Manager API and App Engine Admin API: To create a Google Cloud project, see Creating a New Project .
- Shutting down a project You can disable billing and release all the Google Cloud resources that are being used in your Google Cloud project by shutting down that project. gcloud After installing the Google Cloud CLI , you run the following gcloud command to shut down a Google Cloud project: gcloud projects delete PROJECT ID Replace PROJECT ID with the Google Cloud project ID.
- You can perform all of your administrative tasks from the Google Cloud CLI and the App Engine Admin API, including the common tasks covered in this topic.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- To perform these steps, you must have one of the following roles on the host project: Owner role ( roles/owner ) Compute Security Admin role ( roles/compute.securityAdmin ) Custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled For a basic configuration, apply the rules to allow serverless resources in any service project connected to the Shared VPC network to send requests to any resource in the network.
- As the organization policy administrator , you can define an organization policy, which is a set of restrictions called constraints that apply to Google Cloud resources and descendants of those resources in the Google Cloud resource hierarchy .
- You must have one of the following Identity and Access Management (IAM) roles: Compute Security Admin role Custom IAM role with the compute.firewalls.create permission enabled Deny connector traffic across your VPC network.
- You must have one of the following Identity and Access Management (IAM) roles: Compute Security Admin role Custom IAM role with the compute.firewalls.create permission enabled Deny connector traffic across your VPC network.

