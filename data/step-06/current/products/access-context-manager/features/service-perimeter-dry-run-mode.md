---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:43:03.652Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Service perimeter dry run mode"
feature_slug: "service-perimeter-dry-run-mode"
latest_feature_date: "2020-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage"
  - "https://docs.cloud.google.com/access-context-manager/docs/reference/rest"
  - "https://docs.cloud.google.com/access-context-manager/docs/overview"
keywords:
  - "allowing"
  - "changes"
  - "mode"
  - "perimeters"
  - "perimeter"
---

# Service perimeter dry run mode

Product: Access Context Manager
Coverage: MEDIUM

## Step 02 Summary

Service perimeters now support dry run mode, allowing perimeter changes to be tested before enforcement.

## Extended Definition

Service perimeters now support dry run mode, allowing perimeter changes to be tested before enforcement.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage)
- [https://docs.cloud.google.com/access-context-manager/docs/reference/rest](https://docs.cloud.google.com/access-context-manager/docs/reference/rest)
- [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview)

## Supporting Pages

### Access Context Manager Overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can configure and enforce Access Context Manager policies across the following Chrome Enterprise Premium solution components: VPC Service Controls Identity-Aware Proxy Context-Aware Access for Google Workspace Identity and Access Management (IAM) conditions Benefits Many companies rely on a perimeter security model such as a firewall to secure internal resources.
- Examples include the following: Device type and operating system IP address User identity Service perimeters define sandboxes of resources, which can freely exchange data within the perimeter but are not allowed to export data outside of the perimeter.
- Access policies An access policy is a container for all of your Access Context Manager resources, such as access levels and service perimeters .
- As an administrator, you first define an access policy , which is an organization-wide container for access levels and service perimeters.

### LaunchStage | Access Context Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage)
- Source ID: `feature-recovery-direct-http`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- LaunchStage | Access Context Manager | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Sign in Access Context Manager Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Access Context Manager All APIs & references Context-Aware Access audit logging gcloud reference REST reference Overview v1 Overview REST Resources accessPolicies Overview create delete get getIamPolicy list patch setIamPolicy testIamPermissions accessPolicies.accessLevels Overview create delete get list patch replaceAll testIamPermissions accessPolicies.authorizedOrgsDescs Overview create delete get list patch accessPolicies.servicePerimeters Overview commit create delete get list patch replaceAll testIamPermissions operations Overview cancel delete get list organizations.gcpUserAccessBindings Overview create delete get list patch services Overview get list Types LevelFormat MethodSelector v1alpha Overview REST Resources accessPolicies Overview create delete get getIamPolicy list patch setIamPolicy testIamPermissions accessPolicies.accessLevels Overview create delete get list patch replaceAll testIamPermissions accessPolicies.authorizedOrgsDescs Overview create delete get list patch accessPolicies.servicePerimeters Overview commit create delete get list patch replaceAll testIamPermissions operations Overview get organizations.gcpUserAccessBindings Overview create delete get list patch services Overview get list Types LevelFormat MethodSelector Shared types Overview Types AuditConfig Binding DeviceEncryptionStatus DeviceManagementLevel GetIamPolicyRequest GetOperationRequest LaunchStage LogType Operation OsType Policy SetIamPolicyRequest TestIamPermissionsRequest TestIamPermissionsResponse RPC reference Overview google.api google.iam.v1 google.identity.accesscontextmanager.type google.identity.accesscontextmanager.v1 google.identity.accesscontextmanager.v1alpha google.longrunning google.rpc google.type Access level attributes Example access level YAML Custom access level specification AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Security Access Context Manager Reference Send feedback LaunchStage Stay organized with collections Save and categorize content based on your preferences.

### Access Context Manager API | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest](https://docs.cloud.google.com/access-context-manager/docs/reference/rest)
- Source ID: `feature-recovery-direct-http`
- Final score: 70
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Access Context Manager API | Google Cloud Documentation Skip to main content Áreas de tecnologia close IA e ML Desenvolvimento de aplicativos Hospedagem de aplicativos Computação Pipelines e análises de dados Bancos de dados Distribuído, híbrido e multicloud Soluções por setor Migração Rede Observabilidade e monitoramento Segurança Storage Ferramentas de vários produtos close Gerenciamento de recursos e acesso Gerenciamento de custos e uso Infraestrutura como código SDK, linguagens, frameworks e ferramentas / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Sign in Access Context Manager Comece sem custos financeiros Visão geral Guias Referência Recursos Áreas de tecnologia More Visão geral Guias Referência Recursos Ferramentas de vários produtos More Console Access Context Manager Todas as APIs e referências Geração de registros de auditoria do Acesso baseado no contexto Referência da gcloud Referência da REST Overview v1 Overview REST Resources accessPolicies Overview create delete get getIamPolicy list patch setIamPolicy testIamPermissions accessPolicies.accessLevels Overview create delete get list patch replaceAll testIamPermissions accessPolicies.authorizedOrgsDescs Overview create delete get list patch accessPolicies.servicePerimeters Overview commit create delete get list patch replaceAll testIamPermissions operations Overview cancel delete get list organizations.gcpUserAccessBindings Overview create delete get list patch services Overview get list Types LevelFormat MethodSelector v1alpha Overview REST Resources accessPolicies Overview create delete get getIamPolicy list patch setIamPolicy testIamPermissions accessPolicies.accessLevels Overview create delete get list patch replaceAll testIamPermissions accessPolicies.authorizedOrgsDescs Overview create delete get list patch accessPolicies.servicePerimeters Overview commit create delete get list patch replaceAll testIamPermissions operations Overview get organizations.gcpUserAccessBindings Overview create delete get list patch services Overview get list Types LevelFormat MethodSelector Shared types Overview Types AuditConfig Binding DeviceEncryptionStatus DeviceManagementLevel GetIamPolicyRequest GetOperationRequest LaunchStage LogType Operation OsType Policy SetIamPolicyRequest TestIamPermissionsRequest TestIamPermissionsResponse RPC reference Overview google.api google.iam.v1 google.identity.accesscontextmanager.type google.identity.accesscontextmanager.v1 google.identity.accesscontextmanager.v1alpha google.longrunning google.rpc google.type Atributos do nível de acesso Exemplo de nível de acesso YAML Especificação do nível de acesso personalizado IA e ML Desenvolvimento de aplicativos Hospedagem de aplicativos Computação Pipelines e análises de dados Bancos de dados Distribuído, híbrido e multicloud Soluções por setor Migração Rede Observabilidade e monitoramento Segurança Storage Gerenciamento de recursos e acesso Gerenciamento de custos e uso Infraestrutura como código SDK, linguagens, frameworks e ferramentas Home Documentation Security Access Context Manager Referência Send feedback Access Context Manager API Stay organized with collections Save and categorize content based on your preferences.
- REST Resource: v1alpha.accessPolicies.servicePerimeters Methods commit POST /v1alpha/{parent=accessPolicies/*}/servicePerimeters:commit Commits the dry-run specification for all the service perimeters in an access policy . create POST /v1alpha/{parent=accessPolicies/*}/servicePerimeters Creates a service perimeter . delete DELETE /v1alpha/{name=accessPolicies/*/servicePerimeters/*} Deletes a service perimeter based on the resource name. get GET /v1alpha/{name=accessPolicies/*/servicePerimeters/*} Gets a service perimeter based on the resource name. list GET /v1alpha/{parent=accessPolicies/*}/servicePerimeters Lists all service perimeters for an access policy. patch PATCH /v1alpha/{servicePerimeter.name=accessPolicies/*/servicePerimeters/*} Updates a service perimeter . replaceAll POST /v1alpha/{parent=accessPolicies/*}/servicePerimeters:replaceAll Replace all existing service perimeters in an access policy with the service perimeters provided. testIamPermissions POST /v1alpha/{resource=accessPolicies/*/servicePerimeters/*}:testIamPermissions Returns the IAM permissions that the caller has on the specified Access Context Manager resource.
- REST Resource: v1.accessPolicies.servicePerimeters Methods commit POST /v1/{parent=accessPolicies/*}/servicePerimeters:commit Commits the dry-run specification for all the service perimeters in an access policy . create POST /v1/{parent=accessPolicies/*}/servicePerimeters Creates a service perimeter . delete DELETE /v1/{name=accessPolicies/*/servicePerimeters/*} Deletes a service perimeter based on the resource name. get GET /v1/{name=accessPolicies/*/servicePerimeters/*} Gets a service perimeter based on the resource name. list GET /v1/{parent=accessPolicies/*}/servicePerimeters Lists all service perimeters for an access policy. patch PATCH /v1/{servicePerimeter.name=accessPolicies/*/servicePerimeters/*} Updates a service perimeter . replaceAll POST /v1/{parent=accessPolicies/*}/servicePerimeters:replaceAll Replace all existing service perimeters in an access policy with the service perimeters provided. testIamPermissions POST /v1/{resource=accessPolicies/*/servicePerimeters/*}:testIamPermissions Returns the IAM permissions that the caller has on the specified Access Context Manager resource.
- REST Resource: v1alpha.accessPolicies REST Resource: v1alpha.accessPolicies.accessLevels REST Resource: v1alpha.accessPolicies.authorizedOrgsDescs REST Resource: v1alpha.accessPolicies.servicePerimeters REST Resource: v1alpha.operations REST Resource: v1alpha.organizations.gcpUserAccessBindings REST Resource: v1alpha.services REST Resource: v1.accessPolicies REST Resource: v1.accessPolicies.accessLevels REST Resource: v1.accessPolicies.authorizedOrgsDescs REST Resource: v1.accessPolicies.servicePerimeters REST Resource: v1.operations REST Resource: v1.organizations.gcpUserAccessBindings REST Resource: v1.services Service: accesscontextmanager.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .

