import { OpenAIStream } from "@/utils";

export const config = {
    runtime: "edge",
};

export default async function handler(req, res) {
    try {
        const { inputLanguage, outputLanguage, inputCode } = await req.json();
        const stream = await OpenAIStream(
            inputLanguage,
            outputLanguage,
            inputCode
        );
        return new Response(stream);
    } catch (error) {
        console.log(error.toString());
    }
}
