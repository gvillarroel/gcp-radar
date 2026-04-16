---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.605Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Configurable budget time periods in Cloud Billing Budgets & alerts console"
feature_slug: "configurable-budget-time-periods-in-cloud-billing-budgets-alerts-console"
latest_feature_date: "2021-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceBlockingV2Stub"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceBlockingStub"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceFutureStub"
keywords:
  - "configurable"
  - "budget"
  - "time"
  - "periods"
  - "billing"
  - "budgets"
  - "alerts"
  - "console"
---

# Configurable budget time periods in Cloud Billing Budgets & alerts console

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Enables Cloud Billing Budgets & alerts in the console to use calendar or custom budget time periods beyond the default monthly range.

## Extended Definition

Enables Cloud Billing Budgets & alerts in the console to use calendar or custom budget time periods beyond the default monthly range.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceBlockingV2Stub](https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceBlockingV2Stub)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceBlockingStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceBlockingStub)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceFutureStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceFutureStub)

## Supporting Pages

### "Class BudgetServiceGrpc.BudgetServiceBlockingStub (2.88.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceBlockingStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceBlockingStub)
- Source ID: `site-java-reference`
- Final score: 234
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
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Inheritance java.lang.Object > io.grpc.stub.AbstractStub > io.grpc.stub.AbstractBlockingStub > BudgetServiceGrpc.BudgetServiceBlockingV2Stub Inherited Members io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel) io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T) io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.getCallOptions() io.grpc.stub.AbstractStub.getChannel() io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials) io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel) io.grpc.stub.AbstractStub.withCompression(java.lang.String) io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline) io.grpc.stub.AbstractStub.withDeadlineAfter(java.time.Duration) io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit) io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor) io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...) io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int) io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int) io.grpc.stub.AbstractStub.withOnReadyThreshold(int) io.grpc.stub.AbstractStub.withWaitForReady() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods build(Channel channel, CallOptions callOptions) protected BudgetServiceGrpc .
- Parameter Name Description request GetBudgetRequest Returns Type Description Budget Exceptions Type Description io.grpc.StatusException listBudgets(ListBudgetsRequest request) public ListBudgetsResponse listBudgets ( ListBudgetsRequest request ) Returns a list of budgets for a billing account.
- BudgetService stores Cloud Billing budgets, which define a budget plan and rules to execute as we track spend against that plan.
- 2.88.0 (latest) 2.87.0 2.85.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.6 2.2.0 2.1.7 public static final class BudgetServiceGrpc .

### "Class BudgetServiceGrpc.BudgetServiceFutureStub (2.88.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceFutureStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceFutureStub)
- Source ID: `site-java-reference`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Inheritance java.lang.Object > io.grpc.stub.AbstractStub > io.grpc.stub.AbstractFutureStub > BudgetServiceGrpc.BudgetServiceFutureStub Inherited Members io.grpc.stub.AbstractFutureStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel) io.grpc.stub.AbstractFutureStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T) io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.getCallOptions() io.grpc.stub.AbstractStub.getChannel() io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials) io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel) io.grpc.stub.AbstractStub.withCompression(java.lang.String) io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline) io.grpc.stub.AbstractStub.withDeadlineAfter(java.time.Duration) io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit) io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor) io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...) io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int) io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int) io.grpc.stub.AbstractStub.withOnReadyThreshold(int) io.grpc.stub.AbstractStub.withWaitForReady() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods build(Channel channel, CallOptions callOptions) protected BudgetServiceGrpc .
- Parameter Name Description request GetBudgetRequest Returns Type Description com.google.common.util.concurrent.ListenableFuture < Budget > listBudgets(ListBudgetsRequest request) public ListenableFuture<ListBudgetsResponse> listBudgets ( ListBudgetsRequest request ) Returns a list of budgets for a billing account.
- BudgetService stores Cloud Billing budgets, which define a budget plan and rules to execute as we track spend against that plan.
- 2.88.0 (latest) 2.87.0 2.85.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.6 2.2.0 2.1.7 public static final class BudgetServiceGrpc .

