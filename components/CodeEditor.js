// Importing required modules
import { StreamLanguage } from '@codemirror/language';
import { go } from '@codemirror/legacy-modes/mode/go';
import CodeMirror from '@uiw/react-codemirror';
import { useEffect, useState } from 'react';
import { eclipse } from "@uiw/codemirror-theme-eclipse";

// Defining the CodeEditor component
const CodeEditor = ({ code = '', editable = false, setCode, language }) => {

  // Setting the initial value of copyText state to 'Copy'
  const [copyText, setCopyText] = useState('Copy');

  // Resetting the copyText state to 'Copy' after 2 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopyText('Copy');
    }, 2000);
    return () => clearTimeout(timeout);
  }, [copyText]);

  // Configuration options for CodeMirror component
  const config = {
    lineNumbers: true,
    mode: language, // Programming language mode
    indentUnit: 4, // Number of spaces per indent
    smartIndent: true, // Smart indentation
    indentWithTabs: false, // Use spaces instead of tabs
    electricChars: true, // Automatically add closing brackets, quotes, etc.
    autoCloseBrackets: true, // Automatically close brackets
    matchBrackets: true, // Highlight matching brackets
    extraKeys: { 'Ctrl-Space': 'autocomplete' }, // Shortcut for autocomplete
    // theme: eclipse, // Editor theme
    indent: {
      // Auto indentation based on the programming language
      // Set `true` to use default indentation behavior, or provide a function to customize indentation
      auto: true,
    },
  };

  // Rendering the CodeEditor component
  return (
    <div className="relative border-2 border-t-0 border-black rounded-b-lg">
      {/* Copy button */}
      <button
        className="absolute right-1 top-1 z-10 rounded bg-[#C53AAE] p-1 text-xs text-white hover:bg-[#2D2E3A] active:bg-[#2D2E3A] "
        onClick={() => {
          navigator.clipboard.writeText(code);
          setCopyText('Copied!');
        }}
      >
        {copyText}
      </button>

      {/* CodeMirror editor */}
      <CodeMirror
          editable={editable}
          value={code}
          minHeight="300px"
          maxHeight="300px"
          extensions={[StreamLanguage.define(go)]} // Initializing the CodeMirror editor with Go programming language support
          config={config}
          onChange={(value) => setCode(value)}
          className="rounded-b-xl"
      />
    </div>
  );
};

// Exporting the CodeEditor component as the default export
export default CodeEditor;
