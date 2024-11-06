# Example: Realtime Chat Application on the BART API

This is a simple example of exposing [PromptQL](https://promptql.hasura.io/) to real-time public data using the BART API. The BART API is a public API
that provides real-time data on the Bay Area Rapid Transit system. This example demonstrates how to use PromptQL to
create a real-time chat application that allows a user to talk to the BART API and get real-time information on
departures.

You can request access to a deployed version of this project [here](https://console.hasura.io/project/coherent-jennet-3826)!

## Getting Started

> [!NOTE]
> Before you begin, make sure you have the latest version of the DDN CLI installed. You can install the CLI by
> following the instructions in the [CLI documentation](https://promptql.hasura.io/docs/installation).

### Step 1. Update the CLI to the alpha release

```bash
ddn update-cli --version v2.12.0-alpha.2
```

### Step 2. Clone this repo

Using http:

```bash
git clone https://github.com/robertjdominguez/example-promptql-bart.git
```

or using ssh:

```bash
git clone git@github.com:robertjdominguez/example-promptql-bart.git
```

### Step 3. Set up your .env file

```bash
cd example-promptql-bart
cp .env.example .env
```

Add your Anthropic API key to the `.env` file:

```bash
echo "ANTHROPIC_API_KEY=your-anthropic-api-key" >> .env
```

> [!NOTE]
> You can generate an API key [here](https://console.anthropic.com/settings/keys).

### Step 4. Initialize a DDN project

```bash
ddn project init
```

### Step 5. Start PromptQL

First, create a build:

```bash
ddn supergraph build local
```

Then, start your local services:

```bash
ddn run docker-start
```

### Step 6. Open the console

In another terminal window, run the following command from your project's directory to open the console:

```bash
ddn console --local
```

### Step 7. Talk to BART!

From the console, try asking a question, like:

```plaintext
> What time is the next train arriving at Embarcadero?
> If I leave 576 Folsom St now, can I make the next train at Montgomery?
```
