# Apigee Advanced API Security

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 47
Unique features: 59

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-17 | Abuse Detection VPC-SC support |  | Advanced API Security Abuse Detection now fully supports VPC Service Controls customers, including operation with the Advanced Anomaly Detection model and exclusion list handling. |
| 2026-03-10 | Risk Assessment v2 monitoring conditions |  | Monitoring conditions in Risk Assessment v2 are now generally available. |
| 2026-02-03 | Multiple condition types per security action |  | A single security action can now include multiple condition types, such as IP addresses and ASN numbers, when configured through the API. |
| 2026-01-12 | Terraform management of Abuse Detection exclusion lists |  | Terraform support was added to create and manage Abuse Detection exclusion lists for excluding safe CIDR ranges or IP addresses from incident reporting. |
| 2025-12-17 | Risk Assessment V2 custom security profile type field |  | The API for creating and updating Risk Assessment v2 custom security profiles now accepts an optional risk_assessment_type field to indicate Apigee/Hybrid or API Hub multi-gateway scope. |
| 2025-12-17 | Risk Assessment v2 general availability |  | Risk Assessment v2 reached general availability. |
| 2025-12-17 | Risk Assessment v2 SanitizeModelResponse policy support |  | Risk Assessment v2 now supports the SanitizeModelResponse policy in assessments. |
| 2025-12-17 | Risk Assessment v2 SanitizeUserPrompt policy support |  | Risk Assessment v2 now supports the SanitizeUserPrompt policy in assessments. |
| 2025-12-17 | Risk Assessment v2 SemanticCacheLookup policy support |  | Risk Assessment v2 now supports the SemanticCacheLookup policy in assessments. |
| 2025-12-17 | Risk Assessment v2 VerifyIAM policy support |  | Risk Assessment v2 now supports the VerifyIAM policy in assessments. |
| 2025-10-02 | Abuse Detection exclusion lists |  | Abuse Detection now supports creating and managing multiple exclusion lists to exclude safe traffic from future incident reports. |
| 2025-09-19 | Security action status indicators in UI |  | The security actions UI now shows status icons and an expired marker for enabled, disabled, paused, and expired security actions. |
| 2025-09-18 | Abuse Detection incident model quality improvements |  | The Abuse Detection incident model was improved for lower noise and higher accuracy in incident detection. |
| 2025-08-25 | Abuse Detection anomaly incident detail view |  | Abuse Detection incidents now provide richer anomaly details, including why traffic was flagged, time context, charts, and links to Google Cloud Logging. |
| 2025-08-11 | Improved abuse incident IP detail performance |  | Abuse Detection now loads IP address-specific incident detail information faster for high-traffic IPs. |
| 2025-08-06 | Shadow API Discovery for any Google Cloud project |  | Shadow API Discovery can now be configured and run in any Google Cloud project, with centralized viewing and comparison of discovered APIs against API Hub catalogs. |
| 2025-08-04 | Advanced API Security Terraform configuration |  | Terraform support has been expanded to configure Advanced API Security settings such as add-on enablement, risk assessment profiles, IP address resolution, and security actions in a declarative workflow. |
| 2025-07-14 | Advanced API Security security actions edit/delete |  | Existing security actions can now be edited and deleted through either the Apigee Console UI or the Apigee Management APIs. |
| 2025-07-01 | Abuse Detection AppGroups visibility |  | Abuse Detection now surfaces AppGroups and AppGroup app context in incidents and detected traffic when that grouping information is present in request traffic. |
| 2025-06-16 | Abuse Detection API address drill-down |  | The detected traffic view in Abuse Detection now includes preview support for drilling down into API address details for investigated abuse events. |
| 2025-06-04 | Abuse Detection advanced anomaly detection model |  | Abuse Detection now uses a new customer-specific Vertex AI anomaly detection model with traffic-data training, replacing the previous model without API or UI changes. |
| 2025-05-27 | Advanced API Security runtime region expansion |  | Advanced API Security runtime availability has been expanded to include the africa-south1 (Johannesburg) region. |
| 2025-05-20 | Abuse Detection incident raw data view |  | Abuse Detection incident reports now provide raw underlying data, including fields such as client IP, API proxy, and developer app, for deeper investigation. |
| 2025-03-25 | Risk Assessment v2 monitoring alerts |  | Risk Assessment v2 preview adds alerting on security monitoring conditions so changes in security scores can trigger Cloud Monitoring alerts. |
| 2025-03-25 | Risk Assessment v2 security monitoring conditions |  | Risk Assessment v2 preview adds security monitoring conditions to map proxies or environments to security profiles for ongoing security score monitoring. |
| 2025-03-07 | Advanced API Security data obfuscation |  | Data obfuscation support is now available for Advanced API Security use cases, including Apigee API Analytics-related protection. |
| 2025-01-13 | Shadow API Discovery latency optimization |  | Shadow API Discovery has been improved to remove its prior latency impact on load balancers during enablement. |
| 2025-01-07 | Abuse Detection API key drill-down |  | Abuse Detection preview now supports API key drill-down details so detected abuse can be analyzed by the API key involved. |
| 2025-01-06 | Client IP address resolution UI in environments |  | The Apigee Console now displays environment-level client IP address resolution settings for easier configuration visibility. |
| 2024-12-20 | Environment-level client IP address resolution |  | Apigee Advanced API Security adds environment-specific configuration for deriving client IP from X-Forwarded-For so security actions can use resolved client IP and expose it in analytics and flow variables. |
| 2024-11-14 | Abuse Detection incident IP address drill-down |  | Advanced API Security Abuse Detection incidents now include preview functionality to drill down and view incident details by source IP address. |
| 2024-10-08 | Risk Assessment v2 custom security profiles |  | Risk Assessment v2 gains support for creating custom security profiles with unique combinations of checks and weights. |
| 2024-10-08 | Risk Assessment v2 multi-profile proxy assessment |  | Risk Assessment v2 enables proxy risk scoring across multiple security profiles. |
| 2024-10-08 | Risk Assessment v2 new assessment checks |  | Risk Assessment v2 adds additional assessment checks that can be used in proxy risk scoring. |
| 2024-10-08 | Risk Assessment v2 profile switching |  | Users can switch between security profiles in Risk Assessment v2 to compare scoring differences. |
| 2024-09-10 | Proxy-specific security actions |  | Security actions can now be scoped to one or more specific proxies in Advanced API Security. |
| 2024-08-13 | Risk Assessment v2 percentage score display |  | Risk Assessment v2 displays risk score as a percentage, where 100% represents full alignment with the selected security profile. |
| 2024-08-13 | Risk Assessment v2 public preview |  | Risk Assessment v2 is introduced in public preview for Apigee Advanced API Security. |
| 2024-08-13 | Risk Assessment v2 score calculation performance improvements |  | Risk Assessment v2 improves score reliability with faster score calculations using recent proxy data. |
| 2024-08-05 | Shadow API Discovery tagging |  | Shadow API Discovery in preview now supports tags to label and organize API observation results. |
| 2024-07-26 | Advanced API Security data residency |  | Advanced API Security now supports configuring regional data residency for stored security data to meet compliance requirements. |
| 2024-06-27 | Generative AI abuse incident summaries |  | A preview feature adds generative AI-powered summaries and recommendations for Abuse Detection incidents. |
| 2024-06-17 | Shadow API Discovery no-P4SA setup requirement |  | Shadow API Discovery preview can be enabled without creating separate Private Google Access (P4SA) permissions. |
| 2024-05-29 | Shadow API Discovery preview |  | Advanced API Security introduces Shadow API Discovery in preview to identify undocumented shadow APIs in existing infrastructure. |
| 2024-05-14 | Security action rule support for ASN conditions |  | Security action rules now support Autonomous System Number (ASN) as a condition type. |
| 2024-05-14 | Security action rule support for HTTP method conditions |  | Security action rules now support HTTP methods as a condition type. |
| 2024-05-14 | Security action rule support for region code conditions |  | Security action rules now support region codes as a condition type. |
| 2024-05-09 | Security action rule CIDR support for IPv4 |  | Security action rules now support CIDR range specification when matching IPv4 addresses. |
| 2024-03-04 | Security action condition types |  | Security actions can now be triggered by additional condition types, including API keys, API products, access tokens, developers, developer apps, and user agents for finer-grained traffic handling. |
| 2024-01-16 | Abuse detection model training on customer data |  | Apigee now supports optional training of abuse-detection machine learning models on a customer’s own data to improve incident-detection accuracy. |
| 2023-12-13 | Risk assessment security score performance |  | Risk assessment security score loading has been optimized through server-side score caching for faster UI rendering. |
| 2023-12-13 | Security incident archiving |  | Users can archive security incidents to remove them from the main incident list while retaining them for later review via unarchive. |
| 2023-12-06 | Security action quick-create access in security views |  | Security action creation links were added directly in Abuse detection and Risk assessment views to create actions in the currently viewed context. |
| 2023-11-01 | Custom security profiles in Apigee UI |  | Customers can create and edit custom security profiles in the Apigee UI to define which security categories contribute to risk scoring. |
| 2023-10-06 | Security Actions |  | Security Actions are available to define automated responses to detected traffic, including deny, flag, and allow actions based on configured conditions. |
| 2023-09-27 | Advanced API Security alerting |  | Advanced API Security alerting enables incident and score-related notifications through Google Cloud Monitoring channels such as email. |
| 2023-08-25 | Custom security profiles API management |  | Security profiles can be created through the security scores API for custom security scoring categories, with score views available in the UI. |
| 2023-04-20 | Detected Traffic view |  | A dedicated Detected Traffic view was added to show API traffic from detected bots and related abuse signals. |
| 2023-03-23 | Abuse detection |  | Abuse detection entered public preview to surface security incidents using machine learning, including Advanced Anomaly Detection and Advanced API Scraper detection rules. |

Source file slug: `apigee-advanced-api-security.md`

