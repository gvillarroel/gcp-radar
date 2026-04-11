---
title: "Class AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceStub (4.85.0) \_\
  |\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceStub
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceStub
  title: "Class AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceStub (4.85.0)\
    \ \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
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
Class AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceStub (4.85.0)
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
public static final class AutoscalingPolicyServiceGrpc . AutoscalingPolicyServiceStub extends AbstractAsyncStub<AutoscalingPolicyServiceGrpc . AutoscalingPolicyServiceStub >
A stub to allow clients to do asynchronous rpc calls to service AutoscalingPolicyService.
The API interface for managing autoscaling policies in the
Dataproc API.
Inheritance
java.lang.Object >
io.grpc.stub.AbstractStub >
io.grpc.stub.AbstractAsyncStub >
AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceStub
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
protected AutoscalingPolicyServiceGrpc . AutoscalingPolicyServiceStub build ( Channel channel , CallOptions callOptions )
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
AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceStub
Overrides
io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)
createAutoscalingPolicy(CreateAutoscalingPolicyRequest request, StreamObserver<AutoscalingPolicy> responseObserver)
public void createAutoscalingPolicy ( CreateAutoscalingPolicyRequest request , StreamObserver<AutoscalingPolicy> responseObserver )
Creates new autoscaling policy.
Parameters
Name
Description
request
CreateAutoscalingPolicyRequest
responseObserver
io.grpc.stub.StreamObserver < AutoscalingPolicy >
deleteAutoscalingPolicy(DeleteAutoscalingPolicyRequest request, StreamObserver<Empty> responseObserver)
public void deleteAutoscalingPolicy ( DeleteAutoscalingPolicyRequest request , StreamObserver<Empty> responseObserver )
Deletes an autoscaling policy. It is an error to delete an autoscaling
policy that is in use by one or more clusters.
Parameters
Name
Description
request
DeleteAutoscalingPolicyRequest
responseObserver
io.grpc.stub.StreamObserver < Empty >
getAutoscalingPolicy(GetAutoscalingPolicyRequest request, StreamObserver<AutoscalingPolicy> responseObserver)
public void getAutoscalingPolicy ( GetAutoscalingPolicyRequest request , StreamObserver<AutoscalingPolicy> responseObserver )
Retrieves autoscaling policy.
Parameters
Name
Description
request
GetAutoscalingPolicyRequest
responseObserver
io.grpc.stub.StreamObserver < AutoscalingPolicy >
listAutoscalingPolicies(ListAutoscalingPoliciesRequest request, StreamObserver<ListAutoscalingPoliciesResponse> responseObserver)
public void listAutoscalingPolicies ( ListAutoscalingPoliciesRequest request , StreamObserver<ListAutoscalingPoliciesResponse> responseObserver )
Lists autoscaling policies in the project.
Parameters
Name
Description
request
ListAutoscalingPoliciesRequest
responseObserver
io.grpc.stub.StreamObserver < ListAutoscalingPoliciesResponse >
updateAutoscalingPolicy(UpdateAutoscalingPolicyRequest request, StreamObserver<AutoscalingPolicy> responseObserver)
public void updateAutoscalingPolicy ( UpdateAutoscalingPolicyRequest request , StreamObserver<AutoscalingPolicy> responseObserver )
Updates (replaces) autoscaling policy.
Disabled check for update_mask, because all updates will be full
replacements.
Parameters
Name
Description
request
UpdateAutoscalingPolicyRequest
responseObserver
io.grpc.stub.StreamObserver < AutoscalingPolicy >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
