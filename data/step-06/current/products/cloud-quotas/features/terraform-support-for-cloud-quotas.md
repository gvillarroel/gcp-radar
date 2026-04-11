---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:26:31.358Z"
product_name: "Cloud Quotas"
product_slug: "cloud-quotas"
feature_name: "Terraform support for Cloud Quotas"
feature_slug: "terraform-support-for-cloud-quotas"
latest_feature_date: "2024-04-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/docs/quotas/terraform-support-for-cloud-quotas"
  - "https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient"
keywords:
  - "terraform"
  - "for"
  - "quotas"
  - "can"
  - "be"
  - "managed"
  - "with"
---

# Terraform support for Cloud Quotas

Product: Cloud Quotas
Coverage: LOW

## Step 02 Summary

Cloud Quotas can be managed with Terraform.

## Extended Definition

Cloud Quotas can be managed with Terraform.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/docs/quotas/terraform-support-for-cloud-quotas](https://docs.cloud.google.com/docs/quotas/terraform-support-for-cloud-quotas)
- [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient)

## Supporting Pages

### Terraform support for Cloud Quotas \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/quotas/terraform-support-for-cloud-quotas](https://docs.cloud.google.com/docs/quotas/terraform-support-for-cloud-quotas)
- Source ID: `site-docs-reference`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To use Terraform with Cloud Quotas, create a configuration file to describe your infrastructure, and then apply the configuration file to create an execution plan and perform operations to provision your infrastructure.
- You can use Terraform to do the following with Cloud Quotas: Retrieve the QuotaInfo data source of a quota for a project, folder or organization.
- Before you begin Before you begin, you need access to Terraform: If you're getting started, note that Cloud Shell has Terraform already integrated, and you can follow this step by step tutorial, Deploy a basic Flask web server using Terraform and Cloud Shell.
- Home Documentation Cloud Quotas Guides Send feedback Terraform support for Cloud Quotas Stay organized with collections Save and categorize content based on your preferences.

### "Manage quotas using the gcloud beta CLI \_|\_ Cloud Quotas \_|\_ Google\

- URL: [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- The Limit name column shows the quota ID. gcloud To find the quota ID value by using the gcloud CLI, run the following command to list your quota information for the specified service: Enter the following gcloud CLI command in a terminal window: gcloud beta quotas info list --service = SERVICE NAME --project = PROJECT ID OR NUMBER \ --billing-project = BILLING PROJECT ID OR NUMBER Replace the following: SERVICE NAME : the service name with quotas that you want to see—for example, the service name for Compute Engine is compute.googleapis.com .
- View quota information for an organization To view the same service's quota details for an organization, run the following command: gcloud beta quotas info list --service = SERVICE NAME --organization = ORGANIZATION ID \ --billing-project = BILLING PROJECT ID OR NUMBER Replace the following: SERVICE NAME : the service name with quotas that you want to see—for example, the service name for Compute Engine is compute.googleapis.com .
- Check for existing preferences with pending quota adjustments To check for existing preferences with pending quota adjustments, add the --reconciling-only=true flag as shown in the following command: gcloud beta quotas preferences list --project = PROJECT ID OR NUMBER --reconciling-only = true \ --billing-project = BILLING PROJECT ID OR NUMBER Replace the following: PROJECT ID OR NUMBER : the project ID or project number.
- For details, see the following Compute Engine sections: Allocation quotas The gcloud CLI compute overview The gcloud CLI compute section of the Google Cloud SDK reference What's next To troubleshoot issues with gcloud beta quotas commands, see Troubleshooting gcloud CLI errors .

### "Class CloudQuotasAsyncClient (0.6.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient)
- Source ID: `site-python-reference`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example names: projects/123/locations/global/services/compute.googleapis.com folders/234/locations/global/services/compute.googleapis.com organizations/345/locations/global/services/compute.googleapis.com This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- An example name: projects/123/locations/global/services/compute.googleapis.com/quotaInfos/CpusPerProjectPerRegion This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Name of the resource Example name: projects/123/locations/global/quota preferences/my-config-for-us-east1 This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Example parents: projects/123/locations/global This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

