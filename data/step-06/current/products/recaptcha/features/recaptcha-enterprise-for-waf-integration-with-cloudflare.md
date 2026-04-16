---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:11.458Z"
product_name: "reCAPTCHA"
product_slug: "recaptcha"
feature_name: "reCAPTCHA Enterprise for WAF integration with Cloudflare"
feature_slug: "recaptcha-enterprise-for-waf-integration-with-cloudflare"
latest_feature_date: "2024-03-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient"
  - "https://docs.cloud.google.com/recaptcha/docs/best-practices-oat"
keywords:
  - "recaptcha"
  - "enterprise"
  - "for"
  - "waf"
  - "integration"
  - "with"
  - "cloudflare"
  - "this"
---

# reCAPTCHA Enterprise for WAF integration with Cloudflare

Product: reCAPTCHA
Coverage: MEDIUM

## Step 02 Summary

This integration connects reCAPTCHA Enterprise for WAF with Cloudflare.

## Extended Definition

This integration connects reCAPTCHA Enterprise for WAF with Cloudflare.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient)
- [https://docs.cloud.google.com/recaptcha/docs/best-practices-oat](https://docs.cloud.google.com/recaptcha/docs/best-practices-oat)

## Supporting Pages

### "Class RecaptchaEnterpriseServiceAsyncClient (1.29.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.recaptchaenterprise v1.types.AnnotateAssessmentResponse Empty response for AnnotateAssessment. assessment path assessment path ( project : str , assessment : str ) - > str Returns a fully-qualified assessment string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create assessment create assessment ( request : typing .
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . firewall policy path firewall policy path ( project : str , firewallpolicy : str ) - > str Returns a fully-qualified firewall policy string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 async def sample search related account group memberships(): Create a client client = recaptchaenterprise v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 async def sample list related account group memberships(): Create a client client = recaptchaenterprise v1 .

### "Class RecaptchaEnterpriseServiceClient (1.29.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient)
- Source ID: `site-python-reference`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.recaptchaenterprise v1.types.AnnotateAssessmentResponse Empty response for AnnotateAssessment. assessment path assessment path ( project : str , assessment : str ) - > str Returns a fully-qualified assessment string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create assessment create assessment ( request : typing .
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . firewall policy path firewall policy path ( project : str , firewallpolicy : str ) - > str Returns a fully-qualified firewall policy string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 def sample search related account group memberships(): Create a client client = recaptchaenterprise v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 def sample list related account group memberships(): Create a client client = recaptchaenterprise v1 .

### "Class RecaptchaEnterpriseServiceClient (3.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient)
- Source ID: `site-java-reference`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ()) { ListRelatedAccountGroupMembershipsRequest request = ListRelatedAccountGroupMembershipsRequest . newBuilder () . setParent ( RelatedAccountGroupName . of ( "[PROJECT]" , "[RELATEDACCOUNTGROUP]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<RelatedAccountGroupMembership> future = recaptchaEnterpriseServiceClient . listRelatedAccountGroupMembershipsPagedCallable () . futureCall ( request ); // Do something. for ( RelatedAccountGroupMembership element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListRelatedAccountGroupMembershipsRequest , ListRelatedAccountGroupMembershipsPagedResponse > listRelatedAccountGroups(ListRelatedAccountGroupsRequest request) public final RecaptchaEnterpriseServiceClient .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ()) { ListRelatedAccountGroupsRequest request = ListRelatedAccountGroupsRequest . newBuilder () . setParent ( ProjectName . of ( "[PROJECT]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<RelatedAccountGroup> future = recaptchaEnterpriseServiceClient . listRelatedAccountGroupsPagedCallable () . futureCall ( request ); // Do something. for ( RelatedAccountGroup element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListRelatedAccountGroupsRequest , ListRelatedAccountGroupsPagedResponse > migrateKey(MigrateKeyRequest request) public final Key migrateKey ( MigrateKeyRequest request ) Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ()) { ListFirewallPoliciesRequest request = ListFirewallPoliciesRequest . newBuilder () . setParent ( ProjectName . of ( "[PROJECT]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<FirewallPolicy> future = recaptchaEnterpriseServiceClient . listFirewallPoliciesPagedCallable (). futureCall ( request ); // Do something. for ( FirewallPolicy element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListFirewallPoliciesRequest , ListFirewallPoliciesPagedResponse > listIpOverrides(KeyName parent) public final RecaptchaEnterpriseServiceClient .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ()) { ListRelatedAccountGroupMembershipsRequest request = ListRelatedAccountGroupMembershipsRequest . newBuilder () . setParent ( RelatedAccountGroupName . of ( "[PROJECT]" , "[RELATEDACCOUNTGROUP]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); while ( true ) { ListRelatedAccountGroupMembershipsResponse response = recaptchaEnterpriseServiceClient . listRelatedAccountGroupMembershipsCallable () . call ( request ); for ( RelatedAccountGroupMembership element : response . getRelatedAccountGroupMembershipsList ()) { // doThingsWith(element); } String nextPageToken = response . getNextPageToken (); if ( !

### "Best practices for protection from automated threats \_|\_ reCAPTCHA \_\

- URL: [https://docs.cloud.google.com/recaptcha/docs/best-practices-oat](https://docs.cloud.google.com/recaptcha/docs/best-practices-oat)
- Source ID: `site-iam-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enterprise architects and technology stakeholders can review this information to make an informed decision about the reCAPTCHA implementation and fraud mitigation strategy for their use case.
- For example, you can use reCAPTCHA for WAF and Google Cloud Armor integration If scraping involves APIs, use the Apigee Management APIs for additional mitigation.
- This implementation is designed with the relevant features of reCAPTCHA for the best fraud protection.
- For example, you can use reCAPTCHA for WAF and Google Cloud Armor integration .

