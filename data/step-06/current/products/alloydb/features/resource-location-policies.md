---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.531Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Resource location policies"
feature_slug: "resource-location-policies"
latest_feature_date: "2023-07-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters"
  - "https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration"
  - "https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp"
keywords:
  - "resource"
  - "location"
  - "policies"
  - "alloydb"
  - "supports"
  - "constrain"
  - "where"
  - "scope"
---

# Resource location policies

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB supports resource location policies to constrain where new in-scope resources can be created.

## Extended Definition

AlloyDB supports resource location policies to constrain where new in-scope resources can be created.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- [https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp](https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp)

## Supporting Pages

### "REST Resource: projects.locations.clusters \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- Source ID: `site-iam-reference`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- Methods create Creates a new Cluster in a given project and location. createsecondary Creates a cluster of type SECONDARY in the given location using the primary cluster as the source. delete Deletes a single Cluster. export Exports data from the cluster. get Gets details of a single Cluster. import Imports data to the cluster. list Lists Clusters in a given project and location. patch Updates the parameters of a single Cluster. promote Promotes a SECONDARY cluster. restore Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster. restoreFromCloudSQL Restores an AlloyDB cluster from a CloudSQL resource. switchover Switches the roles of PRIMARY and SECONDARY clusters without any data loss. upgrade Upgrades a single Cluster.
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback REST Resource: projects.locations.clusters Stay organized with collections Save and categorize content based on your preferences.
- The name of the cluster resource with the format: projects/{project}/locations/{region}/clusters/{clusterId} where the cluster ID segment should satisfy the regex expression [a-z0-9-]+ .
- The name of the backup resource with the format: projects/{project}/locations/{location}/backupVaults/{backupvault id}/dataSources/{datasource id}/backups/{backupId} MaintenanceVersionSelectionPolicy Maintenance version selection policy defines the criteria to select the specific maintenance version to which to update the cluster's instances.

### "Manage your AlloyDB resources using Knowledge Catalog \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- Source ID: `site-iam-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://alloydb.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /clusters/ CLUSTER ID ?updateMask=dataplexConfig.enabled" Select-Object -Expand Content You receive a JSON response similar to the following: Response { "kind" : "alloydb#operation" , "targetLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/clusters/CLUSTER ID" , "status" : "PENDING" , "user" : "user@example.com" , "insertTime" : "2024-01-16T02:32:12.281Z" , "operationType" : "UPDATE" , "name" : "OPERATION ID" , "targetId" : "CLUSTER ID" , "selfLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/operations/OPERATION ID" , "targetProject" : "PROJECT ID" } Enrich AlloyDB assets with aspects Aspect types are reusable resources that serve as templates for aspects.
- Knowledge Catalog automatically retrieves the following metadata from AlloyDB clusters, instances, databases, tables, columns, and views: Name Location (Region) Labels (for clusters and instances) Dataplex Integration Enabled (for clusters) Database Version Machine CPU Count (for instances) Availability Type (for instances) Charset (for databases) Collation (for databases) Owner Description (for table, views, columns, and foreign keys) Type (for clusters, instances, and machines) Columns Data Type Mode Primary Key Foreign Keys Referenced Table Column Mappings Creation Time Last modification Time Note: Knowledge Catalog refers to resources in AlloyDB and in other Google Cloud services as assets .
- Save the request body in a file named request.json and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://alloydb.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /clusters?cluster id= CLUSTER ID " Select-Object -Expand Content You receive a JSON response similar to the following: Response { "kind" : "alloydb#operation" , "targetLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/clusters/CLUSTER ID" , "status" : "PENDING" , "user" : "user@example.com" , "insertTime" : "2024-09-25T22:19:33.735Z" , "operationType" : "CREATE" , "name" : "OPERATION ID" , "targetId" : "CLUSTER ID" , "selfLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/operations/OPERATION ID" , "targetProject" : "PROJECT ID" } Enable the Knowledge Catalog integration for your AlloyDB cluster To enable the Knowledge Catalog integration on an existing cluster, use one of the following procedures: gcloud To enable the Knowledge Catalog integration on an existing cluster, use the gcloud alloydb clusters update command with the --enable-dataplex-integration flag. gcloud alloydb clusters update CLUSTER ID \ --region = REGION \ --enable-dataplex-integration Make the following replacements: CLUSTER ID : the name of the cluster.
- Save the request body in a file named request.json and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://alloydb.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /clusters/ CLUSTER ID ?updateMask=dataplexConfig.enabled" Select-Object -Expand Content You receive a JSON response similar to the following: Response { "kind" : "alloydb#operation" , "targetLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/clusters/CLUSTER ID" , "status" : "PENDING" , "user" : "user@example.com" , "insertTime" : "2024-09-25T22:19:33.735Z" , "operationType" : "UPDATE" , "name" : "OPERATION ID" , "targetId" : "CLUSTER ID" , "selfLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/operations/OPERATION ID" , "targetProject" : "PROJECT ID" } Verify Knowledge Catalog integration on your AlloyDB cluster To verify that the Knowledge Catalog integration is enabled on an existing cluster, use one of the following procedures: gcloud To verify that the Knowledge Catalog integration is enabled on an existing cluster, use the gcloud alloydb clusters describe command. gcloud alloydb clusters describe CLUSTER ID --region = REGION Make the following replacements: CLUSTER ID : the cluster ID.

### "Best practices for securing agent interactions with Model Context Protocol\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp](https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp)
- Source ID: `site-docs-reference-2`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Minimal scopes: Grant the service account only the necessary Identity and Access Management (IAM) roles—for example, alloydb.viewer , not alloydb.admin .
- The Logs Explorer query identifies service accounts performing data write operations in Firestore, for example, which is a common target for exfiltration or destructive attacks: resource.type="firestore database" Filter for data write operations AND protoPayload.methodName="google.firestore.v1.Firestore.Commit" Ensure the caller is an agent service account (modify regex as needed) AND protoPayload.authenticationInfo.principalEmail= ". @. .gserviceaccount.com" Exclude expected system calls to reduce noise AND NOT protoPayload.authenticationInfo.principalEmail= "system-managed-service-account" Use agent-specific logging In addition to Cloud Audit Logs, make sure that your application code logs the following data for every agent decision: Tool execution: the MCP tool that was called.
- The following is a conceptual example for configuration: Example: Apply a DeidentifyTemplate to filter PII gcloud ai endpoints update ENDPOINT ID \ --region=REGION \ --model-armor-config-file=model armor config.json In the following example, model armor config.json might reference a DLP template: { "safety thresholds": { "injection": "HIGH", "harmful content": "MEDIUM" }, "data protection config": { "dlp deidentify template": "projects/PROJECT NUMBER/locations/LOCATION/deidentifyTemplates/DLP TEMPLATE ID" } } Auditing and observability Visibility into agent actions is crucial for post-incident analysis and detection of compromised agents.
- Separation of duties: If an agent needs both read access to data and write access to a log or temporary storage, use two separate service accounts—one account for high-risk data access (minimally scoped) and one for low-risk operational tasks.

