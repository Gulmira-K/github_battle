import React, { useState, useEffect } from "react";
import { getPopularRepos } from "../../api/getPopularRepos";
import Loader from "react-loader-spinner";
import SelectedLang from "./SelectedLang";
import ReposGrid from "./ReposGrid";

const Popular = () => {
  const [selectedLang, setSelectedLang] = useState('All'),
    [repos, setRepos] = useState(null),
    [loading, setLoading] = useState(false);
  
  const handleLoading = () => {
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }

  const updateLang = (e) => {
    if (selectedLang !== e.target.innerText) {
      setSelectedLang(e.target.innerText);
      setRepos(null);
      handleLoading();
      getPopularReposHandler(selectedLang);
    }
  }

  const getPopularReposHandler = (selectedLang) => {
    getPopularRepos(selectedLang)
      .then(repos => setRepos(repos))
      .catch(error => console.error(error));
  }

  useEffect(() => {
    handleLoading();
    getPopularReposHandler(selectedLang);
  }, [selectedLang])

  return (
    <React.Fragment>
      <SelectedLang
        selectedLang={selectedLang}
        updateLang={updateLang}
        loading={loading}
      />
      {
        !loading ?
          <ReposGrid repos={repos} /> :
          <div className='loader'>
            <Loader
              type="TailSpin"
              color="#d0021aaf"
              height={100}
              width={100}
              timeout={1000} //3 secs
            />
          </div>
      }
    </React.Fragment>
  )
}

export default Popular
