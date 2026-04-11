---
title: "Managed Service for Apache Kafka client libraries \_|\_ Google Cloud Managed\
  \ Service for Apache Kafka \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/libraries
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/libraries
  title: "Managed Service for Apache Kafka client libraries \_|\_ Google Cloud Managed\
    \ Service for Apache Kafka \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Google Cloud Managed Service for Apache Kafka
Reference
Send feedback
Managed Service for Apache Kafka client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Managed Kafka API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
Install the client library
Go
go get cloud.google.com/go/managedkafka
For more information, see Setting Up a Go Development Environment .
Java
If you are using Maven, add this to your pom.xml file:
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>google-cloud-managedkafka</artifactId>
<version>0.9.0</version>
</dependency>
If you are using Gradle, add this to your dependencies:
compile group: 'com.google.cloud', name: 'google-cloud-managedkafka', version:'0.9.0'
For more information, see Setting Up a Java Development Environment .
Python
pip install google-cloud-managedkafka
For more information, see Setting Up a Python Development Environment .
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
The client library samples for Google Cloud Managed Service for Apache Kafka show
you how to do cluster administration using the Google Cloud Managed Kafka API.
For example, the following code sample shows how to use the client library to
create a Managed Service for Apache Kafka cluster.
Go
import (
"context"
"fmt"
"io"
"cloud.google.com/go/managedkafka/apiv1/managedkafkapb"
"google.golang.org/api/option"
managedkafka "cloud.google.com/go/managedkafka/apiv1"
)
func createCluster ( w io . Writer , projectID , region , clusterID , subnet string , cpu , memoryBytes int64 , opts ... option . ClientOption ) error {
// projectID := "my-project-id"
// region := "us-central1"
// clusterID := "my-cluster"
// subnet := "projects/my-project-id/regions/us-central1/subnetworks/default"
// cpu := 3
// memoryBytes := 3221225472
ctx := context . Background ()
client , err := managedkafka . NewClient ( ctx , opts ... )
if err != nil {
return fmt . Errorf ( "managedkafka.NewClient got err: %w" , err )
}
defer client . Close ()
locationPath := fmt . Sprintf ( "projects/%s/locations/%s" , projectID , region )
clusterPath := fmt . Sprintf ( "%s/clusters/%s" , locationPath , clusterID )
// Memory must be between 1 GiB and 8 GiB per CPU.
capacityConfig := & managedkafkapb . CapacityConfig {
VcpuCount : cpu ,
MemoryBytes : memoryBytes ,
}
var networkConfig [] * managedkafkapb . NetworkConfig
networkConfig = append ( networkConfig , & managedkafkapb . NetworkConfig {
Subnet : subnet ,
})
platformConfig := & managedkafkapb . Cluster_GcpConfig {
GcpConfig : & managedkafkapb . GcpConfig {
AccessConfig : & managedkafkapb . AccessConfig {
NetworkConfigs : networkConfig ,
},
},
}
rebalanceConfig := & managedkafkapb . RebalanceConfig {
Mode : managedkafkapb . RebalanceConfig_AUTO_REBALANCE_ON_SCALE_UP ,
}
cluster := & managedkafkapb . Cluster {
Name : clusterPath ,
CapacityConfig : capacityConfig ,
PlatformConfig : platformConfig ,
RebalanceConfig : rebalanceConfig ,
}
req := & managedkafkapb . CreateClusterRequest {
Parent : locationPath ,
ClusterId : clusterID ,
Cluster : cluster ,
}
op , err := client . CreateCluster ( ctx , req )
if err != nil {
return fmt . Errorf ( "client.CreateCluster got err: %w" , err )
}
// The duration of this operation can vary considerably, typically taking 10-40 minutes.
resp , err := op . Wait ( ctx )
if err != nil {
return fmt . Errorf ( "op.Wait got err: %w" , err )
}
fmt . Fprintf ( w , "Created cluster: %s\n" , resp . Name )
return nil
}
Java
import com.google.api.gax.longrunning. OperationFuture ;
import com.google.api.gax.longrunning. OperationSnapshot ;
import com.google.api.gax.longrunning. OperationTimedPollAlgorithm ;
import com.google.api.gax.retrying. RetrySettings ;
import com.google.api.gax.retrying. RetryingFuture ;
import com.google.api.gax.retrying. TimedRetryAlgorithm ;
import com.google.cloud.managedkafka.v1. AccessConfig ;
import com.google.cloud.managedkafka.v1. CapacityConfig ;
import com.google.cloud.managedkafka.v1. Cluster ;
import com.google.cloud.managedkafka.v1. CreateClusterRequest ;
import com.google.cloud.managedkafka.v1. GcpConfig ;
import com.google.cloud.managedkafka.v1. LocationName ;
import com.google.cloud.managedkafka.v1. ManagedKafkaClient ;
import com.google.cloud.managedkafka.v1. ManagedKafkaSettings ;
import com.google.cloud.managedkafka.v1. NetworkConfig ;
import com.google.cloud.managedkafka.v1. OperationMetadata ;
import com.google.cloud.managedkafka.v1. RebalanceConfig ;
import java.time.Duration ;
import java.util.concurrent.ExecutionException ;
public class CreateCluster {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the example.
String projectId = "my-project-id" ;
String region = "my-region" ; // e.g. us-east1
String clusterId = "my-cluster" ;
String subnet = "my-subnet" ; // e.g. projects/my-project/regions/my-region/subnetworks/my-subnet
int cpu = 3 ;
long memoryBytes = 3221225472L ; // 3 GiB
createCluster ( projectId , region , clusterId , subnet , cpu , memoryBytes );
}
public static void createCluster (
String projectId , String region , String clusterId , String subnet , int cpu , long memoryBytes )
throws Exception {
CapacityConfig capacityConfig =
CapacityConfig . newBuilder (). setVcpuCount ( cpu ). setMemoryBytes ( memoryBytes ). build ();
NetworkConfig networkConfig = NetworkConfig . newBuilder (). setSubnet ( subnet ). build ();
GcpConfig gcpConfig =
GcpConfig . newBuilder ()
. setAccessConfig ( AccessConfig . newBuilder (). addNetworkConfigs ( networkConfig ). build ())
. build ();
RebalanceConfig rebalanceConfig =
RebalanceConfig . newBuilder ()
. setMode ( RebalanceConfig . Mode . AUTO_REBALANCE_ON_SCALE_UP )
. build ();
Cluster cluster =
Cluster . newBuilder ()
. setCapacityConfig ( capacityConfig )
. setGcpConfig ( gcpConfig )
. setRebalanceConfig ( rebalanceConfig )
. build ();
// Create the settings to configure the timeout for polling operations
ManagedKafkaSettings . Builder settingsBuilder = ManagedKafkaSettings . newBuilder ();
TimedRetryAlgorithm timedRetryAlgorithm = OperationTimedPollAlgorithm . create (
RetrySettings . newBuilder ()
. setTotalTimeoutDuration ( Duration . ofHours ( 1L ))
. build ());
settingsBuilder . createClusterOperationSettings ()
. setPollingAlgorithm ( timedRetryAlgorithm );
try ( ManagedKafkaClient managedKafkaClient = ManagedKafkaClient . create (
settingsBuilder . build ())) {
CreateClusterRequest request =
CreateClusterRequest . newBuilder ()
. setParent ( LocationName . of ( projectId , region ). toString ())
. setClusterId ( clusterId )
. setCluster ( cluster )
. build ();
// The duration of this operation can vary considerably, typically taking between 10-40
// minutes.
OperationFuture<Cluster , OperationMetadata > future =
managedKafkaClient . createClusterOperationCallable (). futureCall ( request );
// Get the initial LRO and print details.
OperationSnapshot operation = future . getInitialFuture (). get ();
System . out . printf ( "Cluster creation started. Operation name: %s\nDone: %s\nMetadata: %s\n" ,
operation . getName (),
operation . isDone (),
future . getMetadata (). get (). toString ());
while ( ! future . isDone ()) {
// The pollingFuture gives us the most recent status of the operation
RetryingFuture<OperationSnapshot> pollingFuture = future . getPollingFuture ();
OperationSnapshot currentOp = pollingFuture . getAttemptResult (). get ();
System . out . printf ( "Polling Operation:\nName: %s\n Done: %s\n" ,
currentOp . getName (),
currentOp . isDone ());
}
// NOTE: future.get() blocks completion until the operation is complete (isDone = True)
Cluster response = future . get ();
System . out . printf ( "Created cluster: %s\n" , response . getName ());
} catch ( ExecutionException e ) {
System . err . printf ( "managedKafkaClient.createCluster got err: %s" , e . getMessage ());
}
}
}
Python
from google.api_core.exceptions import GoogleAPICallError
from google.cloud import managedkafka_v1
# TODO(developer)
# project_id = "my-project-id"
# region = "us-central1"
# cluster_id = "my-cluster"
# subnet = "projects/my-project-id/regions/us-central1/subnetworks/default"
# cpu = 3
# memory_bytes = 3221225472
client = managedkafka_v1 . ManagedKafkaClient ()
cluster = managedkafka_v1 . Cluster ()
cluster . name = client . cluster_path ( project_id , region , cluster_id )
cluster . capacity_config . vcpu_count = cpu
cluster . capacity_config . memory_bytes = memory_bytes
cluster . gcp_config . access_config . network_configs = [
managedkafka_v1 . NetworkConfig ( subnet = subnet )
]
cluster . rebalance_config . mode = (
managedkafka_v1 . RebalanceConfig . Mode . AUTO_REBALANCE_ON_SCALE_UP
)
request = managedkafka_v1 . CreateClusterRequest (
parent = client . common_location_path ( project_id , region ),
cluster_id = cluster_id ,
cluster = cluster ,
)
try :
operation = client . create_cluster ( request = request )
print ( f "Waiting for operation { operation . operation . name } to complete..." )
# The duration of this operation can vary considerably, typically taking 10-40 minutes.
# We can set a timeout of 3000s (50 minutes).
response = operation . result ( timeout = 3000 )
print ( "Created cluster:" , response )
except GoogleAPICallError as e :
print ( f "The operation failed with error: { e . message } " )
Additional resources
Go
The following list contains links to more resources related to the
client library for Go:
Client libraries best practices
Source code
Java
The following list contains links to more resources related to the
client library for Java:
Client libraries best practices
Source code
Python
The following list contains links to more resources related to the
client library for Python:
Client libraries best practices
Source code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],[]]
