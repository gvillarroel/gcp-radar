---
title: "Class CloudSchedulerClient (2.88.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.CloudSchedulerClient
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.CloudSchedulerClient
  title: "Class CloudSchedulerClient (2.88.0) \_|\_ Java client libraries \_|\_ Google\
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
Class CloudSchedulerClient (2.88.0)
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
GitHub Repository Product Reference REST Documentation RPC Documentation
Service Description: The Cloud Scheduler API allows external entities to reliably schedule
asynchronous jobs.
This class provides the ability to make remote calls to the backing service through method
calls that map to API methods. Sample code to get started:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
JobName name = JobName . of ( "[PROJECT]" , "[LOCATION]" , "[JOB]" );
Job response = cloudSchedulerClient . getJob ( name );
}
Note: close() needs to be called on the CloudSchedulerClient object to clean up resources such
as threads. In the example above, try-with-resources is used, which automatically calls close().
Methods
Method
Description
Method Variants
ListJobs
Lists jobs.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listJobs(ListJobsRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listJobs(LocationName parent)
listJobs(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listJobsPagedCallable()
listJobsCallable()
GetJob
Gets a job.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getJob(GetJobRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getJob(JobName name)
getJob(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getJobCallable()
CreateJob
Creates a job.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
createJob(CreateJobRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
createJob(LocationName parent, Job job)
createJob(String parent, Job job)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
createJobCallable()
UpdateJob
Updates a job.
If successful, the updated Job is returned. If the job does not exist, NOT_FOUND is returned.
If UpdateJob does not successfully return, it is possible for the job to be in an Job.State.UPDATE_FAILED state. A job in this state may not be executed. If this happens, retry the UpdateJob request until a successful response is received.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
updateJob(UpdateJobRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
updateJob(Job job, FieldMask updateMask)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
updateJobCallable()
DeleteJob
Deletes a job.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
deleteJob(DeleteJobRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
deleteJob(JobName name)
deleteJob(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
deleteJobCallable()
PauseJob
Pauses a job.
If a job is paused then the system will stop executing the job until it is re-enabled via ResumeJob . The state of the job is stored in state ; if paused it will be set to Job.State.PAUSED . A job must be in Job.State.ENABLED to be paused.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
pauseJob(PauseJobRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
pauseJob(JobName name)
pauseJob(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
pauseJobCallable()
ResumeJob
Resume a job.
This method reenables a job after it has been Job.State.PAUSED . The state of a job is stored in Job.state ; after calling this method it will be set to Job.State.ENABLED . A job must be in Job.State.PAUSED to be resumed.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
resumeJob(ResumeJobRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
resumeJob(JobName name)
resumeJob(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
resumeJobCallable()
RunJob
Forces a job to run now.
When this method is called, Cloud Scheduler will dispatch the job, even if the job is already running.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
runJob(RunJobRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
runJob(JobName name)
runJob(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
runJobCallable()
ListLocations
Lists information about the supported locations for this service.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listLocations(ListLocationsRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listLocationsPagedCallable()
listLocationsCallable()
GetLocation
Gets information about a location.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getLocation(GetLocationRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getLocationCallable()
See the individual methods for example code.
Many parameters require resource names to be formatted in a particular way. To assist with
these names, this class includes a format method for each type of name, and additionally a parse
method to extract the individual identifiers contained within names that are returned.
This class can be customized by passing in a custom instance of CloudSchedulerSettings to
create(). For example:
To customize credentials:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
CloudSchedulerSettings cloudSchedulerSettings =
CloudSchedulerSettings . newBuilder ()
. setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials ))
. build ();
CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ( cloudSchedulerSettings );
To customize the endpoint:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
CloudSchedulerSettings cloudSchedulerSettings =
CloudSchedulerSettings . newBuilder (). setEndpoint ( myEndpoint ). build ();
CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ( cloudSchedulerSettings );
To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over
the wire:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
CloudSchedulerSettings cloudSchedulerSettings =
CloudSchedulerSettings . newHttpJsonBuilder (). build ();
CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ( cloudSchedulerSettings );
Please refer to the GitHub repository's samples for more quickstart code snippets.
Inheritance
java.lang.Object >
CloudSchedulerClient
Static Methods
create()
public static final CloudSchedulerClient create ()
Constructs an instance of CloudSchedulerClient with default settings.
Returns
Type
Description
CloudSchedulerClient
Exceptions
Type
Description
IOException
create(CloudSchedulerSettings settings)
public static final CloudSchedulerClient create ( CloudSchedulerSettings settings )
Constructs an instance of CloudSchedulerClient, using the given settings. The channels are
created based on the settings passed in, or defaults for any settings that are not set.
Parameter
Name
Description
settings
CloudSchedulerSettings
Returns
Type
Description
CloudSchedulerClient
Exceptions
Type
Description
IOException
create(CloudSchedulerStub stub)
public static final CloudSchedulerClient create ( CloudSchedulerStub stub )
Constructs an instance of CloudSchedulerClient, using the given stub for making calls. This is
for advanced usage - prefer using create(CloudSchedulerSettings).
Parameter
Name
Description
stub
CloudSchedulerStub
Returns
Type
Description
CloudSchedulerClient
Constructors
CloudSchedulerClient(CloudSchedulerSettings settings)
protected CloudSchedulerClient ( CloudSchedulerSettings settings )
Constructs an instance of CloudSchedulerClient, using the given settings. This is protected so
that it is easy to make a subclass, but otherwise, the static factory methods should be
preferred.
Parameter
Name
Description
settings
CloudSchedulerSettings
CloudSchedulerClient(CloudSchedulerStub stub)
protected CloudSchedulerClient ( CloudSchedulerStub stub )
Parameter
Name
Description
stub
CloudSchedulerStub
Methods
awaitTermination(long duration, TimeUnit unit)
public boolean awaitTermination ( long duration , TimeUnit unit )
Parameters
Name
Description
duration
long
unit
TimeUnit
Returns
Type
Description
boolean
Exceptions
Type
Description
InterruptedException
close()
public final void close ()
createJob(CreateJobRequest request)
public final Job createJob ( CreateJobRequest request )
Creates a job.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
CreateJobRequest request =
CreateJobRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setJob ( Job . newBuilder (). build ())
. build ();
Job response = cloudSchedulerClient . createJob ( request );
}
Parameter
Name
Description
request
CreateJobRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Job
createJob(LocationName parent, Job job)
public final Job createJob ( LocationName parent , Job job )
Creates a job.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
LocationName parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
Job job = Job . newBuilder (). build ();
Job response = cloudSchedulerClient . createJob ( parent , job );
}
Parameters
Name
Description
parent
LocationName Required. The location name. For example:
projects/PROJECT_ID/locations/LOCATION_ID .
job
Job Required. The job to add. The user can optionally specify a name for the job in
name . name
cannot be the same as an existing job. If a name is not specified then the system will
generate a random unique name that will be returned
( name ) in the response.
Returns
Type
Description
Job
createJob(String parent, Job job)
public final Job createJob ( String parent , Job job )
Creates a job.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
Job job = Job . newBuilder (). build ();
Job response = cloudSchedulerClient . createJob ( parent , job );
}
Parameters
Name
Description
parent
String Required. The location name. For example:
projects/PROJECT_ID/locations/LOCATION_ID .
job
Job Required. The job to add. The user can optionally specify a name for the job in
name . name
cannot be the same as an existing job. If a name is not specified then the system will
generate a random unique name that will be returned
( name ) in the response.
Returns
Type
Description
Job
createJobCallable()
public final UnaryCallable<CreateJobRequest , Job > createJobCallable ()
Creates a job.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
CreateJobRequest request =
CreateJobRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setJob ( Job . newBuilder (). build ())
. build ();
ApiFuture<Job> future = cloudSchedulerClient . createJobCallable (). futureCall ( request );
// Do something.
Job response = future . get ();
}
Returns
Type
Description
UnaryCallable < CreateJobRequest , Job >
deleteJob(DeleteJobRequest request)
public final void deleteJob ( DeleteJobRequest request )
Deletes a job.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
DeleteJobRequest request =
DeleteJobRequest . newBuilder ()
. setName ( JobName . of ( "[PROJECT]" , "[LOCATION]" , "[JOB]" ). toString ())
. build ();
cloudSchedulerClient . deleteJob ( request );
}
Parameter
Name
Description
request
DeleteJobRequest The request object containing all of the parameters for the API call.
deleteJob(JobName name)
public final void deleteJob ( JobName name )
Deletes a job.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
JobName name = JobName . of ( "[PROJECT]" , "[LOCATION]" , "[JOB]" );
cloudSchedulerClient . deleteJob ( name );
}
Parameter
Name
Description
name
JobName Required. The job name. For example:
projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID .
deleteJob(String name)
public final void deleteJob ( String name )
Deletes a job.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
String name = JobName . of ( "[PROJECT]" , "[LOCATION]" , "[JOB]" ). toString ();
cloudSchedulerClient . deleteJob ( name );
}
Parameter
Name
Description
name
String Required. The job name. For example:
projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID .
deleteJobCallable()
public final UnaryCallable<DeleteJobRequest , Empty > deleteJobCallable ()
Deletes a job.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
DeleteJobRequest request =
DeleteJobRequest . newBuilder ()
. setName ( JobName . of ( "[PROJECT]" , "[LOCATION]" , "[JOB]" ). toString ())
. build ();
ApiFuture<Empty> future = cloudSchedulerClient . deleteJobCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < DeleteJobRequest , Empty >
getJob(GetJobRequest request)
public final Job getJob ( GetJobRequest request )
Gets a job.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
GetJobRequest request =
GetJobRequest . newBuilder ()
. setName ( JobName . of ( "[PROJECT]" , "[LOCATION]" , "[JOB]" ). toString ())
. build ();
Job response = cloudSchedulerClient . getJob ( request );
}
Parameter
Name
Description
request
GetJobRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Job
getJob(JobName name)
public final Job getJob ( JobName name )
Gets a job.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
JobName name = JobName . of ( "[PROJECT]" , "[LOCATION]" , "[JOB]" );
Job response = cloudSchedulerClient . getJob ( name );
}
Parameter
Name
Description
name
JobName Required. The job name. For example:
projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID .
Returns
Type
Description
Job
getJob(String name)
public final Job getJob ( String name )
Gets a job.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
String name = JobName . of ( "[PROJECT]" , "[LOCATION]" , "[JOB]" ). toString ();
Job response = cloudSchedulerClient . getJob ( name );
}
Parameter
Name
Description
name
String Required. The job name. For example:
projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID .
Returns
Type
Description
Job
getJobCallable()
public final UnaryCallable<GetJobRequest , Job > getJobCallable ()
Gets a job.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
GetJobRequest request =
GetJobRequest . newBuilder ()
. setName ( JobName . of ( "[PROJECT]" , "[LOCATION]" , "[JOB]" ). toString ())
. build ();
ApiFuture<Job> future = cloudSchedulerClient . getJobCallable (). futureCall ( request );
// Do something.
Job response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetJobRequest , Job >
getLocation(GetLocationRequest request)
public final Location getLocation ( GetLocationRequest request )
Gets information about a location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
GetLocationRequest request = GetLocationRequest . newBuilder (). setName ( "name3373707" ). build ();
Location response = cloudSchedulerClient . getLocation ( request );
}
Parameter
Name
Description
request
com.google.cloud.location.GetLocationRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
com.google.cloud.location.Location
getLocationCallable()
public final UnaryCallable<GetLocationRequest , Location > getLocationCallable ()
Gets information about a location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
GetLocationRequest request = GetLocationRequest . newBuilder (). setName ( "name3373707" ). build ();
ApiFuture<Location> future = cloudSchedulerClient . getLocationCallable (). futureCall ( request );
// Do something.
Location response = future . get ();
}
Returns
Type
Description
UnaryCallable < com.google.cloud.location.GetLocationRequest , com.google.cloud.location.Location >
getSettings()
public final CloudSchedulerSettings getSettings ()
Returns
Type
Description
CloudSchedulerSettings
getStub()
public CloudSchedulerStub getStub ()
Returns
Type
Description
CloudSchedulerStub
isShutdown()
public boolean isShutdown ()
Returns
Type
Description
boolean
isTerminated()
public boolean isTerminated ()
Returns
Type
Description
boolean
listJobs(ListJobsRequest request)
public final CloudSchedulerClient . ListJobsPagedResponse listJobs ( ListJobsRequest request )
Lists jobs.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
ListJobsRequest request =
ListJobsRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
for ( Job element : cloudSchedulerClient . listJobs ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListJobsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
CloudSchedulerClient.ListJobsPagedResponse
listJobs(LocationName parent)
public final CloudSchedulerClient . ListJobsPagedResponse listJobs ( LocationName parent )
Lists jobs.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
LocationName parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
for ( Job element : cloudSchedulerClient . listJobs ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
LocationName Required. The location name. For example:
projects/PROJECT_ID/locations/LOCATION_ID .
Returns
Type
Description
CloudSchedulerClient.ListJobsPagedResponse
listJobs(String parent)
public final CloudSchedulerClient . ListJobsPagedResponse listJobs ( String parent )
Lists jobs.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
for ( Job element : cloudSchedulerClient . listJobs ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The location name. For example:
projects/PROJECT_ID/locations/LOCATION_ID .
Returns
Type
Description
CloudSchedulerClient.ListJobsPagedResponse
listJobsCallable()
public final UnaryCallable<ListJobsRequest , ListJobsResponse > listJobsCallable ()
Lists jobs.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
ListJobsRequest request =
ListJobsRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
while ( true ) {
ListJobsResponse response = cloudSchedulerClient . listJobsCallable (). call ( request );
for ( Job element : response . getJobsList ()) {
// doThingsWith(element);
}
String nextPageToken = response . getNextPageToken ();
if ( ! Strings . isNullOrEmpty ( nextPageToken )) {
request = request . toBuilder (). setPageToken ( nextPageToken ). build ();
} else {
break ;
}
}
}
Returns
Type
Description
UnaryCallable < ListJobsRequest , ListJobsResponse >
listJobsPagedCallable()
public final UnaryCallable<ListJobsRequest , CloudSchedulerClient . ListJobsPagedResponse > listJobsPagedCallable ()
Lists jobs.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
ListJobsRequest request =
ListJobsRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
ApiFuture<Job> future = cloudSchedulerClient . listJobsPagedCallable (). futureCall ( request );
// Do something.
for ( Job element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListJobsRequest , ListJobsPagedResponse >
listLocations(ListLocationsRequest request)
public final CloudSchedulerClient . ListLocationsPagedResponse listLocations ( ListLocationsRequest request )
Lists information about the supported locations for this service.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
ListLocationsRequest request =
ListLocationsRequest . newBuilder ()
. setName ( "name3373707" )
. setFilter ( "filter-1274492040" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
for ( Location element : cloudSchedulerClient . listLocations ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
com.google.cloud.location.ListLocationsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
CloudSchedulerClient.ListLocationsPagedResponse
listLocationsCallable()
public final UnaryCallable<ListLocationsRequest , ListLocationsResponse > listLocationsCallable ()
Lists information about the supported locations for this service.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
ListLocationsRequest request =
ListLocationsRequest . newBuilder ()
. setName ( "name3373707" )
. setFilter ( "filter-1274492040" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
while ( true ) {
ListLocationsResponse response = cloudSchedulerClient . listLocationsCallable (). call ( request );
for ( Location element : response . getLocationsList ()) {
// doThingsWith(element);
}
String nextPageToken = response . getNextPageToken ();
if ( ! Strings . isNullOrEmpty ( nextPageToken )) {
request = request . toBuilder (). setPageToken ( nextPageToken ). build ();
} else {
break ;
}
}
}
Returns
Type
Description
UnaryCallable < com.google.cloud.location.ListLocationsRequest , com.google.cloud.location.ListLocationsResponse >
listLocationsPagedCallable()
public final UnaryCallable<ListLocationsRequest , CloudSchedulerClient . ListLocationsPagedResponse > listLocationsPagedCallable ()
Lists information about the supported locations for this service.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
ListLocationsRequest request =
ListLocationsRequest . newBuilder ()
. setName ( "name3373707" )
. setFilter ( "filter-1274492040" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
ApiFuture<Location> future =
cloudSchedulerClient . listLocationsPagedCallable (). futureCall ( request );
// Do something.
for ( Location element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < com.google.cloud.location.ListLocationsRequest , ListLocationsPagedResponse >
pauseJob(JobName name)
public final Job pauseJob ( JobName name )
Pauses a job.
If a job is paused then the system will stop executing the job until it is re-enabled via
ResumeJob . The state of the job is stored
in state ; if paused it will be set to
Job.State.PAUSED . A job must be in
Job.State.ENABLED to be paused.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
JobName name = JobName . of ( "[PROJECT]" , "[LOCATION]" , "[JOB]" );
Job response = cloudSchedulerClient . pauseJob ( name );
}
Parameter
Name
Description
name
JobName Required. The job name. For example:
projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID .
Returns
Type
Description
Job
pauseJob(PauseJobRequest request)
public final Job pauseJob ( PauseJobRequest request )
Pauses a job.
If a job is paused then the system will stop executing the job until it is re-enabled via
ResumeJob . The state of the job is stored
in state ; if paused it will be set to
Job.State.PAUSED . A job must be in
Job.State.ENABLED to be paused.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
PauseJobRequest request =
PauseJobRequest . newBuilder ()
. setName ( JobName . of ( "[PROJECT]" , "[LOCATION]" , "[JOB]" ). toString ())
. build ();
Job response = cloudSchedulerClient . pauseJob ( request );
}
Parameter
Name
Description
request
PauseJobRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Job
pauseJob(String name)
public final Job pauseJob ( String name )
Pauses a job.
If a job is paused then the system will stop executing the job until it is re-enabled via
ResumeJob . The state of the job is stored
in state ; if paused it will be set to
Job.State.PAUSED . A job must be in
Job.State.ENABLED to be paused.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
String name = JobName . of ( "[PROJECT]" , "[LOCATION]" , "[JOB]" ). toString ();
Job response = cloudSchedulerClient . pauseJob ( name );
}
Parameter
Name
Description
name
String Required. The job name. For example:
projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID .
Returns
Type
Description
Job
pauseJobCallable()
public final UnaryCallable<PauseJobRequest , Job > pauseJobCallable ()
Pauses a job.
If a job is paused then the system will stop executing the job until it is re-enabled via
ResumeJob . The state of the job is stored
in state ; if paused it will be set to
Job.State.PAUSED . A job must be in
Job.State.ENABLED to be paused.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
PauseJobRequest request =
PauseJobRequest . newBuilder ()
. setName ( JobName . of ( "[PROJECT]" , "[LOCATION]" , "[JOB]" ). toString ())
. build ();
ApiFuture<Job> future = cloudSchedulerClient . pauseJobCallable (). futureCall ( request );
// Do something.
Job response = future . get ();
}
Returns
Type
Description
UnaryCallable < PauseJobRequest , Job >
resumeJob(JobName name)
public final Job resumeJob ( JobName name )
Resume a job.
This method reenables a job after it has been
Job.State.PAUSED . The state of a job is stored in
Job.state ; after calling this method it will be set to
Job.State.ENABLED . A job must be in
Job.State.PAUSED to be resumed.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
JobName name = JobName . of ( "[PROJECT]" , "[LOCATION]" , "[JOB]" );
Job response = cloudSchedulerClient . resumeJob ( name );
}
Parameter
Name
Description
name
JobName Required. The job name. For example:
projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID .
Returns
Type
Description
Job
resumeJob(ResumeJobRequest request)
public final Job resumeJob ( ResumeJobRequest request )
Resume a job.
This method reenables a job after it has been
Job.State.PAUSED . The state of a job is stored in
Job.state ; after calling this method it will be set to
Job.State.ENABLED . A job must be in
Job.State.PAUSED to be resumed.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
ResumeJobRequest request =
ResumeJobRequest . newBuilder ()
. setName ( JobName . of ( "[PROJECT]" , "[LOCATION]" , "[JOB]" ). toString ())
. build ();
Job response = cloudSchedulerClient . resumeJob ( request );
}
Parameter
Name
Description
request
ResumeJobRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Job
resumeJob(String name)
public final Job resumeJob ( String name )
Resume a job.
This method reenables a job after it has been
Job.State.PAUSED . The state of a job is stored in
Job.state ; after calling this method it will be set to
Job.State.ENABLED . A job must be in
Job.State.PAUSED to be resumed.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
String name = JobName . of ( "[PROJECT]" , "[LOCATION]" , "[JOB]" ). toString ();
Job response = cloudSchedulerClient . resumeJob ( name );
}
Parameter
Name
Description
name
String Required. The job name. For example:
projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID .
Returns
Type
Description
Job
resumeJobCallable()
public final UnaryCallable<ResumeJobRequest , Job > resumeJobCallable ()
Resume a job.
This method reenables a job after it has been
Job.State.PAUSED . The state of a job is stored in
Job.state ; after calling this method it will be set to
Job.State.ENABLED . A job must be in
Job.State.PAUSED to be resumed.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
ResumeJobRequest request =
ResumeJobRequest . newBuilder ()
. setName ( JobName . of ( "[PROJECT]" , "[LOCATION]" , "[JOB]" ). toString ())
. build ();
ApiFuture<Job> future = cloudSchedulerClient . resumeJobCallable (). futureCall ( request );
// Do something.
Job response = future . get ();
}
Returns
Type
Description
UnaryCallable < ResumeJobRequest , Job >
runJob(JobName name)
public final Job runJob ( JobName name )
Forces a job to run now.
When this method is called, Cloud Scheduler will dispatch the job, even if the job is
already running.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
JobName name = JobName . of ( "[PROJECT]" , "[LOCATION]" , "[JOB]" );
Job response = cloudSchedulerClient . runJob ( name );
}
Parameter
Name
Description
name
JobName Required. The job name. For example:
projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID .
Returns
Type
Description
Job
runJob(RunJobRequest request)
public final Job runJob ( RunJobRequest request )
Forces a job to run now.
When this method is called, Cloud Scheduler will dispatch the job, even if the job is
already running.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
RunJobRequest request =
RunJobRequest . newBuilder ()
. setName ( JobName . of ( "[PROJECT]" , "[LOCATION]" , "[JOB]" ). toString ())
. build ();
Job response = cloudSchedulerClient . runJob ( request );
}
Parameter
Name
Description
request
RunJobRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Job
runJob(String name)
public final Job runJob ( String name )
Forces a job to run now.
When this method is called, Cloud Scheduler will dispatch the job, even if the job is
already running.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
String name = JobName . of ( "[PROJECT]" , "[LOCATION]" , "[JOB]" ). toString ();
Job response = cloudSchedulerClient . runJob ( name );
}
Parameter
Name
Description
name
String Required. The job name. For example:
projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID .
Returns
Type
Description
Job
runJobCallable()
public final UnaryCallable<RunJobRequest , Job > runJobCallable ()
Forces a job to run now.
When this method is called, Cloud Scheduler will dispatch the job, even if the job is
already running.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
RunJobRequest request =
RunJobRequest . newBuilder ()
. setName ( JobName . of ( "[PROJECT]" , "[LOCATION]" , "[JOB]" ). toString ())
. build ();
ApiFuture<Job> future = cloudSchedulerClient . runJobCallable (). futureCall ( request );
// Do something.
Job response = future . get ();
}
Returns
Type
Description
UnaryCallable < RunJobRequest , Job >
shutdown()
public void shutdown ()
shutdownNow()
public void shutdownNow ()
updateJob(Job job, FieldMask updateMask)
public final Job updateJob ( Job job , FieldMask updateMask )
Updates a job.
If successful, the updated Job is returned. If the job does
not exist, NOT_FOUND is returned.
If UpdateJob does not successfully return, it is possible for the job to be in an
Job.State.UPDATE_FAILED state. A job in
this state may not be executed. If this happens, retry the UpdateJob request until a successful
response is received.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
Job job = Job . newBuilder (). build ();
FieldMask updateMask = FieldMask . newBuilder (). build ();
Job response = cloudSchedulerClient . updateJob ( job , updateMask );
}
Parameters
Name
Description
job
Job Required. The new job properties. name must be
specified.
Output only fields cannot be modified using UpdateJob. Any value specified for an output
only field will be ignored.
updateMask
FieldMask A mask used to specify which fields of the job are being updated.
Returns
Type
Description
Job
updateJob(UpdateJobRequest request)
public final Job updateJob ( UpdateJobRequest request )
Updates a job.
If successful, the updated Job is returned. If the job does
not exist, NOT_FOUND is returned.
If UpdateJob does not successfully return, it is possible for the job to be in an
Job.State.UPDATE_FAILED state. A job in
this state may not be executed. If this happens, retry the UpdateJob request until a successful
response is received.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
UpdateJobRequest request =
UpdateJobRequest . newBuilder ()
. setJob ( Job . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
Job response = cloudSchedulerClient . updateJob ( request );
}
Parameter
Name
Description
request
UpdateJobRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Job
updateJobCallable()
public final UnaryCallable<UpdateJobRequest , Job > updateJobCallable ()
Updates a job.
If successful, the updated Job is returned. If the job does
not exist, NOT_FOUND is returned.
If UpdateJob does not successfully return, it is possible for the job to be in an
Job.State.UPDATE_FAILED state. A job in
this state may not be executed. If this happens, retry the UpdateJob request until a successful
response is received.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) {
UpdateJobRequest request =
UpdateJobRequest . newBuilder ()
. setJob ( Job . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
ApiFuture<Job> future = cloudSchedulerClient . updateJobCallable (). futureCall ( request );
// Do something.
Job response = future . get ();
}
Returns
Type
Description
UnaryCallable < UpdateJobRequest , Job >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
