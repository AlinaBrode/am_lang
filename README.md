# Armenian Language MVP

This repository contains a minimal React + Flask project for experimenting with Armenian language learning tools.

- Includes basic trainers for the alphabet, words and phrases with EN/RU translation switch, plus an "Interesting notes" section.
## Frontend
- Vite + React 18 + TypeScript
- Tailwind CSS for styling
- React Router for navigation

To develop:
```bash
cd frontend
npm install
npm run dev
```

To deploy the HTML frontend to Firebase Hosting:
```bash
npm --prefix frontend run build && firebase deploy --only hosting
```

## Backend
- Python 3.11 Flask API
- `/tts` endpoint uses Google Cloud Text-to-Speech

To run locally:
```bash
cd api
pip install -r requirements.txt
python main.py
```

### Google Cloud credentials
The Text-to-Speech client requires credentials specified by `GOOGLE_APPLICATION_CREDENTIALS`. Create a service account and download a JSON key, then set the environment variable before running the API:
```bash
export GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json
```
See the [official docs](https://cloud.google.com/text-to-speech/docs/before-you-begin) for full setup instructions.

### Voice configuration
The TTS voice can be changed via environment variables:
- `TTS_LANGUAGE_CODE` (default `ru-RU`)
- `TTS_VOICE_NAME` (default `ru-RU-Wavenet-A`)

### Docker
A `.dockerignore` file keeps the API image small. Build with:
```bash
cd api
docker build -t am-lang-api .
```
