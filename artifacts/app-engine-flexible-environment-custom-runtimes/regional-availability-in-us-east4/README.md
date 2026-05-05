# Regional availability in us-east4

Product: App Engine flexible environment custom runtimes
Feature slug: `regional-availability-in-us-east4`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

App Engine flexible environment is available in the us-east4 region.

## Lifecycle

- Latest feature date: 2017-05-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users), [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime), [https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor](https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor))
- auth (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users), [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime), [https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor](https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor))
- iam (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users), [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime), [https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor](https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor))
- identity (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users), [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime), [https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor](https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime)
- [https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor](https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
