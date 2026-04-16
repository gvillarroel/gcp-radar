---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.741Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "VPC Service Controls support"
feature_slug: "vpc-service-controls-support"
latest_feature_date: "2024-02-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/access-control"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient"
  - "https://docs.cloud.google.com/dataform/docs/javascript-in-dataform"
keywords:
  - "vpc"
  - "controls"
  - "lets"
  - "dataform"
  - "operate"
  - "within"
  - "perimeters"
---

# VPC Service Controls support

Product: Dataform
Coverage: MEDIUM

## Step 02 Summary

VPC Service Controls support lets Dataform operate within VPC Service Controls perimeters; VPC Service Controls support lets Dataform operate within VPC Service Controls perimeters.

## Extended Definition

VPC Service Controls support lets Dataform operate within VPC Service Controls perimeters; VPC Service Controls support lets Dataform operate within VPC Service Controls perimeters.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)
- [https://docs.cloud.google.com/dataform/docs/javascript-in-dataform](https://docs.cloud.google.com/dataform/docs/javascript-in-dataform)

## Supporting Pages

### Control access with IAM \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- Source ID: `site-docs-root-2`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Requests originating from Dataform that use a service agent with the required roles are within the VPC Service Controls perimeter of the project that the Dataform repository belongs to.
- Security considerations Granting the roles required by Dataform to a Dataform service agent, custom service account, or a user's Google Account ( Preview ) comes with the following security considerations: Any service agent or service account granted the required roles might gain access to BigQuery or Secret Manager in the project that the service agent or service account belongs to, regardless of VPC Service Controls.
- Workforce Identity Federation in Dataform Workforce Identity Federation lets you use an external identity provider (IdP) to authenticate and authorize users to Google Cloud services with IAM.
- This role grants the iam.serviceAccounts.actAs permission, which lets scheduled runs, initiated by the default Dataform service agent, impersonate the custom service account.

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.dataform v1.types.CommitWorkspaceChangesResponse CommitWorkspaceChanges response message. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. compilation result path compilation result path ( project : str , location : str , repository : str , compilation result : str ) - > str Returns a fully-qualified compilation result string. compute repository access token status compute repository access token status ( request : typing .
- Returns Type Description google.cloud.dataform v1.types.WorkflowConfig Represents a Dataform workflow configuration. workflow config path workflow config path ( project : str , location : str , repository : str , workflow config : str ) - > str Returns a fully-qualified workflow config string. workflow invocation path workflow invocation path ( project : str , location : str , repository : str , workflow invocation : str ) - > str Returns a fully-qualified workflow invocation string. workspace path workspace path ( project : str , location : str , repository : str , workspace : str ) - > str Returns a fully-qualified workspace string. write file write file ( request : typing .
- Returns Type Description google.cloud.dataform v1.types.Workspace Represents a Dataform Git workspace. crypto key path crypto key path ( project : str , location : str , key ring : str , crypto key : str ) - > str Returns a fully-qualified crypto key string. crypto key version path crypto key version path ( project : str , location : str , key ring : str , crypto key : str , crypto key version : str ) - > str Returns a fully-qualified crypto key version string. delete folder delete folder ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = dataform v1 .

### "Class DataformClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)
- Source ID: `site-python-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.dataform v1.types.CommitWorkspaceChangesResponse CommitWorkspaceChanges response message. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. compilation result path compilation result path ( project : str , location : str , repository : str , compilation result : str ) - > str Returns a fully-qualified compilation result string. compute repository access token status compute repository access token status ( request : typing .
- Returns Type Description google.cloud.dataform v1.types.WorkflowConfig Represents a Dataform workflow configuration. workflow config path workflow config path ( project : str , location : str , repository : str , workflow config : str ) - > str Returns a fully-qualified workflow config string. workflow invocation path workflow invocation path ( project : str , location : str , repository : str , workflow invocation : str ) - > str Returns a fully-qualified workflow invocation string. workspace path workspace path ( project : str , location : str , repository : str , workspace : str ) - > str Returns a fully-qualified workspace string. write file write file ( request : typing .
- Returns Type Description google.cloud.dataform v1.types.Workspace Represents a Dataform Git workspace. crypto key path crypto key path ( project : str , location : str , key ring : str , crypto key : str ) - > str Returns a fully-qualified crypto key string. crypto key version path crypto key version path ( project : str , location : str , key ring : str , crypto key : str , crypto key version : str ) - > str Returns a fully-qualified crypto key version string. delete folder delete folder ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore def sample test iam permissions(): Create a client client = dataform v1 .

### Use JavaScript in Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/javascript-in-dataform](https://docs.cloud.google.com/dataform/docs/javascript-in-dataform)
- Source ID: `site-docs-root-2`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- The following code sample shows a JavaScript assertion that asserts that no value in source table is NULL : assert ( "assertion1" ). query ( ctx = > "SELECT FROM source table WHERE value IS NULL" ); Define custom SQL operations with JavaScript You can define custom SQL operations in a JavaScript file with the Dataform operate JavaScript method.
- You can create multiple workflow actions within one JavaScript file with Dataform global methods and arbitrary JavaScript ES5 code, such as loops and constants.
- You can create multiple actions within one JavaScript file with Dataform global methods and arbitrary JavaScript ES5 code, such as loops and constants.
- Dataform core lets you create workflow actions with SQLX and JavaScript.

