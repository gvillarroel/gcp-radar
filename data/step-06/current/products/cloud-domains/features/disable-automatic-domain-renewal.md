---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:24.941Z"
product_name: "Cloud Domains"
product_slug: "cloud-domains"
feature_name: "Disable automatic domain renewal"
feature_slug: "disable-automatic-domain-renewal"
latest_feature_date: "2023-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/domains/docs/edit-registration-settings"
  - "https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient"
  - "https://docs.cloud.google.com/domains/docs/overview"
keywords:
  - "disable"
  - "automatic"
  - "domain"
  - "renewal"
  - "domains"
  - "allows"
  - "customers"
  - "to"
---

# Disable automatic domain renewal

Product: Cloud Domains
Coverage: MEDIUM

## Step 02 Summary

Cloud Domains allows customers to turn off automatic renewal after domain registration.

## Extended Definition

Cloud Domains allows customers to turn off automatic renewal after domain registration.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/domains/docs/edit-registration-settings](https://docs.cloud.google.com/domains/docs/edit-registration-settings)
- [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient)
- [https://docs.cloud.google.com/domains/docs/overview](https://docs.cloud.google.com/domains/docs/overview)

## Supporting Pages

### "Edit registration settings for a domain \_|\_ Cloud Domains \_|\_ Google\

- URL: [https://docs.cloud.google.com/domains/docs/edit-registration-settings](https://docs.cloud.google.com/domains/docs/edit-registration-settings)
- Source ID: `site-docs-root`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Turn off automatic renewal To disable automatic domain renewal: Console In the Google Cloud console, go to the Cloud Domains page.
- API Use the registrations.configureDnsSettings method : POST https://domains.googleapis.com/v1/projects/ PROJECT ID /locations/global/registrations/ DOMAIN NAME :configureDnsSettings Replace the following: PROJECT ID : the name of your project DOMAIN NAME : the domain that you want to change contact settings for The request body can be one of the following: To update or switch to custom name servers: { "dnsSettings": { "customDns": { "nameServers": [ "ns-cloud-a1.googledomains.com", "ns-cloud-a2.googledomains.com", "ns-cloud-a3.googledomains.com", "ns-cloud-a4.googledomains.com" ] } }, "updateMask": "customDns" } Edit automatic renewal settings All domains renew automatically.
- On the Disable auto-renewal dialog, click Disable . gcloud Use the gcloud domains registrations configure management command : gcloud domains registrations configure management DOMAIN NAME \ --preferred-renewal-method=renewal-disabled Replace DOMAIN NAME with the name of the registered domain—for example, example.app .
- On the Enable auto-renewal dialog, click Enable . gcloud Use the gcloud domains registrations configure management command : gcloud domains registrations configure management DOMAIN NAME \ --preferred-renewal-method=automatic-renewal Replace DOMAIN NAME with the name of the registered domain—for example, example.app .

### "Class DomainsAsyncClient (1.13.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The domain does not renew automatically unless the new owner sets up billing in Google Domains.
- The domain does not renew automatically unless the new owner sets up billing in Google Domains.
- For example, when changing from a Google Domains DNS configuration to a Custom DNS configuration, the update mask is "custom dns" . // This corresponds to the update mask field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ConfigureManagementSettingsRequest ( registration="registration value", ) Make the request operation = client. configure management settings (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.domains v1.types.ConfigureManagementSettingsRequest , dict]] The request object.

### "Class DomainsClient (1.13.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient)
- Source ID: `site-python-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The domain does not renew automatically unless the new owner sets up billing in Google Domains.
- The domain does not renew automatically unless the new owner sets up billing in Google Domains.
- For example, when changing from a Google Domains DNS configuration to a Custom DNS configuration, the update mask is "custom dns" . // This corresponds to the update mask field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ConfigureManagementSettingsRequest ( registration="registration value", ) Make the request operation = client. configure management settings (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.domains v1.types.ConfigureManagementSettingsRequest , dict] The request object.

### Cloud Domains overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/domains/docs/overview](https://docs.cloud.google.com/domains/docs/overview)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Automatic renewal After you set up Cloud Billing and complete your domain registration, Cloud Domains automatically sets up the registration to renew every year.
- If you use Cloud DNS to provide name servers for Cloud Domains, you can enable or disable managed DNSSEC when you create a public zone for your domain.
- Cloud Domains also lets you automatically review your registered domain as long as your Cloud Billing account stays active.
- Automatic renewal helps you keep ownership of your domain by not missing a payment.

