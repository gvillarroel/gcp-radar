---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.238Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "gsutil cp performance improvements"
feature_slug: "gsutil-cp-performance-improvements"
latest_feature_date: "2024-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/archive"
keywords:
  - "gsutil"
  - "cp"
  - "performance"
  - "improvements"
  - "the"
  - "command"
  - "runs"
  - "faster"
---

# gsutil cp performance improvements

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The gsutil cp command runs faster.

## Extended Definition

The gsutil cp command runs faster.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)
- [https://docs.cloud.google.com/mainframe-connector/docs/archive](https://docs.cloud.google.com/mainframe-connector/docs/archive)

## Supporting Pages

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Execution example gsutil cp gs://sample-bucket/MAINFRAME.DSN.FILE MAINFRAME.DSN.FILE \ --lrecl=16 --blksize=0 --recfm=fb Performance tuning configuration for the gsutil cp command Mainframe Connector supports the following performance tuning configuration for the gsutil cp command.
- You can also perform the following tasks with the gsutil cp command: Perform a dry run of the gsutil cp command Copy a file from Cloud Storage to your Mainframe Fine tune performance of the gsutil cp command Use customized character sets with the gsutil cp .
- To copy a file from Cloud Storage to a Mainframe dataset, specify the DSN and space requirements of the file you want to download to the Mainframe in JCL, as shown in the following example: //OUTFILE DD DSN=MAINFRAME.DSN.FILE,DISP=(,CATLG), // RECFM=FB,DSORG=PS, // SPACE=(10,(2,1),RLSE), // AVGREC=M, // UNIT=SYSDA //SYSPRINT DD SYSOUT= //SYSDUMP DD SYSOUT= //STDIN DD Specify the gsutil cp command in the following format.
- Query file SELECT FROM bigquery-public-data.samples.wikipedia WHERE title = @mytitle AND num characters > @min chars; Execution example bq query \ --project id=mainframe-connector-dev \ --location="US" \ --parameters=mytitle::Hippocrates,min chars:INT64:42600 Perform a dry run of the gsutil cp command The gsutil cp command decodes a QSAM file using a COBOL copybook, and generates an ORC file on Cloud Storage.

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Synopsis gsutil cp [options] gcsUri [dest] Flags and arguments You can use this command for the following different purposes: Copy and transcode a file from a Mainframe or a linux environment to Cloud Storage.
- The gsutil cp command uses the following flags and arguments: dest (Optional) The local path or data source name (DSN).
- Flags and arguments The gsutil rm command uses the following flags and arguments: URL Specify the Cloud Storage location in the format gs://bucket/prefix . --help or -h (Optional) Display this help message. -R or -r (Optional) Recursively delete the contents of directories or objects that match the path expression.
- Synopsis scp [options] [input] [output] Flags and arguments To use this command, you must ensure the following: Set one unique input value through input , --inDD , or --inDsn .

### "Move data transcoded locally on the mainframe to Google Cloud \_|\_ Mainframe\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Using qsam commands (release 5.16.0 and later) Using the vsam decode command (release 5.18.0 and later) Using the gsutil cp command Advantages of qsam and vsam commands The qsam and vsam commands provide the following advantages: Support for compound data types, including the OCCURS clause (lists), REDEFINES clause, and nested records.
- Transcoding is done during the qsam decode , vsam decode , or gsutil cp operations (based on the command you choose), where a mainframe extended binary coded decimal interchange code (EBCDIC) dataset is converted to the ORC format in UTF-8 during the copy to a Cloud Storage bucket.
- Transcode locally using gsutil cp command To transcode your mainframe data locally on your mainframe using the gsutil cp command, use the following steps: Create a job to read the dataset on your mainframe and transcode it to the ORC format, as shown in the following command.
- The following sections describe in detail how you can move data transcoded locally on the mainframe to Google Cloud using qsam or vsam commands and the gsutil cp command .

### "Archive mainframe data to Cloud Storage \_|\_ Mainframe Connector \_|\_\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/archive](https://docs.cloud.google.com/mainframe-connector/docs/archive)
- Source ID: `site-docs-root-2`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Modify the OUTFILE DD to fit your requirements. //OUTFILE DD DSN=MAINFRAME.DSN.FILE,DISP=(,CATLG), // RECFM=FB,DSORG=PS, // SPACE=(10,(2,1),RLSE), // AVGREC=M, // UNIT=SYSDA //SYSPRINT DD SYSOUT= //SYSDUMP DD SYSOUT= //STDIN DD Run the gsutil cp command in the following format.
- If the file already exists on your Mainframe, make sure that you add the --replace flag to the command. gsutil cp GCS URI DSN --recfm= RECFM --lrecl= LRECL --blksize= BLKSIZE --noseek Replace the following: GCS URI : the Cloud Storage URI of the Cloud Storage file.
- Note: You can only restore mainframe binary data that you archived as is (without converting to any other file format) using the gsutil cp command.
- Restore a file from Cloud Storage to your mainframe You can use the gsutil cp command to restore a file from Cloud Storage to a mainframe dataset.

