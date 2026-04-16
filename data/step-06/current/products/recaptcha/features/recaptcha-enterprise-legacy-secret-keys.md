---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:11.463Z"
product_name: "reCAPTCHA"
product_slug: "recaptcha"
feature_name: "reCAPTCHA Enterprise legacy secret keys"
feature_slug: "recaptcha-enterprise-legacy-secret-keys"
latest_feature_date: "2022-07-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient.ListKeysFixedSizeCollection"
keywords:
  - "recaptcha"
  - "enterprise"
  - "legacy"
  - "secret"
  - "keys"
  - "lets"
  - "users"
  - "find"
---

# reCAPTCHA Enterprise legacy secret keys

Product: reCAPTCHA
Coverage: MEDIUM

## Step 02 Summary

Lets users find legacy secret keys for reCAPTCHA Enterprise keys in the Google Cloud console.

## Extended Definition

Lets users find legacy secret keys for reCAPTCHA Enterprise keys in the Google Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient.ListKeysFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient.ListKeysFixedSizeCollection)

## Supporting Pages

### "Class RecaptchaEnterpriseServiceAsyncClient (1.29.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 async def sample retrieve legacy secret key(): Create a client client = recaptchaenterprise v1 .
- RetrieveLegacySecretKeyRequest ( key="key value", ) Make the request response = await client. retrieve legacy secret key (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.recaptchaenterprise v1.types.RetrieveLegacySecretKeyRequest , dict]] The request object.
- Returns Type Description google.cloud.recaptchaenterprise v1.types.ReorderFirewallPoliciesResponse The reorder firewall policies response message. retrieve legacy secret key retrieve legacy secret key ( request : typing .
- Returns Type Description google.cloud.recaptchaenterprise v1.types.RetrieveLegacySecretKeyResponse Secret key is used only in legacy reCAPTCHA.

### "Class RecaptchaEnterpriseServiceClient (1.29.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient)
- Source ID: `site-python-reference`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 def sample retrieve legacy secret key(): Create a client client = recaptchaenterprise v1 .
- RetrieveLegacySecretKeyRequest ( key="key value", ) Make the request response = client. retrieve legacy secret key (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.recaptchaenterprise v1.types.RetrieveLegacySecretKeyRequest , dict] The request object.
- Returns Type Description google.cloud.recaptchaenterprise v1.types.ReorderFirewallPoliciesResponse The reorder firewall policies response message. retrieve legacy secret key retrieve legacy secret key ( request : typing .
- Returns Type Description google.cloud.recaptchaenterprise v1.types.RetrieveLegacySecretKeyResponse Secret key is used only in legacy reCAPTCHA.

### "Class RecaptchaEnterpriseServiceClient (3.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient)
- Source ID: `site-java-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ()) { RetrieveLegacySecretKeyRequest request = RetrieveLegacySecretKeyRequest . newBuilder () . setKey ( KeyName . of ( "[PROJECT]" , "[KEY]" ). toString ()) . build (); RetrieveLegacySecretKeyResponse response = recaptchaEnterpriseServiceClient . retrieveLegacySecretKey ( request ); } Parameter Name Description request RetrieveLegacySecretKeyRequest The request object containing all of the parameters for the API call.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ()) { RetrieveLegacySecretKeyRequest request = RetrieveLegacySecretKeyRequest . newBuilder () . setKey ( KeyName . of ( "[PROJECT]" , "[KEY]" ). toString ()) . build (); ApiFuture<RetrieveLegacySecretKeyResponse> future = recaptchaEnterpriseServiceClient . retrieveLegacySecretKeyCallable (). futureCall ( request ); // Do something.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ()) { String key = KeyName . of ( "[PROJECT]" , "[KEY]" ). toString (); RetrieveLegacySecretKeyResponse response = recaptchaEnterpriseServiceClient . retrieveLegacySecretKey ( key ); } Parameter Name Description key String Required.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ()) { KeyName key = KeyName . of ( "[PROJECT]" , "[KEY]" ); RetrieveLegacySecretKeyResponse response = recaptchaEnterpriseServiceClient . retrieveLegacySecretKey ( key ); } Parameter Name Description key KeyName Required.

### "Class RecaptchaEnterpriseServiceClient.ListKeysFixedSizeCollection (3.85.0)\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient.ListKeysFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient.ListKeysFixedSizeCollection)
- Source ID: `site-java-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListKeysFixedSizeCollection > Inheritance java.lang.Object > AbstractFixedSizeCollection > RecaptchaEnterpriseServiceClient.ListKeysFixedSizeCollection Inherited Members AbstractFixedSizeCollection.createCollection(List<PageT>,int) AbstractFixedSizeCollection.getCollectionSize() AbstractFixedSizeCollection.getNextCollection() AbstractFixedSizeCollection.getNextPageToken() AbstractFixedSizeCollection.getValues() AbstractFixedSizeCollection.hasNextCollection() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createCollection(List<RecaptchaEnterpriseServiceClient.ListKeysPage> pages, int collectionSize) protected RecaptchaEnterpriseServiceClient .
- ListKeysPage > pages , int collectionSize ) Parameters Name Description pages List < ListKeysPage > collectionSize int Returns Type Description RecaptchaEnterpriseServiceClient.ListKeysFixedSizeCollection Overrides AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Developer tools Java Client libraries Send feedback Class RecaptchaEnterpriseServiceClient.ListKeysFixedSizeCollection (3.85.0) Stay organized with collections Save and categorize content based on your preferences.
- ListKeysFixedSizeCollection extends AbstractFixedSizeCollection<ListKeysRequest , ListKeysResponse , Key , RecaptchaEnterpriseServiceClient .

