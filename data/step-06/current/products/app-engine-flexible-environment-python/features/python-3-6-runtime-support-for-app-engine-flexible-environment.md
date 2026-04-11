---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:45:54.303Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "Python 3.6 runtime support for App Engine flexible environment"
feature_slug: "python-3-6-runtime-support-for-app-engine-flexible-environment"
latest_feature_date: "2017-05-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml"
  - "https://docs.cloud.google.com/appengine/docs/flexible/go/runtime"
keywords:
  - "Python language runtime"
  - "3.6 runtime_config"
  - "runtime_config"
  - "python3.6"
  - "py36"
  - "beta runtime support"
  - "python_version: 3.6"
  - "Python 3.6 runtime"
---

# Python 3.6 runtime support for App Engine flexible environment

Product: App Engine flexible environment Python
Coverage: LOW

## Step 02 Summary

App Engine flexible environments added Beta support for Python 3.6 via app.yaml runtime_config python_version: 3.6.

## Extended Definition

In the App Engine flexible environment, the Python runtime version is configured in `app.yaml` through runtime configuration settings (runtime config), which the documentation identifies as the mechanism for selecting a supported Python version. The provided excerpts confirm that `app.yaml` is the control point for choosing Python interpreter/runtime behavior and point to dedicated Python runtime guidance, but they do not explicitly show Python 3.6 or any beta-specific support details in the extracted text.

## Evidence Summary

These pages establish that App Engine flexible uses `app.yaml` runtime config to specify runtime versions, while the snippets here do not directly evidence a Python 3.6 beta announcement.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml)
- [https://docs.cloud.google.com/appengine/docs/flexible/go/runtime](https://docs.cloud.google.com/appengine/docs/flexible/go/runtime)

## Supporting Pages

### "app.yaml Configuration File \_|\_ App Engine flexible environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: The document discusses Python runtime configuration in app.yaml and Python runtime versioning, which is directly related to runtime support, though it does not explicitly confirm Python 3.6 beta support.

Evidence snippets:
- For example, to skip files whose names end in .bak , add a skip files section like the following: skip files : - ^. \.bak$ Runtime-specific settings See the Python runtime page to learn more about specifying a Python interpreter using the runtime config settings.
- Starting in Python version 3.8, you must specify the version of the operating system. runtime config : operating system : "ubuntu24" runtime version : "3.14" operating system : Specifies the version of the Ubuntu operating system that you want to use.
- For more information and an example, see Python runtime and Configuring your app with app.yaml . runtime config Specifies the Python runtime version.
- To specify a supported version of Python or to use the new Python runtimes, see the runtime config setting .

### "The Go runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/go/runtime](https://docs.cloud.google.com/appengine/docs/flexible/go/runtime)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Examples To specify Go 1.26 on Ubuntu 24: runtime : go env : flex runtime config : operating system : "ubuntu24" runtime version : "1.26" To specify the latest supported Go version on Ubuntu 24: runtime : go env : flex runtime config : operating system : "ubuntu24" Your app uses the latest stable release of the version that is specified in your app.yaml file.
- Choosing Go 1.26 in your app.yaml file results in the latest patch version of Go 1.26 available. runtime : go env : flex runtime config : operating system : "ubuntu24" runtime version : "1.26" See the app.yaml reference for more information.
- Include the runtime config and operating system settings in your app.yaml file to specify an operating system.

