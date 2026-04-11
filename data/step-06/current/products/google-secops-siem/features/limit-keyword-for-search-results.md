---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.371Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "limit keyword for search results"
feature_slug: "limit-keyword-for-search-results"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
keywords:
  - "limit"
  - "keyword"
  - "for"
  - "search"
  - "results"
  - "adds"
  - "the"
  - "to"
---

# limit keyword for search results

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

Adds the limit keyword to restrict the number of search results returned.

## Extended Definition

Adds the limit keyword to restrict the number of search results returned.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you add the following to your search, it limits the results to a maximum of 25: limit: 25 Note: You can also add the limit keyword to custom dashboards.
- Limit results You can limit search results by adding the limit keyword with the maximum number of search results you want to display.
- For example: Optimized results view Timelines chart Aggregations window Optimized results view To maximize the space available for viewing search results, Google SecOps provides an event-focused view.
- Factors that limit search results When conducting searches, the following factors can limit the number of results returned: Maximum search results : 1M events.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Absolute Secure Endpoint ( ABSOLUTE SECURE ENDPOINT ) Airbus Security Logging (ACD AISD) ( AIRBUS SECURITY LOG ) Azure Recovery Services Vaults ( AZURE RECOVERY SERVICES VAULTS ) Boeing Onboard Network System Logging ( BOEING ONS ) Cisco Firepower Threat Defense ( CISCO FIREPOWER THREAT DEFENSE ) Cisco Security Cloud Control ( CISCO SECURITY CLOUD CONTROL ) Pico Corvilnet Engine ( CORVILNET ENGINE ) CrowdStrike Falcon Shield ( CROWDSTRIKE FALCON SHIELD ) Easy NAC ( EASY NAC ) FairXchange Horizon ( FAIRXCHANGE HORIZON ) Google Threat Intelligence ( GCP THREATINTEL ) HPE Alletra ( HPE ALLETRA ) Huawei Cloud Trace Service Audit ( HUAWEI CTS AUDIT ) Huawei SecMaster ( HUAWEI SECMASTER ) IBM ILO ( IBM ILO ) Infisical ( INFISICAL ) JSCAPE SFTP ( JSCAPE SFTP ) Juniper Edge ( JUNIPER EDGE ) Kaspersky for Microsoft Office 365 ( KASPERSKY O365 EVENTS ) Microsoft Defender for Cloud Apps ( MICROSOFT DEFENDER CLOUD APPS ) Oracle Cloud Infrastructure Network Firewall ( OCI FIREWALL ) Okta Workflows ( OKTA WORKFLOWS ) Phosphorus ( PHOSPHORUS ) Rapid7 Cloud Security ( RAPID7 CLOUDSEC ) Research and Education Networks Information Sharing and Analysis Center ( REN ISAC ) Risk Resecurity ( RISK RESECURITY ) Sangfor Network Detection and Response ( SANGFOR NDR ) SAP Enterprise Threat Detection ( SAP ETD ) SAP IAS Context ( SAP IAS CONTEXT ) Sectigo SCM ( SECTIGO SCM ) ServiceNow Node ( SERVICENOW NODE ) ServiceNow Outbound HTTP ( SERVICENOW OUTBOUNDHTTP ) ServiceNow System log ( SERVICENOW SYSLOG ) ServiceNow Transaction ( SERVICENOW TRANSACTION ) Seti S4 ( SETI S4 ) ThousandEyes ( THOUSAND EYES ) Transmit Security Mosaic CIAM ( TRANSMIT MOSAIC CIAM ) Transmit Security Mosaic Fraud Prevention ( TRANSMIT MOSAIC FRAUD PREVENTION ) Transmit Security Mosaic Identity Verification ( TRANSMIT MOSAIC IDENTITY VERIFICATION ) Transmit Security Mosaic Management ( TRANSMIT MOSAIC MANAGEMENT ) Tripwire Security Configuration Management ( TRIPWIRE SCM ) Valimail ( VALIMAIL ) WSO2 IS AM ( WSO2 IS AM ) XDR.Net Digital Twin ( XDRNET DIGITALTWIN ) Zimbra Mail ( ZIMBRA MAIL ) Zscaler Email DLP ( ZSCALER EMAIL DLP ) November 13, 2025 Feature Raw log search enhancements Google SecOps now includes enhancements to raw log search to boost usability, performance, and data analysis: New filtering options : Filter raw log results by their parsing status or by one or more log sources.
- November 07, 2025 Change MITRE ATT&CK coverage dashboard is now available The new MITRE ATT&CK coverage dashboard lets you measure your security posture against the MITRE ATT&CK framework, helping you: Assess threat coverage Identify gaps Prioritize security efforts October 31, 2025 Feature Search usability enhancements Google SecOps has introduced the following capabilities to improve usability, performance, and customization in search results: Improved performance for large result sets : For broad queries, Google SecOps now provides paginated search results.
- You can now do the following: Use enhanced filtering to include Bottom 30 values in addition to Top 30 values for each UDM Field in search results Use 'field[key] = value' exact match to search the 'additional' and 'labels' fields Pin fields (using the push pin icon) in Quick Filter to save them as a favorite.
- April 06, 2026 Change Updates to search query limits and error messaging Google SecOps has updated search query limits for programmatic and web interface access: Increased Queries Per Hour (QPH) limits of up to 2,000 for APIs and 1,000 for the web interface.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Absolute Secure Endpoint ( ABSOLUTE SECURE ENDPOINT ) Airbus Security Logging (ACD AISD) ( AIRBUS SECURITY LOG ) Azure Recovery Services Vaults ( AZURE RECOVERY SERVICES VAULTS ) Boeing Onboard Network System Logging ( BOEING ONS ) Cisco Firepower Threat Defense ( CISCO FIREPOWER THREAT DEFENSE ) Cisco Security Cloud Control ( CISCO SECURITY CLOUD CONTROL ) Pico Corvilnet Engine ( CORVILNET ENGINE ) CrowdStrike Falcon Shield ( CROWDSTRIKE FALCON SHIELD ) Easy NAC ( EASY NAC ) FairXchange Horizon ( FAIRXCHANGE HORIZON ) Google Threat Intelligence ( GCP THREATINTEL ) HPE Alletra ( HPE ALLETRA ) Huawei Cloud Trace Service Audit ( HUAWEI CTS AUDIT ) Huawei SecMaster ( HUAWEI SECMASTER ) IBM ILO ( IBM ILO ) Infisical ( INFISICAL ) JSCAPE SFTP ( JSCAPE SFTP ) Juniper Edge ( JUNIPER EDGE ) Kaspersky for Microsoft Office 365 ( KASPERSKY O365 EVENTS ) Microsoft Defender for Cloud Apps ( MICROSOFT DEFENDER CLOUD APPS ) Oracle Cloud Infrastructure Network Firewall ( OCI FIREWALL ) Okta Workflows ( OKTA WORKFLOWS ) Phosphorus ( PHOSPHORUS ) Rapid7 Cloud Security ( RAPID7 CLOUDSEC ) Research and Education Networks Information Sharing and Analysis Center ( REN ISAC ) Risk Resecurity ( RISK RESECURITY ) Sangfor Network Detection and Response ( SANGFOR NDR ) SAP Enterprise Threat Detection ( SAP ETD ) SAP IAS Context ( SAP IAS CONTEXT ) Sectigo SCM ( SECTIGO SCM ) ServiceNow Node ( SERVICENOW NODE ) ServiceNow Outbound HTTP ( SERVICENOW OUTBOUNDHTTP ) ServiceNow System log ( SERVICENOW SYSLOG ) ServiceNow Transaction ( SERVICENOW TRANSACTION ) Seti S4 ( SETI S4 ) ThousandEyes ( THOUSAND EYES ) Transmit Security Mosaic CIAM ( TRANSMIT MOSAIC CIAM ) Transmit Security Mosaic Fraud Prevention ( TRANSMIT MOSAIC FRAUD PREVENTION ) Transmit Security Mosaic Identity Verification ( TRANSMIT MOSAIC IDENTITY VERIFICATION ) Transmit Security Mosaic Management ( TRANSMIT MOSAIC MANAGEMENT ) Tripwire Security Configuration Management ( TRIPWIRE SCM ) Valimail ( VALIMAIL ) WSO2 IS AM ( WSO2 IS AM ) XDR.Net Digital Twin ( XDRNET DIGITALTWIN ) Zimbra Mail ( ZIMBRA MAIL ) Zscaler Email DLP ( ZSCALER EMAIL DLP ) November 13, 2025 Feature Raw log search enhancements Google SecOps now includes enhancements to raw log search to boost usability, performance, and data analysis: New filtering options : Filter raw log results by their parsing status or by one or more log sources.
- March 19, 2025 Announcement The following parser documentation is now available: Collect AWS Config logs Collect AWS Elastic Load Balancing logs Collect AWS Route 53 logs Collect AWS S3 server access logs Collect AWS WAF logs Collect Azure Application Gateway logs Collect Carbon Black App Control logs Collect Carbon Black EDR logs Collect Delinea Secret Server logs Collect Radware WAF logs Collect AWS Aurora logs Collect AWS CloudWatch logs Collect AWS Control Tower logs Collect AWS Elastic MapReduce logs Collect AWS Key Management Service logs Collect AWS Macie logs Collect AWS Network Firewall logs Collect AWS Security Hub logs Collect AWS Session Manager logs Collect Zscaler DLP logs Collect Zscaler Tunnel logs Collect Zscaler VPN logs Collect Zscaler ZPA Audit logs Collect Zscaler ZPA logs Collect Zscaler CASB logs Collect Azure AD Sign-In logs Collect Azure API Management logs Collect Azure APP Service logs Collect Azure Firewall logs Collect Azure VPN logs Collect AWS VPN logs Collect Azure Storage Audit logs Collect Azure WAF logs Collect Cloud IoT logs Collect Cloud Run logs Collect Cloud Compute logs Collect CrowdStrike Falcon Stream logs Collect SentinelOne Deep Visibility logs Collect Cloud VPC Flow Logs Collect Cloud Compute context logs Collect Cloud Intrusion Detection System (Cloud IDS) logs Collect Cloud Next Generation Firewall Enterprise logs Collect Cloud Storage context logs Collect Cloud Identity and Access Management (IAM) Analysis logs Collect Cloud Identity Devices logs Collect Cloud Identity Device Users logs Collect Cloud Security Command Center Error logs Collect Cloud Security Command Center Observation logs Collect Cloud Security Command Center Posture Violation logs Collect Cloud Security Command Center Toxic Combination logs Collect Cloud Security Command Center Unspecified logs Collect Cloud Secure Web Proxy logs March 18, 2025 Feature Statistics and aggregations in UDM search using YARA-L 2.0 You can now run statistical queries on UDM events and group the results for analysis using YARA-L 2.0.
- November 07, 2025 Change MITRE ATT&CK coverage dashboard is now available The new MITRE ATT&CK coverage dashboard lets you measure your security posture against the MITRE ATT&CK framework, helping you: Assess threat coverage Identify gaps Prioritize security efforts October 31, 2025 Feature Search usability enhancements Google SecOps has introduced the following capabilities to improve usability, performance, and customization in search results: Improved performance for large result sets : For broad queries, Google SecOps now provides paginated search results.
- April 06, 2026 Change Updates to search query limits and error messaging Google SecOps has updated search query limits for programmatic and web interface access: Increased Queries Per Hour (QPH) limits of up to 2,000 for APIs and 1,000 for the web interface.

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- You can refine the query and click Run Search until the results display the data that you want to label.
- You can refine the query and click Run Search until the results display the data that you want to label.
- You can refine the query and click Run Search until the results display the data that you want to label.
- You can refine the query and click Run Search until the results display the data that you want to label.

