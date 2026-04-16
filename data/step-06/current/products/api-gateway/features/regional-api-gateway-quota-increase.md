---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:11:52.460Z"
product_name: "API Gateway"
product_slug: "api-gateway"
feature_name: "Regional API Gateway quota increase"
feature_slug: "regional-api-gateway-quota-increase"
latest_feature_date: "2025-06-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud"
  - "https://docs.cloud.google.com/api-gateway/docs/about-api-gateway"
  - "https://docs.cloud.google.com/api-gateway/docs/creating-api-config"
keywords:
  - "regional"
  - "increase"
  - "maximum"
  - "number"
  - "quota"
  - "gateways"
---

# Regional API Gateway quota increase

Product: API Gateway
Coverage: MEDIUM

## Step 02 Summary

The maximum number of API Gateways that can be created per region has been increased to 50.

## Extended Definition

The maximum number of API Gateways that can be created per region has been increased to 50.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud)
- [https://docs.cloud.google.com/api-gateway/docs/about-api-gateway](https://docs.cloud.google.com/api-gateway/docs/about-api-gateway)
- [https://docs.cloud.google.com/api-gateway/docs/creating-api-config](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)

## Supporting Pages

### Sobre o gateway de API | API Gateway | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/about-api-gateway](https://docs.cloud.google.com/api-gateway/docs/about-api-gateway)
- Source ID: `feature-recovery-direct-http`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Acessar registros da plataforma Autenticação e chaves de API Escolher um método de autenticação Autenticar usuários Usar o JWT para autenticar usuários Usar o Firebase para autenticar usuários Usar o Auth0 para autenticar usuários Usar o Okta para autenticar usuários Usar tokens de ID do Google para autenticar usuários Autenticação entre serviços Proteger serviços de back-end Usar chaves de API Gerenciar o acesso à API Limitar solicitações de API Sobre cotas Usar domínios personalizados Criar implantações multirregionais Implantar APIs do Cloud Endpoints Centralizar APIs usando o hub de APIs Visão geral Conectar o API Gateway ao hub de API Ver APIs do API Gateway no hub de APIs Remover uma conexão do API Gateway do hub de API Conceitos Todos os conceitos Sobre o gateway de API Arquitetura do gateway de API Modelo de implantação do gateway de API OpenAPI Visão geral da OpenAPI Modificar um gateway para usar o OpenAPI 3.x Extensões da OpenAPI 2.0 Extensões OpenAPI 3.x Limitações de recursos da OpenAPI 2.0 Limitações de recursos da OpenAPI 3.x Visão geral do gRPC Balanceamento de carga para o API Gateway Modelos de caminho Conformidade com CMEK no API Gateway Glossário IA e ML Desenvolvimento de aplicativos Hospedagem de aplicativos Computação Pipelines e análises de dados Bancos de dados Distribuído, híbrido e multicloud Soluções por setor Migração Rede Observabilidade e monitoramento Segurança Storage Gerenciamento de recursos e acesso Gerenciamento de custos e uso Infraestrutura como código SDK, linguagens, frameworks e ferramentas Home Documentation Application development API Gateway Guias Envie comentários Mantenha tudo organizado com as coleções Salve e categorize o conteúdo com base nas suas preferências.
- Por exemplo, a seguinte tabela descreve um exemplo de API REST que pode retornar informações sobre um livro: Propriedade Valor Descrição URL https://www.mybooksapi.com/books/info Retorne o título, o autor e a data de publicação de um livro com base no International Standard Book Number (ISBN).

### Quickstart: Secure traffic to a service with the gcloud CLI | API Gateway | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud)
- Source ID: `feature-recovery-direct-http`
- Final score: 167
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Quickstart: Secure traffic to a service with the gcloud CLI | API Gateway | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in API Gateway Start free Overview Guides Reference Support Resources Technology areas More Overview Guides Reference Support Resources Cross-product tools More Console API Gateway Quickstarts All quickstarts Quickstart: Use the gcloud command-line tool Quickstart: Use the Cloud console Tutorials All tutorials Get started with API Gateway and App Engine Get started with API Gateway and Cloud Run Get started with API Gateway and Cloud Run for gRPC Get started with API Gateway and Cloud Functions Get started with load balancing for API Gateway Get started centralizing APIs with API hub How-to guides All how-to guides Create and deploy an API About the development environment Configure the development environment Create an API Create an API config Configure a gRPC service Deploy an API to a gateway Pass data to and from the backend service Troubleshooting & monitoring Troubleshooting Monitor your API Trace your API Access audit logs Access platform logs Authentication & API Keys Choose an authentication method Authenticate users Use JWT to authenticate users Use Firebase to authenticate users Use Auth0 to authenticate users Use Okta to authenticate users Use Google ID tokens to authenticate users Authentication between services Secure backend services Use API Keys Manage API access Limit API requests About quotas Use custom domains Create multi-region deployments Deploy Cloud Endpoints APIs Centralize APIs using API hub Overview Connect API Gateway with API hub View API Gateway APIs in API hub Remove an API Gateway connection from API hub Concepts All concepts About API Gateway API Gateway architecture API Gateway deployment model OpenAPI OpenAPI overview Modify a gateway to use OpenAPI 3.x OpenAPI 2.0 extensions OpenAPI 3.x extensions OpenAPI 2.0 feature limitations OpenAPI 3.x feature limitations gRPC overview Load balancing for API Gateway Path templating CMEK compliance in API Gateway Glossary AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Application development API Gateway Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Create a new API config with the modified OpenAPI spec using the following command: gcloud api-gateway api-configs create NEW_CONFIG_ID \ --api= API_ID --openapi-spec= NEW_API_DEFINITION \ --backend-auth-service-account= SERVICE_ACCOUNT_EMAIL For example: gcloud api-gateway api-configs create my-config-key \ --api= my-api --openapi-spec= openapi2-functions.yaml \ --project= my-project --backend-auth-service-account= 0000000000000compute@developer.gserviceaccount.com Run the following command to update your existing gateway with the new API config: gcloud api-gateway gateways update GATEWAY_ID \ --api= API_ID --api-config= NEW_CONFIG_ID \ --location= GCP_REGION For example: gcloud api-gateway gateways update my-gateway \ --api= my-api --api-config= my-config-key \ --location= us-central1 Test your API key Once you have created and deployed the modified API, try making a request to it.
- For example: gcloud api-gateway gateways create my-gateway \ --api= my-api --api-config= my-config \ --location= us-central1 On successful completion, use the following command to view details about the gateway: gcloud api-gateway gateways describe GATEWAY_ID \ --location= GCP_REGION For example: gcloud api-gateway gateways describe my-gateway \ --location= us-central1 This command returns the following: apiConfig: projects/my-project/locations/global/apis/my-api/configs/my-config createTime: '2020-02-05T13:44:12.997862831Z' defaultHostname: my-gateway-a12bcd345e67f89g0h.uc.gateway.dev displayName: my-gateway name: projects/my-project/locations/us-central1/gateways/my-gateway serviceAccount: email: 0000000000000-compute@developer.gserviceaccount.com state: ACTIVE updateTime: '2020-02-05T13:45:00.844705087Z' Note the value of the defaultHostname property.
- Run the following command to deploy the API config you just created to API Gateway: gcloud api-gateway gateways create GATEWAY_ID \ --api= API_ID --api-config= CONFIG_ID \ --location= GCP_REGION where: GATEWAY_ID specifies the name of the gateway.

### Create an API config | API Gateway | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/creating-api-config](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)
- Source ID: `feature-recovery-direct-http`
- Final score: 143
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create an API config | API Gateway | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in API Gateway Start free Overview Guides Reference Support Resources Technology areas More Overview Guides Reference Support Resources Cross-product tools More Console API Gateway Quickstarts All quickstarts Quickstart: Use the gcloud command-line tool Quickstart: Use the Cloud console Tutorials All tutorials Get started with API Gateway and App Engine Get started with API Gateway and Cloud Run Get started with API Gateway and Cloud Run for gRPC Get started with API Gateway and Cloud Functions Get started with load balancing for API Gateway Get started centralizing APIs with API hub How-to guides All how-to guides Create and deploy an API About the development environment Configure the development environment Create an API Create an API config Configure a gRPC service Deploy an API to a gateway Pass data to and from the backend service Troubleshooting & monitoring Troubleshooting Monitor your API Trace your API Access audit logs Access platform logs Authentication & API Keys Choose an authentication method Authenticate users Use JWT to authenticate users Use Firebase to authenticate users Use Auth0 to authenticate users Use Okta to authenticate users Use Google ID tokens to authenticate users Authentication between services Secure backend services Use API Keys Manage API access Limit API requests About quotas Use custom domains Create multi-region deployments Deploy Cloud Endpoints APIs Centralize APIs using API hub Overview Connect API Gateway with API hub View API Gateway APIs in API hub Remove an API Gateway connection from API hub Concepts All concepts About API Gateway API Gateway architecture API Gateway deployment model OpenAPI OpenAPI overview Modify a gateway to use OpenAPI 3.x OpenAPI 2.0 extensions OpenAPI 3.x extensions OpenAPI 2.0 feature limitations OpenAPI 3.x feature limitations gRPC overview Load balancing for API Gateway Path templating CMEK compliance in API Gateway Glossary AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Application development API Gateway Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- For example: gcloud api-gateway api-configs create CONFIG_ID \ --api= API_ID --openapi-spec= API_DEFINITION \ --backend-auth-service-account= SERVICE_ACCOUNT_EMAIL \ --async --display-name=MyConfig --labels=a=1,b=2 You can see the labels in the output of the describe command shown, or in the list command by including the --format option: gcloud api-gateway api-configs list \ --api= API_ID --format="table(name, labels)" List API configs List all of the API Gateways deployed in your Google Cloud project.
- API Gateway enforces the following requirements for the API config ID: Must have a maximum length of 63 characters.
- Must contain only lowercase letters, numbers, or dashes.

