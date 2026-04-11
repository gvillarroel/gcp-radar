---
title: "Class BudgetServiceGrpc.BudgetServiceStub (2.88.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceStub
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceStub
  title: "Class BudgetServiceGrpc.BudgetServiceStub (2.88.0) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Class BudgetServiceGrpc.BudgetServiceStub (2.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.88.0 (latest)
2.87.0
2.85.0
2.83.0
2.82.0
2.81.0
2.80.0
2.78.0
2.76.0
2.75.0
2.74.0
2.73.0
2.72.0
2.70.0
2.68.0
2.67.0
2.64.0
2.63.0
2.62.0
2.60.0
2.59.0
2.58.0
2.57.0
2.56.0
2.55.0
2.54.0
2.53.0
2.52.0
2.51.0
2.49.0
2.48.0
2.47.0
2.46.0
2.45.0
2.44.0
2.43.0
2.42.0
2.41.0
2.40.0
2.39.0
2.37.0
2.36.0
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.0
2.28.0
2.27.0
2.24.0
2.23.0
2.22.0
2.21.0
2.20.0
2.19.0
2.18.0
2.17.0
2.16.0
2.15.0
2.14.0
2.13.0
2.12.0
2.11.0
2.10.0
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.0
2.3.6
2.2.0
2.1.7
public static final class BudgetServiceGrpc . BudgetServiceStub extends AbstractAsyncStub<BudgetServiceGrpc . BudgetServiceStub >
A stub to allow clients to do asynchronous rpc calls to service BudgetService.
BudgetService stores Cloud Billing budgets, which define a
budget plan and rules to execute as we track spend against that plan.
Inheritance
java.lang.Object >
io.grpc.stub.AbstractStub >
io.grpc.stub.AbstractAsyncStub >
BudgetServiceGrpc.BudgetServiceStub
Inherited Members
io.grpc.stub.AbstractAsyncStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)
io.grpc.stub.AbstractAsyncStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)
io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T)
io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)
io.grpc.stub.AbstractStub.getCallOptions()
io.grpc.stub.AbstractStub.getChannel()
io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials)
io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel)
io.grpc.stub.AbstractStub.withCompression(java.lang.String)
io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline)
io.grpc.stub.AbstractStub.withDeadlineAfter(java.time.Duration)
io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit)
io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor)
io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...)
io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int)
io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int)
io.grpc.stub.AbstractStub.withOnReadyThreshold(int)
io.grpc.stub.AbstractStub.withWaitForReady()
Object.clone()
Object.equals(Object)
Object.finalize()
Object.getClass()
Object.hashCode()
Object.notify()
Object.notifyAll()
Object.toString()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Methods
build(Channel channel, CallOptions callOptions)
protected BudgetServiceGrpc . BudgetServiceStub build ( Channel channel , CallOptions callOptions )
Parameters
Name
Description
channel
io.grpc.Channel
callOptions
io.grpc.CallOptions
Returns
Type
Description
BudgetServiceGrpc.BudgetServiceStub
Overrides
io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)
createBudget(CreateBudgetRequest request, StreamObserver<Budget> responseObserver)
public void createBudget ( CreateBudgetRequest request , StreamObserver<Budget> responseObserver )
Creates a new budget. See
Quotas and limits
for more information on the limits of the number of budgets you can create.
Parameters
Name
Description
request
CreateBudgetRequest
responseObserver
io.grpc.stub.StreamObserver < Budget >
deleteBudget(DeleteBudgetRequest request, StreamObserver<Empty> responseObserver)
public void deleteBudget ( DeleteBudgetRequest request , StreamObserver<Empty> responseObserver )
Deletes a budget. Returns successfully if already deleted.
Parameters
Name
Description
request
DeleteBudgetRequest
responseObserver
io.grpc.stub.StreamObserver < Empty >
getBudget(GetBudgetRequest request, StreamObserver<Budget> responseObserver)
public void getBudget ( GetBudgetRequest request , StreamObserver<Budget> responseObserver )
Returns a budget.
WARNING: There are some fields exposed on the Google Cloud Console that
aren't available on this API. When reading from the API, you will not
see these fields in the return value, though they may have been set
in the Cloud Console.
Parameters
Name
Description
request
GetBudgetRequest
responseObserver
io.grpc.stub.StreamObserver < Budget >
listBudgets(ListBudgetsRequest request, StreamObserver<ListBudgetsResponse> responseObserver)
public void listBudgets ( ListBudgetsRequest request , StreamObserver<ListBudgetsResponse> responseObserver )
Returns a list of budgets for a billing account.
WARNING: There are some fields exposed on the Google Cloud Console that
aren't available on this API. When reading from the API, you will not
see these fields in the return value, though they may have been set
in the Cloud Console.
Parameters
Name
Description
request
ListBudgetsRequest
responseObserver
io.grpc.stub.StreamObserver < ListBudgetsResponse >
updateBudget(UpdateBudgetRequest request, StreamObserver<Budget> responseObserver)
public void updateBudget ( UpdateBudgetRequest request , StreamObserver<Budget> responseObserver )
Updates a budget and returns the updated budget.
WARNING: There are some fields exposed on the Google Cloud Console that
aren't available on this API. Budget fields that are not exposed in
this API will not be changed by this method.
Parameters
Name
Description
request
UpdateBudgetRequest
responseObserver
io.grpc.stub.StreamObserver < Budget >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
