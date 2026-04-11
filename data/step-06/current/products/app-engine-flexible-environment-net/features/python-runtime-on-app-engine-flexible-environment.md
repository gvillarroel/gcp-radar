---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:44:02.769Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "Python runtime on App Engine flexible environment"
feature_slug: "python-runtime-on-app-engine-flexible-environment"
latest_feature_date: "2017-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml"
keywords:
  - "deploy Python app"
  - "Python runtime support"
  - "App Engine flexible environment runtime"
  - "Python applications"
  - "Python on App Engine"
  - "Python support"
  - "runtime: python"
  - "Python runtime"
---

# Python runtime on App Engine flexible environment

Product: App Engine flexible environment .NET
Coverage: MEDIUM

## Step 02 Summary

Python applications can run on the App Engine flexible environment.

## Extended Definition

App Engine flexible environment supports a Python runtime that is configured through the `app.yaml` file using flexible settings (`env: flex`) and runtime-specific Python settings, including the Python runtime version. When using Python, the app configuration includes an `entrypoint` command (for example, a `gunicorn` command) that tells App Engine how to start the application process.

## Evidence Summary

The official `app.yaml` reference confirms Python-specific flexible runtime configuration fields and startup requirements but delegates detailed runtime/version specifics to the separate Python runtime documentation.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml)

## Supporting Pages

### "app.yaml Configuration File \_|\_ App Engine flexible environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: STRONG
- Re-rank rationale: The page defines how to set the runtime in app.yaml, including Python runtime and Python runtime version/OS configuration details for App Engine flexible.

Evidence snippets:
- For example, if you want to forward TCP traffic from port 2222 : In the network settings of your app.yaml , include: network : forwarded ports : - 2222/tcp If you use the Python runtime, modify the app.yaml to include: entrypoint: gunicorn -b :$PORT -b :2222 main:app Specify a firewall rule in the Google Cloud console or using gcloud compute firewall-rules create to allow traffic from any source ( 0.0.0.0/0 ) and from tcp:2222 .
- For example, to skip files whose names end in .bak , add a skip files section like the following: skip files : - ^. \.bak$ Runtime-specific settings See the Python runtime page to learn more about specifying a Python interpreter using the runtime config settings.
- See the supported versions and the default values on the Python runtimes page. env: flex Required: Select the flexible environment. entrypoint The command to start your application.
- For more information and an example, see Python runtime and Configuring your app with app.yaml . runtime config Specifies the Python runtime version.

