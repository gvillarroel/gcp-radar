---
title: "Class AutoscalingPolicyServiceGrpc (4.85.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc
  title: "Class AutoscalingPolicyServiceGrpc (4.85.0) \_|\_ Java client libraries\
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
Class AutoscalingPolicyServiceGrpc (4.85.0)
Stay organized with collections
Save and categorize content based on your preferences.
4.85.0 (latest)
4.84.0
4.82.0
4.80.0
4.79.0
4.78.0
4.77.0
4.75.0
4.73.0
4.72.0
4.71.0
4.70.0
4.69.0
4.67.0
4.65.0
4.64.0
4.61.0
4.60.0
4.59.0
4.57.0
4.56.0
4.55.0
4.54.0
4.53.0
4.52.0
4.51.0
4.50.0
4.49.0
4.48.0
4.46.0
4.45.0
4.44.0
4.43.0
4.42.0
4.41.0
4.40.0
4.39.0
4.38.0
4.37.0
4.36.0
4.34.0
4.33.0
4.32.0
4.31.0
4.30.0
4.29.0
4.28.0
4.27.0
4.26.0
4.25.0
4.24.0
4.21.0
4.20.0
4.19.0
4.18.0
4.17.0
4.16.0
4.15.0
4.14.0
4.13.0
4.12.0
4.11.0
4.10.0
4.9.0
4.8.0
4.6.0
4.5.0
4.4.0
4.3.0
4.2.0
4.1.0
4.0.8
3.1.2
3.0.3
2.3.1
public final class AutoscalingPolicyServiceGrpc
The API interface for managing autoscaling policies in the
Dataproc API.
Inheritance
java.lang.Object >
AutoscalingPolicyServiceGrpc
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
bindService(AutoscalingPolicyServiceGrpc.AsyncService service)
public static final ServerServiceDefinition bindService ( AutoscalingPolicyServiceGrpc . AsyncService service )
Parameter
Name
Description
service
AutoscalingPolicyServiceGrpc.AsyncService
Returns
Type
Description
io.grpc.ServerServiceDefinition
getCreateAutoscalingPolicyMethod()
public static MethodDescriptor<CreateAutoscalingPolicyRequest , AutoscalingPolicy > getCreateAutoscalingPolicyMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < CreateAutoscalingPolicyRequest , AutoscalingPolicy >
getDeleteAutoscalingPolicyMethod()
public static MethodDescriptor<DeleteAutoscalingPolicyRequest , Empty > getDeleteAutoscalingPolicyMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < DeleteAutoscalingPolicyRequest , Empty >
getGetAutoscalingPolicyMethod()
public static MethodDescriptor<GetAutoscalingPolicyRequest , AutoscalingPolicy > getGetAutoscalingPolicyMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < GetAutoscalingPolicyRequest , AutoscalingPolicy >
getListAutoscalingPoliciesMethod()
public static MethodDescriptor<ListAutoscalingPoliciesRequest , ListAutoscalingPoliciesResponse > getListAutoscalingPoliciesMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < ListAutoscalingPoliciesRequest , ListAutoscalingPoliciesResponse >
getServiceDescriptor()
public static ServiceDescriptor getServiceDescriptor ()
Returns
Type
Description
io.grpc.ServiceDescriptor
getUpdateAutoscalingPolicyMethod()
public static MethodDescriptor<UpdateAutoscalingPolicyRequest , AutoscalingPolicy > getUpdateAutoscalingPolicyMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < UpdateAutoscalingPolicyRequest , AutoscalingPolicy >
newBlockingStub(Channel channel)
public static AutoscalingPolicyServiceGrpc . AutoscalingPolicyServiceBlockingStub newBlockingStub ( Channel channel )
Creates a new blocking-style stub that supports unary and streaming output calls on the service
Parameter
Name
Description
channel
io.grpc.Channel
Returns
Type
Description
AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingStub
newBlockingV2Stub(Channel channel)
public static AutoscalingPolicyServiceGrpc . AutoscalingPolicyServiceBlockingV2Stub newBlockingV2Stub ( Channel channel )
Creates a new blocking-style stub that supports all types of calls on the service
Parameter
Name
Description
channel
io.grpc.Channel
Returns
Type
Description
AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingV2Stub
newFutureStub(Channel channel)
public static AutoscalingPolicyServiceGrpc . AutoscalingPolicyServiceFutureStub newFutureStub ( Channel channel )
Creates a new ListenableFuture-style stub that supports unary calls on the service
Parameter
Name
Description
channel
io.grpc.Channel
Returns
Type
Description
AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceFutureStub
newStub(Channel channel)
public static AutoscalingPolicyServiceGrpc . AutoscalingPolicyServiceStub newStub ( Channel channel )
Creates a new async stub that supports all call types for the service
Parameter
Name
Description
channel
io.grpc.Channel
Returns
Type
Description
AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceStub
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
