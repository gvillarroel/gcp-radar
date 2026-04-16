---
title: "Learn about Database Center using Gemini \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/database-center/docs/learn-database-products-using-gemini
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/database-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/database-center/docs/learn-database-products-using-gemini
  title: "Learn about Database Center using Gemini \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Database Center
Guides
Send feedback
Learn about Database Center using Gemini
Stay organized with collections
Save and categorize content based on your preferences.
You can learn about Google Cloud database products by entering prompts into
Gemini at the Google Cloud project or folder level. For example,
you can learn about the following:
Database Center concepts. For example, you can prompt
Gemini to provide guidance about how
Database Center measures your database fleet health.
Database Center health issues. For example, you can
prompt Gemini to explain why it's an issue that your
database has public IP enabled.
The following are example prompts to help you learn general information about
Database Center:
"How does Database Center measure my database fleet health?"
"What data sources does Database Center use?"
"What does it mean for a database resource to be failover protected?"
Before you begin
Ensure that Database Center is set up for your organization .
Set up Gemini chat at the Google Cloud project level, the folder
level, or both.
Project level
To use Gemini chat at the Google Cloud project level,
set up Gemini Cloud Assist for a project .
Folder level
To use Gemini chat at the folder level,
set up Gemini Cloud Assist for a folder .
Use Gemini to learn about fleet health issues
As an early-stage technology, Gemini for Google Cloud
products can generate output that seems plausible but is factually incorrect. We recommend that you
validate all output from Gemini for Google Cloud products before you use it.
For more information, see
Gemini for Google Cloud and responsible AI .
You can use Gemini Cloud Assist to track health issues in
Database Center, and
Gemini chat
to learn more about your database fleet and inventory.
Use Gemini chat
To use Gemini chat to learn more about database fleet health issues
and Database Center, follow these steps:
In the Google Cloud console, go to the Database Center page.
Database Center
To open Gemini, click spark Gemini .
Click Start chatting .
In the Gemini chat enter a prompt, for example, What is a
database fleet?
To send the prompt, click send Send . Gemini returns
a response similar to the following:
A database fleet consists of all the provisioned database resources across all Google Cloud database products that your organization uses. Database resources are the clusters, instances, and virtual machines that power your workloads. Database Center supports Cloud SQL for MySQL, Cloud SQL for PostgreSQL, and AlloyDB.
Use Gemini Cloud Assist
Use Gemini Cloud Assist to detect and publish intelligent
performance insights and recommendations at the fleet level for your
organization. Gemini Cloud Assist lets you investigate select
scenarios and performance issues with granular metrics using system insights and
query insights integration. Gemini Cloud Assist also provides
cost optimization recommendations.
The following is a list of Database Center recommendations
provided by Gemini Cloud Assist.
Performance insights and recommendations
The following performance insights and recommendations for certain database
products are detected for Database Center by
Gemini Cloud Assist:
Insight or recommendation
Database products
Inefficient queries and index advisor to enhance query performance
Cloud SQL, AlloyDB for PostgreSQL
Cost recommendations
The following are the cost recommendations detected for
Database Center by Gemini Cloud Assist:
Cost recommendation
Recommendation details
Database products
Over provisioned resource
Checks if a database resource had low CPU
and memory utilization during the past 30 days
Cloud SQL
Idle resource
Checks if a database resource had a low level of
activity during the past 30 days
Cloud SQL
What's next
Analyze database fleet health using Gemini .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
