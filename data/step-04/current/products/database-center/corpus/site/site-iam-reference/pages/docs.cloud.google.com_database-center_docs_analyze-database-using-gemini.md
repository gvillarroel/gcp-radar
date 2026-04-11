---
title: "Analyze database fleet health using Gemini \_|\_ Database Center \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/database-center/docs/analyze-database-using-gemini
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/database-center/docs/set-up-database-center
source_metadata:
  url: https://docs.cloud.google.com/database-center/docs/analyze-database-using-gemini
  title: "Analyze database fleet health using Gemini \_|\_ Database Center \_|\_ Google\
    \ Cloud Documentation"
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
Analyze database fleet health using Gemini
Stay organized with collections
Save and categorize content based on your preferences.
You can use Database Center to learn more about your database
fleet health by prompting Gemini to answer questions about
the following:
Database fleet inventory information
Database fleet health
Database configuration best practices
The following are example prompts to help you learn about your database fleet
inventory data:
"How many PostgreSQL instances do I have in Tokyo?"
"How many of my database resources are not NIST 800-53 compliant?"
"Why is it an issue that my database is exposed to ownership chaining?"
"Why is it an issue that my database is not logging only DDL statements?"
Note: Gemini provides query suggestions and health issues based on
all instances and databases in your project. Generated queries or displayed
health issues might be based on data outside your region or VPC.
Working with Gemini
When you prompt Gemini to answer database fleet analysis
questions, you can specify any number of the following fields in your prompt:
Field
Description
Examples
Product type
The Google Cloud database product.
CloudSQL, AlloyDB
Product engine
The database engine that the database product is using.
PostgreSQL, MySQL, SQL Server
Product version
The database version that the database product engine is
running.
14 (PG), 5.7 (MySQL)
Location
The region that the database is running in.
us-east1
Label
A key-value pair assigned to the database.
sample:label
Signals
The set of issues that are applicable to a database resource
including categories like availability, data protection, industry
compliance, security, and logging. To learn about supported health
issues for Google Cloud database products, see Supported
health issues .
Availability
For example, to identify database resources, you can enter the following prompt:
Which of my Cloud SQL databases are located in us-east1? Gemini
returns a list of database resources for Cloud SQL (product type) and in the
us-east1 (location) region.
To determine the number of database resources, for example, you can enter the
following prompt: How many of my Postgres 13 databases are affected by security
issues? Gemini returns the number of database resources that run
Postgres (product engine) 13 (product version) and are affected by Security
(signals) problems.
Examples of prompts include the following:
"Are all of my database backups working correctly?"
"How many databases do I have with data protection issues?"
"Which of my database resources are located in the US?"
"Show me the number of database resources I have by product type and engine."
"Show me key:value labeled databases with performance recommendations." (replace "key:value" with your own label)
"Show me all Cloud SQL databases running on PostgreSQL version 12."
Use Gemini to help you analyze database fleet health
As an early-stage technology, Gemini for Google Cloud
products can generate output that seems plausible but is factually incorrect. We recommend that you
validate all output from Gemini for Google Cloud products before you use it.
For more information, see
Gemini for Google Cloud and responsible AI .
Follow the instructions in this section to prompt Gemini to
answer questions about your database fleet health.
Before you begin
Ensure that Database Center is set up for your organization .
Analyze your database fleet health
In the Google Cloud console, go to the Database Center page.
Database Center
To open Gemini, click spark Gemini .
In the Gemini pane, enter a prompt, for example, Which
of my Cloud SQL databases are located in us-east1?
To send the prompt, click send Send . Gemini returns
a list of database resources that are in Cloud SQL and in the
us-east1 region.
Important: Gemini doesn't store your prompts or generated responses to our models, nor uses this data for training or fine-tuning our underlying models. Any data sent to the Gemini models is used strictly for serving a response to the request, and not stored, in order to mitigate IP or exfiltration risks. For more information, see How Gemini for Google Cloud uses your data and Certifications and security for Gemini .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
