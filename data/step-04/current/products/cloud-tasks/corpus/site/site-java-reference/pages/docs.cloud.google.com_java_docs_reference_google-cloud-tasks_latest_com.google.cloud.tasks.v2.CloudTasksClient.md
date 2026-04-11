---
title: "Class CloudTasksClient (2.88.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient
  title: "Class CloudTasksClient (2.88.0) \_|\_ Java client libraries \_|\_ Google\
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
Class CloudTasksClient (2.88.0)
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
2.3.12
2.2.0
2.1.11
GitHub Repository Product Reference REST Documentation RPC Documentation
Service Description: Cloud Tasks allows developers to manage the execution of background work in
their applications.
This class provides the ability to make remote calls to the backing service through method
calls that map to API methods. Sample code to get started:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
QueueName name = QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" );
Queue response = cloudTasksClient . getQueue ( name );
}
Note: close() needs to be called on the CloudTasksClient object to clean up resources such as
threads. In the example above, try-with-resources is used, which automatically calls close().
Methods
Method
Description
Method Variants
ListQueues
Lists queues.
Queues are returned in lexicographical order.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listQueues(ListQueuesRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listQueues(LocationName parent)
listQueues(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listQueuesPagedCallable()
listQueuesCallable()
GetQueue
Gets a queue.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getQueue(GetQueueRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getQueue(QueueName name)
getQueue(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getQueueCallable()
CreateQueue
Creates a queue.
Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not.
WARNING: Using this method may have unintended side effects if you are using an App Engine queue.yaml or queue.xml file to manage your queues. Read Overview of Queue Management and queue.yaml before using this method.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
createQueue(CreateQueueRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
createQueue(LocationName parent, Queue queue)
createQueue(String parent, Queue queue)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
createQueueCallable()
UpdateQueue
Updates a queue.
This method creates the queue if it does not exist and updates the queue if it does exist.
Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not.
WARNING: Using this method may have unintended side effects if you are using an App Engine queue.yaml or queue.xml file to manage your queues. Read Overview of Queue Management and queue.yaml before using this method.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
updateQueue(UpdateQueueRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
updateQueue(Queue queue, FieldMask updateMask)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
updateQueueCallable()
DeleteQueue
Deletes a queue.
This command will delete the queue even if it has tasks in it.
Note: If you delete a queue, a queue with the same name can't be created for 7 days.
WARNING: Using this method may have unintended side effects if you are using an App Engine queue.yaml or queue.xml file to manage your queues. Read Overview of Queue Management and queue.yaml before using this method.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
deleteQueue(DeleteQueueRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
deleteQueue(QueueName name)
deleteQueue(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
deleteQueueCallable()
PurgeQueue
Purges a queue by deleting all of its tasks.
All tasks created before this method is called are permanently deleted.
Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
purgeQueue(PurgeQueueRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
purgeQueue(QueueName name)
purgeQueue(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
purgeQueueCallable()
PauseQueue
Pauses the queue.
If a queue is paused then the system will stop dispatching tasks until the queue is resumed via ResumeQueue . Tasks can still be added when the queue is paused. A queue is paused if its state is PAUSED .
Request object method variants only take one parameter, a request object, which must be constructed before the call.
pauseQueue(PauseQueueRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
pauseQueue(QueueName name)
pauseQueue(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
pauseQueueCallable()
ResumeQueue
Resume a queue.
This method resumes a queue after it has been PAUSED or DISABLED . The state of a queue is stored in the queue's state ; after calling this method it will be set to RUNNING .
WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in Managing Cloud Tasks Scaling Risks .
Request object method variants only take one parameter, a request object, which must be constructed before the call.
resumeQueue(ResumeQueueRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
resumeQueue(QueueName name)
resumeQueue(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
resumeQueueCallable()
GetIamPolicy
Gets the access control policy for a Queue . Returns an empty policy if the resource exists and does not have a policy set.
Authorization requires the following Google IAM permission on the specified resource parent:
cloudtasks.queues.getIamPolicy
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getIamPolicy(GetIamPolicyRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getIamPolicy(ResourceName resource)
getIamPolicy(String resource)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getIamPolicyCallable()
SetIamPolicy
Sets the access control policy for a Queue . Replaces any existing policy.
Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console.
Authorization requires the following Google IAM permission on the specified resource parent:
cloudtasks.queues.setIamPolicy
Request object method variants only take one parameter, a request object, which must be constructed before the call.
setIamPolicy(SetIamPolicyRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
setIamPolicy(ResourceName resource, Policy policy)
setIamPolicy(String resource, Policy policy)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
setIamPolicyCallable()
TestIamPermissions
Returns permissions that a caller has on a Queue . If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.
Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
testIamPermissions(TestIamPermissionsRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
testIamPermissions(ResourceName resource, List<String> permissions)
testIamPermissions(String resource, List<String> permissions)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
testIamPermissionsCallable()
ListTasks
Lists the tasks in a queue.
By default, only the BASIC view is retrieved due to performance considerations; response_view controls the subset of information which is returned.
The tasks may be returned in any order. The ordering may change at any time.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listTasks(ListTasksRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listTasks(QueueName parent)
listTasks(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listTasksPagedCallable()
listTasksCallable()
GetTask
Gets a task.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getTask(GetTaskRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getTask(TaskName name)
getTask(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getTaskCallable()
CreateTask
Creates a task and adds it to a queue.
Tasks cannot be updated after creation; there is no UpdateTask command.
The maximum task size is 100KB.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
createTask(CreateTaskRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
createTask(QueueName parent, Task task)
createTask(String parent, Task task)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
createTaskCallable()
DeleteTask
Deletes a task.
A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
deleteTask(DeleteTaskRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
deleteTask(TaskName name)
deleteTask(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
deleteTaskCallable()
RunTask
Forces a task to run now.
When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED .
This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now.
The dispatched task is returned. That is, the task that is returned contains the status after the task is dispatched but before the task is received by its target.
If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig .
RunTask returns NOT_FOUND when it is called on a task that has already succeeded or permanently failed.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
runTask(RunTaskRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
runTask(TaskName name)
runTask(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
runTaskCallable()
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
This class can be customized by passing in a custom instance of CloudTasksSettings to
create(). For example:
To customize credentials:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
CloudTasksSettings cloudTasksSettings =
CloudTasksSettings . newBuilder ()
. setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials ))
. build ();
CloudTasksClient cloudTasksClient = CloudTasksClient . create ( cloudTasksSettings );
To customize the endpoint:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
CloudTasksSettings cloudTasksSettings =
CloudTasksSettings . newBuilder (). setEndpoint ( myEndpoint ). build ();
CloudTasksClient cloudTasksClient = CloudTasksClient . create ( cloudTasksSettings );
To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over
the wire:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
CloudTasksSettings cloudTasksSettings = CloudTasksSettings . newHttpJsonBuilder (). build ();
CloudTasksClient cloudTasksClient = CloudTasksClient . create ( cloudTasksSettings );
Please refer to the GitHub repository's samples for more quickstart code snippets.
Inheritance
java.lang.Object >
CloudTasksClient
Static Methods
create()
public static final CloudTasksClient create ()
Constructs an instance of CloudTasksClient with default settings.
Returns
Type
Description
CloudTasksClient
Exceptions
Type
Description
IOException
create(CloudTasksSettings settings)
public static final CloudTasksClient create ( CloudTasksSettings settings )
Constructs an instance of CloudTasksClient, using the given settings. The channels are created
based on the settings passed in, or defaults for any settings that are not set.
Parameter
Name
Description
settings
CloudTasksSettings
Returns
Type
Description
CloudTasksClient
Exceptions
Type
Description
IOException
create(CloudTasksStub stub)
public static final CloudTasksClient create ( CloudTasksStub stub )
Constructs an instance of CloudTasksClient, using the given stub for making calls. This is for
advanced usage - prefer using create(CloudTasksSettings).
Parameter
Name
Description
stub
CloudTasksStub
Returns
Type
Description
CloudTasksClient
Constructors
CloudTasksClient(CloudTasksSettings settings)
protected CloudTasksClient ( CloudTasksSettings settings )
Constructs an instance of CloudTasksClient, using the given settings. This is protected so that
it is easy to make a subclass, but otherwise, the static factory methods should be preferred.
Parameter
Name
Description
settings
CloudTasksSettings
CloudTasksClient(CloudTasksStub stub)
protected CloudTasksClient ( CloudTasksStub stub )
Parameter
Name
Description
stub
CloudTasksStub
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
createQueue(CreateQueueRequest request)
public final Queue createQueue ( CreateQueueRequest request )
Creates a queue.
Queues created with this method allow tasks to live for a maximum of 31 days. After a task
is 31 days old, the task will be deleted regardless of whether it was dispatched or not.
WARNING: Using this method may have unintended side effects if you are using an App Engine
queue.yaml or queue.xml file to manage your queues. Read Overview of Queue Management and
queue.yaml before using this method.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
CreateQueueRequest request =
CreateQueueRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setQueue ( Queue . newBuilder (). build ())
. build ();
Queue response = cloudTasksClient . createQueue ( request );
}
Parameter
Name
Description
request
CreateQueueRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Queue
createQueue(LocationName parent, Queue queue)
public final Queue createQueue ( LocationName parent , Queue queue )
Creates a queue.
Queues created with this method allow tasks to live for a maximum of 31 days. After a task
is 31 days old, the task will be deleted regardless of whether it was dispatched or not.
WARNING: Using this method may have unintended side effects if you are using an App Engine
queue.yaml or queue.xml file to manage your queues. Read Overview of Queue Management and
queue.yaml before using this method.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
LocationName parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
Queue queue = Queue . newBuilder (). build ();
Queue response = cloudTasksClient . createQueue ( parent , queue );
}
Parameters
Name
Description
parent
LocationName Required. The location name in which the queue will be created. For example:
projects/PROJECT_ID/locations/LOCATION_ID
The list of allowed locations can be obtained by calling Cloud Tasks' implementation of
ListLocations .
queue
Queue Required. The queue to create.
Queue's name cannot be the same as an existing
queue.
Returns
Type
Description
Queue
createQueue(String parent, Queue queue)
public final Queue createQueue ( String parent , Queue queue )
Creates a queue.
Queues created with this method allow tasks to live for a maximum of 31 days. After a task
is 31 days old, the task will be deleted regardless of whether it was dispatched or not.
WARNING: Using this method may have unintended side effects if you are using an App Engine
queue.yaml or queue.xml file to manage your queues. Read Overview of Queue Management and
queue.yaml before using this method.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
Queue queue = Queue . newBuilder (). build ();
Queue response = cloudTasksClient . createQueue ( parent , queue );
}
Parameters
Name
Description
parent
String Required. The location name in which the queue will be created. For example:
projects/PROJECT_ID/locations/LOCATION_ID
The list of allowed locations can be obtained by calling Cloud Tasks' implementation of
ListLocations .
queue
Queue Required. The queue to create.
Queue's name cannot be the same as an existing
queue.
Returns
Type
Description
Queue
createQueueCallable()
public final UnaryCallable<CreateQueueRequest , Queue > createQueueCallable ()
Creates a queue.
Queues created with this method allow tasks to live for a maximum of 31 days. After a task
is 31 days old, the task will be deleted regardless of whether it was dispatched or not.
WARNING: Using this method may have unintended side effects if you are using an App Engine
queue.yaml or queue.xml file to manage your queues. Read Overview of Queue Management and
queue.yaml before using this method.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
CreateQueueRequest request =
CreateQueueRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setQueue ( Queue . newBuilder (). build ())
. build ();
ApiFuture<Queue> future = cloudTasksClient . createQueueCallable (). futureCall ( request );
// Do something.
Queue response = future . get ();
}
Returns
Type
Description
UnaryCallable < CreateQueueRequest , Queue >
createTask(CreateTaskRequest request)
public final Task createTask ( CreateTaskRequest request )
Creates a task and adds it to a queue.
Tasks cannot be updated after creation; there is no UpdateTask command.
The maximum task size is 100KB.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
CreateTaskRequest request =
CreateTaskRequest . newBuilder ()
. setParent ( QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ())
. setTask ( Task . newBuilder (). build ())
. build ();
Task response = cloudTasksClient . createTask ( request );
}
Parameter
Name
Description
request
CreateTaskRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Task
createTask(QueueName parent, Task task)
public final Task createTask ( QueueName parent , Task task )
Creates a task and adds it to a queue.
Tasks cannot be updated after creation; there is no UpdateTask command.
The maximum task size is 100KB.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
QueueName parent = QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" );
Task task = Task . newBuilder (). build ();
Task response = cloudTasksClient . createTask ( parent , task );
}
Parameters
Name
Description
parent
QueueName Required. The queue name. For example:
projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID
The queue must already exist.
task
Task Required. The task to add.
Task names have the following format:
projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID . The user can
optionally specify a task name . If a name is not
specified then the system will generate a random unique task id, which will be set in the
task returned in the response .
If schedule_time is not set or is in the
past then Cloud Tasks will set it to the current time.
Task De-duplication:
Explicitly specifying a task ID enables task de-duplication. If a task's ID is identical
to that of an existing task or a task that was deleted or executed recently then the call
will fail with ALREADY_EXISTS . If the task's queue was
created using Cloud Tasks, then another task with the same name can't be created for ~1hour
after the original task was deleted or executed. If the task's queue was created using
queue.yaml or queue.xml, then another task with the same name can't be created for ~9days
after the original task was deleted or executed.
Because there is an extra lookup cost to identify duplicate task names, these
CreateTask calls have significantly
increased latency. Using hashed strings for the task id or for the prefix of the task id is
recommended. Choosing task ids that are sequential or have sequential prefixes, for example
using a timestamp, causes an increase in latency and error rates in all task commands. The
infrastructure relies on an approximately uniform distribution of task ids to store and
serve tasks efficiently.
Returns
Type
Description
Task
createTask(String parent, Task task)
public final Task createTask ( String parent , Task task )
Creates a task and adds it to a queue.
Tasks cannot be updated after creation; there is no UpdateTask command.
The maximum task size is 100KB.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
String parent = QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ();
Task task = Task . newBuilder (). build ();
Task response = cloudTasksClient . createTask ( parent , task );
}
Parameters
Name
Description
parent
String Required. The queue name. For example:
projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID
The queue must already exist.
task
Task Required. The task to add.
Task names have the following format:
projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID . The user can
optionally specify a task name . If a name is not
specified then the system will generate a random unique task id, which will be set in the
task returned in the response .
If schedule_time is not set or is in the
past then Cloud Tasks will set it to the current time.
Task De-duplication:
Explicitly specifying a task ID enables task de-duplication. If a task's ID is identical
to that of an existing task or a task that was deleted or executed recently then the call
will fail with ALREADY_EXISTS . If the task's queue was
created using Cloud Tasks, then another task with the same name can't be created for ~1hour
after the original task was deleted or executed. If the task's queue was created using
queue.yaml or queue.xml, then another task with the same name can't be created for ~9days
after the original task was deleted or executed.
Because there is an extra lookup cost to identify duplicate task names, these
CreateTask calls have significantly
increased latency. Using hashed strings for the task id or for the prefix of the task id is
recommended. Choosing task ids that are sequential or have sequential prefixes, for example
using a timestamp, causes an increase in latency and error rates in all task commands. The
infrastructure relies on an approximately uniform distribution of task ids to store and
serve tasks efficiently.
Returns
Type
Description
Task
createTaskCallable()
public final UnaryCallable<CreateTaskRequest , Task > createTaskCallable ()
Creates a task and adds it to a queue.
Tasks cannot be updated after creation; there is no UpdateTask command.
The maximum task size is 100KB.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
CreateTaskRequest request =
CreateTaskRequest . newBuilder ()
. setParent ( QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ())
. setTask ( Task . newBuilder (). build ())
. build ();
ApiFuture<Task> future = cloudTasksClient . createTaskCallable (). futureCall ( request );
// Do something.
Task response = future . get ();
}
Returns
Type
Description
UnaryCallable < CreateTaskRequest , Task >
deleteQueue(DeleteQueueRequest request)
public final void deleteQueue ( DeleteQueueRequest request )
Deletes a queue.
This command will delete the queue even if it has tasks in it.
Note: If you delete a queue, a queue with the same name can't be created for 7 days.
WARNING: Using this method may have unintended side effects if you are using an App Engine
queue.yaml or queue.xml file to manage your queues. Read Overview of Queue Management and
queue.yaml before using this method.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
DeleteQueueRequest request =
DeleteQueueRequest . newBuilder ()
. setName ( QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ())
. build ();
cloudTasksClient . deleteQueue ( request );
}
Parameter
Name
Description
request
DeleteQueueRequest The request object containing all of the parameters for the API call.
deleteQueue(QueueName name)
public final void deleteQueue ( QueueName name )
Deletes a queue.
This command will delete the queue even if it has tasks in it.
Note: If you delete a queue, a queue with the same name can't be created for 7 days.
WARNING: Using this method may have unintended side effects if you are using an App Engine
queue.yaml or queue.xml file to manage your queues. Read Overview of Queue Management and
queue.yaml before using this method.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
QueueName name = QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" );
cloudTasksClient . deleteQueue ( name );
}
Parameter
Name
Description
name
QueueName Required. The queue name. For example:
projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID
deleteQueue(String name)
public final void deleteQueue ( String name )
Deletes a queue.
This command will delete the queue even if it has tasks in it.
Note: If you delete a queue, a queue with the same name can't be created for 7 days.
WARNING: Using this method may have unintended side effects if you are using an App Engine
queue.yaml or queue.xml file to manage your queues. Read Overview of Queue Management and
queue.yaml before using this method.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
String name = QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ();
cloudTasksClient . deleteQueue ( name );
}
Parameter
Name
Description
name
String Required. The queue name. For example:
projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID
deleteQueueCallable()
public final UnaryCallable<DeleteQueueRequest , Empty > deleteQueueCallable ()
Deletes a queue.
This command will delete the queue even if it has tasks in it.
Note: If you delete a queue, a queue with the same name can't be created for 7 days.
WARNING: Using this method may have unintended side effects if you are using an App Engine
queue.yaml or queue.xml file to manage your queues. Read Overview of Queue Management and
queue.yaml before using this method.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
DeleteQueueRequest request =
DeleteQueueRequest . newBuilder ()
. setName ( QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ())
. build ();
ApiFuture<Empty> future = cloudTasksClient . deleteQueueCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < DeleteQueueRequest , Empty >
deleteTask(DeleteTaskRequest request)
public final void deleteTask ( DeleteTaskRequest request )
Deletes a task.
A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has
executed successfully or permanently failed.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
DeleteTaskRequest request =
DeleteTaskRequest . newBuilder ()
. setName ( TaskName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" , "[TASK]" ). toString ())
. build ();
cloudTasksClient . deleteTask ( request );
}
Parameter
Name
Description
request
DeleteTaskRequest The request object containing all of the parameters for the API call.
deleteTask(TaskName name)
public final void deleteTask ( TaskName name )
Deletes a task.
A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has
executed successfully or permanently failed.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
TaskName name = TaskName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" , "[TASK]" );
cloudTasksClient . deleteTask ( name );
}
Parameter
Name
Description
name
TaskName Required. The task name. For example:
projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID
deleteTask(String name)
public final void deleteTask ( String name )
Deletes a task.
A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has
executed successfully or permanently failed.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
String name = TaskName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" , "[TASK]" ). toString ();
cloudTasksClient . deleteTask ( name );
}
Parameter
Name
Description
name
String Required. The task name. For example:
projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID
deleteTaskCallable()
public final UnaryCallable<DeleteTaskRequest , Empty > deleteTaskCallable ()
Deletes a task.
A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has
executed successfully or permanently failed.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
DeleteTaskRequest request =
DeleteTaskRequest . newBuilder ()
. setName ( TaskName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" , "[TASK]" ). toString ())
. build ();
ApiFuture<Empty> future = cloudTasksClient . deleteTaskCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < DeleteTaskRequest , Empty >
getIamPolicy(ResourceName resource)
public final Policy getIamPolicy ( ResourceName resource )
Gets the access control policy for a Queue . Returns an empty
policy if the resource exists and does not have a policy set.
Authorization requires the following Google IAM permission
on the specified resource parent:
cloudtasks.queues.getIamPolicy
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
ResourceName resource = QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" );
Policy response = cloudTasksClient . getIamPolicy ( resource );
}
Parameter
Name
Description
resource
com.google.api.resourcenames.ResourceName REQUIRED: The resource for which the policy is being requested. See the
operation documentation for the appropriate value for this field.
Returns
Type
Description
com.google.iam.v1.Policy
getIamPolicy(QueueName queueName)
public final Policy getIamPolicy ( QueueName queueName )
Parameter
Name
Description
queueName
QueueName
Returns
Type
Description
com.google.iam.v1.Policy
getIamPolicy(GetIamPolicyRequest request)
public final Policy getIamPolicy ( GetIamPolicyRequest request )
Gets the access control policy for a Queue . Returns an empty
policy if the resource exists and does not have a policy set.
Authorization requires the following Google IAM permission
on the specified resource parent:
cloudtasks.queues.getIamPolicy
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
GetIamPolicyRequest request =
GetIamPolicyRequest . newBuilder ()
. setResource ( QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ())
. setOptions ( GetPolicyOptions . newBuilder (). build ())
. build ();
Policy response = cloudTasksClient . getIamPolicy ( request );
}
Parameter
Name
Description
request
com.google.iam.v1.GetIamPolicyRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
com.google.iam.v1.Policy
getIamPolicy(String resource)
public final Policy getIamPolicy ( String resource )
Gets the access control policy for a Queue . Returns an empty
policy if the resource exists and does not have a policy set.
Authorization requires the following Google IAM permission
on the specified resource parent:
cloudtasks.queues.getIamPolicy
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
String resource = QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ();
Policy response = cloudTasksClient . getIamPolicy ( resource );
}
Parameter
Name
Description
resource
String REQUIRED: The resource for which the policy is being requested. See the
operation documentation for the appropriate value for this field.
Returns
Type
Description
com.google.iam.v1.Policy
getIamPolicyCallable()
public final UnaryCallable<GetIamPolicyRequest , Policy > getIamPolicyCallable ()
Gets the access control policy for a Queue . Returns an empty
policy if the resource exists and does not have a policy set.
Authorization requires the following Google IAM permission
on the specified resource parent:
cloudtasks.queues.getIamPolicy
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
GetIamPolicyRequest request =
GetIamPolicyRequest . newBuilder ()
. setResource ( QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ())
. setOptions ( GetPolicyOptions . newBuilder (). build ())
. build ();
ApiFuture<Policy> future = cloudTasksClient . getIamPolicyCallable (). futureCall ( request );
// Do something.
Policy response = future . get ();
}
Returns
Type
Description
UnaryCallable < com.google.iam.v1.GetIamPolicyRequest , com.google.iam.v1.Policy >
getLocation(GetLocationRequest request)
public final Location getLocation ( GetLocationRequest request )
Gets information about a location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
GetLocationRequest request = GetLocationRequest . newBuilder (). setName ( "name3373707" ). build ();
Location response = cloudTasksClient . getLocation ( request );
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
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
GetLocationRequest request = GetLocationRequest . newBuilder (). setName ( "name3373707" ). build ();
ApiFuture<Location> future = cloudTasksClient . getLocationCallable (). futureCall ( request );
// Do something.
Location response = future . get ();
}
Returns
Type
Description
UnaryCallable < com.google.cloud.location.GetLocationRequest , com.google.cloud.location.Location >
getQueue(GetQueueRequest request)
public final Queue getQueue ( GetQueueRequest request )
Gets a queue.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
GetQueueRequest request =
GetQueueRequest . newBuilder ()
. setName ( QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ())
. build ();
Queue response = cloudTasksClient . getQueue ( request );
}
Parameter
Name
Description
request
GetQueueRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Queue
getQueue(QueueName name)
public final Queue getQueue ( QueueName name )
Gets a queue.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
QueueName name = QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" );
Queue response = cloudTasksClient . getQueue ( name );
}
Parameter
Name
Description
name
QueueName Required. The resource name of the queue. For example:
projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID
Returns
Type
Description
Queue
getQueue(String name)
public final Queue getQueue ( String name )
Gets a queue.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
String name = QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ();
Queue response = cloudTasksClient . getQueue ( name );
}
Parameter
Name
Description
name
String Required. The resource name of the queue. For example:
projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID
Returns
Type
Description
Queue
getQueueCallable()
public final UnaryCallable<GetQueueRequest , Queue > getQueueCallable ()
Gets a queue.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
GetQueueRequest request =
GetQueueRequest . newBuilder ()
. setName ( QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ())
. build ();
ApiFuture<Queue> future = cloudTasksClient . getQueueCallable (). futureCall ( request );
// Do something.
Queue response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetQueueRequest , Queue >
getSettings()
public final CloudTasksSettings getSettings ()
Returns
Type
Description
CloudTasksSettings
getStub()
public CloudTasksStub getStub ()
Returns
Type
Description
CloudTasksStub
getTask(GetTaskRequest request)
public final Task getTask ( GetTaskRequest request )
Gets a task.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
GetTaskRequest request =
GetTaskRequest . newBuilder ()
. setName ( TaskName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" , "[TASK]" ). toString ())
. build ();
Task response = cloudTasksClient . getTask ( request );
}
Parameter
Name
Description
request
GetTaskRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Task
getTask(TaskName name)
public final Task getTask ( TaskName name )
Gets a task.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
TaskName name = TaskName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" , "[TASK]" );
Task response = cloudTasksClient . getTask ( name );
}
Parameter
Name
Description
name
TaskName Required. The task name. For example:
projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID
Returns
Type
Description
Task
getTask(String name)
public final Task getTask ( String name )
Gets a task.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
String name = TaskName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" , "[TASK]" ). toString ();
Task response = cloudTasksClient . getTask ( name );
}
Parameter
Name
Description
name
String Required. The task name. For example:
projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID
Returns
Type
Description
Task
getTaskCallable()
public final UnaryCallable<GetTaskRequest , Task > getTaskCallable ()
Gets a task.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
GetTaskRequest request =
GetTaskRequest . newBuilder ()
. setName ( TaskName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" , "[TASK]" ). toString ())
. build ();
ApiFuture<Task> future = cloudTasksClient . getTaskCallable (). futureCall ( request );
// Do something.
Task response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetTaskRequest , Task >
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
listLocations(ListLocationsRequest request)
public final CloudTasksClient . ListLocationsPagedResponse listLocations ( ListLocationsRequest request )
Lists information about the supported locations for this service.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
ListLocationsRequest request =
ListLocationsRequest . newBuilder ()
. setName ( "name3373707" )
. setFilter ( "filter-1274492040" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
for ( Location element : cloudTasksClient . listLocations ( request ). iterateAll ()) {
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
CloudTasksClient.ListLocationsPagedResponse
listLocationsCallable()
public final UnaryCallable<ListLocationsRequest , ListLocationsResponse > listLocationsCallable ()
Lists information about the supported locations for this service.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
ListLocationsRequest request =
ListLocationsRequest . newBuilder ()
. setName ( "name3373707" )
. setFilter ( "filter-1274492040" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
while ( true ) {
ListLocationsResponse response = cloudTasksClient . listLocationsCallable (). call ( request );
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
public final UnaryCallable<ListLocationsRequest , CloudTasksClient . ListLocationsPagedResponse > listLocationsPagedCallable ()
Lists information about the supported locations for this service.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
ListLocationsRequest request =
ListLocationsRequest . newBuilder ()
. setName ( "name3373707" )
. setFilter ( "filter-1274492040" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
ApiFuture<Location> future =
cloudTasksClient . listLocationsPagedCallable (). futureCall ( request );
// Do something.
for ( Location element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < com.google.cloud.location.ListLocationsRequest , ListLocationsPagedResponse >
listQueues(ListQueuesRequest request)
public final CloudTasksClient . ListQueuesPagedResponse listQueues ( ListQueuesRequest request )
Lists queues.
Queues are returned in lexicographical order.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
ListQueuesRequest request =
ListQueuesRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setFilter ( "filter-1274492040" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
for ( Queue element : cloudTasksClient . listQueues ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListQueuesRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
CloudTasksClient.ListQueuesPagedResponse
listQueues(LocationName parent)
public final CloudTasksClient . ListQueuesPagedResponse listQueues ( LocationName parent )
Lists queues.
Queues are returned in lexicographical order.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
LocationName parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
for ( Queue element : cloudTasksClient . listQueues ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
LocationName Required. The location name. For example:
projects/PROJECT_ID/locations/LOCATION_ID
Returns
Type
Description
CloudTasksClient.ListQueuesPagedResponse
listQueues(String parent)
public final CloudTasksClient . ListQueuesPagedResponse listQueues ( String parent )
Lists queues.
Queues are returned in lexicographical order.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
for ( Queue element : cloudTasksClient . listQueues ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The location name. For example:
projects/PROJECT_ID/locations/LOCATION_ID
Returns
Type
Description
CloudTasksClient.ListQueuesPagedResponse
listQueuesCallable()
public final UnaryCallable<ListQueuesRequest , ListQueuesResponse > listQueuesCallable ()
Lists queues.
Queues are returned in lexicographical order.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
ListQueuesRequest request =
ListQueuesRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setFilter ( "filter-1274492040" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
while ( true ) {
ListQueuesResponse response = cloudTasksClient . listQueuesCallable (). call ( request );
for ( Queue element : response . getQueuesList ()) {
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
UnaryCallable < ListQueuesRequest , ListQueuesResponse >
listQueuesPagedCallable()
public final UnaryCallable<ListQueuesRequest , CloudTasksClient . ListQueuesPagedResponse > listQueuesPagedCallable ()
Lists queues.
Queues are returned in lexicographical order.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
ListQueuesRequest request =
ListQueuesRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setFilter ( "filter-1274492040" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
ApiFuture<Queue> future = cloudTasksClient . listQueuesPagedCallable (). futureCall ( request );
// Do something.
for ( Queue element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListQueuesRequest , ListQueuesPagedResponse >
listTasks(ListTasksRequest request)
public final CloudTasksClient . ListTasksPagedResponse listTasks ( ListTasksRequest request )
Lists the tasks in a queue.
By default, only the BASIC view is retrieved due to
performance considerations;
response_view controls the subset of
information which is returned.
The tasks may be returned in any order. The ordering may change at any time.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
ListTasksRequest request =
ListTasksRequest . newBuilder ()
. setParent ( QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
for ( Task element : cloudTasksClient . listTasks ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListTasksRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
CloudTasksClient.ListTasksPagedResponse
listTasks(QueueName parent)
public final CloudTasksClient . ListTasksPagedResponse listTasks ( QueueName parent )
Lists the tasks in a queue.
By default, only the BASIC view is retrieved due to
performance considerations;
response_view controls the subset of
information which is returned.
The tasks may be returned in any order. The ordering may change at any time.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
QueueName parent = QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" );
for ( Task element : cloudTasksClient . listTasks ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
QueueName Required. The queue name. For example:
projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID
Returns
Type
Description
CloudTasksClient.ListTasksPagedResponse
listTasks(String parent)
public final CloudTasksClient . ListTasksPagedResponse listTasks ( String parent )
Lists the tasks in a queue.
By default, only the BASIC view is retrieved due to
performance considerations;
response_view controls the subset of
information which is returned.
The tasks may be returned in any order. The ordering may change at any time.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
String parent = QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ();
for ( Task element : cloudTasksClient . listTasks ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The queue name. For example:
projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID
Returns
Type
Description
CloudTasksClient.ListTasksPagedResponse
listTasksCallable()
public final UnaryCallable<ListTasksRequest , ListTasksResponse > listTasksCallable ()
Lists the tasks in a queue.
By default, only the BASIC view is retrieved due to
performance considerations;
response_view controls the subset of
information which is returned.
The tasks may be returned in any order. The ordering may change at any time.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
ListTasksRequest request =
ListTasksRequest . newBuilder ()
. setParent ( QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
while ( true ) {
ListTasksResponse response = cloudTasksClient . listTasksCallable (). call ( request );
for ( Task element : response . getTasksList ()) {
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
UnaryCallable < ListTasksRequest , ListTasksResponse >
listTasksPagedCallable()
public final UnaryCallable<ListTasksRequest , CloudTasksClient . ListTasksPagedResponse > listTasksPagedCallable ()
Lists the tasks in a queue.
By default, only the BASIC view is retrieved due to
performance considerations;
response_view controls the subset of
information which is returned.
The tasks may be returned in any order. The ordering may change at any time.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
ListTasksRequest request =
ListTasksRequest . newBuilder ()
. setParent ( QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
ApiFuture<Task> future = cloudTasksClient . listTasksPagedCallable (). futureCall ( request );
// Do something.
for ( Task element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListTasksRequest , ListTasksPagedResponse >
pauseQueue(PauseQueueRequest request)
public final Queue pauseQueue ( PauseQueueRequest request )
Pauses the queue.
If a queue is paused then the system will stop dispatching tasks until the queue is resumed
via ResumeQueue . Tasks can still be added when
the queue is paused. A queue is paused if its state is
PAUSED .
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
PauseQueueRequest request =
PauseQueueRequest . newBuilder ()
. setName ( QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ())
. build ();
Queue response = cloudTasksClient . pauseQueue ( request );
}
Parameter
Name
Description
request
PauseQueueRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Queue
pauseQueue(QueueName name)
public final Queue pauseQueue ( QueueName name )
Pauses the queue.
If a queue is paused then the system will stop dispatching tasks until the queue is resumed
via ResumeQueue . Tasks can still be added when
the queue is paused. A queue is paused if its state is
PAUSED .
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
QueueName name = QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" );
Queue response = cloudTasksClient . pauseQueue ( name );
}
Parameter
Name
Description
name
QueueName Required. The queue name. For example:
projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID
Returns
Type
Description
Queue
pauseQueue(String name)
public final Queue pauseQueue ( String name )
Pauses the queue.
If a queue is paused then the system will stop dispatching tasks until the queue is resumed
via ResumeQueue . Tasks can still be added when
the queue is paused. A queue is paused if its state is
PAUSED .
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
String name = QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ();
Queue response = cloudTasksClient . pauseQueue ( name );
}
Parameter
Name
Description
name
String Required. The queue name. For example:
projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID
Returns
Type
Description
Queue
pauseQueueCallable()
public final UnaryCallable<PauseQueueRequest , Queue > pauseQueueCallable ()
Pauses the queue.
If a queue is paused then the system will stop dispatching tasks until the queue is resumed
via ResumeQueue . Tasks can still be added when
the queue is paused. A queue is paused if its state is
PAUSED .
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
PauseQueueRequest request =
PauseQueueRequest . newBuilder ()
. setName ( QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ())
. build ();
ApiFuture<Queue> future = cloudTasksClient . pauseQueueCallable (). futureCall ( request );
// Do something.
Queue response = future . get ();
}
Returns
Type
Description
UnaryCallable < PauseQueueRequest , Queue >
purgeQueue(PurgeQueueRequest request)
public final Queue purgeQueue ( PurgeQueueRequest request )
Purges a queue by deleting all of its tasks.
All tasks created before this method is called are permanently deleted.
Purge operations can take up to one minute to take effect. Tasks might be dispatched before
the purge takes effect. A purge is irreversible.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
PurgeQueueRequest request =
PurgeQueueRequest . newBuilder ()
. setName ( QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ())
. build ();
Queue response = cloudTasksClient . purgeQueue ( request );
}
Parameter
Name
Description
request
PurgeQueueRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Queue
purgeQueue(QueueName name)
public final Queue purgeQueue ( QueueName name )
Purges a queue by deleting all of its tasks.
All tasks created before this method is called are permanently deleted.
Purge operations can take up to one minute to take effect. Tasks might be dispatched before
the purge takes effect. A purge is irreversible.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
QueueName name = QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" );
Queue response = cloudTasksClient . purgeQueue ( name );
}
Parameter
Name
Description
name
QueueName Required. The queue name. For example:
projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID
Returns
Type
Description
Queue
purgeQueue(String name)
public final Queue purgeQueue ( String name )
Purges a queue by deleting all of its tasks.
All tasks created before this method is called are permanently deleted.
Purge operations can take up to one minute to take effect. Tasks might be dispatched before
the purge takes effect. A purge is irreversible.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
String name = QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ();
Queue response = cloudTasksClient . purgeQueue ( name );
}
Parameter
Name
Description
name
String Required. The queue name. For example:
projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID
Returns
Type
Description
Queue
purgeQueueCallable()
public final UnaryCallable<PurgeQueueRequest , Queue > purgeQueueCallable ()
Purges a queue by deleting all of its tasks.
All tasks created before this method is called are permanently deleted.
Purge operations can take up to one minute to take effect. Tasks might be dispatched before
the purge takes effect. A purge is irreversible.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
PurgeQueueRequest request =
PurgeQueueRequest . newBuilder ()
. setName ( QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ())
. build ();
ApiFuture<Queue> future = cloudTasksClient . purgeQueueCallable (). futureCall ( request );
// Do something.
Queue response = future . get ();
}
Returns
Type
Description
UnaryCallable < PurgeQueueRequest , Queue >
resumeQueue(QueueName name)
public final Queue resumeQueue ( QueueName name )
Resume a queue.
This method resumes a queue after it has been
PAUSED or
DISABLED . The state of a queue is stored in the
queue's state ; after calling this method it will be set to
RUNNING .
WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If
you are resuming high-QPS queues, follow the 500/50/5 pattern described in Managing Cloud
Tasks Scaling Risks .
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
QueueName name = QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" );
Queue response = cloudTasksClient . resumeQueue ( name );
}
Parameter
Name
Description
name
QueueName Required. The queue name. For example:
projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID
Returns
Type
Description
Queue
resumeQueue(ResumeQueueRequest request)
public final Queue resumeQueue ( ResumeQueueRequest request )
Resume a queue.
This method resumes a queue after it has been
PAUSED or
DISABLED . The state of a queue is stored in the
queue's state ; after calling this method it will be set to
RUNNING .
WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If
you are resuming high-QPS queues, follow the 500/50/5 pattern described in Managing Cloud
Tasks Scaling Risks .
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
ResumeQueueRequest request =
ResumeQueueRequest . newBuilder ()
. setName ( QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ())
. build ();
Queue response = cloudTasksClient . resumeQueue ( request );
}
Parameter
Name
Description
request
ResumeQueueRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Queue
resumeQueue(String name)
public final Queue resumeQueue ( String name )
Resume a queue.
This method resumes a queue after it has been
PAUSED or
DISABLED . The state of a queue is stored in the
queue's state ; after calling this method it will be set to
RUNNING .
WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If
you are resuming high-QPS queues, follow the 500/50/5 pattern described in Managing Cloud
Tasks Scaling Risks .
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
String name = QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ();
Queue response = cloudTasksClient . resumeQueue ( name );
}
Parameter
Name
Description
name
String Required. The queue name. For example:
projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID
Returns
Type
Description
Queue
resumeQueueCallable()
public final UnaryCallable<ResumeQueueRequest , Queue > resumeQueueCallable ()
Resume a queue.
This method resumes a queue after it has been
PAUSED or
DISABLED . The state of a queue is stored in the
queue's state ; after calling this method it will be set to
RUNNING .
WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If
you are resuming high-QPS queues, follow the 500/50/5 pattern described in Managing Cloud
Tasks Scaling Risks .
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
ResumeQueueRequest request =
ResumeQueueRequest . newBuilder ()
. setName ( QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ())
. build ();
ApiFuture<Queue> future = cloudTasksClient . resumeQueueCallable (). futureCall ( request );
// Do something.
Queue response = future . get ();
}
Returns
Type
Description
UnaryCallable < ResumeQueueRequest , Queue >
runTask(RunTaskRequest request)
public final Task runTask ( RunTaskRequest request )
Forces a task to run now.
When this method is called, Cloud Tasks will dispatch the task, even if the task is already
running, the queue has reached its RateLimits or is
PAUSED .
This command is meant to be used for manual debugging. For example,
RunTask can be used to retry a failed task after a
fix has been made or to manually force a task to be dispatched now.
The dispatched task is returned. That is, the task that is returned contains the
status after the task is dispatched but before the task is received by its
target.
If Cloud Tasks receives a successful response from the task's target, then the task will be
deleted; otherwise the task's schedule_time will be
reset to the time that RunTask was called plus the
retry delay specified in the queue's RetryConfig .
RunTask returns
NOT_FOUND when it is called on a task that has already succeeded
or permanently failed.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
RunTaskRequest request =
RunTaskRequest . newBuilder ()
. setName ( TaskName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" , "[TASK]" ). toString ())
. build ();
Task response = cloudTasksClient . runTask ( request );
}
Parameter
Name
Description
request
RunTaskRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Task
runTask(TaskName name)
public final Task runTask ( TaskName name )
Forces a task to run now.
When this method is called, Cloud Tasks will dispatch the task, even if the task is already
running, the queue has reached its RateLimits or is
PAUSED .
This command is meant to be used for manual debugging. For example,
RunTask can be used to retry a failed task after a
fix has been made or to manually force a task to be dispatched now.
The dispatched task is returned. That is, the task that is returned contains the
status after the task is dispatched but before the task is received by its
target.
If Cloud Tasks receives a successful response from the task's target, then the task will be
deleted; otherwise the task's schedule_time will be
reset to the time that RunTask was called plus the
retry delay specified in the queue's RetryConfig .
RunTask returns
NOT_FOUND when it is called on a task that has already succeeded
or permanently failed.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
TaskName name = TaskName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" , "[TASK]" );
Task response = cloudTasksClient . runTask ( name );
}
Parameter
Name
Description
name
TaskName Required. The task name. For example:
projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID
Returns
Type
Description
Task
runTask(String name)
public final Task runTask ( String name )
Forces a task to run now.
When this method is called, Cloud Tasks will dispatch the task, even if the task is already
running, the queue has reached its RateLimits or is
PAUSED .
This command is meant to be used for manual debugging. For example,
RunTask can be used to retry a failed task after a
fix has been made or to manually force a task to be dispatched now.
The dispatched task is returned. That is, the task that is returned contains the
status after the task is dispatched but before the task is received by its
target.
If Cloud Tasks receives a successful response from the task's target, then the task will be
deleted; otherwise the task's schedule_time will be
reset to the time that RunTask was called plus the
retry delay specified in the queue's RetryConfig .
RunTask returns
NOT_FOUND when it is called on a task that has already succeeded
or permanently failed.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
String name = TaskName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" , "[TASK]" ). toString ();
Task response = cloudTasksClient . runTask ( name );
}
Parameter
Name
Description
name
String Required. The task name. For example:
projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID
Returns
Type
Description
Task
runTaskCallable()
public final UnaryCallable<RunTaskRequest , Task > runTaskCallable ()
Forces a task to run now.
When this method is called, Cloud Tasks will dispatch the task, even if the task is already
running, the queue has reached its RateLimits or is
PAUSED .
This command is meant to be used for manual debugging. For example,
RunTask can be used to retry a failed task after a
fix has been made or to manually force a task to be dispatched now.
The dispatched task is returned. That is, the task that is returned contains the
status after the task is dispatched but before the task is received by its
target.
If Cloud Tasks receives a successful response from the task's target, then the task will be
deleted; otherwise the task's schedule_time will be
reset to the time that RunTask was called plus the
retry delay specified in the queue's RetryConfig .
RunTask returns
NOT_FOUND when it is called on a task that has already succeeded
or permanently failed.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
RunTaskRequest request =
RunTaskRequest . newBuilder ()
. setName ( TaskName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" , "[TASK]" ). toString ())
. build ();
ApiFuture<Task> future = cloudTasksClient . runTaskCallable (). futureCall ( request );
// Do something.
Task response = future . get ();
}
Returns
Type
Description
UnaryCallable < RunTaskRequest , Task >
setIamPolicy(ResourceName resource, Policy policy)
public final Policy setIamPolicy ( ResourceName resource , Policy policy )
Sets the access control policy for a Queue . Replaces any
existing policy.
Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level
permissions are required to use the Cloud Console.
Authorization requires the following Google IAM permission
on the specified resource parent:
cloudtasks.queues.setIamPolicy
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
ResourceName resource = QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" );
Policy policy = Policy . newBuilder (). build ();
Policy response = cloudTasksClient . setIamPolicy ( resource , policy );
}
Parameters
Name
Description
resource
com.google.api.resourcenames.ResourceName REQUIRED: The resource for which the policy is being specified. See the
operation documentation for the appropriate value for this field.
policy
com.google.iam.v1.Policy REQUIRED: The complete policy to be applied to the resource . The size of the
policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud
Platform services (such as Projects) might reject them.
Returns
Type
Description
com.google.iam.v1.Policy
setIamPolicy(QueueName queue, Policy policy)
public final Policy setIamPolicy ( QueueName queue , Policy policy )
Parameters
Name
Description
queue
QueueName
policy
com.google.iam.v1.Policy
Returns
Type
Description
com.google.iam.v1.Policy
setIamPolicy(SetIamPolicyRequest request)
public final Policy setIamPolicy ( SetIamPolicyRequest request )
Sets the access control policy for a Queue . Replaces any
existing policy.
Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level
permissions are required to use the Cloud Console.
Authorization requires the following Google IAM permission
on the specified resource parent:
cloudtasks.queues.setIamPolicy
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
SetIamPolicyRequest request =
SetIamPolicyRequest . newBuilder ()
. setResource ( QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ())
. setPolicy ( Policy . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
Policy response = cloudTasksClient . setIamPolicy ( request );
}
Parameter
Name
Description
request
com.google.iam.v1.SetIamPolicyRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
com.google.iam.v1.Policy
setIamPolicy(String resource, Policy policy)
public final Policy setIamPolicy ( String resource , Policy policy )
Sets the access control policy for a Queue . Replaces any
existing policy.
Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level
permissions are required to use the Cloud Console.
Authorization requires the following Google IAM permission
on the specified resource parent:
cloudtasks.queues.setIamPolicy
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
String resource = QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ();
Policy policy = Policy . newBuilder (). build ();
Policy response = cloudTasksClient . setIamPolicy ( resource , policy );
}
Parameters
Name
Description
resource
String REQUIRED: The resource for which the policy is being specified. See the
operation documentation for the appropriate value for this field.
policy
com.google.iam.v1.Policy REQUIRED: The complete policy to be applied to the resource . The size of the
policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud
Platform services (such as Projects) might reject them.
Returns
Type
Description
com.google.iam.v1.Policy
setIamPolicyCallable()
public final UnaryCallable<SetIamPolicyRequest , Policy > setIamPolicyCallable ()
Sets the access control policy for a Queue . Replaces any
existing policy.
Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level
permissions are required to use the Cloud Console.
Authorization requires the following Google IAM permission
on the specified resource parent:
cloudtasks.queues.setIamPolicy
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
SetIamPolicyRequest request =
SetIamPolicyRequest . newBuilder ()
. setResource ( QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ())
. setPolicy ( Policy . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
ApiFuture<Policy> future = cloudTasksClient . setIamPolicyCallable (). futureCall ( request );
// Do something.
Policy response = future . get ();
}
Returns
Type
Description
UnaryCallable < com.google.iam.v1.SetIamPolicyRequest , com.google.iam.v1.Policy >
shutdown()
public void shutdown ()
shutdownNow()
public void shutdownNow ()
testIamPermissions(ResourceName resource, List<String> permissions)
public final TestIamPermissionsResponse testIamPermissions ( ResourceName resource , List<String> permissions )
Returns permissions that a caller has on a Queue . If the
resource does not exist, this will return an empty set of permissions, not a
NOT_FOUND error.
Note: This operation is designed to be used for building permission-aware UIs and
command-line tools, not for authorization checking. This operation may "fail open" without
warning.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
ResourceName resource = QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" );
List<String> permissions = new ArrayList <> ();
TestIamPermissionsResponse response =
cloudTasksClient . testIamPermissions ( resource , permissions );
}
Parameters
Name
Description
resource
com.google.api.resourcenames.ResourceName REQUIRED: The resource for which the policy detail is being requested. See the
operation documentation for the appropriate value for this field.
permissions
List < String > The set of permissions to check for the resource . Permissions with
wildcards (such as '*' or 'storage.*') are not allowed. For more information see
IAM Overview .
Returns
Type
Description
com.google.iam.v1.TestIamPermissionsResponse
testIamPermissions(QueueName queue, List<String> permissions)
public final TestIamPermissionsResponse testIamPermissions ( QueueName queue , List<String> permissions )
Parameters
Name
Description
queue
QueueName
permissions
List < String >
Returns
Type
Description
com.google.iam.v1.TestIamPermissionsResponse
testIamPermissions(TestIamPermissionsRequest request)
public final TestIamPermissionsResponse testIamPermissions ( TestIamPermissionsRequest request )
Returns permissions that a caller has on a Queue . If the
resource does not exist, this will return an empty set of permissions, not a
NOT_FOUND error.
Note: This operation is designed to be used for building permission-aware UIs and
command-line tools, not for authorization checking. This operation may "fail open" without
warning.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
TestIamPermissionsRequest request =
TestIamPermissionsRequest . newBuilder ()
. setResource ( QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ())
. addAllPermissions ( new ArrayList<String> ())
. build ();
TestIamPermissionsResponse response = cloudTasksClient . testIamPermissions ( request );
}
Parameter
Name
Description
request
com.google.iam.v1.TestIamPermissionsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
com.google.iam.v1.TestIamPermissionsResponse
testIamPermissions(String resource, List<String> permissions)
public final TestIamPermissionsResponse testIamPermissions ( String resource , List<String> permissions )
Returns permissions that a caller has on a Queue . If the
resource does not exist, this will return an empty set of permissions, not a
NOT_FOUND error.
Note: This operation is designed to be used for building permission-aware UIs and
command-line tools, not for authorization checking. This operation may "fail open" without
warning.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
String resource = QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ();
List<String> permissions = new ArrayList <> ();
TestIamPermissionsResponse response =
cloudTasksClient . testIamPermissions ( resource , permissions );
}
Parameters
Name
Description
resource
String REQUIRED: The resource for which the policy detail is being requested. See the
operation documentation for the appropriate value for this field.
permissions
List < String > The set of permissions to check for the resource . Permissions with
wildcards (such as '*' or 'storage.*') are not allowed. For more information see
IAM Overview .
Returns
Type
Description
com.google.iam.v1.TestIamPermissionsResponse
testIamPermissionsCallable()
public final UnaryCallable<TestIamPermissionsRequest , TestIamPermissionsResponse > testIamPermissionsCallable ()
Returns permissions that a caller has on a Queue . If the
resource does not exist, this will return an empty set of permissions, not a
NOT_FOUND error.
Note: This operation is designed to be used for building permission-aware UIs and
command-line tools, not for authorization checking. This operation may "fail open" without
warning.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
TestIamPermissionsRequest request =
TestIamPermissionsRequest . newBuilder ()
. setResource ( QueueName . of ( "[PROJECT]" , "[LOCATION]" , "[QUEUE]" ). toString ())
. addAllPermissions ( new ArrayList<String> ())
. build ();
ApiFuture<TestIamPermissionsResponse> future =
cloudTasksClient . testIamPermissionsCallable (). futureCall ( request );
// Do something.
TestIamPermissionsResponse response = future . get ();
}
Returns
Type
Description
UnaryCallable < com.google.iam.v1.TestIamPermissionsRequest , com.google.iam.v1.TestIamPermissionsResponse >
updateQueue(Queue queue, FieldMask updateMask)
public final Queue updateQueue ( Queue queue , FieldMask updateMask )
Updates a queue.
This method creates the queue if it does not exist and updates the queue if it does exist.
Queues created with this method allow tasks to live for a maximum of 31 days. After a task
is 31 days old, the task will be deleted regardless of whether it was dispatched or not.
WARNING: Using this method may have unintended side effects if you are using an App Engine
queue.yaml or queue.xml file to manage your queues. Read Overview of Queue Management and
queue.yaml before using this method.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
Queue queue = Queue . newBuilder (). build ();
FieldMask updateMask = FieldMask . newBuilder (). build ();
Queue response = cloudTasksClient . updateQueue ( queue , updateMask );
}
Parameters
Name
Description
queue
Queue Required. The queue to create or update.
The queue's name must be specified.
Output only fields cannot be modified using UpdateQueue. Any value specified for an
output only field will be ignored. The queue's name
cannot be changed.
updateMask
FieldMask A mask used to specify which fields of the queue are being updated.
If empty, then all fields will be updated.
Returns
Type
Description
Queue
updateQueue(UpdateQueueRequest request)
public final Queue updateQueue ( UpdateQueueRequest request )
Updates a queue.
This method creates the queue if it does not exist and updates the queue if it does exist.
Queues created with this method allow tasks to live for a maximum of 31 days. After a task
is 31 days old, the task will be deleted regardless of whether it was dispatched or not.
WARNING: Using this method may have unintended side effects if you are using an App Engine
queue.yaml or queue.xml file to manage your queues. Read Overview of Queue Management and
queue.yaml before using this method.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
UpdateQueueRequest request =
UpdateQueueRequest . newBuilder ()
. setQueue ( Queue . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
Queue response = cloudTasksClient . updateQueue ( request );
}
Parameter
Name
Description
request
UpdateQueueRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Queue
updateQueueCallable()
public final UnaryCallable<UpdateQueueRequest , Queue > updateQueueCallable ()
Updates a queue.
This method creates the queue if it does not exist and updates the queue if it does exist.
Queues created with this method allow tasks to live for a maximum of 31 days. After a task
is 31 days old, the task will be deleted regardless of whether it was dispatched or not.
WARNING: Using this method may have unintended side effects if you are using an App Engine
queue.yaml or queue.xml file to manage your queues. Read Overview of Queue Management and
queue.yaml before using this method.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudTasksClient cloudTasksClient = CloudTasksClient . create ()) {
UpdateQueueRequest request =
UpdateQueueRequest . newBuilder ()
. setQueue ( Queue . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
ApiFuture<Queue> future = cloudTasksClient . updateQueueCallable (). futureCall ( request );
// Do something.
Queue response = future . get ();
}
Returns
Type
Description
UnaryCallable < UpdateQueueRequest , Queue >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
