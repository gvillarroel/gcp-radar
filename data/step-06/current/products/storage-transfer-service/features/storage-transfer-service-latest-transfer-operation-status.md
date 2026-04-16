---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.663Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service latest transfer operation status"
feature_slug: "storage-transfer-service-latest-transfer-operation-status"
latest_feature_date: "2020-10-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/Operation"
  - "https://docs.cloud.google.com/storage-transfer/docs/migration-guide"
  - "https://docs.cloud.google.com/storage-transfer/docs/reference/migration-guide"
keywords:
  - "storage"
  - "transfer"
  - "operation"
  - "status"
  - "provides"
  - "preview"
  - "obtaining"
  - "most"
---

# Storage Transfer Service latest transfer operation status

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service provides preview support for obtaining the status of the most recent transfer operation.

## Extended Definition

Storage Transfer Service provides preview support for obtaining the status of the most recent transfer operation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/Operation](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/Operation)
- [https://docs.cloud.google.com/storage-transfer/docs/migration-guide](https://docs.cloud.google.com/storage-transfer/docs/migration-guide)
- [https://docs.cloud.google.com/storage-transfer/docs/reference/migration-guide](https://docs.cloud.google.com/storage-transfer/docs/reference/migration-guide)

## Supporting Pages

### Operation \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/Operation](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/Operation)
- Source ID: `site-api-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Storage Storage Transfer Service Reference Send feedback Operation Stay organized with collections Save and categorize content based on your preferences.
- Some services might not provide the result. result can be only one of the following: error object ( Status ) The error result of the operation in case of failure or cancellation. response object The normal, successful response of the operation.
- The format of name is transferOperations/some/unique/name . metadata object Represents the transfer operation object.
- To request a TransferOperation object, use transferOperations.get .

### "Migrating to the Storage Transfer Service Cloud Client Library \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/migration-guide](https://docs.cloud.google.com/storage-transfer/docs/migration-guide)
- Source ID: `site-api-reference`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ENABLED , "schedule" : { "schedule start date" : one time schedule , "schedule end date" : one time schedule , }, "transfer spec" : { "aws s3 data source" : { "bucket name" : source bucket , "aws access key" : { "access key id" : aws access key id , "secret access key" : aws secret access key , }, }, "gcs data sink" : { "bucket name" : sink bucket , }, }, } } ) result = client . create transfer job ( transfer job request ) print ( f "Created transferJob: { result . name } " ) Transfer to nearline API Client Library def main ( description , project id , start date , start time , source bucket , sink bucket ): """Create a daily transfer from Standard to Nearline Storage class.""" storagetransfer = googleapiclient . discovery . build ( "storagetransfer" , "v1" ) Edit this template with desired parameters. transfer job = { "description" : description , "status" : "ENABLED" , "projectId" : project id , "schedule" : { "scheduleStartDate" : { "day" : start date . day , "month" : start date . month , "year" : start date . year , }, "startTimeOfDay" : { "hours" : start time . hour , "minutes" : start time . minute , "seconds" : start time . second , }, }, "transferSpec" : { "gcsDataSource" : { "bucketName" : source bucket }, "gcsDataSink" : { "bucketName" : sink bucket }, "objectConditions" : { "minTimeElapsedSinceLastModification" : "2592000s" # 30 days }, "transferOptions" : { "deleteObjectsFromSourceAfterTransfer" : "true" }, }, } result = storagetransfer . transferJobs () . create ( body = transfer job ) . execute () print ( "Returned transferJob: {} " . format ( json . dumps ( result , indent = 4 ))) Cloud Client Library Note the import of google.protobuf.duration pb2.Duration . from datetime import datetime from google.cloud import storage transfer from google.protobuf.duration pb2 import Duration def create daily nearline 30 day migration ( project id : str , description : str , source bucket : str , sink bucket : str , start date : datetime , ): """Create a daily migration from a GCS bucket to a Nearline GCS bucket for objects untouched for 30 days.""" client = storage transfer .
- Transfer from Amazon S3 API Client Library def main ( description , project id , start date , start time , source bucket , access key id , secret access key , sink bucket , ): """Create a one-time transfer from Amazon S3 to Google Cloud Storage.""" storagetransfer = googleapiclient . discovery . build ( "storagetransfer" , "v1" ) Edit this template with desired parameters. transfer job = { "description" : description , "status" : "ENABLED" , "projectId" : project id , "schedule" : { "scheduleStartDate" : { "day" : start date . day , "month" : start date . month , "year" : start date . year , }, "scheduleEndDate" : { "day" : start date . day , "month" : start date . month , "year" : start date . year , }, "startTimeOfDay" : { "hours" : start time . hour , "minutes" : start time . minute , "seconds" : start time . second , }, }, "transferSpec" : { "awsS3DataSource" : { "bucketName" : source bucket , "awsAccessKey" : { "accessKeyId" : access key id , "secretAccessKey" : secret access key , }, }, "gcsDataSink" : { "bucketName" : sink bucket }, }, } result = storagetransfer . transferJobs () . create ( body = transfer job ) . execute () print ( "Returned transferJob: {} " . format ( json . dumps ( result , indent = 4 ))) Cloud Client Library from datetime import datetime from google.cloud import storage transfer def create one time aws transfer ( project id : str , description : str , source bucket : str , aws access key id : str , aws secret access key : str , sink bucket : str , ): """Creates a one-time transfer job from Amazon S3 to Google Cloud Storage.""" client = storage transfer .
- TransferOperation ; import java.io.IOException ; public class CheckLatestTransferOperation { // Gets the requested transfer job and checks its latest operation public static void checkLatestTransferOperation ( String projectId , String jobName ) throws IOException { // Your Google Cloud Project ID // String projectId = "your-project-id"; // The name of the job to check // String jobName = "myJob/1234567890"; StorageTransferServiceClient storageTransfer = StorageTransferServiceClient . create (); // Get transfer job and check latest operation TransferJob transferJob = storageTransfer . getTransferJob ( GetTransferJobRequest . newBuilder (). setJobName ( jobName ). setProjectId ( projectId ). build ()); String latestOperationName = transferJob . getLatestOperationName (); if ( ! latestOperationName . isEmpty ()) { Operation operation = storageTransfer . getOperationsClient (). getOperation ( latestOperationName ); TransferOperation latestOperation = TransferOperation . parseFrom ( operation . getMetadata (). getValue ()); System . out . println ( "The latest operation for transfer job " + jobName + " is:" ); System . out . println ( latestOperation . toString ()); } else { System . out . println ( "Transfer job " + jobName + " hasn't run yet," + " try again once the job starts running." ); } } } Python Updating dependencies To use the new library, add a dependency on google-cloud-storage-transfer .
- This sample is used on this page: https://cloud.google.com/storage/transfer/create-transfer For more information, see README.md. """ import argparse import json import googleapiclient.discovery def check latest transfer operation ( project id , job name ): """Check the latest transfer operation associated with a transfer job.""" storagetransfer = googleapiclient . discovery . build ( "storagetransfer" , "v1" ) transferJob = ( storagetransfer . transferJobs () . get ( projectId = project id , jobName = job name ) . execute () ) latestOperationName = transferJob . get ( "latestOperationName" ) if latestOperationName : result = ( storagetransfer . transferOperations () . get ( name = latestOperationName ) . execute () ) print ( "The latest operation for job" + job name + " is: {} " . format ( json . dumps ( result , indent = 4 , sort keys = True )) ) else : print ( "Transfer job " + job name + " does not have an operation scheduled yet, " + "try again once the job starts running." ) if name == " main " : parser = argparse .

### "Migrating to the Storage Transfer Service Cloud Client Library \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/reference/migration-guide](https://docs.cloud.google.com/storage-transfer/docs/reference/migration-guide)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ENABLED , "schedule" : { "schedule start date" : one time schedule , "schedule end date" : one time schedule , }, "transfer spec" : { "aws s3 data source" : { "bucket name" : source bucket , "aws access key" : { "access key id" : aws access key id , "secret access key" : aws secret access key , }, }, "gcs data sink" : { "bucket name" : sink bucket , }, }, } } ) result = client . create transfer job ( transfer job request ) print ( f "Created transferJob: { result . name } " ) Transfer to nearline API Client Library def main ( description , project id , start date , start time , source bucket , sink bucket ): """Create a daily transfer from Standard to Nearline Storage class.""" storagetransfer = googleapiclient . discovery . build ( "storagetransfer" , "v1" ) Edit this template with desired parameters. transfer job = { "description" : description , "status" : "ENABLED" , "projectId" : project id , "schedule" : { "scheduleStartDate" : { "day" : start date . day , "month" : start date . month , "year" : start date . year , }, "startTimeOfDay" : { "hours" : start time . hour , "minutes" : start time . minute , "seconds" : start time . second , }, }, "transferSpec" : { "gcsDataSource" : { "bucketName" : source bucket }, "gcsDataSink" : { "bucketName" : sink bucket }, "objectConditions" : { "minTimeElapsedSinceLastModification" : "2592000s" # 30 days }, "transferOptions" : { "deleteObjectsFromSourceAfterTransfer" : "true" }, }, } result = storagetransfer . transferJobs () . create ( body = transfer job ) . execute () print ( "Returned transferJob: {} " . format ( json . dumps ( result , indent = 4 ))) Cloud Client Library Note the import of google.protobuf.duration pb2.Duration . from datetime import datetime from google.cloud import storage transfer from google.protobuf.duration pb2 import Duration def create daily nearline 30 day migration ( project id : str , description : str , source bucket : str , sink bucket : str , start date : datetime , ): """Create a daily migration from a GCS bucket to a Nearline GCS bucket for objects untouched for 30 days.""" client = storage transfer .
- Transfer from Amazon S3 API Client Library def main ( description , project id , start date , start time , source bucket , access key id , secret access key , sink bucket , ): """Create a one-time transfer from Amazon S3 to Google Cloud Storage.""" storagetransfer = googleapiclient . discovery . build ( "storagetransfer" , "v1" ) Edit this template with desired parameters. transfer job = { "description" : description , "status" : "ENABLED" , "projectId" : project id , "schedule" : { "scheduleStartDate" : { "day" : start date . day , "month" : start date . month , "year" : start date . year , }, "scheduleEndDate" : { "day" : start date . day , "month" : start date . month , "year" : start date . year , }, "startTimeOfDay" : { "hours" : start time . hour , "minutes" : start time . minute , "seconds" : start time . second , }, }, "transferSpec" : { "awsS3DataSource" : { "bucketName" : source bucket , "awsAccessKey" : { "accessKeyId" : access key id , "secretAccessKey" : secret access key , }, }, "gcsDataSink" : { "bucketName" : sink bucket }, }, } result = storagetransfer . transferJobs () . create ( body = transfer job ) . execute () print ( "Returned transferJob: {} " . format ( json . dumps ( result , indent = 4 ))) Cloud Client Library from datetime import datetime from google.cloud import storage transfer def create one time aws transfer ( project id : str , description : str , source bucket : str , aws access key id : str , aws secret access key : str , sink bucket : str , ): """Creates a one-time transfer job from Amazon S3 to Google Cloud Storage.""" client = storage transfer .
- TransferOperation ; import java.io.IOException ; public class CheckLatestTransferOperation { // Gets the requested transfer job and checks its latest operation public static void checkLatestTransferOperation ( String projectId , String jobName ) throws IOException { // Your Google Cloud Project ID // String projectId = "your-project-id"; // The name of the job to check // String jobName = "myJob/1234567890"; StorageTransferServiceClient storageTransfer = StorageTransferServiceClient . create (); // Get transfer job and check latest operation TransferJob transferJob = storageTransfer . getTransferJob ( GetTransferJobRequest . newBuilder (). setJobName ( jobName ). setProjectId ( projectId ). build ()); String latestOperationName = transferJob . getLatestOperationName (); if ( ! latestOperationName . isEmpty ()) { Operation operation = storageTransfer . getOperationsClient (). getOperation ( latestOperationName ); TransferOperation latestOperation = TransferOperation . parseFrom ( operation . getMetadata (). getValue ()); System . out . println ( "The latest operation for transfer job " + jobName + " is:" ); System . out . println ( latestOperation . toString ()); } else { System . out . println ( "Transfer job " + jobName + " hasn't run yet," + " try again once the job starts running." ); } } } Python Updating dependencies To use the new library, add a dependency on google-cloud-storage-transfer .
- This sample is used on this page: https://cloud.google.com/storage/transfer/create-transfer For more information, see README.md. """ import argparse import json import googleapiclient.discovery def check latest transfer operation ( project id , job name ): """Check the latest transfer operation associated with a transfer job.""" storagetransfer = googleapiclient . discovery . build ( "storagetransfer" , "v1" ) transferJob = ( storagetransfer . transferJobs () . get ( projectId = project id , jobName = job name ) . execute () ) latestOperationName = transferJob . get ( "latestOperationName" ) if latestOperationName : result = ( storagetransfer . transferOperations () . get ( name = latestOperationName ) . execute () ) print ( "The latest operation for job" + job name + " is: {} " . format ( json . dumps ( result , indent = 4 , sort keys = True )) ) else : print ( "Transfer job " + job name + " does not have an operation scheduled yet, " + "try again once the job starts running." ) if name == " main " : parser = argparse .

