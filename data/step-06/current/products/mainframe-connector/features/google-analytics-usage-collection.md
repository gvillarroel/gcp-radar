---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.231Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "Google Analytics usage collection"
feature_slug: "google-analytics-usage-collection"
latest_feature_date: "2025-02-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/deploy-mainframe-connector"
  - "https://docs.cloud.google.com/mainframe-connector/docs/installation"
  - "https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/get-started"
keywords:
  - "analytics"
  - "usage"
  - "collection"
  - "mainframe"
  - "connector"
  - "collects"
  - "with"
  - "by"
---

# Google Analytics usage collection

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

Mainframe Connector collects usage data with Google Analytics by default, and it can be disabled.

## Extended Definition

Mainframe Connector collects usage data with Google Analytics by default, and it can be disabled.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/deploy-mainframe-connector](https://docs.cloud.google.com/mainframe-connector/docs/deploy-mainframe-connector)
- [https://docs.cloud.google.com/mainframe-connector/docs/installation](https://docs.cloud.google.com/mainframe-connector/docs/installation)
- [https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference](https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/get-started](https://docs.cloud.google.com/mainframe-connector/docs/get-started)

## Supporting Pages

### Deploy Mainframe Connector on Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/deploy-mainframe-connector](https://docs.cloud.google.com/mainframe-connector/docs/deploy-mainframe-connector)
- Source ID: `site-docs-root-2`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Migration Mainframe Connector Guides Send feedback Deploy Mainframe Connector on Cloud Run Stay organized with collections Save and categorize content based on your preferences.
- You can do this by deploying the Mainframe Connector multiple times with different variables and service accounts.
- Important Be aware that Mainframe Connector uses Google Analytics to collect usage data.
- Deploy Mainframe Connector. terraform apply -var-file= VARIABLE FILE NAME Replace VARIABLE FILE NAME with the variables file you created in the previous step. (Optional) To check if Mainframe Connector is deployed and running, go to the Cloud Run page, and select the Services tab.

### Install Mainframe Connector on your mainframe \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/installation](https://docs.cloud.google.com/mainframe-connector/docs/installation)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, create new JAR file, use a different IBM Java version, or change the JSON key file using environment statements. #BQSH PROC ENV=DEV // // // // Copyright 2022 Google LLC All Rights Reserved // // Licensed under the Apache License, Version 2.0 (the "License"); // you may not use this file except in compliance with the License. // You may obtain a copy of the License at // http://www.apache.org/licenses/LICENSE-2.0 // Unless required by applicable law or agreed to in writing , software // distributed under the License is distributed on as "AS IS" BASIS, // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express of impl. // See the license for the specific language governing permissions and // limitations under the License. // // //BQSH EXEC PGM=JVMLDM86,REGION=0M, // PARM='/+I com.google.cloud.bqsh.Bqsh' //SYSPRINT DD SYSOUT = //SYSOUT DD SYSOUT = //STDOUT DD SYSOUT = //STDERR DD SYSOUT = //CEEDUMP DD SYSOUT = //ABNLIGNR DD DUMMY //STDIN DD DUMMY //QUERY DD DUMMY //INFILE DD DUMMY //COPYBOOK DD DUMMY //KEYFILE DD DUMMY //STDENV DD DISP=SHR,DSN=SYSP.PARMLIB(EDW&ENV) // DD ,SYMBOLS=EXECSYS Do not modify the 3 lines below Collect system symbols from JES export JOBNAME=&JOBNAME export JOBDATE=&YYMMDD export JOBTIME=&HHMMSS The following is an example of the DEV PARMLIB member showing how the JSON key file and the Mainframe Connector software JAR file are referenced.
- Home Documentation Migration Mainframe Connector Guides Send feedback Install Mainframe Connector on your mainframe Stay organized with collections Save and categorize content based on your preferences.
- Important Be aware that Mainframe Connector uses Google Analytics to collect usage data.
- The service account should be granted Storage, BigQuery and Logging pe GKPATH= "/opt/google/keyfile" GKFILE= "prj-ent-edw-dev-landing-2451-f89d99af31e5.json" export GKEYFILE= "$GKPATH/$GKFILE" Path to directory containing google jar file Edit this is set actual path selected for your site its recommended to have a path with a version identifier and create a symlink to the directory of the latert version GOOGLE DIR= "/opt/google/mainframe-connector/5.9.0" GOOGLE CLASSPATH= "$GOOGLE DIR/ " #IBM JZOS JDK Location JH= "/usr/lpp/java/J8.0 64" export JAVA HOME= "$JH" export PATH= "/bin:$JH/bin" Log Level export BQSH ROOT LOGGER=DEBUG What's next Move locally transcoded mainframe data to Google Cloud Transcode mainframe data remotely on Google Cloud Transcode mainframe data moved to Google Cloud using a virtual tape library Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Copybook parser reference \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference](https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference)
- Source ID: `site-docs-reference`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Migration Mainframe Connector Reference Send feedback Copybook parser reference Stay organized with collections Save and categorize content based on your preferences.
- If you use these constructs in your copybook, Mainframe Connector shows an error. dataAlignedClause dataBlankWhenZeroClause dataCommonOwnLocalClause dataIntegerStringClause dataJustifiedClause dataOccursClause dataReceivedByClause dataRecordAreaClause dataRenamesClause dataSignClause dataSynchronizedClause dataThreadLocalClause dataTypeClause dataTypeDefClause dataUsingClause Data types COBOL data types like COMP-1 and COMP-2 are supported.
- Support for null indicators Mainframe Connector supports null indicators starting with version 5.13.0.
- For example, if your data corresponding to the copybook field 03 FLD01 PIC N USAGE DISPLAY-1 contains bytes 0x43 and 0xC5 in encoding x-IBM930 that are not surrounded by 0x0E and 0x0F , you must rename the copybook field name to 03 FLD01-DBCS PIC N USAGE DISPLAY-1 in order to correctly decode the DBCS data.

### Get started with Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/get-started](https://docs.cloud.google.com/mainframe-connector/docs/get-started)
- Source ID: `site-docs-root`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Migration Mainframe Connector Guides Send feedback Get started with Mainframe Connector Stay organized with collections Save and categorize content based on your preferences.
- ICSF Query Facility (CSFIQF) Random Number Generate (CSFRNG) Random Number Generate Long (CSFRNGL) PKA Key Import (CSFPKI) Digital Signature Generate (CSFDSG) Digital Signature Verify (CSFDSV) Set up network connectivity Mainframe Connector interacts with Cloud Storage, BigQuery, and Cloud Logging APIs.
- Ensure that your network administration team has access to the following: IP subnets assigned to the IBM z/OS logical partitions (LPARs) Google Cloud service accounts used by IBM z/OS batch jobs Google Cloud project IDs containing resources accessed by IBM z/OS batch jobs Configure firewalls, routers, and Domain Name Systems Configure your mainframe IP files to include rules in firewalls, routers, and Domain Name Systems (DNSs) to allow traffic to and from Google Cloud.
- At the project level, assign the following roles: Logs Writer BigQuery Job User On your Cloud Storage bucket, assign the following roles: Storage Object Admin BigQuery Data Editor BigQuery Read Session User Set up security for your assets Ensure that the following permissions required by Java Cryptography Extension Common Cryptographic Architecture (IBMJCECCA) ( Java 8 or Java 17 ) are granted for your mainframe.

