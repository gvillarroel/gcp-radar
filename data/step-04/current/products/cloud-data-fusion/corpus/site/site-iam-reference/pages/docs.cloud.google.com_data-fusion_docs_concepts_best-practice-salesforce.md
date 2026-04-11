---
title: "Best practices for the Salesforce batch source \_|\_ Cloud Data Fusion \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/data-fusion/docs/concepts/best-practice-salesforce
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/data-fusion/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/data-fusion/docs/concepts/best-practice-salesforce
  title: "Best practices for the Salesforce batch source \_|\_ Cloud Data Fusion \_\
    |\_ Google Cloud Documentation"
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
Best practices for the Salesforce batch source
Stay organized with collections
Save and categorize content based on your preferences.
This page describes best practices for improving performance when you use a
Salesforce batch
source in
Cloud Data Fusion.
Improve performance with PK chunking
PK chunking breaks up large datasets into smaller datasets, or chunks .
Enabling PK chunking in the Salesforce batch source plugin has the following
benefits:
It improves performance, especially for large datasets
It reduces the load on the server
It increases scalability
Note: Before enabling PK chunking, check that you're using an sObject that
supports it. For more information about PK chunking and the supported
sObjects, see the Salesforce documentation .
To use PK chunking, follow these steps:
Go to the Cloud Data Fusion web interface
and open your pipeline on the Studio page.
Optional: If you haven't added a Salesforce node in your pipeline, add one:
In the Source menu, click Salesforce . The Salesforce node
appears in your pipeline. If you don't see the Salesforce source on
the Studio page, deploy the Salesforce plugins from the Cloud Data Fusion Hub .
To configure the source, go to the Salesforce node and click Properties .
Turn on Enable PK chunking .
In the Chunk size field, enter the number of records per chunk. The
default value is 100000 records. The maximum is 250000 records.
Click Validate .
Use SObject query filters or SOQL queries
To reduce the number of API calls in Salesforce, retrieve records with SObject
query filters or SOQL queries.
SObject query filters : configure the filter in the Salesforce plugin
properties in the SObject name field. For more information, see
Configure the plugin .
SOQL queries : configure the queries in the Salesforce plugin properties
in the SOQL query field. For more information, see SOQL queries for the
Salesforce source .
What's next
Learn about configuring the Salesforce batch source in Cloud Data Fusion.
Work through a Salesforce plugin tutorial .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
