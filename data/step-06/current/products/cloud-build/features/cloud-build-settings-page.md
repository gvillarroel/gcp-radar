---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.908Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build settings page"
feature_slug: "cloud-build-settings-page"
latest_feature_date: "2019-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/developers-console"
  - "https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "permissions"
  - "settings"
  - "managing"
  - "account"
  - "page"
  - "console"
  - "added"
---

# Cloud Build settings page

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build added a Settings page in the Google Cloud Console for managing service account permissions.

## Extended Definition

Cloud Build added a Settings page in the Google Cloud Console for managing service account permissions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- Source ID: `site-docs-reference-2`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For modifying permissions, deleting, and restoring your service accounts, see Creating and managing service accounts .
- For example, if a version requires permissions that differ from the app-level default service account, you can assign a service account that is specific to that version.
- If you deploy an existing application in a new project created after this date, the service account might not have the required permissions to deploy the app.
- If you deploy an existing application in a new project created after this date, the service account might not have the required permissions to deploy the app.

### "Setting up your Google Cloud project for App Engine \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- Source ID: `site-docs-reference-2`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Managing billing Use the Billing page to manage your billing accounts: Go to the Billing page in the Google Cloud console: Go to Billing Select the account that you want to manage and then navigate to the corresponding page to perform the following management tasks: See an overview of your billing account, make payments, and add billing account administrators from the Overview page.
- To create a budget and set alerts in a Google Cloud project: In the Google Cloud console, go to the Billing page: Go to Billing Click the billing account for which you want to create a budget.
- Configure your payment account and contacts on the Payment settings page.
- Before you can deploy your apps to the App Engine standard environment, you typically need to create or set up the following: A Google Cloud project An App Engine application A billing account Creating a project and application You can select or create a new Google Cloud project and App Engine application to create and manage a collection of settings, credentials, and your app's metadata.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference-2`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To delete a connector, use the Google Cloud console or the Google Cloud CLI: Console Go to the Serverless VPC Access overview page in the Google Cloud console: Go to Serverless VPC Access Select the connector you want to delete.
- To display charts for the connector's throughput, number of instances, and CPU utilization metrics over time by using the Google Cloud console: Go to the Serverless VPC Access overview page.
- Troubleshooting Service account permissions To perform operations in your Google Cloud project, Serverless VPC Access uses the Serverless VPC Access Service Agent service account.
- Set up a custom constraint Console To create a custom constraint, do the following: In the Google Cloud console, go to the Organization policies page.

