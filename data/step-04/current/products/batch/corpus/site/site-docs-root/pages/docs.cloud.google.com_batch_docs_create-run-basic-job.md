---
title: "Create and run a basic job \_|\_ Batch \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/batch/docs/create-run-basic-job
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/batch/docs
source_metadata:
  url: https://docs.cloud.google.com/batch/docs/create-run-basic-job
  title: "Create and run a basic job \_|\_ Batch \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Batch
Guides
Send feedback
Create and run a basic job
Stay organized with collections
Save and categorize content based on your preferences.
This document explains the basics for Batch job creation:
how to create and run a job that is based on a script or container image
and use predefined and custom variables.
To learn more about creating and running jobs, see
Job creation and execution overview .
Before you begin
If you haven't used Batch before, review
Get started with Batch
and enable Batch by completing the
prerequisites for projects and users .
To get the permissions that
you need to create a job,
ask your administrator to grant you the
following IAM roles:
Batch Job Editor ( roles/batch.jobsEditor )
on the project
Service Account User ( roles/iam.serviceAccountUser )
on the job's service account , which by default is the default Compute Engine service account
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Each time you create a job, make sure the job has a valid network configuration.
If you don't have any specific networking requirements for your workload or
project and you haven't modified the default network for your project,
no action is required.
Otherwise, you need to configure networking when you create a job. Learn how to
configure networking for a job before you create a basic job, so you can
modify the examples below to meet your networking requirements.
For more information about the network configuration for a job, see
Batch networking overview .
Each time you create a job, make sure the job has a valid VM
operating system (OS) environment.
If you don't have any specific VM OS image or boot disk requirements for your
workload or project, no action is required.
Otherwise, you need to prepare a valid VM OS environment option.
Before creating a basic job, either allow the default configuration
for the VM OS environment or learn how to customize the VM OS environment
so you can modify the examples below to meet your requirements.
For more information about the VM OS environment for a job, see
VM OS environment overview .
Create a basic job
For information about all the fields you can specify for a job, see the
reference documentation for the
projects.locations.jobs REST resource .
To summarize, a job consists of an array of one or more tasks
that all run one or more
runnables ,
which are the executable script(s) and/or container(s) for your job.
To cover the basics, this section explains how to create an example job with
just one runnable, either a script or a container image:
If you want to use Batch to write jobs
that run a container image, see create a container job .
Otherwise, if you aren't sure if you want to use container images or if
you are unfamiliar with containers, creating a script job
is recommended.
The example job for both types of jobs contains a task group with an
array of 4 tasks. Each task prints a message and its index to the standard
output and Cloud Logging. The definition for this job specifies a
parallelism of 2, which indicates that the job should run on 2 VMs to allow
2 tasks to run at a time.
Create a basic container job
You can select or create a container image to provide the code and dependencies
for your job to run from any compute environment. For more information, see
Working with container images and
Running containers on VM instances .
You can create a basic container job using the Google Cloud console,
gcloud CLI, Batch API, Go, Java, Node.js, Python, or
C++.
Console
To create a basic container job using the Google Cloud console, do the
following:
In the Google Cloud console, go to the Job list page.
Go to Job list
Click add_box Create . The
Create batch job page opens. In the left pane, the
Job details page is selected.
Configure the Job details page:
Optional: In the Job name field, customize the job name.
For example, enter example-basic-job .
Configure the Task details section:
In the New runnable window, add at least one script
or container for this job to run.
For example, to add one container, do the following:
Select Container image URL (default).
In the Container image URL field, enter the URL for a
container image that you want to run for each task in this
job.
For example, to use the busybox Docker container
image , enter the
following URL:
gcr.io/google-containers/busybox
Optional: To override the container image's
ENTRYPOINT command, enter a command in the
Entry point field.
For example, enter the following:
/bin/sh
Optional: To override the container image's CMD command,
do the following:
Select the Override container image's CMD command
checkbox. A field appears.
In the field, enter one or more commands, separating
each command with a new line.
For example, enter the following commands:
-c
echo Hello world! This is task ${BATCH_TASK_INDEX}. This job has a total of ${BATCH_TASK_COUNT} tasks.
Click Done .
In the Task count field, enter the number of tasks for this
job. The value must be a whole number between 1 and the tasks per task group limit .
For example, enter 4 .
In the Parallelism field, enter the number of tasks to run
concurrently. The number cannot be larger than the total number
of tasks and must be a whole number between 1 and the parallel tasks per job limit .
For example, enter 2 .
Configure the Resource specifications page:
In the left pane, click Resource specifications .
The Resource specifications page opens.
In the VM provisioning model section, select one of the
following options for the
provisioning model for
this job's VMs:
If your job can withstand preemption and you want
discounted VMs, select Spot .
Otherwise, select Standard .
For example, select Standard (default).
Select the location for this job:
In the Region field, select a region.
For example, select us-central1 (Iowa) (default).
In the Zone field, do one of the following:
If you want to restrict this job to run in
a specific zone only, select a zone.
Otherwise, select any .
For example, select any (default).
Select one of the following
machine families :
For common workloads, click General purpose .
For performance-intensive workloads, click Compute optimized .
For memory-intensive workloads, click Memory optimized .
For accelerator-optimized workloads, click GPUs . For more
information, see
Create and run a job that uses GPUs .
For example, click General purpose (default).
In the Series field, select a
machine series
for this job's VMs.
For example, if you selected General purpose for the
machine family, select E2 (default).
In the Machine type field, select a machine type for this
job's VMs.
For example, if you selected E2 for the machine series, select
e2-medium (2 vCPU, 4 GB memory) (default).
Configure the amount of VM resources required for each task:
In the Cores field, enter the amount of
vCPUs per task.
For example, enter 1 (default).
In the Memory field, enter the amount of RAM in GB per task.
For example, enter 0.5 (default).
Optional: To review the job configuration, in the left pane,
click Preview .
Click Create .
The Job details page displays the job that you created.
gcloud
To create a basic container job using the gcloud CLI, do the
following:
Create a JSON file that specifies your job's configuration details. For
example, to create a basic container job, create a JSON file with the
following contents. For more information about all the fields you can
specify for a job, see the reference documentation for the
projects.locations.jobs REST resource .
Note: If you prefer, you can specify your job's configuration details in
a YAML file instead of a JSON file by converting JSON syntax to
YAML syntax yourself. However, the Batch documentation
only provides examples for JSON syntax. For more information, see the
gcloud batch jobs submit command .
{
"taskGroups" : [
{
"taskSpec" : {
"runnables" : [
{
"container" : {
CONTAINER
}
}
],
"computeResource" : {
"cpuMilli" : CORES ,
"memoryMib" : MEMORY
},
"maxRetryCount" : MAX_RETRY_COUNT ,
"maxRunDuration" : " MAX_RUN_DURATION "
},
"taskCount" : TASK_COUNT ,
"parallelism" : PARALLELISM
}
]
}
Replace the following:
CONTAINER : the container that each task runs.
At minimum, a container must specify an image in the imageUri
subfield, but additional subfields might also be required. For more
information, see the
container subfields
and the example container job in this section.
CORES : Optional. The amount of
cores—specifically vCPUs , which
usually represent half a physical core—to allocate for each task
in milliCPU units. If the cpuMilli field is not specified, the value
is set to 2000 (2 vCPUs).
MEMORY : Optional. The amount of memory to
allocate for each task in MB. If the memoryMib field is not
specified, the value is set to 2000 (2 GB).
MAX_RETRY_COUNT : Optional. The maximum number
of retries for a task. The value must be a whole number between 0
and 10 . If the maxRetryCount field is not specified, the value is
set to 0 , which means to not retry the task.
For more information about the maxRetryCount field, see
Automate task retries .
MAX_RUN_DURATION : Optional. The maximum time
a task is allowed to run before being retried or failing, formatted as
a value in seconds followed by s —for example, 3600s for
1 hour. If the maxRunDuration field is not specified, the
value is set to the
maximum run time for a job .
For more information about the maxRunDuration field, see
Limit run times for tasks and runnables using timeouts .
TASK_COUNT : Optional. The number of tasks for
the job. The value must be a whole number between 1 and the tasks per task group limit . If
the taskCount field is not specified, the value is set to 1 .
PARALLELISM : Optional. The number of tasks
the job runs concurrently. The number cannot be larger than the number
of tasks and must be a whole number between 1 and the parallel tasks per job limit . If the
parallelism field is not specified, the value is set to 1 .
Create a job by using the gcloud batch jobs submit command .
gcloud batch jobs submit JOB_NAME \
--location LOCATION \
--config JSON_CONFIGURATION_FILE
Replace the following:
JOB_NAME : the name of the job.
LOCATION : the location
of the job.
JSON_CONFIGURATION_FILE : the path for a JSON
file with the job's configuration details.
For example, to create a job that runs tasks using the
busybox Docker container image :
Create a JSON file in the current directory named
hello-world-container.json with the following contents:
{
"taskGroups" : [
{
"taskSpec" : {
"runnables" : [
{
"container" : {
"imageUri" : "gcr.io/google-containers/busybox" ,
"entrypoint" : "/bin/sh" ,
"commands" : [
"-c" ,
"echo Hello world! This is task ${BATCH_TASK_INDEX}. This job has a total of ${BATCH_TASK_COUNT} tasks."
]
}
}
],
"computeResource" : {
"cpuMilli" : 2000 ,
"memoryMib" : 16
},
"maxRetryCount" : 2 ,
"maxRunDuration" : "3600s"
},
"taskCount" : 4 ,
"parallelism" : 2
}
],
"allocationPolicy" : {
"instances" : [
{
"policy" : { "machineType" : "e2-standard-4" }
}
]
},
"labels" : {
"department" : "finance" ,
"env" : "testing"
},
"logsPolicy" : {
"destination" : "CLOUD_LOGGING"
}
}
Run the following command:
gcloud batch jobs submit example-container-job \
--location us-central1 \
--config hello-world-container.json
API
To create a basic container job using the Batch API, use
the jobs.create method .
For more information about all the fields you can specify for a job, see the
reference documentation for the projects.locations.jobs REST resource .
POST h tt ps : //batch.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /jobs?job_id= JOB_NAME
{
"taskGroups" : [
{
"taskSpec" : {
"runnables" : [
{
"container" : {
CONTAINER
}
}
],
"computeResource" : {
"cpuMilli" : CORES ,
"memoryMib" : MEMORY
},
"maxRetryCount" : MAX_RETRY_COUNT ,
"maxRunDuration" : " MAX_RUN_DURATION "
},
"taskCount" : TASK_COUNT ,
"parallelism" : PARALLELISM
}
]
}
Replace the following:
PROJECT_ID : the
project ID
of your project.
LOCATION : the location
of the job.
JOB_NAME : the name of the job.
CONTAINER : the container that each task runs.
At minimum, a container must specify an image in the imageUri
subfield, but additional subfields might also be required. For more
information, see the
container subfields
and the example container job in this section.
CORES : Optional. The amount of
cores—specifically vCPUs , which
usually represent half a physical core—to allocate for each task in
milliCPU units. If the cpuMilli field is not specified, the value is set
to 2000 (2 vCPUs).
MEMORY : Optional. The amount of memory to
allocate for each task in MB. If the memoryMib field is not specified,
the value is set to 2000 (2 GB).
MAX_RETRY_COUNT : Optional. The maximum number
of retries for a task. The value must be a whole number between 0
and 10 . If the maxRetryCount field is not specified, the value is
set to 0 , which means to not retry the task.
For more information about the maxRetryCount field, see
Automate task retries .
MAX_RUN_DURATION : Optional. The maximum time
a task is allowed to run before being retried or failing, formatted as
a value in seconds followed by s —for example, 3600s for
1 hour. If the maxRunDuration field is not specified, the value
is set to the
maximum run time for a job .
For more information about the maxRunDuration field, see
Limit run times for tasks and runnables using timeouts .
TASK_COUNT : Optional. The number of tasks for the
job, which must be a whole number between 1 and the tasks per task group limit . If the
taskCount field is not specified, the value is set to 1 .
PARALLELISM : Optional. The number of tasks the
job runs concurrently. The number cannot be larger than the number of
tasks and must be a whole number between 1 and the parallel tasks per job limit . If the
parallelism field is not specified, the value is set to 1 .
For example, to create a job that runs tasks using the
busybox Docker container image ,
use the following request:
POST h tt ps : //batch.googleapis.com/v1/projects/ PROJECT_ID /locations/us-central1/jobs?job_id=example-container-job
{
"taskGroups" : [
{
"taskSpec" : {
"runnables" : [
{
"container" : {
"imageUri" : "gcr.io/google-containers/busybox" ,
"entrypoint" : "/bin/sh" ,
"commands" : [
"-c" ,
"echo Hello world! This is task ${BATCH_TASK_INDEX}. This job has a total of ${BATCH_TASK_COUNT} tasks."
]
}
}
],
"computeResource" : {
"cpuMilli" : 2000 ,
"memoryMib" : 16
},
"maxRetryCount" : 2 ,
"maxRunDuration" : "3600s"
},
"taskCount" : 4 ,
"parallelism" : 2
}
],
"allocationPolicy" : {
"instances" : [
{
"policy" : { "machineType" : "e2-standard-4" }
}
]
},
"labels" : {
"department" : "finance" ,
"env" : "testing"
},
"logsPolicy" : {
"destination" : "CLOUD_LOGGING"
}
}
where PROJECT_ID is the
project ID
of your project.
Go
Go
For more information, see the
Batch Go API
reference documentation .
To authenticate to Batch, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
batch "cloud.google.com/go/batch/apiv1"
"cloud.google.com/go/batch/apiv1/batchpb"
durationpb "google.golang.org/protobuf/types/known/durationpb"
)
// Creates and runs a job that runs the specified container
func createContainerJob ( w io . Writer , projectID , region , jobName string ) error {
// projectID := "your_project_id"
// region := "us-central1"
// jobName := "some-job"
ctx := context . Background ()
batchClient , err := batch . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "NewClient: %w" , err )
}
defer batchClient . Close ()
container := & batchpb . Runnable_Container {
ImageUri : "gcr.io/google-containers/busybox" ,
Commands : [] string { "-c" , "echo Hello world! This is task ${BATCH_TASK_INDEX}. This job has a total of ${BATCH_TASK_COUNT} tasks." },
Entrypoint : "/bin/sh" ,
}
// We can specify what resources are requested by each task.
resources := & batchpb . ComputeResource {
// CpuMilli is milliseconds per cpu-second. This means the task requires 2 whole CPUs.
CpuMilli : 2000 ,
MemoryMib : 16 ,
}
taskSpec := & batchpb . TaskSpec {
Runnables : [] * batchpb . Runnable {{
Executable: &batchpb.Runnable_Container_{Container: container},
} },
ComputeResource : resources ,
MaxRunDuration : & durationpb . Duration {
Seconds : 3600 ,
},
MaxRetryCount : 2 ,
}
// Tasks are grouped inside a job using TaskGroups.
taskGroups := [] * batchpb . TaskGroup {
{
TaskCount : 4 ,
TaskSpec : taskSpec ,
},
}
// Policies are used to define on what kind of virtual machines the tasks will run on.
// In this case, we tell the system to use "e2-standard-4" machine type.
// Read more about machine types here: https://cloud.google.com/compute/docs/machine-types
allocationPolicy := & batchpb . AllocationPolicy {
Instances : [] * batchpb . AllocationPolicy_InstancePolicyOrTemplate {{
PolicyTemplate: &batchpb.AllocationPolicy_InstancePolicyOrTemplate_Policy{
Policy: &batchpb.AllocationPolicy_InstancePolicy{
MachineType: "e2-standard-4",
},
},
} },
}
// We use Cloud Logging as it's an out of the box available option
logsPolicy := & batchpb . LogsPolicy {
Destination : batchpb . LogsPolicy_CLOUD_LOGGING ,
}
jobLabels := map [ string ] string { "env" : "testing" , "type" : "container" }
// The job's parent is the region in which the job will run
parent := fmt . Sprintf ( "projects/%s/locations/%s" , projectID , region )
job := batchpb . Job {
TaskGroups : taskGroups ,
AllocationPolicy : allocationPolicy ,
Labels : jobLabels ,
LogsPolicy : logsPolicy ,
}
req := & batchpb . CreateJobRequest {
Parent : parent ,
JobId : jobName ,
Job : & job ,
}
created_job , err := batchClient . CreateJob ( ctx , req )
if err != nil {
return fmt . Errorf ( "unable to create job: %w" , err )
}
fmt . Fprintf ( w , "Job created: %v\n" , created_job )
return nil
}
Java
Java
For more information, see the
Batch Java API
reference documentation .
To authenticate to Batch, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.batch.v1. AllocationPolicy ;
import com.google.cloud.batch.v1. AllocationPolicy . InstancePolicy ;
import com.google.cloud.batch.v1. AllocationPolicy . InstancePolicyOrTemplate ;
import com.google.cloud.batch.v1. BatchServiceClient ;
import com.google.cloud.batch.v1. ComputeResource ;
import com.google.cloud.batch.v1. CreateJobRequest ;
import com.google.cloud.batch.v1. Job ;
import com.google.cloud.batch.v1. LogsPolicy ;
import com.google.cloud.batch.v1. LogsPolicy . Destination ;
import com.google.cloud.batch.v1. Runnable ;
import com.google.cloud.batch.v1. Runnable . Container ;
import com.google.cloud.batch.v1. TaskGroup ;
import com.google.cloud.batch.v1. TaskSpec ;
import com.google.protobuf. Duration ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
import java.util.concurrent.TimeUnit ;
import java.util.concurrent.TimeoutException ;
public class CreateWithContainerNoMounting {
public static void main ( String [] args )
throws IOException , ExecutionException , InterruptedException , TimeoutException {
// TODO(developer): Replace these variables before running the sample.
// Project ID or project number of the Cloud project you want to use.
String projectId = "YOUR_PROJECT_ID" ;
// Name of the region you want to use to run the job. Regions that are
// available for Batch are listed on: https://cloud.google.com/batch/docs/get-started#locations
String region = "europe-central2" ;
// The name of the job that will be created.
// It needs to be unique for each project and region pair.
String jobName = "JOB_NAME" ;
createContainerJob ( projectId , region , jobName );
}
// This method shows how to create a sample Batch Job that will run a simple command inside a
// container on Cloud Compute instances.
public static void createContainerJob ( String projectId , String region , String jobName )
throws IOException , ExecutionException , InterruptedException , TimeoutException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the `batchServiceClient.close()` method on the client to safely
// clean up any remaining background resources.
try ( BatchServiceClient batchServiceClient = BatchServiceClient . create ()) {
// Define what will be done as part of the job.
Runnable runnable =
Runnable . newBuilder ()
. setContainer (
Container . newBuilder ()
. setImageUri ( "gcr.io/google-containers/busybox" )
. setEntrypoint ( "/bin/sh" )
. addCommands ( "-c" )
. addCommands (
"echo Hello world! This is task ${BATCH_TASK_INDEX}. "
+ "This job has a total of ${BATCH_TASK_COUNT} tasks." )
. build ())
. build ();
// We can specify what resources are requested by each task.
ComputeResource computeResource =
ComputeResource . newBuilder ()
// In milliseconds per cpu-second. This means the task requires 2 whole CPUs.
. setCpuMilli ( 2000 )
// In MiB.
. setMemoryMib ( 16 )
. build ();
TaskSpec task =
TaskSpec . newBuilder ()
// Jobs can be divided into tasks. In this case, we have only one task.
. addRunnables ( runnable )
. setComputeResource ( computeResource )
. setMaxRetryCount ( 2 )
. setMaxRunDuration ( Duration . newBuilder (). setSeconds ( 3600 ). build ())
. build ();
// Tasks are grouped inside a job using TaskGroups.
// Currently, it's possible to have only one task group.
TaskGroup taskGroup = TaskGroup . newBuilder (). setTaskCount ( 4 ). setTaskSpec ( task ). build ();
// Policies are used to define on what kind of virtual machines the tasks will run on.
// In this case, we tell the system to use "e2-standard-4" machine type.
// Read more about machine types here: https://cloud.google.com/compute/docs/machine-types
InstancePolicy instancePolicy =
InstancePolicy . newBuilder (). setMachineType ( "e2-standard-4" ). build ();
AllocationPolicy allocationPolicy =
AllocationPolicy . newBuilder ()
. addInstances ( InstancePolicyOrTemplate . newBuilder (). setPolicy ( instancePolicy ). build ())
. build ();
Job job =
Job . newBuilder ()
. addTaskGroups ( taskGroup )
. setAllocationPolicy ( allocationPolicy )
. putLabels ( "env" , "testing" )
. putLabels ( "type" , "container" )
// We use Cloud Logging as it's an out of the box available option.
. setLogsPolicy (
LogsPolicy . newBuilder (). setDestination ( Destination . CLOUD_LOGGING ). build ())
. build ();
CreateJobRequest createJobRequest =
CreateJobRequest . newBuilder ()
// The job's parent is the region in which the job will run.
. setParent ( String . format ( "projects/%s/locations/%s" , projectId , region ))
. setJob ( job )
. setJobId ( jobName )
. build ();
Job result =
batchServiceClient
. createJobCallable ()
. futureCall ( createJobRequest )
. get ( 5 , TimeUnit . MINUTES );
System . out . printf ( "Successfully created the job: %s" , result . getName ());
}
}
}
Node.js
Node.js
For more information, see the
Batch Node.js API
reference documentation .
To authenticate to Batch, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment and replace these variables before running the sample.
*/
// const projectId = 'YOUR_PROJECT_ID';
/**
* The region you want to the job to run in. The regions that support Batch are listed here:
* https://cloud.google.com/batch/docs/get-started#locations
*/
// const region = 'us-central-1';
/**
* The name of the job that will be created.
* It needs to be unique for each project and region pair.
*/
// const jobName = 'YOUR_JOB_NAME';
// Imports the Batch library
const batchLib = require ( ' @google-cloud/batch ' );
const batch = batchLib . protos . google . cloud . batch . v1 ;
// Instantiates a client
const batchClient = new batchLib . v1 . BatchServiceClient ();
// Define what will be done as part of the job.
const task = new batch . TaskSpec ();
const runnable = new batch . Runnable ();
runnable . container = new batch . Runnable . Container ();
runnable . container . imageUri = 'gcr.io/google-containers/busybox' ;
runnable . container . entrypoint = '/bin/sh' ;
runnable . container . commands = [
'-c' ,
'echo Hello world! This is task ${BATCH_TASK_INDEX}. This job has a total of ${BATCH_TASK_COUNT} tasks.' ,
];
task . runnables = [ runnable ];
// We can specify what resources are requested by each task.
const resources = new batch . ComputeResource ();
resources . cpuMilli = 2000 ; // in milliseconds per cpu-second. This means the task requires 2 whole CPUs.
resources . memoryMib = 16 ;
task . computeResource = resources ;
task . maxRetryCount = 2 ;
task . maxRunDuration = { seconds : 3600 };
// Tasks are grouped inside a job using TaskGroups.
const group = new batch . TaskGroup ();
group . taskCount = 4 ;
group . taskSpec = task ;
// Policies are used to define on what kind of virtual machines the tasks will run on.
// In this case, we tell the system to use "e2-standard-4" machine type.
// Read more about machine types here: https://cloud.google.com/compute/docs/machine-types
const allocationPolicy = new batch . AllocationPolicy ();
const policy = new batch . AllocationPolicy . InstancePolicy ();
policy . machineType = 'e2-standard-4' ;
const instances = new batch . AllocationPolicy . InstancePolicyOrTemplate ();
instances . policy = policy ;
allocationPolicy . instances = [ instances ];
const job = new batch . Job ();
job . name = jobName ;
job . taskGroups = [ group ];
job . allocationPolicy = allocationPolicy ;
job . labels = { env : 'testing' , type : 'container' };
// We use Cloud Logging as it's an option available out of the box
job . logsPolicy = new batch . LogsPolicy ();
job . logsPolicy . destination = batch . LogsPolicy . Destination . CLOUD_LOGGING ;
// The job's parent is the project and region in which the job will run
const parent = `projects/ ${ projectId } /locations/ ${ region } ` ;
async function callCreateJob () {
// Construct request
const request = {
parent ,
jobId : jobName ,
job ,
};
// Run request
const response = await batchClient . createJob ( request );
console . log ( response );
}
await callCreateJob ();
Python
Python
For more information, see the
Batch Python API
reference documentation .
To authenticate to Batch, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from google.cloud import batch_v1
def create_container_job ( project_id : str , region : str , job_name : str ) - > batch_v1 . Job :
"""
This method shows how to create a sample Batch Job that will run
a simple command inside a container on Cloud Compute instances.
Args:
project_id: project ID or project number of the Cloud project you want to use.
region: name of the region you want to use to run the job. Regions that are
available for Batch are listed on: https://cloud.google.com/batch/docs/get-started#locations
job_name: the name of the job that will be created.
It needs to be unique for each project and region pair.
Returns:
A job object representing the job created.
"""
client = batch_v1 . BatchServiceClient ()
# Define what will be done as part of the job.
runnable = batch_v1 . Runnable ()
runnable . container = batch_v1 . Runnable . Container ()
runnable . container . image_uri = "gcr.io/google-containers/busybox"
runnable . container . entrypoint = "/bin/sh"
runnable . container . commands = [
"-c" ,
"echo Hello world! This is task $ {BATCH_TASK_INDEX} . This job has a total of $ {BATCH_TASK_COUNT} tasks." ,
]
# Jobs can be divided into tasks. In this case, we have only one task.
task = batch_v1 . TaskSpec ()
task . runnables = [ runnable ]
# We can specify what resources are requested by each task.
resources = batch_v1 . ComputeResource ()
resources . cpu_milli = 2000 # in milliseconds per cpu-second. This means the task requires 2 whole CPUs.
resources . memory_mib = 16 # in MiB
task . compute_resource = resources
task . max_retry_count = 2
task . max_run_duration = "3600s"
# Tasks are grouped inside a job using TaskGroups.
# Currently, it's possible to have only one task group.
group = batch_v1 . TaskGroup ()
group . task_count = 4
group . task_spec = task
# Policies are used to define on what kind of virtual machines the tasks will run on.
# In this case, we tell the system to use "e2-standard-4" machine type.
# Read more about machine types here: https://cloud.google.com/compute/docs/machine-types
policy = batch_v1 . AllocationPolicy . InstancePolicy ()
policy . machine_type = "e2-standard-4"
instances = batch_v1 . AllocationPolicy . InstancePolicyOrTemplate ()
instances . policy = policy
allocation_policy = batch_v1 . AllocationPolicy ()
allocation_policy . instances = [ instances ]
job = batch_v1 . Job ()
job . task_groups = [ group ]
job . allocation_policy = allocation_policy
job . labels = { "env" : "testing" , "type" : "container" }
# We use Cloud Logging as it's an out of the box available option
job . logs_policy = batch_v1 . LogsPolicy ()
job . logs_policy . destination = batch_v1 . LogsPolicy . Destination . CLOUD_LOGGING
create_request = batch_v1 . CreateJobRequest ()
create_request . job = job
create_request . job_id = job_name
# The job's parent is the region in which the job will run
create_request . parent = f "projects/ { project_id } /locations/ { region } "
return client . create_job ( create_request )
C++
C++
For more information, see the
Batch C++ API
reference documentation .
To authenticate to Batch, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
#include "google/cloud/batch/v1/batch_client.h"
[]( std :: string const & project_id , std :: string const & location_id ,
std :: string const & job_id ) {
// Initialize the request; start with the fields that depend on the sample
// input.
google :: cloud :: batch :: v1 :: CreateJobRequest request ;
request . set_parent ( "projects/" + project_id + "/locations/" + location_id );
request . set_job_id ( job_id );
// Most of the job description is fixed in this example; use a string to
// initialize it.
auto constexpr kText = R " pb(
task_groups {
task_count: 4
task_spec {
compute_resource { cpu_milli: 500 memory_mib: 16 }
max_retry_count: 2
max_run_duration { seconds: 3600 }
runnables {
container {
image_uri: "gcr.io/google-containers/busybox"
entrypoint: "/bin/sh"
commands: "-c"
commands: "echo Hello world! This is task ${BATCH_TASK_INDEX}. This job has a total of ${BATCH_TASK_COUNT} tasks."
}
}
}
}
allocation_policy {
instances {
policy { machine_type: "e2-standard-4" provisioning_model: STANDARD }
}
}
labels { key: "env" value: "testing" }
labels { key: "type" value: "container" }
logs_policy { destination: CLOUD_LOGGING }
)pb " ;
auto * job = request . mutable_job ();
if ( ! google :: protobuf :: TextFormat :: ParseFromString ( kText , job )) {
throw std :: runtime_error ( "Error parsing Job description" );
}
// Create a client and issue the request.
auto client = google :: cloud :: batch_v1 :: BatchServiceClient (
google :: cloud :: batch_v1 :: MakeBatchServiceConnection ());
auto response = client . CreateJob ( request );
if ( ! response ) throw std :: move ( response ). status ();
std :: cout << "Job : " << response - > DebugString () << " \n " ;
}
Create a basic script job
You can create a basic script job using the Google Cloud console,
gcloud CLI, Batch API, Go, Java, Node.js,
Python, or C++.
Console
To create a basic script job using the Google Cloud console, do the
following:
In the Google Cloud console, go to the Job list page.
Go to Job list
Click add_box Create . The
Create batch job page opens. In the left pane, the
Job details page is selected.
Configure the Job details page:
Optional: In the Job name field, customize the job name.
For example, enter example-basic-job .
Configure the Task details section:
In the New runnable window, add at least one script
or container for this job to run.
For example, to add one script, do the following:
Select Script . A field appears.
In the field, enter a script that you want to run for
each task in this job.
For example, enter the following script:
echo Hello world! This is task ${BATCH_TASK_INDEX}. This job has a total of ${BATCH_TASK_COUNT} tasks.
Click Done .
In the Task count field, enter the number of tasks for
this job. The value must be a whole number between
1 and the tasks per task group limit .
For example, enter 4 .
In the Parallelism field, enter the number of tasks to run
concurrently. The number cannot be larger than the total number
of tasks and must be a whole number between 1 and the parallel tasks per job limit .
For example, enter 2 .
Configure the Resource specifications page:
In the left pane, click Resource specifications .
The Resource specifications page opens.
In the VM provisioning model section, select one of the
following options for the
provisioning model for
this job's VMs:
If your job can withstand preemption and you want
discounted VMs, select Spot .
Otherwise, select Standard .
For example, select Standard (default).
Select the location for this job:
In the Region field, select a region.
For example, select us-central1 (Iowa) (default).
In the Zone field, do one of the following:
If you want to restrict this job to run in a
specific zone only, select a zone.
Otherwise, select any .
For example, select any (default).
Select one of the following
machine families :
For common workloads, click General purpose .
For performance-intensive workloads, click Compute optimized .
For memory-intensive workloads, click Memory optimized .
For accelerator-optimized workloads, click GPUs . For more
information, see
Create and run a job that uses GPUs .
For example, click General purpose (default).
In the Series field, select a
machine series
for this job's VMs.
For example, if you selected General purpose for the
machine family, select E2 (default).
In the Machine type field, select a machine type for this
job's VMs.
For example, if you selected E2 for the machine series, select
e2-medium (2 vCPU, 4 GB memory) (default).
Configure the amount of VM resources required for each task:
In the Cores field, enter the amount of
vCPUs per task.
For example, enter 1 (default).
In the Memory field, enter the amount of RAM in GB per task.
For example, enter 0.5 (default).
Optional: To review the job configuration, in the left pane,
click Preview .
Click Create .
The Job details page displays the job that you created.
gcloud
To create a basic script job using the gcloud CLI, do the
following:
Create a JSON file that specifies your job's configuration details. For
example, to create a basic script job, create a JSON file with the
following contents. For more information about all the fields you can
specify for a job, see the reference documentation for the
projects.locations.jobs REST resource .
Note: If you prefer, you can specify your job's configuration details in
a YAML file instead of a JSON file by converting JSON syntax to
YAML syntax yourself. However, the Batch documentation
only provides examples for JSON syntax. For more information, see the
gcloud batch jobs submit command .
{
"taskGroups" : [
{
"taskSpec" : {
"runnables" : [
{
"script" : {
SCRIPT
}
}
],
"computeResource" : {
"cpuMilli" : CORES ,
"memoryMib" : MEMORY
},
"maxRetryCount" : MAX_RETRY_COUNT ,
"maxRunDuration" : " MAX_RUN_DURATION "
},
"taskCount" : TASK_COUNT ,
"parallelism" : PARALLELISM
}
]
}
Replace the following:
SCRIPT : the script that each task runs. A
script must be defined either as text using the text subfield or
as the path to an accessible file using the path subfield. For more
information, see the
script subfields
and the example script job in this section.
CORES : Optional. The amount of
cores—specifically vCPUs , which
usually represent half a physical core—to allocate for each task
in milliCPU units. If the cpuMilli field is not specified, the value
is set to 2000 (2 vCPUs).
MEMORY : Optional. The amount of memory to
allocate for each task in MB. If the memoryMib field is not
specified, the value is set to 2000 (2 GB).
MAX_RETRY_COUNT : Optional. The maximum number
of retries for a task. The value must be a whole number between 0
and 10 . If the maxRetryCount field is not specified, the value is
set to 0 , which means to not retry the task.
For more information about the maxRetryCount field, see
Automate task retries .
MAX_RUN_DURATION : Optional. The maximum time
a task is allowed to run before being retried or failing, formatted as
a value in seconds followed by s —for example, 3600s for
1 hour. If the maxRunDuration field is not specified, the
value is set to the
maximum run time for a job .
For more information about the maxRunDuration field, see
Limit run times for tasks and runnables using timeouts .
TASK_COUNT : Optional. The number of tasks for
the job. The value must be a whole number between 1 and the tasks per task group limit . If
the taskCount field is not specified, the value is set to 1 .
PARALLELISM : Optional. The number of tasks
the job runs concurrently. The number cannot be larger than the number
of tasks and must be a whole number between 1 and the parallel tasks per job limit . If the
parallelism field is not specified, the value is set to 1 .
Create a job by using the gcloud batch jobs submit command .
gcloud batch jobs submit JOB_NAME \
--location LOCATION \
--config JSON_CONFIGURATION_FILE
Replace the following:
JOB_NAME : the name of the job.
LOCATION : the location
of the job.
JSON_CONFIGURATION_FILE : the path for a JSON
file with the job's configuration details.
For example, to create a job that runs tasks using a script:
Create a JSON file in the current directory named
hello-world-script.json with the following contents:
{
"taskGroups" : [
{
"taskSpec" : {
"runnables" : [
{
"script" : {
"text" : "echo Hello world! This is task ${BATCH_TASK_INDEX}. This job has a total of ${BATCH_TASK_COUNT} tasks."
}
}
],
"computeResource" : {
"cpuMilli" : 2000 ,
"memoryMib" : 16
},
"maxRetryCount" : 2 ,
"maxRunDuration" : "3600s"
},
"taskCount" : 4 ,
"parallelism" : 2
}
],
"allocationPolicy" : {
"instances" : [
{
"policy" : { "machineType" : "e2-standard-4" }
}
]
},
"labels" : {
"department" : "finance" ,
"env" : "testing"
},
"logsPolicy" : {
"destination" : "CLOUD_LOGGING"
}
}
Run the following command:
gcloud batch jobs submit example-script-job \
--location us-central1 \
--config hello-world-script.json
API
To create a basic script job using the Batch API, use the
jobs.create method .
For more information about all the fields you can specify for a job, see the
reference documentation for the projects.locations.jobs REST resource .
POST h tt ps : //batch.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /jobs?job_id= JOB_NAME
{
"taskGroups" : [
{
"taskSpec" : {
"runnables" : [
{
"script" : {
SCRIPT
}
}
],
"computeResource" : {
"cpuMilli" : CORES ,
"memoryMib" : MEMORY
},
"maxRetryCount" : MAX_RETRY_COUNT ,
"maxRunDuration" : " MAX_RUN_DURATION "
},
"taskCount" : TASK_COUNT ,
"parallelism" : PARALLELISM
}
]
}
Replace the following:
PROJECT_ID : the
project ID
of your project.
LOCATION : the location
of the job.
JOB_NAME : the name of the job.
SCRIPT : the script that each task runs. A
script must be defined either as text using the text subfield or
as the path to an accessible file using the path subfield. For more
information, see the
script subfields
and the example script job in this section.
CORES : Optional. The amount of
cores—specifically vCPUs , which
usually represent half a physical core—to allocate for each task in
milliCPU units. If the cpuMilli field is not specified, the value is set
to 2000 (2 vCPUs).
MEMORY : Optional. The amount of memory to
allocate for each task in MB. If the memoryMib field is not specified,
the value is set to 2000 (2 GB).
MAX_RETRY_COUNT : Optional. The maximum number
of retries for a task. The value must be a whole number between 0
and 10 . If the maxRetryCount field is not specified, the value is
set to 0 , which means to not retry the task.
For more information about the maxRetryCount field, see
Automate task retries .
MAX_RUN_DURATION : Optional. The maximum time
a task is allowed to run before being retried or failing, formatted as
a value in seconds followed by s —for example, 3600s for
1 hour. If the maxRunDuration field is not specified, the value
is set to the
maximum run time for a job .
For more information about the maxRunDuration field, see
Limit run times for tasks and runnables using timeouts .
TASK_COUNT : Optional. The number of tasks for the
job. The value must be a whole number between 1 and the tasks per task group limit . If the
taskCount field is not specified, the value is set to 1 .
PARALLELISM : Optional. The number of tasks the
job runs concurrently. The number cannot be larger than the number of
tasks and must be a whole number between 1 and the parallel tasks per job limit . If the
parallelism field is not specified, the value is set to 1 .
For example, to create a job that runs tasks using a script,
use the following request:
POST h tt ps : //batch.googleapis.com/v1/projects/ PROJECT_ID /locations/us-central1/jobs?job_id=example-script-job
{
"taskGroups" : [
{
"taskSpec" : {
"runnables" : [
{
"script" : {
"text" : "echo Hello world! This is task ${BATCH_TASK_INDEX}. This job has a total of ${BATCH_TASK_COUNT} tasks."
}
}
],
"computeResource" : {
"cpuMilli" : 2000 ,
"memoryMib" : 16
},
"maxRetryCount" : 2 ,
"maxRunDuration" : "3600s"
},
"taskCount" : 4 ,
"parallelism" : 2
}
],
"allocationPolicy" : {
"instances" : [
{
"policy" : { "machineType" : "e2-standard-4" }
}
]
},
"labels" : {
"department" : "finance" ,
"env" : "testing"
},
"logsPolicy" : {
"destination" : "CLOUD_LOGGING"
}
}
where PROJECT_ID is the
project ID
of your project.
Go
Go
For more information, see the
Batch Go API
reference documentation .
To authenticate to Batch, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
batch "cloud.google.com/go/batch/apiv1"
"cloud.google.com/go/batch/apiv1/batchpb"
durationpb "google.golang.org/protobuf/types/known/durationpb"
)
// Creates and runs a job that executes the specified script
func createScriptJob ( w io . Writer , projectID , region , jobName string ) error {
// projectID := "your_project_id"
// region := "us-central1"
// jobName := "some-job"
ctx := context . Background ()
batchClient , err := batch . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "NewClient: %w" , err )
}
defer batchClient . Close ()
// Define what will be done as part of the job.
command := & batchpb . Runnable_Script_Text {
Text : "echo Hello world! This is task ${BATCH_TASK_INDEX}. This job has a total of ${BATCH_TASK_COUNT} tasks." ,
}
// You can also run a script from a file. Just remember, that needs to be a script that's
// already on the VM that will be running the job.
// Using runnable.script.text and runnable.script.path is mutually exclusive.
// command := &batchpb.Runnable_Script_Path{
// Path: "/tmp/test.sh",
// }
// We can specify what resources are requested by each task.
resources := & batchpb . ComputeResource {
// CpuMilli is milliseconds per cpu-second. This means the task requires 2 whole CPUs.
CpuMilli : 2000 ,
MemoryMib : 16 ,
}
taskSpec := & batchpb . TaskSpec {
Runnables : [] * batchpb . Runnable {{
Executable: &batchpb.Runnable_Script_{
Script: &batchpb.Runnable_Script{Command: command},
},
} },
ComputeResource : resources ,
MaxRunDuration : & durationpb . Duration {
Seconds : 3600 ,
},
MaxRetryCount : 2 ,
}
// Tasks are grouped inside a job using TaskGroups.
taskGroups := [] * batchpb . TaskGroup {
{
TaskCount : 4 ,
TaskSpec : taskSpec ,
},
}
// Policies are used to define on what kind of virtual machines the tasks will run on.
// In this case, we tell the system to use "e2-standard-4" machine type.
// Read more about machine types here: https://cloud.google.com/compute/docs/machine-types
allocationPolicy := & batchpb . AllocationPolicy {
Instances : [] * batchpb . AllocationPolicy_InstancePolicyOrTemplate {{
PolicyTemplate: &batchpb.AllocationPolicy_InstancePolicyOrTemplate_Policy{
Policy: &batchpb.AllocationPolicy_InstancePolicy{
MachineType: "e2-standard-4",
},
},
} },
}
// We use Cloud Logging as it's an out of the box available option
logsPolicy := & batchpb . LogsPolicy {
Destination : batchpb . LogsPolicy_CLOUD_LOGGING ,
}
jobLabels := map [ string ] string { "env" : "testing" , "type" : "script" }
// The job's parent is the region in which the job will run
parent := fmt . Sprintf ( "projects/%s/locations/%s" , projectID , region )
job := batchpb . Job {
TaskGroups : taskGroups ,
AllocationPolicy : allocationPolicy ,
Labels : jobLabels ,
LogsPolicy : logsPolicy ,
}
req := & batchpb . CreateJobRequest {
Parent : parent ,
JobId : jobName ,
Job : & job ,
}
created_job , err := batchClient . CreateJob ( ctx , req )
if err != nil {
return fmt . Errorf ( "unable to create job: %w" , err )
}
fmt . Fprintf ( w , "Job created: %v\n" , created_job )
return nil
}
Java
Java
For more information, see the
Batch Java API
reference documentation .
To authenticate to Batch, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.batch.v1. AllocationPolicy ;
import com.google.cloud.batch.v1. AllocationPolicy . InstancePolicy ;
import com.google.cloud.batch.v1. AllocationPolicy . InstancePolicyOrTemplate ;
import com.google.cloud.batch.v1. BatchServiceClient ;
import com.google.cloud.batch.v1. ComputeResource ;
import com.google.cloud.batch.v1. CreateJobRequest ;
import com.google.cloud.batch.v1. Job ;
import com.google.cloud.batch.v1. LogsPolicy ;
import com.google.cloud.batch.v1. LogsPolicy . Destination ;
import com.google.cloud.batch.v1. Runnable ;
import com.google.cloud.batch.v1. Runnable . Script ;
import com.google.cloud.batch.v1. TaskGroup ;
import com.google.cloud.batch.v1. TaskSpec ;
import com.google.protobuf. Duration ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
import java.util.concurrent.TimeUnit ;
import java.util.concurrent.TimeoutException ;
public class CreateWithScriptNoMounting {
public static void main ( String [] args )
throws IOException , ExecutionException , InterruptedException , TimeoutException {
// TODO(developer): Replace these variables before running the sample.
// Project ID or project number of the Cloud project you want to use.
String projectId = "YOUR_PROJECT_ID" ;
// Name of the region you want to use to run the job. Regions that are
// available for Batch are listed on: https://cloud.google.com/batch/docs/get-started#locations
String region = "europe-central2" ;
// The name of the job that will be created.
// It needs to be unique for each project and region pair.
String jobName = "JOB_NAME" ;
createScriptJob ( projectId , region , jobName );
}
// This method shows how to create a sample Batch Job that will run
// a simple command on Cloud Compute instances.
public static void createScriptJob ( String projectId , String region , String jobName )
throws IOException , ExecutionException , InterruptedException , TimeoutException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the `batchServiceClient.close()` method on the client to safely
// clean up any remaining background resources.
try ( BatchServiceClient batchServiceClient = BatchServiceClient . create ()) {
// Define what will be done as part of the job.
Runnable runnable =
Runnable . newBuilder ()
. setScript (
Script . newBuilder ()
. setText (
"echo Hello world! This is task ${BATCH_TASK_INDEX}. "
+ "This job has a total of ${BATCH_TASK_COUNT} tasks." )
// You can also run a script from a file. Just remember, that needs to be a
// script that's already on the VM that will be running the job.
// Using setText() and setPath() is mutually exclusive.
// .setPath("/tmp/test.sh")
. build ())
. build ();
// We can specify what resources are requested by each task.
ComputeResource computeResource =
ComputeResource . newBuilder ()
// In milliseconds per cpu-second. This means the task requires 2 whole CPUs.
. setCpuMilli ( 2000 )
// In MiB.
. setMemoryMib ( 16 )
. build ();
TaskSpec task =
TaskSpec . newBuilder ()
// Jobs can be divided into tasks. In this case, we have only one task.
. addRunnables ( runnable )
. setComputeResource ( computeResource )
. setMaxRetryCount ( 2 )
. setMaxRunDuration ( Duration . newBuilder (). setSeconds ( 3600 ). build ())
. build ();
// Tasks are grouped inside a job using TaskGroups.
// Currently, it's possible to have only one task group.
TaskGroup taskGroup = TaskGroup . newBuilder (). setTaskCount ( 4 ). setTaskSpec ( task ). build ();
// Policies are used to define on what kind of virtual machines the tasks will run on.
// In this case, we tell the system to use "e2-standard-4" machine type.
// Read more about machine types here: https://cloud.google.com/compute/docs/machine-types
InstancePolicy instancePolicy =
InstancePolicy . newBuilder (). setMachineType ( "e2-standard-4" ). build ();
AllocationPolicy allocationPolicy =
AllocationPolicy . newBuilder ()
. addInstances ( InstancePolicyOrTemplate . newBuilder (). setPolicy ( instancePolicy ). build ())
. build ();
Job job =
Job . newBuilder ()
. addTaskGroups ( taskGroup )
. setAllocationPolicy ( allocationPolicy )
. putLabels ( "env" , "testing" )
. putLabels ( "type" , "script" )
// We use Cloud Logging as it's an out of the box available option.
. setLogsPolicy (
LogsPolicy . newBuilder (). setDestination ( Destination . CLOUD_LOGGING ). build ())
. build ();
CreateJobRequest createJobRequest =
CreateJobRequest . newBuilder ()
// The job's parent is the region in which the job will run.
. setParent ( String . format ( "projects/%s/locations/%s" , projectId , region ))
. setJob ( job )
. setJobId ( jobName )
. build ();
Job result =
batchServiceClient
. createJobCallable ()
. futureCall ( createJobRequest )
. get ( 5 , TimeUnit . MINUTES );
System . out . printf ( "Successfully created the job: %s" , result . getName ());
}
}
}
Node.js
Node.js
For more information, see the
Batch Node.js API
reference documentation .
To authenticate to Batch, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment and replace these variables before running the sample.
*/
// const projectId = 'YOUR_PROJECT_ID';
/**
* The region you want to the job to run in. The regions that support Batch are listed here:
* https://cloud.google.com/batch/docs/get-started#locations
*/
// const region = 'us-central-1';
/**
* The name of the job that will be created.
* It needs to be unique for each project and region pair.
*/
// const jobName = 'YOUR_JOB_NAME';
// Imports the Batch library
const batchLib = require ( ' @google-cloud/batch ' );
const batch = batchLib . protos . google . cloud . batch . v1 ;
// Instantiates a client
const batchClient = new batchLib . v1 . BatchServiceClient ();
// Define what will be done as part of the job.
const task = new batch . TaskSpec ();
const runnable = new batch . Runnable ();
runnable . script = new batch . Runnable . Script ();
runnable . script . text =
'echo Hello world! This is task ${BATCH_TASK_INDEX}. This job has a total of ${BATCH_TASK_COUNT} tasks.' ;
// You can also run a script from a file. Just remember, that needs to be a script that's
// already on the VM that will be running the job. Using runnable.script.text and runnable.script.path is mutually
// exclusive.
// runnable.script.path = '/tmp/test.sh'
task . runnables = [ runnable ];
// We can specify what resources are requested by each task.
const resources = new batch . ComputeResource ();
resources . cpuMilli = 2000 ; // in milliseconds per cpu-second. This means the task requires 2 whole CPUs.
resources . memoryMib = 16 ;
task . computeResource = resources ;
task . maxRetryCount = 2 ;
task . maxRunDuration = { seconds : 3600 };
// Tasks are grouped inside a job using TaskGroups.
const group = new batch . TaskGroup ();
group . taskCount = 4 ;
group . taskSpec = task ;
// Policies are used to define on what kind of virtual machines the tasks will run on.
// In this case, we tell the system to use "e2-standard-4" machine type.
// Read more about machine types here: https://cloud.google.com/compute/docs/machine-types
const allocationPolicy = new batch . AllocationPolicy ();
const policy = new batch . AllocationPolicy . InstancePolicy ();
policy . machineType = 'e2-standard-4' ;
const instances = new batch . AllocationPolicy . InstancePolicyOrTemplate ();
instances . policy = policy ;
allocationPolicy . instances = [ instances ];
const job = new batch . Job ();
job . name = jobName ;
job . taskGroups = [ group ];
job . allocationPolicy = allocationPolicy ;
job . labels = { env : 'testing' , type : 'script' };
// We use Cloud Logging as it's an option available out of the box
job . logsPolicy = new batch . LogsPolicy ();
job . logsPolicy . destination = batch . LogsPolicy . Destination . CLOUD_LOGGING ;
// The job's parent is the project and region in which the job will run
const parent = `projects/ ${ projectId } /locations/ ${ region } ` ;
async function callCreateJob () {
// Construct request
const request = {
parent ,
jobId : jobName ,
job ,
};
// Run request
const response = await batchClient . createJob ( request );
console . log ( response );
}
await callCreateJob ();
Python
Python
For more information, see the
Batch Python API
reference documentation .
To authenticate to Batch, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from google.cloud import batch_v1
def create_script_job ( project_id : str , region : str , job_name : str ) - > batch_v1 . Job :
"""
This method shows how to create a sample Batch Job that will run
a simple command on Cloud Compute instances.
Args:
project_id: project ID or project number of the Cloud project you want to use.
region: name of the region you want to use to run the job. Regions that are
available for Batch are listed on: https://cloud.google.com/batch/docs/get-started#locations
job_name: the name of the job that will be created.
It needs to be unique for each project and region pair.
Returns:
A job object representing the job created.
"""
client = batch_v1 . BatchServiceClient ()
# Define what will be done as part of the job.
task = batch_v1 . TaskSpec ()
runnable = batch_v1 . Runnable ()
runnable . script = batch_v1 . Runnable . Script ()
runnable . script . text = "echo Hello world! This is task $ {BATCH_TASK_INDEX} . This job has a total of $ {BATCH_TASK_COUNT} tasks."
# You can also run a script from a file. Just remember, that needs to be a script that's
# already on the VM that will be running the job. Using runnable.script.text and runnable.script.path is mutually
# exclusive.
# runnable.script.path = '/tmp/test.sh'
task . runnables = [ runnable ]
# We can specify what resources are requested by each task.
resources = batch_v1 . ComputeResource ()
resources . cpu_milli = 2000 # in milliseconds per cpu-second. This means the task requires 2 whole CPUs.
resources . memory_mib = 16
task . compute_resource = resources
task . max_retry_count = 2
task . max_run_duration = "3600s"
# Tasks are grouped inside a job using TaskGroups.
# Currently, it's possible to have only one task group.
group = batch_v1 . TaskGroup ()
group . task_count = 4
group . task_spec = task
# Policies are used to define on what kind of virtual machines the tasks will run on.
# In this case, we tell the system to use "e2-standard-4" machine type.
# Read more about machine types here: https://cloud.google.com/compute/docs/machine-types
allocation_policy = batch_v1 . AllocationPolicy ()
policy = batch_v1 . AllocationPolicy . InstancePolicy ()
policy . machine_type = "e2-standard-4"
instances = batch_v1 . AllocationPolicy . InstancePolicyOrTemplate ()
instances . policy = policy
allocation_policy . instances = [ instances ]
job = batch_v1 . Job ()
job . task_groups = [ group ]
job . allocation_policy = allocation_policy
job . labels = { "env" : "testing" , "type" : "script" }
# We use Cloud Logging as it's an out of the box available option
job . logs_policy = batch_v1 . LogsPolicy ()
job . logs_policy . destination = batch_v1 . LogsPolicy . Destination . CLOUD_LOGGING
create_request = batch_v1 . CreateJobRequest ()
create_request . job = job
create_request . job_id = job_name
# The job's parent is the region in which the job will run
create_request . parent = f "projects/ { project_id } /locations/ { region } "
return client . create_job ( create_request )
C++
C++
For more information, see the
Batch C++ API
reference documentation .
To authenticate to Batch, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
#include "google/cloud/batch/v1/batch_client.h"
[]( std :: string const & project_id , std :: string const & location_id ,
std :: string const & job_id ) {
// Initialize the request; start with the fields that depend on the sample
// input.
google :: cloud :: batch :: v1 :: CreateJobRequest request ;
request . set_parent ( "projects/" + project_id + "/locations/" + location_id );
request . set_job_id ( job_id );
// Most of the job description is fixed in this example; use a string to
// initialize it.
auto constexpr kText = R " pb(
task_groups {
task_count: 4
task_spec {
compute_resource { cpu_milli: 500 memory_mib: 16 }
max_retry_count: 2
max_run_duration { seconds: 3600 }
runnables {
script {
text: "echo Hello world! This is task ${BATCH_TASK_INDEX}. This job has a total of ${BATCH_TASK_COUNT} tasks."
}
}
}
}
allocation_policy {
instances {
policy { machine_type: "e2-standard-4" provisioning_model: STANDARD }
}
}
labels { key: "env" value: "testing" }
labels { key: "type" value: "script" }
logs_policy { destination: CLOUD_LOGGING }
)pb " ;
auto * job = request . mutable_job ();
if ( ! google :: protobuf :: TextFormat :: ParseFromString ( kText , job )) {
throw std :: runtime_error ( "Error parsing Job description" );
}
// Create a client and issue the request.
auto client = google :: cloud :: batch_v1 :: BatchServiceClient (
google :: cloud :: batch_v1 :: MakeBatchServiceConnection ());
auto response = client . CreateJob ( request );
if ( ! response ) throw std :: move ( response ). status ();
std :: cout << "Job : " << response - > DebugString () << " \n " ;
}
Use environment variables
Use environment variables
when you write a container image or script that you want a job to run.
You can use any of the environment variables that are predefined for all
Batch jobs and any custom environment variables that
you define while creating the job.
Use predefined environment variables
By default, the runnables in your job can use the following
predefined environment variables:
BATCH_TASK_COUNT : the total number of tasks in this task group.
BATCH_TASK_INDEX : the index number of this task in the task group.
The index of the first task is 0 and is incremented for
each additional task.
BATCH_HOSTS_FILE : the path to a file listing all the running VM
instances in this task group. To use this environment variable, the
requireHostsFile field
must be set to true .
BATCH_TASK_RETRY_ATTEMPT : the number of times that this task has already
been attempted. The value is 0 during the first attempt of a task
and is incremented for each following retry.
The total number of retries allowed for a task is determined by the value of
the maxRetryCount field, which is 0 if undefined.
For more information about retries, see
Automate task retries .
For an example of how to use predefined environment variables, see the
previous example runnables in Create a basic job
in this document.
Define and use custom environment variables
Optionally, you can define one or more custom environment variables in a job.
You define each variable in a specific environment based on the desired scope
of its data:
For a variable that has the same value for all tasks ,
use one of the following:
If the variable has the same value for all runnables , use the
environment of all runnables ( environment subfield of taskSpec ) .
Otherwise, if the variable has a separate value for all runnables ,
use one or more
environments of specific runnables ( environment subfield of runnables[] ) .
Otherwise, for an
array
variable that has a separate value for each task , use the
environment of all tasks ( taskEnvironment ) .
In the selected environment, you define the name and value(s) of each
variable by using one of the following environment subfields:
To define the variable directly in the job configuration JSON file, use the
standard variables ( variables ) subfield ,
as shown in this section. This option is recommended for data that you don't
want to encrypt.
To define the variable using encrypted data , you can use
Secret Manager or Cloud Key Management Service :
To use the encrypted contents of an existing
Secret Manager secret, use the
secret variables ( secretVariables ) subfield .
For more information about using secrets in a job, see
Protect sensitive data using Secret Manager .
To use the encrypted contents of an existing
Cloud Key Management Service key, use the
encrypted variables ( encryptedVariables ) subfield .
For more information about Cloud KMS keys, see the documentation
for Cloud Key Management Service .
You can define and use custom environment variables for
your job using the gcloud CLI or Batch API.
The following examples explain how to create two jobs that define and
use standard variables.
The first example job has a variable for a specific runnable.
The second example job has an array variable,
which has a different value for each task.
gcloud
If you want to define a job that passes an environment variable to a
runnable that each task runs, see the example for how to
Define and use an environment variable for a runnable .
Otherwise, if you want to define a job that passes a list of environment
variables to different tasks based on the task index, see the example for
how to Define and use an environment variable for each task .
Define and use an environment variable for a runnable
To create a job that passes environment variables to a runnable using the
gcloud CLI, use the
gcloud batch jobs submit command
and specify the environment variables in the job's configuration file.
For example, to create a script job that defines an environment variable
and passes it to the scripts of 3 tasks, make the following request:
Create a JSON file in the current directory named
hello-world-environment-variables.json with the following contents:
{
"taskGroups" : [
{
"taskSpec" : {
"runnables" : [
{
"script" : {
"text" : "echo Hello ${ VARIABLE_NAME }! This is task ${BATCH_TASK_INDEX}. This job has a total of ${BATCH_TASK_COUNT} tasks."
},
"environment" : {
"variables" : {
" VARIABLE_NAME " : " VARIABLE_VALUE "
}
}
}
],
"computeResource" : {
"cpuMilli" : 2000 ,
"memoryMib" : 16
}
},
"taskCount" : 3 ,
"parallelism" : 1
}
],
"allocationPolicy" : {
"instances" : [
{
"policy" : {
"machineType" : "e2-standard-4"
}
}
]
}
}
Replace the following:
VARIABLE_NAME : the name of the
environment variable
passed to each task. By convention, environment variable
names are capitalized .
VARIABLE_VALUE : Optional. The value of the
environment variable passed to each task.
Run the following command:
gcloud batch jobs submit example-environment-variables-job \
--location us-central1 \
--config hello-world-environment-variables.json
Define and use an environment variable for each task
To create a job that passes environment variables to a task based on task
index using the gcloud CLI, use the
gcloud batch jobs submit command
and specify the taskEnvironments array field in the job's configuration
file.
For example, to create a job that includes an array of 3 environment
variables with matching names and different values, and passes the
environment variables to the scripts of the tasks which indices match the
environment variables' indices in the array:
Create a JSON file in the current directory named
hello-world-task-environment-variables.json with the following
contents:
{
"taskGroups" : [
{
"taskSpec" : {
"runnables" : [
{
"script" : {
"text" : "echo Hello ${ TASK_VARIABLE_NAME }! This is task ${BATCH_TASK_INDEX}. This job has a total of ${BATCH_TASK_COUNT} tasks."
},
}
],
"computeResource" : {
"cpuMilli" : 2000 ,
"memoryMib" : 16
}
},
"taskCount" : 3 ,
"taskEnvironments" : [
{
"variables" : {
" TASK_VARIABLE_NAME " : " TASK_VARIABLE_VALUE_0 "
}
},
{
"variables" : {
" TASK_VARIABLE_NAME " : " TASK_VARIABLE_VALUE_1 "
}
},
{
"variables" : {
" TASK_VARIABLE_NAME " : " TASK_VARIABLE_VALUE_2 "
}
}
]
}
],
"allocationPolicy" : {
"instances" : [
{
"policy" : {
"machineType" : "e2-standard-4"
}
}
]
}
}
Replace the following:
TASK_VARIABLE_NAME : the name of the
task environment variables
passed to the tasks with matching indices. By
convention, environment variable names are
capitalized .
TASK_VARIABLE_VALUE_0 : the value of the
environment variable passed to the first task, for which
BATCH_TASK_INDEX is equal to 0 .
TASK_VARIABLE_VALUE_1 : the value of the
environment variable passed to the second task, for which
BATCH_TASK_INDEX is equal to 1 .
TASK_VARIABLE_VALUE_2 : the value of the
environment variable passed to the third task, for which
BATCH_TASK_INDEX is equal to 2 .
Note: If an environment variable is specified in the taskEnvironments
array field, the value of the taskCount field must then equal the
length of the taskEnvironments array. The maximum length of the
taskEnvironments array is 200.
Run the following command:
gcloud batch jobs submit example-task-environment-variables-job \
--location us-central1 \
--config hello-world-task-environment-variables.json
API
If you want to define a job that passes an environment variable to a
runnable that each task runs, see the example for how to
Define and use an environment variable for a runnable .
Otherwise, if you want to define a job that passes a list of environment
variables to different tasks based on the task index, see the example for
how to Define and use an environment variable for each task .
Define and use an environment variable for a runnable
To create a job that passes environment variables to a runnable using
Batch API, use the
gcloud batch jobs submit command
and specify the environment variables in the environment field.
For example, to create a job that includes an environment variable and
passes it to the scripts of 3 tasks, make the following request:
POST h tt ps : //batch.googleapis.com/v1/projects/<var>PROJECT_ID</var>/locations/us-central1/jobs?job_id=example-environment-variables-job
{
"taskGroups" : [
{
"taskSpec" : {
"runnables" : [
{
"script" : {
"text" : "echo Hello ${ VARIABLE_NAME }! This is task ${BATCH_TASK_INDEX}. This job has a total of ${BATCH_TASK_COUNT} tasks."
},
"environment" : {
"variables" : {
" VARIABLE_NAME " : " VARIABLE_VALUE "
}
}
}
],
"computeResource" : {
"cpuMilli" : 2000 ,
"memoryMib" : 16
}
},
"taskCount" : 3 ,
"parallelism" : 1
}
],
"allocationPolicy" : {
"instances" : [
{
"policy" : {
"machineType" : "e2-standard-4"
}
}
]
}
}
Replace the following:
PROJECT_ID : the
project ID
of your project.
VARIABLE_NAME : the name of the
environment
variable passed to each task. By convention, environment variable names
are capitalized .
VARIABLE_VALUE : the value of the environment
variable passed to each task.
Define and use an environment variable for each task
To create a job that passes environment variables to a task based on task
index using Batch API, use the jobs.create method
and specify the environment variables in the taskEnvironments array field.
For example, to create a job that includes an array of 3 environment
variables with matching names and different values, and passes the
environment variables to the scripts of 3 tasks based on their indices,
make the following request:
POST h tt ps : //batch.googleapis.com/v1/projects/<var>PROJECT_ID</var>/locations/us-central1/jobs?job_id=example-task-environment-variables-job
{
"taskGroups" : [
{
"taskSpec" : {
"runnables" : [
{
"script" : {
"text" : "echo Hello ${ TASK_VARIABLE_NAME }! This is task ${BATCH_TASK_INDEX}. This job has a total of ${BATCH_TASK_COUNT} tasks."
},
}
],
"computeResource" : {
"cpuMilli" : 2000 ,
"memoryMib" : 16
}
},
"taskCount" : 3 ,
"taskEnvironments" : [
{
"variables" : {
" TASK_VARIABLE_NAME " : " TASK_VARIABLE_VALUE_0 "
}
},
{
"variables" : {
" TASK_VARIABLE_NAME " : " TASK_VARIABLE_VALUE_1 "
}
},
{
"variables" : {
" TASK_VARIABLE_NAME " : " TASK_VARIABLE_VALUE_2 "
}
}
]
}
],
"allocationPolicy" : {
"instances" : [
{
"policy" : { "machineType" : "e2-standard-4" }
}
]
}
}
Replace the following:
PROJECT_ID : the
project ID
of your project.
TASK_VARIABLE_NAME : the name of the environment
variables passed to the tasks with matching indices. By convention,
environment variable names are
capitalized .
TASK_VARIABLE_VALUE_0 : the value of the
environment variable passed to the first task, for which
BATCH_TASK_INDEX is equal to 0 .
TASK_VARIABLE_VALUE_1 : the value of the
environment variable passed to the second task, for which
BATCH_TASK_INDEX is equal to 1 .
TASK_VARIABLE_VALUE_2 : the value of the
environment variable passed to the third task, for which
BATCH_TASK_INDEX is equal to 2 .
Note: If an environment variable is specified in the taskEnvironments
array field, the taskCount field's value must then equal the length of the
taskEnvironments array. The maximum length of the taskEnvironments array
is 200.
What's next
If you have issues creating or running a job, see Troubleshooting .
View jobs and tasks .
Learn about more job creation options .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
