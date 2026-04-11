---
title: "Create and manage tables \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/managing-tables
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/managing-tables
  title: "Create and manage tables \_|\_ Bigtable \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create and manage tables
This page explains how to create and perform operations on Bigtable
tables using the Google Cloud console, the Google Cloud CLI, or the
cbt CLI
.
The
cbt CLI
supports several commands that are not described on this
page. For a complete list of commands, see the cbt reference .
You can also create and manage tables programmatically with the
Cloud Bigtable client libraries or
service APIs .
For instructions about creating and managing authorized views of a table, see
authorized views .
Before you begin
If you plan to work with your tables using command-line tools, follow the steps
in this section.
Install the gcloud CLI .
Optional: If you plan to use the
cbt CLI
, follow the instructions at
Installing the
cbt CLI
,
including the step to create a .cbtrc file.
The
cbt CLI
instructions on this page assume that you have set the project
ID and instance ID in your .cbtrc file. Alternatively, you can use the
-project and -instance flags to set these values each time you run a
cbt CLI
command.
Create a table
When you create a table, you don't need to specify the column families to use
in the table. You can add or delete column families later.
Console
To create a new table in an instance:
Open the list of Bigtable instances in the Google Cloud console.
Open the instance list
Click the instance whose tables you want to view.
Click Tables in the left pane.
The Tables page displays a list of tables in the instance.
Click add_box
Create table .
Enter a table ID for the table.
Optional: Add column families .
You can add columns now or later. A table must have at least one column
family before you can write data to it or read a change stream from it.
Optional: Enable a change stream for the table. Before you enable a
change stream, make sure that you understand the implications, including
increased storage costs and app profile usage requirements. To review
these details, see the Overview of change streams .
Select Enable change stream .
In the Retention time field, enter a number from 1 to 7 to
specify the number of days that the change stream data should be
retained.
Optional: If you don't want Bigtable to create a daily
backup of the table, clear the Enable automated
backup checkbox. For more information, see Use automated
backup .
Optional: Enable infrequent access for the table as part
of tiered storage
( Preview ):
Select Enable tiered storage .
In the Age threshold field, enter the number of days after which
Bigtable moves data from SSD storage to infrequent access
storage. The number must be 30 or greater.
Click Create .
gcloud
To create a table, run the following command. See
gcloud bigtable instances tables create
for a complete list of options.
gcloud bigtable instances tables create TABLE_ID \
--instance = INSTANCE_ID \
--project = PROJECT_ID \
--column-families = COLUMN-FAMILIES
Replace the following:
TABLE_ID : a unique ID for the new table
INSTANCE_ID : the ID of the instance
PROJECT_ID : the project that will contain the new table
COLUMN-FAMILIES : a comma-separated list of column family
names. You can add more column families later.
Optional:
To protect the table from deletion, append the command with
--deletion-protection . If you don't apply this setting, the table
can be deleted. You can also explicitly allow table deletion by
appending --no-deletion-protection .
To enable a change stream for the table, specify a retention period for
the change stream data. Before you enable a change stream, make sure
that you understand the implications, including increased storage costs
and app profile usage requirements. To review these details, see the
Overview of change streams .
--change-stream-retention-period = RETENTION_PERIOD
Replace RETENTION_PERIOD with the length of time that
Bigtable should retain change stream data for the table.
The time must be from one to seven days. Acceptable units are days (d),
hours (h), minutes (m), and seconds (s). Examples: 48h or 6d
To let Bigtable create a daily backup of your table and
retain each backup for the default retention period of
seven days, use the
--enable-automated-backup flag when you create your table.
gcloud bigtable instances tables create TABLE_ID \
--instance = INSTANCE_ID \
--project = PROJECT_ID \
--column-families = COLUMN-FAMILIES \
--enable-automated-backup
To configure a different retention period, use the
--automated-backup-retention-period flag instead of the
--enable-automated-backup flag and provide a value up to
90 days, expressed as a number with a unit of
m , h , or d (minutes, hours, or days), such as 15d for 15 days.
To enable infrequent access as part of tiered storage
( Preview ), use the
--tiered-storage-infrequent-access-older-than flag and replace
AGE_THRESHOLD with a value of at least 30 days. Acceptable
units are days ( d ), hours ( h ), minutes ( m ), and seconds ( s ).
Example: 32d or 32d12h .
gcloud beta bigtable instances tables create TABLE_ID \
--instance = INSTANCE_ID \
--project = PROJECT_ID \
--tiered-storage-infrequent-access-older-than = AGE_THRESHOLD
cbt
Use the following command, replacing TABLE_NAME with the
name of your table. You can't use the
cbt CLI
to create a table
with a change stream enabled.
cbt createtable TABLE_ID
Optional: To create an aggregate column
family in the table,
append the column family name with the aggregation type. The following
creates an aggregate column family with a garbage
collection policy of never .
cbt createtable TABLE_ID families= FAMILY_NAME :never: TYPE
Replace the following:
TABLE_ID : a unique ID for the new table
FAMILY_NAME : : a comma-separated list of column family
names. You can add more column families later.
TYPE : the aggregate type. Must be intsum , intmin , intmax ,
or inthll .
For more options, see Create a
table in the
cbt CLI
reference.
If you have mistakenly deleted a table, don't attempt to manually create the
deleted table. Use the gcloud CLI
command bigtable instances tables undelete to recover the
table.
Optional: Split the table by row key
Key Point: You can specify table splits only when creating a new table, and
those specified splits remain for about 24 hours.
To optimize performance, Bigtable continuously splits tables
across multiple nodes, evenly distributing the amount of data stored on each
node, and keeping frequently accessed rows spread apart where possible. This
ongoing process is automatic.
When you create a new table, you can specify initial table splits.
Bigtable splits the table at the row keys that you provide. If the
key spaces are too big, Bigtable further splits the table. The
initial splits are maintained for about 24 hours after the table creation is
complete. You can provide up to 100 row keys where the initial splits should
occur.
For example, you might designate specific rows to pre-split your table if
you're about to write many rows to the table.
Pre-splitting your table is not essential, but it is beneficial because it
provides Bigtable information about where the load and data
footprint are likely to land when the table is created. The pre-split prevents
Bigtable from having to split the tables and rebalance the load
all at once as the data arrives.
Console
You are not able to pre-split the rows when you create a table using the
Google Cloud console.
gcloud
To split a table by row key, run the following command. See
gcloud bigtable instances tables create
for a complete list of options.
gcloud bigtable instances tables create TABLE_ID \
--instance = INSTANCE_ID \
--project = PROJECT_ID \
--column-families = COLUMN-FAMILIES \
--splits = SPLITS
Replace the following:
TABLE_ID : a unique ID for the new table
INSTANCE_ID : the ID of the instance
PROJECT_ID : the project that will contain the new table
COLUMN-FAMILIES : a comma-separated list of column family
names. You can add more column families later.
SPLITS : the row keys where the table should initially be
split—for example, 10,20 .
cbt
To pre-split a table based on the row key, use the following syntax to
create the table. Replace [TABLE_NAME] with the table name and [SPLITS]
with a comma-separated list of row-key prefixes to use for the pre-splits.
``` none
cbt createtable [ TABLE_NAME ] splits =[ SPLITS ]
```
For example, to pre-split the table my-table at row keys that begin with
10 and 20 :
```none
cbt createtable my-table splits=10,20
```
Modify column families in a table
You can add column families in an existing table. If the table does not have
deletion protection enabled, then you can delete
column families in the table.
Add column families
Console
Open the list of Bigtable instances in the Google Cloud console.
Open the instance list
Click the instance whose tables you want to view.
Click Tables in the left pane.
The Tables page displays a list of tables in the instance.
Click edit Edit for the table
that you want to modify.
For each column family that you want to add, complete the following:
Click Add column family .
Provide a unique identifier for the column family.
Set the garbage collection policy for the column
family.
Click Done .
Click Save .
gcloud
You can't use the gcloud CLI to add column families to a table.
cbt
To add a column family to a table, use the following command:
cbt createfamily TABLE_ID FAMILY_NAME
For example, to add the column families cf1 and cf2 to the table my-table :
cbt createfamily my-table cf1
cbt createfamily my-table cf2
Optional: To add an aggregate column
family to the table,
append the column family name with the aggregation type. The following
creates a table that has an aggregate column family with a garbage collection
policy of never .
cbt createfamily TABLE_ID FAMILY_NAME :never: TYPE
Replace the following:
TABLE_ID : the table ID
FAMILY_NAME : : a comma-separated list of column family
names. You can add more column families later.
TYPE : the aggregation type. Must be intsum , intmin ,
intmax , or inthll .
Delete column families
You can delete column families in a table that does not have
deletion protection enabled.
Warning: When you delete a column family, you also delete the data stored
in that column family. Deleting a column family can't be undone.
Console
Open the list of Bigtable instances in the Google Cloud console.
Open the instance list
Click the instance whose tables you want to view.
Click Tables in the left pane.
The Tables page displays a list of tables in the instance.
Click edit Edit for the table
that you want to modify.
For each column family that you want to delete, complete the following:
Mouse over the row for the column family that you want to delete.
Click delete .
Click Save .
To confirm that you understand that deleting a column family is
permanent and that all data in the column family will be deleted, type
"Delete column families" in the text field.
Click Confirm .
gcloud
You can't use the gcloud CLI to delete column families from a table.
cbt
To delete a column family from a table, use the following command, replacing
[TABLE_NAME] with the table name and [FAMILY_NAME] with the column
family name:
cbt deletefamily [ TABLE_NAME ] [ FAMILY_NAME ]
For example, to delete the column family cf2 from the table my-table :
cbt deletefamily my-table cf2
View a list of tables
Console
To view a list of tables in an instance:
Open the list of Bigtable instances in the Google Cloud console.
Open the instance list
Click the instance whose tables you want to view.
Click Tables in the left pane.
The Tables page displays a list of tables in the instance.
Click the arrow next to the table ID
to expand a list of replications of the table.
Click View Metrics next to a table name to view system insights data for the table.
gcloud
To view a list of tables, run the
gcloud bigtable instances tables list
command.
gcloud bigtable instances tables list --instances = INSTANCE_IDS
Replace the following:
INSTANCE_IDS : a comma-separated list of instance IDs.
cbt
To view a list of tables in an instance, run the following command:
cbt ls INSTANCE_ID
Replace the following:
INSTANCE_ID :
The permanent identifier for the instance.
C++
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
namespace cbt = :: google :: cloud :: bigtable ;
namespace cbta = :: google :: cloud :: bigtable_admin ;
using :: google :: cloud :: StreamRange ;
[]( cbta :: BigtableTableAdminClient admin , std :: string const & project_id ,
std :: string const & instance_id ) {
std :: string instance_name = cbt :: InstanceName ( project_id , instance_id );
google :: bigtable :: admin :: v2 :: ListTablesRequest r ;
r . set_parent ( instance_name );
r . set_view ( google :: bigtable :: admin :: v2 :: Table :: NAME_ONLY );
StreamRange<google :: bigtable :: admin :: v2 :: Table > tables =
admin . ListTables ( std :: move ( r ));
for ( auto & table : tables ) {
if ( ! table ) throw std :: move ( table ). status ();
std :: cout << table - > name () << " \n " ;
}
}
C#
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Lists tables in intance.
// Initialize request argument(s).
ListTablesRequest request = new ListTablesRequest
{
ParentAsInstanceName = s_instanceName
};
try
{
// Make the request.
PagedEnumerable<ListTablesResponse , Table > response = bigtableTableAdminClient . ListTables ( request );
}
catch ( Exception ex )
{
Console . WriteLine ( $"Error listing tables {ex.Message}" );
}
Java
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Lists tables in the current instance.
try {
String parent = "projects/" + projectId + "/instances/" + instanceId ;
ListTablesRequest request = ListTablesRequest . newBuilder (). setParent ( parent ). build ();
for ( Table table : adminClient . getBaseClient (). listTables ( request ). iterateAll ()) {
System . out . println ( table . getName ());
}
} catch ( NotFoundException e ) {
System . err . println ( "Failed to list tables from a non-existent instance: " + e . getMessage ());
}
Node.js
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// List tables in current project
const [ tables ] = await adminClient . listTables ({ parent : instance . name });
tables . forEach ( table = > {
console . log ( table . name );
});
PHP
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Bigtable\Admin\V2\Client\BigtableInstanceAdminClient;
use Google\Cloud\Bigtable\Admin\V2\Client\BigtableTableAdminClient;
use Google\Cloud\Bigtable\Admin\V2\ListTablesRequest;
/**
* List tables in an instance
*
* @param string $projectId The Google Cloud project ID
* @param string $instanceId The ID of the Bigtable instance
*/
function list_tables(
string $projectId,
string $instanceId
): void {
$instanceAdminClient = new BigtableInstanceAdminClient();
$tableAdminClient = new BigtableTableAdminClient();
$instanceName = $instanceAdminClient->instanceName($projectId, $instanceId);
printf('Listing Tables:' . PHP_EOL);
$listTablesRequest = (new ListTablesRequest())
->setParent($instanceName);
$tables = $tableAdminClient->listTables($listTablesRequest)->iterateAllElements();
$tables = iterator_to_array($tables);
if (empty($tables)) {
print('No table exists.' . PHP_EOL);
return;
}
foreach ($tables as $table) {
print($table->getName() . PHP_EOL);
}
}
Python
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
tables = instance . list_tables ()
print ( "Listing tables in current project..." )
if tables != []:
for tbl in tables :
print ( tbl . table_id )
else :
print ( "No table exists in current project..." )
Ruby
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# instance_id = "my-instance"
bigtable . tables ( instance_id ) . all . each do | t |
puts "Table: #{ t . name } "
end
View information about a table
Console
To view information about a table:
Open the list of Bigtable instances in the Google Cloud console.
Open the instance list
Click the instance whose tables you want to view.
Click Tables in the left pane.
The Tables page displays a list of tables in the instance. For each
table, the Google Cloud console displays the number of clusters that
the table is stored on, the table's status, storage utilization, and the
identifiers for any current backups of the table. For tables with
tiered storage
( Preview )
enabled, you can view the SSD storage utilization and the infrequent
access storage utilization.
To view column family names for the table, click
edit . To close the Edit table
pane, click Cancel .
To view additional details about the table, including table-level
metrics and replication state, click the name of the table.
gcloud
To view information about a table, run the
gcloud bigtable instances tables describe
command.
gcloud bigtable instances tables describe TABLE_ID \
--instance = INSTANCE_ID
Replace the following:
TABLE_ID : a unique ID of the table
INSTANCE_ID : the ID of the instance
cbt
You can use the
cbt CLI
to get a list of existing column families
in a table.
Use the following command, replacing [TABLE_NAME] with the table name:
cbt ls [ TABLE_NAME ]
Set garbage collection policies
A garbage collection policy tells Bigtable which data
to keep and which data to mark for deletion. Garbage collection policies are set
at the column family level. You can set them when you create the table or later.
When you create a column family, you can specify the number of cells that
you want to retain in every column in that column family. If you do not
specify this setting, Bigtable uses one of the following default
settings:
If you create the column family with the Cloud Bigtable HBase client for
Java or the HBase shell, or another tool that uses the HBase client for Java,
Bigtable retains only 1 cell for each row or column intersection in
the column family. This default setting is consistent with HBase.
If you create the column family using the Google Cloud console, any other
client library or the
cbt CLI
, Bigtable retains an infinite
number of cells in each column.
See Configure garbage collection policies for detailed
instructions on how to view, set, and update garbage collection policies.
Back up and restore a table
For instructions on how to back up a table and restore from a backup to a new
table, see Manage backups .
If you have enabled automated backup while creating a table, then you can modify
automated backup configuration for a table to enable or disable automated
backup, or change the retention period to up to
90 days from the backup creation time. For more
information, see Use automated backup .
Enable, disable, or configure a change stream
For instructions on the following tasks, see
Configure a change stream .
Enabling a change stream on an existing table
Disabling a change stream
Update the retention period for a change stream
Delete a table
Deleting a table also deletes all authorized views of the table. If any
authorized views of the table have deletion protection enabled, you can't
delete the table. You also can't delete a table that has a continuous
materialized view based on it.
Warning: When you delete a table, you also delete the data stored in that
table.
Console
Open the list of Bigtable instances in the Google Cloud console.
Open the instance list
Click the instance whose tables you want to view.
Click Tables in the left pane.
The Tables page displays a list of tables in the instance.
Click more_vert for the table that
you want to delete.
Click Delete .
To confirm that you acknowledge that this action will delete the table
from all clusters in the instance and that you have only seven days to
undelete the table, type the table ID in the Delete table box.
Click Delete .
gcloud
To delete tables, run the
gcloud bigtable instances tables delete
command.
gcloud bigtable instances tables delete TABLE_ID --instance = INSTANCE_ID
Replace the following:
TABLE_ID : the unique ID of the table
INSTANCE_ID : the ID of the instance
In the terminal, enter y to confirm table deletion.
cbt
To delete a table, use the following command, replacing [TABLE_NAME] with
the table name:
cbt deletetable [ TABLE_NAME ]
Undelete a table
If you accidentally delete a table, you can use the gcloud CLI
command bigtable instances tables undelete to undelete ,
or recover, the table. Don't attempt to recreate the deleted table manually.
To undelete a table, run the following command in the terminal:
gcloud bigtable instances tables undelete TABLE_ID --instance = INSTANCE_ID
Replace the following:
TABLE_ID : the unique identifier for the table
INSTANCE_ID : the ID of the instance
When you undelete a table, Bigtable enables deletion protection for the
table automatically.
The following limitations apply:
The ability to undelete a table is available for approximately seven days
from the time of table deletion.
You can't undelete a table by using the Google Cloud console, the
Cloud Bigtable client libraries, or the
cbt CLI
.
You can't undelete a table from an instance that was deleted.
You can't undelete a table that had CMEK enabled.
When you undelete a table, Bigtable doesn't restore any
fine-grained IAM policy bindings to the deleted table.
You can optionally check the status of the undelete operation in the
audit logs .
Modify deletion protection
You can enable or disable deletion protection for a table if you are a principal
in a role that includes the bigtable.tables.update permission, such as
roles/bigtable.admin . Deletion protection prevents the deletion of the table,
all column families in the table, and the instance that contains the table.
Enabling deletion protection for a table does not enable it for
authorized views of the table. Similarly, disabling a table's deletion
protection does not disable it for authorized views of the table. You must
update the table's authorized views
separately.
Console
Open the list of Bigtable instances in the Google Cloud console.
Open the instance list
Click the instance whose tables you want to view.
Click Tables in the left pane.
The Tables page displays a list of tables in the instance.
Click more_vert next to the table
ID.
To enable deletion protection, click Prevent deletion . To disable
deletion protection, click Enable deletion . Only the valid option is
visible.
gcloud
To enable deletion protection for a table, run the gcloud bigtable instances
table update command:
```sh
gcloud bigtable instances tables update TABLE_ID \
--instance= INSTANCE_ID \
--deletion-protection
```
To disable deletion protection for a table, run the following:
```sh
gcloud bigtable instances tables update TABLE_ID \
--instance= INSTANCE_ID \
--no-deletion-protection
```
Replace the following:
+ TABLE_ID : the unique identifier for the table
+ INSTANCE_ID : the ID of the instance
cbt
You are not able to use the
cbt CLI
to enable or disable deletion
protection.
Modify the age threshold of infrequent access storage
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can modify the age threshold of infrequent access that is part of tiered
storage at any time.
Console
Open the list of Bigtable instances in the Google Cloud console.
Open the instance list
Click the instance whose tables you want to view.
Click Tables in the left pane.
The Tables page displays a list of tables in the instance.
Click edit Edit for the table
that you want to modify.
In the Age threshold field, enter the new number of days after which
Bigtable moves data from the SSD storage to the infrequent
access storage. The number must be 30 or greater.
gcloud
To modify the age threshold of infrequent access storage, run the
gcloud beta bigtable instances tables update
command with the --tiered-storage-infrequent-access-older-than flag:
gcloud beta bigtable instances tables update TABLE_ID \
--instance = INSTANCE_ID \
--project = PROJECT_ID \
--tiered-storage-infrequent-access-older-than = AGE_THRESHOLD
Replace the following:
TABLE_ID : the ID for the table that you want to update.
INSTANCE_ID : the ID of the instance.
PROJECT_ID : the project that contains the table that
you want to update.
AGE_THRESHOLD : the age threshold, which must be at
least 30 days. Acceptable units are days ( d ), hours ( h ), minutes
( m ), and seconds ( s ). Example: from 32d previously to
33d .
Disable infrequent access storage
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can disable the infrequent access of tiered storage at any time. As
a result, Bigtable moves all data in infrequent access storage to
SSD storage. Before you disable infrequent access storage, make sure that you
understand the cost implications .
Console
Open the list of Bigtable instances in the Google Cloud console.
Open the instance list
Click the instance whose tables you want to view.
Click Tables in the left pane.
The Tables page displays a list of tables in the instance.
Click edit Edit for the table
that you want to modify.
Clear the Enable tiered storage checkbox.
Click Save .
gcloud
To disable infrequent access storage, use the
gcloud beta bigtable instances tables update
command with the --clear-tiered-storage-config flag:
gcloud beta bigtable instances tables update TABLE_ID \
--instance = INSTANCE_ID \
--project = PROJECT_ID \
--clear-tiered-storage-config
Replace the following:
TABLE_ID : the ID for the table that you want to update
INSTANCE_ID : the ID of the instance
PROJECT_ID : the project that contains the table that
you want to update
What's next
Learn how to import and export data into and from your
table.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
