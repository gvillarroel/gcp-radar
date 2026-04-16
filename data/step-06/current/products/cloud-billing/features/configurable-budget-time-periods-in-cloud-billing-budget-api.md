---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.611Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Configurable budget time periods in Cloud Billing Budget API"
feature_slug: "configurable-budget-time-periods-in-cloud-billing-budget-api"
latest_feature_date: "2021-04-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/budgets"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceBlockingStub"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceBlockingV2Stub"
keywords:
  - "configurable"
  - "budget"
  - "time"
  - "periods"
  - "billing"
  - "adds"
  - "non"
  - "monthly"
---

# Configurable budget time periods in Cloud Billing Budget API

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Adds support in the Budget API for non-monthly budget periods using usage_period with CalendarPeriod or CustomPeriod values.

## Extended Definition

Adds support in the Budget API for non-monthly budget periods using usage_period with CalendarPeriod or CustomPeriod values.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceBlockingStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceBlockingStub)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceBlockingV2Stub](https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceBlockingV2Stub)

## Supporting Pages

### "Create, edit, or delete budgets and budget alerts \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- With Cloud Billing budgets: You can specify the time period for the budget, configuring budgets for monthly, quarterly, yearly, or custom time ranges.
- Billing account level access To modify or delete budgets for your Cloud Billing account, you need a role that includes the following permissions on the Cloud Billing account: billing.budgets.get and billing.budgets.list to view all budgets for the Cloud Billing account. billing.budgets.update to modify an existing budget billing.budgets.delete to delete a budget To gain these permissions using a predefined role, ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Administrator Billing Account Costs Manager Project level access to manage budgets If you have limited or no access to a Cloud Billing account, you might have access to modify or delete a budget that is scoped only to the projects that you own, one project at a time.
- Billing account level access To view a list of budgets for your Cloud Billing account, you need a role that includes the following permissions on the Cloud Billing account: billing.budgets.get billing.budgets.list To gain these permissions using a predefined role, ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Administrator Billing Account Costs Manager Billing Account Viewer Project level access to view budgets If you have limited or no access to a Cloud Billing account, you can still view a list of budgets that are scoped only to the projects that you own, one project at a time.
- You can set the budget's time range using a recurring calendar period (monthly, quarterly, yearly) or a non-recurring custom date range (example, Apr 15, 2021 - Jun 30, 2021).

### "Class BudgetServiceGrpc.BudgetServiceBlockingStub (2.88.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceBlockingStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceBlockingStub)
- Source ID: `site-java-reference`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Inheritance java.lang.Object > io.grpc.stub.AbstractStub > io.grpc.stub.AbstractBlockingStub > BudgetServiceGrpc.BudgetServiceBlockingStub Inherited Members io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel) io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T) io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.getCallOptions() io.grpc.stub.AbstractStub.getChannel() io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials) io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel) io.grpc.stub.AbstractStub.withCompression(java.lang.String) io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline) io.grpc.stub.AbstractStub.withDeadlineAfter(java.time.Duration) io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit) io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor) io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...) io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int) io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int) io.grpc.stub.AbstractStub.withOnReadyThreshold(int) io.grpc.stub.AbstractStub.withWaitForReady() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods build(Channel channel, CallOptions callOptions) protected BudgetServiceGrpc .
- Parameter Name Description request GetBudgetRequest Returns Type Description Budget listBudgets(ListBudgetsRequest request) public ListBudgetsResponse listBudgets ( ListBudgetsRequest request ) Returns a list of budgets for a billing account.
- BudgetService stores Cloud Billing budgets, which define a budget plan and rules to execute as we track spend against that plan.
- 2.88.0 (latest) 2.87.0 2.85.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.6 2.2.0 2.1.7 public static final class BudgetServiceGrpc .

### "Class BudgetServiceGrpc.BudgetServiceBlockingV2Stub (2.88.0) \_|\_ Java\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceBlockingV2Stub](https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceBlockingV2Stub)
- Source ID: `site-java-reference`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Inheritance java.lang.Object > io.grpc.stub.AbstractStub > io.grpc.stub.AbstractBlockingStub > BudgetServiceGrpc.BudgetServiceBlockingV2Stub Inherited Members io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel) io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T) io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.getCallOptions() io.grpc.stub.AbstractStub.getChannel() io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials) io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel) io.grpc.stub.AbstractStub.withCompression(java.lang.String) io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline) io.grpc.stub.AbstractStub.withDeadlineAfter(java.time.Duration) io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit) io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor) io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...) io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int) io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int) io.grpc.stub.AbstractStub.withOnReadyThreshold(int) io.grpc.stub.AbstractStub.withWaitForReady() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods build(Channel channel, CallOptions callOptions) protected BudgetServiceGrpc .
- Parameter Name Description request GetBudgetRequest Returns Type Description Budget Exceptions Type Description io.grpc.StatusException listBudgets(ListBudgetsRequest request) public ListBudgetsResponse listBudgets ( ListBudgetsRequest request ) Returns a list of budgets for a billing account.
- BudgetService stores Cloud Billing budgets, which define a budget plan and rules to execute as we track spend against that plan.
- 2.88.0 (latest) 2.87.0 2.85.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.6 2.2.0 2.1.7 public static final class BudgetServiceGrpc .

