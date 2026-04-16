---
title: "Compute Engine client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/api/libraries
knowledge_key: corpus
source_id: site-api-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/reference/mcp
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/api/libraries
  title: "Compute Engine client libraries \_|\_ Google Cloud Documentation"
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
Compute Engine client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Compute Engine API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Install the client library
C++
Follow the
Quickstart .
C#
Install the
Google.Cloud.Compute.V1
package from NuGet.
For more information, see Setting Up a C# Development Environment .
Go
go get cloud.google.com/go/compute/apiv1
For more information, see Setting Up a Go Development Environment .
Java
If you are using Maven , add
the following to your pom.xml file. For more information about
BOMs, see The Google Cloud Platform Libraries BOM .
< dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>libraries - bom < / artifactId >
< version>26 .79.0 < / version >
< type>pom < / type >
< scope>import < / scope >
< / dependency >
< / dependencies >
< / dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - compute < / artifactId >
< / dependency >
< / dependencies >
If you are using Gradle ,
add the following to your dependencies:
implementation ' com . google . cloud : google - cloud - compute : 1.100.0 '
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-compute" % "1.100.0"
The older version of the Cloud Client Libraries for Java for
Compute Engine is available as version 0.120.x or earlier in the
Maven artifact . Versions 0.120.x and earlier of this library are
forward-incompatible with later versions.
For more information, see Setting Up a Java Development Environment .
Node.js
npm install @google-cloud/compute
The older version of the Cloud Client Libraries for Node.js for
Compute Engine is available as version 2.5.x or earlier in the
npm package .
Versions 2.5.x and earlier of this library are forward-incompatible with
later versions.
For more information, see Setting Up a Node.js Development Environment .
PHP
composer require google/cloud-compute
For more information, see Using PHP on Google Cloud .
Python
pip install --upgrade google-cloud-compute
For more information, see Setting Up a Python Development Environment .
Ruby
gem install google-cloud-compute-v1
For more information, see Setting Up a Ruby Development Environment .
Rust
cargo add google-cloud-compute-v1
For more information, see Get started with Rust .
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
The following example shows how to use the client library to list instances in a
particular zone. For more examples, see
Using client libraries .
C#
using Google.Cloud.Compute.V1 ;
using System ;
using System.Collections.Generic ;
using System.Threading.Tasks ;
public class ListZoneInstancesAsyncSample
{
public async Task<IList<Instance> > ListZoneInstancesAsync (
// TODO(developer): Set your own default values for these parameters or pass different values when calling this method.
string projectId = "your-project-id" ,
string zone = "us-central1-a" )
{
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
InstancesClient client = await InstancesClient . CreateAsync ();
IList<Instance> allInstances = new List<Instance> ();
// Make the request to list all VM instances in the given zone in the specified project.
await foreach ( var instance in client . ListAsync ( projectId , zone ))
{
// The result is an Instance collection.
Console . WriteLine ( $"Instance: {instance.Name}" );
allInstances . Add ( instance );
}
return allInstances ;
}
}
Go
import (
"context"
"fmt"
"io"
compute "cloud.google.com/go/compute/apiv1"
computepb "cloud.google.com/go/compute/apiv1/computepb"
"google.golang.org/api/iterator"
)
// listInstances prints a list of instances created in given project in given zone.
func listInstances ( w io . Writer , projectID , zone string ) error {
// projectID := "your_project_id"
// zone := "europe-central2-b"
ctx := context . Background ()
instancesClient , err := compute . NewInstancesRESTClient ( ctx )
if err != nil {
return fmt . Errorf ( "NewInstancesRESTClient: %w" , err )
}
defer instancesClient . Close ()
req := & computepb . ListInstancesRequest {
Project : projectID ,
Zone : zone ,
}
it := instancesClient . List ( ctx , req )
fmt . Fprintf ( w , "Instances found in zone %s:\n" , zone )
for {
instance , err := it . Next ()
if err == iterator . Done {
break
}
if err != nil {
return err
}
fmt . Fprintf ( w , "- %s %s\n" , instance . GetName (), instance . GetMachineType ())
}
return nil
}
Java
import com.google.cloud.compute.v1. Instance ;
import com.google.cloud.compute.v1. InstancesClient ;
import java.io.IOException ;
public class ListInstance {
public static void main ( String [] args ) throws IOException {
// TODO(developer): Replace these variables before running the sample
String project = "your-project-id" ;
String zone = "zone-name" ;
listInstances ( project , zone );
}
// List all instances in the given zone in the specified project ID.
public static void listInstances ( String project , String zone ) throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the `instancesClient.close()` method on the client to
// safely clean up any remaining background resources.
try ( InstancesClient instancesClient = InstancesClient . create ()) {
// Set the project and zone to retrieve instances present in the zone.
System . out . printf ( "Listing instances from %s in %s:" , project , zone );
for ( Instance zoneInstance : instancesClient . list ( project , zone ). iterateAll ()) {
System . out . println ( zoneInstance . getName ());
}
System . out . println ( "####### Listing instances complete #######" );
}
}
}
Node.js
/**
* TODO(developer): Uncomment and replace these variables before running the sample.
*/
// const projectId = 'YOUR_PROJECT_ID';
// const zone = 'europe-central2-b'
const compute = require ( ' @google-cloud/compute ' );
// List all instances in the given zone in the specified project.
async function listInstances () {
const instancesClient = new compute . InstancesClient ();
const [ instanceList ] = await instancesClient . list ({
project : projectId ,
zone ,
});
console . log ( `Instances found in zone ${ zone } :` );
for ( const instance of instanceList ) {
console . log ( ` - ${ instance . name } ( ${ instance . machineType } )` );
}
}
listInstances ();
PHP
use Google\Cloud\Compute\V1\Client\InstancesClient;
use Google\Cloud\Compute\V1\ListInstancesRequest;
/**
* List all instances for a particular Cloud project and zone.
*
* @param string $projectId Your Google Cloud project ID.
* @param string $zone Zone to list instances for (like "us-central1-a").
*
* @throws \Google\ApiCore\ApiException if the remote call fails.
*/
function list_instances(string $projectId, string $zone)
{
// List Compute Engine instances using InstancesClient.
$instancesClient = new InstancesClient();
$request = (new ListInstancesRequest())
->setProject($projectId)
->setZone($zone);
$instancesList = $instancesClient->list($request);
printf('Instances for %s (%s)' . PHP_EOL, $projectId, $zone);
foreach ($instancesList as $instance) {
printf(' - %s' . PHP_EOL, $instance->getName());
}
}
Python
from __future__ import annotations
from collections.abc import Iterable
from google.cloud import compute_v1
def list_instances ( project_id : str , zone : str ) - > Iterable [ compute_v1 . Instance ]:
"""
List all instances in the given zone in the specified project.
Args:
project_id: project ID or project number of the Cloud project you want to use.
zone: name of the zone you want to use. For example: “us-west3-b”
Returns:
An iterable collection of Instance objects.
"""
instance_client = compute_v1 . InstancesClient ()
instance_list = instance_client . list ( project = project_id , zone = zone )
print ( f "Instances found in zone { zone } :" )
for instance in instance_list :
print ( f " - { instance . name } ( { instance . machine_type } )" )
return instance_list
Ruby
require "google/cloud/compute/v1"
# Lists all instances in the given zone in the specified project.
#
# @param [String] project project ID or project number of the Cloud project you want to use.
# @param [String] zone name of the zone you want to use. For example: "us-west3-b"
# @return [Array<::Google::Cloud::Compute::V1::Instance>] Array of instances.
def list_instances project :, zone :
# Initialize client that will be used to send requests. This client only needs to be created
# once, and can be reused for multiple requests.
client = :: Google :: Cloud :: Compute :: V1 :: Instances :: Rest :: Client . new
# Send the request to list all VM instances in the given zone in the specified project.
instance_list = client . list project : project , zone : zone
puts "Instances found in zone #{ zone } :"
instances = []
instance_list . each do | instance |
puts " - #{ instance . name } ( #{ instance . machine_type } )"
instances << instance
end
instances
end
Rust
pub async fn quickstart ( project_id : & str ) - > anyhow :: Result < () > {
use google_cloud_compute_v1 :: client :: Instances ;
use google_cloud_gax :: paginator :: ItemPaginator ;
const ZONE : & str = "us-central1-a" ;
let client = Instances :: builder (). build (). await ? ;
println! ( "Listing instances for project {project_id}" );
let mut instances = client
. list ()
. set_project ( project_id )
. set_zone ( ZONE )
. by_item ();
while let Some ( item ) = instances . next (). await . transpose () ? {
println! ( " {:?}" , item . name );
}
println! ( "DONE" );
Ok (())
}
Additional resources
C++
The following list contains links to more resources related to the
client library for C++:
API reference
Client libraries best practices
Issue tracker
google-compute-engine on Stack Overflow
Source code
C#
The following list contains links to more resources related to the
client library for C#:
API reference
Client libraries best practices
Issue tracker
google-compute-engine on Stack Overflow
Source code
Go
The following list contains links to more resources related to the
client library for Go:
API reference
Client libraries best practices
Issue tracker
google-compute-engine on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
google-compute-engine on Stack Overflow
Source code
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
google-compute-engine on Stack Overflow
Source code
PHP
The following list contains links to more resources related to the
client library for PHP:
API reference
Client libraries best practices
Issue tracker
google-compute-engine on Stack Overflow
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
google-compute-engine on Stack Overflow
Source code
Ruby
The following list contains links to more resources related to the
client library for Ruby:
API reference
Client libraries best practices
Issue tracker
google-compute-engine on Stack Overflow
Source code
Rust
The following list contains links to more resources related to the
client library for Rust:
API reference
Client libraries best practices
Issue tracker
google-compute-engine on Stack Overflow
Source code
Older client libraries
Cloud Client Libraries
use our latest client library model and are the recommended option for accessing
Cloud APIs programmatically.
For cases where you can't use Cloud Client Libraries, the following
Google API Client Libraries
are available:
Language
Library
Resources
Go
Google API Go Client Library
Documentation
Java
Google API Java Client Library
Documentation
JavaScript
Google API JavaScript Client Library
Documentation
.NET
Google API .NET Client Library
Documentation
Node.js
Google API Node.js Client Library
Documentation
Objective-C
Google API Objective-C Client Library
Documentation
PHP
Google API PHP Client Library
Documentation
Python
Google API Python Client Library
Documentation
Ruby
Google API Ruby Client Library
Documentation
Dart
Google API Dart Client Library
Documentation
Third-party Compute Engine API client libraries
libcloud
libcloud is a Python library used
for interacting with multiple cloud service providers through a single unified API.
The Apache libcloud API project has received support and updates for
Compute Engine since July 2013. It supports a broad set of
Compute Engine features including instances, disks, networks, and load
balancers. The getting started demo provides a code example of how to use
libcloud and Compute Engine together.
Getting started
Blog post
GitHub
jclouds
jclouds is an open source library that
allows you to use Java and Clojure across multiple Cloud providers.
The jclouds cloud API supports Compute Engine and lets you manage
resources such as virtual machines, disks, and networks. As of version 1.9,
Compute Engine was promoted to the jclouds core.
Getting Started
GitHub
fog.io
fog.io is an open source Ruby library that lets
you interact with multiple cloud services through one API.
The fog.io cloud API has had support for Compute Engine since version
1.11.0 in May 2013. It supports instance operations such as create and delete,
along with management operations for other resources like disks, networks, and
load balancers.
GitHub
Code Samples
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
