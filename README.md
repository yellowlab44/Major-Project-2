# Stock Market Lookup (Vanilla JS)

Fetch quotes, search by symbol/company, track a watchlist, and store shares-owned with localStorage.

## Stack
- Vanilla HTML/CSS/JS
- Node/Express proxy (keeps API key secret)
- Data: Twelve Data `/symbol_search`, `/quote`, `/time_series`

## Setup
1. `npm init -y && npm i express node-fetch dotenv`
2. Copy `.env.example` to `.env` and set `TWELVE_DATA_KEY`.
3. Run: `node server.js`
4. Open: http://localhost:5173

## Notes
- **Do not commit** `.env` or any API keys.
- Switch providers by editing `server.js` and `api.js` (e.g., Alpha Vantage’s `SYMBOL_SEARCH` and `TIME_SERIES_*`).  [oai_citation:3‡Alpha Vantage](https://www.alphavantage.co/documentation/?utm_source=chatgpt.com)

## Rubric mapping
- **API Connection**: `api.js` uses `fetch` (GET) with query params (`/api/search`, `/api/quote`, `/api/spark`).
- **HTTP Methods**: GET for reads (appropriate). You can add POST (e.g., server-side favorites) for bonus.
- **Async/Await**: All network calls use async/await + try/catch.
- **Status Checks**: `api.js` throws on `!res.ok`; UI shows user-friendly messages.
- **JSON Processing**: Normalize search results; format quote fields; compute portfolio value.
- **Dynamic UI**: Renders matches, quote, chip up/down, sparkline SVG.
- **User Input**: Validates search length, trims input.
- **Responsive**: Grid collapses on small screens.
- **Persistence**: localStorage for watchlist + shares.

## Optional extras
- Show company logos (if you know domain) via Clearbit Logo: `https://logo.clearbit.com/apple.com` (no key).
- Cache last-viewed symbol in localStorage and restore on load.
