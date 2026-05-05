# Environment load balancing

Product: Google SecOps SOAR
Feature slug: `environment-load-balancing`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Environment load balancing improves stability and fair resource sharing in multi-tenant environments using a lottery algorithm and API-based weighting.

## Lifecycle

- Latest feature date: 2025-05-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc), [https://docs.cloud.google.com/chronicle/docs/libraries](https://docs.cloud.google.com/chronicle/docs/libraries), [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category), [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance))
- audit (evidence: [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc), [https://docs.cloud.google.com/chronicle/docs/libraries](https://docs.cloud.google.com/chronicle/docs/libraries), [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category), [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance))
- auth (evidence: [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc), [https://docs.cloud.google.com/chronicle/docs/libraries](https://docs.cloud.google.com/chronicle/docs/libraries), [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category), [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance))
- key (evidence: [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc), [https://docs.cloud.google.com/chronicle/docs/libraries](https://docs.cloud.google.com/chronicle/docs/libraries), [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category), [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance))
- logging (evidence: [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc), [https://docs.cloud.google.com/chronicle/docs/libraries](https://docs.cloud.google.com/chronicle/docs/libraries), [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category), [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance))
- permission (evidence: [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc), [https://docs.cloud.google.com/chronicle/docs/libraries](https://docs.cloud.google.com/chronicle/docs/libraries), [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category), [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance))
- policy (evidence: [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc), [https://docs.cloud.google.com/chronicle/docs/libraries](https://docs.cloud.google.com/chronicle/docs/libraries), [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category), [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance))
- role (evidence: [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc), [https://docs.cloud.google.com/chronicle/docs/libraries](https://docs.cloud.google.com/chronicle/docs/libraries), [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category), [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance))
- security (evidence: [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc), [https://docs.cloud.google.com/chronicle/docs/libraries](https://docs.cloud.google.com/chronicle/docs/libraries), [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category), [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance))
- threat (evidence: [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc), [https://docs.cloud.google.com/chronicle/docs/libraries](https://docs.cloud.google.com/chronicle/docs/libraries), [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category), [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance))

## Official Evidence

- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/libraries](https://docs.cloud.google.com/chronicle/docs/libraries)
- [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance)
