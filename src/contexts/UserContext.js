import React, {createContext, useContext, useEffect, useState} from 'react';

const UserContext = createContext();

export const UserProvider = props => {
  const [levels, setLevels] = useState([
    {
      name: 'starter',
      label: 'Starter',
    },
    {
      name: 'expert',
      label: 'Expert',
    },
    {
      name: 'champion',
      label: 'Champion',
    },
  ]);
  const [userLevel, setUserLevel] = useState({});
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [avatar, setAvatar] = useState('');
  const [rulesFile, setRulesFile] = useState('');
  const [knowledgeCount, setKnowledgeCount] = useState(0);
  const [testCount, setTestCount] = useState(0);

  return (
    <UserContext.Provider
      value={{
        levels,
        userLevel,
        setUserLevel,
        name,
        setName,
        surname,
        setSurname,
        avatar,
        setAvatar,
        rulesFile,
        setRulesFile,
        knowledgeCount,
        setKnowledgeCount,
        testCount,
        setTestCount,
      }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
