---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.651Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Cloud Client Library support"
feature_slug: "cloud-client-library-support"
latest_feature_date: "2022-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/libraries"
  - "https://docs.cloud.google.com/storage-transfer/docs/reference/libraries"
  - "https://docs.cloud.google.com/storage-transfer/docs/migration-guide"
keywords:
  - "client"
  - "library"
  - "storage"
  - "transfer"
  - "now"
  - "supports"
  - "libraries"
  - "recommended"
---

# Cloud Client Library support

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service now supports Google Cloud Client Libraries as the recommended programmatic method for calling its APIs.

## Extended Definition

Storage Transfer Service now supports Google Cloud Client Libraries as the recommended programmatic method for calling its APIs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/libraries](https://docs.cloud.google.com/storage-transfer/docs/libraries)
- [https://docs.cloud.google.com/storage-transfer/docs/reference/libraries](https://docs.cloud.google.com/storage-transfer/docs/reference/libraries)
- [https://docs.cloud.google.com/storage-transfer/docs/migration-guide](https://docs.cloud.google.com/storage-transfer/docs/migration-guide)

## Supporting Pages

### Storage Transfer Service client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage-transfer/docs/libraries](https://docs.cloud.google.com/storage-transfer/docs/libraries)
- Source ID: `site-api-reference`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . // Imports the Google Cloud client library const { StorageTransferServiceClient , } = require ( ' @google-cloud/storage-transfer ' ); / TODO(developer): Uncomment the following lines before running the sample. / // Your project id // const projectId = 'my-project' // The ID of the GCS bucket to transfer data from // const gcsSourceBucket = 'my-source-bucket' // The ID of the GCS bucket to transfer data to // const gcsSinkBucket = 'my-sink-bucket' // Creates a client const client = new StorageTransferServiceClient (); / Creates a one-time transfer job. / async function quickstart () { // Creates a request to transfer from the source bucket to // the sink bucket const createRequest = { transferJob : { projectId : projectId , transferSpec : { gcsDataSource : { bucketName : gcsSourceBucket }, gcsDataSink : { bucketName : gcsSinkBucket }, }, status : ' ENABLED ' , }, }; // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ( createRequest ); const runRequest = { jobName : transferJob . name , projectId : projectId , }; await client . runTransferJob ( runRequest ); console . log ( Created and ran a transfer job from ${ gcsSourceBucket } to ${ gcsSinkBucket } with name ${ transferJob . name } ); } quickstart (); PHP To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .
- ENABLED ) . build (); TransferJob response = storageTransfer . createTransferJob ( CreateTransferJobRequest . newBuilder (). setTransferJob ( transferJob ). build ()); storageTransfer . runTransferJobAsync ( RunTransferJobRequest . newBuilder () . setProjectId ( projectId ) . setJobName ( response . getName ()) . build ()) . get (); System . out . println ( "Created and ran transfer job between two GCS buckets with name " + response . getName ()); } } } Node.js To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .
- ENABLED , "transfer spec" : { "gcs data source" : { "bucket name" : source bucket , }, "gcs data sink" : { "bucket name" : sink bucket , }, }, } } ) transfer job = client . create transfer job ( transfer job request ) client . run transfer job ({ "job name" : transfer job . name , "project id" : project id }) print ( f "Created and ran transfer job: { transfer job . name } " ) Ruby To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .
- ListTransferJobs ( request )) { if ( ! r ) throw std :: move ( r ). status (); std :: cout << r - > DebugString () << " \n " ; } return 0 ; } catch ( google :: cloud :: Status const & status ) { std :: cerr << "google::cloud::Status thrown: " << status << " \n " ; return 1 ; } C# To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .

### Storage Transfer Service client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage-transfer/docs/reference/libraries](https://docs.cloud.google.com/storage-transfer/docs/reference/libraries)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . // Imports the Google Cloud client library const { StorageTransferServiceClient , } = require ( ' @google-cloud/storage-transfer ' ); / TODO(developer): Uncomment the following lines before running the sample. / // Your project id // const projectId = 'my-project' // The ID of the GCS bucket to transfer data from // const gcsSourceBucket = 'my-source-bucket' // The ID of the GCS bucket to transfer data to // const gcsSinkBucket = 'my-sink-bucket' // Creates a client const client = new StorageTransferServiceClient (); / Creates a one-time transfer job. / async function quickstart () { // Creates a request to transfer from the source bucket to // the sink bucket const createRequest = { transferJob : { projectId : projectId , transferSpec : { gcsDataSource : { bucketName : gcsSourceBucket }, gcsDataSink : { bucketName : gcsSinkBucket }, }, status : ' ENABLED ' , }, }; // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ( createRequest ); const runRequest = { jobName : transferJob . name , projectId : projectId , }; await client . runTransferJob ( runRequest ); console . log ( Created and ran a transfer job from ${ gcsSourceBucket } to ${ gcsSinkBucket } with name ${ transferJob . name } ); } quickstart (); PHP To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .
- ENABLED ) . build (); TransferJob response = storageTransfer . createTransferJob ( CreateTransferJobRequest . newBuilder (). setTransferJob ( transferJob ). build ()); storageTransfer . runTransferJobAsync ( RunTransferJobRequest . newBuilder () . setProjectId ( projectId ) . setJobName ( response . getName ()) . build ()) . get (); System . out . println ( "Created and ran transfer job between two GCS buckets with name " + response . getName ()); } } } Node.js To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .
- ENABLED , "transfer spec" : { "gcs data source" : { "bucket name" : source bucket , }, "gcs data sink" : { "bucket name" : sink bucket , }, }, } } ) transfer job = client . create transfer job ( transfer job request ) client . run transfer job ({ "job name" : transfer job . name , "project id" : project id }) print ( f "Created and ran transfer job: { transfer job . name } " ) Ruby To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .
- ListTransferJobs ( request )) { if ( ! r ) throw std :: move ( r ). status (); std :: cout << r - > DebugString () << " \n " ; } return 0 ; } catch ( google :: cloud :: Status const & status ) { std :: cerr << "google::cloud::Status thrown: " << status << " \n " ; return 1 ; } C# To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .

