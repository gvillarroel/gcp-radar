# Specify a user-managed service account per App Engine version

Product: App Engine flexible environment .NET
Feature slug: `specify-a-user-managed-service-account-per-app-engine-version`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

You can now specify a user-managed service account for each App Engine version during deployment; Deployments can specify a user-managed service account for each App Engine version, enabling per-version privilege separation.

## Lifecycle

- Latest feature date: 2022-05-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains), [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl), [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/user-managed-service-accounts))
- certificate (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains), [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl), [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/user-managed-service-accounts))
- iam (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains), [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl), [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/user-managed-service-accounts))
- identity (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains), [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl), [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/user-managed-service-accounts))
- permission (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains), [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl), [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/user-managed-service-accounts))
- role (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains), [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl), [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/user-managed-service-accounts))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/user-managed-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl)
