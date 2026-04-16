---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.870Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Vector search"
feature_slug: "vector-search"
latest_feature_date: "2024-09-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields"
  - "https://docs.cloud.google.com/firestore/docs/concepts/index-overview"
  - "https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox"
keywords:
  - "vector"
  - "search"
  - "firestore"
  - "supports"
  - "nearest"
  - "neighbor"
  - "searches"
  - "including"
---

# Vector search

Product: Firestore
Coverage: LOW

## Step 02 Summary

Firestore supports K-nearest neighbor vector searches, including inequality filters, returned vector distance, and distance thresholds.

## Extended Definition

Firestore supports K-nearest neighbor vector searches, including inequality filters, returned vector distance, and distance thresholds.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields](https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields)
- [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview)
- [https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox)

## Supporting Pages

### "Query with range and inequality filters on multiple fields overview \_|\_\

- URL: [https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields](https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields)
- Source ID: `site-docs-reference`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Query with range and inequality filters on multiple fields overview Firestore supports using range and inequality filters on multiple fields in a single query.
- WhereLessThan ( "density" , 10000 ); Dart final citiesRef = FirebaseFirestore . instance . collection ( 'cities' ) final query = citiesRef . where ( "population" , isGreaterThan: 1000000 ) . where ( "density" , isLessThan: 10000 ); Indexing considerations Before you run your queries, read about queries and the Firestore data model .
- Where ( "density" , "<" , 10000 ) Java db . collection ( "cities" ) . whereGreaterThan ( "population" , 1000000 ) . whereLessThan ( "density" , 10000 ); Node.js db . collection ( "cities" ) . where ( 'population' , '>' , 1000000 ), . where ( 'density' , '<' , 10000 ) Python from google.cloud import firestore db = firestore .
- Order index fields by equalities followed by most selective range or inequality field Firestore uses the leftmost fields of a composite index to satisfy the equality constraints and the range or inequality constraint, if any, on the first field of the orderBy() query.

### "Use Firestore with MCP, Gemini CLI, and other agents \_|\_ Firestore in\

