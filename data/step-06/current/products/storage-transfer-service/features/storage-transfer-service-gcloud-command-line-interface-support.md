---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.652Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service gcloud command-line interface support"
feature_slug: "storage-transfer-service-gcloud-command-line-interface-support"
latest_feature_date: "2021-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs"
  - "https://docs.cloud.google.com/storage-transfer/docs/managing-on-prem-agents"
  - "https://docs.cloud.google.com/iam/docs/authentication"
keywords:
  - "storage"
  - "transfer"
  - "gcloud"
  - "command"
  - "line"
  - "interface"
  - "preview"
  - "creating"
---

# Storage Transfer Service gcloud command-line interface support

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Support in Preview for creating and managing transfer jobs, including agent installation and agent pool lifecycle operations, using the gcloud command-line tool.

## Extended Definition

Support in Preview for creating and managing transfer jobs, including agent installation and agent pool lifecycle operations, using the gcloud command-line tool.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs)
- [https://docs.cloud.google.com/storage-transfer/docs/managing-on-prem-agents](https://docs.cloud.google.com/storage-transfer/docs/managing-on-prem-agents)
- [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication)

## Supporting Pages

### "Transfer from HDFS to Cloud Storage \_|\_ Storage Transfer Service \_|\_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about the agent's command-line options, see Agent command-line options . gcloud CLI To install one or more agents using the gcloud CLI, run gcloud transfer agents install : gcloud transfer agents install --pool = POOL NAME \ --count = NUM AGENTS \ --mount-directories = MOUNT DIRECTORIES \ --hdfs-namenode-uri = HDFS NAMENODE URI \ --hdfs-username = HDFS USERNAME \ --hdfs-data-transfer-protection = HDFS DATA TRANSFER PROTECTION \ --kerberos-config-file = KERBEROS CONFIG FILE \ --kerberos-keytab-file = KERBEROS KEYTAB FILE \ --kerberos-user-principal = KERBEROS USER PRINCIPAL \ --kerberos-service-principal = KERBEROS SERVICE PRINCIPAL \ Replace the following: --hdfs-namenode-uri specifies an HDFS cluster including a schema, namenode, and port, in URI format.
- Creating a new job initiates the specified transfer, unless a schedule or --do-not-run is specified. gcloud transfer jobs create \ hdfs:// /PATH / gs:// BUCKET NAME/PATH / --source-agent-pool = AGENT POOL NAME Replace the following: PATH is an absolute path from the root of the HDFS cluster.
- Additional options include: --do-not-run prevents Storage Transfer Service from running the job upon submission of the command.
- Click Create to create the transfer job. gcloud CLI To create a new transfer job, use the gcloud transfer jobs create command.

### "Manage transfer agents \_|\_ Storage Transfer Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/managing-on-prem-agents](https://docs.cloud.google.com/storage-transfer/docs/managing-on-prem-agents)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about the agent's command-line options, see Agent command-line options . gcloud CLI To install one or more agents using the gcloud CLI, run gcloud transfer agents install : gcloud transfer agents install --pool = POOL NAME --count = NUM AGENTS \ --mount-directories = MOUNT DIRECTORIES The tool walks you through any required steps to install the agent(s).
- This file is mounted by the -v <var>HOST PATH/TO/KEY.JSON</var>:/etc/gcloud/key.json:ro flag in the command. --enable-s3 specifies that this agent is for transfers from S3-compatible storage .
- This file is mounted by the -v <var>HOST PATH/TO/KEY.JSON</var>:/etc/gcloud/key.json:ro flag in the command. --enable-s3 specifies that this agent is for transfers from S3-compatible storage .
- Default credentials To allow the Docker container to authenticate with your gcloud default credentials, create a Docker volume containing a file with your application default credentials by running the following command: sudo docker run -ti --name gcloud-config google/cloud-sdk gcloud auth application-default login Then use the following command to install an agent, using the --volumes-from flag to mount the gcloud-config credentials volume: sudo docker run --ulimit memlock=64000000 -d --rm \ --volumes-from gcloud-config \ -v HOST DIRECTORY : CONTAINER DIRECTORY \ gcr.io/cloud-ingest/tsop-agent:latest \ --project-id= PROJECT ID \ --hostname=$(hostname) \ --agent-pool= POOL NAME Service account auth To install and run transfer agents docker run using service account credentials, specify the path to your JSON-formatted service account key using the --creds-file flag.

### "Authenticate to IAM \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication)
- Source ID: `site-iam-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST requests from the command line When you make a REST request from the command line, you can use your gcloud CLI credentials by including gcloud auth print-access-token as part of the command that sends the request.
- To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" PowerShell (Windows) Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" Select-Object -Expand Content For more information about authenticating using REST and gRPC, see Authenticate for using REST .
- For a local development environment You can set up credentials for a local development environment in the following ways: User credentials for client libraries or third-party tools User credentials for REST requests from the command line Service account impersonation Client libraries or third-party tools Set up Application Default Credentials (ADC) in your local environment: Install the Google Cloud CLI.
- To set up a local ADC file with service account impersonation, use the --impersonate-service-account flag with the gcloud auth application-default login command : gcloud auth application-default login --impersonate-service-account = SERVICE ACCT EMAIL For more information about service account impersonation, see Use service account impersonation .

