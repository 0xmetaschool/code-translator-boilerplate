// Importing the necessary components from their respective files
import CodeEditor from "./CodeEditor";
import LanguageSelect from "./LanguageSelect";

// Defining the CodeWindow component and passing in props
const CodeWindow = ({code, setCode, loading, handleLanguageChange, language}) => {
    return (
        // Rendering the component with necessary props
        <div className="mx-20 my-5 w-2/5 ">
            {/*Rendering the LanguageSelect component with necessary props*/}
            <LanguageSelect handleLanguageChange={handleLanguageChange} language={language} disabled={loading} />
            {/*Rendering the CodeEditor component with necessary props*/}
            <CodeEditor code={code} setCode={setCode} editable={!loading} />
        </div>
    );
}

// Exporting the CodeWindow component as the default export
export default CodeWindow;
