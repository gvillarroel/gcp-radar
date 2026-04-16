---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:41.403Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "App Engine Admin API apps.authorizedDomains.list"
feature_slug: "app-engine-admin-api-apps-authorizeddomains-list"
latest_feature_date: "2017-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedDomains/list"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1beta"
  - "https://googleapis.dev/dotnet/Google.Apis.Appengine.v1/latest/api/Google.Apis.Appengine.v1.html"
keywords:
  - "app"
  - "engine"
  - "admin"
  - "apps"
  - "authorizeddomains"
  - "list"
  - "method"
  - "custom"
---

# App Engine Admin API apps.authorizedDomains.list

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

The Admin API method `apps.authorizedDomains.list` for custom domain mapping became generally available.

## Extended Definition

The Admin API method `apps.authorizedDomains.list` for custom domain mapping became generally available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedDomains/list](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedDomains/list)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1beta](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1beta)
- [https://googleapis.dev/dotnet/Google.Apis.Appengine.v1/latest/api/Google.Apis.Appengine.v1.html](https://googleapis.dev/dotnet/Google.Apis.Appengine.v1/latest/api/Google.Apis.Appengine.v1.html)

## Supporting Pages

### Method: apps.authorizedDomains.list | App Engine Admin API | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedDomains/list](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedDomains/list)
- Source ID: `feature-recovery-http`
- Final score: 251
- Re-rank relevance: N/A

Evidence snippets:
- Method: apps.authorizedDomains.list | App Engine Admin API | Google Cloud Documentation Skip to main content 技術領域 close AI 和機器學習 應用程式開發 應用程式託管 運算 資料分析和管道 資料庫 分散式雲端、混合雲和多雲端 產業解決方案 遷移 網路 觀測能力與監控 安全性 Storage 跨產品工具 close 存取權與資源管理 費用與用量管理 基礎架構即程式碼 SDK、語言、框架和工具 / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in App Engine Admin API 免費試用 總覽 參考資料 資源 技術領域 More 總覽 參考資料 資源 跨產品工具 More Console App Engine Admin API 所有 API 與參考資料 使用 API 建立設定檔 部署您的應用程式 查看及轉送稽核記錄 REST API 總覽 第 1 版 REST 資源 應用程式 總覽 建立 獲得 修補 repair apps.authorizedCertificates 總覽 建立 刪除 獲得 清單 修補 apps.authorizedDomains 總覽 清單 apps.domainMappings 總覽 建立 刪除 獲得 清單 修補 apps.firewall.ingressRules 總覽 batchUpdate 建立 刪除 獲得 清單 修補 apps.locations 總覽 獲得 清單 apps.operations 總覽 獲得 清單 apps.services 總覽 刪除 獲得 清單 修補 apps.services.versions 總覽 建立 刪除 獲得 清單 修補 apps.services.versions.instances 總覽 debug 刪除 獲得 清單 類型 AuthorizedCertificateView VersionView v1beta REST 資源 應用程式 總覽 建立 獲得 修補 repair apps.authorizedCertificates 總覽 建立 刪除 獲得 清單 修補 apps.authorizedDomains 總覽 清單 apps.domainMappings 總覽 建立 刪除 獲得 清單 修補 apps.firewall.ingressRules 總覽 batchUpdate 建立 刪除 獲得 清單 修補 apps.locations 總覽 獲得 清單 apps.operations 總覽 獲得 清單 apps.services 總覽 刪除 獲得 清單 修補 apps.services.versions 總覽 建立 刪除 獲得 清單 修補 apps.services.versions.instances 總覽 debug 刪除 獲得 清單 類型 AuthorizedCertificateView VersionView 稽核記錄 類型 GetLocationRequest GetOperationRequest ListLocationsRequest ListLocationsResponse ListOperationsRequest ListOperationsResponse 遠端程序呼叫 (RPC) 參考資料 總覽 google.appengine.v1 google.appengine.v1beta google.cloud.location google.longrunning google.rpc OAuth 2.0 Playground 與 APIs Explorer 用戶端程式庫 AI 和機器學習 應用程式開發 應用程式託管 運算 資料分析和管道 資料庫 分散式雲端、混合雲和多雲端 產業解決方案 遷移 網路 觀測能力與監控 安全性 Storage 存取權與資源管理 費用與用量管理 基礎架構即程式碼 SDK、語言、框架和工具 Home 技術領域 App Engine Admin API 參考資料 Send feedback Method: apps.authorizedDomains.list Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://appengine.googleapis.com/v1/{parent=apps/*}/authorizedDomains The URL uses gRPC Transcoding syntax.
- Authorization Scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/appengine.admin https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/cloud-platform.read-only For more information, see the Authentication Overview .
- Response body If successful, the response body contains data with the following structure: Response message for AuthorizedDomains.ListAuthorizedDomains .

### Package google.appengine.v1beta | App Engine Admin API | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1beta](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1beta)
- Source ID: `feature-recovery-http`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- Package google.appengine.v1beta | App Engine Admin API | Google Cloud Documentation Skip to main content テクノロジー分野 close AI と ML アプリケーション開発 アプリケーションのホスティング コンピューティング データ分析とパイプライン データベース 分散型クラウド、ハイブリッド クラウド、マルチクラウド 生成 AI 業種別ソリューション ネットワーキング オブザーバビリティとモニタリング セキュリティ Storage プロダクト横断型のツール close アクセスとリソースの管理 費用と使用量の管理 Infrastructure as code 移行 SDK、言語、フレームワーク、ツール / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Sign in App Engine Admin API 無料で利用開始 概要 リファレンス リソース テクノロジー分野 More 概要 リファレンス リソース プロダクト横断型のツール More Console App Engine Admin API すべての API とリファレンス API へのアクセス 構成ファイルを作成する アプリをデプロイする 監査ログの表示と転送 REST API 概要 v1 REST リソース apps 概要 create get patch repair apps.authorizedCertificates 概要 create delete get list patch apps.authorizedDomains 概要 list apps.domainMappings 概要 create delete get list patch apps.firewall.ingressRules 概要 batchUpdate create delete get list patch apps.locations 概要 get list apps.operations 概要 get list apps.services 概要 delete get list patch apps.services.versions 概要 create delete get list patch apps.services.versions.instances 概要 debug delete get list Types AuthorizedCertificateView VersionView v1beta REST リソース apps 概要 create get patch repair apps.authorizedCertificates 概要 create delete get list patch apps.authorizedDomains 概要 list apps.domainMappings 概要 create delete get list patch apps.firewall.ingressRules 概要 batchUpdate create delete get list patch apps.locations 概要 get list apps.operations 概要 get list apps.services 概要 delete get list patch apps.services.versions 概要 create delete get list patch apps.services.versions.instances 概要 debug delete get list Types AuthorizedCertificateView VersionView 監査ログ Types GetLocationRequest GetOperationRequest ListLocationsRequest ListLocationsResponse ListOperationsRequest ListOperationsResponse RPC リファレンス 概要 google.appengine.v1 google.appengine.v1beta google.cloud.location google.longrunning google.rpc OAuth 2.0 Playground と API Explorer クライアント ライブラリ AI と ML アプリケーション開発 アプリケーションのホスティング コンピューティング データ分析とパイプライン データベース 分散型クラウド、ハイブリッド クラウド、マルチクラウド 生成 AI 業種別ソリューション ネットワーキング オブザーバビリティとモニタリング セキュリティ Storage アクセスとリソースの管理 費用と使用量の管理 Infrastructure as code 移行 SDK、言語、フレームワーク、ツール Home テクノロジー分野 App Engine Admin API リファレンス Send feedback Package google.appengine.v1beta Stay organized with collections Save and categorize content based on your preferences.
- Index Applications (interface) AuthorizedCertificates (interface) AuthorizedDomains (interface) DomainMappings (interface) Firewall (interface) Instances (interface) Services (interface) Versions (interface) ApiConfigHandler (message) ApiEndpointHandler (message) Application (message) Application.DatabaseType (enum) Application.FeatureSettings (message) Application.IdentityAwareProxy (message) Application.ServingStatus (enum) AuthFailAction (enum) AuthorizedCertificate (message) AuthorizedCertificateView (enum) AuthorizedDomain (message) AutomaticScaling (message) BasicScaling (message) BatchUpdateIngressRulesRequest (message) BatchUpdateIngressRulesResponse (message) BuildInfo (message) CertificateRawData (message) CloudBuildOptions (message) ContainerInfo (message) CpuUtilization (message) CreateApplicationRequest (message) CreateAuthorizedCertificateRequest (message) CreateDomainMappingRequest (message) CreateIngressRuleRequest (message) CreateVersionMetadataV1Beta (message) CreateVersionRequest (message) CustomMetric (message) DebugInstanceRequest (message) DeleteAuthorizedCertificateRequest (message) DeleteDomainMappingRequest (message) DeleteIngressRuleRequest (message) DeleteInstanceRequest (message) DeleteServiceRequest (message) DeleteVersionRequest (message) Deployment (message) DiskUtilization (message) DomainMapping (message) DomainOverrideStrategy (enum) EndpointsApiService (message) EndpointsApiService.RolloutStrategy (enum) Entrypoint (message) ErrorHandler (message) ErrorHandler.ErrorCode (enum) FileInfo (message) FirewallRule (message) FirewallRule.Action (enum) FlexibleRuntimeSettings (message) GetApplicationRequest (message) GetAuthorizedCertificateRequest (message) GetDomainMappingRequest (message) GetIngressRuleRequest (message) GetInstanceRequest (message) GetServiceRequest (message) GetVersionRequest (message) HealthCheck (message) InboundServiceType (enum) Instance (message) Instance.Availability (enum) Instance.Liveness (message) Instance.Liveness.LivenessState (enum) Library (message) ListAuthorizedCertificatesRequest (message) ListAuthorizedCertificatesResponse (message) ListAuthorizedDomainsRequest (message) ListAuthorizedDomainsResponse (message) ListDomainMappingsRequest (message) ListDomainMappingsResponse (message) ListIngressRulesRequest (message) ListIngressRulesResponse (message) ListInstancesRequest (message) ListInstancesResponse (message) ListServicesRequest (message) ListServicesResponse (message) ListVersionsRequest (message) ListVersionsResponse (message) LivenessCheck (message) LocationMetadata (message) LoginRequirement (enum) ManagedCertificate (message) ManagementStatus (enum) ManualScaling (message) Network (message) Network.InstanceIpMode (enum) NetworkSettings (message) NetworkSettings.IngressTrafficAllowed (enum) NetworkUtilization (message) OperationMetadataV1Beta (message) ReadinessCheck (message) RepairApplicationRequest (message) RequestUtilization (message) ResourceRecord (message) ResourceRecord.RecordType (enum) Resources (message) ScriptHandler (message) SecurityLevel (enum) Service (message) ServingStatus (enum) SslSettings (message) SslSettings.SslManagementType (enum) StandardSchedulerSettings (message) StaticFilesHandler (message) TrafficSplit (message) TrafficSplit.ShardBy (enum) UpdateApplicationRequest (message) UpdateAuthorizedCertificateRequest (message) UpdateDomainMappingRequest (message) UpdateIngressRuleRequest (message) UpdateServiceRequest (message) UpdateVersionRequest (message) UrlDispatchRule (message) UrlMap (message) UrlMap.RedirectHttpResponseCode (enum) Version (message) VersionView (enum) Volume (message) VpcAccessConnector (message) VpcAccessConnector.EgressSetting (enum) ZipInfo (message) Applications Manages App Engine applications.
- Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag. handlers[] UrlMap An ordered list of URL-matching patterns that should be applied to incoming requests.
- ListAuthorizedDomains rpc ListAuthorizedDomains( ListAuthorizedDomainsRequest ) returns ( ListAuthorizedDomainsResponse ) Lists all domains the user is authorized to administer.

### Namespace Google.Apis.Appengine.v1 | Google.Apis.Appengine.v1

- URL: [https://googleapis.dev/dotnet/Google.Apis.Appengine.v1/latest/api/Google.Apis.Appengine.v1.html](https://googleapis.dev/dotnet/Google.Apis.Appengine.v1/latest/api/Google.Apis.Appengine.v1.html)
- Source ID: `feature-recovery-http`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class ( https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.instance_class )automatic scaling in the standard environment: automatic_scaling.min_idle_instances ( https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling ) automatic_scaling.max_idle_instances ( https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling ) automaticScaling.standard_scheduler_settings.max_instances ( https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings ) automaticScaling.standard_scheduler_settings.min_instances ( https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings ) automaticScaling.standard_scheduler_settings.target_cpu_utilization ( https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings ) automaticScaling.standard_scheduler_settings.target_throughput_utilization ( https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings )basic scaling or manual scaling in the standard environment: serving_status ( https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status ) manual_scaling.instances ( https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#manualscaling )Flexible environment serving_status ( https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status )automatic scaling in the flexible environment: automatic_scaling.min_total_instances ( https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling ) automatic_scaling.max_total_instances ( https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling ) automatic_scaling.cool_down_period_sec ( https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling ) automatic_scaling.cpu_utilization.target_utilization ( https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling )manual scaling in the flexible environment: manual_scaling.instances ( https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#manualscaling ) ProjectsResource The "projects" collection of methods.
- For more information, see "How Instances are Managed" (standard environment ( https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed ) | flexible environment ( https://cloud.google.com/appengine/docs/flexible/python/how-instances-are-managed )).To ensure that instances are not re-created and avoid getting billed, you can stop all instances within the target version by changing the serving status of the version to STOPPED with the apps.services.versions.patch ( https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions/patch ) method.
- For more information, see "How Instances are Managed" (standard environment ( https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed ) | flexible environment ( https://cloud.google.com/appengine/docs/flexible/python/how-instances-are-managed )).To ensure that instances are not re-created and avoid getting billed, you can stop all instances within the target version by changing the serving status of the version to STOPPED with the apps.services.versions.patch ( https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions/patch ) method.
- AppsResource.AuthorizedDomainsResource.ListRequest Lists all domains the user is authorized to administer.

