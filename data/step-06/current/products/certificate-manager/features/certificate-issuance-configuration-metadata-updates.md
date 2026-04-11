---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:16:01.480Z"
product_name: "Certificate Manager"
product_slug: "certificate-manager"
feature_name: "Certificate issuance configuration metadata updates"
feature_slug: "certificate-issuance-configuration-metadata-updates"
latest_feature_date: "2024-08-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient"
  - "https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsAsyncPager"
keywords:
  - "configuration"
  - "metadata"
  - "updates"
  - "issuance"
  - "now"
  - "supports"
  - "certificate"
  - "manager"
---

# Certificate issuance configuration metadata updates

Product: Certificate Manager
Coverage: LOW

## Step 02 Summary

Certificate Manager now supports updating labels and descriptions on certificate issuance configurations via the Google Cloud CLI or API.

## Extended Definition

Certificate Manager now supports updating labels and descriptions on certificate issuance configurations via the Google Cloud CLI or API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient)
- [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsAsyncPager](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsAsyncPager)

## Supporting Pages

### "Class CertificateManagerAsyncClient (1.12.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . certificate issuance config path certificate issuance config path ( project : str , location : str , certificate issuance config : str ) - > str Returns a fully-qualified certificate issuance config string. certificate map entry path certificate map entry path ( project : str , location : str , certificate map : str , certificate map entry : str ) - > str Returns a fully-qualified certificate map entry string. certificate map path certificate map path ( project : str , location : str , certificate map : str ) - > str Returns a fully-qualified certificate map string. certificate path certificate path ( project : str , location : str , certificate : str ) - > str Returns a fully-qualified certificate string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create certificate create certificate ( request : typing .
- CreateCertificateIssuanceConfigRequest ( parent="parent value", certificate issuance config id="certificate issuance config id value", certificate issuance config=certificate issuance config, ) Make the request operation = client. create certificate issuance config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.certificate manager v1.types.CreateCertificateIssuanceConfigRequest , dict]] The request object.
- DeleteCertificateIssuanceConfigRequest ( name="name value", ) Make the request operation = client. delete certificate issuance config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.certificate manager v1.types.DeleteCertificateIssuanceConfigRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import certificate manager v1 async def sample create certificate issuance config(): Create a client client = certificate manager v1 .

### "Class CertificateManagerClient (1.12.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient)
- Source ID: `site-python-reference`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . certificate issuance config path certificate issuance config path ( project : str , location : str , certificate issuance config : str ) - > str Returns a fully-qualified certificate issuance config string. certificate map entry path certificate map entry path ( project : str , location : str , certificate map : str , certificate map entry : str ) - > str Returns a fully-qualified certificate map entry string. certificate map path certificate map path ( project : str , location : str , certificate map : str ) - > str Returns a fully-qualified certificate map string. certificate path certificate path ( project : str , location : str , certificate : str ) - > str Returns a fully-qualified certificate string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create certificate create certificate ( request : typing .
- CreateCertificateIssuanceConfigRequest ( parent="parent value", certificate issuance config id="certificate issuance config id value", certificate issuance config=certificate issuance config, ) Make the request operation = client. create certificate issuance config (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.certificate manager v1.types.CreateCertificateIssuanceConfigRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import certificate manager v1 def sample create certificate issuance config(): Create a client client = certificate manager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import certificate manager v1 def sample delete certificate issuance config(): Create a client client = certificate manager v1 .

### "Class ListCertificateIssuanceConfigsAsyncPager (1.12.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsAsyncPager](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.certificate manager v1.types.ListCertificateIssuanceConfigsRequest The initial request object. response google.cloud.certificate manager v1.types.ListCertificateIssuanceConfigsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListCertificateIssuanceConfigsResponse ], ], request : google . cloud . certificate manager v1 . types . certificate issuance config .
- ListCertificateIssuanceConfigsResponse ], ], request : google . cloud . certificate manager v1 . types . certificate issuance config .
- ListCertificateIssuanceConfigsRequest , response : google . cloud . certificate manager v1 . types . certificate issuance config .

