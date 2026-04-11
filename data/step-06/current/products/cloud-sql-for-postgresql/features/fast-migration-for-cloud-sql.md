---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.374Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Fast migration for Cloud SQL"
feature_slug: "fast-migration-for-cloud-sql"
latest_feature_date: "2023-05-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance"
  - "https://docs.cloud.google.com/sql/docs/postgres/ai-overview"
keywords:
  - "fast"
  - "migration"
  - "for"
  - "sql"
  - "improves"
  - "the"
  - "performance"
  - "of"
---

# Fast migration for Cloud SQL

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Fast migration improves the performance of migrating data from external sources into Cloud SQL instances.

## Extended Definition

Fast migration improves the performance of migrating data from external sources into Cloud SQL instances.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance](https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance)
- [https://docs.cloud.google.com/sql/docs/postgres/ai-overview](https://docs.cloud.google.com/sql/docs/postgres/ai-overview)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- This feature improves the performance of data migrations from an external source to a destination Cloud SQL instance.
- March 16, 2020 Feature Cloud SQL now supports read replicas in a different region than that of the primary instance, providing additional protection against regional outages and improving read performance by making replicas available closer to your application.
- September 28, 2023 Feature The following pg wait sampling and rdkit flags are generally available: pg wait sampling flags cloudsql.enable pg wait sampling: enable the pg wait sampling extension for Cloud SQL for PostgreSQL instances. pg wait sampling.history size: set the size of the in-memory ring buffer for history sampling, in terms of the number of samples. pg wait sampling.history period: set the time interval for history sampling, in milliseconds. pg wait sampling.profile period: set the time interval for profile sampling for wait events, in milliseconds. pg wait sampling.profile pid: specify whether the wait profile that accumulates samples for each process and waits event is collected for each process or for all processes. pg wait sampling.profile queries: specify whether the wait profile is collected for each query or for all queries. rdkit flags rdkit.tanimoto threshold: set the threshold value for the Tanimoto similarity operator. rdkit.dice threshold: set the threshold value for the Dice similarity operator. rdkit.do chiral sss: specify whether stereochemistry is used in substructure matching. rdkit.do enhanced stereo sss: specify whether enhanced stereo is used in substructure matching. rdkit.sss fp size: set the size of the fingerprint used for substructure screening, in bits. rdkit.morgan fp size: set the size of morgan fingerprints, in bits. rdkit.featmorgan fp size: set the size of featmorgan fingerprints, in bits. rdkit.layered fp size: set the size of layered fingerprints, in bits. rdkit.rdkit fp size: set the size of rdkit fingerprints, in bits. rdkit.hashed torsion fp size: set the size of topological torsion bit vector fingerprints, in bits. rdkit.hashed atompair fp size: set the size of atom pair bit vector fingerprints, in bits. rdkit.reaction sss fp size: set the size of the structural chemical reaction fingerprint, in bits. rdkit.reaction difference fp size: set the size of the difference chemical reaction fingerprint, in bits. rdkit.reaction sss fp type: specify the type of structural chemical reaction fingerprint. rdkit.reaction difference fp type: specify the type of difference chemical reaction fingerprint. rdkit.ignore reaction agents: specify whether agents of a chemical reaction are taken into account. rdkit.agent FP bit ratio: specify the weight of the impact of agents contained in a chemical reaction fingerprint. rdkit.move unmmapped reactants to agents: specify whether unmapped reactant agents of a chemical reaction are taken into account. rdkit.threshold unmapped reactant atoms: set the ratio of allowed unmapped reactant atoms. rdkit.init reaction: specify whether the reaction is ready for use. rdkit.difference FP weight agents: specify the weight factor for agents compared to reactants and products in reaction difference fingerprints. rdkit.difference FP weight nonagents: specify the weight factor for reactants and products compared to agents in reaction difference fingerprints. rdkit.avalon fp size: set the size of avalon fingerprints, in bits.
- February 08, 2022 Feature Cloud SQL supports the max parallel maintenance workers , max parallel workers , max parallel workers per gather , and max pred locks per transaction flags: max parallel maintenance workers sets the maximum number of parallel workers that can be started by a single utility command. max parallel workers sets the maximum number of workers that the system can support for parallel operations. max parallel workers per gather sets the maximum number of workers that can be started by a single Gather or Gather Merge node. max pred locks per transaction controls the average number of object locks allocated for each transaction.

### Performance tips \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance](https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance)
- Source ID: `site-api-reference`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Here is an example of properly formed HTTP headers for enabling gzip compression: Accept - Encoding : gzip User - Agent : my program ( gzip ) Working with partial resources Another way to improve the performance of your API calls is by sending and receiving only the portion of the data that you're interested in.
- This document covers some techniques you can use to improve the performance of your application.
- As shown below, it also uses the fields parameter to limit the data returned in the patch response: PATCH https://www.googleapis.com/demo/v1/324?fields=etag,title,comment,characteristics Authorization: Bearer your auth token Content-Type: application/json If-Match: " ETagString " { "etag" : " ETagString " "title" : "" , / Clear the value of the title by setting it to the empty string. / "comment" : null , / Delete the comment by replacing its value with null. / "characteristics" : { "length" : "short" , "level" : "10" , / Modify the level value. / "followers" : [ "Jo" , "Liz" ], / Replace the followers array to delete Will and add Liz. / "accuracy" : "high" / Add a new characteristic. / } , } The server responds with a 200 OK HTTP status code, and the partial representation of the updated resource: 200 OK { "etag" : " newETagString " "title" : "" , / Title is cleared; deleted comment field is missing. / "characteristics" : { "length" : "short" , "level" : "10" , / Value is updated. / "followers" : [ "Jo" "Liz" ], / New follower Liz is present; deleted Will is missing. / "accuracy" : "high" / New characteristic is present. / } } Constructing a patch request directly For some patch requests, you need to base them on the data you previously retrieved.
- Simple request: This HTTP GET request omits the fields parameter and returns the full resource. https://www.googleapis.com/demo/v1 Full resource response: The full resource data includes the following fields, along with many others that have been omitted for brevity. { "kind" : "demo" , ... "items" : [ { "title" : "First title" , "comment" : "First comment." , "characteristics" : { "length" : "short" , "accuracy" : "high" , "followers" : [ "Jo" , "Will" ], } , "status" : "active" , ... } , { "title" : "Second title" , "comment" : "Second comment." , "characteristics" : { "length" : "long" , "accuracy" : "medium" "followers" : [ ], } , "status" : "pending" , ... } , ... ] } Request for a partial response: The following request for this same resource uses the fields parameter to significantly reduce the amount of data returned. https://www.googleapis.com/demo/v1? fields=kind,items(title,characteristics/length) Partial response: In response to the request above, the server sends back a response that contains only the kind information along with a pared-down items array that includes only HTML title and length characteristic information in each item.

### "Build generative AI applications using Cloud SQL \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/ai-overview](https://docs.cloud.google.com/sql/docs/postgres/ai-overview)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- You can use the app to build a basic chatbot API that: Integrates GKE or Cloud Run with Cloud SQL, Vertex AI, and pgvector Demonstrates connectivity to Cloud SQL using Private Service Connect in a Virtual Private Cloud (VPC) Uses Terraform to configure your infrastructure Uses Python with asyncpg and FastAPI Supports setting up Cloud SQL and an app that runs on either GKE or Cloud Run in separate Google Cloud projects The solution contains the following contents: Terraform templates to set up your infrastructure with best practices for security A sample app for an LLM-powered Chatbot that you can deploy to GKE or Cloud Run What's next Integrate Cloud SQL with Vertex AI Work with vector embeddings Invoke online predictions from Cloud SQL instances Understand an example of an embedding workflow Build LLM-powered applications using LangChain Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Cloud SQL provides the following metrics in the Metrics Explorer in Cloud Monitoring: Metric Description Metric label Data cache used The data cache usage (in bytes) database/data cache/bytes used Data cache quota The maximum data cache size (in bytes) database/data cache/quota Data cache hit count The total number of data cache hit read operations for an instance database/postgresql/data cache/hit count Data cache miss count The total number of data cache miss read operations for an instance database/postgresql/data cache/miss count Data cache hit ratio The ratio of data cache hit read operations to data cache miss read operations for an instance database/postgresql/data cache/hit ratio System Insights : provide system metrics such as CPU utilization, disk utilization, and throughput to help you monitor the health of instances and troubleshoot issues that affect the performance of your generative AI applications.
- You can use the following LangChain packages: Document loaders : load and store information from documents Vector stores : use LangChain to enable semantic search Chat messages : enable chains to recall previous conversations Improve vector search performance You can improve the performance of a vector search by using the following: Data cache : use a built-in data cache that leverages a fast, local SSD to store data pages that are read frequently.
- You can also monitor performance at an application level and trace the source of a problematic query across the application stack to the database by using SQLcommenter .

