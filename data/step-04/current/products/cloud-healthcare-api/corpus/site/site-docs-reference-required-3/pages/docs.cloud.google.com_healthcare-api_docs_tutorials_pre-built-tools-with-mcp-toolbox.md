---
title: "Use the Cloud Healthcare API with MCP and other agents \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/healthcare-api/docs/tutorials/pre-built-tools-with-mcp-toolbox
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources
source_metadata:
  url: https://docs.cloud.google.com/healthcare-api/docs/tutorials/pre-built-tools-with-mcp-toolbox
  title: "Use the Cloud Healthcare API with MCP and other agents \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Cloud Healthcare API
Guides
Send feedback
Use the Cloud Healthcare API with MCP and other agents
Stay organized with collections
Save and categorize content based on your preferences.
Note: MCP Toolbox for Databases is currently in beta (pre-v1.0) and may see
breaking changes until the first stable release (v1.0).
This guide shows you how to use the MCP Toolbox for Databases to
connect the Cloud Healthcare API to a variety of Integrated Development
Environments (IDEs) and developer tools. It uses the Model Context Protocol
(MCP) , an open protocol for
connecting large language models (LLMs) to data sources like healthcare datasets,
allowing you to search and interact with healthcare data directly from your
existing tools.
This guide demonstrates the connection process for the following IDEs:
Cursor
Windsurf (formerly Codeium)
Visual Studio Code (Copilot)
Cline (VS Code extension)
Claude desktop
Claude code
Before you begin
In the Google Cloud console, on the project selector page , select or create a Google Cloud project.
Make sure that billing is enabled for your Google Cloud project .
Enable the Cloud Healthcare API in the Google Cloud project .
Configure the required roles and permissions to complete this task. You will need the Healthcare FHIR Resource Reader role ( roles/healthcare.fhirResourceReader ) and the Healthcare DICOM Viewer role ( roles/healthcare.dicomViewer ), or equivalent IAM permissions to connect to the project.
Configure Application Default Credentials (ADC) for your environment.
Install the MCP Toolbox
The toolbox acts as an open-source
Model Context Protocol (MCP)
server that sits between your IDE and the Cloud Healthcare API, providing a
secure and efficient control plane for your AI tools.
Download the latest version of the MCP Toolbox as a binary. Select the
binary corresponding
to your operating system (OS) and CPU architecture. You must use MCP Toolbox
version v0.19.1 or later:
linux/amd64
curl -O https://storage.googleapis.com/genai-toolbox/ VERSION /linux/amd64/toolbox
Replace VERSION with the MCP Toolbox
version—for example v0.19.1 .
macOS darwin/arm64
curl -O https://storage.googleapis.com/genai-toolbox/ VERSION /darwin/arm64/toolbox
Replace VERSION with the MCP Toolbox
version—for example v0.19.1 .
macOS darwin/amd64
curl -O https://storage.googleapis.com/genai-toolbox/ VERSION /darwin/amd64/toolbox
Replace VERSION with the MCP Toolbox
version—for example v0.19.1 .
windows/amd64
curl -O https://storage.googleapis.com/genai-toolbox/ VERSION /windows/amd64/toolbox
Replace VERSION with the MCP Toolbox
version—for example v0.19.1 .
Make the binary executable:
chmod +x toolbox
Verify the installation:
./toolbox --version
Set up clients and connections
This section explains how to connect the Cloud Healthcare API to your tools.
Claude code
Install Claude Code .
Create a .mcp.json file in your project root, if it
doesn't exist.
Add the configuration, replace the environment variables with your
values, and save:
{
"mcpServers": {
"healthcare": {
"command": "./PATH/TO/toolbox",
"args": ["--prebuilt","cloud-healthcare","--stdio"],
"env": {
"HEALTHCARE_PROJECT": " PROJECT_ID ",
"HEALTHCARE_REGION": " REGION ",
"HEALTHCARE_DATASET": " DATASET_ID "
}
}
}
}
Restart Claude Code to load the new settings. When it reopens, the
tool provides an indication that the configured MCP server has been
detected.
Claude desktop
Open Claude Desktop and
navigate to Settings .
In the Developer tab, click Edit Config to open the
configuration file.
Add the configuration, replace the environment variables with your
values, and save:
{
"mcpServers": {
"healthcare": {
"command": "./PATH/TO/toolbox",
"args": ["--prebuilt","cloud-healthcare","--stdio"],
"env": {
"HEALTHCARE_PROJECT": " PROJECT_ID ",
"HEALTHCARE_REGION": " REGION ",
"HEALTHCARE_DATASET": " DATASET_ID "
}
}
}
}
Restart Claude Desktop.
The new chat screen displays a hammer (MCP) icon with the new MCP
server.
Cline
Open the Cline extension
in VS Code and tap the MCP Servers icon.
Tap Configure MCP Servers to open the configuration file.
Add the following configuration, replace the environment variables
with your values, and save:
{
"mcpServers": {
"healthcare": {
"command": "./PATH/TO/toolbox",
"args": ["--prebuilt","cloud-healthcare","--stdio"],
"env": {
"HEALTHCARE_PROJECT": " PROJECT_ID ",
"HEALTHCARE_REGION": " REGION ",
"HEALTHCARE_DATASET": " DATASET_ID "
}
}
}
}
A green active status appears after the server connects successfully.
Cursor
Create the .cursor directory in your project root if it
doesn't exist.
Create the .cursor/mcp.json file if it doesn't exist and
open it.
Add the following configuration, replace the environment variables
with your values, and save:
{
"mcpServers": {
"healthcare": {
"command": "./PATH/TO/toolbox",
"args": ["--prebuilt","cloud-healthcare","--stdio"],
"env": {
"HEALTHCARE_PROJECT": " PROJECT_ID ",
"HEALTHCARE_REGION": " REGION ",
"HEALTHCARE_DATASET": " DATASET_ID "
}
}
}
}
Open Cursor and navigate to
Settings > Cursor Settings > MCP . A green active status
appears when the server connects.
Visual Studio Code (Copilot)
Open
VS Code
and create a .vscode directory in your project root if it
does not exist.
Create the .vscode/mcp.json file if it doesn't exist,
and open it.
Add the following configuration, replace the environment variables
with your values, and save:
{
"servers": {
"healthcare": {
"command": "./PATH/TO/toolbox",
"args": ["--prebuilt","cloud-healthcare","--stdio"],
"env": {
"HEALTHCARE_PROJECT": " PROJECT_ID ",
"HEALTHCARE_REGION": " REGION ",
"HEALTHCARE_DATASET": " DATASET_ID "
}
}
}
}
Reload the VS Code window. The MCP-compatible extension automatically
detects the configuration and starts the server.
Windsurf
Open Windsurf and
navigate to the Cascade assistant.
Click the MCP icon, then click Configure to open the
configuration file.
Add the following configuration, replace the environment variables
with your values, and save:
{
"mcpServers": {
"healthcare": {
"command": "./PATH/TO/toolbox",
"args": ["--prebuilt","cloud-healthcare","--stdio"],
"env": {
"HEALTHCARE_PROJECT": " PROJECT_ID ",
"HEALTHCARE_REGION": " REGION ",
"HEALTHCARE_DATASET": " DATASET_ID "
}
}
}
}
Note: The HEALTHCARE_PROJECT environment variable specifies the default Google Cloud Project ID for the MCP Toolbox to use. All operations, such as searching for patients or looking up DICOM instances, are run within this project.
Use the tools
Your AI tool is now connected to the Cloud Healthcare API using MCP. Try asking your AI assistant to search for FHIR patients, retrieve records for a given patient, look up a DICOM study, or list the DICOM stores in the dataset.
The following tools are available to the LLM:
get_dataset : Retrieves a dataset's details.
list_datasets : Lists health datasets in a project.
list_fhir_stores : Lists the FHIR stores in the given dataset.
list_dicom_stores : Lists the DICOM stores in the given dataset.
get_fhir_store : Gets the configuration of the specified FHIR store.
get_fhir_store_metrics : Gets metrics associated with the FHIR store.
get_fhir_resource : Gets the contents of a FHIR resource.
get_fhir_resource_version : Gets the contents of a version (current or historical) of a FHIR resource.
fhir_patient_everything : Retrieves a FHIR Patient resource and resources related to that patient.
fhir_patient_search : Searches for FHIR patient resources in the FHIR store according to criteria specified.
get_dicom_store : Gets the configuration of the specified DICOM store.
get_dicom_store_metrics : Gets metrics associated with the DICOM store.
search_dicom_studies : Returns a list of matching DICOM studies.
search_dicom_series : Returns a list of matching DICOM series.
search_dicom_instances : Returns a list of matching DICOM instances.
retrieve_dicom_instance_rendered : Returns a base64-encoding of a rendered image in JPEG format for a DICOM instance associated with the given study, series, and SOP Instance UID.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
