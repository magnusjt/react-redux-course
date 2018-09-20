### Bruk redux og react devtools

- Sjekk at component får inn riktig state med react devtools
- Sjekk at redux state er riktig etter hver action og ved start med redux devtools


### En reducer trenger en initial state

- Vi starter med initial state: counter = 0
- State (og dermed initial state) kan også være et objekt, array, string, etc.


### Reducer må være immutable. Du får ikke lov til å endre på forrige state.

- Bruk spread operator for å gjøre en shallow-copy av state:

const newState = {...oldState, someProperty: newValue}

- Alternativ uten spread operator:

const newState = Object.assign({}, oldState, {someProperty: newValue})


### Et input felt må ha en value property og en onChange funksjon

- Hvor lagrer du input feltets state?
-- Alternativ 1: Lagre i redux. Trenger en action som kjører på onChange, og oppdatert reducer for å lagre verdien
-- Alternativ 2: Lagre i component. Increment/decrement actions sender med verdien som ligger lagret i component state.
                 For å lagre state i component må du konvertere fra stateless functional component til stateful component (Bruk: class App extends Component)

- Hva er mest riktig av alternativ 1 og alternativ 2?
