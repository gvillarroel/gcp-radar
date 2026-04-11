---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.898Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Credential validation for third-party API connectors"
feature_slug: "credential-validation-for-third-party-api-connectors"
latest_feature_date: "2026-03-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/understand-the-secops-platform"
keywords:
  - "credential"
  - "validation"
  - "for"
  - "third"
  - "party"
  - "api"
  - "connectors"
  - "secops"
---

# Credential validation for third-party API connectors

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

Google SecOps automatically validates credentials when you create feeds with third-party API connectors.

## Extended Definition

Google SecOps automatically validates credentials when you create feeds with third-party API connectors.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/understand-the-secops-platform](https://docs.cloud.google.com/chronicle/docs/secops/understand-the-secops-platform)

## Supporting Pages

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- March 25, 2026 Feature Credential validation for third-party API feed types Credential validation is now available for all 49 third-party API connectors.
- When you create a feed using a third-party API feed type, Google SecOps now automatically validates the provided credentials.
- AWS EC2 Hosts ( AWS EC2 HOSTS ) AWS EC2 Instances ( AWS EC2 INSTANCES ) AWS EC2 VPCs ( AWS EC2 VPCS ) AWS Identity and Access Management ( AWS IAM ) To view a list of log types that Chronicle supports for third-party APIs, see Configuration by log type .
- Absolute Secure Endpoint ( ABSOLUTE SECURE ENDPOINT ) Airbus Security Logging (ACD AISD) ( AIRBUS SECURITY LOG ) Azure Recovery Services Vaults ( AZURE RECOVERY SERVICES VAULTS ) Boeing Onboard Network System Logging ( BOEING ONS ) Cisco Firepower Threat Defense ( CISCO FIREPOWER THREAT DEFENSE ) Cisco Security Cloud Control ( CISCO SECURITY CLOUD CONTROL ) Pico Corvilnet Engine ( CORVILNET ENGINE ) CrowdStrike Falcon Shield ( CROWDSTRIKE FALCON SHIELD ) Easy NAC ( EASY NAC ) FairXchange Horizon ( FAIRXCHANGE HORIZON ) Google Threat Intelligence ( GCP THREATINTEL ) HPE Alletra ( HPE ALLETRA ) Huawei Cloud Trace Service Audit ( HUAWEI CTS AUDIT ) Huawei SecMaster ( HUAWEI SECMASTER ) IBM ILO ( IBM ILO ) Infisical ( INFISICAL ) JSCAPE SFTP ( JSCAPE SFTP ) Juniper Edge ( JUNIPER EDGE ) Kaspersky for Microsoft Office 365 ( KASPERSKY O365 EVENTS ) Microsoft Defender for Cloud Apps ( MICROSOFT DEFENDER CLOUD APPS ) Oracle Cloud Infrastructure Network Firewall ( OCI FIREWALL ) Okta Workflows ( OKTA WORKFLOWS ) Phosphorus ( PHOSPHORUS ) Rapid7 Cloud Security ( RAPID7 CLOUDSEC ) Research and Education Networks Information Sharing and Analysis Center ( REN ISAC ) Risk Resecurity ( RISK RESECURITY ) Sangfor Network Detection and Response ( SANGFOR NDR ) SAP Enterprise Threat Detection ( SAP ETD ) SAP IAS Context ( SAP IAS CONTEXT ) Sectigo SCM ( SECTIGO SCM ) ServiceNow Node ( SERVICENOW NODE ) ServiceNow Outbound HTTP ( SERVICENOW OUTBOUNDHTTP ) ServiceNow System log ( SERVICENOW SYSLOG ) ServiceNow Transaction ( SERVICENOW TRANSACTION ) Seti S4 ( SETI S4 ) ThousandEyes ( THOUSAND EYES ) Transmit Security Mosaic CIAM ( TRANSMIT MOSAIC CIAM ) Transmit Security Mosaic Fraud Prevention ( TRANSMIT MOSAIC FRAUD PREVENTION ) Transmit Security Mosaic Identity Verification ( TRANSMIT MOSAIC IDENTITY VERIFICATION ) Transmit Security Mosaic Management ( TRANSMIT MOSAIC MANAGEMENT ) Tripwire Security Configuration Management ( TRIPWIRE SCM ) Valimail ( VALIMAIL ) WSO2 IS AM ( WSO2 IS AM ) XDR.Net Digital Twin ( XDRNET DIGITALTWIN ) Zimbra Mail ( ZIMBRA MAIL ) Zscaler Email DLP ( ZSCALER EMAIL DLP ) November 13, 2025 Feature Raw log search enhancements Google SecOps now includes enhancements to raw log search to boost usability, performance, and data analysis: New filtering options : Filter raw log results by their parsing status or by one or more log sources.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- March 25, 2026 Feature Credential validation for third-party API feed types Credential validation is now available for all 49 third-party API connectors.
- September 23, 2025 Change Transport-layer migration for third-party API feeds Google SecOps is migrating the transport layer for third-party API feeds to a new platform to improve performance and reliability.
- When you create a feed using a third-party API feed type, Google SecOps now automatically validates the provided credentials.
- AWS EC2 Hosts ( AWS EC2 HOSTS ) AWS EC2 Instances ( AWS EC2 INSTANCES ) AWS EC2 VPCs ( AWS EC2 VPCS ) AWS Identity and Access Management ( AWS IAM ) To view a list of log types that Chronicle supports for third-party APIs, see Configuration by log type .

### "Understand the Google SecOps platform \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/understand-the-secops-platform](https://docs.cloud.google.com/chronicle/docs/secops/understand-the-secops-platform)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Ingesting data using SecOps SIEM and third party SIEMS The Google SecOps platform offers the opportunity to not only ingest alerts using the inbuilt SIEM platform (which ingests raw logs using forwarders and data feeds) but also accepts alerts from third party SIEMS (via SOAR > Connectors and Webhooks).
- Alerts ingested from third party SIEMs are sent to the SIEM side of the platform and can be seen using the UDM search but are not subjected to the inbuilt SIEM rules.
- These platform-wide settings includes these pages to manage user access: IDP Group Mapping : Maps all external Identity Provider (IdP) groups to Google SecOps platform user groups.
- Understand the Google SecOps platform Supported in: Google secops Following the article Navigate the platform you will see that there are areas divided into SIEM and SOAR.

