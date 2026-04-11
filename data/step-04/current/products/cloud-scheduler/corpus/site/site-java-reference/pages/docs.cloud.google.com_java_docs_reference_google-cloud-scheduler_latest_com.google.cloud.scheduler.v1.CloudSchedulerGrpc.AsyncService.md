---
title: "Interface CloudSchedulerGrpc.AsyncService (2.88.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.CloudSchedulerGrpc.AsyncService
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.CloudSchedulerGrpc.AsyncService
  title: "Interface CloudSchedulerGrpc.AsyncService (2.88.0) \_|\_ Java client libraries\
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
Interface CloudSchedulerGrpc.AsyncService (2.88.0)
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
public static interface CloudSchedulerGrpc . AsyncService
The Cloud Scheduler API allows external entities to reliably
schedule asynchronous jobs.
Methods
createJob(CreateJobRequest request, StreamObserver<Job> responseObserver)
public default void createJob ( CreateJobRequest request , StreamObserver<Job> responseObserver )
Creates a job.
Parameters
Name
Description
request
CreateJobRequest
responseObserver
io.grpc.stub.StreamObserver < Job >
deleteJob(DeleteJobRequest request, StreamObserver<Empty> responseObserver)
public default void deleteJob ( DeleteJobRequest request , StreamObserver<Empty> responseObserver )
Deletes a job.
Parameters
Name
Description
request
DeleteJobRequest
responseObserver
io.grpc.stub.StreamObserver < Empty >
getJob(GetJobRequest request, StreamObserver<Job> responseObserver)
public default void getJob ( GetJobRequest request , StreamObserver<Job> responseObserver )
Gets a job.
Parameters
Name
Description
request
GetJobRequest
responseObserver
io.grpc.stub.StreamObserver < Job >
listJobs(ListJobsRequest request, StreamObserver<ListJobsResponse> responseObserver)
public default void listJobs ( ListJobsRequest request , StreamObserver<ListJobsResponse> responseObserver )
Lists jobs.
Parameters
Name
Description
request
ListJobsRequest
responseObserver
io.grpc.stub.StreamObserver < ListJobsResponse >
pauseJob(PauseJobRequest request, StreamObserver<Job> responseObserver)
public default void pauseJob ( PauseJobRequest request , StreamObserver<Job> responseObserver )
Pauses a job.
If a job is paused then the system will stop executing the job
until it is re-enabled via
ResumeJob . The state
of the job is stored in state ; if
paused it will be set to
Job.State.PAUSED . A job must
be in Job.State.ENABLED to
be paused.
Parameters
Name
Description
request
PauseJobRequest
responseObserver
io.grpc.stub.StreamObserver < Job >
resumeJob(ResumeJobRequest request, StreamObserver<Job> responseObserver)
public default void resumeJob ( ResumeJobRequest request , StreamObserver<Job> responseObserver )
Resume a job.
This method reenables a job after it has been
Job.State.PAUSED . The state
of a job is stored in Job.state ;
after calling this method it will be set to
Job.State.ENABLED . A job
must be in Job.State.PAUSED
to be resumed.
Parameters
Name
Description
request
ResumeJobRequest
responseObserver
io.grpc.stub.StreamObserver < Job >
runJob(RunJobRequest request, StreamObserver<Job> responseObserver)
public default void runJob ( RunJobRequest request , StreamObserver<Job> responseObserver )
Forces a job to run now.
When this method is called, Cloud Scheduler will dispatch the job, even
if the job is already running.
Parameters
Name
Description
request
RunJobRequest
responseObserver
io.grpc.stub.StreamObserver < Job >
updateJob(UpdateJobRequest request, StreamObserver<Job> responseObserver)
public default void updateJob ( UpdateJobRequest request , StreamObserver<Job> responseObserver )
Updates a job.
If successful, the updated Job is
returned. If the job does not exist, NOT_FOUND is returned.
If UpdateJob does not successfully return, it is possible for the
job to be in an
Job.State.UPDATE_FAILED
state. A job in this state may not be executed. If this happens, retry the
UpdateJob request until a successful response is received.
Parameters
Name
Description
request
UpdateJobRequest
responseObserver
io.grpc.stub.StreamObserver < Job >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
