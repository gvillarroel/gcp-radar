---
title: "Class CloudSchedulerGrpc.CloudSchedulerBlockingV2Stub (2.88.0) \_|\_ Java\
  \ client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.CloudSchedulerGrpc.CloudSchedulerBlockingV2Stub
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.CloudSchedulerGrpc.CloudSchedulerBlockingV2Stub
  title: "Class CloudSchedulerGrpc.CloudSchedulerBlockingV2Stub (2.88.0) \_|\_ Java\
    \ client libraries \_|\_ Google Cloud Documentation"
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
Class CloudSchedulerGrpc.CloudSchedulerBlockingV2Stub (2.88.0)
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
public static final class CloudSchedulerGrpc . CloudSchedulerBlockingV2Stub extends AbstractBlockingStub<CloudSchedulerGrpc . CloudSchedulerBlockingV2Stub >
A stub to allow clients to do synchronous rpc calls to service CloudScheduler.
The Cloud Scheduler API allows external entities to reliably
schedule asynchronous jobs.
Inheritance
java.lang.Object >
io.grpc.stub.AbstractStub >
io.grpc.stub.AbstractBlockingStub >
CloudSchedulerGrpc.CloudSchedulerBlockingV2Stub
Inherited Members
io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)
io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)
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
protected CloudSchedulerGrpc . CloudSchedulerBlockingV2Stub build ( Channel channel , CallOptions callOptions )
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
CloudSchedulerGrpc.CloudSchedulerBlockingV2Stub
Overrides
io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)
createJob(CreateJobRequest request)
public Job createJob ( CreateJobRequest request )
Creates a job.
Parameter
Name
Description
request
CreateJobRequest
Returns
Type
Description
Job
Exceptions
Type
Description
io.grpc.StatusException
deleteJob(DeleteJobRequest request)
public Empty deleteJob ( DeleteJobRequest request )
Deletes a job.
Parameter
Name
Description
request
DeleteJobRequest
Returns
Type
Description
Empty
Exceptions
Type
Description
io.grpc.StatusException
getJob(GetJobRequest request)
public Job getJob ( GetJobRequest request )
Gets a job.
Parameter
Name
Description
request
GetJobRequest
Returns
Type
Description
Job
Exceptions
Type
Description
io.grpc.StatusException
listJobs(ListJobsRequest request)
public ListJobsResponse listJobs ( ListJobsRequest request )
Lists jobs.
Parameter
Name
Description
request
ListJobsRequest
Returns
Type
Description
ListJobsResponse
Exceptions
Type
Description
io.grpc.StatusException
pauseJob(PauseJobRequest request)
public Job pauseJob ( PauseJobRequest request )
Pauses a job.
If a job is paused then the system will stop executing the job
until it is re-enabled via
ResumeJob . The state
of the job is stored in state ; if
paused it will be set to
Job.State.PAUSED . A job must
be in Job.State.ENABLED to
be paused.
Parameter
Name
Description
request
PauseJobRequest
Returns
Type
Description
Job
Exceptions
Type
Description
io.grpc.StatusException
resumeJob(ResumeJobRequest request)
public Job resumeJob ( ResumeJobRequest request )
Resume a job.
This method reenables a job after it has been
Job.State.PAUSED . The state
of a job is stored in Job.state ;
after calling this method it will be set to
Job.State.ENABLED . A job
must be in Job.State.PAUSED
to be resumed.
Parameter
Name
Description
request
ResumeJobRequest
Returns
Type
Description
Job
Exceptions
Type
Description
io.grpc.StatusException
runJob(RunJobRequest request)
public Job runJob ( RunJobRequest request )
Forces a job to run now.
When this method is called, Cloud Scheduler will dispatch the job, even
if the job is already running.
Parameter
Name
Description
request
RunJobRequest
Returns
Type
Description
Job
Exceptions
Type
Description
io.grpc.StatusException
updateJob(UpdateJobRequest request)
public Job updateJob ( UpdateJobRequest request )
Updates a job.
If successful, the updated Job is
returned. If the job does not exist, NOT_FOUND is returned.
If UpdateJob does not successfully return, it is possible for the
job to be in an
Job.State.UPDATE_FAILED
state. A job in this state may not be executed. If this happens, retry the
UpdateJob request until a successful response is received.
Parameter
Name
Description
request
UpdateJobRequest
Returns
Type
Description
Job
Exceptions
Type
Description
io.grpc.StatusException
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
