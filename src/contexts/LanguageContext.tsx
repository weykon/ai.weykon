import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    text: (texts: { en: string, zh: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const detectLanguage = (): Language => {
        const browserLang = navigator.language.toLowerCase();
        const isChinese = browserLang.includes('zh');
        return isChinese ? 'zh' : 'en';
    };

    const [language, setLanguage] = useState<Language>('zh');

    useEffect(() => {
        setLanguage(detectLanguage());
    }, []);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'zh' ? 'en' : 'zh');
    };

    const text = (texts: { en: string, zh: string }): string => {
        return texts[language] || '';
    };

    return (
        <LanguageContext.Provider value={{
            language,
            toggleLanguage,
            text
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
