---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.647Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service gcloud CLI management"
feature_slug: "storage-transfer-service-gcloud-cli-management"
latest_feature_date: "2022-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-command-options"
  - "https://docs.cloud.google.com/iam/docs/authentication"
  - "https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools"
keywords:
  - "storage"
  - "transfer"
  - "gcloud"
  - "cli"
  - "management"
  - "generally"
  - "available"
  - "via"
---

# Storage Transfer Service gcloud CLI management

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service is generally available via the gcloud command-line tool for creating and managing transfer jobs, installing agents, and managing agent pools.

## Extended Definition

Storage Transfer Service is generally available via the gcloud command-line tool for creating and managing transfer jobs, installing agents, and managing agent pools.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-command-options](https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-command-options)
- [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication)
- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools)

## Supporting Pages

### "Transfer agent command-line options \_|\_ Storage Transfer Service \_|\_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-command-options](https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-command-options)
- Source ID: `site-api-reference`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Storage Storage Transfer Service Reference Send feedback Transfer agent command-line options Stay organized with collections Save and categorize content based on your preferences.
- When using -v , we require the host-directory and container-directory to be the same, otherwise Storage Transfer Service won't successfully locate your files for transfer.
- If the default doesn't fit your environment, you can specify a relevant maximum memory usage in the following formats: max-physical-mem value Maximum memory setting 6g 6 gigabytes 6gb 6 gigabytes 6GiB 6 gibibytes --project-id= project-id Required string of the project ID that is hosting the transfer resources that are created and billed. --version Displays the current version of the agent.
- Note: Unless you are using --enable mount directory , you must prefix this path with /transfer root , for example /transfer root/path/to/cred file.json . --enable mount directory Optionally mounts the whole file system under the directory /transfer root within the Docker container, rather than specifying individual Docker -v volume mounts .

### "Authenticate to IAM \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication)
- Source ID: `site-iam-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" PowerShell (Windows) Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" Select-Object -Expand Content For more information about authenticating using REST and gRPC, see Authenticate for using REST .
- Grant the required role to the principal that will attach the service account to other resources. gcloud iam service-accounts add-iam-policy-binding SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com --member = "user: USER EMAIL " --role = roles/iam.serviceAccountUser Replace the following: SERVICE ACCOUNT NAME : the name of the service account PROJECT ID : the project ID where you created the service account USER EMAIL : the email address for a Google Account Create the resource that will run your code, and attach the service account to that resource.
- To provide access to your project and your resources, grant a role to the service account: gcloud projects add-iam-policy-binding PROJECT ID --member = "serviceAccount: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com" --role = ROLE Replace the following: SERVICE ACCOUNT NAME : the name of the service account PROJECT ID : the project ID where you created the service account ROLE : the role to grant Note : The --role flag affects which resources the service account can access in your project.
- To set up a local ADC file with service account impersonation, use the --impersonate-service-account flag with the gcloud auth application-default login command : gcloud auth application-default login --impersonate-service-account = SERVICE ACCT EMAIL For more information about service account impersonation, see Use service account impersonation .

### "REST Resource: projects.agentPools \_|\_ Storage Transfer Service \_|\_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools)
- Source ID: `site-api-reference`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Storage Storage Transfer Service Reference Send feedback REST Resource: projects.agentPools Stay organized with collections Save and categorize content based on your preferences.
- At this state, Agents can join the AgentPool and participate in the transfer jobs in that pool.

