

const language = [
    {code: 'en', lang: 'English'},
    {code: 'es', lang: 'Spanish'},
    {code: 'kh', lang: 'Khmer'},
    {code: 'ch', lang: 'Chinese'},
];

const changeLanguage =() =>{}
const LanguageSelector = () => {
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