- URL: [https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox)
- Source ID: `site-docs-reference-required-4`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin To use the tools in the Gemini CLI extension for Firestore, you must have one of the following Identity and Access Management (IAM) roles, or a custom role with equivalent permissions: Task Role name Required Identity and Access Management (IAM) role Read and write data in Firestore database Cloud Datastore User roles/datastore.user View and test security rules Firebase Rules Viewer roles/firebaserules.viewer Set up Firestore Create a new Google Cloud project or select an existing one .
- This page describes how to use the MCP Toolbox for Databases to expose your developer assistance tools to a Firestore instance using the following IDEs: Gemini CLI Gemini Code Assist Cursor Windsurf (Codium) Visual Studio Code (Copilot) Cline (VS Code extension) Claude desktop Claude code About Gemini CLI and extensions Gemini CLI is an open-source AI agent designed to assist with development workflows by assisting with coding, debugging, data exploration, and content creation.
- The FIRESTORE DATABASE variable is optional and defaults to (default) . { "mcpServers": { "firestore": { "command": "./PATH/TO/toolbox", "args": ["--prebuilt","firestore","--stdio"], "env": { "FIRESTORE PROJECT": " PROJECT ID ", "FIRESTORE DATABASE": " DATABASE NAME " } } } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Category Tools Example natural language prompt Document and data retrieval get documents Show me the Firestore data for the test users qa user 123 and qa user 456 from the users-staging collection. list collections List all subcollections under the users-staging collection. query collection Find all users in the users-staging collection whose wishlist contains product-glasses.

### "Standard edition index overview \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview)
- Source ID: `site-docs-reference`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- Vector Supports FindNearest query clauses on the field.
- The app uses combinations of equality clauses for category , city , and editors pick while always sorting by ascending star rating : Web db.collection("restaurants").where("category", "==", "burgers") .orderBy("star rating") db.collection("restaurants").where("city", "==", "San Francisco") .orderBy("star rating") db.collection("restaurants").where("category", "==", "burgers") .where("city", "==", "San Francisco") .orderBy("star rating") db.collection("restaurants").where("category", "==", "burgers") .where("city", "==" "San Francisco") .where("editors pick", "==", true ) .orderBy("star rating") You could create an index for each query: Collection Fields indexed Query scope restaurants arrow upward category, arrow upward star rating Collection restaurants arrow upward city, arrow upward star rating Collection restaurants arrow upward category, arrow upward city, arrow upward star rating Collection restaurants arrow upward category, arrow upward city, arrow upward editors pick, arrow upward star rating Collection As a better solution, you can reduce the number of indexes by taking advantage of Firestore Standard edition's ability to merge indexes for equality clauses: Collection Fields indexed Query scope restaurants arrow upward category, arrow upward star rating Collection restaurants arrow upward city, arrow upward star rating Collection restaurants arrow upward editors pick, arrow upward star rating Collection Not only is this set of indexes smaller, it also supports an additional query: Web db.collection("restaurants").where("editors pick", "==", true) .orderBy("star rating") Indexing limits The following limits apply to indexes.
- Document /cities/SF city name : "San Francisco" temperatures : {summer: 67, winter: 55} neighborhoods : ["Mission", "Downtown", "Marina"] Automatic indexes city name ASC city name DESC neighborhoods ASC neighborhoods DESC temperatures ASC temperatures DESC temperatures.summer ASC temperatures.summer DESC temperatures.winter ASC temperatures.winter DESC neighborhoods Array Contains Manual indexes city name ASC, neighborhoods ARRAY city name DESC, neighborhoods ARRAY Index entries This indexing configuration results in the following index entries for the document: Index Indexed data Automatic index entries city name ASC city name: "San Francisco" city name DESC city name: "San Francisco" neighborhoods ASC neighborhoods: ["Mission", "Downtown", "Marina"] neighborhoods DESC neighborhoods: ["Mission", "Downtown", "Marina"] temperatures ASC temperatures: {summer: 67, winter: 55} temperatures DESC temperatures: {summer: 67, winter: 55} temperatures.summer ASC temperatures.summer: 67 temperatures.summer DESC temperatures.summer: 67 temperatures.winter ASC temperatures.winter: 55 temperatures.winter DESC temperatures.winter: 55 neighborhoods Array Contains neighborhoods: "Mission" neighborhoods Array Contains neighborhoods: "Downtown" neighborhoods Array Contains neighborhoods: "Marina" Manual index entries city name ASC, neighborhoods ARRAY city name: "San Francisco", neighborhoods: "Mission" city name ASC, neighborhoods ARRAY city name: "San Francisco", neighborhoods: "Downtown" city name ASC, neighborhoods ARRAY city name: "San Francisco", neighborhoods: "Marina" city name DESC, neighborhoods ARRAY city name: "San Francisco", neighborhoods: "Mission" city name DESC, neighborhoods ARRAY city name: "San Francisco", neighborhoods: "Downtown" city name DESC, neighborhoods ARRAY city name: "San Francisco", neighborhoods: "Marina" Indexes and pricing Indexes contribute to the storage costs of your application.
- Each row in the following table represents an entry in a single-field index: Collection Field indexed Query scope cities arrow upward name Collection cities arrow upward state Collection cities arrow upward country Collection cities arrow upward capital Collection cities arrow upward population Collection cities arrow upward regions Collection cities arrow downward name Collection cities arrow downward state Collection cities arrow downward country Collection cities arrow downward capital Collection cities arrow downward population Collection cities arrow downward regions Collection cities array-contains regions Collection Queries supported by single-field indexes Using these automatically created single-field indexes, you can run simple queries like the following: Web const stateQuery = citiesRef . where ( "state" , "==" , "CA" ); const populationQuery = citiesRef . where ( "population" , "<" , 100000 ); const nameQuery = citiesRef . where ( "name" , ">=" , "San Francisco" ); test . firestore . js You can also create in and compound equality ( == ) queries: Web citiesRef.where('country', 'in', ["USA", "Japan", "China"]) // Compound equality queries citiesRef.where("state", "==", "CO").where("name", "==", "Denver") citiesRef.where("country", "==", "USA") .where("capital", "==", false) .where("state", "==", "CA") .where("population", "==", 860000) If you need to run a compound query that uses a range comparison ( < , <= , , or >= ) or if you need to sort by a different field, you must create a manual index for that query.

