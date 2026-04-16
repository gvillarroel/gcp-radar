---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.677Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service UI prefix support"
feature_slug: "storage-transfer-service-ui-prefix-support"
latest_feature_date: "2015-07-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible"
keywords:
  - "storage"
  - "transfer"
  - "ui"
  - "prefix"
  - "user"
  - "interface"
  - "now"
  - "documents"
---

# Storage Transfer Service UI prefix support

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

The Storage Transfer Service user interface now documents support for using object prefixes during transfer configuration.

## Extended Definition

The Storage Transfer Service user interface now documents support for using object prefixes during transfer configuration.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)

## Supporting Pages

### "Transfer from HDFS to Cloud Storage \_|\_ Storage Transfer Service \_|\_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs)
- Source ID: `site-docs-root`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Storage Transfer Service provides multiple interfaces through which to create a transfer.
- For more information about the agent's command-line options, see Agent command-line options . gcloud CLI To install one or more agents using the gcloud CLI, run gcloud transfer agents install : gcloud transfer agents install --pool = POOL NAME \ --count = NUM AGENTS \ --mount-directories = MOUNT DIRECTORIES \ --hdfs-namenode-uri = HDFS NAMENODE URI \ --hdfs-username = HDFS USERNAME \ --hdfs-data-transfer-protection = HDFS DATA TRANSFER PROTECTION \ --kerberos-config-file = KERBEROS CONFIG FILE \ --kerberos-keytab-file = KERBEROS KEYTAB FILE \ --kerberos-user-principal = KERBEROS USER PRINCIPAL \ --kerberos-service-principal = KERBEROS SERVICE PRINCIPAL \ Replace the following: --hdfs-namenode-uri specifies an HDFS cluster including a schema, namenode, and port, in URI format.
- Kerberos To authenticate to your file system using Kerberos, use the following command: sudo docker run -d --ulimit memlock = 64000000 --rm \ --network = host \ -v /:/transfer root \ gcr.io/cloud-ingest/tsop-agent:latest \ --enable-mount-directory \ --project-id = ${ PROJECT ID } \ --hostname = $( hostname ) \ --creds-file = "service account.json" \ --agent-pool = ${ AGENT POOL NAME } \ --hdfs-namenode-uri = cluster-namenode \ --kerberos-config-file = /etc/krb5.conf \ --kerberos-user-principal = user \ --kerberos-keytab-file = /path/to/folder.keytab Replace the following: --network=host should be omitted if you're running more than one agent on this machine. --hdfs-namenode-uri : A schema, namenode, and port, in URI format, representing an HDFS cluster.
- Simple auth To authenticate to your file system using simple auth: sudo docker run -d --ulimit memlock = 64000000 --rm \ --network = host \ -v /:/transfer root \ gcr.io/cloud-ingest/tsop-agent:latest \ --enable-mount-directory \ --project-id = ${ PROJECT ID } \ --hostname = $( hostname ) \ --creds-file = " ${ CREDS FILE } " \ --agent-pool = " ${ AGENT POOL NAME } " \ --hdfs-namenode-uri = cluster-namenode \ --hdfs-username = " ${ USERNAME } " Replace the following: --hdfs-username : Username to use when connecting to an HDFS cluster using simple auth. --hdfs-namenode-uri : A schema, namenode, and port, in URI format, representing an HDFS cluster.

