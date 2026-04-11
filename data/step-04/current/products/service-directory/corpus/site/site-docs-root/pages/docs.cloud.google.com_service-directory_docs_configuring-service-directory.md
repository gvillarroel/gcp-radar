---
title: "Configure Service Directory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-directory/docs/configuring-service-directory
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-directory/docs
source_metadata:
  url: https://docs.cloud.google.com/service-directory/docs/configuring-service-directory
  title: "Configure Service Directory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Distributed, hybrid, and multicloud
Service Directory
Guides
Send feedback
Configure Service Directory
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to set up a Service Directory namespace, register a service
in the namespace, and add endpoints to a service. You can create a namespace when you're registering a service or before registering a service .
Before running the commands listed on this page, familiarize yourself with the concepts in the
Service Directory overview and key
terms related to Service Directory.
Set up your project
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
Enable the Service Directory API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
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
Enable the Service Directory API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Configure Service Directory resources
To populate Service Directory with services, create a namespace and register your service in the namespace.
Configure a namespace
For your project, create a namespace in your region.
This region doesn't have to be where all your services and endpoints are
running but must be close, if possible.
You can register your services in any
Service Directory region; they are still globally resolvable.
Within a region, projects can have multiple namespaces, and those namespaces can
be in different regions. A single namespace can't span multiple regions.
Console
In the Google Cloud console, go to the Service Directory namespaces page.
Go to Service Directory
namespaces
Click Create namespace .
In the Region list, select a region for your namespace.
In the Namespace name field, give the namespace a name.
Click Create .
gcloud
To use Service Directory on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
Create a namespace
gcloud service-directory namespaces create NAMESPACE \
--location REGION
Replace the following:
NAMESPACE : the name of the namespace that you are
creating.
REGION : the Google Cloud region that contains the
namespace.
Optional: Set an IAM policy
on your namespace. This gives the specified user or group the specified role
for this namespace and all services that belong to the namespace.
gcloud service-directory namespaces add-iam-policy-binding NAMESPACE \
--member user:someone@example.com \
--role ROLE \
--location REGION
Replace the following:
NAMESPACE : the name of the namespace that you created.
ROLE : the role that you are granting.
REGION : the Google Cloud region that contains the
namespace.
C#
To run this code, first set up a C# development environment and
install the Service Directory C# SDK .
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.ServiceDirectory.V1 ;
public class CreateNamespaceSample
{
public Namespace CreateNamespace (
string projectId = "my-project" ,
string locationId = "us-east1" ,
string namespaceId = "test-namespace" )
{
// Create client
RegistrationServiceClient registrationServiceClient = RegistrationServiceClient . Create ();
// Initialize request argument(s)
var locationName = LocationName . FromProjectLocation ( projectId , locationId );
return registrationServiceClient . CreateNamespace ( locationName , new Namespace (), namespaceId );
}
}
Go
To run this code, first set up a Go development environment and
install the Service Directory Go SDK .
import (
"context"
"fmt"
"io"
servicedirectory "cloud.google.com/go/servicedirectory/apiv1"
sdpb "cloud.google.com/go/servicedirectory/apiv1/servicedirectorypb"
)
func createNamespace ( w io . Writer , projectID string ) error {
// projectID := "my-project"
location := "us-east4"
namespaceID := "golang-test-namespace"
ctx := context . Background ()
// Create a registration client.
client , err := servicedirectory . NewRegistrationClient ( ctx )
if err != nil {
return fmt . Errorf ( "ServiceDirectory.NewRegistrationClient: %w" , err )
}
defer client . Close ()
// Create a Namespace.
req := & sdpb . CreateNamespaceRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/%s" , projectID , location ),
NamespaceId : namespaceID ,
}
resp , err := client . CreateNamespace ( ctx , req )
if err != nil {
return fmt . Errorf ( "CreateNamespace: %w" , err )
}
fmt . Fprintf ( w , "servicedirectory.CreateNamespace result: %s\n" , resp . Name )
return nil
}
Java
To run this code, first set up a Java development environment and
install the Service Directory Java SDK .
import com.google.cloud.servicedirectory.v1. LocationName ;
import com.google.cloud.servicedirectory.v1. Namespace ;
import com.google.cloud.servicedirectory.v1. RegistrationServiceClient ;
import java.io.IOException ;
public class NamespacesCreate {
public static void createNamespace () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "your-region" ;
// This is user-created; must be unique within the project/region above.
String namespaceId = "your-namespace" ;
createNamespace ( projectId , locationId , namespaceId );
}
// Create a new namespace.
public static void createNamespace ( String projectId , String locationId , String namespaceId )
throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( RegistrationServiceClient client = RegistrationServiceClient . create ()) {
// The project and location to create the namespace in.
LocationName parent = LocationName . of ( projectId , locationId );
// The namespace object to create. Here, we use the default instance.
Namespace namespace = Namespace . newBuilder (). build ();
// Send the request to create the namespace.
Namespace createdNamespace = client . createNamespace ( parent , namespace , namespaceId );
// Process the response.
System . out . println ( "Created Namespace: " + createdNamespace . getName ());
}
}
}
Node.js
To run this code, first set up a Node.js development environment and
install the Service Directory Node.js SDK .
//
// TODO(developer): Uncomment these variables before running the sample.
//
// const projectId = 'my-project';
// const locationId = 'us-central1';
// const namespaceId = 'my-namespace';
// Imports the Google Cloud client library
const {
RegistrationServiceClient ,
} = require ( ' @google-cloud/service-directory ' );
// Creates a client
const registrationServiceClient = new RegistrationServiceClient ();
// Build the location name
const locationName = registrationServiceClient . locationPath (
projectId ,
locationId
);
async function createNamespace () {
const [ namespace ] = await registrationServiceClient . createNamespace ({
parent : locationName ,
namespaceId : namespaceId ,
});
console . log ( `Created namespace: ${ namespace . name } ` );
return namespace ;
}
return createNamespace ();
PHP
To run this code, first set up a PHP development environment and
install the Service Directory PHP SDK .
use Google\Cloud\ServiceDirectory\V1\Client\RegistrationServiceClient;
use Google\Cloud\ServiceDirectory\V1\CreateNamespaceRequest;
use Google\Cloud\ServiceDirectory\V1\PBNamespace;
/**
* @param string $projectId Your Cloud project ID
* @param string $locationId Your GCP region
* @param string $namespaceId Your namespace name
*/
function create_namespace(
string $projectId,
string $locationId,
string $namespaceId
): void {
// Instantiate a client.
$client = new RegistrationServiceClient();
// Run request.
$locationName = RegistrationServiceClient::locationName($projectId, $locationId);
$createNamespaceRequest = (new CreateNamespaceRequest())
->setParent($locationName)
->setNamespaceId($namespaceId)
->setNamespace(new PBNamespace());
$namespace = $client->createNamespace($createNamespaceRequest);
// Print results.
printf('Created Namespace: %s' . PHP_EOL, $namespace->getName());
}
Python
To run this code, first set up a Python development environment and
install the Service Directory Python SDK .
def create_namespace ( project_id : str , location : str , namespace_id : str ) - > Namespace :
"""Creates a namespace in the given location.
Args:
project_id: Your Google Cloud project id.
location: The Google Cloud region containing the new namespace.
namespace_id: A unique id for the namespace.
Returns:
The created namespace.
"""
client = servicedirectory_v1 . RegistrationServiceClient ()
namespace = servicedirectory_v1 . Namespace (
name = client . namespace_path ( project_id , location , namespace_id )
)
response = client . create_namespace (
parent = f "projects/ { project_id } /locations/ { location } " ,
namespace = namespace ,
namespace_id = namespace_id ,
)
print ( f "Created namespace { response . name } ." )
return response
Ruby
To run this code, first set up a Ruby development environment and
install the Service Directory Ruby SDK .
# project = "Your Google Cloud project ID"
# location = "The Google Cloud region containing the new namespace"
# namespace = "The name of the namespace you are creating"
require "google/cloud/service_directory"
# Initialize the client
registration_service = Google :: Cloud :: ServiceDirectory . registration_service
# The parent path of the namespace
parent = registration_service . location_path (
project : project , location : location
)
# Use the Service Directory API to create the namespace
response = registration_service . create_namespace (
parent : parent , namespace_id : namespace
)
puts "Created namespace: #{ response . name } "
Configure a service
Create a service in the namespace. A service consists of a name and optional
service-related annotations. There are some restrictions on the format of
service names:
Service names must be unique within a namespace.
Service names must follow the naming convention for DNS labels.
To create a Private Service Connect forwarding rule and register it as a service with Service Directory, see Register a Private Service Connect endpoint with Service Directory .
To register a standard service with Service Directory, follow these steps:
Console
In the Google Cloud console, go to the Service Directory page.
Go to Service Directory
Click Register Service .
Click Standard , and then click Next .
Choose a Region to register your service in.
Choose a Namespace to register your service in.
If you don't have a namespace, follow these steps to create one:
In the Namespace box, click Create namespace .
Enter a Namespace name.
Click Create .
Enter a Service name .
Optional: If you want to add annotations to the service, do the following:
Click Add annotation .
Add a Key and Value .
To add more annotations, click Add annotation again.
Click Create .
gcloud
To use Service Directory on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
Create a service in a namespace.
gcloud service-directory services create SERVICE \
--annotations KEY_1 = VALUE_1 , KEY_2 = VALUE_2 \
--namespace NAMESPACE \
--location REGION
Replace the following:
SERVICE : the name of the service that you are creating.
NAMESPACE : the name of the namespace that contains
your service.
REGION : the Google Cloud region that contains the
namespace.
KEY_1 , VALUE_1 , KEY_2 ,
VALUE_2 : key and value string set in pairs.
Optional: Set an IAM policy
on your service. This gives the specified user or group the specified role
for this service and all endpoints that belong to the service.
gcloud service-directory services add-iam-policy-binding SERVICE \
--member user:someone@example.com \
--role ROLE \
--namespace NAMESPACE \
--location REGION
Replace the following:
SERVICE : the name that you gave your service.
NAMESPACE : the name of the namespace that contains
your service
ROLE : the role
that you are granting.
REGION : the Google Cloud region that contains the
namespace.
C#
To run this code, first set up a C# development environment and
install the Service Directory C# SDK .
using Google.Cloud.ServiceDirectory.V1 ;
public class CreateServiceSample
{
public Service CreateService (
string projectId = "my-project" ,
string locationId = "us-east1" ,
string namespaceId = "test-namespace" ,
string serviceId = "test-service" )
{
// Create client
RegistrationServiceClient registrationServiceClient = RegistrationServiceClient . Create ();
// Initialize request argument(s)
var namespaceName = NamespaceName . FromProjectLocationNamespace ( projectId , locationId , namespaceId );
return registrationServiceClient . CreateService ( namespaceName , new Service (), serviceId );
}
}
Go
To run this code, first set up a Go development environment and
install the Service Directory Go SDK .
import (
"context"
"fmt"
"io"
servicedirectory "cloud.google.com/go/servicedirectory/apiv1"
sdpb "cloud.google.com/go/servicedirectory/apiv1/servicedirectorypb"
)
func createService ( w io . Writer , projectID string ) error {
// projectID := "my-project"
location := "us-east4"
namespaceID := "golang-test-namespace"
serviceID := "golang-test-service"
ctx := context . Background ()
// Create a registration client.
client , err := servicedirectory . NewRegistrationClient ( ctx )
if err != nil {
return fmt . Errorf ( "ServiceDirectory.NewRegistrationClient: %w" , err )
}
defer client . Close ()
// Create a Service.
req := & sdpb . CreateServiceRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/%s/namespaces/%s" , projectID , location , namespaceID ),
ServiceId : serviceID ,
Service : & sdpb . Service {
Annotations : map [ string ] string {
"key1" : "value1" ,
"key2" : "value2" ,
},
},
}
service , err := client . CreateService ( ctx , req )
if err != nil {
return fmt . Errorf ( "CreateSerice: %w" , err )
}
fmt . Fprintf ( w , "servicedirectory.Createservice result %s\n" , service . Name )
return nil
}
Java
To run this code, first set up a Java development environment and
install the Service Directory Java SDK .
import com.google.cloud.servicedirectory.v1. NamespaceName ;
import com.google.cloud.servicedirectory.v1. RegistrationServiceClient ;
import com.google.cloud.servicedirectory.v1. Service ;
import java.io.IOException ;
public class ServicesCreate {
public static void createService () throws IOException {
// TODO(developer): Replace these variables before running the sample.
// These variables should refer to an existing Service Directory namespace.
String projectId = "your-project-id" ;
String locationId = "your-region" ;
String namespaceId = "your-namespace" ;
// This is user-created; must be unique within the namespace above.
String serviceId = "your-service" ;
createService ( projectId , locationId , namespaceId , serviceId );
}
// Create a new service.
public static void createService (
String projectId , String locationId , String namespaceId , String serviceId )
throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( RegistrationServiceClient client = RegistrationServiceClient . create ()) {
// The namespace to create the service in.
NamespaceName parent = NamespaceName . of ( projectId , locationId , namespaceId );
// The service object to create.
// Optionally add some annotations for the service.
Service service = Service . newBuilder (). putAnnotations ( "protocol" , "tcp" ). build ();
// Send the request to create the namespace.
Service createdService = client . createService ( parent , service , serviceId );
// Process the response.
System . out . println ( "Created Service: " + createdService . getName ());
System . out . println ( "Annotations: " + createdService . getAnnotationsMap ());
}
}
}
Node.js
To run this code, first set up a Node.js development environment and
install the Service Directory Node.js SDK .
//
// TODO(developer): Uncomment these variables before running the sample.
//
// const projectId = 'my-project';
// const locationId = 'us-central1';
// const namespaceId = 'my-namespace';
// const serviceId = 'my-service';
// Imports the Google Cloud client library
const {
RegistrationServiceClient ,
} = require ( ' @google-cloud/service-directory ' );
// Creates a client
const registrationServiceClient = new RegistrationServiceClient ();
// Build the namespace name
const namespaceName = registrationServiceClient . namespacePath (
projectId ,
locationId ,
namespaceId
);
async function createService () {
const [ service ] = await registrationServiceClient . createService ({
parent : namespaceName ,
serviceId : serviceId ,
});
console . log ( `Created service: ${ service . name } ` );
return service ;
}
return createService ();
PHP
To run this code, first set up a PHP development environment and
install the Service Directory PHP SDK .
use Google\Cloud\ServiceDirectory\V1\Client\RegistrationServiceClient;
use Google\Cloud\ServiceDirectory\V1\CreateServiceRequest;
use Google\Cloud\ServiceDirectory\V1\Service;
/**
* @param string $projectId Your Cloud project ID
* @param string $locationId Your GCP region
* @param string $namespaceId Your namespace name
* @param string $serviceId Your service name
*/
function create_service(
string $projectId,
string $locationId,
string $namespaceId,
string $serviceId
): void {
// Instantiate a client.
$client = new RegistrationServiceClient();
// Run request.
$namespaceName = RegistrationServiceClient::namespaceName($projectId, $locationId, $namespaceId);
$createServiceRequest = (new CreateServiceRequest())
->setParent($namespaceName)
->setServiceId($serviceId)
->setService(new Service());
$service = $client->createService($createServiceRequest);
// Print results.
printf('Created Service: %s' . PHP_EOL, $service->getName());
}
Python
To run this code, first set up a Python development environment and
install the Service Directory Python SDK .
def create_service (
project_id : str , location : str , namespace_id : str , service_id : str
) - > Service :
"""Creates a service in the given namespace.
Args:
project_id: Your Google Cloud project id.
location: The Google Cloud region containing the namespace.
namespace_id: The id of the parent namespace.
service_id: The id of the service you are creating. Service names must be unique within a namespace and follow
conventions for DNS labels.
Returns:
The created service.
"""
client = servicedirectory_v1 . RegistrationServiceClient ()
service = servicedirectory_v1 . Service (
name = client . service_path ( project_id , location , namespace_id , service_id )
)
response = client . create_service (
parent = client . namespace_path ( project_id , location , namespace_id ),
service = service ,
service_id = service_id ,
)
print ( f "Created service { response . name } ." )
return response
Ruby
To run this code, first set up a Ruby development environment and
install the Service Directory Ruby SDK .
# project = "Your Google Cloud project ID"
# location = "The Google Cloud region containing the namespace"
# namespace = "The name of the parent namespace"
# service = "The name of the service you are creating"
require "google/cloud/service_directory"
# Initialize the client
registration_service = Google :: Cloud :: ServiceDirectory . registration_service
# The parent path of the service
parent = registration_service . namespace_path (
project : project , location : location , namespace : namespace
)
# Use the Service Directory API to create the service
response = registration_service . create_service parent : parent , service_id : service
puts "Created service: #{ response . name } "
Configure an endpoint
After you have registered the service, add some endpoints. An endpoint consists of a
unique name, an optional IP address and a port, and key-value annotations.
The IP address, if specified, must be a valid IPv4 or IPv6 address.
Console
In the Google Cloud console, go to the Service Directory page.
Go to Service Directory
Click a service.
Click Add endpoint .
Provide an Endpoint name .
Enter an IPv4 or IPv6 IP address .
Enter a Port number.
Optional: If you want to add annotations to the endpoint, do the following:
Under Annotations , click Add annotation .
Add a Key and Value .
To add more annotations, click Add annotation again.
Click Create .
gcloud
To use Service Directory on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
Once the service is registered, add some endpoints.
gcloud service-directory endpoints create ENDPOINT \
--address IP_ADDRESS \
--port PORT_NUMBER \
--annotations KEY_1 = VALUE_1 , KEY_2 = VALUE_2 \
--service SERVICE \
--namespace NAMESPACE \
--location REGION
gcloud service-directory endpoints create ENDPOINT2 \
--address IP_ADDRESS2 \
--port PORT_NUMBER2 \
--service SERVICE \
--namespace NAMESPACE \
--location REGION
Replace the following:
ENDPOINT and ENDPOINT2 : the names of
the endpoints that you are creating in your service.
IP_ADDRESS and IP_ADDRESS2 : the IPv6
and IPv4 addresses of the endpoints, respectively.
PORT_NUMBER and PORT_NUMBER2 : the ports
that the endpoints are running on.
SERVICE : the name of the service that contains your
endpoint.
NAMESPACE : the name of the namespace that contains your
service.
REGION : the Google Cloud region that contains the
namespace.
KEY_1 , VALUE_1 , KEY_2 ,
VALUE_2 : key and value string set in pairs.
C#
To run this code, first set up a C# development environment and
install the Service Directory C# SDK .
using Google.Cloud.ServiceDirectory.V1 ;
public class CreateEndpointSample
{
public Endpoint CreateEndpoint (
string projectId = "my-project" ,
string locationId = "us-east1" ,
string namespaceId = "test-namespace" ,
string serviceId = "test-service" ,
string endpointId = "test-endpoint" )
{
RegistrationServiceClient registrationServiceClient = RegistrationServiceClient . Create ();
var serviceName = ServiceName . FromProjectLocationNamespaceService ( projectId , locationId , namespaceId , serviceId );
return registrationServiceClient . CreateEndpoint ( serviceName , new Endpoint (), endpointId );
}
}
Go
To run this code, first set up a Go development environment and
install the Service Directory Go SDK .
import (
"context"
"fmt"
"io"
servicedirectory "cloud.google.com/go/servicedirectory/apiv1"
sdpb "cloud.google.com/go/servicedirectory/apiv1/servicedirectorypb"
)
func createEndpoint ( w io . Writer , projectID string ) error {
// projectID := "my-project"
location := "us-east4"
namespaceID := "golang-test-namespace"
serviceID := "golang-test-service"
endpointID := "golang-test-endpoint"
ctx := context . Background ()
// Create a registration client.
client , err := servicedirectory . NewRegistrationClient ( ctx )
if err != nil {
return fmt . Errorf ( "ServiceDirectory.NewRegistrationClient: %w" , err )
}
defer client . Close ()
// Create an Endpoint.
req := & sdpb . CreateEndpointRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/%s/namespaces/%s/services/%s" , projectID , location , namespaceID , serviceID ),
EndpointId : endpointID ,
Endpoint : & sdpb . Endpoint {
Address : "8.8.8.8" ,
Port : 8080 ,
Annotations : map [ string ] string {
"key1" : "value1" ,
"key2" : "value2" ,
},
},
}
endpoint , err := client . CreateEndpoint ( ctx , req )
if err != nil {
return fmt . Errorf ( "CreateEndpoint: %w" , err )
}
fmt . Fprintf ( w , "servicedirectory.CreateEndpoint result: %s" , endpoint . Name )
return nil
}
Java
To run this code, first set up a Java development environment and
install the Service Directory Java SDK .
import com.google.cloud.servicedirectory.v1. Endpoint ;
import com.google.cloud.servicedirectory.v1. RegistrationServiceClient ;
import com.google.cloud.servicedirectory.v1. ServiceName ;
import java.io.IOException ;
public class EndpointsCreate {
public static void createEndpoint () throws IOException {
// TODO(developer): Replace these variables before running the sample.
// These variables should refer to an existing Service Directory service.
String projectId = "your-project-id" ;
String locationId = "your-region" ;
String namespaceId = "your-namespace" ;
String serviceId = "your-service" ;
// This is user-created; must be unique within the service above.
String endpointId = "your-endpoint" ;
createEndpoint ( projectId , locationId , namespaceId , serviceId , endpointId );
}
// Create a new endpoint.
public static void createEndpoint (
String projectId , String locationId , String namespaceId , String serviceId , String endpointId )
throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( RegistrationServiceClient client = RegistrationServiceClient . create ()) {
// The service to create the endpoint in.
ServiceName parent = ServiceName . of ( projectId , locationId , namespaceId , serviceId );
// The endpoint to create, with fields filled in.
// Optionally set an IP address and port for the endpoint.
Endpoint endpoint = Endpoint . newBuilder (). setAddress ( "10.0.0.1" ). setPort ( 443 ). build ();
// Send the request to create the endpoint.
Endpoint createdEndpoint = client . createEndpoint ( parent , endpoint , endpointId );
// Process the response.
System . out . println ( "Created Endpoint: " + createdEndpoint . getName ());
System . out . println ( "IP Address: " + createdEndpoint . getAddress ());
System . out . println ( "Port: " + createdEndpoint . getPort ());
}
}
}
Node.js
To run this code, first set up a Node.js development environment and
install the Service Directory Node.js SDK .
//
// TODO(developer): Uncomment these variables before running the sample.
//
// const projectId = 'my-project';
// const locationId = 'us-central1';
// const namespaceId = 'my-namespace';
// const serviceId = 'my-service';
// const endpointId = 'my-endpoint';
// Imports the Google Cloud client library
const {
RegistrationServiceClient ,
} = require ( ' @google-cloud/service-directory ' );
// Creates a client
const registrationServiceClient = new RegistrationServiceClient ();
// Build the service name
const serviceName = registrationServiceClient . servicePath (
projectId ,
locationId ,
namespaceId ,
serviceId
);
async function createEndpoint () {
const [ endpoint ] = await registrationServiceClient . createEndpoint ({
parent : serviceName ,
endpointId : endpointId ,
endpoint : { address : '10.0.0.1' , port : 8080 },
});
console . log ( `Created endpoint: ${ endpoint . name } ` );
return endpoint ;
}
return createEndpoint ();
PHP
To run this code, first set up a PHP development environment and
install the Service Directory PHP SDK .
use Google\Cloud\ServiceDirectory\V1\Client\RegistrationServiceClient;
use Google\Cloud\ServiceDirectory\V1\CreateEndpointRequest;
use Google\Cloud\ServiceDirectory\V1\Endpoint;
/**
* @param string $projectId Your Cloud project ID
* @param string $locationId Your GCP region
* @param string $namespaceId Your namespace name
* @param string $serviceId Your service name
* @param string $endpointId Your endpoint name
* @param string $ip (Optional) Defaults to ''
* @param int $port (Optional) Defaults to 0
*/
function create_endpoint(
string $projectId,
string $locationId,
string $namespaceId,
string $serviceId,
string $endpointId,
string $ip = '',
int $port = 0
): void {
// Instantiate a client.
$client = new RegistrationServiceClient();
// Construct Endpoint object.
$endpointObject = (new Endpoint())
->setAddress($ip)
->setPort($port);
// Run request.
$serviceName = RegistrationServiceClient::serviceName($projectId, $locationId, $namespaceId, $serviceId);
$createEndpointRequest = (new CreateEndpointRequest())
->setParent($serviceName)
->setEndpointId($endpointId)
->setEndpoint($endpointObject);
$endpoint = $client->createEndpoint($createEndpointRequest);
// Print results.
printf('Created Endpoint: %s' . PHP_EOL, $endpoint->getName());
printf(' IP: %s' . PHP_EOL, $endpoint->getAddress());
printf(' Port: %d' . PHP_EOL, $endpoint->getPort());
}
Python
To run this code, first set up a Python development environment and
install the Service Directory Python SDK .
def create_endpoint (
project_id : str ,
location : str ,
namespace_id : str ,
service_id : str ,
endpoint_id : str ,
address : str ,
port : str ,
) - > Endpoint :
"""Creates a endpoint in the given service.
An endpoint consists of a unique name, an optional IP address and a port, and key-value annotations.
Args:
project_id: Your Google Cloud project id.
location: The Google Cloud region containing the namespace.
namespace_id: The id of the parent namespace.
service_id: The id of the parent service.
endpoint_id: A name for the endpoint you are creating.
address: IP address for the endpoint.
port: Port number for the endpoint.
Returns:
The created endpoint.
"""
client = servicedirectory_v1 . RegistrationServiceClient ()
endpoint = servicedirectory_v1 . Endpoint (
name = client . endpoint_path (
project_id , location , namespace_id , service_id , endpoint_id
),
address = address ,
port = port ,
)
response = client . create_endpoint (
parent = client . service_path ( project_id , location , namespace_id , service_id ),
endpoint = endpoint ,
endpoint_id = endpoint_id ,
)
print ( f "Created endpoint { response . name } ." )
return response
Ruby
To run this code, first set up a Ruby development environment and
install the Service Directory Ruby SDK .
# project = "Your Google Cloud project ID"
# location = "The Google Cloud region containing the namespace"
# namespace = "The name of the parent namespace"
# service = "The name of the parent service"
# endpoint = "The name of the endpoint you are creating"
require "google/cloud/service_directory"
# Initialize the client
registration_service = Google :: Cloud :: ServiceDirectory . registration_service
# The parent path of the endpoint
parent = registration_service . service_path (
project : project ,
location : location ,
namespace : namespace ,
service : service
)
# Set the IP Address and Port on the Endpoint
endpoint_data = Google :: Cloud :: ServiceDirectory :: V1 :: Endpoint . new (
address : "10.0.0.1" ,
port : 443
)
# Use the Service Directory API to create the endpoint
response = registration_service . create_endpoint (
parent : parent , endpoint_id : endpoint , endpoint : endpoint_data
)
puts "Created endpoint: #{ response . name } "
Resolve a service
Service Directory lets clients resolve services by using DNS, HTTP, and
gRPC. Resolving the service returns all properties of the service, all endpoints, and all annotations.
gcloud
To use Service Directory on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud service-directory services resolve SERVICE \
--namespace NAMESPACE \
--location REGION
Replace the following:
SERVICE : the name of the service that you are resolving.
NAMESPACE : the name of the namespace that contains
your service.
REGION : the Google Cloud region that contains the
namespace.
C#
To run this code, first set up a C# development environment and
install the Service Directory C# SDK .
using Google.Cloud.ServiceDirectory.V1 ;
public class ResolveServiceSample
{
public Service ResolveService (
string projectId = "my-project" ,
string locationId = "us-east1" ,
string namespaceId = "test-namespace" ,
string serviceId = "test-service" )
{
// Create client
LookupServiceClient lookupServiceClient = LookupServiceClient . Create ();
// Initialize request argument(s)
ResolveServiceRequest request = new ResolveServiceRequest
{
ServiceName = ServiceName . FromProjectLocationNamespaceService ( projectId , locationId , namespaceId , serviceId ),
};
// Make the request
ResolveServiceResponse response = lookupServiceClient . ResolveService ( request );
return response . Service ;
}
}
Go
To run this code, first set up a Go development environment and
install the Service Directory Go SDK .
import (
"context"
"fmt"
"io"
servicedirectory "cloud.google.com/go/servicedirectory/apiv1"
sdpb "cloud.google.com/go/servicedirectory/apiv1/servicedirectorypb"
)
func resolveService ( w io . Writer , projectID string ) error {
// projectID := "my-project"
location := "us-east4"
namespaceID := "golang-test-namespace"
serviceID := "golang-test-service"
ctx := context . Background ()
// Create a lookup client.
resolver , err := servicedirectory . NewLookupClient ( ctx )
if err != nil {
return fmt . Errorf ( "ServiceDirectory.NewLookupClient: %w" , err )
}
defer resolver . Close ()
// Now Resolve the service.
req := & sdpb . ResolveServiceRequest {
Name : fmt . Sprintf ( "projects/%s/locations/%s/namespaces/%s/services/%s" , projectID , location , namespaceID , serviceID ),
}
result , err := resolver . ResolveService ( ctx , req )
if err != nil {
return fmt . Errorf ( "ResolveService: %w" , err )
}
fmt . Fprintf ( w , "Successfully Resolved Service %v\n" , result )
return nil
}
Java
To run this code, first set up a Java development environment and
install the Service Directory Java SDK .
import com.google.cloud.servicedirectory.v1. Endpoint ;
import com.google.cloud.servicedirectory.v1. LookupServiceClient ;
import com.google.cloud.servicedirectory.v1. ResolveServiceRequest ;
import com.google.cloud.servicedirectory.v1. ResolveServiceResponse ;
import com.google.cloud.servicedirectory.v1. ServiceName ;
import java.io.IOException ;
public class ServicesResolve {
public static void resolveService () throws IOException {
// TODO(developer): Replace these variables before running the sample.
// These variables should refer to an existing Service Directory service.
String projectId = "your-project-id" ;
String locationId = "your-region" ;
String namespaceId = "your-namespace" ;
String serviceId = "your-service" ;
resolveService ( projectId , locationId , namespaceId , serviceId );
}
// Resolve a service.
public static void resolveService (
String projectId , String locationId , String namespaceId , String serviceId )
throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( LookupServiceClient client = LookupServiceClient . create ()) {
// The service to resolve.
ServiceName name = ServiceName . of ( projectId , locationId , namespaceId , serviceId );
// Construct the resolve request to be sent to the client.
ResolveServiceRequest request =
ResolveServiceRequest . newBuilder (). setName ( name . toString ()). build ();
// Send the request to resolve the service.
ResolveServiceResponse resolveResponse = client . resolveService ( request );
// Process the response.
System . out . println ( "Resolved Service: " + resolveResponse . getService (). getName ());
System . out . println ( "Endpoints found:" );
for ( Endpoint endpoint : resolveResponse . getService (). getEndpointsList ()) {
System . out . println (
endpoint . getName () + " -- " + endpoint . getAddress () + ":" + endpoint . getPort ());
}
}
}
}
Node.js
To run this code, first set up a Node.js development environment and
install the Service Directory Node.js SDK .
//
// TODO(developer): Uncomment these variables before running the sample.
//
// const projectId = 'my-project';
// const locationId = 'us-central1';
// const namespaceId = 'my-namespace';
// const serviceId = 'my-service';
// Imports the Google Cloud client library
const { LookupServiceClient } = require ( ' @google-cloud/service-directory ' );
// Creates a client
const lookupServiceClient = new LookupServiceClient ();
// Build the service name
const serviceName = lookupServiceClient . servicePath (
projectId ,
locationId ,
namespaceId ,
serviceId
);
async function resolveService () {
const [ response ] = await lookupServiceClient . resolveService ({
name : serviceName ,
});
console . log ( `Resolved service: ${ response . service . name } ` );
for ( const e of response . service . endpoints ) {
console . log ( `\n ${ e . name } ` );
console . log ( `Address: ${ e . address } ` );
console . log ( `Port: ${ e . port } \n` );
}
return response . service ;
}
return resolveService ();
PHP
To run this code, first set up a PHP development environment and
install the Service Directory PHP SDK .
use Google\Cloud\ServiceDirectory\V1\Client\LookupServiceClient;
use Google\Cloud\ServiceDirectory\V1\ResolveServiceRequest;
use Google\Cloud\ServiceDirectory\V1\Service;
/**
* @param string $projectId Your Cloud project ID
* @param string $locationId Your GCP region
* @param string $namespaceId Your namespace name
* @param string $serviceId Your service name
*/
function resolve_service(
string $projectId,
string $locationId,
string $namespaceId,
string $serviceId
): void {
// Instantiate a client.
$client = new LookupServiceClient();
// Run request.
$serviceName = LookupServiceClient::serviceName($projectId, $locationId, $namespaceId, $serviceId);
$resolveServiceRequest = (new ResolveServiceRequest())
->setName($serviceName);
$service = $client->resolveService($resolveServiceRequest)->getService();
// Print results.
printf('Resolved Service: %s' . PHP_EOL, $service->getName());
print('Endpoints:' . PHP_EOL);
foreach ($service->getEndpoints() as $endpoint) {
printf(' Name: %s' . PHP_EOL, $endpoint->getName());
printf(' IP: %s' . PHP_EOL, $endpoint->getAddress());
printf(' Port: %d' . PHP_EOL, $endpoint->getPort());
}
}
Python
To run this code, first set up a Python development environment and
install the Service Directory Python SDK .
def resolve_service (
project_id : str , location : str , namespace_id : str , service_id : str
) - > ResolveServiceResponse :
"""Resolves a service in the given namespace.
Args:
project_id: Your Google Cloud project id.
location: The Google Cloud region containing the namespace.
namespace_id: The id of the parent namespace.
service_id: The id of the service to resolve.
Returns:
The resolved service response, which returns all properties of the service, all endpoints, and all annotations.
"""
client = servicedirectory_v1 . LookupServiceClient ()
request = servicedirectory_v1 . ResolveServiceRequest (
name = servicedirectory_v1 . RegistrationServiceClient () . service_path (
project_id , location , namespace_id , service_id
)
)
response = client . resolve_service ( request = request )
print ( "Endpoints found:" )
for endpoint in response . service . endpoints :
print ( f " { endpoint . name } -- { endpoint . address } : { endpoint . port } " )
return response
Ruby
To run this code, first set up a Ruby development environment and
install the Service Directory Ruby SDK .
# project = "Your Google Cloud project ID"
# location = "The Google Cloud region containing the namespace"
# namespace = "The name of the parent namespace"
# service = "The name of the service"
require "google/cloud/service_directory"
# Initialize the client
lookup_service = Google :: Cloud :: ServiceDirectory . lookup_service
# The name of the service
service_path = lookup_service . service_path (
project : project ,
location : location ,
namespace : namespace ,
service : service
)
# Use the Service Directory API to resolve the service
response = lookup_service . resolve_service name : service_path
puts "Resolved service: #{ response . service . name } "
puts "Endpoints: "
response . service . endpoints . each do | endpoint |
puts " #{ endpoint . name } #{ endpoint . address } #{ endpoint . port } "
end
Delete resources
If you don't need a resource, you can delete it from Service Directory.
Delete an endpoint from a service
Console
In the Google Cloud console, go to the Service Directory page.
Go to Service Directory
Click the service that you want to delete the endpoint from.
Select the checkbox next to the endpoint that you want to delete.
Click Delete .
In the confirmation dialog, click Delete again.
gcloud
To use Service Directory on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud service-directory endpoints delete ENDPOINT \
--service= SERVICE \
--namespace= NAMESPACE \
--location= REGION
Replace the following:
ENDPOINT : the name of the endpoint that you are deleting.
SERVICE : the name of the service that contains your
endpoint.
NAMESPACE : the name of the namespace that contains
your service.
REGION : the Google Cloud region that contains the
namespace.
C#
To run this code, first set up a C# development environment and
install the Service Directory C# SDK .
using Google.Cloud.ServiceDirectory.V1 ;
public class DeleteEndpointSample
{
public void DeleteEndpoint (
string projectId = "my-project" ,
string locationId = "us-east1" ,
string namespaceId = "test-namespace" ,
string serviceId = "test-service" ,
string endpointId = "test-endpoint" )
{
// Create client
RegistrationServiceClient registrationServiceClient = RegistrationServiceClient . Create ();
// Initialize request argument(s)
var endpointName = EndpointName . FromProjectLocationNamespaceServiceEndpoint ( projectId , locationId , namespaceId , serviceId , endpointId );
registrationServiceClient . DeleteEndpoint ( endpointName );
}
}
Go
To run this code, first set up a Go development environment and
install the Service Directory Go SDK .
import (
"context"
"fmt"
servicedirectory "cloud.google.com/go/servicedirectory/apiv1"
sdpb "cloud.google.com/go/servicedirectory/apiv1/servicedirectorypb"
)
func deleteEndpoint ( projectID string ) error {
// projectID := "my-project"
location := "us-east4"
namespaceID := "golang-test-namespace"
serviceID := "golang-test-service"
endpointID := "golang-test-endpoint"
ctx := context . Background ()
// Create a registration client.
client , err := servicedirectory . NewRegistrationClient ( ctx )
if err != nil {
return fmt . Errorf ( "ServiceDirectory.NewRegistrationClient: %w" , err )
}
defer client . Close ()
// Delete an Endpoint
req := & sdpb . DeleteEndpointRequest {
Name : fmt . Sprintf ( "projects/%s/locations/%s/namespaces/%s/services/%s/endpoints/%s" , projectID , location , namespaceID , serviceID , endpointID ),
}
if err := client . DeleteEndpoint ( ctx , req ); err != nil {
return fmt . Errorf ( "DeleteEndpoint: %w" , err )
}
return nil
}
Java
To run this code, first set up a Java development environment and
install the Service Directory Java SDK .
import com.google.cloud.servicedirectory.v1. EndpointName ;
import com.google.cloud.servicedirectory.v1. RegistrationServiceClient ;
import java.io.IOException ;
public class EndpointsDelete {
public static void deleteEndpoint () throws IOException {
// TODO(developer): Replace these variables before running the sample.
// These variables should refer to an existing Service Directory endpoint.
String projectId = "your-project-id" ;
String locationId = "your-region" ;
String namespaceId = "your-namespace" ;
String serviceId = "your-service" ;
String endpointId = "your-endpoint" ;
deleteEndpoint ( projectId , locationId , namespaceId , serviceId , endpointId );
}
// Delete an endpoint.
public static void deleteEndpoint (
String projectId , String locationId , String namespaceId , String serviceId , String endpointId )
throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( RegistrationServiceClient client = RegistrationServiceClient . create ()) {
// The endpoint to delete.
EndpointName endpointName =
EndpointName . of ( projectId , locationId , namespaceId , serviceId , endpointId );
// Send the request to delete the endpoint.
client . deleteEndpoint ( endpointName );
// Log the action.
System . out . println ( "Deleted Endpoint: " + endpointName . toString ());
}
}
}
Node.js
To run this code, first set up a Node.js development environment and
install the Service Directory Node.js SDK .
//
// TODO(developer): Uncomment these variables before running the sample.
//
// const projectId = 'my-project';
// const locationId = 'us-central1';
// const namespaceId = 'my-namespace';
// const serviceId = 'my-service';
// const endpointId = 'my-endpoint';
// Imports the Google Cloud client library
const {
RegistrationServiceClient ,
} = require ( ' @google-cloud/service-directory ' );
// Creates a client
const registrationServiceClient = new RegistrationServiceClient ();
// Build the endpoint name
const endpointName = registrationServiceClient . endpointPath (
projectId ,
locationId ,
namespaceId ,
serviceId ,
endpointId
);
async function deleteEndpoint () {
await registrationServiceClient . deleteEndpoint ({
name : endpointName ,
});
console . log ( `Deleted endpoint: ${ endpointName } ` );
}
deleteEndpoint ();
PHP
To run this code, first set up a PHP development environment and
install the Service Directory PHP SDK .
use Google\Cloud\ServiceDirectory\V1\Client\RegistrationServiceClient;
use Google\Cloud\ServiceDirectory\V1\DeleteEndpointRequest;
/**
* @param string $projectId Your Cloud project ID
* @param string $locationId Your GCP region
* @param string $namespaceId Your namespace name
* @param string $serviceId Your service name
* @param string $endpointId Your endpoint name
*/
function delete_endpoint(
string $projectId,
string $locationId,
string $namespaceId,
string $serviceId,
string $endpointId
): void {
// Instantiate a client.
$client = new RegistrationServiceClient();
// Run request.
$endpointName = RegistrationServiceClient::endpointName($projectId, $locationId, $namespaceId, $serviceId, $endpointId);
$deleteEndpointRequest = (new DeleteEndpointRequest())
->setName($endpointName);
$client->deleteEndpoint($deleteEndpointRequest);
// Print results.
printf('Deleted Endpoint: %s' . PHP_EOL, $endpointName);
}
Python
To run this code, first set up a Python development environment and
install the Service Directory Python SDK .
def delete_endpoint (
project_id : str ,
location : str ,
namespace_id : str ,
service_id : str ,
endpoint_id : str ,
) - > bool :
"""Deletes a endpoint in the given service.
Args:
project_id: Your Google Cloud project id.
location: The Google Cloud region containing the namespace.
namespace_id: The id of the parent namespace.
service_id: The id of the parent service.
endpoint_id: The id of the endpoint to delete.
"""
client = servicedirectory_v1 . RegistrationServiceClient ()
endpoint_name = client . endpoint_path (
project_id , location , namespace_id , service_id , endpoint_id
)
client . delete_endpoint ( name = endpoint_name )
print ( f "Deleted endpoint { endpoint_name } ." )
return True
Ruby
To run this code, first set up a Ruby development environment and
install the Service Directory Ruby SDK .
# project = "Your Google Cloud project ID"
# location = "The Google Cloud region containing the namespace"
# namespace = "The name of the parent namespace"
# service = "The name of the parent service"
# endpoint = "The name of the endpoint"
require "google/cloud/service_directory"
# Initialize the client
registration_service = Google :: Cloud :: ServiceDirectory . registration_service
# The path of the endpoint
endpoint_path = registration_service . endpoint_path (
project : project ,
location : location ,
namespace : namespace ,
service : service ,
endpoint : endpoint
)
# Use the Service Directory API to delete the endpoint
registration_service . delete_endpoint name : endpoint_path
puts "Deleted endpoint: #{ endpoint_path } "
Delete a service from a namespace
You can delete a service that has endpoints. When a service is deleted, all
of its endpoints are deleted as well.
You can delete a service that has a
Service Directory zone
pointing to it. Any further DNS queries for that service return NXDOMAIN .
Console
In the Google Cloud console, go to the Service Directory page.
Go to Service Directory
Select the checkbox next to the service that you want to delete.
Click Delete .
In the confirmation dialog, click Delete again.
gcloud
To use Service Directory on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud service-directory services delete SERVICE \
--namespace= NAMESPACE \
--location= REGION
Replace the following:
SERVICE : the name of the service that you are deleting.
NAMESPACE : the name of the namespace that contains your
service.
REGION : the Google Cloud region that contains the
namespace.
C#
To run this code, first set up a C# development environment and
install the Service Directory C# SDK .
using Google.Cloud.ServiceDirectory.V1 ;
public class DeleteServiceSample
{
public void DeleteService (
string projectId = "my-project" ,
string locationId = "us-east1" ,
string namespaceId = "test-namespace" ,
string serviceId = "test-service" )
{
// Create client
RegistrationServiceClient registrationServiceClient = RegistrationServiceClient . Create ();
// Initialize request argument(s)
var serviceName = ServiceName . FromProjectLocationNamespaceService ( projectId , locationId , namespaceId , serviceId );
registrationServiceClient . DeleteService ( serviceName );
}
}
Go
To run this code, first set up a Go development environment and
install the Service Directory Go SDK .
import (
"context"
"fmt"
servicedirectory "cloud.google.com/go/servicedirectory/apiv1"
sdpb "cloud.google.com/go/servicedirectory/apiv1/servicedirectorypb"
)
func deleteService ( projectID string ) error {
// projectID := "my-project"
location := "us-east4"
namespaceID := "golang-test-namespace"
serviceID := "golang-test-service"
ctx := context . Background ()
// Create a registration client.
client , err := servicedirectory . NewRegistrationClient ( ctx )
if err != nil {
return fmt . Errorf ( "ServiceDirectory.NewRegistrationClient: %w" , err )
}
defer client . Close ()
// Delete a service
req := & sdpb . DeleteServiceRequest {
Name : fmt . Sprintf ( "projects/%s/locations/%s/namespaces/%s/services/%s" , projectID , location , namespaceID , serviceID ),
}
if err := client . DeleteService ( ctx , req ); err != nil {
return fmt . Errorf ( "DeleteService: %w" , err )
}
return nil
}
Java
To run this code, first set up a Java development environment and
install the Service Directory Java SDK .
import com.google.cloud.servicedirectory.v1. RegistrationServiceClient ;
import com.google.cloud.servicedirectory.v1. ServiceName ;
import java.io.IOException ;
public class ServicesDelete {
public static void deleteService () throws IOException {
// TODO(developer): Replace these variables before running the sample.
// These variables should refer to an existing Service Directory service.
String projectId = "your-project-id" ;
String locationId = "your-region" ;
String namespaceId = "your-namespace" ;
String serviceId = "your-service" ;
deleteService ( projectId , locationId , namespaceId , serviceId );
}
// Delete a service.
public static void deleteService (
String projectId , String locationId , String namespaceId , String serviceId )
throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( RegistrationServiceClient client = RegistrationServiceClient . create ()) {
// The service to delete.
ServiceName serviceName = ServiceName . of ( projectId , locationId , namespaceId , serviceId );
// Send the request to delete the service.
client . deleteService ( serviceName );
// Log the action.
System . out . println ( "Deleted Service: " + serviceName . toString ());
}
}
}
Node.js
To run this code, first set up a Node.js development environment and
install the Service Directory Node.js SDK .
//
// TODO(developer): Uncomment these variables before running the sample.
//
// const projectId = 'my-project';
// const locationId = 'us-central1';
// const namespaceId = 'my-namespace';
// const serviceId = 'my-service';
// Imports the Google Cloud client library
const {
RegistrationServiceClient ,
} = require ( ' @google-cloud/service-directory ' );
// Creates a client
const registrationServiceClient = new RegistrationServiceClient ();
// Build the service name
const serviceName = registrationServiceClient . servicePath (
projectId ,
locationId ,
namespaceId ,
serviceId
);
async function deleteService () {
await registrationServiceClient . deleteService ({
name : serviceName ,
});
console . log ( `Deleted service: ${ serviceName } ` );
}
deleteService ();
PHP
To run this code, first set up a PHP development environment and
install the Service Directory PHP SDK .
use Google\Cloud\ServiceDirectory\V1\Client\RegistrationServiceClient;
use Google\Cloud\ServiceDirectory\V1\DeleteServiceRequest;
/**
* @param string $projectId Your Cloud project ID
* @param string $locationId Your GCP region
* @param string $namespaceId Your namespace name
* @param string $serviceId Your service name
*/
function delete_service(
string $projectId,
string $locationId,
string $namespaceId,
string $serviceId
): void {
// Instantiate a client.
$client = new RegistrationServiceClient();
// Run request.
$serviceName = RegistrationServiceClient::serviceName($projectId, $locationId, $namespaceId, $serviceId);
$deleteServiceRequest = (new DeleteServiceRequest())
->setName($serviceName);
$client->deleteService($deleteServiceRequest);
// Print results.
printf('Deleted Service: %s' . PHP_EOL, $serviceName);
}
Python
To run this code, first set up a Python development environment and
install the Service Directory Python SDK .
def delete_service (
project_id : str , location : str , namespace_id : str , service_id : str
) - > bool :
"""Deletes a service in the given namespace.
Args:
project_id: Your Google Cloud project id.
location: The Google Cloud region containing the namespace.
namespace_id: The id of the parent namespace.
service_id: The id of the service to delete.
"""
client = servicedirectory_v1 . RegistrationServiceClient ()
service_name = client . service_path ( project_id , location , namespace_id , service_id )
client . delete_service ( name = service_name )
print ( f "Deleted service { service_name } ." )
return True
Ruby
To run this code, first set up a Ruby development environment and
install the Service Directory Ruby SDK .
# project = "Your Google Cloud project ID"
# location = "The Google Cloud region containing the namespace"
# namespace = "The name of the parent namespace"
# service = "The name of the service"
require "google/cloud/service_directory"
# Initialize the client
registration_service = Google :: Cloud :: ServiceDirectory . registration_service
# The path of the service
service_path = registration_service . service_path (
project : project ,
location : location ,
namespace : namespace ,
service : service
)
# Use the Service Directory API to delete the service
registration_service . delete_service name : service_path
puts "Deleted service: #{ service_path } "
Delete a namespace
You can delete a namespace that has services and endpoints. When a namespace is
deleted, all of its services and endpoints are deleted as well.
You can delete a namespace that has a
Service Directory zone
pointing to it. Any further DNS queries (not including SOA/NS
requests for the zone origin) return NXDOMAIN .
Console
In the Google Cloud console, go to the Service Directory namespaces page.
Go to Service Directory namespaces
Select the checkbox next to the namespace that you want to delete.
Click Delete .
In the confirmation dialog, click Delete again.
gcloud
To use Service Directory on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud service-directory namespaces delete NAMESPACE \
--location= REGION
Replace the following:
NAMESPACE : the name of the namespace that you are deleting.
REGION : the Google Cloud region that contains the
namespace.
C#
To run this code, first set up a C# development environment and
install the Service Directory C# SDK .
using Google.Cloud.ServiceDirectory.V1 ;
public class DeleteNamespaceSample
{
public void DeleteNamespace (
string projectId = "projectId" ,
string locationId = "us-east1" ,
string namespaceId = "test-namespace" )
{
// Create client
RegistrationServiceClient registrationServiceClient = RegistrationServiceClient . Create ();
// Initialize request argument(s)
var namespaceName = NamespaceName . FromProjectLocationNamespace ( projectId , locationId , namespaceId );
registrationServiceClient . DeleteNamespace ( namespaceName );
}
}
Go
To run this code, first set up a Go development environment and
install the Service Directory Go SDK .
import (
"context"
"fmt"
servicedirectory "cloud.google.com/go/servicedirectory/apiv1"
sdpb "cloud.google.com/go/servicedirectory/apiv1/servicedirectorypb"
)
func deleteNamespace ( projectID string ) error {
// projectID := "my-project"
location := "us-east4"
namespaceID := "golang-test-namespace"
ctx := context . Background ()
// Create a registration client.
client , err := servicedirectory . NewRegistrationClient ( ctx )
if err != nil {
return fmt . Errorf ( "ServiceDirectory.NewRegistrationClient: %w" , err )
}
defer client . Close ()
// Delete a Namespace.
req := & sdpb . DeleteNamespaceRequest {
Name : fmt . Sprintf ( "projects/%s/locations/%s/namespaces/%s" , projectID , location , namespaceID ),
}
if err := client . DeleteNamespace ( ctx , req ); err != nil {
return fmt . Errorf ( "DeleteNamespace: %w" , err )
}
return nil
}
Java
To run this code, first set up a Java development environment and
install the Service Directory Java SDK .
import com.google.cloud.servicedirectory.v1. NamespaceName ;
import com.google.cloud.servicedirectory.v1. RegistrationServiceClient ;
import java.io.IOException ;
public class NamespacesDelete {
public static void deleteNamespace () throws IOException {
// TODO(developer): Replace these variables before running the sample.
// These variables should refer to an existing Service Directory namespace.
String projectId = "your-project-id" ;
String locationId = "your-region" ;
String namespaceId = "your-namespace" ;
deleteNamespace ( projectId , locationId , namespaceId );
}
// Delete a namespace.
public static void deleteNamespace ( String projectId , String locationId , String namespaceId )
throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( RegistrationServiceClient client = RegistrationServiceClient . create ()) {
// The namespace to delete.
NamespaceName namespaceName = NamespaceName . of ( projectId , locationId , namespaceId );
// Send the request to delete the namespace.
client . deleteNamespace ( namespaceName );
// Log the action.
System . out . println ( "Deleted Namespace: " + namespaceName . toString ());
}
}
}
Node.js
To run this code, first set up a Node.js development environment and
install the Service Directory Node.js SDK .
//
// TODO(developer): Uncomment these variables before running the sample.
//
// const projectId = 'my-project';
// const locationId = 'us-central1';
// const namespaceId = 'my-namespace';
// Imports the Google Cloud client library
const {
RegistrationServiceClient ,
} = require ( ' @google-cloud/service-directory ' );
// Creates a client
const registrationServiceClient = new RegistrationServiceClient ();
// Build the namespace name
const namespaceName = registrationServiceClient . namespacePath (
projectId ,
locationId ,
namespaceId
);
async function deleteNamespace () {
await registrationServiceClient . deleteNamespace ({
name : namespaceName ,
});
console . log ( `Deleted namespace: ${ namespaceName } ` );
}
deleteNamespace ();
PHP
To run this code, first set up a PHP development environment and
install the Service Directory PHP SDK .
use Google\Cloud\ServiceDirectory\V1\Client\RegistrationServiceClient;
use Google\Cloud\ServiceDirectory\V1\DeleteNamespaceRequest;
/**
* @param string $projectId Your Cloud project ID
* @param string $locationId Your GCP region
* @param string $namespaceId Your namespace name
*/
function delete_namespace(
string $projectId,
string $locationId,
string $namespaceId
): void {
// Instantiate a client.
$client = new RegistrationServiceClient();
// Run request.
$namespaceName = RegistrationServiceClient::namespaceName($projectId, $locationId, $namespaceId);
$deleteNamespaceRequest = (new DeleteNamespaceRequest())
->setName($namespaceName);
$client->deleteNamespace($deleteNamespaceRequest);
// Print results.
printf('Deleted Namespace: %s' . PHP_EOL, $namespaceName);
}
Python
To run this code, first set up a Python development environment and
install the Service Directory Python SDK .
def delete_namespace ( project_id : str , location : str , namespace_id : str ) - > bool :
"""Deletes a namespace in the given location.
Args:
project_id: Your Google Cloud project id.
location: The Google Cloud region containing the namespace to delete.
namespace_id: The id for the namespace to delete.
"""
client = servicedirectory_v1 . RegistrationServiceClient ()
namespace_name = client . namespace_path ( project_id , location , namespace_id )
client . delete_namespace ( name = namespace_name )
print ( f "Deleted namespace { namespace_name } ." )
return True
Ruby
To run this code, first set up a Ruby development environment and
install the Service Directory Ruby SDK .
# project = "Your Google Cloud project ID"
# location = "The Google Cloud region containing the namespace"
# namespace = "The name of the namespace"
require "google/cloud/service_directory"
# Initialize the client
registration_service = Google :: Cloud :: ServiceDirectory . registration_service
# The path of the namespace
namespace_name = registration_service . namespace_path (
project : project , location : location , namespace : namespace
)
# Use the Service Directory API to delete the namespace
registration_service . delete_namespace name : namespace_name
puts "Deleted namespace: #{ namespace_name } "
What's next
To configure a Service Directory zone so that you can query your service
using DNS, see Configure a Service Directory zone .
To get an overview of Service Directory, see the
Service Directory overview .
To find solutions for common issues that you might encounter when using
Service Directory, see Troubleshooting .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
