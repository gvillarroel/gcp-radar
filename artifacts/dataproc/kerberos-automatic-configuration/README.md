# Kerberos automatic configuration

Product: Dataproc
Feature slug: `kerberos-automatic-configuration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Dataproc can automatically configure Kerberos during cluster creation without requiring explicit root principal password flags.

## Lifecycle

- Latest feature date: 2020-07-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- encrypt (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service), [https://docs.cloud.google.com/dataproc-metastore/docs/about-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/about-kerberos), [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos))
- iam (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service), [https://docs.cloud.google.com/dataproc-metastore/docs/about-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/about-kerberos), [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos))
- key (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service), [https://docs.cloud.google.com/dataproc-metastore/docs/about-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/about-kerberos), [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos))
- kms (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service), [https://docs.cloud.google.com/dataproc-metastore/docs/about-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/about-kerberos), [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos))
- policy (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service), [https://docs.cloud.google.com/dataproc-metastore/docs/about-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/about-kerberos), [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos))
- role (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service), [https://docs.cloud.google.com/dataproc-metastore/docs/about-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/about-kerberos), [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos))
- secret (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service), [https://docs.cloud.google.com/dataproc-metastore/docs/about-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/about-kerberos), [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos))
- security (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service), [https://docs.cloud.google.com/dataproc-metastore/docs/about-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/about-kerberos), [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos))

## Official Evidence

- [https://docs.cloud.google.com/dataproc-metastore/docs/about-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/about-kerberos)
- [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
