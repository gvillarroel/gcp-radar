# IAP for Cloud Run

Product: Identity-Aware Proxy
Feature slug: `iap-for-cloud-run`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Identity-Aware Proxy can be enabled directly on Cloud Run services without configuring a load balancer; Identity-Aware Proxy supports Cloud Run applications to help guard access using identity and context.

## Lifecycle

- Latest feature date: 2025-04-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run), [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto), [https://docs.cloud.google.com/iap/docs/enabling-app-engine](https://docs.cloud.google.com/iap/docs/enabling-app-engine), [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce))
- auth (evidence: [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run), [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto), [https://docs.cloud.google.com/iap/docs/enabling-app-engine](https://docs.cloud.google.com/iap/docs/enabling-app-engine), [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce))
- authorization (evidence: [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run), [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto), [https://docs.cloud.google.com/iap/docs/enabling-app-engine](https://docs.cloud.google.com/iap/docs/enabling-app-engine), [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce))
- confidential (evidence: [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run), [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto), [https://docs.cloud.google.com/iap/docs/enabling-app-engine](https://docs.cloud.google.com/iap/docs/enabling-app-engine), [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce))
- iam (evidence: [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run), [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto), [https://docs.cloud.google.com/iap/docs/enabling-app-engine](https://docs.cloud.google.com/iap/docs/enabling-app-engine), [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce))
- identity (evidence: [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run), [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto), [https://docs.cloud.google.com/iap/docs/enabling-app-engine](https://docs.cloud.google.com/iap/docs/enabling-app-engine), [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce))
- permission (evidence: [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run), [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto), [https://docs.cloud.google.com/iap/docs/enabling-app-engine](https://docs.cloud.google.com/iap/docs/enabling-app-engine), [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce))
- policy (evidence: [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run), [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto), [https://docs.cloud.google.com/iap/docs/enabling-app-engine](https://docs.cloud.google.com/iap/docs/enabling-app-engine), [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce))
- role (evidence: [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run), [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto), [https://docs.cloud.google.com/iap/docs/enabling-app-engine](https://docs.cloud.google.com/iap/docs/enabling-app-engine), [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce))
- security (evidence: [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run), [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto), [https://docs.cloud.google.com/iap/docs/enabling-app-engine](https://docs.cloud.google.com/iap/docs/enabling-app-engine), [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce))
- token (evidence: [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run), [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto), [https://docs.cloud.google.com/iap/docs/enabling-app-engine](https://docs.cloud.google.com/iap/docs/enabling-app-engine), [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce))

## Official Evidence

- [https://docs.cloud.google.com/iap/docs/enabling-app-engine](https://docs.cloud.google.com/iap/docs/enabling-app-engine)
- [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run)
- [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto)
- [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce)
