---
title: "Troubleshoot issues \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/troubleshoot-issues
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/troubleshoot-issues
  title: "Troubleshoot issues \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Redis
Guides
Send feedback
Troubleshoot issues
Stay organized with collections
Save and categorize content based on your preferences.
This page explains various issues, the error messages for these issues, and
troubleshooting steps to resolve the issues.
Connectivity issues
If your Memorystore for Redis instance experiences connectivity issues, then
check the issues in this section to see if one of them causes the problem.
If an issue in this section doesn't match your issue, then Telnet to one of your
Redis nodes and run some Redis commands to see if the instance
responds.
If the node is unresponsive, then see if any of the networking issues
are the reason why your node's network connection is blocked. If none of these
issues resolves the problem, then contact Cloud Customer Care .
You provision resources in different VPC networks.
To connect to a Memorystore for Redis instance from a Google Cloud resource,
such as a Compute Engine VM, you must provision the resources on the
same authorized VPC network as the instance.
Attempting to Telnet to an instance from a resource that's in a different region
or VPC network results in the following error message:
telnet: Unable to connect to remote host: Connection timed out
You delete a VPC network peering.
When you create a Memorystore for Redis instance, you create a VPC peering
between your VPC network and an internal Google VPC network.
The network peering uses the following format:
redis-peer-############
If this network peering is deleted, then attempting to Telnet to the instance
results in the following error message:
telnet: Unable to connect to remote host: Connection timed out
To re-establish the deleted network peering, create another instance. Then,
delete this instance. Your original instance now has the network peering that it
needs.
You create firewall rules that block your instance's IP addresses.
If you create egress firewall rules that block either the port (6379) or IP
address of your Memorystore for Redis instance, then you might experience
connectivity issues. Don't create network firewall rules that block the IP
address range of your instance.
CPU usage issues
This section explains CPU usage issues that your Memorystore for Redis instance
might encounter.
Your instance experiences high latency or doesn't respond.
If your Memorystore for Redis instance experiences high latency or
unresponsiveness, then these issues might be caused by using the following
resource-intensive Redis commands:
KEYS
LRANGE
EVAL
HGETALL
ZRANGE
These commands can put heavy CPU pressure on your instance. We recommend that
you don't run the KEYS command in production environments. Instead, use
SCAN because this command uses fewer resources than KEYS .
Using LRANGE to query all or a large subset of your keyspace can demand high
CPU resources. To resolve this, we recommend that you reduce the number of keys
in the keyset that you query in a single operation.
Using a complex Lua script with EVAL can also cause high CPU usage. We
recommend that you use less-complex Lua scripts.
HGETALL and ZRANGE can return a large number of keys, adversely
affecting the performance of your server. Instead of HGETALL , we recommend
that you run the HSCAN command. Also, before using ZRANGE , we recommend that
you limit the size of the range that you use for a query.
Before you run a resource-intensive command, check the size of the data
structures that the command queries to ensure that it doesn't cause latency.
If your instance experiences high latency or unresponsiveness, then do the
following:
Check your client-side logs to find if any resource-intensive commands ran.
If so, then note the date and time.
Use Cloud Monitoring to
view the redis.googleapis.com/stats/cpu_utilization metric. See if periods of
high CPU utilization coincide with the same periods when the resource-intensive
commands ran.
The output buffer of your instance runs out of space.
If the output buffer of your Memorystore for Redis instance runs out of space,
then do the following:
Set a smaller value for the maxmemory-gb parameter.
Use the allkeys-lru maxmemory policy.
When the memory of your instance is full, and a new write comes in,
Memorystore for Redis evicts keys to make room for the write, based on your
instance's maxmemory policy. The allkeys-lru policy evicts the least recently
used (LRU) keys from the entire keyset.
We recommend that you monitor your instance's maxmemory and used memory. This
helps you to know if your instance reaches the provisioned instance capacity.
Also, by reducing the value for the maxmemory-gb parameter, you get more space
for the overhead.
Networking issues
This section explains networking issues that your instance might encounter.
You exhaust the allocated IP range or a conflicting route exists.
When you create resources within the IP address range dedicated for
Memorystore for Redis, you might exhaust all of the IP addresses. Or, there
might be a route that conflicts
with the IP address of the Memorystore for Redis instance that you're trying to
create.
These issues cause the following error message to appear:
The IP ranges for the connection do not have enough available IPs. Allocate a
new range or expand existing range and try again.
To resolve this issue, allocate additional IP addresses or remove the route
conflict discrepancy. For more information, see IP address range exhaustion .
You don't have a private services access connection established for your network.
If your Memorystore for Redis instance uses the private services access connection mode , but a private services access
connection doesn't exist for your network, then you might receive the following
error message:
Google private service access is not enabled. Enable private service access and
try again
To resolve this issue, establish a private services access connection .
You delete the network peering for the private services access connection.
When you establish a private services access
connection, Memorystore for Redis creates a network peering connection called
servicenetworking-googleapis-com . This connection appears in your project's
VPC network peering page.
If you delete the network peering, then the following error message appears for
existing instances:
telnet: Unable to connect to remote host: Connection timed out
In addition, if you delete the network peering and you create an instance , then the following error message appears:
Private services access is not configured correctly. For steps on how to
verify the connection, check the documentation.
To resolve this issue, create a private service access connection between your network and the private services
access network by running the following command:
gcloud services vpc-peerings connect --service=servicenetworking.googleapis.com --ranges= RESERVED_RANGE_NAME --network= VPC_NETWORK --project= PROJECT_ID
You use conflicting parameters.
If you use both the --reserved-ip-range parameter and the --connect-mode=private-service-access
parameter, then you receive the following error message:
Reserved IP range is not supported for --connect-mode private services access
You can't use both parameters at the same time because Memorystore for Redis
doesn't support the --reserved-ip-range parameter for the private services
access connection mode.
To resolve this issue, do one of the following:
Use the --reserved-ip-range parameter with the --connect-mode=direct-peering
parameter.
Don't use the --reserved-ip-range parameter.
You exceed the subnetwork quota for your project.
There's a limit to the number of subnetworks that you can create within your
Google Cloud project. If you exceed this quota, then you receive one of the
following error messages:
Internal network quota exceeded. Please request higher limit here: https://forms.gle/ZfVduUGq2iSYcYGm8
or
Unable to create instance. Network quota limit has been reached. Please request higher limit here: https://forms.gle/ZfVduUGq2iSYcYGm8
To resolve this issue, either fill out the form that appears in the error
messages or contact Cloud Customer Care .
You don't attach your service project to your host project.
If you use Shared VPC and you don't attach your service
project to your host project, then you receive the following error message:
Invalid network name <network-name>. Project <project-name> referenced is not the host project for <service-project-name>.
To resolve this issue, attach your service project to your host project .
You create an instance in a service project with the direct peering connection mode and designate a Shared VPC network.
If you create a Memorystore for Redis instance in a service project
and you designate a Shared VPC network from the host project for the instance,
then you can't use the direct peering
connection mode.
By default, the connection mode is set to direct peering. If you attempt to
use this connection mode when you create an instance, and you also choose a
Shared VPC network from the host project as the value for the --network
parameter, then you receive the following error message:
Authorized_network must exist in the same project as redis instance
To resolve this issue, do one of the following:
When you create your instance, use the private services access connection
mode ( --connect-mode=private-service-access ).
Choose an authorized VPC network that's in the same project as your instance.
You use an IP address range for Compute Engine that Memorystore for Redis can't access.
You can't access your Memorystore for Redis instance from a
Compute Engine VM that has an IP address in the 172.17.0.0/16 range.
This range is reserved for an internal component.
To resolve this issue, access your instance from a Compute Engine VM
that has an IP address in a different range.
Issues connecting to your instance from other Google Cloud resources
This section explains issues that your Memorystore for Redis instance might
encounter when other resources attempt to connect to it.
You can't connect to your instance from serverless environments that require a Serverless VPC Access connector
If you can't connect to your Memorystore for Redis instance by using one of the
serverless environments that require a Serverless VPC Access connector ,
then verify whether you set up this connector for your environment. For more
information, see Serverless VPC Access connector requirement .
You can't connect to your instance from a Google Kubernetes Engine (GKE) cluster
To connect to your Memorystore for Redis instance from a GKE
cluster, you must enable VPC-native/IP aliasing on the cluster.
It's easiest to enable VPC-native/IP aliasing when you create the cluster. In
the advanced options section, select VPC Native . For more information, see
Create a VPC-native cluster .
Identity and Access Management (IAM) issues
This section explains IAM issues that your Memorystore for Redis
instance might encounter.
You want to restore a deleted policy binding for a service account
Memorystore for Redis uses the following service accounts to manage your
instances:
service- PROJECT_NUMBER @service-networking.iam.gserviceaccount.com
service- PROJECT_NUMBER @cloud-redis.iam.gserviceaccount.com
If you delete the policy bindings for these service accounts, then you can't
create instances.
If you attempt to create a Memorystore for Redis instance by using the
Google Cloud CLI, then you might receive the following error message:
(gcloud.redis.instances.create) FAILED_PRECONDITION: A required IAM policy might be missing. Please run this command:"gcloud projects add-iam-policy-binding YOUR_PROJECT_ID --member='serviceAccount:service- YOUR_PROJECT_NUMBER @cloud-redis.iam.gserviceaccount.com' --role='roles/redis.serviceAgent'" and try again.
To re-establish the policy binding for the service-networking service account,
run the following command. Replace VARIABLES with appropriate values.
gcloud projects add-iam-policy-binding PROJECT_ID --member='serviceAccount:service- PROJECT_NUMBER @service-networking.iam.gserviceaccount.com' --role='roles/servicenetworking.serviceAgent'
To re-establish the policy binding for the cloud-redis service account, run
the following command. Replace VARIABLES with appropriate values.
gcloud projects add-iam-policy-binding PROJECT_ID --member='serviceAccount:service- PROJECT_NUMBER @cloud-redis.iam.gserviceaccount.com' --role='roles/redis.serviceAgent'
Operation timeout issues
The following issues result in an unresponsive Redis instance and/or
instance/node operation timeouts.
Network partition issues
Sometimes Google Cloud resources cannot communicate across zones within a region
due to a network partition error in Google Cloud servers. This can cause your
instance to lose connection, resulting in a timeout error.
After Google Cloud resolves the network partition error for the region or zone
where your instance is provisioned, connectivity should resume normally.
In this issue, you may see a connectivity error message such as the
following:
telnet: Unable to connect to remote host: Connection timed out
If you are not able to identify the cause of the timeout error, reach out to
Google Cloud Support .
Service project and host project not in the same VPC service control perimeter
If you are using Shared VPC and a VPC service control
perimeter, and your Redis instance creation operation times out, this may
indicate that your service project and host project are not in the same
service perimeter. Your service project and host project must be in the same
perimeter in order for your Redis instance to communicate with connecting
clients over the Shared VPC network.
To see if you are experiencing this issue, check your Redis instance's audit logs
for the following error:
violationReason: "NETWORK_NOT_IN_SAME_SERVICE_PERIMETER"
To resolve this issue, put your host network and your service network in the
same service perimeter.
Troubleshooting import and export issues
This section outlines some common issues you may run into when using import and
export for Memorystore for Redis.
Import and export buttons are disabled in the Google Cloud console
Issue: the user logged into the console does not have the
redis.instances.import and/or redis.instances.export permissions required to
import and/or export RDB files.
Solution: grant the permissions
to the user, and refresh the instance details page.
The import operation completed but the data was not restored
If an import operation completes but the data is not restored, first check
either the Google Cloud console or the command line for an error message, and
resolve any issues described by the error message.
If there is a failure during the import process, the instance is recovered using
an empty RDB file. You can attempt to restore the data by importing the
same RDB file again, or using a different RDB file.
The import failed because the RDB file was too big
If you received the error message "Import RDB file gs://bucket/object.rdb size
exceeds max memory 10GB", you should scale up your instance and retry the
import. You can also try to import a smaller RDB file into your instance.
Troubleshooting Google Cloud CLI issues
If you run into an issue where a gcloud CLI command is unavailable,
or if the command behaves differently from how it is documented, try updating
the gcloud CLI:
gcloud components update
Stopping all ongoing commands and connections for a Redis instance
As Memorystore for Redis is a Google managed product, there are some
commands that are
blocked in your Redis instance
in order to provide a safe and reliable environment. One of the restricted
commands is CLIENT , which includes CLIENT KILL , used to stop commands.
If a Redis command is consuming a lot of CPU/RAM utilisation and is affecting
your production environment, you need to restart
the instance (for Basic Tier configurations), or to failover into a replica
(for Standard Tier configurations). This restart/failover operation stops all
the commands running on the Redis server, and ends all the ongoing
connections.
Below you'll find commands to perform restarts or failovers for each Memorystore
for Redis configuration.
Stopping commands in Standard tier Memorystore for Redis instances
gcloud redis instances failover INSTANCE_NAME --data-protection-mode=limited-data-loss
Warning: Any failover from the primary to the replica risks some data loss.
The limited-data-loss mode keeps data loss to a minimum by verifying
that the difference in synchronization between your primary and replica is
below 30MB before initiating the failover. See
manual failover
for additional information.
Stopping commands in Basic tier Memorystore for Redis instances
The only way to perform a restart in a Memorystore for Redis instances is
changing its configuration, like scaling up the instance. An example of a
command that you can run to restart your instance can be found below.
gcloud redis instances update INSTANCE_NAME --region REGION_ID --size NUMBER_GB
After you scale your instance to a different size, you can run another scaling operation to return it to the original size.
Issues with the domain restricted sharing organization policy
Depending on when your instance was created, Memorystore for Redis uses one of
two different service account formats. To identify which service account format
your instance uses, see Memorystore for Redis service account format .
There is a known issue where the iam.allowedPolicyMemberDomains organization
policy causes errors when used with Memorystore for Redis instances that use
the [PROJECT_NUMBER]-compute@developer.gserviceaccount.com service account
format.
In these issues, you may encounter this error:
One or more users named in the policy do not belong to a permitted customer.
There are two options to resolve this issue.
Create an instance : newly created instances have the appropriate
service account format which is compatible with the organization policy. If it
is critical to maintain your cache contents, you can perform an export to backup
existing data and an import to the new instance. A newly created instance has a
new service IP address that needs to be configured in your application.
Force account access : use this option only if it's infeasible to recreate your instance.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
