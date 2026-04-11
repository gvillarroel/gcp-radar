---
title: "Managed Service for Apache Spark client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/reference/libraries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/reference/libraries
  title: "Managed Service for Apache Spark client libraries \_|\_ Google Cloud Documentation"
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
Reference
Send feedback
Managed Service for Apache Spark client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Dataproc API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
However, we recommend using the older Google API Client
Libraries if running on
App Engine standard environment . Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
Managed Service for Apache Spark Cloud Client Libraries may
be in alpha or beta stage. See the library reference for details.
Install the client library
C++
See Setting up a C++ development environment
for details about this client library's requirements and install dependencies.
C#
Also see Google Cloud Libraries for .NET .
For more information, see Setting Up a C# Development Environment .
Go
go get cloud.google.com/go/dataproc/apiv1 For more information, see Install the Cloud Client Libraries for Go .
For more information, see Setting Up a Go Development Environment .
Java
If you are using Maven, add this to your pom.xml file:
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - dataproc < / artifactId >
< version> insert dataproc - library - version here < / version >
< / dependency >
If you are using Gradle, add this to your dependencies:
compile group : ' com . google . cloud ' , name : ' google - cloud - dataproc ' , version : ' insert dataproc - library - version here '
For more information, see Setting Up a Java Development Environment .
Node.js
npm install --save @google-cloud/dataproc
For more information, see Setting Up a Node.js Development Environment .
PHP
composer require google/cloud
For more information, see Using PHP on Google Cloud .
Python
pip install --upgrade google-cloud-dataproc
For more information, see Setting Up a Python Development Environment .
Ruby
gem install google-cloud-dataproc
For more information, see Setting Up a Ruby Development Environment .
Set up authentication
To authenticate calls to Google Cloud APIs, client libraries support
Application Default Credentials (ADC) ;
the libraries look for credentials in a set of defined locations and use those credentials
to authenticate requests to the API. With ADC, you can make
credentials available to your application in a variety of environments, such as local
development or production, without needing to modify your application code.
For production environments, the way you set up ADC depends on the service
and context. For more information, see Set up Application Default Credentials .
For a local development environment, you can set up ADC with the credentials
that are associated with your Google Account:
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
A sign-in screen appears. After you sign in, your credentials are stored in the
local credential file used by ADC .
Use the client library
The following example shows how to use the client library.
C++
+
#include "google/cloud/dataproc/v1/cluster_controller_client.h"
#include "google/cloud/common_options.h"
#include <iostream>
int main ( int argc , char * argv []) try {
if ( argc != 3 ) {
std :: cerr << "Usage: " << argv [ 0 ] << " project-id region \n " ;
return 1 ;
}
std :: string const project_id = argv [ 1 ];
std :: string const region = argv [ 2 ];
namespace dataproc = :: google :: cloud :: dataproc_v1 ;
auto client = dataproc :: ClusterControllerClient (
dataproc :: MakeClusterControllerConnection ( region == "global" ? ""
: region ));
for ( auto c : client . ListClusters ( project_id , region )) {
if ( ! c ) throw std :: move ( c ). status ();
std :: cout << c - > cluster_name () << " \n " ;
}
return 0 ;
} catch ( google :: cloud :: Status const & status ) {
std :: cerr << "google::cloud::Status thrown: " << status << " \n " ;
return 1 ;
}
Go
import (
"context"
"fmt"
"io"
dataproc "cloud.google.com/go/dataproc/apiv1"
"cloud.google.com/go/dataproc/apiv1/dataprocpb"
"google.golang.org/api/option"
)
func createCluster ( w io . Writer , projectID , region , clusterName string ) error {
// projectID := "your-project-id"
// region := "us-central1"
// clusterName := "your-cluster"
ctx := context . Background ()
// Create the cluster client.
endpoint := region + "-dataproc.googleapis.com:443"
clusterClient , err := dataproc . NewClusterControllerClient ( ctx , option . WithEndpoint ( endpoint ))
if err != nil {
return fmt . Errorf ( "dataproc.NewClusterControllerClient: %w" , err )
}
defer clusterClient . Close ()
// Create the cluster config.
req := & dataprocpb . CreateClusterRequest {
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
op , err := clusterClient . CreateCluster ( ctx , req )
if err != nil {
return fmt . Errorf ( "CreateCluster: %w" , err )
}
resp , err := op . Wait ( ctx )
if err != nil {
return fmt . Errorf ( "CreateCluster.Wait: %w" , err )
}
// Output a success message.
fmt . Fprintf ( w , "Cluster created successfully: %s" , resp . ClusterName )
return nil
}
Java
import com.google.api.gax.longrunning. OperationFuture ;
import com.google.cloud.dataproc.v1. Cluster ;
import com.google.cloud.dataproc.v1. ClusterConfig ;
import com.google.cloud.dataproc.v1. ClusterControllerClient ;
import com.google.cloud.dataproc.v1. ClusterControllerSettings ;
import com.google.cloud.dataproc.v1. ClusterOperationMetadata ;
import com.google.cloud.dataproc.v1. InstanceGroupConfig ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
public class CreateCluster {
public static void createCluster () throws IOException , InterruptedException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String region = "your-project-region" ;
String clusterName = "your-cluster-name" ;
createCluster ( projectId , region , clusterName );
}
public static void createCluster ( String projectId , String region , String clusterName )
throws IOException , InterruptedException {
String myEndpoint = String . format ( "%s-dataproc.googleapis.com:443" , region );
// Configure the settings for the cluster controller client.
ClusterControllerSettings clusterControllerSettings =
ClusterControllerSettings . newBuilder (). setEndpoint ( myEndpoint ). build ();
// Create a cluster controller client with the configured settings. The client only needs to be
// created once and can be reused for multiple requests. Using a try-with-resources
// closes the client, but this can also be done manually with the .close() method.
try ( ClusterControllerClient clusterControllerClient =
ClusterControllerClient . create ( clusterControllerSettings )) {
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
Cluster response = createClusterAsyncRequest . get ();
// Print out a success message.
System . out . printf ( "Cluster created successfully: %s" , response . getClusterName ());
} catch ( ExecutionException e ) {
System . err . println ( String . format ( "Error executing createCluster: %s " , e . getMessage ()));
}
}
}
Node.js
Also see the Dataproc Cloud Client Library Quickstarts .
const dataproc = require ( ' @google-cloud/dataproc ' );
// TODO(developer): Uncomment and set the following variables
// projectId = 'YOUR_PROJECT_ID'
// region = 'YOUR_CLUSTER_REGION'
// clusterName = 'YOUR_CLUSTER_NAME'
// Create a client with the endpoint set to the desired cluster region
const client = new dataproc . v1 . ClusterControllerClient ({
apiEndpoint : ` ${ region } -dataproc.googleapis.com` ,
projectId : projectId ,
});
async function createCluster () {
// Create the cluster config
const request = {
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
const [ operation ] = await client . createCluster ( request );
const [ response ] = await operation . promise ();
// Output a success message
console . log ( `Cluster created successfully: ${ response . clusterName } ` );
Python
from google.cloud import dataproc_v1 as dataproc
def create_cluster ( project_id , region , cluster_name ):
"""This sample walks a user through creating a Cloud Dataproc cluster
using the Python client library.
Args:
project_id (string): Project to use for creating resources.
region (string): Region where the resources should live.
cluster_name (string): Name to use for creating a cluster.
"""
# Create a client with the endpoint set to the desired cluster region.
cluster_client = dataproc . ClusterControllerClient (
client_options = { "api_endpoint" : f " { region } -dataproc.googleapis.com:443" }
)
# Create the cluster config.
cluster = {
"project_id" : project_id ,
"cluster_name" : cluster_name ,
"config" : {
"master_config" : { "num_instances" : 1 , "machine_type_uri" : "n1-standard-2" },
"worker_config" : { "num_instances" : 2 , "machine_type_uri" : "n1-standard-2" },
},
}
# Create the cluster.
operation = cluster_client . create_cluster (
request = { "project_id" : project_id , "region" : region , "cluster" : cluster }
)
result = operation . result ()
# Output a success message.
print ( f "Cluster created successfully: { result . cluster_name } " )
Additional resources
C++
The following list contains links to more resources related to the
client library for C++:
API reference
Client libraries best practices
Issue tracker
google-data-dataproc on Stack Overflow
Source code
C#
The following list contains links to more resources related to the
client library for C#:
API reference
Client libraries best practices
Issue tracker
google-data-dataproc on Stack Overflow
Source code
Go
The following list contains links to more resources related to the
client library for Go:
API reference
Client libraries best practices
Issue tracker
google-data-dataproc on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
google-data-dataproc on Stack Overflow
Source code
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
google-data-dataproc on Stack Overflow
Source code
PHP
The following list contains links to more resources related to the
client library for PHP:
API reference
Client libraries best practices
Issue tracker
google-data-dataproc on Stack Overflow
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
google-data-dataproc on Stack Overflow
Source code
Ruby
The following list contains links to more resources related to the
client library for Ruby:
API reference
Client libraries best practices
Issue tracker
google-data-dataproc on Stack Overflow
Source code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
