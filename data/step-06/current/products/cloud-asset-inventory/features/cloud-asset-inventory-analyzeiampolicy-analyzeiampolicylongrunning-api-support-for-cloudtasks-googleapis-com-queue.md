---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.136Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory AnalyzeIamPolicy/AnalyzeIamPolicyLongrunning API support for cloudtasks.googleapis.com/Queue"
feature_slug: "cloud-asset-inventory-analyzeiampolicy-analyzeiampolicylongrunning-api-support-for-cloudtasks-googleapis-com-queue"
latest_feature_date: "2023-09-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/tasks/docs/deleting-appengine-queues-and-tasks"
  - "https://docs.cloud.google.com/tasks/docs/creating-queues"
  - "https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks"
keywords:
  - "cloudtasks"
  - "analyzeiampolicylongrunning"
  - "queue"
  - "analyzeiampolicy"
  - "googleapis"
---

# Cloud Asset Inventory AnalyzeIamPolicy/AnalyzeIamPolicyLongrunning API support for cloudtasks.googleapis.com/Queue

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory made Cloud Tasks queue resources publicly available via the AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning APIs.

## Extended Definition

Cloud Asset Inventory made Cloud Tasks queue resources publicly available via the AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning APIs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/tasks/docs/deleting-appengine-queues-and-tasks](https://docs.cloud.google.com/tasks/docs/deleting-appengine-queues-and-tasks)
- [https://docs.cloud.google.com/tasks/docs/creating-queues](https://docs.cloud.google.com/tasks/docs/creating-queues)
- [https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks](https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks)

## Supporting Pages

### Manage queues and tasks \_|\_ Cloud Tasks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tasks/docs/deleting-appengine-queues-and-tasks](https://docs.cloud.google.com/tasks/docs/deleting-appengine-queues-and-tasks)
- Source ID: `site-docs-reference-3`
- Final score: 266
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https://cloudtasks.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION /queues/ QUEUE ID :resume" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https://cloudtasks.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION /queues/ QUEUE ID :purge" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https://cloudtasks.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION /queues/ QUEUE ID :pause" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Execute the following command: curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://cloudtasks.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION /queues/ QUEUE ID /tasks/ TASK NAME " PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### Create Cloud Tasks queues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tasks/docs/creating-queues](https://docs.cloud.google.com/tasks/docs/creating-queues)
- Source ID: `site-docs-reference-3`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "name": "projects/ PROJECT ID /locations/ LOCATION /queues/ QUEUE ID " } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://cloudtasks.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION /queues" Select-Object -Expand Content APIs Explorer (browser) Copy the request body and open the method reference page .
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json PROJECT ID /locations/ LOCATION /queues/ QUEUE ID " } EOF Then execute the following command to send your REST request: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://cloudtasks.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION /queues" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://cloudtasks.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION /queues/ QUEUE ID " PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://cloudtasks.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION /queues/ QUEUE ID " Select-Object -Expand Content APIs Explorer (browser) Open the method reference page .

### Create HTTP target tasks \_|\_ Cloud Tasks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks](https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks)
- Source ID: `site-docs-reference-3`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns: The matching queue, or None if it doesn't exist. """ Use application default credentials if not supplied in a header if token : headers [ "Authorization" ] = f "Bearer { token } " endpoint = f "https://cloudtasks.googleapis.com/v2beta3/ { queue . name } /tasks:buffer" response = requests . post ( endpoint , body , headers = headers ) return response . status code Provide your own HTTP target task handlers HTTP Target task handlers are very similar to App Engine task handlers , with the following exceptions: Timeouts : for all HTTP target task handlers the default timeout is 10 minutes, with a maximum of 30 minutes.
- Returns: The matching queue, or None if it doesn't exist. """ Use application default credentials if not supplied in a header if token : headers [ "Authorization" ] = f "Bearer { token } " endpoint = f "https://cloudtasks.googleapis.com/v2beta3/ { queue . name } /tasks:buffer" response = requests . post ( endpoint , body , headers = headers ) return response . status code Set up a service account for HTTP target handler authentication Cloud Tasks can call HTTP target handlers that require authentication if you have a service account with the appropriate credentials to access the handler.
- CreateTaskRequest ( parent = client . queue path ( project , location , queue ), task = task , ) ) Note the requirements.txt file: google - cloud - tasks == 2.18.0 BufferTask method The following examples use application default credentials to authenticate when using the BufferTask method for creating a task. curl curl -X HTTP METHOD \ "https://cloudtasks.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION /queues/ QUEUE ID /tasks:buffer" \ -H "Authorization: Bearer ACCESS TOKEN " Replace the following: HTTP METHOD : the HTTP method for your request; for example GET or POST .
- Call the BufferTask method The following examples show how to create a task by sending an HTTP POST request to the Cloud Tasks API buffer endpoint . curl The following code snippet shows an example of task creation using with the BufferTask method using curl : curl -X HTTP METHOD \ "https://cloudtasks.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION /queues/ QUEUE ID /tasks:buffer" \ Replace the following: HTTP METHOD : the HTTP method for your request; for example GET or POST .

