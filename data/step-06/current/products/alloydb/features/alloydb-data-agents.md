---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.567Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB data agents"
feature_slug: "alloydb-data-agents"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "database interaction via chat"
  - "conversational AI agent"
  - "conversational language interface"
  - "AlloyDB data agents"
  - "AI data agents"
  - "data agent"
  - "natural language data access"
---

# AlloyDB data agents

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB now supports building data agents that use conversational language interfaces to interact with database data.

## Extended Definition

AlloyDB now supports building data agents that use conversational language interfaces to interact with database data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### "Integrate QueryData with an application \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent)
- Source ID: `site-docs-root-2`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example tools.yaml shows how to set up multiple QueryData agents for a database source: kind : source name : gda-api-source type : cloud-gemini-data-analytics projectId : < var>PROJECT ID</var> --- kind : tool name : cloud gda query tool v1 type : cloud-gemini-data-analytics-query source : gda-api-source context : datasourceReferences : < var>DB SOURCE</var> : databaseReference : ... agentContextReference : contextSetId : " V1 YOUR CONTEXT SET ID " generationOptions : ... --- kind : tool name : cloud gda query tool v2 type : cloud-gemini-data-analytics-query source : gda-api-source context : datasourceReferences : < var>DB SOURCE</var> : databaseReference : ... agentContextReference : contextSetId : " V2 YOUR CONTEXT SET ID " generationOptions : ...
- Here are the flights departing from San Francisco that avoid the evening rush hour (defined as 5 PM to 7 PM): UA 1532 departing at 05:50:00 UA 1158 departing at 05:57:00 CY 922 departing at 06:38:00 OO 5441 departing at 07:08:00 UA 616 departing at 07:14:00 AA 24 departing at 07:14:00 B6 434 departing at 08:00:00 AA 242 departing at 08:18:00 UA 1739 departing at 08:22:00 OO 6336 departing at 08:32:00 US 1784 departing at 08:47:00 DL 1631 departing at 09:00:00 DL 1106 departing at 09:06:00 OO 5427 departing at 09:06:00 CY 352 departing at 09:25:00 Enter a question based on the concept type that you added in the QueryData agent context.
- If the tool output indicates failure or empty results, explain that clearly using the provided reasoning. """ client = ToolboxSyncClient ( TOOLBOX URL ) mcp tool = client . load tool ( "cloud gda query tool" ) root agent = Agent ( model = "gemini-2.5-flash" , name = "root agent" , instruction = INSTRUCTION , tools = cast ( list [ ToolUnion ], [ mcp tool ]), ) Note: The instruction contains a system prompt that sets up a flight assistant QueryData agent.
- Get me flights to disney world Based on the value search context added earlier, the QueryData agent understands that disney world relates to the city Orlando and returns the associated data for the QueryData agent to use in constructing its response.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- April 06, 2026 Feature The QueryData tool lets you to query with the data in your database using conversational language and build data agents.
- December 17, 2025 Feature You can build data agents that interact with the data in your database using conversational language.
- Use these data agents as tools to empower your applications.
- For more information, see Data agents overview .

