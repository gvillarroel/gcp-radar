---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.611Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Business glossary"
feature_slug: "business-glossary"
latest_feature_date: "2023-01-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.business_glossary_service.BusinessGlossaryServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.business_glossary_service.BusinessGlossaryServiceClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.business_glossary_service"
keywords:
  - "business"
  - "glossary"
  - "manages"
  - "terminology"
  - "and"
  - "definitions"
  - "for"
  - "describing"
---

# Business glossary

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Business glossary manages business terminology and definitions for describing and discovering data entries across an organization.

## Extended Definition

Business glossary manages business terminology and definitions for describing and discovering data entries across an organization.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.business_glossary_service.BusinessGlossaryServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.business_glossary_service.BusinessGlossaryServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.business_glossary_service.BusinessGlossaryServiceClient](https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.business_glossary_service.BusinessGlossaryServiceClient)
- [https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.business_glossary_service](https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.business_glossary_service)

## Supporting Pages

### "Class BusinessGlossaryServiceAsyncClient (2.16.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.business_glossary_service.BusinessGlossaryServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.business_glossary_service.BusinessGlossaryServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- CreateGlossaryRequest ( parent="parent value", glossary id="glossary id value", ) Make the request operation = client. create glossary (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataplex v1.types.CreateGlossaryRequest , dict]] The request object.
- DeleteGlossaryRequest ( name="name value", ) Make the request operation = client. delete glossary (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataplex v1.types.DeleteGlossaryRequest , dict]] The request object.
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,BusinessGlossaryServiceTransport,Callable[..., BusinessGlossaryServiceTransport]]] The transport to use, or a Callable that constructs and returns a new transport to use.
- ListGlossaryCategoriesRequest ( parent="parent value", ) Make the request page result = client. list glossary categories (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.dataplex v1.types.ListGlossaryCategoriesRequest , dict]] The request object.

### "Class BusinessGlossaryServiceClient (2.16.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.business_glossary_service.BusinessGlossaryServiceClient](https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.business_glossary_service.BusinessGlossaryServiceClient)
- Source ID: `site-python-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- CreateGlossaryRequest ( parent="parent value", glossary id="glossary id value", ) Make the request operation = client. create glossary (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.dataplex v1.types.CreateGlossaryRequest , dict] The request object.
- DeleteGlossaryRequest ( name="name value", ) Make the request operation = client. delete glossary (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.dataplex v1.types.DeleteGlossaryRequest , dict] The request object.
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,BusinessGlossaryServiceTransport,Callable[..., BusinessGlossaryServiceTransport]]] The transport to use, or a Callable that constructs and returns a new transport.
- ListGlossaryCategoriesRequest ( parent="parent value", ) Make the request page result = client. list glossary categories (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.dataplex v1.types.ListGlossaryCategoriesRequest , dict] The request object.

### "Package business_glossary_service (2.16.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.business_glossary_service](https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.business_glossary_service)
- Source ID: `site-python-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Version latest keyboard arrow down 2.16.0 (latest) 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.2 2.9.0 2.8.0 2.7.1 2.6.0 2.5.0 2.4.0 2.3.1 2.2.2 2.1.0 2.0.1 1.13.0 1.12.3 1.11.0 1.10.0 1.9.0 1.8.1 1.7.0 1.6.2 1.5.1 1.4.3 1.3.0 1.2.0 1.1.3 1.0.1 0.2.1 0.1.0 API documentation for dataplex v1.services.business glossary service package.
- The resources currently supported in Business Glossary are: Glossary GlossaryCategory GlossaryTerm BusinessGlossaryServiceClient BusinessGlossaryService provides APIs for managing business glossary resources for enterprise customers.
- Home Documentation Developer tools Python Client libraries Send feedback Package business glossary service (2.16.0) Stay organized with collections Save and categorize content based on your preferences.
- The resources currently supported in Business Glossary are: Glossary GlossaryCategory GlossaryTerm Modules pagers API documentation for dataplex v1.services.business glossary service.pagers module.

