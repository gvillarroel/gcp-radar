---
title: "Choose your data migration journey \_|\_ Mainframe Connector \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/mainframe-connector/docs/configurations
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/mainframe-connector/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/mainframe-connector/docs/configurations
  title: "Choose your data migration journey \_|\_ Mainframe Connector \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Mainframe Connector
Guides
Send feedback
Choose your data migration journey
Stay organized with collections
Save and categorize content based on your preferences.
This page gives you an overview of the ways in which Mainframe Connector
supports your data migration, and the advantages of each approach.
You can run Mainframe Connector in the following configurations based
on your requirements:
Transcode mainframe data locally on the mainframe, and then migrate it to Google Cloud .
Transcode mainframe data on Google Cloud using Cloud Run .
Transcode mainframe data on Google Cloud in standalone mode using Cloud Run .
Transfer mainframe data to Cloud Storage using a virtual tape library (VTL), and then transcode the data on Google Cloud .
The following sections discuss these configurations in detail.
Move locally transcoded mainframe data to Google Cloud
You can transcode mainframe data locally on the mainframe to the
Optimized Row Columnar (ORC) format, which is
supported by BigQuery. In this configuration, Mainframe Connector
helps you manage a complete extract, transform, and load (ETL) pipeline entirely from IBM z/OS ,
as shown in the following figure.
Local transcoding
For more information, see Move data transcoded locally on the mainframe to Google Cloud .
Transcode mainframe data remotely on Google Cloud using Cloud Run
Transcoding data locally on a mainframe is a CPU-intensive process that results
in high million instructions per second (MIPS) consumption. To avoid this, you
can delegate the transcoding of mainframe data to a Cloud Run service
on Google Cloud, as shown in the following figure. This frees up your mainframe
for business critical tasks and also reduces MIPS consumption.
Remote transcoding
For more information, see Transcode mainframe data remotely on Google Cloud .
Run Mainframe Connector in standalone mode
Mainframe Connector version 5.13.0 and later supports running
Mainframe Connector as a standalone job on Google Cloud. This feature
lets you run Mainframe Connector as a containerized batch job,
for example, as a Cloud Run job, Google Kubernetes Engine job, or within a
Docker container. This option helps you avoid installing
Mainframe Connector locally on your mainframe, and makes it easier for
you to integrate your Mainframe queued sequential access method (QSAM) file
parsing to existing extract, transform, and load (ETL) workflows.
When you use the standalone version of the Mainframe Connector, you
must set up the ETL workflow that loads the QSAM file to Google Cloud by
yourself. For more information, see Run Mainframe Connector in standalone mode .
Transcode mainframe data moved to Google Cloud using a virtual tape library
If you want to transfer very large volumes of data (around 500+ GB daily) to
Google Cloud, and don't want to use your mainframe for this effort, you can
deploy a hardware device in your data center to transfer data directly from the
mainframe storage system to Cloud Storage using a VTL and 10G ethernet. As
the hardware device receives the data directly from the mainframe storage system
using a VTL, the data transfer process between the mainframe and Cloud Storage
doesn't use the mainframe at all, thereby freeing it up for business critical
tasks. Data transcoding is performed by a Cloud Run service on
Google Cloud, as shown in the following figure.
Using VTL connection to move mainframe data to Google Cloud
For more information, see Transcode mainframe data moved to Google Cloud using virtual tape library .
What's Next
Mainframe Connector architecture
Get started with Mainframe Connector
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
