# WebSocket support for IAP session management

Product: Identity-Aware Proxy
Feature slug: `websocket-support-for-iap-session-management`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Identity-Aware Proxy supports WebSocket connections for managing Compute Engine resource sessions.

## Lifecycle

- Latest feature date: 2024-04-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce), [https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview](https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access), [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run))
- allow (evidence: [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce), [https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview](https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access), [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run))
- auth (evidence: [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce), [https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview](https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access), [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run))
- confidential (evidence: [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce), [https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview](https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access), [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run))
- iam (evidence: [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce), [https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview](https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access), [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run))
- identity (evidence: [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce), [https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview](https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access), [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run))
- permission (evidence: [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce), [https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview](https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access), [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run))
- role (evidence: [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce), [https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview](https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access), [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run))
- security (evidence: [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce), [https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview](https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access), [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run))

## Official Evidence

- [https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview](https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview)
- [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run)
- [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access)
- [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce)
