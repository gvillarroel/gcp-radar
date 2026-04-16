---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.704Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Subject Customization"
feature_slug: "subject-customization"
latest_feature_date: "2024-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps"
keywords:
  - "subject"
  - "customization"
  - "mode"
  - "for"
  - "adapting"
  - "generated"
  - "images"
  - "around"
---

# Subject Customization

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

A customization mode for adapting generated images around a subject such as a product, person, or animal companion.

## Extended Definition

A customization mode for adapting generated images around a subject such as a product, person, or animal companion.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)

## Supporting Pages

### "Generate and edit images on Vertex AI \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Client () TODO(developer): Update and un-comment below line output file = "output-image.png" image = client . models . generate images ( model = "imagen-4.0-generate-001" , prompt = "A dog reading a newspaper" , config = GenerateImagesConfig ( image size = "2K" , ), ) image . generated images [ 0 ] . image . save ( output file ) print ( f "Created output image using { len ( image . generated images [ 0 ] . image . image bytes ) } bytes" ) Example response: Created output image using 1234567 bytes REST Set environment variables: export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT # Replace with your Google Cloud project export GOOGLE CLOUD LOCATION = us-central1 # Replace with the appropriate location for your project Run the following: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ "https:// ${ GOOGLE CLOUD LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ GOOGLE CLOUD PROJECT } /locations/ ${ GOOGLE CLOUD LOCATION } /publishers/google/models/imagen-4.0-generate-preview-05-20:predict" -d \ $'{ "instances": [ { "prompt": "a cat reading a book" } ], "parameters": { "sampleCount": 1 } }' The model returns a base64 image bytes object.
- Prompts for preceding images These images are generated using the general Imagen 3 image generation model ( imagen-3.0-generate-002 ) and the following prompts: Claymation scene.
- The following samples show a simplified case for generating images, but you can use additional parameters to tailor the generated images to your needs.
- API reference overview : To view an overview of the API options for image generation and editing, see the imagegeneration model API reference .

### "Prompt and image attribute guide \_|\_ Generative AI on Vertex AI \_|\_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Camera Proximity - Close up, taken from far away Prompt: A close-up photo of coffee beans Prompt: A zoomed out photo of a small bag of coffee beans in a messy kitchen Camera Position - aerial, from below Prompt: aerial photo of urban city with skyscrapers Prompt: A photo of a forest canopy with blue skies from below Lighting - natural, dramatic, warm, cold Prompt: studio photo of a modern arm chair, natural lighting Prompt: studio photo of a modern arm chair, dramatic lighting Camera Settings - motion blur, soft focus, bokeh, portrait Prompt: photo of a city with skyscrapers from the inside of a car with motion blur Prompt: soft focus photograph of a bridge in an urban city at night Lens types - 35mm, 50mm, fisheye, wide angle, macro Prompt: photo of a leaf, macro lens Prompt: street photography, new york city, fisheye lens Film types - black and white, polaroid Prompt: a polaroid portrait of a dog wearing sunglasses Prompt: black and white photo of a dog wearing sunglasses Image source: Each image was generated using its corresponding text prompt with the Imagen 3 model.
- Prompt (no negative prompt): 4K video game concept art, urban jungle, cyberpunk city, detailed rendering Prompt: 4K video game concept art, urban jungle, cyberpunk city, detailed rendering Negative prompt: greenery, plants, forest, trees Prompt (no negative prompt): Illustration of a mythical wyvern flying over mountains Prompt: Illustration of a mythical wyvern flying over mountains Negative prompt: snow, frost Photorealistic images Different versions of the image generation model might offer a mix of artistic and photorealistic output.
- Prompt: a winning touchdown, fast shutter speed, movement tracking Model: Imagen 3 ( imagen-3.0-generate-002 ) Prompt: A deer running in the forest, fast shutter speed, movement tracking Model: Imagen 3 ( imagen-3.0-generate-002 ) Wide-angle Use case Lens type Focal lengths Additional details Astronomical, landscape (wide-angle) Wide-angle 10-24mm Long exposure times, sharp focus, long exposure, smooth water or clouds Using several keywords from the table, Imagen can generate the following wide-angle images.
- Prompt: A park in the spring next to a lake Prompt: A park in the spring next to a lake, the sun sets across the lake, golden hour Prompt: A park in the spring next to a lake, the sun sets across the lake, golden hour, red wildflowers Imagen 3 prompt writing View Imagen for Generation model card Imagen 3 can transform your ideas into detailed images, whether your prompts are short or long and detailed.

### "Veo on Vertex AI video generation prompt guide \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- The following are examples of subjects that you can use: People : Generic descriptors : man, woman, elderly person Specific professions : "a seasoned detective", "a joyful baker", "a futuristic astronaut" Historical figures Mythical beings : a "mischievous fairy", "a stoic knight" Animals or creatures : Specific breeds of animals : "a playful Golden Retriever puppy", "a majestic bald eagle", "a sleek black panther" Fantastical creatures : "a miniature dragon with iridescent scales", "a wise, ancient talking tree" Objects : Everyday items : "a vintage typewriter", "a steaming cup of coffee", "a worn leather-bound book" Vehicles : "a classic 1960s muscle car", "a futuristic hovercraft", "a weathered pirate ship" Abstract shapes : "glowing orbs", "crystalline structures" You can combine people, animals, objects, or any mix of them in the same video (for example, "A group of diverse friends laughing around a campfire while a curious fox watches from the shadows", "a busy marketplace scene with vendors and shoppers").
- For example, "whip pan from one arguing character to another." Arc shot : the camera moves in a circular or semi-circular path around the subject.
- Subject The subject is the "who" or "what" that the action of your generated video revolves around.
- For example, "fisheye lens view from inside a car, capturing the driver and the entire curved dashboard and windscreen." Vertigo effect (dolly zoom) : a camera effect achieved by dollying the camera towards or away from a subject while simultaneously zooming the lens in the opposite direction.

### "Grounding with Google Maps in Vertex AI \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- The Routing tool supports the following: Modes of transportation : Routing for driving, walking, bicycling, transit, and two-wheeled motorized vehicles (not all travel modes are available in all countries) Multiple waypoints : Up to 13 intermediate stops between origin and destination Real-time traffic : Accounting for current traffic conditions to provide accurate "live" travel times rather than static averages The following are examples of the types of questions that the Routing tool supports: Proximity based on travel time : "What are some American restaurants within a 10-minute walk from the Hilton Hotel on 1335 6th Ave in NYC?" Commute estimation : "How long does it take to take public transit from Pike Place Market to Capitol Hill in Seattle?" Understand the response When a prompt triggers the Routing tool, the model generates a natural language answer backed by structured metadata.
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent Request JSON body: { "contents": [{ "role": "user", "parts": [{ "text": " PROMPT " }] }], "tools": [{ "googleMaps": { "enableWidget": " ENABLE WIDGET " } }], "toolConfig": { "retrievalConfig": { "latLng": { "latitude": LATITUDE , "longitude": LONGITUDE }, "languageCode": "en US" } }, "model": "projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" Select-Object -Expand Content You should receive a JSON response similar to the following: { "candidates": [ { "content": { "role": "model", "parts": [ { "text": "\"The Italian Place\" in Alexandria, VA, is good for children and offers takeout.
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

