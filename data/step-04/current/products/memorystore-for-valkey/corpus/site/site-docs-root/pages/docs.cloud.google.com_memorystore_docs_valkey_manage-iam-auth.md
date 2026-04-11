---
title: "Manage IAM authentication \_|\_ Memorystore for Valkey \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/memorystore/docs/valkey/manage-iam-auth
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/valkey
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/valkey/manage-iam-auth
  title: "Manage IAM authentication \_|\_ Memorystore for Valkey \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Valkey
Guides
Send feedback
Manage IAM authentication
Stay organized with collections
Save and categorize content based on your preferences.
This page provides instructions on common tasks for the IAM
authentication feature for Memorystore for Valkey. For more details on the feature,
see About IAM authentication .
Create an instance with IAM authentication
To create a Memorystore for Valkey instance that uses IAM
authentication, run the create command:
gcloud memorystore instances create INSTANCE_ID --region= REGION_ID --network= NETWORK --node-type= NODE_TYPE --shard-count= SHARD_COUNT --auth-mode=iam-auth
Replace the following:
INSTANCE_ID is the ID of the Memorystore for Valkey instance you're
creating. Your instance ID must be 1 to 63 characters and use only lowercase
letters, numbers, or hyphens. It must start with a lowercase letter and end with
a lowercase letter or number.
REGION_ID is the region where you want the instance placed.
NETWORK is the network used to create your instance. It must use
the format: projects/NETWORK_PROJECT_ID/global/networks/NETWORK_ID . The
network ID used here must match the network ID used by the service connection
policy. Otherwise, the create operation fails. For more details, see
Networking .
NODE_TYPE is your chosen node type. Accepted values are:
shared-core-nano
standard-small
highmem-medium
highmem-xlarge
Caution : We recommend that you use the
shared-core-nano node type for development or testing purposes
only because this node type has no SLA. If you run Memorystore for Valkey in a
production environment, then we recommend using the standard-small , highmem-medium , or highmem-xlarge node types. For more
information about these node types, see Choose a node type .
SHARD_COUNT determines the number of shards in your
instance. Shard count determines the total memory capacity for storing
instance data. To see more details about instance specification, see Instance and node specification .
Grant permissions for IAM authentication
To grant an IAM access, grant the principal the
roles/memorystore.dbConnectionUser role using the Grant IAM role instructions .
By default, granting a principal the roles/memorystore.dbConnectionUser role allows
the principal to access all instances in your project.
Note: For instructions on limiting user access on a per-instance basis, see
Grant access to a group of resources based on resource name prefixes . When granting limited
access for your instance, use the resource.name attribute and the following
format for the instance name -
projects/PROJECT/locations/REGION/instances/INSTANCE_NAME .
Create a limited IAM Admin role for an instance
You might want to create a role that can modify instance connection
IAM permissions without granting full IAM
administrator access. This can be done by creating a limited IAM
administrator for the roles/memorystore.dbConnectionUser role. For more
details, visit Create limited IAM admins .
Connect to an instance that uses IAM authentication
If you don't already have a Compute Engine VM that uses the same
authorized network as your Valkey instance, create one and connect to it by
following Quickstart Using a Linux VM .
For your project, enable the Cloud Platform API scope. For more
information about enabling this access scope, see
Attach the service account and update the access scope . For more information
about best practices for this scope, see
Scopes best practice .
For your project, enable the Memorystore for Valkey API.
Memorystore for Valkey API
Install valkey-cli on the Compute Engine VM by following the
instructions at Install Valkey .
Run the following command to get an access token for your IAM
user:
gcloud auth print-access-token
Note: Access tokens expire in one hour. For more information, see IAM access token time frame .
Connect to your instance's discovery endpoint:
valkey-cli -h NETWORK_ADDRESS -p PORT -a ACCESS_TOKEN -c
Replace the following:
NETWORK_ADDRESS is the instance's network address. To view the
network address, see View instance information .
PORT is the instances port number. To view the port number, see
View instance information .
ACCESS_TOKEN is the IAM access token retrieved in previous
steps.
Note: Authenticated connections are valid for 12 hours. For more information,
see IAM access token time frame .
Run the CLUSTER SHARDS command to view your node topology. Take a note
of one of the node's IP addresses and port numbers.
Connect to your chosen node by running the following command:
valkey-cli -h NODE_IP_ADDRESS -p NODE_PORT -a ACCESS_TOKEN -c
Replace the following:
NODE_IP_ADDRESS is the node's IP address you found in the previous step.
NODE_PORT is the node's port number you found in the previous step.
Run a Valkey SET and GET command to verify that you have established an
authenticated connection to your instance's node.
Once you are done testing your connection to the Valkey instance, you should
consider deleting the Compute Engine VM
you used to connect to the Valkey instance. Doing so helps you avoid incurring
charges to your Cloud Billing account.
Run the following command to use valkey-cli to authenticate and connect to
your instance, replacing variables with appropriate values:
valkey-cli -h NETWORK_ADDRESS -p PORT -a ACCESS_TOKEN -c
Replace the following:
NETWORK_ADDRESS is the instance's network address. To view the
network address, see View instance information .
PORT is the instances port number. To view the port number, see
View instance information .
ACCESS_TOKEN is the IAM access token retrieved in previous
steps.
Note: Authenticated connections are valid for 12 hours. For more information,
see IAM access token time frame .
Run a Valkey SET and GET command to verify that you have established an
authenticated connection to your instance.
Once you are done testing your connection to the Valkey instance, you should
consider deleting the Compute Engine VM
you used to connect to the Valkey instance. Doing so helps you avoid incurring
charges to your Cloud Billing account.
Automate access token retrieval
We strongly recommend that you automate access token retrieval in your
application. Because of the short lifetime of an access token, it's difficult to
hardcode the token.
(Optional) If you haven't already, create a service account for your application (see Creating and managing a service account ).
gcloud iam service-accounts create SA_NAME \
--description=" DESCRIPTION " \
--display-name=" DISPLAY_NAME "
Replace the following:
SA_NAME is the name of the service account.
DESCRIPTION is an optional description of the service account.
DISPLAY_NAME is a service account name to display in the
Google Cloud console.
Grant your service account the memorystore.dbConnectionUser role on
your project.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member="serviceAccount: SA_NAME @ PROJECT_ID .iam.gserviceaccount.com" \
--role=roles/" ROLE_NAME "
Replace the following:
PROJECT_ID : the project ID.
SA_NAME : the name of the service account.
ROLE_NAME : a role name. For this example:
memorystore.dbConnectionUser .
Authenticate your application as the given service account. See service accounts
for more information.
For code samples that show how you can authenticate your application using
popular client libraries, see Client library code samples .
Code sample to connect to an instance that uses IAM authentication
To view a Valkey-compatible code sample on how to set up a client library to connect to an
instance that uses IAM authentication, see Code sample for both IAM authentication and in-transit encryption .
Troubleshoot error messages with IAM authentication
Error message
Recommended action
Description
-WRONGPASS invalid username-password pair or user is disabled
Verify the username and access token provided to the Memorystore for Valkey server
The username or access token provided is invalid. "default" is the only supported username. If your application is already using the "default" username, verify that the access token is not expired and is retrieved following the instructions in Connect to an instance that uses IAM authentication . IAM permissions may take a few minutes to propagate if recently changed.
-NOAUTH Authentication required
Check that application is configured to provide an IAM access token to the Memorystore for Valkey server
The application is not providing an access token to the Memorystore for Valkey server. Verify that the application is configured to provide an access token. following the instructions in Connect to an instance that uses IAM authentication
-ERR (ERR_IAM_EXHAUSTED) Memorystore IAM authentication backend quota exceeded.
Retry with exponential backoff
The IAM backend is overloaded and returned a quota exceeded error to the Memorystore for Valkey server. Applications should attempt to retry this error with exponential backoff to prevent further connection failures.
-ERR (ERR_IAM_OTHER) Memorystore IAM authentication backend error.
Retry with exponential backoff
The IAM backend returned a transient error to the Memorystore for Valkey server. Applications should attempt to retry this error with exponential backoff to prevent further connection failures.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
