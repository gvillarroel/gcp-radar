---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.065Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "ai.hybrid_search()"
feature_slug: "ai-hybrid-search"
latest_feature_date: "2026-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search"
  - "https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters"
keywords:
  - "combines"
  - "hybrid"
  - "multiple"
  - "results"
  - "search"
  - "types"
  - "into"
---

# ai.hybrid_search()

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The ai.hybrid_search() function combines results from multiple search types into a single ranked list using Reciprocal Rank Fusion.

## Extended Definition

The ai.hybrid_search() function combines results from multiple search types into a single ranked list using Reciprocal Rank Fusion.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search](https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search)
- [https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters](https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters)

## Supporting Pages

### Run a hybrid vector similarity search | AlloyDB for PostgreSQL | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search](https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search)
- Source ID: `feature-recovery-direct-http`
- Final score: 302
- Re-rank relevance: N/A

Evidence snippets:
- Perform a hybrid search using the hybrid_search function The ai.hybrid_search() function lets you combine results from multiple search types, such as vector search and full-text search.
- CREATE TABLE product_logs ( log_id_str TEXT PRIMARY KEY , content TEXT , content_tsv tsvector GENERATED ALWAYS AS ( to_tsvector ( 'english' , content )) STORED ); INSERT INTO product_logs ( log_id_str , content ) VALUES ( '999' , 'system start and services initialized' ); CREATE INDEX idx_product_logs_rum ON product_logs USING rum ( content_tsv rum_tsvector_ops ); SELECT id , pg_typeof ( id ) FROM ai . hybrid_search ( ARRAY [ '{ "data_type": "text", "table_name": "product_logs", "key_column": "log_id_str", "text_column": "content_tsv", "query_text_input": "system", "limit": 1 }' :: jsonb ], id_type = > NULL :: INTEGER ); The output shows that the id column is cast to INTEGER : id | pg_typeof ------+----------- 999 | integer (1 rows) The following example shows why specifying the data type for the return ID column is important, by showing what happens when there's a mismatch.
- DROP TABLE IF EXISTS product_logs ; CREATE TABLE product_logs ( log_id_str TEXT PRIMARY KEY , content TEXT , content_tsv tsvector GENERATED ALWAYS AS ( to_tsvector ( 'english' , content )) STORED ); INSERT INTO product_logs VALUES ( '999' , 'system start' ); SELECT id , pg_typeof ( id ), score FROM ai . hybrid_search ( ARRAY [ '{ "data_type": "text", "table_name": "product_logs", "key_column": "log_id_str", "text_column": "content_tsv", "query_text_input": "system", "limit": 1 }' :: jsonb ], id_type = > NULL :: INTEGER --- CAST to INT ); Choose a text search query parser When you perform full-text search, AlloyDB provides the g_to_tsquery() function to achieve high-relevance information retrieval. g_to_tsquery() , which is the default, improves information retrieval by transforming plain text or standard tsquery formats into a more data-rich tsquery output.
- SELECT * FROM ai . hybrid_search ( search_inputs = > ARRAY [ '{ "data_type": "vector", "weight": 0.5, "table_name": "documents", "key_column": "doc_id", "vec_column": "text_embedding", "distance_operator": "public.<=>", "limit": 5, "query_vector": "ai.embedding(''gemini-embedding-001'', ''managed database'')::vector" }' :: JSONB , '{ "data_type": "text", "weight": 0.5, "table_name": "documents", "key_column": "doc_id", "text_column": "text_tsv", "limit": 5, "ranking_function": "ts_rank", "query_text_input": "database" }' :: JSONB ], include_json_output = > false ); include_json_output is an optional parameter.

### "Run a hybrid vector similarity search \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search](https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search)
- Source ID: `site-docs-reference-2`
- Final score: 278
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- AlloyDB can then combine and re-rank results from both search types using algorithms like Reciprocal Rank Fusion (RRF) , which merges multiple search result lists into a single, relevance-ranked list.
- Perform a hybrid search using the hybrid search function The ai.hybrid search() function lets you combine results from multiple search types, such as vector search and full-text search.
- RRF is a rank-based algorithm that combines multiple ranked lists of search results into a single ranked list by assigning a score to each document.
- If you prefer PostgreSQL parser functions, you can use the following functions by explicitly specifying them as follows: plainto tsquery() to tsquery() Perform a hybrid search using raw SQL Hybrid search involves performing separate vector and text searches, then combining and re-ranking results using Reciprocal Rank Fusion (RRF).

