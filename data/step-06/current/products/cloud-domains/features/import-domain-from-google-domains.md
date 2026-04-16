---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:24.941Z"
product_name: "Cloud Domains"
product_slug: "cloud-domains"
feature_name: "Import domain from Google Domains"
feature_slug: "import-domain-from-google-domains"
latest_feature_date: "2023-04-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient"
  - "https://docs.cloud.google.com/domains/docs/register-domain"
  - "https://docs.cloud.google.com/domains/docs/transfer-domain-to-another-registrar"
keywords:
  - "import"
  - "domain"
  - "from"
  - "domains"
  - "importing"
  - "to"
  - "is"
  - "available"
---

# Import domain from Google Domains

Product: Cloud Domains
Coverage: MEDIUM

## Step 02 Summary

Importing a domain from Google Domains to Cloud Domains is available as a generally available capability; Importing a domain from Google Domains to Cloud Domains was introduced in preview.

## Extended Definition

Importing a domain from Google Domains to Cloud Domains is available as a generally available capability; Importing a domain from Google Domains to Cloud Domains was introduced in preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient)
- [https://docs.cloud.google.com/domains/docs/register-domain](https://docs.cloud.google.com/domains/docs/register-domain)
- [https://docs.cloud.google.com/domains/docs/transfer-domain-to-another-registrar](https://docs.cloud.google.com/domains/docs/transfer-domain-to-another-registrar)

## Supporting Pages

### "Class DomainsAsyncClient (1.13.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 315
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import domains v1 async def sample configure management settings(): Create a client client = domains v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import domains v1 async def sample retrieve register parameters(): Create a client client = domains v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import domains v1 async def sample retrieve transfer parameters(): Create a client client = domains v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import domains v1 async def sample retrieve authorization code(): Create a client client = domains v1 .

### "Class DomainsClient (1.13.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient)
- Source ID: `site-python-reference`
- Final score: 315
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import domains v1 def sample configure management settings(): Create a client client = domains v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import domains v1 def sample retrieve register parameters(): Create a client client = domains v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import domains v1 def sample retrieve transfer parameters(): Create a client client = domains v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import domains v1 def sample retrieve authorization code(): Create a client client = domains v1 .

### Register a domain \_|\_ Cloud Domains \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/domains/docs/register-domain](https://docs.cloud.google.com/domains/docs/register-domain)
- Source ID: `site-docs-root`
- Final score: 287
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To register the domain, use the registrations.register method : POST https://domains.googleapis.com/v1/projects/ PROJECT ID /locations/global/registrations:register { "registration": { "domainName": " DOMAIN NAME ", "dnsSettings": { "customDns": { "nameServers": [ " NAME SERVERS " ] } }, "contactSettings": { "privacy": " CONTACT PRIVACY ", "registrantContact": { "postalAddress": { "regionCode": " REGION CODE ", "postalCode": " POSTAL CODE ", "administrativeArea": " SUBDIVISION ", "locality": " CITY ", "addressLines": [ " ADDRESS " ], "recipients": [ " CONTACT NAME " ], "organization": " ORGANIZATION " }, "email": " EMAIL ADDRESS ", "phoneNumber": " PHONE NUMBER ", "faxNumber": " FAX NUMBER " }, "adminContact": { "postalAddress": { "regionCode": " REGION CODE ", "postalCode": " POSTAL CODE ", "administrativeArea": " SUBDIVISION ", "locality": " CITY ", "addressLines": [ " ADDRESS " ], "recipients": [ " CONTACT NAME " ], "organization": " ORGANIZATION " }, "email": " EMAIL ADDRESS ", "phoneNumber": " PHONE NUMBER ", "faxNumber": " FAX NUMBER " }, "technicalContact": { "postalAddress": { "regionCode": " REGION CODE ", "postalCode": " POSTAL CODE ", "administrativeArea": " SUBDIVISION ", "locality": " CITY ", "addressLines": [ " ADDRESS " ], "recipients": [ " CONTACT NAME " ], "organization": " ORGANIZATION " }, "email": " EMAIL ADDRESS ", "phoneNumber": " PHONE NUMBER ", "faxNumber": " FAX NUMBER " } } }, "yearlyPrice": { "currencyCode": " CURRENCY CODE ", "units": NUMBER OF UNITS } } Replace the following: PROJECT ID : the ID of the project where you created the registration resource DOMAIN NAME : the domain name that you want to register, such as example.com NAME SERVERS : the name servers that you want to use If you are using Cloud DNS, use the nameServers field output that you got from the managedZones.create.post API call.
- API To search for an available domain name, use the registrations.searchDomains method with an empty request body: GET https://domains.googleapis.com/v1/projects/ PROJECT ID /locations/global/registrations:searchDomains?query= SEARCH TERM Replace the following: PROJECT ID : the ID of the project where the domain registration is created SEARCH TERM : any non-empty string to search for a domain name, such as example This search returns suggestions for possible domain names that you can register.
- Cloud Domains or Squarespace sends a verification email to the email address that you enter. gcloud To search for an available domain name, use the gcloud domains registrations search-domains command : gcloud domains registrations search-domains SEARCH TERM Replace SEARCH TERM with any non-empty string to search for a domain name, such as example .
- Note: On September 7, 2023 Squarespace acquired all domain registrations and related customer accounts from Google Domains.

### "Transfer a registered domain to another registrar \_|\_ Cloud Domains \_\

- URL: [https://docs.cloud.google.com/domains/docs/transfer-domain-to-another-registrar](https://docs.cloud.google.com/domains/docs/transfer-domain-to-another-registrar)
- Source ID: `site-docs-root`
- Final score: 278
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: On September 7, 2023 Squarespace acquired all domain registrations and related customer accounts from Google Domains.
- This page describes how to transfer a registered domain from Cloud Domains to a third-party domain registrar.
- API Use the registrations.configureManagementSettings method : POST https://domains.googleapis.com/v1/projects/ PROJECT ID /locations/global/registrations/ DOMAIN NAME :configureManagementSettings { "managementSettings": { "transferLockState": "UNLOCKED" }, "updateMask": "transferLockState" } Replace the following: PROJECT ID : the name of your project DOMAIN NAME : the domain that you want to transfer Get the authorization code To get the authorization code for a transfer, see Get or reset an authorization code .
- API Use the registrations.initiatePushTransfer method : POST https://domains.googleapis.com/v1/projects/ PROJECT ID /locations/global/registrations/ DOMAIN NAME :initiatePushTransfer { "tag" : " NEW REGISTRY TAG " } Replace the following: PROJECT ID : the name of your project DOMAIN NAME : the name of the domain that you want to renew NEW REGISTRY TAG : the tag of the new registrar.

