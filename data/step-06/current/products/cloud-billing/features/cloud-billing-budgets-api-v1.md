---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.622Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing Budgets API v1"
feature_slug: "cloud-billing-budgets-api-v1"
latest_feature_date: "2020-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceClient.ListBudgetsPage"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceClient.ListBudgetsPagedResponse"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceClient"
keywords:
  - "billing"
  - "budgets"
  - "v1"
  - "released"
  - "documentation"
  - "client"
  - "library"
  - "references"
---

# Cloud Billing Budgets API v1

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Released Cloud Billing Budgets API v1 with documentation and client library references for programmatic budget management.

## Extended Definition

Released Cloud Billing Budgets API v1 with documentation and client library references for programmatic budget management.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceClient.ListBudgetsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceClient.ListBudgetsPage)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceClient.ListBudgetsPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceClient.ListBudgetsPagedResponse)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceClient)

## Supporting Pages

### "Class BudgetServiceClient (2.88.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceClient)
- Source ID: `site-java-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( BudgetServiceClient budgetServiceClient = BudgetServiceClient . create ()) { ListBudgetsRequest request = ListBudgetsRequest . newBuilder () . setParent ( BillingAccountName . of ( "[BILLING ACCOUNT]" ). toString ()) . setScope ( "scope109264468" ) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<Budget> future = budgetServiceClient . listBudgetsPagedCallable (). futureCall ( request ); // Do something. for ( Budget element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListBudgetsRequest , ListBudgetsPagedResponse > shutdown() public void shutdown () shutdownNow() public void shutdownNow () updateBudget(Budget budget, FieldMask updateMask) public final Budget updateBudget ( Budget budget , FieldMask updateMask ) Updates a budget and returns the updated budget.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( BudgetServiceClient budgetServiceClient = BudgetServiceClient . create ()) { ListBudgetsRequest request = ListBudgetsRequest . newBuilder () . setParent ( BillingAccountName . of ( "[BILLING ACCOUNT]" ). toString ()) . setScope ( "scope109264468" ) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); while ( true ) { ListBudgetsResponse response = budgetServiceClient . listBudgetsCallable (). call ( request ); for ( Budget element : response . getBudgetsList ()) { // doThingsWith(element); } String nextPageToken = response . getNextPageToken (); if ( !
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( BudgetServiceClient budgetServiceClient = BudgetServiceClient . create ()) { ListBudgetsRequest request = ListBudgetsRequest . newBuilder () . setParent ( BillingAccountName . of ( "[BILLING ACCOUNT]" ). toString ()) . setScope ( "scope109264468" ) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); for ( Budget element : budgetServiceClient . listBudgets ( request ). iterateAll ()) { // doThingsWith(element); } } Parameter Name Description request ListBudgetsRequest The request object containing all of the parameters for the API call.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( BudgetServiceClient budgetServiceClient = BudgetServiceClient . create ()) { DeleteBudgetRequest request = DeleteBudgetRequest . newBuilder () . setName ( BudgetName . of ( "[BILLING ACCOUNT]" , "[BUDGET]" ). toString ()) . build (); ApiFuture<Empty> future = budgetServiceClient . deleteBudgetCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description UnaryCallable < DeleteBudgetRequest , Empty > getBudget(BudgetName name) public final Budget getBudget ( BudgetName name ) Returns a budget.

### "Class BudgetServiceClient.ListBudgetsPage (2.88.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceClient.ListBudgetsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceClient.ListBudgetsPage)
- Source ID: `site-java-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Developer tools Java Client libraries Send feedback Class BudgetServiceClient.ListBudgetsPage (2.88.0) Stay organized with collections Save and categorize content based on your preferences.
- ListBudgetsPage > Inheritance java.lang.Object > AbstractPage > BudgetServiceClient.ListBudgetsPage Inherited Members AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT) AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>) AbstractPage.getNextPage() AbstractPage.getNextPage(int) AbstractPage.getNextPageAsync() AbstractPage.getNextPageToken() AbstractPage.getPageElementCount() AbstractPage.getRequest() AbstractPage.getResponse() AbstractPage.getValues() AbstractPage.hasNextPage() AbstractPage.iterateAll() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createPage(PageContext<ListBudgetsRequest,ListBudgetsResponse,Budget> context, ListBudgetsResponse response) protected BudgetServiceClient .
- ListBudgetsPage createPage ( PageContext<ListBudgetsRequest , ListBudgetsResponse , Budget > context , ListBudgetsResponse response ) Parameters Name Description context PageContext < ListBudgetsRequest , ListBudgetsResponse , Budget > response ListBudgetsResponse Returns Type Description BudgetServiceClient.ListBudgetsPage Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response) createPageAsync(PageContext<ListBudgetsRequest,ListBudgetsResponse,Budget> context, ApiFuture<ListBudgetsResponse> futureResponse) public ApiFuture<BudgetServiceClient .
- 2.88.0 (latest) 2.87.0 2.85.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.6 2.2.0 2.1.7 public static class BudgetServiceClient .

### "Class BudgetServiceClient.ListBudgetsPagedResponse (2.88.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceClient.ListBudgetsPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceClient.ListBudgetsPagedResponse)
- Source ID: `site-java-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Developer tools Java Client libraries Send feedback Class BudgetServiceClient.ListBudgetsPagedResponse (2.88.0) Stay organized with collections Save and categorize content based on your preferences.
- ListBudgetsFixedSizeCollection > Inheritance java.lang.Object > AbstractPagedListResponse > BudgetServiceClient.ListBudgetsPagedResponse Inherited Members AbstractPagedListResponse.expandToFixedSizeCollection(int) AbstractPagedListResponse.getNextPageToken() AbstractPagedListResponse.getPage() AbstractPagedListResponse.iterateAll() AbstractPagedListResponse.iterateFixedSizeCollections(int) AbstractPagedListResponse.iteratePages() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods createAsync(PageContext<ListBudgetsRequest,ListBudgetsResponse,Budget> context, ApiFuture<ListBudgetsResponse> futureResponse) public static ApiFuture<BudgetServiceClient .
- 2.88.0 (latest) 2.87.0 2.85.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.6 2.2.0 2.1.7 public static class BudgetServiceClient .
- ListBudgetsPagedResponse extends AbstractPagedListResponse<ListBudgetsRequest , ListBudgetsResponse , Budget , BudgetServiceClient .

