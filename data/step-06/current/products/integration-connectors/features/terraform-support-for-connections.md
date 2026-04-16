---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.218Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Terraform support for connections"
feature_slug: "terraform-support-for-connections"
latest_feature_date: "2024-01-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/activedirectory/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure"
keywords:
  - "terraform"
  - "for"
  - "connections"
  - "can"
  - "be"
  - "used"
  - "to"
  - "create"
---

# Terraform support for connections

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

Terraform can be used to create new connections.

## Extended Definition

Terraform can be used to create new connections.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/activedirectory/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/activedirectory/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure)

## Supporting Pages

### Active Directory \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/activedirectory/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/activedirectory/configure)
- Source ID: `site-docs-root-2`
- Final score: 278
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create connections using Terraform You can use the Terraform resource to create a new connection.
- When creating this connection by using Terraform, you must set the following variables in your Terraform configuration file: Parameter name Data type Required Description base dn STRING True The base portion of the distinguished name, used for limiting results to specific subtrees. auth mechanism ENUM True The authentication mechanism to be used when connecting to the Active Directory server.
- You can perform Get operation on the following entities: Group, User Membership, Group Membership, OrganizationalPerson, Person, Top, SecurityPrincipal, Organization, OrganizationalRole, DomainPolicy, Contact, Computer, DnsNode, SecurityObject, OrganizationalUnit, Domain, and Account Note: If your entity has a composite primary key, you can specify a filter clause .
- You can perform Delete operation on the following entities: Group, User Membership, Group Membership, OrganizationalPerson, Person, Top, Organization, OrganizationalRole, DomainPolicy, Contact, Computer, DnsNode, SecurityObject, OrganizationalUnit, Domain, and Account Note: If your entity has a composite primary key, you can specify a filter clause .

### Cloud Storage \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure)
- Source ID: `site-docs-root-2`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create connections using Terraform You can use the Terraform resource to create a new connection.
- Examples This examples in this section describe the following operations: List all objects List all objects in a bucket List objects using the LIKE filter for name List all buckets Download an object Download a binary object Upload a binary object to a bucket Upload an object to a bucket Upload an object to a folder Copy an object Move an object Delete an object Create a signed URL for an object The following table lists the sample scenarios and the corresponding configuration in the Connectors task: Task Configuration List all objects In the Configure connector task dialog, click Entities .
- If the copy is successful, the output in the connectorOutputPayload field will be similar to the following: { "Success" : "true" } Create a signed URL for an object In the Configure connector task dialog, click Actions .
- If the action is successful, you will get the signed URL in the response similar to the following: { "Success": "true", "SignURL": "https://storage.googleapis.com/example-bucket/cat.jpeg?X-Goog-Algorithm= GOOG4-RSA-SHA256&X-Goog-Credential=example%40example-project.iam.gserviceaccount.com %2F20181026%2Fus-central1%2Fstorage%2Fgoog4 request&X-Goog-Date=20181026T18 1309Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=247a2aa45f16 9edf4d187d54e7cc46e4731b1e6273242c4f4c39a1d2507a0e58706e25e3a85a7dbb891d62afa849 6def8e260c1db863d9ace85ff0a184b894b117fe46d1225c82f2aa19efd52cf21d3e2022b3b868dc c1aca2741951ed5bf3bb25a34f5e9316a2841e8ff4c530b22ceaa1c5ce09c7cbb5732631510c2058 0e61723f5594de3aea497f195456a2ff2bdd0d13bad47289d8611b6f9cfeef0c46c91a455b94e90a 66924f722292d21e24d31dcfb38ce0c0f353ffa5a9756fc2a9f2b40bc2113206a81e324fc4fd6823 a29163fa845c8ae7eca1fcf6e5bb48b3200983c56c5ca81fffb151cca7402beddfc4a76b13344703 2ea7abedc098d2eb14a7" } Considerations A downloadable object can have a maximum size of 10 MB.

### "Cloud SQL for PostgreSQL \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)
- Source ID: `site-docs-root-2`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create connections using Terraform You can use the Terraform resource to create a new connection.
- If you want to establish a public connection to your backend systems with additional security, you can consider configuring static outbound IP addresses for your connections , and then configure your firewall rules to allowlist only the specific static IP addresses.
- System limitations The Cloud SQL for PostgreSQL connector can process 9 transaction per second, per node , and throttles any transactions beyond this limit.
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor roles/cloudsql.editor A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.

### Cloud SQL for MySQL \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure)
- Source ID: `site-docs-root-2`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create connections using Terraform You can use the Terraform resource to create a new connection.
- If you want to establish a public connection to your backend systems with additional security, you can consider configuring static outbound IP addresses for your connections , and then configure your firewall rules to allowlist only the specific static IP addresses.
- System limitations The Cloud SQL for MySQL connector can process 10 transaction per second, per node , and throttles any transactions beyond this limit.
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor roles/cloudsql.editor A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.

