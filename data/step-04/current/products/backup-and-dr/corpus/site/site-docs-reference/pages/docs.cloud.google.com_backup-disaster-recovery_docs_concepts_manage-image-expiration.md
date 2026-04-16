---
title: "Manage expiration of backups \_|\_ Backup and DR \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/manage-image-expiration
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/manage-image-expiration
  title: "Manage expiration of backups \_|\_ Backup and DR \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Backup and DR
Guides
Send feedback
Manage expiration of backups
Stay organized with collections
Save and categorize content based on your preferences.
You can force the expiration of an image earlier than its scheduled date
and time in order to gain storage space and potentially reduce storage
costs.
You can manage image expiration in the following ways:
From the Application page to expire all images in an application.
From the Table view to expire one or more images in an application.
From the Timeline view to expire only the selected image.
Image expiration limitations
When you are configuring for image expiration, consider the following
limitations:
Certain image types cannot be expired. If you select an image that
belong to any of the types listed, you may not see the
Manage Expiration option. You cannot expire images that are of type:
failover
prep-mount
streamsnap
syncback
liveclone
Images that use the Enforced Retention advanced policy setting to set
an immutability date to a later date cannot be configured for expiration
before the specified immutability period is over.
Note: The enforced retention advanced policy setting is not compatible with
application protection that points to a backup vault. When
a backup vault is the storage target, the backup vault
determines the enforced retention period.
For more information on immutability and enforced retention, see
Configuring Advanced Settings: Policy Settings Override .
Managing image expiration in the applications page
Use the following instructions to manage image expiration for all images in an
application:
Click the App Manager tab and select Applications from the drop-down
menu.
Right-click the application that has the images you want to expire and
select Manage Expiration .
Optional. Disable the Enable Scheduled Expiration option. When you
disable this option, images that would have expired based on the configured
schedule can no longer expire.
Optional: Disable the Enable Log Expiration option. When you disable this
option, a database log data that would have expired based on the configured
retention can no longer expire.
Select from the following expiration options:
Expire all images now : When the scheduler runs next, expiration jobs
start for these images.
Set new expiration date : lets you select a new expiration date
and time.
Extend retention by : lets you extend the expiration by the
number of days or weeks or months or years you specify.
Shorten retention by : lets you shorten the expiration by the number
of days or weeks or months or years you specify.
Set all existing images to never expire : configure the images to never
expire. By default, images that are set to never expire, will have an
expiration date set to 2100-01-01. The Copy Data List view has an
Expiration filter option Never that shows images configured to never
expire. For information on the Copy Data List view, see
Accessing Copy Data List View of an Image .
Click Apply .
Manage image expiration from table view
Use the following instructions to manage image expiration of one or more images
from the table view:
Click the App Manager tab and select Applications from the drop-down
menu. The Applications page opens.
Right-click the application that has the image(s) you want to expire and
select Access . The Timeline view opens.
Select the Table option. The Images page opens listing captured
images in the table view.
Click one or more images, and then select Manage Expiration from the
lower right corner of the page. Alternately, right-click the application and
select Manage Expiration . The Manage Expirations dialog opens.
Select from the following expiration options:
Expire Now : when the scheduler runs next, expiration jobs start for
these images.
Set new expiration date : lets you select a new expiration date and
time.
Extend retention by : (default option) lets you extend the
expiration by the number of days, weeks, months, or years you specify.
Shorten retention by : lets you shorten the expiration by the number
of days, weeks, months, or years you specify.
When specifying a shortened retention period, the new expiration date
for some images may actually be a date in the past. In this situation,
the dialog will list all images that will have an expiration date set
in the past along with a warning that these images will expire immediately.
Set to never expire : configures the images to never expire. By default, images
that are set to never expire will have an expiration date set to 2100-01-01.
The Copy Data List view has an Expiration filter option Never
that shows images configured to never expire. For information on the
Copy Data List view, see the Accessing Copy Data List View of an Image .
Select one of the following Log retention options. This option displays
only when the selected backup image has associated logs.
Do not change log retention : select this option if you don't want to
change log retention period. By default, this option is selected.
Linked to database image : select this option to retain database logs
until the database image expires and the logs are past the configured log
retention period.
Independent from database image : select this option to retain all
database logs for the selected database images, regardless of when they expire.
Click Apply .
Manage image expiration in the timeline view of the access page
Use the following instructions to manage expiration of a specific image from
the timeline ramp view:
Click the App Manager tab and select Applications from the drop-down
menu. The Applications page opens.
Right-click the application that has the image(s) you want to expire and
select Access . The Access page opens listing captured images in the
Timeline view.
Select the image you want to manage expiration for, then select
Manage Expiration from the menu options. The Manage Expiration page opens.
Select from the following expiration options:
Expire images now : forces the expiration job to run at that time
and expire the image.
Set new expiration date : lets you select a new expiration
date and time.
Extend retention by : (default option) lets you extend
the expiration by the number of days or weeks or months or years you
specify.
Shorten retention by : lets you shorten the expiration
by the number of days or weeks or months or years you specify.
Set existing images to never expire : configure the images to never
expire. By default, images that are set to never expire will have an
expiration date set to 2100-01-01. The Copy Data List view has an
Expiration filter option "Never" that shows images configured to
never expire. For information on the Copy Data List view, see
Accessing Copy Data List View of an Image .
Do not change expiration date : Select this option if you don't want to
change the expiration date for a backup image of a database. This option
is displayed only when the selected backup image has associated database logs.
Select one of the following Log retention options. This option displays only when the selected backup image has associated logs.
Independent from database image (default): select this option to retain all database logs for the selected database images, regardless of when they expire.
Linked to database image : select this option to retain database logs until the database image expires and the logs are past the configured log retention period. If a dependency between the image and its log images has been established, this option is selected by default.
Click Apply .
Force expiration of an active image
To force the expiration of an active image:
Click the App Manager tab and select Applications from
the drop-down menu. The Applications page opens.
Select the application or VM that contains the captured image that
you want to expire, then choose Access from the drop-down list
at the bottom right corner of the Applications page. The Access page
opens listing captured images in the Timeline ramp view.
Image types that support expiration include Snapshot,
Remote Snapshot (StreamSnap images), and OnVault.
For more information about the Timeline view,
see Accessing the Timeline View of an Image for details.
Select the image that you want to expire, then select
Expire from the drop-down list. The Expire page opens.
Click Submit to expire the image.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
