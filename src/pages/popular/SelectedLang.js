import { memo } from "react";

const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

const SelectedLang = memo(({ selectedLang, updateLang, loading }) => {
  console.log(loading)
  return(
    <ul className='languages'>
      {languages.map((language, index) => (
        <li
          key={index}
          style={language === selectedLang ? { color: '#d0021b' } : null}
          onClick={loading ? undefined : updateLang}
        >
          {language}
        </li>
        )
      )}
    </ul>
  )
})


export default SelectedLang
