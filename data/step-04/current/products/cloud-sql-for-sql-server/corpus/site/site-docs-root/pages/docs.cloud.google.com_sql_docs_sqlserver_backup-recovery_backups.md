---
title: "Cloud SQL backups overview \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/sqlserver
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups
  title: "Cloud SQL backups overview \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\
    \ Documentation"
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
Cloud SQL backups overview
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
Cloud SQL lets you back up your instances on-demand, or automatically
using a backup schedule. Backup configurations available for your instance
depend on your instance's backup option . Cloud SQL
backups are incremental and help you restore lost data to your Cloud SQL
instance. Backups are also encrypted by default using Google-managed or
Customer-Managed Encryption keys (CMEK). With backups, you can:
Restore your instance to a previous state if your instance is facing an
issue.
Set up Disaster Recovery (DR) by creating a new instance using a backup
in a different region or zone.
Create multiple instances using backups to help in development, testing,
and migration.
You can retain these backups by defining your instance's backup retention settings.
Retention settings can differ based on your instance's
Cloud SQL edition and
backup option .
Additionally, you can also retain backups after your instance is deleted to
allow you to restore the instance after deletion.
Note: Restoring from a backup doesn't retain the IP address of
the deleted instance. To restore your instance, including the
IP address in the case of accidental deletion, Cloud SQL
retains the backups of deleted instances for four days. To recover a deleted
instance to the exact state at the time of deletion, contact
Google Cloud Customer Care within four days.
Backup options
Cloud SQL offers two backup service options to manage your instance's backups:
Enhanced backups :
backups are managed and stored in a centralized backup management project
that leverages the Backup and DR Service, and provides enforced retention,
granular scheduling, and monitoring.
Standard backups :
backups are created, managed, and stored in the same project as your
Cloud SQL instances. This is the existing Cloud SQL
backup offering and is now called standard backups.
You must select a backup option for each instance. For more information about
each backup option and its features, see
Choose your backup option .
Note: If your instance was created before the
enhanced backups launch ,
then your instance is using the standard backups option. To upgrade your
instance to the enhanced backups option, see
Enable enhanced backups .
For new instances, you'll need to select a backup option when you
create the instance .
Backup request types
You can take on-demand, automated, or final backups for your
Cloud SQL instances. The configuration available for these
backups depend on your instance's selected
backup option .
On-demand backups
On-demand backups are backups that can be
created at any time .
These are useful if you are about to perform a risky operation on your database,
or if you need a backup and don't want to wait for the backup window. You can
create on-demand backups for any instance, whether the instance has automatic
backups enabled or not.
Automated backups
Automated backups are taken on a scheduled cadence, such as hourly, daily,
weekly, or monthly, while your instance is running. The scheduled cadence
depends on the
backup option you
choose for your instance and the cadence you define in the backup configuration
for the selected backup option. The backup starts during the backup window.
Automated backup retention
depends on the configured retention policy in the chosen backup option for your
instance. It's recommended that you schedule your backups when your instance has
less activity, if possible.
It's also recommended that you don't manually delete any automated backups
because they're needed to support
point-in-time recovery .
To configure your instance's automated backups, see
Configure automated backups .
Final backup
Final backups let you take a backup of your Cloud SQL instance before
you delete the instance. This is useful to retain the instance data after you
delete the instance. You can use the final backup to either create a new
instance, or to restore to an existing instance. For more information about
accessing and viewing details about your final backup, see
View a list of final backups .
You can set your instance to take a final backup automatically when you
delete your instance by
enabling the final backup
instance setting for your instance. You can also set the
final backup retention period
when you enable final backups for your instance. If you don't enable
final backups for your instance, then you can also take a final
backup when you
delete your instance .
Final backups are only available for primary instances and aren't supported
for replicas. You can also set an
Cloud SQL custom organization policy
to take a final back at instance deletion for all instances in your organization
and set a standard retention period. For more information, see
Example custom organization policies for common use cases .
By default, Cloud SQL retains the final backup for 30 days.
However, you can customize how long Cloud SQL retains the backup.
This can range from 1 day to 365 days for standard backups,
or 1 day to 10 years for enhanced backups.
You can then
restore the instance from the backup
as long as it's available. Final backups are charged similar to other backups
for the number of days retained.
For more information about how to enable final backups for your new
or existing instances using the standard backups option, see
Configure final backups .
For enhanced backups, final backups are managed by the associated
backup plan .
To manage a final backup after your instance is deleted, see
Manage backups for deleted instances .
Backup retention
Backup retention is defined by the backup request type and the backup option you
select for your instance. For automated backups, retention can range from
7 days to 10 years,
depending on your instance's backup option. For on-demand backups,
backups are stored indefinitely until the backup is deleted. For more
information about backup retention related to your instance's
backup option, see
Choose your backup option .
Retain backups after instance deletion
Retained backups are backups that are retained by Cloud SQL after an
instance is deleted. These backups consist of on-demand backups and
automated backups created when the instance was live. When you delete an
instance, these backups become independent of your instance and are stored
at the project level. Retained backups are different from
final backups ,
which are the last backups taken at time of instance deletion.
You can update the description of these backups to make
it easier to manage them in your Google Cloud project. Retained backups can be
restored to a new or existing Cloud SQL instance
at any time.
For these backups, the retention period is defined by the type of backup it is
and can't be changed after the instance is deleted. For standard backups,
on-demand backups are kept indefinitely until
either the backup is manually deleted, or the project containing the backup is
deleted. For enhanced backups, on-demand backups
are kept based on the selected retention rule.
Automated backups are deleted on a rolling basis, one
backup per day, after the instance is deleted. The rolling period is defined
based on the retention settings of the instance prior to deletion, which can
range from 1 day to 10 years, depending on your instance's selected
backup option . For
example, if your instance's automated backup retention setting was set to 7,
then the latest automated backup is deleted 7 days after the instance deletion.
Retained backups can be deleted manually at any time. However, when you delete
a retained backup, the deleted backup can't be recovered.
For standard backups, since instance names can be used after an instance is
deleted in Cloud SQL, retained backups are stored in your
Google Cloud project with a field called instance_deletion_time . This
field lets you identify whether a particular backup belongs to a live or
deleted instance. You can also update the description of a backup to make it
easier to manage them.
For more information about how to enable retained backups for your new
or existing instances using the standard backups option, see
Configure retained backups .
For enhanced backups, retained backups are managed by the associated
backup plan .
To manage a retained backup after your instance is deleted, see
Manage backups for deleted instances .
Recovery backups
Cloud SQL attempts to retain at least one last daily backup of every
active instance, if there are no good backups available as part of the automated
backup policy. You can use this backup for recovery purposes by contacting
Google Cloud Customer Care .
Backup and data integrity checks
Cloud SQL automatically performs background database integrity checks
to identify any potential data integrity issues. The integrity check is done as
an offline process by restoring a sampling of
customer initiated backups or
recovery backups .
Backups for replicas
Backups aren't available for replica instances. Since replica instances are
copies of primary instances, backups are maintained with the primary instance.
If a replica instance is promoted to a standalone instance due to a failover
or switchover, then the instance is enabled for backups and would require its
own backup configuration. Promoted replicas don't inherhit the primary
instance backup configurations and can't access the primary instance's
backups.
Backups versus exports
Backups are managed by Cloud SQL according to retention policies, and are
stored separately from the Cloud SQL instance. Cloud SQL backups
differ from an export uploaded
to Cloud Storage, where you manage the lifecycle. Backups encompass the
entire disk of the instance. Exports can select specific contents.
Backup and restore operations can't be used to upgrade a database to a later
version. You can only restore from a backup to an instance with the same
database version as when the backup was taken.
To upgrade to a later version, perform an
in-place major version upgrade ,
or export and then import your
database to a new Cloud SQL instance.
Backup size
All Cloud SQL backups, except the first one, are incremental. They
contain only data that changed after the previous backup was taken. Your oldest
backup is a similar size to your database, but the sizes of subsequent backups
depend on the rate of change of your data. When the oldest backup is deleted,
the size of the next oldest backup increases to become a full backup and is
adjusted to capture the difference between the backups. Each incremental
backup following is also updated to match the new full backup.
You can
check the size of an individual backup .
The backup size represents the billable size for each backup.
Troubleshooting
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
What's next
Choose a backup option
for your Cloud SQL instance.
Learn more about restoring .
Restore from a backup
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
