---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.229Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "Java 17 runtime for remote and standalone modes"
feature_slug: "java-17-runtime-for-remote-and-standalone-modes"
latest_feature_date: "2025-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/installation"
keywords:
  - "java"
  - "17"
  - "runtime"
  - "for"
  - "remote"
  - "and"
  - "standalone"
  - "modes"
---

# Java 17 runtime for remote and standalone modes

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

Remote and standalone modes use Java 17 instead of Java 8.

## Extended Definition

Remote and standalone modes use Java 17 instead of Java 8.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode](https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/installation](https://docs.cloud.google.com/mainframe-connector/docs/installation)

## Supporting Pages

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Source: gcsUri Destination: --destPath This command can run in local, remote, and standalone modes.
- You can specify the value in the following formats: Java format: b/k/m/g/t, for byte, kibibyte, mebibyte, gibibyte, and tebibyte respectively.
- For the remote mode, see the flags --remoteHost , --remotePort , and --remoteUrl , and the environment variable BQ QUERY REMOTE EXECUTION .
- Synopsis bq query [options] Flags and arguments You can run this command in the local and remote modes.

### Run Mainframe Connector in standalone mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode](https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode)
- Source ID: `site-docs-root-2`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- The following is an example YAML file: environmentVariables: - name: "QUERY" value: "gs://my bucket/my/input.sql" - name: "OUTFILE" value: "gs://my bucket/my/output.orc" - name: "COPYBOOK" value: "gs://my bucket/my/copybook.cpy" - name: "TRANSCODE CONFIGURATION" value: "gs://my bucket/my/transcode-configuration-file.json" - name: "PROJECT ID" value: "my-project" - name: "LOCATION" value: "US" - name: "LOG PROJECT" value: "my-log-project" - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: qsam encode \ $QUERY $OUTFILE --copybook ${COPYBOOK PATH} --transcode-configuration ${TRANSCODE CONFIGURATION PATH} --input-format=BIGQUERY \ --input-parameter project id=${PROJECT ID} \ --input-parameter location=${LOCATION} Use bq export command environmentVariables: - name: "COPYBOOK" value: " COPYBOOK FILEPATH " - name: "LOG PROJECT" value: " LOG PROJECT " - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: bq export --project id=" PROJECT NAME " --location=" LOCATION " --sql="select from project.dataset.table" --bucket=" BUCKET " Replace the following: COPYBOOK FILEPATH : The path to the copybook DD.
- Mainframe Connector provides two ways in which you can export BigQuery table: Using qsam commands (release 5.16.0 and later) Using the bq export command Use qsam commands environmentVariables: - name: "QUERY" value: " QUERY PATH " - name: "OUTFILE" value: " OUTFILE " - name: "COPYBOOK" value: " COPYBOOK PATH " - name: "TRANSCODE CONFIGURATION" value: " TRANSCODE CONFIGURATION PATH " - name: "PROJECT ID" value: " PROJECT ID " - name: "LOCATION" value: " LOCATION " - name: "LOG PROJECT" value: " LOG PROJECT " - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: qsam encode \ $QUERY $OUTFILE --copybook ${COPYBOOK PATH} --transcode-configuration ${TRANSCODE CONFIGURATION PATH} --input-format=BIGQUERY \ --input-parameter project id=${PROJECT ID} \ --input-parameter location=${LOCATION} Replace the following: QUERY PATH : The SQL query to execute.
- The following is an example YAML file: environmentVariables: - name: "INFILE" value: "gs://my bucket/my/input.dat" - name: "OUTFILE" value: "gs://my bucket/my/output.orc" - name: "COPYBOOK" value: "gs://my bucket/my/copybook.cpy" - name: "TRANSCODE CONFIGURATION" value: "gs://my bucket/my/transcode-configuration-file.json" - name: "LOG PROJECT" value: "the log project" - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: qsam decode $INFILE $OUTFILE --copybook $COPYBOOK --transcode-configuration ${TRANSCODE CONFIGURATION} --output-format orc --parallelism 8 --chunk-size "512Mib" Note Variables with the suffix FILLER are ignored during the import process.
- In the following sample, we use the Cloud Storage DataPath for INFILE , OUTFILE , COPYBOOK , and TRANSCODE CONFIGURATION . environmentVariables: - name: "INFILE" value: " INFILE " - name: "OUTFILE" value: " OUTFILE " - name: "COPYBOOK" value: " COPYBOOK " - name: "TRANSCODE CONFIGURATION" value: " TRANSCODE CONFIGURATION " - name: "LOG PROJECT" value: " LOG PROJECT " - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: qsam decode $INFILE $OUTFILE --copybook $COPYBOOK --transcode-configuration ${TRANSCODE CONFIGURATION} --output-format orc --parallelism 8 --chunk-size "512Mib" Replace the following: INFILE : The name of the input file.

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- You can provide the value in the following formats: Java format: b/k/m/g/t, for byte, kibibyte, mebibyte, gibibyte, and tebibyte respectively International format: KiB/MiB/GiB/TiB, for kibibyte, mebibyte, gibibyte, and tebibyte respectively Metric format: b/kb/mb/gb/tb, for kilobyte, megabyte, gigabyte, and terabyte respectively Data size parsing is case insensitive.
- If you execute the gsutil cp or bq export commands with the --remote flag to perform remote transcoding , Mainframe Connector uses the local value set for the BQSH FEATURE CUSTOM CHARSET environment variable.
- Note: For the commands that support remote execution, you can use the option remoteUrl instead of remoteHost and remotePort .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### Install Mainframe Connector on your mainframe \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/installation](https://docs.cloud.google.com/mainframe-connector/docs/installation)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- The service account should be granted Storage, BigQuery and Logging pe GKPATH= "/opt/google/keyfile" GKFILE= "prj-ent-edw-dev-landing-2451-f89d99af31e5.json" export GKEYFILE= "$GKPATH/$GKFILE" Path to directory containing google jar file Edit this is set actual path selected for your site its recommended to have a path with a version identifier and create a symlink to the directory of the latert version GOOGLE DIR= "/opt/google/mainframe-connector/5.9.0" GOOGLE CLASSPATH= "$GOOGLE DIR/ " #IBM JZOS JDK Location JH= "/usr/lpp/java/J8.0 64" export JAVA HOME= "$JH" export PATH= "/bin:$JH/bin" Log Level export BQSH ROOT LOGGER=DEBUG What's next Move locally transcoded mainframe data to Google Cloud Transcode mainframe data remotely on Google Cloud Transcode mainframe data moved to Google Cloud using a virtual tape library Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This is strongly recommended when processing high volumes of data. #export SRVREMOTE= #export SRVPORT= Native Libraries JL="$JH/lib" LP="/lib:/usr/lib:$JH/bin:$JL/s390x:$JL/s390x/j9vm:$JH/bin/classic" export LIBPATH="$LP:/usr/lib/java runtime64" Java Classpath CP="$JL:$JL/ext:/usr/include/java classes/ " export CLASSPATH="$CP:$GOOGLE CLASSPATH" JVM options IJO="-Xms512m -Xmx512m -Xcompressedrefs -Djava.net.preferIPv4Stack=true" export IBM JAVA OPTIONS="$IJO" export JZOS MAIN ARGS="" / // PEND To configure Mainframe Connector to work with a TLS intercepting proxy, set the following Java system properties in the BQSH JCL procedure. javax.net.ssl.trustStore javax.net.ssl.trustStorePassword https.proxyHost https.proxyUser https.proxyPassword The BQSH JCL procedure before adding the Java system properties for IBM JAVA OPTIONS is as follows.
- For example, create new JAR file, use a different IBM Java version, or change the JSON key file using environment statements. #BQSH PROC ENV=DEV // // // // Copyright 2022 Google LLC All Rights Reserved // // Licensed under the Apache License, Version 2.0 (the "License"); // you may not use this file except in compliance with the License. // You may obtain a copy of the License at // http://www.apache.org/licenses/LICENSE-2.0 // Unless required by applicable law or agreed to in writing , software // distributed under the License is distributed on as "AS IS" BASIS, // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express of impl. // See the license for the specific language governing permissions and // limitations under the License. // // //BQSH EXEC PGM=JVMLDM86,REGION=0M, // PARM='/+I com.google.cloud.bqsh.Bqsh' //SYSPRINT DD SYSOUT = //SYSOUT DD SYSOUT = //STDOUT DD SYSOUT = //STDERR DD SYSOUT = //CEEDUMP DD SYSOUT = //ABNLIGNR DD DUMMY //STDIN DD DUMMY //QUERY DD DUMMY //INFILE DD DUMMY //COPYBOOK DD DUMMY //KEYFILE DD DUMMY //STDENV DD DISP=SHR,DSN=SYSP.PARMLIB(EDW&ENV) // DD ,SYMBOLS=EXECSYS Do not modify the 3 lines below Collect system symbols from JES export JOBNAME=&JOBNAME export JOBDATE=&YYMMDD export JOBTIME=&HHMMSS The following is an example of the DEV PARMLIB member showing how the JSON key file and the Mainframe Connector software JAR file are referenced.
- The service account should be granted Storage, BigQuery and Logging permissions. export GKEYFILE="GKEY FILE PATH" Path to directory containing google jar file Edit this to set actual path selected for your site it's recommended to have a path with a version identifier and create a symlink to the directory of the latest version GOOGLE DIR="JAR FILE PATH" GOOGLE CLASSPATH="$GOOGLE DIR/ " Do not modify the 3 lines below Collect system symbols from JES export JOBNAME=&JOBNAME export JOBDATE=&YYMMDD export JOBTIME=&HHMMSS IBM JZOS JDK Location JH="/usr/lpp/java/J8.0 64" export JAVA HOME="$JH" export PATH="/bin:$JH/bin" Log Level export BQSH ROOT LOGGER=DEBUG Cloud logging export LOG PROJECT="PROJECT NAME" export LOG ID="LOG ID NAME" Binary Data Sets Uncomment the line below to set a default output bucket for scp.

