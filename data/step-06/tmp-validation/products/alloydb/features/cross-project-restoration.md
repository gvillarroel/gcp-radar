---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.166Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Cross-project restoration"
feature_slug: "cross-project-restoration"
latest_feature_date: "2024-01-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters"
  - "https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "restoration"
  - "different"
  - "project"
  - "restore"
  - "cross"
  - "cluster"
---

# Cross-project restoration

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB can restore a cluster to a new cluster in a different Google Cloud project.

## Extended Definition

AlloyDB can restore a cluster to a new cluster in a different Google Cloud project.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### "REST Resource: projects.locations.clusters \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- Source ID: `site-iam-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Methods create Creates a new Cluster in a given project and location. createsecondary Creates a cluster of type SECONDARY in the given location using the primary cluster as the source. delete Deletes a single Cluster. export Exports data from the cluster. get Gets details of a single Cluster. import Imports data to the cluster. list Lists Clusters in a given project and location. patch Updates the parameters of a single Cluster. promote Promotes a SECONDARY cluster. restore Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster. restoreFromCloudSQL Restores an AlloyDB cluster from a CloudSQL resource. switchover Switches the roles of PRIMARY and SECONDARY clusters without any data loss. upgrade Upgrades a single Cluster.
- The name of the backup resource with the format: projects/{project}/locations/{location}/backupVaults/{backupvault id}/dataSources/{datasource id}/backups/{backupId} MaintenanceVersionSelectionPolicy Maintenance version selection policy defines the criteria to select the specific maintenance version to which to update the cluster's instances.
- JSON representation { "primaryClusterName" : string } Fields primaryClusterName string The name of the primary cluster name with the format: projects/{project}/locations/{region}/clusters/{clusterId} PrimaryConfig Configuration for the primary cluster.
- The prefix of the cluster resource name is the name of the parent resource: projects/{project}/locations/{region} displayName string User-settable and human-readable display name for the Cluster. uid string Output only.

### "Integrate QueryData with an application \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent)
- Source ID: `site-docs-root-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Gemini Data Analytics Source and Gemini Data Analytics QueryData Tool. kind : source name : gda-api-source type : cloud-gemini-data-analytics projectId : " PROJECT ID " --- kind : tool name : cloud gda query tool type : cloud-gemini-data-analytics-query source : gda-api-source description : Use this tool to send natural language queries to the Gemini Data Analytics API and receive SQL, natural language answers, and explanations. location : " REGION ID " context : datasourceReferences : alloydb : databaseReference : projectId : " PROJECT ID " region : " REGION ID " clusterId : " CLUSTER ID " instanceId : " INSTANCE ID " databaseId : " DATABASE ID " agentContextReference : contextSetId : " CONTEXT SET ID " generationOptions : generateQueryResult : true generateNaturalLanguageAnswer : true generateExplanation : true generateDisambiguationQuestion : true Replace the following: PROJECT ID : Your Google Cloud project ID.
- Grant executesql permission to AlloyDB for PostgreSQL instance To grant the executesql permission to the AlloyDB for PostgreSQL instance and set the data api access instance setting to the value ALLOW DATA API , use the following curl command : curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ https://alloydb.googleapis.com/v1alpha/projects/ PROJECT ID /locations/ LOCATION /clusters/ CLUSTER ID /instances/ INSTANCE ID ?updateMask=dataApiAccess \ -d '{ "dataApiAccess": "ENABLED", }' Replace the following: PROJECT ID : The ID of your Google Cloud project.
- This lets you verify that QueryData correctly understands and applies definitions for terms like nighttime traffic and other related phrases, and that value search maps value phrases to specific values stored in your database columns (for example, mapping "Disney World" to "Orlando") Note: GenAI models are nondeterministic, meaning the same prompt may yield different responses across separate calls due to the probabilistic nature of the output generation.
- Enable required services Enable the following services for your project: Data Analytics API with Gemini Gemini for Google Cloud API Knowledge Catalog API Prepare an AlloyDB for PostgreSQL cluster, instance, and database Make sure that you have access to an existing AlloyDB cluster and instance or create a new one .

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- SecondaryConfig JSON representation { "primaryClusterName" : string } Fields primaryClusterName string The name of the primary cluster name with the format: projects/{project}/locations/{region}/clusters/{cluster id} PrimaryConfig JSON representation { "secondaryClusterNames" : [ string ] } Fields secondaryClusterNames[] string Output only.
- The prefix of the cluster resource name is the name of the parent resource: projects/{project}/locations/{region} displayName string User-settable and human-readable display name for the Cluster. uid string Output only.
- Continuous backup properties for this cluster. secondaryConfig object ( SecondaryConfig ) Cross Region replication config specific to SECONDARY cluster. primaryConfig object ( PrimaryConfig ) Output only.
- The name of the cluster resource with the format: projects/{project}/locations/{region}/clusters/{cluster id} where the cluster ID segment should satisfy the regex expression [a-z0-9-]+ .

