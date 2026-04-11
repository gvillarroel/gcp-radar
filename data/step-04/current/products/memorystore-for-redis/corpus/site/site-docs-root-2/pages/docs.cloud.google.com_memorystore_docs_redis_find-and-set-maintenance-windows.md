---
title: "Find and set maintenance windows \_|\_ Memorystore for Redis \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows
  title: "Find and set maintenance windows \_|\_ Memorystore for Redis \_|\_ Google\
    \ Cloud Documentation"
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
Find and set maintenance windows
Stay organized with collections
Save and categorize content based on your preferences.
This page provides instructions how to find scheduled maintenance, set
maintenance windows, reschedule planned maintenance, and more. For an overview
of maintenance updates and maintenance windows, see Maintenance policy .
Set a preferred window for maintenance on an instance
Console
Go to the Memorystore for Redis page in the Google Cloud console.
Memorystore for Redis
Click the instance ID of the instance you want to set a maintenance window
for.
Click Edit .
Under the Maintenance section, select the desired day and time for the
maintenance window. The time is set in your local time zone.
Click Save .
gcloud
Run the following command to set a maintenance window for a Redis instance:
gcloud redis instances update INSTANCE_ID --region= REGION --maintenance-window-day= DAY --maintenance-window-hour= HOUR
Where:
INSTANCE_ID is the ID of the instance
REGION is the region where your instance is located
DAY is the day you want maintenance to occur. Acceptable values
are: MONDAY , TUESDAY , WEDNESDAY , THURSDAY , FRIDAY , SATURDAY , SUNDAY
HOUR is the hour of the day in UTC time for when the maintenance
window starts. Acceptable values are 0 - 23
For reference information, see gcloud redis instances update
Opt in to maintenance notifications
Note: Even if you turn on maintenance notifications, you do not receive
notifications unless you set a maintenance window
for that instance.
To turn on maintenance notifications:
Go to the Communication page in the Google Cloud console:
Communication
Click the Product Notifications tab.
Select your project from the dropdown menu.
In the row for Memorystore, toggle the email button to ON .
A maintenance notification email uses the title, "Upcoming maintenance for your
Cloud Memorystore instance [your-instance-name]" . Each email address that
needs to receive notifications must opt in separately.
Maintenance notifications are set at the project level rather than on instances.
Email notifications are sent to the email address associated with your Google
account. It is not possible to configure a custom email alias (for instance, a
team email alias).
Find scheduled maintenance
If maintenance has been scheduled for your instance, you can view it using the
following instructions:
Console
Go to the Memorystore for Redis page in the Google Cloud console.
Memorystore for Redis
Click the instance ID of the instance that you want to view scheduled
maintenance for.
Under the Maintenance section, you can view the date and time of any
scheduled maintenance updates.
gcloud
gcloud redis instances describe INSTANCE-ID --region= REGION
where:
INSTANCE_ID is the ID of the instance
REGION is the region where your instance is located
The output for scheduled maintenance is as follows:
maintenancePolicy:
createTime: 'TIME_STAMP'
updateTime: 'TIME_STAMP'
maintenanceWindow:
- day: DAY
duration: 60 minutes
hour: HOUR
maintenanceSchedule:
endTime: 'TIME_STAMP'
startTime: 'TIME_STAMP'
Where:
maintenancePolicy shows information on the creation time of your
preferred maintenance policy and the last time the policy was updated.
createTime is when the maintenance policy is first created.
updateTime is when the maintenance policy was last updated.
DAY indicates the day of the week maintenance occurs.
HOUR indicates the hour in UTC time that maintenance begins.
startTime indicates the specific start time for a maintenance update
that is scheduled for your instance.
endTime indicates the specific ending time for a maintenance update that
is scheduled for your instance.
TIME_STAMP uses the RFC 3339 format.
Reschedule planned maintenance
Caution: if you programmatically reschedule maintenance in bulk requests (not
natively supported by Memorystore for Redis), limit batch reschedule sizes to
100 instances per batch. For more information, see Rescheduling maintenance .
To reschedule maintenance, see the instructions below:
Console
Note: You can only defer a maintenance update for up to one week from when a
maintenance update is originally scheduled for your instance.
Go to the Memorystore for Redis page in the Google Cloud console.
Memorystore for Redis
Click the instance ID of the instance you want to reschedule maintenance
for.
Under the Maintenance section, click RESCHEDULE .
You can only reschedule maintenance if you have a scheduled update ,
for your instance.
Choose between Update now , Defer to next scheduled window , and
Custom day and time . For more information, see the overview of rescheduling maintenance .
If you want to update your instance immediately, select Update now
and click Update .
If you want to delay the scheduled maintenance by one week, select
Defer to the next scheduled window and click Reschedule .
If you want to designate a specific time, select Custom day and time ,
choose the new time, and click Reschedule .
gcloud
Note: You can only defer a maintenance update for up to one week from when a
maintenance update is originally scheduled for your instance.
gcloud redis instances reschedule-maintenance INSTANCE_ID --region= REGION --reschedule-type= RESCHEDULE_TYPE [--schedule-time= RESHEDULE_TIME ]
where:
INSTANCE_ID is the ID of the instance
REGION is the region where your instance is located
RESCHEDULE_TYPE is the type of rescheduled update. Available values are:
IMMEDIATE : Starts the maintenance update immediately
NEXT_AVAILABLE_WINDOW : Defers maintenance until the next maintenance
window. The next window is one week from the window in which maintenance
was originally scheduled
SPECIFIC_TIME : Allows you to designate a specific time for the update.
The rescheduled time must be no more than seven days from time of the
original maintenance window
RESHEDULE_TIME You can only specify this value if you set --reschedule-type to SPECIFIC TIME . This value uses the ISO 1801 format. For example, 2020-01-16T16:56:00.000Z . The time is set in UTC time.
For reference information, see gcloud redis instances reschedule-maintenance .
What's next
View the permissions
required to manage maintenance windows for your Redis instance.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
