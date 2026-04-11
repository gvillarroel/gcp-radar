---
title: "Mainframe Connector architecture \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/mainframe-connector/docs/architecture
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/mainframe-connector/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/mainframe-connector/docs/architecture
  title: "Mainframe Connector architecture \_|\_ Google Cloud Documentation"
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
Mainframe Connector architecture
Stay organized with collections
Save and categorize content based on your preferences.
Mainframe Connector is typically deployed as a Java application. As the
application is self contained, you need to only install IBM JRE version 8 or IBM JRE version 17 to deploy Mainframe Connector.
A job control language (JCL) procedure is the frontend that
you can use to call Mainframe Connector. The following image gives an
overview of Mainframe Connector architecture.
Mainframe Connector architecture
When uploading data files to Cloud Storage ,
Mainframe Connector communicates directly with the
Cloud Storage API using either
IBM z Integrated Information Processor (zIIP) or general processor (GP). You can also
deploy a remote service to offload some of the computation to Google Cloud .
After a data file is uploaded to Cloud Storage, Mainframe Connector
sends a remote procedure call (RPC) to the gRPC service indicating the location
of the file, the record layout, and the output location. The gRPC service reads
the file from Cloud Storage, transcodes the data, and writes a multi-part
Optimized Row Columnar (ORC) file to the
Cloud Storage output location. Mainframe Connector then communicates
directly with the BigQuery API
to register the ORC file as an external table or load the ORC file into a table.
Alternately, you can deploy a hardware device in your data center to transfer
data directly from the mainframe storage system to Cloud Storage using a
virtual tape library (VTL). This approach uses neither zIIP or GP during the data transfer to
Cloud Storage because the hardware device receives the data directly from the
mainframe storage system using a VTL and does not use the mainframe at all. This
frees up the mainframe for business-critical tasks.
Data encryption
IBM provides a Java Cryptography Extension (JCE) implementation with the JVM called
Java Cryptography Extension Common Cryptographic Architecture (IBMJCECCA) ( Java 8
or Java 17 ) that uses the hardware
cryptography system on IBM z/OS . The
transport layer security (TLS) connection between the JVM and Google Cloud API
endpoints use JCE and hardware cryptography to secure data during the extract,
transform, and load (ELT) operations.
JCL procedure
To use JCL procedures, you must install a BQSH shell interpreter
in your mainframe procedure libraries (PROCLIB) . The standard environment (STDENV) data in
the JCL procedure is used to set environment variables, JVM arguments, and Java
classpath before launching the Java application . A JCL procedure
launches the JVM and main class com.google.cloud.bqsh.Bqsh using
IBM JVMLDM86 JVM launcher .
BQSH shell interpreter
The BQSH main class acts as a shell interpreter. It reads stream input from a
JCL procedure, splits lines of input, and attempts to interpret each line as a
command.
Java application
The Mainframe Connector uses Java Cloud Client Libraries ,
Apache ORC , and other open source libraries. It uses
IBM proprietary JZOS SDK
to interact with the IBM z/OS storage system and runs on the JVM on IBM z/OS and
OpenJDK on Linux .
What's Next
Mainframe Connector configurations
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
