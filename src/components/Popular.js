import { useState } from "react";
import { getPopularRepos } from "../api/getPopularRepos";
import SelectedLang from "./SelectedLang";

const Popular = () => {
  const [selectedLang, setSelectedLang] = useState('All');
  const [repos, setRepos] = useState(null)

  const updateLang = (e) => {
    if (selectedLang !== e.target.innerText) {
      setSelectedLang(e.target.innerText);
    }
  }

  const getPopularReposHandler = (selectedLang) => {
    getPopularRepos(selectedLang)
      .then(repos => console.log(repos))
      .catch(error => console.error(error))
  }

  return (
    <SelectedLang
      selectedLang={selectedLang}
      updateLang={updateLang}
    />
  )
}

export default Popular
