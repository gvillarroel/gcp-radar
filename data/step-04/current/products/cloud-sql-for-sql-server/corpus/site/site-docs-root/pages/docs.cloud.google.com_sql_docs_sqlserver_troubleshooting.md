---
title: "Troubleshoot \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/sqlserver
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting
  title: "Troubleshoot \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
SQL Server
Guides
Send feedback
Troubleshoot
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
Check if your question or problem has already been addressed on one of the
following pages:
FAQ
Known issues
Error messages
Diagnose issues
Debug connection issues
Issues updating storage capacity
Topics in this page include:
Backup and recovery
Cloning
Connectivity
Creating instances
Flags
High availability
Import and export
Linked servers
Logging
Managing instances
Private Service Connect
Replication
Backup and recovery
Issue
Troubleshooting
You can't see the current operation's status.
The Google Cloud console reports only success or failure when the operation
is done. It isn't designed to show warnings or other updates.
Run the
gcloud sql operations list command to list all
operations for the given Cloud SQL instance.
You want to find out who issued an on-demand backup operation.
The user interface doesn't show the user who started an operation.
Look in the logs
and filter by text to find the user. You may need to use audit logs for
private information. Relevant log files include:
cloudsql.googleapis.com/sqlagent.out
cloudsql.googleapis.com/sqlserver.err
If Cloud Audit Logs is enabled and
you have the required permissions to view them,
cloudaudit.googleapis.com/activity may also be available.
After an instance is deleted, you can't take a backup of the instance.
If you delete an instance without taking a final backup of the data, then no data recovery is possible. However, if you restore the instance, then Cloud SQL also restores the backups. For more
information on recovering a deleted instance, see
Retain backups after instance deletion .
If you have done an export operation, create a new instance
and then do an import operation to recreate the database. Exports are
written to Cloud Storage and imports are read from there.
Note: Cloud SQL recommends that you take a final backup of your data before you delete the instance. This way, you can recreate any instances that you delete accidentally without contacting Cloud Customer Care .
An automated backup is stuck for many hours and can't be canceled.
Backups can take a long time depending on the database size.
If you really need to cancel the operation, you can ask
customer support to force restart the instance.
A restore operation can fail when one or more users referenced in the
SQL dump file don't exist.
Before restoring a SQL dump, all the database users who own objects or
were granted permissions on objects in the dumped database must exist in the
target database. If they don't, the restore operation fails to recreate the
objects with the original ownership or permissions.
Create the database users before restoring the SQL dump.
You want to increase the number of days that you can keep automatic
backups from seven to 30 days, or longer.
You can
configure the number of automated backups to retain , but you can't retain fewer than the default (seven). Automated backups get pruned
regularly based on the retention value configured. Unfortunately, this means that the
currently visible backups are the only automated backups you can restore from.
To keep backups indefinitely, you can
create
an on-demand backup , as they are not deleted in the same way as
automated backups. On-demand backups remain indefinitely. That is, they
remain until they're deleted or the instance they belong to is deleted.
Because that type of backup is not deleted automatically, it can affect
billing.
An automated backup failed and you didn't receive an email notification.
To have Cloud SQL notify you of the backup's status, configure a log-based alert .
You're unable to restore your instance using the
Transact-SQL RESTORE command or the
SQL Server Management Studio (SSMS) .
Cloud SQL does not support restoring instances through SSMS.
To restore your instance, run the
gcloud sql import command.
You can't see the log backup history.
Log backup history is only retained for 60 days in
msdb database
backup history tables.
Unable to delete an instance when you elect to
take a final backup at instance deletion.
When you delete an instance, you're required to confirm whether you want to
take a final backup for your instance prior to deleting it. If you enabled
final backup using the final-backup instance setting, then the selection
you make when you delete your instance must match the final backup
instance configuration you set when you enabled final backup for your
instance. To mitigate this issue, do one of the following:
Set the final backup value to match the instance's existing backup
configuration.
Leave the final backup field empty when you delete your instance. If
you leave the field empty, then Cloud SQL takes the final backup
configuration set in instance settings to take a final backup and define
its retention.
To view your instance's final backup instance configuration, see
View instance information .
Unable to create a replica instance after successfully creating a
primary instance with the final backup setting.
If you create a new instance with the final backup instance setting
enabled, then you must update the final backup organization policy
to apply the backup configurations to the primary instance only.
Final backups aren't supported for replica instances.
For more information, see
Cloud SQL organization policies .
Clone
Issue
Troubleshooting
Cloning fails with constraints/sql.restrictAuthorizedNetworks error.
The cloning operation is blocked by the Authorized Networks configuration.
Authorized Networks are configured for public IP addresses in the Connectivity section
of the Google Cloud console, and cloning is not permitted due to
security considerations .
Remove all Authorized Networks entries from the Cloud SQL
instance if you can. Otherwise,
create a replica
without any Authorized Networks entries.
Error message: Failed to create subnetwork. Couldn't find free
blocks in allocated IP ranges. Please allocate new ranges for this service
provider. Help Token: [help-token-id].
You're trying to use the Google Cloud console to clone an instance with a private IP
address, but you didn't specify the allocated IP range that you want
to use and the source instance isn't created with the specified range. As
a result, the cloned instance is created in a random range.
Use gcloud to clone the instance and provide a value for
the --allocated-ip-range-name parameter. For more information,
see Cloning an instance with a private IP .
Connect
Issue
Troubleshooting
Aborted connection .
The issue might be:
Networking instability.
No response to TCP keep-alive commands (either the client or the
server isn't responsive, possibly overloaded)
The database engine connection lifetime was exceeded and the server
ends the connection.
Applications must tolerate network failures and follow
best practices
such as connection pooling and retrying. Most connection poolers catch
these errors where possible. Otherwise the application must either retry or
fail gracefully.
For connection retry, we recommend the following methods:
Exponential
backoff . Increase the time interval between each retry, exponentially.
Add randomized backoff also.
Combining these methods helps reduce throttling.
Error message: Login failed for user ""
You might encounter this login error during
Microsoft Entra ID authentication .
To resolve this issue, make sure that a SQL Server login exists for this
Microsoft Entra ID user.
Network connectivity issues with private IP instances
You might experience some of the following issues during integration
setup:
Slow operations to create Microsoft Entra ID logins
Unable to create Microsoft Entra ID logins
Unable to connect to the instance using Microsoft Entra ID authentication
For more information on how to help address these issues, see
Troubleshooting Microsoft Entra ID integration .
Create instances
Issue
Troubleshooting
Error message: The zone or region does not have sufficient
resources to handle the request at the moment.
The selected zone lacks capacity for the requested resources or
the VM type at the time of the instance creation request.
There might be simultaneous high operational demand in that specific
regional location at the time of request.
To resolve this issue, retry creating the instance
in another zone or retry creating the instance in the same zone that received
the error at a different time of day.
Error message: Failed to create subnetwork. Couldn't
find free blocks in allocated IP ranges. Please allocate new ranges for
this service provider .
There are no more available addresses in the allocated IP range. There
can be several possible scenarios:
The size of the allocated IP range for the private service connection
is smaller than /24.
The size of the allocated IP range for the private service connection
is too small for the number of Cloud SQL instances.
The requirement on the size of allocated IP range will be larger if
instances are created in multiple regions.
See allocated range size
To resolve this issue, you can either expand the
existing allocated IP range or allocate an additional IP range to the
private service connection. For more information, see
Allocate an IP address range .
If you used the --allocated-ip-range-name flag while creating
the Cloud SQL instance, you may only expand the specified IP range.
If you're allocating a new range, take care that the allocation doesn't
overlap with any existing allocations.
After creating a new IP range, update the vpc peering with the following
command:
gcloud services vpc-peerings update \
--service = servicenetworking.googleapis.com \
--ranges = OLD_RESERVED_RANGE_NAME , NEW_RESERVED_RANGE_NAME \
--network = VPC_NETWORK \
--project = PROJECT_ID \
--force
If you're expanding an existing allocation, take care to increase only the
allocation range and not decrease it. For example, if the original allocation
was 10.0.10.0/24, then make the new allocation at least 10.0.10.0/23.
In general, if starting from a /24 allocation, decrementing the /mask by
1 for each condition (additional instance type group, additional region) is
a good rule of thumb. For example, if trying to create both instance type
groups on the same allocation, going from /24 to /23 is enough.
After expanding an existing IP range, update the vpc peering with
following command:
gcloud services vpc-peerings update \
--service = servicenetworking.googleapis.com \
--ranges = RESERVED_RANGE_NAME \
--network = VPC_NETWORK \
--project = PROJECT_ID
Error message: Failed to create subnetwork. Router status is
temporarily unavailable. Please try again later. Help Token:
[token-ID] .
Try to create the Cloud SQL instance again.
Error message: HTTPError 400: Invalid request: Incorrect Service Networking config for instance: PROJECT_ID : INSTANCE_NAME :SERVICE_NETWORKING_NOT_ENABLED.
Enable the Service Networking API using the following command and try to create the Cloud SQL instance again.
gcloud services enable servicenetworking.googleapis.com \
--project = PROJECT_ID
Error message: Failed to create subnetwork. Required
'compute.projects.get' permission for PROJECT_ID .
When you create an instance using with a Private IP address, a service
account is created just-in-time using the Service Networking API. If
you have only recently enabled the Service Networking API, then the
service account might not get created and the instance creation fails. In
this case, you must wait for the service account to propagate throughout
the system or manually add it with the required permissions.
Error message: More than 3 subject alternative names are not
allowed.
You're trying to use a custom SAN to add more than three DNS names to
the server certificate of a Cloud SQL instance. You can't add more
than three DNS names to the instance.
Error message: Subject alternative names %s is too long. The
maximum length is 253 characters.
Make sure that any DNS names that you want to add to the server
certificate of a Cloud SQL instance don't have more than 253
characters.
Error message: Subject alternative name %s is invalid.
Verify that the DNS names that you want to add to the server
certificate of a Cloud SQL instance meet the following criteria:
They don't have wildcard characters.
They don't have trailing dots.
They meet RFC
1034 specifications.
Export
Issue
Troubleshooting
HTTP Error 409: Operation failed because another operation was
already in progress.
There is already a pending operation for your instance. Only one operation
is allowed at a time. Try your request after the current operation is
complete.
HTTP Error 403: The service account does not have the required
permissions for the bucket.
Ensure that the bucket exists and the service account for the Cloud SQL
instance (which is performing the export) has the
Storage Object Creator role
( roles/storage.objectCreator ) to allow export to the bucket. See
IAM roles for Cloud Storage .
You want exports to be automated.
Cloud SQL does not provide a way to automate exports.
You could build your own automated export system using Google Cloud
products such as Cloud Scheduler, Pub/Sub, and Cloud Run functions,
similar to this article on
automating backups .
Flags
Issue
Troubleshooting
You want to modify the time zone for a Cloud SQL instance.
To see how to update an instance's time zone, see Instance settings .
In Cloud SQL for SQL Server, you can use the AT TIME ZONE
function for time conversions and more. For more information about this function,
see
AT TIME ZONE (Transact-SQL) .
High availability
Issue
Troubleshooting
You can't find the metrics for a manual failover.
Only automatic failovers go into the metrics .
Cloud SQL instance resources (CPU and RAM) are near 100% usage,
causing the high availability instance to go down.
The instance machine size is too small for the load.
Edit the instance to upgrade to a larger machine size to get more CPUs
and memory.
Import
Issue
Troubleshooting
HTTP Error 409: Operation failed because another operation was already in progress .
There is already a pending operation for your instance. Only one operation
is allowed at a time. Try your request after the current operation is
complete.
The import operation is taking too long.
Too many active connections can interfere with import operations.
Close unused operations. Check the CPU and memory usage of your
Cloud SQL instance to make sure there
are plenty of resources available. The best way to ensure maximum resources
for the import is to restart the instance before beginning the operation.
A restart:
Closes all connections.
Ends any tasks that may be consuming resources.
An import operation can fail when one or more users referenced in the
dump file don't exist.
Before importing a dump file, all the database users who own objects or
were granted permissions on objects in the dumped database must exist in the
target database. If they don't, the import operation fails to recreate the
objects with the original ownership or permissions.
Create the database users before importing.
LSN mismatch
The order of the import of transaction log backups is incorrect or the transaction log chain is broken.
Import the transaction log backups in the same order as that in the backup set table .
StopAt too early
This error indicates that the first log in the transaction log file is after the StopAt timestamp. For example, if
the first log in the transaction log file is at 2023-09-01T12:00:00 and the StopAt field
has value of 2023-09-01T11:00:00, then Cloud SQL returns this error.
Ensure that you use the correct StopAt timestamp and the correct transaction log file.
Linked servers
Issue
Troubleshooting
Msg 7411, Level 16, State 1, Line 25
Server 'LINKED_SERVER_NAME' is not configured for
DATA ACCESS.
The DataAccess option is disabled. Run the
following command to enable data access:
EXEC sp_serveroption
@server = ' LINKED_SERVER_NAME ' ,
@optname = 'data access' ,
@optvalue = 'TRUE'
Replace LINKED_SERVER_NAME with the name of the linked server.
Access to the remote server is denied because no
login-mapping exists. (Microsoft SQL Server, Error: 7416)
If you have this issue while establishing an encrypted
connection, you need to try another way to provide the user ID when you
access the linked server. To do this, run the following command:
EXEC master.dbo.sp_addlinkedserver
@server = N ' LINKED_SERVER_NAME ' ,
@srvproduct = N '' ,
@provider = N 'MSOLEDBSQL' ,
@datasrc = N ' TARGET_SERVER_ID ' ,
@provstr = N 'Encrypt=yes;TrustServerCertificate=yes;User ID= USER_ID '
Replace the following:
LINKED_SERVER_NAME with the name of the linked server.
TARGET_SERVER_ID with the name of the target
server, or the IP address and port number for the target server.
USER_ID with the user logging in.
Unexpected behavior
If you experience unexpected behavior, make sure you're using
a supported provider.
For more information, see
the Microsoft documentation .
Logging
Issue
Troubleshooting
Audit logs are not found.
Data-Access logs are only written if the operation is an authenticated
user-driven API call that creates, modifies, or reads user-created data,
or if the operation accesses configuration files or metadata of resources.
Operations information is not found in logs.
You want to find more information about an operation.
For example, a user was deleted but you can't find out who did it.
The logs show the
operation started but don't provide any more information. You must
enable
audit logging for detailed and personal identifying
information (PII) like this to be logged.
Some logs are filtered from the error.log log of a
Cloud SQL for SQL Server instance.
Filtered logs include
AD logs without timestamps, and include:
Login failed for user 'x'. Reason: Token-based server access
validation failed with an infrastructure error. Login lacks connect endpoint
permission. [CLIENT: 127.0.0.1] . These logs are filtered because
they potentially can cause confusion.
Log files are hard to read.
You'd rather view the logs as json or text.You can use the
gcloud logging read
command along with linux post-processing commands to download the logs.
To download the logs as JSON:
gcloud logging read \
"resource.type=cloudsql_database \
AND logName=projects/ PROJECT_ID \
/logs/cloudsql.googleapis.com%2F LOG_NAME " \
--format json \
--project = PROJECT_ID \
--freshness = "1d" \
> downloaded-log.json
To download the logs as TEXT:
gcloud logging read \
"resource.type=cloudsql_database \
AND logName=projects/ PROJECT_ID \
/logs/cloudsql.googleapis.com%2F LOG_NAME " \
--format json \
--project = PROJECT_ID \
--freshness = "1d" | jq -rnc --stream 'fromstream(1|truncate_stream(inputs)) \
| .textPayload' \
--order = asc
> downloaded-log.txt
Manage instances
Issue
Troubleshooting
Temporary storage increased automatic storage.
Automatic storage is enabled.
Restart deletes the temporary files but not
reduce the storage. Only
customer support can reset the instance size.
Data is being automatically deleted.
Most likely a script is running somewhere in your environment.
Look in the logs around the time of the deletion and see if there's a
rogue script running from a dashboard or another automated process.
The instance cannot be deleted.
You might see the error message ERROR: (gcloud.sql.instances.delete) HTTP Error
409: The instance or operation is not in an appropriate state to handle the
request , or the instance may have a INSTANCE_RISKY_FLAG_CONFIG
flag status.
Some possible explanations include:
Another operation is in progress. Cloud SQL operations do not
run concurrently. Wait for the other operation to complete.
The INSTANCE_RISKY_FLAG_CONFIG warning is triggered
whenever at least one beta flag is being used. Remove the
risky flag settings and restart the instance
The instance is stuck due to large temporary data size.
The system can create many temporary tables at one time, depending on
the queries and the load.
Unfortunately, you can't shrink the ibtmp1 file by any method
other than restarting the service.
One mitigation option is to create the temporary table with
ROW_FORMAT=COMPRESSED , so it is stored
in file-per-table tablespaces in the temporary file directory. However, the
downside is performance costs associated with creating and removing a
file-per-table tablespace for each temporary table.
Fatal error during upgrade.
Logs may reveal more, but in any case
customer support may be needed to
force re-create the instance.
Instance is stuck on restart after running out of disk space.
Automatic storage increase capability isn't enabled.
If your instance runs out of storage, and the automatic storage increase
capability isn't enabled, your instance goes offline. To avoid this issue,
you can
edit the instance to enable automatic storage increase.
Your on-premises primary instance is stuck.
Google Cloud can't help with instances that are not in Cloud SQL.
Slow shutdown on restart.
When an instance shuts down, any outstanding connections that don't
end within 60 seconds make the shutdown unclean.
By having connections that last less than 60 seconds, most unclean
shutdowns can be avoided, including connections from the database
command prompt. If you keep these connections open for hours or days,
shutdowns can be unclean.
A user cannot be deleted.
The user probably has objects in the database that depend on it. You
need to drop those objects or reassign them to another user.
Find out which objects are dependent on the user, then drop or reassign
those objects to a different user.
This thread on Stack Exchange discusses how to find the objects owned by
the user.
Particular queries are running slow.
Queries can be slow for many reasons, mostly due to specific database
aspects. One reason that can involve Cloud SQL is network latency,
when the source (writer or reader) resource and the destination
(Cloud SQL) resource are in different regions.
Refer to
general performance tips in particular.
For slow database inserts, updates, or deletes, consider the following
actions:
Check the locations of the writer and database; sending data a long
distance introduces latency.
Check the location of the reader and database; latency affects read
performance even more than write performance
To reduce the latency the recommendation is to locate both the source and
destination resources in the same region.
Out of memory is indicated but monitoring charts don't show that.
An instance can fail and report Out of memory but the
Google Cloud console or Cloud Monitoring charts seem to show there's still
memory remaining.
There are other factors beside your workload that can impact memory
usage, such as the number of active connections and internal overhead
processes. These aren't always reflected in the monitoring charts.
Ensure that the instance has enough overhead to account for your workload
plus some additional overhead.
Recovering a deleted instance.
All data on an instance, including backups, is permanently lost when
that instance is deleted.
To preserve your data,
export it to Cloud Storage before you
delete an instance .
The Cloud SQL Admin role includes the permission to delete the
instance. To prevent accidental deletion, grant this role only as needed.
You want to rename an existing Cloud SQL instance.
Renaming an existing instance is not supported.
There are other ways to accomplish the goal by creating a new instance.
You can clone the instance
you want to rename and set a new name for the
cloned instance. This allows you to create the new instance without
having to import data manually. Just as when creating a new instance,
the cloned instance has a new IP address.
You can export
data from your instance into a Cloud Storage
bucket, create a new instance with the new name you want, and then
import the data
into the new instance.
In both cases, you can delete your old instance after the operation is
done. We recommend going with the cloning route since it has no impact on
performance and doesn't require you to redo any instance configuration
settings such as flags, machine type, storage size and memory.
Error when deleting an instance.
If deletion protection is enabled for an instance, confirm your plans
to delete the instance. Then
disable deletion protection before deleting the instance.
Private Service Connect
Issue
Troubleshooting
The service attachment of the instance doesn't accept the Private Service Connect endpoint.
Check the endpoint's status.
gcloud
To check the status, use the gcloud compute forwarding-rules describe command.
gcloud compute forwarding-rules describe ENDPOINT_NAME \
--project = PROJECT_ID \
--region = REGION_NAME \
| grep pscConnectionStatus
Make the following replacements:
ENDPOINT_NAME : the name of the endpoint
PROJECT_ID : the ID or project number of the Google Cloud project that contains the endpoint
REGION_NAME : the region name for the endpoint
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID or project number of the Google Cloud project that contains the Private Service Connect endpoint
REGION_NAME : the name of the region
ENDPOINT_NAME : the name of the endpoint
HTTP method and URL:
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /forwardingRules/ ENDPOINT_NAME
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /forwardingRules/ ENDPOINT_NAME "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /forwardingRules/ ENDPOINT_NAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "compute#forwardingRule",
"id": " ENDPOINT_ID ",
"creationTimestamp": "2024-05-09T12:03:21.383-07:00",
"name": " ENDPOINT_NAME ",
"region": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME ",
"IPAddress": " IP_ADDRESS ",
"target": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /serviceAttachments/ SERVICE_ATTACHMENT_NAME ",
"selfLink": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /forwardingRules/ ENDPOINT_NAME ",
"network": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /global/networks/default",
"serviceDirectoryRegistrations": [
{
"namespace": "goog-psc-default"
}
],
"networkTier": "PREMIUM",
"labelFingerprint": " LABEL_FINGERPRINT_ID ",
"fingerprint": " FINGERPRINT_ID ",
"pscConnectionId": " CONNECTION_ID ",
"pscConnectionStatus": "ACCEPTED",
"allowPscGlobalAccess": true
}
Verify that the status of the endpoint is ACCEPTED . If the status is PENDING , then the instance isn't allowing the Google Cloud project that contains the endpoint. Make sure that the network project in which the endpoint is created is allowed. For more information, see Edit an instance with Private Service Connect enabled .
ERROR: (gcloud.compute.forwarding-rules.create) Could not fetch resource: The resource 'projects/PROJECT_ID/regions/REGION/subnetworks/SUBNET_NAME' was not found
This error message can occur when reserving a static internal IP address for the Private Service Connect endpoint.
Make sure the subnet specified exists in the project specified by the URI. If you want to create an endpoint in a service project but use a subnet from a Shared VPC network,
you need to specify the subnet by its URI and use the host project's project ID in the URI.
For more information, see Create the endpoint manually .
ERROR: (gcloud.compute.forwarding-rules.create) Could not fetch resource:
- The resource 'projects/PROJECT_ID/global/networks/NETWORK_NAME' was not found
This error message can occur when you create a Private Service Connect endpoint manually.
Make sure the network specified exists in the project specified by the URI. If you want to create an endpoint in a service project but use a Shared VPC network,
you need to specify the network by its URI and use the host project's project ID in the URI.
For more information, see Create the endpoint manually .
Invalid consumer network status for PSC auto connection .
The consumer network is either not configured correctly, or not
configured at all, and therefore, no endpoint is available to connect to. To
connect to the endpoint, you'll need to check the status of the endpoint,
and fix the error before trying to connect again.
To check the status of an endpoint,
see Retrive the endpoint .
The status of the endpoint can be one of the following:
CONNECTION_POLICY_MISSING : there is no matching service
connection policy on the consumer network. Service connection policies
are configured by network, by region. To reconfigure the network,
see Update a service connection policy .
CONSUMER_INSTANCE_PROJECT_NOT_ALLOWLISTED : there is a
matching service connection policy, but the
Service
instance scope field in the policy is not configured to allow
connection to this Cloud SQL instance. Update the policy to
configure the value of the Service instance scope field
( --producer-instance-location ) with the project, folder, or
organization where the Cloud SQL instance resides. To reconfigure
the service connection policy, see
Update a service connection policy .
POLICY_LIMIT_REACHED : the service connection policy
has reached its endpoint limit. To resolve, you'll need to increase the
endpoint limit by
updating the service connection policy .
No permission to create a service connection policy .
You don't have the required permissions to create a service
connection policy. To create a service connection policy, you need the
Compute Network Admin IAM role. For more information,
see Roles and permissions .
The network attachment is unable to accept connections from the
Private Service Connect interface when
using
Private Service Connect outbound connectivity .
If your external network is unable to accept connections from
the Private Service Connect interface,
then the connection policies on your network attachment may not be
configured correctly.
Network attachments need to be configured to either
accept all connections automatically, or configured manually
with a list of accepted connections.
For more information, see Connection policies .
Use the following command to verify the accepted connections
in your network attachment:
gcloud compute network-attachments describe default
--region = REGION_ID
If the Private Service Connect interface isn't on the accepted
list, then update your network attachment . For more information, see
Manage network attachments .
Replication
Issue
Troubleshooting
Read replica didn't start replicating on creation.
There's probably a more specific error in the log files.
Inspect the logs in
Cloud Logging to find the actual error.
Unable to create read replica - invalidFlagValue error.
One of the flags in the request is invalid. It could be a flag you
provided explicitly or one that was set to a default value.
First, check that the value of the max_connections flag is
greater than or equal to the value on the primary.
If the max_connections flag is set appropriately,
inspect the logs in
Cloud Logging to find the actual error.
Unable to create read replica - unknown error.
There's probably a more specific error in the log files.
Inspect the logs in
Cloud Logging to find the actual error.
If the error is: set Service Networking service account as
servicenetworking.serviceAgent role on consumer project , then disable
and re-enable the Service
Networking API . This action creates the service account necessary
to continue with the process.
Disk is full.
The primary instance disk size can become full during replica creation.
Edit the primary instance to upgrade it to a larger disk size.
The replica instance is using too much memory.
The replica uses temporary memory to cache often-requested read
operations, which can lead it to use more memory than the primary instance.
Restart the replica instance to reclaim the temporary memory space.
Replication stopped.
The maximum storage limit was reached and automatic storage
increase isn't enabled.
Edit the instance to enable automatic storage increase .
Replication lag is consistently high.
The write load is too high for the replica to handle. Replication lag
takes place when the SQL thread on a replica is unable to keep up with the
IO thread. Some kinds of queries or workloads can cause temporary or
permanent high replication lag for a given schema. Some of the typical
causes of replication lag are:
Slow queries on the replica. Find and fix them.
Queries like DELETE ... WHERE field < 50000000 cause
replication lag with row-based replication since a huge number of
updates are piled up on the replica.
Some possible solutions include:
Edit the instance to increase the size of the replica.
Reduce the load on the database.
Send read traffic to the read replica.
Index the tables.
Identify and fix slow write queries.
Recreate the replica.
Replica creation fails with timeout.
Long-running uncommitted transactions on the primary instance can cause
read replica creation to fail.
Recreate the replica after stopping all running queries.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
