# Apigee X

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 124
Unique features: 121

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-31 | MCP in Apigee OAS server URL path handling |  | MCP in Apigee now combines the OpenAPI server.url base path with operation paths according to the OAS standard. |
| 2026-03-31 | Model Context Protocol (MCP) in Apigee |  | Model Context Protocol in Apigee lets you expose Apigee APIs as managed MCP tools accessible to remote MCP clients over HTTP/S. |
| 2025-12-29 | Apigee Extension Processor provisioning API |  | The Apigee Extension Processor provisioning API lets customers create traffic extensions programmatically. |
| 2025-12-23 | LLMTokenQuota policy |  | The LLMTokenQuota policy enforces quotas on large language model response token usage to control spend and resource allocation. |
| 2025-12-23 | PromptTokenLimit policy |  | The PromptTokenLimit policy rate-limits requests based on the token count of a user's prompt message. |
| 2025-12-04 | KVM value masking |  | KVM value masking obscures key value map values with asterisks in Apigee. |
| 2025-11-17 | WS-Security with X.509 certificates |  | Apigee crypto object methods now support securing and validating SOAP documents with WS-Security using X.509 certificates. |
| 2025-10-29 | API product enhanced validation |  | Enhanced API product validation verifies referenced proxy and environment resources against the organization during create and update operations. |
| 2025-10-29 | API product-scoped quotas |  | API product-scoped quotas let you enforce request limits across all API proxies within an API product. |
| 2025-10-27 | target.evaluated.url flow variable |  | The target.evaluated.url flow variable provides the evaluated target URL for cases where the URL is dynamically constructed from user input. |
| 2025-10-14 | Gemini Code Assist @Apigee tool | 2025-10-14 | The Gemini Code Assist @Apigee tool provided AI-assisted Apigee development capabilities; The Gemini Code Assist @Apigee tool provided AI-assisted Apigee development capabilities; deprecated on 2025-10-14. |
| 2025-09-04 | SanitizeModelResponse policy |  | The SanitizeModelResponse policy uses Model Armor to sanitize model responses and protect AI applications from unsafe output; The SanitizeModelResponse policy uses Model Armor to sanitize model responses and protect AI applications from unsafe output. |
| 2025-09-04 | SanitizeUserPrompt policy |  | The SanitizeUserPrompt policy uses Model Armor to sanitize user prompts and mitigate prompt injection and other LLM risks; The SanitizeUserPrompt policy uses Model Armor to sanitize user prompts and mitigate prompt injection and other LLM risks. |
| 2025-09-04 | SemanticCacheLookup policy |  | The SemanticCacheLookup policy enables semantic response reuse to reduce redundant backend calls, latency, and cost for LLM workloads; The SemanticCacheLookup policy enables semantic response reuse to reduce redundant backend calls, latency, and cost for LLM workloads. |
| 2025-09-04 | SemanticCachePopulate policy |  | The SemanticCachePopulate policy stores semantically reusable responses to support intelligent caching for LLM workloads; The SemanticCachePopulate policy stores semantically reusable responses to support intelligent caching for LLM workloads. |
| 2025-09-03 | Apigee Extension Processor support for SSE and EventFlows |  | The Apigee Extension Processor now supports use with Server-Sent Events and EventFlows. |
| 2025-08-04 | Server-Sent Events (SSE) and EventFlows |  | Server-Sent Events and EventFlows provide continuous real-time streaming responses from SSE endpoints to clients; Server-Sent Events and EventFlows provide continuous real-time streaming responses from SSE endpoints to clients. |
| 2025-06-03 | Apigee API hub automatic enablement for new organizations |  | Apigee API hub is automatically enabled for new Apigee organizations in supported regions. |
| 2025-06-02 | VerifyAPIKey app group flow variables |  | The VerifyAPIKey policy now exposes app_group_app and app_group_name flow variables. |
| 2025-05-30 | Gemini Code Assist API development features in Apigee |  | Gemini Code Assist in Apigee enables natural-language API design, iteration, testing, publishing, and duplicate endpoint detection within VS Code. |
| 2025-05-29 | Apigee Classic UI | 2025-08-29 | The Apigee Classic UI was the legacy interface for managing Apigee outside the Google Cloud console; deprecated on 2025-08-29. |
| 2025-05-29 | Apigee Extension Processor request and response body processing |  | The Apigee Extension Processor can be configured to process request bodies, response bodies, or both in load balancer service extensions. |
| 2025-05-22 | Server-Sent Events (SSE) |  | Server-Sent Events support continuous real-time streaming responses from SSE endpoints to clients. |
| 2025-05-14 | AppGroup App Key scopes and attributes management |  | AppGroups now support adding scopes and attributes to an AppGroup App Key through a POST operation. |
| 2025-05-14 | Large message payload support |  | Apigee now supports message payloads up to 30 MB; Apigee now supports message payloads up to 30 MB. |
| 2025-05-14 | PublishMessage policy body source and attributes support |  | The PublishMessage policy now supports using request or response message content as Pub/Sub data and adding string attributes to published messages; The PublishMessage policy now supports using request or response message content as Pub/Sub data and adding string attributes to published messages. |
| 2025-05-06 | Debug sessions listing API |  | The new Management API method lists recent debug sessions for a proxy across revisions, environments, and deployment states. |
| 2025-04-29 | Apigee API hub automatic enablement for existing organizations |  | Apigee API hub is being enabled for existing Apigee organizations in supported regions. |
| 2025-04-14 | Data collectors data residency compliance |  | Data collectors can now be used in Apigee and Apigee hybrid organizations that require data residency compliance. |
| 2025-04-10 | Apigee Extension Processor |  | The Apigee Extension Processor adds Apigee API management capabilities to services exposed through Cloud Load Balancing. |
| 2025-03-31 | Base64-encoded message content flow variable suffixes |  | New read-only flow variable suffixes expose request, response, and message content in base64 and URL-safe base64 form. |
| 2025-03-27 | Client IP resolution for Apigee hybrid |  | Client IP resolution is now available in Apigee hybrid starting with version 1.14.0. |
| 2025-03-24 | Apigee Spaces |  | Apigee Spaces provides identity-based isolation, team-level grouping, and granular IAM control for API resources within an Apigee organization. |
| 2025-03-17 | Private DNS peering zones for Apigee |  | Apigee organizations without VPC peering can now resolve private domains by peering DNS zones with Apigee. |
| 2024-12-20 | Environment-level client IP address resolution |  | Environment-level client IP address resolution lets you configure how Apigee derives the client IP from X-Forwarded-For for security, analytics, and flow variables. |
| 2024-10-10 | Apigee connected Cloud project limit increase |  | Apigee no longer limits an instance to 50 connected Cloud projects and now allows up to 100 Private Service Connect network endpoint groups per project. |
| 2024-10-02 | Standard and extensible API proxy types |  | Apigee organizations with Subscription 2021 contracts were upgraded to support standard and extensible API proxy types. |
| 2024-09-26 | CMEK organization policy constraint enforcement |  | Apigee now enforces CMEK organization policy constraints and blocks non-compliant feature configurations. |
| 2024-09-18 | Cloud IAM-based API authorization and authentication |  | Cloud IAM-based API authorization and authentication lets API consumers invoke Apigee APIs using required Google Cloud IAM roles or permissions. |
| 2024-09-18 | VerifyIAM policy |  | The VerifyIAM policy enforces Cloud IAM-based authorization and authentication for access to Apigee APIs. |
| 2024-09-12 | Workforce Identity Federation support |  | Apigee now supports Workforce Identity Federation for authenticating and authorizing workforce users through an external identity provider. |
| 2024-08-26 | Non-VPC peering provisioning |  | Non-VPC peering provisioning lets Apigee organizations be provisioned without supplying networks and IP ranges by using Private Service Connect for traffic routing; Apigee can be provisioned without VPC peering by using Private Service Connect for northbound and southbound routing. |
| 2024-08-15 | Subscription organization provisioning in Google Cloud console |  | Apigee Subscription organizations can now be provisioned through the Google Cloud console. |
| 2024-08-12 | Apps per developer limit increase |  | Apigee increased the maximum number of apps per developer from 10 to 100. |
| 2024-08-12 | Data residency support in Japan regions |  | Apigee data residency support was expanded to the asia-northeast1 and asia-northeast2 regions in Japan. |
| 2024-08-01 | and form parameter names string flow variables |  | New flow variables return header, query parameter, and form parameter names as comma-separated strings for proxy logic. |
| 2024-08-01 | Header |  | New flow variables return header, query parameter, and form parameter names as comma-separated strings for proxy logic. |
| 2024-08-01 | query parameter |  | New flow variables return header, query parameter, and form parameter names as comma-separated strings for proxy logic. |
| 2024-07-30 | Data residency support in Zurich region |  | Apigee data residency support was expanded to the europe-west6 region in Zurich. |
| 2024-07-25 | Operations Anomalies |  | Advanced API Operations Anomaly Detection is now available in the Apigee UI in Cloud Console under the name Operations Anomalies. |
| 2024-07-25 | Operations Anomalies data residency support |  | Operations Anomalies now supports data residency for region-specific storage of anomaly data. |
| 2024-06-27 | Regional availability |  | Apigee X is available for deployment in additional Google Cloud regions; Apigee X is available for deployment in additional Google Cloud regions. |
| 2024-06-17 | Pay-as-you-go environment type updates in console |  | Apigee Pay-as-you-go customers can change an existing environment type from the Apigee UI in the Google Cloud console. |
| 2024-06-12 | Gemini Code Assist remote mock servers |  | Gemini Code Assist API management can deploy Google Cloud-based remote mock servers for testing and validating designed APIs. |
| 2024-05-29 | Cloud Code API hub mock server editing |  | Cloud Code can interact with APIs in API hub through a mock server, update them, and publish changes back to API hub. |
| 2024-05-29 | Gemini Code Assist Apigee policy code explanation |  | Gemini Code Assist can explain selected Apigee policy XML code while editing proxy policies. |
| 2024-05-29 | Gemini Code Assist OpenAPI spec generation |  | Gemini Code Assist API management can generate OpenAPI specifications from natural language prompts using enterprise context and a visual API designer. |
| 2024-05-08 | AppGroups |  | AppGroups let Apigee organize one or more apps under a shared ownership relationship; AppGroups let Apigee organize one or more apps under a shared ownership relationship. |
| 2024-05-07 | Environment-level SSL enforcement |  | Apigee environments can enforce strict southbound SSL behavior with the SSLInfo.Enforce flag. |
| 2024-05-07 | Target server SSL enforcement |  | TargetServer configurations can enforce strict SSL for southbound connections and service callouts. |
| 2024-05-07 | Two-way HTTPS health monitors |  | HTTP health monitors can use TargetServer SSL parameters to perform two-way HTTPS health checks. |
| 2024-04-26 | Ingress access logs in Cloud Logging |  | Apigee instances can send ingress access logs to Cloud Logging for troubleshooting API calls. |
| 2024-04-19 | Expanded deployment limits |  | Apigee increases deployment limits for shared flows, API proxies, and total deployment units in Subscription 2021 organizations. |
| 2024-04-19 | Standard and extensible API proxies |  | Apigee supports standard and extensible API proxy types for Subscription 2021 organizations; Apigee supports standard and extensible API proxy types for organization use. |
| 2024-04-03 | Data residency |  | Apigee data residency lets organizations choose supported geographic regions where Apigee data is stored; Apigee data residency lets organizations choose supported geographic regions where Apigee data is stored. |
| 2024-03-29 | API Monitoring metrics |  | Apigee API Monitoring includes a new suite of proxy and target endpoint metrics with improved scalability and accuracy; Apigee API Monitoring includes a new suite of proxy and target endpoint metrics with improved scalability and accuracy. |
| 2024-02-08 | KeyValueMap entry update API |  | Apigee APIs support update operations for KeyValueMap entries. |
| 2024-02-02 | API base path organization limit |  | Apigee defines a maximum of 21,250 API base paths per organization. |
| 2024-02-02 | API proxy endpoint limit increase |  | Apigee increases the maximum number of endpoints allowed per API proxy from five to ten. |
| 2023-12-15 | Advanced API Security add-on for Pay-as-you-go |  | Advanced API Security is available as a paid add-on for Apigee Pay-as-you-go organizations. |
| 2023-12-15 | Pay-as-you-go environment type updates API |  | Apigee APIs can upgrade or downgrade the type of an existing Pay-as-you-go environment. |
| 2023-12-13 | Control plane CMEK |  | Apigee supports customer-managed encryption keys for protecting control plane data. |
| 2023-12-13 | Forward proxying |  | Apigee can forward traffic received in an environment to a specified URI. |
| 2023-12-13 | Resource location organization policy constraint |  | Apigee can restrict creation of location-based resources to specific regions by using an Organization Policy Service constraint. |
| 2023-12-07 | gRPC passthrough |  | Apigee gRPC passthrough lets proxies receive gRPC requests and forward them to gRPC target servers; Apigee gRPC passthrough lets proxies receive gRPC requests and forward them to gRPC target servers. |
| 2023-11-10 | Configurable API Proxies | 2023-11-10 | Configurable API Proxies provided a preview capability for defining API proxies in Apigee; deprecated on 2023-11-10. |
| 2023-10-24 | Authentication HeaderName element |  | Apigee Authentication configurations can specify a custom header name for injected bearer tokens by using the HeaderName element. |
| 2023-10-19 | Looker Studio integration |  | Apigee can connect its data to Looker Studio for customizable dashboards and reports. |
| 2023-09-29 | API Analytics add-on for Pay-as-you-go |  | Apigee API Analytics is available as a paid add-on for Pay-as-you-go organizations. |
| 2023-09-29 | HTTPModifier policy |  | The HTTPModifier policy can change an existing request or response message with a subset of AssignMessage functionality; The HTTPModifier policy can change an existing request or response message with a subset of AssignMessage functionality. |
| 2023-09-29 | Message element templating |  | Apigee supports templating for message elements in proxy configurations; Apigee supports templating for message elements in proxy configurations. |
| 2023-09-29 | One-click provisioning for Pay-as-you-go organizations |  | Apigee can provision new Pay-as-you-go organizations with a one-click onboarding flow and smart default configurations. |
| 2023-09-29 | Pay-as-you-go environment types |  | Apigee provides Base, Intermediate, and Comprehensive environment types with different capabilities and costs; Apigee provides Base, Intermediate, and Comprehensive environment types with different capabilities and costs. |
| 2023-09-29 | Pay-as-you-go pricing with updated attributes |  | Apigee offers an updated Pay-as-you-go pricing model with new attributes for lower entry cost and usage-based sizing; Apigee offers an updated Pay-as-you-go pricing model with new attributes for lower entry cost and usage-based sizing. |
| 2023-09-29 | ReadPropertySet policy |  | The ReadPropertySet policy reads property sets and populates flow variables with the results; The ReadPropertySet policy reads property sets and populates flow variables with the results. |
| 2023-09-29 | Subscription pricing with updated attributes |  | Apigee subscription plans are available with pricing attributes aligned to the updated Pay-as-you-go pricing model. |
| 2023-08-14 | Advanced API Security scores page redesign |  | The Advanced API Security scores page in the Apigee UI highlights top recommendations and links directly to relevant editing pages. |
| 2023-06-27 | Apps API filtering |  | The organizations.apps API supports filtering apps by developer, AppGroup, and other app attributes, with pagination support. |
| 2023-04-20 | Advanced API Security detected traffic view |  | Advanced API Security includes a Detected Traffic view that shows API traffic originating from detected bots. |
| 2023-04-13 | VS Code emulator keystore configuration |  | Apigee in VS Code supports configuring environment-level keystores in the Apigee Emulator by using locally available keys. |
| 2023-04-13 | VS Code emulator service account support |  | Apigee in VS Code supports testing API proxies in the Apigee Emulator with service account-based authentication. |
| 2023-04-13 | VS Code multi-repository workspaces |  | Apigee in VS Code supports local development with multi-repository workspaces for managing artifacts from separate source control locations. |
| 2023-03-23 | Advanced API Security abuse detection |  | Advanced API Security abuse detection uses machine learning to identify malicious API traffic patterns and security incidents. |
| 2023-03-22 | Custom SSL certificates for access routing |  | Apigee Pay-as-you-go provisioning can use existing self-managed SSL certificates for customized access routing. |
| 2023-03-22 | Provisioning completion notifications |  | Apigee sends Google Cloud console notifications when Pay-as-you-go provisioning completes. |
| 2023-02-08 | CacheExpiryInSeconds support for token and API key verification |  | VerifyAPIKey and OAuth2 VerifyAccessToken support CacheExpiryInSeconds to enforce and customize cache TTL for cached tokens. |
| 2022-12-08 | Simplified onboarding for Pay-as-you-go |  | Apigee X provides a simplified Google Cloud console onboarding flow for Pay-as-you-go provisioning with defaults and optional customization. |
| 2022-11-04 | Private Service Connect for northbound traffic |  | Private Service Connect enables private client-to-Apigee northbound traffic routing; Private Service Connect enables clients to connect to Apigee without managed instance groups for northbound traffic. |
| 2022-11-04 | Private Service Connect northbound routing for multi-region deployments |  | Private Service Connect supports northbound routing for Apigee multi-region configurations. |
| 2022-10-27 | Advanced API Security |  | Advanced API Security protects APIs from unwanted requests and evaluates API configuration security; Advanced API Security protects APIs from unwanted requests and evaluates the security of API configurations. |
| 2022-10-24 | Runtime error reason codes |  | Runtime error messages can include reason codes to improve error diagnosis and filtering in the error catalog. |
| 2022-09-26 | Apigee instance recreation with zero downtime |  | Apigee supports recreating older instances with zero downtime to avoid scaling and environment-limit issues. |
| 2022-09-14 | Apigee Emulator version selection in VS Code |  | Local development in Apigee for VS Code supports using a different Apigee Emulator version. |
| 2022-09-14 | Apigee runtime Docker container customization in VS Code |  | Local development in Apigee for VS Code supports customizing the Apigee runtime Docker container. |
| 2022-09-09 | Private Service Connect for southbound traffic |  | Private Service Connect enables Apigee to privately connect to target services across VPC networks for southbound traffic; Private Service Connect enables Apigee to connect to backend target services in VPC networks outside the peered network. |
| 2022-08-30 | Pay-as-you-go gateway node scaling limit |  | The Apigee pay-as-you-go pricing model supports up to 1,000 gateway nodes across all environments in a region. |
| 2022-08-11 | Advanced API Security Abuse page |  | The Abuse page in Advanced API Security displays detected bots, their IP addresses, locations, and matching bot rules. |
| 2022-07-21 | Advanced API Security target assessment |  | Target assessment evaluates the security of target servers used by your APIs. |
| 2022-06-30 | Advanced API Security security reports |  | Security reports help detect bots and other threats in API traffic. |
| 2022-06-30 | Advanced API Security security scores |  | Security scores rate API security posture and provide recommendations for improvement. |
| 2022-06-02 | Key value map entry management API |  | Apigee X APIs can manage key value entries in organization-, environment-, and API proxy-scoped key value maps. |
| 2022-05-09 | GoogleIDToken.Audience useTargetUrl attribute |  | The GoogleIDToken.Audience tag supports a useTargetUrl attribute to simplify Google ID token audience configuration. |
| 2022-03-22 | IAM resource conditions |  | IAM policies support resource conditions for more granular control over Apigee resources. |
| 2022-03-15 | GraphQL policy JSON-encoded payload support |  | The GraphQL policy supports JSON-encoded payloads. |
| 2022-03-15 | KVM pagination |  | Key value maps support pagination through the API. |
| 2022-03-03 | Google authentication for configurable API proxy targets |  | Configurable API proxies support Google authentication to secure Google backend services without managing private keys. |
| 2022-03-03 | HTTP request transforms for configurable API proxies |  | Configurable API proxies support HTTP request transforms to rewrite paths, headers, and query parameters. |
| 2022-03-03 | Southbound mTLS for configurable API proxies |  | Configurable API proxies support southbound mutual TLS for secure communication with backend services. |
| 2022-03-03 | Template variables for configurable API proxies |  | Configurable API proxies support template variables defined through Apigee property sets for archive deployments. |
| 2022-01-28 | Service networking and instance creation UI updates |  | The Apigee UI includes updates for service networking and instance creation to support revised network IP CIDR requirements. |
| 2022-01-24 | Reduced VPC peering IP range requirement |  | Apigee provisioning reduces the required non-overlapping CIDR range for VPC peering to /22. |

Source file slug: `apigee-x.md`