### Hybrid search function parameters | AlloyDB for PostgreSQL | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters](https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters)
- Source ID: `feature-recovery-direct-http`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Hybrid search function parameters | AlloyDB for PostgreSQL | Google Cloud Documentation Skip to main content Áreas de tecnologia close IA e ML Desenvolvimento de aplicativos Hospedagem de aplicativos Computação Pipelines e análises de dados Bancos de dados Distribuído, híbrido e multicloud Soluções por setor Migração Rede Observabilidade e monitoramento Segurança Storage Ferramentas de vários produtos close Gerenciamento de recursos e acesso Gerenciamento de custos e uso Infraestrutura como código SDK, linguagens, frameworks e ferramentas / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Sign in AlloyDB for PostgreSQL Comece sem custos financeiros Visão geral Guias Referência Recursos Áreas de tecnologia More Visão geral Guias Referência Recursos Ferramentas de vários produtos More Console Referência da REST Overview v1 Recursos REST projects.locations Visão geral get list projects.locations.backups Visão geral create delete get list patch projects.locations.clusters Visão geral create createsecondary delete export get import list patch promote restore restoreFromCloudSQL alternânca upgrade projects.locations.clusters.instances Visão geral create createsecondary delete failover get getConnectionInfo injectFault list patch restart projects.locations.clusters.users Visão geral create delete get list patch projects.locations.operations Visão geral cancelar delete get list projects.locations.supportedDatabaseFlags Visão geral list Tipos BackupView Banco de dados DatabaseVersion EncryptionConfig EncryptionInfo ListDatabasesRequest ListDatabasesResponse SslConfig v1beta Recursos REST projects.locations Visão geral get list projects.locations.backups Visão geral create delete get list patch projects.locations.clusters Visão geral create createsecondary delete export get import list patch promote restore restoreFromCloudSQL alternânca upgrade projects.locations.clusters.instances Visão geral create createsecondary delete failover get getConnectionInfo injectFault list patch restart projects.locations.clusters.users Visão geral create delete get list patch projects.locations.operations Visão geral cancelar delete get list projects.locations.supportedDatabaseFlags Visão geral list Tipos BackupView CreateDatabaseRequest Banco de dados DatabaseVersion EncryptionConfig EncryptionInfo ListDatabasesRequest ListDatabasesResponse SslConfig Tipos compartilhados Tipos CancelOperationRequest Date DayOfWeek DeleteOperationRequest GetLocationRequest GetOperationRequest ListLocationsRequest ListLocationsResponse ListOperationsRequest ListOperationsResponse TimeOfDay Referência do servidor MCP Visão geral Ferramentas list_clusters create_cluster get_cluster list_instances create_instance get_instance create_user get_user list_users execute_sql get_operation Comandos gcloud do AlloyDB Flags de banco de dados compatíveis Extensões de banco de dados compatíveis Flags e extensões do AlloyDB flags do alloydb Flags do consultor de índice Flags do mecanismo colunar Flags da política de senha Gerenciamento de endpoints de modelos Referência da API Modelos de IA compatíveis Modelos de amostra para registrar endpoints de modelo Vector Search Pesquisa vetorial do AlloyDB com referência do ScaNN Parâmetros de função de pesquisa híbrida Métricas de índice vetorial Referência do relatório de resumo de performance do banco de dados Referência das métricas de insights do sistema Tipos de dados e mapeamentos de colunas do BigQuery compatíveis Tipos de nós do plano de execução Estratégias de indexação de banco de dados do AlloyDB Ajuste e otimização de consultas do AlloyDB Verificação de bloat da tabela do Postgres Permissões e papéis do IAM para o AlloyDB IA e ML Desenvolvimento de aplicativos Hospedagem de aplicativos Computação Pipelines e análises de dados Bancos de dados Distribuído, híbrido e multicloud Soluções por setor Migração Rede Observabilidade e monitoramento Segurança Storage Gerenciamento de recursos e acesso Gerenciamento de custos e uso Infraestrutura como código SDK, linguagens, frameworks e ferramentas Home Documentation Databases AlloyDB for PostgreSQL Referência Send feedback Hybrid search function parameters Stay organized with collections Save and categorize content based on your preferences.
- The maximum number of results to return from this search component. weight FLOAT The contribution of this component to the final RRF score, from 0.0 to 1.0.
- The maximum number of results to return from this search component. weight FLOAT The contribution of this component to the final RRF score, from 0.0 to 1.0.
- The AlloyDB for PostgreSQL hybrid_search function accepts several parameters to control the search and fusion process.