### "Migrating to the Storage Transfer Service Cloud Client Library \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/migration-guide](https://docs.cloud.google.com/storage-transfer/docs/migration-guide)
- Source ID: `site-api-reference`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Java Updating dependencies To switch to the new library, replace your dependency on google-api-services-storagetransfer with google-cloud-storage-transfer . <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-storage-transfer</artifactId> <version>0.2.3</version> </dependency> If you are using Gradle without BOM, add this to your dependencies: implementation ' com . google . cloud : google - cloud - storage - transfer : 0.2.3 ' < dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>libraries - bom < / artifactId > < version>24 .1.0 < / version > < type>pom < / type > < scope>import < / scope > < / dependency > < / dependencies > < / dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>google - cloud - storage - transfer < / artifactId > < / dependency > For the most part, code can be pretty easily converted from the API Client Library to the Cloud Client Library.
- StorageTransferServiceClient () Sample comparisons To illustrate the differences between the two libraries, here are the old API Client Samples side-by-side with their equivalents in the Cloud Client Library.
- ENABLED , "schedule" : { "schedule start date" : one time schedule , "schedule end date" : one time schedule , }, "transfer spec" : { "aws s3 data source" : { "bucket name" : source bucket , "aws access key" : { "access key id" : aws access key id , "secret access key" : aws secret access key , }, }, "gcs data sink" : { "bucket name" : sink bucket , }, }, } } ) result = client . create transfer job ( transfer job request ) print ( f "Created transferJob: { result . name } " ) Transfer to nearline API Client Library def main ( description , project id , start date , start time , source bucket , sink bucket ): """Create a daily transfer from Standard to Nearline Storage class.""" storagetransfer = googleapiclient . discovery . build ( "storagetransfer" , "v1" ) Edit this template with desired parameters. transfer job = { "description" : description , "status" : "ENABLED" , "projectId" : project id , "schedule" : { "scheduleStartDate" : { "day" : start date . day , "month" : start date . month , "year" : start date . year , }, "startTimeOfDay" : { "hours" : start time . hour , "minutes" : start time . minute , "seconds" : start time . second , }, }, "transferSpec" : { "gcsDataSource" : { "bucketName" : source bucket }, "gcsDataSink" : { "bucketName" : sink bucket }, "objectConditions" : { "minTimeElapsedSinceLastModification" : "2592000s" # 30 days }, "transferOptions" : { "deleteObjectsFromSourceAfterTransfer" : "true" }, }, } result = storagetransfer . transferJobs () . create ( body = transfer job ) . execute () print ( "Returned transferJob: {} " . format ( json . dumps ( result , indent = 4 ))) Cloud Client Library Note the import of google.protobuf.duration pb2.Duration . from datetime import datetime from google.cloud import storage transfer from google.protobuf.duration pb2 import Duration def create daily nearline 30 day migration ( project id : str , description : str , source bucket : str , sink bucket : str , start date : datetime , ): """Create a daily migration from a GCS bucket to a Nearline GCS bucket for objects untouched for 30 days.""" client = storage transfer .
- Transfer from Amazon S3 API Client Library def main ( description , project id , start date , start time , source bucket , access key id , secret access key , sink bucket , ): """Create a one-time transfer from Amazon S3 to Google Cloud Storage.""" storagetransfer = googleapiclient . discovery . build ( "storagetransfer" , "v1" ) Edit this template with desired parameters. transfer job = { "description" : description , "status" : "ENABLED" , "projectId" : project id , "schedule" : { "scheduleStartDate" : { "day" : start date . day , "month" : start date . month , "year" : start date . year , }, "scheduleEndDate" : { "day" : start date . day , "month" : start date . month , "year" : start date . year , }, "startTimeOfDay" : { "hours" : start time . hour , "minutes" : start time . minute , "seconds" : start time . second , }, }, "transferSpec" : { "awsS3DataSource" : { "bucketName" : source bucket , "awsAccessKey" : { "accessKeyId" : access key id , "secretAccessKey" : secret access key , }, }, "gcsDataSink" : { "bucketName" : sink bucket }, }, } result = storagetransfer . transferJobs () . create ( body = transfer job ) . execute () print ( "Returned transferJob: {} " . format ( json . dumps ( result , indent = 4 ))) Cloud Client Library from datetime import datetime from google.cloud import storage transfer def create one time aws transfer ( project id : str , description : str , source bucket : str , aws access key id : str , aws secret access key : str , sink bucket : str , ): """Creates a one-time transfer job from Amazon S3 to Google Cloud Storage.""" client = storage transfer .

