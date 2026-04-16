---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.257Z"
product_name: "Memorystore for Valkey"
product_slug: "memorystore-for-valkey"
feature_name: "JSON documents"
feature_slug: "json-documents"
latest_feature_date: "2026-03-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-json"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_backup"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_backups"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions"
keywords:
  - "json"
  - "documents"
  - "memorystore"
  - "for"
  - "valkey"
  - "supports"
  - "version"
---

# JSON documents

Product: Memorystore for Valkey
Coverage: MEDIUM

## Step 02 Summary

Memorystore for Valkey supports JSON documents version 1.0.

## Extended Definition

Memorystore for Valkey supports JSON documents version 1.0.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/valkey/about-json](https://docs.cloud.google.com/memorystore/docs/valkey/about-json)
- [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_backup](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_backup)
- [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_backups](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_backups)
- [https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions](https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions)

## Supporting Pages

### About JSON \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-json](https://docs.cloud.google.com/memorystore/docs/valkey/about-json)
- Source ID: `site-iam-reference`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Availability If you create a Memorystore for Valkey instance, version 8.0 and later, then version 1.0 of the JSON data type and associated commands is available automatically.
- Multiple conditional expressions If there are multiple conditional expressions for filtering, then Memorystore for Valkey evaluates them in the following order: Operations inside of parentheses The logical AND expression ( && ) The logical OR ( ) expression Maximum nesting depth limit When a JSON object or array has an element that's another JSON object or array, the inner object or array nests within the outer object or array.
- When Memorystore for Valkey receives a JSON number, it converts the number into one of the following internal binary representations: A 64-bit IEEE double precision floating point number A 64-bit signed integer JSON doesn't retain the original string and all of its formatting.
- When Memorystore for Valkey outputs a number as part of a JSON response, Memorystore for Valkey converts the number from the internal binary representation to a printable string that uses generic formatting rules.

### "MCP Tools Reference: memorystore.googleapis.com \_|\_ Memorystore for Valkey\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_backup](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_backup)
- Source ID: `site-api-reference`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Curl Request curl --location 'https://memorystore.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "get backup", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for GetBackup .
- Home Documentation Databases Memorystore Memorystore for Valkey Reference Send feedback MCP Tools Reference: memorystore.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- Tool: get backup Get detailed information about a Memorystore for Valkey backup.
- Backup JSON representation { "name" : string , "createTime" : string , "instance" : string , "instanceUid" : string , "totalSizeBytes" : string , "expireTime" : string , "engineVersion" : string , "backupFiles" : [ { object ( BackupFile ) } ] , "nodeType" : enum ( NodeType ) , "replicaCount" : integer , "shardCount" : integer , "backupType" : enum ( BackupType ) , "state" : enum ( State ) , "encryptionInfo" : { object ( EncryptionInfo ) } , "uid" : string } Fields name string Identifier.

### "MCP Tools Reference: memorystore.googleapis.com \_|\_ Memorystore for Valkey\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_backups](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_backups)
- Source ID: `site-api-reference`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Curl Request curl --location 'https://memorystore.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list backups", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for ListBackups .
- Home Documentation Databases Memorystore Memorystore for Valkey Reference Send feedback MCP Tools Reference: memorystore.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- Tool: list backups List all Memorystore for Valkey backups.
- Backup JSON representation { "name" : string , "createTime" : string , "instance" : string , "instanceUid" : string , "totalSizeBytes" : string , "expireTime" : string , "engineVersion" : string , "backupFiles" : [ { object ( BackupFile ) } ] , "nodeType" : enum ( NodeType ) , "replicaCount" : integer , "shardCount" : integer , "backupType" : enum ( BackupType ) , "state" : enum ( State ) , "encryptionInfo" : { object ( EncryptionInfo ) } , "uid" : string } Fields name string Identifier.

### Supported versions \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions](https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Memorystore for Valkey supports Valkey versions 7.2, 8.0, and 9.0.
- Valkey version 8.0 The following table outlines Memorystore support of some major features introduced by Valkey 8.0: Feature Description Asynchronous I/O threading for performance boost This feature significantly improves performance by enabling parallel processing between the main thread and I/O threads.
- Home Documentation Databases Memorystore Memorystore for Valkey Guides Send feedback Supported versions Stay organized with collections Save and categorize content based on your preferences.
- Current versions This table shows the supported Valkey versions and when each version was last updated: Valkey major version Last update 9.0 March 11, 2026 8.0 October 2, 2024 7.2 August 30, 2024 Valkey version 9.0 Valkey 9.0's major features focus on performance and scalability enhancements, including hash field expiration for more granular data management.

