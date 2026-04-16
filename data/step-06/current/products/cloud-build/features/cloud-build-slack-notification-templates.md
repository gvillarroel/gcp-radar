---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.856Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build Slack notification templates"
feature_slug: "cloud-build-slack-notification-templates"
latest_feature_date: "2022-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events"
  - "https://docs.cloud.google.com/docs/buildpacks/python"
  - "https://docs.cloud.google.com/docs/buildpacks/nodejs"
keywords:
  - "customizable"
  - "notification"
  - "slack"
  - "templates"
  - "notifications"
  - "supports"
---

# Cloud Build Slack notification templates

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build now supports customizable Slack notifications using notifier templates.

## Extended Definition

Cloud Build now supports customizable Slack notifications using notifier templates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)
- [https://docs.cloud.google.com/docs/buildpacks/nodejs](https://docs.cloud.google.com/docs/buildpacks/nodejs)

## Supporting Pages

### "Automate builds in response to Pub/Sub events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- Source ID: `site-docs-root-2`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Pub/Sub topic : Select the gcs topic from the drop-down menu or manually create the topic using instructions in Configuring Pub/Sub notifications for Cloud Storage .
- Pub/Sub topic : Select the gcr topic from the drop-down menu or manually create the topic using instructions in Configuring Pub/Sub notifications .
- To see more examples of the Pub/Sub notification payload, see Notification examples .
- To see more examples of the Pub/Sub notification payload, see Notification examples .

### Build a Python application \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)
- Source ID: `site-docs-reference`
- Final score: 37
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported buildpacks configurations Python buildpacks supports the following configurations: pip buildpack : Installs dependencies directly from pyproject.toml if it detects all the following conditions: A pyproject.toml file is present in the root directory and you don't configure high-precedence tools such as a poetry.lock file, a [tool.poetry] section, or a uv.lock file.
- Example: pack build sample-python \ --builder gcr.io/buildpacks/builder --env "GOOGLE ENTRYPOINT='gunicorn --bind :$PORT main:app'" Environment Variables The Python buildpack supports the following environment variables to customize your container PIP <key> See pip documentation .
- You set the GOOGLE PYTHON PACKAGE MANAGER environment variable to pip . uv buildpack : Supports Python projects you manage with uv .
- The Python buildpack supports modern web frameworks such as FastAPI , Gradio , Streamlit , and Agent Development Kit (ADK) .

### Building a Node.js application \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/nodejs](https://docs.cloud.google.com/docs/buildpacks/nodejs)
- Source ID: `site-docs-reference`
- Final score: 33
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specify the yarn version in the engines.yarn field of your package.json file. buildpack supports Yarn2 PnP mode if your project includes a .yarn/cache folder.
- Bun package manager The Node.js buildpack supports the Bun package manager, google.nodejs.bun buildpack for installing dependencies.
- The Node.js buildpack supports the following environment variables to customize your container.
- This variable supports values such as, npm , yarn , pnpm , or bun .

