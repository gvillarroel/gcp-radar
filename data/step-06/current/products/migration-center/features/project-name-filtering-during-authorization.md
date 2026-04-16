---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.111Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "Project name filtering during authorization"
feature_slug: "project-name-filtering-during-authorization"
latest_feature_date: "2023-09-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.discoveryClients/create"
  - "https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.discoveryClients"
  - "https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
keywords:
  - "project"
  - "name"
  - "filtering"
  - "during"
  - "authorization"
  - "the"
  - "discovery"
  - "client"
---

# Project name filtering during authorization

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

The Discovery client can filter project names during authorization in Migration Center.

## Extended Definition

The Discovery client can filter project names during authorization in Migration Center.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.discoveryClients/create](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.discoveryClients/create)
- [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.discoveryClients](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.discoveryClients)
- [https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security](https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)

## Supporting Pages

### "Method: projects.locations.discoveryClients.create \_|\_ Migration Center\

- URL: [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.discoveryClients/create](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.discoveryClients/create)
- Source ID: `site-api-reference`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- HTTP request POST https://migrationcenter.googleapis.com/v1/{parent=projects/ /locations/ }/discoveryClients The URL uses gRPC Transcoding syntax.
- It will become the last component of the discovery client name.
- Home Documentation Migration Migration Center Reference Send feedback Method: projects.locations.discoveryClients.create Stay organized with collections Save and categorize content based on your preferences.
- HTTP request Path parameters Query parameters Request body Response body Authorization scopes Creates a new discovery client.

### "REST Resource: projects.locations.discoveryClients \_|\_ Migration Center\

- URL: [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.discoveryClients](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.discoveryClients)
- Source ID: `site-api-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Methods create Creates a new discovery client. delete Deletes a discovery client. get Gets the details of a discovery client. list Lists all the discovery clients in a given project and location. patch Updates a discovery client. send Heartbeat Sends a discovery client heartbeat.
- Full name of the source object associated with this discovery client. service Account string Required.
- Home Documentation Migration Migration Center Reference Send feedback REST Resource: projects.locations.discoveryClients Stay organized with collections Save and categorize content based on your preferences.
- Service account used by the discovery client for various operation. signals Endpoint string Output only.

### "Discovery client data collection and security \_|\_ Migration Center \_\

- URL: [https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security](https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Security considerations Authentication and authorization Communication with target machines The discovery client uses secure channels to authenticate and communicate with target machines.
- Communication with Google Cloud Registered discovery clients communicate with Google Cloud Migration Center during their normal operation.
- Mitigation strategies The discovery client provides a mechanism to prevent collection of specific servers during specific hours.
- Logging and supportability The discovery client collects logs during its operation to allow for debugging and support.

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } error frame path error frame path ( project : str , location : str , source : str , error frame : str ) - > str Returns a fully-qualified error frame string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- CreateImportDataFileRequest ( parent="parent value", import data file id="import data file id value", import data file=import data file, ) Make the request operation = client. create import data file (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateImportDataFileRequest , dict]] The request object.
- CreateReportConfigRequest ( parent="parent value", report config id="report config id value", report config=report config, ) Make the request operation = client. create report config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateReportConfigRequest , dict]] The request object.
- Format: projects/{project}/locations/{location}/sources/{source}/errorFrames/{error frame} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

