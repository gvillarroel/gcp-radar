---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.534Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "API deployments tab in API hub"
feature_slug: "api-deployments-tab-in-api-hub"
latest_feature_date: "2025-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments"
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes"
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools"
keywords:
  - "viewing"
  - "dedicated"
  - "details"
  - "deployments"
  - "page"
  - "adds"
---

# API deployments tab in API hub

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

Adds a dedicated API Deployments tab in the API details page for viewing, creating, and managing API deployments.

## Extended Definition

Adds a dedicated API Deployments tab in the API details page for viewing, creating, and managing API deployments.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments)
- [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)
- [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools)

## Supporting Pages

### Manage deployments | Apigee | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments)
- Source ID: `feature-recovery-direct-http`
- Final score: 274
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Logging Visão geral do Logging Como visualizar registros Registros de acesso Registros do Cassandra Registros MART Registros de ambiente de execução Registros do sincronizador Registros de UDCA Coleta de métricas Visão geral da coleta de métricas Configurar a coleta de métricas Ver métricas Outra coleta de dados Serviços do ambiente de execução Visão geral da configuração de serviço do ambiente de execução Gerenciar componentes do plano de ambiente de execução Cassandra Configurar o Cassandra para produção Configuração do StorageClass Backup e recuperação Configuração de TLS Diminuir a escala Ambientes Sobre os ambientes Como gerenciar ambientes Criar ambientes Excluir ambientes Roteamento de caminho base Gerar certificados TLS autoassinados MART Configuração do MART Adicionar o IP MART a uma organização Sincronizador Contas de serviço Sobre contas de serviço Validação da conta de serviço Receber as credenciais TLS: um exemplo Gerenciamento de clusters Requisitos de cluster Visão geral GKE de não produção GKE de produção Anthos GKE de não produção Anthos GKE de produção Configurar portas e firewalls Proteger a instalação do ambiente de execução Criptografia de dados Implantações multirregionais no GKE e no GKE On-Prem Implantações multirregionais em AKS Configurar endereços IP estáticos Serviços de escalonamento e escalonamento automático Configurar pools de nós dedicados Fazer o download das imagens de ambiente de execução assinadas Serviços de implantação da Apigee Atualizações graduais Como fazer upgrade do Apigee híbrido Referência da propriedade de configuração Notas da versão LOGGING Registro de auditoria Geração de registros de auditoria para o Apigee Connect Como gerar registros de acesso da Apigee TEST Solicitações de teste de segurança do cliente Teste de desempenho RESOLVER PROBLEMAS Solução de problemas da instalação da Apigee Como gerar registros de acesso da Apigee IA e ML Desenvolvimento de aplicativos Hospedagem de aplicativos Computação Pipelines e análises de dados Bancos de dados Distribuído, híbrido e multicloud Soluções por setor Migração Rede Observabilidade e monitoramento Segurança Storage Gerenciamento de recursos e acesso Gerenciamento de custos e uso Infraestrutura como código SDK, linguagens, frameworks e ferramentas Home Documentation Application development Apigee Guias Send feedback Manage deployments Stay organized with collections Save and categorize content based on your preferences.
- Manage deployments | Apigee | Google Cloud Documentation Skip to main content Áreas de tecnologia close IA e ML Desenvolvimento de aplicativos Hospedagem de aplicativos Computação Pipelines e análises de dados Bancos de dados Distribuído, híbrido e multicloud Soluções por setor Migração Rede Observabilidade e monitoramento Segurança Storage Ferramentas de vários produtos close Gerenciamento de recursos e acesso Gerenciamento de custos e uso Infraestrutura como código SDK, linguagens, frameworks e ferramentas / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Sign in Apigee Comece sem custos financeiros Visão geral Guias Referência Suporte Recursos Áreas de tecnologia More Visão geral Guias Referência Suporte Recursos Ferramentas de vários produtos More Console DISCOVER O que é o Apigee?
- REST To view details of a deployment, use the Get deployment details API: curl "https://apihub.googleapis.com/v1/projects/ HUB_PROJECT /locations/ HUB_LOCATION /deployments/ DEPLOYMENT_ID " -H "Authorization: Bearer: $(gcloud auth print-access-token)" -X GET -H "Content-Type: application/json" Replace the following: HUB_PROJECT : The name of your API hub host project.
- Console To list deployments with the UI: In the Google Cloud console, go to the API hub page.

