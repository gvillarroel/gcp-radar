---
title: "Datastore Admin \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/datastore/docs
source_metadata:
  url: https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console
  title: "Datastore Admin \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Datastore
Send feedback
Datastore Admin
Stay organized with collections
Save and categorize content based on your preferences.
Warning: The features described below are
deprecated . You should
use the managed export and import service instead.
Firestore in Datastore mode previously supported the ability to enable
Datastore Admin, an optional module with bulk delete and backup
features. Datastore Admin was replaced by more reliable alternatives:
The backup feature was replaced by
managed exports and imports .
The bulk delete feature was replaced by the
Bulk Delete Entities template for Dataflow .
Accessing Datastore Admin
If you previously enabled Datastore Admin, you can continue to access
the module by visiting https://ah-builtin-python-bundle-dot- PROJECT_ID .appspot.com/_ah/datastore_admin?app_id= PROJECT_ID , where PROJECT_ID is the ID of your Google Cloud project. If you disable Datastore Admin, you will not be able to
re-enable the module.
Caveats on using Datastore Admin features
For copy, delete, and backups, recent updates might not be considered.
All Datastore Admin operations occur within your application, and thus count against your quota .
We strongly recommend that you disable writes during a backup or restore.
Existing entities with the same keys will be overwritten during a copy/restore
operation. Duplicates are not created if copy/restore operations are performed
multiple times. Copy/restore operations do not delete extra data.
If you use a non-default queue for backup/restore, you can only specify the
target ah-builtin-python-bundle in queue.yaml . You cannot use any other targets.
Database access permissions
By default, Datastore Admin can access a Datastore
database in the same project and does not require Identity and Access Management
permissions for Datastore.
Warning: A user with access to Datastore Admin can use its features
to modify Datastore data regardless of that user's
Identity and Access Management permissions. To remove Datastore Admin from your project,
see Disable admin access .
Backing up data
Warning: The features described below are
deprecated . You should
use the managed export and import service instead.
Follow the steps below to create a backup file for future data restores or for
exporting.
If you haven't already, create a storage bucket for your project.
Optionally, check that the App Engine default service account for the project
has access to the bucket via the
Access Control List .
This may be set already by default and can be overridden, if needed.
Note: Backup, restore, copy, and delete operations are executed within your
application, and thus count against your quota .
(Recommended) Disable Cloud Datastore writes .
Open Datastore Admin
Select the entity kinds that you wish to back up.
Click Backup Entities to display the backup form.
Notice that a backup name is supplied and that it includes a datestamp.
You must change this value if you make more than one backup per day because
a backup is not made if a backup of the same name already exists.
Notice that the default queue is used for the backup job; you can use this
in most cases.
If you use a non-default queue for backup/restore, you can only specify the
target ah-builtin-python-bundle in queue.yaml . You cannot use any other
targets.
Select Google Cloud Storage as the backup storage location.
When you choose Cloud Storage, you are prompted for the bucket name
where the backups are to be stored, in the format [BUCKET_NAME] . You can
optionally specify the bucket name suffixed with a directory structure, such
as [BUCKET_NAME]/backups/foo ): If those folders don't already
exist, they will be created.
Note: you can alternatively preface the bucket name with /gs/ ,
for example, /gs/[BUCKET_NAME]
Start the backup jobs by clicking Backup Entities . Notice that a job
status page is displayed.
Click Back to Datastore Admin to see the backup status.
After the backup is complete, if you disabled Cloud Datastore
writes, re-enable them .
Backup and restore considerations
The backup and restore feature is intended to help you recover from accidental
deletes of data or to enable you to export data. You can back up all entities or
just the selected kinds of entities, and you can restore from one of these
backups when you need to.
Backups are saved to Cloud Storage.
Note that the backup does not contain any indexes. When you restore, the
required indexes are automatically rebuilt using the index definitions you
uploaded with your application.
You can also use backup files to export your data to other Google Cloud
services, such as BigQuery .
Restores do not assign new IDs to entities. Restores use the IDs that existed at
backup-time and overwrite any existing entity with the same ID. During a
restore, the IDs are reserved as the entities are being restored. This should
prevent ID collisions with new entities if writes are enabled while a restore is
running. New entities added since the backup are retained.
You can restore all data from a backup or you can restore specific entity kinds
from the backup. In addition, you can also use this feature to restore a backup
of one application's data to some other application, provided that you use
Cloud Storage for your backups.
Note: The backup process does not include values stored in Blobstore or
Cloud Storage. Also, the Cloud Datastore BlobInfo records that
correspond with Blobstore values are not included in the backup.
Cloud Datastore entity properties of the type BlobKey are backed up,
even though they rely on the corresponding Blobstore values having their
original keys. Cloud Datastore property values of type Blob are
unrelated to the Blobstore, and are included in the backup.
Aborting a backup
If backup jobs are currently running, they appear in a Pending Backups list
in the Cloud Datastore Admin screen.
To stop these running backups:
Open Datastore Admin
In the Pending Backups section, select the backup in the list and click
Abort .
When you abort a backup job, App Engine attempts to delete backup data that has
been saved up to that point. However, in some cases, some files can remain after
the abort. You can locate these files in the location you chose for your backups
in Google Cloud Storage and safely delete them after the abort completes. The
names of such files start with the following pattern:
datastore_backup_[BUCKET_NAME] .
Note: If you abort or delete a backup, App Engine does not delete files from
Google Cloud Storage. You must manually delete backup files from Google Cloud
Storage.
Finding information about a backup
You might want to find out details about a backup, such as which entity kinds
it contains, where it was saved in Google Cloud Storage, and its starting and
ending time. To display this backup information:
Open Datastore Admin
Select one or more backups in the Backups or Pending Backups list.
Click Info to display information for those backups.
Click Back to return to the main Cloud Datastore Admin screen.
Restoring data
To restore from a backup:
(Recommended) Disable Cloud Datastore writes for your
application. It's normally a good idea to do this to avoid conflicts between
the restore and any new data written to Cloud Datastore.
Open Datastore Admin
In the list of available backups, select the backup that you want to restore from.
Click Restore .
In the advisory page that is displayed, notice the list of entities with
checkboxes. By default, all of the entities will be restored. Uncheck the
checkbox next to each entity that you don't want to restore.
Also in the advisory page, notice that the default queue, with its
pre-configured performance settings, is used for the restore job. Change this
to another queue that you have configured differently if you need different
queue performance characteristics, making sure the queue chosen does not have
any target specified in queue.yaml other than ah-builtin-python-bundle .
Start the restore by clicking Restore . Notice that a job status page is
displayed.
Click Back to Datastore Admin to see the status of the restore.
After the restore is complete, if you disabled writes,
re-enable Cloud Datastore writes for your application.
Restoring data to another application
If you back up your data using Google Cloud Storage, you can restore
backups to applications other than the application used to create the backup.
To restore backup data from a source application to a target application:
Create an Identity and Access Management (IAM) policy on the source
application's storage bucket with the following permission:
Principal : [PROJECT_ID]@appspot.gserviceaccount.com
Roles : Storage Legacy Bucket Reader and Storage Legacy Object
Reader
where [PROJECT_ID] is the project ID of the target application.
Make a new backup in the source application.
Note: The permissions set in the previous steps are not retroactive to
existing backups, so the target application is not able to access those
earlier backups. The target application can access only backups made after
it was given permissions.
(Recommended) Disable Cloud Datastore writes for your target
application to avoid conflicts between the restored data and any new data
written to Cloud Datastore.
Open Datastore Admin
In the textbox next to the button labelled Import Backup Information
specify the source application's bucket containing the backup, in the format
/gs/[BUCKET_NAME] .
Alternatively, supply the file handle for a specific backup: To view the
file handle for a backup, open the Admin page for the source
application, select the backup, and click Info . You should see the file
handle next to the label Handle .
Click Import Backup Information .
The resulting selection page shows the available backups for the bucket you
specified, unless you specified a backup by its handle. Select the desired
backup and click one of the following:
Add to backup list if you want this backup to be retained
in the list of available backups for your application.
Restore from backup if you want to restore from this backup
but do not want the backup displayed in the list of available backups
for your application.
In the advisory page that is displayed, notice the list of entities with
checkboxes. By default, all of the entities will be restored. Uncheck the
checkbox next to each entity that you don't want to restore.
Also in the advisory page, notice that the
default queue, with its pre-configured performance settings, is used for the
restore job. Change this to another queue that you have configured
differently if you need different queue performance characteristics.
Start the restore by clicking Restore . Notice that a job status page is
displayed.
After the restore is complete, if you disabled Cloud Datastore
writes, re-enable them .
Viewing resource usage
Very frequent backups often lead to higher costs. When you run a
Cloud Datastore Admin job, you are actually running an underlying
MapReduce job. MapReduce jobs cause frontend instance hours to increase on top
of Storage operations and Storage usage.
To view your resource usage:
Visit the Google Cloud console App Engine page.
Go to the App Engine page
Use the pulldown menus at the top of the page to select the default service
and the ah-builtin-python-bundle version.
Enabling or disabling database writes
It's normally a good idea to disable writes prior to a restore. This helps avoid
conflicts between the restore and any new data written to
your database.
Disabling writes prevents entities from being changed by
the Datastore Viewer.
applications that use the Datastore API.
Note: The Datastore API does not allow forcing writes when writes
are disabled. However, App Engine client libraries allow forcing writes even if
writes are disabled. So an application written with the App Engine client
libraries could modify your database instance while writes are
disabled.
To enable or disable writes:
Go to the Admin page.
Go to the Admin page
Click Enable writes to enable writes, or
Disable writes to disable writes. The button text varies, depending on
the state of your project.
Viewing Datastore Admin resource usage
When you run a Datastore Admin job, you are actually running an
underlying MapReduce job. MapReduce jobs
cause frontend instance hours to increase on top of Storage operations and
Storage usage.
To view your resource usage:
Visit the Google Cloud console App Engine page.
Go to the App Engine page
Use the pulldown menus at the top of the page to select the default service
and the ah-builtin-python-bundle version.
Disable Datastore Admin access
Run the following command, replacing PROJECT_ID with the ID of your Google Cloud project:
curl -X DELETE -H "Authorization: Bearer $(gcloud auth print-access-token)" \
https://appengine.googleapis.com/v1/apps/ PROJECT_ID /services/default/versions/ah-builtin-python-bundle
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
