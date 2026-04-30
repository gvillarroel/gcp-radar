# Identity-Aware Proxy

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-04-30T16:03:29.101Z`
Product status: `PASS`

## Summary

- Feature cards: 25
- Step 07 failed features: 0
- Step 07 warned features: 0
- Corpus health: healthy
- IAM mapping: 0 explicit, 0 derived, 25 unknown

## Service Card

- Service card ID: `identity-aware-proxy:service`
- Latest feature date: 2026-03-13
- Official source links: 29
- Security capabilities: 22

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| Custom OAuth clients for IAP | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration)<br>[source](https://docs.cloud.google.com/iap/docs/customizing)<br>[source](https://docs.cloud.google.com/iap/docs/enabling-compute-howto) |
| Path wildcard support in service account JWT aud claims | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iap/docs/authentication-howto)<br>[source](https://docs.cloud.google.com/iap/docs/customizing)<br>[source](https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding) |
| IAP for Cloud Run | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iap/docs/enabling-app-engine)<br>[source](https://docs.cloud.google.com/iap/docs/enabling-cloud-run)<br>[source](https://docs.cloud.google.com/iap/docs/enabling-compute-howto) |
| Service account JWT authentication for federated applications | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iap/docs/authenticate-users-external-identities)<br>[source](https://docs.cloud.google.com/iap/docs/authenticate-users-google-accounts)<br>[source](https://docs.cloud.google.com/iap/docs/authentication-howto) |
| Workforce Identity Federation with IAP | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iap/docs/authentication-howto)<br>[source](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto)<br>[source](https://docs.cloud.google.com/iap/docs/concepts-overview) |
| Authorization policy delegation for IAP and IAM | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iap/docs/auth-policies)<br>[source](https://docs.cloud.google.com/iap/docs/enabling-compute-howto)<br>[source](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy) |
| Programmatic access to IAP-protected resources with service account JWTs | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iap/docs/access-external-resources)<br>[source](https://docs.cloud.google.com/iap/docs/authentication-howto)<br>[source](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration) |
| WebSocket support for IAP session management | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview)<br>[source](https://docs.cloud.google.com/iap/docs/enabling-cloud-run)<br>[source](https://docs.cloud.google.com/iap/docs/managing-access) |
| Google-managed OAuth clients for IAP | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration)<br>[source](https://docs.cloud.google.com/iap/docs/enabling-app-engine)<br>[source](https://docs.cloud.google.com/iap/docs/enabling-compute-howto) |
| OAuth client allowlisting for programmatic access | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iap/docs/authentication-howto)<br>[source](https://docs.cloud.google.com/iap/docs/create-custom-auth-ui)<br>[source](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration) |
| External identity authentication for IAP | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iap/docs/authentication-howto)<br>[source](https://docs.cloud.google.com/iap/docs/enabling-app-engine)<br>[source](https://docs.cloud.google.com/iap/docs/enabling-cloud-run) |
| Cloud IAP OAuth client API | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iap/docs/create-custom-auth-ui)<br>[source](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration)<br>[source](https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis) |
| Cloud IAP TCP forwarding | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iap/docs/auth-policies)<br>[source](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto)<br>[source](https://docs.cloud.google.com/iap/docs/customizing) |
| Cloud IAP context-aware access | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto)<br>[source](https://docs.cloud.google.com/iap/docs/concepts-overview)<br>[source](https://docs.cloud.google.com/iap/docs/managing-access) |
| Cloud IAP for on-premises apps | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview)<br>[source](https://docs.cloud.google.com/iap/docs/configuring-reauth)<br>[source](https://docs.cloud.google.com/iap/docs/enabling-on-prem-howto) |
| Cloud IAP per-resource policies | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iap/docs/auth-policies)<br>[source](https://docs.cloud.google.com/iap/docs/custom-org-policies)<br>[source](https://docs.cloud.google.com/iap/docs/managing-access) |
| and GKE | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto)<br>[source](https://docs.cloud.google.com/iap/docs/concepts-overview)<br>[source](https://docs.cloud.google.com/iap/docs/customizing) |
| Cloud IAP AJAX authentication response handling | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iap/docs/authentication-howto)<br>[source](https://docs.cloud.google.com/iap/docs/customizing)<br>[source](https://docs.cloud.google.com/iap/docs/external-identity-sessions) |
| Cloud IAP Cloud Audit Logging support | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iap/docs/audit-log-howto)<br>[source](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto)<br>[source](https://docs.cloud.google.com/iap/docs/create-custom-auth-ui) |
| Cloud IAP support for desktop and command-line applications | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iap/docs/authentication-howto)<br>[source](https://docs.cloud.google.com/iap/docs/configuring-reauth)<br>[source](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration) |
| Cloud Identity-Aware Proxy support for App Engine standard environment | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iap/docs/authentication-howto)<br>[source](https://docs.cloud.google.com/iap/docs/enabling-app-engine)<br>[source](https://docs.cloud.google.com/iap/docs/reference/app-engine-apis) |
| Compute Engine | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto)<br>[source](https://docs.cloud.google.com/iap/docs/enabling-compute-howto)<br>[source](https://docs.cloud.google.com/iap/docs/managing-access) |
| Cloud IAP special URLs | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iap/docs/auth-policies)<br>[source](https://docs.cloud.google.com/iap/docs/configuring-reauth)<br>[source](https://docs.cloud.google.com/iap/docs/enabling-on-prem-howto) |
| Cloud Audit Logging for Cloud IAP-secured resources | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iap/docs/audit-log-howto)<br>[source](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto)<br>[source](https://docs.cloud.google.com/iap/docs/managing-access) |
| Desktop app authentication for Cloud IAP-secured resources | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iap/docs/authentication-howto)<br>[source](https://docs.cloud.google.com/iap/docs/configuring-reauth)<br>[source](https://docs.cloud.google.com/iap/docs/enabling-app-engine) |
