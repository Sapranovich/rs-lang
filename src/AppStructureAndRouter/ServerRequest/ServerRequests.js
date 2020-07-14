const token = localStorage.getItem('token');
const userId = localStorage.getItem('userId');
const baseUrl = 'https://afternoon-falls-25894.herokuapp.com'

async function signInRequest(userData){
  const rawResponse = await fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  if(rawResponse.status === 200){
    const content = await rawResponse.json();
    localStorage.setItem('token', content.token);
    localStorage.setItem('userId', content.userId);
    return content;
  }else{ 
    throw new Error(rawResponse.status);
  }
}

async function signUpRequest(userData){
  const rawResponse = await fetch(`${baseUrl}/users`, {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(userData)
   });
   if(rawResponse.status === 200){
    return userData;
   }else{ 
    throw new Error(rawResponse.status);
   }
}

const startSettingsUser = async () => {
  const rawResponse = await fetch(`${baseUrl}/users/${userId}/settings`, {
    method: 'PUT',
    withCredentials: true,
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "wordsPerDay": 20,
        "optional": {
          "maxWordsPerDay": 40,
          "level": 0,
          "page": 0,
          "wordsLearntPerPage": 0,
          "hints": {
            "meaningHint": true,
            "translationHint": true,
            "exampleHint": true,
            "soundHint": false,
            "imageHint": false,
            "transcriptionHint": false
        }
      }
    })
  });
  const content = await rawResponse.json();
  return content;
}

 const addSettingsUser = async (settingsData) => {
  const rawResponse = await fetch(`${baseUrl}/users/${userId}/settings`, {
    method: 'PUT',
    withCredentials: true,
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(settingsData)
  });
  const content = await rawResponse.json();
  return content;
}

const getSettingsUser = async () => {
  const rawResponse = await fetch(`${baseUrl}/users/${userId}/settings`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'accept': 'application/json',
        },
      });
      const content = await rawResponse.json();
      return content;
}

const updateStatisticsUser = async (statisticsData) => {
  const rawResponse = await fetch(`${baseUrl}/users/${userId}/statistics`, {
    method: 'PUT',
    withCredentials: true,
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(statisticsData)
  });
  const content = await rawResponse.json();
  return content;
}

const getStatisticsUser = async () => {
  const rawResponse = await fetch(`${baseUrl}/users/${userId}/statistics`, {
    method: 'GET',
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
    },
  });
  const content = await rawResponse.json();
  return content;
}


const getNewWords = async (page, group) => {
  const url = `${baseUrl}/words?page=${page}&group=${group}`;
  const rawResponse = await fetch(url);
  const content = await rawResponse.json();
  return content;
}

const getUserWord = async (wordId) => {
  const rawResponse = await fetch(`${baseUrl}/users/${userId}/words/${wordId}`, {
      method: 'GET',
      withCredentials: true,
      headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
      }
  });
  if (rawResponse.status === 200) {
      const content = await rawResponse.json();
      return content;
  } else if (rawResponse.status === 404){
      return false;
  } else{ 
      throw new Error(rawResponse.status);
    }
};



const createUserWord = async (wordId, wordData) => {
  const rawResponse = await fetch(`${baseUrl}/users/${userId}/words/${wordId}`, {
    method: 'POST',
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(wordData)
  });
  const content = await rawResponse.json();
  return content;
};

const updateUserWord = async (wordId, wordData) => {
  const rawResponse = await fetch(`${baseUrl}/users/${userId}/words/${wordId}`, {
    method: 'PUT',
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(wordData)
  });
  const content = await rawResponse.json();
  return content;
};

const getAllUserWords = async () => {
  const rawResponse = await fetch(`${baseUrl}/users/${userId}/words/`, {
    method: 'GET',
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
    }
  });
  const content = await rawResponse.json();
  return content;
};

const loginUser = async user => {
  const rawResponse = await fetch(`${baseUrl}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const content = await rawResponse.json();
  return content;
};

export {loginUser, signInRequest, signUpRequest, startSettingsUser, addSettingsUser, getSettingsUser, updateStatisticsUser, getStatisticsUser, getNewWords, getUserWord, getAllUserWords, createUserWord, updateUserWord}