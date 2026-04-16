---
title: "Cloud SQL error messages \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/error-messages
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/sqlserver
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/error-messages
  title: "Cloud SQL error messages \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
Guides
Send feedback
Cloud SQL error messages
Stay organized with collections
Save and categorize content based on your preferences.
This page discusses some of the error messages encountered in Cloud SQL.
Overview
Error messages in Cloud SQL come from many sources and appear in many
places. Some error messages come from the database engines themselves, some from
the Cloud SQL service, some from client applications, and some are
returned by calls to the Cloud SQL Admin API.
This page includes some of the most common errors seen in
Cloud SQL. If you don't find the error code or message you are looking
for here, you can look for source reference material here:
MySQL error reference pages
PostgreSQL error reference pages
SQL Server error reference pages
If you don't find the reference material for the error message that you're seeing,
you can also search in some of these places where other users may have relevant
experience:
Cloud SQL questions on Stack Overflow
Public issue tracker for Cloud SQL
DBA Stack Exchange
Cloud SQL discuss group
Google Cloud Slack community
Google Cloud on Reddit
Operational errors
A | B | C | D | E | F | G | I | L | M | N | O | P | Q | R | S | T | U | W
Error message
Troubleshooting
Aborted connection xxx to db: DB_NAME.
The application isn't ending connections properly.
Check for the following conditions:
The application did not call mysql_close() before exiting.
Communication errors .
The application might have been sleeping more than the number of
seconds specified in `wait_timeout` or `interactive_timeout` without
issuing any requests to the server.
See
Section 5.1.7, Server System Variables .
The application ended abruptly in the middle of a data transfer.
The max_allowed_packet variable value might be too
small or queries require more memory than the allocated for mysqld.
This can be resolved by raising the
max_allowed_packet flag to a much larger number.
Access denied; you need (at least one of) the SUPER
privilege(s) for this operation.
There could be a view, a function, or a procedure in the source
database referencing DEFINER in a way that's not supported
by Cloud SQL.
Update the definer in the external databases, for example
from root@localhost to root@% or a non-superuser.
See
Stored Object Access Control for more information.
Access denied for user 'XXX'@'XXX' (using password: XXX)
There could be several causes, including:
The username (or password) is incorrect.
The user is connecting from a URL other than @XXX .
The user doesn't have the correct privileges for the database
they're trying to connect to.
Try these things ...
Verify the username and corresponding password.
Check the origin of the connection to see if it matches the URL
where the user has access privileges.
Check the user's grant privileges in the database.
Allocated IP range not found in network.
VPC peerings were not updated after an allocated range was modified
or removed.
You need to
modify the private connection . Use the following command, and make
sure to use the --force argument:
gcloud services vpc-peerings update \
--network = VPC_NETWORK \
--ranges = ALLOCATED_RANGES \
--service = servicenetworking.googleapis.com \
--force
ANY command denied to user 'root'@'%' for table ...
The user doesn't have all the permissions it needs for this operation.
Try this:
Connect to the database (for example, using Cloud Shell) and
login as root.
Execute USE mysql; .
Grant the following permissions using the syntax:
GRANT PERMISSION_1 , PERMISSION_2 ON * . * TO 'root' WITH GRANT OPTION ;
SELECT
INSERT
UPDATE
DELETE
CREATE
DROP
RELOAD
SHUTDOWN
PROCESS
REFERENCES
INDEX
ALTER
SHOW DATABASES
CREATE TEMPORARY TABLES
LOCK TABLES
EXECUTE
REPLICATION SLAVE
REPLICATION CLIENT
CREATE VIEW
SHOW VIEW
CREATE ROUTINE
ALTER ROUTINE
CREATE USER
EVENT
TRIGGER
CREATE TABLESPACE
Execute USE 'Database_Name'; where Database_Name
is the database where you're creating the views.
Execute all create views in the session and commit.
Error message
Troubleshooting
Bad request.
This message can have many causes. Illegal Argument is one
of the most common. In this case, the request is using either the wrong
argument or an invalid value for the argument. For the many other
causes, the error message might contain a useful hint.
For Illegal Argument , check the request to make sure each
argument is permissible and each value for the argument is valid. For
all other causes, check the log files
to see if there is more information there.
Error message
Troubleshooting
Cannot modify allocated ranges in CreateConnection. Please use
UpdateConnection.
VPC peerings were not updated after an allocated range was modified or removed.
You need to modify the private connection .
Use the following command, and make sure to use the --force argument:
gcloud services vpc-peerings update \
--network = VPC_NETWORK \
--ranges = ALLOCATED_RANGES \
--service = servicenetworking.googleapis.com \
--force
Connection reset by peer.
If you're trying to perform an export and Cloud Storage doesn't
receive any data within a certain timeframe, then the connection resets.
Try a manual export using pg_dump .
Constraints/sql.restrictAuthorizedNetworks.
The cloning operation is blocked by the
Authorized Networks configuration. Authorized Networks
are configured for public IP addresses in the Connectivity section of
the Google Cloud console, and cloning isn't permitted due to
security considerations .
Remove all Authorized Networks entries from the Cloud SQL
instance if you can. Otherwise,
create a replica
without any Authorized Networks entries.
Could not allocate a new page for database database_name
because of insufficient disk space in filegroup PRIMARY .
The PRIMARY filegroup, which is the main and default filegroup in a
database, has run out of space.
Use the sp_helpdb command to get information about the database.
Consider the following solutions:
Manually expand the disk space or reduce the data in the database.
Ensure that Automatic storage increase
is enabled for the database instance.
Add more filegroups and move data into them.
Ensure that growth is not limited. Use the ALTER DATABASE command to
enable autogrowth, if it is not already enabled, and to increase the maximum file size.
Manage tempdb files. Use the DBCC OPENTRAN and DBCC SQLPERF commands to check for open transactions that can cause the tempdb file or the transaction log to grow.
Error message
Troubleshooting
Database user does not exist.
gcloud sql connect --user only works with the default
postgres user.
Connect with the default user and then change users.
Disk is full.
The primary instance disk size can become full during replica creation.
Edit the primary instance to upgrade it to a larger disk size.
Error message
Troubleshooting
Failed to create subnetwork.
No more available addresses in the IP range.
Couldn't find free blocks in allocated IP ranges. Please allocate
new ranges for this service provider.
There are no more available addresses in the allocated IP range.
Consider these possible scenarios:
The size of the allocated IP range for the private service connection is
smaller than /24.
The size of the allocated IP range for the private service connection is
too small for the number of Cloud SQL instances.
The requirement on the size of allocated IP range will be larger if instances are created in multiple regions. See allocated range size
For each of the previously listed scenarios, you can elect to either expand the existing or
allocate an additional IP range to the private service connection.
If you're allocating a new range, take care to not create an allocation that
overlaps with any existing allocations.
After creating a new IP range, update the VPC peering with the following command:
gcloud services vpc-peerings update \
--service = servicenetworking.googleapis.com
--ranges = OLD_RESERVED_RANGE_NAME , NEW_RESERVED_RANGE_NAME \
--network = VPC_NETWORK
--project = PROJECT_ID \
--force
If you're expanding an existing allocation, take care to only increase the
allocation range and not decrease it. For example, if the original allocation
was 10.0.10.0/24, make the new allocation at least 10.0.10.0/23.
In general, if starting from a /24 allocation, decrementing the /mask by 1
for each condition (additional instance type group, additional region) is a good
rule of thumb. For example, if trying to create both instance type groups on the
same allocation, going from /24 to /23 is enough.
After expanding an existing IP range, update the vpc peering with following
command:
gcloud services vpc-peerings update \
--service = servicenetworking.googleapis.com
--ranges = RESERVED_RANGE_NAME \
--network = VPC_NETWORK \
--project = PROJECT_ID \
--force
Error message
Troubleshooting
(gcloud.sql.connect) It seems your client does not have ipv6
connectivity and the database instance does not have an ipv4 address.
You're trying to connect to your private IP instance using Cloud Shell.
Connecting from Cloud Shell to an instance with only a private IP
address isn't supported.
Got packet bigger than max_allowed_packet bytes when
dumping table.
The packet was larger than allowed by settings.
Use mysqldump with the max_allowed_packet option.
To learn more about using mysqldump flags for managed
import migration, see
Allowed and default initial sync flags
Error message
Troubleshooting
InnoDB: Write to file ./ibtmp1 failed at
offset XXXX, YYYY bytes should have been written, only 0 were written.
The instance reached a hard limit when conducting an automated backup.
Check that your OS and file system support files of this size.
Check that the disk isn't full or out of
disk quota .
You can request an increase to your quotas from the
Google Cloud console or
edit the instance to upgrade it to a larger disk size.
Internal error.
The project could be missing the Service Networking service account
required for this feature.
To repair service permissions, disable the
Service Networking API ,
wait five minutes and then re-enable it.
Invalid request: Incorrect Service Networking config for instance.
Service Networking API isn't enabled in the project.
Enable the Service Networking API
in your project. If you see this error when you're trying to assign a private
IP address to a Cloud SQL instance, and you're using a Shared VPC, you
also need to enable the Service Networking API for the host project.
Instance is not eligible for replica creation.
The primary instance doesn't meet the necessary requirements for
replication. For a list of requirements, see
Replication limitations .
Error message
Troubleshooting
Login failed for user 'XXX'.
Confirm that the user has privileges on the instance and database to
which they are trying to connect and ensure the right credentials are being
used.
Login 'test' owns one or more database(s). Change the owner of the
database(s) before dropping the login.
If you want to drop the user login associated with a database owner
that's no longer active,
you must first assign a new database owner .
Error message
Troubleshooting
Metadata table locked.
Another query, process, or transaction is blocking your query and locked
the table.
Find the process that locked the table and stop it:
Diagnose with: sql> show processlist;
The first item in the list might be the one holding the lock,
which the following items are waiting on.
The SHOW INNODB STATUS command can also be helpful.
Run the command KILL <var>PID</var> .
Error message
Troubleshooting
Network association failed.
The Service Networking API isn't enabled in the project.
Enable the Service Networking API
in your project. If you see this error when you're trying to assign a private
IP address to a Cloud SQL instance, and you're using a Shared VPC, you
also need to enable the Service Networking API for the host project.
Error message
Troubleshooting
Operation failed because another operation was already in progress.
Most operations in Cloud SQL are synchronous. You can
run only one at a time.
Wait for the previous operation to finish before beginning another.
Error message
Troubleshooting
Password authentication failed for user "postgres".
When you create a new Cloud SQL for PostgreSQL instance, the
default admin user postgres is created but not the password.
You need to
set a password for this user before the user can login.
Error message
Troubleshooting
Quota exceeded.
You reached the limit of your per-minute or daily quota. Review the
quotas and limits for Cloud SQL.
Request an increase to your quotas from the
Google Cloud console .
Error message
Troubleshooting
Remaining connection slots are reserved.
The maximum allowed connections have been reached.
Increase the value of the max_connections flag.
See Configuring database flags .
Request is missing a valid API key.
You might not have a valid service account key JSON file, or it might
not be stored in the expected location.
Verify that you have a valid service account key JSON file in
the location stored in the GOOGLE_APPLICATION_CREDENTIALS
environment variable and that the variable points to the correct location.
Error message
Troubleshooting
Specified key was too long; max key length is 767 bytes.
The external primary instance might have the variable innodb_large_prefix set.
Set the innodb_large_prefix flag to
ON when creating the replica or update the existing replica with the flag.
SSL error: invalid padding.
Server certificate error.
Create a new server certificate and
rotate .
System error occurred.
The user might not have all the Cloud Storage permissions it needs.
The database table might not exist.
Try these things ...
Check that you have at least WRITER permissions on the bucket
and READER permissions on the export file. For more information
on configuring access control in Cloud Storage, see
Create and Manage
Access Control Lists
Ensure the table exists. If the table does exist, confirm that you have the
correct permissions on the storage bucket.
Error message
Troubleshooting
Table definition changed.
During the export process a change occurred in the table.
The dump transaction can fail if you use the following statements during the
export operation:
ALTER TABLE
CREATE TABLE
DROP TABLE
RENAME TABLE
TRUNCATE TABLE
Remove any of these statements from the dump operation.
Temporary file size exceeds temp_file_limit.
The temp_file_limit flag is set too low for your database usage.
Increase the temp_file_limit size.
See Configuring database flags .
Table db.table doesn't exist
If one or more InnoDB table(s) disappeared after a MySQL restart and
the MySQL error log has the following warnings at the same time, it is due to
the foreign key and referenced key columns being out-of-sync.
[ Warning ] InnoDB: Load table db.table failed, the table has missing
foreign key indexes. Turn off 'foreign_key_checks' and try again.
[ Warning ] InnoDB: Cannot open table db/table from the internal data
dictionary of InnoDB though the .frm file for the table exists.
See InnoDB troubleshooting
for more information.
After a database restart, MySQL needs to load table(s) into the InnoDB
dictionary cache on first access. If it detects the discrepancy, it
blocks the access to that table.
mysql> select * from db.table ;
ERROR 1146 ( 42S02 ) : Table db.table doesn ' t exist
Turning off foreign_key_checks for the MySQL session allows access to
the table again. Once the table is accessed and loaded into the
dictionary cache, InnoDB doesn't check and complain about a foreign key
mismatch until the next database restart
The foreign key mismatch should be fixed to avoid any further issues.
Disable the foreign_key_checks for the mysql client
session and access the table.
mysql> SET SESSION FOREIGN_KEY_CHECKS = 0 ;
Inspect the parent and child tables and identify the mismatches
between the foreign key and referenced key columns.
mysql> SHOW CREATE TABLE parent_table ;
mysql> SHOW CREATE TABLE child_table ;
Verify the corresponding columns have similar data types. The
size and sign of fixed precision types such as
INTEGER and DECIMAL
are the same. For nonbinary (character) string columns, the
character set and collation must be the same.
Fix the mismatch by using the
ALTER TABLE statement.
Some operations may require you to drop the foreign key constraint first,
apply the change, then add the foreign key back.
Re-enable foreign_key_checks again.
mysql> SET SESSION FOREIGN_KEY_CHECKS = 1 ;
(Timeout) during export.
CSV and SQL formats do export differently. The SQL format includes the entire
database and is likely to take longer to complete.
Use the CSV format and run multiple, smaller export jobs to reduce the size and
length of each operation.
Too many connections.
Setting the max_connections flag value too high can cause this
error. This can also be caused by enabling a flag out of sequence.
Lower the max_connections flag value, or contact
customer support to request a flag removal followed by a hard drain .
This forces the instance to restart on a different host with a fresh configuration,
without the flag or setting.
Error message
Troubleshooting
Unauthorized to connect.
There can be many causes because authorization occurs at many levels:
At the database level, the database user must exist and its password match
At the project level, the user might not have the correct IAM permissions,
including the serviceusage.services.use or
cloudsql.instances.connect permissions.
At the network level, if the Cloud SQL instance is using public IP
the connection's source IP must be in an authorized network.
Try these things ...
Ensure the user exists and its password matches.
Assign the Service Usage Consumer role to the user account.
This role includes the permission serviceusage.services.use .
If using public IP, ensure the source IP is in an authorized network.
Unknown table COLUMN_STATISTICS in information_schema.
This happens if you use the mysqldump binary from MySQL 8.0 to dump
data from a MySQL 5.7 database and import to a MySQL 8.0 database.
If you dump data from a MySQL 5.7 database and import to a MySQL 8.0 database,
make sure to use the mysqldump binary from MySQL 5.7. If you use the
mysqldump binary from MySQL 8.0, you need to add the
--column-statistics=0 flag.
Error message
Troubleshooting
x509: certificate isn't valid for any names.
Known issue: The
Cloud SQL Proxy Dialer isn't compatible with Go 1.15 at this time.
Until fixed, see
this discussion on GitHub , which includes a workaround.
Unknown errors
The following table shows some known cases where an Unknown Error
can occur, and lists specific remedies where applicable. However, this is not
a complete list. If you don't find your case in the table, check with the
public issue
tracker for Cloud SQL .
If you don't find the issue there, consider
submitting a report , or reviewing
other support options .
Operation
The issue might be...
Things to try...
Add user
If the user already exists in the database, this error can occur
when you try to add them.
Check to make sure the user doesn't already exist in the
database.
Backup
If you see this during automated or manual backups, it's likely
the instance disk is full.
If the temporary file size is taking up too much space, you can
restart the instance to remove the file and free up the disk space.
Otherwise, you might need to upgrade your instance to a larger disk
size.
Clone
This can occur when there is a shortage of resources in the
selected zone.
Try another zone in the region, or wait and try again later.
Create instance
This can occur when you are trying to re-use the same name as a
recently-deleted instance.
It can also be caused by intermittent connectivity issues.
The logs might show that
the Service Networking API is not enabled for the project.
The error has also been seen when trying to create multiple
instances in parallel. For example, Terraform scripts make this
attempt possible.
Another cause can be that a specific resource is exhausted or
a quota limit has been exceeded. Look in the logs for an entry like
Quota 'INTERNAL_FORWARDING_RULES_WITH_TARGET_INSTANCE_PER_NETWORK'
exceeded. Limit: 100.0 globally
This error can occur if subnet creation fails when there are no
more available addresses in the IP range.
Instance names cannot be re-used until about a week after
deletion.
In the case of intermittent connectivity issues, the only remedy is to
try again.
Enable the Service Networking API for the project.
Parallel instance creation scripts will only succeed in creating
one of the instances. Modify the script to wait until each instance
create operation is complete before continuing to the next one.
Allocate new
ranges .
<tr>
<td>Export</td>
<td>If you see this while trying to export a database to a
Cloud Storage bucket, the transfer may be failing due to a bandwidth
issue.</td>
<td>The Cloud SQL instance may be located in a different region
than the Cloud Storage bucket. Reading and writing data from one
continent to another involves a lot of network usage, and can cause
intermittent issues like this.</td>
</tr>
<tr>
<td>Failover (automatic)</td>
<td>An automatic failover operation can produce this error message when
the service detects that the primary instance is still responsive.</td>
<td>There is nothing to be done in this case. The failover won't occur
because it isn't needed.</td>
</tr>
<tr>
<td>Import</td>
<td>The import file may contain statements which require the superuser
role.</td>
<td>Edit the file to remove any statements which require the superuser
role.</td>
</tr>
Cloud SQL also uses some third-party binaries (for example,
mysqld ), which can generate unknown error messages. Such errors are
internal to the third-party binaries and are outside the scope of Cloud SQL.
However, sometimes a more specific error can be found in the
Cloud SQL log files at around the same
time.
Also, sometimes it is an error code that is unknown. In this case,
the complete message can be Unknown Error Code .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
