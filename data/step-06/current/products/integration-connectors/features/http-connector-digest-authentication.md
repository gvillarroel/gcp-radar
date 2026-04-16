---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.225Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "HTTP connector digest authentication"
feature_slug: "http-connector-digest-authentication"
latest_feature_date: "2023-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/bigcommerce/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecouchdb/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure"
keywords:
  - "http"
  - "connector"
  - "digest"
  - "authentication"
  - "the"
  - "supports"
---

# HTTP connector digest authentication

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

The HTTP connector supports Digest authentication.

## Extended Definition

The HTTP connector supports Digest authentication.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigcommerce/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigcommerce/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecouchdb/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecouchdb/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure)

## Supporting Pages

### BigCommerce \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigcommerce/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigcommerce/configure)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Digest : Digest HTTP authentication.
- The following authentication types are supported: Basic : Basic HTTP authentication.
- When creating this connection by using Terraform, you must set the following variables in your Terraform configuration file: Parameter name Data type Required Description proxy enabled BOOLEAN False Select this checkbox to configure a proxy server for the connection. proxy auth scheme ENUM False The authentication type to use to authenticate to the ProxyServer proxy.
- Note: You can customize the connection node values only if you are a Pay-as-you-go customer. (Optional) In the Advanced settings section, select the Use proxy checkbox to configure a proxy server for the connection and configure the following values: Proxy Auth Scheme : Select the authentication type to authenticate with the proxy server.

### Couchbase \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Digest : Digest HTTP authentication.
- SSL - Certificate connection type Field Name Details Region us-central1 Connector Couchbase Connector Version 1 Connector Name Couchbase-basic-auth-conn Service Account NAME-compute@developer.gserviceaccount.com Verbosity Level 5 Connection node settings: Min/Max number of nodes 2/50 SSL Configuration Enable SSL True Trust Store Private Custom Trust Store A full PEM Certificate (-----BEGIN CERTIFICATE----- MIIChTCCAe4CAQAwDQYJKoZIhv......Qw== -----END CERTIFICATE-----) Secret version 1 Host Address xx.1HOST NAME.cloud.couchbase.com:18xxx Authentication User Password Username username Password password versions 1 vConnection Mode Cloud DNS Server 192.0.2.0 OAuth scheme Basic Analytics Couchbase connection type Field Name Details Region us-central1 Connector Couchbase Connector Version 1 Connector Name Couchbase-basic-auth-Analytics-conn Service Account NAME-compute@developer.gserviceaccount.com Analytics Port 18095 Couchbase Service Analytics Verbosity Level 5 Connection node settings: Min/Max number of nodes 2/50 Host Address xx.1HOST NAME.cloud.couchbase.com:18095 Authentication User Password Username username Password password versions 1 vConnection Mode Cloud DNS Server 192.0.2.0 OAuth scheme Basic Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { } If the action is successful, the ListIndices task's connectorOutputPayload response parameter will have a value similar to the following: [{ "id" : "3d8a78cd2e302ac2" , "datastore id" : "http://127.0.0.1:8091" , "namespace id" : "default" , "bucket id" : null , "scope id" : null , "keyspace id" : "CouchbaseTestBucket" , "index key" : "" , "condition" : null , "is primary" : "false" , "name" : "test" , "state" : "online" , "using" : "gsi" }, { "id" : "d6ce8c103b97a00d" , "datastore id" : "http://127.0.0.1:8091" , "namespace id" : "default" , "bucket id" : "CouchbaseTestBucket" , "scope id" : "TestScope" , "keyspace id" : "CouchBaseDatatypes" , "index key" : "" , "condition" : null , "is primary" : "true" , "name" : "#primary" , "state" : "online" , "using" : "gsi" }, { "id" : "58c25aef49dd32b3" , "datastore id" : "http://127.0.0.1:8091" , "namespace id" : "default" , "bucket id" : "CouchbaseTestBucket" , "scope id" : "TestScope" , "keyspace id" : "TestCollection" , "index key" : "" , "condition" : null , "is primary" : "false" , "name" : "SearchIndexTest 1" , "state" : "online" , "using" : "fts" }] Example - Manage indices This example deletes an index in the specified bucket.
- Actions This connector supports execution of the following actions: User-defined stored procedures and functions.

### Apache CouchDB \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecouchdb/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecouchdb/configure)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Basic authentication connection type Field name Details Location us-central1 Connector Apache CouchDB Connector version 1 Connection Name couchdb-vm-connection Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com List Views Yes Flexible Schema Yes Minimum number of nodes 2 Maximum number of nodes 50 Destination Type(Server) Host address Host address http://198.51.100.0 Username USERNAME Password PASSWORD Secret version 1 Proxy connection type Field name Details Location us-central1 Connector Apache CouchDB Connector version 1 Connection Name couchdb-proxy-conn Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com List Views No Flexible Schema No Proxy use proxy Proxy Auth Scheme Digest Proxy User PROXY USER Proxy Password PROXY PASSWORD Minimum number of nodes 2 Maximum number of nodes 50 Destination Type(Server) Host address Host address http://198.51.100.0 Username USERNAME Password PASSWORD Secret version 1 SSL connection (insecure) connection type Field name Details Location us-central1 Connector Apache CouchDB Connector version 1 Connection Name couchdb-ssl-conn Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com List Views No Flexible Schema No Minimum number of nodes 2 Maximum number of nodes 50 Trust store (choose the trust model) Insecure Connection Destination Type(Server) Host address Host address http://198.51.100.0 Username USERNAME Password PASSWORD Secret version 1 SSL connection (private) connection type Field name Details Location us-central1 Connector Apache CouchDB Connector version 1 Connection Name couchdb-proxy-conn Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com List Views No Flexible Schema No Minimum number of nodes 2 Maximum number of nodes 50 Trust store (choose the trust model) Private Custom Trust store Self-signed certificate.
- Secret Version 1 Destination Type(Server) Host address Host address https://198.51.100.0 Username USERNAME Password PASSWORD Secret version 1 JWT Authentication connection type Field name Details Location us-central1 Connector Apache CouchDB Connector version 1 Connection Name couchdb-vm-jwt-conn Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com List Views No Flexible Schema No Proxy No Minimum number of nodes 2 Maximum number of nodes 50 Destination Type(Server) Host address Host address http://203.0.113.0 JWT Subject admin JWT Algorithm HS256 JWT Key Type Symmetric JWT Key JWT KEY Secret version 1 Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- Digest : Digest HTTP authentication.
- The following authentication types are supported: Basic : Basic HTTP authentication.

### Asana \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Digest : Digest HTTP authentication.
- Actions The Asana connector supports actions, such as the following: AddDependenciesToTask, AddDependentsToTask, AddFollowers, AddProjectToTask, AddTagsToTask, AddTaskToSection, DownloadAttachment, DuplicateProject, DuplicateTask, RemoveDependenciesFromTask, RemoveDependentsFromTask, RemoveFollowers, RemoveProjectsFromTask, RemoveTagsFromTask, SetParentofTask, and UploadAttachment.
- The following authentication types are supported: Basic : Basic HTTP authentication.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Name" : "Testing" , "ProjectId" : "1208019929422674" } If the integration is successful, your connector task's connectorOutputPayload field will have a value similar to the following: { "Id" : "10032" } Example - Update a task in an entity This example updates a task in the Tasks entity.

