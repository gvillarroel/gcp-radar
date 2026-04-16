---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.782Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Recursive requirements.txt support"
feature_slug: "recursive-requirements-txt-support"
latest_feature_date: "2018-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/specifying-dependencies"
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/python3"
keywords:
  - "dependency"
  - "recursive"
  - "includes"
  - "requirements"
  - "supports"
  - "runtime"
---

# Recursive requirements.txt support

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

The Python 3 runtime supports recursive includes in requirements.txt dependency files.

## Extended Definition

The Python 3 runtime supports recursive includes in requirements.txt dependency files.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/python3/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/python3/specifying-dependencies)
- [https://docs.cloud.google.com/appengine/docs/standard/python3/runtime](https://docs.cloud.google.com/appengine/docs/standard/python3/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/python3](https://docs.cloud.google.com/appengine/docs/standard/python3)

## Supporting Pages

### Specifying dependencies | App Engine standard environment | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/python3/specifying-dependencies)
- Source ID: `feature-recovery-http`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Then, install dependencies: cd YOUR_SAMPLE_CODE_DIR pip install -r requirements.txt This ensures that when you run your app locally, only the dependencies that are declared in the requirements.txt file are available.
- You can use any Python web framework including the following: Flask Django Pyramid Bottle web.py Tornado To use a particular web framework, just add it to your requirements.txt : Flask == MAJOR .
- The dependencies installed by App Engine during deployment are based on the contents of the requirements.txt file, not the contents of the env/ directory.
- When you deploy to App Engine , the dependencies specified in the requirements.txt file will be installed automatically with your deployed app.

### Python 3 Runtime Environment | App Engine standard environment | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3/runtime](https://docs.cloud.google.com/appengine/docs/standard/python3/runtime)
- Source ID: `feature-recovery-http`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Dependencies During deployment, App Engine uses the Python package manager pip to install dependencies defined in the requirements.txt metadata file located in your project's root directory.
- Entrypoint best practices Ensure the Python module required to run the specified entrypoint in app.yaml is present in the requirements.txt file.
- If you have configured a Gunicorn web server entrypoint in the app.yaml file, you must also add gunicorn to your requirements.txt file.
- Add gunicorn to the requirements.txt file only if a gunicorn endpoint is explicitly specified in the app.yaml file.

### "Python 3 Runtime Environment \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3](https://docs.cloud.google.com/appengine/docs/standard/python3)
- Source ID: `site-docs-reference-4`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Dependencies During deployment, App Engine uses the Python package manager pip to install dependencies defined in the requirements.txt metadata file located in your project's root directory.
- Entrypoint best practices Ensure the Python module required to run the specified entrypoint in app.yaml is present in the requirements.txt file.
- If you have configured a Gunicorn web server entrypoint in the app.yaml file, you must also add gunicorn to your requirements.txt file.
- Add gunicorn to the requirements.txt file only if a gunicorn endpoint is explicitly specified in the app.yaml file.

