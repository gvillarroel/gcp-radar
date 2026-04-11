---
title: "How Kerberos works with Dataproc Metastore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc-metastore/docs/about-kerberos
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc-metastore/docs/create-service
source_metadata:
  url: https://docs.cloud.google.com/dataproc-metastore/docs/about-kerberos
  title: "How Kerberos works with Dataproc Metastore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataproc Metastore
Guides
Send feedback
How Kerberos works with Dataproc Metastore
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how Dataproc Metastore supports the Kerberos protocol.
Kerberos is a network
authentication protocol that is designed to provide strong authentication for
client and server applications by using secret-key cryptography. It's commonly
used among the Hadoop stack for authentication throughout the software
ecosystem.
You can configure Kerberos on the following Dataproc Metastore services:
A Dataproc Metastore service that uses the Thrift endpoint
protocol .
A Dataproc Metastore service that uses the gRPC endpoint
protocol .
The process for configuring Kerberos is different for each type of service.
Required Kerberos assets
The following section provides general information on the Kerberos assets that you
need to configure Kerberos for a Dataproc Metastore service.
Kerberos KDC
A Kerberos KDC is required.
You can use the local KDC of a Managed Service for Apache Spark cluster or create and host your own.
Kerberos principal
When you configure Kerberos for a Dataproc Metastore service, you
generate your principal file using a Managed Service for Apache Spark cluster.
Keytab file
A keytab file contains pairs of Kerberos principals and encrypted keys, which
are used to authenticate a service principal with a Kerberos KDC.
When you configure Kerberos for a Dataproc Metastore service, you
generate your keytab file using a Managed Service for Apache Spark cluster.
The generated keytab file contains the name and location of your Hive metastore service principal.
The generated keytab file is automatically stored in a Google Cloud
Secret Manager .
The Secret Manager
secret provided must be pinned to a specific secret version . You need to specify
the secret version that you want to use, Dataproc Metastore does
not pick the latest version automatically.
krb5.conf file
A valid krb5.conf file contains Kerberos configuration information, such as
the KDC IP, port, and realm name.
When you configure Kerberos for a Dataproc Metastore service, you
generate your keytab file using a Managed Service for Apache Spark cluster.
When configuring the krb5.conf file, specify the KDC IP that is accessible
from your peered network. Don't specify the KDC FQDN.
If you are using the Thrift endpoint, you must store the file in a Cloud Storage
bucket. You can use an existing bucket or create a new one.
What's next
Create a Dataproc Metastore that uses the Thrift endpoint
protocol .
Create a Dataproc Metastore that uses the gRPC endpoint
protocol .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
