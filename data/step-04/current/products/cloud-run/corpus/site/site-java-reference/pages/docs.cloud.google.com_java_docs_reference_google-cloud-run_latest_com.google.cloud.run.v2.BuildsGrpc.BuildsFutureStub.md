---
title: "Class BuildsGrpc.BuildsFutureStub (0.88.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildsGrpc.BuildsFutureStub
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildsGrpc.BuildsFutureStub
  title: "Class BuildsGrpc.BuildsFutureStub (0.88.0) \_|\_ Java client libraries \_\
    |\_ Google Cloud Documentation"
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
Class BuildsGrpc.BuildsFutureStub (0.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.88.0 (latest)
0.87.0
0.85.0
0.83.0
0.82.0
0.80.0
0.78.0
0.76.0
0.75.0
0.74.0
0.73.0
0.72.0
0.70.0
0.68.0
0.67.0
0.64.0
0.63.0
0.62.0
0.60.0
0.59.0
0.58.0
0.57.0
0.56.0
0.55.0
0.54.0
0.53.0
0.52.0
0.51.0
0.49.0
0.48.0
0.47.0
0.46.0
0.45.0
0.44.0
0.43.0
0.42.0
0.41.0
0.40.0
0.39.0
0.37.0
0.36.0
0.35.0
0.34.0
0.33.0
0.32.0
0.31.0
0.30.0
0.29.0
0.28.0
0.27.0
0.24.0
0.23.0
0.22.0
0.21.0
0.20.0
0.19.0
0.18.0
0.17.0
0.16.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.4.0
0.3.5
0.2.1
0.1.2
public static final class BuildsGrpc . BuildsFutureStub extends AbstractFutureStub<BuildsGrpc . BuildsFutureStub >
A stub to allow clients to do ListenableFuture-style rpc calls to service Builds.
Cloud Run Build Control Plane API
Inheritance
java.lang.Object >
io.grpc.stub.AbstractStub >
io.grpc.stub.AbstractFutureStub >
BuildsGrpc.BuildsFutureStub
Inherited Members
io.grpc.stub.AbstractFutureStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)
io.grpc.stub.AbstractFutureStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)
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
protected BuildsGrpc . BuildsFutureStub build ( Channel channel , CallOptions callOptions )
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
BuildsGrpc.BuildsFutureStub
Overrides
io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)
submitBuild(SubmitBuildRequest request)
public ListenableFuture<SubmitBuildResponse> submitBuild ( SubmitBuildRequest request )
Submits a build in a given project.
Parameter
Name
Description
request
SubmitBuildRequest
Returns
Type
Description
com.google.common.util.concurrent.ListenableFuture < SubmitBuildResponse >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
