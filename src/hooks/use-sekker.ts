import {useEffect} from "react";
import {getSekkerCodeSurvey} from "../core/sekker-survey-script";

export type SekkerMetadataValue = string | boolean | number;
export type  SekkerMetadata = Record<string, SekkerMetadataValue>

export type SekkerEmbedSurvey = {
    apiKey: string;
    uniqueId: string;
    customUserId: string;
    metadata: SekkerMetadata;
}

export type SekkerEmbed = {
    surveys: SekkerEmbedSurvey[];
}

const getScriptKey = (uniqueId: string) => `sekker-script-${uniqueId}`;

export const useSekker = (embed: SekkerEmbed) => {
    useEffect(() => {
        embed.surveys.forEach(survey => {
            const scriptKey = getScriptKey(survey.uniqueId);
            let sekkerScript = document.getElementById(scriptKey)

            if (!sekkerScript) {
                sekkerScript = document.createElement("script");
                sekkerScript.setAttribute("id", scriptKey);
                sekkerScript.innerHTML = getSekkerCodeSurvey(survey);
                document.body.append(sekkerScript);
            } else {
                sekkerScript.innerHTML = getSekkerCodeSurvey(survey);
            }
        });

    }, [embed.surveys]);
};
