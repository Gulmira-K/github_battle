import { memo } from "react";

const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

const SelectedLang = memo(({selectedLang, updateLang}) => (
    <ul className='languages'>
      {languages.map((language, index) => (
        <li
          key={index}
          style={language === selectedLang ? { color: '#d0021b' } : null}
          onClick={updateLang}>
          {language}
        </li>
        )
      )}
    </ul>
  )
)


export default SelectedLang
