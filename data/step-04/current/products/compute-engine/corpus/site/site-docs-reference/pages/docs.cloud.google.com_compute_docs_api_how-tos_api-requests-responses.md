---
title: "Creating API requests and handling responses \_|\_ Compute Engine \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/api/how-tos/api-requests-responses
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/api/how-tos/api-requests-responses
  title: "Creating API requests and handling responses \_|\_ Compute Engine \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
APIs & Reference
Send feedback
Creating API requests and handling responses
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to construct API requests and handle
API responses from the Compute Engine API. It covers how to:
Construct a request body.
Determine the resource URIs necessary for a request.
Handle API responses.
Determine whether an API request succeeded.
This document does not cover how to authenticate to the API. To learn how to
authenticate to the API, read
Authenticate to Compute Engine .
Before you begin
Get familiar with REST APIs .
Know how to authenticate
to the Compute Engine API.
Creating an API request
The Compute Engine API expects API requests to be in JSON format.
To make an API request, you can either make a direct HTTP request, by using
tools like curl or httplib2 , or you can use one of the
available client libraries .
When you make an API request that requires a request body, like a POST ,
UPDATE , or PATCH request, the request body contains resource properties
that you want to set in this request. For example, the following curl command
makes a POST request to the Instances resource URI. The request creates an
instance with the properties defined in the request body. The request body is
indicated by the -d flag:
curl -X POST -H "Authorization: Bearer [OAUTH_TOKEN]" -H "Content-Type: application/json" \
https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instances -d \
'{
"disks":[
{
"boot":"true",
"initializeParams":{
"sourceImage":"https://www.googleapis.com/compute/v1/projects/debian-cloud/global/images/debian-10-buster-v20210122"
}
}
],
"machineType":"https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /machineTypes/e2-standard-2",
"name":" VM_NAME ",
"networkInterfaces":[
{
"accessConfigs":[
{
"name":"external-nat",
"type":"ONE_TO_ONE_NAT"
}
],
"network":"https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /global/networks/default"
}
]
}'
The image URI has a different project ID ( debian-cloud ) from your project ID
because images belong to different projects, depending on the type of image.
For example, all publicly available Debian images offered by
Compute Engine are hosted on the debian-cloud project.
When referencing another resource, use the fully qualified resource URI.
For example, the network property uses a fully qualified URI to the
default network.
Example API requests
Python
def create_instance (
compute : object ,
project : str ,
zone : str ,
name : str ,
bucket : str ,
) - > str :
"""Creates an instance in the specified zone.
Args:
compute: an initialized compute service object.
project: the Google Cloud project ID.
zone: the name of the zone in which the instances should be created.
name: the name of the instance.
bucket: the name of the bucket in which the image should be written.
Returns:
The instance object.
"""
# Get the latest Debian Jessie image.
image_response = (
compute . images ()
. getFromFamily ( project = "debian-cloud" , family = "debian-11" )
. execute ()
)
source_disk_image = image_response [ "selfLink" ]
# Configure the machine
machine_type = "zones/ %s /machineTypes/n1-standard-1" % zone
startup_script = open (
os . path . join ( os . path . dirname ( __file__ ), "startup-script.sh" )
) . read ()
image_url = "http://storage.googleapis.com/gce-demo-input/photo.jpg"
image_caption = "Ready for dessert?"
config = {
"name" : name ,
"machineType" : machine_type ,
# Specify the boot disk and the image to use as a source.
"disks" : [
{
"boot" : True ,
"autoDelete" : True ,
"initializeParams" : {
"sourceImage" : source_disk_image ,
},
}
],
# Specify a network interface with NAT to access the public
# internet.
"networkInterfaces" : [
{
"network" : "global/networks/default" ,
"accessConfigs" : [{ "type" : "ONE_TO_ONE_NAT" , "name" : "External NAT" }],
}
],
# Allow the instance to access cloud storage and logging.
"serviceAccounts" : [
{
"email" : "default" ,
"scopes" : [
"https://www.googleapis.com/auth/devstorage.read_write" ,
"https://www.googleapis.com/auth/logging.write" ,
],
}
],
# Metadata is readable from the instance and allows you to
# pass configuration from deployment scripts to instances.
"metadata" : {
"items" : [
{
# Startup script is automatically executed by the
# instance upon startup.
"key" : "startup-script" ,
"value" : startup_script ,
},
{ "key" : "url" , "value" : image_url },
{ "key" : "text" , "value" : image_caption },
{ "key" : "bucket" , "value" : bucket },
]
},
}
return compute . instances () . insert ( project = project , zone = zone , body = config ) . execute ()
Java
public static Operation startInstance ( Compute compute , String instanceName ) throws IOException {
System . out . println ( "================== Starting New Instance ==================" );
// Create VM Instance object with the required properties.
Instance instance = new Instance ();
instance . setName ( instanceName );
instance . setMachineType (
String . format (
"https://www.googleapis.com/compute/v1/projects/%s/zones/%s/machineTypes/e2-standard-1" ,
PROJECT_ID , ZONE_NAME ));
// Add Network Interface to be used by VM Instance.
NetworkInterface ifc = new NetworkInterface ();
ifc . setNetwork (
String . format (
"https://www.googleapis.com/compute/v1/projects/%s/global/networks/default" ,
PROJECT_ID ));
List<AccessConfig> configs = new ArrayList <> ();
AccessConfig config = new AccessConfig ();
config . setType ( NETWORK_INTERFACE_CONFIG );
config . setName ( NETWORK_ACCESS_CONFIG );
configs . add ( config );
ifc . setAccessConfigs ( configs );
instance . setNetworkInterfaces ( Collections . singletonList ( ifc ));
// Add attached Persistent Disk to be used by VM Instance.
AttachedDisk disk = new AttachedDisk ();
disk . setBoot ( true );
disk . setAutoDelete ( true );
disk . setType ( "PERSISTENT" );
AttachedDiskInitializeParams params = new AttachedDiskInitializeParams ();
// Assign the Persistent Disk the same name as the VM Instance.
params . setDiskName ( instanceName );
// Specify the source operating system machine image to be used by the VM Instance.
params . setSourceImage ( SOURCE_IMAGE_PREFIX + SOURCE_IMAGE_PATH );
// Specify the disk type as Standard Persistent Disk
params . setDiskType (
String . format (
"https://www.googleapis.com/compute/v1/projects/%s/zones/%s/diskTypes/pd-standard" ,
PROJECT_ID , ZONE_NAME ));
disk . setInitializeParams ( params );
instance . setDisks ( Collections . singletonList ( disk ));
// Initialize the service account to be used by the VM Instance and set the API access scopes.
ServiceAccount account = new ServiceAccount ();
account . setEmail ( "default" );
List<String> scopes = new ArrayList <> ();
scopes . add ( "https://www.googleapis.com/auth/devstorage.full_control" );
scopes . add ( "https://www.googleapis.com/auth/compute" );
account . setScopes ( scopes );
instance . setServiceAccounts ( Collections . singletonList ( account ));
// Optional - Add a startup script to be used by the VM Instance.
Metadata meta = new Metadata ();
Metadata . Items item = new Metadata . Items ();
item . setKey ( "startup-script-url" );
// If you put a script called "vm-startup.sh" in this Google Cloud Storage
// bucket, it will execute on VM startup. This assumes you've created a
// bucket named the same as your PROJECT_ID.
// For info on creating buckets see:
// https://cloud.google.com/storage/docs/cloud-console#_creatingbuckets
item . setValue ( String . format ( "gs://%s/vm-startup.sh" , PROJECT_ID ));
meta . setItems ( Collections . singletonList ( item ));
instance . setMetadata ( meta );
System . out . println ( instance . toPrettyString ());
Compute . Instances . Insert insert = compute . instances (). insert ( PROJECT_ID , ZONE_NAME , instance );
return insert . execute ();
}
Creating resource URIs
In Compute Engine API, a reference to another Google Cloud resource is given
as a fully qualified URI:
https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE / RESOURCE_TYPE / SPECIFIC_RESOURCE
Whenever you specify an image, a machine type, a network, or any other resource,
you must provide the URI to the resource when using the API. Client tools like
the Google Cloud CLI and the Google Cloud console hide this complexity and handle
creating these resource URIs for you, but when interacting with the API
directly, you must create these resource URIs yourself.
There are slightly different resource URIs for different types of resources. For
example, a zonal resource has the zone specification in the URI:
https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /machineTypes/e2-standard-2
Regional resources replace the zone specification with a region
specification:
https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /addresses/ ADDRESS_NAME
Similarly, global resources have the global specification:
https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /global/images/ VM_NAME
The Compute Engine API also accepts partial URIs because the service can
infer information like the project ID. So, the following partial versions of the
earlier URIs are also acceptable:
zones/ ZONE /machineTypes/e2-standard-2
regions/ REGION /addresses/ ADDRESS_NAME
project/ PROJECT_ID /global/images/ VM_NAME
In the partial URIs, both the zonal and regional URIs omitted the project
ID but the image URI did not. This is because publicly available images offered
by Compute Engine are hosted in other projects, like debian-cloud for
all Debian images and ubuntu-os-cloud for all Ubuntu images. Before you can
use these images, you need to provide the appropriate project ID. If you omit
the project ID for images, Compute Engine attempts to find the image in
your project, and the request fails because the image doesn't exist.
However, if you use a
custom image
that belongs to your project (the same project you are creating this resource
in), you can omit the project specification when providing an image URI.
Determining required properties
The Compute Engine API reference documentation, available for both
v1
and
beta APIs, describes all of the possible
properties you can set for a specific resource. The reference documentation
makes a distinction between mutable versus immutable properties
(marked by an [Output Only] in the property description), but to determine
required properties for a resource, you need to review the documentation
specific to that task.
For example, if you are creating an instance, read the
Creating an instance from an image
documentation to see the API properties required for the request. If you
want to create a static external IP address in the API, read the
Static external IP addresses
documentation.
Validating API requests
To validate your API requests:
In the Compute Engine API reference ,
find the method your code is calling. For example,
v1/compute.instances.insert .
From the contents menu, click Try it! This opens the Try this API
window.
Under Request parameters , you don't need to provide a project or
zone because validation doesn't require submitting the request.
Under Request body , paste your request.
Malformed elements of the request are underlined in blue. Click each
underlined section for more information about the issue to be addressed.
Handling API responses
If you make a request that mutates (alters) data, Compute Engine
returns an Operation object that you can then poll to get the status of
the operations for your request. The Operation resource looks like this:
{
"kind": "compute#operation",
"id": "7127550864823803662",
"name": "operation-1458856416788-52ed27a803e22-1c3bd86a-9e95017b",
"zone": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE ",
"operationType": "insert",
"targetLink": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instances/ EXAMPLE_VM ",
"targetId": "4132355614508179214",
"status": "PENDING",
"user": "user@example.com",
"progress": 0,
"insertTime": "2016-03-24T14:53:37.788-07:00",
"selfLink": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /operations/operation-1458856416788-52ed27a803e22-1c3bd86a-9e95017b"
}
If the original request is to mutate (alter) a zonal resource–for example, to
snapshot a disk or to stop an instance–Compute Engine returns a
zoneOperations
object. Similarly, regional and global resources return a
regionOperations
or globalOperations
object, respectively. You can get the status of an operation by performing a
request that uses the get or wait method for the specific
Operation resource and providing the name of the operation.
Your request is not complete until the Operation resource's status returns as
DONE . This can take some time depending on the nature of your request. Then,
after the Operation resource's status returns as DONE , you can check to see
if the operation succeeded and whether there were any errors.
For example, the following response indicates that the preceding operation
is now complete, specified by the DONE status:
endTime: '2016-03-24T14:54:07.119-07:00'
id: '7127550864823803662'
insertTime: '2016-03-24T14:53:37.788-07:00'
kind: compute#operation
name: operation-1458856416788-52ed27a803e22-1c3bd86a-9e95017b
operationType: insert
progress: 100
selfLink: https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /operations/operation-1458856416788-52ed27a803e22-1c3bd86a-9e95017b
startTime: '2016-03-24T14:53:38.397-07:00'
status: DONE
targetId: '4132355614508179214'
targetLink: https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instances/ EXAMPLE_VM
user: user@example.com
zone: https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE
To confirm, make a get request to the resource to check that it exists and
is running. For example:
GET /compute/v1/projects/ PROJECT_ID /zones/ ZONE /instances/ EXAMPLE_VM
{
"cpuPlatform": "Intel Haswell",
"creationTimestamp": "2016-03-24T14:53:37.170-07:00",
"disks": [
..[snip]..
"selfLink": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instances/ EXAMPLE_VM ",
"status": "RUNNING",
"tags": {
"fingerprint": "42WmSpB8rSM="
},
"zone": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE "
}
Polling operations
You can write some code to periodically poll the operation with a get
or wait request that returns when the operation status is DONE .
With a get request, the operation is returned immediately, regardless of the
status of the operation. You need to poll the operation periodically to know
when the operation is done.
If you make a wait request, the request returns when the operation is DONE
or if the request is approaching the 2 minute deadline. You can choose to use
wait or get to poll your operations, but the wait method provides
certain benefits over the get method:
You can set up your clients to poll for the operation status less frequently,
reducing your QPS usage of the Compute Engine API.
The average latency between when the operation is done and when the client is
informed that the operation is done is significantly reduced because the
server responds as soon as the operation is done.
The method provides bounded waits. The method waits for no more than the
default HTTP timeout (2 minutes) and then returns the current state of the
operation, which might be DONE or still in progress.
The wait method is a best-effort API. If the server is overloaded, the
request might return before it reaches the default deadline, or after waiting
just zero seconds. The method is also not guaranteed to return only when the
operation is DONE . For example, if the request approaches the 2 minute
deadline, the method returns even if the operation is not done. To check
on your operations, we recommend that you use either the wait or
get method—in a retry loop with sleep in-between—to periodically
poll the operation status. The maximum retry interval shouldn't exceed
the minimum operation retention period .
Example polling
The following examples use the get method. You can replace the get method
with the wait method:
Python
def wait_for_operation (
compute : object ,
project : str ,
zone : str ,
operation : str ,
) - > dict :
"""Waits for the given operation to complete.
Args:
compute: an initialized compute service object.
project: the Google Cloud project ID.
zone: the name of the zone in which the operation should be executed.
operation: the operation ID.
Returns:
The result of the operation.
"""
print ( "Waiting for operation to finish..." )
while True :
result = (
compute . zoneOperations ()
. get ( project = project , zone = zone , operation = operation )
. execute ()
)
if result [ "status" ] == "DONE" :
print ( "done." )
if "error" in result :
raise Exception ( result [ "error" ])
return result
time . sleep ( 1 )
Java
/**
* Wait until {@code operation} is completed.
*
* @param compute the {@code Compute} object
* @param operation the operation returned by the original request
* @param timeout the timeout, in millis
* @return the error, if any, else {@code null} if there was no error
* @throws InterruptedException if we timed out waiting for the operation to complete
* @throws IOException if we had trouble connecting
*/
public static Operation . Error blockUntilComplete (
Compute compute , Operation operation , long timeout ) throws Exception {
long start = System . currentTimeMillis ();
final long pollInterval = 5 * 1000 ;
String zone = getLastWordFromUrl ( operation . getZone ()); // null for global/regional operations
String region = getLastWordFromUrl ( operation . getRegion ());
String status = operation . getStatus ();
String opId = operation . getName ();
while ( operation != null && ! status . equals ( "DONE" )) {
Thread . sleep ( pollInterval );
long elapsed = System . currentTimeMillis () - start ;
if ( elapsed > = timeout ) {
throw new InterruptedException ( "Timed out waiting for operation to complete" );
}
System . out . println ( "waiting..." );
if ( zone != null ) {
Compute . ZoneOperations . Get get = compute . zoneOperations (). get ( PROJECT_ID , zone , opId );
operation = get . execute ();
} else if ( region != null ) {
Compute . RegionOperations . Get get = compute . regionOperations (). get ( PROJECT_ID , region , opId );
operation = get . execute ();
} else {
Compute . GlobalOperations . Get get = compute . globalOperations (). get ( PROJECT_ID , opId );
operation = get . execute ();
}
if ( operation != null ) {
status = operation . getStatus ();
}
}
return operation == null ? null : operation . getError ();
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
