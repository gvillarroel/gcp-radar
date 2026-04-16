---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.235Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "gsutil cp Cloud Storage to mainframe dataset copy"
feature_slug: "gsutil-cp-cloud-storage-to-mainframe-dataset-copy"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/archive"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
keywords:
  - "gsutil"
  - "cp"
  - "storage"
  - "to"
  - "mainframe"
  - "dataset"
  - "copy"
  - "the"
---

# gsutil cp Cloud Storage to mainframe dataset copy

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The gsutil cp command can copy files from Cloud Storage to a mainframe dataset.

## Extended Definition

The gsutil cp command can copy files from Cloud Storage to a mainframe dataset.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)
- [https://docs.cloud.google.com/mainframe-connector/docs/archive](https://docs.cloud.google.com/mainframe-connector/docs/archive)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)

## Supporting Pages

### "Move data transcoded locally on the mainframe to Google Cloud \_|\_ Mainframe\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)
- Source ID: `site-docs-root`
- Final score: 310
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The input dataset must be a Queued Sequential Access Method (QSAM) file with fixed or variable record length. //STEP01 EXEC BQSH //INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.FILENAME //STDIN DD BUCKET= BUCKET NAME gsutil cp --replace gs://$BUCKET/tablename.orc / Replace BUCKET NAME with the name of the Cloud Storage bucket to which you want to copy mainframe data.
- Transcoding is done during the qsam decode , vsam decode , or gsutil cp operations (based on the command you choose), where a mainframe extended binary coded decimal interchange code (EBCDIC) dataset is converted to the ORC format in UTF-8 during the copy to a Cloud Storage bucket.
- If your input dataset is a Queued Sequential Access Method (QSAM) file with fixed or variable record length, use the following command: //STEP01 EXEC BQSH //INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY //CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS //STDIN DD BUCKET= BUCKET NAME qsam decode --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG dd:INFILE gs://$BUCKET/tablename / If your input dataset is a Virtual Storage Access Method (VSAM) file with fixed or variable record length, use the following command: //STEP01 EXEC BQSH //INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY //CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS //STDIN DD BUCKET= BUCKET NAME vsam decode --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG dd:INFILE gs://$BUCKET/tablename / Replace BUCKET NAME with the name of the Cloud Storage bucket to which you want to copy mainframe data.
- Transcode locally using gsutil cp command To transcode your mainframe data locally on your mainframe using the gsutil cp command, use the following steps: Create a job to read the dataset on your mainframe and transcode it to the ORC format, as shown in the following command.

### "Archive mainframe data to Cloud Storage \_|\_ Mainframe Connector \_|\_\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/archive](https://docs.cloud.google.com/mainframe-connector/docs/archive)
- Source ID: `site-docs-root-2`
- Final score: 308
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Restore a file from Cloud Storage to your mainframe You can use the gsutil cp command to restore a file from Cloud Storage to a mainframe dataset.
- If the file already exists on your Mainframe, make sure that you add the --replace flag to the command. gsutil cp GCS URI DSN --recfm= RECFM --lrecl= LRECL --blksize= BLKSIZE --noseek Replace the following: GCS URI : the Cloud Storage URI of the Cloud Storage file.
- Modify the OUTFILE DD to fit your requirements. //OUTFILE DD DSN=MAINFRAME.DSN.FILE,DISP=(,CATLG), // RECFM=FB,DSORG=PS, // SPACE=(10,(2,1),RLSE), // AVGREC=M, // UNIT=SYSDA //SYSPRINT DD SYSOUT= //SYSDUMP DD SYSOUT= //STDIN DD Run the gsutil cp command in the following format.
- To restore a file from Cloud Storage to a mainframe dataset, use the following steps: Specify the DSN and space requirements of the file you want to download to your mainframe in JCL.

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 282
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To copy a file from Cloud Storage to a Mainframe dataset, specify the DSN and space requirements of the file you want to download to the Mainframe in JCL, as shown in the following example: //OUTFILE DD DSN=MAINFRAME.DSN.FILE,DISP=(,CATLG), // RECFM=FB,DSORG=PS, // SPACE=(10,(2,1),RLSE), // AVGREC=M, // UNIT=SYSDA //SYSPRINT DD SYSOUT= //SYSDUMP DD SYSOUT= //STDIN DD Specify the gsutil cp command in the following format.
- Copy a file from Cloud Storage to your Mainframe You can use the gsutil cp command to copy a file from Cloud Storage to a Mainframe dataset.
- Query file SELECT FROM bigquery-public-data.samples.wikipedia WHERE title = @mytitle AND num characters > @min chars; Execution example bq query \ --project id=mainframe-connector-dev \ --location="US" \ --parameters=mytitle::Hippocrates,min chars:INT64:42600 Perform a dry run of the gsutil cp command The gsutil cp command decodes a QSAM file using a COBOL copybook, and generates an ORC file on Cloud Storage.
- You can also perform the following tasks with the gsutil cp command: Perform a dry run of the gsutil cp command Copy a file from Cloud Storage to your Mainframe Fine tune performance of the gsutil cp command Use customized character sets with the gsutil cp .

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 282
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Synopsis gsutil cp [options] gcsUri [dest] Flags and arguments You can use this command for the following different purposes: Copy and transcode a file from a Mainframe or a linux environment to Cloud Storage.
- The default value is 64 MiB. --help or -h (Optional) Display this help message. gsutil cp Transcode data from your Mainframe to a Cloud Storage bucket.
- To run Mainframe Connector in remote mode, set the --remote flag. --replace (Optional) Delete the destination recursively before uploading. --stats table = TABLE (Optional) Specify the table to insert statistics into. --tfDSN = DSN (Optional) Specify the transformations from a DSN , DATASET.MEMBER , or PDS(MBR) . --tfGCS = GCS (Optional) Specify the transformations file from Cloud Storage. --timeOutMinutes = MINUTES (Optional) Specify the timeout in minutes for a remote grpc call.
- The default value is CP037. --gcsOutUri = URI (Optional) Specify the destination Cloud Storage URI of the file copy. --help or -h Display this helper text. --inDD = INPUT (Optional) Specify the DD file to be copied.

