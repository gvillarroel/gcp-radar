---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.649Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service transfer manifests"
feature_slug: "storage-transfer-service-transfer-manifests"
latest_feature_date: "2022-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/manifest"
  - "https://docs.cloud.google.com/storage-transfer/docs/managing-on-prem-agents"
  - "https://docs.cloud.google.com/iam/docs/federated-identity-supported-services"
keywords:
  - "storage"
  - "transfer"
  - "manifests"
  - "now"
  - "supports"
---

# Storage Transfer Service transfer manifests

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service now supports transfer manifests.

## Extended Definition

Storage Transfer Service now supports transfer manifests.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/manifest](https://docs.cloud.google.com/storage-transfer/docs/manifest)
- [https://docs.cloud.google.com/storage-transfer/docs/managing-on-prem-agents](https://docs.cloud.google.com/storage-transfer/docs/managing-on-prem-agents)
- [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)

## Supporting Pages

### "Identity federation: products and limitations \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- Source ID: `site-iam-reference`
- Final score: 36
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Other: No known limitations Storage Transfer Service GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Text-to-Speech GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Transcoder API GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Transfer Appliance GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Translation Hub Unsupported Alternatives: No alternatives available Vertex AI GA Console (federated): When Workforce Identity Federation users create a new model monitoring job, Vertex AI doesn't prefill the alert email input with their email address.
- Google Cloud API: No known limitations Other: The following features don't support Workforce Identity Federation with BigQuery: Connected Sheets Google Drive Recommendations Slot estimator The following operations don't support Workforce Identity Federation: Loading data from Amazon S3 , Apache Spark , or Azure Blob Storage through the Connection API Loading data from Google Drive Bigtable GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Binary Authorization GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Blockchain Analytics GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Blockchain Node Engine GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Carbon Footprint GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Certificate Authority Service GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Certificate Manager GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Channel Services GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Asset Inventory GA Console (federated): In the IAM policy tab, the Analyze Full Access button is unavailable for Workforce Identity Federation users.
- Other: No known limitations Cloud Build GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud CDN GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Code Unsupported Alternatives: No alternatives available Cloud Composer GA Console (federated): No known limitations Google Cloud API: No known limitations Other: Cloud Composer supports Workforce Identity Federation only for environments created in Composer version 2.1.11 or later and Airflow version 2.4.3 or later.
- Other: No known limitations Cloud Data Fusion GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Deploy GA Console (federated): Cloud Storage buckets must have uniform bucket-level access enabled to view Cloud Deploy artifacts.

### "Transfer specific files or objects using a manifest \_|\_ Storage Transfer\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/manifest](https://docs.cloud.google.com/storage-transfer/docs/manifest)
- Source ID: `site-docs-root`
- Final score: 35
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Storage Transfer Service supports the transfer of specific files or objects, which are specified using a manifest .
- Must be a gs: URL // const manifestLocation = 'gs://my-bucket/sample manifest.csv' // Creates a client const client = new StorageTransferServiceClient (); / Creates a request to transfer from the local file system to the sink bucket / async function transferViaManifest () { const createRequest = { transferJob : { projectId , transferSpec : { sourceAgentPoolName , posixDataSource : { rootDirectory , }, gcsDataSink : { bucketName : gcsSinkBucket }, transferManifest : { location : manifestLocation , }, }, status : ' ENABLED ' , }, }; // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ( createRequest ); const runRequest = { jobName : transferJob . name , projectId : projectId , }; await client . runTransferJob ( runRequest ); console . log ( Created and ran a transfer job from ' ${ rootDirectory } ' to ' ${ gcsSinkBucket } ' using manifest \ ${ manifestLocation } \ with name ${ transferJob . name } ); } transferViaManifest (); Python from google.cloud import storage transfer def create transfer with manifest ( project id : str , description : str , source agent pool name : str , root directory : str , sink bucket : str , manifest location : str , ): """Create a transfer from a POSIX file system to a GCS bucket using a manifest file.""" client = storage transfer .
- CreateTransferJobRequest . newBuilder () . setTransferJob ( transferJob ) . build ()); System . out . println ( "Created and ran a transfer job from " + rootDirectory + " to " + gcsSinkBucket + " using " + "manifest file " + manifestLocation + " with name " + response . getName ()); } } } Node.js // Imports the Google Cloud client library const { StorageTransferServiceClient , } = require ( ' @google-cloud/storage-transfer ' ); / TODO(developer): Uncomment the following lines before running the sample. / // Your project id // const projectId = 'my-project' // The agent pool associated with the POSIX data source.
- Enter the manifest file location. gcloud To transfer the files or objects that are listed in the manifest, include the --manifest-file= MANIFEST FILE flag with your gcloud transfer jobs create command. gcloud transfer jobs create SOURCE DESTINATION \ --manifest-file = MANIFEST FILE MANIFEST FILE can be any of the following values: The path to the CSV file in a Cloud Storage bucket: --manifest-file=gs://my bucket/sample manifest.csv See Upload the manifest to Cloud Storage for details on required permissions, if the bucket or file is not public.

### "Manage transfer agents \_|\_ Storage Transfer Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/managing-on-prem-agents](https://docs.cloud.google.com/storage-transfer/docs/managing-on-prem-agents)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Storage Transfer Service also supports Podman for container management; you must install your agents using the podman run command in order to use Podman.
- If your transfer is from AWS S3 or S3-compatible storage, pass your access key ID and secret key using environment variables: sudo docker run --ulimit memlock=64000000 -d --rm \ -v HOST DIRECTORY : CONTAINER DIRECTORY \ -v PATH/TO/KEY.JSON :/etc/gcloud/key.json:ro \ -e AWS ACCESS KEY ID= AWS ACCESS KEY ID \ -e AWS SECRET ACCESS KEY= AWS SECRET ACCESS KEY \ gcr.io/cloud-ingest/tsop-agent:latest \ --project-id= PROJECT ID \ --creds-file=/etc/gcloud/key.json \ --hostname=$(hostname) \ --agent-pool= POOL NAME --gcs-api-endpoint=storage.
- Both flags delete all agents on the machine; the --uninstall flag additionally uninstalls the agent Docker image. gcloud transfer agents delete --all gcloud transfer agents delete --uninstall File system transfer details Incremental transfers Storage Transfer Service begins all transfers by computing the data present at the source and destination to determine which source files are new, updated, or deleted since the last transfer.
- If your transfer is from AWS S3 or S3-compatible storage, pass your access key ID and secret key using environment variables: -e AWS ACCESS KEY ID= AWS ACCESS KEY ID \ -e AWS SECRET ACCESS KEY= AWS SECRET ACCESS KEY ``` --env HTTPS PROXY= PROXY specifies a forward proxy on your network.

