'use client'
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
// import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-jsx';
import { useEffect } from 'react';

export default function CodeBlock({ code, language }: {
     code: string, 
     language: string
    }) {
        
        useEffect(() => {
            Prism.highlightAll();
        }, [code]);

        return code ? (
            <>
                <pre style={{ fontSize: '0.9rem' }}>
                    <code className={`language-${language}`}>{code}</code>
                </pre>
            </>
        ) : null;
};
