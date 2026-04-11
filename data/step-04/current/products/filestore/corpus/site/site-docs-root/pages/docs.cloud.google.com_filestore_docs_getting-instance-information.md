---
title: "Get instance information \_|\_ Filestore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/filestore/docs/getting-instance-information
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/filestore/docs
source_metadata:
  url: https://docs.cloud.google.com/filestore/docs/getting-instance-information
  title: "Get instance information \_|\_ Filestore \_|\_ Google Cloud Documentation"
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
Get instance information
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to get information about Filestore
instances.
Before you begin
If you want to use the command-line examples in this page, enable the gcloud
command-line tool by installing the gcloud CLI .
View all instances in a project
Google Cloud console
You can get information about your Filestore instances, and view
all instances in a project, by going to the Filestore instances
page:
Go to the Filestore instances page
gcloud
You can get information about your Filestore instances, and view
all instances in a project, by running the instances list
command:
gcloud filestore instances list --project= project-id --zone= zone
where:
project-id is the project ID of the Google Cloud project that
contains the Filestore instance. You can skip this
flag if the Filestore instance is in the gcloud default
project. You can set the default project by running:
gcloud config set project project-id
zone is the zone for which you want to list
Filestore instances. If you skip this flag, instances in all
zones are returned. Run the gcloud filestore zones list command to get a
list of supported zones.
The response to the instances list command is similar to the following:
Note: For more information regarding the types of available instances, see
Service tiers .
INSTANCE_NAME ZONE TIER CAPACITY_GB FILE_SHARE_NAME IP_ADDRESS STATE CREATE_TIME
nfs-loc europe-west1-b BASIC_HDD 1024 nfs1 10.0.5.2 READY 2017-10-09T22:11:28
nfs3 us-central1-c BASIC_HDD 1024 acme 10.0.6.2 READY 2017-11-06T09:37:18
Example
The following command lists the Filestore instances in project
myproject :
gcloud filestore instances list --project=myproject
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
Get information about a specific instance
Use one of the following procedures to get information about a specific
Filestore instance.
Google Cloud console
Go to the Filestore instances page.
Go to the Filestore instances page
Click the instance ID to open the instance details page.
gcloud
Get information about a Filestore instance by running the
instances describe
command:
gcloud filestore instances describe instance-id --project= project-id --location= location
The response to the instances describe command is similar to the following:
createTime: '2021-10-11T17:28:23.340943077Z'
customPerformanceSupported: true
fileShares:
- capacityGb: '1024'
name: vol1
kmsKeyName: projects/example-project/locations/us-central1/keyRings/example-ring/cryptoKeys/example-key
labels:
key:val
name: projects/yourproject/locations/us-central1/instances/nfs-server
networks:
- ipAddresses:
- 10.0.0.2
network: default
reservedIpRange: 10.0.0.0/26
performanceConfig:
iopsPerTb:
maxIopsPerTb: '17000'
performanceLimits:
maxIops: '17000'
maxReadIops: '17000'
maxReadThroughputBps: '417792000'
maxWriteIops: '5100'
maxWriteThroughputBps: '139264000'
state: READY
tier: REGIONAL
These fields represent the following values:
createTime : The time the instance was created, in RFC 3339 format.
fileShares :
capacityGb : The size of the Filestore file share in binary
gigabytes ( GB ), where 1 GB = 1024 3 bytes.
name : The name of the Filestore file share. You use
the file share name with the IP address identified by the ipAddresses
value to mount the file share on a client.
name : The fully qualified name of the instance.
ipAddresses : The IP address for the instance. To mount the
Filestore file share on a client, use this value along with the
file share name.
network : The name of the VPC network that the instance
uses.
customPerformanceSupported : Indicates whether custom performance is supported for the instance. If not listed, custom performance is not supported.
performanceConfig : The custom configuration for custom performance.
performanceLimits : The enforced performance limits, calculated from the
instance's performance.
reservedIpRange : The IP address block reserved for the use of the
instance.
state : The state of the instance.
tier : The Filestore service tier of the instance.
Example
The following command provides information about the test-nfs instance in
project myproject , in region us-central1 .
gcloud filestore instances describe test-nfs --project=myproject --region=us-central1
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
Get information about Filestore instance mounts
The following sections show you how to get different kinds of instance mount
information.
List the mount points for an instance
You can list all mount points where a Filestore instance is mounted
by running:
sudo showmount -a INSTANCE_IP
Example
The following command lists all mount points for a Filestore
instance with the IP address 10.77.67.226 :
sudo showmount -a 10.77.67.226
The response looks similar to the following:
All mount points on 10 .77.67.226:
10 .128.0.1:/fileshare
10 .128.0.2:/fileshare
10 .128.0.3:/fileshare
Get the number of mount points for an instance
You can get the total number of mount points for a Filestore
instance by running:
sudo showmount -a INSTANCE_IP --no-headers | wc -l
Example
The following command displays the number of mount points for an instance
with the IP address 10.77.67.226 :
sudo showmount -a 10.77.67.226 --no-headers | wc -l
What's next
Create another instance .
Mount the Filestore file share on a Compute Engine VM instance .
Access Filestore instances from a Google Kubernetes Engine cluster .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
