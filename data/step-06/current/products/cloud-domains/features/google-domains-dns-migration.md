---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:24.939Z"
product_name: "Cloud Domains"
product_slug: "cloud-domains"
feature_name: "Google Domains DNS migration"
feature_slug: "google-domains-dns-migration"
latest_feature_date: "2024-06-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/domains/docs/export-dns-settings"
  - "https://docs.cloud.google.com/domains/docs/faq"
  - "https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient"
keywords:
  - "domains"
  - "dns"
  - "migration"
  - "can"
  - "migrate"
  - "settings"
  - "and"
  - "export"
---

# Google Domains DNS migration

Product: Cloud Domains
Coverage: MEDIUM

## Step 02 Summary

Cloud Domains can migrate Google Domains DNS settings and export related domain and email-forwarding configurations.

## Extended Definition

Cloud Domains can migrate Google Domains DNS settings and export related domain and email-forwarding configurations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/domains/docs/export-dns-settings](https://docs.cloud.google.com/domains/docs/export-dns-settings)
- [https://docs.cloud.google.com/domains/docs/faq](https://docs.cloud.google.com/domains/docs/faq)
- [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient)

## Supporting Pages

### "Migrate your Google Domains DNS settings to Cloud DNS or another provider\

- URL: [https://docs.cloud.google.com/domains/docs/export-dns-settings](https://docs.cloud.google.com/domains/docs/export-dns-settings)
- Source ID: `site-iam-reference`
- Final score: 324
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes how to migrate your Google Domains DNS settings and export your domain and email forwarding configurations if you use Google Domains as your DNS provider.
- Home Documentation Networking Cloud Domains Guides Send feedback Migrate your Google Domains DNS settings to Cloud DNS or another provider Stay organized with collections Save and categorize content based on your preferences.
- If you don't use domain forwarding or email forwarding but use Google Domains as your DNS provider, you can Migrate your Google Domains DNS settings to Cloud DNS .
- If your domain uses Google Domains as your DNS provider, the dnsSettings section of the output looks similar to the following example: dnsSettings: googleDomainsDns: If your domain uses domain or email forwarding configurations, the dnsSettings section of the output looks similar to the following example: dnsSettings: ... googleDomainsRedirectsDataAvailable: true Migrate your Google Domains DNS settings to Cloud DNS To migrate your Google Domains DNS settings, follow these steps. gcloud Create a managed public zone for your domain.

### Squarespace purchase of Google Domains FAQ \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/domains/docs/faq](https://docs.cloud.google.com/domains/docs/faq)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To migrate your Google Domains DNS settings and export domain and email forwarding configurations, see Migrate Google Domains DNS settings .
- After your domain registrations and related data are migrated to Squarespace, Cloud Domains continues to support searching and registering new domains, renewing existing domains, updating your contact, DNS settings, and transferring a registered domain to another registrar.
- However, if you have already registered domains that use Google Domains, you can export your Google Domains DNS settings to Cloud DNS or another DNS provider.
- All domains managed by Google Domains are migrated to Squarespace, and you can't export a registered domain from Cloud Domains to Google Domains.

### "Class DomainsAsyncClient (1.13.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ConfigureDnsSettingsRequest ( registration="registration value", ) Make the request operation = client. configure dns settings (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.domains v1.types.ConfigureDnsSettingsRequest , dict]] The request object.
- ConfigureManagementSettingsRequest ( registration="registration value", ) Make the request operation = client. configure management settings (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.domains v1.types.ConfigureManagementSettingsRequest , dict]] The request object.
- ConfigureContactSettingsRequest ( registration="registration value", ) Make the request operation = client. configure contact settings (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.domains v1.types.ConfigureContactSettingsRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import domains v1 async def sample configure dns settings(): Create a client client = domains v1 .

### "Class DomainsClient (1.13.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient)
- Source ID: `site-python-reference`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ConfigureDnsSettingsRequest ( registration="registration value", ) Make the request operation = client. configure dns settings (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.domains v1.types.ConfigureDnsSettingsRequest , dict] The request object.
- ConfigureManagementSettingsRequest ( registration="registration value", ) Make the request operation = client. configure management settings (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.domains v1.types.ConfigureManagementSettingsRequest , dict] The request object.
- ConfigureContactSettingsRequest ( registration="registration value", ) Make the request operation = client. configure contact settings (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.domains v1.types.ConfigureContactSettingsRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import domains v1 def sample configure dns settings(): Create a client client = domains v1 .

