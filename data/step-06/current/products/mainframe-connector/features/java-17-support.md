---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.226Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "Java 17 support"
feature_slug: "java-17-support"
latest_feature_date: "2025-06-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/installation"
  - "https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode"
  - "https://docs.cloud.google.com/mainframe-connector/docs/deploy-mainframe-connector"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
keywords:
  - "java"
  - "17"
  - "mainframe"
  - "connector"
  - "supports"
  - "mainframes"
  - "that"
  - "run"
---

# Java 17 support

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

Mainframe Connector supports mainframes that run Java 17.

## Extended Definition

Mainframe Connector supports mainframes that run Java 17.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/installation](https://docs.cloud.google.com/mainframe-connector/docs/installation)
- [https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode](https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode)
- [https://docs.cloud.google.com/mainframe-connector/docs/deploy-mainframe-connector](https://docs.cloud.google.com/mainframe-connector/docs/deploy-mainframe-connector)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)

## Supporting Pages

### Install Mainframe Connector on your mainframe \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/installation](https://docs.cloud.google.com/mainframe-connector/docs/installation)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This is strongly recommended when processing high volumes of data. #export SRVREMOTE= #export SRVPORT= Native Libraries JL="$JH/lib" LP="/lib:/usr/lib:$JH/bin:$JL/s390x:$JL/s390x/j9vm:$JH/bin/classic" export LIBPATH="$LP:/usr/lib/java runtime64" Java Classpath CP="$JL:$JL/ext:/usr/include/java classes/ " export CLASSPATH="$CP:$GOOGLE CLASSPATH" JVM options IJO="-Xms512m -Xmx512m -Xcompressedrefs -Djava.net.preferIPv4Stack=true" export IBM JAVA OPTIONS="$IJO" export JZOS MAIN ARGS="" / // PEND To configure Mainframe Connector to work with a TLS intercepting proxy, set the following Java system properties in the BQSH JCL procedure. javax.net.ssl.trustStore javax.net.ssl.trustStorePassword https.proxyHost https.proxyUser https.proxyPassword The BQSH JCL procedure before adding the Java system properties for IBM JAVA OPTIONS is as follows.
- For example, create new JAR file, use a different IBM Java version, or change the JSON key file using environment statements. #BQSH PROC ENV=DEV // // // // Copyright 2022 Google LLC All Rights Reserved // // Licensed under the Apache License, Version 2.0 (the "License"); // you may not use this file except in compliance with the License. // You may obtain a copy of the License at // http://www.apache.org/licenses/LICENSE-2.0 // Unless required by applicable law or agreed to in writing , software // distributed under the License is distributed on as "AS IS" BASIS, // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express of impl. // See the license for the specific language governing permissions and // limitations under the License. // // //BQSH EXEC PGM=JVMLDM86,REGION=0M, // PARM='/+I com.google.cloud.bqsh.Bqsh' //SYSPRINT DD SYSOUT = //SYSOUT DD SYSOUT = //STDOUT DD SYSOUT = //STDERR DD SYSOUT = //CEEDUMP DD SYSOUT = //ABNLIGNR DD DUMMY //STDIN DD DUMMY //QUERY DD DUMMY //INFILE DD DUMMY //COPYBOOK DD DUMMY //KEYFILE DD DUMMY //STDENV DD DISP=SHR,DSN=SYSP.PARMLIB(EDW&ENV) // DD ,SYMBOLS=EXECSYS Do not modify the 3 lines below Collect system symbols from JES export JOBNAME=&JOBNAME export JOBDATE=&YYMMDD export JOBTIME=&HHMMSS The following is an example of the DEV PARMLIB member showing how the JSON key file and the Mainframe Connector software JAR file are referenced.
- The service account should be granted Storage, BigQuery and Logging pe GKPATH= "/opt/google/keyfile" GKFILE= "prj-ent-edw-dev-landing-2451-f89d99af31e5.json" export GKEYFILE= "$GKPATH/$GKFILE" Path to directory containing google jar file Edit this is set actual path selected for your site its recommended to have a path with a version identifier and create a symlink to the directory of the latert version GOOGLE DIR= "/opt/google/mainframe-connector/5.9.0" GOOGLE CLASSPATH= "$GOOGLE DIR/ " #IBM JZOS JDK Location JH= "/usr/lpp/java/J8.0 64" export JAVA HOME= "$JH" export PATH= "/bin:$JH/bin" Log Level export BQSH ROOT LOGGER=DEBUG What's next Move locally transcoded mainframe data to Google Cloud Transcode mainframe data remotely on Google Cloud Transcode mainframe data moved to Google Cloud using a virtual tape library Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Install Mainframe Connector To install Mainframe Connector, use the following steps: Download the prebuilt Mainframe Connector JAR file to a directory that your user account has write permissions.

### Run Mainframe Connector in standalone mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode](https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Mainframe Connector version 5.13.0 and later supports running Mainframe Connector as a standalone job on Google Cloud.
- Mainframe Connector provides two ways in which you can export BigQuery table: Using qsam commands (release 5.16.0 and later) Using the bq export command Use qsam commands environmentVariables: - name: "QUERY" value: " QUERY PATH " - name: "OUTFILE" value: " OUTFILE " - name: "COPYBOOK" value: " COPYBOOK PATH " - name: "TRANSCODE CONFIGURATION" value: " TRANSCODE CONFIGURATION PATH " - name: "PROJECT ID" value: " PROJECT ID " - name: "LOCATION" value: " LOCATION " - name: "LOG PROJECT" value: " LOG PROJECT " - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: qsam encode \ $QUERY $OUTFILE --copybook ${COPYBOOK PATH} --transcode-configuration ${TRANSCODE CONFIGURATION PATH} --input-format=BIGQUERY \ --input-parameter project id=${PROJECT ID} \ --input-parameter location=${LOCATION} Replace the following: QUERY PATH : The SQL query to execute.
- Transcode data using Mainframe Connector in standalone mode on Cloud Run Mainframe Connector provides two ways in which you can run Mainframe Connector as a standalone job on Google Cloud: Using qsam commands (release 5.16.0 and later) Using the gsutil cp command Advantages of qsam commands The qsam commands provide the following advantages: Support for compound data types, including the OCCURS clause (lists), REDEFINES clause, and nested records.
- Run Mainframe Connector in standalone mode using the gsutil cp command To transcode your data using Mainframe Connector in standalone mode using the gsutil cp command, use the following steps: Create a YAML file with commands to do the following: Read your dataset Transcode it to ORC Upload it to Cloud Storage The input dataset must be a QSAM file with fixed or variable record length.

### Deploy Mainframe Connector on Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/deploy-mainframe-connector](https://docs.cloud.google.com/mainframe-connector/docs/deploy-mainframe-connector)
- Source ID: `site-docs-root-2`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Transcode mainframe data remotely on Google Cloud Transcode mainframe data moved to Google Cloud using a virtual tape library Run Mainframe Connector as a standalone job Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The only mandatory variables you need to set are project and connector service account email . project : The Google Cloud project in which you want to install Mainframe Connector. connector service account email : The service account that has all the permissions for the operations you want to perform using Mainframe Connector.
- Deploy Mainframe Connector. terraform apply -var-file= VARIABLE FILE NAME Replace VARIABLE FILE NAME with the variables file you created in the previous step. (Optional) To check if Mainframe Connector is deployed and running, go to the Cloud Run page, and select the Services tab.
- Home Documentation Migration Mainframe Connector Guides Send feedback Deploy Mainframe Connector on Cloud Run Stay organized with collections Save and categorize content based on your preferences.

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Based on the flag you use, the systemreport command prints the following system data: --supported ciphers : Supported ciphers --available security providers : Available security providers No Use customized character sets Mainframe Connector supports different character sets that decode bytes into BigQuery strings, and the other way around.
- Query file SELECT FROM bigquery-public-data.samples.wikipedia WHERE title = @mytitle AND num characters > @min chars; Execution example bq query \ --project id=mainframe-connector-dev \ --location="US" \ --parameters=mytitle::Hippocrates,min chars:INT64:42600 Perform a dry run of the gsutil cp command The gsutil cp command decodes a QSAM file using a COBOL copybook, and generates an ORC file on Cloud Storage.
- Mainframe Connector supports the following subset of the UCM format: <code set name> "<name>" <uconv class> "SBCS" <subchar> \x1A #Example CHARMAP # <U0000> \x00 0 #For the third column, only 0 is supported. <U0001> \x01 0 #etc END CHARMAP If you want to use a customized character set, define a configuration file in the UCM format.
- Execution example gsutil cp gs://sample-bucket/MAINFRAME.DSN.FILE MAINFRAME.DSN.FILE \ --lrecl=16 --blksize=0 --recfm=fb Performance tuning configuration for the gsutil cp command Mainframe Connector supports the following performance tuning configuration for the gsutil cp command.