### "Transfer from Amazon S3 to Cloud Storage \_|\_ Storage Transfer Service\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3)
- Source ID: `site-docs-root`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Create a transfer Storage Transfer Service provides multiple interfaces through which to create a transfer.
- ENABLED ) . build (); // Create a Transfer Service client StorageTransferServiceClient storageTransfer = StorageTransferServiceClient . create (); // Create the transfer job TransferJob response = storageTransfer . createTransferJob ( CreateTransferJobRequest . newBuilder (). setTransferJob ( transferJob ). build ()); System . out . println ( "Created transfer job from AWS to GCS:" ); System . out . println ( response . toString ()); } } Node.js // Imports the Google Cloud client library const { StorageTransferServiceClient , } = require ( ' @google-cloud/storage-transfer ' ); / TODO(developer): Uncomment the following lines before running the sample. / // The ID of the Google Cloud Platform Project that owns the job // projectId = 'my-project-id' // A useful description for your transfer job // description = 'My transfer job' // AWS S3 source bucket name // awsSourceBucket = 'my-s3-source-bucket' // AWS Access Key ID // awsAccessKeyId = 'AKIA...' // AWS Secret Access Key // awsSecretAccessKey = 'HEAoMK2.../...ku8' // Google Cloud Storage destination bucket name // gcsSinkBucket = 'my-gcs-destination-bucket' // Creates a client const client = new StorageTransferServiceClient (); / Creates a one-time transfer job from Amazon S3 to Google Cloud Storage. / async function transferFromS3 () { // Setting the start date and the end date as the same time creates a // one-time transfer const now = new Date (); const oneTimeSchedule = { day : now . getDate (), month : now . getMonth () + 1 , year : now . getFullYear (), }; // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , description , status : ' ENABLED ' , schedule : { scheduleStartDate : oneTimeSchedule , scheduleEndDate : oneTimeSchedule , }, transferSpec : { awsS3DataSource : { bucketName : awsSourceBucket , awsAccessKey : { accessKeyId : awsAccessKeyId , secretAccessKey : awsSecretAccessKey , }, }, gcsDataSink : { bucketName : gcsSinkBucket , }, }, }, }); console . log ( Created and ran a transfer job from ' ${ awsSourceBucket } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ); } transferFromS3 (); Python Looking for older samples?
- CloudFront distribution If you're transferring from S3 via a CloudFront distribution, specify the distribution domain name as the value of the transferSpec.awsS3DataSource.cloudfrontDomain field: POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "description" : " DESCRIPTION " , "status" : "ENABLED" , "projectId" : " PROJECT ID " , "transferSpec" : { "awsS3DataSource" : { "bucketName" : " AWS SOURCE NAME " , "cloudfrontDomain" : " https://dy1h2n3l4ob56.cloudfront.net " , "awsAccessKey" : { "accessKeyId" : " AWS ACCESS KEY ID " , "secretAccessKey" : " AWS SECRET ACCESS KEY " } }, "gcsDataSink" : { "bucketName" : " GCS SINK NAME " } } } Managed private network To transfer from S3 using a Google-managed private network, specify the transferSpec.awsS3DataSource.managedPrivateNetwork field: POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "description" : " DESCRIPTION " , "status" : "ENABLED" , "projectId" : " PROJECT ID " , "transferSpec" : { "awsS3DataSource" : { "bucketName" : " AWS SOURCE NAME " , "managedPrivateNetwork" : TRUE , "awsAccessKey" : { "accessKeyId" : " AWS ACCESS KEY ID " , "secretAccessKey" : " AWS SECRET ACCESS KEY " } }, "gcsDataSink" : { "bucketName" : " GCS SINK NAME " } } } Client libraries The following samples show you how to use Storage Transfer Service programmatically with Go, Java, Node.js, and Python.
- TimeOfDay ; import java.io.IOException ; import java.util.Calendar ; public class TransferFromAws { // Creates a one-off transfer job from Amazon S3 to Google Cloud Storage. public static void transferFromAws ( String projectId , String jobDescription , String awsSourceBucket , String gcsSinkBucket , long startDateTime ) throws IOException { // Your Google Cloud Project ID // String projectId = "your-project-id"; // A short description of this job // String jobDescription = "Sample transfer job from S3 to GCS."; // The name of the source AWS bucket to transfer data from // String awsSourceBucket = "yourAwsSourceBucket"; // The name of the GCS bucket to transfer data to // String gcsSinkBucket = "your-gcs-bucket"; // What day and time in UTC to start the transfer, expressed as an epoch date timestamp. // If this is in the past relative to when the job is created, it will run the next day. // long startDateTime = // new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse("2000-01-01 00:00:00").getTime(); // The ID used to access your AWS account.

### "Transfer from S3-compatible storage to Cloud Storage \_|\_ Storage Transfer\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)
- Source ID: `site-docs-root`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Defaults to the default agent // const sourceAgentPoolName = 'projects/my-project/agentPools/transfer service default'; // The S3-compatible bucket name to transfer data from // const sourceBucketName = "my-bucket-name"; // The S3-compatible path (object prefix) to transfer data from // const sourcePath = "path/to/data/"; // The ID of the GCS bucket to transfer data to // const gcsSinkBucket = "my-sink-bucket"; // The GCS path (object prefix) to transfer data to // const gcsPath = "path/to/data/"; // The S3 region of the source bucket // const region = 'us-east-1'; // The S3-compatible endpoint // const endpoint = "us-east-1.example.com"; // The S3-compatible network protocol // const protocol = NetworkProtocol.NETWORK PROTOCOL HTTPS; // The S3-compatible request model // const requestModel = RequestModel.REQUEST MODEL VIRTUAL HOSTED STYLE; // The S3-compatible auth method // const authMethod = AuthMethod.AUTH METHOD AWS SIGNATURE V4; // Creates a client const client = new storageTransfer .
- Defaults to 'projects/{project id}/agentPools/transfer service default' source agent pool name = 'projects/my-project/agentPools/my-agent' The S3 compatible bucket name to transfer data from source bucket name = "my-bucket-name" The S3 compatible path (object prefix) to transfer data from source path = "path/to/data/" The ID of the GCS bucket to transfer data to gcs sink bucket = "my-sink-bucket" The GCS path (object prefix) to transfer data to gcs path = "path/to/data/" The S3 region of the source bucket region = 'us-east-1' The S3-compatible endpoint endpoint = "us-east-1.example.com" The S3-compatible network protocol protocol = NetworkProtocol.NETWORK PROTOCOL HTTPS The S3-compatible request model request model = RequestModel.REQUEST MODEL VIRTUAL HOSTED STYLE The S3-compatible auth method auth method = AuthMethod.AUTH METHOD AWS SIGNATURE V4 transfer job request = storage transfer .
- If not provided, defaults to the default agent. // sourceAgentPoolName := "projects/my-project/agentPools/transfer service default" // The S3 compatible bucket name to transfer data from. //sourceBucketName = "my-bucket-name" // The S3 compatible path (object prefix) to transfer data from. //sourcePath = "path/to/data" // The ID of the GCS bucket to transfer data to. //gcsSinkBucket = "my-sink-bucket" // The GCS path (object prefix) to transfer data to. //gcsPath = "path/to/data" // The S3 region of the source bucket. region := "us-east-1" // The S3 compatible endpoint. endpoint := "us-east-1.example.com" // The S3 compatible network protocol. protocol := storagetransferpb .
- StorageTransferServiceClient (); / Creates a transfer from an AWS S3-compatible source to GCS / async function transferFromS3CompatibleSource () { // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , transferSpec : { sourceAgentPoolName , awsS3CompatibleDataSource : { region , s3Metadata : { authMethod , protocol , requestModel , }, endpoint , bucketName : sourceBucketName , path : sourcePath , }, gcsDataSink : { bucketName : gcsSinkBucket , path : gcsPath , }, }, status : ' ENABLED ' , }, }); await client . runTransferJob ({ jobName : transferJob . name , projectId , }); console . log ( Created and ran a transfer job from ' ${ sourceBucketName } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ` ); } transferFromS3CompatibleSource (); Python To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .

