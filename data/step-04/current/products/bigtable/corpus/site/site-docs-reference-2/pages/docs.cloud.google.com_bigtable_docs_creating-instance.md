---
title: "Create an instance \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/creating-instance
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/creating-instance
  title: "Create an instance \_|\_ Bigtable \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create an instance
A Bigtable instance is a container for Bigtable
clusters. An instance that has more than one cluster uses
replication . You can create clusters in up to
8 regions, with as many clusters in each
region as there are zones.
This page explains how to create an instance.
Before you read this page, you should be familiar with the
overview of Bigtable .
You should
also read the overview of instances, clusters, and nodes .
Before you begin
Prepare your environment:
Sign in to your Google Account. If you don't already have one,
sign up for a new account .
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
Enable the Cloud Bigtable API, Cloud Bigtable Admin API APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
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
Enable the Cloud Bigtable API, Cloud Bigtable Admin API APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Run the following command to install the
cbt CLI
:
gcloud components install cbt
Plan your configuration:
Optional: If you plan to enable replication, do the following:
Take a few minutes to read the replication overview .
Identify your use case for replication .
Determine the region or regions that your instance
should be in, based on your use case and the location of your application
and traffic.
Decide how you'll use application profiles to route
incoming requests.
Optional: If you want to use customer-managed encryption keys (CMEK) instead of the default Google-managed encryption, have your
CMEK key ID ready before you create your new instance. You are not able to
add CMEK protection to an instance after it has been created, and you cannot
modify or replace the CMEK key after the instance is created. For more
information, see Use customer-managed encryption keys (CMEK) .
Create an instance
To create a Bigtable instance:
Console
In the Google Cloud console, go to the Create instance page.
Go to Create instance
Enter a name for the instance.
The Google Cloud console displays this name to identify your instance.
Enter an instance ID.
The instance ID is a permanent identifier for the instance.
Click Continue .
Choose whether to use an SSD or HDD disk for your clusters. In most
cases, SSD is best. This choice is permanent. Learn more .
Click Continue .
Enter a cluster ID for the first cluster.
The cluster ID is a permanent identifier for the cluster.
Choose the region and zone where the first cluster
will run.
Optional: To configure the cluster to always scale in increments of
two nodes, select Enable 2x node scaling . 2x node scaling is not
available in all zones. For more information, see Node scaling
factor .
Choose a node scaling mode for the cluster. In most cases, you should
choose autoscaling. For scaling guidance, see Autoscaling .
For Manual node allocation , enter the number of
Bigtable nodes for the first cluster.
If you aren't sure how many nodes you need, use the default. You can add more nodes later.
For Autoscaling , enter values for the following:
Minimum number of nodes
Maximum number of nodes
CPU utilization target
Storage utilization target
Optional: To protect your instance with CMEK instead of the default
Google-managed encryption, complete the following:
Click Show encryption options .
Select Cloud KMS key .
In the Key management type field, select one of the following
options:
If you want to automate creation of Cloud KMS keys, select
Cloud KMS with Autokey , and then click Request a key . A
message indicates when your key has been successfully created and
is ready for use.
If you want to add a key manually, select Cloud KMS . Select or
enter the resource name for the CMEK key that you want
to use for the cluster. You cannot add this later. If you are
prompted to grant permission to the CMEK key's service account,
click Grant . Your user account must be granted the
Cloud KMS Admin role to complete this task. Click
Save .
Optional: To enable replication now, complete the following additional
steps:
Click Show advanced options .
Click Add cluster , enter the settings for the cluster, and
then click Add . Repeat this step to create additional clusters in
the instance. You can also enable replication later by adding a
cluster .
Each zone in a region can contain only
one cluster.
If the Add cluster button is
disabled, change the zone for your first cluster.
To create an instance that has more than six clusters, first create an
instance that has six clusters, then add more clusters to the instance.
Click Create to create the instance.
Review the replication
settings in the default app profile to see if they make sense for your
replication use case . You might need to
update the default app
profile or create custom
app profiles .
gcloud
Use the bigtable instances create command to create
an instance:
gcloud bigtable instances create INSTANCE_ID \
-- display - name = DISPLAY_NAME \
[ -- cluster - storage - type = CLUSTER_STORAGE_TYPE ] \
[ -- cluster - config = id = CLUSTER_ID , zone = CLUSTER_ZONE , \
nodes = NODES ] \
[ -- cluster - config = id = CLUSTER_ID , zone = CLUSTER_ZONE , \
autoscaling - min - nodes = AUTOSCALING_MIN_NODES , \
autoscaling - max - nodes = AUTOSCALING_MAX_NODES , \
autoscaling - cpu - target = AUTOSCALING_CPU_TARGET , \
autoscaling - storage - target = AUTOSCALING_STORAGE_TARGET , \
kms - key = KMS_KEY ], \
[ node - scaling - factor = NODE_SCALING_FACTOR ]
Replace the following:
INSTANCE_ID :
The permanent identifier for the instance.
DISPLAY_NAME :
A human-readable name that identifies the instance in the Google Cloud console.
CLUSTER_ID :
The permanent identifier for the cluster.
CLUSTER_ZONE :
The zone where the cluster runs.
You must configure at least one cluster for the instance, using the
--cluster-config flag. To create an instance that has multiple
clusters, repeat the --cluster-config flag for each cluster .
For manual node allocation , setting nodes in the --cluster-config
flag is optional. If no value is set, Bigtable allocates
nodes to the cluster automatically based on your data footprint and
optimizes for 50% storage utilization. This automatic allocation of
nodes has a pricing impact. If you want to control the number of nodes
in a cluster, replace NODES with the number of nodes that
you want in the cluster. Learn more about nodes .
In most cases, choose autoscaling instead of manual node allocation.
For_autoscaling, provide autoscaling- options in the
--cluster-config flag ( autoscaling-storage-target is optional) and
don't use nodes . See Autoscaling for
guidance on choosing the values for your autoscaling settings. Replace
the following for the cluster-config option keys:
AUTOSCALING_MIN_NODES : The minimum number of nodes for the cluster.
AUTOSCALING_MAX_NODES : The maximum number of nodes for the cluster.
AUTOSCALING_CPU_TARGET : The target CPU utilization percentage for
the cluster. This value must be from 10 to 80.
AUTOSCALING_STORAGE_TARGET : (Optional) The storage utilization
target in GiB that Bigtable maintains by adding or
removing nodes.
KMS_KEY : The CMEK key for the cluster.
The KMS_KEY value must be set in the following format:
projects/ PROJECT /locations/ LOCATION /keyRings/ KEYRING /cryptoKeys/ KEY
Replace the following:
PROJECT : the permanent identifier for the project
LOCATION : the location of your cluster
KEYRING : the name of the key ring that contains the key
KEY : the name of the key
The following is an example:
projects/examplestore.com:dev/locations/us-east1/keyRings/devt-cmek-2/cryptoKeys/key2
If the instance is CMEK-protected, each cluster must be in
the same region as its CMEK key. You can
add CMEK clusters only to instances that are already CMEK-protected.
Learn more .
The command accepts the following optional flags:
--cluster-storage-type= CLUSTER_STORAGE_TYPE : The type of storage to
use for the instance.
The default value is SSD .
In most cases, the default value is best. This choice is permanent.
Learn more .
--project= PROJECT : The project in which to create the cluster if
different from the current project.
node-scaling-factor= NODE_SCALING_FACTOR : A flag that
enables 2x node scaling .
You can enable this feature with both manual scaling and autoscaling.
Acceptable values are node-scaling-factor-2x or node-scaling-factor-1x .
To view a list of Bigtable zones that aren't available
for 2x node scaling, see Node scaling factor
limitations .
Review the replication
settings in the default app profile to see if they make sense for your
replication use case . You might need to
update the default app
profile or create custom
app profiles .
cbt
Note: You can't create CMEK-protected resources or configure
autoscaling using the
cbt CLI
. You also can't enable 2x node
scaling with the
cbt CLI
.
Start by creating an instance with a single cluster.
Use the createinstance command to create an
instance:
cbt createinstance INSTANCE_ID \
DISPLAY_NAME \
CLUSTER_ID \
CLUSTER_ZONE \
CLUSTER_NUM_NODES \
CLUSTER_STORAGE_TYPE
Provide the following:
INSTANCE_ID :
The permanent identifier for the instance.
DISPLAY_NAME :
A human-readable name that identifies the instance in the Google Cloud console.
CLUSTER_ID :
The permanent identifier for the cluster.
CLUSTER_ZONE :
The zone where the cluster runs.
CLUSTER_NUM_NODES : This field is optional. If no value is set, Bigtable automatically
allocates nodes based on your data footprint and optimizes for 50% storage
utilization. If you want to control the number of nodes in a cluster, update the
CLUSTER_NUM_NODES value. Ensure that number of nodes is set to a non-zero value.
Learn more about nodes .
CLUSTER_STORAGE_TYPE :
The type of storage to use for the cluster. Each cluster in an instance must use the same storage
type. Accepts the values SSD and HDD .
In most cases,
SSD is best. This choice is permanent. Learn more .
To enable replication, use the createcluster command to add a cluster:
cbt -instance= INSTANCE_ID \
createcluster CLUSTER_ID \
ZONE \
NUM_NODES \
STORAGE_TYPE
Provide the following:
INSTANCE_ID :
The permanent identifier for the instance you just created.
CLUSTER_ID :
The permanent identifier for the cluster.
ZONE :
The zone where the cluster runs.
Each zone in a region can contain only
one cluster.
For example, if an instance has a cluster in us-east1-b , you can add a cluster
in a different zone in the same region, such as us-east1-c , or a zone in a separate
region, such as europe-west2-a .
NUM_NODES :
This field is optional. If no value is set, Bigtable automatically
allocates nodes based on your data footprint and optimizes for 50% storage
utilization. If you want to control the number of nodes in a cluster, update the
NUM_NODES value. Ensure that number of nodes is set to a non-zero value.
In many cases, each cluster in an instance should have the same number of nodes, but there are
exceptions. Learn about nodes
and replication .
STORAGE_TYPE :
The type of storage to use for the cluster. Each cluster in an instance must use the same storage
type. Accepts the values SSD and HDD .
(Optional)
Review the replication
settings in the default app profile to see if they make sense for your
replication use case . You might need to
update the default app
profile or create custom
app profiles .
C++
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
namespace cbta = :: google :: cloud :: bigtable_admin ;
using :: google :: cloud :: future ;
using :: google :: cloud :: Location ;
using :: google :: cloud :: Project ;
using :: google :: cloud :: StatusOr ;
[]( cbta :: BigtableInstanceAdminClient instance_admin ,
std :: string const & project_id , std :: string const & instance_id ,
std :: string const & zone ) {
auto const project = Project ( project_id );
std :: string project_name = project . FullName ();
std :: string cluster_id = instance_id + "-c1" ;
google :: bigtable :: admin :: v2 :: Instance in ;
in . set_type ( google :: bigtable :: admin :: v2 :: Instance :: PRODUCTION );
in . set_display_name ( "Put description here" );
google :: bigtable :: admin :: v2 :: Cluster cluster ;
cluster . set_location ( Location ( project , zone ). FullName ());
cluster . set_serve_nodes ( 3 );
cluster . set_default_storage_type ( google :: bigtable :: admin :: v2 :: HDD );
std :: map<std :: string , google :: bigtable :: admin :: v2 :: Cluster > cluster_map = {
{ cluster_id , std :: move ( cluster )}};
future<StatusOr<google :: bigtable :: admin :: v2 :: Instance >> instance_future =
instance_admin . CreateInstance ( project_name , instance_id , std :: move ( in ),
std :: move ( cluster_map ));
// Show how to perform additional work while the long running operation
// completes. The application could use future.then() instead.
std :: cout << "Waiting for instance creation to complete " << std :: flush ;
instance_future . wait_for ( std :: chrono :: seconds ( 1 ));
std :: cout << '.' << std :: flush ;
auto instance = instance_future . get ();
if ( ! instance ) throw std :: move ( instance ). status ();
std :: cout << "DONE, details=" << instance - > DebugString () << " \n " ;
}
C#
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Creates a production instance with "<intanceId>-prod" instance ID,
// with cluster ID "ssd-cluster1", 3 nodes and location us-east1-b.
displayName += " Prod" ; // Display name is for display purposes only. It doesn't have to equal instanceId and can be amended after instance is created.
string instanceId = Regex . Replace ( displayName , @"[^A-Za-z0-9_\.~]+" , "-" ). ToLower ();
// Please refer to the link below for the full list of available locations:
// https://cloud.google.com/bigtable/docs/locations
string zone1 = "us-east1-b" ;
// The instance to create.
Instance myInstance = new Instance
{
DisplayName = displayName ,
// You can choose DEVELOPMENT or PRODUCTION type here.
// If not set, will default to PRODUCTION type.
// Instance type can be upgraded from DEVELOPMENT to PRODUCTION but cannot be dowgraded after the instance is created.
Type = Instance . Types . Type . Production ,
Labels = { { "prod-label" , "prod-label" } }
};
// The first cluster to be created within the instance.
Cluster myCluster1 = new Cluster
{
// You can choose SSD or HDD storage type here: StorageType.Ssd or StorageType.Hdd.
// Cluster storage type can not be changed after the instance is created.
// If not set will default to SSD type.
DefaultStorageType = StorageType . Ssd ,
LocationAsLocationName = new LocationName ( projectId , zone1 ),
// Serve Nodes count can only be set if PRODUCTION type instance is being created.
// Minimum count of 3 serve nodes must be specified.
// Serve Nodes count can be increased and decreased after an instance is created.
ServeNodes = 3
};
// Initialize request argument(s).
CreateInstanceRequest request = new CreateInstanceRequest
{
ParentAsProjectName = new ProjectName ( projectId ),
Instance = myInstance ,
InstanceId = instanceId ,
// Must specify at lease one cluster.
// Only PRODUCTION type instance can be created with more than one cluster.
// Currently all clusters must have the same storage type.
// Clusters must be set to different locations.
Clusters = { { "ssd-cluster1" , myCluster1 } }
};
try
{
// Make a request.
Operation<Instance , CreateInstanceMetadata > createInstanceResponse =
bigtableInstanceAdminClient . CreateInstance ( request );
Console . WriteLine ( "Waiting for operation to complete..." );
// Poll until the returned long-running operation is complete
Operation<Instance , CreateInstanceMetadata > completedResponse =
createInstanceResponse . PollUntilCompleted ();
}
catch ( Exception ex )
{
Console . WriteLine ( $"Exception while creating {displayName} instance" );
Console . WriteLine ( ex . Message );
}
Java
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Creates a Production Instance with the ID "ssd-instance",
// cluster id "ssd-cluster", 3 nodes and location "us-central1-f".
String parent = "projects/" + projectId ;
Instance instanceObj =
Instance . newBuilder ()
. setDisplayName ( instanceId )
. setType ( Instance . Type . PRODUCTION )
. putLabels ( "department" , "accounting" )
. build ();
Cluster clusterObj =
Cluster . newBuilder ()
. setLocation ( "projects/" + projectId + "/locations/us-central1-f" )
. setServeNodes ( 3 )
. setDefaultStorageType ( StorageType . SSD )
. build ();
CreateInstanceRequest request =
CreateInstanceRequest . newBuilder ()
. setParent ( parent )
. setInstanceId ( instanceId )
. setInstance ( instanceObj )
. putClusters ( clusterId , clusterObj )
. build ();
// Creates a production instance with the given request.
try {
Instance instance = adminClient . getBaseClient (). createInstanceAsync ( request ). get ();
System . out . printf ( "PRODUCTION type instance %s created successfully%n" , instance . getName ());
} catch ( Exception e ) {
System . err . println ( "Failed to create instance: " + e . getMessage ());
throw new RuntimeException ( e );
}
Node.js
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Creates a Production Instance with the ID "ssd-instance"
// with cluster id "ssd-cluster", 3 nodes and location us-central1-f
const { BigtableInstanceAdminClient } = require ( ' @google-cloud/bigtable ' ). v2 ;
const instanceAdminClient = new BigtableInstanceAdminClient ();
const projectId = await instanceAdminClient . getProjectId ();
const instanceOptions = {
parent : `projects/ ${ projectId } ` ,
instanceId : instanceID ,
instance : {
displayName : instanceID ,
labels : { 'prod-label' : 'prod-label' },
type : ' PRODUCTION ' ,
},
clusters : {
[ clusterID ] : {
location : `projects/ ${ projectId } /locations/us-central1-f` ,
serveNodes : 3 ,
defaultStorageType : ' SSD ' ,
},
},
};
// Create production instance with given options
const [ prodInstance , operation ] =
await instanceAdminClient . createInstance ( instanceOptions );
await operation . promise ();
console . log ( `Created Instance: ${ prodInstance . name } ` );
PHP
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Exception;
use Google\ApiCore\ApiException;
use Google\Cloud\Bigtable\Admin\V2\Client\BigtableInstanceAdminClient;
use Google\Cloud\Bigtable\Admin\V2\Cluster;
use Google\Cloud\Bigtable\Admin\V2\CreateInstanceRequest;
use Google\Cloud\Bigtable\Admin\V2\GetInstanceRequest;
use Google\Cloud\Bigtable\Admin\V2\Instance;
use Google\Cloud\Bigtable\Admin\V2\Instance\Type as InstanceType;
use Google\Cloud\Bigtable\Admin\V2\StorageType;
/**
* Create a production Bigtable instance
*
* @param string $projectId The Google Cloud project ID
* @param string $instanceId The ID of the Bigtable instance to be generated
* @param string $clusterId The ID of the cluster to be generated
* @param string $locationId The Bigtable region ID where you want your instance to reside
*/
function create_production_instance(
string $projectId,
string $instanceId,
string $clusterId,
string $locationId = 'us-east1-b'
): void {
$instanceAdminClient = new BigtableInstanceAdminClient();
$projectName = $instanceAdminClient->projectName($projectId);
$instanceName = $instanceAdminClient->instanceName($projectId, $instanceId);
$serveNodes = 3;
$storageType = StorageType::SSD;
$production = InstanceType::PRODUCTION;
$labels = ['prod-label' => 'prod-label'];
$instance = new Instance();
$instance->setDisplayName($instanceId);
$instance->setLabels($labels);
$instance->setType($production);
$cluster = new Cluster();
$cluster->setDefaultStorageType($storageType);
$locationName = $instanceAdminClient->locationName($projectId, $locationId);
$cluster->setLocation($locationName);
$cluster->setServeNodes($serveNodes);
$clusters = [
$clusterId => $cluster
];
try {
$getInstanceRequest = (new GetInstanceRequest())
->setName($instanceName);
$instanceAdminClient->getInstance($getInstanceRequest);
printf('Instance %s already exists.' . PHP_EOL, $instanceId);
throw new Exception(sprintf('Instance %s already exists.' . PHP_EOL, $instanceId));
} catch (ApiException $e) {
if ($e->getStatus() === 'NOT_FOUND') {
printf('Creating an Instance: %s' . PHP_EOL, $instanceId);
$createInstanceRequest = (new CreateInstanceRequest())
->setParent($projectName)
->setInstanceId($instanceId)
->setInstance($instance)
->setClusters($clusters);
$operationResponse = $instanceAdminClient->createInstance($createInstanceRequest);
$operationResponse->pollUntilComplete();
if (!$operationResponse->operationSucceeded()) {
print('Error: ' . $operationResponse->getError()->getMessage());
} else {
printf('Instance %s created.', $instanceId);
}
} else {
throw $e;
}
}
}
Python
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
cluster = instance . cluster (
cluster_id ,
location_id = location_id ,
serve_nodes = serve_nodes ,
default_storage_type = storage_type ,
)
if not instance . exists ():
print ( " \n Creating an instance" )
# Create instance with given options
operation = instance . create ( clusters = [ cluster ])
# Ensure the operation completes.
operation . result ( timeout = 480 )
print ( " \n Created instance: {} " . format ( instance_id ))
Ruby
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# instance_id = "my-instance"
# cluster_id = "my-cluster"
# cluster_location = "us-east1-b"
puts "Creating a PRODUCTION Instance"
job = bigtable . create_instance (
instance_id ,
display_name : "Sample production instance" ,
labels : { "env" : "production" },
type : :PRODUCTION # Optional as default type is :PRODUCTION
) do | clusters |
clusters . add cluster_id , cluster_location , nodes : 3 , storage_type : :SSD
end
job . wait_until_done!
instance = job . instance
puts "Created Instance: #{ instance . instance_id } "
What's next
Find out how Bigtable uses instances, clusters, and
nodes .
Learn about Bigtable replication .
Review and update the default app profile for
replication, and create custom app profiles as needed.
Find out how to modify an existing instance .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
