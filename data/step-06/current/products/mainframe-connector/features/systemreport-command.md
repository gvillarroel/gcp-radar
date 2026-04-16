---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.236Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "systemreport command"
feature_slug: "systemreport-command"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/installation"
  - "https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode"
keywords:
  - "systemreport"
  - "command"
  - "the"
  - "new"
  - "reports"
  - "system"
  - "information"
---

# systemreport command

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The new systemreport command reports system information.

## Extended Definition

The new systemreport command reports system information.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/installation](https://docs.cloud.google.com/mainframe-connector/docs/installation)
- [https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode](https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode)

## Supporting Pages

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Synopsis systemreport [-h] [--available-security-providers] [--supported-ciphers] Flags and arguments The systemreport command uses the following flags and arguments: --available-security-providers (Optional) Print supported security providers. --help or -h (Optional) Display this help message. --supported-ciphers (Optional) Print supported ciphers. vsam decode Decode VSAM data.
- The supported format is [PROJECT]:[DATASET].[TABLE] --project id = ID Specify the project to use to execute this command. --allow jagged rows (Optional) Allow missing trailing optional columns in CSV data. --allow quoted newlines (Optional) Allow quoted newlines within CSV data. --append table (Optional) Append the loaded data to the existing data in the destination table. --autodetect (Optional) Enable automatic schema detection for CSV and JSON data. --clustering fields = FIELDS (Optional) If specified, a comma-separated list of columns is used to cluster the destination table in a query.
- If not specified will use job default. --update-env-vars = ENVVARS (Optional) List of key-value pairs to set as environment variables overrides for an execution of a job. --wait (Optional) Specify this flag if you want the command to wait until the execution has completed running before exiting. cloud run job log Display cloud run logs Synopsis cloud run job log [-h] [--tail] [--log-filter= FILTER ] [--polling-interval= POLLINGINTERVAL ] --project= PROJECT --region= REGION [--timeout= TIMEOUT ] EXECUTION-ID Flags and arguments The cloud run job log command uses the following flags and arguments: EXECUTION-ID The name of the Cloud Run job execution id. --help or -h (Optional) Display this help message. --log-filter = FILTER (Optional) Filter expression that specifies the log entries to return. --polling-interval = POLLINGINTERVAL (Optional) Sets the polling interval for displaying logs when --tail logs is enabled.
- The bq query command uses the following flags and arguments: --project id = ID Specify the project to use to execute this command. --allow large results (Optional) Use large destination table sizes for legacy SQL queries. --append table (Optional) Append the loaded data to the existing data in the destination table. --batch (Optional) Run the query in batch mode. --clustering fields = FIELDS (Optional) Specify a comma-separated list of up to four column names that specify the fields to use for table clustering.

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Based on the flag you use, the systemreport command prints the following system data: --supported ciphers : Supported ciphers --available security providers : Available security providers No Use customized character sets Mainframe Connector supports different character sets that decode bytes into BigQuery strings, and the other way around.
- No systemreport Use this command to print the necessary system data to the standard output (stdout).
- For information on the advantages of using the qsam commands, see Advantages of qsam commands .
- For information on the advantages of using the qsam commands, see Advantages of qsam commands .

### Install Mainframe Connector on your mainframe \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/installation](https://docs.cloud.google.com/mainframe-connector/docs/installation)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- For example, create new JAR file, use a different IBM Java version, or change the JSON key file using environment statements. #BQSH PROC ENV=DEV // // // // Copyright 2022 Google LLC All Rights Reserved // // Licensed under the Apache License, Version 2.0 (the "License"); // you may not use this file except in compliance with the License. // You may obtain a copy of the License at // http://www.apache.org/licenses/LICENSE-2.0 // Unless required by applicable law or agreed to in writing , software // distributed under the License is distributed on as "AS IS" BASIS, // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express of impl. // See the license for the specific language governing permissions and // limitations under the License. // // //BQSH EXEC PGM=JVMLDM86,REGION=0M, // PARM='/+I com.google.cloud.bqsh.Bqsh' //SYSPRINT DD SYSOUT = //SYSOUT DD SYSOUT = //STDOUT DD SYSOUT = //STDERR DD SYSOUT = //CEEDUMP DD SYSOUT = //ABNLIGNR DD DUMMY //STDIN DD DUMMY //QUERY DD DUMMY //INFILE DD DUMMY //COPYBOOK DD DUMMY //KEYFILE DD DUMMY //STDENV DD DISP=SHR,DSN=SYSP.PARMLIB(EDW&ENV) // DD ,SYMBOLS=EXECSYS Do not modify the 3 lines below Collect system symbols from JES export JOBNAME=&JOBNAME export JOBDATE=&YYMMDD export JOBTIME=&HHMMSS The following is an example of the DEV PARMLIB member showing how the JSON key file and the Mainframe Connector software JAR file are referenced.
- PROJECT NAME with project for which the log is being created in Cloud Logging LOG ID NAME with the name of the log //BQSH PROC // // // Copyright 2022 Google LLC All Rights Reserved // // Licensed under the Apache License, Version 2.0 (the "License"); // you may not use this file except in compliance with the License. // You may obtain a copy of the License at // // http://www.apache.org/licenses/LICENSE-2.0 // // Unless required by applicable law or agreed to in writing, software // distributed under the License is distributed on an "AS IS" BASIS, // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. // See the License for the specific language governing permissions and // limitations under the License. // // //BQSH EXEC PGM=JVMLDM86,REGION=0M, // PARM='/+I com.google.cloud.bqsh.Bqsh' //SYSPRINT DD SYSOUT= //SYSOUT DD SYSOUT= //STDOUT DD SYSOUT= //STDERR DD SYSOUT= //CEEDUMP DD SYSOUT= //ABNLIGNR DD DUMMY //STDIN DD DUMMY //QUERY DD DUMMY //INFILE DD DUMMY //COPYBOOK DD DUMMY //KEYFILE DD DUMMY //STDENV DD ,SYMBOLS=EXECSYS Service Account Keyfile Edit the line below to specify a unix filesystem path where the service account keyfile is stored.
- This is strongly recommended when processing high volumes of data. #export SRVREMOTE= #export SRVPORT= Native Libraries JL="$JH/lib" LP="/lib:/usr/lib:$JH/bin:$JL/s390x:$JL/s390x/j9vm:$JH/bin/classic" export LIBPATH="$LP:/usr/lib/java runtime64" Java Classpath CP="$JL:$JL/ext:/usr/include/java classes/ " export CLASSPATH="$CP:$GOOGLE CLASSPATH" JVM options IJO="-Xms512m -Xmx512m -Xcompressedrefs -Djava.net.preferIPv4Stack=true" export IBM JAVA OPTIONS="$IJO" export JZOS MAIN ARGS="" / // PEND To configure Mainframe Connector to work with a TLS intercepting proxy, set the following Java system properties in the BQSH JCL procedure. javax.net.ssl.trustStore javax.net.ssl.trustStorePassword https.proxyHost https.proxyUser https.proxyPassword The BQSH JCL procedure before adding the Java system properties for IBM JAVA OPTIONS is as follows.
- The service account should be granted Storage, BigQuery and Logging permissions. export GKEYFILE="GKEY FILE PATH" Path to directory containing google jar file Edit this to set actual path selected for your site it's recommended to have a path with a version identifier and create a symlink to the directory of the latest version GOOGLE DIR="JAR FILE PATH" GOOGLE CLASSPATH="$GOOGLE DIR/ " Do not modify the 3 lines below Collect system symbols from JES export JOBNAME=&JOBNAME export JOBDATE=&YYMMDD export JOBTIME=&HHMMSS IBM JZOS JDK Location JH="/usr/lpp/java/J8.0 64" export JAVA HOME="$JH" export PATH="/bin:$JH/bin" Log Level export BQSH ROOT LOGGER=DEBUG Cloud logging export LOG PROJECT="PROJECT NAME" export LOG ID="LOG ID NAME" Binary Data Sets Uncomment the line below to set a default output bucket for scp.

### Run Mainframe Connector in standalone mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode](https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode)
- Source ID: `site-docs-root-2`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Deploy the new job using the following command: gcloud run jobs replace job.yaml Run the job using the following command: gcloud run jobs execute JOB NAME Replace JOB NAME with the name of the job.
- Deploy the new job using the following command: gcloud run jobs replace job.yaml Run the job using the following command: gcloud run jobs execute JOB NAME Replace JOB NAME with the name of the job.
- The following is an example YAML file: environmentVariables: - name: "QUERY" value: "gs://my bucket/my/input.sql" - name: "OUTFILE" value: "gs://my bucket/my/output.orc" - name: "COPYBOOK" value: "gs://my bucket/my/copybook.cpy" - name: "TRANSCODE CONFIGURATION" value: "gs://my bucket/my/transcode-configuration-file.json" - name: "PROJECT ID" value: "my-project" - name: "LOCATION" value: "US" - name: "LOG PROJECT" value: "my-log-project" - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: qsam encode \ $QUERY $OUTFILE --copybook ${COPYBOOK PATH} --transcode-configuration ${TRANSCODE CONFIGURATION PATH} --input-format=BIGQUERY \ --input-parameter project id=${PROJECT ID} \ --input-parameter location=${LOCATION} Use bq export command environmentVariables: - name: "COPYBOOK" value: " COPYBOOK FILEPATH " - name: "LOG PROJECT" value: " LOG PROJECT " - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: bq export --project id=" PROJECT NAME " --location=" LOCATION " --sql="select from project.dataset.table" --bucket=" BUCKET " Replace the following: COPYBOOK FILEPATH : The path to the copybook DD.
- Mainframe Connector provides two ways in which you can export BigQuery table: Using qsam commands (release 5.16.0 and later) Using the bq export command Use qsam commands environmentVariables: - name: "QUERY" value: " QUERY PATH " - name: "OUTFILE" value: " OUTFILE " - name: "COPYBOOK" value: " COPYBOOK PATH " - name: "TRANSCODE CONFIGURATION" value: " TRANSCODE CONFIGURATION PATH " - name: "PROJECT ID" value: " PROJECT ID " - name: "LOCATION" value: " LOCATION " - name: "LOG PROJECT" value: " LOG PROJECT " - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: qsam encode \ $QUERY $OUTFILE --copybook ${COPYBOOK PATH} --transcode-configuration ${TRANSCODE CONFIGURATION PATH} --input-format=BIGQUERY \ --input-parameter project id=${PROJECT ID} \ --input-parameter location=${LOCATION} Replace the following: QUERY PATH : The SQL query to execute.