### Manage attributes \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)
- Source ID: `site-docs-reference-required-4`
- Final score: 153
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example shows the API call to create the attribute-01 user defined attribute. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name" : "custom attribute", "description" : "custom attribute details", "definition type" : "USER DEFINED", "scope" : "API", "data type" : "ENUM", "allowed values" : [ { "id" : "value-1", "display name" : "Value 1", "description" : "Value 1 test description", "immutable" : false, }, { "id" : "value-2", "display name" : "Value 2", "description" : "Value 2 test description", "immutable" : false, }, ], "cardinality" : 4, "mandatory" : false }' \ -X POST https://apihub.googleapis.com/v1/projects/test-15/locations/us-central1/attributes?attribute id=attribute-01 Edit a user defined attribute Caution: Avoid adding sensitive data to user defined attributes.
- The following example shows the API call to filter resources based on a user defined attribute value of String data type. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-type: application/json" \ -X GET \ https://apihub.googleapis.com/v1/projects/test-project-1/locations/us-central1/apis?filter=attributes.projects/test-project-1/locations/us-central1/attributes/cdcb1260-ed63-4e5b-935d-4394f178da4f.string values.values:helloworld Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can perform the following edits on a user defined attribute: Update the attribute name Add new attribute value Delete an existing attribute value Console To edit a user defined attribute, do the following steps: In the Google Cloud console, go to the API hub > Settings page.
- View user defined attributes Console To view all the user defined attributes, in the Google Cloud console, go to the API hub > Settings page.

### Manage MCP tools \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools)
- Source ID: `site-docs-reference-required-6`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following image shows the MCP Tools section of the version details page: MCP specification file schema JSON schema The following JSON schema shows the structure of a valid MCP specification file. { "type" : "object" , "properties" : { "tools" : { "type" : "array" , "items" : { "type" : "object" , "properties" : { "name" : { "type" : "string" , "description" : "The name of the tool.
- The MCP specification file is parsed and the tools are listed in the MCP Tools section of the version details page.
- Example curl --location 'https://apihub.googleapis.com/v1/projects/apihub-test-api/locations/us-central1/apis/apihub-test-api/versions/1/operations?api operation id=get-weather' \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ --header 'Content-Type: application/json; charset=utf-8' \ --data '{ "details": { "description": "Fetches the current weather for a given location.", "documentation": { "externalUri": "https://www.example.com/weather" }, "deprecated": false, "mcpTool": { "name": "get-weather", "title": "Get Weather", "description": "Fetches the current weather for a given location.", "annotations": { "title": "Weather Tool", "readOnlyHint": true, "destructiveHint": false, "idempotentHint": true, "openWorldHint": true, "additionalHints": { "apiProvider": "Some Weather API" } }, "inputSchema": { "jsonSchema": { "type": "object", "properties": { "location": { "type": "string", "description": "The city and state, e.g., San Francisco, CA" } }, "required": [ "location" ] } }, "outputSchema": { "jsonSchema": { "type": "object", "properties": { "temperature": { "type": "number" }, "unit": { "type": "string" }, "description": { "type": "string" } } } } } } }' Extract MCP tools from Apigee MCP proxies Private Preview — MCP in Apigee This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Add MCP tools using the API REST To add a MCP tool to an API version, use the Create operations API. curl --location 'https://apihub.googleapis.com/v1/projects/ PROJECT /locations/ LOCATION /apis/ API ID /versions/ VERSION ID /operations?api operation id= TOOL ID ' \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ --header 'Content-Type: application/json; charset=utf-8' \ --data '{ "details": { "description": " DESCRIPTION ", "documentation": { "externalUri": " EXTERNAL URI " }, "deprecated": false, "mcpTool": { "name": " TOOL NAME ", "title": " TOOL TITLE ", "description": " TOOL DESCRIPTION ", "annotations": { "title": " TOOL ANNOTATION TITLE ", "readOnlyHint": false, "destructiveHint": false, "idempotentHint": true, "openWorldHint": false, "additionalHints": { "custom hint": " TOOL ANNOTATION CUSTOM HINT " } }, "inputSchema": { "jsonSchema": { "type": "object", "properties": { "input param": { "type": "string" } } } }, "outputSchema": { "jsonSchema": { "type": "object", "properties": { "output result": { "type": "string" } } } } } } }' Replace the following: PROJECT : your Google Cloud project ID.

