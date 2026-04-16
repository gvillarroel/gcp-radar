---
title: "Modify a stream \_|\_ Datastream \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/modify-a-stream
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/modify-a-stream
  title: "Modify a stream \_|\_ Datastream \_|\_ Google Cloud Documentation"
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
Modify a stream
Stay organized with collections
Save and categorize content based on your preferences.
You can modify the following information about a stream:
High-level information, such as the display name and labels for the stream.
Configuration information for the source database and the destination, such as the tables and schemas in the source database that Datastream will either transfer to the destination or will be restricted from transferring into the destination. Datastream uses this configuration information to transfer the correct data from the source database to the destination.
Note: You can't change the source database type for an already created stream. To change the database type, you need to create a new stream. For more information, see Create a stream .
Modify high-level information
Go to the Streams page in the Google Cloud Console.
Go to the Streams page
Click the stream that you want to modify.
On the Stream details page, click EDIT .
Select Edit stream settings from the menu that appears.
Modify the display name or labels for the stream.
For more information about the stream's display name or labels, see Define settings for the stream .
After making your changes, click SAVE .
Modify configuration information about the source database
Go to the Streams page in the Google Cloud Console.
Go to the Streams page
Click the stream that you want to modify.
On the Stream details page, click EDIT .
Select Edit source configuration from the menu that appears.
In the Select objects to include section, use the Objects to include drop-down menu to change the tables and schemas in the source database that Datastream will transfer to the destination.
Optionally, expand the Select objects to exclude node. In the Objects to exclude field, modify the tables and schemas in the source database that you want to restrict Datastream from transferring into the destination. If tables are added to this list, then they're no longer pulled into the destination. However, they're not removed from the destination.
For more information about the Objects to include menu or the Objects to exclude field, see Configure information about the source database for the stream .
Note that for Oracle sources, you can't modify the CDC method. However, you can change the database directories details, if you selected this log file access type.
Optionally, expand the Choose backfill mode for historical data node to modify whether Datastream backfills the destination with current and future data from the source, or streams only changes to this data.
Select the Automatic option to stream all existing data, in addition to changes to the data, from the source into the destination.
If you select this option, then in the Objects excluded from automatic backfill field, you can modify the tables and schemas in the source database that you want to restrict Datastream from backfilling into the destination.
Select the Manual option to stream only changes to the data.
For more information about the Choose backfill mode for historical data node, see Configure information about the source database for the stream .
After making your changes, click SAVE .
Modify configuration information about the destination
Go to the Streams page in the Google Cloud Console.
Go to the Streams page
Click the stream that you want to modify.
On the Stream details page, click EDIT .
Select Edit destination configuration from the menu that appears.
Depending on the destination that you selected, adjust the following settings as required:
BigQuery destinations:
Under Encryption , change the type of encryption that you want to use: Google-managed encryption key or Cloud Key Management Service key.
Under Balance data staleness and BigQuery costs , change the Staleness limit option.
Caution: The current staleness limit configuration is applied only to new BigQuery tables created by Datastream. Your tables might have a different staleness limitation depending on the date that they were created. To make sure that you apply the correct staleness limit to your existing tables, consider recreating the corresponding stream or modify each table using an ALTER TABLE statement .
BigLake Iceberg tables destinations:
Under Encryption , change the type of encryption that you want to use: Google-managed encryption key or Cloud Key Management Service key.
Cloud Storage destinations:
In the Stream path prefix field, modify the folder of the destination into which Datastream will transfer schemas, tables, and data from the source database.
If you change the folder, then all new files will be written to the new folder. Also, for more information about the Stream path prefix field, see Configure information about the destination for the stream .
From the Output format menu:
Choose the format of files written to Cloud Storage. Datastream supports two output formats: Avro and JSON.
If you select the JSON format, then select or clear the Include a Unified Types schema file in the file path and Enable gzip compression check boxes.
For more information about these check boxes, see Configure information about the destination for the stream .
Click SAVE to apply your changes and start your stream . Any modifications that you make to streams that are running are updated by Datastream automatically.
What's next
To learn more about streams, see Stream lifecycle .
To learn how to monitor a stream, see Monitor a stream .
To learn how to view information about your stream, see View a stream .
To learn how to recover a failed stream, see Recover a stream .
To learn how to delete an existing stream, see Delete a stream .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
