---
title: "Quickstart: Create a cluster by using client libraries \_|\_ Managed Service\
  \ for Apache Spark \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-client-libraries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-client-libraries
  title: "Quickstart: Create a cluster by using client libraries \_|\_ Managed Service\
    \ for Apache Spark \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

"Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
Home
Documentation
Data analytics
Managed Service for Apache Spark
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create a cluster by using client libraries
The sample code listed, below, shows you how to use the Cloud Client Libraries to create
a Managed Service for Apache Spark cluster, run a job on the cluster, then delete the
cluster.
You can also perform these tasks using:
API REST requests in
Quickstarts Using the API Explorer
the Google Cloud console in
Create a cluster by using the Google Cloud console
the Google Cloud CLI in
Create a cluster by using the Google Cloud CLI
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Dataproc API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Dataproc API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Run the Code
Try the walkthrough: Click Open in Cloud Shell
to run a Python Cloud Client Libraries walkthrough that creates a
cluster, runs a PySpark job, then deletes the cluster.
Open in Cloud Shell
Go
Install the client library
For more information, See Setting up your development environment .
Set up authentication
Clone and run the sample GitHub code.
Selecting a PySpark input file:
The Google Client Library code samples, below, run a PySpark job that you specify
as an input parameter. You can pass in the simple
"Hello World" PySpark app located in Cloud Storage at
gs://dataproc-examples/pyspark/hello-world/hello-world.py or your own
PySpark app. See Uploading objects to learn
more about uploading files to Cloud Storage.
// This quickstart shows how you can use the Dataproc Client library to create a
// Dataproc cluster, submit a PySpark job to the cluster, wait for the job to finish
// and finally delete the cluster.
//
// Usage:
//
// go build
// ./quickstart --project_id <PROJECT_ID> --region <REGION> \
// --cluster_name <CLUSTER_NAME> --job_file_path <GCS_JOB_FILE_PATH>
package main
import (
"context"
"flag"
"fmt"
"io"
"log"
"regexp"
dataproc "cloud.google.com/go/dataproc/apiv1"
"cloud.google.com/go/dataproc/apiv1/dataprocpb"
"cloud.google.com/go/storage"
"google.golang.org/api/option"
)
func main () {
var projectID , clusterName , region , jobFilePath string
flag . StringVar ( & projectID , "project_id" , "" , "Cloud Project ID, used for creating resources." )
flag . StringVar ( & region , "region" , "" , "Region that resources should be created in." )
flag . StringVar ( & clusterName , "cluster_name" , "" , "Name of Cloud Dataproc cluster to create." )
flag . StringVar ( & jobFilePath , "job_file_path" , "" , "Path to job file in GCS." )
flag . Parse ()
ctx := context . Background ()
// Create the cluster client.
endpoint := fmt . Sprintf ( "%s-dataproc.googleapis.com:443" , region )
clusterClient , err := dataproc . NewClusterControllerClient ( ctx , option . WithEndpoint ( endpoint ))
if err != nil {
log . Fatalf ( "error creating the cluster client: %s\n" , err )
}
// Create the cluster config.
createReq := & dataprocpb . CreateClusterRequest {
ProjectId : projectID ,
Region : region ,
Cluster : & dataprocpb . Cluster {
ProjectId : projectID ,
ClusterName : clusterName ,
Config : & dataprocpb . ClusterConfig {
MasterConfig : & dataprocpb . InstanceGroupConfig {
NumInstances : 1 ,
MachineTypeUri : "n1-standard-2" ,
},
WorkerConfig : & dataprocpb . InstanceGroupConfig {
NumInstances : 2 ,
MachineTypeUri : "n1-standard-2" ,
},
},
},
}
// Create the cluster.
createOp , err := clusterClient . CreateCluster ( ctx , createReq )
if err != nil {
log . Fatalf ( "error submitting the cluster creation request: %v\n" , err )
}
createResp , err := createOp . Wait ( ctx )
if err != nil {
log . Fatalf ( "error creating the cluster: %v\n" , err )
}
// Defer cluster deletion.
defer func () {
dReq := & dataprocpb . DeleteClusterRequest {
ProjectId : projectID ,
Region : region ,
ClusterName : clusterName ,
}
deleteOp , err := clusterClient . DeleteCluster ( ctx , dReq )
deleteOp . Wait ( ctx )
if err != nil {
fmt . Printf ( "error deleting cluster %q: %v\n" , clusterName , err )
return
}
fmt . Printf ( "Cluster %q successfully deleted\n" , clusterName )
}()
// Output a success message.
fmt . Printf ( "Cluster created successfully: %q\n" , createResp . ClusterName )
// Create the job client.
jobClient , err := dataproc . NewJobControllerClient ( ctx , option . WithEndpoint ( endpoint ))
// Create the job config.
submitJobReq := & dataprocpb . SubmitJobRequest {
ProjectId : projectID ,
Region : region ,
Job : & dataprocpb . Job {
Placement : & dataprocpb . JobPlacement {
ClusterName : clusterName ,
},
TypeJob : & dataprocpb . Job_PysparkJob {
PysparkJob : & dataprocpb . PySparkJob {
MainPythonFileUri : jobFilePath ,
},
},
},
}
submitJobOp , err := jobClient . SubmitJobAsOperation ( ctx , submitJobReq )
if err != nil {
fmt . Printf ( "error with request to submitting job: %v\n" , err )
return
}
submitJobResp , err := submitJobOp . Wait ( ctx )
if err != nil {
fmt . Printf ( "error submitting job: %v\n" , err )
return
}
re := regexp . MustCompile ( "gs://(.+?)/(.+)" )
matches := re . FindStringSubmatch ( submitJobResp . DriverOutputResourceUri )
if len ( matches ) < 3 {
fmt . Printf ( "regex error: %s\n" , submitJobResp . DriverOutputResourceUri )
return
}
// Dataproc job outget gets saved to a GCS bucket allocated to it.
storageClient , err := storage . NewClient ( ctx )
if err != nil {
fmt . Printf ( "error creating storage client: %v\n" , err )
return
}
obj := fmt . Sprintf ( "%s.000000000" , matches [ 2 ])
reader , err := storageClient . Bucket ( matches [ 1 ]). Object ( obj ). NewReader ( ctx )
if err != nil {
fmt . Printf ( "error reading job output: %v\n" , err )
return
}
defer reader . Close ()
body , err := io . ReadAll ( reader )
if err != nil {
fmt . Printf ( "could not read output from Dataproc Job: %v\n" , err )
return
}
fmt . Printf ( "Job finished successfully: %s" , body )
}
Java
Install the client library
For more information, See Setting Up a Java Development Environment .
Set up authentication
Clone and run the sample GitHub code.
Selecting a PySpark input file:
The Google Client Library code samples, below, run a PySpark job that you specify
as an input parameter. You can pass in the simple
"Hello World" PySpark app located in Cloud Storage at
gs://dataproc-examples/pyspark/hello-world/hello-world.py or your own
PySpark app. See Uploading objects to learn
more about uploading files to Cloud Storage.
/* This quickstart sample walks a user through creating a Cloud Dataproc
* cluster, submitting a PySpark job from Google Cloud Storage to the
* cluster, reading the output of the job and deleting the cluster, all
* using the Java client library.
*
* Usage:
* mvn clean package -DskipTests
*
* mvn exec:java -Dexec.args="<PROJECT_ID> <REGION> <CLUSTER_NAME> <GCS_JOB_FILE_PATH>"
*
* You can also set these arguments in the main function instead of providing them via the CLI.
*/
import com.google.api.gax.longrunning. OperationFuture ;
import com.google.cloud.dataproc.v1. Cluster ;
import com.google.cloud.dataproc.v1. ClusterConfig ;
import com.google.cloud.dataproc.v1. ClusterControllerClient ;
import com.google.cloud.dataproc.v1. ClusterControllerSettings ;
import com.google.cloud.dataproc.v1. ClusterOperationMetadata ;
import com.google.cloud.dataproc.v1. InstanceGroupConfig ;
import com.google.cloud.dataproc.v1. Job ;
import com.google.cloud.dataproc.v1. JobControllerClient ;
import com.google.cloud.dataproc.v1. JobControllerSettings ;
import com.google.cloud.dataproc.v1. JobMetadata ;
import com.google.cloud.dataproc.v1. JobPlacement ;
import com.google.cloud.dataproc.v1. PySparkJob ;
import com.google.cloud.storage. Blob ;
import com.google.cloud.storage. Storage ;
import com.google.cloud.storage. StorageOptions ;
import com.google.protobuf. Empty ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
import java.util.regex.Matcher ;
import java.util.regex.Pattern ;
public class Quickstart {
public static void quickstart (
String projectId , String region , String clusterName , String jobFilePath )
throws IOException , InterruptedException {
String myEndpoint = String . format ( "%s-dataproc.googleapis.com:443" , region );
// Configure the settings for the cluster controller client.
ClusterControllerSettings clusterControllerSettings =
ClusterControllerSettings . newBuilder (). setEndpoint ( myEndpoint ). build ();
// Configure the settings for the job controller client.
JobControllerSettings jobControllerSettings =
JobControllerSettings . newBuilder (). setEndpoint ( myEndpoint ). build ();
// Create both a cluster controller client and job controller client with the
// configured settings. The client only needs to be created once and can be reused for
// multiple requests. Using a try-with-resources closes the client, but this can also be done
// manually with the .close() method.
try ( ClusterControllerClient clusterControllerClient =
ClusterControllerClient . create ( clusterControllerSettings );
JobControllerClient jobControllerClient =
JobControllerClient . create ( jobControllerSettings )) {
// Configure the settings for our cluster.
InstanceGroupConfig masterConfig =
InstanceGroupConfig . newBuilder ()
. setMachineTypeUri ( "n1-standard-2" )
. setNumInstances ( 1 )
. build ();
InstanceGroupConfig workerConfig =
InstanceGroupConfig . newBuilder ()
. setMachineTypeUri ( "n1-standard-2" )
. setNumInstances ( 2 )
. build ();
ClusterConfig clusterConfig =
ClusterConfig . newBuilder ()
. setMasterConfig ( masterConfig )
. setWorkerConfig ( workerConfig )
. build ();
// Create the cluster object with the desired cluster config.
Cluster cluster =
Cluster . newBuilder (). setClusterName ( clusterName ). setConfig ( clusterConfig ). build ();
// Create the Cloud Dataproc cluster.
OperationFuture<Cluster , ClusterOperationMetadata > createClusterAsyncRequest =
clusterControllerClient . createClusterAsync ( projectId , region , cluster );
Cluster clusterResponse = createClusterAsyncRequest . get ();
System . out . println (
String . format ( "Cluster created successfully: %s" , clusterResponse . getClusterName ()));
// Configure the settings for our job.
JobPlacement jobPlacement = JobPlacement . newBuilder (). setClusterName ( clusterName ). build ();
PySparkJob pySparkJob = PySparkJob . newBuilder (). setMainPythonFileUri ( jobFilePath ). build ();
Job job = Job . newBuilder (). setPlacement ( jobPlacement ). setPysparkJob ( pySparkJob ). build ();
// Submit an asynchronous request to execute the job.
OperationFuture<Job , JobMetadata > submitJobAsOperationAsyncRequest =
jobControllerClient . submitJobAsOperationAsync ( projectId , region , job );
Job jobResponse = submitJobAsOperationAsyncRequest . get ();
// Print output from Google Cloud Storage.
Matcher matches =
Pattern . compile ( "gs://(.*?)/(.*)" ). matcher ( jobResponse . getDriverOutputResourceUri ());
matches . matches ();
Storage storage = StorageOptions . getDefaultInstance (). getService ();
Blob blob = storage . get ( matches . group ( 1 ), String . format ( "%s.000000000" , matches . group ( 2 )));
System . out . println (
String . format ( "Job finished successfully: %s" , new String ( blob . getContent ())));
// Delete the cluster.
OperationFuture<Empty , ClusterOperationMetadata > deleteClusterAsyncRequest =
clusterControllerClient . deleteClusterAsync ( projectId , region , clusterName );
deleteClusterAsyncRequest . get ();
System . out . println ( String . format ( "Cluster \"%s\" successfully deleted." , clusterName ));
} catch ( ExecutionException e ) {
System . err . println ( String . format ( "quickstart: %s " , e . getMessage ()));
}
}
public static void main ( String ... args ) throws IOException , InterruptedException {
if ( args . length != 4 ) {
System . err . println (
"Insufficient number of parameters provided. Please make sure a "
+ "PROJECT_ID, REGION, CLUSTER_NAME and JOB_FILE_PATH are provided, in this order." );
return ;
}
String projectId = args [ 0 ] ; // project-id of project to create the cluster in
String region = args [ 1 ] ; // region to create the cluster
String clusterName = args [ 2 ] ; // name of the cluster
String jobFilePath = args [ 3 ] ; // location in GCS of the PySpark job
quickstart ( projectId , region , clusterName , jobFilePath );
}
}
Node.js
Install the client library
For more information, See Setting up a Node.js development environment .
Set up authentication
Clone and run the sample GitHub code.
Selecting a PySpark input file:
The Google Client Library code samples, below, run a PySpark job that you specify
as an input parameter. You can pass in the simple
"Hello World" PySpark app located in Cloud Storage at
gs://dataproc-examples/pyspark/hello-world/hello-world.py or your own
PySpark app. See Uploading objects to learn
more about uploading files to Cloud Storage.
// This quickstart sample walks a user through creating a Dataproc
// cluster, submitting a PySpark job from Google Cloud Storage to the
// cluster, reading the output of the job and deleting the cluster, all
// using the Node.js client library.
'use strict' ;
function main ( projectId , region , clusterName , jobFilePath ) {
const dataproc = require ( ' @google-cloud/dataproc ' );
const { Storage } = require ( ' @google-cloud/storage ' );
// Create a cluster client with the endpoint set to the desired cluster region
const clusterClient = new dataproc . v1 . ClusterControllerClient ({
apiEndpoint : ` ${ region } -dataproc.googleapis.com` ,
projectId : projectId ,
});
// Create a job client with the endpoint set to the desired cluster region
const jobClient = new dataproc . v1 . JobControllerClient ({
apiEndpoint : ` ${ region } -dataproc.googleapis.com` ,
projectId : projectId ,
});
async function quickstart () {
// Create the cluster config
const cluster = {
projectId : projectId ,
region : region ,
cluster : {
clusterName : clusterName ,
config : {
masterConfig : {
numInstances : 1 ,
machineTypeUri : 'n1-standard-2' ,
},
workerConfig : {
numInstances : 2 ,
machineTypeUri : 'n1-standard-2' ,
},
},
},
};
// Create the cluster
const [ operation ] = await clusterClient . createCluster ( cluster );
const [ response ] = await operation . promise ();
// Output a success message
console . log ( `Cluster created successfully: ${ response . clusterName } ` );
const job = {
projectId : projectId ,
region : region ,
job : {
placement : {
clusterName : clusterName ,
},
pysparkJob : {
mainPythonFileUri : jobFilePath ,
},
},
};
const [ jobOperation ] = await jobClient . submitJobAsOperation ( job );
const [ jobResponse ] = await jobOperation . promise ();
const matches =
jobResponse . driverOutputResourceUri . match ( 'gs://(.*?)/(.*)' );
const storage = new Storage ();
const output = await storage
. bucket ( matches [ 1 ])
. file ( ` ${ matches [ 2 ] } .000000000` )
. download ();
// Output a success message.
console . log ( `Job finished successfully: ${ output } ` );
// Delete the cluster once the job has terminated.
const deleteClusterReq = {
projectId : projectId ,
region : region ,
clusterName : clusterName ,
};
const [ deleteOperation ] =
await clusterClient . deleteCluster ( deleteClusterReq );
await deleteOperation . promise ();
// Output a success message
console . log ( `Cluster ${ clusterName } successfully deleted.` );
}
quickstart ();
}
const args = process . argv . slice ( 2 );
if ( args . length !== 4 ) {
console . log (
'Insufficient number of parameters provided. Please make sure a ' +
'PROJECT_ID, REGION, CLUSTER_NAME and JOB_FILE_PATH are provided, in this order.'
);
}
main (... args );
Python
Install the client library
For more information, See Setting Up a Python Development Environment .
Set up authentication
Clone and run the sample GitHub code.
Selecting a PySpark input file:
The Google Client Library code samples, below, run a PySpark job that you specify
as an input parameter. You can pass in the simple
"Hello World" PySpark app located in Cloud Storage at
gs://dataproc-examples/pyspark/hello-world/hello-world.py or your own
PySpark app. See Uploading objects to learn
more about uploading files to Cloud Storage.
"""
This quickstart sample walks a user through creating a Cloud Dataproc
cluster, submitting a PySpark job from Google Cloud Storage to the
cluster, reading the output of the job and deleting the cluster, all
using the Python client library.
Usage:
python quickstart.py --project_id <PROJECT_ID> --region <REGION> \
--cluster_name <CLUSTER_NAME> --job_file_path <GCS_JOB_FILE_PATH>
"""
import argparse
import re
from google.cloud import dataproc_v1 as dataproc
from google.cloud import storage
def quickstart ( project_id , region , cluster_name , job_file_path ):
# Create the cluster client.
cluster_client = dataproc . ClusterControllerClient (
client_options = { "api_endpoint" : " {} -dataproc.googleapis.com:443" . format ( region )}
)
# Create the cluster config.
cluster = {
"project_id" : project_id ,
"cluster_name" : cluster_name ,
"config" : {
"master_config" : {
"num_instances" : 1 ,
"machine_type_uri" : "n1-standard-2" ,
"disk_config" : { "boot_disk_size_gb" : 100 },
},
"worker_config" : {
"num_instances" : 2 ,
"machine_type_uri" : "n1-standard-2" ,
"disk_config" : { "boot_disk_size_gb" : 100 },
},
},
}
# Create the cluster.
operation = cluster_client . create_cluster (
request = { "project_id" : project_id , "region" : region , "cluster" : cluster }
)
result = operation . result ()
print ( "Cluster created successfully: {} " . format ( result . cluster_name ))
# Create the job client.
job_client = dataproc . JobControllerClient (
client_options = { "api_endpoint" : " {} -dataproc.googleapis.com:443" . format ( region )}
)
# Create the job config.
job = {
"placement" : { "cluster_name" : cluster_name },
"pyspark_job" : { "main_python_file_uri" : job_file_path },
}
operation = job_client . submit_job_as_operation (
request = { "project_id" : project_id , "region" : region , "job" : job }
)
response = operation . result ()
# Dataproc job output gets saved to the Google Cloud Storage bucket
# allocated to the job. Use a regex to obtain the bucket and blob info.
matches = re . match ( "gs://(.*?)/(.*)" , response . driver_output_resource_uri )
output = (
storage . Client ()
. get_bucket ( matches . group ( 1 ))
. blob ( f " { matches . group ( 2 ) } .000000000" )
. download_as_bytes ()
. decode ( "utf-8" )
)
print ( f "Job finished successfully: { output } " )
# Delete the cluster once the job has terminated.
operation = cluster_client . delete_cluster (
request = {
"project_id" : project_id ,
"region" : region ,
"cluster_name" : cluster_name ,
}
)
operation . result ()
print ( "Cluster {} successfully deleted." . format ( cluster_name ))
if __name__ == "__main__" :
parser = argparse . ArgumentParser (
description = __doc__ ,
formatter_class = argparse . RawDescriptionHelpFormatter ,
)
parser . add_argument (
"--project_id" ,
type = str ,
required = True ,
help = "Project to use for creating resources." ,
)
parser . add_argument (
"--region" ,
type = str ,
required = True ,
help = "Region where the resources should live." ,
)
parser . add_argument (
"--cluster_name" ,
type = str ,
required = True ,
help = "Name to use for creating a cluster." ,
)
parser . add_argument (
"--job_file_path" ,
type = str ,
required = True ,
help = "Job in GCS to execute against the cluster." ,
)
args = parser . parse_args ()
quickstart ( args . project_id , args . region , args . cluster_name , args . job_file_path )
View the output
The code outputs the job driver log to the default Managed Service for Apache Spark
staging bucket
in Cloud Storage. You can view job driver output from the Google Cloud console
in your project's Managed Service for Apache Spark
Jobs page in the Google Cloud console.
Click the Job ID to view job output on the Job details page.
What's next
See Managed Service for Apache Spark Cloud Client Library
Additional resources .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
