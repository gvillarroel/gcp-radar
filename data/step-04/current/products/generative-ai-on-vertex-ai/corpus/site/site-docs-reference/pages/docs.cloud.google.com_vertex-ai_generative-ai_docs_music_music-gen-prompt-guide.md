---
title: "Lyria music generation prompt guide \_|\_ Generative AI on Vertex AI \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/music/music-gen-prompt-guide
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/music/music-gen-prompt-guide
  title: "Lyria music generation prompt guide \_|\_ Generative AI on Vertex AI \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Generative AI on Vertex AI
Guides
Send feedback
Lyria music generation prompt guide
Stay organized with collections
Save and categorize content based on your preferences.
This guide provides examples of the types of music and audio soundscapes that
you can create using Lyria and shows you how to modify specific
parts of a prompt to produce different results.
Prompt guide overview
To use Lyria, you must provide a prompt
on of what you want Lyria to generate.
Lyria supports the following:
Multimodal prompts, including support for image and text inputs
Vocal generation for songs
Audio generation
Safety filters
Lyria applies safety filters across Vertex AI to
help ensure that generated audio doesn't contain offensive content or violate
usage guidelines. For example, prompts that violate responsible AI
guidelines are blocked. Lyria
also includes recitation checking and artist intent checks.
If you suspect abuse of Lyria or any generated output that
contains inappropriate material or inaccurate information, use the Report
suspected abuse on Google Cloud
form .
Basics for writing prompts
Good prompts are descriptive and clear. To get your generated music closer to
what you want, start with identifying your core musical idea and then refine
your idea by adding keywords and modifiers.
The following elements should be considered for your prompt:
Genre & Style: The primary musical category (for example, electronic
dance , classical , jazz , ambient ) and stylistic characteristics (for
example, 8-bit , cinematic , lo-fi ).
Mood & Emotion: The feeling that the music should evoke (for example,
energetic , melancholy , peaceful , tense ).
Instrumentation: Key instruments you want to hear (for example, piano ,
synthesizer , acoustic guitar , string orchestra , electronic drums ).
Tempo & Rhythm: The pace (for example, fast tempo , slow ballad , 120
BPM ) and rhythmic character (for example, driving beat , syncopated
rhythm , gentle waltz ).
(Optional) Arrangement/Structure: How the music progresses or layers
(for example, starts with a solo piano, then strings enter , crescendo
into a powerful chorus ).
(Optional) Soundscape/Ambiance: Background sounds or overall sonic
environment (for example, rain falling , city nightlife , spacious
reverb , underwater feel ).
(Optional) Production Quality: Desired audio fidelity or recording style
(for example, high-quality production , clean mix , vintage recording ,
raw demo feel ).
Examples of prompts and generated output
This section presents prompts and how the level of detail can affect the music.
Energetic electronic track
This example demonstrates using several elements in your prompt.
Prompt
Generated output
An energetic (mood) electronic dance track (genre) with a fast tempo
(tempo) and a driving beat (rhythm), featuring prominent synthesizers
(instrumentation) and electronic drums (instrumentation). High-quality
production (production quality).
Description: A 30-second instrumental track with a clear, punchy
electronic sound, upbeat rhythm, and a focus on synth melodies and a
strong drum presence.
Evolving ambient soundscape
These examples demonstrate revising your prompt for more specific results.
Prompt
Generated output
Analysis
Ambient music with synthesizers.
Description: A basic ambient piece primarily using synth pads. The
mood and structure are very general.
This is the first generated audio based on a minimal prompt.
A calm and dreamy (mood) ambient soundscape (genre/style) featuring layered
synthesizers (instrumentation) and soft, evolving pads
(instrumentation/arrangement). Slow tempo (tempo) with a spacious reverb
(ambiance/production). Starts with a simple synth melody, then adds layers
of atmospheric pads (arrangement).
Description: A more developed ambient track. The audio evokes a
peaceful, dreamy state with clear synth layers building slowly. The
spacious reverb enhances the atmospheric quality.
A more detailed prompt results in music that is more focused, with a
richer sonic environment and clear progression.
More tips for writing prompts
The following tips help you write effective prompts for Lyria:
Be descriptive and specific: Use adjectives and adverbs to paint a clear
sonic picture. The more detail, the better Lyria can
understand your intent.
Reference genres, moods, and styles: Clearly state the musical category,
desired feeling, and any stylistic characteristics.
Specify key instruments and rhythms: Mention important instruments and
describe the desired pace and rhythmic feel.
Iterate and experiment: If the first result isn't perfect, modify your
prompt by adding, removing, or changing keywords. See Introduction to
prompting for
general strategies.
Add more details to prompts
These examples show how to refine prompts by focusing on specific musical
elements.
Genre & style
Element Focus
Prompt
Generated output
Genre and Style
A cinematic orchestral piece in a heroic, fantasy adventure style, with a
grand, sweeping melody.
Description: Expect a full-sounding orchestral track with dramatic
swells and a strong, memorable theme, reminiscent of a film
score.
Mood & Instrumentation
Element Focus
Prompt
Generated output
Mood and Instrumentation
A peaceful and serene acoustic guitar piece, featuring a fingerpicked
style, perfect for meditation.
Description: A gentle, calming instrumental track featuring a solo
acoustic guitar playing a simple, soothing melody.
Tempo & Rhythm
Element Focus
Prompt
Generated output
Tempo and Rhythm
A tense, suspenseful underscore with a very slow, creeping tempo and a
sparse, irregular rhythm. Primarily uses low strings and subtle
percussion.
Description: An atmospheric piece designed to build tension,
characterized by its slow pace, unsettling rhythmic elements, and dark
string textures.
Negative prompts
Negative prompts help specify elements to exclude from the music. Describe what
you want to discourage the model from generating.
Important: Negative prompts are not supported for Lyria 3 models.
The API parameter is negative_prompt .
List elements to exclude, for example, negative_prompt: "vocals, excessive
cymbal crashes, distorted guitar" .
Prompt Scenario
Generated output
Prompt: "A calm, relaxing piano piece for studying."
(Without negative prompt)
Description: The piano piece is generally calm, but might include
some unexpected louder dynamics or complex runs that could be
distracting for study.
Prompt: "A calm, relaxing piano piece for studying."
Negative Prompt: "complex melodies, loud dynamics, sudden changes,
drums, vocals"
Description: The resulting piano piece is consistently calm and
simple, avoiding distracting elements. The mood is more even and
suitable for background focus.
Detailed structure
You can provide detailed prompts that describe the structure of a song to guide
the music over multiple parts.
The following are parameters that you can use to generate detailed music
structures:
Timestamps : Provide timestamps in [mm:ss - mm:ss] format to dictate
events in a piece.
Song key : Describe the key that a segment of a song is set in. For
example, A major .
Beat rate : Describe the desired beats per minute. For example, 150
BPM .
Intensity : Describe the intensity of a song segment. For example,
Intensity: 1/10 (Very low) .
The following is an example of a prompt with detailed structure to create a
multi-part song:
Create a 60-second instrumental track at 80 BPM. The feeling is nostalgic,
introspective, and atmospheric - a warm, comforting melancholy with a soft,
minor-key feel. The sound should be centered around a warm, slightly overdriven
Fender Rhodes and soft, ethereal synth pads. The rhythm is a minimalist,
laid-back drum beat with a relaxed, human feel. Weave subtle atmospheric
textures, like soft static or room tone, through the entire track for texture.
[0:00 - 0:12] Intro: Begin atmospherically with just the Fender Rhodes
playing soft, hazy chords. Drench it in warm reverb and introduce a light
atmospheric texture. The mood is like a memory coming into focus. Intensity:
1/10 (Very Low)
[0:12 - 0:24] Verse 1: The laid-back drum beat enters with a simple kick and
snare. A soft, ethereal synth pad swells in the background. A clean, subtle
sub-bass joins, adding depth. The Rhodes melody becomes slightly more defined,
following a simple, melancholic progression. Intensity: 3/10 (Low)
[0:24 - 0:36] Build: The groove deepens as a gentle, syncopated hi-hat is added.
A simple, memorable lead melody appears, played on a warm, rounded synth. This
section should feel like the gentle peak of the track's focus, with a chord
progression that builds a sense of hopeful tension. Intensity: 5/10 (Medium)
[0:36 - 0:48] Chorus: Gracefully pull back the intensity. The synth lead melody
fades out, returning focus to the core Rhodes groove and the drums. This gives
the track space to breathe, resolving the tension from the build. Intensity:
4/10 (Medium-Low)
[0:48 - 1:00] Outro: The drums and bass drop out completely. The track fades out
leaving only the Rhodes playing spacious chords, the lingering synth pad, and
the persistent atmospheric texture. Intensity: 2/10 (Very Low)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
