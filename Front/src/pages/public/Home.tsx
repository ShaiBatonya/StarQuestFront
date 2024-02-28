import React from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageButtonProps {
    language: string;
    onClick: () => void;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({ language, onClick }) => {
    return (
        <button
            style={{
                margin: '0.5rem',
                padding: '0.75rem',
                fontSize: '1rem',
                cursor: 'pointer',
            }}
            value={language}
            onClick={onClick}
        >
            {language}
        </button>
    );
};

const Home: React.FC = () => {
    const { t, i18n } = useTranslation(['home']);

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
        >
            <div style={{ marginBottom: '1rem' }}>
                <LanguageButton language="en" onClick={() => changeLanguage('en')} />
                <LanguageButton language="de" onClick={() => changeLanguage('de')} />
            </div>
            <div style={{ textAlign: 'center' }}>
                <h1>{t('title')}</h1>
                <h3>{t('subtitle')}</h3>
            </div>
        </div>
    );
};

export default Home;
