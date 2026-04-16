---
title: "Manage quota rules \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-quota-rules
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/netapp/volumes/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-quota-rules
  title: "Manage quota rules \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
NetApp Volumes
Guides
Send feedback
Manage quota rules
Stay organized with collections
Save and categorize content based on your preferences.
This page provides instructions for how to manage your quota rules.
Quota rules enable you to limit the storage space within a volume for specific
users and groups. For more information, see Volume user and group quotas .
For more information about managing quotas in ONTAP-mode, see
Use quotas to restrict or track resource usage . For more information about
how to submit ONTAP commands to the storage pool, see ONTAP-mode .
For more information about instructions to manage your quota rules, see the
following:
Create a quota rule
Edit a quota rule
Delete a quota rule
Create a quota rule
The following sections provide instructions for how to
Create an individual user or group quota rule ,
Create a default user quota rule ,
and Create a default group quota rule .
Create an individual user or group quota rule
Use the following instructions to create an individual user or group quota rule
using the Google Cloud console or Google Cloud CLI.
Console
Go to the NetApp Volumes page in the Google Cloud console.
Go to NetApp Volumes
Under Storage , click Volumes .
In the Volumes page, select the volume you want to add a quota rule to.
Click the Quota rules tab.
Click Create quota rule .
The Create a quota rule page appears. Under Quota rule details ,
complete the following steps:
Enter a name for the quota rule in the Name field. The name must be
unique for each volume.
Optional: enter a description for the quota rule in the Description
field.
Select the quota rule type.
Individual user quota
Individual group quota
Specify the target UID, or SID, or GID for the user or group in the
Target field.
Enter the usage limit for users or groups in MiB in the Limit field.
Optional: under the Labels section, click Add label to enter
relevant labels for your quota rule.
Click Create .
The Quota rules tab displays your new quota rule.
gcloud
Create an individual user or group quota rule:
gcloud netapp volumes quota-rules create RULE_NAME \
--volume = VOLUME_NAME \
--project = PROJECT_ID \
--location = LOCATION \
--type = RULE_TYPE \
--target = TARGET_ID \
--disk-limit-mib = LIMIT
Replace the following information:
RULE_NAME : the name of the rule.
VOLUME_NAME : the name of the volume.
PROJECT_ID : the name of the project the volume is
in.
LOCATION : the location of the volume.
RULE_TYPE : the quota rule type:
INDIVIDUAL_USER_QUOTA or INDIVIDUAL_GROUP_QUOTA.
TARGET_ID : the UID, or SID, or GID number.
LIMIT : the usage limit for users or groups in MiB.
For more information about additional optional flags, see
see Google Cloud SDK documentation on quota-rules .
Create a default user quota rule
Use the following instructions to create a default user quota rule using the
Google Cloud console or Google Cloud CLI.
Console
Go to the NetApp Volumes page in the Google Cloud console.
Go to NetApp Volumes
Under Storage , click Volumes .
In the Volumes page, select the volume you want to add a quota rule to.
Click the Quota rules tab.
In the Default user quota pane, click Create quota rule .
The Create a default user quota rule page appears. Under
Quota rule details , complete the following steps:
Enter a name for the quota rule in the Name field. The name must be
unique for each volume.
Optional: enter a description for the quota rule in the Description
field.
Enter the usage limit for users in MiB in the Limit field.
Optional: under the Labels section, click Add label to enter
relevant labels for your quota rule.
Click Create .
The Default user quota pane displays your new quota rule.
gcloud
Create a default user quota rule:
gcloud netapp volumes quota-rules create RULE_NAME \
--volume = VOLUME_NAME \
--project = PROJECT_ID \
--location = LOCATION \
--type = RULE_TYPE \
--disk-limit-mib = LIMIT
Replace the following information:
RULE_NAME : the name of the rule.
VOLUME_NAME : the name of the volume.
PROJECT_ID : the name of the project the volume is
in.
LOCATION : the location of the volume.
RULE_TYPE : the quota rule type:
DEFAULT_USER_QUOTA.
LIMIT : the usage limit for users in MiB.
For more information about additional optional flags, see
see Google Cloud SDK documentation on quota-rules .
Create a default group quota rule
Use the following instructions to create a default group quota rule using the
Google Cloud console or Google Cloud CLI.
Console
Go to the NetApp Volumes page in the Google Cloud console.
Go to NetApp Volumes
Under Storage , click Volumes .
In the Volumes page, select the volume you want to add a quota rule to.
Click the Quota rules tab.
In the Default group quota pane, click Create quota rule .
The Create a default group quota rule page appears. Under
Quota rule details , complete the following steps:
Enter a name for the quota rule in the Name field. The name must be
unique for each volume.
Optional: enter a description for the quota rule in the Description
field.
Enter the usage limit for groups in MiB in the Limit field.
Optional: under the Labels section, click Add label to enter
relevant labels for your quota rule.
Click Create .
The Default group quota pane displays your new quota rule.
gcloud
Create a default group quota rule:
gcloud netapp volumes quota-rules create RULE_NAME \
--volume = VOLUME_NAME \
--project = PROJECT_ID \
--location = LOCATION \
--type = RULE_TYPE \
--disk-limit-mib = LIMIT
Replace the following information:
RULE_NAME : the name of the rule.
VOLUME_NAME : the name of the volume.
PROJECT_ID : the name of the project the volume is
in.
LOCATION : the location of the volume.
RULE_TYPE : the quota rule type:
DEFAULT_GROUP_QUOTA.
LIMIT : the usage limit for users in MiB.
For more information about additional optional flags, see
see Google Cloud SDK documentation on quota-rules .
Edit a quota rule
The following sections provide instructions for how to
Edit an individual user or group quota rule
and Edit a default user or group quota rule .
Edit an individual user or group quota rule
Use the following instructions to edit an individual user or group quota rule
using the Google Cloud console or Google Cloud CLI.
Console
Go to the NetApp Volumes page in the Google Cloud console.
Go to NetApp Volumes
Under Storage , click Volumes .
In the Volumes page, select the volume you want to edit a quota rule
for.
Click the Quota rules tab.
From the list of quota rules, select the quota rule you want to edit.
Click more_vert Show more icon on
the quota rule and click Edit .
Make the required changes to the quota rule.
Click Save .
gcloud
Update an individual user or group quota rule:
gcloud netapp volumes quota-rules update RULE_NAME \
--volume = VOLUME_NAME \
--project = PROJECT_ID \
--location = LOCATION \
--disk-limit-mib = LIMIT
Replace the following information:
RULE_NAME : the name of the rule.
VOLUME_NAME : the name of the volume.
PROJECT_ID : the name of the project the volume is
in.
LOCATION : the location of the volume.
LIMIT : the usage limit for users or groups in MiB.
For more information about additional optional flags, see
see Google Cloud SDK documentation on quota-rules .
Edit a default user or group quota rule
Use the following instructions to edit a default user or group quota rule using
the Google Cloud console or Google Cloud CLI.
Console
Go to the NetApp Volumes page in the Google Cloud console.
Go to NetApp Volumes
Under Storage , click Volumes .
In the Volumes page, select the volume you want to edit a quota rule
for.
Click the Quota rules tab.
Click more_vert Show more icon next
to the Default user quota or the Default group quota pane and
click Edit .
Make the required changes to the quota rule.
Click Save .
gcloud
Update a default user or group quota rule:
gcloud netapp volumes quota-rules update RULE_NAME \
--volume = VOLUME_NAME \
--project = PROJECT_ID \
--location = LOCATION \
--disk-limit-mib = LIMIT
Replace the following information:
RULE_NAME : the name of the rule.
VOLUME_NAME : the name of the volume.
PROJECT_ID : the name of the project the volume is
in.
LOCATION : the location of the volume.
LIMIT : the usage limit for users or groups in MiB.
For more information about additional optional flags, see
see Google Cloud SDK documentation on quota-rules .
Delete a quota rule
The following sections provide instructions for how to
Delete an individual user or group quota rule
and Delete a default user or group quota rule .
Delete an individual user or group quota rule
Use the following instructions to delete an individual user or group quota rule
using the Google Cloud console or Google Cloud CLI.
Console
Go to the NetApp Volumes page in the Google Cloud console.
Go to NetApp Volumes
Under Storage , click Volumes .
In the Volumes page, select the volume you want to delete a quota rule
from.
Click the Quota rules tab.
From the list of quota rules, select the quota rule you want to delete.
Click more_vert Show more icon on
the quota rule and click Delete .
A confirmation dialog appears. Read through the warnings.
Enter the name of the quota rule in the Quota rule name field.
Click Delete quota rule .
gcloud
Delete an individual user or group quota rule:
gcloud netapp volumes quota-rules delete RULE_NAME \
--volume = VOLUME_NAME \
--project = PROJECT_ID \
--location = LOCATION
Replace the following information:
RULE_NAME : the name of the rule.
VOLUME_NAME : the name of the volume.
PROJECT_ID : the name of the project the volume is
in.
LOCATION : the location of the volume.
For more information about additional optional flags, see
see Google Cloud SDK documentation on quota-rules .
Delete a default user or group quota rule
Use the following instructions to delete a default user or group quota rule
using the Google Cloud console or Google Cloud CLI.
Console
Go to the NetApp Volumes page in the Google Cloud console.
Go to NetApp Volumes
Under Storage , click Volumes .
In the Volumes page, select the volume you want to delete a quota rule
from.
Click the Quota rules tab.
From the list of quota rules, select the quota rule you want to delete.
Click more_vert Show more icon next
to the Default user quota or the Default group quota pane and
click Delete .
A confirmation dialog appears. Read through the warnings.
Enter the name of the quota rule in the Quota rule name field.
Click Delete quota rule .
gcloud
Delete a default user or group quota rule:
gcloud netapp volumes quota-rules delete RULE_NAME \
--volume = VOLUME_NAME \
--project = PROJECT_ID \
--location = LOCATION
Replace the following information:
RULE_NAME : the name of the rule.
VOLUME_NAME : the name of the volume.
PROJECT_ID : the name of the project the volume is
in.
LOCATION : the location of the volume.
For more information about additional optional flags, see
see Google Cloud SDK documentation on quota-rules .
What's next
Manage auto-tiering .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
