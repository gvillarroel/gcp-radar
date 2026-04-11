---
title: "Class BudgetServiceGrpc (2.88.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc
  title: "Class BudgetServiceGrpc (2.88.0) \_|\_ Java client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Class BudgetServiceGrpc (2.88.0)
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
public final class BudgetServiceGrpc
BudgetService stores Cloud Billing budgets, which define a
budget plan and rules to execute as we track spend against that plan.
Inheritance
java.lang.Object >
BudgetServiceGrpc
Inherited Members
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
Static Fields
SERVICE_NAME
public static final String SERVICE_NAME
Field Value
Type
Description
String
Static Methods
bindService(BudgetServiceGrpc.AsyncService service)
public static final ServerServiceDefinition bindService ( BudgetServiceGrpc . AsyncService service )
Parameter
Name
Description
service
BudgetServiceGrpc.AsyncService
Returns
Type
Description
io.grpc.ServerServiceDefinition
getCreateBudgetMethod()
public static MethodDescriptor<CreateBudgetRequest , Budget > getCreateBudgetMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < CreateBudgetRequest , Budget >
getDeleteBudgetMethod()
public static MethodDescriptor<DeleteBudgetRequest , Empty > getDeleteBudgetMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < DeleteBudgetRequest , Empty >
getGetBudgetMethod()
public static MethodDescriptor<GetBudgetRequest , Budget > getGetBudgetMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < GetBudgetRequest , Budget >
getListBudgetsMethod()
public static MethodDescriptor<ListBudgetsRequest , ListBudgetsResponse > getListBudgetsMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < ListBudgetsRequest , ListBudgetsResponse >
getServiceDescriptor()
public static ServiceDescriptor getServiceDescriptor ()
Returns
Type
Description
io.grpc.ServiceDescriptor
getUpdateBudgetMethod()
public static MethodDescriptor<UpdateBudgetRequest , Budget > getUpdateBudgetMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < UpdateBudgetRequest , Budget >
newBlockingStub(Channel channel)
public static BudgetServiceGrpc . BudgetServiceBlockingStub newBlockingStub ( Channel channel )
Creates a new blocking-style stub that supports unary and streaming output calls on the service
Parameter
Name
Description
channel
io.grpc.Channel
Returns
Type
Description
BudgetServiceGrpc.BudgetServiceBlockingStub
newBlockingV2Stub(Channel channel)
public static BudgetServiceGrpc . BudgetServiceBlockingV2Stub newBlockingV2Stub ( Channel channel )
Creates a new blocking-style stub that supports all types of calls on the service
Parameter
Name
Description
channel
io.grpc.Channel
Returns
Type
Description
BudgetServiceGrpc.BudgetServiceBlockingV2Stub
newFutureStub(Channel channel)
public static BudgetServiceGrpc . BudgetServiceFutureStub newFutureStub ( Channel channel )
Creates a new ListenableFuture-style stub that supports unary calls on the service
Parameter
Name
Description
channel
io.grpc.Channel
Returns
Type
Description
BudgetServiceGrpc.BudgetServiceFutureStub
newStub(Channel channel)
public static BudgetServiceGrpc . BudgetServiceStub newStub ( Channel channel )
Creates a new async stub that supports all call types for the service
Parameter
Name
Description
channel
io.grpc.Channel
Returns
Type
Description
BudgetServiceGrpc.BudgetServiceStub
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
