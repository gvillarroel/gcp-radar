---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.159Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner remote MCP server"
feature_slug: "spanner-remote-mcp-server"
latest_feature_date: "2026-02-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/reference/mcp"
  - "https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function"
  - "https://docs.cloud.google.com/spanner/docs/query-operators-distributed"
keywords:
  - "agentic"
  - "remote"
  - "server"
  - "applications"
  - "enables"
---

# Spanner remote MCP server

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner remote MCP server enables agentic AI applications such as Gemini CLI, Gemini Code Assist agent mode, and Claude.ai to interact with Spanner instances and databases, and is available in Preview.

## Extended Definition

Spanner remote MCP server enables agentic AI applications such as Gemini CLI, Gemini Code Assist agent mode, and Claude.ai to interact with Spanner instances and databases, and is available in Preview.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/reference/mcp](https://docs.cloud.google.com/spanner/docs/reference/mcp)
- [https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function](https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function)
- [https://docs.cloud.google.com/spanner/docs/query-operators-distributed](https://docs.cloud.google.com/spanner/docs/query-operators-distributed)

## Supporting Pages

### Spanner remote functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function](https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- MAX LOSSLESS = 9007199254740992 @functions framework . http def batch add ( request ): try : return value = [] request json = request . get json () calls = request json [ 'calls' ] for call in calls : return value . append ( sum ([ int ( x ) if isinstance ( x , str ) else x for x in call if x is not None ])) replies = [ str ( x ) if x > MAX LOSSLESS or x < - MAX LOSSLESS else x for x in return value ] return json = jsonify ( { "replies" : replies } ) return return json except Exception as e : return jsonify ( { "errorMessage" : str ( e ) } ), 400 Assuming that the function is deployed in the project PROJECT ID in region us-east1 as the function name remote add , it can be accessed using the endpoint https://us-east1- PROJECT ID .cloudfunctions.net/remote add .
- Required roles To ensure that your Spanner agent service account (service- PROJECT ID @gcp-sa-spanner.iam.gserviceaccount.com) has the necessary permissions to use Spanner remote functions, ask your administrator to grant the Spanner API Service Agent ( roles/spanner.serviceAgent ) IAM role to your Spanner agent service account (service- PROJECT ID @gcp-sa-spanner.iam.gserviceaccount.com) on the project.
- Create a remote function To create a remote function: SQL Run the following CREATE FUNCTION statement in Spanner: CREATE FUNCTION REMOTE FUNCTION NAME ( x INT64 , y INT64 ) RETURNS INT64 NOT DETERMINISTIC LANGUAGE REMOTE OPTIONS ( endpoint = ENDPOINT URL , max batching rows = MAX BATCHING ROWS ); Replace the following: REMOTE FUNCTION NAME : the name of your remote function.
- This request // has two calls batched together into a single request. { "requestId" : "124ab1c" , "calls" : [ [ 1 , 2 ], [ 3 , 4 ] ] } Output format Spanner expects the endpoint to return an HTTPS response in the following format; otherwise, Spanner can't consume the response and the query fails calling the remote function.

### MCP Reference: spanner.googleapis.com \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/reference/mcp](https://docs.cloud.google.com/spanner/docs/reference/mcp)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- MCP servers connect AI applications to external systems such as databases and web services, translating their responses into a format that the AI application can understand.
- For more information about using Google and Google Cloud remote MCP servers, see Google Cloud MCP servers overview .
- Spanner MCP Server provides tools to interact with Spanner Server Endpoints An MCP service endpoint is the network address and communication interface (usually a URL) of the MCP server that an AI application (the Host for the MCP client) uses to establish a secure, standardized connection.
- The spanner.googleapis.com MCP server has the following MCP endpoint: https://spanner.googleapis.com/mcp MCP Tools An MCP tool is a function or executable capability that an MCP server exposes to a LLM or AI application to perform an action in the real world.

### Distributed operators \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-operators-distributed](https://docs.cloud.google.com/spanner/docs/query-operators-distributed)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- The following query demonstrates this operator: SELECT s . songname , s . songgenre FROM songs AS s WHERE s . singerid = 2 AND s . songgenre = 'ROCK' ; / -----------------+-----------+ SongName SongGenre +-----------------+-----------+ Starting Again ROCK The Second Time ROCK Fight Story ROCK +-----------------+----------- / The execution plan appears as follows: The distributed union operator sends subplans to remote servers, which perform a table scan across splits that satisfy the query's predicate WHERE s.SingerId = 2 AND s.SongGenre = 'ROCK' .
- A distributed merge union executes the following steps: The root server sends a subquery to each remote server that hosts a split of the queried data.
- Split pruning means the remote servers execute subplans only on splits that satisfy the predicate, improving latency and query performance.
- The distributed union operator then returns the combined results from the remote servers as the SQL query results.

