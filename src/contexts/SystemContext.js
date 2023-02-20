import React, {createContext, useContext, useEffect, useState} from 'react';
import icons from '../assets/icons';

const SystemContext = createContext();

export const SystemProvider = props => {
  const [systemList, setSystemList] = useState([
    {
      image: icons.mainMenu.wandeColor,
      text: 'Wandsysteme - Schachtwände -Vorsatzschalen - Trockenputz',
      value: 'wande',
      optionList: [
        {
          label: 'Metallständerwände',
          value: 'metallstanderwande',
          optionList: [
            {
              label: 'Standard',
              value: 'standard',
              chosen: false,
            },
            {
              label: 'Feuchtraum',
              value: 'feuchtraum',
              chosen: false,
            },
            {
              label: 'Nassraum',
              value: 'nassraum',
              chosen: false,
            },
            {
              label: 'Strahlenschutz',
              value: 'strahlenschutz',
              chosen: false,
            },
            {
              label: 'Einbruchhemmung',
              value: 'einbruchhemmung',
              chosen: false,
            },
          ],
        },
        {
          label:
            '"Brandwände" Nichtragende raumabschliessende Wände mit prüftechnisch nachgewiesener Stoßbeanspruchung',
          value: 'brandwande',
          optionList: [
            {
              label: 'Standard',
              value: 'standard',
              chosen: false,
            },
            {
              label: 'Feuchtraum',
              value: 'feuchtraum',
              chosen: false,
            },
          ],
        },
        {
          label: 'Holzständerwände',
          value: 'holzstanderwande',
          optionList: [
            {
              label: 'Standard',
              value: 'standard',
              chosen: false,
            },
            {
              label: 'Feuchtraum',
              value: 'feuchtraum',
              chosen: false,
            },
            {
              label: 'Außenwand',
              value: 'ausenwand',
              chosen: false,
            },
          ],
        },
        {
          label: 'Schachtwände/Vorsatzschalen',
          value: 'schachtwande-vorsatzschalen',
          optionList: [
            {
              label: 'Standard',
              value: 'standard',
              chosen: false,
            },
            {
              label: 'Feuchtraum',
              value: 'feuchtraum',
              chosen: false,
            },
            {
              label: 'Nassraum',
              value: 'nassraum',
              chosen: false,
            },
            {
              label: 'Strahlenschutz',
              value: 'strahlenschutz',
              chosen: false,
            },
          ],
        },
        {
          label: 'Trockenputz',
          value: 'trockenputz',
          optionList: [
            {
              label: 'Standard',
              value: 'standard',
              chosen: false,
            },
            {
              label: 'Feuchtraum',
              value: 'feuchtraum',
              chosen: false,
            },
            {
              label: 'Nassraum',
              value: 'nassraum',
              chosen: false,
            },
          ],
        },
      ],
    },
    {
      image: icons.mainMenu.deckenColor,
      text: 'Deckensysteme',
      value: 'decken',
      optionList: [
        {
          label: 'Freitragende Unterdecken',
          value: 'freitragende-unterdecken',
          optionList: [
            {
              label: 'Standard',
              value: 'standard',
              chosen: false,
            },
            {
              label: 'Feuchtraum',
              value: 'feuchtraum',
              chosen: false,
            },
          ],
        },
        {
          label: 'Unterdecken und Deckenbekleidungen',
          value: 'unterdecken-und-deckenbekleidungen',
          optionList: [
            {
              label: 'Standard',
              value: 'standard',
              chosen: false,
            },
            {
              label: 'Feuchtraum',
              value: 'feuchtraum',
              chosen: false,
            },
            {
              label: 'Nassraum',
              value: 'nassraum',
              chosen: false,
            },
            {
              label: 'Strahlenschutz',
              value: 'strahlenschutz',
              chosen: false,
            },
            {
              label: 'Außendecken',
              value: 'ausendecken',
              chosen: false,
            },
          ],
        },
        {
          label: 'Ertüchtigung Massivdecken',
          value: 'ertuchtigung-massivdecken',
          optionList: [
            {
              label: 'Standard',
              value: 'standard',
              chosen: false,
            },
            {
              label: 'Feuchtraum',
              value: 'feuchtraum',
              chosen: false,
            },
            {
              label: 'Nassraum',
              value: 'nassraum',
              chosen: false,
            },
          ],
        },
        {
          label: 'Ertüchtigung Holzbalkendecken',
          value: 'ertuchtigung-holzbalkendecken',
          optionList: [
            {
              label: 'Standard',
              value: 'standard',
              chosen: false,
            },
            {
              label: 'Feuchtraum',
              value: 'feuchtraum',
              chosen: false,
            },
          ],
        },
        {
          label: 'Ertüchtigung Trapezblechdecken',
          value: 'trapezblechdecken',
          optionList: [
            {
              label: 'Standard',
              value: 'standard',
              chosen: false,
            },
            {
              label: 'Feuchtraum',
              value: 'feuchtraum',
              chosen: false,
            },
          ],
        },
      ],
    },
    {
      image: icons.mainMenu.dacherColor,
      text: 'Dachsysteme',
      value: 'dacher',
      optionList: [
        {
          label: 'Holzbalkendächer',
          value: 'dacher',
          optionList: [
            {
              label: 'Standard',
              value: 'standard',
              chosen: false,
            },
            {
              label: 'Feuchtraum',
              value: 'feuchtraum',
              chosen: false,
            },
          ],
        },
        {
          label: 'Trapezblechdächer Ertüchtigung Trapezblechdächer',
          value: 'trapezblechdacher-ertuchtigung-trapezblechdacher',
          optionList: [
            {
              label: 'Standard',
              value: 'standard',
              chosen: false,
            },
            {
              label: 'Feuchtraum',
              value: 'feuchtraum',
              chosen: false,
            },
          ],
        },
      ],
    },
    {
      image: icons.mainMenu.stutzenColor,
      text: 'Stützen - und Trägerbekleidungen',
      value: 'stutzentrager',
      optionList: [
        {
          label: 'Stahl',
          value: 'stahl',
          optionList: [
            {
              label: 'Stahlstütze',
              value: 'stahlstutze',
              chosen: false,
            },
            {
              label: 'Stahlträger',
              value: 'stahltrager',
              chosen: false,
            },
          ],
        },
        {
          label: 'Holz',
          value: 'holz',
          optionList: [
            {
              label: 'Holzstütze',
              value: 'holzstutze',
              chosen: false,
            },
            {
              label: 'Holzbalken',
              value: 'holzbalken',
              chosen: false,
            },
          ],
        },
      ],
    },
    {
      image: icons.mainMenu.kabelkanaleColor,
      text: 'Kabelkanäle',
      value: 'kabelkanale',
      optionList: [
        {
          label: 'E-Kanäle',
          value: 'e-kanale',
        },
        {
          label: 'I-Kanäle',
          value: 'i-kanale',
        },
      ],
    },
  ]);
  const [activeSystemID, setActiveSystemID] = useState();

  return (
    <SystemContext.Provider
      value={{systemList, setSystemList, activeSystemID, setActiveSystemID}}>
      {props.children}
    </SystemContext.Provider>
  );
};

export default SystemContext;
