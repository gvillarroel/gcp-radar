---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.563Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing detailed export Cloud Logging log bucket granularity"
feature_slug: "cloud-billing-detailed-export-cloud-logging-log-bucket-granularity"
latest_feature_date: "2024-06-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary"
  - "https://docs.cloud.google.com/billing/docs/authentication"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_catalog.CloudCatalogClient"
keywords:
  - "billing"
  - "detailed"
  - "export"
  - "logging"
  - "log"
  - "bucket"
  - "granularity"
  - "now"
---

# Cloud Billing detailed export Cloud Logging log bucket granularity

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing detailed export now includes granular Cloud Logging log bucket cost data that can be filtered by the resource.global_name field.

## Extended Definition

Cloud Billing detailed export now includes granular Cloud Logging log bucket cost data that can be filtered by the resource.global_name field.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary](https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary)
- [https://docs.cloud.google.com/billing/docs/authentication](https://docs.cloud.google.com/billing/docs/authentication)
- [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_catalog.CloudCatalogClient](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_catalog.CloudCatalogClient)

## Supporting Pages

### "Analyze your AI spend with the AI Cost Summary Agent \_|\_ Cloud Billing\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary](https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary)
- Source ID: `site-docs-root-2`
- Final score: 64
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Permissions required to use the AI Cost Summary Agent To use the AI Cost Summary widget, you need a role that includes the following permissions on the Cloud Billing account: billing.anomalies.list billing.billingAccountPrices.list billing.billingAccountServices.list billing.billingAccountSkus.list To gain these permissions using a predefined role, ask your administrator to grant you one of the following Cloud Billing IAM role on your Cloud Billing account: Billing Account Viewer Billing Account Administrator Analyze your AI spend The AI Cost Summary Agent is presented as a widget on the Billing Overview page for your Cloud Billing account.
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback Analyze your AI spend with the AI Cost Summary Agent Stay organized with collections Save and categorize content based on your preferences.
- To use the AI Cost Summary Agent, complete the following steps: In the Google Cloud console, go to the Billing Overview page for your Cloud Billing account.
- Go to your Cloud Billing account At the prompt, choose the Cloud Billing account for which you'd like to analyze your AI spend.

### "Class CloudCatalogClient (1.18.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_catalog.CloudCatalogClient](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_catalog.CloudCatalogClient)
- Source ID: `site-python-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Exiting the with block will CLOSE the transport and may cause errors in other clients! common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import billing v1 def sample list services(): Create a client client = billing v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import billing v1 def sample list skus(): Create a client client = billing v1 .
- ListSkusRequest ( parent="parent value", ) Make the request page result = client. list skus (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.billing v1.types.ListSkusRequest , dict] The request object.

### Authenticate to Cloud Billing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/authentication](https://docs.cloud.google.com/billing/docs/authentication)
- Source ID: `site-api-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- You can access the API in the following ways: Client libraries Google Cloud CLI REST Client libraries The Cloud Billing Budget client libraries provide high-level language support for authenticating to Cloud Billing programmatically.
- Home Documentation Costs and usage management Cloud Billing APIs & Reference Send feedback Authenticate to Cloud Billing Stay organized with collections Save and categorize content based on your preferences.
- Google Cloud CLI When you use the gcloud CLI to access Cloud Billing, you log in to the gcloud CLI with a user account, which provides the credentials used by the gcloud CLI commands.
- User credentials and ADC for Cloud Billing One way to provide credentials to ADC is to use the gcloud CLI to insert your user credentials into a credential file.

