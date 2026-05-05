# Allowed VPC egress settings organization policy

Product: Cloud Run
Feature slug: `allowed-vpc-egress-settings-organization-policy`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Allowed VPC egress settings organization policy controls which VPC egress settings are permitted for Cloud Run.

## Lifecycle

- Latest feature date: 2021-07-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run), [https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/Policy), [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run))
- allow (evidence: [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run), [https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/Policy), [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run))
- audit (evidence: [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run), [https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/Policy), [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run))
- auth (evidence: [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run), [https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/Policy), [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run))
- iam (evidence: [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run), [https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/Policy), [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run))
- identity (evidence: [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run), [https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/Policy), [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run))
- logging (evidence: [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run), [https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/Policy), [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run))
- permission (evidence: [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run), [https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/Policy), [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run))
- policy (evidence: [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run), [https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/Policy), [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run))
- private (evidence: [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run), [https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/Policy), [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run))
- role (evidence: [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run), [https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/Policy), [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run))

## Official Evidence

- [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)
- [https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/Policy)
- [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run)
