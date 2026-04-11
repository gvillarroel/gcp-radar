---
title: "Connect to a Memorystore for Valkey instance \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/valkey/connect-instance
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/valkey
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/valkey/connect-instance
  title: "Connect to a Memorystore for Valkey instance \_|\_ Google Cloud Documentation"
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
Connect to a Memorystore for Valkey instance
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to connect to a Memorystore for Valkey instance.
Client support
For examples and guidance on which connecting clients to use, see
Client library code samples .
.
Cross region access
You can access a Memorystore for Valkey instance from a client located in a
different region than where the instance is located.
Connect to a Cluster Mode Enabled instance
This section explains how to connect to a Memorystore for Valkey Cluster Mode Enabled
instance.
View your instance's discovery endpoint
Each Cluster Mode Enabled instance has a discovery endpoint to which your client connects.
This endpoint is a combination of an IP address and a port number.
You can view the discovery endpoint of a Memorystore for Valkey instance by
using either the Google Cloud console or the gcloud CLI .
Important: In addition to the discovery endpoint, each Cluster Mode Enabled
instance has a data endpoint .
This endpoint is reserved for Memorystore for Valkey to use to connect your
client to nodes in the instance. Therefore, don't connect to this endpoint
directly.
gcloud
To view your instance's discovery endpoint, run the describe
gcloud CLI as explained in view instance information .
The output should be similar to the following:
authorizationMode: AUTH_DISABLED
createTime: '2024-08-06T22:02:55.224704101Z'
deletionProtectionEnabled: false
engineVersion: VALKEY_7_2
name: projects/myproject/locations/us-central1/instances/my-instance
nodeConfig:
sizeGb: 6.5
nodeType: STANDARD_SMALL
persistenceConfig:
mode: DISABLED
endpoints:
- connections:
- pscAutoConnection:
connectionType: CONNECTION_TYPE_DISCOVERY
forwardingRule: https://www.googleapis.com/compute/v1/projects/my-project/regions/us-central1/forwardingRules/sca-auto-fr-ec00907a-3ee3-4740-8092-ae832428f8e4
ipAddress: 10.128.0.58
network: projects/my-project/global/networks/default
port: 6379
projectId: my-project
pscConnectionId: '38876592440606778'
serviceAttachment: projects/129109085717/regions/us-east1/serviceAttachments/gcp-memorystore-auto-58e78f71-fdb7-48-psc-sa
- pscAutoConnection:
forwardingRule: https://www.googleapis.com/compute/v1/projects/my-project/regions/us-central1/forwardingRules/sca-auto-fr-5ce5518f-1c59-4b46-aa74-799fad70d7b1
ipAddress: 10.128.0.59
network: projects/my-project/global/networks/default
port: 6379
projectId: my-project
pscConnectionId: '38876592440606779'
serviceAttachment: projects/129109085717/regions/us-east1/serviceAttachments/gcp-memorystore-auto-58e78f71-fdb7-48-psc-sa-2
replicaCount: 2
shardCount: 5
state: ACTIVE
transitEncryptionMode: TRANSIT_ENCRYPTION_DISABLED
uid: 869f2d09-d20b-46d8-94ba-be83c48ceb54
updateTime: '2024-08-06T22:18:59.389980051Z'
zoneDistributionConfig:
mode: MULTI_ZONE
Take a note of the endpoint address and port number listed in the endpoints:
section for the connectionType: CONNECTION_TYPE_DISCOVERY entry. These two
values used together are your instance's discovery endpoint.
Connect from a Compute Engine VM using valkey-cli
You can connect to the Memorystore for Valkey instance from any
Compute Engine VM that uses the Memorystore instance's
authorized network.
To connect to the instance:
If you don't already have a Linux Compute Engine VM that uses the
authorized network for your Memorystore for Valkey instance, create one and
connect to it by following Quickstart to create a Linux VM .
Install valkey-cli on the Compute Engine VM by
following the instructions at Install Valkey .
View your instance's discovery endpoint
and make a note of it.
Connect to your instance's discovery endpoint by running the following
command:
valkey-cli -h DISCOVERY_ENDPOINT_ADDRESS -p PORT_NUMBER -c
Where:
DISCOVERY_ENDPOINT_ADDRESS and PORT_NUMBER
are the values you noted in the previous step.
Note: The -c switch is used to enable the valkey-cli cluster support
mode. If the -c switch is not provided, when you try to access keys from a
different shard than the one you are connected to, it results in a MOVED
error. In the cluster support mode the client is automatically reconnected
to the address returned in the error response.
Run the CLUSTER SHARDS command to view your node topology. Take a note
of one of the node's IP addresses and port numbers.
Connect to your desired node by running the following command:
valkey-cli -h NODE_IP_ADDRESS -p NODE_PORT -c
Replace the following:
NODE_IP_ADDRESS is the node's IP address you found in the
previous step.
NODE_PORT is the node's port number you found in the previous
step.
Once connected to the node, enter some Valkey commands:
Enter:
PING
Result:
PONG
Enter
SET HELLO WORLD
Result:
OK
Enter:
GET HELLO
Result:
"WORLD"
Once you are done testing your connection to the Valkey node, you should
consider deleting the Compute Engine VM you used to connect to the
Valkey instance. Doing so helps you avoid incurring charges to your
Cloud Billing account.
Connect to an in-transit encryption enabled instance
This section provides an example of how to connect to a Memorystore for Valkey
Cluster Mode Enabled instance that has in-transit encryption enabled.
If you don't already have a Compute Engine VM that uses the same
authorized network as the Valkey instance from the previous step, create one
and connect to it by following Quickstart using a Linux VM .
Install valkey-cli version 6.0 or newer on the Compute Engine VM
by following the instructions at Install Valkey .
Install your instance's certificate authority (CA) certificates on the Linux
VM by following the instructions at Install CA certificates on the client .
View your instance's discovery endpoint
and make a note of it.
Connect to your instance's discovery endpoint by running the following
command:
valkey-cli -h DISCOVERY_ENDPOINT_ADDRESS -p PORT_NUMBER -c --tls --cacert /tmp/server_ca.pem
Where:
DISCOVERY_ENDPOINT_ADDRESS and PORT_NUMBER
are the values you noted in the previous step.
Note: The -c switch is used to enable the valkey-cli cluster support
mode. If the -c switch is not provided, when you try to access keys from a
different shard than the one you are connected to, it results in a MOVED
error. In the cluster support mode the client is automatically reconnected
to the address returned in the error response.
Run the CLUSTER SHARDS command to view your node topology. Take a note
of one of the node's IP addresses and port numbers.
Connect to your desired node by running the following command:
valkey-cli -h NODE_IP_ADDRESS -p NODE_PORT -c --tls --cacert /tmp/server_ca.pem
Replace the following:
NODE_IP_ADDRESS is the node's IP address you found in the
previous step.
NODE_PORT is the node's port number you found in the previous
step.
After you connect to the node, enter the following Valkey commands:
Enter:
PING
Result:
PONG
Connect to a Cluster Mode Disabled instance
This section explains how to connect to a Memorystore for Valkey Cluster Mode Disabled
instance.
View your instance's primary and reader endpoint
To view your instance's primary and reader endpoint endpoint , use the following
instructions:
gcloud
To view your instance's primary and reader endpoint endpoint, run the
describe gcloud CLI, as explained in view instance information .
The output should be similar to the following:
authorizationMode: AUTH_DISABLED
createTime: '2024-08-06T22:02:55.224704101Z'
deletionProtectionEnabled: false
engineVersion: VALKEY_7_2
name: projects/myproject/locations/us-central1/instances/my-instance
nodeConfig:
sizeGb: 6.5
nodeType: STANDARD_SMALL
persistenceConfig:
mode: DISABLED
endpoints:
- connections:
- pscAutoConnection:
connectionType: CONNECTION_TYPE_PRIMARY
forwardingRule: https://www.googleapis.com/compute/v1/projects/my-project/regions/us-central1/forwardingRules/sca-auto-fr-ec00907a-3ee3-4740-8092-ae832428f8e4
ipAddress: 10.128.0.124
network: projects/my-project/global/networks/default
port: 6379
projectId: my-project
pscConnectionId: '38876592440606778'
serviceAttachment: projects/448055306617/regions/us-central1/serviceAttachments/gcp-memorystore-auto-b3c43536-4a77-40-psc-sa
- pscAutoConnection:
connectionType: CONNECTION_TYPE_READER
forwardingRule: https://www.googleapis.com/compute/v1/projects/my-project/regions/us-central1/forwardingRules/sca-auto-fr-5ce5518f-1c59-4b46-aa74-799fad70d7b1
ipAddress: 10.128.0.125
network: projects/my-project/global/networks/default
port: 6379
projectId: my-project
pscConnectionId: '38876592440606779'
serviceAttachment: projects/448055306617/regions/us-central1/serviceAttachments/gcp-memorystore-auto-b3c43536-4a77-40-psc-sa-2
replicaCount: 2
shardCount: 1
mode: CLUSTER_DISABLED
state: ACTIVE
transitEncryptionMode: TRANSIT_ENCRYPTION_DISABLED
uid: 869f2d09-d20b-46d8-94ba-be83c48ceb54
updateTime: '2024-08-06T22:18:59.389980051Z'
zoneDistributionConfig:
mode: MULTI_ZONE
Primary endpoint: Take a note of the endpoint address and port number
listed under CONNECTION_TYPE_PRIMARY in the endpoints: section. These two
values used together are your instance's primary endpoint.
Reader endpoint: Take a note of the endpoint address and port number
listed under CONNECTION_TYPE_READER in the endpoints: section. These two
values used together are your instance's reader endpoint.
Connect from a Compute Engine VM using valkey-cli
You can connect to the Memorystore for Valkey instance from any
Compute Engine VM that uses the Memorystore instance's
authorized network.
To connect to the instance:
If you don't already have a Linux Compute Engine VM that uses the
authorized network for your Memorystore for Valkey instance, create one and
connect to it by following Quickstart to create a Linux VM .
Install valkey-cli on the Compute Engine VM by
following the instructions at Install Valkey .
View your instance's primary and reader endpoint
and make a note of it.
Connect to your instance's primary endpoint by running the following
command:
valkey-cli -h PRIMARY_ENDPOINT_ADDRESS -p PORT_NUMBER
Where:
PRIMARY_ENDPOINT_ADDRESS and PORT_NUMBER
are the values you noted in the previous step.
After you connect to the primary node, enter the following Valkey commands:
Enter:
PING
Result:
PONG
Enter
SET HELLO WORLD
Result:
OK
Enter:
GET HELLO
Result:
"WORLD"
Connect to your instance's reader endpoint by running the following
command:
valkey-cli -h READER_ENDPOINT_ADDRESS -p PORT_NUMBER
Where:
READER_ENDPOINT_ADDRESS and PORT_NUMBER
are the values you noted in the previous step.
After you connect to the primary node, enter the following Valkey Get
commands:
Enter:
PING
Result:
PONG
Enter:
GET HELLO
Result:
"WORLD"
After you test your connection to the Valkey node, you should
delete the Compute Engine VM you used to connect to the
Valkey instance. This helps you avoid incurring charges to your
Cloud Billing account.
Connect to an in-transit encryption enabled instance
This section provides an example of how to connect to a Memorystore for Valkey
Cluster Mode Disabled instance that has in-transit encryption enabled.
If you don't already have a Compute Engine VM that uses the same
authorized network as the Valkey instance from the previous step, create one
and connect to it by following Quickstart using a Linux VM .
Install valkey-cli version 6.0 or newer on the Compute Engine VM
by following the instructions at Install Valkey .
Check the Certificate Authority (CA) mode that you're using for your
instance.
If the CA mode per-instance ,
then install your instance's CA certificates by following the instructions at
Install CA certificates on the client .
If the CA mode is shared , then
install your instance's CA certificate bundle by following the instructions
at Install the CA certificate bundle on the client .
If the CA mode is customer-managed ,
then your applications can connect to the instance without you having to
download and install additional CA certificates. Therefore, you can skip this
step.
View your instance's primary and reader endpoint
and make a note of it.
Connect to your instance's primary endpoint by running the following
command:
valkey-cli -h PRIMARY_ENDPOINT_ADDRESS -p PORT_NUMBER --tls --cacert /tmp/server_ca.pem
Where:
PRIMARY_ENDPOINT_ADDRESS and PORT_NUMBER
are the values you noted in the previous step.
Connect to your instance's reader endpoint by running the following
command:
valkey-cli -h READER_ENDPOINT_ADDRESS -p PORT_NUMBER --tls --cacert /tmp/server_ca.pem
Where:
READER_ENDPOINT_ADDRESS and PORT_NUMBER
are the values you noted in the previous step.
Once connected to the node, enter some Valkey commands:
Enter:
PING
Result:
PONG
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
