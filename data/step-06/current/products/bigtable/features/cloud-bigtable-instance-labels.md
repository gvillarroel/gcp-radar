---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.051Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable instance labels"
feature_slug: "cloud-bigtable-instance-labels"
latest_feature_date: "2017-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/creating-managing-labels"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/creating-instance"
keywords:
  - "labels"
  - "users"
  - "instances"
  - "instance"
---

# Cloud Bigtable instance labels

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Users can now add labels to Cloud Bigtable instances.

## Extended Definition

Users can now add labels to Cloud Bigtable instances.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/creating-managing-labels](https://docs.cloud.google.com/bigtable/docs/creating-managing-labels)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/creating-instance](https://docs.cloud.google.com/bigtable/docs/creating-instance)

## Supporting Pages

### Create and manage instance labels \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/creating-managing-labels](https://docs.cloud.google.com/bigtable/docs/creating-managing-labels)
- Source ID: `site-docs-reference-2`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Common uses of labels Here are some common use cases for labels: Team or cost center labels : Add labels based on team or cost center to distinguish instances owned by different teams (for example, team:research and team:analytics ).
- To add or update labels for a Bigtable instance using the Google Cloud console: Open the list of Bigtable instances in the Google Cloud console.
- Labels are key-value pairs that you can use to group related instances and store metadata about an instance.
- Create and manage instance labels Bigtable provides the option to add labels to your instances.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Cluster size considerations When you size a Bigtable instance to prepare for migrating a Cassandra workload, there are considerations when you compare single-data center Cassandra clusters to single-cluster Bigtable instances, and Cassandra multiple-data center clusters to multi-cluster Bigtable instances.
- You can use VPC Service Controls to control access to Bigtable instances from outside of approved networks.
- Nodes are given temporary responsibility for serving various ranges of data based on the operation load and the health of other nodes in the cluster. data center : similar to a Bigtable cluster, except some aspects of topology and replication strategy are configurable in Cassandra. rack : a grouping of nodes in a data center that influences replica placement. cluster : a group of nodes in the same geographic Google Cloud zone, colocated for latency and replication concerns. cluster : a Cassandra deployment consisting of a collection of data centers. instance : a group of Bigtable clusters in different Google Cloud zones or regions between which replication and connection routing occur. vnode : a fixed range of hash values assigned to a specific physical node.
- The number of nodes in each cluster in an instance should be able to handle all writes across the cluster and all reads to at least two data centers in order to maintain service level objectives (SLOs) during a cluster outage.

### Create an instance \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/creating-instance](https://docs.cloud.google.com/bigtable/docs/creating-instance)
- Source ID: `site-docs-reference-2`
- Final score: 102
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . instance id = "my-instance" cluster id = "my-cluster" cluster location = "us-east1-b" puts "Creating a PRODUCTION Instance" job = bigtable . create instance ( instance id , display name : "Sample production instance" , labels : { "env" : "production" }, type : :PRODUCTION # Optional as default type is :PRODUCTION ) do clusters clusters . add cluster id , cluster location , nodes : 3 , storage type : :SSD end job . wait until done! instance = job . instance puts "Created Instance: #{ instance . instance id } " What's next Find out how Bigtable uses instances, clusters, and nodes .
- For more information, see Set up authentication for a local development environment . use Exception; use Google\ApiCore\ApiException; use Google\Cloud\Bigtable\Admin\V2\Client\BigtableInstanceAdminClient; use Google\Cloud\Bigtable\Admin\V2\Cluster; use Google\Cloud\Bigtable\Admin\V2\CreateInstanceRequest; use Google\Cloud\Bigtable\Admin\V2\GetInstanceRequest; use Google\Cloud\Bigtable\Admin\V2\Instance; use Google\Cloud\Bigtable\Admin\V2\Instance\Type as InstanceType; use Google\Cloud\Bigtable\Admin\V2\StorageType; / Create a production Bigtable instance @param string $projectId The Google Cloud project ID @param string $instanceId The ID of the Bigtable instance to be generated @param string $clusterId The ID of the cluster to be generated @param string $locationId The Bigtable region ID where you want your instance to reside / function create production instance( string $projectId, string $instanceId, string $clusterId, string $locationId = 'us-east1-b' ): void { $instanceAdminClient = new BigtableInstanceAdminClient(); $projectName = $instanceAdminClient->projectName($projectId); $instanceName = $instanceAdminClient->instanceName($projectId, $instanceId); $serveNodes = 3; $storageType = StorageType::SSD; $production = InstanceType::PRODUCTION; $labels = ['prod-label' => 'prod-label']; $instance = new Instance(); $instance->setDisplayName($instanceId); $instance->setLabels($labels); $instance->setType($production); $cluster = new Cluster(); $cluster->setDefaultStorageType($storageType); $locationName = $instanceAdminClient->locationName($projectId, $locationId); $cluster->setLocation($locationName); $cluster->setServeNodes($serveNodes); $clusters = [ $clusterId => $cluster ]; try { $getInstanceRequest = (new GetInstanceRequest()) ->setName($instanceName); $instanceAdminClient->getInstance($getInstanceRequest); printf('Instance %s already exists.' .
- For more information, see Set up authentication for a local development environment . // Creates a Production Instance with the ID "ssd-instance" // with cluster id "ssd-cluster", 3 nodes and location us-central1-f const { BigtableInstanceAdminClient } = require ( ' @google-cloud/bigtable ' ). v2 ; const instanceAdminClient = new BigtableInstanceAdminClient (); const projectId = await instanceAdminClient . getProjectId (); const instanceOptions = { parent : projects/ ${ projectId } , instanceId : instanceID , instance : { displayName : instanceID , labels : { 'prod-label' : 'prod-label' }, type : ' PRODUCTION ' , }, clusters : { [ clusterID ] : { location : projects/ ${ projectId } /locations/us-central1-f , serveNodes : 3 , defaultStorageType : ' SSD ' , }, }, }; // Create production instance with given options const [ prodInstance , operation ] = await instanceAdminClient . createInstance ( instanceOptions ); await operation . promise (); console . log ( Created Instance: ${ prodInstance . name } ); PHP To learn how to install and use the client library for Bigtable, see Bigtable client libraries .
- You might need to update the default app profile or create custom app profiles . gcloud Use the bigtable instances create command to create an instance: gcloud bigtable instances create INSTANCE ID \ -- display - name = DISPLAY NAME \ [ -- cluster - storage - type = CLUSTER STORAGE TYPE ] \ [ -- cluster - config = id = CLUSTER ID , zone = CLUSTER ZONE , \ nodes = NODES ] \ [ -- cluster - config = id = CLUSTER ID , zone = CLUSTER ZONE , \ autoscaling - min - nodes = AUTOSCALING MIN NODES , \ autoscaling - max - nodes = AUTOSCALING MAX NODES , \ autoscaling - cpu - target = AUTOSCALING CPU TARGET , \ autoscaling - storage - target = AUTOSCALING STORAGE TARGET , \ kms - key = KMS KEY ], \ [ node - scaling - factor = NODE SCALING FACTOR ] Replace the following: INSTANCE ID : The permanent identifier for the instance.

