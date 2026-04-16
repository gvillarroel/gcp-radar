---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.048Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "configfs-tsm extended attestation protocol support"
feature_slug: "configfs-tsm-extended-attestation-protocol-support"
latest_feature_date: "2025-08-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport"
keywords:
  - "configfs"
  - "tsm"
  - "extended"
  - "attestation"
  - "protocol"
  - "adds"
---

# configfs-tsm extended attestation protocol support

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Adds configfs-tsm support for the extended attestation protocol; Adds configfs-tsm support for the extended attestation protocol.

## Extended Definition

Adds configfs-tsm support for the extended attestation protocol; Adds configfs-tsm support for the extended attestation protocol.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall](https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport](https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport)

## Supporting Pages

### "Collecting debugging information using sosreport \_|\_ Container-Optimized\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport](https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

### "Configuring the host firewall \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall](https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

### "Creating and configuring instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- Source ID: `site-docs-reference`
- Final score: 25
- Re-rank relevance: N/A

Evidence snippets:
- Time synchronization Before milestone 85 , Container-Optimized OS uses systemd 's systemd-timesyncd service to synchronize the local system clock with a remote Network Time Protocol (NTP) server via the SNTP protocol.
- Starting from milestone 85, Container-Optimized OS uses chronyd service to synchronize the local system clock with a remote Network Time Protocol (NTP) server via the NTP protocol.

