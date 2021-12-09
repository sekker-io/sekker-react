![](assets/Artboard 102.png)
# @sekker/sekker-react
React lib to manage and initialize [Sekker](https://sekker.io/) surveys easily
## Getting Started
### Installation
Run the following to install the package
```
npm i @sekker/sekker-react -S
```

### Usage Example
```js
  const [surveyData, setSurveyData] = useState({
    surveys: [{
        apiKey: "SEKKER-EMBED-KEY",
        uniqueId: "SEKKER-SURVEY-ID",
        userId: "CUSTOM-USER-ID",
        metadata: {
            // for example
            email: "example@example.com"
        }
    }]
  });

  useSekker(surveyData);
```

Once initalizing Sekker embed using the `useSekker` hook the survey will be injected to the DOM and will behave
accordingly to what is defined in the Sekker dashboard.

| Property | Description |
| --- | ----------- |
| apiKey | Embed api write key, you can get it from Sekker dashboard, in the embed share step. |
| uniqueId | The survey unique identifier key, you can get it from Sekker dashboard, in the embed share step. |
| userId | Your system user id in order for you to identify response from your system users. |
| metadata | Add here any other key value data you would like to track regarding your user. |
