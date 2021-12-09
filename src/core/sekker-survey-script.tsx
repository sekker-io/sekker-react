import {SekkerEmbedSurvey, SekkerMetadata} from "../hooks/use-sekker";

export const getSekkerCodeSurvey = (survey: SekkerEmbedSurvey) => {
  return `
    !function(){window.sekker=window.sekker||{},window.sekker.c=window.sekker.c||[],window.sekker.init=function(){window.sekker.c=[...window.sekker.c,arguments]};var e=document.createElement("script"),n=document.getElementsByTagName("script")[0].parentNode;e.async=1,e.src="https://sdk.sekker.io/bundle.js?"+Date.now(),n.appendChild(e)}();
      window.sekker.init({
        key: "${survey.apiKey}",
        url: "https://app.sekker.io/e/${survey.uniqueId}",
        userId: "${survey.customUserId}",
        metadata: {
            ${createMetadataString(survey.metadata)}
        }
    });
  `;
};

const createMetadataString = (metadata: SekkerMetadata) => {
  let metadataValues = "";

  Object.keys(metadata).forEach(key => {
    metadataValues += `${key}: "${metadata[key]}", `
  })

  return metadataValues
}
