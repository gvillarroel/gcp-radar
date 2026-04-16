---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:16.887Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Secret Manager Secret Version Adder IAM role"
feature_slug: "secret-manager-secret-version-adder-iam-role"
latest_feature_date: "2020-07-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient"
  - "https://docs.cloud.google.com/secret-manager/docs/access-control"
  - "https://docs.cloud.google.com/secret-manager/docs/add-secret-version"
keywords:
  - "secret"
  - "manager"
  - "version"
  - "adder"
  - "iam"
  - "role"
  - "this"
  - "allows"
---

# Secret Manager Secret Version Adder IAM role

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

This IAM role allows adding new secret versions.

## Extended Definition

This IAM role allows adding new secret versions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- [https://docs.cloud.google.com/secret-manager/docs/access-control](https://docs.cloud.google.com/secret-manager/docs/access-control)
- [https://docs.cloud.google.com/secret-manager/docs/add-secret-version](https://docs.cloud.google.com/secret-manager/docs/add-secret-version)

## Supporting Pages

### "Class SecretManagerServiceAsyncClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 300
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
- Final score: 300
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
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Lowest-level resources where you can grant this role: Secret resourcemanager.projects.get resourcemanager.projects.list secretmanager.versions.access Secret Manager Viewer ( roles/ secretmanager.viewer ) Allows viewing metadata of all Secret Manager resources Lowest-level resources where you can grant this role: Secret resourcemanager.projects.get resourcemanager.projects.list secretmanager.locations. secretmanager.locations.get secretmanager.locations.list secretmanager.secrets.get secretmanager. secrets. getIamPolicy secretmanager.secrets.list secretmanager. secrets. listEffectiveTags secretmanager. secrets. listTagBindings secretmanager.versions.get secretmanager.versions.list Secret Manager Secret Version Adder ( roles/ secretmanager.secretVersionAdder ) Allows adding versions to existing secrets.
- Lowest-level resources where you can grant this role: Secret cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.operations.get cloudkms. projects. showEffectiveAutokeyConfig resourcemanager.projects.get resourcemanager.projects.list secretmanager. secretmanager.locations.get secretmanager.locations.list secretmanager.secrets.create secretmanager. secrets. createTagBinding secretmanager.secrets.delete secretmanager. secrets. deleteTagBinding secretmanager.secrets.get secretmanager. secrets. getIamPolicy secretmanager.secrets.list secretmanager. secrets. listEffectiveTags secretmanager. secrets. listTagBindings secretmanager. secrets. setIamPolicy secretmanager.secrets.update secretmanager.versions.access secretmanager.versions.add secretmanager.versions.destroy secretmanager.versions.disable secretmanager.versions.enable secretmanager.versions.get secretmanager.versions.list Secret Manager Secret Accessor ( roles/ secretmanager.secretAccessor ) Allows accessing the payload of secrets.
- Lowest-level resources where you can grant this role: Secret resourcemanager.projects.get resourcemanager.projects.list secretmanager.versions.add Secret Manager Secret Version Manager ( roles/ secretmanager.secretVersionManager ) Allows creating and managing versions of existing secrets.
- Lowest-level resources where you can grant this role: Secret resourcemanager.projects.get resourcemanager.projects.list secretmanager.versions.add secretmanager.versions.destroy secretmanager.versions.disable secretmanager.versions.enable secretmanager.versions.get secretmanager.versions.list Principle of least privilege When you follow the principle of least privilege, you grant the minimum level of access to resources required to perform a given task.

### Add a secret version \_|\_ Secret Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/add-secret-version](https://docs.cloud.google.com/secret-manager/docs/add-secret-version)
- Source ID: `site-docs-root`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to add a secret version, ask your administrator to grant you the following IAM roles on a secret: Secret Manager Secret Version Adder ( roles/secretmanager.secretVersionAdder ) Secret Manager Secret Version Manager ( roles/secretmanager.secretVersionManager ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . // Import the Secret Manager client library. use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient; use Google\Cloud\SecretManager\V1\AddSecretVersionRequest; use Google\Cloud\SecretManager\V1\SecretPayload; / @param string $projectId Your Google Cloud Project ID (e.g. 'my-project') @param string $secretId Your secret ID (e.g. 'my-secret') / function add secret version(string $projectId, string $secretId): void { // Create the Secret Manager client. $client = new SecretManagerServiceClient(); // Build the resource name of the parent secret and the payload. $parent = $client->secretName($projectId, $secretId); $secretPayload = new SecretPayload([ 'data' => 'my super secret data', ]); // Build the request. $request = AddSecretVersionRequest::build($parent, $secretPayload); // Access the secret version. $response = $client->addSecretVersion($request); // Print the new secret version name. printf('Added secret version: %s', $response->getName()); } Python To run this code, first set up a Python development environment and install the Secret Manager Python SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . / TODO(developer): Uncomment these variables before running the sample. / // const parent = 'projects/my-project/secrets/my-secret'; // Imports the Secret Manager library const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' ); // Instantiates a client const client = new SecretManagerServiceClient (); // Payload is the plaintext data to store in the secret const payload = Buffer . from ( 'my super secret data' , 'utf8' ); async function addSecretVersion () { const [ version ] = await client . addSecretVersion ({ parent : parent , payload : { data : payload , }, }); console . log ( Added secret version ${ version . name } ` ); } addSecretVersion (); PHP To run this code, first learn about using PHP on Google Cloud and install the Secret Manager PHP SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . project id = "YOUR-GOOGLE-CLOUD-PROJECT" # (e.g. "my-project") secret id = "YOUR-SECRET-ID" # (e.g. "my-secret") Require the Secret Manager client library. require "google/cloud/secret manager" Create a Secret Manager client. client = Google :: Cloud :: SecretManager . secret manager service Build the resource name of the secret version. name = client . secret path project : project id , secret : secret id Add the secret version. version = client . add secret version ( parent : name , payload : { data : "my super secret data" } ) Print the new secret version name. puts "Added secret version: #{ version . name } " Secret version states A secret version can be in one of the following states at any given time: Enabled - In this state, the secret version can be accessed and described.

