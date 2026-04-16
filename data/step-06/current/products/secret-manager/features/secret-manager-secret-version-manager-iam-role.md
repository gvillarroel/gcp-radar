---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:16.887Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Secret Manager Secret Version Manager IAM role"
feature_slug: "secret-manager-secret-version-manager-iam-role"
latest_feature_date: "2020-07-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient"
  - "https://docs.cloud.google.com/secret-manager/docs/access-control"
  - "https://docs.cloud.google.com/secret-manager/docs/access-secret-version"
keywords:
  - "secret"
  - "manager"
  - "version"
  - "iam"
  - "role"
  - "this"
  - "allows"
  - "managing"
---

# Secret Manager Secret Version Manager IAM role

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

This IAM role allows managing secret versions.

## Extended Definition

This IAM role allows managing secret versions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- [https://docs.cloud.google.com/secret-manager/docs/access-control](https://docs.cloud.google.com/secret-manager/docs/access-control)
- [https://docs.cloud.google.com/secret-manager/docs/access-secret-version](https://docs.cloud.google.com/secret-manager/docs/access-secret-version)

## Supporting Pages

### "Class SecretManagerServiceAsyncClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 303
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. test iam permissions test iam permissions ( request : typing .
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. get location get location ( request : typing .
- Returns Type Description google.cloud.secretmanager v1.types.SecretVersion A secret version resource in the Secret Manager API. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description google.cloud.secretmanager v1.types.SecretVersion A secret version resource in the Secret Manager API. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create secret create secret ( request : typing .

### "Class SecretManagerServiceClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- Source ID: `site-python-reference`
- Final score: 303
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. test iam permissions test iam permissions ( request : typing .
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. get location get location ( request : typing .
- Returns Type Description google.cloud.secretmanager v1.types.SecretVersion A secret version resource in the Secret Manager API. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description google.cloud.secretmanager v1.types.SecretVersion A secret version resource in the Secret Manager API. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create secret create secret ( request : typing .

### Access control with IAM \_|\_ Secret Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/access-control](https://docs.cloud.google.com/secret-manager/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 283
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Lowest-level resources where you can grant this role: Secret cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.operations.get cloudkms. projects. showEffectiveAutokeyConfig resourcemanager.projects.get resourcemanager.projects.list secretmanager. secretmanager.locations.get secretmanager.locations.list secretmanager.secrets.create secretmanager. secrets. createTagBinding secretmanager.secrets.delete secretmanager. secrets. deleteTagBinding secretmanager.secrets.get secretmanager. secrets. getIamPolicy secretmanager.secrets.list secretmanager. secrets. listEffectiveTags secretmanager. secrets. listTagBindings secretmanager. secrets. setIamPolicy secretmanager.secrets.update secretmanager.versions.access secretmanager.versions.add secretmanager.versions.destroy secretmanager.versions.disable secretmanager.versions.enable secretmanager.versions.get secretmanager.versions.list Secret Manager Secret Accessor ( roles/ secretmanager.secretAccessor ) Allows accessing the payload of secrets.
- Lowest-level resources where you can grant this role: Secret resourcemanager.projects.get resourcemanager.projects.list secretmanager.versions.access Secret Manager Viewer ( roles/ secretmanager.viewer ) Allows viewing metadata of all Secret Manager resources Lowest-level resources where you can grant this role: Secret resourcemanager.projects.get resourcemanager.projects.list secretmanager.locations. secretmanager.locations.get secretmanager.locations.list secretmanager.secrets.get secretmanager. secrets. getIamPolicy secretmanager.secrets.list secretmanager. secrets. listEffectiveTags secretmanager. secrets. listTagBindings secretmanager.versions.get secretmanager.versions.list Secret Manager Secret Version Adder ( roles/ secretmanager.secretVersionAdder ) Allows adding versions to existing secrets.
- Lowest-level resources where you can grant this role: Secret resourcemanager.projects.get resourcemanager.projects.list secretmanager.versions.add Secret Manager Secret Version Manager ( roles/ secretmanager.secretVersionManager ) Allows creating and managing versions of existing secrets.
- Lowest-level resources where you can grant this role: Secret resourcemanager.projects.get resourcemanager.projects.list secretmanager.versions.add secretmanager.versions.destroy secretmanager.versions.disable secretmanager.versions.enable secretmanager.versions.get secretmanager.versions.list Principle of least privilege When you follow the principle of least privilege, you grant the minimum level of access to resources required to perform a given task.

### Access a secret version \_|\_ Secret Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/access-secret-version](https://docs.cloud.google.com/secret-manager/docs/access-secret-version)
- Source ID: `site-iam-reference`
- Final score: 267
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to access a secret version, ask your administrator to grant you the Secret Manager Secret Accessor ( roles/secretmanager.secretAccessor ) IAM role on a secret.
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . // Import the Secret Manager client library. use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient; use Google\Cloud\SecretManager\V1\AccessSecretVersionRequest; / @param string $projectId Your Google Cloud Project ID (e.g. 'my-project') @param string $secretId Your secret ID (e.g. 'my-secret') @param string $versionId Your version ID (e.g. 'latest' or '5'); / function access secret version(string $projectId, string $secretId, string $versionId): void { // Create the Secret Manager client. $client = new SecretManagerServiceClient(); // Build the resource name of the secret version. $name = $client->secretVersionName($projectId, $secretId, $versionId); // Build the request. $request = AccessSecretVersionRequest::build($name); // Access the secret version. $response = $client->accessSecretVersion($request); // Print the secret payload. // // WARNING: Do not print the secret in a production environment - this // snippet is showing how to access the secret material. $payload = $response->getPayload()->getData(); printf('Plaintext: %s', $payload); } Python To run this code, first set up a Python development environment and install the Secret Manager Python SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . / TODO(developer): Uncomment these variables before running the sample. / // const name = 'projects/my-project/secrets/my-secret/versions/5'; // const name = 'projects/my-project/secrets/my-secret/versions/latest'; // Imports the Secret Manager library const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' ); // Instantiates a client const client = new SecretManagerServiceClient (); async function accessSecretVersion () { const [ version ] = await client . accessSecretVersion ({ name : name , }); // Extract the payload as a string. const payload = version . payload . data . toString (); // WARNING: Do not print the secret in a production environment - this // snippet is showing how to access the secret material. console . info ( Payload: ${ payload } ` ); } accessSecretVersion (); PHP To run this code, first learn about using PHP on Google Cloud and install the Secret Manager PHP SDK .
- The following command is an example of extracting the secret using the jq tool. $ curl "https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets/ SECRET ID /versions/ VERSION ID :access" \ --request "GET" \ --header "authorization: Bearer $(gcloud auth print-access-token)" \ --header "content-type: application/json" \ jq -r ".payload.data" base64 --decode C# To run this code, first set up a C# development environment and install the Secret Manager C# SDK .

