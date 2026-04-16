---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:24.940Z"
product_name: "Cloud Domains"
product_slug: "cloud-domains"
feature_name: "Push transfer for .uk and .co.uk domains without authorization codes"
feature_slug: "push-transfer-for-uk-and-co-uk-domains-without-authorization-codes"
latest_feature_date: "2024-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/domains/docs/transfer-domain-to-another-registrar"
  - "https://docs.cloud.google.com/domains/docs/access-control"
  - "https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient"
keywords:
  - "push"
  - "transfer"
  - "for"
  - "uk"
  - "and"
  - "co"
  - "domains"
  - "without"
---

# Push transfer for .uk and .co.uk domains without authorization codes

Product: Cloud Domains
Coverage: MEDIUM

## Step 02 Summary

Cloud Domains now supports initiating push transfers to another registrar for .uk/.co.uk domains via Cloud CLI or the Cloud Domains API when authorization codes are unavailable.

## Extended Definition

Cloud Domains now supports initiating push transfers to another registrar for .uk/.co.uk domains via Cloud CLI or the Cloud Domains API when authorization codes are unavailable.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/domains/docs/transfer-domain-to-another-registrar](https://docs.cloud.google.com/domains/docs/transfer-domain-to-another-registrar)
- [https://docs.cloud.google.com/domains/docs/access-control](https://docs.cloud.google.com/domains/docs/access-control)
- [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient)

## Supporting Pages

### "Transfer a registered domain to another registrar \_|\_ Cloud Domains \_\

- URL: [https://docs.cloud.google.com/domains/docs/transfer-domain-to-another-registrar](https://docs.cloud.google.com/domains/docs/transfer-domain-to-another-registrar)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permissions domains.registrations.configureManagement Roles roles/domains.admin gcloud Use the gcloud domains registrations initiate-push-transfer command : gcloud domains registrations initiate-push-transfer DOMAIN NAME \ --tag= NEW REGISTRY TAG Replace the following: DOMAIN NAME : the name of the registered domain that you want to renew—for example, example.app .
- Some domains don't support authorization codes—for example, .uk and .co.uk .
- API Use the registrations.configureManagementSettings method : POST https://domains.googleapis.com/v1/projects/ PROJECT ID /locations/global/registrations/ DOMAIN NAME :configureManagementSettings { "managementSettings": { "transferLockState": "UNLOCKED" }, "updateMask": "transferLockState" } Replace the following: PROJECT ID : the name of your project DOMAIN NAME : the domain that you want to transfer Get the authorization code To get the authorization code for a transfer, see Get or reset an authorization code .
- API Use the registrations.initiatePushTransfer method : POST https://domains.googleapis.com/v1/projects/ PROJECT ID /locations/global/registrations/ DOMAIN NAME :initiatePushTransfer { "tag" : " NEW REGISTRY TAG " } Replace the following: PROJECT ID : the name of your project DOMAIN NAME : the name of the domain that you want to renew NEW REGISTRY TAG : the tag of the new registrar.

### Roles and permissions \_|\_ Cloud Domains \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/domains/docs/access-control](https://docs.cloud.google.com/domains/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Method (locations.registrations.) Description Required permissions searchDomains Search for an available domain. domains.registrations.list retrieveRegisterParameters Get parameters to register a new domain. domains.registrations.list register Register a domain. domains.registrations.create list List the registration resources in a project. domains.registrations.list get Get the details of a registration resource. domains.registrations.get patch Edit the details of a registration resource. domains.registrations.update configureManagementSettings Configure the management settings of a registration resource. domains.registrations.configureManagement configureDnsSettings Configure the DNS settings of a registration resource. domains.registrations.configureDns configureContactSettings Configure the contact settings of a registration resource. domains.registrations.configureContact delete Delete a domain. domains.registrations.delete retrieveAuthorizationCode Retrieve the authorization code for a domain transfer. domains.registrations.configureManagement resetAuthorizationCode Reset the authorization code for a domain transfer. domains.registrations.configureManagement renewDomain Renew a domain that has expired within the previous 30 days. domains.registrations.configureManagement initiatePushTransfer Transfer a .uk or .co.uk domain to another registrar. domains.registrations.configureManagement Access control using the Google Cloud console You can use the Google Cloud console to manage access control for your projects.
- Role Permissions Cloud Domains Admin ( roles/ domains.admin ) Full access to Cloud Domains Registrations and related resources. domains. domains.locations.get domains.locations.list domains.operations.cancel domains.operations.get domains.operations.list domains. registrations. configureContact domains. registrations. configureDns domains. registrations. configureManagement domains.registrations.create domains. registrations. createTagBinding domains.registrations.delete domains. registrations. deleteTagBinding domains.registrations.get domains. registrations. getIamPolicy domains.registrations.list domains. registrations. listEffectiveTags domains. registrations. listTagBindings domains. registrations. setIamPolicy domains.registrations.update resourcemanager.projects.get resourcemanager.projects.list Domains Editor ( roles/ domains.editor ) Editor role for domains domains.locations. domains.locations.get domains.locations.list domains.operations. domains.operations.cancel domains.operations.get domains.operations.list domains. registrations. configureContact domains. registrations. configureDns domains. registrations. configureManagement domains.registrations.create domains.registrations.delete domains.registrations.get domains. registrations. getIamPolicy domains.registrations.list domains. registrations. listEffectiveTags domains. registrations. listTagBindings domains.registrations.update resourcemanager.projects.get resourcemanager.projects.list Cloud Domains Viewer ( roles/ domains.viewer ) Read-only access to Cloud Domains Registrations and related resources. domains.locations. domains.locations.get domains.locations.list domains.operations.get domains.operations.list domains.registrations.get domains. registrations. getIamPolicy domains.registrations.list domains. registrations. listEffectiveTags domains. registrations. listTagBindings resourcemanager.projects.get resourcemanager.projects.list Permissions The following table lists the permissions that the caller must have to call each method.
- For example, a particular user might need to create and modify the contact settings for a domain, so you would give that user the Cloud Domains Admin role ( roles/domains.admin ).
- For Cloud Domains, you can configure both project-level and resource-level access.

### "Class DomainsAsyncClient (1.13.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- TransferDomainRequest ( parent="parent value", registration=registration, ) Make the request operation = client. transfer domain (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.domains v1.types.TransferDomainRequest , dict]] The request object.
- ConfigureManagementSettingsRequest ( registration="registration value", ) Make the request operation = client. configure management settings (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.domains v1.types.ConfigureManagementSettingsRequest , dict]] The request object.
- ConfigureContactSettingsRequest ( registration="registration value", ) Make the request operation = client. configure contact settings (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.domains v1.types.ConfigureContactSettingsRequest , dict]] The request object.
- ConfigureDnsSettingsRequest ( registration="registration value", ) Make the request operation = client. configure dns settings (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.domains v1.types.ConfigureDnsSettingsRequest , dict]] The request object.

### "Class DomainsClient (1.13.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient)
- Source ID: `site-python-reference`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- TransferDomainRequest ( parent="parent value", registration=registration, ) Make the request operation = client. transfer domain (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.domains v1.types.TransferDomainRequest , dict] The request object.
- ConfigureManagementSettingsRequest ( registration="registration value", ) Make the request operation = client. configure management settings (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.domains v1.types.ConfigureManagementSettingsRequest , dict] The request object.
- ConfigureContactSettingsRequest ( registration="registration value", ) Make the request operation = client. configure contact settings (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.domains v1.types.ConfigureContactSettingsRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import domains v1 def sample retrieve transfer parameters(): Create a client client = domains v1 .

