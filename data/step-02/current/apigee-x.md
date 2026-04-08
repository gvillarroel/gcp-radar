# Apigee X

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 124
Unique features: 136

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-31 | MCP in Apigee OpenAPI server URL path handling |  | OpenAPI server.url base paths are now combined with operation paths in Apigee MCP, following OAS semantics and automatically producing correct URLs. |
| 2026-03-31 | Model Context Protocol (MCP) in Apigee |  | Model Context Protocol (MCP) in Apigee is generally available for exposing Apigee APIs as remotely accessible MCP tools over HTTPS without local or additional MCP server infrastructure. |
| 2025-12-29 | Apigee Extension Processor provisioning API |  | The Apigee Extension Processor provisioning API is now available for creating traffic extensions. |
| 2025-12-23 | LLMTokenQuota policy |  | LLMTokenQuota policy enforces limits on LLM response token usage and returns HTTP 429 when quota thresholds are exceeded. |
| 2025-12-23 | PromptTokenLimit policy |  | PromptTokenLimit policy applies token-based rate limiting to prompt input using o200k_base encoding and blocks requests with HTTP 429 when exceeded. |
| 2025-12-04 | KVM masking |  | Key value map (KVM) masking is available to mask KVM values with asterisks. |
| 2025-11-17 | WS-Security with X.509 for SOAP documents |  | Apigee now supports securing and validating SOAP documents using WS-Security with X.509 certificates via crypto object methods. |
| 2025-10-29 | API product-scoped quotas |  | API-product scoped quotas allow request limits to be configured at the API product level across all API proxies in that product. |
| 2025-10-29 | Enhanced API product validation |  | API product creation and updates now validate referenced proxy and environment resources against the organization and fail when references are invalid. |
| 2025-10-27 | target.evaluated.url flow variable |  | The new target.evaluated.url flow variable should be used when a target URL is dynamically constructed from user input. |
| 2025-10-14 | Gemini Code Assist @Apigee tool | 2025-10-14 | The Gemini Code Assist @Apigee tool was shut down and is no longer available; The Gemini Code Assist @Apigee tool was deprecated and announced for shutdown; deprecated on 2025-10-14. |
| 2025-09-04 | SanitizeModelResponse policy |  | SanitizeModelResponse policy is generally available and sanitizes LLM outputs to protect against unsafe or sensitive response content. |
| 2025-09-04 | SanitizeUserPrompt policy |  | SanitizeUserPrompt policy is generally available and sanitizes user prompts to mitigate LLM prompt-injection and jailbreak risks. |
| 2025-09-04 | SemanticCacheLookup policy |  | SemanticCacheLookup policy is generally available and enables semantic-caching lookups in Apigee API proxies. |
| 2025-09-04 | SemanticCachePopulate policy |  | SemanticCachePopulate policy is generally available and enables storing and reusing LLM responses using semantic similarity. |
| 2025-09-03 | Apigee EventFlows with Extension Processor |  | Apigee EventFlows can be used together with the Apigee Extension Processor. |
| 2025-09-03 | Apigee Server-Sent Events (SSE) |  | Apigee supports Server-Sent Events to stream responses continuously from SSE endpoints to clients in real time; Server-sent events are generally available in Apigee, enabling real-time streaming for SSE endpoints and LLM response streaming, including Apigee hybrid v1.15.0+. |
| 2025-06-03 | Apigee API hub provisioning for new organizations |  | New Apigee organizations in supported regions now have Apigee API hub enabled during provisioning. |
| 2025-06-02 | VerifyAPIKey policy new flow variables |  | The VerifyAPIKey policy now exposes the flow variables app_group_app and app_group_name. |
| 2025-05-30 | Gemini Code Assist for Apigee API development |  | Apigee now integrates Gemini Code Assist in VS Code for AI-assisted OpenAPI design, iteration, testing, and publishing to API hub and proxy generation. |
| 2025-05-29 | Apigee Classic UI | 2025-08-29 | The legacy Apigee Classic UI is being shut down, with management moving to the Google Cloud console; deprecated on 2025-08-29. |
| 2025-05-29 | Apigee Extension Processor request/response body processing |  | Load balancer service extensions can configure the Apigee Extension Processor proxy to process request bodies, response bodies, or both. |
| 2025-05-22 | Apigee SanitizeModelResponse policy |  | The SanitizeModelResponse policy is available in public preview to sanitize responses returned from large language models. |
| 2025-05-22 | Apigee SanitizeUserPrompt policy |  | The SanitizeUserPrompt policy is available in public preview to sanitize prompts before sending them to large language models. |
| 2025-05-22 | Apigee SemanticCacheLookup policy |  | The SemanticCacheLookup policy is available in public preview for semantic lookup-based response reuse in Apigee proxies. |
| 2025-05-22 | Apigee SemanticCachePopulate policy |  | The SemanticCachePopulate policy is available in public preview for storing and reusing LLM responses based on semantic similarity. |
| 2025-05-14 | Apigee large message payload support |  | Apigee now supports message payloads up to 30 MB. |
| 2025-05-14 | Apigee PublishMessage policy message attributes |  | The PublishMessage policy now supports adding string key/value attributes to messages sent to Pub/Sub. |
| 2025-05-14 | Apigee PublishMessage policy request/response content source |  | The PublishMessage policy now supports using request or response message content as the source for data written to Pub/Sub. |
| 2025-05-14 | AppGroup App Key scope and attribute updates |  | Scopes and attributes can now be added to an AppGroup App Key through a POST operation using the appGroupAppKey API. |
| 2025-05-06 | Debug sessions list Management API |  | A new Management API now lists all recent debug sessions for a proxy across revisions and environments, and powers recent-debug-session retrieval in the Apigee Debug UI. |
| 2025-05-02 | 30 MB message payload support |  | Apigee now supports message payloads up to 30 MB for proxy processing. |
| 2025-05-02 | PublishMessage policy Pub/Sub data enhancements |  | The PublishMessage policy now supports using request or response message content as the Pub/Sub data source and supports string attributes for messages. |
| 2025-04-29 | Apigee API hub enablement for existing organizations |  | Existing Apigee organizations in supported regions can be enabled for Apigee API hub, including hybrid organizations in API hub-supported regions. |
| 2025-04-14 | Data collectors data residency support |  | Apigee and Apigee hybrid now support data collectors with data residency compliance for eligible organization types and versions. |
| 2025-04-10 | Apigee Extension Processor |  | The Apigee Extension Processor is generally available, enabling API management capabilities for Google Cloud and third-party services exposed through Cloud Load Balancing. |
| 2025-03-31 | Base64 flow variable suffixes |  | New read-only flow variable suffixes content.as.base64 and content.as.url.safe.base64 provide base64-encoded access to message content. |
| 2025-03-27 | Client IP resolution for Apigee hybrid |  | Client IP resolution is now available for Apigee hybrid environments in version 1.14.0 and later. |
| 2025-03-24 | Apigee Spaces |  | Apigee Spaces is generally available, adding identity-based grouping of API resources and resource-level IAM permissions within an organization. |
| 2025-03-17 | Private DNS peering for non-VPC-peered Apigee organizations |  | Organizations without VPC peering can now configure private domain resolution by peering DNS zones with Apigee. |
| 2025-02-03 | Apigee APIM Operator for Kubernetes |  | The Apigee APIM Operator for Kubernetes is now in public preview, enabling API management operations through Kubernetes tooling with GKE synchronization. |
| 2024-12-20 | Apigee environment-level client IP resolution |  | Added support for configuring client IP capture per environment from the X-Forwarded-For header for security actions, analytics, and flow variables. |
| 2024-10-10 | Apigee instance project and PSC NEG connectivity limits |  | Increased Apigee instance limits by removing the 50-project cap and raising per-project Private Service Connect Network Endpoint Group quota to 100. |
| 2024-10-02 | Standard and extensible API proxy types |  | Upgraded remaining Subscription 2021 organizations so they support standard and extensible API proxy types; A preview release introduces standard and extensible API proxy types for use in Pay-as-you-go preview organizations. |
| 2024-09-26 | CMEK compliance enforcement in Apigee |  | Enabled Apigee to enforce organization policy constraints and block non-compliant configurations when using CMEK. |
| 2024-09-18 | Cloud IAM-based API access control (VerifyIAM) |  | Introduced Cloud IAM-based authorization and authentication for Apigee API invocations using VerifyIAM policy requirements. |
| 2024-09-12 | Workforce Identity Federation support for Apigee |  | Added Workforce Identity Federation support so workforce identities from external IdPs can access Apigee via IAM-based authentication and authorization. |
| 2024-08-26 | Non-VPC peering provisioning with Private Service Connect |  | Added a non-VPC peering provisioning option using Private Service Connect without requiring networks or IP ranges during provisioning. |
| 2024-08-15 | Google Cloud console provisioning for Subscription organizations |  | Enabled provisioning of Apigee Subscription organizations directly from the Google Cloud Console. |
| 2024-08-12 | Apigee data residency expansion to Japan regions |  | Expanded data residency support to additional Japan regions, including Asia Northeast 1 (Tokyo) and Asia Northeast 2 (Osaka). |
| 2024-08-12 | Increased Apps-per-developer quota |  | Raised the maximum number of Apps allowed per developer from 10 to 100. |
| 2024-08-01 | Flow variables for request/response names in string list format |  | Added new flow variables that expose request, message, and response header/query/form parameter names as comma-separated strings. |
| 2024-07-30 | Apigee data residency expansion to Zurich |  | Expanded data residency support to the Europe West 6 (Zurich) region for specifying where Apigee data is stored. |
| 2024-07-25 | Operations Anomalies data residency |  | Operations Anomalies now supports data residency so teams can specify the regions where Operations Anomalies data is stored. |
| 2024-07-25 | Operations Anomalies in Apigee UI |  | The Advanced API Operations Anomaly Detection capability is now available in the Apigee Cloud Console and is renamed to Operations Anomalies. |
| 2024-06-27 | Apigee regional availability expansion |  | Apigee has expanded service availability to the Europe-Berlin (europe-west10) and Africa-Johannesburg (africa-south1) regions. |
| 2024-06-17 | Pay-as-you-go environment type updates in Cloud Console |  | Apigee Pay-as-you-go customers can now modify an existing environment type from the Google Cloud console to add or remove environment capabilities. |
| 2024-06-12 | Gemini Code Assist API management mock servers |  | Preview release adds Google Cloud-based remote mock servers for API management in Gemini Code Assist for easier API testing and validation. |
| 2024-05-29 | Cloud Code enhanced API hub interaction |  | Cloud Code preview adds enhanced API Hub interaction, allowing users to work with APIs via mock servers, edit API definitions, and publish updates back to the hub. |
| 2024-05-29 | Gemini Code Assist API spec generation with enterprise context |  | Preview now supports generative AI creation of API specifications from natural-language prompts with enterprise context for API design. |
| 2024-05-29 | Gemini Code Assist Apigee policy code explanation |  | Apigee users can get AI-generated guidance while editing proxy policy XML by selecting policy code in Gemini Code Assist. |
| 2024-05-08 | AppGroups for Apigee |  | AppGroups reached general availability for Apigee and Apigee hybrid, enabling grouping of apps managed by the same people. |
| 2024-05-07 | Environment-level SSL enforcement in Apigee |  | Apigee environments can now enforce strict southbound SSL via the SSLInfo.Enforce flag, which overrides block-level SSL settings. |
| 2024-05-07 | TargetServer strict SSL enforcement |  | Apigee TargetServer configurations now support strict southbound SSL enforcement using the enforce setting, including service callouts. |
| 2024-05-07 | Two-way HTTPS health monitor support |  | Apigee health monitors now support two-way HTTPS checks by using TargetServer SSL parameters in HTTPMonitor configuration. |
| 2024-04-26 | Apigee ingress access logs in Cloud Logging |  | Apigee Subscription and Pay-as-you-go customers can enable Cloud Logging ingress access logs for each Apigee instance to troubleshoot API traffic. |
| 2024-04-19 | Expanded API proxy and shared-flow deployment limits for Subscription 2021 |  | The Subscription 2021 upgrade expanded deployment quotas, including 75 shared-flow deployments per environment and 4,250 total deployment units per organization. |
| 2024-04-19 | Subscription 2021 standard and extensible API proxy types |  | Subscription 2021 organizations were upgraded to support both standard and extensible API proxy types. |
| 2024-04-03 | Apigee data residency |  | Apigee expanded data residency support to additional Asia-Pacific and Middle East regions for configuring where platform data is stored; Apigee expanded data residency support to additional Canada regions for selecting where Apigee data is stored. |
| 2024-03-29 | Apigee API Monitoring metrics |  | Apigee added a new suite of API Monitoring metrics for proxy and target request/response counts and latencies to improve scalability and observability; Apigee added a new suite of API Monitoring metrics for proxy and target request/response counts and latencies to improve scalability and observability. |
| 2024-02-08 | Apigee KeyValueMap entry update API |  | Apigee API support was added for update operations on KeyValueMap entries. |
| 2024-02-02 | Apigee API proxy and organization limits |  | Apigee updated service limits by increasing maximum API proxy endpoints per proxy and defining API base path limits per organization. |
| 2023-12-15 | Apigee Advanced API Security add-on |  | The Apigee Advanced API Security add-on became generally available for Pay-as-you-go organizations and can be enabled in Intermediate or Comprehensive environments. |
| 2023-12-15 | Pay-as-you-go environment type management APIs |  | Apigee added API operations to upgrade or downgrade existing Pay-as-you-go environments to add or remove feature capabilities and manage billing/resource usage. |
| 2023-12-13 | Apigee control plane CMEK support |  | Apigee added customer-managed encryption key (CMEK) support for the control plane. |
| 2023-12-13 | Apigee Forward Proxying |  | Apigee added Forward Proxying, enabling traffic received in an environment to be forwarded to a specified URI. |
| 2023-12-13 | Apigee location-based resource restrictions |  | Adds Organization Policy Service constraints to restrict where Apigee Organizations, Instances, and EndpointAttachments can be created. |
| 2023-12-07 | Apigee gRPC proxy passthrough |  | Provides GA support for creating API proxies that pass gRPC client requests through to a gRPC target server; A public-preview gRPC proxy passthrough capability allows proxies to accept gRPC client requests and forward them to gRPC target servers. |
| 2023-11-10 | Apigee availability in me-central2 |  | Adds support for deploying Apigee in the Middle East (Dammam) region (me-central2). |
| 2023-11-10 | Configurable API Proxies (preview) | 2023-11-10 | The preview version of Configurable API Proxies was discontinued and is no longer available; deprecated on 2023-11-10. |
| 2023-10-24 | Authentication HeaderName element |  | Introduces the HeaderName element under Authentication so ServiceCallout, ExternalCallout, and TargetEndpoint can use a custom header for the injected bearer token. |
| 2023-10-19 | Looker Studio integration for Apigee |  | Introduces the public preview integration that connects Apigee data to Google Looker Studio for dashboard and reporting. |
| 2023-09-29 | Apigee API Analytics add-on for Pay-as-you-go |  | Makes the Apigee API Analytics add-on available as a paid capability for Pay-as-you-go organizations and deployable in Intermediate or Comprehensive environments. |
| 2023-09-29 | Apigee Pay-as-you-go environment types |  | Introduces the Base, Intermediate, and Comprehensive Pay-as-you-go environment types with different capability and cost profiles. |
| 2023-09-29 | HTTPModifier policy |  | Makes the HTTPModifier policy generally available as a standard policy for modifying existing request and response messages. |
| 2023-09-29 | Message element templating support |  | Adds general availability of templating for message elements (URL templating) in Apigee message processing. |
| 2023-09-29 | One-click provisioning for Pay-as-you-go |  | Introduces GA one-click provisioning with smart defaults to simplify onboarding for new Pay-as-you-go Apigee organizations. |
| 2023-09-29 | Pay-as-you-go pricing attribute updates |  | Updates Pay-as-you-go pricing attributes to lower initial onboarding cost and better align ongoing charges to usage. |
| 2023-09-29 | ReadPropertySet policy |  | Makes the ReadPropertySet policy generally available for reading property sets and populating flow variables. |
| 2023-09-29 | Standard and extensible API proxies |  | Makes both standard and extensible API proxy types generally available for Apigee organizations. |
| 2023-09-29 | Updated pricing attributes for Apigee subscription plans |  | Apigee subscription plans now support updated pricing attributes for use with the 2024 entitlement model. |
| 2023-08-14 | Advanced API Security scores page redesign |  | The Advanced API Security scores page in Cloud console was redesigned to surface top security recommendations and provide direct links to Proxy Editor and Target Server settings. |
| 2023-07-12 | Non-VPC peering provisioning using Private Service Connect |  | Apigee provisioning now supports a non-VPC peering option that uses Private Service Connect for northbound and southbound traffic. |
| 2023-07-06 | Apigee environment type tiers |  | New environment types—Base, Intermediate, and Comprehensive—were introduced with differing capabilities and pricing profiles. |
| 2023-07-06 | Apigee HTTPModifier policy |  | The HTTPModifier standard policy was introduced to modify request and response messages with partial functionality similar to AssignMessage. |
| 2023-07-06 | Apigee ReadPropertySet policy |  | The ReadPropertySet standard policy was introduced to read property sets and populate flow variables with the results. |
| 2023-07-06 | Pay-as-you-go pricing with updated attributes |  | Apigee introduced a preview of the updated Pay-as-you-go pricing model with lower initial cost and usage-aligned expense control. |
| 2023-07-06 | Template support for message elements |  | Template support for message elements was added to support URL and message element templating in API flows. |
| 2023-06-27 | Apigee AppGroups |  | AppGroups were introduced to represent and organize multiple apps managed by the same group of people. |
| 2023-06-27 | organizations.apps API filtering options |  | The organizations.apps API gained a filter option for app queries, including filters such as developer, AppGroup, apiProduct, consumerKey, status, appId, and appName. |
| 2023-04-20 | Advanced API Security Detected Traffic view |  | A Detected Traffic view was added to Advanced API Security to surface API traffic that appears to originate from detected bots. |
| 2023-04-13 | Keystore support in Apigee Emulator |  | Apigee Emulator gained support for environment-level keystore configuration using locally available keys. |
| 2023-04-13 | Multi-repository workspaces in Apigee VS Code |  | Apigee VS Code local development now supports multi-repository workspaces to edit proxies from separate repositories in one workspace. |
| 2023-04-13 | Service account support for Apigee Emulator testing |  | Apigee local emulator now supports service-account-based authentication for testing API proxies that depend on service accounts. |
| 2023-03-23 | Advanced Anomaly Detection rule for abuse detection |  | A new machine-learning-based Advanced Anomaly Detection rule type was introduced to identify unusual API traffic behavior. |
| 2023-03-23 | Advanced API scraper detection rule |  | A machine-learning-based Advanced API scraper detection rule was added to detect attempts to extract information from APIs. |
| 2023-03-23 | Advanced API Security abuse detection |  | Apigee added public-preview abuse detection to Advanced API Security for identifying malicious API traffic patterns. |
| 2023-03-22 | Apigee Pay-as-you-go provisioning completion notifications |  | Apigee now sends Google Cloud Console notifications when Pay-as-you-go provisioning completes, allowing users to monitor progress outside the provisioning page. |
| 2023-03-22 | Custom SSL certificates for Apigee Pay-as-you-go access routing |  | Apigee Pay-as-you-go provisioning now supports using existing self-managed SSL certificates when configuring access routing. |
| 2023-02-08 | OAuth2 VerifyAccessToken CacheExpiryInSeconds support |  | The VerifyAccessToken action of the OAuth2 policy now supports CacheExpiryInSeconds to customize cached token expiration duration. |
| 2023-02-08 | VerifyAPIKey policy CacheExpiryInSeconds support |  | The VerifyAPIKey policy now supports the CacheExpiryInSeconds setting to enforce cache lifetime for verified API keys. |
| 2022-12-08 | Simplified onboarding for Apigee X Pay-as-you-go |  | Google Cloud Console now provides a GA simplified, step-based onboarding flow for provisioning Apigee X with Pay-as-you-go pricing. |
| 2022-11-04 | Apigee northbound Private Service Connect |  | Private Service Connect became available in GA for client-to-Apigee (northbound) traffic. |
| 2022-11-04 | Multi-region northbound Private Service Connect routing |  | Apigee now supports northbound Private Service Connect routing in multi-region configurations. |
| 2022-10-27 | Advanced API Security |  | Advanced API Security is generally available in Apigee, adding bot and malicious request detection plus API security posture recommendations; Advanced API Security is introduced in Public Preview to protect APIs from malicious traffic and provide security reports with recommendations. |
| 2022-10-24 | Runtime error reason-code catalog filtering |  | Runtime error messages now include reason codes, and the runtime error catalog can be filtered to show only entries with reason codes. |
| 2022-09-14 | Apigee Emulator version selection in VS Code Insiders |  | The Apigee Insiders build for VS Code now supports using a different version of the Apigee Emulator for local development. |
| 2022-09-14 | Customizable Apigee runtime Docker container in VS Code Insiders |  | The Apigee Insiders build for VS Code now includes pre-release support for customizing the Apigee runtime Docker container. |
| 2022-09-09 | Apigee southbound Private Service Connect |  | Apigee now supports Private Service Connect for southbound routing to target services across VPC networks beyond the peered network. |
| 2022-08-30 | Apigee Pay-as-you-go gateway node limit |  | The Pay-as-you-go pricing model now enforces a maximum of 1,000 Apigee gateway nodes per region across all environments. |
| 2022-08-11 | Advanced API Security Abuse page |  | Advanced API Security now includes an Abuse page that displays detected bot traffic details, including IP addresses, locations, and triggering rules. |
| 2022-07-21 | Advanced API Security target assessment |  | Advanced API Security now includes target assessment to evaluate the security of target servers for APIs. |
| 2022-06-02 | Apigee X KVM management APIs |  | Apigee X adds APIs for managing key-value entries in key value maps at organization, environment, and API proxy scopes. |
| 2022-05-09 | GoogleIDToken.Audience useTargetUrl attribute |  | The GoogleIDToken.Audience tag now supports the useTargetUrl attribute to simplify Google ID token audience configuration. |
| 2022-03-31 | Private Service Connect integration for Apigee |  | Apigee can now use Private Service Connect to receive traffic without requiring managed instance groups behind a global load balancer. |
| 2022-03-28 | Private Service Connect integration for non-peered VPC backends |  | Private Service Connect support now allows Apigee to connect to backend target services in VPCs other than the one peered with the Apigee organization. |
| 2022-03-22 | Resource conditions in Apigee IAM policies |  | Apigee IAM policies now support resource conditions to provide granular control over Apigee resources. |
| 2022-03-15 | GraphQL policy JSON payload support |  | The Apigee GraphQL policy now supports JSON-encoded payloads. |
| 2022-03-15 | Key value map API pagination |  | Apigee now supports pagination when accessing key value map entries through the API. |
| 2022-03-03 | Google OAuth target authentication for configurable API proxies |  | Configurable API proxies now support Google authentication for securing backend target services using Google OAuth. |
| 2022-03-03 | HTTP request transforms for configurable API proxies |  | Configurable API proxies now support HTTP request transforms to rewrite paths, headers, and query parameters. |
| 2022-03-03 | Southbound mTLS for configurable API proxies |  | Enables southbound mTLS on configurable API proxies to maintain or increase secure communication between existing proxies and backend services. |
| 2022-03-03 | Template variables for configurable API proxies |  | Configurable API proxies now support template variables for use in proxy configuration YAML via property sets. |
| 2022-02-15 | Backend target routing with Private Service Connect |  | Adds support for using Private Service Connect to route backend targets in VPC networks that are not peered with the Apigee organization. |
| 2022-01-28 | Apigee service networking and instance creation UI updates |  | Updates the service networking and instance creation user interfaces to align with changed network IP CIDR range requirements and simplify provisioning. |
| 2022-01-24 | Reduced VPC peering CIDR range for Apigee |  | Reduces the required VPC peering CIDR range to a non-overlapping /22 when linking an Apigee VPC, simplifying Apigee provisioning. |

Source file slug: `apigee-x.md`

