---
title: "Manage instance replication \_|\_ Filestore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/filestore/docs/configure-instance-replication
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/filestore/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/filestore/docs/configure-instance-replication
  title: "Manage instance replication \_|\_ Filestore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Filestore
Guides
Send feedback
Manage instance replication
Stay organized with collections
Save and categorize content based on your preferences.
This guide shows you how to use Filestore instance replication.
Before you begin
Complete the setup steps needed to use Filestore. Quota for instances varies by project, region, and tier. Ensure you have enough to complete these tasks. For more information, see Quotas or Request a quota increase .
If you haven't already done so, create a Filestore instance. In the context of this guide, this is the source instance.
Note: Instance replication is available for regional, zonal, and enterprise service tiers .
Create an instance replica
Google Cloud console
In the Google Cloud console, go to the Filestore Instances page.
Go to Instances
Click the instance ID of the instance you want to replicate.
Click the Replications tab.
Click Create replica .
Click the documentation link to review the supported recovery point
objective (RPO) and click Next .
Enter all required fields and optional fields as needed.
The specified capacity must be greater than or equal to the source.
The following specifications must match the source instance:
Service tier , including capacity range
Filestore protocol
For reduced risk of data loss, you are encouraged to choose a
region and zone unique to the source.
Click Next .
Review the details and click Next .
Click Create .
Wait for the operation to complete. When finished, the replica will be
listed under the source instance on the Instances page.
Click the replica's instance ID to view its details.
gcloud
You can create a replica instance by running the
filestore instances create
command.
gcloud filestore instances create INSTANCE_ID \
--source-instance=projects/ PROJECT_ID /locations/ LOCATION /instances/ SOURCE_INSTANCE \
--project= PROJECT_ID \
--location= LOCATION \
--network=name=" NETWORK " \
--tier= TIER \
--file-share=name=" FILE_SHARE_NAME ",capacity= FILE_SHARE_SIZE \
Where:
INSTANCE_ID with the name of the instance that you want
to create, such as my-replica .
SOURCE_INSTANCE with the name and location of the source instance
for which you want to create a replica. For example,
projects/my-genomics-project/locations/us-east1-b/instances/my-genomics-instance .
PROJECT_ID with the project ID of the Google Cloud project
where the source instance is located.
LOCATION with the location where you want the replica
instance to reside, such as us-central1-a . If the source is in a zonal
service tier, you must specify both a region and zone for the replica.
NETWORK with the name of the network you want to use, such as
default .
TIER with the service tier you
need, such as ZONAL . The tier and capacity range must match the source.
FILE_SHARE_NAME with the name you specify for the NFS file share
that is served from the instance, such as vol1 .
FILE_SHARE_SIZE with the size you want for the file share, such
as 1.25TiB .
REST API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Use cURL to call the Filestore API :
curl -s \
--header "Authorization: Bearer $(gcloud auth print-access-token)" \
--header "Content-Type: application/json" \
-d '{"tier": " TIER ",
"networks": { "network": " NETWORK " },
"file_shares": {"name": " SHARE_NAME ","capacity_gb": " CAPACITY "},
"replication": {"replicas":[{"peer_instance": "projects/ PROJECT /locations/ ACTIVE_LOCATION /instances/ ACTIVE_NAME "}], "role":"standby"},
"description": " DESCRIPTION " }' \
"https://file.googleapis.com/v1beta1/projects/ PROJECT /locations/ REPLICA_LOCATION /instances?instanceId= REPLICA_INSTANCE_NAME "
Where:
TIER is the name of the service tier you want
to use for the replica. For example, REGIONAL .
NETWORK is the name of the network you want
to use for the replica. For example, default . You must use the same
network as the source.
SHARE_NAME is the name of the file share. For
example, vol1 .
CAPACITY is the size, in GiB, you want to
allocate for the replica. For example, 1024 . Capacity must be greater
than or equal to that of the source instance.
PROJECT is the name of the project where your
replica will reside. For example, my-genomics-project . The source
and replica must be located in the same project.
ACTIVE_LOCATION is the location where the
source resides. For example, us-east1 .
ACTIVE_NAME is the name of the instance you
want to replicate. For example, my-genomics-instance .
DESCRIPTION is a description of the
replica instance you want to create. For example,
My genomics replica .
REPLICA_LOCATION is the location where you
want the replica to reside. For example, us-central1 .
REPLICA_INSTANCE_NAME is the name of the
replica instance you want to create. For example, my-genomics-replica .
View replica status
Google Cloud console
In the Google Cloud console, go to the Filestore Instances page.
Go to Instances
Click the instance ID of the replica you want to view.
In the Description section, click the Replications tab.
Here you can see the Replica status and Last synchronization point ,
a timestamp of the last time a full copy of your data was copied to the
replica.
gcloud
To view information about a specific instance, run the
instances describe
command:
gcloud filestore instances describe INSTANCE_ID \
--project= PROJECT_ID \
--location= LOCATION \
Where:
INSTANCE_ID with the instance ID of the Filestore
instance that you want to view, such as genomics-instance .
PROJECT_ID with the project ID of the Google Cloud project
that contains the Filestore instance.
LOCATION with the location where instance resides, such as
us-east1-b .
The response to the instances describe command is similar to any of the
following examples.
This response example shows a source instance with instance replication
enabled. Notice the role specified is ACTIVE :
createTime: '2024-06-17T22:17:26.475900265Z'
fileShares:
- capacityGb: '1024'
name: vol1
name: projects/genomics-project/locations/us-east1-b/instances/genomics-instance-source
networks:
- connectMode: DIRECT_PEERING
ipAddresses:
- 172.27.220.2
modes:
- MODE_IPV4
network: default
reservedIpRange: 172.27.220.0/26
replication:
replicas:
- peerInstance: projects/genomics-project/locations/us-central1-a/instances/genomics-instance-replica
state: READY
role: ACTIVE
state: READY
tier: ZONAL
This response example shows a replica instance that was promoted to a
regular instance. Notice that replication isn't specified as it hasn't yet
been enabled:
createTime: '2024-06-20T17:11:56.048062134Z'
fileShares:
- capacityGb: '1024'
name: vol1
name: projects/genomics-project/locations/us-west2-a/instances/genomics-instance-replica
networks:
- connectMode: DIRECT_PEERING
ipAddresses:
- 10.155.90.194
network: default
reservedIpRange: 10.155.90.192/26
satisfiesPzi: true
state: READY
tier: ZONAL
This response example shows a replica that was paired with an active
instance. Notice the role is listed as STANDBY :
createTime: '2024-06-21T04:15:21.721579074Z'
fileShares:
- capacityGb: '1280'
name: vol1
name: projects/genomics-project/locations/us-west1-a/instances/genomics-replica
networks:
- connectMode: DIRECT_PEERING
ipAddresses:
- 10.153.44.194
network: default
reservedIpRange: 10.153.44.192/26
replication:
replicas:
- peerInstance: projects/genomics-project/locations/us-west2-a/instances/genomics-instance
state: READY
role: STANDBY
satisfiesPzi: true
state: READY
tier: ZONAL
REST API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Use cURL to call the Filestore API :
curl -s \
--header "Authorization: Bearer $(gcloud auth print-access-token)" \
--header "Content-Type: application/json" \
GET "https://file.googleapis.com/v1beta1/projects/ PROJECT /locations/ LOCATION /instances/ INSTANCE_NAME "
Where:
PROJECT is the name of the project where your
instance is located. For example, my-genomics-project .
LOCATION is the location where your instance
resides. For example, us-west1-a .
INSTANCE_NAME is the name of the instance you
want to view. For example, my-genomics-instance .
List all replicas in a project
Google Cloud console
In the Google Cloud console, go to the Filestore Instances page.
Go to Instances
Replicas are listed under their associated source instances.
gcloud
To see a list of all instances in the project, run the instances list
command:
gcloud filestore instances list
--project= PROJECT-ID \
Where:
PROJECT-ID with the project ID of the project you want to
view.
The response returns a list of instances and replicas, similar to the following:
INSTANCE_NAME LOCATION TIER CAPACITY_GB FILE_SHARE_NAME IP_ADDRESS STATE CREATE_TIME
genomics-source-1 us-east1-b ZONAL 1024 vol1 172.27.220.2 READY 2024-06-17T22:17:26
genomics-source-1-replica us-west1-a ZONAL 1024 vol1 10.142.57.194 READY 2024-06-17T23:47:19
REST API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Use cURL to call the Filestore API :
curl -s \
--header "Authorization: Bearer $(gcloud auth print-access-token)" \
--header "Content-Type: application/json" \
GET "https://file.googleapis.com/v1/projects/ PROJECT /locations/ LOCATION /instances"
Where:
PROJECT is the name of the project where your
instance is located. For example, my-genomics-project .
LOCATION is the location you want to search.
To search all instances in any location within a project,
use - .
Pause replication
Google Cloud console
In the Google Cloud console, go to the Filestore Instances page.
Go to Instances
Click the instance ID of the replica you want to use.
In the Description section, click the Replications tab.
In the Active instance details section, click Pause replication
Read the alert before continuing and confirm by clicking Pause replication .
The replication status changes to Pausing . After the operation is finished, the Replication Status changes to Paused and displays the date when the replica was paused.
gcloud
You can pause a replica instance by running the gcloud filestore instances pause-replica command.
gcloud filestore instances pause-replica INSTANCE_ID \
--project= PROJECT_ID \
--location= LOCATION \
Where:
INSTANCE_ID with the instance ID of the Filestore
instance that you want to pause, such as my-replica .
PROJECT_ID with the project ID of the Google Cloud project that
contains the Filestore instance.
LOCATION with the location where the replica resides, such as
us-central1 .
When successfully completed, the following response or similar is returned:
createTime: '2025-12-22T14:03:33.727531128Z'
customPerformanceSupported: true
description: Replica of active, us-east1-b
fileShares:
- capacityGb: '1024'
name: share
name: projects/genomics-project/locations/us-west2-a/instances/my-replica
networks:
- connectMode: DIRECT_PEERING
ipAddresses:
- 10.229.150.130
modes:
- MODE_IPV4
network: default
reservedIpRange: 10.229.150.128/26
performanceLimits:
maxIops: '12000'
maxReadIops: '12000'
maxReadThroughputBps: '125829120'
maxWriteIops: '4000'
maxWriteThroughputBps: '104857600'
protocol: NFS_V3
replication:
replicas:
- peerInstance: projects/genomics-project/locations/us-east1-b/instances/my-source
state: PAUSED
stateUpdateTime: '2025-12-22T14:24:27.558413891Z'
role: STANDBY
state: READY
tier: REGIONAL
REST API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Use cURL to call the Filestore API :
curl -s \
--header "Authorization: Bearer $(gcloud auth print-access-token)" \
--header "Content-Type: application/json" \
-d '{}' "https://file.googleapis.com/v1beta1/projects/ PROJECT /locations/ LOCATION /instances/ REPLICA_NAME :pauseReplica"
Where:
PROJECT is the name of the project where your
replica is located. For example, my-genomics-project .
LOCATION is the location where the replica
resides. For example, us-west1-a .
REPLICA_NAME is the name of the instance you
want to pause. For example, my-genomics-replica .
Resume replication
Google Cloud console
In the Google Cloud console, go to the Filestore Instances page.
Go to Instances
Click the instance ID of the replica you want to use.
In the Description section, click the Replications tab.
In the Active instance details section, click Resume replication
Read the alert before continuing and confirm by entering resume in the provided field.
The replication status changes to Resuming . After the operation is finished, the Replication Status is changed to Ready .
gcloud
You can resume a replica instance by running the gcloud filestore instances resume-replica command.
gcloud filestore instances resume-replica INSTANCE_ID \
--project= PROJECT_ID \
--location= LOCATION \
Where:
INSTANCE_ID with the instance ID of the Filestore
replica instance that you want to resume, such as my-replica .
PROJECT_ID with the project ID of the Google Cloud project that
contains the Filestore replica instance.
LOCATION with the location where the replica resides, such as
us-central1 .
When successfully completed, the following response or similar is returned:
createTime: '2025-12-22T14:03:33.727531128Z'
customPerformanceSupported: true
description: Replica of active, us-central1
fileShares:
- capacityGb: '1024'
name: share
name: projects/genomics-project/locations/us-central1/instances/my-replica
networks:
- connectMode: DIRECT_PEERING
ipAddresses:
- 10.229.150.130
modes:
- MODE_IPV4
network: default
reservedIpRange: 10.229.150.128/26
performanceLimits:
maxIops: '12000'
maxReadIops: '12000'
maxReadThroughputBps: '125829120'
maxWriteIops: '4000'
maxWriteThroughputBps: '104857600'
protocol: NFS_V3
replication:
replicas:
- peerInstance: projects/genomics-project/locations/us-central1/instances/my-source
state: READY
stateUpdateTime: '2025-12-22T14:24:27.558413891Z'
role: STANDBY
state: READY
tier: REGIONAL
REST API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Use cURL to call the Filestore API :
curl -s \
--header "Authorization: Bearer $(gcloud auth print-access-token)" \
--header "Content-Type: application/json" \
-d '{}' "https://file.googleapis.com/v1beta1/projects/ PROJECT /locations/ LOCATION /instances/ REPLICA_NAME :resumeReplica"
Where:
PROJECT is the name of the project where your
replica is located. For example, my-genomics-project .
LOCATION is the location where the replica
resides. For example, us-west1-a .
REPLICA_NAME is the name of the instance you
want to resume. For example, my-genomics-replica .
Break replication and promote replica
In this section, you'll break replication between the active and standby
instances. This action promotes the replica to a regular instance.
This operation is irreversible and should be used carefully.
Once promoted to a regular instance, the resource can be paired with a new
replica.
Failback isn't automatic. Once the
operation to break replication is complete, administrators must
reconnect their applications to the new source instance. For more information,
see Promote replica .
Google Cloud console
In the Google Cloud console, go to the Filestore Instances page.
Go to Instances
Click the instance ID of the replica you want to use.
Click Break replication .
Read the alert before continuing.
Breaking replication will permanently stop data synchronization and convert
both the active and standby instances into regular instances. Any changes
made after the last recorded synchronization point won't be replicated.
This action is irreversible.
Enter the instance ID of the replica, then click Break replication .
Wait for the operation to successfully complete.
gcloud
You can promote a replica instance by running the
gcloud filestore instances promote-replica
command.
gcloud filestore instances promote-replica INSTANCE-ID \
--project= PROJECT-ID \
--location= LOCATION \
Where:
INSTANCE_ID with the instance ID of the Filestore
instance that you want to promote, such as my-replica .
PROJECT_ID with the project ID of the Google Cloud project that
contains the Filestore instance.
LOCATION with the location where the replica resides, such as
us-central1 .
When successfully completed, the following response or similar is returned:
capacityGb: '1024'
capacityStepSizeGb: '256'
createTime: '2024-06-20T17:11:56.048062134Z'
fileShares:
- capacityGb: '1024'
name: vol1
maxCapacityGb: '9984'
maxShareCount: '1'
name: projects/genomics-project/locations/us-west2-a/instances/my-replica
networks:
- connectMode: DIRECT_PEERING
ipAddresses:
- 10.155.90.194
network: default
reservedIpRange: 10.155.90.192/26
protocol: NFS_V3
replication:
replicas:
- lastActiveSyncTime: '2024-06-21T00:13:23Z'
peerInstance: projects/genomics-project/locations/us-east1-b/instances/my-source
role: STANDBY
satisfiesPzi: true
state: PROMOTING
tier: ZONAL
REST API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Use cURL to call the Filestore API :
curl -s \
--header "Authorization: Bearer $(gcloud auth print-access-token)" \
--header "Content-Type: application/json" \
-d '{}' "https://file.googleapis.com/v1beta1/projects/ PROJECT /locations/ LOCATION /instances/ REPLICA_NAME :promoteReplica"
Where:
PROJECT is the name of the project where your
replica is located. For example, my-genomics-project .
LOCATION is the location where the replica
resides. For example, us-west1-a .
REPLICA_NAME is the name of the instance you
want to promote. For example, my-genomics-replica .
Delete a replica instance
Google Cloud console
In the Google Cloud console, go to the Filestore instances page.
Go to Instances
Replicas are listed under their associated source instances. If you don't
see a replica, see the gcloud commands for this task.
Click the instance ID of the instance you want to delete.
Click Delete .
gcloud
To see a list of all instances, including replicas, in the project, run the instances list
command:
gcloud filestore instances list
--project= PROJECT_ID \
Where:
PROJECT_ID with the project ID of the project you want to
view.
Copy the details of the instance you want to delete.
You can delete an instance by running the
filestore instances delete
command.
gcloud filestore instances delete INSTANCE_ID \
--location= LOCATION \
Where:
INSTANCE_ID with the instance ID of the Filestore
instance that you want to delete, such as my-replica .
LOCATION with the location where the replica resides, such as
us-central1-a .
REST API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Use cURL to call the Filestore API :
curl -s \
--header "Authorization: Bearer $(gcloud auth print-access-token)" \
--header "Content-Type: application/json" \
--request DELETE "https://file.googleapis.com/v1beta1/projects/ PROJECT /locations/ LOCATION /instances/ INSTANCE_NAME "
Where:
PROJECT is the name of the project where your
instance is located. For example, my-genomics-project .
LOCATION is the location where your instance
resides. For example, us-west1-a .
INSTANCE_NAME is the name of the instance you
want to delete. For example, my-genomics-instance .
Monitor instance replication
Google Cloud console
To see Filestore instance replication metrics in a Cloud Monitoring
dashboard, follow these steps:
Before you begin, make sure you have access to the following roles:
Monitoring Viewer
Monitoring Editor
To see how to grant access to these roles, see
Grant access to Cloud Monitoring .
In the Google Cloud console, go to the
leaderboard Metrics explorer page:
Go to Metrics explorer
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
Click the Select a metric expandable section.
In the Filter by resource or metric name field, type filestore and
select the Filestore Instance expandable section.
Select the Instance expandable section and then click RPO .
The RPO metric times_since_last_replication is displayed. This metric
becomes available several minutes after the initial synchronization of
replicated data completes.
What's next
Find more about instance replication .
Read Instance replication reference documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
