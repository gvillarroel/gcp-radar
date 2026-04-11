---
title: "Class CloudSchedulerGrpc (2.88.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.CloudSchedulerGrpc
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.CloudSchedulerGrpc
  title: "Class CloudSchedulerGrpc (2.88.0) \_|\_ Java client libraries \_|\_ Google\
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
Class CloudSchedulerGrpc (2.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.88.0 (latest)
2.87.0
2.85.0
2.83.0
2.82.0
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
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.0
2.3.13
2.2.0
2.1.23
public final class CloudSchedulerGrpc
The Cloud Scheduler API allows external entities to reliably
schedule asynchronous jobs.
Inheritance
java.lang.Object >
CloudSchedulerGrpc
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
bindService(CloudSchedulerGrpc.AsyncService service)
public static final ServerServiceDefinition bindService ( CloudSchedulerGrpc . AsyncService service )
Parameter
Name
Description
service
CloudSchedulerGrpc.AsyncService
Returns
Type
Description
io.grpc.ServerServiceDefinition
getCreateJobMethod()
public static MethodDescriptor<CreateJobRequest , Job > getCreateJobMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < CreateJobRequest , Job >
getDeleteJobMethod()
public static MethodDescriptor<DeleteJobRequest , Empty > getDeleteJobMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < DeleteJobRequest , Empty >
getGetJobMethod()
public static MethodDescriptor<GetJobRequest , Job > getGetJobMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < GetJobRequest , Job >
getListJobsMethod()
public static MethodDescriptor<ListJobsRequest , ListJobsResponse > getListJobsMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < ListJobsRequest , ListJobsResponse >
getPauseJobMethod()
public static MethodDescriptor<PauseJobRequest , Job > getPauseJobMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < PauseJobRequest , Job >
getResumeJobMethod()
public static MethodDescriptor<ResumeJobRequest , Job > getResumeJobMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < ResumeJobRequest , Job >
getRunJobMethod()
public static MethodDescriptor<RunJobRequest , Job > getRunJobMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < RunJobRequest , Job >
getServiceDescriptor()
public static ServiceDescriptor getServiceDescriptor ()
Returns
Type
Description
io.grpc.ServiceDescriptor
getUpdateJobMethod()
public static MethodDescriptor<UpdateJobRequest , Job > getUpdateJobMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < UpdateJobRequest , Job >
newBlockingStub(Channel channel)
public static CloudSchedulerGrpc . CloudSchedulerBlockingStub newBlockingStub ( Channel channel )
Creates a new blocking-style stub that supports unary and streaming output calls on the service
Parameter
Name
Description
channel
io.grpc.Channel
Returns
Type
Description
CloudSchedulerGrpc.CloudSchedulerBlockingStub
newBlockingV2Stub(Channel channel)
public static CloudSchedulerGrpc . CloudSchedulerBlockingV2Stub newBlockingV2Stub ( Channel channel )
Creates a new blocking-style stub that supports all types of calls on the service
Parameter
Name
Description
channel
io.grpc.Channel
Returns
Type
Description
CloudSchedulerGrpc.CloudSchedulerBlockingV2Stub
newFutureStub(Channel channel)
public static CloudSchedulerGrpc . CloudSchedulerFutureStub newFutureStub ( Channel channel )
Creates a new ListenableFuture-style stub that supports unary calls on the service
Parameter
Name
Description
channel
io.grpc.Channel
Returns
Type
Description
CloudSchedulerGrpc.CloudSchedulerFutureStub
newStub(Channel channel)
public static CloudSchedulerGrpc . CloudSchedulerStub newStub ( Channel channel )
Creates a new async stub that supports all call types for the service
Parameter
Name
Description
channel
io.grpc.Channel
Returns
Type
Description
CloudSchedulerGrpc.CloudSchedulerStub
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
