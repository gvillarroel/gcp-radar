---
title: "Plugin drivers \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/data-fusion/docs/how-to/using-jdbc-drivers
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/data-fusion/docs
source_metadata:
  url: https://docs.cloud.google.com/data-fusion/docs/how-to/using-jdbc-drivers
  title: "Plugin drivers \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Data Fusion
Guides
Send feedback
Plugin drivers
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to use Java Database Connectivity (JDBC) drivers with
Cloud Data Fusion pipelines.
Some plugins in Cloud Data Fusion require a JDBC driver to be added to the
namespace. For example, before you can run a pipeline with a MySQL batch source
plugin, you must add the supported MySQL driver to the namespace. You can add
JDBC drivers to a namespace from the Cloud Data Fusion Hub, the Namespace
admin page, or the Add entity page. You can also delete unneeded JDBC
drivers from the Namespace admin page.
Add a JDBC driver
Hub
To add a JDBC driver from the Cloud Data Fusion Hub, follow these steps:
In the Cloud Data Fusion Studio, click Hub >
Drivers , and click a driver.
Optional: To get information about where to download the JAR file, click
Download .
Click Deploy , upload the JAR file, and click Next .
Verify the class name and version of the driver.
Click Finish .
Cloud Data Fusion adds the driver to the namespace.
Namespace admin page
To add a JDBC driver from the Namespace administrator page, follow these
steps:
Download a driver. For example, to download the JDBC driver for MySQL, go
to dev.mysql.com and download the JAR file.
In Cloud Data Fusion, click
menu
Menu > Namespace Admin .
On the Namespace page, click Drivers .
Upload your JAR file and click Next .
Enter the name and class of the driver.
Click Finish .
The driver is added to the namespace.
Add entity page
To add a JDBC driver from the Add entity page, follow these steps:
Download a driver. For example, to download the JDBC driver for MySQL, go
to dev.mysql.com and download the JAR file.
On the Pipeline page, click the green plus sign.
On the Add entity page that appears, go to Driver and click
Upload .
Upload the JAR file and click Next .
Enter the name and class of the driver.
Click Finish .
The driver is added to the namespace.
Use a JDBC driver
On the Pipeline page in the Cloud Data Fusion Studio, choose a
plugin from the Source or Sink list. The node for the source or sink
appears in your pipeline.
Hold the pointer over the node in the pipeline and click Properties .
In the Reference name field, enter the name you defined for the driver in
the preceding Add a JDBC driver step.
Click close Close .
Delete a JDBC driver
To delete a JDBC driver from a namespace, follow these steps:
In Cloud Data Fusion, click menu
Menu > Namespace Admin .
On the Namespace page, click Drivers .
Choose a driver and click more_vert
More .
Click Delete .
What's next
Learn about configuring plugins .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
