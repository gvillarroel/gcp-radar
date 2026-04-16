---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.650Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Transfer-time storage class selection"
feature_slug: "transfer-time-storage-class-selection"
latest_feature_date: "2022-03-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3"
  - "https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferOptions"
keywords:
  - "transfer"
  - "time"
  - "storage"
  - "class"
  - "selection"
  - "now"
  - "supports"
  - "setting"
---

# Transfer-time storage class selection

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service now supports setting the storage class to any supported value during transfer operations, enabling storage class changes at scale.

## Extended Definition

Storage Transfer Service now supports setting the storage class to any supported value during transfer operations, enabling storage class changes at scale.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3)
- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferOptions](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferOptions)

## Supporting Pages

### "Metadata preservation \_|\_ Storage Transfer Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Transfers between Cloud Storage buckets can optionally preserve object ACLs, customer-managed encryption keys, storage class, object creation time (as the value of a customTime field), and temporary holds.
- Storage class There are multiple options for setting storage class during a transfer.
- Storage class There are multiple options for setting storage class during a transfer.
- Storage class There are multiple options for setting storage class during a transfer.

### "Transfer from Amazon S3 to Cloud Storage \_|\_ Storage Transfer Service\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- ENABLED ) . build (); // Create a Transfer Service client StorageTransferServiceClient storageTransfer = StorageTransferServiceClient . create (); // Create the transfer job TransferJob response = storageTransfer . createTransferJob ( CreateTransferJobRequest . newBuilder (). setTransferJob ( transferJob ). build ()); System . out . println ( "Created transfer job from AWS to GCS:" ); System . out . println ( response . toString ()); } } Node.js // Imports the Google Cloud client library const { StorageTransferServiceClient , } = require ( ' @google-cloud/storage-transfer ' ); / TODO(developer): Uncomment the following lines before running the sample. / // The ID of the Google Cloud Platform Project that owns the job // projectId = 'my-project-id' // A useful description for your transfer job // description = 'My transfer job' // AWS S3 source bucket name // awsSourceBucket = 'my-s3-source-bucket' // AWS Access Key ID // awsAccessKeyId = 'AKIA...' // AWS Secret Access Key // awsSecretAccessKey = 'HEAoMK2.../...ku8' // Google Cloud Storage destination bucket name // gcsSinkBucket = 'my-gcs-destination-bucket' // Creates a client const client = new StorageTransferServiceClient (); / Creates a one-time transfer job from Amazon S3 to Google Cloud Storage. / async function transferFromS3 () { // Setting the start date and the end date as the same time creates a // one-time transfer const now = new Date (); const oneTimeSchedule = { day : now . getDate (), month : now . getMonth () + 1 , year : now . getFullYear (), }; // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , description , status : ' ENABLED ' , schedule : { scheduleStartDate : oneTimeSchedule , scheduleEndDate : oneTimeSchedule , }, transferSpec : { awsS3DataSource : { bucketName : awsSourceBucket , awsAccessKey : { accessKeyId : awsAccessKeyId , secretAccessKey : awsSecretAccessKey , }, }, gcsDataSink : { bucketName : gcsSinkBucket , }, }, }, }); console . log ( Created and ran a transfer job from ' ${ awsSourceBucket } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ); } transferFromS3 (); Python Looking for older samples?
- TimeOfDay ; import java.io.IOException ; import java.util.Calendar ; public class TransferFromAws { // Creates a one-off transfer job from Amazon S3 to Google Cloud Storage. public static void transferFromAws ( String projectId , String jobDescription , String awsSourceBucket , String gcsSinkBucket , long startDateTime ) throws IOException { // Your Google Cloud Project ID // String projectId = "your-project-id"; // A short description of this job // String jobDescription = "Sample transfer job from S3 to GCS."; // The name of the source AWS bucket to transfer data from // String awsSourceBucket = "yourAwsSourceBucket"; // The name of the GCS bucket to transfer data to // String gcsSinkBucket = "your-gcs-bucket"; // What day and time in UTC to start the transfer, expressed as an epoch date timestamp. // If this is in the past relative to when the job is created, it will run the next day. // long startDateTime = // new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse("2000-01-01 00:00:00").getTime(); // The ID used to access your AWS account.
- StorageTransferServiceClient () The ID of the Google Cloud Platform Project that owns the job project id = 'my-project-id' A useful description for your transfer job description = 'My transfer job' AWS S3 source bucket name source bucket = 'my-s3-source-bucket' AWS Access Key ID aws access key id = 'AKIA...' AWS Secret Access Key aws secret access key = 'HEAoMK2.../...ku8' Google Cloud Storage destination bucket name sink bucket = 'my-gcs-destination-bucket' now = datetime . utcnow () Setting the start date and the end date as the same time creates a one-time transfer one time schedule = { "day" : now . day , "month" : now . month , "year" : now . year } transfer job request = storage transfer .
- Supported regions Storage Transfer Service supports the following Amazon S3 regions: af-south-1 ap-east-1 ap-northeast-1 ap-northeast-2 ap-northeast-3 ap-south-1 ap-south-2 ap-southeast-1 ap-southeast-2 ap-southeast-3 ap-southeast-4 ca-central-1 ca-west-1 eu-central-1 eu-central-2 eu-north-1 eu-south-1 eu-south-2 eu-west-1 eu-west-2 eu-west-3 il-central-1 me-central-1 me-south-1 sa-east-1 us-east-1 us-east-2 us-west-1 us-west-2 Transfers using the managed private network support the following AWS regions: ap-east-1 ap-northeast-1 ap-northeast-2 ap-northeast-3 ap-south-1 ap-south-2 ap-southeast-1 ca-central-1 ca-west-1 eu-central-1 eu-central-2 eu-north-1 eu-south-1 eu-south-2 eu-west-1 eu-west-2 eu-west-3 us-east-1 us-east-2 us-west-1 us-west-2 Transfer options The following Storage Transfer Service features are available for transfers from S3 to Cloud Storage Transfer specific files using a manifest You can pass a list of files for Storage Transfer Service to act on.

### TransferOptions \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferOptions](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferOptions)
- Source ID: `site-api-reference`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "symlink" : enum ( Symlink ) , "mode" : enum ( Mode ) , "gid" : enum ( GID ) , "uid" : enum ( UID ) , "acl" : enum ( Acl ) , "storageClass" : enum ( StorageClass ) , "temporaryHold" : enum ( TemporaryHold ) , "kmsKey" : enum ( KmsKey ) , "timeCreated" : enum ( TimeCreated ) } Fields symlink enum ( Symlink ) Specifies how symlinks should be handled by the transfer.
- If unspecified, the default behavior is the same as STORAGE CLASS DESTINATION BUCKET DEFAULT . temporaryHold enum ( TemporaryHold ) Specifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets.
- If unspecified, the default behavior is the same as ACL DESTINATION BUCKET DEFAULT. storageClass enum ( StorageClass ) Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets.
- If unspecified, the default behavior is the same as TEMPORARY HOLD PRESERVE . kmsKey enum ( KmsKey ) Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets.

