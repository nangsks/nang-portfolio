

const language = [
    {code: 'en', lang: 'English'},
    {code: 'es', lang: 'Spanish'},
    {code: 'kh', lang: 'Khmer'},
    {code: 'ch', lang: 'Chinese'},
];


const LanguageSelector = () => {
    const changeLanguage =(lng) =>{
        // eslint-disable-next-line no-undef
        i18n.changeLanguage(lng);
    }
    return <div>
        {
            language.map(({ lng }) => (
                <button key={lng.code} onClick={() => changeLanguage()}>
                    {lng.lang}
                </button>
            ))
        }
    </div>
};

export default LanguageSelector;