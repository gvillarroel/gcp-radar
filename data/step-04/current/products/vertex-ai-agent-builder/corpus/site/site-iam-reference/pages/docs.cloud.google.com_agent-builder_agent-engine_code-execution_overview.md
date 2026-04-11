---
title: "Vertex AI Agent Engine Code Execution \_|\_ Vertex AI Agent Builder \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity
source_metadata:
  url: https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/overview
  title: "Vertex AI Agent Engine Code Execution \_|\_ Vertex AI Agent Builder \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Agent Builder
Guides
Send feedback
Vertex AI Agent Engine Code Execution
Stay organized with collections
Save and categorize content based on your preferences.
Many agent tasks, like financial calculations and data science workflows require
an agent to generate and execute code. Agent Engine Code Execution lets your
agent to run code in a secure, isolated, and managed sandbox environment.
Features of Code Execution include:
Sandboxes can be created and execute code in under a second.
Sandboxes support file input and output up to 100MB for the entire request
or response.
Sandboxes maintain their execution state (memory) for up to 14 days. This
time to live (TTL) setting is configurable.
To see an example of using ,
run the "Get started with on " notebook in one of the following
environments:
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
Note: Code Execution is supported in only the us-central1 region.
Code Execution is part of the Vertex AI Agent Engine suite.
However, you don't need to deploy your agent to Vertex AI Agent Engine
to use Code Execution. Your agent can be running anywhere, even locally.
Code Execution works with any agent framework and any generative model.
Here are the major operations for working with a Code Execution sandbox:
Create sandbox : creates a secure, isolated space to
run untrusted or potentially harmful code. This isolation reduces
security risks by preventing the code from touching your system's resources,
files, or network. A sandbox is vital when you need to run code safely, such
as for data science agents, orchestration scripts, or during development
testing. The sandbox offers a limited file system and no network access.
Get sandbox : shows the configuration and status of a specific
Code Execution sandbox. You can check details like its current
state (for example, running or stopped) and time to live (TTL). This lets
you track your sandboxes and verify their status before or after running
code.
List sandboxes : list all of the Code Execution sandboxes in your
project. You can filter the results by criteria like sandbox status or type.
This helps with checking, monitoring, and managing many sandboxes in your
project.
Execute code : sends your code along with any required input files to the
sandbox for safe execution. The response includes the results, such as
standard output ( stdout ), standard error ( stderr ), and any files the code
generates. The sandbox can also maintain state , which allows subsequent
Execute Code calls to build on previous calls. This is crucial for
interactive sessions or complex tasks that need the environment to maintain
state across several code runs.
Supported libraries
The code execution sandbox includes the following libraries. You can't
install your own libraries.
attrs==25.3.0
chess==1.11.2
contourpy==1.3.1
fpdf==1.7.2
geopandas==1.0.1
imageio==2.37.0
jinja2==3.1.6
joblib==1.4.2
jsonschema==4.23.0
jsonschema-specifications==2024.10.1
lxml==5.3.1
matplotlib==3.10.1
mpmath==1.3.0
numpy==2.1.3
opencv-python==4.11.0.86
openpyxl==3.1.5
ortools==9.14.6206
packaging==24.0
pandas==2.2.3
pillow==11.1.0
plotly==6.1.2
protobuf==6.31.1
PyPDF2==3.0.1
pylatex==1.4.2
pyparsing==3.2.1
python-dateutil==2.9.0.post0
python-docx==1.1.2
python-pptx==1.0.2
reportlab==4.3.1
scikit-learn==1.6.1
scipy==1.15.2
seaborn==0.13.2
six==1.17.0
striprtf==0.0.28
sympy==1.13.3
tabulate==0.9.0
tensorflow==2.20.0
toolz==1.0.0
xlrd==2.0.1
XlsxWriter==3.2.0
What's next
Code Execution quickstart
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
