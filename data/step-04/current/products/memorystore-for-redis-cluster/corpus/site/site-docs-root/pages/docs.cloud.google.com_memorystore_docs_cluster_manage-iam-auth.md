---
title: "Manage IAM authentication \_|\_ Memorystore for Redis Cluster \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/cluster/manage-iam-auth
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/cluster
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/cluster/manage-iam-auth
  title: "Manage IAM authentication \_|\_ Memorystore for Redis Cluster \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Redis Cluster
Guides
Send feedback
Manage IAM authentication
Stay organized with collections
Save and categorize content based on your preferences.
This page provides instructions on common tasks for the IAM
authentication feature for Memorystore for Redis Cluster. For more details on the feature,
see About IAM authentication .
Create an instance with IAM authentication
To create a Memorystore for Redis Cluster instance that uses IAM
authentication, run the create command:
gcloud redis clusters create INSTANCE_ID --region= REGION_ID --network= NETWORK --node-type= NODE_TYPE --shard-count= SHARD_COUNT --auth-mode=iam-auth
Replace the following:
INSTANCE_ID is the ID of the Memorystore for Redis Cluster instance you're
creating. Your instance ID must be 1 to 63 characters and use only lowercase
letters, numbers, or hyphens. It must start with a lowercase letter and end with
a lowercase letter or number.
REGION_ID is the region where you want the instance placed.
Note: You can only create instances in the supported regions for Memorystore for Redis Cluster. Not all of the regions currently supported by Memorystore for Redis
are available for Memorystore for Redis Cluster. The gcloud redis regions list commands shows supported regions for Memorystore for Redis, not Memorystore for Redis Cluster.
NETWORK is the network used to create your instance. It must use
the format: projects/NETWORK_PROJECT_ID/global/networks/NETWORK_ID . The
network ID used here must match the network ID used by the service connection
policy. Otherwise, the create operation fails. For more details, see
Networking .
NODE_TYPE is your chosen node type. Accepted values are:
redis-shared-core-nano
redis-standard-small
redis-highmem-medium
redis-highmem-xlarge
Caution : We recommend that you use the
redis-shared-core-nano node type for development or testing
purposes only because this node type has no SLA. If you run Memorystore for Redis Cluster in
a production environment, then we recommend using the
redis-standard-small , redis-highmem-medium , or
redis-highmem-xlarge node types. For more information about these
node types, see Choose a node type .
SHARD_COUNT determines the number of shards in your
instance. Shard count determines the total memory capacity for storing
cluster data. To see more details about cluster specification, see Cluster and node specification .
Grant permissions for IAM authentication
To grant IAM access, use the instructions in Grant an IAM role to grant the
roles/redis.dbConnectionUser role to the principal. The principal is an
identity that you can grant access to resources in Google Cloud. For example, a
principal can be a service account that can access your Google Cloud project.
By default, granting a principal the roles/redis.dbConnectionUser role allows
the principal to access all instances in your project.
Note: For instructions on limiting user access on a per-instance basis, see
Grant access to a group of resources based on resource name prefixes . When granting limited
access for your instance, use the resource.name attribute and the following
format for the instance name -
projects/PROJECT/locations/REGION/clusters/INSTANCE_NAME .
Create a limited IAM admin role for an instance
You might want to create a role that can modify instance connection
IAM permissions without granting full IAM admin
access. This can be done by creating a limited IAM admin for the
roles/redis.dbConnectionUser role. For more details, visit Create limited IAM admins .
Connect to an instance that uses IAM authentication
If you don't already have a Compute Engine VM that uses the same
authorized network as your Redis cluster, create one and connect to it by
following Quickstart Using a Linux VM .
For your project, use the gcloud compute instances set-service-account command to set a service account and enable the
Cloud Platform API scope for your Compute Engine VM.
gcloud compute instances set-service-account VM_NAME \
--service-account= SERVICE_ACCOUNT_EMAIL \
--scopes= SCOPE
Make the following replacements:
VM_NAME : the name of your Compute Engine VM
SERVICE_ACCOUNT_EMAIL : the email address of your service account
SCOPE : the Cloud Platform API scope for the VM ( cloud-platform )
For example, the following command assigns the my-sa-123@my-project-123.iam.gserviceaccount.com
service account to a VM called example-VM and sets the access scope on that
VM to the Cloud Platform API:
gcloud compute instances set-service-account example-VM \
--service-account=my-sa-123@my-project-123.iam.gserviceaccount.com \
--scopes=cloud-platform
For more information about enabling this access scope, see
Attach the service account and update the access scope . For more
information about best practices for this scope, see
Scopes best practice .
For your project, enable the Memorystore for Redis API.
Memorystore for Redis API
Install redis-cli on the Compute Engine VM by running the following
command from the Compute Engine SSH terminal:
sudo apt-get install redis-tools
Run the following command to get an access token for your IAM
user:
gcloud auth print-access-token
Note: Access tokens will expire in one hour. For more information, see IAM access token timeframe .
Connect to your instance's discovery endpoint:
redis-cli -h NETWORK_ADDRESS -p PORT -a ACCESS_TOKEN -c
Replace the following:
NETWORK_ADDRESS is the instance's network address. To view the
network address, see View instance information .
PORT is the instances port number. To view the port number, see
View instance information .
ACCESS_TOKEN is the IAM access token retrieved in previous
steps.
Note: Don't use either a username or service account name to connect to the
endpoint. Also, authenticated connections are valid for 12 hours. For more
information, see IAM access token time frame .
Run the CLUSTER SHARDS command to view your cluster topology. Take a note
of one of the node's IP addresses and port numbers.
To use redis-cli to authenticate and connect to your node, use the
following command:
redis-cli -h NODE_IP_ADDRESS -p NODE_PORT -a ACCESS_TOKEN -c
Replace the following:
NODE_IP_ADDRESS : the node's IP address that you found in the
previous step
NODE_PORT : the node's port number that you found in the previous
step
ACCESS_TOKEN : the IAM access token that you
retrieved in previous steps
Note: Authenticated connections are valid for 12 hours. For more information,
see IAM access token time frame .
To verify that you have an authenticated connection to your node, run a Redis
SET and GET command.
Delete the Compute Engine VM
that you used to connect to the Redis cluster. This helps you avoid incurring
charges to your Cloud Billing account.
Automate access token retrieval
Note: We strongly recommend that you automate access
token retrieval in your application. Because of the short lifetime of an access
token, it's difficult to hardcode the token.
For a code sample that shows how you can authenticate your application by using
popular client libraries, see IAM
authentication client library code sample .
(Optional) If you haven't already, create a service account for your application (see Creating and managing a service account ).
gcloud iam service-accounts create SA_NAME \
--description=" DESCRIPTION " \
--display-name=" DISPLAY_NAME "
Replace the following:
SA_NAME is the name of the service account.
DESCRIPTION is an optional description of the service account.
DISPLAY_NAME is a service account name to display in the
Google Cloud console.
Grant your service account the redis.dbConnectionUser role on your
project.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member="serviceAccount: SA_NAME @ PROJECT_ID .iam.gserviceaccount.com" \
--role=roles/" ROLE_NAME "
Replace the following:
PROJECT_ID : the project ID.
SA_NAME : the name of the service account.
ROLE_NAME : a role name. For this example:
redis.dbConnectionUser .
Authenticate your application as the given service account. For more
information, see Service accounts .
Code sample for connecting to an instance that uses IAM authentication
You can view a code sample that
shows you how you can authenticate your
application by using popular client libraries. In addition, you can see how to
use this code sample to connect to an instance that uses IAM authentication.
Troubleshooting error messages with IAM authentication
Error message
Recommended action
Description
-WRONGPASS invalid username-password pair or user is disabled
Verify the username and access token provided to the Memorystore for Redis Cluster server
The username or access token provided is invalid. "default" is the only supported username. If your application is already using the "default" username, verify that the access token is not expired and is retrieved following the instructions in Connect to an instance that uses IAM authentication . IAM permissions may take a few minutes to propagate if recently changed.
-NOAUTH Authentication required
Check that application is configured to provide an IAM access token to the Memorystore for Redis Cluster server
The application is not providing an access token to the Memorystore for Redis Cluster server. Verify that the application is configured to provide an access token. following the instructions in Connect to an instance that uses IAM authentication
-ERR (ERR_IAM_EXHAUSTED) Memorystore IAM authentication backend quota exceeded. See https://cloud.google.com/memorystore/docs/cluster/manage-iam-auth#error_messages.
Retry with exponential backoff
The IAM backend is overloaded and returned a quota exceeded error to the Memorystore for Redis Cluster server. Applications should attempt to retry this error with exponential backoff to prevent further connection failures.
-ERR (ERR_IAM_OTHER) Memorystore IAM authentication backend error. See https://cloud.google.com/memorystore/docs/cluster/manage-iam-auth#error_messages.
Retry with exponential backoff
The IAM backend returned a transient error to the Memorystore for Redis Cluster server. Applications should attempt to retry this error with exponential backoff to prevent further connection failures.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
