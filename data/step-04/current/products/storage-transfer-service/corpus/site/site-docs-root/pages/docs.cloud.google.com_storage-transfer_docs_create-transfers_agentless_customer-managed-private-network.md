---
title: "Transfer from AWS or Azure over a customer-managed private network \_|\_ Storage\
  \ Transfer Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network
  title: "Transfer from AWS or Azure over a customer-managed private network \_|\_\
    \ Storage Transfer Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Storage Transfer Service
Send feedback
Transfer from AWS or Azure over a customer-managed private network
Stay organized with collections
Save and categorize content based on your preferences.
A private network connection, established using either Google Cloud Cross-Cloud Interconnect or Partner Interconnect, can offer
significant advantages for data transfer between AWS or Azure and Cloud Storage:
Potential cost optimization : Potentially achieve egress cost savings.
This can be beneficial for customers with existing interconnects or those
performing large or recurring data transfers, leading to substantial
long-term savings.
Dedicated network bandwidth : Using an interconnect can offer consistent,
high-capacity throughput and lower latency, which is crucial for large,
time-sensitive migrations and real-time data synchronization.
Meet compliance needs : Ideal for workloads where regulatory requirements
mandate keeping data off the public internet. This feature helps you
transfer data privately using the interconnect to achieve compliance,
support data sovereignty, and simplify audits.
Overview
This document walks you through the steps to:
Order and configure a Cross-Cloud Interconnect
Create an endpoint in S3 or Azure
Set up a regional internal proxy Network Load Balancer with hybrid connectivity
Register your load balancer with Service Directory
Create a transfer
Confirm that traffic is using the interconnect
Required permissions
You'll need specific permissions to complete each of the following sections.
These permissions are listed in the documentation for that set of steps.
Interconnect options
Storage Transfer Service can transfer data from AWS and Azure over
Cross-Cloud
Interconnect
(CCI) or
Partner Interconnect .
The steps below are specific to CCI, but also apply when configuring networking
for Partner Interconnect.
Order and configure a Cross-Cloud Interconnect
A Cross-Cloud Interconnect is a dedicated physical connection
between Google Cloud and other cloud providers.
If you already have a CCI connection, skip to the next section.
AWS
Follow the instructions to Connect to Amazon Web
Services
to order and configure a new Cross-Cloud Interconnect. You'll
need the correct permissions to configure networking in Google Cloud as
well as in AWS.
Watch a video covering the steps to order and configure a CCI
between AWS and Google Cloud .
Azure
Follow the instructions to Connect to Microsoft
Azure
to order and configure a new Cross-Cloud Interconnect. You'll
need the correct permissions to configure networking in Google Cloud as
well as in Azure.
Watch a video covering the steps to order and configure a CCI
between Azure and Google Cloud .
If your Cloud Storage bucket is a regional bucket, you should configure the
CCI in the same region as your bucket to reduce network latency.
Create an endpoint in S3 or Azure
Create an endpoint in your S3 or Azure account.
AWS
In your Amazon Web Services account, create a VPC endpoint that connects to S3.
Follow these AWS instructions: Access an AWS service using an interface VPC
endpoint
to create the endpoint.
Azure
Configure a Private Endpoint on the Storage Account in Azure following these
steps .
Storage Transfer Service requires the *.blob.core.microsoft.net endpoint. The
*.dfs.core.microsoft.net endpoint is not supported.
Once created, note the endpoint's IP address. You'll need to specify the IP
address when creating your load balancer in the next section.
Set up a regional internal proxy Network Load Balancer with hybrid connectivity
In Google Cloud, set up a regional internal proxy Network Load Balancer with
hybrid connectivity. This provides an internal IP address that's restricted to
clients running in the same VPC network as the load balancer, and that routes
traffic to the S3 VPC endpoints or Azure Storage private endpoints that you
created in the previous section.
You should create the load balancer in the same project and VPC network as the
VLAN attachment which interfaces with the Cloud Interconnect. While the
interconnect itself can be in a different project within the same organization,
the attachment must be in the same VPC and region as the load balancer.
Set up a regional internal proxy Network Load Balancer with hybrid
connectivity
Specify the S3 VPC endpoint or Azure Storage private endpoint IP address when
you reach the steps labeled Add endpoints to the hybrid connectivity NEG .
Note the NLB's frontend IP address and port, as you'll need to specify them in
the next section.
Validate the connection
Before proceeding, we recommend that you validate that the load
balancer can connect to the remote storage endpoint.
To do so:
Create a Compute Engine VM in the same VPC network as your load
balancer.
From the VM, use curl to test connectivity to the load balancer's IP
address and port:
curl -v --resolve HOSTNAME : PORT : LOAD_BALANCER_IP https:// HOSTNAME
Replace the following:
HOSTNAME is the hostname of your source storage provider.
For AWS S3, use the S3 API endpoint for your bucket's region, for
example s3.us-west-1.amazonaws.com .
For Azure Storage, use your storage account's blob endpoint, for
example mystorageaccount.blob.core.windows.net .
PORT is the port you configured on the load balancer's
forwarding rule, typically 443 .
LOAD_BALANCER_IP is the frontend IP address of your load
balancer.
A response from the remote endpoint, even an error, indicates that
connectivity is successful. A connection timeout indicates a
misconfiguration in your network setup that you should resolve before continuing.
Register your NLB with Service Directory
Register the NLB in Service Directory. Storage Transfer Service uses Service Directory
to resolve the address of the load balancer and connect to it directly.
Follow the instructions to
register an internal load balancer .
Use the IP address and port of the load balancer that you created when
specifying the forwarding rule.
Once created, note the self-link of the service. It uses the format
projects/{project_id}/locations/{location}/namespaces/{namespace}/services/{service} .
You'll need this value when creating the transfer job.
Create a transfer
Grant the following permissions to the service agent. For instructions on
retrieving the service agent, and granting permissions to the service agent, see
Google-managed service agent
permissions .
Service Directory Viewer
( roles/servicedirectory.viewer )
at the project level, on the project containing the Service Directory
Resources.
Private Service Connect Authorized Service
( roles/servicedirectory.pscAuthorizedService )
at the project level, on the project containing the VPC.
Storage Legacy Bucket Writer
( roles/storage.legacyBucketWriter )
on the destination bucket.
Note: If you're delegating service agent permissions to a user-managed service
account ,
grant these permissions to the user-managed service account.
To create a transfer job that uses a Cross-Cloud Interconnect,
you must use the Storage Transfer Service REST API. Send a request as follows.
Note the privateNetworkService field, which is where you'll specify your
Service Directory service's selfLink.
AWS
POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs
{
"status" : "ENABLED" ,
"projectId" : " PROJECT_ID " ,
"transferSpec" : {
"awsS3DataSource" : {
"privateNetworkService" : " SERVICE_SELF_LINK " ,
"bucketName" : " S3_BUCKET_NAME " ,
"awsAccessKey" : {
"accessKeyId" : " ACCESS_KEY_ID " ,
"secretAccessKey" : " SECRET_ACCESS_KEY "
}
},
"gcsDataSink" : {
"bucketName" : " GCS_BUCKET_NAME "
}
}
}
Azure
POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs
{
"status" : "ENABLED" ,
"projectId" : " PROJECT_ID " ,
"transferSpec" : {
"azureBlobStorageDataSource" : {
"privateNetworkService" : " SERVICE_SELF_LINK " ,
"storageAccount" : " AZURE_SOURCE_NAME " ,
"container" : " AZURE_CONTAINER " ,
"azureCredentials" : {
"sasToken" : " AZURE_SAS_TOKEN " ,
}
},
"gcsDataSink" : {
"bucketName" : " GCS_BUCKET_NAME "
}
}
}
Replace the following:
SERVICE_SELF_LINK is the self-link of the Service Directory
service. It uses the format
projects/{project_id}/locations/{location}/namespaces/{namespace}/services/{service} .
For information about other fields, see the transferSpec reference
documentation .
Confirm that traffic is using the interconnect
Use Cloud Monitoring to verify traffic flowing through your interconnect
from AWS or Azure.
In the Google Cloud Console, go to Hybrid Connectivity > Cloud Interconnect .
Select the VLAN attachment that connects to your AWS/Azure environment.
On the details page for your connection, select the Monitoring tab. Look
for metrics that indicate data transfer. Specifically:
Ingress Bytes: This metric shows the data coming from AWS or Azure
into your Google Cloud VPC.
Operational Status: Ensure that both the physical connection and the
BGP session are in a healthy, operational state.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
