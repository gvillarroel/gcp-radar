---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:16.880Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Secret tags for conditional access"
feature_slug: "secret-tags-for-conditional-access"
latest_feature_date: "2024-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secret-manager/docs/create-and-manage-tags"
  - "https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets"
  - "https://docs.cloud.google.com/secret-manager/docs/access-control"
  - "https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets"
keywords:
  - "secret"
  - "tags"
  - "for"
  - "conditional"
  - "access"
  - "can"
  - "be"
  - "attached"
---

# Secret tags for conditional access

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

Tags can be attached to secrets to conditionally grant or deny access based on tag presence.

## Extended Definition

Tags can be attached to secrets to conditionally grant or deny access based on tag presence.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secret-manager/docs/create-and-manage-tags](https://docs.cloud.google.com/secret-manager/docs/create-and-manage-tags)
- [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets)
- [https://docs.cloud.google.com/secret-manager/docs/access-control](https://docs.cloud.google.com/secret-manager/docs/access-control)
- [https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets](https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets)

## Supporting Pages

### Create and manage tags \_|\_ Secret Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/create-and-manage-tags](https://docs.cloud.google.com/secret-manager/docs/create-and-manage-tags)
- Source ID: `site-iam-reference`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud resource-manager tags bindings list \ --parent = RESOURCE ID Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud resource-manager tags bindings list --parent = RESOURCE ID Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud resource-manager tags bindings list ^ --parent = RESOURCE ID You should receive a response similar to the following: name: tagBindings/%2F%2Fcloudresourcemanager.googleapis.com%2Fprojects%2F7890123456/tagValues/567890123456 tagValue: tagValues/567890123456 resource: //secretmanager.googleapis.com/projects/project-abc/secrets/secret-xyz Detach tags from resources You can detach tags that have been directly attached to a secret.
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets create SECRET ID --tags = TAG KEY = TAG VALUE Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets create SECRET ID --tags = TAG KEY = TAG VALUE Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets create SECRET ID --tags = TAG KEY = TAG VALUE REST Before using any of the request data, make the following replacements: PROJECT ID : the ID of the project SECRET ID : the unique identifier of the secret TAGKEY NAME : the permanent ID or namespaced name of the tag key that's attached—for example, tagKeys/567890123456 .
- TagBinding ( parent = f "//secretmanager.googleapis.com/ { secret response . name } " , tag value = f " { tag value } " , ), ) Create the tag binding operation = resource manager client . create tag binding ( request = request ) Wait for the operation to complete response = operation . result () Print the tag binding print ( f "Created tag binding: { response . name } " ) return response List tags attached to resources You can view a list of tag bindings directly attached to or inherited by the secret.
- Go to Secret Manager Tags are displayed in the Tags column of the secret. gcloud To get a list of tag bindings attached to a resource, use the gcloud resource-manager tags bindings list command: Before using any of the command data below, make the following replacements: RESOURCE ID is the full ID of the resource, including the API domain name to identify the type of resource ( //secretmanager.googleapis.com/ ).

### Add labels to secrets \_|\_ Secret Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets)
- Source ID: `site-iam-reference`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This client only needs to be created // once, and can be reused for multiple requests. try ( SecretManagerServiceClient client = SecretManagerServiceClient . create ()) { // Build the name.
- This client only needs to be created // once, and can be reused for multiple requests. try ( SecretManagerServiceClient client = SecretManagerServiceClient . create ()) { // Build the name.
- This client only needs to be created // once, and can be reused for multiple requests. try ( SecretManagerServiceClient client = SecretManagerServiceClient . create ()) { // Build the name.
- This client only needs to be created // once, and can be reused for multiple requests. try ( SecretManagerServiceClient client = SecretManagerServiceClient . create ()) { // Build the name.

### Access control with IAM \_|\_ Secret Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/access-control](https://docs.cloud.google.com/secret-manager/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In Secret Manager, you can enforce conditional access based on the following attributes: Date/time attributes : Use to set expirable, scheduled, or limited-duration access to Secret Manager resources.
- For example, you can allow a user to manage secret versions only on secrets that begin with a specific prefix, or allow a user to access only a specific secret version.
- Lowest-level resources where you can grant this role: Secret cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.operations.get cloudkms. projects. showEffectiveAutokeyConfig resourcemanager.projects.get resourcemanager.projects.list secretmanager. secretmanager.locations.get secretmanager.locations.list secretmanager.secrets.create secretmanager. secrets. createTagBinding secretmanager.secrets.delete secretmanager. secrets. deleteTagBinding secretmanager.secrets.get secretmanager. secrets. getIamPolicy secretmanager.secrets.list secretmanager. secrets. listEffectiveTags secretmanager. secrets. listTagBindings secretmanager. secrets. setIamPolicy secretmanager.secrets.update secretmanager.versions.access secretmanager.versions.add secretmanager.versions.destroy secretmanager.versions.disable secretmanager.versions.enable secretmanager.versions.get secretmanager.versions.list Secret Manager Secret Accessor ( roles/ secretmanager.secretAccessor ) Allows accessing the payload of secrets.
- Lowest-level resources where you can grant this role: Secret resourcemanager.projects.get resourcemanager.projects.list secretmanager.versions.access Secret Manager Viewer ( roles/ secretmanager.viewer ) Allows viewing metadata of all Secret Manager resources Lowest-level resources where you can grant this role: Secret resourcemanager.projects.get resourcemanager.projects.list secretmanager.locations. secretmanager.locations.get secretmanager.locations.list secretmanager.secrets.get secretmanager. secrets. getIamPolicy secretmanager.secrets.list secretmanager. secrets. listEffectiveTags secretmanager. secrets. listTagBindings secretmanager.versions.get secretmanager.versions.list Secret Manager Secret Version Adder ( roles/ secretmanager.secretVersionAdder ) Allows adding versions to existing secrets.

### "Set an expiration date for a secret \_|\_ Secret Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets](https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets)
- Source ID: `site-iam-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- You can also set up a conditional IAM binding to grant the service account the Secret Accessor role for 45 days.
- Update the expiration date and time, and click Update secret . gcloud Update a secret's expiration using a timestamp Before using any of the command data below, make the following replacements: SECRET ID : the ID of the secret TIMESTAMP : the expiration time in RFC 3339 format, for example 2100-01-01T09:00:00-05:00 Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets update SECRET ID \ --expire-time " TIMESTAMP " Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets update SECRET ID --expire-time " TIMESTAMP " Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets update SECRET ID ^ --expire-time " TIMESTAMP " Update a secret's expiration using a duration Before using any of the command data below, make the following replacements: SECRET ID : the ID of the secret DURATION : the expiration duration in seconds, for example 86400s Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets update SECRET ID \ --ttl " DURATION " Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets update SECRET ID --ttl " DURATION " Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets update SECRET ID ^ --ttl " DURATION " REST Update a secret's expiration using a timestamp Before using any of the request data, make the following replacements: PROJECT ID : the Google Cloud project ID SECRET ID : the ID of the secret TOKEN : your own Oauth2.0 access token TIMESTAMP : the expiration time in RFC 3339 format, for example 2100-01-01T09:00:00-05:00 HTTP method and URL: PATCH https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets/ SECRET ID ?updateMask=expire time Request JSON body: {"expire time": " TIMESTAMP "} To send your request, choose one of these options: curl Save the request body in a file named request.json , and execute the following command: curl -X PATCH \ -H "Authorization: Bearer TOKEN " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets/ SECRET ID ?updateMask=expire time" PowerShell Save the request body in a file named request.json , and execute the following command: $headers = @{ "Authorization" = "Bearer TOKEN " } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets/ SECRET ID ?updateMask=expire time" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /secrets/ SECRET ID ", "createTime": "2024-09-04T03:58:38.200877Z", "expireTime": "2024-09-04T09:25:39Z", "etag": "\"162143305d282d\"" } Update a secret's expiration using a duration Before using any of the request data, make the following replacements: PROJECT ID : the Google Cloud project ID SECRET ID : the ID of the secret DURATION : the expiration duration in seconds, for example 86400s HTTP method and URL: PATCH https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets/ SECRET ID ?updateMask=ttl Request JSON body: {"ttl": " DURATION "} To send your request, choose one of these options: curl Save the request body in a file named request.json , and execute the following command: curl -X PATCH \ -H "Authorization: Bearer TOKEN " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets/ SECRET ID ?updateMask=ttl" PowerShell Save the request body in a file named request.json , and execute the following command: $headers = @{ "Authorization" = "Bearer TOKEN " } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets/ SECRET ID ?updateMask=ttl" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /secrets/ SECRET ID ", "createTime": "2024-09-04T03:58:38.200877Z", "expireTime": "2024-09-04T09:25:39Z", "etag": "\"162143305d282d\"" } Remove a secret's expiration date To remove the secret's expiration date and time, use one of the following methods: Console In the Google Cloud console, go to the Secret Manager page.
- Clear the Set expiration date checkbox, and then click Update secret . gcloud Before using any of the command data below, make the following replacements: SECRET ID : the ID of the secret Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets update SECRET ID \ --remove-expiration Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets update SECRET ID --remove-expiration Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets update SECRET ID ^ --remove-expiration REST Before using any of the request data, make the following replacements: PROJECT ID : the Google Cloud project ID SECRET ID : the ID of the secret TOKEN : your own Oauth2.0 access token HTTP method and URL: PATCH https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets/ SECRET ID ?updateMask=expire time Request JSON body: {} To send your request, choose one of these options: curl Save the request body in a file named request.json , and execute the following command: curl -X PATCH \ -H "Authorization: Bearer TOKEN " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets/ SECRET ID ?updateMask=expire time" PowerShell Save the request body in a file named request.json , and execute the following command: $headers = @{ "Authorization" = "Bearer TOKEN " } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets/ SECRET ID ?updateMask=expire time" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /secrets/ SECRET ID ", "createTime": "2024-09-04T03:58:38.200877Z", "etag": "\"162143305d282d\"" } Expiration logging Cloud Audit Logs are not produced when a secret automatically expires.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://secretmanager.googleapis.com/v1/projects/$ PROJECT ID /secrets?secretId=$ SECRET ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /secrets/ SECRET ID ", "createTime": "2024-09-04T03:58:38.200877Z", "expireTime": "2024-09-04T09:25:39Z", "etag": "\"162143305d282d\"" } Create an expiring secret using a duration Before using any of the request data, make the following replacements: PROJECT ID : the Google Cloud project ID SECRET ID : the ID of the secret DURATION : the expiration duration in seconds, for example 86400s HTTP method and URL: POST https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets?secretId= SECRET ID Request JSON body: { "replication": {"automatic": {}}, "ttl": " DURATION " } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

