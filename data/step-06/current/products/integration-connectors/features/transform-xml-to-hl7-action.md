---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.194Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Transform XML to HL7 action"
feature_slug: "transform-xml-to-hl7-action"
latest_feature_date: "2025-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudspanner/configure"
keywords:
  - "transform"
  - "xml"
  - "to"
  - "hl7"
  - "action"
  - "the"
  - "converts"
  - "an"
---

# Transform XML to HL7 action

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

The action converts an XML message back into HL7.

## Extended Definition

The action converts an XML message back into HL7.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudspanner/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudspanner/configure)

## Supporting Pages

### Cloud Storage \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the action is successful, you will get the signed URL in the response similar to the following: { "Success": "true", "SignURL": "https://storage.googleapis.com/example-bucket/cat.jpeg?X-Goog-Algorithm= GOOG4-RSA-SHA256&X-Goog-Credential=example%40example-project.iam.gserviceaccount.com %2F20181026%2Fus-central1%2Fstorage%2Fgoog4 request&X-Goog-Date=20181026T18 1309Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=247a2aa45f16 9edf4d187d54e7cc46e4731b1e6273242c4f4c39a1d2507a0e58706e25e3a85a7dbb891d62afa849 6def8e260c1db863d9ace85ff0a184b894b117fe46d1225c82f2aa19efd52cf21d3e2022b3b868dc c1aca2741951ed5bf3bb25a34f5e9316a2841e8ff4c530b22ceaa1c5ce09c7cbb5732631510c2058 0e61723f5594de3aea497f195456a2ff2bdd0d13bad47289d8611b6f9cfeef0c46c91a455b94e90a 66924f722292d21e24d31dcfb38ce0c0f353ffa5a9756fc2a9f2b40bc2113206a81e324fc4fd6823 a29163fa845c8ae7eca1fcf6e5bb48b3200983c56c5ca81fffb151cca7402beddfc4a76b13344703 2ea7abedc098d2eb14a7" } Considerations A downloadable object can have a maximum size of 10 MB.
- Actions The Google Cloud Storage connection supports the following actions: DownloadObject UploadObject CopyObject MoveObject DeleteObject SignURL Note: The results of all the entity operations and actions will be available as a JSON response in the Connectors task's connectorOutputPayload response parameter after you run your integration.
- If the copy is successful, the output in the connectorOutputPayload field will be similar to the following: { "Success" : "true" } Create a signed URL for an object In the Configure connector task dialog, click Actions .
- If the copy is successful, the output in the connectorOutputPayload field will be similar to the following: { "Success" : "true" } Delete an object In the Configure connector task dialog, click Actions .

### Apache Cassandra \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- System limitations The Apache Cassandra connector can process 65 transactions per second, per node , and throttles any transactions beyond this limit.
- If you have any stored procedures and functions in your backend, those are listed in the Actions column of the Configure connector task dialog.
- Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- Action: An action is a first class function that is made available to the integration through the connector interface.

### Asana \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Actions The Asana connector supports actions, such as the following: AddDependenciesToTask, AddDependentsToTask, AddFollowers, AddProjectToTask, AddTagsToTask, AddTaskToSection, DownloadAttachment, DuplicateProject, DuplicateTask, RemoveDependenciesFromTask, RemoveDependentsFromTask, RemoveFollowers, RemoveProjectsFromTask, RemoveTagsFromTask, SetParentofTask, and UploadAttachment.
- Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- System limitations The Asana connector can process 90 transactions per minute , per node , and throttles any transactions beyond this limit.
- Action: An action is a first class function that is made available to the integration through the connector interface.

### Cloud Spanner \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudspanner/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudspanner/configure)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- If you have any stored procedures and functions in your backend, those are listed in the Actions column of the Configure connector task dialog.
- Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- Action: An action is a first class function that is made available to the integration through the connector interface.
- However, it is possible that a connector doesn't support any action, in which case the Actions list will be empty.

