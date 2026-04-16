---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:24.940Z"
product_name: "Cloud Domains"
product_slug: "cloud-domains"
feature_name: "Renew recently expired domains"
feature_slug: "renew-recently-expired-domains"
latest_feature_date: "2024-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/domains/docs/renew-expired-domain"
  - "https://docs.cloud.google.com/domains/docs/overview"
  - "https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient"
keywords:
  - "renew"
  - "recently"
  - "expired"
  - "domains"
  - "within"
  - "the"
  - "past"
  - "30"
---

# Renew recently expired domains

Product: Cloud Domains
Coverage: MEDIUM

## Step 02 Summary

Domains expired within the past 30 days can be renewed using the Google Cloud CLI or Cloud Domains API.

## Extended Definition

Domains expired within the past 30 days can be renewed using the Google Cloud CLI or Cloud Domains API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/domains/docs/renew-expired-domain](https://docs.cloud.google.com/domains/docs/renew-expired-domain)
- [https://docs.cloud.google.com/domains/docs/overview](https://docs.cloud.google.com/domains/docs/overview)
- [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient)

## Supporting Pages

### Renew a recently expired domain \_|\_ Cloud Domains \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/domains/docs/renew-expired-domain](https://docs.cloud.google.com/domains/docs/renew-expired-domain)
- Source ID: `site-iam-reference`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking Cloud Domains Guides Send feedback Renew a recently expired domain Stay organized with collections Save and categorize content based on your preferences.
- API Use the registrations.renewDomain method : POST https://domains.googleapis.com/v1/projects/ PROJECT ID /locations/global/registrations/ DOMAIN NAME :renewDomain { "yearlyPrice": { "currencyCode": " CURRENCY CODE ", "units": NUMBER OF UNITS } } Replace the following: PROJECT ID : the name of your project DOMAIN NAME : the name of the domain that you want to renew CURRENCY CODE : the three-letter currency code defined in ISO 4217—for example, USD .
- Permissions domains.registrations.configureManagement Roles roles/domains.admin gcloud Use the gcloud domains registrations renew-domain command : gcloud domains registrations renew-domain DOMAIN NAME \ [--yearly-price= YEARLY PRICE ] Replace the following: DOMAIN NAME : the name of the registered domain that you want to renew—for example, example.app .
- For more information about how this change affects Cloud Domains, see Cloud Domains feature deprecations , Renew an expired domain registration , and Squarespace purchase of Google Domains FAQ .

### Cloud Domains overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/domains/docs/overview](https://docs.cloud.google.com/domains/docs/overview)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your domain expired within the past 30 days, you can renew it using the Google Cloud CLI or the Cloud Domains API.
- For more information about how this change affects Cloud Domains, see Cloud Domains feature deprecations , Renew an expired domain registration , and Squarespace purchase of Google Domains FAQ .
- Automatic renewal After you set up Cloud Billing and complete your domain registration, Cloud Domains automatically sets up the registration to renew every year.
- For more information, see Renew a recently expired domain .

### "Class DomainsAsyncClient (1.13.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Registration resources using Monthly billing </domains/pricing#billing-models> , this method works if: state is EXPORTED with expire time in the past state is REGISTRATION FAILED state is TRANSFER FAILED When an active registration is successfully deleted, you can continue to use the domain in Google Domains <https://domains.google/> until it expires.
- This method works on any Registration resource using Subscription or Commitment billing </domains/pricing#billing-models> , provided that the resource was created at least 1 day in the past.
- The domain does not renew automatically unless the new owner sets up billing in Google Domains.
- The domain does not renew automatically unless the new owner sets up billing in Google Domains.

### "Class DomainsClient (1.13.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient)
- Source ID: `site-python-reference`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Registration resources using Monthly billing </domains/pricing#billing-models> , this method works if: state is EXPORTED with expire time in the past state is REGISTRATION FAILED state is TRANSFER FAILED When an active registration is successfully deleted, you can continue to use the domain in Google Domains <https://domains.google/> until it expires.
- This method works on any Registration resource using Subscription or Commitment billing </domains/pricing#billing-models> , provided that the resource was created at least 1 day in the past.
- The domain does not renew automatically unless the new owner sets up billing in Google Domains.
- The domain does not renew automatically unless the new owner sets up billing in Google Domains.

