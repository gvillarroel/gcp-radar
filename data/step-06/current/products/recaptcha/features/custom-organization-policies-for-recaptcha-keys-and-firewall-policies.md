---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:11.456Z"
product_name: "reCAPTCHA"
product_slug: "recaptcha"
feature_name: "custom organization policies for reCAPTCHA keys and firewall policies"
feature_slug: "custom-organization-policies-for-recaptcha-keys-and-firewall-policies"
latest_feature_date: "2025-01-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient.ListFirewallPoliciesFixedSizeCollection"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient.ListFirewallPoliciesPage"
keywords:
  - "custom"
  - "organization"
  - "policies"
  - "for"
  - "recaptcha"
  - "keys"
  - "and"
  - "firewall"
---

# custom organization policies for reCAPTCHA keys and firewall policies

Product: reCAPTCHA
Coverage: MEDIUM

## Step 02 Summary

Custom Organization Policy constraints provide more granular control over specific fields for selected reCAPTCHA resources.

## Extended Definition

Custom Organization Policy constraints provide more granular control over specific fields for selected reCAPTCHA resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient.ListFirewallPoliciesFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient.ListFirewallPoliciesFixedSizeCollection)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient.ListFirewallPoliciesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient.ListFirewallPoliciesPage)

## Supporting Pages

### "Class RecaptchaEnterpriseServiceAsyncClient (1.29.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListFirewallPoliciesRequest ( parent="parent value", ) Make the request page result = client. list firewall policies (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.recaptchaenterprise v1.types.ListFirewallPoliciesRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 async def sample reorder firewall policies(): Create a client client = recaptchaenterprise v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 async def sample list firewall policies(): Create a client client = recaptchaenterprise v1 .
- ReorderFirewallPoliciesRequest ( parent="parent value", names=['names value1', 'names value2'], ) Make the request response = await client. reorder firewall policies (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.recaptchaenterprise v1.types.ReorderFirewallPoliciesRequest , dict]] The request object.

### "Class RecaptchaEnterpriseServiceClient (1.29.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient)
- Source ID: `site-python-reference`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListFirewallPoliciesRequest ( parent="parent value", ) Make the request page result = client. list firewall policies (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.recaptchaenterprise v1.types.ListFirewallPoliciesRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 def sample reorder firewall policies(): Create a client client = recaptchaenterprise v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 def sample list firewall policies(): Create a client client = recaptchaenterprise v1 .
- ReorderFirewallPoliciesRequest ( parent="parent value", names=['names value1', 'names value2'], ) Make the request response = client. reorder firewall policies (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.recaptchaenterprise v1.types.ReorderFirewallPoliciesRequest , dict] The request object.

### "Class RecaptchaEnterpriseServiceClient.ListFirewallPoliciesFixedSizeCollection\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient.ListFirewallPoliciesFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient.ListFirewallPoliciesFixedSizeCollection)
- Source ID: `site-java-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListFirewallPoliciesPage > pages , int collectionSize ) Parameters Name Description pages List < ListFirewallPoliciesPage > collectionSize int Returns Type Description RecaptchaEnterpriseServiceClient.ListFirewallPoliciesFixedSizeCollection Overrides AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Developer tools Java Client libraries Send feedback Class RecaptchaEnterpriseServiceClient.ListFirewallPoliciesFixedSizeCollection (3.85.0) Stay organized with collections Save and categorize content based on your preferences.
- ListFirewallPoliciesFixedSizeCollection > Inheritance java.lang.Object > AbstractFixedSizeCollection > RecaptchaEnterpriseServiceClient.ListFirewallPoliciesFixedSizeCollection Inherited Members AbstractFixedSizeCollection.createCollection(List<PageT>,int) AbstractFixedSizeCollection.getCollectionSize() AbstractFixedSizeCollection.getNextCollection() AbstractFixedSizeCollection.getNextPageToken() AbstractFixedSizeCollection.getValues() AbstractFixedSizeCollection.hasNextCollection() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createCollection(List<RecaptchaEnterpriseServiceClient.ListFirewallPoliciesPage> pages, int collectionSize) protected RecaptchaEnterpriseServiceClient .
- ListFirewallPoliciesFixedSizeCollection extends AbstractFixedSizeCollection<ListFirewallPoliciesRequest , ListFirewallPoliciesResponse , FirewallPolicy , RecaptchaEnterpriseServiceClient .

### "Class RecaptchaEnterpriseServiceClient.ListFirewallPoliciesPage (3.85.0)\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient.ListFirewallPoliciesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient.ListFirewallPoliciesPage)
- Source ID: `site-java-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Developer tools Java Client libraries Send feedback Class RecaptchaEnterpriseServiceClient.ListFirewallPoliciesPage (3.85.0) Stay organized with collections Save and categorize content based on your preferences.
- ListFirewallPoliciesPage > Inheritance java.lang.Object > AbstractPage > RecaptchaEnterpriseServiceClient.ListFirewallPoliciesPage Inherited Members AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT) AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>) AbstractPage.getNextPage() AbstractPage.getNextPage(int) AbstractPage.getNextPageAsync() AbstractPage.getNextPageToken() AbstractPage.getPageElementCount() AbstractPage.getRequest() AbstractPage.getResponse() AbstractPage.getValues() AbstractPage.hasNextPage() AbstractPage.iterateAll() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createPage(PageContext<ListFirewallPoliciesRequest,ListFirewallPoliciesResponse,FirewallPolicy> context, ListFirewallPoliciesResponse response) protected RecaptchaEnterpriseServiceClient .
- ListFirewallPoliciesPage > createPageAsync ( PageContext<ListFirewallPoliciesRequest , ListFirewallPoliciesResponse , FirewallPolicy > context , ApiFuture<ListFirewallPoliciesResponse> futureResponse ) Parameters Name Description context PageContext < ListFirewallPoliciesRequest , ListFirewallPoliciesResponse , FirewallPolicy > futureResponse ApiFuture < ListFirewallPoliciesResponse > Returns Type Description ApiFuture < ListFirewallPoliciesPage > Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPageAsync(PageContext<RequestT,ResponseT,ResourceT> context, ApiFuture<ResponseT> futureResponse) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- ListFirewallPoliciesPage createPage ( PageContext<ListFirewallPoliciesRequest , ListFirewallPoliciesResponse , FirewallPolicy > context , ListFirewallPoliciesResponse response ) Parameters Name Description context PageContext < ListFirewallPoliciesRequest , ListFirewallPoliciesResponse , FirewallPolicy > response ListFirewallPoliciesResponse Returns Type Description RecaptchaEnterpriseServiceClient.ListFirewallPoliciesPage Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response) createPageAsync(PageContext<ListFirewallPoliciesRequest,ListFirewallPoliciesResponse,FirewallPolicy> context, ApiFuture<ListFirewallPoliciesResponse> futureResponse) public ApiFuture<RecaptchaEnterpriseServiceClient .

