---
title: "Manage backfill for the objects of a stream \_|\_ Datastream \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/manage-backfill-for-the-objects-of-a-stream
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/manage-backfill-for-the-objects-of-a-stream
  title: "Manage backfill for the objects of a stream \_|\_ Datastream \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Datastream
Guides
Send feedback
Manage backfill for the objects of a stream
Stay organized with collections
Save and categorize content based on your preferences.
A stream in Datastream can backfill historical data, as well as stream ongoing changes into a destination. As part of creating a stream, you configured information about the source database for the stream .
If you selected the Backfill historical data checkbox, then Datastream will stream all existing data, in addition to changes to the data, from the source into the destination.
If you didn't select this checkbox, then Datastream will stream only changes to the data. To have Datastream stream a snapshot of all existing data from the source to the destination, you must initiate backfill for the objects that contain this data. The objects are in the form of database schemas, tables, and columns.
Another reason for initiating backfill for an object is if data is out of sync between the source and the destination. For example, a user can delete data in the destination inadvertently, and the data is now lost. In this case, initiating backfill for the object serves as a "reset mechanism" because all data is streamed into the destination in one shot. As a result, the data is synced between the source and the destination.
After initiating backfill for an object, you can stop backfill for it. In the preceding example, the user modifies the database schema, and the schema or data is corrupted. You don't want this schema or data to be streamed into the destination, and so you stop backfill for the object.
You can also stop backfill for objects for load balancing purposes. Datastream can run multiple backfills in parallel. This may put an additional load on the source. If the load is significant, stop backfill for the objects, and then initiate backfill for them, one by one.
Object statuses
The various statuses in the lifecycle of initiating and stopping backfill for an object include:
No status (represented in the UI as - ): Reasons for an object receiving
this status include:
The stream hasn't been started.
The Backfill historical data checkbox wasn't selected (so the
backfill is defined as manual).
The object is excluded explicitly from being backfilled automatically.
The stream is configured to include future tables. If this happens, then
when new tables are added to the source, there's no automatic backfill
task created for them (because new tables typically don't have any
"historical" data to backfill).
Note: For more information, see
Configure information about the source database for the stream .
Pending : backfill hasn't yet started for the object.
Active : backfill is in progress for the object.
Completed : backfill is completed for the object.
Stopped : backfill is stopped for the object. If backfill is initiated
again for the object, then Datastream will stream all existing data
associated with the object from the source into the destination.
Failed : backfill failed for the object and the backfill must be initiated
again.
Initiate backfill
Go to the Streams page in the Google Cloud Console.
Go to the Streams page
Click the stream that contains objects for which you want to initiate backfill.
Click the OBJECTS tab.
Select the checkbox for each object for which you want to initiate backfill.
Click INITIATE BACKFILL .
If an object has a status of Pending or Active , then you can't initiate backfill for the object.
If you selected only one object, then in the dialog, click INITIATE OBJECT BACKFILL . Otherwise, if you selected multiple objects, then click INITIATE OBJECT BACKFILLS .
Datastream will start backfill for the objects that you selected, and
the status of each object will change from Pending to Active to
Completed . When an object has a status of Completed , this means that
Datastream has read all the data for the object, but the data might
still be loading to the destination.
If an object has a status of Failed , then backfill failed for the object, and you must initiate the backfill again.
Stop backfill
Go to the Streams page in the Google Cloud Console.
Go to the Streams page
Click the stream that contains objects for which you want to stop backfill.
Click the OBJECTS tab.
Select the checkbox for each object for which you want to stop backfill.
Click STOP BACKFILL .
If an object has a status of Completed , Stopped , or Failed , then you can't stop backfill for the object.
If you selected only one object, then in the dialog, click STOP OBJECT BACKFILL . Otherwise, if you selected multiple objects, then click STOP OBJECT BACKFILLS .
Datastream will stop backfill for the objects that you selected, and the status of each object will change to Stopped .
When an object has this status, backfill is stopped for the object. If backfill is initiated again for the object, then Datastream will stream all existing data associated with the object from the source into the destination.
You can also use the OBJECTS tab to view additional information about the objects of a stream. This information includes:
The status of the objects.
How many events Datastream processed and loaded into the destination for an object in the last 7 days.
The total size (in GB) of all events that Datastream processed and loaded into the destination for an object in the last 30 days.
Details about the table columns of the database schemas that are streamed from the source into the destination.
What's next
To learn more about streams, see Stream lifecycle .
To learn how to view information about your stream, see View a stream .
To learn how to modify a stream, see Modify a stream .
To learn how to monitor a stream, see Monitor a stream .
To learn how to recover a failed stream, see Recover a stream .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
